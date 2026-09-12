# Skillforge

A small, opinionated skill pack for AI coding agents. Fourteen skills, one always-on file, no runtime.
Built to work the same on any agent that reads `AGENTS.md` and the
[Agent Skills spec](https://agentskills.io/specification) — and to keep working when someone
copies two of its files into a locked-down repo by hand.

## What is in it

**`AGENTS.md`** — the always-on working agreement. Constraints, not procedure: what to settle
before building, simplicity and surgical-change rules, what "done" requires, how to disagree,
and what never to do. `CLAUDE.md` and `GEMINI.md` point at it.

**`skills/work/`** — generic, any kind of work:

| Skill | Use it for |
|---|---|
| `grilling` | Being interrogated round by round until a plan or decision has no unstated assumptions. Writes nothing |
| `shape` | Turning a raw request into an artifact — eight templates, from an opportunity map through brief, roadmap, PRD, vision, stack register, test strategy and decision record |
| `plan` | Phases with per-phase verification and a durable checklist that survives a new session |
| `executing` | Carrying a shaped change through to done without drifting from it — gate, ambiguity ladder, closing the loop |
| `delegating` | Deciding what to hand to a subagent, and briefing it so the result is verifiable |
| `handoff` | A compact continuation note for the next agent, written to temp |
| `digest` | A self-contained HTML page for a human to read, keep, and forward |
| `retro` | Looking back at a session to find where your attention was spent unnecessarily, and what should become a rule, a check, or a script |
| `writing-skills` | Authoring skills, harvesting them from real work, and retiring dead ones |

**`skills/dev/`** — only on a codebase:

| Skill | Use it for |
|---|---|
| `orienting` | Getting up to speed in an unfamiliar repo, with the commands proven by running them |
| `debugging` | Reproduction loop first, one falsifiable hypothesis at a time, three-strikes stop |
| `tdd` | One behavior at a time, red for the right reason, refactoring left to review |
| `spike` | Answering "can this even work" with a throwaway, then deleting the code |
| `review` | Findings first, severity-ordered, each with a location and a fix |

**`addons/`** — empty by design. See its README for when something belongs there.

## Design rules

1. **Judgment, not mechanics.** A skill encodes decision criteria, rubrics, and definitions of
   done. Where a host automates the mechanics — plan mode, a review command, subagents — the
   skill says so and defers.
2. **Self-sufficient.** No skill assumes another is installed, or that a hook or router ran.
3. **Zero runtime in the core.** Pure markdown. Scripts are optional and nothing depends on them.
4. **The bar for a new skill:** name in one sentence what the model reliably gets wrong without
   it. If an always-on rule or a host feature covers it, it does not ship.
5. **New artifact types are templates**, not new skills.

## Install

Any agent, via the [skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add michaljuszczyk/skillforge          # this project
npx skills add michaljuszczyk/skillforge -g       # all projects
```

Claude Code, as a plugin (also gets the optional session hook):

```
/plugin marketplace add michaljuszczyk/skillforge
/plugin install skillforge
```

No CLI, no network, locked-down machine: copy the skill folders you want into the agent's skills
directory and `AGENTS.md` to the repo root. Everything works standalone.

## Attribution

The grilling mechanism and the handoff shape are adapted from
[mattpocock/skills](https://github.com/mattpocock/skills) (MIT). See `docs/ATTRIBUTION.md`.
Design rationale is in `docs/DESIGN.md`.
