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

## Worked Example

Proposed breakdown (two vertical slices, in dependency order):

```markdown
1. Persist recipe favorite toggle end-to-end - a signed-in user can favorite/unfavorite one recipe; blocked by none; acceptance: toggle persists per user across reload.
2. Show my favorites list - a user sees only their own favorites, newest first; blocked by #1; acceptance: list shows the user's favorites and excludes others'.
```

Slice 1 as a full issue body:

```markdown
# Persist recipe favorite toggle end-to-end

## Parent
PRD: Recipe favorites

## What To Build
A signed-in user can favorite/unfavorite one recipe from the recipe card; the state persists per user and survives reload. Includes the migration, service methods, session-guarded endpoints, and the heart toggle.

## Acceptance Criteria
- [ ] POST /api/recipes/:id/favorite persists a favorite; DELETE removes it; both return the new state.
- [ ] A signed-out request returns 401.
- [ ] Favoriting the same recipe twice does not create duplicate rows.
- [ ] Heart state survives page reload.

## Technical Notes
- New table `recipe_favorites(user_id, recipe_id, created_at)` with unique (user_id, recipe_id).

## Tests
- Integration: `recipe-favorites.test.ts` (toggle persists; per-user isolation; idempotent).

## Blocked By
None

## Out Of Scope
- Favorites list page (slice #2), sharing, folders.
```
