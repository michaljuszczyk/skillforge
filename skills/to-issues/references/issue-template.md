# Issue Template

Load this reference before drafting issue slices, issue bodies, or local markdown issue output.

## Vertical Slice Checklist

- The issue produces observable behavior or a verifiable internal capability.
- The slice includes every layer needed for that narrow outcome.
- The title is imperative and specific.
- Acceptance criteria are testable without global context.
- Dependencies are explicit and ordered.
- Prefactoring exists only when it makes later vertical slices smaller or safer.
- Out-of-scope notes prevent adjacent work from leaking into the issue.

Avoid horizontal tickets such as "add database", "build API", or "create UI" unless the source material truly asks for infrastructure only.

## Issue Body

```markdown
# <imperative title>

## Parent
<PRD, plan, issue, or omitted if none>

## What To Build
<concise description of the vertical slice>

## Acceptance Criteria
- [ ] <observable behavior or verification>

## Technical Notes
- <known constraints, contracts, files, or patterns when useful>

## Tests
- <expected test level or command if known>

## Blocked By
<issue reference or "None">

## Out Of Scope
- <nearby work intentionally excluded>
```

## Proposed Breakdown Format

```markdown
1. <title> - <goal>; blocked by <dependency or none>; acceptance: <short proof>.
2. <title> - <goal>; blocked by <dependency or none>; acceptance: <short proof>.
```

Ask whether granularity and dependencies are right unless the user requested direct no-interview output.

## Tracker Neutrality

- Do not assume GitHub, Jira, Linear, labels, assignees, milestones, or projects.
- If tracker details are available, publish in dependency order so blockers can be referenced.
- If tracker details are missing, create or present local markdown and ask for the target.
- Do not close or mutate parent issues unless explicitly asked.
