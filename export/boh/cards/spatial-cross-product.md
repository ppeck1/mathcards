---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:spatial-cross-product", "id": "math:concept:spatial-cross-product", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:spatial-cross-product", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "107db1ccec9cf33679bf5e35ac631dc10d86fbc51e9d17f7703c5db3b4713ba0"}, "purpose": "How does a spatial panel acquire a normal direction?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "107db1ccec9cf33679bf5e35ac631dc10d86fbc51e9d17f7703c5db3b4713ba0", "status": "draft", "title": "Cross products in space", "topics": ["mathematics", "linear-algebra", "geometry", "cross products in space"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Cross products in space

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:spatial-cross-product; revision 0.1.0-draft. Setting: Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel. Expression: $\vec u\times\vec v=(u_y v_z-u_z v_y,\ u_z v_x-u_x v_z,\ u_x v_y-u_y v_x),\quad A=\|\vec u\times\vec v\|.$. Conditions required for a defined value (a case may test their violation): Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel. The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.

## Schema Version

0.1.0

## Id

math:concept:spatial-cross-product

## Slug

spatial-cross-product

## Type

concept

## Title

Cross products in space

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

- cross products in space

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does a spatial panel acquire a normal direction?

## Meaning

Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.

## Prerequisites

- required:
  - math:concept:cross-product
- helpful:
  - math:concept:scalar-triple-product
  - math:concept:inner-product
- depth:
  []

## Definition

- setting: Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
- formal latex: \vec u\times\vec v=(u_y v_z-u_z v_y,\ u_z v_x-u_x v_z,\ u_x v_y-u_y v_x),\quad A=\|\vec u\times\vec v\|.
- signature:
  - u x: First edge, x component
  - u y: First edge, y component
  - u z: First edge, z component
  - v x: Second edge, x component
  - v y: Second edge, y component
  - v z: Second edge, z component
  - n x: Normal horizontal area component
  - n y: Normal depth area component
  - n z: Normal vertical area component
  - A: Parallelogram area
- conditions:
  - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
  - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:cross

## Grammar

- pronunciation: Cross products in space
- expression latex: \vec u\times\vec v=(u_y v_z-u_z v_y,\ u_z v_x-u_x v_z,\ u_x v_y-u_y v_x),\quad A=\|\vec u\times\vec v\|.
- formation rule: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
- precedence: Keep the ordered operations, declared frame and units fixed; evaluate the component operations before the magnitude.
- symbols:
  - Item:
    - token: u_x
    - role: First edge, x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: u_y
    - role: First edge, y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: u_z
    - role: First edge, z component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_x
    - role: Second edge, x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_y
    - role: Second edge, y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_z
    - role: Second edge, z component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: n_x
    - role: Normal horizontal area component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: n_y
    - role: Normal depth area component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: n_z
    - role: Normal vertical area component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: A
    - role: Parallelogram area
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:spatial-cross-product:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:ux
      - kind: variable
      - type: Declared bounded input
      - symbol: u_x
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:uy
      - kind: variable
      - type: Declared bounded input
      - symbol: u_y
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:uz
      - kind: variable
      - type: Declared bounded input
      - symbol: u_z
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:vx
      - kind: variable
      - type: Declared bounded input
      - symbol: v_x
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:vy
      - kind: variable
      - type: Declared bounded input
      - symbol: v_y
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:vz
      - kind: variable
      - type: Declared bounded input
      - symbol: v_z
      - scope ref: scope:spatial-cross-product:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
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
      - id: scope:spatial-cross-product:expression
      - kind: modelExpression
      - free variables:
        - u_x
        - u_y
        - u_z
        - v_x
        - v_y
        - v_z
      - domain condition: Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
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
  - n x: nx
  - n y: ny
  - n z: nz
  - A: area

## Properties

- Item:
  - claim: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
  - conditions: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - derivation: A normal can have three nonzero components.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:spatial-cross-product:case-1
- Item:
  - claim: Parallel edges enclose zero area and supply no unique normal direction.
  - conditions: Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
  - derivation: 0.0 m²
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:spatial-cross-product:case-2

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
  - target: math:concept:cross-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: The earlier planar family is the case with both z components zero.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:scalar-triple-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: A dot product with the normal measures signed volume.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: The normal is orthogonal to both edges, as their dot products verify.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:spatial-cross-product:case-1
  - title: Find the sloping panel area
  - role: applied_model
  - question: How does a spatial panel acquire a normal direction?
  - setting: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
  - assumptions:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 1
    - vy: 2
    - vz: -1
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = 1; v_y = 2; v_z = -1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: n = u × v; A = ‖n‖
      - reason: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
    - Item:
      - index: 3
      - expression: 5.1961524227 m²
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 5.1961524227 m²
  - interpretation: A normal can have three nonzero components.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 5.196152422706632}
  - limits: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 1
    - vy: 2
    - vz: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
- Item:
  - id: math:example:spatial-cross-product:case-2
  - title: Flatten the span into parallel edges
  - role: applied_model
  - question: How does a spatial panel acquire a normal direction?
  - setting: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
  - assumptions:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - inputs:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 2
    - vy: 1
    - vz: 1
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 2; u_y = 1; u_z = 1; v_x = 2; v_y = 1; v_z = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: n = u × v; A = ‖n‖
      - reason: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
    - Item:
      - index: 3
      - expression: 0.0 m²
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m²
  - interpretation: Parallel edges enclose zero area and supply no unique normal direction.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - preset:
    - ux: 2
    - uy: 1
    - uz: 1
    - vx: 2
    - vy: 1
    - vz: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
