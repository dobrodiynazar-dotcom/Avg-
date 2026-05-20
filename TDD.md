# TDD.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: active-after-implementation-start

## 1. Testing Strategy
- Primary approach: Practical quality-first workflow with tests/checks where they provide value. Use TDD for complex logic and content transforms; use checklist-based QA for visual/marketing sections.
- Test pyramid ratio:
  - Type/lint checks: mandatory.
  - Unit tests: for helpers, content validation, link builders, formatting logic.
  - Integration tests: for key sections and content rendering.
  - E2E smoke tests: for homepage, navigation, contact links, schedule/pricing, responsive basics.
- Coverage target: No strict percentage for first release; prioritize critical flows and stable build quality.

## 2. Test Environments
- Local: Developer/Codex environment.
- CI: GitHub Actions if configured.
- Preview/Staging: Vercel preview deployment.
- Production: Vercel production deployment.

## 3. Test Types
- Unit:
  - Content schema validation.
  - Link generation for Telegram, Instagram, phone, email.
  - Schedule/pricing data formatting.
- Integration:
  - Hero renders correct academy identity.
  - Coaches render from content data.
  - Schedule renders from content data.
  - Pricing renders from content data.
  - Contact block renders all contact channels.
- Contract:
  - Content data types remain stable.
  - Required fields exist for coaches, prices, schedule, contacts.
- E2E:
  - Homepage loads.
  - Mobile nav opens/closes.
  - CTA links exist and are clickable.
  - Google Maps section/link exists.
  - Key pages/sections are reachable.
- Visual regression:
  - Manual screenshot review for first release.
  - Automated visual tests optional later.
- Performance smoke:
  - Build output checked.
  - Images/videos optimized.
  - Lighthouse/manual performance check recommended before release.

## 4. Red-Green-Refactor Workflow
Use this workflow for logic-heavy parts:
1. Write failing test or validation for expected behavior.
2. Implement minimal code to pass.
3. Refactor while keeping checks green.
4. Update docs and STATE.md.

For visual sections:
1. Implement section from DESIGN.md.
2. Check desktop and mobile manually.
3. Verify content data, accessibility, and contact links.
4. Update STATE.md.

## 5. Feature Test Template
### Feature Name
- Requirement link: `REQ.md#6-functional-requirements`
- Context link: `CONTEXT.md`
- Design link: `DESIGN.md`

### Cases
1. Happy path: User can understand the section and proceed to contact action.
2. Validation: Required content exists and renders correctly.
3. Error handling: Missing optional media does not break the page.
4. Edge conditions: Long Ukrainian text, mobile viewport, missing video, many pricing items.

### Test Data
- Fixtures: Sample coaches, pricing plans, schedule items, contacts, FAQs.
- Factories: Optional for generated content data.
- Mocks/stubs: Use mocks for embeds if needed.

### Exit Criteria
- Build passes.
- TypeScript passes.
- Lint passes.
- Critical sections render.
- Mobile layout checked.
- Contact links checked.
- No obvious accessibility blockers.

## 6. Regression Checklist
- Existing core flows unaffected.
- Homepage still loads.
- Navigation works on desktop and mobile.
- Contact CTAs work.
- Schedule and prices still render.
- Coaches still render.
- No broken images in critical sections.
- No console errors in normal browsing.
- Vercel preview build passes.

## 7. Quality Gates in CI
Minimum recommended gates:
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- Unit tests if configured.
- E2E smoke tests if configured.

No task should be marked done if build/type/lint checks fail.

## 8. Manual QA Checklist
- Desktop homepage review.
- Mobile homepage review.
- Tablet layout review if possible.
- Telegram button opens correct link.
- Instagram button opens correct profile.
- Phone link starts phone call on mobile.
- Email link opens mail client if present.
- Google Maps block/link points to correct location.
- Ukrainian text displays correctly.
- Images are sharp but optimized.
- Videos do not break mobile performance.
- Header/footer links are correct.
- SEO title and description exist.

## 9. Defect Log Template
| Bug ID | Found in | Test added? | Root cause | Preventive action |
|---|---|---|---|---|
| BUG-001 |  | yes/no |  |  |

## 10. Flakiness Protocol
- How to quarantine: Mark flaky tests clearly and do not count them as proof of quality.
- Max quarantine period: Fix before release if the test covers a critical flow.
- Owner to fix: Current implementing agent/developer.
