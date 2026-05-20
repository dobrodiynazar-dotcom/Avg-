# REQ.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: approved-for-planning

## 1. Product Brief
- Product/Feature: Official website for Avangard Jiu-Jitsu Academy.
- Location: Rivne, Ukraine.
- Language: Ukrainian only.
- One-line value proposition: A premium, modern, minimal website that presents Avangard Jiu-Jitsu Academy and helps people quickly understand the academy, view training options, and contact the team.
- Why now: The old project direction is no longer satisfactory, so this is a clean new start built on the existing agent-workflow repository, existing brand assets, and existing academy materials.

## 2. Target Audience
- Primary segment: Adults, teenagers, parents, beginners, and people looking for BJJ training in Rivne.
- Secondary segment: Experienced athletes, competitors, families looking for sport activities for children, and people comparing martial arts academies.
- Age context: Website visitors are usually 12+ years old, while actual athletes may start from around 3–4 years old.
- Context of use: A person discovers the academy through search, Instagram, recommendation, or direct link and wants to understand whether this is the right place to train.
- Pain points:
  - Newcomers may not know whether BJJ is suitable for them.
  - Parents may want a safe, structured, disciplined sport for children.
  - Athletes may want to see coaches, schedule, prices, and team credibility.
  - Users need clear contact actions without digging through the site.

## 3. Business Goals
- Goal 1: Increase training inquiries and trial-session requests.
- Goal 2: Present the academy as a serious, modern, premium BJJ team in Rivne.
- Goal 3: Make prices, schedule, coaches, location, and contact options easy to find.
- Goal 4: Create a maintainable website structure that can be updated later without rebuilding the whole site.

## 4. Jobs To Be Done
- When I am looking for BJJ training in Rivne, I want to quickly understand what Avangard offers, so I can decide whether to contact the academy.
- When I am a parent, I want to see that the academy is professional, disciplined, and appropriate for children, so I can feel confident contacting the team.
- When I am a beginner, I want the site to feel clear and welcoming, so I do not feel that the academy is only for professionals.
- Core functional job: Help users learn about the academy and contact it through Telegram, Instagram, or phone.
- Emotional/social job: Make the academy feel premium, trustworthy, disciplined, modern, and active.

## 5. Scope
### In scope
- New website built from scratch.
- Ukrainian-only content.
- Next.js + TypeScript + Tailwind CSS implementation.
- High-quality modern marketing website, not a complex web app.
- Responsive design for both desktop and mobile, with mobile treated as critical.
- Pages/sections for academy overview, coaches, schedule, pricing, gallery/media, contacts, FAQ/trial training.
- Reusable components for hero, cards, sections, CTAs, coach profiles, pricing, schedule, media gallery, contact blocks.
- Lightweight admin/content-management approach without a database.
- Google Maps integration.
- Instagram link/integration.
- Telegram button.
- Phone call CTA.
- SEO basics for local discovery.
- Vercel deployment target.

### Out of scope
- Separate pages for children, adults, and beginners.
- Multilingual support.
- Complex web app behavior.
- Database-backed CMS.
- Online payments.
- User accounts.
- Booking calendar with authentication.
- Blog/news in the first release unless explicitly requested later.

## 6. Functional Requirements
1. FR-001: The website must present Avangard Jiu-Jitsu Academy as a premium modern BJJ academy in Rivne.
2. FR-002: The website must provide clear CTA paths through Telegram, Instagram, and phone.
3. FR-003: The website must show the academy’s schedule in an easy-to-read format.
4. FR-004: The website must show pricing/abonnement options clearly.
5. FR-005: The website must show coaches and their achievements.
6. FR-006: The website must support photos and selected videos.
7. FR-007: The website must include contact information and Google Maps location.
8. FR-008: The website must be responsive on desktop, tablet, and mobile.
9. FR-009: The website must use existing logo, colors, typography, photos, videos, prices, schedule, and coach data where available.
10. FR-010: The website must include a lightweight admin/content editing approach without a database.
11. FR-011: The website must be structured so future content can be updated easily.
12. FR-012: The website must preserve the Linear-inspired design system from DESIGN.md, adapted for a martial arts academy.
13. FR-013: The website should use Charlotte BJJ as a structural/reference inspiration, especially for clean layout and instructor presentation, without copying content or branding.

