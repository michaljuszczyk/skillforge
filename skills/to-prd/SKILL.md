---
name: to-prd
description: Use to synthesize current context into a practical product requirements document without assuming a specific issue tracker.
---

# To PRD

## Rule

Turn known context into a PRD that an implementer can build from. Do not run a long interview. Ask only for information that blocks a correct PRD.

## Use When

- The user asks to create a PRD, product spec, requirements doc, or implementation brief.
- A conversation, plan, bug report, or prototype needs to become a buildable product document.
- The next step is aligning scope before implementation or issue breakdown.

## Procedure

1. Gather source context already available:
   - User goals, decisions, constraints, non-goals, examples, and acceptance hints.
   - Existing code, docs, ADRs, glossary, issues, or tests when they clarify the domain.
2. Ask at most one focused blocking question if a missing decision would materially change the PRD.
3. Prefer product behavior over implementation detail.
4. Include implementation decisions only when already decided or strongly implied by the repo.
5. Name assumptions explicitly.
6. Sketch the seams where this feature will be tested. Prefer an existing seam; the ideal number of new seams is one. If a new test seam is needed, name it and confirm with the user.
7. Load `references/prd-template.md` before drafting a PRD body or local markdown file.
8. Produce the PRD.
   - If an issue tracker target is provided, publish or prepare for that tracker.
   - If tracker details are missing, write local markdown or present the PRD in the response and ask for the target.

## Quality Bar

Use `references/prd-template.md` for the section template and quality checklist.

## Boundaries

- Do not invent stakeholder approval, tracker labels, or repository conventions.
- Do not publish to an issue tracker unless the target and credentials are available.
- Do not turn the PRD into a task list; use `to-issues` for implementation slices.
