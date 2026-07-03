# Question Patterns

Load this reference when running an interactive grill that needs a decision tree, example questions, or a closing summary.

## Standard Question

Ask one question, then stop and wait.

```markdown
Question <n>: <specific decision?>

Recommended: <option> because <short reason>.

Options:
- <option A>: <tradeoff>
- <option B>: <tradeoff>
- <option C>: <tradeoff>
```

If options would be artificial, ask one direct free-form question instead.

## Decision Tree

Work highest-impact unresolved branches first:

- Goal: What observable outcome proves success?
- Users: Who is affected, and what workflow changes?
- Scope: What is explicitly out of scope?
- Data: What entities, states, schemas, retention, and ownership rules change?
- Contracts: What APIs, events, files, CLI flags, or public behaviors change?
- Compatibility: What existing callers, users, migrations, or rollbacks matter?
- Failure: What happens on partial failure, retries, invalid input, and external outages?
- Security: What auth, permission, privacy, and secret-handling decisions bind the design?
- Operations: What performance, monitoring, support, and cost constraints apply?
- Testing: What tests or checks prove the decision?
- Rollout: How does the change ship, migrate, and back out?

Before asking, inspect code or docs for any branch the repo can answer.

## Example Questions

```markdown
Question 1: Should the new import flow be synchronous in the request or queued as a background job?

Recommended: queued job because imports can outlive request timeouts and need retry visibility.

Options:
- Synchronous request: simpler UX, but timeout and retry behavior are brittle.
- Queued job: more moving parts, but handles long imports and partial failures.
- Hybrid: synchronous for tiny files and queued for larger files, but adds threshold complexity.
```

```markdown
Question 2: Which existing contract should remain stable for old clients?

Recommended: preserve the current response shape and add optional fields because it avoids forcing coordinated client releases.

Options:
- Preserve shape with optional fields: backward compatible, but carries legacy naming longer.
- Version the endpoint: cleaner new contract, but doubles support surface during migration.
- Breaking change in place: smallest server diff, but risky unless all clients are controlled.
```

```markdown
Question 3: What is the minimum acceptance check that proves this slice works?

Recommended: one end-to-end test around the user-visible behavior because unit-only checks can miss integration drift.
```

## Closing Summary

```markdown
## Decisions Made
- <decision>

## Remaining Assumptions
- <assumption or "None">

## Risks Accepted
- <risk or "None">

## Suggested Next Artifact
<PRD, issues, critique, implementation, or handoff> because <reason>.
```
