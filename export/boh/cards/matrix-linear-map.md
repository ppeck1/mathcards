---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:matrix-linear-map", "id": "math:concept:matrix-linear-map", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:matrix-linear-map", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "782e6406444daaaf964188af17f7de85cc2934bb3423d3b51a2c14ea13942802"}, "purpose": "Transform a vector and its surrounding grid with the same matrix rule.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "782e6406444daaaf964188af17f7de85cc2934bb3423d3b51a2c14ea13942802", "status": "draft", "title": "Matrix linear maps", "topics": ["mathematics", "linear-algebra", "geometry", "matrix transformation", "2 by 2 matrix", "shear scale rotation reflection"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Matrix linear maps

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:matrix-linear-map; revision 0.1.0-draft. Setting: Finite real two-dimensional Euclidean coordinates. Expression: $T_A(x,y)=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}ax+by\\cx+dy\end{pmatrix}.$. Conditions required for a defined value (a case may test their violation): Keep the declared matrix row order and column-vector input. The matrix and vector dimensions must agree. Linear maps fix zero and preserve vector addition and real scalar multiplication. The mapped unit-square area is |ad-bc|; zero determinant is a valid collapse. Scope: The formal matrix rule is defined on all of R². The UI restricts coefficients to [-2,2] and displayed input components to [-3,3]; this viewing box is not itself a vector space. No translation, nonlinear warp, arbitrary matrix dimensions or inverse computation is implemented. Singular matrices remain valid maps. Stories declare physical coordinate units separately.

## Schema Version

0.1.0

## Id

math:concept:matrix-linear-map

## Slug

matrix-linear-map

## Type

concept

## Title

Matrix linear maps

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

- matrix transformation
- 2 by 2 matrix
- shear scale rotation reflection

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Transform a vector and its surrounding grid with the same matrix rule.

## Meaning

A 2 by 2 real matrix combines its columns according to the input coordinates. The two row calculations produce output coordinates. The linear map fixes the origin and can stretch, shear, rotate, reflect or collapse shapes.

## Prerequisites

- required:
  - math:concept:vector
  - math:concept:function
- helpful:
  - math:concept:inner-product
- depth:
  - math:concept:linear-map
  - math:concept:matrix-product

## Definition

- setting: Finite real two-dimensional Euclidean coordinates.
- formal latex: T_A(x,y)=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}ax+by\\cx+dy\end{pmatrix}.
- signature:
  - a,b,c,d: matrix entries in [-2,2], row order [[a,b],[c,d]]
  - x,y: input column coordinates in [-3,3]
  - mappedX: ax+by; the first coordinate and primary numeric output
  - mappedY: cx+dy; the second coordinate
  - determinant: ad-bc; zero means no unique inverse
  - area: |ad-bc|, area of the mapped unit square
- conditions:
  - Keep the declared matrix row order and column-vector input.
  - The matrix and vector dimensions must agree.
  - Linear maps fix zero and preserve vector addition and real scalar multiplication.
  - The mapped unit-square area is |ad-bc|; zero determinant is a valid collapse.
- domain notes: The formal matrix rule is defined on all of R². The UI restricts coefficients to [-2,2] and displayed input components to [-3,3]; this viewing box is not itself a vector space. No translation, nonlinear warp, arbitrary matrix dimensions or inverse computation is implemented. Singular matrices remain valid maps. Stories declare physical coordinate units separately.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:mit:linear-transformations

## Grammar

- pronunciation: Matrix linear maps in real two-dimensional coordinates
- expression latex: T_A(x,y)=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}ax+by\\cx+dy\end{pmatrix}.
- formation rule: output=mappedX=a*x+b*y; mappedY=c*x+d*y; determinant=signedArea=a*d-b*c; area=abs(determinant); inverseExists=(determinant!=0); inputNorm=hypot(x,y); mappedNorm=hypot(mappedX,mappedY).
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
    - token: x
    - role: first input component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: y
    - role: second input component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: x′
    - role: first mapped component
    - type: Declared scalar, ordered component or derived quantity
  - Item:
    - token: y′
    - role: second mapped component
    - type: Declared scalar, ordered component or derived quantity
- ast:
  - id: ast:matrix-linear-map:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:d
      - kind: variable
      - symbol: d
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:matrix-linear-map:model
    - Item:
      - id: n:ax
      - kind: multiply
      - arguments:
        - n:a
        - n:x
      - type: Real scalar
    - Item:
      - id: n:by
      - kind: multiply
      - arguments:
        - n:b
        - n:y
      - type: Real scalar
    - Item:
      - id: n:cx
      - kind: multiply
      - arguments:
        - n:c
        - n:x
      - type: Real scalar
    - Item:
      - id: n:dy
      - kind: multiply
      - arguments:
        - n:d
        - n:y
      - type: Real scalar
    - Item:
      - id: n:mappedX
      - kind: add
      - arguments:
        - n:ax
        - n:by
      - type: Real scalar
    - Item:
      - id: n:mappedY
      - kind: add
      - arguments:
        - n:cx
        - n:dy
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
      - argument: n:mappedX
      - type: Real to ordered real pair
    - Item:
      - id: n:output
      - kind: apply
      - function: n:first
      - argument: n:mappedY
      - type: Ordered real pair (mappedX,mappedY); primary numeric readout is mappedX
  - scopes:
    - Item:
      - id: scope:matrix-linear-map:model
      - kind: modelExpression
      - free variables:
        - a
        - b
        - c
        - d
        - x
        - y
      - domain condition: output=mappedX=a*x+b*y; mappedY=c*x+d*y; determinant=signedArea=a*d-b*c; area=abs(determinant); inverseExists=(determinant!=0); inputNorm=hypot(x,y); mappedNorm=hypot(mappedX,mappedY).
- parse errors:
  - Item:
    - input: Use (a*x+c*y,b*x+d*y) for the stated row layout
    - status: entry_order_error
    - reason: For [[a,b],[c,d]] times the column (x,y), the outputs are (a*x+b*y,c*x+d*y).
  - Item:
    - input: Add a nonzero translation and call the whole rule linear
    - status: setting_error
    - reason: A linear map fixes the origin; adding a nonzero translation makes an affine rule.
  - Item:
    - input: Treat determinant zero as undefined matrix multiplication
    - status: domain_error
    - reason: The transformation is defined but has no unique inverse.
- ast coverage: Both row calculations appear in the tree. An ordered-pair constructor combines mappedX and mappedY into the full vector root. The primary scalar readout and numeric fixtures track mappedX. This is structural metadata, not a general formula parser or proof.
- output symbol bindings:
  - x′: mappedX
  - y′: mappedY

## Properties

- Item:
  - claim: T_A(0,0)=(0,0).
  - conditions: No translation is added.
  - derivation: Both row calculations sum products with zero inputs.
  - status: author-derived for stated conditions; independent review pending
- Item:
  - claim: A real 2 by 2 matrix has a unique inverse exactly when ad-bc is nonzero.
  - conditions: Square real matrix with the stated entries.
  - derivation: A zero determinant collapses the reference area; a nonzero determinant admits the standard inverse formula.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:matrix-linear-map:collapse

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
  - conditions: Use two-dimensional vectors in the stated bases.
  - reason: The map takes an ordered input vector to an ordered output vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Row and input dimensions agree.
  - reason: Each output coordinate follows the dot-product rule between one row and the input.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: Use absolute determinant for geometric area.
  - reason: The determinant distinguishes area scale, reversal and collapse.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: Output and input dimensions must match.
  - reason: Applying matrix maps in succession is function composition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:matrix-linear-map:shear
  - title: Skew a logo without enlarging its area
  - role: applied_model
  - question: An editor uses A=[[1,1],[0,1]]. Where does point (1,1) go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
  - inputs:
    - a: 1
    - b: 1
    - c: 0
    - d: 1
    - x: 1
    - y: 1
  - steps:
    - Item:
      - index: 1
      - expression: x'=1*1+1*1=2; y'=0*1+1*1=1
      - reason: Each row gives one output coordinate.
    - Item:
      - index: 2
      - expression: det(A)=1*1-1*0=1
      - reason: The unit square becomes a sheared parallelogram with unchanged area.
  - result:
    - exact: Mapped point (2,1); unit-square area 1
  - interpretation: The top shifts sideways while base and perpendicular height preserve area.
  - independent check:
    - method: Column combination
    - expected: One copy of column (1,0) plus one of column (1,1) gives (2,1).
  - limits: Ideal coordinate transformation; raster sampling is not modeled.
  - preset:
    - a: 1
    - b: 1
    - c: 0
    - d: 1
    - x: 1
    - y: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
