---
name: subagent-driven-development
description: Use to execute a Skillforge plan with fresh implementer and reviewer subagents per planned task or phase. Triggers for planned multi-task work, independent phases, subagent execution, implementation with critic/reviewer loops, or parallel-safe agentic development.
---

# Subagent-Driven Development

Subagent-Driven Development is first-class for planned multi-task Skillforge work. The controller stays in charge of state, dispatches a fresh implementer for each bounded phase or task, then dispatches an independent reviewer or critic before marking progress.

It is a meta-orchestrator, not another execution skill. It does not re-implement coding: each fragment's actual work is done with `implement` or `tdd` inside the implementer's brief. What this skill adds around them is work fragmentation, context isolation, per-task review loops, and the concluding gate.

Default to an adaptive loop: use implementer plus reviewer/critic loops for meaningful planned tasks, but avoid ceremony for tiny single edits that are better handled by `implement` or `tdd`.

Use `use-skillforge` first when available. Use `lean-coding` for task scope, `tdd` inside implementer instructions where practical, `critique` for design pressure, `review` for code review, and `verification-before-completion` before final completion. Dispatch the read-only `investigator` agent for fact-finding and the `tester` agent for delegated verification when it keeps the controller's context clean.

Use the role contracts in `agents/` when the current tool host supports named or prompt-driven subagents.

## References

Load `references/task-brief-template.md` before dispatching an implementer or fixer, choosing task-local context, or requiring the implementer report contract.

Load `references/review-loop.md` before preflight review, reviewer/critic dispatch, adjudicating findings, re-reviewing fixes, updating durable progress, or writing the controller handoff.

## State

Read `context/changes/<change-id>/plan.md` fully. The `## Progress checklist` is the only durable execution state; the first unchecked item is the resume point.

Also read `shape.md`, `research.md`, and relevant `context/foundation/*` docs. Create scratch handoff files only when needed for context hygiene, and keep durable scratch files under the change folder.

## When to Use

Use this skill when:

- A plan has multiple phases or tasks that can be implemented and reviewed independently.
- Review quality matters more than keeping all context in one agent.
- Work benefits from fresh context per task.

Do not use it when the next change is a tiny single edit, the plan is missing, or tasks are so tightly coupled that separate implementers would thrash.

## Invariants

These are binding regardless of how the loop is run:

- One fresh implementer per bounded task, briefed with task-local context only. Never dispatch implementers that could touch overlapping files.
- Independent review (reviewer or critic) passes before any `## Progress checklist` row flips. Verify the implementer's report against actual files before review.
- The model is stated explicitly on every dispatch, or it silently inherits the session's most expensive model.
- The checklist in `plan.md` is the only durable execution state; update it after every approved task, never from chat memory alone.
- Development concludes only when a final whole-change `review` gate returns `Approved` — plus `critique` if architecture or contracts changed — or the user accepts the residual risk. Then flip this change's Status to `done` in `context/foundation/roadmap.md` if it came from a roadmap.

## Default Loop

The default controller path; adapt it to the task shape (merge steps, reorder, batch reviews) with a stated reason — the invariants above are not adaptable:

1. Preflight the plan for contradictions, missing contracts, unsafe scope, or impossible verification.
2. Take the first unchecked checklist item, build the brief, dispatch one implementer.
3. Inspect the report and changed files, then dispatch an independent reviewer or critic with the brief, report, and diff or file list.
4. On blocking findings, dispatch a fixer or send the task back, re-review, then flip the relevant row(s).
5. Repeat until done or blocked, then run the concluding gate from the invariants.

The controller adjudicates conflicts between reviewer findings and plan text. Do not dismiss a finding because the plan implied it; ask the user when the plan itself appears wrong.

## Delegation and Model Selection

Follow `delegating` for the brief contract, model selection, and verification of every subagent — it is the general skill; this section only maps it onto these roles.

- Implementers on mechanical, well-specified tasks (or where the plan already contains the code): cheapest tier.
- Implementers doing integration or multi-file work, and per-task reviewers: standard tier as the floor.
- The final whole-change review: the most capable tier, not the session default.

State the model explicitly on every dispatch, or it silently inherits the session's most expensive model.

## Progress and Resume

After every approved task, update `## Progress checklist` in `plan.md`. Do not rely only on chat memory. If context is compacted or the session resumes, re-read the plan and continue from the first unchecked row.

Do not stage or commit unless the user explicitly asks. If commits are requested, stage only paths touched by the approved task and keep unrelated dirty paths out.

## Handoff

End every controller pause with current state, recommended next command, optional alternatives, and a copyable command block. Use `subagent-driven-development <change-id>` to resume from the first unchecked row, or `review` when all work is complete.
