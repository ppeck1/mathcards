---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:gradient", "id": "math:concept:gradient", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gradient", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "b5849d69b0f0d60ba7a793c5bfebaafbc5f5b863b220132be51e770f09a66352"}, "purpose": "Combine local slice slopes into a vector that points toward the steepest local increase.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "b5849d69b0f0d60ba7a793c5bfebaafbc5f5b863b220132be51e770f09a66352", "status": "draft", "title": "Gradient", "topics": ["mathematics", "calculus", "analysis", "geometry", "gradient vector", "steepest local ascent", "gradient norm", "nabla"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Gradient

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:gradient; revision 0.1.0-draft. Setting: Differentiable real scalar fields on a neighborhood in the plane, using perpendicular equally scaled Euclidean coordinates. The executable specimen is a quadratic height field with a two-component gradient. Expression: $\nabla F(x,y)=\left(\frac{\partial F}{\partial x}(x,y),\frac{\partial F}{\partial y}(x,y)\right),\quad \|\nabla F\|=\sqrt{\left(\frac{\partial F}{\partial x}\right)^2+\left(\frac{\partial F}{\partial y}\right)^2}.\quad F(x,y)=c+ax^2+by^2\Rightarrow\nabla F=(2ax,2by).$. Conditions required for a defined value (a case may test their violation): The general scalar field is defined on a neighborhood of the point; a partial derivative differentiates one coordinate while holding other independent coordinates fixed. The live field is F(x,y)=c+a*x²+b*y², so all derivatives used here exist and are continuous. For the chosen field, partialX=2*a*x and partialY=2*b*y. They are evaluated at the current point, not at unrelated coordinates. Use perpendicular equally scaled horizontal axes and compatible coordinate units when comparing Euclidean gradient directions and magnitudes. The field must be differentiable at the point for the stated first-order directional-slope interpretation. For a nonzero gradient, normalization divides each component by the positive gradient norm. At zero norm both unit-direction components are null. A zero gradient alone does not classify a point as a maximum, minimum or flat field. Scope: The general gradient applies to differentiable scalar fields in real Euclidean spaces with an appropriate coordinate metric; partial derivatives alone do not automatically justify every geometric interpretation. The live model uses only F=c+a*x²+b*y² in two perpendicular equally scaled coordinates with bounded controls. A 3D surface is a view of this two-input scalar field, not a third independent field input. No symbolic gradient parser, arbitrary terrain, gradient-descent optimizer or global route planner is implemented. Height examples stipulate metre-based coordinate and coefficient units.

## Schema Version

0.1.0

## Id

math:concept:gradient

## Slug

gradient

## Type

concept

## Title

Gradient

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

- gradient vector
- steepest local ascent
- gradient norm
- nabla

## Branches

- calculus
- analysis
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Combine local slice slopes into a vector that points toward the steepest local increase.

## Meaning

The gradient of a real scalar field collects its coordinate partial derivatives into a vector. In compatible Euclidean coordinates, a nonzero gradient gives the direction of greatest first-order increase, and its norm gives that maximum rate per unit distance. A zero gradient is valid but supplies no unique normalized gradient direction.

## Prerequisites

- required:
  - math:concept:partial-derivative
  - math:concept:vector
- helpful:
  - math:concept:inner-product
  - math:concept:derivative
- depth:
  - math:concept:gradient-descent

## Definition

- setting: Differentiable real scalar fields on a neighborhood in the plane, using perpendicular equally scaled Euclidean coordinates. The executable specimen is a quadratic height field with a two-component gradient.
- formal latex: \nabla F(x,y)=\left(\frac{\partial F}{\partial x}(x,y),\frac{\partial F}{\partial y}(x,y)\right),\quad \|\nabla F\|=\sqrt{\left(\frac{\partial F}{\partial x}\right)^2+\left(\frac{\partial F}{\partial y}\right)^2}.\quad F(x,y)=c+ax^2+by^2\Rightarrow\nabla F=(2ax,2by).
- signature:
  - x,y: Current point components, each in [-2,2].
  - a,b,c: Quadratic coefficients a,b in [-1,1]; constant offset c in [0,6].
  - F(x,y),height: Current scalar field value, separate from the gradient.
  - ∇F: Vector (partialX,partialY) at the current point; it is not the scalar primary output.
  - ‖∇F‖,gradientNorm: Nonnegative norm of that vector, the primary scalar output.
  - unitGradientX,unitGradientY: Components of the normalized nonzero gradient; null at zero norm with directionStatus=undefined_direction.
- conditions:
  - The general scalar field is defined on a neighborhood of the point; a partial derivative differentiates one coordinate while holding other independent coordinates fixed.
  - The live field is F(x,y)=c+a*x²+b*y², so all derivatives used here exist and are continuous.
  - For the chosen field, partialX=2*a*x and partialY=2*b*y. They are evaluated at the current point, not at unrelated coordinates.
  - Use perpendicular equally scaled horizontal axes and compatible coordinate units when comparing Euclidean gradient directions and magnitudes.
  - The field must be differentiable at the point for the stated first-order directional-slope interpretation.
  - For a nonzero gradient, normalization divides each component by the positive gradient norm. At zero norm both unit-direction components are null.
  - A zero gradient alone does not classify a point as a maximum, minimum or flat field.
- domain notes: The general gradient applies to differentiable scalar fields in real Euclidean spaces with an appropriate coordinate metric; partial derivatives alone do not automatically justify every geometric interpretation. The live model uses only F=c+a*x²+b*y² in two perpendicular equally scaled coordinates with bounded controls. A 3D surface is a view of this two-input scalar field, not a third independent field input. No symbolic gradient parser, arbitrary terrain, gradient-descent optimizer or global route planner is implemented. Height examples stipulate metre-based coordinate and coefficient units.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:openstax:gradient-directional
  - source:openstax:partial-derivatives

## Grammar

- pronunciation: Gradient
- expression latex: \nabla F(x,y)=\left(\frac{\partial F}{\partial x}(x,y),\frac{\partial F}{\partial y}(x,y)\right),\quad \|\nabla F\|=\sqrt{\left(\frac{\partial F}{\partial x}\right)^2+\left(\frac{\partial F}{\partial y}\right)^2}.\quad F(x,y)=c+ax^2+by^2\Rightarrow\nabla F=(2ax,2by).
- formation rule: output=gradientNorm; height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; gradientNorm=hypot(partialX,partialY); unitGradientX=partialX/gradientNorm and unitGradientY=partialY/gradientNorm when gradientNorm>0, otherwise both null with directionStatus=undefined_direction.
- precedence: Evaluate both partial derivatives at the same point. Their ordered pair forms the gradient vector; square and add its components before taking the nonnegative square root for its norm. Normalize only when that norm is positive.
- symbols:
  - Item:
    - token: x
    - role: Current horizontal coordinate along the first axis
    - type: Real scalar coordinate
  - Item:
    - token: y
    - role: Current horizontal coordinate along the second axis
    - type: Real scalar coordinate
  - Item:
    - token: a
    - role: Quadratic coefficient of x²
    - type: Real scalar coefficient
  - Item:
    - token: b
    - role: Quadratic coefficient of y²
    - type: Real scalar coefficient
  - Item:
    - token: c
    - role: Constant height offset
    - type: Real scalar offset
  - Item:
    - token: F(x,y)
    - role: Current scalar height value at the point (x,y)
    - type: Derived real scalar
  - Item:
    - token: ∂F/∂x
    - role: Partial derivative with respect to x, with y and coefficients fixed
    - type: Derived real scalar
  - Item:
    - token: ∂F/∂y
    - role: Partial derivative with respect to y, with x and coefficients fixed
    - type: Derived real scalar
  - Item:
    - token: ∇F
    - role: Gradient vector at the current point, with components partialX and partialY
    - type: Derived real plane vector
  - Item:
    - token: ‖∇F‖
    - role: Euclidean norm of the gradient, distinct from the field height and vector components
    - type: Derived nonnegative real scalar
- ast:
  - id: ast:gradient:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:gradient:expression
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:gradient:expression
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:gradient:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:gradient:expression
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:gradient:expression
    - Item:
      - id: n:square
      - kind: functionRef
      - ref: For a real input, multiply that input by itself
      - type: Real to nonnegative real
    - Item:
      - id: n:squareX
      - kind: apply
      - function: n:square
      - argument: n:x
      - type: Nonnegative real scalar
    - Item:
      - id: n:squareY
      - kind: apply
      - function: n:square
      - argument: n:y
      - type: Nonnegative real scalar
    - Item:
      - id: n:axSquared
      - kind: multiply
      - arguments:
        - n:a
        - n:squareX
      - type: Real scalar
    - Item:
      - id: n:bySquared
      - kind: multiply
      - arguments:
        - n:b
        - n:squareY
      - type: Real scalar
    - Item:
      - id: n:curvedHeight
      - kind: add
      - arguments:
        - n:axSquared
        - n:bySquared
      - type: Real scalar
    - Item:
      - id: n:height
      - kind: add
      - arguments:
        - n:c
        - n:curvedHeight
      - type: Real scalar
    - Item:
      - id: n:double
      - kind: functionRef
      - ref: For a real input, multiply that input by 2
      - type: Real to real
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
      - id: n:partialX
      - kind: apply
      - function: n:double
      - argument: n:ax
      - type: Real partial derivative
    - Item:
      - id: n:partialY
      - kind: apply
      - function: n:double
      - argument: n:by
      - type: Real partial derivative
    - Item:
      - id: n:pair
      - kind: functionRef
      - ref: Construct an ordered pair by supplying its first coordinate, then its second coordinate
      - type: Real to (real to ordered real pair)
    - Item:
      - id: n:first
      - kind: apply
      - function: n:pair
      - argument: n:partialX
      - type: Real to ordered real pair
    - Item:
      - id: n:output
      - kind: apply
      - function: n:first
      - argument: n:partialY
      - type: Gradient vector (partialX,partialY); primary numeric readout is its Euclidean norm, not either component
  - scopes:
    - Item:
      - id: scope:gradient:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - a
        - b
        - c
      - domain condition: The root is the real-plane gradient vector of the differentiable quadratic field. Normalization is allowed only when its norm is positive.
- parse errors:
  - Item:
    - input: Use the gradient norm as if it were the gradient vector
    - status: type_error
    - reason: The vector has two signed components; its norm is one nonnegative scalar.
  - Item:
    - input: Normalize the zero gradient by dividing by its norm
    - status: division_by_zero
    - reason: The zero vector remains valid, but no unique unit gradient direction is obtained.
  - Item:
    - input: Infer a local maximum from zero gradient alone
    - status: inference_error
    - reason: Nearby values can form a maximum, minimum, saddle or other behavior; the zero first-order vector alone does not decide.
- ast coverage: The AST explicitly forms the field and both analytic partials, then combines partialX and partialY into a vector root. The primary numeric fixtures and Graph track the separately declared scalar gradientNorm. Unit-direction normalization and its zero-norm status remain explicit auxiliary model rules; the gradient vector is never relabeled as its norm.
- output symbol bindings:
  - F(x,y): height
  - ∂F/∂x: partialX
  - ∂F/∂y: partialY
  - ∇F:
    - partialX
    - partialY
  - ‖∇F‖: gradientNorm

## Properties

- Item:
  - claim: The gradient norm is nonnegative and is zero exactly when both gradient components are zero.
  - conditions: Use the Euclidean norm of the finite real component pair.
  - derivation: The squared norm is partialX²+partialY², a sum of nonnegative squares.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:gradient:steepest-climb
- Item:
  - claim: A zero gradient can occur at a maximum, a saddle, or throughout a constant field.
  - conditions: Use the three explicitly stated polynomial configurations; no universal classification follows from zero alone.
  - derivation: Compare height changes along the coordinate directions and the constant-field formula in the worked examples.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:gradient:saddle
- Item:
  - claim: Changing only the constant height offset leaves the gradient unchanged.
  - conditions: Hold a,b,x,y fixed.
  - derivation: Neither component 2*a*x or 2*b*y contains c.
  - status: author-derived for stated conditions; independent review pending

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:partial-derivative
  - type: supports
  - conditions: Evaluate both coordinate partials at the same point.
  - reason: Those derivatives are the components of the gradient vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Use compatible equally scaled Euclidean coordinates.
  - reason: Gradient direction and norm use vector operations and unit-vector normalization.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: The field is differentiable and the direction vector has unit length.
  - reason: The local slope in a chosen direction is the gradient dot that direction; its maximum is the gradient norm.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:gradient:steepest-climb
  - title: Combine two slice slopes into one local uphill direction
  - role: applied_model
  - question: At (1,0.5) m on F=4-0.5x²-0.25y², which horizontal direction gives the largest local height increase per metre?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
  - inputs:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∂F/∂x=-1; ∂F/∂y=-0.25 m/m
      - reason: The two partials are evaluated at the same point.
    - Item:
      - index: 2
      - expression: ∇F=(-1,-0.25); ‖∇F‖=√17/4 m/m
      - reason: The gradient vector combines the slopes; its norm is a separate scalar.
    - Item:
      - index: 3
      - expression: Unit uphill direction=(-4/√17,-1/√17)
      - reason: Divide the nonzero vector by its norm.
  - result:
    - exact: Gradient (-1,-0.25); norm √17/4; unit local uphill direction (-4/√17,-1/√17)
  - interpretation: The first coordinate contributes more strongly, so the local uphill arrow points mostly west and slightly south.
  - independent check:
    - method: Unit-direction dot-product check
    - expected: The proposed unit vector has squared norm 16/17+1/17=1. Its dot product with the gradient is √17/4, the maximum directional slope.
  - limits: This is local first-order ascent on a stipulated field, not a globally optimal walking route or an empirical terrain measurement.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
