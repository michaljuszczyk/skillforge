# Critique Rubric

Load this reference for nontrivial critiques, architectural decisions, risky plans, or any critique that needs structured findings.

## Dimensions

- Goal fit: the plan reaches the stated end state, not just a nearby milestone.
- Scope discipline: the plan excludes speculative work and respects stated non-goals.
- Integration risk: contracts, callers, data ownership, migrations, rollout, rollback, and compatibility are covered.
- Operational risk: failure modes, security, performance, observability, support, and cost are proportionate to the change.
- Testability: success can be proven at the right level with realistic inputs and failure paths.
- Simplicity: existing code, standard library, native platform features, or already-installed dependencies solve the problem before new machinery is added.

## Overengineering Check

Use this as one part of the critique, not the whole workflow.

- `delete`: dead code, unused flexibility, speculative feature, or "while here" work.
- `stdlib`: hand-rolled behavior that the standard library already provides.
- `native`: dependency or custom layer doing what the platform already does.
- `yagni`: abstraction with one implementation, option nobody sets, interface with one caller.
- `shrink`: same outcome with materially less code or fewer concepts.

Only raise overengineering when it affects cost, risk, clarity, or future change. Do not flag a small test, assertion, or validation guard as bloat.

## Finding Shape

```markdown
<Severity>: <short title>
Evidence: <file:line, artifact, or quoted requirement when available>
Impact: <what breaks, becomes expensive, or remains undecided>
Fix: <one concrete recommendation, or two options only for a real tradeoff>
Confidence: <high|medium|low>
```

Severity:

- `Blocking`: must resolve before implementation.
- `Risk`: should decide or mitigate before implementation.
- `Question`: answer needed to remove ambiguity.
- `Simplify`: likely overbuilt or avoidable complexity.

## Good Findings

```markdown
Blocking: Backfill has no rollback path
Evidence: plan.md Phase 3 adds a non-null column and says "backfill all existing rows"; no rollback or restart step is listed.
Impact: a mid-backfill failure can leave mixed data that later phases treat as complete.
Fix: split into nullable column, restartable backfill, validation query, then constraint enforcement in a later deploy.
Confidence: high
```

```markdown
Simplify: Provider abstraction for two static config sources
Evidence: Phase 1 introduces ConfigProvider, EnvProvider, FileProvider, and ProviderRegistry; current need is env plus one file.
Impact: more concepts and tests without a current extension point.
Fix: merge env and file in `load_config`; introduce providers only when a third source appears.
Confidence: medium
```

## Bad Findings

```markdown
Risk: This seems complicated.
```

Why it is bad: no evidence, no impact, no actionable fix.

```markdown
Question: Could this be faster?
```

Why it is bad: vague performance concern without workload, threshold, or decision needed.
