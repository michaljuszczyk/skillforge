# Research Artifact Reference

Load this only when writing, appending to, or reviewing `context/changes/<change-id>/research.md`.

## Template

```markdown
# Research: <topic>

## Question

<the question being answered>

## Short Answer

- <direct answer>
- <direct answer>
- <direct answer>

## Findings

### <area>

- Finding: <claim>
- Evidence: `<path>:<line>` or artifact path
- Implication: <what this means for the change>

## Relevant Code

- `<path>:<line>` - <why it matters>

## Existing Tests and Verification

- Current coverage:
- Gaps:
- Test-first opportunity:

## Risks and Unknowns

- <risk or unknown, with how to resolve it>

## Recommended Plan Inputs

- Scope:
- Files likely touched:
- Constraints:
- Behavior to test first:
```

## Evidence Rules

- Every non-obvious finding needs a source path, line reference, command result, or upstream artifact path.
- Prefer live code and tests over old plans. Use historical artifacts to explain why a pattern exists, not to prove current behavior.
- Separate observed fact from inference. Use phrases like `Inference:` when the code implies but does not state the conclusion.
- Do not recommend implementation until the relevant files, tests, and contracts have been checked.
- If a subagent or prior artifact supplied a claim, verify important claims yourself before including them as findings.

## Bug Research Additions

For a bug, add these details in the relevant sections:

- Suspected reproduction path: exact user action, command, input, or fixture needed to observe the failure.
- Expected vs actual behavior: one sentence each.
- First failing verification: the test or manual repro that should fail before the fix.
- Blast radius: callers, integrations, data, or UI surfaces likely affected by the fix.

If reproduction is not yet possible, write that plainly in `Risks and Unknowns` and make reproduction the first recommended plan input.

## Follow-Up Format

When answering a follow-up, append to the same artifact:

```markdown
## Follow-up: <YYYY-MM-DD> - <short topic>

### Question

<follow-up question>

### Answer

- <answer with evidence>

### Added Evidence

- `<path>:<line>` - <why it matters>

### Plan Impact

- <what changes, if anything, for scope, files, tests, or risks>
```

Update existing conclusions only when new evidence invalidates them; otherwise append the follow-up so the research history remains readable.
