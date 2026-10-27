---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:matrix-product", "id": "math:concept:matrix-product", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:matrix-product", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "758bf405067700f2e981905833d3baa3200e56cd83864ae6717e7d45aac40cce"}, "purpose": "Follow a point through two transformations and compare the result when their order changes.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "758bf405067700f2e981905833d3baa3200e56cd83864ae6717e7d45aac40cce", "status": "draft", "title": "Matrix products and order", "topics": ["mathematics", "linear-algebra", "geometry", "matrix multiplication", "composing matrix maps", "AB versus BA", "two shears"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Matrix products and order

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:matrix-product; revision 0.1.0-draft. Setting: Real vector spaces with an explicit two-dimensional coordinate model. Expression: $(AB)_{ij}=\sum_{k=1}^{n}A_{ik}B_{kj},\quad (AB)z=A(Bz).\quad A=\begin{pmatrix}1&a\\0&1\end{pmatrix},\ B=\begin{pmatrix}1&0\\b&1\end{pmatrix};\quad AB=\begin{pmatrix}1+ab&a\\b&1\end{pmatrix},\ BA=\begin{pmatrix}1&a\\b&1+ab\end{pmatrix}.$. Conditions required for a defined value (a case may test their violation): Matrix multiplication requires compatible inner dimensions. In this live family both matrices are real 2 by 2 maps acting on column vectors. AB means apply B first, then A; BA means apply A first, then B. The live matrices are the two shears A=[[1,a],[0,1]] and B=[[1,0],[b,1]]; the control does not represent arbitrary matrices. Each shear and either product has determinant 1, preserving signed unit area; this does not imply length or angle preservation. Changing order need not change every input vector. Equality at one point, especially zero, does not prove AB=BA. Scope: In general an m by n matrix can multiply an n by p matrix, producing an m by p matrix. The live model is deliberately restricted to two real 2 by 2 shear families with bounded strengths and one bounded input point. It is not an arbitrary matrix calculator. Changing the order selects a discrete operation sequence; it does not continuously blend the matrices into a third operation. These area-preserving shears do not cover singular products or arbitrary scaling. Coordinate units are abstract unless a worked example declares compatible physical units.

## Schema Version

0.1.0

## Id

math:concept:matrix-product

## Slug

matrix-product

## Type

concept

## Title

Matrix products and order

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

- matrix multiplication
- composing matrix maps
- AB versus BA
- two shears

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow a point through two transformations and compare the result when their order changes.

## Meaning

A matrix product represents successive compatible linear transformations. With column vectors, AB applies B first and then A. Matrix multiplication is not commutative in general, although some pairs do commute and different maps can agree on a particular input.

## Prerequisites

- required:
  - math:concept:matrix-linear-map
  - math:concept:function-composition
- helpful:
  - math:concept:determinant
  - math:concept:linear-combination
- depth:
  - math:concept:linear-map

## Definition

- setting: Real vector spaces with an explicit two-dimensional coordinate model.
- formal latex: (AB)_{ij}=\sum_{k=1}^{n}A_{ik}B_{kj},\quad (AB)z=A(Bz).\quad A=\begin{pmatrix}1&a\\0&1\end{pmatrix},\ B=\begin{pmatrix}1&0\\b&1\end{pmatrix};\quad AB=\begin{pmatrix}1+ab&a\\b&1\end{pmatrix},\ BA=\begin{pmatrix}1&a\\b&1+ab\end{pmatrix}.
- signature:
  - A,B: General compatible matrices in the definition; the live model restricts them to one horizontal and one vertical shear.
  - a,b: Dimensionless shear strengths in [-2,2].
  - x,y: Input point components in [-2,2].
  - order: B_then_A selects AB; A_then_B selects BA.
  - intermediateX,intermediateY: Output of the first applied shear.
  - finalX,finalY: Output of the second applied shear; finalX is the primary numeric Graph output.
  - productA,productB,productC,productD: Selected product entries in row-major order.
  - otherFinalX,otherFinalY,differenceX,differenceY: Opposite-order endpoint and signed current-minus-other endpoint differences.
- conditions:
  - Matrix multiplication requires compatible inner dimensions. In this live family both matrices are real 2 by 2 maps acting on column vectors.
  - AB means apply B first, then A; BA means apply A first, then B.
  - The live matrices are the two shears A=[[1,a],[0,1]] and B=[[1,0],[b,1]]; the control does not represent arbitrary matrices.
  - Each shear and either product has determinant 1, preserving signed unit area; this does not imply length or angle preservation.
  - Changing order need not change every input vector. Equality at one point, especially zero, does not prove AB=BA.
