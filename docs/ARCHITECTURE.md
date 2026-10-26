# Technical design proposal: visual mathematics library

Prepared 2026-10-23. This is a proposed implementation design, not a report of an existing application. BOH details must come from the separately inspected repository contract.

## 1. Architecture decision

Build one local-first responsive web application that consumes a versioned, statically compiled content package. It works without BOH, an account, an API key, or a running language model. BOH receives a generated text projection. It is not responsible for executing interactive modules or storing the application’s personal notebook.

Use React + TypeScript + Vite, locally bundled MathJax v4, a small subset of D3 utilities for scales/shapes, SVG rendered by React, and IndexedDB via Dexie for personal state. Use repository scripts in TypeScript for validation and deterministic generation. Choose exact supported dependency versions when implementation begins, commit the lockfile, and record the resulting versions in the build receipt. Current official MathJax documentation has v4.1 paths but pages retain a 4.0 title; verify the actual installed release rather than copying a presumed version from page titles.

This stack is a design judgment: Vite produces static build assets; React/TypeScript gives typed component interfaces; MathJax supplies mathematical typesetting and expression accessibility; SVG gives inspectable geometry; D3 scales reduce hand-written coordinate conversion; Dexie provides an IndexedDB wrapper. No server database or graph database is necessary for the first complete slice.

Do not install a full plotting, geometry, graph, symbolic-computation, animation, and notebook platform simultaneously. For the first slice, implement a small reusable plot/geometry surface and trusted renderer registry. Add specialist libraries only where a real approved card cannot be represented adequately. Cytoscape.js is a reasonable later option if graph exploration outgrows a small SVG neighborhood view, but is not needed for the first milestone.

## 2. One source of truth and deterministic projections

Author the canonical public teaching corpus as schema-validated JSON records. Markdown prose is allowed inside known text fields, processed by a constrained Markdown renderer. JSON is chosen because grammar, examples, sources, history, visual parameter definitions, and relationships must be machine addressable. Keep substantial prose structured into named sections, rather than one opaque HTML string.

Generate these artifacts from the same revision:

- Per-card Markdown for BOH and ordinary text readers, including prerequisites, declared meanings, assumptions, examples, visualization descriptions, sources, and limitations.
- Standalone example Markdown where BOH chunking would otherwise separate a calculation from the assumptions needed to interpret it.
- Browser content chunks, a small browse/search index, symbol index, and typed edge index.
- A content manifest with schema version, package version, source revision, generator version, record checksums, and license metadata.

Never edit a generated Markdown file or search index as a second authoritative record. A correction changes the source record and regenerates all projections. Stable entity IDs survive title and path changes; record revisions identify the exact content displayed. Keep public teaching corpus, private observations, and generated files in separate directories and schemas.

Suggested module boundaries:

```
content/cards/          canonical card JSON
content/examples/       canonical leaf examples with card links
content/sources/        source registry and historical attestations
content/relations/      authored typed relations
content/visuals/        declarative visual specifications
schemas/               versioned JSON schemas
src/content/           content loading and indexes
src/math/              typed semantic structures, numeric helpers
src/renderers/         trusted visual registry and tests
src/views/             browse, card, compare, workbench, timeline
src/notebook/          private observation persistence and portable backup
scripts/               validate, build-content, export-boh, verify-export
tests/                 numeric fixtures, content semantics, user journeys
dist-content/          generated projections, never hand authored
```

The final repository may use a `packages/` split if it already has such conventions; do not create a multi-package workspace solely for appearance.

## 3. Formal grammar, notation, and meaning

TeX is a display language, not the semantic model or a universal mathematical grammar. Preserve an authored display TeX string, a plain spoken reading, and an explicitly typed semantic representation where machine interaction needs one. A `symbol_id` references a particular contextual meaning, not just a glyph. For example, a multiplication dot and a scalar-product dot must not silently share semantic identity. Scope, bound/free variables, operand types, domain/codomain, units where relevant, precedence, associativity, arity, and exceptional values are explicit fields.

Phase 1 uses authored expression trees for controlled models. For `f(x)=a*x+b`, the semantic tree refers to parameter IDs and an arithmetic operation; its renderer shows the corresponding formula and graph. For quantified statements, the tree models binder and scope even when no evaluator is supplied. For theorem statements, the UI explains quantifiers, hypotheses, and conclusion without pretending a plot establishes the theorem.

