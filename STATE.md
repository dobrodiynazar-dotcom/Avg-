# STATE.md

## Meta
- Last updated: 2026-10-22
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Current phase: prices-inline-preview
- Canonical branch: `main`
- CMS prototype branch: `cms-prototype`

## 1. Current Project State
This repository is the active source of truth for continuing the Avangard website in a new Codex chat. Payload runs locally against the isolated Neon branch `cms-prototype-local`. The `cms-prototype` Vercel Preview at `https://avg-git-cms-prototype-avangard-s-projects.vercel.app/` uses the separate Neon branch `preview/cms-prototype` (`br-winter-pine-b9b01uwx`). Both migrations are applied; the Prices migration seeded eight existing cards once. One administrator exists, and all public routes load. This work was pushed only to `cms-prototype`; Production remains sourced from `main`.

It is no longer a foundation-only or preview-only codebase.

## 2. Implemented
### Homepage
- Real homepage is implemented in `src/app/(site)/page.tsx`.
- Homepage sections are:
  1. hero video
  2. academy/about
  3. coaches
  4. `Вікові групи`
  5. media
  6. FAQ
  7. location switcher

### Hero Media
- Real hero video is integrated from `public/media/hero/avangard-hero.mp4`.
- Poster fallback is integrated from `public/media/hero/avangard-hero-poster.jpg`.
- Hero uses autoplay, muted, loop, and `playsInline`.

### Schedule
- `/schedule` is a real implemented route.
- It uses location switching between `Проспект Миру 19` and `Вишиванка 37`.
- It renders weekday-based schedule cards and mobile day blocks from `src/content/schedule.ts`.

### Pricing / Subscriptions
- `/pricing` is a real implemented route.
- It renders five subscription cards in a carousel, one single-training card, and two personal-training cards from Payload/PostgreSQL.
- The administrator signs in at the unlinked `/cms/login` route through Payload authentication, then edits one card at a time in place using the pencil. Save and Delete use Payload access control; visitors see no editing or login controls.
- `src/content/pricing.ts` retains static page copy and card summaries. The migration contains the original eight titles and prices; builds do not refill deleted cards.

### Locations / Maps
- Homepage location section is real and content-driven.
- It includes a two-location switcher and embedded Google Maps iframes.
- Business location data lives in `src/content/site.ts`.

### Footer
- Footer is implemented as a lightweight brand, navigation, and icon-contacts footer.
- Footer contact icons are active for Telegram, Instagram, Email, and Phone.

### Branding
- Header and footer use the shared `BrandMark` component.
- Current official logo asset:
  - `public/brand/avangard-valknut-20260530.png`

### Real Content Integration
- Real schedule data is integrated.
- Real pricing data is integrated.
- Real location data and real contact channels are integrated.
- Real homepage media and branding assets are integrated.

## 3. Removed Placeholder Routes
The unused placeholder-only routes `/about`, `/contact`, and `/faq` have been removed from the final site.
They should fall through to the normal 404 behavior.

## 4. Current Content Architecture
Business-content source of truth:
- `src/content/site.ts`
- `src/content/navigation.ts`
- `src/content/coaches.ts`
- `src/content/schedule.ts`
- Payload `prices` collection for card titles and prices; `src/content/pricing.ts` for static page copy and summaries
- `src/content/media.ts`
- `src/content/faq.ts`

Rule:
- do not hardcode business content inside UI components; Prices titles and prices belong in Payload, while other approved content stays in `src/content/*`.

## 5. Current Navigation
Visible primary navigation is intentionally limited to these five items:
1. `Академія`
2. `Тренери`
3. `Розклад`
4. `Ціни`
5. `Медіа`

Destinations:
- `Тренери` -> `/coaches`
- `Розклад` -> `/schedule`
- `Ціни` -> `/pricing`
- `Ветерани` -> `/veterans`
- `Медіа` -> `/gallery`

## 6. Current Design Decisions
- Preserve the Ferrari-inspired cinematic direction.
- Preserve the softened premium sports-academy adaptation.
- Preserve the current radius system from `src/styles/tokens.css`.
- Preserve the current footer concept and homepage section order.
- Preserve current schedule and pricing page structures.

## 7. Still Pending / Known Issues
- Neon is connected to Vercel Preview only with Preview Branching enabled. The Preview branch `preview/cms-prototype` has both migrations, eight initial Prices cards, and one administrator; the local branch `cms-prototype-local` remains separate.
- Coaches homepage section still uses provisional coach profiles until final biographies are approved.
- Production `metadataBaseUrl` is configured in `src/lib/design/site.ts`.
- Mobile navigation should still be treated as a regression-sensitive area whenever touched.
- Media/logo optimization may still be worth revisiting later if the asset set changes again.
- No CI workflow is currently present.
- `npm audit --omit=dev --audit-level=high` reports four high and five moderate advisories in Payload's transitive dependencies; the current audit output offers no upstream fix. Recheck when dependencies change.

## 8. Verification Reality
Required checks for change work:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm audit --omit=dev`

Known environment limitation:
- `next build` may fail inside the sandbox because Turbopack cannot spawn worker processes there.
- In that case, rerun the build outside the sandbox and report that honestly.

## 9. New Codex Chat Handoff
### Read order
1. `STATE.md`
2. `REQ.md`
3. `CONTEXT.md`
4. `DESIGN.md`
5. `TDD.md`
6. `agent.md`

### Instructions for the next agent
1. Inspect the current branch before editing.
2. Preserve the current design and architecture.
3. Treat `src/content/*` as the business-content source.
4. Avoid restoring removed homepage sections.
5. Avoid reintroducing outdated placeholder copy into real implemented sections.
6. Run verification before committing.
7. Make scoped commits.
8. Push only after successful verification.
9. Report environment limitations honestly.

### Current maturity
- Homepage: implemented and content-driven
- Schedule page: implemented
- Pricing page: database-driven, with inline administrator editing and public layout preserved
- Secondary routes: unused placeholders removed
- Payload foundation and Prices migration: locally verified against `cms-prototype-local` and deployed to Vercel Preview against `preview/cms-prototype`

### Known technical debt
- production metadata base URL is configured;
- no CI workflow;
- some content modules still hold provisional copy even though the sections themselves are real.
