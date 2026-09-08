#!/usr/bin/env node
// Lints the skill catalog. No dependencies, no config. Run: node scripts/check.mjs
// Checks what the spec validator does not: routing collisions, reference hygiene, and budgets.

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
    if (overlap > 0.35) {
      warn(`${skills[i].fm?.name} vs ${skills[j].fm?.name}: ${Math.round(overlap * 100)}% shared trigger vocabulary — ${shared.slice(0, 8).join(", ")}`);
    }
  }
}
if (warnings === 0 && errors === 0) console.log("  ok");

console.log(`\n${skills.length} skills · ${errors} errors · ${warnings} warnings`);
process.exit(errors ? 1 : 0);
