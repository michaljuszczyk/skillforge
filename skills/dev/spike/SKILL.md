---
name: spike
description: Answer a feasibility question by building the smallest throwaway that settles it, then keeping the answer and deleting the code. Use when the question is whether something can work at all, or which of two approaches survives contact with reality. Not for a bug or a failing test, and not for work already known to be feasible. Triggers on spike, prototype, proof of concept, throwaway, try it and see, or is this even possible.
license: MIT
metadata:
  attribution: rules adapted from mattpocock/skills (MIT) - see docs/ATTRIBUTION.md
---

# Spike

## Rule

A spike buys an **answer**, not code. It is written to be deleted, starting with the first line.

This is the one place the usual standards invert: here, careless code is correct. Anywhere else
in this pack, over-building is the failure — in a spike, *polishing* is the failure.

## Use when

- "Can this work at all?" — an unknown library, API, platform limit, or performance ceiling.
- "Which of these two approaches survives contact?" — where reading the docs cannot settle it.

Do not use for a bug or a failing test — that needs a reproduction loop, not an experiment. Do
not use for work you already know is feasible: just build it.

## Rules

1. **Write the question down first**, phrased so the spike can come back yes or no. A spike
   without a question is just unsupervised coding.
2. **Budget it in attempts, not minutes** — you have no clock. Say the budget out loud before
   starting ("six runs, or three approaches, then I report"), and count out loud as you spend it.
3. **Throwaway and labelled from day one** — a `spike-` prefixed file, directory, or branch,
   never inside a production path where it can be mistaken for real work.
4. **One command to run it.** If demonstrating the result takes explaining, the spike is too big.
5. **Nothing real gets touched.** No migrations, no schema changes, no writes to a real store,
   no credentials beyond a throwaway.
6. **No polish.** No tests, no error handling, no naming care, no abstraction, no types beyond
   what makes it run. Resist every instinct that applies to production code.
7. **Surface the state.** Print what you learn as you go — the output is the deliverable.
8. **Capture the answer, then delete the code.** The answer goes into a brief — its
   `## Closing`, when the spike was the change — or a decision record. The code goes in the bin.

## Reporting

Report: the question, the answer, the evidence that settles it, what surprised you, and what the
spike did *not* test. That last one matters — a spike proves one thing and implies nothing.

## Boundaries

- Never promote spike code to production. If it turned out to be the right shape, rewrite it
  deliberately, with the standards that apply to real work.
- Never leave it in the repo "for reference". If it is worth keeping, it is worth a branch and a
  note; otherwise it is noise that someone will one day import.
- Do not answer the question from opinion when the spike has not been run.
- If the budget runs out, stop and report what you learned. "Three approaches, none of them
  worked" is a real answer and usually an important one.
