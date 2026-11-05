---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:covariance-matrix", "id": "math:concept:covariance-matrix", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:covariance-matrix", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a9847dbe1c021a81695084f1aae01bde4cdde87480f388280b0e6689235792a3"}, "purpose": "How do horizontal and vertical positioning errors vary together?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a9847dbe1c021a81695084f1aae01bde4cdde87480f388280b0e6689235792a3", "status": "draft", "title": "A covariance matrix and its ellipse", "topics": ["mathematics", "statistics", "linear-algebra", "geometry", "a covariance matrix and its ellipse"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# A covariance matrix and its ellipse

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:covariance-matrix; revision 0.1.0-draft. Setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern. Expression: $S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.$. Conditions required for a defined value (a case may test their violation): Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero. Scope: This is a sample covariance matrix of five constructed paired errors, using divisor n−1=4 and the same millimetre unit on both axes. It is descriptive, not sampled evidence or a confidence/prediction region. The ellipse has principal semiaxes equal to the square roots of the two eigenvalues; it does not promise to enclose the five points or any stated probability. The matrix is positive semidefinite. Its matrix rank is one at c=0 and two for positive c when the quantities remain representable. A circular limit has no unique principal direction, and near-equal eigenvalues make orientation numerically unstable. Use b from −2 to 2 mm, a from 0.25 to 2 mm and c from 0 to 2 mm. Positive residuals lost to numerical precision must not be called exact zero spread.

## Schema Version

0.1.0

## Id

math:concept:covariance-matrix

## Slug

covariance-matrix

## Type

concept

## Title

A covariance matrix and its ellipse

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-03T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- a covariance matrix and its ellipse

## Branches

- statistics
- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How do horizontal and vertical positioning errors vary together?

## Meaning

Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse. Each principal semiaxis is one standard deviation along its principal direction.

## Prerequisites

- required:
  - math:concept:covariance
- helpful:
  - math:concept:matrix-linear-map
  - math:concept:determinant
  - math:concept:variance
- depth:
  []

## Definition

- setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
- formal latex: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
- signature:
  - a: Horizontal error-pattern amplitude, in millimetres
  - b: Signed shared vertical-pattern coefficient, in millimetres
  - c: Orthogonal residual-pattern amplitude, in millimetres
  - Sxx: Horizontal sample variance, in squared millimetres
  - Sxy: Paired sample covariance, in squared millimetres
  - Syy: Vertical sample variance, in squared millimetres
  - S: Symmetric two-by-two sample covariance matrix
  - tr(S): Trace: total sample coordinate variance, in squared millimetres
  - D: Determinant of this covariance matrix, in fourth-power millimetres
  - λ₁: Larger covariance eigenvalue, in squared millimetres
  - λ₂: Smaller covariance eigenvalue, in squared millimetres
  - r₁: Major semiaxis radius, the square root of the larger eigenvalue, in millimetres
  - r₂: Minor semiaxis radius, the square root of the smaller eigenvalue, in millimetres
  - k: Matrix rank: one for a line, two for positive residual spread
  - n: Number of constructed paired errors, fixed at five
- conditions:
  - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
- domain notes: This is a sample covariance matrix of five constructed paired errors, using divisor n−1=4 and the same millimetre unit on both axes. It is descriptive, not sampled evidence or a confidence/prediction region. The ellipse has principal semiaxes equal to the square roots of the two eigenvalues; it does not promise to enclose the five points or any stated probability. The matrix is positive semidefinite. Its matrix rank is one at c=0 and two for positive c when the quantities remain representable. A circular limit has no unique principal direction, and near-equal eigenvalues make orientation numerically unstable. Use b from −2 to 2 mm, a from 0.25 to 2 mm and c from 0 to 2 mm. Positive residuals lost to numerical precision must not be called exact zero spread.
- proof status: Definition-level primary source and original bounded derivation; independent mathematical review pending.
- source refs:
  - source:comparison-extensions:covariance-matrix

## Grammar

