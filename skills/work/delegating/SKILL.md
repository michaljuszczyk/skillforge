---
name: delegating
description: Decide what to hand to a subagent and how to brief it — bounded task, task-local context, explicit path ownership, report contract, and the cheapest model that can do it. Use when work could run in parallel, when fresh isolated context would beat your loaded session, or when output would flood this conversation. Triggers on delegate, dispatch, subagent, split the work, fan out, parallel agents, or spawn an agent.
---

# Delegating

## Rule

Delegate only narrow, isolated, verifiable work with explicit ownership. A subagent starts cold:
give it exactly what it needs, none of your session's history, and verify what it returns before
relying on it. Delegation buys context hygiene and parallelism — it does not offload judgment.

## Use when

- The task is bounded and self-contained: a research track, an exploration, a bulk mechanical
  edit, an isolated review.
- Fresh context would do it better than your loaded session.
- Independent tracks can run at once — code-path discovery, test and contract survey, and
  history archaeology are three agents, not one.
- The output would be large. Bulk findings belong in a file, not in your context.

Do not delegate: tightly coupled work where agents would thrash, edits faster done directly, or
anything that needs the whole conversation to judge.

## Brief contract

Every dispatch states, explicitly:

1. **The one task** and its done condition.
2. **Task-local context only** — the files, interfaces, and decisions it needs. Never paste
   session history. Never assume it can see what you can see.
3. **Path ownership** — which paths it may write. Never dispatch two writers over overlapping
   paths. (Optional, never required: where the repo and host make it cheap, giving each writer
   its own git worktree removes the overlap problem instead of managing it.)
4. **The rules it must follow** — the conventions or skills that apply to its work.
5. **The report contract** — what to return: status, evidence, file references. For bulk output,
   give it a file path to write and have it return only the path and a summary.

A brief you would not accept from a stranger is not a brief.

## Model tier

State the tier explicitly on every dispatch; an omitted model silently inherits your session's,
usually the most expensive one available.

- **Cheapest** — mechanical or fully specified: read-only lookups, a one-or-two-file edit with a
  complete spec, transcription.
- **Mid** — integration and judgment: multi-file work, pattern matching, synthesis, debugging.
- **Most capable** — architecture, design, or a final whole-change review.

Turn count beats token price. The cheapest models often take two to three times the turns on
multi-step work and cost more in the end. Use mid as the floor for anything needing judgment.

## Verify

Inspect what comes back against the source before you trust it. A confident report is not
evidence: spot-check research claims against the files; read the diff for edits. Unverified
subagent output is a rumor.

## When it comes back wrong

Send the findings back to the **same** agent while its context is still alive — it knows what it
already tried. After two failed returns, dispatch a fresh agent one tier up, with the brief, the
findings, and one line saying a previous agent attempted this twice. Cap it at four rounds:
past that the brief is wrong, not the agent. Fix the brief or do the work yourself.

## Without subagents

If the host has no subagents, the contract still holds — it was always a discipline before it
was a feature. Do the work in a deliberately narrow pass, take only the context that pass needs,
write bulk output to a file rather than into the conversation, and verify the result against the
source the same way you would verify someone else's.

## Boundaries

- Do not delegate work you cannot verify.
- Do not run parallel writers over overlapping paths.
- Do not delegate a decision the user gave you to make.
- Do not delegate to escape a hard problem — if you cannot brief it, you do not understand it
  yet.
- If the host supports named agent roles, map read-only fact-finding and delegated verification
  onto them; if it does not, the brief contract above is enough on its own.