- domain notes: In general an m by n matrix can multiply an n by p matrix, producing an m by p matrix. The live model is deliberately restricted to two real 2 by 2 shear families with bounded strengths and one bounded input point. It is not an arbitrary matrix calculator. Changing the order selects a discrete operation sequence; it does not continuously blend the matrices into a third operation. These area-preserving shears do not cover singular products or arbitrary scaling. Coordinate units are abstract unless a worked example declares compatible physical units.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:gatech:matrix-multiplication
  - source:mit:linear-transformations

## Grammar

- pronunciation: Matrix products and order
- expression latex: (AB)_{ij}=\sum_{k=1}^{n}A_{ik}B_{kj},\quad (AB)z=A(Bz).\quad A=\begin{pmatrix}1&a\\0&1\end{pmatrix},\ B=\begin{pmatrix}1&0\\b&1\end{pmatrix};\quad AB=\begin{pmatrix}1+ab&a\\b&1\end{pmatrix},\ BA=\begin{pmatrix}1&a\\b&1+ab\end{pmatrix}.
- formation rule: A=[[1,a],[0,1]], B=[[1,0],[b,1]]. B_then_A: intermediate=(x,b*x+y); final=(x+a*(b*x+y),b*x+y); product=[[1+a*b,a],[b,1]]. A_then_B: intermediate=(x+a*y,y); final=(x+a*y,b*(x+a*y)+y); product=[[1,a],[b,1+a*b]]. output=finalX; determinant=1. otherFinalX/Y are the opposite-order result; differenceX/Y=finalX/Y-otherFinalX/Y.
- precedence: Scale components before adding. Matrix products act on column vectors from right to left; an ordered pair retains its stated coordinate order.
- symbols:
  - Item:
    - token: a
    - role: Horizontal shear strength in A
    - type: Dimensionless real scalar
  - Item:
    - token: b
    - role: Vertical shear strength in B
    - type: Dimensionless real scalar
  - Item:
    - token: x
    - role: First input point component
    - type: Real scalar
  - Item:
    - token: y
    - role: Second input point component
    - type: Real scalar
  - Item:
    - token: order
    - role: Discrete choice of which matrix acts first
    - type: Enumeration B_then_A or A_then_B
  - Item:
    - token: A
    - role: Horizontal shear matrix [[1,a],[0,1]]
    - type: Real 2 by 2 matrix
  - Item:
    - token: B
    - role: Vertical shear matrix [[1,0],[b,1]]
    - type: Real 2 by 2 matrix
  - Item:
    - token: AB
    - role: Apply B first, then A
    - type: Real 2 by 2 product matrix
  - Item:
    - token: BA
    - role: Apply A first, then B
    - type: Real 2 by 2 product matrix
  - Item:
    - token: qₓ
    - role: First intermediate component after the first selected transformation
    - type: Derived real scalar
  - Item:
    - token: qᵧ
    - role: Second intermediate component after the first selected transformation
    - type: Derived real scalar
  - Item:
    - token: rₓ
    - role: First final component after the second selected transformation
    - type: Derived real scalar
  - Item:
    - token: rᵧ
    - role: Second final component after the second selected transformation
    - type: Derived real scalar
- ast:
  - id: ast:matrix-product:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:matrix-product:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:matrix-product:expression
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:matrix-product:expression
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:matrix-product:expression
    - Item:
      - id: n:bx
      - kind: multiply
      - arguments:
        - n:b
        - n:x
      - type: Real scalar
    - Item:
      - id: n:intermediateY
      - kind: add
      - arguments:
        - n:bx
        - n:y
      - type: Real scalar
    - Item:
      - id: n:aqy
      - kind: multiply
      - arguments:
        - n:a
        - n:intermediateY
      - type: Real scalar
    - Item:
      - id: n:finalX
      - kind: add
      - arguments:
        - n:x
        - n:aqy
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
      - argument: n:finalX
      - type: Real to ordered real pair
    - Item:
      - id: n:output
      - kind: apply
      - function: n:first
      - argument: n:intermediateY
      - type: Ordered real pair; primary scalar readout is its first coordinate
  - scopes:
    - Item:
      - id: scope:matrix-product:expression
      - kind: modelExpression
      - free variables:
        - a
        - b
        - x
        - y
      - domain condition: order=B_then_A: q=B(x,y), result=A(q)=AB(x,y).
      - external parameters:
        - order
