# Avangard Jiu-Jitsu Academy

Official website repository for Avangard Jiu-Jitsu Academy in Rivne, Ukraine.

This repository is the current source of truth for both:
- the implemented Next.js site;
- the project memory and handoff layer used by future Codex chats.

## Read First
Before making changes, read these files in order:
1. `STATE.md`
2. `REQ.md`
3. `CONTEXT.md`
4. `DESIGN.md`
5. `TDD.md`
6. `agent.md`

## Current Implemented State
- Homepage is implemented and uses real media, real schedule data, real pricing data, real contact channels, and a homepage location switcher with embedded Google Maps.
- Hero uses a real autoplaying background video with poster fallback.
- `/schedule` is a real page with a location switcher and per-day schedule cards.
- `/pricing` retains its subscriptions carousel, single-training and personal-training cards; card names and prices come from Payload.
- Header and footer branding use the current Valknut asset from `public/brand/`.
- Footer is a minimal navigation plus icon-contacts footer.

## Routes
Implemented routes:
- `/`
- `/coaches`
- `/gallery`
- `/schedule`
- `/pricing`
- `/veterans`

## Primary Navigation
Visible primary navigation is limited to:
1. `Академія`
2. `Тренери`
3. `Розклад`
4. `Ціни`
5. `Медіа`

## Content Architecture
Business content lives in `src/content/*`.

## Payload CMS foundation
Payload lives in `src/app/(payload)` and serves `/admin` and `/api` using a separate layout from the public site in `src/app/(site)`. Route groups do not change public URLs. `/pricing` reads its card names and prices from the public `prices` collection on every request; other public content stays in `src/content/*`. `/admin` remains a technical Payload interface. The unlinked `/cms/login` page signs the administrator in through Payload and returns them to `/pricing`, where the pencil opens inline editing. The public navbar and footer have no login or editing links.

The CMS prototype uses Neon in Vercel Preview only, with Preview Branching enabled for isolated deployments. Keep CMS environment variables out of Production until a separate launch decision. Local development uses the Neon branch `cms-prototype-local`: put its pooled connection string in the ignored `.env.local` as `DATABASE_URL`, and add a random secret of at least 32 bytes as `PAYLOAD_SECRET`. The `cms-prototype` Preview deployment also needs `PAYLOAD_SECRET`. Never commit or share either value.

`src/collections/Admins.ts` blocks ordinary account creation. On a clean Preview database, Payload's built-in `/admin/create-first-user` flow creates the first administrator; Payload disables that route after a user exists. The local prototype administrator was created with `npm run cms:bootstrap` and its generated password is held in the ignored `.env.admin.local` until it is moved to a password manager. The script refuses to run if an administrator already exists.

Migrations are in `src/migrations`. Payload synced the local development schema automatically, so do not reapply the initial migration to that database. The Prices migration creates its table and seeds the eight current cards once; later builds do not refill deleted cards. `vercel.json` runs `payload migrate` before the build only for `cms-prototype` Preview deployments; a failed migration fails the deployment. Neon Preview Branching supplies an isolated database branch. Production migrations are deferred.

Important content modules:
- `src/content/site.ts`
- `src/content/schedule.ts`
- `src/content/pricing.ts`
- `src/content/coaches.ts`
- `src/content/media.ts`
- `src/content/faq.ts`
- `src/content/navigation.ts`

## Design Direction
- Ferrari-inspired cinematic editorial direction
- softened for a premium sports-academy feel
- dark premium surfaces, restrained red accent, subtle rounded corners
- do not redesign the site from scratch

## Verification
Standard checks:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm audit --omit=dev`
