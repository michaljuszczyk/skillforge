---
name: grill
description: Use to run a one-question-at-a-time grilling workflow that stress-tests a plan or design until decisions are clear.
---

# Grill

## Rule

Interrogate the plan one decision at a time until the design is clear enough to implement or reject. Ask one question, wait for the answer, then continue.

## Use When

- The user asks to be grilled, stress-tested, challenged interactively, or walked through design decisions.
- A plan has many unresolved branches and a static critique would be too shallow.
- The user wants help reaching shared understanding before implementation.

## Procedure

1. State the current understanding in one short paragraph.
2. Inspect the codebase, docs, tests, or existing artifacts for questions the repo can answer. Do not ask the user to repeat facts available in the code.
3. Load `references/question-patterns.md` when you need a decision tree, example questions, or closing summary shape.
4. Build a decision tree internally:
   - Goal and success criteria.
   - Users and workflows.
   - Data model and contracts.
   - Integration points and compatibility.
   - Error handling, security, performance, and operations.
   - Testing and rollout.
   - Scope cuts and non-goals.
5. Ask exactly one question at a time.
6. When possible, include a recommended answer and why.
7. After each answer, update the decision state and choose the next highest-impact unresolved question.
8. Stop only when:
   - The user says to stop.
   - The plan is coherent enough to summarize.
   - A blocking unknown requires outside information.

## Question Format

Use `references/question-patterns.md` for the standard question format, example question patterns, and closing summary shape.

## Closing Summary

When grilling completes, summarize decisions made, remaining assumptions, risks accepted, and the suggested next artifact.

## Boundaries

- Do not ask multiple independent questions in one turn.
- Do not implement while grilling.
- Do not keep asking once the answer is already in the codebase.
- Do not use aggressive tone. Be persistent, specific, and technical.
