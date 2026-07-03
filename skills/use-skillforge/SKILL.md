---
name: use-skillforge
description: Use before nontrivial action when deciding which skill applies, or whenever unsure whether skillforge guidance applies.
---

# Use Skillforge

## Rule

Before nontrivial action, check the available skills. If a skill applies, read it and follow it before acting.

## Procedure

1. Identify the task type and any skill named by the user.
2. Select the smallest relevant skill set.
3. Use process skills before implementation skills.
4. Announce the selected skill in one short sentence when useful.
5. Follow the selected skill exactly, unless direct user instructions conflict.

## Defaults

- Coding, fixing, refactoring, reviewing, or dependency choice: use `lean-coding`.
- Any claim that work is complete, fixed, correct, passing, ready to commit, or ready for PR: use `verification-before-completion`.
- Unsure whether a skill applies: use this skill, then decide.

## Boundaries

User instructions and repository instructions override skill guidance. If no skill applies after this check, proceed normally.
