# Page template

One file, no dependencies. Copy this skeleton, replace the content, delete what you do not use.

If the host wraps published pages in its own document shell, keep the `<style>` and the body
content and drop the outer `<!doctype>`, `<html>`, `<head>`, `<body>` tags per that host's rules.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><specific name, not "Summary"></title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #fbfaf8; --fg: #1a1a19; --muted: #5f5e5b; --line: #e2e0dc;
    --accent: #2f5d50; --card: #ffffff; --code: #f4f2ee; --warn: #8a5a1a;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #14161a; --fg: #e8e6e3; --muted: #9a9995; --line: #2a2d33;
      --accent: #7fb8a4; --card: #1b1e23; --code: #1f2329; --warn: #d7a75c;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 2.5rem 1.25rem 4rem; background: var(--bg); color: var(--fg);
    font: 16px/1.65 -apple-system, "Segoe UI", system-ui, sans-serif;
  }
  main { max-width: 46rem; margin: 0 auto; }
  h1 { font-size: 1.9rem; line-height: 1.2; margin: 0 0 .25rem; letter-spacing: -.01em; }
  .sub { color: var(--muted); margin: 0 0 2.5rem; }
  h2 { font-size: 1.15rem; margin: 2.5rem 0 .75rem; padding-bottom: .3rem;
       border-bottom: 1px solid var(--line); }
  h3 { font-size: 1rem; margin: 1.5rem 0 .4rem; }
  p, li { margin: .5rem 0; }
  ul, ol { padding-left: 1.25rem; }
  .lead { background: var(--card); border: 1px solid var(--line); border-left: 3px solid var(--accent);
          border-radius: 6px; padding: 1rem 1.25rem; margin: 0 0 2rem; }
  .lead ul { margin: .5rem 0 0; }
  .scroll { overflow-x: auto; margin: 1rem 0; }
  table { border-collapse: collapse; width: 100%; font-size: .93rem; }
  th, td { text-align: left; padding: .5rem .7rem; border-bottom: 1px solid var(--line);
           vertical-align: top; }
  th { font-weight: 600; color: var(--muted); font-size: .85rem; }
  code { background: var(--code); padding: .1rem .35rem; border-radius: 4px; font-size: .9em;
         font-family: ui-monospace, "Cascadia Code", Consolas, monospace; }
  pre { background: var(--code); padding: .9rem 1rem; border-radius: 6px; overflow-x: auto; }
  pre code { background: none; padding: 0; }
  .tag { display: inline-block; font-size: .72rem; text-transform: uppercase; letter-spacing: .05em;
         padding: .12rem .45rem; border-radius: 3px; border: 1px solid var(--line); color: var(--muted); }
  .assume { color: var(--warn); font-weight: 600; }
  figure { margin: 1.5rem 0; }
  figcaption { color: var(--muted); font-size: .85rem; margin-top: .5rem; }
  svg { max-width: 100%; height: auto; }
  footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--line);
           color: var(--muted); font-size: .85rem; }
  @media print {
    :root {
      --bg: #fff; --fg: #000; --muted: #444; --line: #bbb;
      --accent: #333; --card: #fff; --code: #f2f2f2; --warn: #7a4a00;
    }
    body { background: #fff; color: #000; padding: 0; font-size: 11pt; }
    .lead { border-color: #999; }
    h2 { page-break-after: avoid; }
    figure, table, pre { page-break-inside: avoid; }
  }
</style>
</head>
<body>
<main>
  <h1><what this is about></h1>
  <p class="sub"><one line: what it covers, and the date></p>

  <div class="lead">
    <strong>The short version</strong>
    <ul>
      <li>Three to five points that carry the whole thing.</li>
    </ul>
  </div>

  <h2>Decisions</h2>
  <p>Each one: what was chosen, and why the alternative lost.</p>

  <h2>How it works</h2>
  <figure>
    <!-- inline SVG only when it shows a mechanism -->
    <figcaption>What the diagram shows.</figcaption>
  </figure>

  <h2>Open questions</h2>
  <table>
    <thead><tr><th>Question</th><th>Blocks</th><th>Who answers</th></tr></thead>
    <tbody><tr><td></td><td></td><td></td></tr></tbody>
  </table>

  <h2>Next</h2>

  <footer>
    Sources: <code>path/to/file.ts:42</code>, commands run, links.
    Anything unverified is marked <span class="assume">assumption</span>.
  </footer>
</main>
</body>
</html>
```

## Rules

- Replace `<title>` with something specific — it becomes the tab name and the filename people
  search for. Never "Summary" or "Report".
- Keep the palette as-is unless the user has a brand to match. It is tuned for both themes.
- Wrap every table and every diagram in `.scroll` or `<figure>`; the page must never scroll
  sideways on a phone.
- Mark unverified claims with `<span class="assume">` inline. Do not bury them in a footnote.
- Delete unused sections. An empty heading reads as an unfinished document.
- No `<script>`. If the content needs interaction, it is the wrong medium.

## Do not look machine-made

Current AI-generated design clusters around a handful of tells. A page carrying them reads as
unedited output, whatever the content says. Avoid:

- Warm cream ground (near `#F4F1EA`) with a high-contrast serif display and a terracotta accent
  (near `#D97757`). Also near-black grounds with one acid-green or vermilion accent.
- The card kit: content chopped into identical rounded cards, one border-radius for everything
  regardless of hierarchy, the same soft `rgba(0,0,0,.1)` shadow under each, gradient washes as
  decoration.
- Template chrome: tracked-out ALL-CAPS eyebrow labels above headings, meta strings joined with
  middle dots (`A · B · C`), `WORD — fragment` labels with a spaced em dash, tinted fake-blacks
  (`#0B0B0B`, `#111`), monospace for every small data label, a `→` appended to link text.
- Numbered markers (`01 / 02 / 03`) on content that is not actually a sequence.

Keep the base palette to four to six named values and one or two typefaces. Line length under 80
characters. If a section needs emphasis, spend it in one place and keep everything else quiet.