Support selecting a token or subtree to highlight its role and linked explanation. Use a semantic outline alongside the typeset formula; do not depend on brittle DOM character offsets inside MathJax output. To highlight a formula span, use stable authored fragment identifiers or render defined subexpressions as deliberate units. Test that the reading order and grouping remain correct. MathJax’s accessibility enrichment is useful for reading, but it does not replace an authored subject-specific semantic contract.

Do not parse arbitrary user-entered TeX into executable code. A later expression playground may use a maintained mathematical parser in a Web Worker with an explicit allowlist of node kinds and functions, operation/time/memory limits, and unsupported-syntax diagnostics. Math.js documentation warns that arbitrary expression evaluation can carry security and stability risks; merely calling `parse` or avoiding JavaScript `eval` does not finish the design. Keep the initial controlled models useful without this later feature.

## 4. Trusted interactive renderer contract

Content contains only declarative specifications. A `renderer_id` selects checked application code, never a URL, JavaScript body, HTML iframe, package import, or dynamic expression evaluator supplied by a card.

Minimal registry interface:

```ts
interface VisualInstance {
  visualId: string;
  rendererId: string;
  rendererVersion: string;
  cardId: string;
  contentRevision: string;
  parameterValues: Record<string, number | string | boolean>;
  datasetId?: string;
  randomSeed?: number;
  viewport: { xMin: number; xMax: number; yMin: number; yMax: number };
}
```

The registry validates each renderer’s configuration with a discriminator schema. Each renderer declares parameter ranges, units, output domains, numerical method, precision/error convention, accessible description, a table or structured text equivalent, reset state, comparison compatibility, and reference test cases.

Keep evaluation separate from drawing. `compute(spec, state)` returns numeric results and diagnostics; `render(results, viewport)` produces geometry. This permits unit tests and a text alternative from the same numeric output. Cache or use workers only when profiling shows need. Use seeded pseudorandomness for probability demonstrations. Time animations are driven by an explicit simulation clock and have play/pause, step, reset, and reduced-motion behavior. Animation is off by default when it adds no explanatory value.

Reject or visibly classify non-finite and out-of-domain values. Never silently coerce a division by zero to zero, bridge an asymptote with a straight line, interpret a complex value as real, or omit a logarithm’s domain. Label analytic results, exact arithmetic, numerical estimates, and illustrative diagrams distinctly. Every approximation has a named method and an error or resolution statement appropriate to that method. A slider animation is evidence of a displayed calculation, not a general proof.

Persist the state of a captured experiment, including parameter values, numerical settings, input data revision, seed, viewport, renderer version, content revision, and captured outputs. Reopening an old experiment uses the original compatible renderer or reports why the state cannot be reproduced. It must not silently replay under changed semantics.

### Exact shared-state semantics

Use one immutable `ExperimentState` per visual instance and derive every representation from one `ComputedModel`. The graph, table, numeric readout, parameter-substituted formula, highlighted semantic fragments, and exported capture must share the same `stateRevision`. Do not let each view recompute with independent defaults, hidden rounding, random seeds, or sampled x values. Author the binding from a content expression ID to an allowlisted `modelId`; do not infer it by parsing the TeX string.

```ts
type Quantity = { value: number; unitId: string | null };
type ResultValue =
  | { kind: 'exact'; representation: string; approximate?: number }
  | { kind: 'approximate'; value: number; methodId: string; tolerance?: number; resolution?: number }
  | { kind: 'undefined'; reason: string; violatedConditionIds: string[] }
  | { kind: 'outside-domain'; reason: string; violatedConditionIds: string[] }
  | { kind: 'unsupported'; reason: string };

interface ExperimentState {
  instanceId: string;
  stateRevision: number;
  cardId: string;
  contentRevision: string;
  expressionId: string;
  modelId: string;
  modelVersion: string;
  rendererId: string;
  rendererVersion: string;
  parameters: Record<string, Quantity | string | boolean>;
  sampleDomain: { min: number; max: number; count: number };
  numericPolicyId: string;
  datasetRevision?: string;
  seed?: number;
}

interface ComputedModel {
  stateRevision: number;
  values: Record<string, ResultValue>;
  // Each array is one continuous drawable path. Gaps never become connecting lines.
  paths: Array<Array<{ x: number; y: number }>>;
  excludedIntervals: Array<{ min: number; max: number; reason: string }>;
  conditions: Array<{ conditionId: string; satisfied: boolean; explanation: string }>;
  semanticBindings: Record<string, string[]>; // expression fragment -> computed output IDs
  diagnostics: Array<{ code: string; message: string }>;
}
```

