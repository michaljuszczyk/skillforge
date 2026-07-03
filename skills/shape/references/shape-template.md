# Shape Artifact Reference

Load this only when writing or reviewing `context/changes/<change-id>/shape.md` or `context/foundation/shape.md`.

## Template

```markdown
# Shape: <change title>

## Current State

- Repo/project context:
- Existing behavior or starting point:
- Known constraints:

## Desired Change

- User-visible outcome:
- Primary workflow or failure mode:
- Non-goals:

## Decisions

- <decision>: <choice and why>

## Risks

- <risk>: <mitigation or research question>

## Verification Intent

- Expected behavior to prove:
- Bug reproduction needed:
- Test-first opportunity:
- Manual verification:

## Open Questions

- <question, owner, why it matters>
```

## Section Rules

- `Current State` names what exists or what is unknown. Do not pretend a codebase path, workflow, or constraint is known if it was not read or stated.
- `Desired Change` describes the delta, not an implementation. Include the primary user-visible behavior or the failure mode being removed.
- `Decisions` records choices already made by the user or forced by existing artifacts. Include the reason because downstream planning uses it to avoid re-litigating.
- `Risks` captures what could make the work wrong, expensive, unsafe, or unverifiable. Convert broad risks into research questions when possible.
- `Verification Intent` states the behavior that proves success. For bugs, require a reproducible observation or write `Needs reproduction before implementation`.
- `Open Questions` names who must answer and why it matters. Do not hide blockers in prose.

## Questioning Pressure

Ask at least one sharp question for nontrivial work. Scale by risk:

- Low risk: ask about acceptance, non-goals, or what must not change.
- Medium risk: add questions about edge cases, affected users, data, integration boundaries, and tests.
- High risk: add questions about rollback, migration, security, observability, compatibility, and failure modes.

Use concrete options when the user needs help deciding:

```text
What must remain unchanged while this behavior changes?
- Existing API response shape (Recommended): safest for current consumers, but limits cleanup.
- Internal model only: allows a cleaner design, but all callers must be checked.
- Not sure: research current consumers before locking scope.
```

## Useful Checks

- Bug shape includes current observation, expected behavior, likely reproduction surface, and preserved behavior.
- Feature shape includes user outcome, in-scope workflow, non-goals, and testable success behavior.
- Refactor shape includes preserved external behavior, internal pain, risk boundaries, and verification that proves no behavior drift.
- Infrastructure shape includes operational outcome, compatibility constraints, rollback concern, and smoke verification.

Avoid:

- "Improve X" without naming the user-visible or operator-visible result.
- "Add tests" without naming the behavior to prove.
- "Refactor module" without naming what must not change.
- Domain commitments the user did not make.
