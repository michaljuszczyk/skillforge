# Example: change brief

A real brief at the level of detail shaping should produce. Note what is *absent*: no phases,
no file paths, no estimates — those belong to planning.

```markdown
# c3: CSV export for the reports view

## Problem
Ops copy numbers out of the reports table by hand every Monday to build the weekly deck. They
report ~40 minutes per week and transcription errors roughly monthly.

## Goal
One click on the reports view produces a CSV matching what is on screen, filters included.

## Non-goals
- No scheduled or emailed exports. Manual download only.
- No XLSX and no PDF. CSV only, even though XLSX has been requested.
- No new columns. The export mirrors the current table exactly.

## Constraints
- Must respect the row-level permission filter — no export may reveal rows the user cannot see
  in the table. (verified: the filter lives in `ReportQuery`)
- Reports over ~50k rows exist in production. (verified: largest seen is 63k)

## Risks and unknowns
- assumption: streaming the response is acceptable to the proxy's 60s timeout.
- verified: the table's number formatting is locale-dependent, so the CSV needs a fixed format
  or ops' spreadsheet will misparse decimals.

## Verification
Export from a filtered reports view as a non-admin user. The CSV row count matches the
on-screen count, decimals parse in Excel under a European locale, and no out-of-permission row
appears.

## Open
- Which decimal separator do ops actually need? (ops lead)
```
