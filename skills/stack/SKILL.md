---
name: stack
description: Use once per project to choose (greenfield) or record (brownfield) the tech stack as a durable decision before roadmap and building. Triggers on pick a stack, choose a framework, tech stack, or record or assess the existing stack.
---

# Stack

Stack produces the durable tech-stack decision record that `roadmap` and the per-change build read. It is optional and never a gate: the rest of the flow works without it, just with less shared context.

Use `use-skillforge` first when available. Apply `lean-coding`: prefer what the user already knows and what the ecosystem defaults to. Do not over-engineer the choice or invent requirements.

## Reference Loading

Load `references/tech-stack-template.md` when writing or reviewing `context/foundation/tech-stack.md`.

## Modes

- Greenfield (no manifest in the repo): decide with the user, or capture a choice they have already made. Read `shape.md`/`prd.md` for stack-forcing features (auth, payments, realtime, AI, scale).
- Brownfield (a manifest exists): detect the stack and record it. Do not recommend a rewrite.

## Process

1. Determine the mode. A repo with `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, or similar is brownfield.
2. Greenfield: identify stack-forcing requirements, then propose a stack (language, framework, datastore, key libraries) with short tradeoffs. Prefer typed, convention-based, well-documented, widely-used tools — they are easier for agents to use correctly. Capture the user's decision; do not decide unilaterally when it matters.
3. Brownfield: detect and summarize the existing stack from marker files. Note any agent-unfriendly gaps in one line of prose. Do not build a compensation-template engine.
4. Write `context/foundation/tech-stack.md`.
5. Greenfield only: suggest the scaffold command (e.g. `npm create …`, `cargo new …`) but do not run it unless the user asks.

## Handoff

- Current state: `tech-stack.md` path, chosen or detected stack.
- Recommended next command: `roadmap` (it reads `tech-stack.md`), or the scaffold command for greenfield.
- Copyable command block.

## Boundaries

- No curated starter registry; reason in-conversation.
- Do not scaffold, `git init`, or write CI/deploy configuration.
- Do not overwrite `AGENTS.md`, `CLAUDE.md`, or project rules.
- Optional, not a precondition. If skipped, `roadmap` still works.
