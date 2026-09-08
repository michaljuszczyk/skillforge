# Feedback Loop Construction

The loop is the diagnostic instrument. A good loop is **red-capable** (fails when the bug is present), **deterministic** (same result every run), **fast** (seconds, so you iterate), and **agent-runnable** (you trigger it without a human). Build the strongest loop you can afford, top of the ladder first.

## The Ladder

Stop at the first rung that gives you a reliable red signal:

1. **Failing unit/integration test** — assert the observable wrong behavior from the spec, not from the current code. Best loop; becomes the regression test.
2. **One `curl` / HTTP call** — for API or server bugs, a single request that shows the wrong response.
3. **CLI snapshot** — run the command, capture stdout/stderr + exit code, diff against expected.
4. **Headless browser / script driver** — drive the UI or flow programmatically to the failing state.
5. **Replay a captured trace / recorded input** — feed the exact input that triggered the report.
6. **Throwaway harness** — a small script that calls the suspect function directly with the failing input.
7. **Fuzz / property probe** — when you can't name the trigger, generate inputs until it fails, then shrink.
8. **git bisect** — when it "used to work," bisect commits against a scripted red check.
9. **Differential** — run the working path and the broken path side by side; diff outputs/state.
10. **Human-in-the-loop** — last resort: ask your human partner to perform the exact steps and report. Only when no automated loop is reachable.

## Determinism First

If the failure is intermittent, making it deterministic **is** the debugging work: pin the seed, freeze the clock, control concurrency/ordering, isolate shared state, remove network variance. An intermittent loop that goes green proves nothing.

## Right for the Right Reason

Before trusting the loop, confirm it fails because of the bug — not a typo in the test, a missing fixture, or an unrelated error. A green-for-the-wrong-reason or red-for-the-wrong-reason loop wastes the whole session.

## Probing Techniques

- Read actual state (log/inspect values) rather than reasoning about what "should" be there.
- Change one variable per run; keep a note of what each run proved.
- Narrow the blast radius: bisect the input, the code range, or the time window.
- When a fix works, be able to say which specific line caused the failure and why. If you can't, you patched a symptom.
