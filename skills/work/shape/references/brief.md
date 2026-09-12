# Change brief template

Write to `context/changes/<change-id>/brief.md`. Keep it under one screen — this is a decision
record, not a spec. Cut any section that has nothing real in it rather than padding it.

```markdown
# <change-id>: <short title>

## Problem
What is wrong or missing today, in the user's terms. Observable, not abstract.

## Goal
The one outcome this change delivers. If you need "and", consider two changes.

## Non-goals
What this deliberately does not do. The most valuable section — it is what stops scope creep
later. Name the tempting adjacent work explicitly.

## Constraints
Technical, product, or process limits that are not negotiable: compatibility, deadlines,
existing patterns to follow, things that must not change.

## Risks and unknowns
What could make this fail or take twice as long. Mark each `verified:` or `assumption:`. Answer
these three rather than listing whatever comes to mind first:
- **Pre-mortem** — this shipped and caused an incident. What was it?
- **Devil's advocate** — the strongest case for not doing this at all, or doing it differently.
- **When it breaks** — it fails in production at 3am. What does the user see, and who finds out?

## Verification
The observable behavior that proves it worked. A command, a user-visible result, a metric.
If you cannot name one, the brief is not finished.

## Open
Questions still unanswered, each with who has to answer it.
```

## Rules

- `Verification` and `Non-goals` are mandatory. A brief without them has not been shaped.
- Every claim about current behavior is either verified against the code or labelled an
  assumption. No exceptions.
- Preserve domain vocabulary from the user verbatim; do not translate it into your own words.
