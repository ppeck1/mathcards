---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:directional-derivative", "id": "math:concept:directional-derivative", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:directional-derivative", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a8f4dec0217e00395bdf1d7d96ad7f9ca8f8a3c2a64dc029ca9b385756a55f1b"}, "purpose": "Turn a direction arrow and see how its two coordinate slopes combine.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a8f4dec0217e00395bdf1d7d96ad7f9ca8f8a3c2a64dc029ca9b385756a55f1b", "status": "draft", "title": "Directional derivative", "topics": ["mathematics", "calculus", "analysis", "geometry", "slope in a direction", "unit-direction derivative", "gradient dot direction"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Directional derivative

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:directional-derivative; revision 0.1.0-draft. Setting: Differentiable scalar fields near a point in the real plane, with compatible equally scaled Euclidean coordinates. Expression: $D_uF(x,y)=\nabla F(x,y)\cdot u=(2ax)\cos\theta+(2by)\sin\theta,\quad u=(\cos\theta,\sin\theta),\quad\|u\|=1.$. Conditions required for a defined value (a case may test their violation): The field is differentiable at the selected point and is defined on a neighborhood of it. The direction vector u has Euclidean norm one; the two coordinate axes use compatible equal scales. For the live family F=c+a*x²+b*y², both partial derivatives exist everywhere and equal 2ax and 2by. The degree-valued angle control is converted to radians before trigonometric evaluation. The primary output is a signed scalar directional slope, not the gradient vector, its norm or the field height. A zero directional derivative describes first-order behavior in that direction only; it does not classify the whole field. Scope: The general dot-product formula requires differentiability and a unit direction under the stated coordinate metric. The executable specimen uses only a bounded quadratic family without mixed terms. A 3D view represents its scalar height surface, not an additional independent input. The local slope does not predict a whole path or an exact finite elevation gain.

## Schema Version

0.1.0

## Id

math:concept:directional-derivative

## Slug

directional-derivative

## Type

concept

## Title

Directional derivative

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. Stories and worked quantities are originally authored constructed examples, not measurements or historical events. Historical priority and notation claims require separate evidence before publication.

## Aliases

- slope in a direction
- unit-direction derivative
- gradient dot direction

## Branches

- calculus
- analysis
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Turn a direction arrow and see how its two coordinate slopes combine.

## Meaning

A directional derivative is a local rate along a specified direction. For a differentiable scalar field and a unit direction, it is the gradient dot that direction. The chosen direction can be uphill, downhill or locally level without changing the underlying field gradient.

## Prerequisites

- required:
  - math:concept:partial-derivative
  - math:concept:vector
- helpful:
  - math:concept:gradient
  - math:concept:inner-product
- depth:
  - math:concept:tangent-plane

## Definition

- setting: Differentiable scalar fields near a point in the real plane, with compatible equally scaled Euclidean coordinates.
- formal latex: D_uF(x,y)=\nabla F(x,y)\cdot u=(2ax)\cos\theta+(2by)\sin\theta,\quad u=(\cos\theta,\sin\theta),\quad\|u\|=1.
- signature:
  - x,y: Field point components, each in [-2,2].
  - a,b,c: Quadratic coefficients a,b in [-1,1] and offset c in [0,6].
  - θ,angleDegrees: Direction angle in degrees, bounded by -180 and 180; converted to radians internally.
  - u: Unit vector (directionX,directionY) formed from cosine and sine.
  - DᵤF,directionalSlope: Signed scalar primary output partialX*directionX+partialY*directionY.
  - F,height: Height at the selected point, separate from the directional slope.
- conditions:
  - The field is differentiable at the selected point and is defined on a neighborhood of it.
  - The direction vector u has Euclidean norm one; the two coordinate axes use compatible equal scales.
  - For the live family F=c+a*x²+b*y², both partial derivatives exist everywhere and equal 2ax and 2by.
  - The degree-valued angle control is converted to radians before trigonometric evaluation.
  - The primary output is a signed scalar directional slope, not the gradient vector, its norm or the field height.
  - A zero directional derivative describes first-order behavior in that direction only; it does not classify the whole field.
