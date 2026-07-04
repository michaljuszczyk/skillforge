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

## Worked Example

A filled implementer brief for one task:

```text
You are implementing 1.1: persist the recipe favorite toggle.

Read first:
- Task brief: /tmp/skillforge/recipe-favorites/task-1-brief.md
- Relevant research: context/changes/recipe-favorites/research.md

Goal:
A signed-in user can favorite/unfavorite one recipe and it persists across reload.

Scope:
- Own these paths: migrations/0007_recipe_favorites.sql, src/services/RecipeService.ts, src/api/recipes/[id]/favorite.ts
- Do not touch: src/components/** (UI is a later task)

Requirements:
- POST /api/recipes/:id/favorite → 200 {favorited:true}; DELETE → 200 {favorited:false}; 401 if signed out.
- Unique (user_id, recipe_id); a duplicate favorite is idempotent.

Constraints:
- Follow existing repo patterns.
- Use TDD; reproduce any bug before fixing.
- Do not stage or commit unless the controller asks.

Verification:
- Run: npm test -- recipe-favorites.test.ts

Report file:
Write the full report to /tmp/skillforge/recipe-favorites/task-1-report.md.

Report contract:
- Status; what changed; files changed; verification command and result; RED/GREEN evidence; concerns.

Return only: status, one-line verification summary, files changed, concerns, report path.
```
