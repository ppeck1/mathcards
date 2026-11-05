---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:vector-projection", "id": "math:concept:vector-projection", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector-projection", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c22b70cbd62487268635c817670bf0692f6b2b15420236d3d5f7245747b81f9a"}, "purpose": "How much of a survey displacement follows the guide direction?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c22b70cbd62487268635c817670bf0692f6b2b15420236d3d5f7245747b81f9a", "status": "draft", "title": "Vector projection and its residual", "topics": ["mathematics", "linear-algebra", "geometry", "vector projection and its residual"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Vector projection and its residual

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:vector-projection; revision 0.1.0-draft. Setting: A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual. Expression: $c=\frac{\vec u\cdot\vec v}{\|\vec v\|},\quad\operatorname{proj}_{\vec v}\vec u=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\vec v,\quad\vec r=\vec u-\operatorname{proj}_{\vec v}\vec u,\quad\vec r\cdot\vec v=0.$. Conditions required for a defined value (a case may test their violation): A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual. The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.

## Schema Version

0.1.0

## Id

math:concept:vector-projection

## Slug

vector-projection

## Type

concept

## Title

Vector projection and its residual

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

- vector projection and its residual

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How much of a survey displacement follows the guide direction?

## Meaning

Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.

## Prerequisites

- required:
  - math:concept:inner-product
- helpful:
  - math:concept:coordinate-transformation
  - math:concept:spatial-cross-product
- depth:
  []

## Definition

- setting: A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
- formal latex: c=\frac{\vec u\cdot\vec v}{\|\vec v\|},\quad\operatorname{proj}_{\vec v}\vec u=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\vec v,\quad\vec r=\vec u-\operatorname{proj}_{\vec v}\vec u,\quad\vec r\cdot\vec v=0.
- signature:
  - u x: Measured displacement, x component
  - u y: Measured displacement, y component
  - u z: Measured displacement, z component
  - v x: Reference direction, x component
  - v y: Reference direction, y component
  - v z: Reference direction, z component
  - c: Primary model result
  - P x: First projected component
  - P y: Second projected component
  - P z: Third projected component
  - ‖r‖: Perpendicular residual length
- conditions:
  - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
  - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:dot

## Grammar

- pronunciation: Vector projection and its residual
- expression latex: c=\frac{\vec u\cdot\vec v}{\|\vec v\|},\quad\operatorname{proj}_{\vec v}\vec u=\frac{\vec u\cdot\vec v}{\vec v\cdot\vec v}\vec v,\quad\vec r=\vec u-\operatorname{proj}_{\vec v}\vec u,\quad\vec r\cdot\vec v=0.
- formation rule: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
- precedence: Keep the ordered operations, declared frame and units fixed; evaluate the component operations before the magnitude.
- symbols:
  - Item:
    - token: u_x
    - role: Measured displacement, x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: u_y
    - role: Measured displacement, y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: u_z
    - role: Measured displacement, z component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_x
    - role: Reference direction, x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_y
    - role: Reference direction, y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_z
    - role: Reference direction, z component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: c
    - role: Primary model result
    - type: Declared input or computed geometric quantity
  - Item:
    - token: P_x
    - role: First projected component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: P_y
    - role: Second projected component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: P_z
    - role: Third projected component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: ‖r‖
    - role: Perpendicular residual length
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:vector-projection:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:ux
      - kind: variable
      - type: Declared bounded input
      - symbol: u_x
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:uy
      - kind: variable
      - type: Declared bounded input
      - symbol: u_y
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:uz
      - kind: variable
      - type: Declared bounded input
      - symbol: u_z
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:vx
      - kind: variable
      - type: Declared bounded input
      - symbol: v_x
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:vy
      - kind: variable
      - type: Declared bounded input
      - symbol: v_y
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:vz
      - kind: variable
      - type: Declared bounded input
      - symbol: v_z
      - scope ref: scope:vector-projection:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - id: n:bound-ux
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:ux
    - Item:
      - id: n:bound-uy
      - kind: apply
      - type: Declared primary result
      - function: n:bound-ux
      - argument: n:uy
    - Item:
      - id: n:bound-uz
      - kind: apply
      - type: Declared primary result
      - function: n:bound-uy
      - argument: n:uz
    - Item:
      - id: n:bound-vx
      - kind: apply
      - type: Declared primary result
      - function: n:bound-uz
      - argument: n:vx
    - Item:
      - id: n:bound-vy
      - kind: apply
      - type: Declared primary result
      - function: n:bound-vx
      - argument: n:vy
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-vy
      - argument: n:vz
  - scopes:
    - Item:
      - id: scope:vector-projection:expression
      - kind: modelExpression
      - free variables:
        - u_x
        - u_y
        - u_z
        - v_x
        - v_y
        - v_z
      - domain condition: A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
