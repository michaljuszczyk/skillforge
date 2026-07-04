---
name: delegating
description: Use to split work across subagents correctly in any phase — research, planning, exploration, review, or bulk mechanical work — deciding what to delegate, how to brief it, and which model to use. Triggers on delegate, dispatch subagents, split work, parallel agents, fan out, or spawn an agent.
---

# Delegating

## Rule

Delegate only narrow, isolated, verifiable work with explicit ownership. A subagent starts cold: give it exactly what it needs, none of your session's history, and verify what it returns before relying on it. Delegation buys context hygiene and parallelism — it does not offload judgment.

## Use When

- A task is bounded and self-contained: a research track, an exploration, a bulk mechanical edit, an independent review.
- Fresh, isolated context would do the task better than your loaded session.
- Independent tracks can run in parallel — e.g. code-path discovery, tests/contracts, and history each as its own agent.

Do not delegate: tightly coupled work where agents would thrash, tiny edits faster done directly, or anything that needs the full conversation context to judge.

## Brief Contract

Every dispatch states:

1. The one bounded task and its done condition.
2. Task-local context only — the files, interfaces, and decisions it needs. Never paste session history.
3. Explicit path ownership: which paths it may touch. Never dispatch two writers over overlapping paths.
4. The skills it must follow.
5. The report contract: what to return (status, evidence, file references), plus a report-file path for bulk output so it does not flood your context.

## Model Selection

Use the least powerful model that can handle the task, and state the model explicitly on every dispatch — an omitted model inherits your session's, usually the most capable and most expensive.

- Mechanical or fully specified (read-only research, a 1-2 file edit with a complete spec, transcription): cheapest tier.
- Integration or judgment (multi-file, pattern matching, debugging, synthesis): standard tier.
- Architecture, design, or a final whole-change review: most capable tier.

Turn count beats token price: the cheapest models often take 2-3x the turns on multi-step work and cost more overall. Use a mid-tier model as the floor for anything requiring judgment.

## Verify

Inspect subagent output against the source before trusting it. A confident report is not evidence: for read-only research, spot-check key claims against the files; for edits, read the diff.

## Boundaries

- Do not delegate work you cannot verify.
- Do not run parallel writers on overlapping paths.
- Do not offload a decision the user gave you to make.
- Read-only fact-finding fits the `investigator` agent; delegated verification fits the `tester` agent, when the host supports named subagents.
