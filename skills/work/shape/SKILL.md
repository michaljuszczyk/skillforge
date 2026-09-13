---
name: shape
description: "Turn a raw request into a written artifact — a change brief, an epic roadmap, a decision record, a PRD, or a project vision — by resolving the open decisions first. Use before planning or building when the work is not yet crisp: vague scope, unclear goal, competing options, or an epic that has not been broken down. Triggers on shape, scope, frame, clarify, brief, roadmap, vision, build or buy, test strategy, break an initiative into changes, ADR, decide between, or write a PRD."
---

# Shape

Shape converts an unclear request into an artifact someone can act on. Interrogate first, write
second, stop there — shaping does not plan phases and does not implement.

## Pick the artifact

| The request | Load | Writes |
|---|---|---|
| It is not yet clear that anything should be built at all | `references/opportunity.md` | an opportunity map |
| A single change is unclear in scope or goal | `references/brief.md` | a change brief |
| A big initiative needs breaking into changes | `references/roadmap.md` | a dependency-ordered change index |
| A technical choice needs to be made or recorded | `references/decision.md` | a decision record |
| Product requirements need stating | `references/prd.md` | a PRD |
| The project direction is unwritten, or keeps getting re-litigated | `references/vision.md` | a vision |
| A new project or standalone feature needs its stack chosen | `references/tech-stack.md` | a stack register |
| What is worth testing has never been decided | `references/test-strategy.md` | a test strategy |

Load exactly one template, and only once you are ready to write. Do not load any template to
route, to ask questions, or to answer a clarification. Read `examples/brief.md` or
`examples/roadmap.md` only when the shape of the output is unclear.

If `context/foundation/vision.md` already exists, read it before asking anything — it settles
some questions outright, and an answer that contradicts it is worth naming out loud.

If none of these fits, say so and write plain structured prose instead — a forced template
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

**Minting a change-id.** `NN-slug` — the slug is two or three words from the goal, and `NN` is
the next number claimed by neither `context/changes/` nor the roadmap. Read both before
choosing: a roadmap reserves its ids at the moment it is written and creates no directories
until each change is briefed, so the directory listing alone will hand you an id another change
already owns. Never reuse a number and never shape a new change into an existing change's
directory.
Briefing a roadmap entry keeps the id that entry already carries.

Create the directories if they do not exist. The only override is the user naming a different
location — not a guess that a repo would prefer otherwise. An artifact written outside the repo
stops being the shared record it exists to be.

If the write genuinely fails — read-only checkout, refused permission — write to the OS temp dir
(`%TEMP%`, else `$TMPDIR`, else `/tmp`), print the full path, and say plainly that the artifact
is not durable until someone moves it into the repo. Never continue as though it had been saved.

**What each file holds.** Every way of working through this pack meets these files, whichever
skills wrote them. Each kind of state has one home, and a label elsewhere only mirrors it:

| Under `context/` | Holds | Never |
|---|---|---|
| `foundation/roadmap.md` | one status per change, in its row | how far a change has got |
| `foundation/vision.md` | direction, and the ranked priority order that breaks ties | new scope, dates, or change ids |
| `foundation/tech-stack.md` | the stack in force, and the constraint that forced each choice | a preference presented as forced |
| `foundation/test-strategy.md` | ranked risks, which test level holds each, what is left untested | how to write a particular test |
| `foundation/opportunities/<slug>.md` | build, buy, thin complement, or wait — before any brief | a change's scope |
| `foundation/prd-<slug>.md` | product intent, when that is what is unclear | the technical approach |
| `foundation/decisions/` | one contested, hard-to-reverse choice each | a change's working notes |
| `changes/<id>/brief.md` | the agreed intent, questions raised while shaping in `## Open`, and once the change closes, its `## Closing` | progress |
| `changes/<id>/plan.md` | phases, with the checklist as the only progress state; its `**Status**` only labels it for resuming | what the change produced |
| `changes/<id>/questions.md` | blocking questions parked during the work, under stable ids, each with its status | calls already made |
| `changes/<id>/calls.md` | calls made when no owner could be asked | open questions |

Write no other file into a change's directory. Content that fits none of these belongs in the
one it is closest to, or it is scratch and goes to the OS temp dir. A `status.md`, `notes.md`,
or `log.md` beside the brief becomes a second record of the same change, and the next reader
cannot tell which one is true.

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
- Do not pad. A one-paragraph brief that answers the questions beats a filled-in template — it
  still ends with the `## Closing` heading.
- Close by naming the artifact path, the open questions, and the natural next step in one line.