- pronunciation: A covariance matrix and its ellipse
- expression latex: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
- formation rule: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
- precedence: Form centered products before assembling the symmetric matrix; add diagonal entries for trace before relating eigenvalues to semiaxes.
- symbols:
  - Item:
    - token: a
    - role: Horizontal error-pattern amplitude, in millimetres
    - type: Declared comparison quantity
  - Item:
    - token: b
    - role: Signed shared vertical-pattern coefficient, in millimetres
    - type: Declared comparison quantity
  - Item:
    - token: c
    - role: Orthogonal residual-pattern amplitude, in millimetres
    - type: Declared comparison quantity
  - Item:
    - token: Sxx
    - role: Horizontal sample variance, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: Sxy
    - role: Paired sample covariance, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: Syy
    - role: Vertical sample variance, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: S
    - role: Symmetric two-by-two sample covariance matrix
    - type: Declared comparison quantity
  - Item:
    - token: tr(S)
    - role: Trace: total sample coordinate variance, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: D
    - role: Determinant of this covariance matrix, in fourth-power millimetres
    - type: Declared comparison quantity
  - Item:
    - token: λ₁
    - role: Larger covariance eigenvalue, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: λ₂
    - role: Smaller covariance eigenvalue, in squared millimetres
    - type: Declared comparison quantity
  - Item:
    - token: r₁
    - role: Major semiaxis radius, the square root of the larger eigenvalue, in millimetres
    - type: Declared comparison quantity
  - Item:
    - token: r₂
    - role: Minor semiaxis radius, the square root of the smaller eigenvalue, in millimetres
    - type: Declared comparison quantity
  - Item:
    - token: k
    - role: Matrix rank: one for a line, two for positive residual spread
    - type: Declared comparison quantity
  - Item:
    - token: n
    - role: Number of constructed paired errors, fixed at five
    - type: Declared comparison quantity
- ast:
  - id: ast:covariance-matrix:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:shared
      - kind: variable
      - type: Declared input or construction selector
      - symbol: b
      - scope ref: scope:covariance-matrix
    - Item:
      - id: n:horizontal
      - kind: variable
      - type: Declared input or construction selector
      - symbol: a
      - scope ref: scope:covariance-matrix
    - Item:
      - id: n:residual
      - kind: variable
      - type: Declared input or construction selector
      - symbol: c
      - scope ref: scope:covariance-matrix
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared covariance or conditional rank-comparison rule
      - ref: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:rule
      - argument: n:shared
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:partial-0
      - argument: n:horizontal
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:partial-1
      - argument: n:residual
  - scopes:
    - Item:
      - id: scope:covariance-matrix
      - kind: modelExpression
      - free variables:
        - b
        - a
        - c
      - external parameters:
        - Five fixed paired numerical patterns
      - domain condition: This is a sample covariance matrix of five constructed paired errors, using divisor n−1=4 and the same millimetre unit on both axes. It is descriptive, not sampled evidence or a confidence/prediction region. The ellipse has principal semiaxes equal to the square roots of the two eigenvalues; it does not promise to enclose the five points or any stated probability. The matrix is positive semidefinite. Its matrix rank is one at c=0 and two for positive c when the quantities remain representable. A circular limit has no unique principal direction, and near-equal eigenvalues make orientation numerically unstable. Use b from −2 to 2 mm, a from 0.25 to 2 mm and c from 0 to 2 mm. Positive residuals lost to numerical precision must not be called exact zero spread.
- parse errors:
  - Item:
    - input: Change the comparison design or null assumptions without changing the rule
    - status: model mismatch
    - reason: This is a sample covariance matrix of five constructed paired errors, using divisor n−1=4 and the same millimetre unit on both axes. It is descriptive, not sampled evidence or a confidence/prediction region. The ellipse has principal semiaxes equal to the square roots of the two eigenvalues; it does not promise to enclose the five points or any stated probability. The matrix is positive semidefinite. Its matrix rank is one at c=0 and two for positive c when the quantities remain representable. A circular limit has no unique principal direction, and near-equal eigenvalues make orientation numerically unstable. Use b from −2 to 2 mm, a from 0.25 to 2 mm and c from 0 to 2 mm. Positive residuals lost to numerical precision must not be called exact zero spread.