Implementation detail: paths should carry renderer-appropriate coordinates/units; the two-dimensional shape above is the first-slice contract, not a claim to cover every later geometry or topology module. Require a new schema version when generalizing.

The parameter reducer validates types/ranges/units, then the model returns a complete result atomically. Cancel or discard stale worker responses by `stateRevision`. Render invalid states as explicit conditions across all views; preserve the last valid capture separately if useful, never display its graph alongside a newly invalid formula without labeling that graph. Put rounding only in a presentation formatter; saved computation values retain declared numerical precision. Axis changes affect only view state unless sampling resolution changes, in which case state revision and approximation diagnostics update.

Model fixtures define known poles, gaps, piecewise boundaries, and singularities. Do not depend on sampled points alone to discover a discontinuity. For a first-slice reciprocal model, split the domain at zero before drawing; for absolute value, preserve the corner and mark the derivative undefined at zero; for logarithm, exclude nonpositive real arguments explicitly. A finite sample cannot generally certify continuity, so an unfamiliar later model needs authored domain metadata or a conservative renderer that avoids claiming continuity.

## 5. Interface and discovery workbench

Main navigation can remain simple: Explore, Workbench, Notebook. A card’s own tabs expose See / Read the notation / Try examples / Connections / History and sources, with a persistent short question, meaning, assumptions, and current interactive state. Provide an always-available text outline for navigation. The exact labels can be refined without changing schemas.

Explore supports purpose-first entry such as describe change, compare proportions, represent uncertainty, constrain possibilities, compose transformations, or reason about relationships. Traditional branch and historical era are additional facets. The graph is a local, filtered neighborhood, not a mandatory full-corpus force simulation. Relation type must be visible, with context and evidence available. On small screens, use a list or matrix equivalent.

Workbench initially loads two cards into aligned sections: question addressed, formal structure, assumptions, invariants, examples, and limits. Link parameters only where an authored compatibility mapping defines meaning and units; shared parameter names are insufficient. Offer a control to unlink axes; label when axes differ. Compare exact structural correspondences separately from pedagogical analogies and personal conjectures.

Notebook records an observation before any explanation is revealed: what changed, what stayed constant, proposed relationship, evidence captured, counterexample tried, unresolved conditions, confidence, and next experiment. User-created edges remain private conjectures until a separate explicit authoring/review flow turns them into public instructional content. No AI inference engine is required. A scaffold can help compare or ask for a counterexample without telling the user what pattern to find.

Search indexes title, aliases, ordinary-language purpose, symbol contextual meanings, formula TeX tokens, and example situations. It should answer searches like “change of change,” “what does this vertical bar mean,” or “combine two transformations.” Include the matched field in results; do not promise universal recognition of mathematical equivalents.

History uses intervals and attestation types, not a single invented origin year. A proposed influence is separate from contemporaneous similarity. The timeline is a projection of sourced historical claims, not the authority for them.

## 6. Accessibility and device behavior

Target WCAG 2.2 AA and verify actual keyboard/screen-reader paths. MathJax v4 provides expression exploration and speech support; bundle the required assets locally and test the configured behavior, not only formula appearance. Preserve a plain-language formula reading and a structured variable table as fallbacks.

Every drag target has numeric input or keyboard controls; every hover detail can be opened with focus or tap; every color distinction has text/shape encoding. Give charts a title, meaningful description, axis labels/units, and data equivalent. Keep controls large enough for touch and avoid page-wide horizontal scrolling on a 390px viewport. Complex notation can scroll inside its own labeled region. Maintain focus after changing tabs or opening dialogs. Respect prefers-reduced-motion and zoom. Do not describe automated accessibility scans as full conformance certification.

Use responsive column layouts, a modest local neighborhood graph, and lazy content/module loading. Show a stable fallback description before an interactive module is ready. Pin fonts and graphics locally to keep core learning independent of external CDNs. An installed/offline-capable build may cache its content package with a service worker after the core flow is reliable. Serve via localhost or HTTPS; do not promise full PWA/storage behavior from a double-clicked `file://` page.

## 7. Local data, portability, and update behavior

IndexedDB holds notes, saved comparisons, experiments, bookmarks, and reading position. The public corpus remains in build assets and versioned source files. Notebook export is an application-defined, schema-versioned portable JSON document; this is more durable than depending on a raw internal database layout. Include checksums and a preview of records being restored. Import validates before mutation and offers explicit merge/replace with conflict handling. Never overwrite an existing note silently.

