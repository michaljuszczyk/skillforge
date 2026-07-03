---
name: to-issues
description: Use to break a PRD, plan, or spec into independently buildable vertical-slice issues without assuming a specific tracker.
---

# To Issues

## Rule

Break the work into thin vertical slices that can be built, tested, and reviewed independently. Do not default to horizontal layer tickets.

## Use When

- The user asks to create issues, tickets, implementation tasks, or a tracker breakdown.
- A PRD, plan, or spec needs to become work items for agents or developers.
- Work is too large for one safe implementation pass.

## Procedure

1. Read the source material fully.
   - Use the current conversation if no file is provided.
   - If an issue, URL, or path is provided, read it before slicing.
2. Inspect the codebase when it clarifies natural boundaries, existing seams, or dependencies.
3. Identify prefactoring work only when it makes later vertical slices smaller or safer.
4. Load `references/issue-template.md` before drafting slices, issue bodies, or local markdown output.
5. Draft slices.
   - Each slice should produce observable behavior or a verifiable internal capability.
   - Include all layers needed for that narrow outcome.
   - Keep dependencies explicit.
6. Present the proposed breakdown for approval when the user has not already asked to directly write local issues.
7. Publish or write the issues.
   - If tracker details are available, create issues in dependency order.
   - If tracker details are missing, create or present local markdown and ask for the target.

## Slice Rules

- Prefer one small end-to-end path over "database task", "API task", "UI task".
- A slice is done when it can be tested or demonstrated.
- Shared setup may be its own issue only when it unblocks multiple slices and has clear verification.
- Avoid issues that require global context to understand.
- Avoid speculative follow-ups. Add them only when the source material requires them.

## Output

When proposing slices, use:

1. `<title>` - goal, blockers, acceptance summary.
2. `<title>` - goal, blockers, acceptance summary.

Then ask whether the granularity and dependencies are right unless the user requested no-interview output.

Use `references/issue-template.md` for the issue body template, slicing checklist, and tracker-neutral output rules.

## Boundaries

- Do not assume GitHub, Jira, Linear, or labels unless the user or repo provides them.
- Do not close or mutate parent issues unless explicitly asked.
- Do not create broad "cleanup" tickets without a specific enabling purpose.
- Do not hide unresolved product decisions inside implementation tickets.
