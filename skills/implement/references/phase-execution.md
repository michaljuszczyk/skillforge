# Phase Execution

Load this reference before starting any implementation phase, updating checklist rows, handling plan/code mismatches, preparing verification, or writing the phase handoff.

## Phase Start

Before editing:

1. Identify the active phase and pending rows from `## Progress checklist`.
2. Read the phase requirements, success criteria, named files, and relevant research.
3. Decide whether any row should be handled by `tdd`.
4. Note the intended verification command.
5. Confirm the edit scope and leave unrelated dirty paths alone.

## Plan/Reality Mismatch

Stop when the mismatch affects behavior, scope, data safety, security, or the user's explicit plan.

Use this format:

```text
Issue in Phase <n>:
Expected: <what the plan says>
Found: <what the repo shows>
Why this matters: <risk>
Recommendation: <adapt, re-plan, or skip with rationale>
```

Ask the user only when the decision changes behavior, scope, or safety. Otherwise adapt narrowly and record the assumption in the phase state.

## Checklist Updates

Mutate only `## Progress checklist`.

- Flip only rows that are actually complete.
- Do not rewrite phase requirements to match what happened.
- Do not mark manual rows complete without user confirmation.
- Do not use chat memory as durable progress.

## Verification

Use the command named in the plan. If none is named, infer the narrowest credible check from the repo: focused test, typecheck, lint, build, or smoke command.

Evidence must include:

- Command run.
- Result.
- Any failures fixed or left pending.
- Manual checks still awaiting confirmation.

Do not claim passing or fixed before this evidence exists.

## Phase Completion Criteria

A phase can be reported complete only when:

- The relevant checklist rows are checked.
- Automated verification passed or the reason it could not run is documented.
- Manual verification is confirmed or explicitly pending.
- No unrelated user or peer edits were overwritten.

If all checklist rows are checked, recommend `review` before archive or release.

## Handoff Contract

Every phase handoff or pause ends with:

- Current state: phase, checklist progress, files changed, verification run, pending manual checks.
- Recommended next command.
- Optional alternatives.
- Copyable command block.

Use this shape:

```text
Current state: Phase <n> <state>; <verification summary>; <pending manual checks or none>.
Recommended next command: <command and why>
Alternatives: <optional command choices>

<copyable command>
```

Recommended commands:

- `implement <change-id> phase <next>` for direct continuation.
- `tdd <change-id> phase <next>` when the next slice is behavior-bearing.
- `subagent-driven-development <change-id>` when remaining phases are independent.
- `review context/changes/<change-id>/plan.md` when implementation is complete or risky.
