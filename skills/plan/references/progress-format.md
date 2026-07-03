# Progress Checklist Reference

Load this only when creating, reviewing, or interpreting the `## Progress checklist` section of `context/changes/<change-id>/plan.md`.

The progress checklist is the single source of resume state. Implementation skills resume at the first unchecked item in document order.

## Structure

```markdown
## Progress checklist

### Phase 1: <phase name>

- [ ] 1.1 <step title>
- [x] 1.2 <step title>

### Phase 2: <phase name>

- [ ] 2.1 <step title>
```

## Rules

- Exactly one `## Progress checklist` heading per plan.
- Place it after the phase details so implementers read the context before the mechanical state.
- Include one `### Phase N: <name>` heading per `## Phase N:` block, in the same order and with the same name.
- Use only top-level checkbox bullets in this section: `- [ ] N.M <title>` or `- [x] N.M <title>`.
- Step numbers are 1-based within a phase. Never renumber reviewed steps; new steps get the next available number.
- Step titles are stable resume anchors. Do not rename them after execution starts. If intent changes, update the phase details above and add a new checklist item if needed.
- Do not add owners, estimates, due dates, nested checkboxes, or prose between checklist rows.
- Manual checks stay as unchecked items until a human verifies them.

## Parsing Contract

- Next pending step: first `- [ ]` row in document order.
- Current phase: phase containing the first pending step.
- Complete plan: no `- [ ]` rows remain.
- Progress ratio: count checked rows divided by all checkbox rows.

## Step Design

Each checklist row should be small enough to resume from and large enough to be meaningful:

- Good: `1.1 Add failing parser test for quoted commas`
- Good: `1.2 Update CSV tokenizer contract`
- Good: `1.3 Run npm test -- csv-parser.test.ts`
- Bad: `1.1 Do phase 1`
- Bad: `1.2 Fix stuff`
- Bad: nested substeps under `1.3`

For bug plans, include a reproduction or failing test item before the fix item when practical. For risky changes, include explicit red/green verification items.
