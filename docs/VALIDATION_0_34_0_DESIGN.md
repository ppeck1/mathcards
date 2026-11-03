# 0.34.0 covariance, variance and planning validation

Background checks on 2026-11-03 for `codex/eight-book-expansion`, continuing
[draft PR #13](https://github.com/ppeck1/mathcards/pull/13). This identifies the
123-card candidate after the [120-card checkpoint](VALIDATION_0_34_0_SAMPLING.md).
Live remains 0.33.0. No browser, headless browser, desktop app, panel or phone
was used; visual proofs come from static source rendering.

## Mathematics and scope

Three lessons add 15 distinct original examples, 220 independently checked
numeric fixtures and six views. The candidate has 123 draft lessons,
619 examples, 2,000 fixtures, 742 written exports and 253 views. Eleven
explicit metadata families now install 39 continuation modules through the
same host. Existing model revisions and private-state schemas are retained.

Sample covariance centers five paired board lengths and finishing times,
forms signed deviation products and divides their sum by four. Metre-minute
units remain distinct from normalized correlation and physical floor area.
The declared residual pattern is orthogonal to the numerical centered lengths,
so it can change the point cloud without changing this family's covariance.
The independent Python oracle reconstructs observations using exact decimal
fractions, then centers and sums them. Tiny trends lost beside represented
times produce a numerical-precision state rather than an invented result.

The variance interval assumes independent identically normal readings with
unknown common mean and unknown positive variance. The chi-square pivotal
quantity uses n−1 degrees of freedom. Dividing the squared-spread total by
the upper/lower numerical quantiles reverses their order into the lower/upper
variance endpoints. The formula applies for n≥2; the display supports whole
n from 6 to 31 and positive sample spread. Runtime constants for both tails
at degrees of freedom 5–30 were generated offline by integer/half-integer
gamma recurrence. An independent Python positive-series CDF inversion checks
all 52 quantiles. Variance endpoints use squared millimetres; optional spread
bounds use millimetres. The unknown population variance has no supplied point.

Power planning uses two equal independent normal groups, known common sigma
and a predeclared one-sided 5% rule. The count n is per group; total N=2n is
explicit, and its input port has a group-sample-size type. The entered true
difference is an assumption for planning rather than observed evidence.
The standard error is sigma times the square root of 2/n. Runtime power and
non-rejection use the existing stable normal-tail helper; an independent
Python normal distribution checks rejection probabilities. Complementary tails
are evaluated independently to preserve small values when power rounds to one.
At zero effect, non-rejection is a null probability; it is a Type II error
probability for a positive assumed effect. Extreme rounding/underflow does
not establish guaranteed detection.

## Connected views and reference

All new controls, grammar quantities and story calculation fields have actual
model and visible scene evidence. Covariance uses signed rectangles and paired
points on fixed measurement axes. The variance interval uses a fixed 0–25
squared-millimetre axis covering the supported range. Power uses survival-curve
heights, not PDF areas. Curves include the exact cutoff, both midpoints and
local refinement so probability markers lie on the curve even at narrow spread.
The corresponding edge regression rejects the previous coarse-grid mismatch.

ANOVA opts into the shared renderer's optional nonnegative `log1p` vertical
scale. Original 0–800 F bounds, raw current/pinned values and horizontal dragging
are retained; only vertical projection and tick placement change. Tick labels
are inverse-transformed original F values. The label, caption and logarithmic-axis
reader explain the scale. Equal F values from different parameter families
keep equal heights. Linear defaults keep their original projection. Tests cover
endpoints, ticks, pins, invalid domains, negative sample gaps and transformed
bounds that collapse numerically. No scale state or new animation clock is added.

The [previews](presentation-0-34-design/previews.png),
[compact scenes](presentation-0-34-design/compact-scenes.png) and
[ANOVA graph](presentation-0-34-design/anova-graph.png) use actual shared renderers
with explicit local fonts. Glyph audits cover 74 labels with no overlap,
overflow, small type or art/caption collisions. Static source rendering does
not qualify browser CSS, accessibility trees, touch or phone layout.

The prepared reference has 1,079 entries: 1,036 authored definitions and
43 contextual entries, exposing 890 forms across 813 meanings. Every new
reader has actual lesson usage. The finite notation audit resolves all
84,583 occurrences across 50,990 fields and 1,529 tokens, with zero unresolved
or review items. Covariance products, time-per-length and variance units have
scoped meanings. Ordinary reading counts stay distinct from per-group semantics.

The book crosswalk has 81 bounded introductory topics, 56 precursors and
158 planned topics. Covariance and variance inference advance to introductions;
replication remains preparation. Covariance also connects Structure and Space
through centered numerical dot products and signed geometric products. Imported
book evidence and stable topic IDs are preserved. The earlier overlapping
roadmap retains 59 introductions, 36 precursors and 119 planned topics.

## Regression record

The first full run passed 1,210 of 1,220 checks. One new glossary link used the
card ID `inner-product` instead of the reference ID `dot-product`, triggering
seven existing reference-integrity tests; the source link was corrected.
Three scoped-usage expectations were updated to include covariance's sample
mean and power's distinct delta meaning. All 64 targeted regression checks
then pass, preserving literal Greek identity and reference/card namespaces.

The clean full run passes **1,220 JavaScript tests**, no skips, with two file
workers in 152.8 seconds. Formatting passes, as do source syntax/whitespace
checks across 178 authored files. No startup threshold or timer boundary was
changed.

The complete Python pipeline passes **34 tests** in 69.8 seconds, all
**2,000 numeric fixtures**, nine negative contract mutations and **123** strict
native MathML formulas. Repeated builds and written exports remain deterministic.
The full-catalog recovery checks cover 123 notebook defaults and 253 workspace
views. The scene preflight passes **1,135 fragments**, **1,139 SVG roots**,
3,489 IDs, 3,174 references and 506 independent-slot pairs, including 123
previews and 1,012 desktop/compact view fragments.

## Startup and artifact identity

Three predeclared sequential fresh-process measurements ran after other checks
stopped, on Windows x64 / Node v24.11.1. The unchanged **1500 ms** gate passes
at **515.5, 433.1 and 392.5 ms** (median 433.1 ms, maximum 515.5 ms), retaining
at least 984.5 ms of measured headroom. The separate built-inline-prefix
diagnostic has median 389.559 ms and maximum 410.788 ms. Every attempt and
diagnostic worker completes; source/build/measurement identities stay stable.
No OS cache flush or causal speed comparison with preceding PC runs is claimed.

Run `node tools/measure_startup.cjs --profile --runs=3` after a completed build
for the fixed-attempt method. The existing test's pre-timer setup is retained.
This Node/V8 proxy measures setup through header search before storage and
main-view rendering; it excludes delivery, HTML/CSS parsing, layout, paint,
actual devices and assistive technology. The
[measurement limits](STARTUP_OPTIMIZATION_0_34_0.md#measurement-method) and earlier
failed/slower records remain applicable.

Standalone HTML is **9,313,743 bytes**, with a local gzip level-6 estimate of
**1,436,268 bytes** and 123 embedded source scripts. The gzip estimate does not
certify production response headers or transfer time.

Standalone HTML SHA-256:
`6479b5d42ddd953d3cee4fe2d30b48c9f0c27f743d4fcfe8a753a4b958440dce`

Canonical content SHA-256:
`0c73a2c588850e7cec0dea8f86e6220f6cc8bc3fb53cd078f9935236a1121570`

Artifact checks retain offline/manifest parity, current document file targets,
zero external app resource references and bundled notices/provenance. The ZIP
audit checks CRC, exact current source bytes, private-path exclusions and
standalone/manifest consistency. Private notebooks are never read or packaged.

The [current matrix](DESIGN_EXPANSION_MATRIX_0_34_0.md) retains independent
mathematical/history/learner review, exact-edition verification and browser/phone
qualification as open work. Publication is separate from this draft branch.
