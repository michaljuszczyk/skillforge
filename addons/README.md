# Addons

Empty on purpose.

A skill belongs here when it earns a place in the repo but not in a default install:

- **Tracker- or vendor-shaped** — it only works with one issue tracker, cloud, or framework.
- **Host-dependent** — it needs a capability not every agent has, and says so in
  `compatibility:`.
- **Rarely used** — monthly, not weekly. Routing cost is paid on every task; value is not.

Nothing is copied here speculatively. If a skill might be useful someday, it does not go here —
it gets written the day the need is real, using `writing-skills`. The old v1 skills that were
dropped (`stack`, `to-prd`, `to-issues`, `subagent-driven-development`, `critique`,
`verification-before-completion`) are in git history if any of them turns out to be missed.

## Promotion

Out of `addons/` and into `skills/work/` or `skills/dev/` only after it has been used, on real
work, more than twice — and only if it does not compete with an existing skill's triggers.

## Install

Addons are not installed by the default paths. Copy the folder into the agent's skills directory
for the project that needs it, or add it explicitly:

```bash
npx skills add michaljuszczyk/skillforge --skill <name>
```
