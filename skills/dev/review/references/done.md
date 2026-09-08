# Done

Load when the question is whether work is ready to merge or hand over. Not a checklist to
recite — a set of claims that must each be true, with evidence.

## The gate

The always-on rules already cover the diff hygiene ones — orphans, drive-by edits, swallowed
failures, overbuilding. These are the four they do not:

| Claim | Evidence that settles it |
|---|---|
| It does what was asked | Each requirement in the brief or request traced to the change that implements it, and any requirement with no such change named as a finding |
| It is verified | The verification named in the plan or brief has been run **in this session**, with its output shown, and you can say which suite ran and how much of it |
| A regression test actually regresses | It was seen red before the fix and green after, and reverting the fix turns it red again |
| The unknowns are stated | Remaining risks and untested paths are named, not left implicit |

## Disqualifiers

Any one of these means it is not done, regardless of the rest:

- A claim of "works" or "passing" with no output from this session.
- A test weakened, skipped, or deleted to reach green.
- A `TODO` or commented-out code left where the change happened.
- A secret, token, or credential anywhere in the diff.
- Scope beyond the request, uninvited — even if it is an improvement.

## What is not required

Do not block on: perfect naming, coverage percentages, refactors the change did not require, or
a style the repo does not already follow. Note them if they matter; do not gate on them.
