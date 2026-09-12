#!/usr/bin/env node
// Lints the skill catalog. No dependencies, no config. Run: node scripts/check.mjs
// Checks what the spec validator does not: routing collisions, reference hygiene, budgets, and
// state only one file knows about. Errors must stay at zero. Warnings need not: that last pass
// reports the open gaps recorded in docs/DESIGN.md.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, basename } from "node:path";

const ROOTS = ["skills", "addons"];
const MAX_DESC = 1024;
const MAX_LINES = 500;
const MAX_TOKENS = 5000; // spec recommendation; approximated at 4 chars/token
const STOPWORDS = new Set(
  `a an and are as at be before by can for from has have in into is it its not of on one only or
   other our that the their then this to use used uses user using when where which while with
   without you your work working skill skills triggers trigger`.split(/\s+/)
);

let errors = 0;
let warnings = 0;
const fail = (m) => { console.error(`  ERROR  ${m}`); errors++; };
const warn = (m) => { console.warn(`  WARN   ${m}`); warnings++; };

function findSkills(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (!statSync(p).isDirectory()) continue;
    try {
      statSync(join(p, "SKILL.md"));
      out.push(p);
    } catch {
      findSkills(p, out);
    }
  }
  return out;
}

function parse(path) {
  const raw = readFileSync(join(path, "SKILL.md"), "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { path, raw, error: "no YAML frontmatter" };
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z-]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return { path, raw, fm, body: m[2] };
}

const skills = ROOTS.flatMap((r) => { try { return findSkills(r); } catch { return []; } })
  .map(parse);

if (!skills.length) { console.error("No skills found."); process.exit(1); }

// --- per-skill checks
for (const s of skills) {
  const label = relative(".", s.path).replace(/\\/g, "/");
  console.log(`\n${label}`);
  if (s.error) { fail(s.error); continue; }

  const name = s.fm.name;
  if (!name) fail("frontmatter is missing `name`");
  else {
    if (name !== basename(s.path)) fail(`name "${name}" does not match directory "${basename(s.path)}"`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) fail(`name "${name}" breaks the spec charset`);
    if (name.length > 64) fail("name exceeds 64 characters");
  }

  const desc = s.fm.description;
  if (!desc) fail("frontmatter is missing `description`");
  else {
    if (desc.length > MAX_DESC) fail(`description is ${desc.length} chars, over ${MAX_DESC}`);
    if (desc.length < 60) warn(`description is only ${desc.length} chars — too thin to route on`);
    if (!/\buse\b|\btrigger/i.test(desc)) warn("description does not say when to use the skill");
  }

  const lines = s.raw.split(/\r?\n/).length;
  const tokens = Math.round(s.raw.length / 4);
  if (lines > MAX_LINES) fail(`SKILL.md is ${lines} lines, over ${MAX_LINES}`);
  if (tokens > MAX_TOKENS) fail(`SKILL.md is ~${tokens} tokens, over ${MAX_TOKENS}`);
  if (tokens > MAX_TOKENS * 0.6) warn(`~${tokens} tokens — consider moving detail to references/`);

  // references: every file linked, every link resolves, nothing nested deeper than one level
  for (const sub of ["references", "examples", "assets", "scripts"]) {
    let files = [];
    try { files = readdirSync(join(s.path, sub), { recursive: true }); } catch { continue; }
    for (const f of files) {
      const rel = `${sub}/${String(f).replace(/\\/g, "/")}`;
      if (statSync(join(s.path, rel)).isDirectory()) { fail(`${rel} nests deeper than one level`); continue; }
      if (!s.body.includes(rel)) warn(`${rel} is never referenced from SKILL.md`);
    }
  }
  for (const link of s.body.match(/(?:references|examples|assets|scripts)\/[\w.-]+/g) ?? []) {
    try { statSync(join(s.path, link)); }
    catch { fail(`SKILL.md points at ${link}, which does not exist`); }
  }
  if (/\breferences\//.test(s.body) && !/load/i.test(s.body)) {
    warn("references exist but no load condition is stated");
  }
  if (errors === 0) console.log("  ok");
}

// --- catalog-wide: routing collisions
const words = (d) =>
  new Set((d ?? "").toLowerCase().match(/[a-z][a-z-]{3,}/g)?.filter((w) => !STOPWORDS.has(w)) ?? []);
