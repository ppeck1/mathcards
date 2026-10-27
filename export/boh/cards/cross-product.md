---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:cross-product", "id": "math:concept:cross-product", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:cross-product", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d3faf20e301e82884926a0775061975bd7a07baa96dfea2d8e303cdb9fa89add"}, "purpose": "Rotate one measured edge, follow the perpendicular component into parallelogram area, and keep the normal direction separate from magnitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d3faf20e301e82884926a0775061975bd7a07baa96dfea2d8e303cdb9fa89add", "status": "draft", "title": "Cross product and oriented area", "topics": ["mathematics", "linear-algebra", "geometry", "measurement", "vector product", "oriented parallelogram area", "right-hand rule", "normal vector"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Cross product and oriented area

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:cross-product; revision 0.1.0-draft. Setting: A planar family of vectors inside a fixed right-handed orthonormal three-dimensional coordinate frame. Expression: $\mathbf u=(a,0,0),\quad\mathbf v=(b\cos\theta,b\sin\theta,0),\quad\mathbf u\times\mathbf v=(0,0,ab\sin\theta),\quad A=\lVert\mathbf u\times\mathbf v\rVert.$. Conditions required for a defined value (a case may test their violation): The reference frame is orthonormal and right-handed, with positive z directed out of the input plane. The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis. The input vectors are u=(a,0,0) and v=(b cosθ,b sinθ,0). Their cross product points only in the z direction and its signed component is a b sinθ square metres. Unoriented area A is the nonnegative magnitude |a b sinθ|. A zero product has no distinguished normal direction, including parallel inputs and a zero vector. When either length is zero, θ remains the construction's orientation parameter; it is not an angle defined by two nonzero vectors. Scope: The broader cross-product definition applies to three-dimensional vectors in an oriented Euclidean frame. This executable planar family illustrates its component formula, magnitude and orientation without being an arbitrary 3D vector editor.

## Schema Version

0.1.0

## Id

math:concept:cross-product

## Slug

cross-product

## Type

concept

## Title

Cross product and oriented area

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Workshop stories and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of a book edition or lesson.

## Aliases

- vector product
- oriented parallelogram area
- right-hand rule
- normal vector

## Branches

- linear-algebra
- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Rotate one measured edge, follow the perpendicular component into parallelogram area, and keep the normal direction separate from magnitude.

## Meaning

In an oriented Euclidean three-dimensional space, the cross product of two vectors is perpendicular to both. Its magnitude is their parallelogram area; its direction follows the chosen right-handed orientation. Reversing the order reverses the product. The executable family keeps both input vectors in the coordinate plane, so the product has only a signed z component.

## Prerequisites

- required:
  - math:concept:vector
- helpful:
  - math:concept:inner-product
  - math:concept:determinant
  - math:concept:basis
- depth:


## Definition

- setting: A planar family of vectors inside a fixed right-handed orthonormal three-dimensional coordinate frame.
- formal latex: \mathbf u=(a,0,0),\quad\mathbf v=(b\cos\theta,b\sin\theta,0),\quad\mathbf u\times\mathbf v=(0,0,ab\sin\theta),\quad A=\lVert\mathbf u\times\mathbf v\rVert.
- signature:
  - u: First directed edge.
  - v: Second directed edge.
  - θ: Signed angle from u toward v.
  - u×v: Ordered cross product.
  - w z: Signed z component of u×v.
  - |u×v|: Magnitude of the cross product.
  - v x: Horizontal component of v.
  - v y: Vertical component of v.
- conditions:
  - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
  - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - The input vectors are u=(a,0,0) and v=(b cosθ,b sinθ,0). Their cross product points only in the z direction and its signed component is a b sinθ square metres.
  - Unoriented area A is the nonnegative magnitude |a b sinθ|. A zero product has no distinguished normal direction, including parallel inputs and a zero vector. When either length is zero, θ remains the construction's orientation parameter; it is not an angle defined by two nonzero vectors.
- domain notes: The broader cross-product definition applies to three-dimensional vectors in an oriented Euclidean frame. This executable planar family illustrates its component formula, magnitude and orientation without being an arbitrary 3D vector editor.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openstax:cross-product
  - source:openstax:vectors-plane

## Grammar

