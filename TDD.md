# TDD.md

## Meta
- Last updated: YYYY-MM-DD
- Owner: <name>
- Status: draft | active | enforced

## 1. Testing Strategy
- Primary approach: Test-Driven Development (red -> green -> refactor)
- Test pyramid ratio:
- Coverage target:

## 2. Test Environments
- Local:
- CI:
- Staging:

## 3. Test Types
- Unit:
- Integration:
- Contract:
- E2E:
- Visual regression:
- Performance smoke:

## 4. Red-Green-Refactor Workflow
1. Write failing test that captures behavior.
2. Implement minimal code to pass.
3. Refactor with tests green.
4. Update docs and state.

## 5. Feature Test Template
### Feature Name
- Requirement link: `REQ.md#...`
- Context link: `CONTEXT.md#...`

### Cases
1. Happy path:
2. Validation:
3. Error handling:
4. Edge conditions:

### Test Data
- Fixtures:
- Factories:
- Mocks/stubs:

### Exit Criteria
- All mandatory cases green.
- No flaky tests.
- CI pipeline green.

## 6. Regression Checklist
- Existing core flows unaffected.
- Backward compatibility validated.
- Critical bug fixes covered by tests.

## 7. Quality Gates in CI
- Lint/type checks:
- Unit tests:
- Integration tests:
- E2E smoke:
- Coverage threshold:

## 8. Defect Log Template
| Bug ID | Found in | Test added? | Root cause | Preventive action |
|---|---|---|---|---|
| BUG-001 |  | yes/no |  |  |

## 9. Flakiness Protocol
- How to quarantine:
- Max quarantine period:
- Owner to fix:
