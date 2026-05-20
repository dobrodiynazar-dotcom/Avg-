# agent.md

## Mission
Help build the Avangard Jiu-Jitsu Academy website through a predictable AI-agent workflow based on:

`REQ.md -> CONTEXT.md -> DESIGN.md -> STATE.md -> TDD.md -> implementation`

The project is a clean restart for a premium modern BJJ academy website in Rivne, Ukraine.

## Language Rules
- User-facing website language: Ukrainian.
- Planning/code comments may use English where helpful.
- Communicate with the user in Ukrainian unless the user asks otherwise.

## Source of Truth
Read these files before making implementation decisions:
1. `REQ.md` — why and for whom the website is built.
2. `CONTEXT.md` — technical architecture and constraints.
3. `DESIGN.md` — visual system and UI rules.
4. `STATE.md` — current phase, tasks, risks, and next actions.
5. `TDD.md` — testing and quality requirements.
6. `agent.md` — agent operating rules.

## Critical Rule: No Coding Before Approval
Do not start implementation until all planning documents are completed and explicitly approved by the user:
- `REQ.md`
- `CONTEXT.md`
- `DESIGN.md`
- `STATE.md`
- `TDD.md`
- `agent.md`

Before coding, confirm that the user has approved the planning foundation.

Reason: the previous project direction was unsatisfactory, so this restart must avoid chaotic implementation and must not mix old and new decisions.

## Routing Rules
- If the request is about goals, audience, scope, or acceptance criteria: update `REQ.md`.
- If the request is about architecture, stack, hosting, data, security, or integrations: update `CONTEXT.md`.
- If the request is about plan, progress, tasks, risks, or next steps: update `STATE.md`.
- If the request is about tests, QA, release checks, or bug prevention: update `TDD.md`.
- If the request is about visual style, layout, components, typography, color, or UI behavior: update `DESIGN.md`.

## Working Loop
After planning approval:
1. Read all planning documents.
2. Update `STATE.md` with the active milestone.
3. Create/verify the Next.js + TypeScript + Tailwind project foundation.
4. Implement one milestone at a time.
5. Run quality checks after each meaningful milestone.
6. Update `STATE.md` with completed work, risks, and next actions.
7. If UI changes affect design rules, update `DESIGN.md`.
8. If requirements change, update `REQ.md` before implementing.

## Implementation Milestones
Recommended milestone order:
1. Project setup: Next.js, TypeScript, Tailwind, basic config.
2. Design foundation: theme tokens, layout primitives, typography, buttons, cards.
3. Core content model: typed files for contacts, schedule, pricing, coaches, media, FAQ.
4. Homepage structure: hero, about, sections, CTA flow.
5. Coaches, schedule, pricing, gallery, contact sections.
6. Integrations: Google Maps, Telegram, Instagram, phone/email.
7. Lightweight admin/content editing approach without database.
8. SEO, metadata, Open Graph, accessibility polish.
9. Testing, mobile QA, performance optimization.
10. Vercel deployment preparation.

## Technical Constraints
- Use Next.js.
- Use TypeScript.
- Use Tailwind CSS.
- Recommend Vercel for hosting.
- Do not add a database unless the user explicitly approves it later.
- Do not add multilingual support unless explicitly requested later.
- Do not build a complex app when a high-quality modern website is enough.
- Prefer static/server-rendered content where possible.
- Use typed local content files for maintainability.

## Admin Panel Constraint
The user wants an admin/content editing capability, but no database initially.

Implementation guidance:
- First create a clean typed content structure.
- If building a real admin panel without a database becomes too complex or insecure, do not force it.
- Prefer a simple maintainable content workflow over an unsafe fake admin.
- If an admin UI is implemented, it must be protected and must not expose public write access.
- Document tradeoffs clearly before implementing the admin approach.

## Design Rules
- Keep the existing Linear-inspired design direction.
- Adapt it to a premium modern BJJ academy.
- Use Charlotte BJJ only as a structural/reference inspiration.
- Do not copy Charlotte BJJ content, images, branding, or exact layouts.
- Avoid cheap fight-club aesthetics, grunge overload, flames, or aggressive MMA clichés.
- Keep the site clean, premium, sporty, minimal, and modern.
- Mobile is critical and must not be neglected.

## Content Rules
Known existing materials:
- logo,
- brand colors,
- fonts/design direction,
- professional photos,
- selected videos,
- address,
- phone,
- Instagram,
- Telegram,
- email,
- schedule,
- pricing/abonnements,
- coach list and achievements.

Final texts may be prepared later. Use structured placeholders only when necessary and mark them clearly.

## Quality Gates
Do not mark a milestone complete unless:
- TypeScript passes.
- Lint/build checks pass.
- Mobile layout is reviewed.
- Contact CTAs are checked.
- STATE.md is updated.
- Any changed requirement/design/testing decision is reflected in the correct document.

## Document Hygiene
- Keep `Last updated`, `Owner`, and `Status` current.
- Write decisions as facts, not vague intentions.
- Keep documents concise but complete.
- Do not duplicate the same detail across many files unless necessary for clarity.
- This repository should remain understandable for a new AI agent with no prior conversation context.
