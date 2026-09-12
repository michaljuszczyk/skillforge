# Vision template

Write to `context/foundation/vision.md`. One per project, written once and revised rarely. This
is the artifact an agent reads when nothing else answers the question — so it must decide
things, not describe them.

Most vision documents are unusable because they list values without ranking them. "We care about
quality, speed, and simplicity" breaks no tie. `## Priority order` is what makes this file work.

```markdown
# Vision: <project>

## Direction
What this exists to do, at a horizon further out than any roadmap. One paragraph. The end state
someone would recognise if they saw it, not the activity that gets there.

## Who it is for
The people whose problem this solves — and who it is explicitly not for. The second half is what
stops the scope from drifting outward one reasonable request at a time.

## What good looks like
Observable at the horizon. What is true of the thing, or of its users, when this has worked.

## Priority order
A ranked list of the goods in tension, strongest first. When two of them conflict, the higher
one wins and the lower one gives way:

1. <good>
2. <good>
3. <good>

Then one line each on the trade this ordering accepts — what the lower ones lose in practice.

## Non-goals
Standing exclusions. Not "not this quarter" — things that stay out even when they would be easy
and someone asks for them. Give the reason for each; a non-goal without one gets overturned.

## Deciding by this
Two to five heuristics an agent can actually apply at a fork, each in the form
"prefer X over Y, because <the priority above that settles it>".

## Revisit when
The condition that reopens this document — a scale, an audience, or a constraint changing.
Not a date.
```

## Rules

- `Priority order` is mandatory, ranked, and total. Two things at the same rank break no tie and
  the document has failed at its one job.
- A tie-breaker, not a plan. No dates, no features, no change ids, no metrics targets. If it
  would go stale when the roadmap changes, it does not belong here.
- Vision resolves conflicts between goods already agreed. It never authorises new scope — a
  question whose answer would add work is a question for the owner.
- Written by the owner. An agent may draft it and may propose an amendment out loud; it never
  edits this file as a side effect of doing other work.
- One screen. The shortest artifact in the repo, and the most re-read.
