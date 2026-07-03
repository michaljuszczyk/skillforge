# Review Loop

Load this reference before preflight review, reviewer or critic dispatch, adjudicating findings, re-reviewing fixes, updating durable progress, or writing the controller handoff.

## Preflight

Before dispatching work, scan the plan for:

- Contradictory task requirements.
- Missing contracts or expected values.
- Verification that cannot run.
- Unsafe or overlapping path ownership.
- Requirements that would force low-quality tests or overbuilt code.

Ask one batched question only if a finding blocks execution. If the plan is coherent, proceed.

## Reviewer Inputs

Give the reviewer:

- Task brief.
- Implementer report.
- Diff, file list, or changed paths.
- Binding global constraints from the plan.
- Verification evidence reported by the implementer.

Do not tell the reviewer what not to flag or pre-rate expected findings. If a finding conflicts with the plan, the controller adjudicates after the report.

## Reviewer Rubric

The reviewer checks:

- Spec compliance: missing, extra, or misunderstood requirements.
- Code quality: clarity, error handling, edge cases, overbuild, maintainability.
- Test quality: behavior assertions, meaningful RED/GREEN evidence, no tautological tests, no mock-only assertions.
- Verification: command was appropriate and result is credible.
- Scope: no unrelated files or user edits were overwritten.

Blocking findings include incorrect behavior, missed requirements, fragile tests, unverified claims, unsafe scope, and maintainability damage that should block merge.

## Loop

1. Inspect implementer output enough to know what changed.
2. Dispatch reviewer or critic.
3. If review is clean, update the matching checklist row(s).
4. If review finds blocking issues, dispatch a fixer or return to the implementer with the full finding set.
5. Require fix verification.
6. Re-review the fixed task.
7. Repeat until review passes, the task is blocked, or the user chooses a different plan.

Minor findings may be recorded for a later broad review if they do not weaken the task's correctness.

## Finding Conflicts

If the reviewer flags something the plan explicitly required, do not dismiss it. Present the finding and the plan text to the user and ask which governs.

If the reviewer cannot verify an item from the diff alone, the controller must resolve it before marking progress.

## Durable Progress

After every approved task:

- Update `## Progress checklist` in `plan.md`.
- Record enough current state to resume after compaction.
- Continue from the first unchecked row on resume.

Do not rely on chat memory as durable state.

## Controller Handoff

Every controller pause ends with:

- Current state: completed checklist rows, active or next row, implementer/reviewer outcome, verification status.
- Recommended next command.
- Optional alternatives.
- Copyable command block.

Use this shape:

```text
Current state: <rows complete>; resume point is <row>; review outcome <summary>; verification <summary>.
Recommended next command: <command and why>
Alternatives: <optional command choices>

<copyable command>
```

Recommended commands:

- `subagent-driven-development <change-id>` to resume controller execution.
- `implement <change-id> phase <n>` for inline continuation.
- `tdd <change-id> phase <n>` for a test-first next phase.
- `critique context/changes/<change-id>/plan.md` for plan redesign.
- `review context/changes/<change-id>/plan.md` when all work is complete.
