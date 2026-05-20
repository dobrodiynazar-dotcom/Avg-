# STATE.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Current phase: milestone-4-homepage-preview
- Current instruction: Milestone 4 homepage preview implemented; secondary routes remain intentionally incomplete.

## 1. Current Project Memory
Read this file first. It is the current operational memory for the repository.

The project is no longer a planning-only restart. It now contains:
- completed implementation through Milestone 3,
- merged planning-memory history,
- a Milestone 4 homepage preview pass focused on composition, hierarchy, responsive polish, CTA structure, and restrained premium presentation.

## 2. Completed Milestones
### Milestone 1-2
- Commit: `b9dec5aa72591d35242a53e8de6aaaa841c50024`
- Short hash: `b9dec5a`
- Title: `Set up Milestone 1-2 site foundation`
- Outcome:
  - Next.js App Router foundation created
  - TypeScript configured
  - Tailwind CSS configured
  - global layout and shell created
  - design tokens and utility primitives created
  - route placeholder pattern created

### Milestone 3
- Commit: `ee02151079ff0d6676fa53b8388b3ea3a4283375`
- Short hash: `ee02151`
- Title: `Add reusable site sections and domain content architecture`
- Outcome:
  - homepage converted to section composition
  - reusable section components added
  - reusable domain components added
  - typed content modules expanded
  - modular content-driven architecture established

### Milestone 4
- Status: implemented locally in the current working tree
- Scope:
  - first preview-ready homepage experience only
  - no full secondary-route implementation
  - no admin or CMS work
- Outcome:
  - homepage composition refined without changing the architecture
  - hero copy, proof, stats, and contact preview moved into typed content
  - section rhythm, spacing, and visual hierarchy improved
  - mobile header/navigation and CTA behavior improved
  - contact, pricing, coach, schedule, media, and FAQ presentation tightened
  - text-encoding issues removed from the homepage/content path
  - skip link and table-header semantics added

## 3. Repository Synchronization State
### Before restoration
- Local repository had:
  - branch `master`
  - two milestone commits
  - no configured remote
- Remote GitHub repository had:
  - branch `main`
  - planning-document history
  - no milestone commits reachable from `origin/main`

### Recovery result
- Local and remote histories were preserved through merge-based recovery.
- `main`, `master`, and `origin/main` were previously confirmed aligned at `11d05a2`.
- The repository now contains both:
  - the implemented codebase lineage
  - the planning-memory lineage

### Current intent
- `main` remains the canonical branch.
- Milestone 4 homepage-preview work should be committed and pushed on top of the synchronized repository state.

## 4. Current Project Maturity
- Overall maturity: foundation-complete with homepage-preview implementation
- Architecture maturity: strong and preserved
- Homepage maturity: preview-ready
- Secondary-route maturity: placeholders by design
- Content maturity: polished placeholder content, not final approved production copy
- Integration maturity: not yet production-complete
- Verification maturity: partial

## 5. Current Architecture Snapshot
- App shell in `src/app/layout.tsx`
- Homepage composition in `src/app/page.tsx`
- Shared route placeholders in `src/components/site/RoutePlaceholder.tsx`
- UI primitives in `src/components/ui/*`
- Layout components in `src/components/layout/*`
- Domain components in `src/components/domain/*`
- Section components in `src/components/sections/*`
- Typed content in `src/content/*`
- Design tokens in `src/lib/design/tokens.ts`
- Metadata helper in `src/lib/seo/metadata.ts`

Milestone 4 preserved this architecture instead of replacing it.

## 6. What Changed In Milestone 4
1. Homepage content became more visitor-facing while remaining easy to replace later.
2. Hero section gained stronger hierarchy, tighter CTA priority, and structured preview support.
3. Section cadence became less uniform through supporting/feature header sizing and restrained surface alternation.
4. Mobile UX improved through:
   - persistent mobile primary CTA in the header
   - controlled mobile drawer navigation
   - cleaner contact endpoint behavior
5. Accessibility improved through:
   - skip link
   - stronger mobile-menu semantics
   - FAQ icon assistive cleanup
   - `scope="col"` on schedule table headers
6. Known placeholder copy was cleaned to avoid implementation-heavy language on the homepage path.

## 7. Remaining Work After This Preview
- Replace placeholder contacts with real production values.
- Replace placeholder schedule and pricing with approved real data.
- Add final academy copy in Ukrainian.
- Add final media assets and map embed.
- Decide which secondary routes should be implemented next.
- Run full production verification once a package manager and dependencies are available locally.
- Add CI and, if needed later, lightweight testing automation.

## 8. Known Risks
| Risk | Impact | Status | Notes |
|---|---|---|---|
| Final real content and assets not yet wired | High | known | Homepage is preview-ready, not launch-ready |
| Contact links and metadata base are still preview placeholders | High | known | Must be replaced before public release |
| Secondary routes are still placeholders | Medium | expected | Intentional scope limit for this milestone |
| Full automated verification is blocked by local tool availability | High | unresolved | `npm` is not available on PATH and project dependencies are not installed locally |
| No package lockfile is present | Medium | unchanged | Environment reproducibility still limited |
| No CI workflow is present | Medium | unchanged | No automated build enforcement yet |

## 9. Verification Reality
- `npm` is not available on PATH in the current shell.
- Project `node_modules` is absent in the current workspace snapshot.
- Bundled workspace Node is available, but it does not include the project toolchain (`next`, `eslint`, `typescript`) as installable local dependencies for this repo.
- As a result, `npm run lint`, `npm run typecheck`, and `npm run build` could not be executed in this environment during this pass.

This limitation is real and must remain visible until dependencies can be installed and the scripts rerun.

## 10. Immediate Next Actions
1. Review the Milestone 4 homepage preview in the browser once dependencies and local dev runtime are available.
2. Replace preview contact values and metadata base before any public launch.
3. Decide the next approved route-expansion scope.
4. Install dependencies and rerun lint, typecheck, and build.

## 11. Handoff Rules
- Read `STATE.md` first.
- Then read `REQ.md`, `CONTEXT.md`, `DESIGN.md`, `TDD.md`, and `agent.md`.
- Do not restart the project.
- Do not redesign the system.
- Treat `DESIGN.md` as the official visual/design source for future implementation work.
- Preserve the modular content-driven architecture.
- Treat mobile as a critical requirement.
- Do not treat placeholder secondary routes as bugs unless the project scope changes.