- pronunciation: Cross product and oriented area
- expression latex: \mathbf u=(a,0,0),\quad\mathbf v=(b\cos\theta,b\sin\theta,0),\quad\mathbf u\times\mathbf v=(0,0,ab\sin\theta),\quad A=\lVert\mathbf u\times\mathbf v\rVert.
- formation rule: Set u=(a,0,0) and v=(b cosθ,b sinθ,0). The general component rule gives u×v=(u_yv_z−u_zv_y,u_zv_x−u_xv_z,u_xv_y−u_yv_x). In this family w_z=a b sinθ and A=|w_z|. The displayed angle is in degrees.
- precedence: Compute the components of v from the signed angle, then form the ordered cross product u×v. Take absolute value only when reading the unoriented area.
- symbols:
  - Item:
    - token: u
    - role: First directed edge
    - type: Vector in metres
  - Item:
    - token: v
    - role: Second directed edge
    - type: Vector in metres
  - Item:
    - token: θ
    - role: Signed angle from u toward v
    - type: Degrees
  - Item:
    - token: u×v
    - role: Ordered cross product
    - type: Area vector in square metres
  - Item:
    - token: w_z
    - role: Signed z component of u×v
    - type: Square metres
  - Item:
    - token: |u×v|
    - role: Magnitude of the cross product
    - type: Nonnegative square metres
  - Item:
    - token: v_x
    - role: Horizontal component of v
    - type: Metres
  - Item:
    - token: v_y
    - role: Vertical component of v
    - type: Metres
- ast:
  - id: ast:cross-product:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:uLength
      - kind: variable
      - type: Declared model input
      - symbol: uLength
      - scope ref: scope:cross-product:expression
    - Item:
      - id: n:vLength
      - kind: variable
      - type: Declared model input
      - symbol: vLength
      - scope ref: scope:cross-product:expression
    - Item:
      - id: n:angle
      - kind: variable
      - type: Declared model input
      - symbol: angle
      - scope ref: scope:cross-product:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for this explicitly bounded executable family
      - ref: Set u=(a,0,0) and v=(b cosθ,b sinθ,0). The general component rule gives u×v=(u_yv_z−u_zv_y,u_zv_x−u_xv_z,u_xv_y−u_yv_x). In this family w_z=a b sinθ and A=|w_z|. The displayed angle is in degrees.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:uLength
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:vLength
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:angle
  - scopes:
    - Item:
      - id: scope:cross-product:expression
      - kind: modelExpression
      - free variables:
        - uLength
        - vLength
        - angle
      - domain condition: A planar family of vectors inside a fixed right-handed orthonormal three-dimensional coordinate frame.
- parse errors:
  - Item:
    - input: Treat w_z as the unoriented area when θ<0
    - status: orientation error
    - reason: The signed normal component can be negative; the parallelogram area is its absolute value.
  - Item:
    - input: Swap u and v without changing the sign
    - status: order error
    - reason: v×u=−(u×v).
  - Item:
    - input: Assign a normal direction to the zero vector
    - status: degeneracy error
    - reason: A zero product has zero magnitude and no distinguished direction.
- ast coverage: A typed application outline of the stated executable rule. Bound notation in the displayed mathematical definition is explained in the signature; this outline is not a general formula parser or proof engine.
- output symbol bindings:
  - u:
    - uLength
    - uX
    - uY
  - v:
    - vLength
    - vX
    - vY
  - θ: angle
  - u×v: normalComponent
  - w z: normalComponent
  - |u×v|: area
  - v x: vX
  - v y: vY

## Properties

- Item:
  - claim: The largest area for fixed lengths occurs at a right angle.
  - conditions: Keep a,b≥0 fixed in this planar family.
  - derivation: A=ab|sinθ|≤ab, with equality atθ=±90° for nonzero lengths.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:cross-product:right-angle
- Item:
  - claim: Reversing the signed right angle reverses the normal but preserves area.
  - conditions: Use the same positive edge lengths and right-handed frame.
  - derivation: sin(−90°)=−sin90°, while absolute values agree.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:cross-product:reverse-turn

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the concept and notation before adding historical priority claims.
  - Check book-specific statements against the exact edition before treating the supplied planning matrix as verified coverage.
