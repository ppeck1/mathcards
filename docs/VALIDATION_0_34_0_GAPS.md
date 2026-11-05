# 0.34.0 atlas-gap validation

Validated on 2026-11-02 on `codex/eight-book-expansion`, continuing draft
[PR #13](https://github.com/ppeck1/mathcards/pull/13). This supersedes the
[102-card checkpoint](VALIDATION_0_34_0_CONTINUATION.md) for current counts and
artifact identity. Live 0.33.0 was not changed. No browser, app, tab or desktop
panel was opened or controlled.

This is the content/visual checkpoint before the startup optimization. The
[current performance and validation record](STARTUP_OPTIMIZATION_0_34_0.md)
supersedes its artifact identity, test total and startup conclusion; the
canonical lesson content and counts below remain unchanged.

## Checks and corpus

- **1,139 JavaScript tests pass**, two file workers, 236.0 seconds, no skips.
- **29 Python tests pass**, 77.2 seconds, including repeated builds, export
  determinism, generated-write failures and metadata validation.
- **1,256 canonical numeric fixtures** agree with independent references;
  nine negative contract mutations remain rejected.
- All **111 formulas** compile strictly to annotated native MathML.
- Formatting and authored-source syntax/whitespace pass across 152 files;
  generated and vendor sources remain outside formatting.

The candidate has 111 draft lessons, 559 original examples, 670 written exports
and 229 views: 111 Geometry, 111 Graph and seven existing Spatial. This batch
adds nine lessons, 45 examples and 233 fixtures. The whole 0.34.0 branch adds
50 lessons to the published baseline. BOH checks cover pinned static metadata
for all 670 documents; live ingestion/indexing/retrieval remain untested.

Three unknown-property rejection cases were moved into same-key invalid-type
fixtures to satisfy the canonical fixture contract. Unknown-property API
rejection stays tested independently. Final algorithm fixtures and the shared
gap integration slice were rechecked after this refinement; no rejection
assertion or canonical key gate was removed.

## Mathematics and connected representations

Exact represented-input discriminant signs preserve double-root neighbors;
cancellation-resistant roots retain small solutions or report precision
failure. Exact dyadic objective comparisons preserve genuine tied edges,
adjacent untied objectives, tiny feasible budgets and flat optimal regions.

Search traces separate performed comparisons from completed-run cost, retain
found/absent states and require sorted input for binary search. An independent
oracle checks all 316 bounded algorithm states. Minimum tree costs/ties are
checked through all 16 Prüfer trees over all 64 variable quote pairs.

Normal CDF/tail quadrature is checked against Python erfc at 8,001 z values in
[−32,32]. Measured maximum absolute error is 4.440892098500626e−16; maximum
positive-tail relative error is 2.4111265040301723e−13. This grid is not a global
error bound. Full probability, density height and clipped-window mass remain
separate. Lost standardized distances, positive rate–time products and paired
reading differences have explicit precision states. Exact ties are not
silently rounded into or out of a sign test.

Remembered quadratics sample their own critical offset. Remembered input lines
and probability ticks encode their actual quantities. Random waiting time T
marks the whole law; threshold t marks one position. All graph station/run
names have declared grammar, real quantities and actual shape marks. AB keeps
both its graph and matrix meanings without claiming unrelated English matches.

## Reference and integration

Both compiled and authored-reader-only audits resolve **76,271 occurrences**
across 47,355 fields and 1,472 tokens, with zero unresolved/review items. There
are **897 reference entries**, including 854 authored definitions, and
**834 selectable forms across 677 meanings**.
Every retained new family reader has actual lesson-use evidence. Pure
presentation labels were consolidated instead of manufacturing card links.
Older source references and unscoped readers remain intact; unknown probes
and the complete catalog/form ownership checks still run.

Six explicit families feed validated, inert integration metadata. Providers,
stories, previews, reference and numeric oracles stay separate from the common
host. Slot independence, ports, saved-state revisions, pacing, teardown and
offline classic-script order remain covered. Growing peak counts activate the
existing two-lesson contour interval while retaining exact summit labels.

## Static visual and artifact evidence

[Nine previews](presentation-0-34-gaps/previews.png) and
[compact scenes](presentation-0-34-gaps/compact-scenes.png) are rendered from
actual SVG with explicit local fonts. Default preview glyph bounds have zero
overlap, overflow, undersized fonts or artwork/caption collisions. Strict XML
checks parse 81 live/remembered desktop/compact/view/preview outputs; additional
tests include tied-edge and flat-objective previews. Compact algebra uses a
360-wide layout rather than shrinking its desktop labels.

Actual-byte manifest hashes and standalone parity pass. Repeated builds and
written exports are deterministic. Packaging uses `tools/package.py`; CRC,
current source/documentation bytes, private-path exclusions and standalone/hash
parity are audited afterward. Local ZIPs and QA files stay ignored. Generated
drift is checked after committing matching source and projections.

Exporter 0.2.1 renders empty lists/objects explicitly, preserving scopes with
no external parameters without trailing indentation. A nested-container
regression verifies both the values and clean Markdown. This correction does
not change the measured application artifact.

Canonical SHA-256:
`375c43cd01a28bba6f98c37257640b5755d4e06e2ecb7175916331de81f97166`

Standalone HTML SHA-256:
`c8363cecf9e072592ccbc304622d455cbc4d651c7f121c7546cd25a36b5990ff`

## Remaining release qualification

The [startup record](STARTUP_MEASUREMENT_0_34_0_GAPS.md) includes three passes
(median 1422 ms) and one 1577.7 ms miss against the unchanged
1500 ms limit. Performance has little measured headroom on this machine and
remained a release-review item at this checkpoint. The
[subsequent optimization](STARTUP_OPTIMIZATION_0_34_0.md) records current timings
under the same gate. Node/V8 and local gzip do not establish browser
delivery, layout or physical-phone performance.

The [qualification checklist](QUALIFICATION_0_34_0.md) keeps real touch,
keyboard, native MathML, screen readers, a fresh accessibility audit, offline
recovery and independent mathematical/history/learning review open. Static
images and automated controllers do not close these gates. The
[current matrix](GAP_EXPANSION_MATRIX_0_34_0.md) records 74 introductory links,
56 precursors and 165 planned subjects in the overlapping 295-topic inventory.
The earlier 214-topic roadmap retains 119 planned rows. All lessons remain
drafts; imported topics and bounded examples do not complete the books.
