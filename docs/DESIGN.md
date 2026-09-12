<!--
  Rationale for maintainers. Not a skill, deliberately kept in docs/ so it never enters an
  agent's context.
-->

# Why this shape

Skillforge v1 had 21 skills, an always-on gateway hook injecting ~600 words every session and
after every compaction, five subagent role files, and three plugin manifests. v2 is 14 skills
and a ~70-line always-on file. This is the reasoning, so it does not get re-added by accident.

## What the research says

- The average public skill is ~1,900 tokens, but the top 1% exceed 100,000 — a single
  unoptimized skill can consume the whole context budget.
- ~46% of published skills are duplicates or near-duplicates; 44% have routing descriptions too
  thin to select on.
- Only ~38% of typical skill body content is actionable rules. The rest is background that
  belongs in docs, or examples that belong in `references/`.
- Packing in more similar skills makes routing *worse*, not better: attention disperses and
  near-identical descriptions compete.

Conclusion: the scarce resource is not instruction quality, it is routing clarity. Every skill
added makes every other skill slightly harder to select.

## The rules that follow from it

**Judgment, not mechanics.** Judgment is portable across hosts and stays true; mechanics differ
per host and rot. A skill that reimplements what the host automates fights the tool and breaks
when the tool changes.

**Invariants cannot be skills.** Anything that must hold on *every* response has to be always-on,
because routing is a choice the model makes. This is why `lean-coding`, `lean-output`, and
`verification-before-completion` are sections of `AGENTS.md` rather than skills.

**Self-sufficiency over composition.** v1's skills opened by invoking a gateway and referencing
siblings. When a client repo gets two of fourteen skills copied in by hand, those references dangle.
Cross-references are suggestions, never dependencies.

**Artifacts are templates.** `roadmap`, `stack`, and `to-prd` were skills competing with `shape`
for the same trigger vocabulary. As templates in `shape/references/` they cost nothing until
loaded, and a new document type no longer means a new routing competitor.

## What was deliberately dropped

| Dropped | Why |
|---|---|
| Gateway/router skill + session hook | Most hosts already inject every skill's name and description. `AGENTS.md` carries the routing rule in two lines and is read everywhere |
| `review` rebuilt around a rubric | Hosts have review commands; the mechanics are theirs. The severity model, the omission rule and the findings format are the part worth owning |
| `subagent-driven-development`, `implement` | Host orchestration (agents, workflows) plus `phasing`'s checklist cover it. The briefing judgment lives in `delegating` |
| `research` | Folded into `phasing`, where the findings are actually used |
| `critique` | `grilling` stress-tests before a decision; `review` judges after work. A third interrogation skill only split the routing |
| Subagent role files | Host-specific. The brief contract in `delegating` is the portable part |
| An eval framework | Worth having, but it is a second project. `scripts/check.mjs` buys the routing-collision check, which is the failure mode that actually bites |

## The always-on file

Modeled on the Karpathy guidelines (four principles: think before coding, simplicity first,
surgical changes, goal-driven execution) plus the operational rules a personal setup needs and
that ruleset omits: git boundaries, file safety, output discipline, and how to handle
disagreement.

Two deliberate departures from that source:

1. It does **not** say "if something is unclear, stop and ask." Over-asking is now a more common
   failure than under-asking. The rule is: never ask what you can look up or what would not
   change the work, but never silently pick between materially different readings either.
2. Environment facts (OS, MCP servers, local tooling) are **not** in this file. The repo installs
   on several machines; machine facts belong to the machine's own config layer.

## The execution skill

The skill reserved here as `development-flow` landed in v2.2 as `skills/work/executing`. Two
departures from the reserved design:

It is in `work/`, not `dev/`. The gate, the ambiguity ladder and the loop-closing are the same
whether the change is code or not, and a `dev/` placement would have left non-code work with no
execution discipline at all.

Its core is the **gate**, not the sequence. Sequencing is orchestration, which hosts already do
and which would have put it in direct trigger competition with `phasing`. What no host supplies is
the refusal to start on a hollow artifact, the ladder that resolves ambiguity from the written
record instead of from inference, and the rule that the record gets updated when work lands.
The sequence is present, but each step is a gate with named evidence, not a dispatch table.

This is still why `tdd`, `debugging`, and `review` are independent tools. `executing` names the
gate each step has to pass and defers to whichever skill is installed for it; it does not call
them and does not assume they exist.

The ladder is what makes `context/foundation/vision.md` load-bearing rather than decorative: it
is rung 5, the tie-breaker between goods already agreed, and it is explicitly barred from
authorising new scope.

### Why unattended is declared, not detected

The mode has to be switched on from outside — by the invocation, or by an `Execution mode:
unattended` line in the always-on file — and everything else, ambiguity included, is attended.
Letting the agent detect it was the original draft and it was wrong in the dangerous direction:
an agent that concludes from a missing question tool that nobody is watching removes the owner
from a run the owner was in fact watching, and the provisional-call machinery then fires on
supervised work. A wrongly-attended run costs one unnecessary stop. A wrongly-unattended run
spends the owner's authority without asking.

