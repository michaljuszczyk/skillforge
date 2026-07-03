# Skillforge

You are running with Skillforge, a personal skills library for spec-driven, lean, verified development. This file is read at session start by Claude Code, Cursor, Codex, and other AGENTS.md-aware tools. When a `SessionStart` hook is installed, the full `use-skillforge` gateway is also injected and re-injected after every compaction.

## Non-negotiable

If there is even a 1% chance a skill applies to what you are about to do, invoke it **before any response or action** — including clarifying questions and exploration. Read `skills/use-skillforge/SKILL.md` first when unsure. If a skill applies, you must use it unless the user tells you otherwise.

## Routing

- Coding, fixing, refactoring, reviewing, dependency choice → `lean-coding`.
- Unclear or unshaped work → `shape` → `research` → `plan`.
- Executing a plan → `implement`, `tdd`, or `subagent-driven-development`.
- A bug or failure to diagnose → `debugging` before any fix.
- Challenging a plan → `critique` (interactive: `grill`).
- Reviewing code or a completed phase → `review`.
- Authoring or harvesting a skill → `writing-skills`.
- Any done / fixed / passing / commit / PR claim → `verification-before-completion`; evidence before status.

## Always

- Output is short and high-signal — use `lean-output`. Use normal, careful clarity for destructive actions, security, commits, PRs, and anything where terse wording could be misread.
- Git safety: never revert or overwrite user or peer edits. Own only the paths assigned for the task, inspect before editing, leave unrelated changes alone. Never stage or commit unless the user asks.
- Subagents: delegate only narrow, isolated work with explicit path ownership and required skills. Verify their output yourself before relying on it.
