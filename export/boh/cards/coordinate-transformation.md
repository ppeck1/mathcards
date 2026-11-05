---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:coordinate-transformation", "id": "math:concept:coordinate-transformation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:coordinate-transformation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "cd9df47ddd1c1350eb832e1b0aa6235027f20e3aa4bc2e8b2c6d47c775f123c0"}, "purpose": "How can the same displacement have different coordinates?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "cd9df47ddd1c1350eb832e1b0aa6235027f20e3aa4bc2e8b2c6d47c775f123c0", "status": "draft", "title": "Changing an orthonormal frame", "topics": ["mathematics", "linear-algebra", "geometry", "changing an orthonormal frame"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Changing an orthonormal frame

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:coordinate-transformation; revision 0.1.0-draft. Setting: A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed. Expression: $\begin{pmatrix}x^{\prime}\\y^{\prime}\end{pmatrix}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix},\quad (x^{\prime})^2+(y^{\prime})^2=x^2+y^2.$. Conditions required for a defined value (a case may test their violation): A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed. This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.

## Schema Version

0.1.0

## Id

math:concept:coordinate-transformation

## Slug

coordinate-transformation

## Type

concept

## Title

Changing an orthonormal frame

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- changing an orthonormal frame

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can the same displacement have different coordinates?

## Meaning

Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.

## Prerequisites

- required:
  - math:concept:basis
- helpful:
  - math:concept:vector-rotation
  - math:concept:vector-projection
- depth:
  []

## Definition

- setting: A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
- formal latex: \begin{pmatrix}x^{\prime}\\y^{\prime}\end{pmatrix}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix},\quad (x^{\prime})^2+(y^{\prime})^2=x^2+y^2.
- signature:
  - x: Fixed world x component
  - y: Fixed world y component
  - θ: Frame angle θ
  - x′: First rotated-frame component
  - y′: Second rotated-frame component
  - ‖v‖: Unchanged displacement length
- conditions:
  - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
  - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:frames

## Grammar

- pronunciation: Changing an orthonormal frame
- expression latex: \begin{pmatrix}x^{\prime}\\y^{\prime}\end{pmatrix}=\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix},\quad (x^{\prime})^2+(y^{\prime})^2=x^2+y^2.
- formation rule: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
- precedence: Keep the ordered operations, frame and units fixed. A prime labels changed-frame coordinates here, not differentiation.
- symbols:
  - Item:
    - token: x
    - role: Fixed world x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: y
    - role: Fixed world y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: θ
    - role: Frame angle θ
    - type: Declared input or computed geometric quantity
  - Item:
    - token: x′
    - role: First rotated-frame component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: y′
    - role: Second rotated-frame component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: ‖v‖
    - role: Unchanged displacement length
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:coordinate-transformation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - type: Declared bounded input
      - symbol: x
      - scope ref: scope:coordinate-transformation:expression
    - Item:
      - id: n:y
      - kind: variable
      - type: Declared bounded input
      - symbol: y
      - scope ref: scope:coordinate-transformation:expression
    - Item:
      - id: n:angle
      - kind: variable
      - type: Declared bounded input
      - symbol: θ
      - scope ref: scope:coordinate-transformation:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - id: n:bound-x
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:x
    - Item:
      - id: n:bound-y
      - kind: apply
      - type: Declared primary result
      - function: n:bound-x
      - argument: n:y
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-y
      - argument: n:angle
  - scopes:
    - Item:
      - id: scope:coordinate-transformation:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - θ
      - domain condition: A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
- parse errors:
  - Item:
    - input: Treat the constructed model as a measured prediction
    - status: interpretation error
    - reason: A formula and stipulated inputs are not an empirical validation.
- ast coverage: Typed application outline of this bounded family; not an arbitrary expression evaluator.
- output symbol bindings:
  - x: x
  - y: y
  - θ: angle
  - x′: first
  - y′: second
  - ‖v‖: norm

## Properties

- Item:
  - claim: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
  - conditions: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - derivation: Both component readings change, while the gold world arrow stays fixed.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:coordinate-transformation:case-1
- Item:
  - claim: Aligned frames give the original pair (2,1) m.
  - conditions: A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
  - derivation: 2.0 m
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:coordinate-transformation:case-2

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
  - target: math:concept:basis
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Coordinates depend on the chosen basis; this family restricts it to orthonormal rotations.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:vector-rotation
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: An active vector rotation changes the arrow; this passive change keeps it fixed.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:vector-projection
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Each new coordinate is a signed scalar projection onto a unit basis direction.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:coordinate-transformation:case-1
  - title: Read a thirty-degree frame
  - role: applied_model
  - question: How can the same displacement have different coordinates?
  - setting: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
  - assumptions:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - inputs:
    - x: 2
    - y: 1
    - angle: 30
  - steps:
    - Item:
      - index: 1
      - expression: x = 2; y = 1; θ = 30
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ
      - reason: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - index: 3
      - expression: 2.2320508076 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.2320508076 m
  - interpretation: Both component readings change, while the gold world arrow stays fixed.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.232050807568877}
  - limits: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - preset:
    - x: 2
    - y: 1
    - angle: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
