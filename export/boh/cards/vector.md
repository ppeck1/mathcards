---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:vector", "id": "math:concept:vector", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "dfe46bd8d5656cdaf90d9eec803434b67c4993b2ac28ca768f5b52a808b2dda1"}, "purpose": "Describe displacement with signed components and separate direction from length.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "dfe46bd8d5656cdaf90d9eec803434b67c4993b2ac28ca768f5b52a808b2dda1", "status": "draft", "title": "Vectors", "topics": ["mathematics", "linear-algebra", "geometry", "component vector", "Euclidean norm", "magnitude and direction"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Vectors

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:vector; revision 0.1.0-draft. Setting: Finite real two-dimensional Euclidean coordinates. Expression: $v=(x,y)\in\mathbb R^2,\quad\|v\|=\sqrt{x^2+y^2}.$. Conditions required for a defined value (a case may test their violation): Components share compatible units and an orthonormal frame. Norm is nonnegative and is zero exactly when both components are zero. A norm alone does not determine the vector direction. Scope: The live specimen has two real components in [-5,5] and the Euclidean norm. General vectors can belong to higher-dimensional or abstract spaces; routes and other metrics are not modeled.

## Schema Version

0.1.0

## Id

math:concept:vector

## Slug

vector

## Type

concept

## Title

Vectors

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

- component vector
- Euclidean norm
- magnitude and direction

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Describe displacement with signed components and separate direction from length.

## Meaning

A plane vector has two ordered components. Its Euclidean norm is the straight-line magnitude. Many routes can share one net vector; the zero vector has magnitude zero but no direction.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:pythagorean-theorem
- depth:
  - math:concept:vector-space

## Definition

- setting: Finite real two-dimensional Euclidean coordinates.
- formal latex: v=(x,y)\in\mathbb R^2,\quad\|v\|=\sqrt{x^2+y^2}.
- signature:
  - x: signed horizontal component in [-5,5]
  - y: signed vertical component in [-5,5]
  - output: nonnegative Euclidean norm
  - angleDegrees: atan2(y,x) in degrees for a nonzero vector; null at zero
- conditions:
  - Components share compatible units and an orthonormal frame.
  - Norm is nonnegative and is zero exactly when both components are zero.
  - A norm alone does not determine the vector direction.
- domain notes: The live specimen has two real components in [-5,5] and the Euclidean norm. General vectors can belong to higher-dimensional or abstract spaces; routes and other metrics are not modeled.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:openstax:vectors-plane

## Grammar

- pronunciation: Vectors in real two-dimensional coordinates
- expression latex: v=(x,y)\in\mathbb R^2,\quad\|v\|=\sqrt{x^2+y^2}.
- formation rule: output=norm=hypot(x,y); xSquared=x*x; ySquared=y*y; angleDegrees=null at x=y=0, otherwise atan2(y,x) in degrees.
- precedence: Multiply corresponding entries before adding or subtracting. Ordered coordinates and matrix entries retain their stated positions.
- symbols:
  - Item:
    - token: x
    - role: signed horizontal component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: y
    - role: signed vertical component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: ‖v‖
    - role: Euclidean magnitude
    - type: Declared scalar, ordered component or derived quantity
- ast:
  - id: ast:vector:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:vector:model
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:vector:model
    - Item:
      - id: n:x2
      - kind: multiply
      - arguments:
        - n:x
        - n:x
      - type: Real scalar
    - Item:
      - id: n:y2
      - kind: multiply
      - arguments:
        - n:y
        - n:y
      - type: Real scalar
    - Item:
      - id: n:sum
      - kind: add
      - arguments:
        - n:x2
        - n:y2
      - type: Real scalar
    - Item:
      - id: n:sqrt
      - kind: functionRef
      - ref: Nonnegative real square root
      - type: Nonnegative real to nonnegative real
    - Item:
      - id: n:output
      - kind: apply
      - function: n:sqrt
      - argument: n:sum
      - type: Nonnegative Euclidean norm
  - scopes:
    - Item:
      - id: scope:vector:model
      - kind: modelExpression
      - free variables:
        - x
        - y
      - domain condition: output=norm=hypot(x,y); xSquared=x*x; ySquared=y*y; angleDegrees=null at x=y=0, otherwise atan2(y,x) in degrees.
- parse errors:
  - Item:
    - input: Treat (3,4) as the scalar 3+4
    - status: type_error
    - reason: An ordered pair records two components; their sum is a different scalar.
  - Item:
    - input: Write ||(-3,-4)||=-5
    - status: sign_error
    - reason: Euclidean magnitude is nonnegative; the signs belong to the arrow components.
  - Item:
    - input: Assign the zero vector an eastward direction
    - status: undefined_direction
    - reason: A vector with zero length has no preferred direction.
- ast coverage: The tree squares the two real components, adds them, and takes the nonnegative square root. The auxiliary direction angle is a separate named output. This is structural metadata, not an arbitrary-formula parser or general proof.
- output symbol bindings:
  - ‖v‖: output
  - norm: norm

## Properties

- Item:
  - claim: Negating a vector preserves its norm.
  - conditions: Euclidean norm in the same orthonormal frame.
  - derivation: (-x)²+(-y)²=x²+y².
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:vector:return
- Item:
  - claim: For real k, ||kv||=|k| ||v||.
  - conditions: Real scalar and Euclidean norm.
  - derivation: sqrt(k²(x²+y²))=|k|sqrt(x²+y²).
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:vector:diagonal

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Orthonormal axes and compatible units.
  - reason: The Euclidean norm sums perpendicular component squares.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Standard real Euclidean dot product.
  - reason: A vector dotted with itself gives its squared norm.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Matrix and vector dimensions agree.
  - reason: A matrix maps an input vector to an output vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:vector:robot
  - title: A robot chooses the straight route
  - role: applied_model
  - question: A robot needs a net move of 3 m east and 4 m north. What is the straight-line distance?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
  - inputs:
    - x: 3
    - y: 4
  - steps:
    - Item:
      - index: 1
      - expression: v=(3,4) m
      - reason: Record both signed components.
    - Item:
      - index: 2
      - expression: ||v||=sqrt(3²+4²)=sqrt(25)=5 m
      - reason: Use perpendicular components to obtain the Euclidean norm.
  - result:
    - exact: 5 m
  - interpretation: The arrow joins start to destination. Traveling both floor edges instead would cover 7 m.
  - independent check:
    - method: Square check
    - expected: A length of 5 m has squared length 25 m², agreeing with 9+16.
  - limits: Obstacles and real robot routes are excluded from this unobstructed grid model.
  - preset:
    - x: 3
    - y: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
- Item:
  - id: math:example:vector:return
  - title: A return move keeps its length
  - role: applied_model
  - question: A cart moves 3 m west and 4 m south. What is its displacement magnitude?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
  - inputs:
    - x: -3
    - y: -4
  - steps:
    - Item:
      - index: 1
      - expression: v=(-3,-4) m
      - reason: Negative components reverse the corresponding directions.
    - Item:
      - index: 2
      - expression: ||v||=sqrt((-3)²+(-4)²)=5 m
      - reason: Component signs affect direction while the squared sum gives length.
  - result:
    - exact: 5 m
  - interpretation: The southwest arrow has the same magnitude as its reversed northeast arrow.
  - independent check:
    - method: Negation check
    - expected: The component-square sum is unchanged when both signs reverse.
  - limits: Magnitude alone cannot describe the destination or direction.
  - preset:
    - x: -3
    - y: -4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
- Item:
  - id: math:example:vector:axis
  - title: A single-axis camera move
  - role: applied_model
  - question: A drawing camera pans 5 units left with no vertical shift. How long is the move?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
  - inputs:
    - x: -5
    - y: 0
  - steps:
    - Item:
      - index: 1
      - expression: v=(-5,0)
      - reason: Zero vertical component means no vertical change.
    - Item:
      - index: 2
      - expression: ||v||=sqrt(25+0)=5
      - reason: A one-axis magnitude is the absolute nonzero component.
  - result:
    - exact: 5 coordinate units
  - interpretation: Leftward motion has a negative coordinate but not a negative length.
  - independent check:
    - method: Absolute-value check
    - expected: The nonzero component has absolute value |-5|=5.
  - limits: A coordinate scale is needed before the drawing units describe metres.
  - preset:
    - x: -5
    - y: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
- Item:
  - id: math:example:vector:diagonal
  - title: A fractional marker adjustment
  - role: applied_model
  - question: A marker moves 1.5 mm right and 2 mm up. What is its net straight adjustment?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
  - inputs:
    - x: 1.5
    - y: 2
  - steps:
    - Item:
      - index: 1
      - expression: ||v||²=1.5²+2²=6.25 mm²
      - reason: The same metric applies to fractional components.
    - Item:
      - index: 2
      - expression: ||v||=sqrt(6.25)=2.5 mm
      - reason: Take the nonnegative square root.
  - result:
    - exact: 2.5 mm
  - interpretation: Fractional components change the arrow continuously without rounding to grid steps.
  - independent check:
    - method: Scale check
    - expected: This vector is half of (3,4), so its magnitude is half of 5.
  - limits: The ideal model excludes printer resolution and mechanical tolerance.
  - preset:
    - x: 1.5
    - y: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
- Item:
  - id: math:example:vector:zero
  - title: No movement has no direction
  - role: applied_model
  - question: Both requested component moves are zero. What are the magnitude and direction?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.
  - inputs:
    - x: 0
    - y: 0
  - steps:
    - Item:
      - index: 1
      - expression: v=(0,0); ||v||=0
      - reason: Start and destination coincide.
    - Item:
      - index: 2
      - expression: direction angle undefined
      - reason: A zero-length vector has no preferred direction.
  - result:
    - exact: Magnitude 0; direction undefined
  - interpretation: Displaying an angle of zero would incorrectly choose the positive horizontal direction.
  - independent check:
    - method: Length check
    - expected: The only nonnegative length whose square is 0²+0² is zero.
  - limits: The zero vector is valid; only its direction and normalization are undefined.
  - preset:
    - x: 0
    - y: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Perpendicular equal-scale coordinate axes share the same length unit.
    - The arrow records net displacement; components are signed.
    - Straight-line magnitude is distinct from distance traveled along a route.

## Interactive

- component id: vector-visual-model
- renderer id: vector-visual-model
- renderer version: 1.0.0
- model id: vector-visual-model
- model revision: 1
- expression id: ast:vector:expression
- interaction status: implemented
- description: A component arrow follows x and y on a fixed scale; its component triangle leads to the Euclidean magnitude. The Graph follows magnitude as one component varies.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 3
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: y
    - type: number
    - default: 4
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
- expected cases:
  - Item:
    - input:
      - x: 3
      - y: 4
    - output: 5
  - Item:
    - input:
      - x: 0
      - y: 0
    - output: 0
  - Item:
    - input:
      - x: -3
      - y: -4
    - output: 5
  - Item:
    - input:
      - x: -5
      - y: 0
    - output: 5
  - Item:
    - input:
      - x: 5
      - y: 5
    - output: 7.0710678118654755
  - Item:
    - input:
      - x: 1.5
      - y: 2
    - output: 2.5
  - Item:
    - input:
      - x: 1e-08
      - y: 0
    - output: 1e-08
  - Item:
    - input:
      - x: 4
      - y: 3
    - output: 5
  - Item:
    - input:
      - x: 5.1
      - y: 4
    - status: invalid_parameters
  - Item:
    - input:
      - x: 3
      - y: -5.1
    - status: invalid_parameters
- compute: output=norm=hypot(x,y); xSquared=x*x; ySquared=y*y; angleDegrees=null at x=y=0, otherwise atan2(y,x) in degrees.
- numeric tolerance: 1e-10
- invariants:
  - Components share compatible units and an orthonormal frame.
  - Norm is nonnegative and is zero exactly when both components are zero.
  - A norm alone does not determine the vector direction.
- limits:
  - Bounded two-dimensional Euclidean vectors only.
  - Norm is not route length; stories declare units and physical assumptions.
  - The zero vector has no direction angle.
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
  - prompt: Does magnitude 5 determine one vector?
  - answer: No. Many vectors, including (3,4) and (-3,-4), have magnitude 5.
- Item:
  - prompt: Is the zero vector invalid?
  - answer: No. Its components and magnitude are valid; its direction is undefined.

## Representations

- Item:
  - kind: geometry
  - description: A component arrow follows x and y on a fixed scale; its component triangle leads to the Euclidean magnitude. The Graph follows magnitude as one component varies.
- Item:
  - kind: graph
  - description: A numeric slice of the primary output as one declared input varies; the other controls stay fixed.
- Item:
  - kind: substitution
  - description: The same current values appear in the substituted calculation and in the scene.

## Applications

- Item:
  - context: Floor-robot displacement
  - mapping: Signed east and north requests define the net arrow; its magnitude is the unobstructed straight-line length.
  - limitations: Stipulated grid; obstacles and route planning excluded.
  - evidence kind: constructed_example
  - example ref: math:example:vector:robot
- Item:
  - context: Print-marker adjustment
  - mapping: Two perpendicular millimetre components define a net adjustment.
  - limitations: Equipment tolerance is outside the ideal model.
  - evidence kind: constructed_example
  - example ref: math:example:vector:diagonal

## Source Refs

- source:openstax:vectors-plane

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded two-dimensional fixtures, distinct Geometry/Graph views and linked modular story.

## Referenced source registry

- Source ID: source:openstax:vectors-plane. [Calculus Volume 3, 2.1 Vectors in the Plane](https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane). Locator: Plane components, Euclidean magnitude, scalar multiplication and the zero vector. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
