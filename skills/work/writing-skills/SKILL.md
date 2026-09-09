---
name: writing-skills
description: Author, edit, or retire a skill — and notice when the current session has revealed the need for one. Use when the user wants to write or change a skill, when you have been steered the same way twice, or when a skill is no longer pulling its weight. Triggers on write a skill, add a skill, fix this skill, harvest a skill, or retire a skill.
---

# Writing skills

A skill is a bet that the model needs help. Most of the time it does not. This skill keeps the
library small enough to stay effective.

## The bar

Answer in one sentence: **what does the model reliably get wrong without this?** If the answer
is vague, or the fix is a one-line rule, it is not a skill.

**Prove it before you write it.** Run the task without the skill and keep the transcript of it
going wrong. That failure is the skill's test. If you cannot produce one, you are guessing that
the skill is needed — and guessing is how a library gets to twenty skills. Re-run the same task
afterwards to confirm the skill actually changed the outcome.

It fails the bar if:

- A rule in the always-on file would cover it. Anything that must hold on *every* response
  cannot be a skill — routing is a choice, and invariants are not.
- The host already automates it. Skills encode judgment; hosts supply mechanics.
- It exists to make output feel thorough. Ceremony is not a capability.
- It duplicates an existing skill's trigger vocabulary. Two skills competing for one intent make
  both fire unreliably.

## Reference loading

Load `references/spec.md` before writing frontmatter or when a limit is in question. Do not load
it to decide whether a skill should exist.

## Harvest — noticing a skill is needed

Watch for three signals during real work:

1. **Steered twice.** The user corrected the same behavior in two different sessions.
2. **Rediscovered.** You worked something out that a future session would have to work out again.
3. **Wasted context.** A long detour that a page of instructions would have prevented.

When one fires, say so and propose the skill in three lines: what breaks without it, the trigger
vocabulary, and the smallest content that fixes it. Do not write it unprompted.

That is the in-the-moment catch. The session-wide sweep — what should have been a rule, a check,
or a script rather than a skill at all — belongs to a retrospective skill if one is installed;
this skill authors what that sweep decides is skill-shaped.

## Retire — noticing a skill is dead

- The model does the job correctly without it. Delete it.
- It has not fired in months, or it fires and gets ignored. Delete it, or fix the description if
  the intent is right and the routing is wrong.
- Two skills keep getting confused for each other. Merge them or sharpen both descriptions.
- It has grown past a screen of rules and a couple of references. Split it, or cut what has
  never changed an outcome.

Deleting a skill is a normal, healthy act. Git remembers it.

## Writing one

- **Description is an invocation boundary, not a summary.** Say what it does *and* when to use
  it, in the words the user would actually say. Include the trigger phrases. State what it does
  not cover when a sibling skill is close.
- **Body: rules, not background.** The reader is a capable agent, not a student. Cut anything
  that explains why the field exists.
- **Match the form to the failure.** A rule broken under pressure needs the prohibition *and*
  the rationalization named. Output of the wrong shape needs a recipe — state what the output
  is, in order; a prohibition there gets negotiated with, and can produce more of what you
  banned. A missing element needs a slot in a template, not a reminder beside it.
- **State the positive target next to any ban.** A prohibition alone drags the banned behavior
  into context. "Show `path:line`, not whole files" beats "do not paste whole files".
- **Self-sufficient.** Never assume another skill is installed or that a router ran. Reference a
  sibling as a suggestion ("use a grilling skill if one is installed; otherwise do it inline"),
  never as a dependency.
- **Defer to the host.** Where a native capability exists, say so in one line and let it do the
  mechanics.
- **Progressive disclosure.** The `SKILL.md` holds what is needed every time. Templates,
  checklists, and long procedures go in `references/`, each with an explicit "load this only
  when…" line. `examples/` holds filled-in output when consistency matters.
- **Boundaries section.** What this skill must not do. It prevents the drift that turns a sharp
  skill into a framework.
- Zero runtime in the core. A script is allowed only when it replaces fragile generated code or
  saves real tokens, and the skill must still work without it.

## Where it goes

- `skills/work/` — applies to any kind of work.
- `skills/dev/` — only makes sense on a codebase.
- `addons/` — earns a slot but not a global one: tracker-shaped, host-dependent, or used
  monthly. Promote out of `addons/` only after it has proven itself in real use.

A new artifact type is a **template** in an existing skill's `references/`, not a new skill.

## Before it ships

1. `name` matches the directory, description under the limit, body under the limits in
   `references/spec.md`.
2. No trigger-vocabulary overlap with a sibling. Read their descriptions side by side and say
   which one wins for each phrase.
3. Every `references/` file is linked from the `SKILL.md` with a load condition.
4. Nothing in it depends on one specific host.