- parse errors:
  - Item:
    - input: Read ABz as applying A first
    - status: order_error
    - reason: With column vectors, ABz=A(Bz); the rightmost factor B acts first.
  - Item:
    - input: Multiply corresponding entries instead of rows by columns
    - status: operation_error
    - reason: Entrywise multiplication is a different operation and does not encode composition.
  - Item:
    - input: Infer AB=BA from agreement at z=0
    - status: inference_error
    - reason: Every linear map fixes zero; two products can agree there while differing elsewhere.
- ast coverage: Separate order-specific ASTs calculate both full endpoint coordinates through the intermediate point. B_then_A is the default tree; A_then_B selects its variant. The enum selects a sequence and is not a numeric interpolation. The primary fixtures/Graph track finalX; matrix entries, the other-order endpoint and finalY remain separately declared outputs.
- ast variants:
  - Item:
    - id: ast:matrix-product:A_then_B
    - root: n:output
    - nodes:
      - Item:
        - id: n:a
        - kind: variable
        - symbol: a
        - type: Finite real control
        - scope ref: scope:matrix-product:A_then_B
      - Item:
        - id: n:b
        - kind: variable
        - symbol: b
        - type: Finite real control
        - scope ref: scope:matrix-product:A_then_B
      - Item:
        - id: n:x
        - kind: variable
        - symbol: x
        - type: Finite real control
        - scope ref: scope:matrix-product:A_then_B
      - Item:
        - id: n:y
        - kind: variable
        - symbol: y
        - type: Finite real control
        - scope ref: scope:matrix-product:A_then_B
      - Item:
        - id: n:ay
        - kind: multiply
        - arguments:
          - n:a
          - n:y
        - type: Real scalar
      - Item:
        - id: n:intermediateX
        - kind: add
        - arguments:
          - n:x
          - n:ay
        - type: Real scalar
      - Item:
        - id: n:bqx
        - kind: multiply
        - arguments:
          - n:b
          - n:intermediateX
        - type: Real scalar
      - Item:
        - id: n:finalY
        - kind: add
        - arguments:
          - n:bqx
          - n:y
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
        - argument: n:intermediateX
        - type: Real to ordered real pair
      - Item:
        - id: n:output
        - kind: apply
        - function: n:first
        - argument: n:finalY
        - type: Ordered real pair; primary scalar readout is its first coordinate
    - scopes:
      - Item:
        - id: scope:matrix-product:A_then_B
        - kind: modelExpression
        - free variables:
          - a
          - b
          - x
          - y
        - domain condition: order=A_then_B: q=A(x,y), result=B(q)=BA(x,y).
        - external parameters:
          - order
- output symbol bindings:
  - qₓ: intermediateX
  - qᵧ: intermediateY
  - rₓ: finalX
  - rᵧ: finalY

## Properties

- Item:
  - claim: For this shear family, AB-BA=[[ab,0],[0,-ab]], so AB=BA exactly when ab=0.
  - conditions: A=[[1,a],[0,1]] and B=[[1,0],[b,1]] with real a,b.
  - derivation: Multiply both row-column products and subtract their corresponding entries; both diagonal differences vanish precisely when ab=0.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:matrix-product:identity-step
- Item:
  - claim: Either selected product has determinant 1.
  - conditions: The two real shear families are used without additional scaling.
  - derivation: det(AB)=(1+ab)*1-a*b=1 and det(BA)=1*(1+ab)-a*b=1.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:matrix-product:opposite-directions
