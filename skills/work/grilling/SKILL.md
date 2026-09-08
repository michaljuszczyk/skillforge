---
name: grilling
description: Interrogate the user round by round until a plan, design, or decision is fully understood, with no unstated assumptions left. Use when the user asks to be grilled, wants their thinking stress-tested, or when a decision is theirs to make and you would otherwise guess. Produces no file, so use a shaping skill when an artifact is wanted. Triggers on grill me, stress-test this, interrogate me, or poke holes.
license: MIT
metadata:
  attribution: mechanism adapted from mattpocock/skills (MIT) - see docs/ATTRIBUTION.md
---

# Grilling

Interview the user until you share their understanding. Do not act on the outcome until they
confirm you have it.

## The design tree

Treat the work as a tree of decisions: every decision branches into the decisions hanging off
it. The **frontier** is every decision whose prerequisites are already settled — the questions
you can ask *now* without guessing at answers you have not heard yet.

Work the frontier in **rounds**, not one question at a time. Ask the whole frontier in one
round, then wait.

A question you cannot yet phrase sharply is not a frontier question — it is fog. Name the area
in one line, say what has to settle before it can be asked, and move on. The test is whether you
can state the question precisely now, not whether you can answer it now.

## Round format

```
❓ **Q1 — <title>**: <question, including options where a choice exists>

➡️ <your recommended answer, and why>

---

❓ **Q2 — <title>**: …
```

Number every question. Give a recommended answer to every question — an unanswerable question
means you have not done your homework yet.

Each round's answers reshape the tree: settled decisions push the frontier outward and unblock
questions that depended on them. Recompute the frontier and ask the next round. A question
whose answer depends on another question still open **this** round belongs to a *later* round.

## Facts are your job, decisions are theirs

Never ask the user for anything you could find out yourself. When a frontier question needs a
fact from the environment — what the code does, which version is pinned, whether a file exists,
what the docs say — go find it. Dispatch that lookup to a subagent when the host supports it, so
it costs you no context.

Do not block on a lookup. A running lookup is an unsettled prerequisite: only the questions
downstream of it wait. Ask the rest of the frontier now.

## Done

The session ends when the frontier is empty — every branch visited, nothing silently assumed.
Summarize the settled decisions in a short list and ask the user to confirm. Only then act, or
hand off to whatever writes the artifact.

## Boundaries

- One round at a time. Never ask a question and answer it yourself in the same breath.
- Never present a recommendation as settled fact; the decision stays the user's.
- Do not grill a clear, small request. If the ask is already unambiguous, say so and proceed.
- Do not write files here. That is a shaping skill's job.
