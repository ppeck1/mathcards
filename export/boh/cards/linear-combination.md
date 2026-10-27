---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:linear-combination", "id": "math:concept:linear-combination", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-combination", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3c79aa673327310b25ea05763896cb3f48bf3270e5223bee391b2efd868c8e3b"}, "purpose": "Build a new displacement from weighted copies of two vectors.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3c79aa673327310b25ea05763896cb3f48bf3270e5223bee391b2efd868c8e3b", "status": "draft", "title": "Linear combinations", "topics": ["mathematics", "linear-algebra", "geometry", "weighted vector sum", "vector combination", "span of two vectors"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Linear combinations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:linear-combination; revision 0.1.0-draft. Setting: Real vector spaces with an explicit two-dimensional coordinate model. Expression: $w=ru+sv=(ru_x+sv_x,\;ru_y+sv_y),\quad r,s\in\mathbb{R}.$. Conditions required for a defined value (a case may test their violation): Vectors have the same coordinate dimension and compatible physical units; coefficients r and s are real, dimensionless scalars. Scale both components of each vector, then add corresponding components. The zero vector, zero coefficients and dependent vectors are valid inputs; no independence assumption is needed to form a linear combination. The formal span uses all real coefficients. Bounded sliders display only part of that span. Scope: The formal definition extends to finite sums of vectors in any real vector space. The live model combines exactly two real plane vectors, each component in [-3,3], with coefficients in [-2,2]. This bounded coefficient region is not the entire span and is not a vector space. Negative coefficients reverse directions. Physical vector components must use compatible units; the shared model itself uses abstract coordinates. No target-solving or arbitrary number of vectors is implemented.

## Schema Version

0.1.0

## Id

math:concept:linear-combination

## Slug

linear-combination

## Type

concept

## Title

Linear combinations

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. All stories and worked quantities are original constructed teaching scenarios, not measurements or historical events. Historical priority and notation claims require separate claim-level evidence before publication.

## Aliases

- weighted vector sum
- vector combination
- span of two vectors

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Build a new displacement from weighted copies of two vectors.

## Meaning

A linear combination scales vectors by real coefficients and adds them. Two independent plane directions span the whole plane when coefficients range over all real numbers; parallel or zero directions span less. The displayed coefficient box is only a finite part of that general construction.

## Prerequisites

- required:
  - math:concept:vector
- helpful:
  - math:concept:matrix-linear-map
- depth:
  - math:concept:basis

## Definition

- setting: Real vector spaces with an explicit two-dimensional coordinate model.
- formal latex: w=ru+sv=(ru_x+sv_x,\;ru_y+sv_y),\quad r,s\in\mathbb{R}.
- signature:
  - ux,uy,vx,vy: Real vector components in [-3,3] on the same axes.
  - r,s: Dimensionless real coefficients in [-2,2] in the UI; unrestricted real coefficients in the formal span.
  - combinedX,combinedY: Components of the resulting vector w; combinedX is the primary numeric Graph output.
  - norm: Nonnegative Euclidean length of w.
  - determinant: u_x*v_y-u_y*v_x; nonzero means the pair spans the plane.
- conditions:
  - Vectors have the same coordinate dimension and compatible physical units; coefficients r and s are real, dimensionless scalars.
  - Scale both components of each vector, then add corresponding components.
  - The zero vector, zero coefficients and dependent vectors are valid inputs; no independence assumption is needed to form a linear combination.
  - The formal span uses all real coefficients. Bounded sliders display only part of that span.
- domain notes: The formal definition extends to finite sums of vectors in any real vector space. The live model combines exactly two real plane vectors, each component in [-3,3], with coefficients in [-2,2]. This bounded coefficient region is not the entire span and is not a vector space. Negative coefficients reverse directions. Physical vector components must use compatible units; the shared model itself uses abstract coordinates. No target-solving or arbitrary number of vectors is implemented.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:gatech:spans
  - source:openstax:vectors-plane

## Grammar

