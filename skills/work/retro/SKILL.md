---
name: retro
description: Look back over finished work and propose changes to the setup rather than the work — where the user's attention was spent unnecessarily, which corrections repeated, which skill should have fired and did not, and what should become a rule, a check, or a script. Use when a session is wrapping up or a piece of work is done. Triggers on retro, retrospective, what should I automate, what could have gone better, or improve my setup.
---

# Retro

## Rule

Retro improves the **setup**, not the work. Nothing is written without approval, one proposal at
a time.

The question is not "was there friction". It is: **where did the user's attention get spent, and
did it have to be?** A decision only they could make is attention well spent. A correction the
setup should have prevented, an approval that a rule could have granted, a step they watched
because nothing else would catch it — that is the tax this skill exists to find.

## Evidence first

A retro from memory is you grading your own recollection. Get the transcript.

- On Claude Code, sessions are at `~/.claude/projects/<project-slug>/<session-id>.jsonl`, with
  subagent logs under `subagents/`. **Find it by content** — grep for a distinctive string from
  this session — never by newest modification time. Several sessions share one project slug, so
  the newest file is regularly somebody else's work.
- Other hosts differ and some keep nothing. If no transcript is reachable, say so plainly, run
  from the live conversation, and label the result memory-based.
- The transcript does not hold everything. Add `git log` for the period, the plan checklist if
  one exists, the test or CI state, and **the user's own account of where it dragged** — ask for
  it, you cannot derive it.
- Scale the depth and say which you chose: *quick* for a short session (top five findings only),
  *standard*, or *deep* for a long or expensive one — deep means reading the subagent logs too.

## Lenses

Work these in order. Each finding quotes the moment it happened.

1. **Attention tax.** Every point the user had to step in. For each: was it a decision only they
   could make, or a correction the setup should have prevented? Only the second kind is a
   finding. This is the primary lens; the rest are ways of explaining what you find here.
2. **Repeated steering.** The same correction more than once, in this session or across
   sessions. Two occurrences is a pattern, not a coincidence.
3. **A skill that should have fired and did not.** Check the installed descriptions against what
   was actually asked. When a skill exists and was skipped, the description is wrong, not the
   user.
4. **A skill that is missing.** Work built from scratch that will recur.
5. **No-ops.** Rules in the always-on file or in a skill that changed no behavior all session.
   They cost tokens on every task and buy nothing. Propose retiring them.
6. **Navigation.** Time lost finding a file, a command, or a convention.
7. **Tool economy.** Expensive or repeated calls, large results that were never used, work redone
   because context was lost.
8. **Deterministically checkable.** A mistake a linter, type, or test would have caught. These
   are the highest-value findings: a check fails the build, while an instruction gets
   rationalized past.
9. **Information access.** Something the agent needed and could not see.

## Ask patterns

Read the user's own messages as a corpus, not one at a time. Do they restate the same constraint
in every task? Over-specify where a default would do? Interrupt at the same stage each time?
Those are cheaper to fix in the setup than to keep typing — and the user often cannot see them,
because each message felt reasonable on its own.

## Routing

Load `references/ladder.md` and place each finding on the lowest rung that fully removes the
attention. Do not propose a skill where a rule or a check would do.

## Output

Findings ranked by attention saved, each as:

- **What happened** — with the quote or the command, and roughly what it cost.
- **Rung** — the mechanism from the ladder, and why not the cheaper one below it.
- **The change** — the exact text, file, or command being proposed.
- **Whose hands** — yours to apply, or the user's to set up.

Then take them one at a time: approve, edit, or reject. Apply only what is approved, and hand
skill-shaped changes to a skill-authoring skill rather than writing them freehand.

## Boundaries

- Not a summary of the work, and not state for the next agent — those are other skills.
- Never write to a rules file, a skill, or a config without explicit approval for that specific
  change.
- No sentiment theater. "The user seemed frustrated" needs the message that shows it.
- Do not manufacture findings. A session with nothing worth changing is a real outcome — say so
  and stop, and say what you checked so the verdict can be trusted.
- Do not propose the same finding twice across sessions. If it was rejected before, it stays
  rejected unless something changed.
