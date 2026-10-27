---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:basis", "id": "math:concept:basis", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:basis", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "7e57ce90202c446bd3a7e7f95245948f7949d5d3461b967de1ef13fb4e88e258"}, "purpose": "Keep a point fixed while changing the directions used to describe it.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "7e57ce90202c446bd3a7e7f95245948f7949d5d3461b967de1ef13fb4e88e258", "status": "draft", "title": "Bases and coordinates", "topics": ["mathematics", "linear-algebra", "geometry", "basis vectors", "coordinates in a basis", "change of coordinates", "oblique basis"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Bases and coordinates

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:basis; revision 0.1.0-draft. Setting: Real vector spaces with an explicit two-dimensional coordinate model. Expression: $\mathcal{B}=(u,v),\quad B=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad z=B\binom{r}{s};\quad \det(B)\ne0\Rightarrow [z]_{\mathcal{B}}=\binom{(dx-by)/(ad-bc)}{(ay-cx)/(ad-bc)}.$. Conditions required for a defined value (a case may test their violation): The ordered candidate directions are u=(a,c) and v=(b,d), the columns of B=[[a,b],[c,d]]. The pair is a basis of R² exactly when det(B)=ad-bc is nonzero; it need not be perpendicular or have unit length. For a nonzero determinant, each target (x,y) has one coefficient pair (r,s) satisfying r*u+s*v=(x,y). A dependent pair is valid model input but is not a basis of the plane. Its target equation can have infinitely many solutions or no solution. Physical coordinates use one compatible coordinate system and units; basis coefficients describe multiples of the declared directions. Scope: The general notion of a basis applies to vector spaces and subspaces beyond the real plane. This live model tests exactly two ordered real plane directions and a target vector, with bounded entries and target components. The coefficient results are not artificially restricted to the slider bounds and can grow large near dependence. The bounded control box is not itself a vector space. The exact zero determinant case is classified separately from a nearby nonzero determinant; finite-precision numerical range can still prevent a displayed unique result. No arbitrary-dimension solver or full change-of-basis matrix between two arbitrary bases is implemented.

## Schema Version

0.1.0

## Id

math:concept:basis

## Slug

basis

## Type

concept

## Title

Bases and coordinates

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

- basis vectors
- coordinates in a basis
- change of coordinates
- oblique basis

## Branches

- linear-algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Keep a point fixed while changing the directions used to describe it.

## Meaning

A basis is an independent spanning collection. An ordered basis gives a vector one unique list of coefficients. In the plane, two independent arrows can be tilted, stretched or reversed and still describe every target. A dependent pair loses that unique coordinate description.

## Prerequisites

- required:
  - math:concept:vector
  - math:concept:linear-combination
- helpful:
  - math:concept:determinant
  - math:concept:matrix-linear-map
- depth:
  - math:concept:linear-map

## Definition

- setting: Real vector spaces with an explicit two-dimensional coordinate model.
- formal latex: \mathcal{B}=(u,v),\quad B=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad z=B\binom{r}{s};\quad \det(B)\ne0\Rightarrow [z]_{\mathcal{B}}=\binom{(dx-by)/(ad-bc)}{(ay-cx)/(ad-bc)}.
- signature:
  - a,b,c,d: Candidate direction columns u=(a,c), v=(b,d), entries in [-2,2].
  - x,y: Standard-coordinate target in [-3,3].
  - r,s: Unique basis coefficients only when the candidate pair is independent and finite arithmetic can represent the result; otherwise null.
  - determinant: ad-bc; nonzero exactly when this pair is a basis of R².
  - rank,basisKind: Rank 2/1/0 and plane/line/zero span classification of the candidate columns.
  - solutionStatus: unique, infinite_solutions, no_solution or numeric_range; valid mathematical configurations need not have unique coordinates.
- conditions:
  - The ordered candidate directions are u=(a,c) and v=(b,d), the columns of B=[[a,b],[c,d]].
  - The pair is a basis of R² exactly when det(B)=ad-bc is nonzero; it need not be perpendicular or have unit length.
  - For a nonzero determinant, each target (x,y) has one coefficient pair (r,s) satisfying r*u+s*v=(x,y).
  - A dependent pair is valid model input but is not a basis of the plane. Its target equation can have infinitely many solutions or no solution.
  - Physical coordinates use one compatible coordinate system and units; basis coefficients describe multiples of the declared directions.
