# Test Quality

Load before writing or changing tests, choosing a test boundary, or adding mocks or fixtures. The red/green evidence rules live in SKILL.md and are not repeated here.

## Good Tests

Good tests assert externally visible behavior through a public boundary: API response, command output, rendered UI, parser result, state transition, persisted side effect, or documented error.

Expected values come from an independent source: requirements, examples, contracts, user-provided bug reports, known-good fixtures, or worked examples. Do not copy the production calculation into the assertion.

Prefer one behavior per test. Name the test for the outcome, not the mechanism.

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
