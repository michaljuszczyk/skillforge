---
name: debugging
description: Use to diagnose a bug, failure, crash, flaky test, or wrong output before attempting a fix. Triggers on debug, diagnose, root cause, why is this failing, investigate a defect, or reproduce before fix.
---

# Debugging

## Rule

Find the root cause before changing code. The first move is not a hypothesis — it is a **feedback loop**: a way to reproduce the failure that is red-capable, deterministic, fast, and runnable by you without a human. Everything after that is mechanical.

Do not guess-and-check against a slow or manual loop. A tight loop is the skill; the fix is the easy part.

## Use When

- A bug, crash, wrong output, or failing/flaky test needs to be understood.
- A previous fix did not work, or the failure is intermittent.
- You are tempted to "just try" a change to see if it helps. Stop and build the loop instead.

Skip only when the cause is already proven by evidence in hand; then go straight to `tdd` or `implement`.

## Reference Loading

Load `references/feedback-loop.md` before constructing the reproduction loop, choosing a loop technique, or when the obvious loop is too slow or non-deterministic. Do not load it for a failure whose cause is already evident.

## Procedure

1. State the exact observed failure: input or action, expected behavior, actual behavior, and the raw error or symptom. No paraphrasing.
2. Build the feedback loop: the cheapest reproduction that fails **red for the right reason** and that you can run yourself on demand. Prefer a failing test; fall back through the ladder in `references/feedback-loop.md`.
3. Confirm the loop actually reproduces the failure before forming any hypothesis.
4. Form one falsifiable hypothesis about the cause. Predict what the loop will show if it is true.
5. Test the hypothesis by observation — read state, add a probe, bisect, or diff a working vs broken path. Change one variable at a time.
6. When evidence points to the root cause, name it in one sentence and trace every caller the fix touches. Fix the cause once, not each symptom.
7. Hand the pinned failure to `tdd` (or `implement`) so the fix is proven red→green.

## Stopping Rule

If three attempted fixes fail, stop editing. The model of the system is wrong — question the architecture, the assumptions, or the reproduction itself, and re-run this procedure from step 1. Say so plainly; do not keep patching.

## Boundaries

- Do not fix before you can reproduce, unless reproduction is genuinely impossible — then say so and reason from evidence, not hope.
- Do not treat a symptom disappearing as a fixed root cause. Confirm the loop goes green for the predicted reason.
- Do not delete the reproduction; it becomes the regression test.
- Do not claim "fixed" without `verification-before-completion`.