console.log("\nrouting");
const seen = new Map();
for (const s of skills) {
  if (seen.has(s.fm?.name)) fail(`duplicate skill name "${s.fm.name}"`);
  seen.set(s.fm?.name, s);
}
for (let i = 0; i < skills.length; i++) {
  for (let j = i + 1; j < skills.length; j++) {
    const a = words(skills[i].fm?.description), b = words(skills[j].fm?.description);
    const shared = [...a].filter((w) => b.has(w));
    const overlap = shared.length / Math.min(a.size || 1, b.size || 1);
    if (overlap > 0.2) {
      warn(`${skills[i].fm?.name} vs ${skills[j].fm?.name}: ${Math.round(overlap * 100)}% shared trigger vocabulary — ${shared.slice(0, 8).join(", ")}`);
    }
  }
}

// --- catalog-wide: identical literal trigger phrases ("Triggers on a, b, or c")
const phrases = (d) => {
  const m = (d ?? "").match(/triggers? on\s+([^.]+)/i);
  if (!m) return [];
  return m[1].split(/,| or /i).map((p) => p.trim().toLowerCase().replace(/^(a|an|the) /, ""))
    .filter((p) => p.length > 2);
};
const owners = new Map();
for (const s of skills) {
  for (const p of phrases(s.fm?.description)) {
    if (!owners.has(p)) owners.set(p, []);
    owners.get(p).push(s.fm?.name);
  }
}
for (const [phrase, names] of owners) {
  if (names.length > 1) fail(`trigger phrase "${phrase}" is claimed by ${names.join(" and ")}`);
}

// --- catalog-wide: shared state with only one side
// Audits kept finding state with only one side — a path or a status value that something reads
// and nothing writes, or the reverse. This pass does NOT determine that: it reports what only
// one file mentions, which is a weak proxy. Prose heuristics, so they never fail the build, and
// they miss any lifecycle declared in prose instead of as an enumeration.
function markdownUnder(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { recursive: true })) {
    const rel = String(entry).replace(/\\/g, "/");
    if (!rel.endsWith(".md")) continue;
    const p = join(dir, rel);
    if (statSync(p).isDirectory()) continue;
    out.push({ file: `${relative(".", dir).replace(/\\/g, "/")}/${rel}`, text: readFileSync(p, "utf8") });
  }
  return out;
}
const corpus = skills.flatMap((s) => markdownUnder(s.path));
console.log("\nshared state");

// an artifact path only one file has ever heard of has a reader or a writer, never both.
// Naming a path's parent counts as knowing it — readers often cite the folder (`decisions/`) —
// except for the two generic containers every skill names as a location convention, where it
// would mean any mention of `context/changes/<id>/` vouched for every file inside it.
const GENERIC = new Set(["context/changes/<>/", "context/foundation/"]);
const paths = (text) => (text.match(/context\/[A-Za-z0-9_<>/.-]+/g) ?? [])
  .map((h) => h.replace(/[.,)`]+$/, "").replace(/<[^>]+>/g, "<>"));
const sites = new Map();
for (const { text } of corpus) {
  for (const p of paths(text)) if (/\.md$/.test(p)) sites.set(p, new Set());
}
for (const { file, text } of corpus) {
  const known = new Set(paths(text));
  for (const p of sites.keys()) {
    const parent = p.slice(0, p.lastIndexOf("/") + 1);
    if (known.has(p) || (!GENERIC.has(parent) && known.has(parent))) sites.get(p).add(file);
  }
}
for (const [p, files] of [...sites].sort()) {
  if (files.size === 1) warn(`${p} is mentioned only in ${[...files][0]} — check it has both a reader and a writer`);
}

// a status value nothing outside its own declaration ever names has no writer or no reader
for (const { file, text } of corpus) {
  for (const line of text.split(/\r?\n/)) {
    const decl = line.match(
      /(?:\*\*Status\*\*|`?status`?)\s*(?::|\bis\b)\s*(?:`([^`\n]*\|[^`\n]*)`|([a-z][^`\n]*\|[^\n]*?)$)/i
    );
    if (!decl) continue;
    const values = (decl[1] ?? decl[2]).split("|")
      .map((v) => v.replace(/\([^)]*\)/g, "").trim())
      .filter((v) => /^[a-z]+( [a-z]+)?$/.test(v));
    if (values.length < 2) continue;
    for (const v of values) {
      const elsewhere = corpus.some((c) => c.file !== file && new RegExp("`" + v + "`").test(c.text));
      if (!elsewhere) warn(`status value "${v}" (${file}) is named in no other file — check it has a writer and a reader`);
    }
  }
}
if (warnings === 0 && errors === 0) console.log("  ok");

console.log(`\n${skills.length} skills · ${errors} errors · ${warnings} warnings`);
process.exit(errors ? 1 : 0);