- domain notes: The general dot-product formula requires differentiability and a unit direction under the stated coordinate metric. The executable specimen uses only a bounded quadratic family without mixed terms. A 3D view represents its scalar height surface, not an additional independent input. The local slope does not predict a whole path or an exact finite elevation gain.
- proof status: Definition-level references; stated restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:openstax:gradient-directional

## Grammar

- pronunciation: Directional derivative
- expression latex: D_uF(x,y)=\nabla F(x,y)\cdot u=(2ax)\cos\theta+(2by)\sin\theta,\quad u=(\cos\theta,\sin\theta),\quad\|u\|=1.
- formation rule: angleRadians=angleDegrees*pi/180; directionX=cos(angleRadians); directionY=sin(angleRadians); height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; directionalXTerm=partialX*directionX; directionalYTerm=partialY*directionY; output=directionalSlope=directionalXTerm+directionalYTerm.
- precedence: Evaluate the two partials at the same point. Convert the direction angle to radians, form the unit vector, multiply corresponding components and add the products.
- symbols:
  - Item:
    - token: x
    - role: Current first coordinate
    - type: Real scalar coordinate
  - Item:
    - token: y
    - role: Current second coordinate
    - type: Real scalar coordinate
  - Item:
    - token: a
    - role: Coefficient of x²
    - type: Real scalar coefficient
  - Item:
    - token: b
    - role: Coefficient of y²
    - type: Real scalar coefficient
  - Item:
    - token: c
    - role: Constant height offset
    - type: Real scalar offset
  - Item:
    - token: θ
    - role: Direction angle displayed in degrees and converted to radians
    - type: Angle
  - Item:
    - token: u
    - role: Chosen unit direction (directionX,directionY)
    - type: Real unit plane vector
  - Item:
    - token: ∇F
    - role: Gradient vector at the selected point
    - type: Derived real plane vector
  - Item:
    - token: DᵤF
    - role: Directional derivative in the chosen unit direction
    - type: Derived real scalar slope
- ast:
  - id: ast:directional-derivative:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:angleDegrees
      - kind: variable
      - symbol: angleDegrees
      - type: Finite real control
      - scope ref: scope:directional-derivative:expression
    - Item:
      - id: n:square
      - kind: functionRef
      - ref: Square a real scalar
      - type: Real to real
    - Item:
      - id: n:xSquared
      - kind: apply
      - function: n:square
      - argument: n:x
      - type: Real scalar
    - Item:
      - id: n:ySquared
      - kind: apply
      - function: n:square
      - argument: n:y
      - type: Real scalar
    - Item:
      - id: n:xTerm
      - kind: multiply
      - arguments:
        - n:a
        - n:xSquared
      - type: Real scalar
    - Item:
      - id: n:yTerm
      - kind: multiply
      - arguments:
        - n:b
        - n:ySquared
      - type: Real scalar
    - Item:
      - id: n:curvedHeight
      - kind: add
      - arguments:
        - n:xTerm
        - n:yTerm
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
      - ref: Multiply a real scalar by 2
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
      - type: Real scalar
    - Item:
      - id: n:partialY
      - kind: apply
      - function: n:double
      - argument: n:by
      - type: Real scalar
    - Item:
      - id: n:radians
      - kind: functionRef
      - ref: Convert the displayed degree measure to radians by multiplying by pi/180
      - type: Real to real
    - Item:
      - id: n:theta
      - kind: apply
      - function: n:radians
      - argument: n:angleDegrees
      - type: Real scalar
    - Item:
      - id: n:cosine
      - kind: functionRef
      - ref: Cosine of a radian angle
      - type: Real to real
    - Item:
      - id: n:sine
      - kind: functionRef
      - ref: Sine of a radian angle
      - type: Real to real
    - Item:
      - id: n:directionX
      - kind: apply
      - function: n:cosine
      - argument: n:theta
      - type: Real scalar
    - Item:
      - id: n:directionY
      - kind: apply
      - function: n:sine
      - argument: n:theta
      - type: Real scalar
    - Item:
      - id: n:directionalXTerm
      - kind: multiply
      - arguments:
        - n:partialX
        - n:directionX
      - type: Real scalar
    - Item:
      - id: n:directionalYTerm
      - kind: multiply
      - arguments:
        - n:partialY
        - n:directionY
      - type: Real scalar
    - Item:
      - id: n:output
      - kind: add
      - arguments:
        - n:directionalXTerm
        - n:directionalYTerm
      - type: Real scalar
  - scopes:
    - Item:
      - id: scope:directional-derivative:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - a
        - b
        - c
        - angleDegrees
      - domain condition: The field is differentiable at the selected point and is defined on a neighborhood of it.
