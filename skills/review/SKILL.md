---
name: review
description: Use for findings-first review of code, diffs, PRs, plans against implementation, or completed work before merge or handoff.
---

# Review

## Rule

Review as a gate on correctness, spec fit, and maintainability. Findings come first. Praise and summaries are secondary.

This skill defines the review workflow. The `reviewer` agent is separate: it performs an independent diff/spec review when a delegated pass is useful.

## Use When

- The user asks for a review, code review, PR review, diff review, or "check this".
- Work is claimed complete and needs independent verification.
- A branch needs comparison against a base ref, issue, PRD, plan, or acceptance criteria.
- Feedback from another reviewer needs technical evaluation before implementation.

## Procedure

1. Pin scope.
   - For git work, resolve the base ref or merge-base and inspect the diff.
   - For file review, identify the exact files and relevant surrounding code.
   - If the base or scope is ambiguous, ask one blocking question.
2. Gather the sources of truth.
   - User request, issue, PRD, plan, acceptance criteria, tests, docs, and repo conventions.
   - If no spec exists, say so and review only correctness and quality.
3. Read the changed code before judging. Trace nearby callers only for a named risk.
4. Load `references/review-rubric.md` for nontrivial reviews, diff reviews, PR reviews, spec-fit reviews, or reviews that need examples of good findings.
5. Check correctness, spec drift, test gaps, maintainability, and overengineering.
6. Classify by severity: `Critical`, `Important`, `Minor`, or `Question`.
7. Recommend fixes, but do not apply them unless the user asks.

## Output

Lead with findings, ordered by severity. Each finding must include:

`path:line: Severity: problem. Why it matters. Suggested fix.`

Then include, only if useful:

- `Spec Fit`: pass, fail, or no spec available.
- `Test Evidence`: commands inspected or run, and what they prove.
- `Overengineering`: deletions or simplifications worth considering.
- `Open Questions`: only questions that affect the verdict.
- `Summary`: short, after findings.

If no issues are found, say that clearly and name any residual risk, such as unrun tests or missing spec.

Use `references/review-rubric.md` for detailed checks, severity definitions, overengineering checks, and examples of good and bad findings.

## Feedback Intake

When receiving review feedback:

1. Understand each item before editing.
2. Verify it against the codebase.
3. Push back with technical evidence when the suggestion is wrong, speculative, or conflicts with prior decisions.
4. Fix one coherent group at a time and rerun the relevant checks.

Do not perform agreement theater. State the requirement, fix, evidence, or reasoned disagreement.

## Boundaries

- Do not review unrelated files just because they are nearby.
- Do not flag formatting that tooling already enforces unless it changes meaning.
- Do not bury blocking findings under general commentary.
- Do not modify code during review unless explicitly asked to address findings.
