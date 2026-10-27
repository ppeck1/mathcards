---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:determinant", "id": "math:concept:determinant", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:determinant", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "56e5a0f7ef35112f273462520e55d1f86cb83af8ffbcabe1487528b933b259a7"}, "purpose": "Read area scale, orientation reversal and collapse from one signed number.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "56e5a0f7ef35112f273462520e55d1f86cb83af8ffbcabe1487528b933b259a7", "status": "draft", "title": "Determinant", "topics": ["mathematics", "linear-algebra", "geometry", "signed area scale", "2 by 2 determinant", "orientation and collapse"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Determinant

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:determinant; revision 0.1.0-draft. Setting: Finite real two-dimensional Euclidean coordinates. Expression: $A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad\det(A)=ad-bc,\quad\operatorname{area}(A[0,1]^2)=|\det(A)|.$. Conditions required for a defined value (a case may test their violation): Use a real square 2 by 2 matrix with fixed entry order. Geometric area is the absolute determinant, not negative material. The sign records preservation or reversal of ordered-axis orientation. Zero determinant is valid and means collapse and no unique inverse. Scope: This bounded real 2 by 2 specimen uses coefficients in [-3,3] and a unit-square reference. It does not calculate higher-dimensional determinants, arbitrary-region areas or a matrix inverse. The general determinant concept is broader.

## Schema Version

0.1.0

## Id

math:concept:determinant

## Slug

determinant

## Type

concept

## Title

Determinant

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

- signed area scale
- 2 by 2 determinant
- orientation and collapse

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Read area scale, orientation reversal and collapse from one signed number.

## Meaning

For a real 2 by 2 matrix, ad-bc is the determinant. Its magnitude is the area of the transformed unit square. The sign records orientation; zero identifies collapse and absence of a unique inverse.

## Prerequisites

- required:
  - math:concept:matrix-linear-map
- helpful:
  - math:concept:vector
- depth:
  - math:concept:rank
  - math:concept:matrix-product

## Definition

- setting: Finite real two-dimensional Euclidean coordinates.
- formal latex: A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad\det(A)=ad-bc,\quad\operatorname{area}(A[0,1]^2)=|\det(A)|.
- signature:
  - a,b,c,d: real entries in [-3,3], row order [[a,b],[c,d]]
  - termAD: a*d, first product
  - termBC: b*c, second product to subtract
  - output: signed determinant ad-bc
  - area: nonnegative |ad-bc| of mapped unit square
  - inverseExists: true exactly when the computed determinant is nonzero
- conditions:
  - Use a real square 2 by 2 matrix with fixed entry order.
  - Geometric area is the absolute determinant, not negative material.
  - The sign records preservation or reversal of ordered-axis orientation.
  - Zero determinant is valid and means collapse and no unique inverse.
- domain notes: This bounded real 2 by 2 specimen uses coefficients in [-3,3] and a unit-square reference. It does not calculate higher-dimensional determinants, arbitrary-region areas or a matrix inverse. The general determinant concept is broader.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:gatech:determinants-volumes

## Grammar

- pronunciation: Determinant in real two-dimensional coordinates
- expression latex: A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad\det(A)=ad-bc,\quad\operatorname{area}(A[0,1]^2)=|\det(A)|.
- formation rule: termAD=a*d; termBC=b*c; output=determinant=signedArea=termAD-termBC; area=abs(output); orientation=sign(output); inverseExists=(output!=0).
- precedence: Multiply corresponding entries before adding or subtracting. Ordered coordinates and matrix entries retain their stated positions.
- symbols:
  - Item:
    - token: a
    - role: matrix entry in its stated position
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: b
    - role: matrix entry in its stated position
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: c
    - role: matrix entry in its stated position
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: d
    - role: matrix entry in its stated position
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: ad
    - role: first scalar contribution
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: bc
    - role: second scalar contribution
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: det(A)
    - role: signed area scale
    - type: Declared scalar, ordered component or derived quantity
- ast:
  - id: ast:determinant:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:determinant:model
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:determinant:model
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:determinant:model
    - Item:
      - id: n:d
      - kind: variable
      - symbol: d
      - type: Finite real control
      - scope ref: scope:determinant:model
    - Item:
      - id: n:ad
      - kind: multiply
      - arguments:
        - n:a
        - n:d
      - type: Real scalar
    - Item:
      - id: n:bc
      - kind: multiply
      - arguments:
        - n:b
        - n:c
      - type: Real scalar
    - Item:
      - id: n:output
      - kind: subtract
      - arguments:
        - n:ad
        - n:bc
      - type: Real scalar
  - scopes:
    - Item:
      - id: scope:determinant:model
      - kind: modelExpression
      - free variables:
        - a
        - b
        - c
        - d
      - domain condition: termAD=a*d; termBC=b*c; output=determinant=signedArea=termAD-termBC; area=abs(output); orientation=sign(output); inverseExists=(output!=0).
