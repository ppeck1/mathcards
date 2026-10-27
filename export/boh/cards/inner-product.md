---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:inner-product", "id": "math:concept:inner-product", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:inner-product", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.1-draft", "upstream_content_sha256": "45117d44ea92003034cdfc68107859375ffa91f15957efe776fbc07f8a7db4fb"}, "purpose": "Measure how real vectors align and follow the scalar into a signed projection.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "45117d44ea92003034cdfc68107859375ffa91f15957efe776fbc07f8a7db4fb", "status": "draft", "title": "Dot product", "topics": ["mathematics", "linear-algebra", "geometry", "Euclidean inner product", "scalar product", "projection"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Dot product

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:inner-product; revision 0.1.1-draft. Setting: Finite real two-dimensional Euclidean coordinates. Expression: $u\cdot v=u_xv_x+u_yv_y,\quad\operatorname{proj}_u(v)=\frac{u\cdot v}{u\cdot u}u\ (u\ne0).$. Conditions required for a defined value (a case may test their violation): Use corresponding real Euclidean components in the same axis order. The dot product is a scalar and may be positive, zero or negative. Projection onto u needs nonzero u; an angle needs both vectors nonzero. Scope: Only the standard real dot product for four components in [-4,4] is executable. Zero vectors keep the dot product defined while auxiliary projections/angles can be null. Physical examples require compatible component/product units.

## Schema Version

0.1.0

## Id

math:concept:inner-product

## Slug

inner-product

## Type

concept

## Title

Dot product

## Revision

0.1.1-draft

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

- Euclidean inner product
- scalar product
- projection

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Measure how real vectors align and follow the scalar into a signed projection.

## Meaning

The Euclidean dot product sums products of corresponding components and returns a scalar. For nonzero vectors it relates length and angle; projection needs a nonzero reference. General inner products can use other rules or complex conjugation.

## Prerequisites

- required:
  - math:concept:vector
- helpful:
  - math:concept:pythagorean-theorem
- depth:
  - math:concept:vector-space

## Definition

- setting: Finite real two-dimensional Euclidean coordinates.
- formal latex: u\cdot v=u_xv_x+u_yv_y,\quad\operatorname{proj}_u(v)=\frac{u\cdot v}{u\cdot u}u\ (u\ne0).
- signature:
  - ux,uy: reference-vector components in [-4,4]
  - vx,vy: candidate-vector components in [-4,4]
  - output: scalar Euclidean dot product
  - projection: signed scalar projection onto u; null for u=0
  - projectionX,projectionY: components of the projection vector v onto u; null for u=0
  - angleDegrees: angle when both vectors are nonzero; null otherwise
- conditions:
  - Use corresponding real Euclidean components in the same axis order.
  - The dot product is a scalar and may be positive, zero or negative.
  - Projection onto u needs nonzero u; an angle needs both vectors nonzero.
- domain notes: Only the standard real dot product for four components in [-4,4] is executable. Zero vectors keep the dot product defined while auxiliary projections/angles can be null. Physical examples require compatible component/product units.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:openstax:dot-product

## Grammar

- pronunciation: Dot product in real two-dimensional coordinates
- expression latex: u\cdot v=u_xv_x+u_yv_y,\quad\operatorname{proj}_u(v)=\frac{u\cdot v}{u\cdot u}u\ (u\ne0).
- formation rule: output=dot=ux*vx+uy*vy; uNorm=hypot(ux,uy); vNorm=hypot(vx,vy); projection=dot/uNorm and projectionFactor=dot/uNorm² when uNorm>0, otherwise null; projectionX=projectionFactor*ux; projectionY=projectionFactor*uy; both projection components are null when uNorm=0; angle requires both norms positive.
- precedence: Multiply corresponding entries before adding or subtracting. Ordered coordinates and matrix entries retain their stated positions.
- symbols:
  - Item:
    - token: ux
    - role: corresponding real vector component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: uy
    - role: corresponding real vector component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: vx
    - role: corresponding real vector component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: vy
    - role: corresponding real vector component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: u·v
    - role: scalar dot product
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: projᵤ(v)
    - role: vector projection of v onto nonzero u
    - type: Two-dimensional vector with components projectionX and projectionY; not the signed scalar projection
- ast:
  - id: ast:inner-product:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:ux
      - kind: variable
      - symbol: ux
      - type: Finite real control
      - scope ref: scope:inner-product:model
    - Item:
      - id: n:uy
      - kind: variable
      - symbol: uy
      - type: Finite real control
      - scope ref: scope:inner-product:model
    - Item:
      - id: n:vx
      - kind: variable
      - symbol: vx
      - type: Finite real control
      - scope ref: scope:inner-product:model
    - Item:
      - id: n:vy
      - kind: variable
      - symbol: vy
      - type: Finite real control
      - scope ref: scope:inner-product:model
    - Item:
      - id: n:first
      - kind: multiply
      - arguments:
        - n:ux
        - n:vx
      - type: Real scalar
    - Item:
      - id: n:second
      - kind: multiply
      - arguments:
        - n:uy
        - n:vy
      - type: Real scalar
    - Item:
      - id: n:output
      - kind: add
      - arguments:
        - n:first
        - n:second
      - type: Real scalar
  - scopes:
    - Item:
      - id: scope:inner-product:model
      - kind: modelExpression
      - free variables:
        - ux
        - uy
        - vx
        - vy
      - domain condition: output=dot=ux*vx+uy*vy; uNorm=hypot(ux,uy); vNorm=hypot(vx,vy); projection=dot/uNorm and projectionFactor=dot/uNorm² when uNorm>0, otherwise null; projectionX=projectionFactor*ux; projectionY=projectionFactor*uy; both projection components are null when uNorm=0; angle requires both norms positive.
- parse errors:
  - Item:
    - input: Read u dot v as another vector
    - status: type_error
    - reason: The real Euclidean dot product produces one scalar.
  - Item:
    - input: Project onto u=(0,0)
    - status: undefined_direction
    - reason: A zero reference has no direction; the projection formula would divide by zero.
  - Item:
    - input: Infer a right angle from u dot v=0 without checking the vectors
    - status: missing_condition
    - reason: Perpendicular-angle reasoning requires both vectors to be nonzero.
- ast coverage: The tree multiplies corresponding real components and adds the two contributions into one scalar. Projection and angle calculations are separately named auxiliary outputs, with their own nonzero-direction conditions. This metadata is not a general parser or proof.
- output symbol bindings:
  - u·v: output
  - projᵤ(v):
    - projectionX
    - projectionY

## Properties

- Item:
  - claim: u·u=||u||².
  - conditions: Standard real Euclidean dot product.
  - derivation: ux*ux+uy*uy is the squared norm.
  - status: author-derived for stated conditions; independent review pending
- Item:
  - claim: Nonzero vectors are perpendicular exactly when their dot product is zero.
  - conditions: Both vectors nonzero in Euclidean geometry.
  - derivation: u·v=||u||||v||cos(theta), so zero is equivalent to cos(theta)=0.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:inner-product:right-angle

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
  - conditions: Use the same real Euclidean axes.
  - reason: The dot product combines vector components into a scalar.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Dimensions must agree.
  - reason: Each matrix-vector output coordinate is a row dotted with the input.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Perpendicular equal-scale axes.
  - reason: Dotting a vector with itself gives its squared length.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:inner-product:features
  - title: Which profile aligns with the reference?
  - role: applied_model
  - question: For dimensionless profiles u=(3,0) and v=(2,2), what is the dot-product score?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
  - inputs:
    - ux: 3
    - uy: 0
    - vx: 2
    - vy: 2
  - steps:
    - Item:
      - index: 1
      - expression: u·v=3*2+0*2=6
      - reason: Multiply corresponding components before adding.
    - Item:
      - index: 2
      - expression: scalar projection of v onto u=6/3=2
      - reason: Divide by the nonzero reference norm.
  - result:
    - exact: Dot product 6; scalar projection 2
  - interpretation: The sideways component contributes no alignment along u. The score is not a probability.
  - independent check:
    - method: Geometric check
    - expected: The candidate has horizontal projection 2; multiplying by reference magnitude 3 gives 6.
  - limits: A constructed illustrative score, not an empirically validated similarity system.
  - preset:
    - ux: 3
    - uy: 0
    - vx: 2
    - vy: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
- Item:
  - id: math:example:inner-product:right-angle
  - title: A perpendicular nudge has no forward part
  - role: applied_model
  - question: For u=(3,0) and v=(0,2), what is the dot product?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
  - inputs:
    - ux: 3
    - uy: 0
    - vx: 0
    - vy: 2
  - steps:
    - Item:
      - index: 1
      - expression: u·v=3*0+0*2=0
      - reason: Both corresponding-component products vanish.
    - Item:
      - index: 2
      - expression: projection of v onto u=(0,0)
      - reason: The candidate is perpendicular to the nonzero reference.
  - result:
    - exact: 0
  - interpretation: Two nonzero vectors with zero Euclidean dot product are perpendicular.
  - independent check:
    - method: Axis check
    - expected: One arrow is horizontal and the other vertical in the orthonormal frame.
  - limits: An angle is not defined if either vector is zero.
  - preset:
    - ux: 3
    - uy: 0
    - vx: 0
    - vy: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
- Item:
  - id: math:example:inner-product:opposed
  - title: An opposing command gives a negative score
  - role: applied_model
  - question: For u=(3,0) and v=(-2,0), what is the alignment?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
  - inputs:
    - ux: 3
    - uy: 0
    - vx: -2
    - vy: 0
  - steps:
    - Item:
      - index: 1
      - expression: u·v=3*(-2)+0*0=-6
      - reason: Opposing component signs give a negative contribution.
    - Item:
      - index: 2
      - expression: scalar projection=-6/3=-2
      - reason: The projection is opposite the reference direction.
  - result:
    - exact: -6
  - interpretation: The vectors point in opposite directions; their angle is 180 degrees.
  - independent check:
    - method: Norm-angle check
    - expected: 3*2*cos(180 degrees)=-6.
  - limits: A negative score is neither negative length nor negative probability.
  - preset:
    - ux: 3
    - uy: 0
    - vx: -2
    - vy: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
- Item:
  - id: math:example:inner-product:work
  - title: Matching force and displacement components
  - role: applied_model
  - question: A constant force u=(3,1) N acts through v=(2,1) m. How much work is done?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
  - inputs:
    - ux: 3
    - uy: 1
    - vx: 2
    - vy: 1
  - steps:
    - Item:
      - index: 1
      - expression: W=u·v=3*2+1*1
      - reason: Multiply each force component by the matching displacement.
    - Item:
      - index: 2
      - expression: W=7 N m=7 J
      - reason: Add the two work contributions with their product units.
  - result:
    - exact: 7 J
  - interpretation: The two axes contribute 6 J and 1 J. Force-arrow and displacement-arrow lengths do not share one physical unit.
  - independent check:
    - method: Component work check
    - expected: Horizontal work is 3 N times 2 m; vertical work is 1 N times 1 m, totaling 7 J.
  - limits: The force is constant. Variable force needs an appropriate integral; the generic scene uses abstract component scales.
  - preset:
    - ux: 3
    - uy: 1
    - vx: 2
    - vy: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
- Item:
  - id: math:example:inner-product:zero-reference
  - title: A zero reference keeps the scalar defined
  - role: applied_model
  - question: For u=(0,0) and v=(2,2), what is defined?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.
  - inputs:
    - ux: 0
    - uy: 0
    - vx: 2
    - vy: 2
  - steps:
    - Item:
      - index: 1
      - expression: u·v=0*2+0*2=0
      - reason: The dot sum uses no division.
    - Item:
      - index: 2
      - expression: projection direction and angle undefined
      - reason: The reference norm and squared norm are zero.
  - result:
    - exact: Dot product 0; projection and angle undefined
  - interpretation: A zero reference cannot select a direction for projection.
  - independent check:
    - method: Domain check
    - expected: The dot sum is defined, but projection would divide by zero.
  - limits: A zero vector is valid; it cannot supply a projection direction.
  - preset:
    - ux: 0
    - uy: 0
    - vx: 2
    - vy: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The standard real Euclidean dot product is used in two dimensions.
    - Corresponding components share consistent axes; each product carries its declared product unit.
    - Projection is of v onto u; its formula requires u to be nonzero.

## Interactive

- component id: inner-product-visual-model
- renderer id: inner-product-visual-model
- renderer version: 1.0.0
- model id: inner-product-visual-model
- model revision: 1
- expression id: ast:inner-product:expression
- interaction status: implemented
- description: Two arrows show the projection of v onto u, while signed component products lead to one scalar. The Graph varies one component and fixes the others.
- controls:
  - Item:
    - id: ux
    - type: number
    - default: 3
    - min: -4
    - max: 4
    - slider min: -4
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: uy
    - type: number
    - default: 0
    - min: -4
    - max: 4
    - slider min: -4
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: vx
    - type: number
    - default: 2
    - min: -4
    - max: 4
    - slider min: -4
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: vy
    - type: number
    - default: 2
    - min: -4
    - max: 4
    - slider min: -4
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
- expected cases:
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: 2
      - vy: 2
    - output: 6
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: 2
      - vy: 0
    - output: 6
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: 0
      - vy: 2
    - output: 0
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: -2
      - vy: 0
    - output: -6
  - Item:
    - input:
      - ux: 0
      - uy: 0
      - vx: 2
      - vy: 2
    - output: 0
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: 0
      - vy: 0
    - output: 0
  - Item:
    - input:
      - ux: -4
      - uy: 4
      - vx: 4
      - vy: 4
    - output: 0
  - Item:
    - input:
      - ux: 1.5
      - uy: -0.5
      - vx: 2
      - vy: 3
    - output: 1.5
  - Item:
    - input:
      - ux: 4.1
      - uy: 0
      - vx: 2
      - vy: 2
    - status: invalid_parameters
  - Item:
    - input:
      - ux: 3
      - uy: 0
      - vx: 2
      - vy: -4.1
    - status: invalid_parameters
- compute: output=dot=ux*vx+uy*vy; uNorm=hypot(ux,uy); vNorm=hypot(vx,vy); projection=dot/uNorm and projectionFactor=dot/uNorm² when uNorm>0, otherwise null; projectionX=projectionFactor*ux; projectionY=projectionFactor*uy; both projection components are null when uNorm=0; angle requires both norms positive.
- numeric tolerance: 1e-10
- invariants:
  - Use corresponding real Euclidean components in the same axis order.
  - The dot product is a scalar and may be positive, zero or negative.
  - Projection onto u needs nonzero u; an angle needs both vectors nonzero.
- limits:
  - Only the standard real Euclidean dot product in two dimensions is implemented.
  - Zero vectors keep the dot product defined but can make angles/projections undefined.
  - A dot score is not normalized similarity or probability without further conditions.
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
  - prompt: Does a zero dot product always define a right angle?
  - answer: Only if both vectors are nonzero. A zero vector has no angle.
- Item:
  - prompt: Which vector is projected in proj_u(v)?
  - answer: v is projected onto the direction chosen by nonzero u.

## Representations

- Item:
  - kind: geometry
  - description: Two arrows show the projection of v onto u, while signed component products lead to one scalar. The Graph varies one component and fixes the others.
- Item:
  - kind: graph
  - description: A numeric slice of the primary output as one declared input varies; the other controls stay fixed.
- Item:
  - kind: substitution
  - description: The same current values appear in the substituted calculation and in the scene.

## Applications

- Item:
  - context: Feature-profile alignment
  - mapping: Corresponding dimensionless components contribute signed products to a score.
  - limitations: Not a probability or validated similarity metric.
  - evidence kind: constructed_example
  - example ref: math:example:inner-product:features
- Item:
  - context: Constant-force work
  - mapping: Force components in newtons multiply displacement components in metres; their sum is joules.
  - limitations: Constant force only; vector glyphs with different units do not share a physical length scale.
  - evidence kind: constructed_example
  - example ref: math:example:inner-product:work

## Source Refs

- source:openstax:dot-product

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded two-dimensional fixtures, distinct Geometry/Graph views and linked modular story.

## Referenced source registry

- Source ID: source:openstax:dot-product. [Calculus Volume 3, 2.3 The Dot Product](https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product). Locator: Real dot product; angle of nonzero vectors; scalar/vector projection; constant-force work. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