- parse errors:
  - Item:
    - input: Use direction (1,1) as if it had unit length
    - status: normalization_error
    - reason: Its length is √2; using it without normalization scales the rate.
  - Item:
    - input: Call a zero directional derivative a flat field
    - status: inference_error
    - reason: Other directions and higher-order changes can remain nonzero.
  - Item:
    - input: Substitute field height for a local slope
    - status: type_error
    - reason: Height and height-change per unit input distance are distinct quantities.
- ast coverage: The AST forms the shared field partials, converts the degree control, forms cosine/sine direction components and adds the two scalar products. The root is the directional derivative. Gradient magnitude and height are distinct auxiliary quantities.
- output symbol bindings:
  - u:
    - directionX
    - directionY
  - ∇F:
    - partialX
    - partialY
  - DᵤF: directionalSlope

## Properties

- Item:
  - claim: Reversing a unit direction reverses the directional derivative.
  - conditions: Use opposite unit directions at the same point.
  - derivation: The gradient dot negative u is the negative of gradient dot u.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:directional-derivative:westward
- Item:
  - claim: A directional slope can be zero while the gradient is nonzero.
  - conditions: Choose a unit direction perpendicular to the gradient.
  - derivation: A scalar product with a perpendicular vector is zero.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:directional-derivative:level-direction
- Item:
  - claim: For this differentiable field, the absolute directional slope is at most the gradient norm.
  - conditions: Use a unit direction in equally scaled Euclidean coordinates.
  - derivation: The scalar-product bound is ‖∇F‖ times ‖u‖, and ‖u‖=1.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:directional-derivative:diagonal

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:gradient
  - type: supports
  - conditions: Evaluate at the same point in compatible Euclidean coordinates.
  - reason: The chosen direction tests one projection of the full gradient.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Use a unit direction if the result is to mean rate per unit distance.
  - reason: The directional slope is a scalar product.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:tangent-plane
  - type: supports
  - conditions: The field is differentiable at the selected point.
  - reason: The same partials determine every directional slope in the local tangent plane.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:directional-derivative:westward
  - title: Compare a westward sensor move
  - role: applied_model
  - question: At (1,0.5) m, what is the initial height change per metre for a westward move?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 180
  - steps:
    - Item:
      - index: 1
      - expression: θ=180 degrees
      - reason: Convert the displayed degree measure before evaluating trigonometric components.
    - Item:
      - index: 2
      - expression: u=(-1,0); ∇F=(-1,-0.25)
      - reason: Evaluate both partials at the same point and form a unit direction.
    - Item:
      - index: 3
      - expression: DᵤF=(-1)(-1)+(-0.25)(0)=1 m/m
      - reason: Take the scalar product of the gradient with that direction.
  - result:
    - exact: Directional slope 1 m/m
  - interpretation: The chosen westward direction is uphill at first; its rate is below the steepest possible rate √17/4.
  - independent check:
    - method: Independent line-derivative check
    - expected: Use the fixed-y derivative: moving west reverses the x-direction sign.
  - limits: This is the initial rate for one direction, not a finite elevation gain or route recommendation.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 180
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
- Item:
  - id: math:example:directional-derivative:northward
  - title: Point the same sensor north
  - role: applied_model
  - question: Without changing the field or point, what is the initial northward slope?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 90
  - steps:
    - Item:
      - index: 1
      - expression: θ=90 degrees
      - reason: Convert the displayed degree measure before evaluating trigonometric components.
    - Item:
      - index: 2
      - expression: u=(0,1); ∇F=(-1,-0.25)
      - reason: Evaluate both partials at the same point and form a unit direction.
    - Item:
      - index: 3
      - expression: DᵤF=(-1)(0)+(-0.25)(1)=-0.25 m/m
      - reason: Take the scalar product of the gradient with that direction.
  - result:
    - exact: Directional slope −0.25 m/m
  - interpretation: Turning the unit direction changes the directional slope while leaving the underlying gradient unchanged.
  - independent check:
    - method: Independent line-derivative check
    - expected: The northward derivative is exactly the y partial at the same point.
  - limits: Equal coordinate scales and the same field point are required for the comparison.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
