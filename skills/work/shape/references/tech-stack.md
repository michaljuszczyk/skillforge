# Tech stack template

Write to `context/foundation/tech-stack.md`. Use when a project — or a self-contained new
feature that answers to nothing existing — needs its stack chosen, or when the stack already in
force has never been written down.

The value is not the list of libraries. It is the record of **which constraint forced each one**.
A stack written without its constraints gets overturned by the next person with a preference,
and an agent reading it cannot tell a requirement from a habit.

## Choose by elimination

Write the barriers first and let them cut. A barrier is a condition a candidate must satisfy to
stay in the running — not a wish, not a nice-to-have. If nothing is eliminated by it, it is not
a barrier and it does not go in the list.

Barriers that usually turn out to be real: what the team can operate on a bad day, where it has
to deploy, what it must interoperate with, data residency and compliance, licence terms, cost
ceiling, and whether the thing must run offline or unattended. Ask which of these are true here
before proposing a single name.

```markdown
# Tech stack: <project or feature>

## Hard barriers
| barrier | why it is non-negotiable | what it eliminates |
|---|---|---|
| <condition> | <the source: a constraint, a client, a law, an existing system> | <candidates> |

## The stack
| layer | choice | barrier that forced it | what lost, and to what |
|---|---|---|---|
| <layer> | <choice> | <barrier, or "none — preference"> | <alternative, and the deciding factor> |

## Deliberately not decided
Layers left open on purpose, each with the signal that will force the decision later.

## What this makes hard
The cost being accepted knowingly. Every stack closes doors; name the ones that will be missed.

## What breaks first
Under load, under a dependency outage, or at the next scale step — which part gives way, and
what the failure looks like from outside. The honest answer, not a mitigation plan.

## Revisit when
The barrier that would have to change. Not a date.
```

## Rules

- Every row in `The stack` names its barrier. Where no barrier forced it, write `none —
  preference` and say whose. An unforced choice stated as forced is the failure this file exists
  to prevent.
- "The team already runs this well" is a legitimate barrier. Say it out loud rather than
  dressing it as a technical one.
- Prefer the boring option. The barrier list, never taste, has to justify anything else.
- A choice that was genuinely contested and is hard to reverse also gets a decision record. This
  file says *what* and *what forced it*; the record says *why it beat the alternative*.
- Do not stack-pick for a change that lands inside an existing system. There, the stack is a
  constraint you inherit — record it in the brief, not here.
