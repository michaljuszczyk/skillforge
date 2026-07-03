# Skill Anatomy

A SKILL.md is N sections, each with one job. A long skill is not intimidating once you see the parts.

## Frontmatter (always loaded)

```yaml
---
name: <kebab-case-name>
description: Use to <do X>. Triggers on <real phrases the user says>.
---
```

- `name` — kebab-case, matches the directory.
- `description` — the **highest-leverage line**. It is the only part loaded until the skill fires, so it alone decides activation. Lead with "Use to/when…", then concrete trigger phrases. Broad description → fires on everything (noise). Narrow → never fires (dead skill).

## Body sections (loaded on activation)

| Section | Job | Why it matters |
|---------|-----|----------------|
| Rule | The single behavioral commitment | Sets the skill's personality; everything else serves it |
| Use When | Trigger conditions + when to skip | Prevents misuse and scope creep — the #1 skill failure |
| Reference Loading | When to pull `references/*` | Keeps SKILL.md context-cheap |
| Procedure | Ordered steps | The mechanical part; keep it lean |
| Boundaries | What the skill must NOT do | Hard rules prevent the worst failures |

## Reference files (loaded only when needed)

Put schemas, templates, rubrics, and long examples in `references/`. The SKILL.md holds behavior; references hold contracts and data. This keeps each SKILL.md lean instead of a long monolithic file.

## Key Mechanics (what makes a skill tick)

- **Forcing functions** — a non-negotiable Rule + a Red Flags table that pre-empts rationalization (see `use-skillforge`). Use for skills the agent is tempted to skip.
- **Progressive disclosure** — cheap `description`, lean body, lazy references.
- **Worked examples** — one filled artifact beats any amount of spec for teaching output shape.
- **Chain position** — name upstream (what file/skill feeds in) and downstream (what it hands to). Skillforge skills chain through artifacts under `context/changes/<id>/`.
- **Self-review gate** — a check the skill runs on its own output before emitting.

## Leverage Map (small change → big effect)

- `description` — controls whether the skill ever runs.
- The Rule and any Red Flags — control whether the agent obeys.
- Template section headers — downstream skills may parse them; renaming breaks the chain.

## Common Mistakes

- Advanced patterns before the core behavior works.
- Vague guardrails ("be careful") instead of specific ones ("never stage or commit unless asked").
- Missing "when to skip" — the skill activates at the wrong times.
- Inlining templates that belong in `references/`.
