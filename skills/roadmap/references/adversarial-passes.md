# Adversarial Passes

Run these to de-risk a high-blast, irreversible decision — architecture, data model, migration, auth, external contracts, platform choice. Skip them for routine or small work; running them on everything is ceremony, not diligence.

Run each pass as the named persona. Suspend balance while inside it — the value comes from over-indexing on failure — then integrate the findings afterward.

## Pre-mortem (prospective hindsight)

Assert failure as a fact, then reverse-engineer it: "This shipped. Some months later it was a clear failure. Walk through, step by step, the wrong assumptions, decisions, and underestimated risks that led there." Write a short failure narrative, then extract the top risks it reveals. Assuming failure surfaces modes a forward-looking checklist structurally misses.

## Unknown-unknowns

Ask: "What is true here that is not obvious from the docs or the happy path — version drift, integration surprises, undocumented constraints, rate limits, data-shape gotchas — that we should know before starting?" List 3-5 non-obvious risks. Route any stale-API or version-drift concern into this pass.

## Devil's advocate

Become an experienced skeptic whose only job is to find weaknesses, hidden costs, and concrete reasons this fails in practice. Name specific failure modes, not categories. Produce 3-5 concrete objections.

## Integrate

For each surfaced risk, do one of: mitigate it in the affected roadmap item, convert it to an Open Question with an owner, or consciously accept it and note why. Tag each with the pass that found it (`pre-mortem` / `unknown-unknowns` / `devil's-advocate`) so the reasoning stays auditable.
