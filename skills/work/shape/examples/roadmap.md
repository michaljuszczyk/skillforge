# Example: roadmap

```markdown
# Roadmap: move authentication to OIDC

## Outcome
Users sign in through the corporate identity provider. Local password auth is gone, sessions
survive the cutover, and no user has to re-register.

## Change index

| id | change | depends on | done when |
|----|--------|-----------|-----------|
| c1 | Add OIDC provider config and discovery, behind a flag | — | Flag on in dev, discovery document fetched and cached |
| c2 | Accept OIDC sessions alongside local ones | c1 | A user can sign in either way and reach the same account |
| c3 | Migrate existing accounts by verified email | c2 | Every active account maps to an IdP subject; unmatched ones listed |
| c4 | Remove local password auth and the flag | c3 | No password fields remain; reset endpoints return 410 |

## Sequencing
c1 and c2 are additive and safely shippable behind the flag. c3 is the only irreversible step —
its unmatched-account list needs support review before it runs. c4 waits one full billing cycle
after c3 so dormant users still get a working login.

## De-risking
- **Pre-mortem** — most likely failure: duplicate accounts sharing an email, silently merged in
  c3. Mitigation: c3 refuses ambiguous matches and reports them instead of guessing.
- **Unknown unknowns** — nobody currently knows how the mobile client stores its session token.
  That is a lookup before c2, not an assumption.
- **Devil's advocate** — the strongest case against: local auth costs nothing today, and the IdP
  becomes a hard external dependency for every login. Accepted because the client mandates SSO
  by Q3.

## Open
- Does the IdP issue stable subjects across email changes? Blocks c3. (platform team)
```
