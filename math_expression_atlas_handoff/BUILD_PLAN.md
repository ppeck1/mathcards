# Implementation sequence and acceptance gates

This plan is for a standalone local learning app with a BOH content projection. No changes to BOH core are required to begin. Task labels below are local planning IDs, not existing GitHub issues. Estimates are deliberately omitted until the target checkout and implementer's capacity are known.

## Phase 0 — Contracts and proof of the content pipeline

**T00: inspect and decide.** Read target AGENTS.md, existing framework, package manager and licenses. Save a short architecture decision record for canonical JSON, generated Markdown, allowed renderer registry and private notebook. Preserve existing functioning work.

**T01: formalize content validation.** Adopt the supplied JSON Schema, add kind-specific requirements before using later card kinds, and implement cross-record checks: globally unique IDs, known source refs, resolved semantic tree nodes, typed renderer parameters, valid relationship targets or explicit pending targets, no executable content and stable revision rules. Fail on unknown renderer IDs and unresolved required references. A planned coverage row does not count as a published relationship target.

**T02: compile once.** Load cards, validate, generate route/search catalog, plain text for retrieval, per-card/leaf BOH Markdown and a deterministic manifest. Document revision/hash scope; no current timestamp in deterministic output. Check path containment. Keep source and generated outputs visually distinguishable in the repository.

**Gate 0:** supplied fixtures validate; exporter produces the same bytes twice; every definition, assumption, example, history claim/source and fallback appears in the written projection; non-authoritative BOH metadata passes both pinned lints. Schema/reference failures fail the build. State clearly whether only static compatibility or live BOH ingestion was checked.

## Phase 1 — One complete discovery loop

**T03: visual library and route.** Build Explore with expressive-job entry points, search, card previews, an open-card route and deep links to children. Build loading, empty, missing-card and unsupported-version states. Show only authored available cards by default. Use function composition first.

**T04: shared mathematical state.** Implement the declared composition model and pure model functions. One state feeds the expression, operation diagram, values table and text summary. Reorder operations and display the intermediate value. Numeric input works without pointer dragging.

**T05: extensive dossier.** Render all meaning, grammar, symbols, hypotheses, worked cases, applications, relationship labels, historical status and citations from source JSON. TeX and readable text come from the same expression record. Keyboard selection of a semantic tree node highlights its role and mapped visual mark.

**T06: first workbench/notebook.** Compare two orders of the same declared operations; save input, model version, parameters and observation locally. Restore it and export/import a backup. Handle storage unavailable/quota with an actionable state and allow file export. Personal records never enter corpus export by default.

**Gate 1:** Paul can find the card, run both orders, inspect five cases, record his own proposed relationship, reveal the curated explanation, restore a snapshot and export the card. Model fixtures show f(u)=u², g(x)=2x+1 at x=3 give f(g(3))=49 and g(f(3))=19. Incompatible domain/type case is explained. No dead UI controls.

## Phase 2 — Demonstrate mathematical breadth and limits

**T07: logarithm explorer.** Add inverse views, variable base (including 0<b<1), positive input, explicit invalid base-one/zero-input states and a readable log table. Equal multiplicative steps in input should become equal additive steps in a fixed-base logarithm. Do not confuse a transformation of representation with a causal model of growth.

**T08: derivative explorer.** Implement a secant/analytic tangent view with signed, nonzero h and evaluation point. Include presets cubic, linear and absolute value. Symbolic/analytic derivative is distinct from finite quotient; h=0 never evaluates a quotient. At the absolute-value corner show the two one-sided slopes and no derivative. Avoid large live-region floods.

**T09: complete the first eight cards.** Author ratio, function, composition, exponentiation, logarithm, limit, derivative and definite accumulation to the full card criteria. Create the minimum necessary new renderer families; do not force all cards into a curve plot. Each has at least five worked leaves, meaningful intervention and failure case, two mapped applications and history status.

