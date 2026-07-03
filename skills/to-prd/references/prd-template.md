# PRD Template

Load this reference before drafting a PRD body, local markdown file, or tracker-ready PRD.

## Template

```markdown
# PRD: <name>

## Problem
<user-facing problem and why it matters>

## Goals
- <goal>

## Non-Goals
- <explicitly out of scope>

## Users And Use Cases
- <actor>: <job they need done>

## Requirements
### Functional
- <observable behavior>

### Non-Functional
- <performance, reliability, security, accessibility, compatibility, or operational requirement>

## User Stories
1. As a <actor>, I want <capability>, so that <benefit>.

## UX Or Workflow
<states, interactions, command flow, API flow, or screen behavior as relevant>

## Implementation Decisions
- <decided technical direction, module boundary, contract, schema, or integration>

## Testing Strategy
- <behavior to verify and the preferred test level>

## Rollout And Migration
- <release, migration, backfill, rollback, or compatibility notes>

## Risks And Open Questions
- <risk or question>

## Acceptance Criteria
- [ ] <observable criterion>
```

## Writing Rules

- Requirements are testable and phrased as product behavior.
- Scope boundaries are explicit.
- Use project vocabulary from docs, code, ADRs, or glossary where available.
- Mark assumptions as assumptions.
- Unknowns stay in risks or open questions, not hidden inside requirements.
- Implementation details appear only when already decided or strongly implied by the repo.
- Avoid file paths and code snippets unless they encode a binding decision more clearly than prose.
- Do not turn the PRD into a task list; use `to-issues` for implementation slices.

## Tracker Neutrality

- Do not assume GitHub, Jira, Linear, labels, milestones, or assignees.
- If a tracker target is missing, produce local markdown or response text and ask for the target.
- If publishing to a tracker, preserve the same PRD content unless the tracker format requires small mechanical changes.

## Worked Example

```markdown
# PRD: Recipe favorites

## Problem
Signed-in users have no way to save recipes they like and return to them, so they re-search every visit.

## Goals
- Let signed-in users favorite and unfavorite recipes.
- Give them one place to see their favorites.

## Non-Goals
- Sharing, folders/tags, favorites for anonymous users.

## Users And Use Cases
- Home cook: save recipes now, cook them later.

## Requirements
### Functional
- A signed-in user can toggle a recipe as favorited from the recipe card and the recipe page.
- A user sees a favorites list containing only their own favorites, newest first.
### Non-Functional
- Toggle feels instant (optimistic UI) and persists within 1s.

## User Stories
1. As a signed-in user, I want to favorite a recipe, so that I can find it again later.

## UX Or Workflow
- Heart icon per recipe: outline = not favorited, filled = favorited. Anonymous users get a sign-in prompt.

## Risks And Open Questions
- Does the favorites list need pagination? Only if users exceed ~100 favorites.

## Acceptance Criteria
- [ ] Favoriting persists across reload.
- [ ] A user never sees another user's favorites.
```

(Implementation Decisions / Testing Strategy / Rollout sections are omitted here because none are decided yet for this simple feature — include them only when they carry a binding decision.)
