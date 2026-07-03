# Task Brief Template

Load this reference before dispatching an implementer or fixer, choosing task-local context, or requiring the implementer report contract.

The controller owns context selection. The subagent gets only what it needs for the bounded task.

## Implementer Brief

```text
You are implementing <task id>: <task name>.

Read first:
- Plan/task brief: <path>
- Relevant research/context: <paths>

Goal:
<observable outcome for this task>

Scope:
- Own these paths or areas: <paths>
- Do not touch: <paths or areas>

Requirements:
- <exact values, contracts, formats, and behavior from the plan>

Constraints:
- Follow existing repo patterns.
- Use TDD for behavior-bearing work where practical.
- Reproduce bugs before fixing.
- Keep edits scoped to this task.
- Do not stage or commit unless the controller explicitly asks.

Verification:
- Run: <command>
- If this command is impossible, report why and run the narrowest credible alternative.

Report file:
Write the full report to <path>.

Report contract:
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- What changed.
- Files changed.
- Verification command and result.
- TDD evidence when applicable: RED command/output and GREEN command/output.
- Concerns, assumptions, or blockers.

Return only:
- Status.
- One-line verification summary.
- Files changed.
- Concerns or blocker details.
- Report file path.
```

## Status Meanings

- `DONE`: task is complete and verified.
- `DONE_WITH_CONCERNS`: task is complete, but correctness, scope, or maintainability needs controller attention.
- `NEEDS_CONTEXT`: missing information prevents responsible implementation.
- `BLOCKED`: the task cannot be completed without a changed plan, different approach, more capable model, or user decision.

Never treat `DONE_WITH_CONCERNS`, `NEEDS_CONTEXT`, or `BLOCKED` as approval to update progress.

## Fixer Brief

When review finds blocking issues, dispatch a fixer with:

- Original task brief path.
- Implementer report path.
- Reviewer findings.
- Exact paths or hunks implicated.
- Required verification command.
- Instruction to append fix results to the same report file.

Fixers address the complete finding set for that task when practical. Avoid one fixer per small finding unless the fixes conflict.

## Context Hygiene

Prefer handoff files over pasted history when the host supports it. Keep durable scratch files under the change folder. Do not make a subagent read the whole plan when a task-local brief is enough.
