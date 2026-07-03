---
name: research
description: Use to investigate a codebase, dependency, architecture, prior decisions, or failure path before planning or implementation. Triggers for research, investigate, find how, understand, trace, compare approaches, or ground a change in existing code.
---

# Research

Research answers a focused question with evidence. It grounds the next plan in the current codebase and existing artifacts instead of guesses.

Use `use-skillforge` first when available. Apply `lean-coding` by narrowing the research question before broad searches. Use `critique` when findings reveal the original premise is weak.

## Reference Loading

Load `references/research-template.md` only when writing, appending to, or reviewing `research.md`. Do not load it for routing or quick clarification.

## State

Research writes `context/changes/<change-id>/research.md`. If no change-id exists, derive a short kebab-case id from the topic and create `context/changes/<change-id>/`.

Read these first when present:

- `context/foundation/*` for project rules, terminology, stack notes, and accepted lessons.
- `context/changes/<change-id>/shape.md`.
- Existing `research.md` when resuming or answering follow-ups.
- Any user-mentioned files, fully.

## Process

1. Restate the research question in one sentence.
2. Ask at least one sharp scope, focus, or depth question for nontrivial research. Skip only when the query is tight and factual.
3. Search broadly, then read narrowly. Prefer `rg`, `rg --files`, repository history, tests, configs, and neighboring implementations.
4. Use subagents for independent research tracks when available and useful: one for code path discovery, one for tests/contracts, one for history/prior decisions. The read-only `investigator` agent fits these tracks when the host supports named subagents. Ask for file references and evidence, not opinions.
5. Verify important subagent claims yourself against source files before writing conclusions.
6. If writing, appending to, or reviewing the artifact, follow Reference Loading before doing so.
7. Capture uncertainty explicitly. Do not turn weak evidence into recommendations.

## Handoff

End with:

- Current state: what was learned, what remains unknown, artifact path.
- Recommended next command: usually `plan <change-id>`; use `tdd <change-id>` only if a plan already exists and the next behavior is TDD-ready.
- Optional alternatives: `shape <change-id>` if the research changes scope; `critique` if the approach needs challenge.
- Copyable command block.
