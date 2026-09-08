# Test Quality

Load this reference before writing or changing tests, choosing a test boundary, adding mocks or fixtures, handling a test that passes immediately, or judging RED/GREEN evidence.

## Good Tests

Good tests assert externally visible behavior through a public boundary: API response, command output, rendered UI, parser result, state transition, persisted side effect, or documented error.

Expected values come from an independent source: requirements, examples, contracts, user-provided bug reports, known-good fixtures, or worked examples. Do not copy the production calculation into the assertion.

Prefer one behavior per test. Name the test for the outcome, not the mechanism.

## Red Evidence

A valid RED run proves missing or broken behavior:

- The test fails before production implementation.
- The failure reason is expected and relevant.
- The failure is not a syntax error, bad import, test setup bug, or mocked behavior.
- For bugs, the reproduction shows actual behavior differing from expected behavior.

If the test passes immediately, stop. Either the behavior already exists, the test is too weak, or the test is asserting the wrong thing. Strengthen the test, redirect to `implement`, or mark the item already done only with evidence.

## Green Evidence

GREEN means the same focused command passes after the smallest production change. If unrelated tests fail, fix the production change or narrow the scope before moving on. Refactor only while green.

## Test Boundaries

Test at stable public boundaries. Avoid private methods, internal call order, incidental object shape, or side channels that users and callers do not observe.

Default placement follows the repo's existing convention. If none exists:

- Unit tests live near the source file.
- Integration or API tests live under the test tree used by the project.
- E2E tests live in the project's e2e or browser test area.

## Mocks and Fixtures

Mock external, slow, expensive, or nondeterministic collaborators at the boundary. Do not mock the unit under test.

Before adding a mock, answer:

- What real behavior or side effect does this dependency provide?
- Does this test depend on that behavior?
- Would an integration test be simpler than a complex mock?

Mocks should preserve the contract the system consumes. Partial mocks are acceptable only when omitted fields are irrelevant to the behavior under test and the contract is obvious from existing fixtures or docs.

## Anti-Patterns

Avoid:

- Testing that a mock exists.
- Asserting private calls or internal order.
- Over-mocking until the test only proves mock behavior.
- Snapshot tests for logic that deserves semantic assertions.
- Tautological assertions that recompute the expected result using the same logic as production.
- Test-only production methods.
- Skipped tests used to make a phase look green.
- Broad "tests after" coverage that never proved RED.

## Bug Fix Checklist

Capture the bug before changing production code:

- Input, state, or user action.
- Expected behavior.
- Actual behavior.
- Failing command or observed symptom.

The fix is not complete until that reproduction passes and the relevant phase verification has run.
