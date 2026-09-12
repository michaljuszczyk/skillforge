# Opportunity map template

Write to `context/foundation/opportunities/<slug>.md`. Use before any brief exists, when
something is plainly friction but it is not yet clear that anything should be built for it.

Most "we should build a tool for this" ideas lose to the default response that already exists.
The job of this document is to let the default win where it deserves to, so that whatever
survives is worth the maintenance it will cost forever.

## Four outcomes, not two

Build-or-don't is a false pair, and the two middle options carry most of the value:

- **Default** — whatever already handles this, however badly. Sharpen it, or accept it.
- **Complement** — a thin layer around what exists. Days, not weeks; deletable without grief.
- **Build** — a thing of its own, with an owner and a cost that never stops.
- **Wait** — the friction is real but the signal is too weak. Name what would strengthen it.

```markdown
# Opportunity: <slug>

## The friction
What actually happens, to whom, how often — with a source you can point at: tickets, a log, a
conversation, a metric. Not a sense that something is inefficient.

## Frequency and cost
How often it bites, and what each occurrence costs: minutes, errors, escalations, money.
Multiply them. An infuriating problem that happens twice a year is a wait.

## The default today
What people do instead right now, and why that is not already enough. If the answer is that
nobody does anything, say so — that is evidence about how much it really hurts.

## Options
| option | what it is here | cost to try | cost to keep, forever |
|---|---|---|---|
| default | <sharpen, or accept as is> | | |
| complement | <the thin layer> | | |
| build | <the thing itself> | | |
| wait | <nothing yet> | | |

## Data
What a first version would run on: mock, local, read-only, or real and sensitive. Real data
moves access, permissions and auditability to before the first line rather than after it.

## Verdict
One of the four, and the factor that decided it. Then the smallest next step that tests it.

## What would change this
The signal that moves it from wait to build, or from build back to default.
```

## Rules

- The friction section needs a source. An opportunity map built on a hunch only launders the
  hunch into a decision.
- Every option carries both costs — to try, and to keep. The second is what kills builds, and it
  is the one that gets left out.
- `wait` is a verdict, not a failure to decide. Write it with its trigger and move on.
- Choosing `build` does not produce a brief. It produces the argument that a brief is worth
  writing. Shape that separately, so the decision and the scope stay distinguishable.
