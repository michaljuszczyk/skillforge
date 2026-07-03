# Review Rubric

Load this reference for nontrivial code reviews, diff reviews, PR reviews, reviews against a spec, or when you need examples for finding quality.

## Review Axes

- Correctness: bugs, edge cases, regressions, data loss, security, concurrency, authorization, validation, and error handling.
- Spec fit: missing requirements, misunderstood requirements, scope creep, changed public contracts, and behavior not requested.
- Tests: missing behavior coverage, tests that assert mocks instead of outcomes, unrun checks, noisy tests, and missing failure cases.
- Maintainability: unclear names, duplicated logic, wrong boundaries, brittle coupling, inconsistent patterns, and poor ownership.
- Overengineering: speculative abstractions, unused flexibility, custom code replacing standard or native features, and extra dependencies.

## Severity

- `Critical`: must fix; breaks correctness, security, data safety, migrations, public contracts, or explicit requirements.
- `Important`: should fix before merge; meaningful fragility, spec drift, missing tests, or avoidable maintenance cost.
- `Minor`: polish, localized cleanup, or future improvement that does not block the work.
- `Question`: author intent is needed before a technical verdict is possible.

## Finding Format

Use one finding per concrete issue:

```markdown
<path>:<line>: <Severity>: <problem>. <why it matters>. <suggested fix>.
```

If the exact line is unavailable, use the narrowest stable location, such as a function, section, or file.

## Overengineering Check

Use this as part of review, not as the whole review unless the user specifically asks for simplification only.

- `delete`: dead code, unused flexibility, speculative feature, or config nobody uses.
- `stdlib`: hand-rolled behavior that the standard library provides.
- `native`: dependency or helper duplicating platform capability.
- `yagni`: abstraction with one implementation, interface with one caller, or future-proofing without a current requirement.
- `shrink`: same behavior with fewer lines or fewer moving parts.

Minimum useful tests, assertions, validation, and security checks are not bloat.

## Good Findings

```markdown
src/auth/handler.ts:42: Critical: the SQL query interpolates `email` directly into the query string. A crafted email can change the query and bypass the intended lookup. Use the repository's parameterized `db.query(sql, params)` pattern.
```

```markdown
src/config/load.ts:18: Important: the new ConfigProvider hierarchy has one production implementation and no requirement for runtime swapping. It adds indirection without a current consumer. Inline the file/env merge and add the abstraction when a second real implementation exists.
```

```markdown
src/orders/create.test.ts:77: Important: the test only asserts that `repo.save` was called, not that the returned order contains the calculated tax. A tax regression would pass. Assert the observable response or persisted record.
```

## Bad Findings

```markdown
This could be cleaner.
```

No location, severity, impact, or fix.

```markdown
src/api.ts: Minor: I prefer a different route order.
```

Preference is not a correctness or maintainability finding unless order changes behavior or violates a documented convention.