- ast coverage: Typed application outline of the stated bounded construction, not an arbitrary-data analysis engine.
- output symbol bindings:
  - a: horizontal
  - b: shared
  - c: residual
  - Sxx: sxx
  - Sxy: sxy
  - Syy: syy
  - S:
    - sxx
    - sxy
    - syy
  - tr(S): output
  - D: determinant
  - λ₁: lambdaMajor
  - λ₂: lambdaMinor
  - r₁: majorRadius
  - r₂: minorRadius
  - k: rank
  - n: count

## Properties

- Item:
  - claim: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
  - conditions: Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - derivation: The two fixed numerical patterns have squared lengths 10 and 14 and zero dot product. Dividing their centered products by four gives Sxx=2.5a², Sxy=2.5ab and Syy=2.5b²+3.5c². The determinant is 8.75a²c². The eigenvalues are the nonnegative roots with sum equal to trace and product equal to determinant. The principal axes use their square roots as radii. Positive semidefinite spread allows a zero eigenvalue; a singular covariance ellipse is a line. Equal eigenvalues describe a circle with no unique orientation.
  - status: author-derived under stated conditions; independent review pending
  - example ref: math:example:covariance-matrix:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:covariance
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: The off-diagonal entries are sample covariances, while the diagonal entries are coordinate variances.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: A symmetric positive semidefinite covariance matrix determines a linear spread geometry.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: A zero determinant accompanies the line-shaped covariance limit; trace remains a distinct diagonal sum.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:variance
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:covariance-matrix:case-1
  - title: A tilted two-axis error cloud
  - role: applied_model
  - question: How do horizontal and vertical positioning errors vary together?
  - setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - assumptions:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - inputs:
    - shared: 0.75
    - horizontal: 1
    - residual: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: b = 0.75; a = 1; c = 0.5
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
      - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - index: 3
      - expression: tr(S) = 4.78125 mm²; D = 2.1875 mm⁴
      - reason: The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.
  - result:
    - approximate: 4.78125
  - interpretation: The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.
  - independent check:
    - method: Independent exact-fraction reconstruction of all five paired coordinates, coordinate means and sample centered products; matrix trace is computed from the reconstructed diagonal.
    - expected: 4.78125
  - limits: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - preset:
    - shared: 0.75
    - horizontal: 1
    - residual: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
- Item:
  - id: math:example:covariance-matrix:case-2
  - title: Mirror the shared error direction
  - role: applied_model
  - question: How do horizontal and vertical positioning errors vary together?
  - setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - assumptions:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - inputs:
    - shared: -0.75
    - horizontal: 1
    - residual: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: b = -0.75; a = 1; c = 0.5
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
      - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - index: 3
      - expression: tr(S) = 4.78125 mm²; D = 2.1875 mm⁴
      - reason: Changing the sign of b reverses the off-diagonal covariance and mirrors the tilt. Trace and determinant are unchanged because they depend on squared coefficients.
  - result:
    - approximate: 4.78125
  - interpretation: Changing the sign of b reverses the off-diagonal covariance and mirrors the tilt. Trace and determinant are unchanged because they depend on squared coefficients.
  - independent check:
    - method: Independent exact-fraction reconstruction of all five paired coordinates, coordinate means and sample centered products; matrix trace is computed from the reconstructed diagonal.
    - expected: 4.78125
  - limits: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - preset:
    - shared: -0.75
    - horizontal: 1
    - residual: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