- pronunciation: Linear combinations
- expression latex: w=ru+sv=(ru_x+sv_x,\;ru_y+sv_y),\quad r,s\in\mathbb{R}.
- formation rule: output=combinedX=r*ux+s*vx; combinedY=r*uy+s*vy; firstX=r*ux; firstY=r*uy; secondX=s*vx; secondY=s*vy; norm=hypot(combinedX,combinedY); determinant=ux*vy-uy*vx.
- precedence: Scale components before adding. Matrix products act on column vectors from right to left; an ordered pair retains its stated coordinate order.
- symbols:
  - Item:
    - token: ux
    - role: Signed component of one input vector
    - type: Real scalar component
  - Item:
    - token: uy
    - role: Signed component of one input vector
    - type: Real scalar component
  - Item:
    - token: vx
    - role: Signed component of one input vector
    - type: Real scalar component
  - Item:
    - token: vy
    - role: Signed component of one input vector
    - type: Real scalar component
  - Item:
    - token: r
    - role: Weight of u
    - type: Dimensionless real scalar
  - Item:
    - token: s
    - role: Weight of v
    - type: Dimensionless real scalar
  - Item:
    - token: wₓ
    - role: Horizontal component of r*u+s*v
    - type: Derived real scalar
  - Item:
    - token: wᵧ
    - role: Vertical component of r*u+s*v
    - type: Derived real scalar
- ast:
  - id: ast:linear-combination:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:ux
      - kind: variable
      - symbol: ux
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:uy
      - kind: variable
      - symbol: uy
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:vx
      - kind: variable
      - symbol: vx
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:vy
      - kind: variable
      - symbol: vy
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:r
      - kind: variable
      - symbol: r
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:s
      - kind: variable
      - symbol: s
      - type: Finite real control
      - scope ref: scope:linear-combination:expression
    - Item:
      - id: n:firstX
      - kind: multiply
      - arguments:
        - n:r
        - n:ux
      - type: Real scalar
    - Item:
      - id: n:secondX
      - kind: multiply
      - arguments:
        - n:s
        - n:vx
      - type: Real scalar
    - Item:
      - id: n:firstY
      - kind: multiply
      - arguments:
        - n:r
        - n:uy
      - type: Real scalar
    - Item:
      - id: n:secondY
      - kind: multiply
      - arguments:
        - n:s
        - n:vy
      - type: Real scalar
    - Item:
      - id: n:combinedX
      - kind: add
      - arguments:
        - n:firstX
        - n:secondX
      - type: Real scalar
    - Item:
      - id: n:combinedY
      - kind: add
      - arguments:
        - n:firstY
        - n:secondY
      - type: Real scalar
    - Item:
      - id: n:pair
      - kind: functionRef
      - ref: Construct an ordered pair by supplying its first coordinate, then its second coordinate
      - type: Real to (real to ordered real pair)
    - Item:
      - id: n:first
      - kind: apply
      - function: n:pair
      - argument: n:combinedX
      - type: Real to ordered real pair
    - Item:
      - id: n:output
      - kind: apply
      - function: n:first
      - argument: n:combinedY
      - type: Ordered real pair; primary scalar readout is its first coordinate
  - scopes:
    - Item:
      - id: scope:linear-combination:expression
      - kind: modelExpression
      - free variables:
        - ux
        - uy
        - vx
        - vy
        - r
        - s
      - domain condition: All controls satisfy their declared finite bounds; dependent or zero vectors remain allowed.
- parse errors:
  - Item:
    - input: Add vectors with different dimensions or incompatible physical units
    - status: type_error
    - reason: Corresponding components must refer to compatible quantities in the same coordinate space.
  - Item:
    - input: Force r+s=1 as part of every linear combination
    - status: unnecessary_condition
    - reason: A general linear combination permits arbitrary real coefficients; affine/convex combinations add constraints.
  - Item:
    - input: Treat the slider box as the full span
    - status: scope_error
    - reason: The span uses all real coefficient values, not only the displayed finite range.
- ast coverage: Both component sums and the full ordered vector appear in the AST. The primary scalar fixtures/Graph track combinedX, while scene and readouts retain combinedY. The span statement quantifies over all real coefficients; it is not a claim that a finite slider box is the whole span.
- output symbol bindings:
  - wₓ: combinedX
  - wᵧ: combinedY

