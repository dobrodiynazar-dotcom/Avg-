# CONTEXT.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: restored-after-sync

## 1. System Overview
- Product domain: Local sports academy marketing website for Brazilian Jiu-Jitsu.
- Current implementation state: Milestone 1-3 foundation exists.
- Architecture style: Static-first Next.js App Router site with typed local content and reusable components.
- Source of truth target: GitHub `main` after history synchronization and push.

## 2. Exact Stack
- Framework: Next.js `16.2.0`
- React: `19.2.0`
- Language: TypeScript `5.9.x`
- Styling: Tailwind CSS `4.1.x`
- Linting: ESLint `9.x`
- Fonts in implementation:
  - `Inter` for sans text
  - `JetBrains Mono` for mono support

## 3. Current Repository Map
- `/src/app`
  - App Router layout and pages
  - Homepage in `src/app/page.tsx`
  - Secondary route placeholders in route pages under `src/app/*/page.tsx`
- `/src/components/ui`
  - UI primitives: `Button`, `Card`, `Container`, `CTAGroup`, `SectionHeader`
- `/src/components/layout`
  - `SiteHeader`, `MobileNav`, `SiteFooter`
- `/src/components/domain`
  - Reusable domain renderers: coach, schedule, pricing, contact, media, FAQ
- `/src/components/sections`
  - Homepage section composition layer
- `/src/components/site`
  - Shared route placeholder pattern
- `/src/content`
  - Typed content modules: academy/site, navigation, placeholders, coaches, schedule, pricing, media, FAQ
- `/src/lib/design`
  - Site config and design tokens
- `/src/lib/seo`
  - Metadata builder
- `/src/types`
  - Shared content types

## 4. Architecture Layers
1. App shell layer
   - Global layout, fonts, metadata, header, footer.
2. Design-system layer
   - Tokenized colors, typography, spacing, radii, layout values, and CSS utilities.
3. UI primitive layer
   - Generic reusable components independent of BJJ-specific content.
4. Domain layer
   - Structured renderers for schedules, coaches, pricing, contact methods, media, and FAQ.
5. Section composition layer
   - Homepage sections that assemble domain/UI pieces.
6. Typed content layer
   - All primary content modeled in `src/content/*.ts`.

## 5. Domain Model
- `RouteKey`
- `NavigationItem`
- `ContactChannel`
- `AcademyInfo`
- `PagePlaceholder`
- `CoachProfile`
- `PricingPlan`
- `ScheduleSession`
- `MediaAsset`
- `FAQItem`
- `SectionIntro`

These types are centralized in `src/types/content.ts` and must remain stable unless dependent content and components are updated together.

## 6. Current Routing Model
- `/` renders the composed homepage.
- `/about`
- `/coaches`
- `/schedule`
- `/pricing`
- `/gallery`
- `/contact`
- `/faq`

The secondary routes currently use a shared placeholder shell rather than page-specific implementations. That is intentional Milestone 3 behavior, not a bug.

## 7. Content Strategy
- Content is file-based and typed.
- Placeholders are currently allowed where final content is not yet approved.
- Real content should replace placeholders without restructuring the UI.
- Prefer editing content files over embedding long strings directly in page components.

## 8. Repository Synchronization Reality
- Local code history started on `master` with milestone commits `b9dec5a` and `ee02151`.
- Remote GitHub planning history exists on `main` and is unrelated to the local code root.
- The correct recovery strategy is merge-based, not destructive:
  - fetch remote history
  - merge unrelated histories
  - preserve both milestone and planning lineage
  - push merged `main`

## 9. Operating Constraints
- Do not redesign the visual system.
- Do not restart the project.
- Preserve the Linear-inspired design language.
- Preserve the modular content-driven architecture.
- Avoid flashy MMA aesthetics, red-heavy combat templates, grunge, flames, or visual drift.
- Mobile usability remains a hard requirement.

## 10. Build and Deployment Context
- Expected commands:
  - `npm run dev`
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`
- Expected hosting target: Vercel.
- Current limitation: repository synchronization and memory restoration can complete before dependency installation/build verification; that limitation must be documented in `STATE.md`.

## 11. Known Technical Risks
- Some Ukrainian text appears mojibaked in the current content files and must be verified before copy-heavy implementation.
- `Button` references `--color-on-primary`, but that token is not defined in the current design token/CSS layer.
- Secondary routes are still placeholders and must not be mistaken for completed production pages.
- No local remote/upstream configuration existed before synchronization work began.

## 12. Change Rules
- Update `STATE.md` whenever milestones, risks, sync state, or approval state changes.
- Update `DESIGN.md` only when design decisions change, not for ordinary copy edits.
- Update `REQ.md` when product goals, scope, or milestone entry conditions change.
- Do not start Milestone 4 implementation without explicit approval.
