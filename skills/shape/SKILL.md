---
name: shape
description: Use to turn a raw product idea, feature request, bug theme, or architectural change into a sharp change brief before research or planning. Triggers when the user wants to shape, scope, clarify, frame, or de-risk nontrivial development work.
---

# Shape

Shape converts an unclear request into an artifact-backed brief. Use it before `research` or `plan` when the work is not already crisp enough to implement.

Use `use-skillforge` first when available. Apply `lean-coding` throughout: ask only questions that change scope, risk, or the next artifact. Use `critique` when the framing feels too broad, solution-led, or under-tested.

## Reference Loading

Load `references/shape-template.md` only when writing or reviewing `shape.md`. Do not load it for routing, state checks, or a clarification-only invocation.

## State

Skillforge state is artifact-driven:

- Foundation context lives in `context/foundation/`.
- Change work lives in `context/changes/<change-id>/`.
- Shape writes `context/changes/<change-id>/shape.md`.
- If the request is project-wide or multi-change discovery, write `context/foundation/shape.md` and hand off to `roadmap`, which mints the change-ids.

If `context/` is missing, create only the needed directories. Do not create README files or extra docs.

## Process

1. Read any user-provided notes, ticket text, screenshots, or referenced files fully.
2. Detect whether this is greenfield, brownfield feature work, a bug, a refactor, or infrastructure work from the repo and the user's words.
3. Ask at least one sharp question for nontrivial work, even if the request seems clear. For larger or riskier work, ask complexity-scaled questions across goal, users, current behavior, target behavior, constraints, non-goals, and verification.
4. Prefer concrete options with tradeoffs when the user needs help deciding. Mark one option `(Recommended)` only when evidence supports it.
5. Challenge vague scope by asking what would make the work fail, what must not change, and which behavior proves success.
6. If writing or reviewing the artifact, follow Reference Loading before doing so.
7. Write the shape artifact. Do not invent domain commitments the user did not make.

## Artifact Rules

The artifact must be concrete enough that `research` can investigate unknowns or `plan` can produce implementation phases without re-shaping the work. Preserve user language where it carries domain meaning, but convert vague wishes into explicit scope, non-goals, risks, and verification intent.

## Handoff

Every response that completes or pauses a phase ends with:

- Current state: artifact written or updated, unresolved questions, confidence.
- Recommended next command: `roadmap` for a big or multi-change initiative; otherwise `research <change-id>` for codebase unknowns or `plan <change-id>` when context is sufficient.
- Optional alternatives: `critique` for a framing challenge, `review` for existing proposal review, or stop if the shape is intentionally exploratory.
- Copyable command block.
