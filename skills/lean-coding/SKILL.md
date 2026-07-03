---
name: lean-coding
description: Use for coding, fixing, refactoring, reviewing, or dependency decisions to keep changes minimal, reused, native, and justified.
---

# Lean Coding

## Rule

Build the smallest correct change after understanding the code path. Lean means less code owned, not less care.

## Ladder

Stop at the first rung that solves the real problem:

1. Do nothing if the need is speculative.
2. Reuse code, types, helpers, patterns, and tests already in the repo.
3. Use the standard library.
4. Use native platform features.
5. Use an already-installed dependency.
6. Write the smallest local code that works.
7. Add a new dependency only when the alternatives are clearly worse.

## Procedure

1. Read the task and the files it touches before editing.
2. Trace shared callers for bug fixes; fix the root cause once.
3. Keep the diff narrow and boring.
4. Delete or simplify before adding.
5. Add tests or checks only proportional to risk; nontrivial logic needs one runnable check.

## Guardrails

- No speculative abstractions, config, factories, interfaces, or scaffolding.
- No new dependency for a small local or native solution.
- Do not simplify away validation, security, data-loss protection, accessibility basics, or explicit requirements.
- If a shortcut has a known ceiling, note the ceiling and upgrade path in one concise code comment.

## Output

Report only what changed, what was intentionally skipped, and when to add more.
