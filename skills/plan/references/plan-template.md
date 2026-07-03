# Plan Artifact Reference

Load this only when writing or reviewing `context/changes/<change-id>/plan.md`.

## Template

```markdown
# Plan: <change title>

## Goal

<one paragraph>

## Context

- Shape: `context/changes/<change-id>/shape.md`
- Research: `context/changes/<change-id>/research.md`
- Key constraints:

## Decisions

- <decision>: <choice and why>

## Phase 1: <vertical deliverable>

### Intent

<what changes and why>

### Files

- Modify: `<path>` - <reason>
- Create: `<path>` - <reason>

### Contracts

- <API, schema, command, UI behavior, invariant, or file format>

### Implementation Notes

- <only non-obvious constraints>

### Verification

- Automated: <command or test to run>
- Manual: <specific check, if needed>

## Progress checklist

### Phase 1: <vertical deliverable>

- [ ] 1.1 Write or update the failing behavior test/reproduction where practical
- [ ] 1.2 Implement the smallest coherent change
- [ ] 1.3 Run automated verification
- [ ] 1.4 Complete manual verification, if required
```

Load `progress-format.md` before creating or checking the `## Progress checklist` section.

## Planning Rules

- A phase is vertical: after the phase, the system is coherent and verification can run.
- Keep phases independently reviewable where possible. If two tasks cannot be tested or reviewed apart, they belong in the same phase.
- Describe intent and contracts. Do not pre-write routine code.
- Include snippets only for subtle contracts, tricky data shape, unusual command ordering, or a gotcha an implementer would likely miss.
- For bugs, the first phase should reproduce or pin the failing behavior before the fix whenever practical.
- For migrations, include compatibility, rollout, rollback, and existing-data verification in the relevant phase.
- For UI changes, include accessible states and manual checks that prove text, layout, and error states behave as intended.
- For shared APIs or libraries, name callers and compatibility expectations.

## Review Checklist

Use this when reviewing a plan:

- Goal matches shape and research; no upstream decision was silently changed.
- Every phase has files, contracts, and verification.
- Expected behavior or reproduction comes before implementation where practical.
- Risks from research are either handled in a phase or named as assumptions.
- No unresolved question remains that would change phase order, file ownership, public contract, or verification.
- The progress checklist exists, is parseable, and its first unchecked item is the intended resume point.

## Good and Bad Patterns

Good:

- `Modify: src/auth/session.ts - preserve existing cookie contract while adding expiry validation`
- `Automated: npm test -- session-expiry.test.ts`
- `Manual: Sign in with an expired session and confirm the user returns to the login flow without data loss`

Bad:

- `Modify auth files as needed`
- `Add tests`
- `Handle edge cases`
- `Phase 1: Backend; Phase 2: Frontend` when neither phase is independently useful or verifiable.
