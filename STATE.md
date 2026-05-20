# STATE.md

## Meta
- Last updated: 2026-05-20 14:00
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Current phase: planning

## 1. Current Objective
- Sprint/iteration goal: Prepare a clean, approved planning foundation for a new Avangard Jiu-Jitsu Academy website before implementation starts.
- Deadline: Not set.
- Definition of done:
  - REQ.md, CONTEXT.md, DESIGN.md, STATE.md, TDD.md, and agent.md are filled.
  - Codex/agent understands that implementation must not start before planning documents are reviewed and approved.
  - Technical direction is clear: Next.js + TypeScript + Tailwind CSS + Vercel, no database initially.

## 2. Status Snapshot
- Overall: on-track
- Completion: 15%
- Main blocker: Final real content and assets still need to be inserted during implementation.

## 3. Active Tasks
| ID | Task | Owner | Status | ETA | Notes |
|---|---|---|---|---|---|
| TASK-001 | Review and approve planning documents | Nazar / AI agent | todo | TBD | Must happen before coding |
| TASK-002 | Collect final asset paths and contact links | Nazar | todo | TBD | Logo, photos, videos, Telegram, Instagram, phone, email, map |
| TASK-003 | Create Next.js project structure | AI agent | todo | TBD | Only after docs approval |
| TASK-004 | Build core layout and design system components | AI agent | todo | TBD | Based on DESIGN.md |
| TASK-005 | Implement homepage and main sections | AI agent | todo | TBD | Hero, about, coaches, schedule, pricing, gallery, contact |
| TASK-006 | Implement lightweight content structure/admin approach | AI agent | todo | TBD | No database initially |
| TASK-007 | Add integrations | AI agent | todo | TBD | Google Maps, Instagram, Telegram, phone |
| TASK-008 | Test, optimize, and prepare Vercel deployment | AI agent | todo | TBD | Mobile, SEO, performance, links |

## 4. Backlog (Long Horizon)
| Priority | Item | Impact | Effort | Status |
|---|---|---|---|---|
| P0 | Core marketing website | High | Medium | planned |
| P0 | Mobile responsive experience | High | Medium | planned |
| P0 | Contact CTAs | High | Low | planned |
| P0 | Schedule and pricing sections | High | Medium | planned |
| P0 | Coaches section | High | Medium | planned |
| P1 | Gallery/video media section | Medium | Medium | planned |
| P1 | Lightweight admin/content editing | Medium | Medium/High | planned |
| P1 | SEO optimization | Medium | Medium | planned |
| P2 | Analytics | Medium | Low | optional |
| P2 | Blog/news | Low | Medium | out-of-scope for first release |
| P2 | Multilingual support | Low | High | out-of-scope |

## 5. Recently Completed
- 2026-05-20: Decided to restart the website from scratch while keeping existing design/assets.
- 2026-05-20: Confirmed project name, city, language, target audience, design direction, technical stack, integrations, and quality target.
- 2026-05-20: Filled planning repository documents for Codex/AI-agent workflow.

## 6. Risks
| Risk | Probability | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Agent starts coding too early | med | high | agent.md forbids implementation before document approval | AI agent |
| Final texts are missing | high | med | Use structured placeholders and content files until final copy is ready | Nazar / AI agent |
| Admin panel becomes too complex without database | med | high | Start with typed content files; only add admin UI if clean and secure | AI agent |
| Media slows mobile site | med | high | Optimize images/videos and lazy load media | AI agent |
| Reference site is copied too closely | low | high | Use Charlotte BJJ only as inspiration | AI agent |

## 7. Decisions Since Last Update
- Decision: Start from scratch instead of continuing the old website implementation.
  - Why: Current project direction is not fully satisfying.
  - Tradeoff: More setup work now, cleaner result later.
- Decision: Use Next.js + TypeScript + Tailwind CSS.
  - Why: Professional, maintainable, SEO-friendly, good for Codex.
  - Tradeoff: More complex than plain HTML/CSS/JS.
- Decision: Use Vercel as recommended hosting.
  - Why: Best fit for Next.js and GitHub workflow.
  - Tradeoff: Platform-specific deployment defaults.
- Decision: Use no database initially.
  - Why: Lower complexity and enough for marketing site.
  - Tradeoff: Admin panel must be lightweight/limited.
- Decision: Require planning approval before coding.
  - Why: Prevents chaotic implementation and old/new project mixing.
  - Tradeoff: Slower start, better direction.

## 8. Next 3 Actions
1. User reviews these markdown documents.
2. Agent updates any unclear sections after user feedback.
3. After explicit approval, agent creates the Next.js project and implements milestone 1.

## 9. Handoff Notes
- What the next contributor should do first: Read `agent.md`, then `REQ.md`, `CONTEXT.md`, `DESIGN.md`, `STATE.md`, and `TDD.md` in full.
- What to avoid:
  - Do not start coding before approval.
  - Do not copy Charlotte BJJ content.
  - Do not build a database unless explicitly approved later.
  - Do not ignore mobile responsiveness.
  - Do not replace the Linear-inspired visual system unless asked.