- reader text: Historical development has not been researched for this draft. The workshop scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The inputs have directed components and units.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The dot product uses cosine to measure alignment; the cross-product magnitude uses sine to measure spanned area.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The signed planar component u_xv_y−u_yv_x is the determinant of the two input columns.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:basis
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The component formula presumes an ordered right-handed orthonormal basis.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:cross-product:right-angle
  - title: Open the frame to a right angle
  - role: applied_model
  - question: What is u×v for3 m and 2 m edges at 90°?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - inputs:
    - uLength: 3
    - vLength: 2
    - angle: 90
  - steps:
    - Item:
      - index: 1
      - expression: u=(3,0,0) m; v=(0,2,0) m.
      - reason: Resolve the right-angle input components.
    - Item:
      - index: 2
      - expression: w_z=3·2−0·0=6 m².
      - reason: Use the ordered planar determinant.
    - Item:
      - index: 3
      - expression: u×v=(0,0,6) m²; A=6 m².
      - reason: Keep the directed normal and its magnitude separate.
  - result:
    - exact: u×v=(0,0,6) m²; A=6 m²
  - interpretation: The positive normal points out of the page and the frame spans6 m².
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: A rectangle with sides3 m and 2 m has area6 m².
  - limits: The normal is an area vector, not a third edge length.
  - preset:
    - uLength: 3
    - vLength: 2
    - angle: 90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
- Item:
  - id: math:example:cross-product:reverse-turn
  - title: Turn below the reference edge
  - role: applied_model
  - question: What changes when the angle is−90°?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - inputs:
    - uLength: 3
    - vLength: 2
    - angle: -90
  - steps:
    - Item:
      - index: 1
      - expression: v=(0,−2,0) m.
      - reason: The second edge points below the positive x axis.
    - Item:
      - index: 2
      - expression: w_z=3·(−2)=−6 m².
      - reason: The ordered cross product reverses normal direction.
    - Item:
      - index: 3
      - expression: A=|−6|=6 m².
      - reason: Unoriented area is the magnitude.
  - result:
    - exact: u×v=(0,0,−6) m²; A=6 m²
  - interpretation: The normal points into the page while the area equals the right-angle case.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The rectangle is a reflection of the previous frame and has the same nonnegative area.
  - limits: A negative component does not mean negative unoriented area.
  - preset:
    - uLength: 3
    - vLength: 2
    - angle: -90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
- Item:
  - id: math:example:cross-product:oblique-frame
  - title: Use the perpendicular height
  - role: applied_model
  - question: What area do3 m and 2 m edges span at 30°?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - inputs:
    - uLength: 3
    - vLength: 2
    - angle: 30
  - steps:
    - Item:
      - index: 1
      - expression: v_y=2 sin30°=1 m.
      - reason: Find the component perpendicular to u.
    - Item:
      - index: 2
      - expression: w_z=3·1=3 m².
      - reason: Multiply the base by the perpendicular height.
    - Item:
      - index: 3
      - expression: A=3 m².
      - reason: The normal component is positive at this angle.
  - result:
    - exact: u×v=(0,0,3) m²; A=3 m²
  - interpretation: The frame spans half the area of the right-angle case.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Base times height gives3 m·1 m=3 m².
  - limits: The2 m edge is not itself the perpendicular height.
  - preset:
    - uLength: 3
    - vLength: 2
    - angle: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
- Item:
  - id: math:example:cross-product:parallel-edges
  - title: Flatten the frame
  - role: applied_model
  - question: What is the product when the angle is 180°?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - inputs:
    - uLength: 3
    - vLength: 2
    - angle: 180
  - steps:
    - Item:
      - index: 1
      - expression: u=(3,0,0) m; v=(−2,0,0) m.
      - reason: Both inputs lie on the same line.
    - Item:
      - index: 2
      - expression: u_xv_y−u_yv_x=3·0−0·(−2)=0.
      - reason: There is no perpendicular height.
  - result:
    - exact: u×v=(0,0,0) m²; A=0 m²
  - interpretation: The parallelogram degenerates to a line and no normal direction is distinguished.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Parallel vectors are linearly dependent and span zero area.
  - limits: Zero magnitude carries no positive or negative orientation.
  - preset:
    - uLength: 3
    - vLength: 2
    - angle: 180
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
- Item:
  - id: math:example:cross-product:zero-edge
  - title: Collapse one edge
  - role: applied_model
  - question: What happens if the first edge has zero length?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - inputs:
    - uLength: 0
    - vLength: 2
    - angle: 60
  - steps:
    - Item:
      - index: 1
      - expression: u=(0,0,0) m.
      - reason: The first input is the zero vector.
    - Item:
      - index: 2
      - expression: Every component of u×v is zero.
      - reason: Each product in the component formula contains a zero component of u.
  - result:
    - exact: u×v=(0,0,0) m²; A=0 m²
  - interpretation: A zero edge cannot span a nonzero parallelogram area.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Base times perpendicular height is 0 m times any allowed height.
  - limits: The zero vector has no distinguished direction.
  - preset:
    - uLength: 0
    - vLength: 2
    - angle: 60
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
    - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.