- domain notes: The general notion of a basis applies to vector spaces and subspaces beyond the real plane. This live model tests exactly two ordered real plane directions and a target vector, with bounded entries and target components. The coefficient results are not artificially restricted to the slider bounds and can grow large near dependence. The bounded control box is not itself a vector space. The exact zero determinant case is classified separately from a nearby nonzero determinant; finite-precision numerical range can still prevent a displayed unique result. No arbitrary-dimension solver or full change-of-basis matrix between two arbitrary bases is implemented.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:gatech:basis-dimension
  - source:gatech:basis-coordinates
  - source:gatech:determinants-volumes

## Grammar

- pronunciation: Bases and coordinates
- expression latex: \mathcal{B}=(u,v),\quad B=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad z=B\binom{r}{s};\quad \det(B)\ne0\Rightarrow [z]_{\mathcal{B}}=\binom{(dx-by)/(ad-bc)}{(ay-cx)/(ad-bc)}.
- formation rule: determinant=a*d-b*c. If determinant!=0, output=r=(d*x-b*y)/determinant and s=(a*y-c*x)/determinant; reconstruct (a*r+b*s,c*r+d*s). If determinant=0, output/r/s are null and the model distinguishes infinite_solutions from no_solution. rank is 2 for nonzero determinant, 1 for a nonzero dependent pair, otherwise 0. Nonfinite computed coordinates use solutionStatus=numeric_range, not fabricated finite coefficients.
- precedence: Scale components before adding. Matrix products act on column vectors from right to left; an ordered pair retains its stated coordinate order.
- symbols:
  - Item:
    - token: a
    - role: Entry in the ordered candidate-direction matrix
    - type: Real scalar
  - Item:
    - token: b
    - role: Entry in the ordered candidate-direction matrix
    - type: Real scalar
  - Item:
    - token: c
    - role: Entry in the ordered candidate-direction matrix
    - type: Real scalar
  - Item:
    - token: d
    - role: Entry in the ordered candidate-direction matrix
    - type: Real scalar
  - Item:
    - token: x
    - role: Standard horizontal target component
    - type: Real scalar
  - Item:
    - token: y
    - role: Standard vertical target component
    - type: Real scalar
  - Item:
    - token: r
    - role: Coefficient of first candidate direction; unique only for an independent pair
    - type: Derived real scalar or unavailable
  - Item:
    - token: s
    - role: Coefficient of second candidate direction; unique only for an independent pair
    - type: Derived real scalar or unavailable
  - Item:
    - token: det(B)
    - role: Signed determinant of candidate-direction matrix
    - type: Derived real scalar
  - Item:
    - token: B
    - role: Candidate-direction matrix [[a,b],[c,d]], with columns (a,c) and (b,d)
    - type: Real 2 by 2 matrix
- ast:
  - id: ast:basis:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:basis:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:basis:expression
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:basis:expression
    - Item:
      - id: n:d
      - kind: variable
      - symbol: d
      - type: Finite real control
      - scope ref: scope:basis:expression
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:basis:expression
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:basis:expression
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
      - id: n:det
      - kind: subtract
      - arguments:
        - n:ad
        - n:bc
      - type: Real scalar
    - Item:
      - id: n:dx
      - kind: multiply
      - arguments:
        - n:d
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
      - id: n:ay
      - kind: multiply
      - arguments:
        - n:a
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
      - id: n:numR
      - kind: subtract
      - arguments:
        - n:dx
        - n:by
      - type: Real scalar
    - Item:
      - id: n:numS
      - kind: subtract
      - arguments:
        - n:ay
        - n:cx
      - type: Real scalar
    - Item:
      - id: n:r
      - kind: divide
      - arguments:
        - n:numR
        - n:det
      - type: Real scalar
    - Item:
      - id: n:s
      - kind: divide
      - arguments:
        - n:numS
        - n:det
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
      - argument: n:r
      - type: Real to ordered real pair
    - Item:
      - id: n:output
      - kind: apply
      - function: n:first
      - argument: n:s
      - type: Ordered real pair; primary scalar readout is its first coordinate
  - scopes:
    - Item:
      - id: scope:basis:expression
      - kind: modelExpression
      - free variables:
        - a
        - b
        - c
        - d
        - x
        - y
      - domain condition: Unique-coordinate branch only: determinant=a*d-b*c is nonzero. Division nodes are not evaluated for a dependent candidate pair.