- parse errors:
  - Item:
    - input: Read a projected arrow length as the exact spatial length
    - status: representation error
    - reason: Spatial scenes use a fixed projection. Exact model lengths come from the components and readout.
- ast coverage: Typed application outline of this bounded family; not an arbitrary expression evaluator.
- output symbol bindings:
  - u x: ux
  - u y: uy
  - u z: uz
  - v x: vx
  - v y: vy
  - v z: vz
  - c: output
  - P x: px
  - P y: py
  - P z: pz
  - ‖r‖: residualNorm

## Properties

- Item:
  - claim: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
  - conditions: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - derivation: The parallel part is (1.5,1.5,0) m and the residual is (0.5,−0.5,1) m.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:vector-projection:case-1
- Item:
  - claim: A positive rescaling changes the reference length but not its direction or the projection.
  - conditions: A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
  - derivation: 2.1213203436 m
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:vector-projection:case-2

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
  - target: math:concept:inner-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: The dot product measures signed alignment.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:coordinate-transformation
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Coordinates in an orthonormal frame are scalar projections onto its unit directions.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:spatial-cross-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Projection resolves along a direction, while the cross product supplies a perpendicular normal.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:vector-projection:case-1
  - title: Resolve the original survey displacement
  - role: applied_model
  - question: How much of a survey displacement follows the guide direction?
  - setting: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
  - assumptions:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 1
    - vy: 1
    - vz: 0
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = 1; v_y = 1; v_z = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v
      - reason: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - index: 3
      - expression: 2.1213203436 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.1213203436 m
  - interpretation: The parallel part is (1.5,1.5,0) m and the residual is (0.5,−0.5,1) m.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.1213203435596424}
  - limits: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 1
    - vy: 1
    - vz: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
- Item:
  - id: math:example:vector-projection:case-2
  - title: Rescale the guide vector
  - role: applied_model
  - question: How much of a survey displacement follows the guide direction?
  - setting: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
  - assumptions:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 2
    - vy: 2
    - vz: 0
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = 2; v_y = 2; v_z = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v
      - reason: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - index: 3
      - expression: 2.1213203436 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.1213203436 m
  - interpretation: A positive rescaling changes the reference length but not its direction or the projection.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.1213203435596424}
  - limits: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 2
    - vy: 2
    - vz: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
- Item:
  - id: math:example:vector-projection:case-3
  - title: Reverse the guide direction
  - role: applied_model
  - question: How much of a survey displacement follows the guide direction?
  - setting: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
  - assumptions:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: -1
    - vy: -1
    - vz: 0
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = -1; v_y = -1; v_z = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v
      - reason: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - index: 3
      - expression: -2.1213203436 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: -2.1213203436 m
  - interpretation: The signed scalar component reverses, while the projection vector remains the same.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": -2.1213203435596424}
  - limits: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: -1
    - vy: -1
    - vz: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
