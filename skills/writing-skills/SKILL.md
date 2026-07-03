---
name: writing-skills
description: Use to author, edit, or improve a Skillforge skill, or to harvest a new skill from the current session (repeated work, repeated steering, or wasted tokens that a skill would prevent). Triggers on write a skill, create a skill, improve this skill, extract a skill, or "this should be a skill".
---

# Writing Skills

## Rule

A skill is behavior-shaping code, not prose. Write the minimum that reliably changes what the agent does, put the trigger in the `description`, and push data (templates, schemas, rubrics) into `references/`. Match the form to the failure it prevents.

## Two Modes

- **Author / edit** — turn an intent into a new or better SKILL.md.
- **Harvest** — scan the current conversation for a skill worth extracting.

## Reference Loading

Load `references/skill-anatomy.md` before drafting or restructuring a SKILL.md, writing a `description`, or judging whether a skill is well-formed. Do not load it for a one-line wording tweak.

## Author / Edit Procedure

1. Name the failure this skill prevents. If you can't name a concrete failure, the skill should not exist (`lean-coding`: do nothing).
2. Write the `description` first — it is the only always-loaded part and controls activation. State when to use it, with real trigger phrases. Not too broad (fires on everything), not too narrow (never fires).
3. Draft the body: Rule (the one behavioral commitment) → Use When → Procedure → Boundaries. Keep it lean; hunt no-op sentences and delete them.
4. Add `references/` only for schemas, templates, or rubrics the skill enforces — lazy-loaded, never inlined.
5. Add one filled worked example to any template the skill ships (see the templates other Skillforge skills carry). A filled example teaches shape faster than a spec.
6. Pressure-test: read the skill as an agent who wants to skip it. If it can be rationalized away, harden the Rule and add a Red Flags line.
7. Cross-link sibling skills by name so routing composes.

## Harvest Procedure

Scan the session for a reusable pattern the agent had to be taught the hard way:

- **Repetition** — the same multi-step operation done more than once, or likely to recur.
- **Steering** — a point where the agent went wrong and the user had to correct it; the correction is the skill.
- **Waste** — a stretch that burned many tokens or turns before reaching a small result; the shortcut is the skill.

For each candidate: state the trigger, the failure it prevents, and a one-line Rule. Propose the skill to the user before writing it. Do not harvest one-off, project-specific facts — those are memory or repo docs, not skills.

## Boundaries

- Do not write a skill for something a single sentence in an existing skill covers. Extend, don't multiply.
- Do not inline large templates into SKILL.md; use `references/`.
- Do not invent triggers the user never hits.
- Behavior-shaping content (Rules, Red Flags) is load-bearing — change it deliberately, not for style.
