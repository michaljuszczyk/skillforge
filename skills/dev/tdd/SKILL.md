---
name: tdd
description: "Implement one behavior at a time test-first — write the failing test, watch it fail for the right reason, then make it pass. Use when the next piece of work has observable behavior worth pinning: a feature through a public boundary, a bug with a reproducible case, or a refactor whose behavior must not change. Triggers on TDD, test-first, red-green, or write the test first."
---

# TDD

Drive one behavior at a time: a failing test, a confirmed red for the right reason, then the
smallest change that makes it pass. Refactoring is not part of this loop — it belongs to review.

## Reference loading

Load `references/test-quality.md` before writing or changing tests, choosing a test boundary, or
adding a mock or fixture. Do not load it to decide whether TDD applies, or to judge red and green
evidence — those rules are below.

## Eligibility

Use TDD when the work has observable behavior:

- Feature behavior through a public API, UI, command, parser, service, or state transition.
- A bug with a reproducible failing case.
- A refactor whose existing behavior can be pinned first.

Implement directly, without TDD, when the work is scaffolding, config, documentation, or visual
polish with no automated assertion path. Mixed work: TDD the behavior-bearing part, implement
the rest.

## The loop

For each behavior:

1. Name the public boundary under test.
2. Write one focused failing test for the *expected* behavior.
3. Run the narrowest useful command. Confirm **red for the right reason** — not a syntax error,
   a bad import, a broken fixture, or a mock asserting itself.
4. Write the smallest production change that makes it pass.
5. Run the same narrow command. Confirm green.
6. Run the wider verification for the piece of work before calling it done.

If a test passes the moment you write it, stop: either the behavior already exists, or the test
is too weak, or it asserts the wrong thing.

## Where expected behavior comes from

From the requirement, brief, plan, or bug report — **never** from what the code currently does.
Reading the implementation and asserting what it already produces is not a test.

If nothing determines the correct behavior, stop and ask. Do not encode the current
implementation as if it were correct.

## Bugs

The reproduction must fail before the fix exists. Capture the input or action, the expected
behavior, the actual behavior, and the failure output. The fix is not done until that
reproduction passes.

## Test count

Each test earns its place by catching a distinct regression. Near-duplicate tests that fail
together cost maintenance and prove nothing extra. When it is not obvious, say in one line what
regression each new test catches.

## Rationalizations

The three you will hear yourself make, and the answer to each:

- *"This is too simple to need a test first."* — Then the test costs thirty seconds. Write it.
- *"I will add the test after, once the shape settles."* — A test written afterwards asserts what
  the code does, not what it should do. That is not a test, it is a snapshot.
- *"The test is awkward to write here."* — That is the finding. A boundary that resists testing
  is a design problem, and you just found it for free.

## Boundaries

- No production code before the failing test, when TDD applies.
- No refactoring inside the loop. Note it and leave it for review.
- Never weaken or skip a test to get to green. Never mark a skipped test as passing work.
- Do not claim a phase complete on manual verification without the user confirming it.
- If a plan file tracks this work, tick only the row you actually verified.
