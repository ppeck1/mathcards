# Paste this into the implementation Codex session

Build **Mathematical Expression Atlas** for Paul Peck using this entire handoff package. The title is provisional. This task is to implement the planned learning application in the target repository; the package itself is a specification and content/export starter.

Paul wants to learn mathematics as languages of expression: to see patterns, understand notation and conditions, explore interactive models, and identify possible uses himself. He wants extensive cards with formal grammar, meaning, definitions, symbols, history, application contexts and multiple concrete worked leaf examples. Independent discovery is central. Preserve that intent; avoid turning this into a flashcard deck, equation wallpaper or compulsory course.

Read `README.md`, `PRODUCT_SPEC.md`, `BUILD_PLAN.md`, `ARCHITECTURE.md`, `BOH_INTEGRATION.md`, `schemas/card.schema.json`, and all three specimen records first. Inspect the target repository and any AGENTS.md before choosing implementation paths. If the checkout already has a compatible stack, extend it rather than replacing it. Do not assume that the project-management repo named project-atlas contains the older Philosophy Atlas.

Use UI_BLUEPRINT.md for initial layouts and interaction states, and schemas/notebook.schema.json for portable private backups. Its example is synthetic and must not appear as a real personal note. Card IDs are opaque stable identities; never infer kind or authority by parsing their prefix.

## Fixed boundaries

- One structured source per card; UI, search data and Markdown are generated projections. Do not maintain divergent app copy and ingest copy.
- Usable locally without BOH or an AI service. No API key, accounts or online model is necessary for the core experience.
- Start with allowlisted model/renderer IDs and validated parameters. Never eval code or TeX from content. Free-form algebra input is a later milestone with a real parser/type contract.
- Notebook data is separate, personal, locally stored and explicitly exportable. Tested examples and conjectures do not become proofs or curated corpus edits.
- Author stable IDs for cards, statements, examples, history claims and visualizations. TeX is presentation; semantic node IDs drive highlighting and execution.
- BOH type=reference, draft/supporting/non_authoritative export by default. App editorial readiness does not authorize BOH promotion. Use the pinned code findings and recheck the target BOH revision.
- BOH cannot preserve the interactive UI by ingesting HTML. Keep the interactive app and export complete written experiment recipes.
- This handoff contains design specimens, not independently reviewed final mathematics/history. Preserve their draft labels and gaps until real review occurs.

## First implementation slice

Do Phase 0 and Phase 1 from BUILD_PLAN: schema/reference validation, generated catalog and exports, one open-card route, the function-composition interactive model, readable grammar, five worked cases, compare-two-orders, a local experiment snapshot and backup/restore, and a regression check for source/export parity.

Then add the logarithm and derivative specimens. Confirm the important failure cases: base one invalid; nonpositive real log input invalid; h=0 secant undefined; two one-sided slopes at the absolute-value corner disagree. The graph must not imply proof from finite sampling. Use the analytic model outputs for these fixtures.

Complete first-release eight-card breadth only after this loop works and the UI remains readable on mobile. Do not generate hundreds of shallow cards. Use coverage.csv as planned backlog, not as available content.

## Implementation process

1. Report target repo/stack, inspect existing work, and document decisions that differ from this package.
2. Create a concrete task list from the milestone gates. Implement a working slice, not just another plan.
3. Keep dependencies restrained and pinned with a lockfile. Bundle the math engine/fonts required for offline use. Reuse the existing stack if suitable.
4. Run meaningful model, schema, export and end-to-end checks. Include negative mathematical cases and notebook restoration. Check keyboard, touch, 360px, 200% zoom and reduced motion; record manual assistive-technology checks separately from automation.
5. Test BOH only in disposable library/database/data-root directories. An index success flag alone does not establish clean metadata, proper authority or coherent formula retrieval. Do not touch Paul's live corpus automatically.
6. Update status, validation and unresolved gaps around the actual implementation. If a BOH runtime is unavailable, provide the integration harness and mark live compatibility unverified.
7. Finish with changed behavior, evidence from checks, how to run it, and remaining limitations. Do not claim the comprehensive library is complete because the shell and fixtures work.

The user has requested a build plan in this planning session. Do not infer that a new public deployment, new repository, BOH authority promotion, or changes to other projects have already been approved here. Normal implementation in the repository supplied to your session is expected; follow that session's actual scope.
