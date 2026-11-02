# 0.34.0 102-card continuation checkpoint validation

Counts, timings and hashes in this record identify the earlier 102-card
artifact. See [current validation](VALIDATION_0_34_0_GAPS.md) for the 111-card
candidate; this historical evidence is preserved without rewriting its results.

Validated on 2026-11-02 on `codex/eight-book-expansion`, continuing draft
[PR #13](https://github.com/ppeck1/mathcards/pull/13). This record supersedes the
[initial 84-card checkpoint](VALIDATION_0_34_0.md) for the current candidate.
The live 0.33.0 site is unchanged. No browser, desktop app, tab or panel was
opened or controlled; all checks used background repository processes.

## Corpus and mathematical checks

The branch contains 102 draft cards, 514 original examples, 1,023 numeric
fixtures, 616 written exports and 211 views: 102 Geometry, 102 Graph and seven
existing Spatial views. This continuation adds 18 cards, 90 examples and 194
fixtures. Across both 0.34.0 checkpoints, 41 lessons have been added to 0.33.0.
All 102 canonical formulas compile strictly to annotated native MathML.

All 1,023 fixtures agree with independent Python references. Nine negative
contract mutations remain rejected. Exact finite checks cover remainders,
common divisors, prime products, fraction reduction, place values, ordered
assignments and unordered teams. Spatial references use separate arithmetic
for cross/triple products, frame coordinates, projection, angular motion and
momentum; underflow and degenerate inputs keep explicit states.

Dynamics checks distinguish an exact gradient-flow solution from a discrete
optimization step, and quasi-static branch history from a transient simulator.
Both stereographic charts retain the underlying circle/sphere point at the
omitted pole; changing charts restores coordinates. Inverse projection,
adjacent represented angles, nonzero near-pole denominators and fixed viewing
windows are checked. The structural comparison remains two stated families,
not a certificate for arbitrary perturbations.

## Application and semantic integration

All **1,083 JavaScript tests pass**, with two file workers in 93.9 seconds,
without skips. The full run includes the new mounted-story regression:
crossing a chart's excluded pole settles directly, while an ordinary arc
continues smoothly. Story controls now put the linked timeline variable first.
Existing pacing, text-node identity, comparison, saved-state, invalid-domain
and recovery checks remain intact.

All **28 Python tests pass** in 46.9 seconds, including deterministic exports,
repeated standalone builds, generated-write fault cases and five integration
metadata checks. Pinned BOH metadata validation passes for all 616 documents;
live intake, indexing and retrieval were not exercised.

The public notation gate resolves **72,192 occurrences across 1,430 tokens**
in 44,544 fields, with zero unresolved forms or review flags. Separate
authored-reader and compiled-context audits pass; synthesized grammar cannot
mask a missing authored definition. The prepared reference has **802 entries**.
Scoped vector, coordinate, pole, norm and unit meanings preserve earlier
meanings, including every older source title and URL. New source keys are
namespaced; all 14 are distinct from the 117 earlier reference keys.

Integration metadata is inert, deep-frozen build data checked against actual
canonical identities, controls, grammar bindings and typed ports. Provider,
story and preview code stays separate. Existing IDs, model revisions and the
shared host lifecycle remain stable. Provider interpolation guards combine
with validity/discrete checks in both playground and story surfaces.

Incremental formatting and authored-source syntax/whitespace checks pass;
the latter covers 137 files. Generated and vendor files remain excluded from
formatting. Initial failures exposed the primary-variable ordering defect and
old roadmap assertions; those were corrected while preserving all-topic,
all-form, source-evidence and scope-boundary checks.

## Startup and artifact identity

Three fresh, sequential background Node runs pass the unchanged 1500 ms
bootstrap budget: **355.7, 370.0 and 359.4 ms**. Median prepared-reference
hydration is 38.232 ms. The standalone HTML contains 7,888,001 bytes; local
gzip level 6 estimates 1,316,503 bytes. These measurements cover a Node/V8
proxy, not browser delivery, layout, touch or a phone. Reproduction and payload
tradeoffs belong in the [measurement record](STARTUP_MEASUREMENT_0_34_0_CONTINUATION.md).

Canonical SHA-256:
`4bfad6ce35a1fda08d1d97e461463ab23df0172813b0ca1ab8bcbe783d0db980`

Standalone HTML SHA-256:
`c8924b6cbb517e6bd3b440cbdf7ae9fbcc526820b370010299098accfc4eae55`

Manifest byte hashes and `START_HERE.html` parity pass. Repeated builds and
written exports remain deterministic. Packaging uses `tools/package.py`;
its CRC and standalone checks run after writing the ZIP. A separate package
audit checks current documentation bytes and private-path exclusions. Local
ZIPs and QA logs remain ignored rather than entering the source commit.
Generated drift is checked after committing the matching sources/projections.

## Evidence boundaries

[All 18 previews](presentation-0-34-continuation/previews.png) and the
[representative board](presentation-0-34-continuation/overview.png) render the
actual central SVG outputs with explicit math-font fallback. Measured default
glyphs have zero overlap, horizontal overflow, undersized text or art labels
outside their bounds. This qualifies those static geometries only.

Browser layout, real touch, native MathML, screen readers, a fresh automated
accessibility audit, offline download/import and independent mathematical,
historical and learner review remain open in the
[qualification checklist](QUALIFICATION_0_34_0.md). No physical-device or
browser-network performance claim follows from the background checks.

The [current matrix](CONTINUATION_MATRIX_0_34_0.md) separates these executable
drafts from broader topics. The 295-topic inventory has 71 introductory links,
56 precursors and 168 planned topics. The overlapping 214-topic roadmap has
59 introductions, 36 precursors and 119 planned rows. Imported subjects and
bounded preparations do not imply completed books, fields or page audits.
