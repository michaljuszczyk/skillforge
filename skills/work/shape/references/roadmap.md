# Roadmap template

Write to `context/foundation/roadmap.md`. Use when one initiative needs several changes. The
output is an *index*, not a plan: each entry is small enough to brief and build on its own.

```markdown
# Roadmap: <initiative>

## Outcome
The end state in one paragraph. What is true when every change below is done.

## Change index

| id | change | depends on | done when |
|----|--------|-----------|-----------|
| c1 | <title> | — | <observable result> |
| c2 | <title> | c1 | <observable result> |

## Sequencing
Why this order. Which changes could run in parallel, and which are hard blockers.

## De-risking
- **Pre-mortem** — it is six weeks later and this failed. What was the cause?
- **Unknown unknowns** — which part of the system do we understand least well?
- **Devil's advocate** — the strongest argument for not doing this at all, or doing it differently.

## Open
Unresolved questions, each blocking a specific change id.
```

## Rules

- Every change gets an id (`c1`, `c2`…). Later work refers to changes by id, never by title.
- Each change must be separately shippable, or say which ones must land together and why.
- `done when` is observable behavior, never "implemented" or "refactored".
- Do the de-risking prompts honestly, and write the uncomfortable answer down.
- No estimates unless the user asks. Order and dependencies are the useful part.
