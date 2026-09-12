# Example: roadmap

```markdown
# Roadmap: move authentication to OIDC

## Outcome
Users sign in through the corporate identity provider. Local password auth is gone, sessions
survive the cutover, and no user has to re-register.

## Change index

| id | change | depends on | status | done when |
|----|--------|-----------|--------|-----------|
| 01-oidc-config | Add OIDC provider config and discovery, behind a flag | — | done | Flag on in dev, discovery document fetched and cached |
| 02-dual-sessions | Accept OIDC sessions alongside local ones | 01-oidc-config | in progress | A user can sign in either way and reach the same account |
| 03-account-migration | Migrate existing accounts by verified email | 02-dual-sessions | proposed | Every active account maps to an IdP subject; unmatched ones listed |
| 04-drop-local-auth | Remove local password auth and the flag | 03-account-migration | proposed | No password fields remain; reset endpoints return 410 |

## Sequencing
01 and 02 are additive and safely shippable behind the flag. 03 is the only irreversible step —
its unmatched-account list needs support review before it runs. 04 waits one full billing cycle
after 03 so dormant users still get a working login.

## De-risking
- **Pre-mortem** — most likely failure: duplicate accounts sharing an email, silently merged in
  03. Mitigation: 03 refuses ambiguous matches and reports them instead of guessing.
- **Unknown unknowns** — nobody currently knows how the mobile client stores its session token.
  That is a lookup before 02, not an assumption.
- **Devil's advocate** — the strongest case against: local auth costs nothing today, and the IdP
  becomes a hard external dependency for every login. Accepted because the client mandates SSO
  by Q3.
- **When it breaks** — the IdP is down and nobody can sign in at all, including support. 04 is
  what removes the last way back in, so it carries a break-glass local admin account.

## Open
- Does the IdP issue stable subjects across email changes? Blocks 03-account-migration.
  (platform team)
```
