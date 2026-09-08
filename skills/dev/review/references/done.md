# Done

Load when the question is whether work is ready to merge or hand over. Not a checklist to
recite — a set of claims that must each be true, with evidence.

## The gate

| Claim | Evidence that settles it |
|---|---|
| It does what was asked | Each requirement in the brief or request traced to the change that implements it |
| It is verified | The verification named in the plan or brief has been run **in this session**, with its output shown |
| Existing behavior is intact | The relevant test suite passes, and you can say which suite and how much of it ran |
| A regression test actually regresses | It was seen red before the fix and green after, and reverting the fix turns it red again |
| Failures are visible | No swallowed exception, no silent fallback, no mock left in a production path |
| The diff is only the work | Every changed line traces to the request; no drive-by formatting or adjacent "improvements" |
| Nothing is orphaned | Imports, variables, functions, and files made unused *by this change* are gone |
| It is not overbuilt | No abstraction with one caller, no configurability nobody asked for, no dependency that replaces a native capability |
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
