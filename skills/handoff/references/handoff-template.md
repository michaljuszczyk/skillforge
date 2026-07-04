# Handoff Template

Load this reference whenever writing a handoff document.

## Compactness Rules

- Write for the next capable agent, not for archival history.
- Prefer artifact paths, URLs, commits, branches, issue IDs, and command names over copied content.
- Include only decisions that still constrain the next step.
- Include command results only when they change what the next agent should trust or do.
- Use absolute paths when they remove ambiguity.

## Redaction Checklist

Replace secrets with `[REDACTED]`; do not preserve prefixes, suffixes, or partial values.

- API keys, tokens, passwords, private keys, certificates, recovery codes.
- Cookies, session IDs, auth headers, OAuth codes, signed URLs.
- Database connection strings and cloud credentials.
- Personal data not needed for continuation.
- Proprietary customer data not needed for continuation.

If a secret appeared in a command, include the command shape without the secret value.

## Document Shape

```markdown
# Handoff: <short task name>

## Goal
<one paragraph>

## Current State
<what is done, what is not done>

## Decisions And Constraints
- <decision or constraint>

## Artifacts
- <path or URL>: <why it matters>

## Changed Or Relevant Paths
- <path>: <state>

## Verification
- <command or inspection>: <result>

## Next Actions
1. <next action>

## Open Questions
- <question or "None">

## Suggested Skills
- <skill>: <why>
```

## Quality Check

Before reporting the path:

- The file is in the OS temp directory, not the workspace.
- The next action is specific enough to start.
- Relevant artifacts are linked or named instead of pasted.
- Secrets and unnecessary personal data are redacted.
- The handoff does not claim completion unless fresh verification supports it.

## Worked Example

```markdown
# Handoff: recipe favorites — persist toggle

## Goal
Ship the favorite/unfavorite toggle for signed-in users, persisted per user.

## Current State
Phase 1 done and reviewed (Approved). Favorites list (phase 2) not started.

## Decisions And Constraints
- Join table recipe_favorites(user_id, recipe_id, created_at), unique (user_id, recipe_id).
- Optimistic UI toggle with rollback on a non-200 response.

## Artifacts
- context/changes/recipe-favorites/plan.md: phases + progress checklist.
- context/foundation/roadmap.md: this change's Status is now done.

## Changed Or Relevant Paths
- migrations/0007_recipe_favorites.sql: added.
- src/services/RecipeService.ts: favorite / unfavorite / isFavorited.

## Verification
- `npm test -- recipe-favorites.test.ts`: 6 passing.

## Next Actions
1. Start the favorites-list change: `plan favorites-list`.

## Open Questions
- Pagination for >100 favorites? (owner: user)

## Suggested Skills
- plan: to plan the favorites-list change.
- tdd: toggle and list behavior are test-first friendly.
```
