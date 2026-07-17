# CONTEXT.md

## Meta
- Last updated: 2026-07-17
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: current-implementation-audited

## 1. System Overview
- Product domain: Local sports academy marketing website for Brazilian Jiu-Jitsu.
- Architecture style: Static-first Next.js App Router site with typed local content and reusable components.
- Canonical branch: `main`.

## 2. Exact Stack
- Next.js `16.2.0`
- React `19.2.0`
- TypeScript `5.9.3`
- Tailwind CSS `4.1.x`
- ESLint `9.x`

## 3. Current Repository Map
- `src/app`
  - homepage in `src/app/page.tsx`
  - real routes in `src/app/schedule/page.tsx` and `src/app/pricing/page.tsx`
  - placeholder routes for `about`, `coaches`, `gallery`, `contact`, `faq`
- `src/components/layout`
  - `SiteHeader`, `MobileNav`, `SiteFooter`
- `src/components/ui`
  - generic UI primitives
- `src/components/domain`
  - active reusable domain renderers (`CoachCard`, `MediaCard`, `PricingCard`, `FAQAccordion`)
- `src/components/sections`
  - homepage sections
  - schedule page section
  - pricing page section
- `src/components/site`
  - shared route placeholder shell for unfinished routes
- `src/content`
  - business content source of truth
- `src/styles`
  - split CSS layers (`tokens.css`, `base.css`, `typography.css`, `utilities.css`, `components.css`)
- `public/`
  - real media, hero video, schedule and location imagery, current brand asset

## 4. Current Route Model
### Real routes
- `/`
- `/schedule`
- `/pricing`

### Placeholder routes
- `/about`
- `/coaches`
- `/gallery`
- `/contact`
- `/faq`

## 5. Homepage Structure
Current homepage order:
1. Hero section with autoplaying background video
2. Academy/about section
3. Coaches preview section
4. `Вікові групи` preview section
5. Media/gallery section
6. FAQ section
7. Location switcher section with embedded Google Maps

## 6. Content Architecture
Primary content source files:
- `src/content/site.ts`
- `src/content/about.ts`
- `src/content/navigation.ts`
- `src/content/coaches.ts`
- `src/content/schedule.ts`
- `src/content/pricing.ts`
- `src/content/media.ts`
- `src/content/faq.ts`
- `src/content/placeholders.ts`

Rule:
- edit business content in `src/content/*`, not directly in UI components.

## 7. Design / UX Reality
- Ferrari-inspired cinematic direction is approved.
- The implementation is softer than the original pure-Ferrari reference:
  - subtle rounded corners;
  - premium sports-academy feel;
  - restrained dark glass/matte surfaces;
  - red accent used sparingly.

## 8. Branding Reality
- Header and footer use the current Valknut PNG via `src/components/brand/BrandMark.tsx`.
- The active brand asset is `public/brand/avangard-valknut-20260530.png`.

## 9. Mobile Navigation Reality
- `MobileNav` is implemented and functional.
- It uses a right-side drawer, overlay click-to-close, Escape close, focus trap, and focus restore.
- It still deserves careful regression checking whenever edited because it is easy to break small-screen layout and readability.

## 10. Known Technical Constraints
- `src/lib/design/site.ts` still contains `https://example.com` as `metadataBaseUrl`.
- Unfinished routes intentionally still use `RoutePlaceholder`.
- Some content modules for coaches, media, and FAQ still carry provisional copy even though their homepage sections are implemented.

## 11. Safe Change Rules
- Do not redesign the website from scratch.
- Do not remove the hero video.
- Do not alter schedule page structure without explicit request.
- Do not alter pricing page structure without explicit request.
- Do not change location URLs or map embeds without explicit request.
- Preserve the content-driven architecture.