## 7. Non-Functional Requirements
- Performance: Fast-loading marketing site. Optimize images/videos, avoid unnecessary client-side JavaScript, and keep Core Web Vitals in mind.
- Reliability: Static-first pages should work reliably without depending on a database.
- Security: Do not expose secrets. Keep environment variables in `.env.local` and Vercel environment settings.
- Accessibility: Use semantic HTML, readable contrast, keyboard-accessible navigation, alt text for images, visible focus states.
- Localization: Ukrainian only. No multilingual architecture required.
- Maintainability: Use typed data files and reusable components. Avoid hard-coded repeated content.
- SEO: Include metadata, local keywords, Open Graph data, structured headings, and meaningful page titles/descriptions.

## 8. User Scenarios
1. Happy path: A visitor opens the homepage, understands the academy, checks schedule/prices, and taps Telegram or phone to contact the team.
2. Parent path: A parent visits the site, sees professional presentation, coaches, schedule, and contact buttons, then reaches out through Telegram/Instagram.
3. Athlete path: An experienced athlete checks coaches, achievements, atmosphere, and schedule before contacting the academy.
4. Mobile path: A visitor opens the site from Instagram on a phone and can quickly navigate, read sections, and contact the academy.
5. Failure/recovery: If media or an embed fails, core content and contact actions must still be visible.

## 9. Acceptance Criteria
1. Given a user opens the homepage, when the page loads, then the academy name, location, BJJ focus, and primary contact actions are visible without confusion.
2. Given a user visits on mobile, when they scroll the site, then all sections are readable and CTAs remain easy to access.
3. Given a user wants to contact the academy, when they click Telegram, Instagram, or phone, then the correct action/link opens.
4. Given a user checks schedule or prices, when they open the relevant section/page, then information is structured and easy to scan.
5. Given a user checks coaches, when they open the trainers section/page, then coach profiles and achievements are presented clearly.
6. Given the site is built, when tests/lint/type checks run, then the project passes without errors.
7. Given the site is deployed, when visited on Vercel, then the production build works and key routes return successfully.

## 10. Success Metrics
- North star metric: Number of qualified contact actions from Telegram, Instagram, and phone.
- Leading indicators:
  - CTA clicks.
  - Contact section visits.
  - Schedule/pricing section visits.
  - Mobile engagement.
- Guardrail metrics:
  - Page load speed.
  - Mobile usability.
  - Broken link count.
  - Build/test failures.

## 11. Risks and Assumptions
- Assumption: Final texts will be prepared later and may initially use placeholders or structured draft copy.
- Assumption: Logo, colors, typography, photos, videos, schedule, prices, contacts, and coach data exist and will be provided/imported.
- Assumption: A lightweight content editing approach without database is acceptable for the first release.
- Risk: Admin panel without database can become too complex.
  - Mitigation: Start with typed local content files and a simple protected editing workflow only if feasible.
- Risk: Too much inspiration from Charlotte BJJ could lead to copying.
  - Mitigation: Use it only as structural/design inspiration, not as content or identity copying.
- Risk: Large media files can slow mobile performance.
  - Mitigation: Optimize media and use responsive loading.

## 12. Open Questions
1. Final domain name.
2. Final hosting account and Vercel project ownership.
3. Exact contact links: Telegram, Instagram, phone, email.
4. Exact Google Maps location/embed.
5. Final content for about, coaches, prices, schedule, FAQ, and trial training.
6. Whether the first release needs a real admin UI or a simpler file-based content workflow.