**Gate 2:** all eight have source-linked mathematical definitions, checked examples, appropriate real/domain distinctions and complete written exports. Each has a sourced historical account covering development/motivation, notation, and formulation/transmission; an evidence-based unresolved strand is acceptable, an entirely unresearched panel is not. No invented origin narrative. At least one comparison crosses representations and one crosses application domains without claiming empirical equivalence.

## Phase 3 — Reliable local release and measured BOH compatibility

**T10: isolated BOH harness.** Pin or recheck the BOH checkout. Use disposable BOH_DB, BOH_LIBRARY and BOH_DATA_ROOT directories and disable background analysis/scheduling. Stage/index fixture files only through supported APIs/CLIs. Check metadata lints, authority, source identity, lexical aliases, unchanged reimport and revision update. Record actual commands, version and results.

**T11: retrieval coherence.** Query a definition, a specific example and a known invalid-use condition. Inspect returned chunks and surrounding context. A formula must not be offered with its domain or hypothesis omitted. If native chunking separates them, use compact assertion/leaf documents and explicit context expansion; document residual limits instead of describing the indexer as math-aware. No promise of retained historical reopening through the current reader.

**T12: accessibility/offline/recovery.** Bundle fonts/math dependencies; test the installed local app without network. Support keyboard, touch, reduced motion, meaningful screen-reader math and plot alternatives. Verify backup/restore into a fresh browser profile. Name automated versus manual verification.

**Gate 3:** end-to-end learning scenarios in PRODUCT_SPEC pass; no uncaught console errors; no missing assets offline; app remains useful without BOH. BOH compatibility report records metadata/index/retrieval separately. Private notes are absent from corpus export. Release notes accurately identify reviewed versus draft material.

## Phase 4 — Expand by reviewed, coherent batches

**T13: add sixteen cards.** Follow the next-wave list in PRODUCT_SPEC. Require reviewer checks for math, history and visualization separately. A batch should offer new expressive capabilities, not simply inflate count.

**T14: local relation browsing.** Add typed neighborhood map, relation table and comparison matrix. Filter by level of relation. Pending targets remain labeled. User conjectures have their own visual treatment and never appear as sourced edges.

**T15: richer personal workspace.** Pin multiple snapshots, record counterexample attempts, compare card revisions and export a notebook selection as Markdown. Optional recurrence/pattern tags may be introduced with transparent editorial definitions.

**Gate 4:** 24 deep cards, existing tests remain stable, and first-release content is not silently rewritten to fit new abstractions. Export loss accounting stays complete.

## Deferred milestones with separate decisions

- Read-only BOH consumer bridge with local server credentials, returned warnings and scope; never put operator tokens in browser code.
- Free-form expression editor with a real parser, binder-aware AST, type/domain checks and bounded evaluation.
- Imported datasets, fitting and scientific modeling with uncertainty, units and empirical validation.
- Symbolic proof assistance, automated content proposals or optional AI tutor; none is necessary for first release.
- Collaboration, cloud accounts, sync, deployment or integration into another project's UI.

## Test inventory

| Area | Meaningful checks |
|---|---|
| Content | Schema, unique IDs, required fields, source refs/locators, child targets and content readiness |
| Grammar | Binding scope, arity/type mismatch, ambiguity rejection, semantic node-to-view mapping |
| Math models | Known exact values, domains, one-sided failure, singular/zero denominator, numeric tolerance |
| Visualization | Shared state parity, reset, invalid-state rendering, discontinuity segmentation, axes/units |
| Notebook | Round trip with model version, private export boundary, quota/error state, backup migration |
| Export | Determinism, full content parity, stable doc IDs, source/generated hash distinction, safe paths |
| BOH | Both metadata lints, clean index posture, idempotence, changed revision, retrieve conditions and warnings |
| UI | Core loop on keyboard/touch/mobile, deep links, error states, 200% zoom, reduced motion, offline |

Do not test every paragraph with a snapshot assertion. Use mathematical invariants and failure examples where they distinguish correct from plausible-looking behavior. A clean automated suite does not establish historical correctness, pedagogical effectiveness or accessibility for all users.