- Item:
  - claim: Both orders send the origin to zero even when their matrices differ.
  - conditions: Both factors are linear, with no translation.
  - derivation: The first map sends zero to zero and the second then does the same. Equality on this input alone does not establish equal maps.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:matrix-product:origin-agreement

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
  - conditions: Column-vector dimensions are compatible.
  - reason: Multiplying matrices packages two successive linear maps as one map.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: The second map accepts the first map output.
  - reason: The rightmost-first convention is the same order rule as function composition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: This live family consists only of two determinant-one shears.
  - reason: Its signed unit area remains one in either order, despite different shapes or endpoints.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:matrix-product:vertical-then-horizontal
  - title: Run two illustration edits in order
  - role: applied_model
  - question: With a=b=1, apply vertical shear B first and horizontal shear A second to corner (1,1) cm.
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
  - inputs:
    - a: 1
    - b: 1
    - x: 1
    - y: 1
    - order: B_then_A
  - steps:
    - Item:
      - index: 1
      - expression: B(1,1)=(1,1+1)=(1,2) cm
      - reason: The first operation changes y and supplies the intermediate point.
    - Item:
      - index: 2
      - expression: A(1,2)=(1+2,2)=(3,2) cm
      - reason: The second operation uses the already changed y.
    - Item:
      - index: 3
      - expression: AB=[[2,1],[1,1]]; AB(1,1)=(3,2) cm
      - reason: The matrix product encodes the same two-step transformation.
  - result:
    - exact: Intermediate (1,2) cm; final (3,2) cm
  - interpretation: The input flows through both edits; the second edit acts on the first result.
  - independent check:
    - method: Independent product check
    - expected: The first column A(1,1)=(2,1) and second column A(0,1)=(1,1) form AB; their sum is (3,2).
  - limits: The model is ideal geometry, without raster resampling or cropping.
  - preset:
    - a: 1
    - b: 1
    - x: 1
    - y: 1
    - order: B_then_A
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
- Item:
  - id: math:example:matrix-product:horizontal-then-vertical
  - title: Swap the same two edits
  - role: applied_model
  - question: Keep a=b=1 and corner (1,1) cm, but apply A first, then B.
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
  - inputs:
    - a: 1
    - b: 1
    - x: 1
    - y: 1
    - order: A_then_B
  - steps:
    - Item:
      - index: 1
      - expression: A(1,1)=(2,1) cm
      - reason: The first operation changes x.
    - Item:
      - index: 2
      - expression: B(2,1)=(2,2+1)=(2,3) cm
      - reason: The vertical shear now uses the already changed x.
    - Item:
      - index: 3
      - expression: BA=[[1,1],[1,2]]; BA(1,1)=(2,3) cm
      - reason: Reversing the matrix order changes the combined rule.
  - result:
    - exact: Intermediate (2,1) cm; final (2,3) cm
  - interpretation: The same edits generally lead to a different corner when their order is reversed.
  - independent check:
    - method: Difference check
    - expected: AB-BA=[[1,0],[0,-1]], so the two final corners differ by (1,-1) for the input (1,1).
  - limits: One example establishes that these two particular matrices do not commute; it does not imply every matrix pair fails to commute.
  - preset:
    - a: 1
    - b: 1
    - x: 1
    - y: 1
    - order: A_then_B
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
- Item:
  - id: math:example:matrix-product:identity-step
  - title: One edit becomes the identity
  - role: applied_model
  - question: Set a=0 and b=1. What happens to (1,1) cm in either order?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
  - inputs:
    - a: 0
    - b: 1
    - x: 1
    - y: 1
    - order: B_then_A
  - steps:
    - Item:
      - index: 1
      - expression: A=[[1,0],[0,1]]=I
      - reason: The horizontal shear strength is zero.
    - Item:
      - index: 2
      - expression: AB=BA=B
      - reason: Composing with the identity leaves the other transformation unchanged.
    - Item:
      - index: 3
      - expression: B(1,1)=(1,2) cm
      - reason: Both orders give the same final point.
  - result:
    - exact: Both orders give (1,2) cm
  - interpretation: Noncommutativity is a general warning, not a claim that no matrices ever commute.
  - independent check:
    - method: Identity property
    - expected: I(Bz)=Bz and B(Iz)=Bz for every plane vector z, not only this corner.
  - limits: This agreement is global because one factor is identity, unlike agreement only at the origin.
  - preset:
    - a: 0
    - b: 1
    - x: 1
    - y: 1
    - order: B_then_A
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
- Item:
  - id: math:example:matrix-product:opposite-directions
  - title: Opposite shear signs still preserve area
  - role: applied_model
  - question: Use a=1,b=-1 and B then A. Where does corner (1,1) cm go?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
  - inputs:
    - a: 1
    - b: -1
    - x: 1
    - y: 1
    - order: B_then_A
  - steps:
    - Item:
      - index: 1
      - expression: B(1,1)=(1,0) cm
      - reason: The negative vertical shear shifts downward.
    - Item:
      - index: 2
      - expression: A(1,0)=(1,0) cm
      - reason: The second shear has zero y to contribute at this point.
    - Item:
      - index: 3
      - expression: AB=[[0,1],[-1,1]]; det(AB)=0*1-1*(-1)=1
      - reason: A zero matrix entry does not mean the map has collapsed.
  - result:
    - exact: Intermediate and final (1,0) cm; signed unit-area factor 1
  - interpretation: The corner moves while the unit-square area is preserved.
  - independent check:
    - method: Column area check
    - expected: The product columns (0,-1) and (1,1) have determinant 0*1-1*(-1)=1.
  - limits: Area preservation does not imply the corner length, all angles or all distances stay unchanged.
  - preset:
    - a: 1
    - b: -1
    - x: 1
    - y: 1
    - order: B_then_A
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
- Item:
  - id: math:example:matrix-product:origin-agreement
  - title: Agreement at the origin does not prove order independence
  - role: applied_model
  - question: With a=2,b=-2, compare both orders at point (0,0) cm.
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.
  - inputs:
    - a: 2
    - b: -2
    - x: 0
    - y: 0
    - order: B_then_A
  - steps:
    - Item:
      - index: 1
      - expression: A(0,0)=B(0,0)=(0,0)
      - reason: Every linear map fixes the origin.
    - Item:
      - index: 2
      - expression: AB(0,0)=BA(0,0)=(0,0)
      - reason: Both compositions therefore agree on this input.
    - Item:
      - index: 3
      - expression: AB=[[-3,2],[-2,1]]; BA=[[1,2],[-2,-3]]
      - reason: The matrices differ despite that single-point agreement.
  - result:
    - exact: Both final points are (0,0) cm, but AB and BA are different maps
  - interpretation: Inspect the rule or additional inputs rather than inferring commutativity from one matching point.
  - independent check:
    - method: Separate test vector
    - expected: At (1,0), AB gives (-3,-2) while BA gives (1,-2), proving the transformations differ.
  - limits: No animation of one point can by itself establish equality of all matrix actions.
  - preset:
    - a: 2
    - b: -2
    - x: 0
    - y: 0
    - order: B_then_A
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - An illustration is represented by points on one fixed plane grid; one grid unit represents one centimetre.
    - Shear strengths a and b are dimensionless; the origin is fixed and no translation is added.
    - The matrices act on column coordinates, and the rightmost matrix acts first.

