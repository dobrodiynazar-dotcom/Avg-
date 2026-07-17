# REQ.md

## Meta
- Last updated: 2026-07-17
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: active-source-of-truth

## 1. Product Brief
- Product: Official website for Avangard Jiu-Jitsu Academy.
- Location: Rivne, Ukraine.
- Primary site language: Ukrainian.
- Positioning: Premium, restrained, cinematic academy website with a disciplined sports tone.
- Primary outcome: Help visitors understand the academy quickly and move into contact through real channels.

## 2. Current Product Reality
The repository is no longer a planning-only or foundation-only project.

Already implemented:
- homepage with real media and real business data;
- real `/schedule` page;
- real `/pricing` page;
- homepage location switcher with embedded Google Maps;
- current header/footer branding and footer contact icons;
- typed content architecture in `src/content/*`.

Still incomplete:
- dedicated content pages for `/about`, `/coaches`, `/gallery`, `/contact`, `/faq`;
- final approved coach biographies;
- final production domain / canonical URL replacement;
- final SEO polish and launch hardening.

## 3. Target Audience
- Adults, teenagers, beginners, and parents looking for Brazilian Jiu-Jitsu in Rivne.
- Returning visitors who want schedule, prices, maps, and contact channels quickly.

## 4. Business Goals
- Increase qualified training inquiries.
- Present Avangard as a serious, modern, premium BJJ academy.
- Keep schedule, pricing, and locations easy to find on mobile and desktop.
- Preserve a maintainable content-driven codebase.

## 5. Core User Jobs
- Understand what the academy offers.
- See whether there is a suitable age group.
- Check schedule and pricing quickly.
- Find where training happens.
- Contact the academy without friction.

## 6. In Scope
- Next.js App Router website.
- TypeScript + Tailwind CSS.
- Ferrari-inspired cinematic design adapted to a premium sports-academy look.
- Typed local content files as the business-content source.
- Reusable UI/domain/section architecture.
- Mobile-first responsive behavior.
- Route placeholders for unfinished secondary pages.

## 7. Out of Scope
- CMS / admin panel.
- Multilingual architecture.
- Online payments or booking flows.
- Full redesign away from the current approved direction.
- Removing the content-driven architecture.

## 8. Functional Requirements
1. Homepage must remain the primary conversion and orientation surface.
2. The site must keep `/schedule` and `/pricing` as real implemented routes.
3. The site must keep business content editable through `src/content/*`.
4. Navigation must remain limited to the current five approved primary items.
5. The site must preserve mobile usability as a first-class requirement.
6. The repository memory documents must reflect actual implementation state.

## 9. Non-Functional Requirements
- Performance: static-first and mobile-conscious.
- Accessibility: semantic structure, keyboard support, readable contrast.
- Maintainability: prefer typed content and reusable components over repeated hard-coded strings.
- Stability: preserve the current approved design and architecture.

## 10. Current Route Baseline
Implemented:
- `/`
- `/schedule`
- `/pricing`

Placeholder:
- `/about`
- `/coaches`
- `/gallery`
- `/contact`
- `/faq`

## 11. Current Approved Design Baseline
- Hero video behavior is approved.
- Homepage section order and visual direction are approved.
- Schedule page layout is approved.
- Pricing/subscriptions page layout is approved.
- Homepage location switcher behavior is approved.
- Footer contact-icon concept is approved.
- Soft-premium radius system is approved.

## 12. Recommended Next Product Work
1. Turn `/about` into a real academy page.
2. Finalize coach biographies and then replace the `/coaches` placeholder route.
3. Replace `https://example.com` metadata base with the production domain when known.
