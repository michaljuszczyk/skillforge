---
name: handoff
description: Write a compact handoff document so a fresh agent or a later session can continue this work safely. Use when context is nearly spent, when stopping mid-task, or when the user asks for a handoff, a continuation note, or to pick this up elsewhere. Written for an agent, not for a human audience.
license: MIT
metadata:
  attribution: shape adapted from mattpocock/skills (MIT) - see docs/ATTRIBUTION.md
---

# Handoff

Summarize the current conversation so a cold agent can continue without re-deriving anything.
The reader is a machine with no memory of this session and no access to it.

## Where it goes

The OS temp directory, never the workspace — this is scratch, not a deliverable. Resolve it in
order: `%TEMP%`, else `$TMPDIR`, else `/tmp`. Print the full path when done.

## What goes in

```markdown
# Handoff: <what this work is>

## Objective
What the user is trying to achieve, in their terms. One paragraph.

## State
What is done, what is in progress, what has not been started. Facts only.

## Evidence
The commands run and what they showed — the last test result, the last build, the last error
verbatim. What is verified versus assumed.

## Artifacts
Paths and URLs to the brief, plan, decision records, diffs, issues. Reference them; do not
restate their contents.

## Decisions
Choices the user made in this session that are not written down anywhere else, and the reason
for each. This is the part that is lost otherwise.

## Open
What is unresolved and who has to resolve it. Include the questions the user has not answered
yet.

## Next
The immediate next action, concretely. Then the two or three after it.

## Suggested skills
Which skills the next agent should use, and for which part.

## Traps
What already went wrong or nearly did: the failing approach, the misleading file, the flaky
test, the thing that looks reusable but is not.
```

## Rules

- Do not duplicate what an artifact already says. A path beats a paraphrase.
- Redact secrets, tokens, credentials, and personal data. Check before writing, not after.
- Distinguish verified from assumed on every claim. A handoff that launders guesses as facts
  is worse than none.
- Write the `Traps` section honestly, including your own dead ends. It is the highest-value
  section and the one most often left out.
- If the user said what the next session is for, tailor everything to that and cut the rest.
- Keep it under two screens. A handoff nobody reads has failed.

## Boundaries

- No prose for a human audience, no visual polish — that is a digest's job, not this.
- Do not write a handoff instead of finishing small remaining work. Finish it, then hand off.