## Interactive

- component id: matrix-product-visual-model
- renderer id: matrix-product-visual-model
- renderer version: 1.0.0
- model id: matrix-product-visual-model
- model revision: 1
- expression id: ast:matrix-product:expression
- interaction status: implemented
- description: Show the input, intermediate and final arrows, the two shear operations and the selected product. Compare the opposite-order endpoint while the same parameters feed the story and formula; the Graph varies horizontal strength a.
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
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: b
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: y
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: order
    - type: enum
    - default: B_then_A
    - values:
      - B_then_A
      - A_then_B
    - text input policy: Choose one of the two explicit operation orders; no fractional order is defined.
- expected cases:
  - Item:
    - input:
      - a: 1
      - b: 1
      - x: 1
      - y: 1
      - order: B_then_A
    - output: 3
  - Item:
    - input:
      - a: 1
      - b: 1
      - x: 1
      - y: 1
      - order: A_then_B
    - output: 2
  - Item:
    - input:
      - a: 0
      - b: 0
      - x: -2
      - y: 2
      - order: B_then_A
    - output: -2
  - Item:
    - input:
      - a: 0
      - b: 1
      - x: 1
      - y: 1
      - order: B_then_A
    - output: 1
  - Item:
    - input:
      - a: 1
      - b: 0
      - x: 1
      - y: 1
      - order: B_then_A
    - output: 2
  - Item:
    - input:
      - a: 1
      - b: -1
      - x: 1
      - y: 1
      - order: B_then_A
    - output: 1
  - Item:
    - input:
      - a: 1
      - b: -1
      - x: 1
      - y: 1
      - order: A_then_B
    - output: 2
  - Item:
    - input:
      - a: 2
      - b: 2
      - x: 2
      - y: 2
      - order: B_then_A
    - output: 14
  - Item:
    - input:
      - a: 0.5
      - b: -0.5
      - x: 2
      - y: -2
      - order: B_then_A
    - output: 0.5
  - Item:
    - input:
      - a: 2
      - b: -2
      - x: 0
      - y: 0
      - order: B_then_A
    - output: 0
  - Item:
    - input:
      - a: 2.1
      - b: 1
      - x: 1
      - y: 1
      - order: B_then_A
    - status: invalid_parameters
  - Item:
    - input:
      - a: 1
      - b: 1
      - x: 2.1
      - y: 1
      - order: B_then_A
    - status: invalid_parameters
