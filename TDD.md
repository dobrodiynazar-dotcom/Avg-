# TDD.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: restored-after-sync

## 1. Current Quality Reality
- The repository already contains implementation through Milestone 3.
- Quality scripts currently defined in `package.json`:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run typecheck`
- No dedicated unit-test or e2e test runner is currently configured in the checked-out codebase.

## 2. Testing Strategy
- Use practical, risk-based quality gates.
- Treat lint, typecheck, and production build as baseline verification.
- Add focused tests when logic complexity or reusable content transforms justify them.
- Use manual responsive QA for marketing sections and navigation flows.

## 3. Required Verification Levels
### Foundation-level checks
- `npm run lint`
- `npm run typecheck`
- `npm run build`

### UI / manual checks
- Homepage loads and renders all section blocks.
- Header, mobile nav, and footer links remain functional.
- Secondary route placeholders render correctly until replaced intentionally.
- CTA links remain visible and correctly structured.
- Mobile layout is readable and tappable.

### Content/data checks
- Typed content matches shared TypeScript contracts.
- Schedule, pricing, coaches, media, and FAQ arrays render without shape errors.
- Placeholder replacement should not require layout rewrites.

## 4. Current Gaps
- No automated unit test suite exists yet.
- No automated end-to-end smoke suite exists yet.
- No CI workflow is present in the current checked-out implementation.
- The synchronized post-merge branch must still be verified after dependencies are installed.

## 5. Test Priorities for the Next Approved Milestone
1. Lint, typecheck, and build must pass.
2. Mobile navigation and CTA visibility must be checked manually.
3. Real content insertion should be verified against long Ukrainian copy and mobile layouts.
4. Design-token regressions should be caught early when expanding the UI.

## 6. Regression Checklist
- Homepage still composes sections correctly.
- Shared layout still wraps all routes correctly.
- Metadata builder still resolves titles/descriptions.
- Navigation items still match content-driven route config.
- Schedule and pricing data still render on mobile and desktop patterns.
- No placeholder-route regression occurs accidentally during route expansion.

## 7. Quality Gates for Marking Work Complete
Do not mark a milestone complete unless:
- required scripts pass,
- mobile layout is checked,
- key CTA/contact flows are checked,
- `STATE.md` is updated,
- planning documents are updated if the architecture, design rules, or requirements changed.

## 8. Current Verification Limitation
The repository may be synchronized and documented before dependency installation/build verification is rerun locally. When that happens, `STATE.md` must continue to record that limitation explicitly.

## 9. Defect Logging Guidance
When defects are found, record:
- what broke,
- where it was found,
- whether it is architectural, content, responsive, or integration-related,
- what future test or check would have caught it earlier.