- parse errors:
  - Item:
    - input: Use ad+bc as the determinant
    - status: operation_error
    - reason: The real 2 by 2 determinant in this row order is ad-bc.
  - Item:
    - input: Treat determinant -1 as geometric area -1
    - status: sign_error
    - reason: Geometric area uses the absolute determinant; the sign records orientation.
  - Item:
    - input: Divide by determinant zero to reverse the map
    - status: undefined_inverse
    - reason: A zero determinant is valid, but the map has no unique inverse.
- ast coverage: The tree forms a*d and b*c, then subtracts the second from the first. Unsigned area, orientation and inverse availability are separately named auxiliary outputs. This is structural metadata, not a general parser or proof.
- output symbol bindings:
  - ad: termAD
  - bc: termBC
  - det(A): output

## Properties

- Item:
  - claim: Swapping two columns negates the determinant and preserves its magnitude.
  - conditions: Ordered columns of a real 2 by 2 matrix.
  - derivation: The swapped determinant is bc-ad=-(ad-bc).
  - status: author-derived for stated conditions; independent review pending
- Item:
  - claim: Parallel columns have determinant zero.
  - conditions: Real plane columns, including zero columns.
  - derivation: If the second column is k times the first, a*(kc)-(ka)*c=0.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:determinant:collapse

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Real 2 by 2 matrix and unit-square reference.
  - reason: The matrix transforms a unit-square reference to area |det(A)|.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Keep column order when interpreting orientation.
  - reason: The transformed unit-square edges are the column vectors.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Squared area is ||u||²||v||²-(u·v)² for real plane edge vectors.
  - reason: Norm and dot-product data independently check planar parallelogram area.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:determinant:print-tile
  - title: Double a tile in one direction
  - role: applied_model
  - question: For A=[[1,0],[0,2]], what happens to the unit-square footprint?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
  - inputs:
    - a: 1
    - b: 0
    - c: 0
    - d: 2
  - steps:
    - Item:
      - index: 1
      - expression: det(A)=1*2-0*0=2
      - reason: Multiply the main diagonal pair, then subtract the other product.
    - Item:
      - index: 2
      - expression: area=|2|=2 square units
      - reason: Use a nonnegative geometric area.
  - result:
    - exact: Determinant 2; area 2
  - interpretation: Vertical extent doubles while the order of the reference edges is preserved.
  - independent check:
    - method: Rectangle check
    - expected: The mapped square is a 1 by 2 rectangle, whose area is 2.
  - limits: This is a reference footprint, not measured material stretch or printing behavior.
  - preset:
    - a: 1
    - b: 0
    - c: 0
    - d: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
- Item:
  - id: math:example:determinant:shear
  - title: Skew a tile while keeping its area
  - role: applied_model
  - question: For A=[[1,2],[0,1]], what is the reference area?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
  - inputs:
    - a: 1
    - b: 2
    - c: 0
    - d: 1
  - steps:
    - Item:
      - index: 1
      - expression: det(A)=1*1-2*0=1
      - reason: The second product vanishes in this chosen shear.
    - Item:
      - index: 2
      - expression: area=1; orientation preserved
      - reason: Base and perpendicular height remain one.
  - result:
    - exact: Determinant 1; area 1
  - interpretation: A slanted edge can become longer without changing the parallelogram area.
  - independent check:
    - method: Base-height check
    - expected: Horizontal base 1 times perpendicular height 1 gives area 1.
  - limits: Edge lengths without an angle or height do not determine area.
  - preset:
    - a: 1
    - b: 2
    - c: 0
    - d: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
- Item:
  - id: math:example:determinant:mirror
  - title: A mirrored footprint has positive area
  - role: applied_model
  - question: For A=[[-1,0],[0,1]], what are determinant and area?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
  - inputs:
    - a: -1
    - b: 0
    - c: 0
    - d: 1
  - steps:
    - Item:
      - index: 1
      - expression: det(A)=(-1)*1-0*0=-1
      - reason: The ordered axes reverse orientation.
    - Item:
      - index: 2
      - expression: area=|-1|=1
      - reason: The minus sign is not a negative amount of material.
  - result:
    - exact: Determinant -1; area 1
  - interpretation: The reflected reference tile keeps its area while reversing handedness.
  - independent check:
    - method: Double-reflection check
    - expected: Applying the reflection twice gives the identity with determinant 1.
  - limits: Orientation is relative to the declared order of axes; area is nonnegative.
  - preset:
    - a: -1
    - b: 0
    - c: 0
    - d: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
- Item:
  - id: math:example:determinant:general
  - title: A skewed two-edge footprint
  - role: applied_model
  - question: Adjacent edge vectors are (2,1) and (1,2). What area do they enclose?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
  - inputs:
    - a: 2
    - b: 1
    - c: 1
    - d: 2
  - steps:
    - Item:
      - index: 1
      - expression: det(A)=2*2-1*1=3
      - reason: Use the ordered vectors as matrix columns.
    - Item:
      - index: 2
      - expression: area=3 square units
      - reason: The determinant magnitude is the parallelogram area.
  - result:
    - exact: Determinant 3; area 3
  - interpretation: The formula works even when neither edge follows an axis.
  - independent check:
    - method: Independent vector check
    - expected: Each edge has squared length 5 and their dot product is 4; squared area is 5*5-4²=9.
  - limits: The region is a planar parallelogram; arbitrary curved-region areas need further assumptions.
  - preset:
    - a: 2
    - b: 1
    - c: 1
    - d: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
