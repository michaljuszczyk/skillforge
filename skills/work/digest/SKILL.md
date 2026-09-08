---
name: digest
description: Turn a conversation, a decision, a topic, or a piece of work into one self-contained HTML page a person can read, keep, and send to someone else. Use when the user asks to summarize, write up, visualize, explain, or share what we did — a recap, an explainer, a decision write-up, an options comparison, or a status report. Written for humans, unlike a handoff.
---

# Digest

Produce one HTML file that a person understands without this conversation. The reader is a
colleague, a client, or you in three weeks — not an agent.

## Reference loading

Load `references/page-template.md` before writing the page. Load `references/diagrams.md` only
when the content has a mechanism, flow, or comparison that a picture would carry better than
prose. Never load either to decide the mode or to answer a question about a digest.

## Pick the mode

| The ask | Mode | Leads with |
|---|---|---|
| "summarize what we did", "recap this" | **Recap** | what was decided, what changed, what is open |
| "explain X", "write this up so the team gets it" | **Explainer** | the mental model, then the mechanism |
| "why did we choose Y", "document this decision" | **Decision** | the choice, then the options and the cost |
| "compare these options" | **Comparison** | the recommendation, then the table, then the tradeoffs |
| "where are we", "status for the client" | **Status** | done / in flight / blocked / next |

One mode per page. If two are wanted, ask which, or write two pages.

## Process

1. **Gather from the source, not from memory.** Re-read the files, diffs, plans, and artifacts
   the conversation referred to. A digest that quotes a paraphrase of a paraphrase is worthless.
2. **Decide what the reader needs.** Cut anything that only mattered to the process: dead ends
   we recovered from, tool mechanics, retries, my reasoning about my own steps.
3. **Lead with the conclusion.** First screen: what this is, and the three-to-five things that
   matter. Detail below, for the reader who wants it.
4. **Preserve the why.** Decisions without reasons are the first thing lost and the most
   expensive to rebuild. Include the option not taken and the cost accepted.
5. **Add a diagram only when it shows a mechanism** prose cannot: a flow, a sequence, a
   before-and-after, a dependency shape. A diagram of three boxes labelled with nouns is
   decoration; cut it.
6. **Write the page**, following the template.
7. **Deliver.** If the host can publish or preview HTML, use it and hand back the link,
   adapting the skeleton to that host's rules. Otherwise write the file and print the full path.

## Where it goes

The OS temp directory by default — `%TEMP%`, else `$TMPDIR`, else `/tmp` — or a path the user
names. Never into a client repo unless the user asks for it there.

## Content rules

- Plain language. No agent jargon, no skill names, no "I then invoked".
- Every factual claim traceable: cite `path:line`, a command and its output, a URL. Mark
  anything unverified as an assumption, visibly.
- Keep the user's domain vocabulary. Do not translate their terms into yours.
- Open questions get their own section, each with who has to answer it. A digest that hides the
  unknowns will get someone in trouble.
- Redact secrets, tokens, credentials, internal URLs, and personal data. This page gets shared.
- **One client per page.** Before writing, decide whose page this is, and include nothing from
  another engagement — no borrowed example, no "we solved this before at…", no path or repo name
  from elsewhere. A page that leaks the existence of another client is worse than a thin one.
- Length follows content. A five-minute read that is all signal beats twenty minutes of padding.

## Output rules

- **One file.** Inline CSS, inline SVG, no CDN, no external fonts, no build step. It has to open
  from an email attachment on a locked-down laptop.
- Readable in light and dark, and printable to PDF without losing content.
- Wide content — tables, code, diagrams — scrolls inside its own box. The page never scrolls
  sideways.
- Semantic HTML: real headings in order, real lists, real tables. It has to survive being
  pasted into a doc or read by a screen reader.

## Boundaries

- Not a handoff. No "next agent" instructions, no suggested skills, no machine-facing state.
- Not a transcript. Never dump the conversation.
- Do not invent structure the content does not have — five real sections beat twelve empty ones.
- Do not claim work is finished or verified unless the evidence is in the page.