- Item:
  - id: math:example:directional-derivative:diagonal
  - title: Combine east and north contributions
  - role: applied_model
  - question: What initial slope does a northeast direction at 45 degrees produce?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 45
  - steps:
    - Item:
      - index: 1
      - expression: θ=45 degrees
      - reason: Convert the displayed degree measure before evaluating trigonometric components.
    - Item:
      - index: 2
      - expression: u=(1/√2,1/√2); ‖u‖=1
      - reason: Evaluate both partials at the same point and form a unit direction.
    - Item:
      - index: 3
      - expression: DᵤF=-1/√2-0.25/√2=-1.25/√2 m/m
      - reason: Take the scalar product of the gradient with that direction.
  - result:
    - exact: Directional slope −0.883883476483 m/m
  - interpretation: Both component contributions are negative, so this local direction goes downhill.
  - independent check:
    - method: Independent line-derivative check
    - expected: Along displacement (t/√2,t/√2), differentiate the exact quadratic at t=0.
  - limits: The unit direction matters: vector (1,1) has length √2 and gives a differently scaled derivative.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 45
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
- Item:
  - id: math:example:directional-derivative:level-direction
  - title: A locally level east-west move can coexist with another slope
  - role: applied_model
  - question: At x=0 and y=0.5, does a westward zero slope mean the height field is flat?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 0
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 180
  - steps:
    - Item:
      - index: 1
      - expression: θ=180 degrees
      - reason: Convert the displayed degree measure before evaluating trigonometric components.
    - Item:
      - index: 2
      - expression: ∇F=(0,-0.25); u=(-1,0)
      - reason: Evaluate both partials at the same point and form a unit direction.
    - Item:
      - index: 3
      - expression: DᵤF=0×(-1)+(-0.25)×0=0 m/m
      - reason: Take the scalar product of the gradient with that direction.
  - result:
    - exact: Directional slope 0 m/m
  - interpretation: There is no first-order westward height change at this point, but the northward partial remains nonzero.
  - independent check:
    - method: Independent line-derivative check
    - expected: The fixed-y slice is an even quadratic with zero derivative at x=0.
  - limits: A zero directional derivative need not imply a constant field, a maximum or zero change over a finite move.
  - preset:
    - x: 0
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - angleDegrees: 180
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
- Item:
  - id: math:example:directional-derivative:flat-sketch
  - title: Check a constant-height reference sketch
  - role: applied_model
  - question: If both quadratic coefficients are zero, what does changing the heading do to local slope?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 1
    - y: 0.5
    - a: 0
    - b: 0
    - c: 4
    - angleDegrees: 180
  - steps:
    - Item:
      - index: 1
      - expression: θ=180 degrees
      - reason: Convert the displayed degree measure before evaluating trigonometric components.
    - Item:
      - index: 2
      - expression: F(x,y)=4; ∇F=(0,0)
      - reason: Evaluate both partials at the same point and form a unit direction.
    - Item:
      - index: 3
      - expression: DᵤF=0 for every unit direction u
      - reason: Take the scalar product of the gradient with that direction.
  - result:
    - exact: Directional slope 0 m/m
  - interpretation: The constant field is flat in every direction; the chosen compass heading remains well defined.
  - independent check:
    - method: Independent line-derivative check
    - expected: Subtract two identical height values along any line through the point.
  - limits: This exact constant-field conclusion uses a=b=0 throughout the family, not only a zero slope at one point.
  - preset:
    - x: 1
    - y: 0.5
    - a: 0
    - b: 0
    - c: 4
    - angleDegrees: 180
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.

## Interactive

- component id: component:directional-derivative
- renderer id: directional-derivative-visual-model
- renderer version: 1
- model id: directional-derivative-visual-model
- model revision: 1
- expression id: ast:directional-derivative:expression
- interaction status: implemented
- description: Turn the chosen unit direction on shared height contours. Two signed component products combine into one directional slope. Geometry, Graph and a genuine 3D surface use the same field and point.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.01
  - Item:
    - id: y
    - type: number
    - default: 0.5
    - min: -2
    - max: 2
    - step: 0.01
  - Item:
    - id: a
    - type: number
    - default: -0.5
    - min: -1
    - max: 1
    - step: 0.01
  - Item:
    - id: b
    - type: number
    - default: -0.25
    - min: -1
    - max: 1
    - step: 0.01
  - Item:
    - id: c
    - type: number
    - default: 4
    - min: 0
    - max: 6
    - step: 0.01
  - Item:
    - id: angleDegrees
    - type: number
    - default: 180
    - min: -180
    - max: 180
    - step: 1
