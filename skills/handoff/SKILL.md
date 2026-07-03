---
name: handoff
description: Use to write a compact temporary handoff document so another agent or session can continue the work safely.
---

# Handoff

## Rule

Create a compact continuation note in the operating system temp directory. Reference durable artifacts instead of duplicating them. Redact secrets.

## Use When

- The user asks for a handoff, continuation note, session summary, or context pack.
- Work is unfinished and another agent or future session needs to continue.
- The thread is long enough that a fresh start would lose important decisions.

## Procedure

1. Identify the handoff target.
   - If the user gave a focus, tailor the document to that next task.
   - If not, write for a capable coding agent resuming the current work.
2. Gather only the needed state:
   - Goal and current status.
   - Decisions made and constraints that still bind.
   - Files changed or owned.
   - Commands run and meaningful results.
   - Open questions, blockers, and next actions.
   - Relevant artifact paths or URLs.
   - Suggested skills the next agent should use, and why.
3. Redact secrets:
   - API keys, tokens, passwords, cookies, private keys, credentials, auth headers.
   - Personal data not needed for the next step.
   - Replace with `[REDACTED]`; do not preserve partial secrets.
4. Load `references/handoff-template.md` for the document shape, compactness rules, and redaction checklist.
5. Write the document to the OS temp directory, not the workspace.
   - Use a filename like `skillforge-handoff-YYYYMMDD-HHMMSS.md`.
6. Re-read the document before reporting the path.

## Boundaries

- Do not create README files or permanent docs unless the user asks.
- Do not copy full PRDs, diffs, logs, or plans into the handoff. Link or cite paths.
- Do not include secrets even if they appeared earlier in the conversation.
- Do not claim work is complete unless fresh verification supports it.
