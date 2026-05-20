# CONTEXT.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: approved-for-planning

## 1. System Overview
- Product domain: Local sports academy / Brazilian Jiu-Jitsu academy website.
- High-level architecture: Static-first Next.js marketing website with typed content files, reusable UI components, and optional lightweight admin/content editing flow without a database.
- Core modules:
  - Marketing pages and sections.
  - Content/data layer for schedule, prices, coaches, contacts, media, FAQ.
  - UI/design system based on DESIGN.md.
  - Contact integrations: Telegram, Instagram, phone, email.
  - Maps/media integrations.
  - Testing and deployment pipeline.

## 2. Tech Stack
- Frontend: Next.js with App Router.
- Language: TypeScript.
- Styling: Tailwind CSS.
- UI architecture: Reusable React components with typed props.
- Backend: None required for the first release. Use static/server-rendered pages where possible.
- Database: Not required initially.
- Content storage: Local typed files such as `src/content/*.ts`, JSON, or MDX. Prefer typed TS content for safety and agent maintainability.
- Admin/content editing: Lightweight no-database approach. Start with maintainable structured files; add a simple admin panel only if it can be done cleanly without compromising security or maintainability.
- Infra/Hosting: Vercel recommended.
- CI/CD: GitHub connected to Vercel. Each push/PR should build and preview automatically.

## 3. Repository Map
Recommended project structure after implementation:

- `/`: Planning docs, package files, config files.
- `/app`: Next.js App Router pages, layouts, metadata.
- `/components`: Reusable UI sections and components.
- `/components/ui`: Low-level UI primitives such as buttons, cards, containers, nav.
- `/components/sections`: Page sections such as Hero, About, Trainers, Pricing, Schedule, Gallery, Contact.
- `/content` or `/src/content`: Typed content files for contacts, schedule, prices, coaches, media, FAQ.
- `/lib`: Helpers, constants, SEO utilities, link builders.
- `/public`: Static assets: logos, images, videos, icons.
- `/styles`: Global styles if needed.
- `/tests` or `/e2e`: Test files.
- `/docs`: Optional additional docs.

## 4. Global Rules
- Coding standards:
  - Use TypeScript strictly.
  - Prefer server components by default in Next.js.
  - Use client components only where interactivity is required.
  - Keep components small, named clearly, and reusable.
  - Avoid duplicated hard-coded content; use typed content files.
  - Use semantic HTML and accessible markup.
- Branching strategy:
  - `main` should remain deployable.
  - Use feature branches for larger changes when working through GitHub.
- Versioning policy:
  - Keep planning documents updated with important decisions.
- Error handling policy:
  - External embeds should fail gracefully.
  - Contact CTAs must remain available even if maps/social embeds fail.
- Logging/observability policy:
  - No complex logging needed for first release.
  - Optional analytics can be added later if requested.

## 5. Domain Model
- Entities:
  - Academy
  - Coach
  - TrainingGroup
  - ScheduleItem
  - PricingPlan
  - ContactChannel
  - MediaAsset
  - FAQItem
  - CTA
- Relationships:
  - Academy has many coaches.
  - Academy has many training groups.
  - Training groups have schedule items.
  - Pricing plans may relate to training frequency or membership type.
  - Contact channels are reused across CTAs.
- Invariants:
  - Site language is Ukrainian.
  - Academy name is Avangard Jiu-Jitsu Academy.
  - Location is Rivne, Ukraine.
  - The site is for BJJ only.
  - No separate children/adults/beginners pages in the first architecture.

## 6. API Contracts
- Public endpoints:
  - Static pages/routes only unless implementation requires otherwise.
- Internal endpoints/events:
  - Avoid internal APIs unless needed for admin functionality.
- Request/response contracts:
  - Not applicable for static-first release.
- Backward compatibility rules:
  - Keep content data schemas stable once created.
  - If content schema changes, update all consuming components and tests.

## 7. Data & Storage
- Schemas:
  - Define TypeScript types for Coach, ScheduleItem, PricingPlan, ContactChannel, MediaAsset, FAQItem.
- Migration policy:
  - No database migrations required.
- Retention policy:
  - Not applicable initially.
- Backup/recovery:
  - GitHub history is the primary backup for content and code.
  - Assets should be stored in the repository or documented if hosted elsewhere.

## 8. Security & Compliance
- AuthN/AuthZ:
  - No user accounts required.
  - If admin panel is implemented, it must be protected and should not expose write access publicly.
- Secrets handling:
  - Never commit secrets.
  - Use `.env.local` for local secrets and Vercel environment variables for production.
- PII/data classification:
  - Public contact details only.
  - Do not collect personal data unless a future form is added.
- Compliance constraints:
  - If a contact form is added later, include privacy/data handling requirements.

## 9. Performance Constraints
- Latency SLO: Pages should feel instant on modern mobile networks after optimization.
- Throughput target: Static-first hosting should handle normal marketing traffic without special scaling work.
- Cost constraints: Prefer free or low-cost hosting and tooling where possible.
- Media constraints:
  - Optimize images.
  - Avoid autoplaying heavy video on mobile unless implemented responsibly.
  - Use poster images and lazy loading where appropriate.

## 10. Architecture Decision Log (ADR-lite)
1. Decision: Use Next.js + TypeScript + Tailwind CSS.
   - Context: The site needs a professional, maintainable, component-based architecture suitable for Codex/AI-agent work.
   - Choice: Build with Next.js, TypeScript, and Tailwind CSS.
   - Consequences: Better SEO, component reuse, Vercel deployment, and long-term maintainability.

2. Decision: Use Vercel as recommended hosting.
   - Context: The user was unsure where to host. The project uses Next.js.
   - Choice: Vercel is the default recommendation.
   - Consequences: Simple GitHub integration, automatic previews, and smooth Next.js deployment.

3. Decision: No database initially.
   - Context: The project needs content updates but not user accounts or transactions.
   - Choice: Store content in structured local files and consider a lightweight admin/editing layer.
   - Consequences: Lower complexity and cost, but admin capabilities must be designed carefully.

4. Decision: Use Charlotte BJJ as reference, not as source material.
   - Context: The user likes the structure and visual direction of Charlotte BJJ.
   - Choice: Use it for inspiration only.
   - Consequences: The Avangard site must remain original in copy, layout details, and identity.

## 11. Dependencies
- External services:
  - Vercel for hosting.
  - Google Maps embed/link.
  - Instagram profile/link or embed.
  - Telegram link/button.
  - Phone link.
- Third-party SDKs:
  - Avoid unless necessary.
- Known limitations:
  - Instagram embeds can be unreliable or heavy; prefer a strong Instagram CTA/link unless a feed is explicitly required.
  - Admin panel without database may be limited compared to a real CMS.

## 12. Operational Runbook
- Start:
  - `npm install`
  - `npm run dev`
- Build:
  - `npm run build`
- Test:
  - `npm run lint`
  - `npm run typecheck`
  - `npm test` if configured
  - `npm run test:e2e` if configured
- Deploy:
  - Connect GitHub repository to Vercel.
  - Configure production branch.
  - Add required environment variables if any.
- Rollback:
  - Use Vercel deployment rollback or revert the Git commit.
