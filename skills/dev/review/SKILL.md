---
name: review
description: Review code, a diff, a PR, or work claimed complete as a gate — findings first, ordered by severity, each with a location and a fix. Use when asked to review or check something, before merge or handoff, when comparing an implementation against its spec, or when evaluating someone else's review feedback. Triggers on review, code review, PR review, check this, or is this ready.
---

# Review

## Rule

Review is a gate, not a compliment. Findings come first, ordered by severity, each anchored to a
location. Summary and praise come last or not at all.

If the host has a native review command, run it and apply this rubric to its output — then add
what it missed. Its mechanics, your judgment.

## Reference loading

Load `references/rubric.md` for any nontrivial review: the axes to check, severity definitions,
finding format, and worked examples of good and bad findings. Load `references/done.md` when the
question is "is this ready to merge or hand over". Skip both for a single-file glance.

## Procedure

1. **Pin the scope.** For git work, resolve the base ref or merge-base and read the diff. For
   file review, name the exact files. If the scope is genuinely ambiguous, ask one question and
   stop.
2. **Gather the sources of truth**: the request, the brief or plan, acceptance criteria, tests,
   and the repo's conventions. If no spec exists, say so and review correctness and quality only.
3. **Read the changed code before judging it.** Trace callers only for a risk you can name.
4. Check the axes in the rubric: correctness, spec fit, tests, maintainability, overengineering.
5. Classify each finding: `Critical`, `Important`, `Minor`, `Question`.
6. Recommend the fix. Do not apply it unless asked.

## Verify before you claim

A finding you cannot demonstrate is a hypothesis. For each `Critical`, state the concrete
failure path: the input or state, and the wrong result it produces. If you cannot, downgrade it
or mark it a `Question`.

## Output

Findings first, most severe first, each as:

```
path:line: Severity: problem. Why it matters. Suggested fix.
```

Where no line exists, use the narrowest stable location — a function, a section, a file. **An
omission is located at the thing it should have satisfied**: a requirement with no implementing
code is a finding at the brief line that requires it, a missing migration at the schema change
that needs one. Omissions are usually the most valuable findings in a review, so never drop one
for want of a line number.

Then, in two lines: what you checked and what you did not, and the verdict — **approved**,
**needs attention**, or **rejected**, with the one reason.

## Boundaries

- No preference dressed as a finding. If it is taste, either say so or drop it.
- No finding without a location, an impact, and a fix.
- Do not rewrite the work while reviewing it.
- Do not pad the list to look thorough. Zero findings is a legitimate result — say what you
  checked so the verdict can be trusted.
- Do not accept another reviewer's finding without evaluating it yourself; being wrong in
  agreement is still being wrong.