- Item:
  - id: math:example:gradient:changed-direction
  - title: Compare another coefficient pair and point
  - role: applied_model
  - question: Use a=-0.25,b=-0.5,c=4 at point (1,1) m. What gradient and norm result?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
  - inputs:
    - x: 1
    - y: 1
    - a: -0.25
    - b: -0.5
    - c: 4
  - steps:
    - Item:
      - index: 1
      - expression: F(1,1)=4-0.25-0.5=3.25 m
      - reason: The model height is distinct from its slopes.
    - Item:
      - index: 2
      - expression: ∇F=(-0.5,-1); ‖∇F‖=√5/2 m/m
      - reason: The second-coordinate slope now has the larger magnitude.
    - Item:
      - index: 3
      - expression: Unit uphill direction=(-1/√5,-2/√5)
      - reason: The normalized direction points more strongly south.
  - result:
    - exact: Gradient (-0.5,-1); norm √5/2; unit direction (-1/√5,-2/√5)
  - interpretation: The gradient direction follows the two derivative components, not the scalar height alone.
  - independent check:
    - method: Norm and unit check
    - expected: (-0.5)²+(-1)²=5/4; the normalized vector has squared length 1/5+4/5=1.
  - limits: Coefficients, point and coordinate metric must stay declared; unequal physical coordinate units would change the meaning of an ordinary Euclidean comparison.
  - preset:
    - x: 1
    - y: 1
    - a: -0.25
    - b: -0.5
    - c: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
- Item:
  - id: math:example:gradient:hilltop
  - title: At the hilltop the gradient is zero
  - role: applied_model
  - question: Keep a=-0.5,b=-0.25,c=4 and move to (0,0) m. What happens to the gradient arrow?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
  - inputs:
    - x: 0
    - y: 0
    - a: -0.5
    - b: -0.25
    - c: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇F(0,0)=(0,0); ‖∇F‖=0
      - reason: Both first-order slopes vanish.
    - Item:
      - index: 2
      - expression: F(x,y)=4-0.5x²-0.25y²≤4
      - reason: The chosen field decreases away from the origin.
    - Item:
      - index: 3
      - expression: A unit gradient direction is unavailable
      - reason: Dividing the zero vector by its norm would divide by zero.
  - result:
    - exact: Height 4 m; zero gradient and norm; no unique unit gradient direction
  - interpretation: This particular stationary point is a strict maximum, even though every first-order directional slope there is zero.
  - independent check:
    - method: Direct height comparison
    - expected: For every nonzero point (x,y), 0.5x²+0.25y²>0, so its height is below F(0,0)=4.
  - limits: The maximum conclusion follows from the stated polynomial signs, not from the zero gradient alone.
  - preset:
    - x: 0
    - y: 0
    - a: -0.5
    - b: -0.25
    - c: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