- Item:
  - id: math:example:covariance-matrix:case-3
  - title: Collapse to one error direction
  - role: applied_model
  - question: How do horizontal and vertical positioning errors vary together?
  - setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - assumptions:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - inputs:
    - shared: 0.75
    - horizontal: 1
    - residual: 0
  - steps:
    - Item:
      - index: 1
      - expression: b = 0.75; a = 1; c = 0
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
      - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - index: 3
      - expression: tr(S) = 3.90625 mm²; D = 0.0 mm⁴
      - reason: With no residual pattern the errors lie on one line. The smaller eigenvalue and determinant are zero, and matrix rank is one.
  - result:
    - approximate: 3.90625
  - interpretation: With no residual pattern the errors lie on one line. The smaller eigenvalue and determinant are zero, and matrix rank is one.
  - independent check:
    - method: Independent exact-fraction reconstruction of all five paired coordinates, coordinate means and sample centered products; matrix trace is computed from the reconstructed diagonal.
    - expected: 3.90625
  - limits: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - preset:
    - shared: 0.75
    - horizontal: 1
    - residual: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
- Item:
  - id: math:example:covariance-matrix:case-4
  - title: Approach an orientation-free circle
  - role: applied_model
  - question: How do horizontal and vertical positioning errors vary together?
  - setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - assumptions:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - inputs:
    - shared: 0
    - horizontal: 1
    - residual: 0.8451542547285166
  - steps:
    - Item:
      - index: 1
      - expression: b = 0; a = 1; c = 0.8451542547285166
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
      - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - index: 3
      - expression: tr(S) = 5.0 mm²; D = 6.25 mm⁴
      - reason: The diagonal variances are equal to numerical precision and the off-diagonal covariance is zero. Near this circular limit, one should not read a unique principal orientation.
  - result:
    - approximate: 5.0
  - interpretation: The diagonal variances are equal to numerical precision and the off-diagonal covariance is zero. Near this circular limit, one should not read a unique principal orientation.
  - independent check:
    - method: Independent exact-fraction reconstruction of all five paired coordinates, coordinate means and sample centered products; matrix trace is computed from the reconstructed diagonal.
    - expected: 5.0
  - limits: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - preset:
    - shared: 0
    - horizontal: 1
    - residual: 0.8451542547285166
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
- Item:
  - id: math:example:covariance-matrix:case-5
  - title: Widen the horizontal coordinate
  - role: applied_model
  - question: How do horizontal and vertical positioning errors vary together?
  - setting: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - assumptions:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - inputs:
    - shared: 0.75
    - horizontal: 2
    - residual: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: b = 0.75; a = 2; c = 0.5
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: S=\begin{pmatrix}S_{xx}&S_{xy}\\S_{xy}&S_{yy}\end{pmatrix},\quad S_{xx}=2.5a^2,\quad S_{xy}=2.5ab,\quad S_{yy}=2.5b^2+3.5c^2,\quad \operatorname{tr}(S)=S_{xx}+S_{yy},\quad D=S_{xx}S_{yy}-S_{xy}^2.
      - reason: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
    - Item:
      - index: 3
      - expression: tr(S) = 12.28125 mm²; D = 8.75 mm⁴
      - reason: Doubling horizontal amplitude multiplies its variance by four and its covariance with vertical error by two. Trace rises to 12.28125 mm².
  - result:
    - approximate: 12.28125
  - interpretation: Doubling horizontal amplitude multiplies its variance by four and its covariance with vertical error by two. Trace rises to 12.28125 mm².
  - independent check:
    - method: Independent exact-fraction reconstruction of all five paired coordinates, coordinate means and sample centered products; matrix trace is computed from the reconstructed diagonal.
    - expected: 12.28125
  - limits: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - preset:
    - shared: 0.75
    - horizontal: 2
    - residual: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.

## Interactive