- parse errors:
  - Item:
    - input: Read basis columns (a,c),(b,d) as the rows (a,b),(c,d)
    - status: entry_order_error
    - reason: The declared reconstruction is (a*r+b*s,c*r+d*s); switching rows and columns changes the problem.
  - Item:
    - input: Use the quotient formulas when ad-bc=0
    - status: domain_error
    - reason: The pair is dependent; classify consistency and nonuniqueness without division by zero.
  - Item:
    - input: Assume two different arrows always form a plane basis
    - status: setting_error
    - reason: Different arrows can still be scalar multiples; a plane basis needs independence.
- ast coverage: The AST explicitly computes the determinant and both quotient formulas, then constructs the ordered coefficient pair. Its declared domain is the unique branch det(B)!=0. The total interactive model also classifies dependent configurations without evaluating those division nodes; null means no unique coordinates, not the zero vector. Rank and consistency classification are stated model metadata outside this arithmetic tree.
- output symbol bindings:
  - r: r
  - s: s
  - det(B): determinant

## Properties

- Item:
  - claim: A basis gives unique coefficients for each vector in its space.
  - conditions: The candidate vectors span the space and are linearly independent.
  - derivation: Existence comes from spanning. If two coefficient lists gave the same vector, subtracting them would give a zero linear combination; independence forces every difference coefficient to be zero.
  - status: definition-level reference and author explanation; independent review pending
  - example ref: math:example:basis:oblique
- Item:
  - claim: A dependent pair can have reachable targets without unique coefficients and other targets that are unreachable.
  - conditions: Two dependent columns in the real plane.
  - derivation: The columns span at most one line. On that span, a nonzero dependence can be added to any solution; off that span, no solution exists.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:basis:dependent-reachable

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:linear-combination
  - type: supports
  - conditions: Use the ordered candidate columns with coefficient pair (r,s).
  - reason: Basis coordinates are the unique weights in a linear combination.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:determinant
  - type: supports
  - conditions: Two real plane directions are arranged as the columns of a 2 by 2 matrix.
  - reason: A nonzero determinant tests independence and a full-plane span.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:matrix-linear-map
  - type: supports
  - conditions: Input basis coefficients are mapped to standard coordinates.
  - reason: Reconstruction uses the same matrix-column rule; coordinate finding reverses it only when unique.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:basis:oblique
  - title: Describe a point on an oblique drawing grid
  - role: applied_model
  - question: A drawing grid uses u=(1,0) cm and v=(1,1) cm. Which coefficients reach target (3,2) cm?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
  - inputs:
    - x: 3
    - y: 2
    - a: 1
    - b: 1
    - c: 0
    - d: 1
  - steps:
    - Item:
      - index: 1
      - expression: det(B)=1*1-1*0=1
      - reason: The two directions are independent, so every target has unique coordinates.
    - Item:
      - index: 2
      - expression: s=2; r+s=3, so r=1
      - reason: Use the vertical equation, then the horizontal equation.
    - Item:
      - index: 3
      - expression: 1(1,0)+2(1,1)=(3,2) cm
      - reason: Reconstruct the target from its new coefficient labels.
  - result:
    - exact: Basis coordinates (r,s)=(1,2)
  - interpretation: The target is unchanged; its labels differ from the standard coordinates (3,2).
  - independent check:
    - method: Independent equation elimination
    - expected: The vertical row is s=2; subtracting it from r+s=3 gives r=1.
  - limits: This is a change of coordinate description with a fixed origin, not a translated drawing.
  - preset:
    - x: 3
    - y: 2
    - a: 1
    - b: 1
    - c: 0
    - d: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