## Properties

- Item:
  - claim: Zero coefficients always give the zero vector.
  - conditions: Both coefficients are zero.
  - derivation: Each component is 0*u_component+0*v_component=0.
  - status: author-derived for stated conditions; independent review pending
- Item:
  - claim: If v=2u, every combination is (r+2s)u and the pair cannot span the whole plane.
  - conditions: Two plane vectors with v=2u.
  - derivation: Factor r*u+s*(2*u)=(r+2*s)*u; all results stay in the one-dimensional span of u unless u is zero.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:linear-combination:parallel

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Vectors share a coordinate system and units.
  - reason: Scaling and adding vector components constructs another vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Use u and v as the two columns and (r,s) as the input.
  - reason: A matrix-vector product is a linear combination of its columns.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:basis
  - type: supports
  - conditions: The two real plane vectors are independent.
  - reason: A basis supplies unique coefficients for every target vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:linear-combination:camera-move
  - title: Combine two camera moves
  - role: applied_model
  - question: A camera rig has move u=(2,1) m and move v=(-1,2) m. What is one copy of each?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
  - inputs:
    - ux: 2
    - uy: 1
    - vx: -1
    - vy: 2
    - r: 1
    - s: 1
  - steps:
    - Item:
      - index: 1
      - expression: 1u=(2,1); 1v=(-1,2)
      - reason: Scale both displacement components by their coefficients.
    - Item:
      - index: 2
      - expression: w=(2-1,1+2)=(1,3) m
      - reason: Add corresponding components.
  - result:
    - exact: Displacement (1,3) m; length sqrt(10) m
  - interpretation: Two moves combine into one displacement arrow; its length is not the sum of their path lengths.
  - independent check:
    - method: Endpoint construction
    - expected: Starting at (2,1), translate by (-1,2) to arrive at (1,3); the straight endpoint distance squared is 1²+3²=10.
  - limits: The path via the intermediate point has length 2sqrt(5) m, distinct from the net displacement length.
  - preset:
    - ux: 2
    - uy: 1
    - vx: -1
    - vy: 2
    - r: 1
    - s: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
- Item:
  - id: math:example:linear-combination:reverse
  - title: Reverse one stored move
  - role: applied_model
  - question: How can the rig undo u=(2,1) m while ignoring its second move?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
  - inputs:
    - ux: 2
    - uy: 1
    - vx: -1
    - vy: 2
    - r: -1
    - s: 0
  - steps:
    - Item:
      - index: 1
      - expression: (-1)u=(-2,-1); 0v=(0,0)
      - reason: A negative scalar reverses direction; zero removes a contribution.
    - Item:
      - index: 2
      - expression: w=(-2,-1) m
      - reason: The result is the opposite of u.
  - result:
    - exact: Displacement (-2,-1) m
  - interpretation: Negative coefficients have a geometric role and are not probabilities.
  - independent check:
    - method: Cancellation check
    - expected: u+w=(2,1)+(-2,-1)=(0,0), so the original displacement is undone.
  - limits: Undoing a displacement is an ideal geometric statement, not a collision-free motion plan.
  - preset:
    - ux: 2
    - uy: 1
    - vx: -1
    - vy: 2
    - r: -1
    - s: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
- Item:
  - id: math:example:linear-combination:cancellation
  - title: Two commands cancel
  - role: applied_model
  - question: The two stored moves are both (2,1) m. What does one copy minus one copy do?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
  - inputs:
    - ux: 2
    - uy: 1
    - vx: 2
    - vy: 1
    - r: 1
    - s: -1
  - steps:
    - Item:
      - index: 1
      - expression: w=1(2,1)-1(2,1)
      - reason: Both command vectors are identical.
    - Item:
      - index: 2
      - expression: w=(0,0) m
      - reason: Opposite coefficients cancel equal contributions.
  - result:
    - exact: Zero displacement, with length 0 m and no direction angle
  - interpretation: A nontrivial choice of coefficients can give zero when the vectors are dependent.
  - independent check:
    - method: Homogeneous relation
    - expected: The nonzero coefficient pair (1,-1) satisfies r*u+s*v=0; the rig ends where it began.
  - limits: A zero net displacement does not imply the rig never moved.
  - preset:
    - ux: 2
    - uy: 1
    - vx: 2
    - vy: 1
    - r: 1
    - s: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
