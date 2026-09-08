---
name: debugging
description: Diagnose a bug, crash, wrong output, flaky test, or performance problem down to its root cause before changing any code, by building a reproduction or measurement loop first. Use on any reported failure or slowness, when a previous fix did not hold, or whenever you are tempted to try a change and see what happens. Triggers on debug, diagnose, root cause, why is this failing, why is this slow, it broke, or reproduce it.
---

# Debugging

## Rule

Find the root cause before changing code. The first move is not a hypothesis — it is a
**feedback loop**: a reproduction that is red-capable, deterministic, fast, and runnable by you
without a human. Everything after that is mechanical.

Do not guess-and-check against a slow or manual loop. The loop is the skill; the fix is the easy
part.

## Use when

- A bug, crash, wrong output, or failing or flaky test needs to be understood.
- A previous fix did not work, or the failure is intermittent.
- You are tempted to "just try" a change to see if it helps. Stop and build the loop instead.

Skip only when the cause is already proven by evidence in hand — then go straight to the fix.

## Reference loading

Load `references/feedback-loop.md` before constructing the loop, when choosing between loop
techniques, or when the obvious loop is too slow or non-deterministic. Do not load it for a
failure whose cause is already evident.

## Procedure

1. State the exact observed failure: input or action, expected behavior, actual behavior, and
   the raw error or symptom. No paraphrasing.
2. Build the loop: the cheapest reproduction that fails **red for the right reason** and that
   you can run on demand. Prefer a failing test.
   For a performance problem the loop is a **repeatable measurement**, not a red test: a timing
   or profile you can run before and after, with the number written down. Measure before you
   hypothesize — never invent a latency threshold and assert against it.
3. Confirm the loop actually reproduces the failure *before* forming any hypothesis.
4. Form one falsifiable hypothesis. Predict what the loop will show if it is true.
5. Test it by observation — read state, add a probe, bisect, diff a working against a broken
   path. Change one variable per run, and note what each run proved.
6. When evidence points at the cause, name it in one sentence and trace every caller the fix
   touches. Fix the cause once, not each symptom.
7. Prove the fix: the same loop goes green, for the predicted reason. Keep the reproduction as
   a regression test.

## Rationalizations

- *"I can see the bug, I do not need to reproduce it."* — Then the loop takes a minute and proves
  you right. Without it, you are editing on a hunch.
- *"It is probably the cache / a race / the environment."* — "Probably" is not a root cause. Name
  it, then make the loop show it.
- *"The symptom is gone, so it is fixed."* — Gone on what evidence? Confirm green for the reason
  you predicted, or you have only moved the bug.

## Stopping rule

Count edits to production code, not ideas. After **three changes that did not make the loop go
green**, stop editing. Your model of the system is wrong — question the architecture, the
assumptions, or the reproduction itself, and restart from step 1. Say so plainly rather than
continuing to patch. Testing a hypothesis by observation does not count; changing code does.

## Boundaries

- Do not fix before you can reproduce. If reproduction is genuinely impossible, say so and
  reason from evidence, not hope.
- A symptom disappearing is not a fixed root cause. Confirm the loop goes green for the reason
  you predicted.
- Never delete the reproduction — it is the regression test.
- Never widen the fix into a refactor. Note what you found and leave it.
- If you cannot say which line caused the failure and why, you patched a symptom.
