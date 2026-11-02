---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:scalar-triple-product", "id": "math:concept:scalar-triple-product", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:scalar-triple-product", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "b459ce0a24508966688a35b499fbfc422d734c346d57bc19590417a98faaf561"}, "purpose": "Why can a slanted storage frame keep the same volume?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "b459ce0a24508966688a35b499fbfc422d734c346d57bc19590417a98faaf561", "status": "draft", "title": "The scalar triple product", "topics": ["mathematics", "linear-algebra", "geometry", "the scalar triple product"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# The scalar triple product

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:scalar-triple-product; revision 0.1.0-draft. Setting: A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions. Expression: $\vec u=(a,0,0),\quad\vec v=(s,b,0),\quad\vec w=(1,0.5,h),\quad T=\vec u\cdot(\vec v\times\vec w)=a b h,\quad V=|T|.$. Conditions required for a defined value (a case may test their violation): A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions. This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.

## Schema Version

0.1.0

## Id

math:concept:scalar-triple-product

## Slug

scalar-triple-product

## Type

concept

## Title

The scalar triple product

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

- the scalar triple product

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can a slanted storage frame keep the same volume?

## Meaning

For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.

## Prerequisites

- required:
  - math:concept:spatial-cross-product
- helpful:
  - math:concept:determinant
  - math:concept:vector-projection
- depth:


## Definition

- setting: A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
- formal latex: \vec u=(a,0,0),\quad\vec v=(s,b,0),\quad\vec w=(1,0.5,h),\quad T=\vec u\cdot(\vec v\times\vec w)=a b h,\quad V=|T|.
- signature:
  - a: First edge length a
  - b: Second perpendicular extent b
  - h: Signed third-edge height h
  - s: Second-edge shear s
  - T: Primary model result
  - V: Nonnegative geometric volume
- conditions:
  - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
  - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:cross

## Grammar

- pronunciation: The scalar triple product
- expression latex: \vec u=(a,0,0),\quad\vec v=(s,b,0),\quad\vec w=(1,0.5,h),\quad T=\vec u\cdot(\vec v\times\vec w)=a b h,\quad V=|T|.
- formation rule: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
- precedence: Keep the ordered operations, declared frame and units fixed; evaluate the component operations before the magnitude.
- symbols:
  - Item:
    - token: a
    - role: First edge length a
    - type: Declared input or computed geometric quantity
  - Item:
    - token: b
    - role: Second perpendicular extent b
    - type: Declared input or computed geometric quantity
  - Item:
    - token: h
    - role: Signed third-edge height h
    - type: Declared input or computed geometric quantity
  - Item:
    - token: s
    - role: Second-edge shear s
    - type: Declared input or computed geometric quantity
  - Item:
    - token: T
    - role: Primary model result
    - type: Declared input or computed geometric quantity
  - Item:
    - token: V
    - role: Nonnegative geometric volume
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:scalar-triple-product:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:length
      - kind: variable
      - type: Declared bounded input
      - symbol: a
      - scope ref: scope:scalar-triple-product:expression
    - Item:
      - id: n:width
      - kind: variable
      - type: Declared bounded input
      - symbol: b
      - scope ref: scope:scalar-triple-product:expression
    - Item:
      - id: n:height
      - kind: variable
      - type: Declared bounded input
      - symbol: h
      - scope ref: scope:scalar-triple-product:expression
    - Item:
      - id: n:shear
      - kind: variable
      - type: Declared bounded input
      - symbol: s
      - scope ref: scope:scalar-triple-product:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - id: n:bound-length
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:length
    - Item:
      - id: n:bound-width
      - kind: apply
      - type: Declared primary result
      - function: n:bound-length
      - argument: n:width
    - Item:
      - id: n:bound-height
      - kind: apply
      - type: Declared primary result
      - function: n:bound-width
      - argument: n:height
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-height
      - argument: n:shear
  - scopes:
    - Item:
      - id: scope:scalar-triple-product:expression
      - kind: modelExpression
      - free variables:
        - a
        - b
        - h
        - s
      - domain condition: A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
- parse errors:
  - Item:
    - input: Read a projected arrow length as the exact spatial length
    - status: representation error
    - reason: Spatial scenes use a fixed projection. Exact model lengths come from the components and readout.
- ast coverage: Typed application outline of this bounded family; not an arbitrary expression evaluator.
- output symbol bindings:
  - a: length
  - b: width
  - h: height
  - s: shear
  - T: output
  - V: volume

## Properties

- Item:
  - claim: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
  - conditions: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - derivation: The perpendicular extents give a signed product of 6 m³.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:scalar-triple-product:case-1
- Item:
  - claim: The sign reverses, while geometric volume remains 6 m³.
  - conditions: A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
  - derivation: -6.0 m³
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:scalar-triple-product:case-2

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:spatial-cross-product
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: The inner cross product supplies an oriented area normal.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: The scalar triple product equals the determinant of the three edge columns.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
- Item:
  - target: math:concept:vector-projection
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Only the height perpendicular to the base contributes to volume.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:

## Examples

- Item:
  - id: math:example:scalar-triple-product:case-1
  - title: Build the stated frame
  - role: applied_model
  - question: Why can a slanted storage frame keep the same volume?
  - setting: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
  - assumptions:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - inputs:
    - length: 2
    - width: 3
    - height: 1
    - shear: 1
  - steps:
    - Item:
      - index: 1
      - expression: a = 2; b = 3; h = 1; s = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: T = u · (v × w); V = |T|
      - reason: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - index: 3
      - expression: 6.0 m³
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 6.0 m³
  - interpretation: The perpendicular extents give a signed product of 6 m³.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 6.0}
  - limits: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - preset:
    - length: 2
    - width: 3
    - height: 1
    - shear: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