Use stable notebook IDs and timestamps; link to card ID plus content revision. An update can mark a saved observation as linked to an older revision while preserving what the user saw. A changed source card does not rewrite an old note. Notebook export is separate from BOH export and excluded by default.

## 8. Practical verification gates

1. Content build rejects duplicate IDs, invalid references, missing prerequisites, malformed TeX, unsourced historical claims presented as settled, renderer/spec mismatches, executable content, and leaf examples missing assumptions or expected outputs.
2. Formula fixtures prove the authored semantic tree, displayed notation, variable table, and evaluator agree for the supported subset. Test precedence and bound-variable scope, not only string snapshots.
3. Numeric fixtures cover ordinary, limiting, and invalid parameter values. Examples: a line with zero/negative slope; exponential versus linear behavior over both displayed ranges; secant convergence with declared finite h; a derivative failure at a corner; probability seed reproducibility; vector normalization at zero; matrix transformation at determinant zero; logarithm rejected outside domain.
4. Plot fixtures verify known intercepts, monotonicity, sign, invariants, and discontinuity segmentation. An accurate numeric table under a misleading connected curve is a failure.
5. One keyboard-only journey finds a card, reads notation, changes a parameter, opens and completes a leaf example, compares two cards, records a conjecture, captures the experiment, and exports/restores the notebook.
6. One touch journey at 390px achieves the same learning outcomes without hover or precision dragging. Formula/chart regions do not force the whole document to scroll horizontally.
7. Screen-reader spot checks with named browser/AT combinations verify labels, formula reading, controls, announcements, graph alternative, and note capture. Record actual combinations; do not claim universal AT compatibility.
8. Offline verification starts from an installed/cached package, blocks external requests, and completes the learning/notebook journey. A local packaged build also works through a local server without internet access.
9. Reproducibility restores the same saved state and seed, recomputes agreed outputs within declared tolerances, and identifies incompatible renderer/content revisions rather than updating silently.
10. BOH export tests use the actual inspected importer and fresh fixture library. Search a definition and a leaf example; compare indexed source hashes with export bytes, and label current-file reopening accurately; verify formula text, all assumptions, source attribution, warning propagation, and idempotent re-import. Do not equate “valid Markdown” with completed BOH integration.
11. A build receipt lists commands, versions, test outcomes, failing/skipped checks, generated record counts, export manifest checksum, and actual BOH revision. A check not run is reported as not run.

## 9. Official sources retrieved

These sources support capabilities and constraints. The architecture choices above are proposals and inferences.

- React, Using TypeScript: https://react.dev/learn/typescript (opened 2026-10-23; typed component interfaces and TSX).
- Vite, Building for Production: https://vite.dev/guide/build (retrieved 2026-10-23; static production build).
- Vite, Deploying a Static Site: https://vite.dev/guide/static-deploy.html (retrieved 2026-10-23).
- MathJax, v4.1 Accessibility Features: https://docs.mathjax.org/en/v4.1/basic/accessibility.html (retrieved 2026-10-23; responsive subexpression exploration and aural support).
- MathJax, v4.1 Accessibility Options: https://docs.mathjax.org/en/v4.1/options/accessibility.html (retrieved 2026-10-23; current v4 options differ from v3).
- MathJax, Accessibility Components: https://docs.mathjax.org/en/v4.0/web/components/accessibility.html (retrieved 2026-10-23; assistive MathML and semantic limitations).
- D3, d3-scale: https://d3js.org/d3-scale (retrieved 2026-10-23; mappings from data domains to visual ranges).
- D3, Linear scales: https://d3js.org/d3-scale/linear (retrieved 2026-10-23).
- Dexie, API Reference: https://dexie.org/docs/API-Reference (retrieved 2026-10-23).
- Dexie, Export and Import: https://dexie.org/docs/ExportImport/dexie-export-import (retrieved 2026-10-23; internal database export option, not chosen as the only portable notebook format).
- Math.js, Security risks: https://mathjs.org/docs/expressions/security.html (retrieved 2026-10-23).
- Math.js, parse: https://mathjs.org/docs/reference/functions/parse.html (retrieved 2026-10-23; expression trees can be evaluated/compiled, with security warning).
- Cytoscape.js documentation: https://js.cytoscape.org/ (retrieved 2026-10-23; later candidate only).
- Playwright, Assertions: https://playwright.dev/docs/test-assertions (opened 2026-10-23; user-facing and accessibility-related assertions).
- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/ (opened 2026-10-23; technology-independent testable accessibility requirements).
