---
name: implement
description: Use to execute an approved Skillforge plan from context/changes/<change-id>/plan.md, updating its Progress checklist and verifying each phase. Triggers when the user asks to implement, execute, continue, resume, or finish a planned change.
---

# Implement

Implement executes the approved plan directly in the current session. It follows the plan's intent, adapts to code reality, and updates only the plan's `## Progress checklist` as state.

Use `verification-before-completion` before done claims. Use `lean-coding` during edits. Use `tdd` for behavior-first slices when practical. Use `review` after risky phases.

## References

Load `references/phase-execution.md` before starting any phase, updating checklist rows, handling plan/code mismatches, preparing phase verification, or writing the phase handoff.

## State

Resolve the change:

- `<change-id>` means `context/changes/<change-id>/plan.md`.
- A path may point directly at a `plan.md`.

Read the full plan. Find the first unchecked item in `## Progress checklist`; that is the resume point. If the user names a phase, start at the first unchecked item in that phase.

Also read `shape.md`, `research.md`, relevant foundation docs, and files named by the current phase. Do not edit unrelated artifacts.

## Execution

For each phase:

1. Restate the phase intent and pending checklist rows.
2. Prefer TDD for behavior changes and bug fixes: write or update expected behavior tests before implementation where practical.
3. Make scoped edits following existing codebase patterns.
4. Track touched files in the session. Never stage or commit unless the user explicitly asks.
5. Run the automated verification named in the plan. If missing, infer the narrowest credible test, typecheck, lint, or smoke command from the repo.
6. Fix failures caused by the change.
7. Ask for manual verification when the plan has manual rows. Do not mark manual rows complete until the user confirms.
8. Flip completed checklist rows in `## Progress checklist` only. Do not rewrite phase requirements to match what happened.

If the plan and code disagree in a way that affects behavior, scope, or safety, stop and surface the mismatch. Otherwise adapt narrowly and record the assumption in the final state.

## Completion Rules

Do not claim a phase is complete until its relevant checklist rows are checked, automated verification passed or is clearly documented, manual verification is confirmed or left pending, and unrelated user edits were not overwritten.

When all checklist rows are checked, recommend `review` before archive or release. If this change came from a roadmap, flip its Status to `done` in `context/foundation/roadmap.md` after review passes.

## Handoff

End each phase or pause with current state, recommended next command, optional alternatives, and a copyable command block. Use `implement <change-id> phase <next>`, `tdd <change-id> phase <next>`, `subagent-driven-development <change-id>`, or `review context/changes/<change-id>/plan.md` as appropriate.
