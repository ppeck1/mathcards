# 0.34.0 covariance matrix and rank-comparison validation

Background checks on 2026-11-03 for `codex/eight-book-expansion`, continuing
[draft PR #13](https://github.com/ppeck1/mathcards/pull/13). This identifies the
126-card candidate after the [123-card checkpoint](VALIDATION_0_34_0_DESIGN.md).
Live remains 0.33.0. No browser, headless browser, desktop app, panel or phone
was used; visual proofs come from static source rendering.

## Mathematics and scope

Three lessons add 15 distinct original examples, 215 independent numeric
fixtures and six views. The candidate has 126 draft lessons, 634 examples,
2,215 fixtures, 760 written exports and 259 views. Twelve explicit metadata
families install 42 continuation modules through the same host. Existing
model revisions and private-state schemas are retained.

The covariance model uses five constructed paired positioning errors in
millimetres. Its two fixed centered patterns have squared lengths 10 and 14
and zero numerical dot product. Dividing by four gives Sxx=2.5a²,
Sxy=2.5ab and Syy=2.5b²+3.5c². The determinant is 8.75a²c². Matrix entries,
trace and eigenvalues use mm², the determinant uses mm⁴, and principal radii
use mm. The ellipse describes one standard deviation along each principal
direction. It is not a confidence/prediction region or a promised containment
fraction. The independent Python oracle reconstructs and centers observations
with exact decimal fractions before checking total sample variance. Separate
regressions recompute covariance entries from the actual points and reconstruct
the matrix from its principal spreads and directions.
Zero residual gives a line; a repeated eigenvalue has no unique direction.
Near-circular directions are withheld when unstable. Lost positive spread
produces a precision state instead of an invented rank-one result.

The Wilcoxon lesson omits exact zero paired differences, assigns midranks to
equal nonzero absolute differences, and sums ranks by sign. Under its declared
symmetric paired null, all independent fair-sign assignments of the retained
four or five absolute differences are enumerated. The two-sided inclusive
tail compares |W⁺−W⁻|; doubled integer ranks preserve exact ties. At the default
state the probability is 0.4375. Five nonzero pairs cannot attain a two-sided
probability below 0.0625. Tiny changes lost when represented beside a ten-minute
baseline are rejected as precision loss rather than relabeled zero differences.

The Mann–Whitney lesson pools three scores per group and uses midranks.
U_A=R_A−6 equals cross-group wins plus half the ties. The empirical win share
is U_A/9; it is displayed separately from the rank statistic. All 20 labeled
three-versus-three allocations form the exact reference under the exchangeable
equal-distribution null. Inclusive two-sided tails compare distance from 4.5
using doubled integers. The default U_A is three and p is 0.7. Positive common
score scaling changes positions while leaving ordering, U and p unchanged.
This is not a general median test or a causal finding. Representational
collapse cannot create an artificial tie.

## Connected views and reference

The same host owns controls, animation, reading pace, pins and independent
slots. Every new grammar quantity has a nonempty binding map and actual
model/story/scene evidence. Rank-test graphs display evaluated points and rank
events; their probabilities change discretely as ordering changes. Covariance
uses fixed equal measurement scales. Its zero/near-circular/singular states
retain their declared mathematical meaning.

The [previews](presentation-0-34-comparison/previews.png) and
[compact scenes](presentation-0-34-comparison/compact-scenes.png) use actual
shared renderers and explicit local fonts. These source renders leave browser
CSS, accessibility trees, touch and phone qualification open.

The prepared reference contains 1,133 entries: 1,090 authored definitions and
43 contextual entries, exposing 910 selectable forms across 854 meanings.
Data ranks retain actual usage in the two rank lessons; matrix rank remains
linked to basis and covariance matrices. A search for “rank” offers both
meanings. Scoped extraction recognizes mm⁴ as a covariance-determinant unit
before generic decorated identifiers. Units, matrix entries, ranks, counts,
sign patterns, probabilities and empirical shares retain separate meanings.
The finite public notation audit resolves all 87,102 occurrences across 52,151
selected fields and 1,558 tokens, with zero unresolved or review items.

The eight-book crosswalk records 82 bounded introductions, 55 precursors and
158 planned topics. Nonparametric statistics gains a bounded introduction;
ANCOVA and matrix regression remain planned. The earlier overlapping roadmap
retains 59 introductions, 36 precursors and 119 planned topics. Imported book
evidence and stable topic IDs are preserved.

## Verification record

The first full JavaScript run passed 1,225 of 1,230 checks. Two atlas snapshots
still expected the prior contour interval, and one roadmap snapshot still
treated nonparametric statistics as preparation. The existing bounded contour
policy selects five lessons at the new maximum of 37; its implementation is
unchanged. One sample-mean expectation incorrectly included story-only usage
in a card-only fixture; the expectation was restored. The prose fixture now
says “matrix rank” explicitly rather than inferring that meaning from an
unqualified “rank.” All 75 focused regression checks then pass.

A separate review caught the scene label “U_A = 3 / 9,” which could falsely
equate the U statistic with its normalized share. The label now reads
“U_A = 3 of 9,” and six compact/wide cases check that separation. The numeric
model and independent oracle were unchanged. Updated source-only proofs
pass 928 label checks across defaults, 18 boundary previews and 36 boundary/pin
scenes, with no overlap, overflow or undersized labels.

The final full run passes **1,231 JavaScript tests**, no skips, with two file
workers in 153.1 seconds. The startup threshold and timer boundary are unchanged.

The complete Python pipeline passes **34 tests** in 67.7 seconds, all
**2,215 numeric fixtures**, nine negative contract mutations and **126** strict
native MathML formulas. Repeated builds and written exports remain deterministic.
The full-catalog recovery checks cover 126 notebook defaults and 259 workspace
views. The scene preflight passes **1,162 fragments**, **1,166 SVG roots**,
3,561 IDs, 3,243 references and 518 independent-slot pairs, including 126
previews and 1,036 desktop/compact view fragments. Source syntax/whitespace
checks cover 183 authored files, and incremental formatting passes.

## Startup and artifact identity

Three predeclared sequential fresh-process measurements ran after other checks
stopped, on Windows x64 / Node v24.11.1. The unchanged **1500 ms** gate passes
at **426.2, 432.2 and 413.4 ms** (median 426.2 ms, maximum 432.2 ms), retaining
at least 1067.8 ms of measured headroom. The separate built-inline-prefix
diagnostic has median 396.530 ms and maximum 408.459 ms. Every attempt and
diagnostic worker completes; source/build/measurement identities stay stable.
The [complete fixed-attempt report](STARTUP_0_34_0_COMPARISON.json) preserves
all three attempts and component diagnostics. No OS cache flush or causal
speed comparison with preceding PC runs is claimed.

Run `node tools/measure_startup.cjs --profile --runs=3` after a completed build
for the fixed-attempt method. The existing test's pre-timer setup is retained.
This Node/V8 proxy measures setup through header search before storage and
main-view rendering; it excludes delivery, HTML/CSS parsing, layout, paint,
actual devices and assistive technology. The
[measurement limits](STARTUP_OPTIMIZATION_0_34_0.md#measurement-method) and earlier
failed/slower records remain applicable.

Standalone HTML is **9,606,145 bytes**, with a local gzip level-6 estimate of
**1,476,701 bytes** and 126 embedded source scripts. The gzip estimate does not
certify production response headers or transfer time.

Standalone HTML SHA-256:
`93c4d30168976e69241bd95d5b6550e0864d46f3fd63a1223ed0bd3f4e72fa84`

Canonical content SHA-256:
`4ff3ba53b22ea754e4e1c74eeba7e005a4c0846eb5f43d3e64c0eeec1259f248`

Artifact checks retain offline/manifest parity, current document file targets,
zero external app resource references and bundled notices/provenance. The ZIP
audit checks CRC, exact current source bytes, private-path exclusions and
standalone/manifest consistency. Private notebooks are never read or packaged.

The [current matrix](COMPARISON_EXPANSION_MATRIX_0_34_0.md) retains independent
mathematical/history/learner review, exact-edition verification and browser/phone
qualification as open work. Publication is separate from this draft branch.
