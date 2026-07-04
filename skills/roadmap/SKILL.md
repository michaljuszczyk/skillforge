---
name: roadmap
description: Use to plan a big change, epic, or new project by decomposing it into a dependency-ordered index of individual changes before the per-change build loop. Triggers on roadmap, epic, big change, break down a large initiative, milestones, or plan the whole thing.
---

# Roadmap

Roadmap is the big-picture entry to the main flow. It turns a shaped idea or PRD into a durable, dependency-ordered index of individual changes, de-risks the plan before anything is built, and hands each change to the normal `plan <change-id>` build loop.

Use it for multi-change work. Skip it for a single small change: go straight from `shape` to `plan`.

Use `use-skillforge` first when available. Apply `lean-coding` to keep changes thin and vertical. Use `research` when a sequencing decision depends on unknowns in the code.

## Reference Loading

- Load `references/roadmap-template.md` when writing or reviewing `context/foundation/roadmap.md`.
- Load `references/adversarial-passes.md` before the de-risking step on a high-stakes or irreversible roadmap (architecture, data model, migration, auth, external contracts, platform choice). Do not load it for routine work.

## State

Roadmap writes `context/foundation/roadmap.md` (durable, edit-in-place). Read first when present: `context/foundation/shape.md`, `prd.md` (functional and non-functional requirements, user stories), `tech-stack.md`, and relevant foundation docs.

## Process

1. Read the PRD or shape and list the outcomes the project must deliver.
2. Decompose into vertical changes: each an end-to-end "user can…" outcome, not a layer. Cross-cutting enablers are foundations and must name what they unlock; an orphan foundation is a mistake.
3. Order by dependency as a DAG with no cycles. Mark the north star: the one change that proves the product, placed as early as prerequisites allow.
4. Give each change a stable kebab-case Change ID. The Change ID is the `context/changes/<change-id>/` folder name — that is the whole handoff to the build loop.
5. Set each change's Status: `proposed`, `ready`, `blocked`, or `done`. Park deferred scope. Record cross-cutting unknowns in Open Questions.
6. De-risk high-stakes roadmaps only: run the adversarial passes in `references/adversarial-passes.md` (pre-mortem, unknown-unknowns, devil's advocate) and fold surfaced risks into the affected items or Open Questions, tagged by the pass that found them. Skip this for routine work; running it everywhere is ceremony.
7. Write or update the roadmap. Do not pre-create change folders or plans.

## Handoff

End with:

- Current state: roadmap path, change count, north star, first `ready` change.
- Recommended next command: `plan <change-id>` for the first ready change. (Greenfield runs `stack` before roadmap, not after.)
- Reminder: when a change completes, flip its Status to `done` in the roadmap.
- Copyable command block.

## Boundaries

- No dates, points, or estimates. Priority is expressed by order, north star, and status.
- Do not fold stack selection in; that is `stack`.
- Do not pre-create change folders, plans, or issues.
- Single small change: do not use roadmap.
