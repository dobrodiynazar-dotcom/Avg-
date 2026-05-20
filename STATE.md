# STATE.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Current phase: memory-restoration-and-repo-sync
- Current instruction: Do not start Milestone 4 until explicit approval.

## 1. Current Project Memory
Read this file first. It is the current operational memory for the repository.

The project is not a fresh planning-only restart anymore. It already contains completed implementation work through Milestone 3, plus a restored planning layer that originally lived on remote GitHub history.

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

### Recovery strategy
- Reconnect local repository to GitHub remote.
- Fetch `origin/main`.
- Merge unrelated histories safely.
- Preserve both milestone history and planning-document history.
- Use merged `main` as the source-of-truth branch.

### Current intent
- After this restoration commit is pushed, GitHub `main` should contain:
  - the current codebase,
  - milestone history,
  - planning documents,
  - synchronized repository memory.

## 4. Current Project Maturity
- Overall maturity: foundation-complete, pre-Milestone-4
- Architecture maturity: strong foundation
- Content maturity: placeholder-heavy
- Integration maturity: not yet production-complete
- Verification maturity: partial; build/test validation still limited

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

## 6. Pending Work Before Milestone 4
1. Finish repository synchronization and push merged truth to GitHub `main`.
2. Confirm planning memory layer reflects the actual Milestone 1-3 codebase.
3. Review and approve the restored planning documents.
4. Confirm milestone-entry scope for Milestone 4.

Milestone 4 must not begin before those steps are complete and explicitly approved.

## 7. Pending Work After Milestone 4 Approval
- Replace placeholders with real approved content.
- Expand secondary routes beyond shared placeholders where required.
- Add real contact data and maps integration.
- Resolve UI/token issues discovered in the current foundation.
- Run full lint/type/build verification after dependency installation.
- Add targeted QA and testing coverage appropriate to the next milestone scope.

## 8. Known Risks
| Risk | Impact | Status | Notes |
|---|---|---|---|
| Repository history split between local `master` and remote `main` | High | being resolved | Must preserve both histories without force-push |
| Some Ukrainian strings appear mojibaked in source output | High | unresolved | Needs verification before content-heavy work |
| `Button` uses undefined `--color-on-primary` token | Medium | unresolved | Foundation-level design-system issue |
| Secondary routes are still placeholders | Medium | known | Expected pre-Milestone-4 state |
| Final real content and assets not yet wired | High | known | Placeholder content remains in typed modules |
| Contact links and metadata base are placeholders | Medium | known | Needs approved production values |

## 9. Unresolved npm / Build Verification Limitations
- Dependency installation has not yet been re-run as part of this memory/sync restoration pass.
- `npm run lint`, `npm run typecheck`, and `npm run build` therefore remain unverified in this exact synchronized state until dependencies are installed locally.
- No package lockfile is currently present in the repo snapshot.
- No CI workflow is currently present in the checked-out implementation to enforce build checks automatically.

These are known limitations, not approval to start Milestone 4.

## 10. Next Milestone Goals
### Milestone 4 candidate goals once approved
- turn the current foundation into real page implementations without redesigning the system
- keep the Linear-inspired visual philosophy intact
- preserve the modular content-driven architecture
- improve mobile completion on real content
- replace route placeholders with approved route-specific experiences where needed

## 11. Immediate Next Actions
1. Complete and verify branch synchronization.
2. Push merged repository truth to GitHub `main`.
3. Confirm clean working tree and aligned branch state.
4. Pause and wait for user approval before Milestone 4.

## 12. Handoff Rules
- Read `STATE.md` first.
- Then read `REQ.md`, `CONTEXT.md`, `DESIGN.md`, `TDD.md`, and `agent.md`.
- Do not restart the project.
- Do not redesign the system.
- Do not start Milestone 4 without explicit approval.
