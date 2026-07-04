# Tech Stack Artifact Reference

Load this only when writing or reviewing `context/foundation/tech-stack.md`.

## Template

```markdown
---
stack: <e.g. Next.js + Postgres + Prisma>
package_manager: <npm | pnpm | uv | cargo | …>
language: <ts | py | go | rust | …>
hints:
  deployment_target: <if known>
  has_auth: <true | false>
  has_payments: <true | false>
---

# Tech Stack

## Choice

- <component>: <choice> — <one-line why>

## Constraints

- <anything the stack forces on the roadmap or a plan>

## Not Chosen

- <notable alternative rejected, and why>   (greenfield only)
```

## Rules

- Prefer typed, convention-based, well-documented, widely-used tools; agents work with them more reliably.
- Keep the "why" to one line per component.
- Brownfield: record reality; do not prescribe a rewrite.
- Frontmatter `hints` exist so `roadmap` can read them — keep them minimal and accurate.

## Worked Example

```markdown
---
stack: Next.js + Postgres + Prisma
package_manager: pnpm
language: ts
hints:
  deployment_target: vercel
  has_auth: true
  has_payments: false
---

# Tech Stack

## Choice

- Framework: Next.js — typed, conventional, huge training presence; app already targets web.
- Datastore: Postgres — relational fit for per-user favorites; team knows SQL.
- ORM: Prisma — typed queries and migrations reduce agent error.
- Auth: session cookie via existing `getSession` — reuse, no new dependency.

## Constraints

- Server actions/route handlers only; no separate API service in scope.

## Not Chosen

- Firebase: would couple auth + data to one vendor and hide the SQL model the team wants.
```