- Item:
  - id: math:example:gradient:saddle
  - title: A zero gradient can also occur at a saddle
  - role: applied_model
  - question: Set a=0.5,b=-0.5,c=4 at (0,0) m. Does the zero gradient make this another hilltop?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
  - inputs:
    - x: 0
    - y: 0
    - a: 0.5
    - b: -0.5
    - c: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇F(0,0)=(0,0); ‖∇F‖=0
      - reason: The same first-order gradient values occur at the origin.
    - Item:
      - index: 2
      - expression: F(x,0)=4+0.5x²; F(0,y)=4-0.5y²
      - reason: Nearby x-axis points are higher, while nearby y-axis points are lower.
    - Item:
      - index: 3
      - expression: The point is a saddle, not a maximum or minimum
      - reason: A zero gradient does not decide the local shape by itself.
  - result:
    - exact: Zero gradient; saddle point; no unique unit gradient direction
  - interpretation: Different second-order changes can coexist with zero first-order directional slopes.
  - independent check:
    - method: Two-path check
    - expected: For every small positive h, F(h,0)>4 and F(0,h)<4, so arbitrarily nearby points lie on both sides of the origin height.
  - limits: No general stationary-point classifier is implemented; this conclusion is derived directly for the selected field.
  - preset:
    - x: 0
    - y: 0
    - a: 0.5
    - b: -0.5
    - c: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
- Item:
  - id: math:example:gradient:flat-field
  - title: A constant field has zero gradient everywhere
  - role: applied_model
  - question: Set a=b=0,c=4 and inspect point (1,-0.5) m. What does the gradient mean now?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.
  - inputs:
    - x: 1
    - y: -0.5
    - a: 0
    - b: 0
    - c: 4
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=4 m for every point
      - reason: Both quadratic contributions have been removed.
    - Item:
      - index: 2
      - expression: ∇F=(0,0); ‖∇F‖=0 everywhere
      - reason: Every coordinate partial is zero.
    - Item:
      - index: 3
      - expression: Every first-order directional slope is zero
      - reason: No unique normalized gradient direction is selected.
  - result:
    - exact: Constant height 4 m; zero gradient everywhere; no unique unit gradient direction
  - interpretation: A flat field is one reason for a zero gradient, but the hilltop and saddle examples show other reasons.
  - independent check:
    - method: Constant-difference check
    - expected: F(x+h,y+k)-F(x,y)=0 for any allowed coordinate changes, so there is no height change in any direction.
  - limits: The symbols h and k in this check are arbitrary coordinate increments, not additional playground controls.
  - preset:
    - x: 1
    - y: -0.5
    - a: 0
    - b: 0
    - c: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is a stipulated smooth height model F(x,y)=c+a*x²+b*y², not a measured terrain dataset.
    - Horizontal coordinates x,y and height F use metres; a,b use inverse metres and c uses metres.
    - The horizontal axes are perpendicular, equally scaled and use the same physical length unit.
    - Each derivative holds the other independent coordinate and the chosen coefficients fixed.

## Interactive

- component id: gradient-visual-model
- renderer id: gradient-visual-model
- renderer version: 1.0.0
- model id: gradient-visual-model
- model revision: 1
- expression id: ast:gradient:expression
- interaction status: implemented
- description: Use the same height contours and point as the partial-derivative module, now with both slope components, a distinct gradient arrow and its norm. A genuine 3D surface shares the analytic field; the Graph varies x and plots the scalar norm.
- controls:
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
    - default: 0.5
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: a
    - type: number
    - default: -0.5
    - min: -1
    - max: 1
    - slider min: -1
    - slider max: 1
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: b
    - type: number
    - default: -0.25
    - min: -1
    - max: 1
    - slider min: -1
    - slider max: 1
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: c
    - type: number
    - default: 4
    - min: 0
    - max: 6
    - slider min: 0
    - slider max: 6
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
- expected cases:
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
    - output: 1.0307764064044151
  - Item:
    - input:
      - x: -1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
    - output: 1.0307764064044151
  - Item:
    - input:
      - x: 0
      - y: 0
      - a: -0.5
      - b: -0.25
      - c: 4
    - output: 0.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: 0
      - b: 0
      - c: 4
    - output: 0.0
  - Item:
    - input:
      - x: 0
      - y: 0
      - a: 0.5
      - b: -0.5
      - c: 4
    - output: 0.0
  - Item:
    - input:
      - x: 1
      - y: 1
      - a: -0.25
      - b: -0.5
      - c: 4
    - output: 1.118033988749895
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 6
    - output: 1.0307764064044151
  - Item:
    - input:
      - x: 2
      - y: -2
      - a: 1
      - b: 1
      - c: 0
    - output: 5.656854249492381
  - Item:
    - input:
      - x: -2
      - y: 1
      - a: -1
      - b: 0.5
      - c: 4
    - output: 4.123105625617661
  - Item:
    - input:
      - x: 0.5
      - y: -0.5
      - a: 0.25
      - b: -0.5
      - c: 4
    - output: 0.5590169943749475
  - Item:
    - input:
      - x: 1
      - y: 2.1
      - a: -0.5
      - b: -0.25
      - c: 4
    - status: invalid_parameters
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: 1.1
      - b: -0.25
      - c: 4
    - status: invalid_parameters