- Item:
  - id: math:example:basis:scaled-grid
  - title: Use a longer horizontal basis arrow
  - role: applied_model
  - question: Let u=(2,0) cm and v=(0,1) cm. What coefficients describe target (2,2) cm?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
  - inputs:
    - x: 2
    - y: 2
    - a: 2
    - b: 0
    - c: 0
    - d: 1
  - steps:
    - Item:
      - index: 1
      - expression: det(B)=2
      - reason: The candidate arrows form a plane basis.
    - Item:
      - index: 2
      - expression: 2r=2; s=2, so (r,s)=(1,2)
      - reason: A longer horizontal basis arrow needs a smaller horizontal coefficient.
    - Item:
      - index: 3
      - expression: 1(2,0)+2(0,1)=(2,2) cm
      - reason: Reconstruction confirms both components.
  - result:
    - exact: Basis coordinates (1,2)
  - interpretation: Basis coordinates count multiples of arrows; they are not always the standard coordinate components.
  - independent check:
    - method: Independent axis check
    - expected: The target is one 2 cm horizontal arrow and two 1 cm vertical arrows.
  - limits: The coefficient r is dimensionless; its value depends on the declared basis-arrow length.
  - preset:
    - x: 2
    - y: 2
    - a: 2
    - b: 0
    - c: 0
    - d: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
- Item:
  - id: math:example:basis:rotated-grid
  - title: Label a point using turned axes
  - role: applied_model
  - question: Use u=(0,1) cm and v=(-1,0) cm. Which coefficients reach (1,2) cm?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
  - inputs:
    - x: 1
    - y: 2
    - a: 0
    - b: -1
    - c: 1
    - d: 0
  - steps:
    - Item:
      - index: 1
      - expression: det(B)=0*0-(-1)*1=1
      - reason: The turned arrows still form a basis.
    - Item:
      - index: 2
      - expression: -s=1; r=2, so (r,s)=(2,-1)
      - reason: The second basis arrow points left, so its coefficient must be negative to reach positive x.
    - Item:
      - index: 3
      - expression: 2(0,1)-1(-1,0)=(1,2) cm
      - reason: The same target is reached on the turned grid.
  - result:
    - exact: Basis coordinates (2,-1)
  - interpretation: A negative coordinate indicates the opposite of that basis-arrow direction.
  - independent check:
    - method: Norm preservation for this particular basis
    - expected: The two basis arrows are orthonormal, so sqrt(2²+(-1)²)=sqrt(1²+2²)=sqrt(5); the row equations also locate the target.
  - limits: Norm equality is special to this orthonormal basis and is not true of every basis.
  - preset:
    - x: 1
    - y: 2
    - a: 0
    - b: -1
    - c: 1
    - d: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
- Item:
  - id: math:example:basis:dependent-reachable
  - title: Repeated directions give nonunique instructions
  - role: applied_model
  - question: The candidate arrows are u=(1,1) cm and v=(2,2) cm. Can they reach target (3,3) cm uniquely?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
  - inputs:
    - x: 3
    - y: 3
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - steps:
    - Item:
      - index: 1
      - expression: det(B)=1*2-2*1=0
      - reason: The candidate pair is dependent and is not a basis of the plane.
    - Item:
      - index: 2
      - expression: r+2s=3 in both coordinate equations
      - reason: One equation is repeated rather than giving an independent condition.
    - Item:
      - index: 3
      - expression: (r,s)=(3,0) and (1,1) both reach (3,3) cm
      - reason: There is no unique coordinate pair; infinitely many coefficient pairs work.
  - result:
    - exact: Valid dependent configuration; infinitely many solutions; unique-coordinate outputs are unavailable
  - interpretation: The point is reachable, but its description by this redundant pair is not unique.
  - independent check:
    - method: Parametric family
    - expected: For every real t, (r,s)=(3-2t,t) gives (r+2s,r+2s)=(3,3).
  - limits: A single nonzero direction can be a basis of this line, but the redundant two-vector pair is not a basis.
  - preset:
    - x: 3
    - y: 3
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
- Item:
  - id: math:example:basis:dependent-unreachable
  - title: A target falls outside the available directions
  - role: applied_model
  - question: Keep u=(1,1) cm and v=(2,2) cm, but ask for target (3,2) cm. Is there a coefficient pair?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.
  - inputs:
    - x: 3
    - y: 2
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - steps:
    - Item:
      - index: 1
      - expression: r+2s=3 and r+2s=2
      - reason: The two target equations demand different values from the same left side.
    - Item:
      - index: 2
      - expression: Subtract the equations to obtain 0=1
      - reason: The equations are inconsistent.
    - Item:
      - index: 3
      - expression: No coefficient pair exists
      - reason: The model keeps the target visible and reports no solution, rather than outputting zero coordinates.
  - result:
    - exact: Valid dependent configuration; no solution; unique-coordinate outputs are unavailable
  - interpretation: Failure to reach this target differs from nonuniqueness for a target on the line.
  - independent check:
    - method: Span invariant
    - expected: Every combination has equal x and y; target (3,2) does not.
  - limits: This does not mean matrix multiplication is undefined; it means this inverse coordinate problem has no solution.
  - preset:
    - x: 3
    - y: 2
    - a: 1
    - b: 2
    - c: 1
    - d: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A drawing uses the standard coordinate axes, with one grid unit representing one centimetre.
    - The two declared basis arrows are written as matrix columns, not rows.
    - The target stays at its stated location while its coefficient labels may change with the candidate basis.