- Item:
  - id: math:example:vector-projection:case-4
  - title: Choose a perpendicular displacement
  - role: applied_model
  - question: How much of a survey displacement follows the guide direction?
  - setting: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
  - assumptions:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - inputs:
    - ux: 1
    - uy: -1
    - uz: 0
    - vx: 1
    - vy: 1
    - vz: 0
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 1; u_y = -1; u_z = 0; v_x = 1; v_y = 1; v_z = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v
      - reason: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - index: 3
      - expression: 0.0 m
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m
  - interpretation: The parallel part is zero, and the entire displacement is residual.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - preset:
    - ux: 1
    - uy: -1
    - uz: 0
    - vx: 1
    - vy: 1
    - vz: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
- Item:
  - id: math:example:vector-projection:case-5
  - title: Try to use a zero guide
  - role: applied_model
  - question: How much of a survey displacement follows the guide direction?
  - setting: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
  - assumptions:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 0
    - vy: 0
    - vz: 0
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = 0; v_y = 0; v_z = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v
      - reason: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
    - Item:
      - index: 3
      - expression: Undefined: choose a nonzero reference direction.
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - exact: Undefined: choose a nonzero reference direction.
  - interpretation: The result is undefined because a zero vector does not select a direction.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "undefined_direction"}
  - limits: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 0
    - vy: 0
    - vz: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
    - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.

## Interactive

- component id: component:vector-projection
- renderer id: vector-projection-visual-model
- renderer version: 1
- model id: vector-projection-visual-model
- model revision: 1
- expression id: ast:vector-projection:expression
- interaction status: implemented
- description: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
- controls:
  - Item:
    - id: ux
    - type: number
    - default: 2
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: uy
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: uz
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: vx
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: vy
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: vz
    - type: number
    - default: 0
    - min: -2
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 2.1213203435596424
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 2
      - vy: 2
      - vz: 0
    - status: valid
    - output: 2.1213203435596424
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: -1
      - vy: -1
      - vz: 0
    - status: valid
    - output: -2.1213203435596424
  - Item:
    - input:
      - ux: 1
      - uy: -1
      - uz: 0
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 0
      - vy: 0
      - vz: 0
    - status: undefined_direction
  - Item:
    - input:
      - ux: -2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: -0.7071067811865476
  - Item:
    - input:
      - ux: 2
      - uy: -2
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - ux: 2
      - uy: 2
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 2.8284271247461903
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: -2
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 2.1213203435596424
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 2
      - vx: 1
      - vy: 1
      - vz: 0
    - status: valid
    - output: 2.1213203435596424
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: -2
      - vy: 1
      - vz: 0
    - status: valid
    - output: -1.3416407864998738
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 2
      - vy: 1
      - vz: 0
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: -2
      - vz: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: 0
    - status: valid
    - output: 1.7888543819998317
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: -2
    - status: valid
    - output: 0.408248290463863
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 2
    - status: valid
    - output: 2.041241452319315
  - Item:
    - input:
      - ux: 3
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: invalid_parameters
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 1
      - vz: 0
    - status: invalid_parameters
- compute: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
- numeric tolerance: 1e-10
- invariants:
  - A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.
  - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
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
  - prompt: How much of a survey displacement follows the guide direction?
  - answer: Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.

## Representations

- Item:
  - kind: geometry
  - description: A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Measured displacement, x component.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Resolve the original survey displacement
  - mapping: The parallel part is (1.5,1.5,0) m and the residual is (0.5,−0.5,1) m.
  - limitations: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - evidence kind: constructed_example
  - example ref: math:example:vector-projection:case-1
- Item:
  - context: Rescale the guide vector
  - mapping: A positive rescaling changes the reference length but not its direction or the projection.
  - limitations: The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.
  - evidence kind: constructed_example
  - example ref: math:example:vector-projection:case-2

## Source Refs

- source:spatial-foundations:dot

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- Continuation of 0.34.0 branch: original connected spatial/coordinate/mechanics family, two distinct views and independent references.

## Referenced source registry

- Source ID: source:spatial-foundations:dot. [OpenStax · The Dot Product](https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product). Locator: §2.3, signed scalar component, vector projection and orthogonal residual.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
