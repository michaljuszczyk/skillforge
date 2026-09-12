# The ladder

Load when routing retro findings. Each finding gets the **least machinery that fully removes the
attention** — the smallest thing that means nobody has to think about it again.

The numbers are an inventory, not a ranking. They do not order by cost, so "least machinery" is
not "lowest-numbered": a script (4) is less machinery than a skill (3) for work that never
varies. Compare on the two axes that actually differ — does it need judgment, and whose hands
have to install it — and use the pairs below for the confusions that recur. Where no pair
covers the choice, prefer the one nobody has to set up.

Too much machinery is the common failure: a skill proposed where a one-line rule would do, a
script written where a lint rule already exists. Too little is rarer and shows up as a rule
nobody follows.

| # | Rung | Right when | Whose hands |
|---|---|---|---|
| 0 | **Delete the work** | The step produced nothing anyone used | either |
| 1 | **A rule in the always-on file** | One line, no judgment, applies everywhere | agent |
| 2 | **A deterministic check** | A machine can decide it: lint, type, test, CI gate | agent |
| 3 | **A skill** | Real judgment is needed *and* it recurs | agent |
| 4 | **A script or command** | Mechanical, repeatable, same every time | agent |
| 5 | **A hook** | Must happen every time, no judgment, no memory | user sets up |
| 6 | **A scheduled or background job** | Must happen without anyone present | user sets up |
| 7 | **A delegation pattern** | Bounded and verifiable, but needs a whole context of its own | agent |

## Choosing between adjacent rungs

**Rule versus check (1 vs 2).** If a machine can decide it, it is a check. An instruction is
advice the model can talk itself out of under pressure; a failing build is not. Prefer 2 whenever
the thing is decidable, even though 1 is quicker to write.

**Rule versus skill (1 vs 3).** A rule that must hold on *every* task cannot be a skill — routing
is a choice, and invariants are not. A skill that would fire on one task in fifty is not worth
its share of the routing budget. In between, ask: does this need judgment? No means rule.

**Skill versus script (3 vs 4).** If the steps are identical every time, it is a script — and the
skill, if any, is one line telling the agent to run it. Writing prose for something deterministic
is how a library fills with instructions nobody reads.

**Script versus hook (4 vs 5).** A script that must never be forgotten is a hook. But a hook runs
on someone else's machine too, needs installing, and fails silently — so it earns its rung only
when forgetting it is actually costly.

## Rules

- Name the lighter mechanism you rejected and say why it is not enough. A proposal that cannot
  explain that is probably reaching for more machinery than the finding earns.
- Prefer removing the need over automating the need. Rung 0 is a real answer and the best one.
- One finding, one rung. If it needs two mechanisms, it is two findings — but a rung-1 line whose
  only job is to name the mechanism you are proposing belongs to that proposal, not to a second.
- Mark clearly what the user has to set up themselves. A proposal that quietly assumes they will
  install a hook is not a proposal, it is homework.
- A rung is not a ranking of effort. Some rung-2 checks take an afternoon; propose them anyway if
  they remove a recurring tax, and say what they cost.

## Worked examples

**"I had to tell you three times not to add error handling to a spike."**
Rung 1, not 3. It is one line of always-on rule, no judgment, applies everywhere. A skill would
fire too rarely and could be routed past.

**"You wrote a migration without a rollback and I caught it in review."**
Rung 2, not 1. A rule saying "always write rollbacks" is advice; a CI check that fails a
migration with no `down` is a fact. Propose the check, and note the rule as a fallback only if a
check is genuinely impossible here.

**"Every session starts with me explaining the deploy sequence."**
Rung 4 with a rung-1 pointer: a script that runs the sequence, and one line in the rules file
naming it. Not a skill — the steps do not vary.

**"You kept re-reading the same six files to find how auth works."**
Rung 6 is wrong and so is rung 3. This is navigation: a pointer in the always-on file (rung 1) to
one document, or if the document does not exist, writing it once. That second half is rung 0 read
forwards — remove the need rather than automate it — and it is the whole finding, not a second
mechanism bolted on.
