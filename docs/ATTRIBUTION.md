# Attribution

Two skills in this pack adapt mechanisms from other people's work. Their notices are reproduced
below as their licenses require.

## mattpocock/skills — MIT

- `skills/work/grilling` adapts the design-tree / frontier / rounds interrogation mechanism,
  including the convention of giving a recommended answer per question and treating
  fact-finding as the agent's job rather than the user's.
- `skills/work/handoff` adapts the handoff document shape: written for the next agent, saved
  outside the workspace, carrying a suggested-skills section, referencing rather than
  duplicating existing artifacts, and redacting sensitive data.
- `skills/dev/spike` adapts the cross-cutting rules from `prototype`: throwaway and labelled
  from day one, one command to run it, no persistence, no polish, surface the state, capture the
  answer and delete the code.
- `skills/work/grilling` also takes the fog test — a question you cannot phrase sharply is not a
  frontier question — from `wayfinder`.

Source: <https://github.com/mattpocock/skills>

```
MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## obra/superpowers — MIT

- `skills/work/writing-skills` adapts "match the form to the failure" (a prohibition suits a
  discipline failure; a wrong-shaped output needs a recipe; a missing element needs a template
  slot) and the pressure-test rule: run the task without the skill, keep the failure, write
  against it, re-run.
- `skills/work/delegating` adapts the fix-loop escalation: return findings to the same agent,
  escalate a tier after two failures, cap the rounds, then fix the brief.
- `skills/work/plan` adapts the plan-reader calibration and the placeholder scan.
- `skills/dev/review/references/done.md` adapts the regression-test criterion — reverting the fix
  must turn the test red again.

Source: <https://github.com/obra/superpowers>

```
MIT License

Copyright (c) 2025 Jesse Vincent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Ideas used without code

No text was copied from these, but the pack is shaped by them:

- **Karpathy guidelines** (`multica-ai/andrej-karpathy-skills`) — the four principles behind
  most of `AGENTS.md`: state assumptions, simplicity first, surgical changes, verifiable goals.
- **anthropics/skills `frontend-design`** (Apache-2.0) — the calibration list of AI-generated
  design tells behind the "do not look machine-made" rules in `digest`. No text vendored.
- **addyosmani/agent-skills** (MIT) — the anti-rationalization table pattern, and the idea of
  linting the catalog rather than trusting it.
- **agentskills.io** — the format spec the pack is written to.
