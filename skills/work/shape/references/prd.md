# PRD template

Write to `context/foundation/prd-<slug>.md`. Use when the product intent, not the technical
approach, is what is unclear. Tracker-agnostic by design — no ticket ids, no sprint fields.

```markdown
# <product or feature name>

## Problem
Who is stuck, on what, today. Evidence if there is any.

## Users
Who this is for, and which of them matters most when a tradeoff appears.

## Success
How we will know it worked: observable behavior, and a metric if one exists.

## Scope
**In** — the capabilities this delivers, as user-visible statements.

**Out** — what is explicitly excluded, and until when.

## Requirements
Numbered, testable statements. Split functional from non-functional (performance, security,
accessibility, compatibility) only when the non-functional ones carry real constraints.

## Verification
How each requirement gets checked. Manual is fine, but say so.

## Open
Product questions still unanswered, each with an owner.
```

## Rules

- Requirements are testable statements, not solutions. If one names a library, it belongs in a
  decision record instead.
- `Out` matters as much as `In`. Write it even when it feels obvious.
- Do not invent metrics. "No metric yet" is an honest answer.