- component id: component:covariance-matrix
- renderer id: covariance-matrix-visual-model
- renderer version: 1
- model id: covariance-matrix-visual-model
- model revision: 1
- expression id: ast:covariance-matrix:expression
- interaction status: implemented
- description: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
- controls:
  - Item:
    - id: shared
    - type: number
    - default: 0.75
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: horizontal
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.05
  - Item:
    - id: residual
    - type: number
    - default: 0.5
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - shared: -2
      - horizontal: 0.25
      - residual: 0
    - status: valid
    - output: 10.15625
  - Item:
    - input:
      - shared: -2
      - horizontal: 0.25
      - residual: 0.5
    - status: valid
    - output: 11.03125
  - Item:
    - input:
      - shared: -2
      - horizontal: 0.25
      - residual: 2
    - status: valid
    - output: 24.15625
  - Item:
    - input:
      - shared: -2
      - horizontal: 1
      - residual: 0
    - status: valid
    - output: 12.5
  - Item:
    - input:
      - shared: -2
      - horizontal: 1
      - residual: 0.5
    - status: valid
    - output: 13.375
  - Item:
    - input:
      - shared: -2
      - horizontal: 1
      - residual: 2
    - status: valid
    - output: 26.5
  - Item:
    - input:
      - shared: -2
      - horizontal: 2
      - residual: 0
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - shared: -2
      - horizontal: 2
      - residual: 0.5
    - status: valid
    - output: 20.875
  - Item:
    - input:
      - shared: -2
      - horizontal: 2
      - residual: 2
    - status: valid
    - output: 34.0
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 0.25
      - residual: 0
    - status: valid
    - output: 1.5625
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 0.25
      - residual: 0.5
    - status: valid
    - output: 2.4375
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 0.25
      - residual: 2
    - status: valid
    - output: 15.5625
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 1
      - residual: 0
    - status: valid
    - output: 3.90625
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 1
      - residual: 0.5
    - status: valid
    - output: 4.78125
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 1
      - residual: 2
    - status: valid
    - output: 17.90625
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 2
      - residual: 0
    - status: valid
    - output: 11.40625
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 2
      - residual: 0.5
    - status: valid
    - output: 12.28125
  - Item:
    - input:
      - shared: -0.75
      - horizontal: 2
      - residual: 2
    - status: valid
    - output: 25.40625
  - Item:
    - input:
      - shared: 0
      - horizontal: 0.25
      - residual: 0
    - status: valid
    - output: 0.15625
  - Item:
    - input:
      - shared: 0
      - horizontal: 0.25
      - residual: 0.5
    - status: valid
    - output: 1.03125
  - Item:
    - input:
      - shared: 0
      - horizontal: 0.25
      - residual: 2
    - status: valid
    - output: 14.15625
  - Item:
    - input:
      - shared: 0
      - horizontal: 1
      - residual: 0
    - status: valid
    - output: 2.5
  - Item:
    - input:
      - shared: 0
      - horizontal: 1
      - residual: 0.5
    - status: valid
    - output: 3.375
  - Item:
    - input:
      - shared: 0
      - horizontal: 1
      - residual: 2
    - status: valid
    - output: 16.5
  - Item:
    - input:
      - shared: 0
      - horizontal: 2
      - residual: 0
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - shared: 0
      - horizontal: 2
      - residual: 0.5
    - status: valid
    - output: 10.875
  - Item:
    - input:
      - shared: 0
      - horizontal: 2
      - residual: 2
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 0.25
      - residual: 0
    - status: valid
    - output: 1.5625
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 0.25
      - residual: 0.5
    - status: valid
    - output: 2.4375
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 0.25
      - residual: 2
    - status: valid
    - output: 15.5625
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: 0
    - status: valid
    - output: 3.90625
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: 0.5
    - status: valid
    - output: 4.78125
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: 2
    - status: valid
    - output: 17.90625
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 2
      - residual: 0
    - status: valid
    - output: 11.40625
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 2
      - residual: 0.5
    - status: valid
    - output: 12.28125
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 2
      - residual: 2
    - status: valid
    - output: 25.40625
  - Item:
    - input:
      - shared: 2
      - horizontal: 0.25
      - residual: 0
    - status: valid
    - output: 10.15625
  - Item:
    - input:
      - shared: 2
      - horizontal: 0.25
      - residual: 0.5
    - status: valid
    - output: 11.03125
  - Item:
    - input:
      - shared: 2
      - horizontal: 0.25
      - residual: 2
    - status: valid
    - output: 24.15625
  - Item:
    - input:
      - shared: 2
      - horizontal: 1
      - residual: 0
    - status: valid
    - output: 12.5
  - Item:
    - input:
      - shared: 2
      - horizontal: 1
      - residual: 0.5
    - status: valid
    - output: 13.375
  - Item:
    - input:
      - shared: 2
      - horizontal: 1
      - residual: 2
    - status: valid
    - output: 26.5
  - Item:
    - input:
      - shared: 2
      - horizontal: 2
      - residual: 0
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - shared: 2
      - horizontal: 2
      - residual: 0.5
    - status: valid
    - output: 20.875
  - Item:
    - input:
      - shared: 2
      - horizontal: 2
      - residual: 2
    - status: valid
    - output: 34.0
  - Item:
    - input:
      - shared: 0
      - horizontal: 1
      - residual: 0.8451542547285166
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - shared: -3
      - horizontal: 1
      - residual: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 3
      - horizontal: 1
      - residual: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - shared: true
      - horizontal: 1
      - residual: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 0
      - residual: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 3
      - residual: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: -1
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: 3
    - status: invalid_parameters
  - Item:
    - input:
      - shared: 0.75
      - horizontal: 1
      - residual: 1
    - status: invalid_parameters