- Item:
  - id: math:example:matrix-linear-map:stretch
  - title: Stretch a drawing in one direction
  - role: applied_model
  - question: For A=[[2,0],[0,1]], where does (1,2) go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
  - inputs:
    - a: 2
    - b: 0
    - c: 0
    - d: 1
    - x: 1
    - y: 2
  - steps:
    - Item:
      - index: 1
      - expression: x'=2*1+0*2=2; y'=0*1+1*2=2
      - reason: The first coordinate doubles while the second stays fixed.
    - Item:
      - index: 2
      - expression: det(A)=2; unit-square area=2
      - reason: The geometric area factor is the determinant magnitude.
  - result:
    - exact: Mapped point (2,2); unit-square area 2
  - interpretation: Different coordinate directions can have different scale factors.
  - independent check:
    - method: Rectangle check
    - expected: The mapped unit square is a 2 by 1 rectangle, with area 2.
  - limits: The scale factors are dimensionless; physical coordinate units need a separate declaration.
  - preset:
    - a: 2
    - b: 0
    - c: 0
    - d: 1
    - x: 1
    - y: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
- Item:
  - id: math:example:matrix-linear-map:rotation
  - title: Turn a pointer through a right angle
  - role: applied_model
  - question: For A=[[0,-1],[1,0]], where does (1,2) go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
  - inputs:
    - a: 0
    - b: -1
    - c: 1
    - d: 0
    - x: 1
    - y: 2
  - steps:
    - Item:
      - index: 1
      - expression: x'=0*1-1*2=-2; y'=1*1+0*2=1
      - reason: Keep each matrix row in its declared order.
    - Item:
      - index: 2
      - expression: det(A)=1; ||(1,2)||=||(-2,1)||=sqrt(5)
      - reason: This selected orthogonal matrix rotates through 90 degrees.
  - result:
    - exact: Mapped point (-2,1)
  - interpretation: Rotation is one special linear map; edited matrices need not preserve angles or lengths.
  - independent check:
    - method: Basis-direction check
    - expected: The first unit arrow goes up and the second goes left, matching the stated turn.
  - limits: Only this stated rotation is asserted to preserve Euclidean length.
  - preset:
    - a: 0
    - b: -1
    - c: 1
    - d: 0
    - x: 1
    - y: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
- Item:
  - id: math:example:matrix-linear-map:reflection
  - title: Mirror across the vertical axis
  - role: applied_model
  - question: For A=[[-1,0],[0,1]], where does (2,1) go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
  - inputs:
    - a: -1
    - b: 0
    - c: 0
    - d: 1
    - x: 2
    - y: 1
  - steps:
    - Item:
      - index: 1
      - expression: x'=-1*2=-2; y'=1
      - reason: Negate the horizontal coordinate only.
    - Item:
      - index: 2
      - expression: det(A)=-1; unit-square area=1
      - reason: The sign records orientation reversal, not negative physical area.
  - result:
    - exact: Mapped point (-2,1); unit-square area 1
  - interpretation: The reflected square keeps its area while reversing its ordered edges.
  - independent check:
    - method: Apply-twice check
    - expected: The same reflection takes (-2,1) back to (2,1).
  - limits: The reflection axis is chosen by this particular matrix; translation is excluded.
  - preset:
    - a: -1
    - b: 0
    - c: 0
    - d: 1
    - x: 2
    - y: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
- Item:
  - id: math:example:matrix-linear-map:collapse
  - title: Flatten a pattern onto a line
  - role: applied_model
  - question: For A=[[1,2],[0,0]], where does (1,1) go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.
  - inputs:
    - a: 1
    - b: 2
    - c: 0
    - d: 0
    - x: 1
    - y: 1
  - steps:
    - Item:
      - index: 1
      - expression: x'=1+2=3; y'=0
      - reason: A zero second row removes the vertical output component.
    - Item:
      - index: 2
      - expression: det(A)=0; unit-square area=0
      - reason: Parallel columns collapse the reference square onto one line.
  - result:
    - exact: Mapped point (3,0); area 0; no inverse
  - interpretation: A singular matrix is still a valid transformation, but it loses information.
  - independent check:
    - method: Different-input check
    - expected: Both (1,1) and (3,0) map to (3,0), so an inverse could not choose a unique original.
  - limits: The mapped point remains defined even though no unique inverse exists.
  - preset:
    - a: 1
    - b: 2
    - c: 0
    - d: 0
    - x: 1
    - y: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A real 2 by 2 matrix acts on the column input (x,y).
    - The origin is fixed; no translation is added.
    - Matrix entries and input components obey their bounds; area uses a unit-square reference.

## Interactive

