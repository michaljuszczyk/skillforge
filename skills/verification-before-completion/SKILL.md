---
name: verification-before-completion
description: Use before claiming work is complete, fixed, correct, passing, ready to commit, or ready for PR; requires fresh evidence first.
---

# Verification Before Completion

## Rule

Do not claim completion, correctness, passing tests, a fix, commit readiness, or PR readiness without fresh verification evidence.

## Gate

Before any success claim:

1. Identify the command, inspection, or checklist that proves the claim.
2. Run it fresh, or explain why it cannot be run.
3. Read the full output and exit code.
4. Compare the result to the claim.
5. State only what the evidence supports.

## Evidence

- Tests pass: fresh test command exits 0 and reports no failures.
- Build passes: fresh build command exits 0.
- Lint passes: fresh lint command exits 0.
- Bug fixed: original failure path is checked.
- Requirements met: requested items are checked one by one.
- Delegated work accepted: inspect the diff and verify independently.

## Failures

If verification fails or cannot run, report the actual state, the command used, and the blocker. Do not imply success.

## Bottom Line

Evidence first. Claims second.
