---
name: use-skillforge
description: Use when starting any conversation and before ANY nontrivial action - establishes how to find and use Skillforge skills, requiring a skill check before any response including clarifying questions.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute one specific bounded task, ignore this skill and do exactly the task in your brief.
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
If there is even a 1% chance a skill applies to what you are about to do, you MUST invoke it first.

If a skill applies, you do not have a choice. Use it. This is not negotiable, and you cannot rationalize your way out of it.
</EXTREMELY-IMPORTANT>

# Use Skillforge

## The Rule

Check for a relevant skill **before any response or action** — including clarifying questions, exploring the codebase, reading files, or planning. If the skill turns out wrong for the situation, you do not have to follow it.

Then announce "Using `<skill>` to `<purpose>`" in one short line and follow the skill exactly. If it has a checklist, track one todo per item.

## Skill Priority

When several skills apply, process skills set the approach first, then execution skills carry it out.

- "Let's build X" → `shape` first (then `research` / `plan`), then execution skills.
- "Fix this bug" → `debugging` first, then `tdd` / `implement`.
- Any coding, refactoring, or dependency choice → `lean-coding`.
- Any claim of done / fixed / passing / ready to commit or PR → `verification-before-completion` before you say it.
- All prose you emit → `lean-output` (drop fluff, keep every technical fact).

## Red Flags

These thoughts mean STOP — you are rationalizing:

| Thought | Reality |
|---------|---------|
| "This is just a simple question" | Questions are tasks. Check for a skill. |
| "I need more context first" | The skill check comes BEFORE clarifying questions. |
| "Let me explore the codebase first" | Skills tell you HOW to explore. Check first. |
| "I can check git/files quickly" | Files lack conversation context. Check for a skill. |
| "This doesn't need a formal skill" | If a skill exists, use it. |
| "I remember this skill" | Skills evolve. Read the current version. |
| "The skill is overkill" | Simple things become complex. Use it. |
| "I'll just do this one thing first" | Check BEFORE doing anything. |

## Defaults

1. Identify the task type and any skill named by the user.
2. Select the smallest relevant skill set. Process skills before execution skills.
3. Follow the selected skill exactly, unless direct user or repository instructions conflict.

Routing:

- Shape/scope unclear work → `shape`, then `research`, then `plan`.
- Execute a plan → `implement`, `tdd`, or `subagent-driven-development`.
- Diagnose a bug or failure → `debugging`.
- Challenge a plan → `critique` (interactive: `grill`).
- Review code, a diff, or a completed phase → `review`.
- Author or harvest a skill → `writing-skills`.
- Unsure whether any skill applies → run this skill, then decide.

## Boundaries

User instructions and repository instructions (AGENTS.md, CLAUDE.md, direct requests) override skill guidance. Only skip a skill when your human partner has explicitly told you to. If no skill applies after the check, proceed normally.