- Item:
  - id: math:example:linear-combination:fractional-blend
  - title: Blend partial and repeated moves
  - role: applied_model
  - question: Use u=(2,0) m and v=(0,2) m. Where do half of u and one-and-a-half of v end?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
  - inputs:
    - ux: 2
    - uy: 0
    - vx: 0
    - vy: 2
    - r: 0.5
    - s: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: 0.5u=(1,0); 1.5v=(0,3)
      - reason: Real coefficients scale the two stored moves.
    - Item:
      - index: 2
      - expression: w=(1,3) m
      - reason: Add the two scaled moves.
  - result:
    - exact: Displacement (1,3) m
  - interpretation: The weights sum to 2; an unrestricted linear combination need not be a weighted average.
  - independent check:
    - method: Axis check
    - expected: The independent horizontal and vertical contributions are 1 m and 3 m, so the endpoint is (1,3).
  - limits: This is not restricted to nonnegative weights summing to one, and does not model exposure blending or probabilities.
  - preset:
    - ux: 2
    - uy: 0
    - vx: 0
    - vy: 2
    - r: 0.5
    - s: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
- Item:
  - id: math:example:linear-combination:parallel
  - title: Parallel commands cannot reach every point
  - role: applied_model
  - question: With u=(1,1) m and v=(2,2) m, what do r=1 and s=0.5 produce, and can any real weights reach (2,1) m?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.
  - inputs:
    - ux: 1
    - uy: 1
    - vx: 2
    - vy: 2
    - r: 1
    - s: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: w=(r+2s,r+2s)
      - reason: Both commands lie on the same line.
    - Item:
      - index: 2
      - expression: r=1,s=0.5 gives w=(2,2) m
      - reason: The current combination lies on y=x.
    - Item:
      - index: 3
      - expression: (2,1) has unequal coordinates
      - reason: No real coefficient pair can reach that off-line target.
  - result:
    - exact: Current displacement (2,2) m; target (2,1) m lies outside the span
  - interpretation: The full span is a line, even though both weights can vary.
  - independent check:
    - method: Coordinate invariant
    - expected: Every combination has w_y-w_x=0; the proposed target has 1-2=-1, so it cannot be a combination.
  - limits: The live sliders show only a bounded portion of the line; this does not alter the full real-coefficient span.
  - preset:
    - ux: 1
    - uy: 1
    - vx: 2
    - vy: 2
    - r: 1
    - s: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The vectors are displacements on one fixed coordinate grid; one grid unit represents one metre.
    - The two coefficients are dimensionless multipliers and may be negative or zero.
    - Displacements add ideally; obstacles, travel time and a routed path length are not modeled.

## Interactive

- component id: linear-combination-visual-model
- renderer id: linear-combination-visual-model
- renderer version: 1.0.0
- model id: linear-combination-visual-model
- model revision: 1
- expression id: ast:linear-combination:expression
- interaction status: implemented
- description: Scale two input arrows, add them head-to-tail and show both components of the resulting vector. The Graph varies coefficient r with every other setting fixed.
- controls:
  - Item:
    - id: ux
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: uy
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: vx
    - type: number
    - default: -1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: vy
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: r
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: s
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
- expected cases:
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: -1
      - vy: 2
      - r: 1
      - s: 1
    - output: 1
  - Item:
    - input:
      - ux: 1
      - uy: 0
      - vx: 0
      - vy: 1
      - r: 2
      - s: -2
    - output: 2
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: -1
      - vy: 2
      - r: -1
      - s: 0
    - output: -2
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: 2
      - vy: 1
      - r: 1
      - s: -1
    - output: 0
  - Item:
    - input:
      - ux: 2
      - uy: 0
      - vx: 0
      - vy: 2
      - r: 0.5
      - s: 1.5
    - output: 1.0
  - Item:
    - input:
      - ux: 1
      - uy: 1
      - vx: 2
      - vy: 2
      - r: 1
      - s: 0.5
    - output: 2.0
  - Item:
    - input:
      - ux: 0
      - uy: 0
      - vx: 0
      - vy: 0
      - r: 2
      - s: -2
    - output: 0
  - Item:
    - input:
      - ux: 3
      - uy: -3
      - vx: -3
      - vy: 3
      - r: 2
      - s: -2
    - output: 12
  - Item:
    - input:
      - ux: 1
      - uy: -2
      - vx: 2
      - vy: 1
      - r: -0.5
      - s: 0.25
    - output: 0.0
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: -1
      - vy: 2
      - r: 0
      - s: 0
    - output: 0
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: -1
      - vy: 2
      - r: 2.1
      - s: 1
    - status: invalid_parameters
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - vx: -1
      - vy: 3.1
      - r: 1
      - s: 1
    - status: invalid_parameters
