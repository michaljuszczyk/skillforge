---
name: orienting
description: Get up to speed in an unfamiliar codebase before any change is chosen — prove the build, test and lint commands by running them, find the conventions actually in force, the hot paths, and what nobody tests. Use when arriving in a client repo or a project you have not worked in, or when asked what this codebase does, how it is built, or where to start. Produces understanding, and stops before planning a change. Triggers on orient, get up to speed, unfamiliar repo, what does this codebase do, or where do I start.
---

# Orienting

## Rule

Do not infer a codebase from five files. Read the map, then **prove** it: a convention you have
not seen the code follow, and a command you have not run, are both guesses.

You are here to be able to act, not to write an architecture essay.

## Use when

- You have just been dropped into a repo you do not know.
- You are asked what this codebase does, how it is built, or where to start.
- You are about to make a first change somewhere unfamiliar — orient first, then shape or plan.

Skip when you already know the repo, or when a failure is in hand: that is a debugging loop, not
an orientation.

## Procedure

1. **Read the map.** README, `AGENTS.md`/`CLAUDE.md`, CONTRIBUTING, package manifests, CI config.
   Cheap, dense, and often out of date — which is itself a finding.
2. **Prove the commands.** Install, build, test, and lint — actually run them. A documented
   command that fails is your first finding and often the most valuable thing you produce today.
   Find the run command too, but do not start it: a dev server or watcher is long-running, and
   starting one uninvited is not yours to do. Report it as documented-not-verified.
3. **Find the conventions in force.** Read the diffs of the last twenty or thirty commits, not
   the style guide. Where the guide and the code disagree, the code wins — note the gap rather
   than silently picking a side.
4. **Find the hot paths.** What changes most is what matters most, and breaks most. Run
   `git log --format= --name-only -n 300`, then count the repeats yourself — shell-agnostic, and
   it works where `uniq` and `head` do not exist.
5. **Find the untested territory.** Which of those hot files have no test near them. That
   intersection is where risk lives.
6. **Find the boundaries.** Who touches what (`git shortlog -sn -- <path>`), where the seams
   between areas are, and what is vendored, generated, or otherwise not to be hand-edited.
7. **Collect the traps.** What looks reusable but is not, what looks dead but is load-bearing,
   and the setup or environment gotchas you already tripped on.

## Output

A short orientation note in the conversation — a file only if the user asks:

- How to build, test, and run it, with the commands you actually ran.
- The conventions worth matching in the areas you would touch.
- Hot paths, and which of them are untested.
- Traps.
- What you could not learn from the repo alone, and who would know.

## Stopping rule

You are oriented when you can (a) run the tests, (b) state the convention a new file would
follow in the two areas you are most likely to touch, and (c) list the traps. Reading past that
without a change in hand is procrastination — stop and ask what the work is.

## Boundaries

- Change nothing. No fixes, no formatting, no "while I was in there".
- Do not read everything. Breadth first, depth only where the work will land.
- Do not trust documentation over code, and do not report documented commands as working until
  you have run them.
- Do not plan the change here. Hand off what you learned and let shaping or planning start.
