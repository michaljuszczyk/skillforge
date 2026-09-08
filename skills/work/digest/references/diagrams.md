# Diagrams

A diagram earns its place when it shows something prose carries badly: an order of events, a
branch, a shape of dependencies, a before-and-after. Boxes labelled with nouns and joined by
unlabelled arrows are decoration — cut them.

## Decide first

| The content is | Draw | Not |
|---|---|---|
| a sequence of steps with a decision in it | flow with labelled branches | a list of boxes |
| who calls whom, over time | sequence with numbered arrows | an architecture picture |
| what changed | before / after, side by side | one annotated diagram |
| what depends on what | dependency graph, arrows meaning "needs" | a layer cake |
| a proportion or a trend | a table, or a real chart | a diagram |

If you cannot label every arrow with a verb, you do not understand the mechanism well enough to
draw it yet.

## Mechanics

Inline SVG only — no libraries, no external images.

- Always set `viewBox` and omit `width`/`height`; let CSS scale it (`svg { max-width: 100% }`).
- Colors: use `currentColor` for strokes and text so it follows the theme, and the page's CSS
  variables (`var(--accent)`, `var(--muted)`) for anything else. Never hardcode black.
- Text: 13–14px equivalent minimum, never below 11. Set `font-family="inherit"`.
- Give every `<svg>` a `role="img"` and an `<title>` as the first child — that is the accessible
  name and the print fallback.
- Keep strokes at 1.5–2 units; hairlines disappear when printed.
- Leave 8–12 units of padding inside the viewBox so nothing clips at the edge.

## Skeleton

```html
<svg viewBox="0 0 640 200" role="img" font-family="inherit">
  <title>Request path from client to cache to database</title>
  <g fill="none" stroke="currentColor" stroke-width="1.75">
    <rect x="12" y="60" width="140" height="56" rx="6"/>
    <rect x="250" y="60" width="140" height="56" rx="6"/>
    <path d="M152 88 H250" marker-end="url(#a)"/>
  </g>
  <defs>
    <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
            orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="82" y="93">Client</text>
    <text x="320" y="93">Cache</text>
  </g>
  <g fill="var(--muted)" font-size="12" text-anchor="middle">
    <text x="201" y="78">reads</text>
  </g>
</svg>
```

## Rules

- One idea per diagram. Two ideas means two diagrams.
- Label every arrow with what flows or what is required.
- Mark the unhappy path if it matters — a dashed stroke and a label, not a second diagram.
- No decorative icons, no gradients, no drop shadows. They cost bytes and print badly.
- A caption states what the reader should conclude, not what the shapes are.