- compute: A=[[1,a],[0,1]], B=[[1,0],[b,1]]. B_then_A: intermediate=(x,b*x+y); final=(x+a*(b*x+y),b*x+y); product=[[1+a*b,a],[b,1]]. A_then_B: intermediate=(x+a*y,y); final=(x+a*y,b*(x+a*y)+y); product=[[1,a],[b,1+a*b]]. output=finalX; determinant=1. otherFinalX/Y are the opposite-order result; differenceX/Y=finalX/Y-otherFinalX/Y.
- numeric tolerance: 1e-10
- invariants:
  - Matrix multiplication requires compatible inner dimensions. In this live family both matrices are real 2 by 2 maps acting on column vectors.
  - AB means apply B first, then A; BA means apply A first, then B.
  - The live matrices are the two shears A=[[1,a],[0,1]] and B=[[1,0],[b,1]]; the control does not represent arbitrary matrices.
  - Each shear and either product has determinant 1, preserving signed unit area; this does not imply length or angle preservation.
  - Changing order need not change every input vector. Equality at one point, especially zero, does not prove AB=BA.
- limits:
  - Only two specified real 2D shear families; no arbitrary matrix entries or dimensions.
  - The order control is discrete. AB means B_then_A and BA means A_then_B.
  - The complete endpoint has two coordinates; finalX alone is the primary numeric Graph slice.
  - Both products preserve area and orientation but need not preserve lengths or angles.
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
- expression variants:
  - B then A: ast:matrix-product:expression
  - A then B: ast:matrix-product:A_then_B

## Prompts

- Item:
  - prompt: Why does AB apply B first?
  - answer: In (AB)z=A(Bz), the expression Bz is evaluated before A acts on its result.
- Item:
  - prompt: Must changing order always move the chosen point?
  - answer: No. Some matrices commute, and different maps can agree on a particular point such as zero.

## Representations

- Item:
  - kind: geometry
  - description: Show the input, intermediate and final arrows, the two shear operations and the selected product. Compare the opposite-order endpoint while the same parameters feed the story and formula; the Graph varies horizontal strength a.
- Item:
  - kind: graph
  - description: A numeric slice of the declared primary scalar output as one input varies; all other controls stay fixed. Missing unique results remain gaps, not zero values.
- Item:
  - kind: substitution
  - description: Current controls, intermediate calculations and labeled scene quantities follow one evaluated model.

## Applications

- Item:
  - context: Ordered illustration edits
  - mapping: A corner flows through a vertical then horizontal shear, or through the reversed order.
  - limitations: Ideal geometry; pixel resampling, cropping and translation are excluded.
  - evidence kind: constructed_example
  - example ref: math:example:matrix-product:vertical-then-horizontal
- Item:
  - context: Identity edit
  - mapping: Setting one shear strength to zero makes that step identity and both full maps agree.
  - limitations: This special commuting case does not generalize to arbitrary nonzero strengths.
  - evidence kind: constructed_example
  - example ref: math:example:matrix-product:identity-step

## Source Refs

- source:gatech:matrix-multiplication
- source:mit:linear-transformations

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded real two-dimensional fixtures, distinct Geometry/Graph views and a linked modular story.

## Referenced source registry

- Source ID: source:mit:linear-transformations. [MIT OpenCourseWare 18.06SC, Linear Transformations and their Matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/). Locator: Session overview and linked lecture transcript: coordinate matrices map input vectors to output vectors. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:gatech:matrix-multiplication. [Georgia Tech Interactive Linear Algebra, 3.4 Matrix Multiplication](https://textbooks.math.gatech.edu/ila/matrix-multiplication.html). Locator: Subsection 3.4.2 row-column multiplication and compatible dimensions; Subsection 3.4.3 composition and matrix multiplication; noncommutativity caveats. Verification: Definition-level mathematics inspected 2026-10-26 on the official university textbook page. Supports definitions and conditions, not historical priority, independent review or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