## Interactive

- component id: basis-visual-model
- renderer id: basis-visual-model
- renderer version: 1.0.0
- model id: basis-visual-model
- model revision: 1
- expression id: ast:basis:expression
- interaction status: implemented
- description: Keep the standard target arrow fixed, deform the candidate grid and reconstruct it from its coefficient arrows when the pair is independent. Dependent line/zero spans retain an explicit solution classification; the Graph varies target x.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 3
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: y
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
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
    - id: c
    - type: number
    - default: 0
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: d
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
- expected cases:
  - Item:
    - input:
      - x: 3
      - y: 2
      - a: 1
      - b: 1
      - c: 0
      - d: 1
    - output: 1.0
  - Item:
    - input:
      - x: -2
      - y: 3
      - a: 1
      - b: 0
      - c: 0
      - d: 1
    - output: -2.0
  - Item:
    - input:
      - x: 2
      - y: 2
      - a: 2
      - b: 0
      - c: 0
      - d: 1
    - output: 1.0
  - Item:
    - input:
      - x: 1
      - y: 2
      - a: 0
      - b: -1
      - c: 1
      - d: 0
    - output: 2.0
  - Item:
    - input:
      - x: 1
      - y: 0
      - a: 1
      - b: 1
      - c: 1
      - d: 1.015625
    - output: 65
  - Item:
    - input:
      - x: 3
      - y: 3
      - a: 1
      - b: 2
      - c: 1
      - d: 2
    - output: null
    - status: valid
    - exact display: Infinitely many solutions in a line span; rank 1.
  - Item:
    - input:
      - x: 3
      - y: 2
      - a: 1
      - b: 2
      - c: 1
      - d: 2
    - output: null
    - status: valid
    - exact display: No solution: target is outside the line span; rank 1.
  - Item:
    - input:
      - x: 0
      - y: 0
      - a: 0
      - b: 0
      - c: 0
      - d: 0
    - output: null
    - status: valid
    - exact display: Infinitely many solutions: every coefficient pair reaches zero; rank 0.
  - Item:
    - input:
      - x: 1
      - y: 0
      - a: 0
      - b: 0
      - c: 0
      - d: 0
    - output: null
    - status: valid
    - exact display: No solution: zero columns cannot reach a nonzero target; rank 0.
  - Item:
    - input:
      - x: 1
      - y: 1
      - a: 0
      - b: 1
      - c: 0
      - d: 1
    - output: null
    - status: valid
    - exact display: Infinitely many solutions: zero first column leaves its coefficient free; rank 1.
  - Item:
    - input:
      - x: 3
      - y: 2
      - a: 2.1
      - b: 1
      - c: 0
      - d: 1
    - status: invalid_parameters
  - Item:
    - input:
      - x: 3.1
      - y: 2
      - a: 1
      - b: 1
      - c: 0
      - d: 1
    - status: invalid_parameters