### Why the unattended rule is not a confidence threshold

The obvious design for an executor with no reachable owner is "decide when you are N% sure".
It was rejected. A self-assigned probability cannot be audited after the run, and models are
poorly calibrated at producing one, so the threshold would move to fit whatever the model
already wanted to do. The two conditions that replaced it — **grounded** (name the rung, quote
the line) and **bounded** (being wrong costs no more than redoing this change) — are both
checkable by someone reading the run afterwards, which is the only reader who matters.

The asymmetry is deliberate. The ladder gains an autonomous path; the gate does not. A hollow
artifact is the one input inference cannot repair, and unattended is exactly when nobody is
watching for it. Parking rather than halting comes from the same place: a run that stops dead on
one unanswerable question has spent its budget on nothing.

## Why `plan` became `phasing`

The name lost to the hosts. Plan mode, `/plan`, `EnterPlanMode`, a `Plan` subagent type — the
word is claimed by the harness in most places this pack runs, and a skill competing with a
built-in mode for the same word loses every time, including in the user's own head. `phasing`
matches the gerund set, names the actual unit of value, and collides with nothing.

`plan-work` was the obvious alternative and lost on placement: the skill lives at `skills/work/`,
where `work/plan-work` reads as a stutter. The artifact keeps its name — the skill is `phasing`,
the file it writes is still `context/changes/<id>/plan.md` — because the artifact never had the
collision problem, and renaming it would break every path already written into other skills.

The description still triggers on the word "plan". No other skill in the pack claims it, and it
is what people actually type.

## Settled

- **`context/` is obligatory.** Briefs, plans, and decision records go into the repo under
  `context/`, and the only override is the user naming another location. The earlier
  ask-first-then-fall-back-to-temp behavior destroyed the point of both skills: an artifact
  outside the repo is not a shared record, and a plan nobody else can find cannot be resumed.
- **Git is approval-gated, not forbidden.** Running a commit, push, or history rewrite needs a
  go-ahead; preparing them — the commit split, the message, the PR description, the branch name
  — is expected work.
- **No estimation, for now.** `phasing` still refuses to estimate. The owner is neutral on it, so
  it waits for the harvest rule: if "how long" bites in real work, that is when it earns a home.

## Settled, not yet built

- **`questions.md` becomes a real artifact type, written by `shape` as well as `executing`.** An
  audit found the gate reads that register on every run while only the unattended path ever
  writes it, so an attended first run reads an absent file and passes — while the brief's
  `## Open` section says in plain text that a blocking question is unanswered. The decision is
  that shaping mints the register at brief time, so `q` ids exist from the start and both the
  gate and ladder rung 7 have one source instead of two. That needs a `shape` template, the
  brief's `## Open` section retired into it, and the gate reworded. None of it is built yet.
- Once that lands, `calls.md` still has no reader: a second unattended run over the same change
  can decide a fork the opposite way, with both entries sitting unreconciled. Same register
  question, one step later.

## The shared-state check

`scripts/check.mjs` gained a pass over the files under `skills/` that reports `context/` paths
and status values only one file mentions. It exists because cold-context audits kept finding
state with one side missing — something read and never written, or the reverse — and four of the
second audit's defects were introduced by the fixes for the first.

**It does not actually determine reader-versus-writer**; the single-file count is a weak proxy.
It stays silent on any lifecycle declared in prose rather than as an enumeration, which includes
the one it was written for. A third audit judged it net-negative for that reason, so keeping it
is a live decision rather than a settled one.

Both halves are heuristics over prose, so they warn and never fail the build. **Errors stay at
zero; warnings do not.** The nine it currently reports are the open gaps recorded above and in
Open questions — `questions.md` and `calls.md` known only to `executing`, `opportunities/` and
`prd-<slug>.md` written by `shape` and read by nothing, and the roadmap's `ready` and `dropped`
states that no instruction ever writes. A green run here means the gaps are the known ones, not
that there are none. Silencing it by deleting the check would trade the only mechanical guard
for a tidier number.

## Open questions

- Whether nested `skills/work/` and `skills/dev/` directories are discovered by every host's
  plugin loader, or only by the `skills` CLI. Verify per host before relying on the plugin path.
- Whether `retro` actually gets run. It closes the feedback gap on paper — evidence-based, from
  the session transcript — but a retrospective nobody invokes is worth nothing, and the pack
  deliberately has no hook to invoke it. If it goes unused for a month, that is the answer.
- Cross-skill drift is unlinted. Self-sufficiency means the grilling loop is restated inside
  `shape`, and the delegation contract inside `phasing`. When one changes, nothing catches the
  other going stale. One instance is now resolved by construction rather than by discipline:
  `questions.md` is the truth and a plan's `blocked` status is a label derived from it that must
  name the question id. (`executing` is its only writer today; the settled-not-yet-built item
  above changes that, and does not change which file is the truth.) Where two skills share
  state, making one the truth and the other a derived label is cheaper than keeping both honest
  — and `scripts/check.mjs` now catches the narrow case where one side goes missing entirely.
