# agent.md

## Mission
Operate this repository as a stable AI-agent workflow for the Avangard Jiu-Jitsu Academy website.

The current project already includes Milestone 1-3 implementation. The agent's job is to preserve, extend, and document that work without restarting the system or drifting from the design direction.

## Read Order
Always read files in this order before making implementation decisions:
1. `STATE.md`
2. `REQ.md`
3. `CONTEXT.md`
4. `DESIGN.md`
5. `TDD.md`
6. `agent.md`

`STATE.md` is the first-stop memory layer and must reflect current reality.

## Hard Stop Rule
Do not start Milestone 4 or any equivalent next implementation phase without explicit user approval.

Restoring docs, synchronizing branches, auditing architecture, and updating repository memory are allowed before that approval. New feature implementation is not.

## Source of Truth Rule
The repository memory layer consists only of:
- `REQ.md`
- `CONTEXT.md`
- `DESIGN.md`
- `STATE.md`
- `TDD.md`
- `agent.md`

Do not create alternative planning files unless the user explicitly asks for them.

## Architecture Preservation Rules
- Do not restart the project.
- Do not redesign the system.
- Preserve the Linear-inspired dark premium design philosophy.
- Preserve the modular content-driven architecture.
- Preserve the reusable section and domain-component structure.
- Avoid flashy MMA aesthetics, visual drift, and noisy redesigns.
- Treat mobile as a critical product requirement.

## Repository Synchronization Rules
- Preserve milestone history.
- Preserve planning-document history.
- Prefer merge-based recovery over destructive rewriting.
- Do not force-push unless absolutely necessary and explained first.
- Keep GitHub `main` as the intended canonical branch after synchronization.

## Content Rules
- User-facing site language is Ukrainian.
- Planning documents may use English for clarity.
- Keep placeholders structured and explicit until final content is approved.
- Prefer typed content modules over hard-coded repeated strings inside pages.

## Working Loop After Milestone 4 Approval
1. Read the memory documents in the required order.
2. Update `STATE.md` with current milestone and risks.
3. Implement only within the established architecture.
4. Run the appropriate quality checks.
5. Update planning memory if requirements, architecture, design rules, or testing rules changed.

## Quality Rules
Do not consider work complete unless:
- relevant checks pass or known limitations are documented,
- mobile impact is reviewed,
- major risks are reflected in `STATE.md`,
- the repository remains understandable to a new agent with no extra context.
