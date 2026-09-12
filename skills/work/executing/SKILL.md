---
name: executing
description: "Carry an already-shaped change through to done without drifting from it — gate on the written record being ready, resolve every ambiguity from that record instead of guessing, hold the agreed boundary, and update the record when it lands. Use when starting build work that a brief or roadmap already describes, when a change keeps growing past what was agreed, when a run is declared unattended and nobody can be asked, or when finished work needs its artifacts closed out. Triggers on execute, build it per the brief, follow the process, stick to the brief, ship this change, or take it through to done."
---

# Executing

Shaping decides what to build. Execution is where that decision quietly erodes — one reasonable
improvement, one silent assumption, one adjacent fix at a time. The job here is to keep what
gets built traceable to what was agreed, and to stop loudly when it cannot be.

Nothing below assumes the work is code.

## The gate

Before the first edit, find the written record and check it holds: `context/changes/<id>/plan.md`,
`context/changes/<id>/brief.md`, the matching row in `context/foundation/roadmap.md`, and
`context/foundation/vision.md`. Read what exists.

Five conditions. All of them, or you do not start:

| | Ready means |
|---|---|
| **Goal** | One sentence, lifted from the artifact — not composed by you just now |
| **Non-goals** | The tempting adjacent work, named, so drift is distinguishable from progress |
| **Verification** | An observable result, with the command or check that produces it |
| **Boundary** | The files, areas, or systems this change is allowed to touch |
| **Open questions** | None left whose answer would change what gets built |

Missing one? Say which, say what closes it — usually one round of shaping — and stop there. Do
not fill the gap yourself. An artifact you completed from your own inference records your
opinion, and the next reader will take it for the owner's.

If the user says to proceed anyway, proceed. State in one line what is unverified, and write it
into the change folder as an assumption before starting, so the gap outlives the session.

**Skip the gate** for work that is trivial and fully specified — a typo, a rename, a one-line
fix. Gating those is ceremony. Anything with a second step has a second reading.

## The sequence

Each step gates the next. A gate that has not produced evidence has not passed; reasoning is not
evidence. Where a skill for a step is installed, use it — the gate is the same either way.

1. **Orient** — only in territory you have not read this session. Gate: you can name what you
   will touch and what already covers it.
2. **Sequence the work** — when it is more than one sitting or more than one coherent unit.
   Gate: phases exist in writing, each with its own verification, in the change folder.
3. **Build** — one phase at a time, riskiest first where the risk is unknown. Where the work is
   code and the behavior observable, pin it with a failing test before changing it. Gate: that
   phase's own verification ran, and you have shown the output.
4. **Diagnose** — the moment a verification fails, stop building. One falsifiable hypothesis at
   a time. Gate: the cause is named and proven before any fix goes in. Never stack a second
   change on top of an unexplained failure.
5. **Check against the artifact** — not against taste. Gate: every requirement traced to
   something you changed, and every non-goal still undone.
6. **Close the loop** — below.

Skipping a step is allowed and is a decision: say which and why. Skipping a step's gate is not.

## The ambiguity ladder

At a fork the artifact does not settle, climb until something answers. Stop at the first rung
that does, and say which rung answered and what it said:

1. **The brief** — goal, non-goals, verification.
2. **The plan** — a later phase has often already decided it.
3. **The roadmap** — does a neighbouring change already own this?
4. **The standing registers** — `context/foundation/tech-stack.md` for the tools and conventions
   in force, `context/foundation/test-strategy.md` for what is worth proving and what is not.
5. **The vision** — its priority order breaks ties between competing goods.
6. **The decision records** — has this argument already been had? Grep
   `context/foundation/decisions/` for `Standing rule` first: that returns every rule in force
   without opening a single file.
7. **The owner** — or, on a declared unattended run, the rules in the next section.

What keeps the ladder honest:

- Vision resolves conflict between goods already agreed. It cannot authorise new scope. If what
  you draw from it would add work, you are on rung 7, not rung 5.
- A question whose answer changes *what* gets built, and that no rung answers, is a blocker.
  Stop and ask. Choosing one and flagging it afterwards is how a change becomes a different one.
  Unattended, this is the one case the next section does not let you decide either.
- A question whose answer changes only *how* it gets built is yours. Decide it, note it in a
  line, carry on. Escalating these is its own failure.
- What the owner answers goes back into the artifact, not only into the conversation. An answer
  that lives in chat has to be asked again next session.

## Unattended runs

Rung 7 assumes an owner is reachable. Sometimes they are not — a queued job, a scheduled run, an
executor on a box somewhere — and there "stop and ask" degrades to "stop", which is worse than a
recorded call.

**This mode is declared, never inferred.** You are in it only when one of these says so:

- the invocation says so — "run unattended", or whatever the dispatcher passes to mean it;
- the repo or the machine declares it standing, as a line reading `Execution mode: unattended`
  in `AGENTS.md`, `CLAUDE.md`, or the local equivalent always-on file.

Everything else is attended, every case you are unsure about included. Failing to find a way to
ask is not a declaration: a missing question tool means you stop and say what you needed, not
that you may now decide it yourself. An agent that reasons its way into being unattended is the
exact failure this section exists to prevent, because it writes the owner out of a run they were
watching.

Confidence is not the test. A number you assign yourself cannot be audited afterwards. Two
conditions can:

- **Grounded** — you can name the rung and quote the line the answer rests on.
- **Bounded** — being wrong costs no more than redoing this change. No non-goal crossed, no
  standing rule contradicted, no permission widened, nothing outside the boundary touched.

Both hold: decide, record it as provisional, carry on. Either fails: park it.

**Recording a provisional call.** One entry per call in the change folder — the question, the
answer taken, the rung and the line it came from, the alternative rejected, and what would
overturn it. The owner has to be able to audit the whole run from these entries alone, without
reconstructing your reasoning. A provisional call nobody wrote down is an ordinary silent
assumption wearing a better name.

**Parking a question.** Write it where the run's output will actually be read, then carry on with
everything that does not depend on it. Finish the independent phases, verify them, and report
blocked with the question and what it holds up. A run that stalls entirely on one unanswerable
question is wasted; a run that guesses at scope is worse than wasted.

The gate itself does not soften. An artifact missing its goal, its verification, or its boundary
cannot be repaired by inference, and unattended is precisely when no one will catch it — report
blocked and build nothing. The single gate condition this mode relaxes is open questions: one
the ladder answers under both conditions above has stopped being a blocker.

## Holding the boundary

- Every changed line traces to something the artifact asks for. If you cannot name it, you are
  off-brief: revert it, or get it added.
- Out-of-scope work you discover gets written down, not done. Name it at the end.
- If the change genuinely has to grow, stop. Amend the artifact, say what changed and why, then
  continue. Never amend and build in one breath — that is how a record ends up describing
  whatever happened to get done.
- Verification is never weakened to make a phase pass. A check that was too strict is a
  conversation, not an edit.

## Closing the loop

A change is not done when it works. It is done when the record says what is now true:

- The roadmap row's `status`, updated.
- The evidence — what was run, what it printed, from this session.
- Anything durable and surprising that got settled on the way: a decision record.
- Anything the work proved wrong in the brief: amended there, not left to mislead the next
  reader.
- What you deliberately did not do, in one line.
- Every provisional call made without an owner, listed together so they can be reviewed in one
  pass — or confirmed, which is what turns the good ones into decision records.

## Boundaries

- Do not shape here. A missing or hollow artifact is a shaping job — hand it back.
- Do not carry two changes at once. The boundary is per change, and two boundaries is none.
- Do not report done without the evidence, and never report partly done as done — name the
  phases that landed and the ones that did not.
