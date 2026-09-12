# Test strategy template

Write to `context/foundation/test-strategy.md`. One per project. Use when the question is what
is worth testing — not how to write any particular test.

Coverage percentages answer the wrong question. This document ranks the ways the system can
actually hurt someone, says which level of test holds each one, and states what is deliberately
left untested. That last part is what makes the rest believable.

```markdown
# Test strategy: <project>

## Top risks
Ranked by impact × likelihood, worst first. Each is a failure scenario in the user's terms, not
a component name: "a paid order is recorded but never charged", never "the payments module".

| # | what goes wrong | who it hurts | how it would be caught today |
|---|---|---|---|

## Levels in use
What each level is for here, and what it is not allowed to do. Name the command that runs it.

| level | what it holds | command | what it must not do |
|---|---|---|---|

## Risk to level
Each risk above mapped to the level that actually catches it. A risk with no level is either an
accepted risk or a gap — say which, explicitly. Unmapped rows are how strategies rot.

## Deliberately untested
What is not covered on purpose, with the reason for each: too expensive, too unstable, low
consequence, or already held by a type, a constraint, or a review.

## What breaks the suite
The conditions under which these tests stop telling the truth — a shared fixture, a clock, an
external service, test ordering, a flaky boundary. How each one is contained.

## Revisit when
The risk that would have to change rank, or the level that would have to stop being trusted.
```

## Rules

- Risks are failure scenarios, ranked. A list of modules is an inventory, not a strategy.
- Every level names its command, proven by running it in this session — not recalled.
- `Deliberately untested` is mandatory and must not be empty. A strategy claiming to cover
  everything has not made a single choice, and will be ignored the first time it is inconvenient.
- No coverage targets. A percentage never says which risk is held.
- This says *what* to test. How to write one test — failing first, one behavior — is a different
  job and does not belong here.