- expected cases:
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 180
    - output: 1.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 0
    - output: -1.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 90
    - output: -0.25
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: -90
    - output: 0.25
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 45
    - output: -0.8838834764831844
  - Item:
    - input:
      - x: 0
      - y: 0
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 180
    - output: 0.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: 0
      - b: 0
      - c: 4
      - angleDegrees: 180
    - output: 0.0
  - Item:
    - input:
      - x: -2
      - y: 2
      - a: -1
      - b: 1
      - c: 4
      - angleDegrees: -135
    - output: -5.65685424949238
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 6
      - angleDegrees: 180
    - output: 1.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: -180
    - output: 1.0
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 181
    - status: invalid_parameters
  - Item:
    - input:
      - x: 2.1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - angleDegrees: 180
    - status: invalid_parameters
- compute: angleRadians=angleDegrees*pi/180; directionX=cos(angleRadians); directionY=sin(angleRadians); height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; directionalXTerm=partialX*directionX; directionalYTerm=partialY*directionY; output=directionalSlope=directionalXTerm+directionalYTerm.
- numeric tolerance: 1e-10
- invariants:
  - The field is differentiable at the selected point and is defined on a neighborhood of it.
  - The direction vector u has Euclidean norm one; the two coordinate axes use compatible equal scales.
  - For the live family F=c+a*x²+b*y², both partial derivatives exist everywhere and equal 2ax and 2by.
  - The degree-valued angle control is converted to radians before trigonometric evaluation.
  - The primary output is a signed scalar directional slope, not the gradient vector, its norm or the field height.
  - A zero directional derivative describes first-order behavior in that direction only; it does not classify the whole field.
- limits:
  - Only F=c+a*x²+b*y² and a planar unit direction; no imported terrain or symbolic differentiator.
  - The scene arrow is a direction at the point, not a simulated route.
  - The graph varies angleDegrees while the point and field coefficients stay fixed.
- fallback: Pause to read the labeled inputs, intermediate calculations and output. The model-data table and original worked steps provide numeric alternatives to the scene.
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
  - prompt: Does changing the angle change the gradient?
  - answer: The chosen point and field determine the gradient. Turning the unit direction changes its scalar product with that fixed gradient.
- Item:
  - prompt: Is a zero slope the same as an exactly level finite move?
  - answer: No. The derivative is the first-order rate at one point; curvature can cause a finite change.

## Representations

- Item:
  - kind: geometry
  - description: Height contours, the gradient arrow, a chosen unit direction and separate signed component contributions share the same point.
- Item:
  - kind: graph
  - description: Plot the signed directional slope against the angle in degrees, with the point and field fixed. This graph is not height or gradient norm.
- Item:
  - kind: spatial
  - description: A genuine orthographic height surface shows the selected point, the chosen directional slice and its local slope; camera angle is viewing state.

## Applications

- Item:
  - context: Local terrain heading
  - mapping: A unit horizontal heading selects one local height slope on a stipulated terrain sketch.
  - limitations: Compatible metre scales and a local derivative interpretation; no navigation claim.
  - evidence kind: constructed_example
  - example ref: math:example:directional-derivative:westward
- Item:
  - context: Locally level direction
  - mapping: A zero slope in one heading is compared with a nonzero perpendicular partial.
  - limitations: This does not establish a flat field.
  - evidence kind: constructed_example
  - example ref: math:example:directional-derivative:level-direction

## Source Refs

- source:openstax:gradient-directional

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded interactive family is an illustration, not a general symbolic engine or proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, connected modular story and declared Geometry/Graph views with a genuine 3D surface.

## Referenced source registry

- Source ID: source:openstax:gradient-directional. [Calculus Volume 3, 4.6 Directional Derivatives and the Gradient](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient). Locator: Gradient definition; directional derivative for differentiable fields; maximum directional derivative and zero-gradient case. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
