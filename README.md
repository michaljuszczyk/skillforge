# Skillforge

A personal, opinionated skills library for AI coding agents. Spec-driven, lean, and verified — the best of the tools I use, consolidated into one package that behaves the same across Claude Code, Cursor, and Codex.

## What's inside

**Gateway (always-on)**
- `use-skillforge` — forces a skill check before any action; injected every session and after every compaction.

**Process** — `shape` → `research` → `plan`
Artifact chain under `context/changes/<change-id>/`; the plan's `## Progress checklist` is durable execution state.

**Execution** — `implement`, `tdd`, `subagent-driven-development`

**Quality** — `debugging`, `critique` (interactive: `grill`), `review` (gate verdict)

**Product** — `to-prd`, `to-issues`

**Meta / behavior** — `writing-skills`, `lean-coding`, `lean-output`, `verification-before-completion`, `handoff`

**Agents** (delegated roles) — `implementer`, `reviewer`, `critic`, `investigator`, `tester`

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
