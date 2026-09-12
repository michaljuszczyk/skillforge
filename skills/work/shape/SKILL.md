---
name: shape
description: "Turn a raw request into a written artifact — a change brief, an epic roadmap, a decision record, or a PRD — by resolving the open decisions first. Use before planning or building when the work is not yet crisp: vague scope, unclear goal, competing options, or an epic that has not been broken down. Triggers on shape, scope, frame, clarify, brief, roadmap, break an initiative into changes, ADR, decide between, or write a PRD."
---

# Shape

Shape converts an unclear request into an artifact someone can act on. Interrogate first, write
second, stop there — shaping does not plan phases and does not implement.

## Pick the artifact

| The request | Load | Writes |
|---|---|---|
| A single change is unclear in scope or goal | `references/brief.md` | a change brief |
| A big initiative needs breaking into changes | `references/roadmap.md` | a dependency-ordered change index |
| A technical choice needs to be made or recorded | `references/decision.md` | a decision record |
| Product requirements need stating | `references/prd.md` | a PRD |

Load exactly one template, and only once you are ready to write. Do not load any template to
route, to ask questions, or to answer a clarification. Read `examples/brief.md` or
`examples/roadmap.md` only when the shape of the output is unclear.

If none of the four fits, say so and write plain structured prose instead — a forced template
produces a worse document than no template. Do not invent a new document type mid-task; if the
gap keeps recurring, propose a new template afterwards.

## Process

1. Read everything the user pointed at — notes, ticket text, screenshots, linked files — in full.
2. Classify the work: greenfield, brownfield feature, bug theme, refactor, or infrastructure.
   The classification changes which questions matter, not the template.
3. **Find the facts yourself.** Anything discoverable from the repo, the dependencies, or the
   docs is your job. Delegate the lookups when the host supports subagents.
4. **Grill for the decisions.** Ask the settled-prerequisite questions in one round, each with
   your recommended answer, and wait. Repeat until nothing is silently assumed. Use a grilling
   skill if one is installed; otherwise do it inline — one round, numbered questions,
   recommendations included.
5. Ask only questions whose answers change the scope, the risk, or the artifact. The cost of a
   wrong assumption decides how many: a clear, low-risk request may need none. As risk grows,
   cover goal, users, current behavior, target behavior, constraints, non-goals, verification.
6. Challenge vague scope directly: what would make this fail, what must not change, and what
   observable behavior proves it worked.
7. **Confirm before writing.** List the settled decisions in a few lines and ask the user to
   confirm you have them right. The artifact records their decisions, not your inferences — so
   an unconfirmed summary is a draft of your own opinion.
8. Write the artifact from the template. Then stop and hand back.

## Where it goes

Artifacts live in the repo, always, so they outlive the session and the agent:

- Project-wide or multi-change work → `context/foundation/`
- A single change → `context/changes/<change-id>/`

**Minting a change-id.** `NN-slug` — `NN` is the next unused two-digit number under
`context/changes/`, the slug is two or three words from the goal: `03-csv-export`. List the
directory before choosing. Never reuse a number and never write into an existing change's
directory. Roadmap entries map onto the same scheme, in the order the roadmap lists them.

Create the directories if they do not exist. The only override is the user naming a different
location — not a guess that a repo would prefer otherwise. An artifact written outside the repo
stops being the shared record it exists to be.

If the write genuinely fails — read-only checkout, refused permission — write to the OS temp dir
(`%TEMP%`, else `$TMPDIR`, else `/tmp`), print the full path, and say plainly that the artifact
is not durable until someone moves it into the repo. Never continue as though it had been saved.

## Artifact rules

- Concrete enough that planning or building can start without re-shaping the work.
- Preserve the user's words where they carry domain meaning; convert wishes into explicit
  scope, non-goals, risks, and verification.
- Record decisions the user actually made. Never invent a commitment to fill a template section
  — write `Open:` and the question instead.
- Nothing invented as fact. An unverified assumption is labelled as one.

## Boundaries

- Do not shape a trivial, fully specified task — a typo, a rename, a one-line fix. Say that it
  needs no artifact and do the work.
- Do not plan phases, estimate, or write code here.
- Do not produce two artifacts in one pass. One request, one document.
- Do not pad. A one-paragraph brief that answers the questions beats a filled-in template.
- Close by naming the artifact path, the open questions, and the natural next step in one line.