- Item:
  - id: math:example:spatial-cross-product:case-3
  - title: Reverse the ordered edges
  - role: applied_model
  - question: How does a spatial panel acquire a normal direction?
  - setting: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
  - assumptions:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - inputs:
    - ux: 1
    - uy: 2
    - uz: -1
    - vx: 2
    - vy: 1
    - vz: 1
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 1; u_y = 2; u_z = -1; v_x = 2; v_y = 1; v_z = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: n = u × v; A = ‖n‖
      - reason: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
    - Item:
      - index: 3
      - expression: 5.1961524227 m²
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 5.1961524227 m²
  - interpretation: Swapping edges reverses the normal while preserving its magnitude.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 5.196152422706632}
  - limits: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - preset:
    - ux: 1
    - uy: 2
    - uz: -1
    - vx: 2
    - vy: 1
    - vz: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
- Item:
  - id: math:example:spatial-cross-product:case-4
  - title: Collapse the first edge
  - role: applied_model
  - question: How does a spatial panel acquire a normal direction?
  - setting: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
  - assumptions:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - inputs:
    - ux: 0
    - uy: 0
    - uz: 0
    - vx: 1
    - vy: 2
    - vz: -1
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 0; u_y = 0; u_z = 0; v_x = 1; v_y = 2; v_z = -1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: n = u × v; A = ‖n‖
      - reason: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
    - Item:
      - index: 3
      - expression: 0.0 m²
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m²
  - interpretation: A zero edge gives zero area; its direction is not inferred from the controls.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - preset:
    - ux: 0
    - uy: 0
    - uz: 0
    - vx: 1
    - vy: 2
    - vz: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
- Item:
  - id: math:example:spatial-cross-product:case-5
  - title: Stand one edge vertically
  - role: applied_model
  - question: How does a spatial panel acquire a normal direction?
  - setting: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
  - assumptions:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - inputs:
    - ux: 1
    - uy: 0
    - uz: 0
    - vx: 0
    - vy: 0
    - vz: 2
  - steps:
    - Item:
      - index: 1
      - expression: u_x = 1; u_y = 0; u_z = 0; v_x = 0; v_y = 0; v_z = 2
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: n = u × v; A = ‖n‖
      - reason: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
    - Item:
      - index: 3
      - expression: 2.0 m²
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.0 m²
  - interpretation: A spatial panel can have a horizontal normal; the earlier planar z-only construction is not enough.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.0}
  - limits: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - preset:
    - ux: 1
    - uy: 0
    - uz: 0
    - vx: 0
    - vy: 0
    - vz: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
    - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.

## Interactive

- component id: component:spatial-cross-product
- renderer id: spatial-cross-product-visual-model
- renderer version: 1
- model id: spatial-cross-product-visual-model
- model revision: 1
- expression id: ast:spatial-cross-product:expression
- interaction status: implemented
- description: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
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
    - default: 2
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: vz
    - type: number
    - default: -1
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
      - vy: 2
      - vz: -1
    - status: valid
    - output: 5.196152422706632
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 2
      - vy: 1
      - vz: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - ux: 1
      - uy: 2
      - uz: -1
      - vx: 2
      - vy: 1
      - vz: 1
    - status: valid
    - output: 5.196152422706632
  - Item:
    - input:
      - ux: 0
      - uy: 0
      - uz: 0
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - ux: 1
      - uy: 0
      - uz: 0
      - vx: 0
      - vy: 0
      - vz: 2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - ux: -2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 5.916079783099616
  - Item:
    - input:
      - ux: 2
      - uy: -2
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 6.708203932499369
  - Item:
    - input:
      - ux: 2
      - uy: 2
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 5.385164807134504
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: -2
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 4.242640687119285
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 2
      - vx: 1
      - vy: 2
      - vz: -1
    - status: valid
    - output: 7.0710678118654755
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: -2
      - vy: 2
      - vz: -1
    - status: valid
    - output: 6.708203932499369
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 2
      - vy: 2
      - vz: -1
    - status: valid
    - output: 5.385164807134504
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: -2
      - vz: -1
    - status: valid
    - output: 5.916079783099616
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: -2
    - status: valid
    - output: 7.0710678118654755
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: 2
    - status: valid
    - output: 4.242640687119285
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: 3
    - status: invalid_parameters
  - Item:
    - input:
      - ux: 2
      - uy: 1
      - uz: 1
      - vx: 1
      - vy: 2
      - vz: -1
    - status: invalid_parameters
- compute: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
- numeric tolerance: 1e-10
- invariants:
  - Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.
  - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
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
  - prompt: How does a spatial panel acquire a normal direction?
  - answer: Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.

## Representations

- Item:
  - kind: geometry
  - description: Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Second edge, z component.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Find the sloping panel area
  - mapping: A normal can have three nonzero components.
  - limitations: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - evidence kind: constructed_example
  - example ref: math:example:spatial-cross-product:case-1
- Item:
  - context: Flatten the span into parallel edges
  - mapping: Parallel edges enclose zero area and supply no unique normal direction.
  - limitations: The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.
  - evidence kind: constructed_example
  - example ref: math:example:spatial-cross-product:case-2

## Source Refs

- source:spatial-foundations:cross

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- Continuation of 0.34.0 branch: original connected spatial/coordinate/mechanics family, two distinct views and independent references.

## Referenced source registry

- Source ID: source:spatial-foundations:cross. [OpenStax · The Cross Product](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product). Locator: §2.4, component definition, normal orientation, parallelogram area and scalar triple product.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
