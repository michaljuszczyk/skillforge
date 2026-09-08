# Decision record template

Write to `context/foundation/decisions/<nnn>-<slug>.md`, numbered in order. One decision per
file. Records a choice and its cost so nobody relitigates it from memory.

## Does this deserve a record?

Three conditions, all of them required:

1. **Hard to reverse** — changing your mind later carries real cost.
2. **Surprising without context** — a future reader will ask "why did they do it this way?"
3. **A real trade-off** — there were genuine alternatives, and one won for specific reasons.

If any one is missing, skip it. A choice that is cheap to undo, obvious, or uncontested is a
commit message, not a decision record.

```markdown
# <nnn>. <the decision, as a statement>

- **Status**: proposed | accepted | superseded by <nnn>
- **Date**: YYYY-MM-DD

## Context
The forces in play: requirements, constraints, what exists today, what triggered the decision.

## Options

### A. <name>
What it is, and the honest tradeoff — what it costs, not just what it gives.

### B. <name>
...

## Decision
The option chosen, and the reason it beat the others. Name the deciding factor.

## Consequences
What this makes easy, what it makes hard, and the cost being accepted knowingly.

## Revisit when
The condition that should reopen this — a scale threshold, a dependency change, a deadline.
```

## Rules

- At least two real options. A single option is not a decision, it is a note.
- Every option gets its downside stated. An option with no cost has not been understood.
- A project's stack is a set of decisions, not a list of libraries: prefer several small records
  over one "our stack" document.
- Never delete a superseded record. Mark it superseded and link forward.
