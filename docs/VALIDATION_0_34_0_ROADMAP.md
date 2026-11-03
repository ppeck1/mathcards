# 0.34.0 six-lesson roadmap validation

Background validation on 2026-11-03 for `codex/eight-book-expansion`, continuing
[draft PR #13](https://github.com/ppeck1/mathcards/pull/13) from `c0c34fe`.
This identifies the 117-card candidate after the
[111-card release checkpoint](RELEASE_CHECKS_0_34_0.md). The live site remains
unchanged. No browser, headless browser, desktop app, panel or phone was used.

## Scope and arithmetic

The six additions have 30 original examples, 309 independently checked numeric
cases and 12 views. Totals are 117 draft lessons, 589 examples, 1,565 fixtures,
706 written exports and 241 views. Nine explicit metadata families now feed
the same host; existing model revisions and private backup schemas are retained.

Exact-rational Python references check the inverse and signed geometric sums.
The inverse refuses zero/near-zero gain and prevents interpolation through a
sign change. Series sum compensation, the ratio-1 branch, negative ratios and
the strict absolute-ratio convergence condition remain distinct. Doubling the
first term doubles bar/graph displacement on a reference scale, instead of
silently normalizing the amplitude away. Whole commands remain discrete.

Independent finite coloring checks agree with the closed forms
`(k−1)^4+(k−1)` for the four-cycle and `k(k−1)(k−2)^2` with its diagonal.
Every proper assignment and minimum-conflict certificate is checked for
palettes 1 through 4. Inclusion–exclusion constructs actual finite member sets;
empty, identical, subset and disjoint cases obey the stated overlap constraints.

The normal interval uses numerical `z₀.₉₇₅`, independently checked with Python
`NormalDist`, rather than treating 1.96 as exact. Its standard error, margin and
endpoints follow the declared known-sigma normal model. Unknown mu has no
invented marked location. Complete-block differences cancel common additive
day offsets while retaining treatment-by-day variation; two fixed allocation
layouts do not simulate a randomization distribution or establish causation.

## Integration and reference

Every new calculation stage activates an actual scene target. Canonical grammar,
model values, quantity descriptions, story calculation fields and shape marks
agree. Operators, function identities and the unknown mean remain explicitly
text-only when they have no numerical scene value. The shared summation reader
is reused; a redundant family-specific copy was removed.

There are **981 index entries**, including 938 authored definitions, and
**865 selectable forms across 739 meanings**. All new readers have actual
lesson evidence. The prepared reference retains complete public contexts and
offline search. The audit resolves **79,626 occurrences** across **49,182
fields** and **1,497 tokens**, with zero unresolved/review items. New count units
and the graph coloring callable have explicit scoped readers; mean-difference
bar notation retains its native and TeX forms.

The first complete test run exposed older inventory/Greek ownership snapshots,
an incomplete classic-script preview fixture, missing analysis story-focus
roles and preview caption-band integration. These were corrected in source or
matching inventory expectations. Existing assertions about missing-card states,
literal Greek identity, escaping, actual physical marks and caption bounds were
retained. Repaired test slices pass; final complete results accompany the
artifact measurements below and the PR checks.

Final complete local validation passes **1,196 JavaScript tests**, two file
workers, 122.7 seconds, with no skips. The unchanged startup gate also passes
inside that suite at 359.8 ms; this is separate from the isolated three-run
measurement. **34 Python pipeline tests pass** in 85.8 seconds, all **1,565
numeric fixtures** and nine negative contract mutations pass, and all **117
formulas** compile strictly to native MathML. Incremental formatting and
authored-source syntax/whitespace pass across 168 files. The full-catalog
notebook and workspace checks now cover 117 defaults and 241 declared views.

The first GitHub run stopped at formatting before application tests: the growing
brace-glob argument exceeded Linux's filename-component limit when Prettier
first checked it as a literal path (`ENAMETOOLONG`). Splitting the same explicit
source/test scope into shorter arguments fixes this platform difference without
changing the formatter, its coverage or the application artifact. Local checks
and the subsequent GitHub run verify the correction.

## Static visual evidence

The [six previews](presentation-0-34-roadmap/previews.png) and
[compact scenes](presentation-0-34-roadmap/compact-scenes.png) come from actual
SVG with explicit local fonts. Default preview glyph boxes have no overlap,
horizontal overflow, undersized type or artwork/caption collisions. Scene
labels use readable rounded display values while model/backup numbers retain
precision. No CSS layout or phone qualification is inferred from these images.

The full default-state scene preflight covers 1,081 fragments / 1,085 SVG roots,
3,345 IDs, 3,036 references and 482 separate-slot pairs, including all 117
previews and 964 desktop/compact view fragments. It rejects malformed XML,
unresolved local references, duplicate IDs and cross-slot collisions. This
check and its failure-detection fixtures remain in CI.

## Artifact and release qualification

Windows x64 / Node v24.11.1 background measurements used three predeclared
sequential attempts, after other repository checks stopped. The unchanged
1500 ms gate passed at **784, 578.3 and 515.4 ms** (median 578.3 ms), leaving
at least 716 ms of measured headroom. All attempts and diagnostic workers
completed; source/build/measurement identities stayed stable. The separate
built-inline-prefix diagnostic has median 506.252 ms and maximum 517.619 ms.
These measurements cover parsing/setup through header search, before storage
and main-view rendering; they exclude delivery, HTML/CSS parsing, layout,
paint and actual devices. Different PC conditions are not used to claim a
causal speed change from the preceding checkpoint.

Run `node tools/measure_startup.cjs --profile --runs=3` after a completed build
to reproduce the fixed-attempt method. All observations remain subject to the
[measurement limits](STARTUP_OPTIMIZATION_0_34_0.md#measurement-method); the
older slower samples and 1577.7 ms miss remain in their original records.

The standalone HTML is 8,691,485 bytes; its local gzip level-6 estimate is
1,359,690 bytes, with 117 embedded source scripts. Gzip is an estimate rather
than an observation of production response headers.

Standalone HTML SHA-256:
`d134b124fd49ea52c94748109b8aa8bb9a454f2ca578a0731616b15b537e33e7`

Canonical content SHA-256:
`f51457639dc7ab52eea33fb90931820855e6d4ff701b92326931a01b5ecb59a2`

Formatting, source syntax/whitespace, strict native MathML, numeric/schema
checks, deterministic exports and the expanded Python pipeline retain their
existing gates. The standalone is rebuilt from canonical data and current
source; ZIP audit checks CRC, source-byte membership, private-path exclusions
and standalone/manifest parity. No private notebook data enters these checks.

The [current matrix](ROADMAP_EXPANSION_MATRIX_0_34_0.md) records 77 introductory
links, 57 precursors and 161 planned rows in the overlapping 295-topic inventory.
The earlier roadmap retains 119 planned rows. Exact-edition/page verification,
independent mathematical/history/learner review and the
[browser/phone walkthrough](RELEASE_CHECKS_0_34_0.md#review-that-still-needs-a-browser-or-phone)
remain open for the expanded candidate. PR publication is a separate decision.
