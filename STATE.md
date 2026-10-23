# STATE.md

## Meta
- Last updated: 2026-10-23
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Current phase: schedule-inline-cms
- Canonical branch: `main`
- CMS prototype branch: `cms-prototype`

## 1. Current Project State
This repository is the active source of truth for continuing the Avangard website in a new Codex chat. Payload runs locally against the isolated Neon branch `cms-prototype-local`. The `cms-prototype` Vercel Preview at `https://avg-git-cms-prototype-avangard-s-projects.vercel.app/` uses the separate Neon branch `preview/cms-prototype` (`br-winter-pine-b9b01uwx`). Preview builds run pending migrations before build; Prices was seeded with eight cards, and Schedule was seeded with 33 training entries. One administrator exists, and all public routes load. This work is scoped to `cms-prototype`; Production remains sourced from `main`.

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
- It renders the approved weekday layout from `src/content/schedule.ts`; training entries come from the Payload `schedule-entries` collection.
- The administrator can add, edit, and delete individual training entries inline. The existing 33 entries are seeded once by migration; deleted entries are not restored by later builds.
- Each weekday has a training-shaped add card below its saved entries in edit mode. It becomes a local draft until Save. Refreshed server entries replace stale client data; weekday/training hover effects apply only to devices with a fine pointer and respect reduced motion.

### Pricing / Subscriptions
- `/pricing` is a real implemented route.
- It renders five subscription cards in a carousel, one single-training card, and two personal-training cards from Payload/PostgreSQL.
- The administrator signs in at the unlinked `/cms/login` route through Payload authentication, then edits one card at a time in place using the pencil. Save and Delete use Payload access control; visitors see no editing or login controls.
- Edit mode adds a `+` to each of the three sections. New cards use the shared editor, server-generated keys, and section ordering. Clicking outside discards local edits without confirmation; only saved-card deletion asks for confirmation. Save/Delete exits edit mode after success.
- Card prices are numeric, with strict positive values and at most two decimal places; currency/period units are display-only. The existing free veterans card keeps its fixed zero price and editable title. A controlled migration converts existing labels while preserving IDs, names and order; it does not reseed data.
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
- `src/content/schedule.ts` for Schedule page copy, locations, weekdays and homepage preview; Payload `schedule-entries` for training times and groups
- Payload `prices` collection for card titles and prices; `src/content/pricing.ts` for static page copy and summaries
- `src/content/media.ts`
- `src/content/faq.ts`

Rule:
- do not hardcode business content inside UI components; Prices cards and Schedule training entries belong in Payload, while other approved content stays in `src/content/*`.

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
- Neon is connected to Vercel Preview only with Preview Branching enabled. The Preview branch `preview/cms-prototype` retains the eight initial Prices cards and one administrator; the local branch `cms-prototype-local` remains separate.
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

Prices CREATE/numeric-price refinement (2026-10-22): ESLint, TypeScript, seven CMS tests and webpack build passed. Local API integration verified public reads, unauthorized CREATE/UPDATE/DELETE rejection, strict numeric validation, CREATE in all three sections, UPDATE persistence in a fresh public request, and QA fixture deletion. The migration was checked on a temporary database copy for preserved data, rollback on invalid legacy labels, down migration, and an empty collection without reseeding. Browser checks covered desktop and 320px mobile editors, normalized dirty state, outside discard, section transitions and the fixed free-card display. No e2e test runner was added.

Schedule inline CMS (2026-10-23): ESLint, TypeScript, nine CMS tests and webpack build passed. The one-time SQL migration was tested inside a rollback-only transaction against `cms-prototype-local`; it seeded the 33 existing entries and left the database unchanged. The local Neon database has a Payload `dev` migration marker, so the normal migration prompted about potential data loss and was not confirmed. Vercel reported the Preview deployment successful; its public API returned 33 entries and mobile browser checks confirmed both location timetables. Authenticated inline editing and write persistence have not yet been checked in Preview. `npm audit --omit=dev --audit-level=high` still reports four high and five moderate transitive advisories without an upstream fix.

Schedule follow-up (2026-10-23): the reported empty weekday regression did not reproduce on a fresh Preview reload. Inspection confirmed matching migration/location/day keys and public READ; a stale-state defect was fixed so refreshed server props update the rendered records. The schema and migrations remain unchanged. Ten CMS tests cover permissions, isolated order lookup, all 33 migrated keys, and duplicate times. Independent focused reviews checked the data path, Prices reference, and final Schedule diff.

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
- Schedule page: database-driven training entries with inline administrator editing; public Preview read verified
- Pricing page: database-driven, with inline administrator editing and public layout preserved
- Secondary routes: unused placeholders removed
- Payload foundation and Prices migration: locally verified against `cms-prototype-local` and deployed to Vercel Preview against `preview/cms-prototype`

### Known technical debt
- production metadata base URL is configured;
- no CI workflow;
- some content modules still hold provisional copy even though the sections themselves are real.
