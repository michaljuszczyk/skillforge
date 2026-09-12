# Agent Skills spec — the parts that bite

Source: <https://agentskills.io/specification>. Load when writing frontmatter or when a limit is
in question.

## Directory

```
skill-name/
├── SKILL.md      required
├── references/   optional — docs loaded on demand
├── examples/     optional — filled-in output, when consistency matters
├── scripts/      optional — executable code
└── assets/       optional — templates, images, data
```

## Frontmatter

| Field | Required | Constraint |
|---|---|---|
| `name` | yes | 1–64 chars, lowercase `a-z0-9` and `-`, no leading/trailing hyphen, no `--`, **must match the directory name** |
| `description` | yes | 1–1024 chars, non-empty; what it does *and* when to use it, in the user's vocabulary |
| `license` | no | a license name, or a reference to a bundled license file |
| `compatibility` | no | ≤500 chars; environment requirements — intended product, system packages, network access. Most skills should omit it |
| `metadata` | no | string→string map for anything the spec does not define (author, version, attribution) |
| `allowed-tools` | no | space-separated pre-approved tools, e.g. `Bash(git:*) Read`. Experimental; support varies |

**Not in the spec, but in use:** `disable-model-invocation: true` marks a skill as user-invoked
only, which costs zero routing budget on hosts that honor it. Unknown keys are ignored elsewhere,
so it degrades to "fires anyway" — use it as an optimization, never as a guarantee, and never on
a skill another skill needs to call.

## Size

Progressive disclosure has three tiers, and each has a budget:

1. **Metadata** — `name` + `description`, ~100 tokens, loaded at startup for *every* installed
   skill. This is why an unfocused description is expensive for the whole system, not just for
   its own skill.
2. **Instructions** — the whole `SKILL.md` body, loaded on activation. Keep under **5,000
   tokens** and **500 lines**. If it is bigger, it is two skills or it needs references.
3. **Resources** — `references/`, `scripts/`, `assets/`, loaded only when the body says to.

## References

- Relative paths from the skill root: `references/REFERENCE.md`, `scripts/extract.py`.
- One level deep. No chains where a reference points at another reference.
- One focused file per topic — a reference gets loaded whole, so a grab-bag costs more than it
  gives.

## Validation

```bash
skills-ref validate ./skill-name
```

Checks frontmatter validity and naming rules. It does not check whether two skills collide on
routing — that is the local lint's job.