## Interactive

- component id: component:cross-product
- renderer id: cross-product-visual-model
- renderer version: 1
- model id: cross-product-visual-model
- model revision: 1
- expression id: ast:cross-product:expression
- interaction status: implemented
- description: Shared-scale directed edges span the actual parallelogram. An explicitly out-of-page or into-page normal symbol identifies the sign; the readout separately gives signed component and area.
- controls:
  - Item:
    - id: uLength
    - type: number
    - default: 3
    - min: 0
    - max: 4
    - step: 0.01
  - Item:
    - id: vLength
    - type: number
    - default: 2
    - min: 0
    - max: 4
    - step: 0.01
  - Item:
    - id: angle
    - type: number
    - default: 60
    - min: -180
    - max: 180
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 60
    - output: 5.196152422706632
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 90
    - output: 6
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: -90
    - output: -6
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 0
    - output: 0
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 180
    - output: 0
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: -180
    - output: 0
  - Item:
    - input:
      - uLength: 0
      - vLength: 2
      - angle: 60
    - output: 0
  - Item:
    - input:
      - uLength: 4
      - vLength: 4
      - angle: 90
    - output: 16
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 30
    - output: 3
  - Item:
    - input:
      - uLength: 4
      - vLength: 4
      - angle: -150
    - output: -8
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 181
    - status: invalid_parameters
  - Item:
    - input:
      - uLength: 5
      - vLength: 2
      - angle: 60
    - status: invalid_parameters
- compute: Set u=(a,0,0) and v=(b cosθ,b sinθ,0). The general component rule gives u×v=(u_yv_z−u_zv_y,u_zv_x−u_xv_z,u_xv_y−u_yv_x). In this family w_z=a b sinθ and A=|w_z|. The displayed angle is in degrees.
- numeric tolerance: 1e-10
- invariants:
  - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
  - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - The input vectors are u=(a,0,0) and v=(b cosθ,b sinθ,0). Their cross product points only in the z direction and its signed component is a b sinθ square metres.
  - Unoriented area A is the nonnegative magnitude |a b sinθ|. A zero product has no distinguished normal direction, including parallel inputs and a zero vector.
- limits:
  - Both inputs stay in the coordinate plane and their lengths are nonnegative; this is a stated specialization of the three-dimensional cross product.
  - An area vector is not a force, moment or torque unless inputs and units are changed under a separately stated model.
  - The out-of-page symbol expresses orientation; it is not a perspective rendering of an extra measured length.
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
  - prompt: Why does the area stay nonnegative when the normal reverses?
  - answer: Orientation belongs to the signed vector product. Unoriented area is its magnitude, so it is nonnegative.
- Item:
  - prompt: What happens when the edges become parallel?
  - answer: Their perpendicular separation is zero, so the parallelogram area and cross product are zero.

## Representations

- Item:
  - kind: geometry
  - description: Shared-scale directed edges span the actual parallelogram. An explicitly out-of-page or into-page normal symbol identifies the sign; the readout separately gives signed component and area.
- Item:
  - kind: graph
  - description: The signed normal component varies sinusoidally with θ. A separately labelled nonnegative magnitude curve uses the same fixed square-metre scale.
- Item:
  - kind: substitution
  - description: Follow each declared input through the stated expression into the labelled truth value or measured result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Rotate one measured edge, follow the perpendicular component into parallelogram area, and keep the normal direction separate from magnitude.
  - limitations: Both inputs stay in the coordinate plane and their lengths are nonnegative; this is a stated specialization of the three-dimensional cross product.
  - evidence kind: constructed_example
  - example ref: math:example:cross-product:right-angle
- Item:
  - context: Turn below the reference edge
  - mapping: The normal points into the page while the area equals the right-angle case.
  - limitations: A negative component does not mean negative unoriented area.
  - evidence kind: constructed_example
  - example ref: math:example:cross-product:reverse-turn

## Source Refs

- source:openstax:cross-product
- source:openstax:vectors-plane

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.27.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures, sequenced from the supplied book-scope matrix.

## Referenced source registry

- Source ID: source:openstax:vectors-plane. [Calculus Volume 3, 2.1 Vectors in the Plane](https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane). Locator: Plane components, Euclidean magnitude, scalar multiplication and the zero vector. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:cross-product. [Calculus Volume 3, 2.4 The Cross Product](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product). Locator: Component definition, orthogonality and orientation; parallelogram area as the cross-product norm. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