- Item:
  - id: math:example:scalar-triple-product:case-2
  - title: Reverse the signed height
  - role: applied_model
  - question: Why can a slanted storage frame keep the same volume?
  - setting: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
  - assumptions:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - inputs:
    - length: 2
    - width: 3
    - height: -1
    - shear: 1
  - steps:
    - Item:
      - index: 1
      - expression: a = 2; b = 3; h = -1; s = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: T = u · (v × w); V = |T|
      - reason: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - index: 3
      - expression: -6.0 m³
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: -6.0 m³
  - interpretation: The sign reverses, while geometric volume remains 6 m³.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": -6.0}
  - limits: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - preset:
    - length: 2
    - width: 3
    - height: -1
    - shear: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
- Item:
  - id: math:example:scalar-triple-product:case-3
  - title: Shear without changing the volume
  - role: applied_model
  - question: Why can a slanted storage frame keep the same volume?
  - setting: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
  - assumptions:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - inputs:
    - length: 2
    - width: 3
    - height: 1
    - shear: -2
  - steps:
    - Item:
      - index: 1
      - expression: a = 2; b = 3; h = 1; s = -2
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: T = u · (v × w); V = |T|
      - reason: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - index: 3
      - expression: 6.0 m³
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 6.0 m³
  - interpretation: The sideways floor shear changes the drawing but not a b h.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 6.0}
  - limits: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - preset:
    - length: 2
    - width: 3
    - height: 1
    - shear: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
- Item:
  - id: math:example:scalar-triple-product:case-4
  - title: Collapse the height
  - role: applied_model
  - question: Why can a slanted storage frame keep the same volume?
  - setting: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
  - assumptions:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - inputs:
    - length: 2
    - width: 3
    - height: 0
    - shear: 1
  - steps:
    - Item:
      - index: 1
      - expression: a = 2; b = 3; h = 0; s = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: T = u · (v × w); V = |T|
      - reason: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - index: 3
      - expression: 0.0 m³
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m³
  - interpretation: Visible slanted edges can remain when all three vectors are coplanar and the volume is zero.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - preset:
    - length: 2
    - width: 3
    - height: 0
    - shear: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
- Item:
  - id: math:example:scalar-triple-product:case-5
  - title: Change the perpendicular extents
  - role: applied_model
  - question: Why can a slanted storage frame keep the same volume?
  - setting: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
  - assumptions:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - inputs:
    - length: 3
    - width: 2
    - height: 1.5
    - shear: 1
  - steps:
    - Item:
      - index: 1
      - expression: a = 3; b = 2; h = 1.5; s = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: T = u · (v × w); V = |T|
      - reason: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
    - Item:
      - index: 3
      - expression: 9.0 m³
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 9.0 m³
  - interpretation: Changing actual perpendicular extents changes the volume, unlike a pure shear.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 9.0}
  - limits: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - preset:
    - length: 3
    - width: 2
    - height: 1.5
    - shear: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
    - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.

## Interactive

- component id: component:scalar-triple-product
- renderer id: scalar-triple-product-visual-model
- renderer version: 1
- model id: scalar-triple-product-visual-model
- model revision: 1
- expression id: ast:scalar-triple-product:expression
- interaction status: implemented
- description: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
- controls:
  - Item:
    - id: length
    - type: number
    - default: 2
    - min: 0
    - max: 3
    - step: 0.05
  - Item:
    - id: width
    - type: number
    - default: 3
    - min: 0
    - max: 3
    - step: 0.05
  - Item:
    - id: height
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: shear
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 1
      - shear: 1
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: -1
      - shear: 1
    - status: valid
    - output: -6.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 1
      - shear: -2
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 0
      - shear: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - length: 3
      - width: 2
      - height: 1.5
      - shear: 1
    - status: valid
    - output: 9.0
  - Item:
    - input:
      - length: 0
      - width: 3
      - height: 1
      - shear: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - length: 3
      - width: 3
      - height: 1
      - shear: 1
    - status: valid
    - output: 9.0
  - Item:
    - input:
      - length: 2
      - width: 0
      - height: 1
      - shear: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: -2
      - shear: 1
    - status: valid
    - output: -12.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 2
      - shear: 1
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 1
      - shear: 2
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 3
      - shear: 1
    - status: invalid_parameters
  - Item:
    - input:
      - length: 2
      - width: 3
      - height: 1
      - shear: 1
    - status: invalid_parameters
- compute: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
- numeric tolerance: 1e-10
- invariants:
  - A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.
  - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
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
  - prompt: Why can a slanted storage frame keep the same volume?
  - answer: For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.

## Representations

- Item:
  - kind: geometry
  - description: A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Signed third-edge height h.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Build the stated frame
  - mapping: The perpendicular extents give a signed product of 6 m³.
  - limitations: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - evidence kind: constructed_example
  - example ref: math:example:scalar-triple-product:case-1
- Item:
  - context: Reverse the signed height
  - mapping: The sign reverses, while geometric volume remains 6 m³.
  - limitations: This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.
  - evidence kind: constructed_example
  - example ref: math:example:scalar-triple-product:case-2

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
