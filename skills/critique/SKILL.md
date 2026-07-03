---
name: critique
description: Use when a plan, design, proposal, or technical approach needs a skeptical challenge before implementation.
---

# Critique

## Rule

Challenge the plan before the code exists. The goal is not to be difficult; it is to find expensive mistakes while they are still cheap.

This skill defines when and how the main agent should challenge a plan. The `critic` agent is separate: it performs an independent second-pair-of-eyes pass when delegation is useful.

## Use When

- The user asks for critique, pushback, plan review, stress testing, or "what am I missing?"
- A plan changes architecture, data shape, auth, persistence, billing, external APIs, migrations, concurrency, or public contracts.
- Requirements are vague enough that implementation would require guessing.
- The proposed solution feels broader than the stated problem.
- A prior attempt failed and the next approach needs scrutiny.

## Procedure

1. Identify the stated goal, non-goals, constraints, and success criteria.
2. Inspect the code, docs, issues, or existing patterns when they can answer a question. Do not ask the user for facts the repo can provide.
3. Separate facts from assumptions. Mark assumptions explicitly.
4. Load `references/critique-rubric.md` when the critique is nontrivial, architectural, high risk, or needs structured findings.
5. Test the plan against goal fit, scope discipline, integration risk, operational risk, testability, and simplicity.
6. Report only meaningful objections. Do not pad with style preferences.
7. Offer a recommended path when there is enough evidence.

## Output

Start with a verdict:

- `Sound`: no material concerns.
- `Revise`: usable direction with targeted fixes needed.
- `Rethink`: core approach likely fails or carries unjustified risk.

Then list findings by severity:

- `Blocking`: must resolve before implementation.
- `Risk`: should decide or mitigate before implementation.
- `Question`: answer needed to remove ambiguity.
- `Simplify`: likely overbuilt or avoidable complexity.

Use `references/critique-rubric.md` for the detailed dimensions, finding shape, overengineering checks, and good/bad examples.

## Boundaries

- Do not implement the plan during critique.
- Do not treat preference as correctness.
- Do not ask multiple broad questions at once; batch only tiny clarifications.
- Do not outsource judgment to a source example, a report, or another agent. Verify.
- If the user asks for interactive grilling instead, use `grill`.
