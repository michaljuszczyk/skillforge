# Roadmap template

Write to `context/foundation/roadmap.md`. Use when one initiative needs several changes. The
output is an *index*, not a plan: each entry is small enough to brief and build on its own.

```markdown
# Roadmap: <initiative>

## Outcome
The end state in one paragraph. What is true when every change below is done.

## Change index

| id | change | depends on | status | done when |
|----|--------|-----------|--------|-----------|
| 01-<slug> | <title> | — | proposed | <observable result> |
| 02-<slug> | <title> | 01-<slug> | proposed | <observable result> |

## Sequencing
Why this order. Which changes could run in parallel, and which are hard blockers.

## De-risking
- **Pre-mortem** — it is six weeks later and this failed. What was the cause?
- **Unknown unknowns** — which part of the system do we understand least well?
- **Devil's advocate** — the strongest argument for not doing this at all, or doing it differently.
- **When it breaks** — the end state is live and part of it fails. What does that look like from
  outside, and which change should have prevented it?

## Open
Unresolved questions, each blocking a specific change id.
```

## Rules

- The id is the change-id — `NN-slug`, the directory this change will get under
  `context/changes/`. Number the entries in roadmap order starting from the next unused number;
  the directory itself is created when the change is briefed, not now. Later work refers to
  changes by id, never by title.
- `status` is `proposed | ready | in progress | done | dropped`, and it is the only column that
  gets edited after the roadmap is written. Update it when a change lands. A dropped entry stays
  in the table with its reason — deleting the row loses why it was once wanted.
- Each change must be separately shippable, or say which ones must land together and why.
- `done when` is observable behavior, never "implemented" or "refactored".
- Do the de-risking prompts honestly, and write the uncomfortable answer down.
- No estimates unless the user asks. Order and dependencies are the useful part.
