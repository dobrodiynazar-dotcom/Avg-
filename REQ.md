# REQ.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: restored-after-sync

## 1. Product Brief
- Product: Official website for Avangard Jiu-Jitsu Academy.
- Location: Rivne, Ukraine.
- Primary site language: Ukrainian.
- Positioning: Premium, modern, restrained academy website with a disciplined sports tone rather than an aggressive MMA look.
- Primary outcome: Help visitors understand the academy quickly and move into contact through Telegram, Instagram, phone, and later finalized contact flows.

## 2. Project Reality
- This repository is no longer planning-only.
- Milestone 1-2 foundation is implemented in commit `b9dec5a` (`Set up Milestone 1-2 site foundation`).
- Milestone 3 reusable section and content architecture is implemented in commit `ee02151` (`Add reusable site sections and domain content architecture`).
- The planning memory layer was originally on remote `main`, while the implemented code lived locally on `master`. The repository must preserve both histories and treat the merged result as the canonical source of truth.
- Milestone 4 must not start until the synchronized repository state and restored planning documents are reviewed and approved.

## 3. Target Audience
- Primary: Adults, teenagers, beginners, and parents looking for Brazilian Jiu-Jitsu training in Rivne.
- Secondary: Experienced athletes, competitors, and families comparing academies.
- User intent:
  - Understand what the academy is.
  - Assess coaches, training format, schedule, prices, and atmosphere.
  - Contact the academy with minimal friction.

## 4. Business Goals
- Increase qualified training inquiries.
- Present Avangard as a serious, modern, premium BJJ academy.
- Make schedule, pricing, coaches, and contact options easy to find on mobile and desktop.
- Maintain a modular codebase that can be updated without redesigning the system.

## 5. Core User Jobs
- As a new visitor, I want to know what Avangard offers so I can decide whether to contact the academy.
- As a parent, I want the academy to feel disciplined, safe, and credible.
- As a beginner, I want the site to feel welcoming and not only aimed at professionals.
- As a returning visitor, I want schedule, prices, and contact actions to stay easy to access.

## 6. Scope
### In scope
- Next.js App Router website.
- TypeScript and Tailwind CSS implementation.
- Linear-inspired dark visual system adapted for a premium martial arts academy.
- Reusable section architecture.
- Reusable domain components.
- Typed local content files for academy, navigation, coaches, pricing, schedule, media, FAQ, and contact channels.
- Homepage section composition and secondary route placeholders.
- Mobile-first responsive behavior.
- Local SEO, metadata, and contact CTA support.

### Out of scope for the current approved foundation
- Database-backed CMS.
- Public-facing admin panel with write access.
- Multilingual architecture.
- Online payments, user accounts, or booking flows.
- Flashy combat-sports redesigns, grunge treatments, or aggressive MMA tropes.

## 7. Functional Requirements
1. The site must present Avangard Jiu-Jitsu Academy as a premium BJJ academy in Rivne.
2. The site must keep Telegram, Instagram, phone, and later finalized contact channels prominent.
3. The site must render schedule, pricing, coaches, media, and FAQ from structured typed content.
4. The site must remain maintainable through reusable UI primitives, domain components, and section composition.
5. The site must support mobile navigation and readable mobile layouts as a first-class requirement.
6. The site must preserve the established Linear-inspired design philosophy while adapting it to Avangard.
7. The site must allow real content and assets to replace placeholders without structural rewrites.

## 8. Non-Functional Requirements
- Performance: Static-first, lightweight, and optimized for mobile.
- Accessibility: Semantic structure, keyboard focus states, readable contrast, and accessible navigation.
- Maintainability: Prefer typed content modules over repeated hard-coded page copy.
- Originality: Use Charlotte BJJ only as high-level structural inspiration, never as copied content or branding.
- Stability: Keep the current modular architecture intact; do not restart or redesign the project.

## 9. Current Acceptance Baseline
The current Milestone 1-3 baseline is acceptable when:
- The homepage composes reusable sections from typed content.
- The global shell, navigation, footer, and metadata exist.
- Secondary routes exist and use the shared placeholder pattern.
- The design tokens and utility primitives remain consistent across the site.

## 10. Milestone 4 Entry Conditions
Milestone 4 must not begin until all of the following are true:
1. Local and remote repository histories are synchronized safely.
2. GitHub contains both the implemented codebase and the restored planning memory layer.
3. `STATE.md` reflects the actual current project state.
4. The user explicitly approves starting Milestone 4.

## 11. Open Questions
1. Final contact links and address values.
2. Final media asset set and placement.
3. Final academy copy in Ukrainian.
4. Whether a lightweight admin workflow is needed beyond typed files.
5. Exact Milestone 4 content/route scope once approval is given.
