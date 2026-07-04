# Skillforge

A personal, opinionated skills library for AI coding agents. Spec-driven, lean, and verified — the best of the tools I use, consolidated into one package that behaves the same across Claude Code, Cursor, and Codex.

## What's inside

Skills split into a coherent **main flow** and standalone **addons**.

**Gateway (always-on)**
- `use-skillforge` — forces a skill check before any action; injected every session and after every compaction.

**Main flow** — shares the `context/` structure:
- **Big picture** — `roadmap` (decompose an epic into a dependency-ordered change index, with pre-mortem / unknown-unknowns / devil's-advocate de-risking) · `stack` (durable tech-stack decision record)
- **Process** — `shape` → `research` → `plan` (artifact chain under `context/changes/<id>/`; the plan's `## Progress checklist` is durable state)
- **Execute** — `implement`, `tdd`, and `subagent-driven-development` (meta-orchestrator: fragments work across subagents, review loops, concluding gate)
- **Diagnose** — `debugging` (feedback-loop-first)
- **Gate** — `review` (Approved / Needs-attention / Rejected)

**Behavioral (cross-cutting)** — `lean-coding`, `lean-output`, `verification-before-completion`, `delegating` (correct subagent work-fragmentation in any phase)

**Addons (standalone; never forced into the flow)** — `to-prd`, `to-issues`, `critique` (interactive: `grill`), `handoff`, `writing-skills`

**Agents** (delegated roles) — `implementer`, `reviewer`, `critic`, `investigator`, `tester`

### The flow

```
big / greenfield:  shape → (to-prd) → stack → roadmap(+de-risk) → plan <id> → implement/tdd/sdd → review   ( ) = optional addon
big / brownfield:  shape → roadmap(+de-risk) → plan <id> → …
small change:      shape → plan → build            (roadmap/stack skipped)
```

## Install

Two layers, because they serve different needs.

### 1. Portable skills — any tool

```bash
npx skills add michaljuszczyk/skillforge          # this project
npx skills add michaljuszczyk/skillforge -g       # global (all projects)
```

Installs the `skills/` into each detected agent (`.claude/skills`, `.cursor/skills`, `.codex/skills`…). Skills are model-invoked on demand. This does **not** install the always-on hook.

### 2. Always-on awareness — Claude Code / Cursor

For the gateway to be injected every session (and survive `/clear` and compaction), install as a plugin so the `SessionStart` hook runs:

**Claude Code**
```
/plugin marketplace add michaljuszczyk/skillforge
/plugin install skillforge
```

**Cursor** — point Cursor at `.cursor-plugin/plugin.json` (skills + `hooks/hooks-cursor.json`).

**Any AGENTS.md-aware tool** — `AGENTS.md` at the repo/workspace root is read automatically and carries the non-negotiable "check for a skill first" rule as a fallback when no hook is available.

## How always-on works

`hooks/session-start` reads `skills/use-skillforge/SKILL.md` and injects it at `startup|clear|compact`, emitting the correct JSON shape per platform (`additional_context` for Cursor, `hookSpecificOutput.additionalContext` for Claude Code, top-level `additionalContext` otherwise). `run-hook.cmd` is a polyglot wrapper so the same hook runs on Windows and Unix.

## Layout

```
AGENTS.md / CLAUDE.md / GEMINI.md   session gateway (auto-read)
hooks/                              SessionStart injection (Claude + Cursor)
.claude-plugin/ .cursor-plugin/ .codex-plugin/   per-harness plugin manifests
skills/<name>/SKILL.md              lean behavior + lazy references/
agents/<role>.md                    delegated subagent role contracts
```
