# DESIGN.md

## Meta
- Last updated: 2026-07-17
- Status: approved-current-direction

## 1. Design Direction
The approved implementation is Ferrari-inspired, but it is not a literal Ferrari clone.

Current approved interpretation:
- cinematic and premium;
- dark editorial atmosphere;
- restrained use of red accent;
- disciplined sports-academy tone;
- softened with subtle rounded corners and calmer glass/matte surfaces.

This repository should not be pushed back toward:
- hard zero-radius automotive sharpness everywhere;
- aggressive MMA/grunge styling;
- noisy landing-page marketing patterns;
- overbuilt dashboard UI.

## 2. Core Visual Principles
- Near-black canvas is the base environment.
- White typography carries the main contrast.
- Red is the single primary accent and must stay scarce.
- Photography and video do most of the emotional work.
- Section rhythm should feel editorial, not app-like.
- The site should feel premium, cinematic, and athletic.

## 3. Typography
- Sans family in implementation: `Inter`.
- Mono support: `JetBrains Mono`.
- Display type is large, clean, and restrained.
- CTA and navigation labels may use uppercase with tracking, but should remain readable and not noisy.
- Avoid over-condensed or over-decorated display styling.

## 4. Radius System
The currently approved system is soft-premium, not zero-radius.

Use the current token scale from `src/styles/tokens.css`:
- buttons around `9px`
- badges around `7px`
- small cards around `12px`
- medium cards around `15px`
- large media and main surfaces around `18px`

Rules:
- keep corners consistent through tokens;
- do not introduce random one-off radii;
- do not turn the interface bubbly or pill-heavy.

## 5. Surfaces
- Use dark matte or glass-like surfaces where already established.
- Borders should stay subtle.
- Overlays should support readability, not overpower content.
- Cards should feel premium and lightweight rather than thick or dashboard-heavy.

## 6. Hero Rules
- Preserve the current real video hero.
- Preserve autoplay, muted, loop, `playsInline`, and poster fallback.
- Keep the centered text overlay.
- Keep strong readability via dark overlays.
- Do not convert the hero back into a static card stack or side-aligned promo block.

## 7. Homepage Section Rules
- Preserve the current section order.
- Keep `Вікові групи` as a cinematic preview, not a dense schedule table.
- Keep the coaches section visually real but acknowledge that biography data is still provisional.
- Keep the location section as a cinematic switcher with embedded maps.
- Keep the footer minimal and navigation/contact focused.

## 8. Schedule and Pricing Page Rules
- `/schedule` and `/pricing` must continue to feel like the same page family.
- Keep their dark photographic background treatment.
- Keep glass/matte containers and cards.
- Do not redesign these routes unless explicitly requested.

## 9. Navigation Rules
- Primary visible navigation is limited to:
  - `Академія`
  - `Тренери`
  - `Розклад`
  - `Ціни`
  - `Медіа`
- Desktop, mobile drawer, and footer navigation should stay aligned to that model.

## 10. Branding Rules
- Header and footer use the Valknut mark from `public/brand/avangard-valknut-20260530.png`.
- Keep the mark small, crisp, and balanced with the text.
- Do not replace it with a generic geometric substitute.

## 11. Do
- preserve the existing approved cinematic rhythm;
- preserve the softened premium sports feeling;
- use the content layer as the source of truth;
- make small, scoped refinements;
- verify mobile behavior after navigation or hero edits.

## 12. Don't
- don't rebuild the site from scratch;
- don't reintroduce removed homepage sections;
- don't convert the site into a SaaS dashboard;
- don't use red everywhere;
- don't revert to outdated placeholder-first layouts.