- Item:
  - id: math:example:determinant:collapse
  - title: Parallel edges lose their footprint
  - role: applied_model
  - question: For A=[[1,2],[1,2]], does the unit square keep area?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.
  - inputs:
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - steps:
    - Item:
      - index: 1
      - expression: det(A)=1*2-2*1=0
      - reason: The two scalar contributions cancel.
    - Item:
      - index: 2
      - expression: columns (1,1) and (2,2) are parallel; area=0
      - reason: The square collapses to one line.
  - result:
    - exact: Determinant 0; area 0; no inverse
  - interpretation: This is a valid transformation that loses a dimension, not a rendering failure.
  - independent check:
    - method: Column-dependence check
    - expected: The second column is twice the first, so the perpendicular height is zero.
  - limits: No unique inverse is claimed after collapse.
  - preset:
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real square matrix uses row order [[a,b],[c,d]].
    - Its columns are the images of the ordered unit-coordinate arrows.
    - Geometric area is |det(A)|; the determinant sign describes orientation.

## Interactive

- component id: determinant-visual-model
- renderer id: determinant-visual-model
- renderer version: 1.0.0
- model id: determinant-visual-model
- model revision: 1
- expression id: ast:determinant:expression
- interaction status: implemented
- description: Two scalar products unfold into a signed determinant. The same matrix stretches, reverses or collapses a unit square; the Graph follows determinant versus one coefficient.
- controls:
  - Item:
    - id: a
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: b
    - type: number
    - default: 0
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: c
    - type: number
    - default: 0
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: d
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
- expected cases:
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - d: 2
    - output: 2
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - d: 1
    - output: 1
  - Item:
    - input:
      - a: 0
      - b: 0
      - c: 0
      - d: 0
    - output: 0
  - Item:
    - input:
      - a: -1
      - b: 0
      - c: 0
      - d: 1
    - output: -1
  - Item:
    - input:
      - a: 1
      - b: 2
      - c: 0
      - d: 1
    - output: 1
  - Item:
    - input:
      - a: 2
      - b: 1
      - c: 1
      - d: 2
    - output: 3
  - Item:
    - input:
      - a: 1
      - b: 2
      - c: 1
      - d: 2
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: -3
      - c: -3
      - d: 3
    - output: 0
  - Item:
    - input:
      - a: 0.5
      - b: -0.5
      - c: 0.25
      - d: 1
    - output: 0.625
  - Item:
    - input:
      - a: 1
      - b: 3.1
      - c: 0
      - d: 2
    - status: invalid_parameters
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - d: -3.1
    - status: invalid_parameters
- compute: termAD=a*d; termBC=b*c; output=determinant=signedArea=termAD-termBC; area=abs(output); orientation=sign(output); inverseExists=(output!=0).
- numeric tolerance: 1e-10
- invariants:
  - Use a real square 2 by 2 matrix with fixed entry order.
  - Geometric area is the absolute determinant, not negative material.
  - The sign records preservation or reversal of ordered-axis orientation.
  - Zero determinant is valid and means collapse and no unique inverse.
- limits:
  - Real 2 by 2 determinants with bounded entries only.
  - Signed determinant and unsigned area remain separate.
  - Collapse is a valid state; no inverse is computed.
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
  - prompt: Can determinant -1 mean negative area?
  - answer: No. Geometric area is 1; the minus sign records orientation reversal.
- Item:
  - prompt: Is a zero determinant an invalid matrix?
  - answer: No. It is a valid singular matrix with no unique inverse.

## Representations

- Item:
  - kind: geometry
  - description: Two scalar products unfold into a signed determinant. The same matrix stretches, reverses or collapses a unit square; the Graph follows determinant versus one coefficient.
- Item:
  - kind: graph
  - description: A numeric slice of the primary output as one declared input varies; the other controls stay fixed.
- Item:
  - kind: substitution
  - description: The same current values appear in the substituted calculation and in the scene.

## Applications

- Item:
  - context: Print-tile footprint
  - mapping: A matrix changes the reference unit square; determinant magnitude gives its new area.
  - limitations: Ideal coordinates; material properties excluded.
  - evidence kind: constructed_example
  - example ref: math:example:determinant:print-tile
- Item:
  - context: Pattern collapse
  - mapping: Parallel transformed edges flatten the square into a line and produce zero area.
  - limitations: No unique inverse survives the loss of dimension.
  - evidence kind: constructed_example
  - example ref: math:example:determinant:collapse

## Source Refs

- source:gatech:determinants-volumes

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded two-dimensional fixtures, distinct Geometry/Graph views and linked modular story.

## Referenced source registry

- Source ID: source:gatech:determinants-volumes. [Georgia Tech Interactive Linear Algebra, 4.3 Determinants and Volumes](https://textbooks.math.gatech.edu/ila/determinants-volumes.html). Locator: Determinant magnitude as parallelogram area; zero-area collapse; signed orientation. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