- compute: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
- numeric tolerance: 5e-11
- invariants:
  - Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.
  - Story, calculation, Geometry and Graph use the same declared model values.
  - Rank order, omitted zeros and finite tail counts remain discrete where their definitions change.
- limits:
  - This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - renderer_version
  - parameters
  - result_status
  - result
  - note

## Prompts

- Item:
  - prompt: How do horizontal and vertical positioning errors vary together?
  - answer: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.
- Item:
  - prompt: What is fixed in this comparison?
  - answer: Five paired errors use equal millimetre axes and the sample divisor n−1=4. The horizontal and vertical sample mean are both zero.

## Representations

- Item:
  - kind: geometry
  - description: Actual paired errors and a descriptive covariance ellipse share fixed equal millimetre axes; the covariance matrix cells, eigenvalue radii and matrix rank name those same quantities.
- Item:
  - kind: graph
  - description: Total coordinate variance versus the shared vertical coefficient, using the same fixed 0–35 squared-millimetre range for comparisons.
- Item:
  - kind: substitution
  - description: Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A laser jig makes five constructed two-axis positioning errors. Horizontal errors follow a times the pattern −2, −1, 0, 1, 2. Vertical errors combine b times that same pattern with c times the residual pattern 1, −2, 2, −2, 1. Both coordinate means are zero millimetres. Change the shared coefficient b to tilt the cloud, a to widen it horizontally, or c to add the orthogonal residual pattern.
  - limitations: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - evidence kind: constructed_example
  - example ref: math:example:covariance-matrix:case-1
- Item:
  - context: Mirror the shared error direction
  - mapping: Changing the sign of b reverses the off-diagonal covariance and mirrors the tilt. Trace and determinant are unchanged because they depend on squared coefficients.
  - limitations: This describes the five constructed error pairs. The ellipse has no stated confidence or probability coverage; circular spread has no unique orientation.
  - evidence kind: constructed_example
  - example ref: math:example:covariance-matrix:case-2

## Source Refs

- source:comparison-extensions:covariance-matrix

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded joint-spread or exact rank-comparison lesson through the existing modular host.

## Referenced source registry

- Source ID: source:comparison-extensions:covariance-matrix. [NIST/SEMATECH · Mean Vector and Covariance Matrix](https://www.itl.nist.gov/div898/handbook/pmc/section5/pmc541.htm). Locator: §6.5.4.1: diagonal sample variances, off-diagonal sample covariances and the n−1 centered-product matrix. The five two-axis error pairs, eigenvalue calculations and descriptive one-standard-deviation ellipse are original derivations here; no normal confidence coverage is attributed to the shape.. Verification: Definition-level primary source inspected 2026-11-03. Independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original laser-position scenario, patterns, prose, derivations and SVG; no source example, data or illustration reproduced.