- compute: determinant=a*d-b*c. If determinant!=0, output=r=(d*x-b*y)/determinant and s=(a*y-c*x)/determinant; reconstruct (a*r+b*s,c*r+d*s). If determinant=0, output/r/s are null and the model distinguishes infinite_solutions from no_solution. rank is 2 for nonzero determinant, 1 for a nonzero dependent pair, otherwise 0. Nonfinite computed coordinates use solutionStatus=numeric_range, not fabricated finite coefficients.
- numeric tolerance: 1e-10
- invariants:
  - The ordered candidate directions are u=(a,c) and v=(b,d), the columns of B=[[a,b],[c,d]].
  - The pair is a basis of R² exactly when det(B)=ad-bc is nonzero; it need not be perpendicular or have unit length.
  - For a nonzero determinant, each target (x,y) has one coefficient pair (r,s) satisfying r*u+s*v=(x,y).
  - A dependent pair is valid model input but is not a basis of the plane. Its target equation can have infinitely many solutions or no solution.
  - Physical coordinates use one compatible coordinate system and units; basis coefficients describe multiples of the declared directions.
- limits:
  - Exactly two candidate real plane directions and one target; no arbitrary-size solver.
  - The candidate pair is a basis of the plane only when its determinant is nonzero.
  - Primary Graph output is coefficient r; a nonunique or numerically unavailable coefficient is a gap, not zero.
  - Near-dependent directions can require large coefficients and are sensitive to finite precision.
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
  - prompt: Must a basis be perpendicular or made of unit arrows?
  - answer: No. Independence and spanning are the requirements; length and angle can vary.
- Item:
  - prompt: Does determinant zero mean every target has no solution?
  - answer: No. Targets in the column span have infinitely many coefficient pairs; targets outside it have no solution.

## Representations

- Item:
  - kind: geometry
  - description: Keep the standard target arrow fixed, deform the candidate grid and reconstruct it from its coefficient arrows when the pair is independent. Dependent line/zero spans retain an explicit solution classification; the Graph varies target x.
- Item:
  - kind: graph
  - description: A numeric slice of the declared primary scalar output as one input varies; all other controls stay fixed. Missing unique results remain gaps, not zero values.
- Item:
  - kind: substitution
  - description: Current controls, intermediate calculations and labeled scene quantities follow one evaluated model.

## Applications

- Item:
  - context: Drawing-grid coordinates
  - mapping: An oblique grid describes a fixed target using unique multiples of two arrows.
  - limitations: Fixed origin and compatible coordinate units; no translation.
  - evidence kind: constructed_example
  - example ref: math:example:basis:oblique
- Item:
  - context: Restricted directions
  - mapping: A repeated direction makes one target reachable nonuniquely and another unreachable.
  - limitations: The redundant pair is not a plane basis, even when a target can be reached.
  - evidence kind: constructed_example
  - example ref: math:example:basis:dependent-reachable

## Source Refs

- source:gatech:basis-dimension
- source:gatech:basis-coordinates
- source:gatech:determinants-volumes

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded real two-dimensional fixtures, distinct Geometry/Graph views and a linked modular story.

## Referenced source registry

- Source ID: source:gatech:determinants-volumes. [Georgia Tech Interactive Linear Algebra, 4.3 Determinants and Volumes](https://textbooks.math.gatech.edu/ila/determinants-volumes.html). Locator: Determinant magnitude as parallelogram area; zero-area collapse; signed orientation. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:gatech:basis-dimension. [Georgia Tech Interactive Linear Algebra, 2.7 Basis and Dimension](https://textbooks.math.gatech.edu/ila/dimension.html). Locator: Subsection 2.7.1 Basis of a Subspace: spanning and independence requirements; plane basis criterion. Verification: Definition-level mathematics inspected 2026-10-26 on the official university textbook page. Supports definitions and conditions, not historical priority, independent review or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:gatech:basis-coordinates. [Georgia Tech Interactive Linear Algebra, 2.8 Bases as Coordinate Systems](https://textbooks.math.gatech.edu/ila/bases-as-coord-systems.html). Locator: Fact and proof of unique coordinates in a basis; coordinate-vector definition and solving the coordinate equation. Verification: Definition-level mathematics inspected 2026-10-26 on the official university textbook page. Supports definitions and conditions, not historical priority, independent review or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
