# Plan template

Write to `context/changes/<change-id>/plan.md`. The checklist is state — keep it accurate above
all else.

```markdown
# <change-id>: <title> — plan

**Brief**: `./brief.md` · **Status**: in progress | blocked | done

## Approach
Two or three sentences on the strategy and why it beat the alternative. Not a restatement of
the goal.

## Unknowns
What is still unverified, and what each one would change if it turns out otherwise.

## Phases

### 1. <phase name>
- **Goal**: what is true when this phase is done.
- **Touches**: `path/one.ts`, `path/two.ts`
- **Steps**: the ordered work, one line each. Enough for a cold agent, no more.
- **Verify**: the exact command or observable result, and what a pass looks like.

### 2. <phase name>
...

## Progress checklist
- [ ] 1. <phase name>
- [ ] 2. <phase name>

## Log
Append only. One line per phase completed or plan change:
- `2026-09-08` phase 1 done — `npm test -- reports` 14 passing. Column order differed from the
  brief; kept the table's order and noted it.
```

## Rules

- `Verify` is mandatory per phase and must be runnable without a human. "Check it works" is not
  verification.
- `Touches` lists real paths. If you do not know them yet, the phase needs investigation first.
- Tick a checklist box only after its `Verify` has passed in the current session.
- The `Log` records deviations. A plan followed exactly needs one line per phase; a plan that
  changed needs the reason.
- Keep phases at three to seven. More means the change should have been split; fewer usually
  means a phase is hiding several.