- Item:
  - id: math:example:coordinate-transformation:case-2
  - title: Align the two frames
  - role: applied_model
  - question: How can the same displacement have different coordinates?
  - setting: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
  - assumptions:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - inputs:
    - x: 2
    - y: 1
    - angle: 0
  - steps:
    - Item:
      - index: 1
      - expression: x = 2; y = 1; θ = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ
      - reason: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - index: 3
      - expression: 2.0 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.0 m
  - interpretation: Aligned frames give the original pair (2,1) m.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.0}
  - limits: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - preset:
    - x: 2
    - y: 1
    - angle: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
- Item:
  - id: math:example:coordinate-transformation:case-3
  - title: Turn the frame by a right angle
  - role: applied_model
  - question: How can the same displacement have different coordinates?
  - setting: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
  - assumptions:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - inputs:
    - x: 2
    - y: 1
    - angle: 90
  - steps:
    - Item:
      - index: 1
      - expression: x = 2; y = 1; θ = 90
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ
      - reason: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - index: 3
      - expression: 1.0 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 1.0 m
  - interpretation: The new components are approximately (1,−2) m, not the actively rotated pair (−1,2).
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 1.0000000000000002}
  - limits: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - preset:
    - x: 2
    - y: 1
    - angle: 90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
- Item:
  - id: math:example:coordinate-transformation:case-4
  - title: Reverse both measuring axes
  - role: applied_model
  - question: How can the same displacement have different coordinates?
  - setting: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
  - assumptions:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - inputs:
    - x: 2
    - y: 1
    - angle: 180
  - steps:
    - Item:
      - index: 1
      - expression: x = 2; y = 1; θ = 180
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ
      - reason: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - index: 3
      - expression: -2.0 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: -2.0 m
  - interpretation: Both component signs reverse, while length remains unchanged.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": -1.9999999999999998}
  - limits: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - preset:
    - x: 2
    - y: 1
    - angle: 180
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
- Item:
  - id: math:example:coordinate-transformation:case-5
  - title: Place the marker at the origin
  - role: applied_model
  - question: How can the same displacement have different coordinates?
  - setting: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
  - assumptions:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - inputs:
    - x: 0
    - y: 0
    - angle: 30
  - steps:
    - Item:
      - index: 1
      - expression: x = 0; y = 0; θ = 30
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ
      - reason: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
    - Item:
      - index: 3
      - expression: 0.0 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m
  - interpretation: Every frame gives zero components for the zero displacement.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - preset:
    - x: 0
    - y: 0
    - angle: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
    - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.

## Interactive

- component id: component:coordinate-transformation
- renderer id: coordinate-transformation-visual-model
- renderer version: 1
- model id: coordinate-transformation-visual-model
- model revision: 1
- expression id: ast:coordinate-transformation:expression
- interaction status: implemented
- description: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: y
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: angle
    - type: number
    - default: 30
    - min: -180
    - max: 180
    - step: 1
- expected cases:
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 30
    - status: valid
    - output: 2.232050807568877
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 0
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 90
    - status: valid
    - output: 1.0000000000000002
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 180
    - status: valid
    - output: -1.9999999999999998
  - Item:
    - input:
      - x: 0
      - y: 0
      - angle: 30
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - x: -3
      - y: 1
      - angle: 30
    - status: valid
    - output: -2.098076211353316
  - Item:
    - input:
      - x: 3
      - y: 1
      - angle: 30
    - status: valid
    - output: 3.098076211353316
  - Item:
    - input:
      - x: 2
      - y: -3
      - angle: 30
    - status: valid
    - output: 0.23205080756887764
  - Item:
    - input:
      - x: 2
      - y: 3
      - angle: 30
    - status: valid
    - output: 3.232050807568877
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: -180
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 181
    - status: invalid_parameters
  - Item:
    - input:
      - x: 2
      - y: 1
      - angle: 30
    - status: invalid_parameters
- compute: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
- numeric tolerance: 1e-10
- invariants:
  - A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.
  - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
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
  - prompt: How can the same displacement have different coordinates?
  - answer: Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.

## Representations

- Item:
  - kind: geometry
  - description: A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Frame angle θ.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Read a thirty-degree frame
  - mapping: Both component readings change, while the gold world arrow stays fixed.
  - limitations: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - evidence kind: constructed_example
  - example ref: math:example:coordinate-transformation:case-1
- Item:
  - context: Align the two frames
  - mapping: Aligned frames give the original pair (2,1) m.
  - limitations: This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.
  - evidence kind: constructed_example
  - example ref: math:example:coordinate-transformation:case-2

## Source Refs

- source:spatial-foundations:frames

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- Continuation of 0.34.0 branch: original connected spatial/coordinate/mechanics family, two distinct views and independent references.

## Referenced source registry

- Source ID: source:spatial-foundations:frames. [University of Illinois Dynamics · Vectors and bases](https://dynref.engr.illinois.edu/rvv.html). Locator: Orthonormal bases, components and passive planar frame rotation; same vector expressed in two bases.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
