---
name: phasing
description: Write and then work an implementation plan — phases, verification per phase, and a durable progress checklist that survives a new session or a compaction. Use when work spans more than one sitting, needs a sequence, or has to be resumable; and use it again to resume, when the user says continue, pick up where we left off, or what is left. Triggers on plan, phases, break a change into phases, resume, or what is left.
---

# Phasing

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

- One file: `context/changes/<change-id>/plan.md`, in the repo. Reuse the id of the brief this
  plan implements. Where there is no brief, mint `NN-slug` with `NN` the next number claimed by
  neither `context/changes/` nor the roadmap — a roadmap reserves its ids before any directory
  exists, so the listing alone will hand you one another change already owns. Create the
  directories if they do not exist.
- The only override is the user naming a different location — a plan outside the repo cannot be
  resumed by anyone but you. If the write genuinely fails, use the OS temp dir, print the full
  path, and say the plan is not durable until it is moved into the repo.
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

**Find the plan first.** Resuming, or handed a change-id, list `context/changes/*/plan.md` and
take the one whose `**Status**` is `in progress` or `blocked` — the blocked value carries a
question id after it, so match on the word, not the whole string. Open with its checklist and
its last `Log` line so the user can see the state before you touch anything — a `[~]` there is
the first thing to resolve. Two in progress: name both, ask which.

A plan at `blocked` is found the same way and is not a missing plan. Open it, name what the
status says is blocking, and do not start the phases it blocks until that is answered — writing
a fresh plan over a blocked one buries the question instead of resolving it. Phases that do not
depend on the answer are still yours to work. When the answer arrives, set the status
back to `in progress` in the same edit — the label only ever mirrors the register, and nothing
else clears it. Only when no plan file exists at all is there no plan yet, and then you write one.

1. Re-read the plan file before each phase, not from memory.
2. **Settle any `[~]` first.** That mark means the phase was underway when a session ended and
   its true state is unknown. Run its `Verify` and let the result decide — passing means mark it
   `[x]` and move on, failing means find what already landed before redoing anything. Never
   assume it finished, and never redo it blind: half-applied work re-run from the top is how a
   resumed plan corrupts what it was meant to protect.
3. Do one phase. Mark it `[~]` before you start. Run its verification. Show the output.
4. Tick it `[x]` and record what actually happened if it differed.
5. When reality contradicts the plan, stop and update the plan before continuing. A plan that
   no longer matches the code is worse than no plan.
6. Never mark an item `[x]` you have not verified this session.
7. When the last phase is `[x]`, set the plan's `**Status**` to `done` in the same edit. It is
   the only thing that takes a finished plan out of the resume lookup above, and nothing else
   writes it.

## Splitting work

Split a phase out to a subagent when it is bounded, verifiable, and needs no conversation
history: independent research, a mechanical multi-file edit with a complete spec, an isolated
review. Give it exactly one task, its own paths to touch, a report contract, and the cheapest
model tier that can do it — an unstated tier silently inherits your session's, usually the most
expensive one. Never two writers over the same paths, and never a decision that is yours to
make. Verify what comes back against the source before you tick anything.

## Boundaries

- Do not plan and implement in the same breath without showing the plan first.
- Do not add phases for work the brief excludes.
- Do not estimate unless asked. Sequence and verification are the value.
- Do not delete a completed phase from the file; the record is the point.
- Close every response by naming the phase just finished, its evidence, and the next phase.
