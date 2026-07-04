# Roadmap Artifact Reference

Load this only when writing or reviewing `context/foundation/roadmap.md`.

## Template

```markdown
# Roadmap: <project or epic>

## North Star

<the one change that proves the product works, and why>

## At a Glance

| Change ID | Outcome (user can…) | Depends on | Status | Notes |
|-----------|---------------------|-----------|--------|-------|
| <change-id> | <verb-led outcome> | <ids or —> | proposed | |

## Foundations

- <change-id> (unlocks: <change ids>): <cross-cutting enabler>

## Changes

### <change-id>

- Outcome: <user can…>
- Depends on: <ids or none>
- Source: <PRD FR/US refs>
- Risks: <from de-risking, tagged by pass, or none>
- Status: proposed | ready | blocked | done

## Parked

- <deferred scope>: <why deferred>

## Open Questions

- <question, owner>
```

## Rules

- Every change is a vertical, end-to-end outcome ("user can…"), never a horizontal layer.
- A foundation must name what it unlocks; an orphan foundation is a self-review failure.
- Dependencies form a DAG with no cycles. Set Status `blocked` when a prerequisite or open question blocks the item.
- The Change ID is stable kebab-case and equals the `context/changes/<change-id>/` folder name.
- No dates, points, or estimates. Order, north star, and status carry priority.
- Every must-have requirement from the PRD must land in some change's Source refs.

## Worked Example

```markdown
# Roadmap: Recipe app

## North Star

`recipe-favorites` — a signed-in user saving and re-finding recipes proves the core loop works.

## At a Glance

| Change ID | Outcome (user can…) | Depends on | Status | Notes |
|-----------|---------------------|-----------|--------|-------|
| auth | sign in and stay signed in | — | ready | |
| recipe-browse | browse and open recipes | — | ready | |
| recipe-favorites | favorite/unfavorite a recipe | auth, recipe-browse | proposed | north star |
| favorites-list | see my favorites, newest first | recipe-favorites | proposed | |

## Foundations

- auth (unlocks: recipe-favorites, favorites-list): session + per-user identity.

## Changes

### recipe-favorites

- Outcome: a signed-in user can favorite/unfavorite a recipe and it persists.
- Depends on: auth, recipe-browse
- Source: FR-003, US-02
- Risks: double-submit creates duplicate rows (devil's-advocate) → unique (user_id, recipe_id).
- Status: proposed

## Parked

- Sharing favorites: not needed for the core loop.

## Open Questions

- Does the favorites list need pagination? (owner: user) — only past ~100 favorites.
```
