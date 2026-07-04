---
name: plan
description: Use to create or revise an implementation plan for a shaped or researched development change. Triggers when the user wants a plan, technical spec, phased implementation path, task breakdown, or resume-ready plan before coding.
---

# Plan

Plan turns shaped and researched context into an executable `plan.md`. The plan is the durable state for implementation.

Use `use-skillforge` first when available. Apply `lean-coding` to keep phases vertical and small. Use `critique` before finalizing if the plan has high risk. Use `review` when checking an existing plan.

## Reference Loading

- Load `references/plan-template.md` only when writing or reviewing `plan.md`.
- Load `references/progress-format.md` only when creating, reviewing, or interpreting the `## Progress checklist` section of `plan.md`.
- Do not load references for routing, state checks, or clarification-only turns.

## State

Write `context/changes/<change-id>/plan.md`. The `## Progress checklist` section is authoritative execution state. The first unchecked item is the resume point for `implement`, `tdd`, and `subagent-driven-development`.

Read, in order:

1. User-provided task or ticket.
2. `context/changes/<change-id>/shape.md`, if present.
3. `context/changes/<change-id>/research.md`, if present.
4. Related foundation docs in `context/foundation/`.
5. Existing `plan.md`, if revising or resuming.

Do not re-ask decisions already answered in upstream artifacts.

## Questioning

Ask at least one sharp question for nontrivial work before writing the final plan. Scale questions to risk:

- Low: 1-3 questions about scope, acceptance, or tests.
- Medium: 3-6 questions covering edge cases, interfaces, data, and verification.
- High: 6-10 questions across architecture, migration, rollback, security, observability, and testing.

Every question should force a decision. Use concrete options with tradeoffs. Mark `(Recommended)` only when grounded in research or repo conventions.

## Plan Requirements

Plans must be implementation-ready but not over-prescriptive. Describe intent, contracts, files, and verification. Include code snippets only when a contract is subtle or easy to misread.

Every phase should be vertical: it leaves the system in a coherent, testable state. Prefer phases that can be implemented independently and reviewed independently.

Expected behavior and tests come before code where practical. For bugs, plan the failing reproduction before the fix. For risky behavior changes, include red/green verification steps.

If writing or reviewing `plan.md`, follow Reference Loading before doing so.

## Subagent Fit

If the plan has multiple independent tasks, recommend `subagent-driven-development` as the implementation path. Design phases so each implementer can work from a bounded task with clear contracts and a reviewer can judge it from a diff.

## Handoff

End with:

- Current state: plan path, phase count, first unchecked item.
- Recommended next command: `subagent-driven-development <change-id>` for multi-task planned work, `tdd <change-id>` for test-first eligible behavior, or `implement <change-id>` for direct execution.
- Optional alternatives: `critique context/changes/<change-id>/plan.md` or `review context/changes/<change-id>/plan.md`.
- If this change came from a roadmap, flip its Status to `done` in `context/foundation/roadmap.md` once the work is complete and reviewed.
- Copyable command block.
