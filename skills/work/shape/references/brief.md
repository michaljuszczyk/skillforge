# Change brief template

Write to `context/changes/<change-id>/brief.md`. Keep it under one screen — this is a decision
record, not a spec. Cut any section that has nothing real in it rather than padding it, except
`## Closing`, which waits for the change to close.

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

## Closing
_Written once, when this change closes, in the same edit as its roadmap status: result
against the goal, deviations, what was left in place, what was learned._
```

When the change closes, replace that line with:

```markdown
- **Result** — against the goal: what was met and what was not, and the evidence. For a spike or
  an investigation, the answer and what it did not test.
- **Deviations** — where the work left this brief, and why. Where a plan exists, point at its
  `Log` instead of repeating it.
- **Left in place** — what was knowingly kept: throwaway code on a branch, a temporary
  resource, a credential in a temp file. Each with where it is, who owns it, and when it goes.
- **Learned** — what the next change in this area should know.
```

## Rules

- `Verification` and `Non-goals` are mandatory. A brief without them has not been shaped.
- Every claim about current behavior is either verified against the code or labelled an
  assumption. No exceptions.
- Preserve domain vocabulary from the user verbatim; do not translate it into your own words.
- Every brief carries the `## Closing` heading from the start, with only its placeholder line.
  The heading is how whoever closes the change — by any route — learns the record is theirs to
  write, and it is written once. Other sections amended during the work stay amended; the
  closing names them under Deviations.
- A change closes when work on it ends for good: its goal met, or the owner stopping it. A spike
  whose answer is no has met its goal. A run that stops blocked or half-done has not closed.
- `## Closing` records what the change produced. Progress belongs in the plan's checklist and
  status in the roadmap row; an unwritten closing is not a status. Cut any bullet with nothing
  real, and name a secret's location and expiry, never its value.
