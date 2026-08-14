## Mission
Operate this repository as a stable AI-agent workflow for the Avangard Jiu-Jitsu Academy website.

The repository already contains real implemented user-facing work. The job of the next agent is to preserve, extend, and document that work without drifting from the approved design and architecture.

## Required Read Order
Read these files before editing:
1. `STATE.md`
2. `REQ.md`
3. `CONTEXT.md`
4. `DESIGN.md`
5. `TDD.md`
6. `agent.md`

## Primary Rules
- Do not restart the project.
- Do not redesign the website from scratch.
- Preserve the current Ferrari-inspired cinematic direction.
- Preserve the softened premium sports-academy adaptation.
- Preserve the content-driven architecture.
- Preserve the existing route structure unless explicitly asked to change it.

## Content Rules
- Treat `src/content/*` as the business-content source of truth.
- Prefer editing typed content modules over hard-coding strings in components.
- Do not reintroduce outdated placeholder copy into already implemented homepage sections.

## Route Rules
- Real routes currently are `/`, `/coaches`, `/gallery`, `/schedule`, `/pricing`, and `/veterans`.
- The unused placeholder-only routes `/about`, `/contact`, and `/faq` are not part of the final website.
- Do not reintroduce placeholder-only routes.

## Navigation Rules
Primary navigation must remain:
1. `Академія`
2. `Тренери`
3. `Розклад`
4. `Ціни`
5. `Медіа`

Do not reintroduce `Контакти` or `FAQ` into the visible primary navigation unless explicitly requested.

## Mobile / UX Rules
- Treat mobile navigation as regression-sensitive.
- Preserve focus trap, focus restore, Escape close, and overlay close behavior if editing `MobileNav`.
- Preserve current hero video behavior.

## Verification Rules
Before committing:
- run `npm run lint`
- run `npm run typecheck`
- run `npm run build`
- run `npm audit --omit=dev`

If Turbopack cannot build inside the sandbox, rerun the build outside the sandbox and report that honestly.

## Git Rules
- Inspect `git status` before editing.
- Make scoped commits.
- Push only after verification succeeds.
- Do not revert unrelated user changes.

## Recommended Next Work
1. Finalize coach biographies.
2. Continue SEO launch hardening around social preview assets and final copy.
