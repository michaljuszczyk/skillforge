---
name: tdd
description: Use to implement a planned feature or bug fix test-first with red, green, refactor. Triggers when the user says TDD, test-first, red-green-refactor, reproduce before fix, or wants expected behavior pinned before implementation.
---

# TDD

TDD drives one planned behavior at a time: write a failing test or reproduction, watch it fail for the right reason, implement the smallest change, then refactor while green.

For ADLC work, reproduce bugs before fixing and pin expected behavior before implementation whenever practical.

Use `verification-before-completion` before done claims. Use `lean-coding` during edits. Use `review` after a phase when the behavior is subtle.

## References

Load `references/test-quality.md` before writing or changing tests, choosing a test boundary, adding mocks or fixtures, handling a test that passes immediately, or judging whether RED/GREEN evidence is strong enough.

## State

Read `context/changes/<change-id>/plan.md` fully. The `## Progress checklist` section is authoritative. Start at the first unchecked row unless the user names a phase or row.

Read `shape.md`, `research.md`, and `context/foundation/*` when present. Trust completed checklist rows unless evidence contradicts them.

## Eligibility

Use TDD when the next unchecked item has observable behavior:

- Feature behavior through a public API, UI, command, parser, service, or state transition.
- Bug fix with a reproducible failing case.
- Refactor where existing behavior can be pinned before changing structure.

Redirect to `implement` when the work is only scaffolding, config, documentation, visual polish without an automated assertion path, or already implemented. If mixed, TDD the behavior-bearing part and implement the rest directly.

## Loop

For each behavior:

1. Name the public boundary under test.
2. Write one focused failing test or reproduction from the plan's expected behavior, not from the implementation.
3. Run the narrowest useful command and confirm RED for the right reason.
4. Implement the smallest production change that makes the test pass.
5. Run the same narrow command and confirm GREEN.
6. Refactor only after green. Keep the same tests passing.
7. Run the phase's automated verification from the plan.
8. Flip only the matching row in `## Progress checklist` from `[ ]` to `[x]`.

Do not write production code before the failing test when TDD is practical. Do not mark manual verification complete without the user's confirmation.

If a phase cannot be implemented as written, stop and surface the mismatch before editing further.

## Bugs

For bugs, the first test or manual reproduction must fail before the fix. Capture the input or action, expected behavior, actual behavior, and failure output or observed symptom.

## Handoff

End each TDD phase or pause with current state, recommended next command, optional alternatives, and a copyable command block. Use `implement <change-id> phase <n>` for non-TDD work, `tdd <change-id> phase <n>` for the next test-first phase, or `review` for a completed phase.