- compute: output=gradientNorm; height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; gradientNorm=hypot(partialX,partialY); unitGradientX=partialX/gradientNorm and unitGradientY=partialY/gradientNorm when gradientNorm>0, otherwise both null with directionStatus=undefined_direction.
- numeric tolerance: 1e-10
- invariants:
  - The general scalar field is defined on a neighborhood of the point; a partial derivative differentiates one coordinate while holding other independent coordinates fixed.
  - The live field is F(x,y)=c+a*x²+b*y², so all derivatives used here exist and are continuous.
  - For the chosen field, partialX=2*a*x and partialY=2*b*y. They are evaluated at the current point, not at unrelated coordinates.
  - Use perpendicular equally scaled horizontal axes and compatible coordinate units when comparing Euclidean gradient directions and magnitudes.
  - The field must be differentiable at the point for the stated first-order directional-slope interpretation.
  - For a nonzero gradient, normalization divides each component by the positive gradient norm. At zero norm both unit-direction components are null.
  - A zero gradient alone does not classify a point as a maximum, minimum or flat field.
- limits:
  - Only the stated two-input real quadratic field and compatible Euclidean coordinate metric.
  - The gradient is a vector. The primary Graph/output is its scalar norm as x varies at fixed other controls.
  - At zero norm, the vector and scalar norm are valid zero values; the normalized gradient direction is unavailable.
  - Direction is local first-order information, not a global best path or a classification of every stationary point.
- fallback: Pause and read both signed gradient components, their nonnegative norm and the direction status. The norm graph and original worked steps remain available without the 3D surface.
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
  - prompt: Does gradient norm equal height?
  - answer: No. Height is the field value, while gradient norm is the largest first-order rate of increase per unit horizontal distance in the stated coordinates.
- Item:
  - prompt: Does zero gradient always mean a hilltop?
  - answer: No. The hilltop, saddle and constant-field examples have the same zero first-order gradient but different nearby height behavior.

## Representations

- Item:
  - kind: geometry
  - description: Use the same height contours and point as the partial-derivative module, now with both slope components, a distinct gradient arrow and its norm. A genuine 3D surface shares the analytic field; the Graph varies x and plots the scalar norm.
- Item:
  - kind: graph
  - description: Plot the nonnegative scalar gradient norm as x varies with y and all field coefficients fixed. The gradient vector and height remain separate quantities. At zero norm the plotted value is zero, while normalized direction is unavailable.
- Item:
  - kind: substitution
  - description: Current controls, intermediate calculations and labeled scene quantities follow one evaluated model.
- Item:
  - kind: spatial
  - description: A genuine 3D surface z=F(x,y) shares the current point, local tangent plane, gradient and coordinate-partial information. The independent inputs remain x and y; camera state stays separate.

## Applications

- Item:
  - context: Illustrative local climb
  - mapping: Two slice slopes combine into a normalized nonzero local uphill direction on a stipulated field.
  - limitations: Local differentiability, compatible coordinate units and no global-route claim.
  - evidence kind: constructed_example
  - example ref: math:example:gradient:steepest-climb
- Item:
  - context: Stationary-point comparison
  - mapping: A hilltop, a saddle and a constant field all give zero gradient but have different nearby heights.
  - limitations: Classification is derived only for these specific polynomials.
  - evidence kind: constructed_example
  - example ref: math:example:gradient:saddle

## Source Refs

- source:openstax:gradient-directional
- source:openstax:partial-derivatives

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded quadratic-field gradient-vector/norm fixtures, distinct Geometry/Graph/Spatial views and a linked modular story.

## Referenced source registry

- Source ID: source:openstax:partial-derivatives. [Calculus Volume 3, 4.3 Partial Derivatives](https://openstax.org/books/calculus-volume-3/pages/4-3-partial-derivatives). Locator: Definitions of partial derivatives; holding other independent inputs fixed; cross-section interpretations. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:gradient-directional. [Calculus Volume 3, 4.6 Directional Derivatives and the Gradient](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient). Locator: Gradient definition; directional derivative for differentiable fields; maximum directional derivative and zero-gradient case. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