- compute: output=combinedX=r*ux+s*vx; combinedY=r*uy+s*vy; firstX=r*ux; firstY=r*uy; secondX=s*vx; secondY=s*vy; norm=hypot(combinedX,combinedY); determinant=ux*vy-uy*vx.
- numeric tolerance: 1e-10
- invariants:
  - Vectors have the same coordinate dimension and compatible physical units; coefficients r and s are real, dimensionless scalars.
  - Scale both components of each vector, then add corresponding components.
  - The zero vector, zero coefficients and dependent vectors are valid inputs; no independence assumption is needed to form a linear combination.
  - The formal span uses all real coefficients. Bounded sliders display only part of that span.
- limits:
  - Exactly two real plane vectors; bounded components and weights.
  - The formal span allows every real coefficient, beyond the displayed box.
  - combinedX is the primary scalar output; the full vector is (combinedX,combinedY).
- fallback: Pause and read the labeled scene, current values, evaluated samples and original worked steps. A distinct Graph view remains available.
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
  - prompt: Must the weights add to one?
  - answer: No. That extra condition describes an affine combination; nonnegative weights adding to one describe a convex combination.
- Item:
  - prompt: Do parallel vectors make the calculation undefined?
  - answer: No. The sum remains defined, but its full span is at most a line.

## Representations

- Item:
  - kind: geometry
  - description: Scale two input arrows, add them head-to-tail and show both components of the resulting vector. The Graph varies coefficient r with every other setting fixed.
- Item:
  - kind: graph
  - description: A numeric slice of the declared primary scalar output as one input varies; all other controls stay fixed. Missing unique results remain gaps, not zero values.
- Item:
  - kind: substitution
  - description: Current controls, intermediate calculations and labeled scene quantities follow one evaluated model.

## Applications

- Item:
  - context: Camera movement
  - mapping: Two declared displacement commands add to one net displacement.
  - limitations: Ideal compatible displacement units, without obstacles or time.
  - evidence kind: constructed_example
  - example ref: math:example:linear-combination:camera-move
- Item:
  - context: Restricted motion directions
  - mapping: Parallel commands keep every result on one line and cannot reach an off-line target.
  - limitations: The full-span claim uses all real coefficients; sliders remain bounded.
  - evidence kind: constructed_example
  - example ref: math:example:linear-combination:parallel

## Source Refs

- source:gatech:spans
- source:openstax:vectors-plane

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded real two-dimensional fixtures, distinct Geometry/Graph views and a linked modular story.

## Referenced source registry

- Source ID: source:openstax:vectors-plane. [Calculus Volume 3, 2.1 Vectors in the Plane](https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane). Locator: Plane components, Euclidean magnitude, scalar multiplication and the zero vector. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:gatech:spans. [Georgia Tech Interactive Linear Algebra, 2.2 Vector Equations and Spans](https://textbooks.math.gatech.edu/ila/spans.html). Locator: Subsection 2.2.1 Vector Equations; Subsection 2.2.2 Spans, the span definition and geometric span descriptions. Verification: Definition-level mathematics inspected 2026-10-26 on the official university textbook page. Supports definitions and conditions, not historical priority, independent review or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