- component id: matrix-linear-map-visual-model
- renderer id: matrix-linear-map-visual-model
- renderer version: 1.0.0
- model id: matrix-linear-map-visual-model
- model revision: 1
- expression id: ast:matrix-linear-map:expression
- interaction status: implemented
- description: The matrix moves an input arrow, basis arrows and unit square using one rule. Both output coordinates are shown; the Graph follows the first output coordinate with other settings fixed.
- controls:
  - Item:
    - id: a
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: b
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: c
    - type: number
    - default: 0
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: d
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: y
    - type: number
    - default: 1
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
      - b: 1
      - c: 0
      - d: 1
      - x: 1
      - y: 1
    - output: 2
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - d: 1
      - x: -2
      - y: 3
    - output: -2
  - Item:
    - input:
      - a: 0
      - b: -1
      - c: 1
      - d: 0
      - x: 1
      - y: 2
    - output: -2
  - Item:
    - input:
      - a: -1
      - b: 0
      - c: 0
      - d: 1
      - x: 2
      - y: 1
    - output: -2
  - Item:
    - input:
      - a: 1
      - b: 2
      - c: 0
      - d: 0
      - x: 1
      - y: 1
    - output: 3
  - Item:
    - input:
      - a: 0
      - b: 0
      - c: 0
      - d: 0
      - x: 1
      - y: 1
    - output: 0
  - Item:
    - input:
      - a: 2
      - b: -2
      - c: -2
      - d: 2
      - x: 3
      - y: -3
    - output: 12
  - Item:
    - input:
      - a: 0.5
      - b: 0.25
      - c: -0.5
      - d: 1
      - x: 2
      - y: -2
    - output: 0.5
  - Item:
    - input:
      - a: 2.1
      - b: 1
      - c: 0
      - d: 1
      - x: 1
      - y: 1
    - status: invalid_parameters
  - Item:
    - input:
      - a: 1
      - b: 1
      - c: 0
      - d: 1
      - x: 3.1
      - y: 1
    - status: invalid_parameters
- compute: output=mappedX=a*x+b*y; mappedY=c*x+d*y; determinant=signedArea=a*d-b*c; area=abs(determinant); inverseExists=(determinant!=0); inputNorm=hypot(x,y); mappedNorm=hypot(mappedX,mappedY).
- numeric tolerance: 1e-10
- invariants:
  - Keep the declared matrix row order and column-vector input.
  - The matrix and vector dimensions must agree.
  - Linear maps fix zero and preserve vector addition and real scalar multiplication.
  - The mapped unit-square area is |ad-bc|; zero determinant is a valid collapse.
- limits:
  - The formal rule is a real linear map on R²; the UI displays only bounded coefficients and inputs, without translation.
  - The primary scalar Graph/readout is mappedX; the complete vector is (mappedX,mappedY).
  - A zero determinant is a valid singular map; no inverse is computed.
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
  - prompt: Does determinant zero make multiplication undefined?
  - answer: No. The output is defined; a unique inverse is unavailable.
- Item:
  - prompt: Why do the columns matter?
  - answer: They are the images of the two unit-coordinate arrows, combined using the input coordinates.

## Representations

- Item:
  - kind: geometry
  - description: The matrix moves an input arrow, basis arrows and unit square using one rule. Both output coordinates are shown; the Graph follows the first output coordinate with other settings fixed.
- Item:
  - kind: graph
  - description: A numeric slice of the primary output as one declared input varies; the other controls stay fixed.
- Item:
  - kind: substitution
  - description: The same current values appear in the substituted calculation and in the scene.

## Applications

- Item:
  - context: Illustration-editor shear
  - mapping: One matrix transforms every vector and grid point; a logo corner moves from (1,1) to (2,1).
  - limitations: Ideal geometry; pixel sampling excluded.
  - evidence kind: constructed_example
  - example ref: math:example:matrix-linear-map:shear
- Item:
  - context: Pattern collapse
  - mapping: A zero output row flattens a pattern while retaining a defined output coordinate.
  - limitations: Information loss prevents unique reversal.
  - evidence kind: constructed_example
  - example ref: math:example:matrix-linear-map:collapse

## Source Refs

- source:mit:linear-transformations

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded two-dimensional fixtures, distinct Geometry/Graph views and linked modular story.

## Referenced source registry

- Source ID: source:mit:linear-transformations. [MIT OpenCourseWare 18.06SC, Linear Transformations and their Matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/). Locator: Session overview and linked lecture transcript: coordinate matrices map input vectors to output vectors. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
