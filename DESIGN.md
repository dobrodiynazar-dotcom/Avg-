# DESIGN.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: restored-after-sync

## 1. Design Direction
The Avangard site uses a Linear-inspired dark system adapted for a premium martial arts academy. The experience should feel:
- premium,
- quiet,
- disciplined,
- modern,
- mobile-aware,
- structurally clear.

This is not an aggressive MMA promo style. Avoid visual noise, oversized combat clichés, red-black flame aesthetics, distressed textures, or flashy motion.

## 2. Implemented Visual Foundation
The current codebase already implements the following foundation:
- Near-black canvas and stepped dark surface ladder.
- Single restrained lavender-blue accent.
- Large display typography with negative tracking.
- Hairline border-based depth instead of heavy shadows.
- Consistent card and panel treatment.
- Sticky header, compact CTA rhythm, and dark premium shell.

The design system is implemented through:
- `src/lib/design/tokens.ts`
- `src/app/globals.css`

## 3. Color System
### Core surfaces
- Canvas: `#010102`
- Surface 1: `#0f1115`
- Surface 2: `#151922`
- Surface 3: `#1b212c`
- Surface 4: `#222a36`

### Borders and text
- Hairline: `#23252a`
- Hairline strong: `#30333a`
- Hairline tertiary: `#3b414b`
- Ink: `#f7f8f8`
- Ink muted: `#d0d6e0`
- Ink subtle: `#8a8f98`
- Ink tertiary: `#62666d`

### Accent
- Primary: `#5e6ad2`
- Primary hover: `#828fff`
- Primary focus: `#5e69d1`

### Rules
- Use accent sparingly: CTAs, active/focus states, eyebrows, and small emphasis.
- Do not introduce additional bright accent families without explicit approval.
- Keep surfaces dark and restrained; hierarchy should come from spacing, scale, and surface lift.

## 4. Typography
### Current implementation
- Sans: `Inter`
- Mono: `JetBrains Mono`

### Tone
- Headlines should feel confident and clean.
- Body copy should stay readable and calm.
- Large headings may use slight negative tracking.
- Avoid decorative or “fight poster” typography.

## 5. Layout Principles
- Use strong section hierarchy.
- Keep content in reusable full-width section bands with constrained inner containers.
- Prefer content density that still scans cleanly on mobile.
- Let photography and real academy media carry emotion, not gradients or decorative effects.
- Use cards for coaches, pricing, schedule, media summaries, FAQ, and contacts.

## 6. Mobile Rules
- Mobile is critical.
- Header/nav must stay simple and tappable.
- Hero copy must remain readable without crowding.
- Schedule and pricing must be easy to scan in single-column or compact layouts.
- Contact actions must remain obvious near the top and lower in the page.
- Media must not break layout or slow the experience excessively.

## 7. Component Inventory
### Global shell
- `SiteHeader`
- `MobileNav`
- `SiteFooter`

### UI primitives
- `Container`
- `Button`
- `Card`
- `CTAGroup`
- `SectionHeader`

### Domain components
- `CoachCard`
- `PricingCard`
- `ScheduleGrid`
- `MediaCard`
- `ContactCard`
- `FAQAccordion`

### Section components
- `HeroSection`
- `AboutSection`
- `CoachesSection`
- `ScheduleSection`
- `PricingSection`
- `GallerySection`
- `ContactSection`
- `FAQSection`

## 8. Page Model
- Homepage is the primary composed experience.
- Secondary routes are currently structural placeholders and should remain visually consistent with the homepage shell.
- When Milestone 4 begins, route implementations should extend the existing system rather than replacing it.

## 9. Media Direction
- Prefer real academy photography and selected video.
- Use media to communicate credibility, discipline, and environment.
- Avoid generic stock imagery and excessive spectacle.
- No flashy background effects, no overbuilt hero chrome, no decorative “MMA energy” graphics.

## 10. Content Tone
User-facing Ukrainian copy should be:
- professional,
- welcoming,
- confident,
- clear,
- credible for both beginners and serious athletes.

## 11. Current Risks to Watch
- Some stored Ukrainian text may have encoding issues and should be verified before wider content rollout.
- The current implementation still contains placeholders, so polish must not be mistaken for production-ready content.
- A missing `--color-on-primary` token should be corrected before deeper UI expansion.

## 12. Design Guardrails
### Do
- Preserve the current Linear-inspired dark premium system.
- Keep CTA patterns consistent.
- Use real content and assets inside the established structure.
- Maintain calm, polished spacing and mobile readability.

### Do not
- Redesign the site into a new visual language.
- Introduce loud gradients, heavy shadows, or marketing gimmicks.
- Use cheap combat-sports aesthetics.
- Break the reusable section/content architecture.
