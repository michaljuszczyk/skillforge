---
name: plan
description: Write and then work an implementation plan — phases, verification per phase, and a durable progress checklist that survives a new session or a compaction. Use when work spans more than one sitting, needs a sequence, or has to be resumable; and use it again to resume, when the user says continue, pick up where we left off, or what is left.
---

# Plan

A plan is the artifact that outlives your context window. Write it for an enthusiastic junior
engineer with poor taste and no context: they will do exactly what it says and nothing it left
out, so it has to say enough, and it must not leave room for improvisation.

## Reference loading

Load `references/plan-template.md` only when writing or restructuring the plan file. Do not load
it to resume, to answer a question about the plan, or to work a phase.

## Before writing

1. **Find the brief.** If a shaped brief exists, read it. If the goal, non-goals, and
   verification are not already settled, stop and shape the work first — planning unclear work
   produces a plan you throw away.
2. **Investigate what you will touch.** Read the actual code paths, the tests that cover them,
   and the conventions in play. Delegate independent lookups to subagents when the host supports
   it; brief each one narrowly and have it report findings, not opinions.
3. **State the unknowns you could not resolve.** An unverified assumption in a plan becomes a
   surprise in phase three.

If the host has a native planning mode, think in it — but persist the result to the file. Native
plan state is ephemeral; the file is what survives.

## Writing the plan

- One file: `context/changes/<change-id>/plan.md`, in the repo. Create the directories if they do
  not exist. The only override is the user naming a different location — a plan outside the repo
  cannot be resumed by anyone but you.
- Phases, not tasks. A phase is a coherent unit that leaves the codebase working and verifiable.
- Every phase names its own **verification** — the command or observable result that proves it
  landed. A phase you cannot verify is a phase you cannot finish.
- Order by dependency and by risk: put the phase that could invalidate the plan first.
- Name the files each phase touches. Guessing here is what makes plans rot.
- The `## Progress checklist` is the durable state. Nothing else in the file is.
- No placeholders. Exact command, exact path, exact expected output — never "add appropriate
  error handling", never "as in phase 2", never a name no phase defines.
- Before handing it over, read the brief against the plan: every requirement traced to a phase,
  and every name a later phase uses defined by an earlier one.

## Working the plan

1. Re-read the plan file before each phase, not from memory.
2. Do one phase. Run its verification. Show the output.
3. Tick the checklist item and record what actually happened if it differed.
4. When reality contradicts the plan, stop and update the plan before continuing. A plan that
   no longer matches the code is worse than no plan.
5. Never tick an item you have not verified this session.

## Splitting work

Split a phase out to a subagent when it is bounded, verifiable, and needs no conversation
history: independent research, a mechanical multi-file edit with a complete spec, an isolated
review. Give it exactly one task, its own paths to touch, and a report contract — never two
writers over the same paths, and never a decision that is yours to make. Verify what comes back
against the source before you tick anything.

## Boundaries

- Do not plan and implement in the same breath without showing the plan first.
- Do not add phases for work the brief excludes.
- Do not estimate unless asked. Sequence and verification are the value.
- Do not delete a completed phase from the file; the record is the point.
- Close every response by naming the phase just finished, its evidence, and the next phase.
