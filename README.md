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
- `/pricing` is a real subscriptions page with three plans and a single CTA.
- Header and footer branding use the current Valknut asset from `public/brand/`.
- Footer is a minimal navigation plus icon-contacts footer.

## Routes
Implemented routes:
- `/`
- `/schedule`
- `/pricing`

Placeholder routes:
- `/about`
- `/coaches`
- `/gallery`
- `/contact`
- `/faq`

## Primary Navigation
Visible primary navigation is limited to:
1. `Академія`
2. `Тренери`
3. `Розклад`
4. `Ціни`
5. `Медіа`

## Content Architecture
Business content lives in `src/content/*`.

Important content modules:
- `src/content/site.ts`
- `src/content/about.ts`
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
