---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:tangent-plane", "id": "math:concept:tangent-plane", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:tangent-plane", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "caee5799e2708633f7bb47816b32353d78d5e3c917779268f13dd2b9e4a0f088"}, "purpose": "Move away from a known surface point and compare a local plane with the actual height.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "caee5799e2708633f7bb47816b32353d78d5e3c917779268f13dd2b9e4a0f088", "status": "draft", "title": "Tangent plane", "topics": ["mathematics", "calculus", "analysis", "geometry", "local plane approximation", "two-variable linear approximation", "surface linearization"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Tangent plane

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:tangent-plane; revision 0.1.0-draft. Setting: Differentiable scalar fields near a base point in the real plane. A plane in three-dimensional graph space is a local height model, not another independent input. Expression: $L(x+\Delta x,y+\Delta y)=F(x,y)+\frac{\partial F}{\partial x}(x,y)\Delta x+\frac{\partial F}{\partial y}(x,y)\Delta y,\quad F(x+\Delta x,y+\Delta y)\approx L(x+\Delta x,y+\Delta y).$. Conditions required for a defined value (a case may test their violation): The general scalar field is defined on a neighborhood of the base point and differentiable at that point; continuous first partials nearby are a sufficient condition. Hold the base point and field coefficients fixed while choosing the finite offsets Δx and Δy. For the live family F=c+a*x²+b*y², the local slopes are partialX=2*a*x and partialY=2*b*y. The predicted height is baseHeight+partialX*dx+partialY*dy. The actual target height is evaluated from the original field. Signed approximation error means actualHeight-predictedHeight; its sign is not discarded. For this particular quadratic the error is exactly a*dx²+b*dy². A general differentiable surface need not have that exact remainder. Scope: The general tangent-plane approximation requires differentiability at the base point. Existence of two partial derivatives at a point by itself is not sufficient. The executable family contains only quadratics with separate coordinate terms. The variables dx and dy are storage keys for finite chosen offsets Δx and Δy, not assertions that a finite move is infinitesimal. The exact quadratic remainder is specific to this family; no arbitrary error bound or symbolic surface engine is implemented.

## Schema Version

0.1.0

## Id

math:concept:tangent-plane

## Slug

tangent-plane

## Type

concept

## Title

Tangent plane

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

- local plane approximation
- two-variable linear approximation
- surface linearization

## Branches

- calculus
- analysis
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Move away from a known surface point and compare a local plane with the actual height.

## Meaning

A tangent plane gives the first-order linear approximation of a differentiable two-input scalar field near a point. Its two coordinate slopes are the partial derivatives at that base point. Prediction and actual height can differ; the signed gap makes the approximation visible.

## Prerequisites

- required:
  - math:concept:partial-derivative
- helpful:
  - math:concept:gradient
  - math:concept:directional-derivative
- depth:
  - math:concept:chain-rule

## Definition

- setting: Differentiable scalar fields near a base point in the real plane. A plane in three-dimensional graph space is a local height model, not another independent input.
- formal latex: L(x+\Delta x,y+\Delta y)=F(x,y)+\frac{\partial F}{\partial x}(x,y)\Delta x+\frac{\partial F}{\partial y}(x,y)\Delta y,\quad F(x+\Delta x,y+\Delta y)\approx L(x+\Delta x,y+\Delta y).
- signature:
  - x,y: Base point components, each in [-1,1].
  - dx,dy,Δx,Δy: Finite offsets, each in [-1,1]; target coordinates stay within [-2,2].
  - a,b,c: Quadratic coefficients a,b in [-1,1] and offset c in [0,6].
  - baseHeight: Original field height at the base point.
  - L(x+Δx,y+Δy),predictedHeight: Primary scalar output from the tangent plane.
  - actualHeight: Original field evaluated at the target point, separate from the prediction.
  - R,approximationError: Signed error actualHeight-predictedHeight.
- conditions:
  - The general scalar field is defined on a neighborhood of the base point and differentiable at that point; continuous first partials nearby are a sufficient condition.
  - Hold the base point and field coefficients fixed while choosing the finite offsets Δx and Δy.
  - For the live family F=c+a*x²+b*y², the local slopes are partialX=2*a*x and partialY=2*b*y.
  - The predicted height is baseHeight+partialX*dx+partialY*dy. The actual target height is evaluated from the original field.
  - Signed approximation error means actualHeight-predictedHeight; its sign is not discarded.
  - For this particular quadratic the error is exactly a*dx²+b*dy². A general differentiable surface need not have that exact remainder.
- domain notes: The general tangent-plane approximation requires differentiability at the base point. Existence of two partial derivatives at a point by itself is not sufficient. The executable family contains only quadratics with separate coordinate terms. The variables dx and dy are storage keys for finite chosen offsets Δx and Δy, not assertions that a finite move is infinitesimal. The exact quadratic remainder is specific to this family; no arbitrary error bound or symbolic surface engine is implemented.
- proof status: Definition-level references; stated restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:openstax:tangent-planes-linear-approximations
  - source:openstax:gradient-directional

## Grammar

- pronunciation: Tangent plane
- expression latex: L(x+\Delta x,y+\Delta y)=F(x,y)+\frac{\partial F}{\partial x}(x,y)\Delta x+\frac{\partial F}{\partial y}(x,y)\Delta y,\quad F(x+\Delta x,y+\Delta y)\approx L(x+\Delta x,y+\Delta y).
- formation rule: baseHeight=height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; targetX=x+dx; targetY=y+dy; linearXTerm=partialX*dx; linearYTerm=partialY*dy; output=predictedHeight=baseHeight+linearXTerm+linearYTerm; actualHeight=c+a*targetX*targetX+b*targetY*targetY; approximationError=actualHeight-predictedHeight.
- precedence: Evaluate height and both partials at the base point, multiply the slopes by their own offsets, and add. Evaluate the original field separately at the target before subtracting the prediction.
- symbols:
  - Item:
    - token: x
    - role: First coordinate of the base point
    - type: Real scalar coordinate
  - Item:
    - token: y
    - role: Second coordinate of the base point
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
    - token: Δx
    - role: Finite chosen offset in the first coordinate, stored as dx
    - type: Real scalar displacement
  - Item:
    - token: Δy
    - role: Finite chosen offset in the second coordinate, stored as dy
    - type: Real scalar displacement
  - Item:
    - token: F(x,y)
    - role: Known field height at the base point
    - type: Derived real scalar
  - Item:
    - token: ∂F/∂x
    - role: Local x slope at the base point
    - type: Derived real scalar slope
  - Item:
    - token: ∂F/∂y
    - role: Local y slope at the base point
    - type: Derived real scalar slope
  - Item:
    - token: L(x+Δx,y+Δy)
    - role: Tangent-plane predicted height at the chosen offset
    - type: Derived real scalar
  - Item:
    - token: F(x+Δx,y+Δy)
    - role: Actual field height at the target point
    - type: Derived real scalar
  - Item:
    - token: R
    - role: Signed approximation error: actual minus predicted
    - type: Derived real scalar difference
- ast:
  - id: ast:tangent-plane:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:y
      - kind: variable
      - symbol: y
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:c
      - kind: variable
      - symbol: c
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:dx
      - kind: variable
      - symbol: dx
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
    - Item:
      - id: n:dy
      - kind: variable
      - symbol: dy
      - type: Finite real control
      - scope ref: scope:tangent-plane:expression
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
      - id: n:linearXTerm
      - kind: multiply
      - arguments:
        - n:partialX
        - n:dx
      - type: Real scalar
    - Item:
      - id: n:linearYTerm
      - kind: multiply
      - arguments:
        - n:partialY
        - n:dy
      - type: Real scalar
    - Item:
      - id: n:linearChange
      - kind: add
      - arguments:
        - n:linearXTerm
        - n:linearYTerm
      - type: Real scalar
    - Item:
      - id: n:output
      - kind: add
      - arguments:
        - n:height
        - n:linearChange
      - type: Real scalar
  - scopes:
    - Item:
      - id: scope:tangent-plane:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - a
        - b
        - c
        - dx
        - dy
      - domain condition: The general scalar field is defined on a neighborhood of the base point and differentiable at that point; continuous first partials nearby are a sufficient condition.
- parse errors:
  - Item:
    - input: Use slopes evaluated at the target in the base-point plane
    - status: evaluation_point_error
    - reason: The tangent plane is anchored by height and slopes at the one base point.
  - Item:
    - input: Treat predicted height as exact at every offset
    - status: approximation_error
    - reason: The original curved field generally differs from its local plane away from the base point.
  - Item:
    - input: Forget the sign when reporting actual minus predicted
    - status: sign_error
    - reason: Absolute error measures a different quantity and hides whether the plane is above or below the surface.
- ast coverage: The AST explicitly builds the base height and its two first-order contributions, with predicted height as the scalar root. Target evaluation and the signed error are separate auxiliary model quantities; a plane prediction is never relabeled as actual height.
- output symbol bindings:
  - F(x,y): baseHeight
  - ∂F/∂x: partialX
  - ∂F/∂y: partialY
  - L(x+Δx,y+Δy): predictedHeight
  - F(x+Δx,y+Δy): actualHeight
  - R: approximationError

## Properties

- Item:
  - claim: At zero offsets the tangent prediction equals the actual base height.
  - conditions: Set both dx and dy to zero.
  - derivation: Both linear contributions and the quadratic remainder are zero.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:tangent-plane:nearby-height
- Item:
  - claim: For this quadratic, the exact signed error is a*dx²+b*dy².
  - conditions: Use the declared quadratic family with separate coordinate terms.
  - derivation: Expand F(x+dx,y+dy) and subtract F(x,y)+2ax*dx+2by*dy.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:tangent-plane:half-offsets
- Item:
  - claim: The signed error can change sign across different curvature choices.
  - conditions: The coefficients can have opposite signs.
  - derivation: The two quadratic remainder contributions can compete.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:tangent-plane:saddle-sketch

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:partial-derivative
  - type: supports
  - conditions: Evaluate both at the same base point.
  - reason: The two partial derivatives set the plane slopes.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:gradient
  - type: supports
  - conditions: The field is differentiable and coordinate units are compatible.
  - reason: The linear height change is the gradient dot the offset vector.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:directional-derivative
  - type: supports
  - conditions: Keep the direction and base point fixed.
  - reason: Restricting offsets to one unit direction gives a tangent line with the directional slope.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:tangent-plane:nearby-height
  - title: Estimate height a short distance from a known point
  - role: applied_model
  - question: A terrain sketch is known at (1,0.5) m. What does its tangent plane predict at (1.4,0.7) m?
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
    - dx: 0.4
    - dy: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=3.4375; ∂F/∂x=−1; ∂F/∂y=−0.25
      - reason: Evaluate height and both local slopes at the base point.
    - Item:
      - index: 2
      - expression: L(x+Δx,y+Δy)=3.4375+(−1)(0.4)+(−0.25)(0.2)=2.9875 m
      - reason: Add the two signed linear contributions to the known base height.
    - Item:
      - index: 3
      - expression: F(x+Δx,y+Δy)=2.8975 m; R=2.8975−2.9875=−0.09 m
      - reason: Evaluate the original field at the target and retain actual minus predicted as a signed error.
  - result:
    - exact: Tangent prediction 2.9875 m; actual 2.8975 m; signed error −0.09 m
  - interpretation: A local plane combines the known height and two slope-times-offset contributions.
  - independent check:
    - method: Independent quadratic-remainder check
    - expected: a*(Δx)²+b*(Δy)²=−0.09 m, matching actual minus predicted.
  - limits: These exact error identities apply to the declared quadratic family. A tangent plane is a local approximation to a general differentiable surface.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - dx: 0.4
    - dy: 0.2
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
  - id: math:example:tangent-plane:half-offsets
  - title: Halve both offsets and compare the signed error
  - role: applied_model
  - question: How does moving only half as far in each coordinate change the tangent approximation error?
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
    - dx: 0.2
    - dy: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=3.4375; ∂F/∂x=−1; ∂F/∂y=−0.25
      - reason: Evaluate height and both local slopes at the base point.
    - Item:
      - index: 2
      - expression: L(x+Δx,y+Δy)=3.4375+(−1)(0.2)+(−0.25)(0.1)=3.2125 m
      - reason: Add the two signed linear contributions to the known base height.
    - Item:
      - index: 3
      - expression: F(x+Δx,y+Δy)=3.19 m; R=3.19−3.2125=−0.0225 m
      - reason: Evaluate the original field at the target and retain actual minus predicted as a signed error.
  - result:
    - exact: Tangent prediction 3.2125 m; actual 3.19 m; signed error −0.0225 m
  - interpretation: For this quadratic, halving both offsets quarters the exact approximation error.
  - independent check:
    - method: Independent quadratic-remainder check
    - expected: a*(Δx)²+b*(Δy)²=−0.0225 m, matching actual minus predicted.
  - limits: These exact error identities apply to the declared quadratic family. A tangent plane is a local approximation to a general differentiable surface.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - dx: 0.2
    - dy: 0.1
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
  - id: math:example:tangent-plane:reverse-offsets
  - title: Move to the other side of the known point
  - role: applied_model
  - question: What does the same local plane predict at (0.6,0.3) m?
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
    - dx: -0.4
    - dy: -0.2
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=3.4375; ∂F/∂x=−1; ∂F/∂y=−0.25
      - reason: Evaluate height and both local slopes at the base point.
    - Item:
      - index: 2
      - expression: L(x+Δx,y+Δy)=3.4375+(−1)(−0.4)+(−0.25)(−0.2)=3.8875 m
      - reason: Add the two signed linear contributions to the known base height.
    - Item:
      - index: 3
      - expression: F(x+Δx,y+Δy)=3.7975 m; R=3.7975−3.8875=−0.09 m
      - reason: Evaluate the original field at the target and retain actual minus predicted as a signed error.
  - result:
    - exact: Tangent prediction 3.8875 m; actual 3.7975 m; signed error −0.09 m
  - interpretation: The linear change reverses sign, while the quadratic remainder keeps the same sign and size.
  - independent check:
    - method: Independent quadratic-remainder check
    - expected: a*(Δx)²+b*(Δy)²=−0.09 m, matching actual minus predicted.
  - limits: These exact error identities apply to the declared quadratic family. A tangent plane is a local approximation to a general differentiable surface.
  - preset:
    - x: 1
    - y: 0.5
    - a: -0.5
    - b: -0.25
    - c: 4
    - dx: -0.4
    - dy: -0.2
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
  - id: math:example:tangent-plane:constant-sketch
  - title: A constant-height sketch agrees with its plane
  - role: applied_model
  - question: When the entire sketch has height 4 m, does the tangent plane need a correction?
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
    - dx: 0.4
    - dy: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=4; ∂F/∂x=0; ∂F/∂y=0
      - reason: Evaluate height and both local slopes at the base point.
    - Item:
      - index: 2
      - expression: L(x+Δx,y+Δy)=4+(0)(0.4)+(0)(0.2)=4 m
      - reason: Add the two signed linear contributions to the known base height.
    - Item:
      - index: 3
      - expression: F(x+Δx,y+Δy)=4 m; R=4−4=0 m
      - reason: Evaluate the original field at the target and retain actual minus predicted as a signed error.
  - result:
    - exact: Tangent prediction 4 m; actual 4 m; signed error 0 m
  - interpretation: Both partial derivatives and the signed approximation error vanish everywhere in this constant family.
  - independent check:
    - method: Independent quadratic-remainder check
    - expected: a*(Δx)²+b*(Δy)²=0 m, matching actual minus predicted.
  - limits: These exact error identities apply to the declared quadratic family. A tangent plane is a local approximation to a general differentiable surface.
  - preset:
    - x: 1
    - y: 0.5
    - a: 0
    - b: 0
    - c: 4
    - dx: 0.4
    - dy: 0.2
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
  - id: math:example:tangent-plane:saddle-sketch
  - title: A saddle gives competing remainder contributions
  - role: applied_model
  - question: On a saddle-shaped sketch, does a tangent-plane prediction always lie above the true height?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original constructed smooth height sketch, not measured terrain or navigation advice.
    - Both horizontal coordinates and height use metres; the quadratic coefficients use inverse metres and the constant offset uses metres.
    - Horizontal axes are perpendicular and equally scaled; derivatives are local quantities at the stated point.
    - The chosen family is F(x,y)=c+a*x²+b*y²; its two coordinate partial derivatives are evaluated at the same point.
  - inputs:
    - x: 0.5
    - y: 0.5
    - a: 0.5
    - b: -0.5
    - c: 4
    - dx: 0.4
    - dy: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: F(x,y)=4; ∂F/∂x=0.5; ∂F/∂y=−0.5
      - reason: Evaluate height and both local slopes at the base point.
    - Item:
      - index: 2
      - expression: L(x+Δx,y+Δy)=4+(0.5)(0.4)+(−0.5)(0.2)=4.1 m
      - reason: Add the two signed linear contributions to the known base height.
    - Item:
      - index: 3
      - expression: F(x+Δx,y+Δy)=4.16 m; R=4.16−4.1=0.06 m
      - reason: Evaluate the original field at the target and retain actual minus predicted as a signed error.
  - result:
    - exact: Tangent prediction 4.1 m; actual 4.16 m; signed error 0.06 m
  - interpretation: The signed error can be positive or negative when the two curvatures have opposite signs.
  - independent check:
    - method: Independent quadratic-remainder check
    - expected: a*(Δx)²+b*(Δy)²=0.06 m, matching actual minus predicted.
  - limits: These exact error identities apply to the declared quadratic family. A tangent plane is a local approximation to a general differentiable surface.
  - preset:
    - x: 0.5
    - y: 0.5
    - a: 0.5
    - b: -0.5
    - c: 4
    - dx: 0.4
    - dy: 0.2
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

- component id: component:tangent-plane
- renderer id: tangent-plane-visual-model
- renderer version: 1
- model id: tangent-plane-visual-model
- model revision: 1
- expression id: ast:tangent-plane:expression
- interaction status: implemented
- description: A known surface point anchors a local tangent plane. Move the target offsets and compare the predicted point on the plane with the actual point on the same height surface, retaining their signed vertical error.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -1
    - max: 1
    - step: 0.01
  - Item:
    - id: y
    - type: number
    - default: 0.5
    - min: -1
    - max: 1
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
    - id: dx
    - type: number
    - default: 0.4
    - min: -1
    - max: 1
    - step: 0.01
  - Item:
    - id: dy
    - type: number
    - default: 0.2
    - min: -1
    - max: 1
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 0.4
      - dy: 0.2
    - output: 2.9875000000000003
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 0
      - dy: 0
    - output: 3.4375
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 0.2
      - dy: 0.1
    - output: 3.2125
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: -0.4
      - dy: -0.2
    - output: 3.8874999999999997
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: 0
      - b: 0
      - c: 4
      - dx: 0.4
      - dy: 0.2
    - output: 4.0
  - Item:
    - input:
      - x: 0.5
      - y: 0.5
      - a: 0.5
      - b: -0.5
      - c: 4
      - dx: 0.4
      - dy: 0.2
    - output: 4.1000000000000005
  - Item:
    - input:
      - x: 1
      - y: 1
      - a: 1
      - b: 1
      - c: 6
      - dx: 1
      - dy: 1
    - output: 12
  - Item:
    - input:
      - x: -1
      - y: -1
      - a: -1
      - b: -1
      - c: 0
      - dx: -1
      - dy: -1
    - output: -6
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 0
      - dy: 0.5
    - output: 3.3125
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 0
      - dx: 0.4
      - dy: 0.2
    - output: -1.0125
  - Item:
    - input:
      - x: 1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 1.1
      - dy: 0.2
    - status: invalid_parameters
  - Item:
    - input:
      - x: 1.1
      - y: 0.5
      - a: -0.5
      - b: -0.25
      - c: 4
      - dx: 0.4
      - dy: 0.2
    - status: invalid_parameters
- compute: baseHeight=height=c+a*x*x+b*y*y; partialX=2*a*x; partialY=2*b*y; targetX=x+dx; targetY=y+dy; linearXTerm=partialX*dx; linearYTerm=partialY*dy; output=predictedHeight=baseHeight+linearXTerm+linearYTerm; actualHeight=c+a*targetX*targetX+b*targetY*targetY; approximationError=actualHeight-predictedHeight.
- numeric tolerance: 1e-10
- invariants:
  - The general scalar field is defined on a neighborhood of the base point and differentiable at that point; continuous first partials nearby are a sufficient condition.
  - Hold the base point and field coefficients fixed while choosing the finite offsets Δx and Δy.
  - For the live family F=c+a*x²+b*y², the local slopes are partialX=2*a*x and partialY=2*b*y.
  - The predicted height is baseHeight+partialX*dx+partialY*dy. The actual target height is evaluated from the original field.
  - Signed approximation error means actualHeight-predictedHeight; its sign is not discarded.
  - For this particular quadratic the error is exactly a*dx²+b*dy². A general differentiable surface need not have that exact remainder.
- limits:
  - Only F=c+a*x²+b*y²; no arbitrary imported surfaces or symbolic linearization.
  - Both the prediction and actual target height remain visible and distinct.
  - The graph varies dx with dy and the base field fixed; it compares tangent prediction and exact target height.
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
  - prompt: Are dx and dy infinitesimal in this lesson?
  - answer: They are finite chosen offsets displayed as Δx and Δy. The tangent plane approximates the effect of sufficiently small offsets.
- Item:
  - prompt: Why keep the actual height visible?
  - answer: It reveals the signed approximation error and prevents a local plane from being mistaken for the original curved field.

## Representations

- Item:
  - kind: geometry
  - description: A finite offset selects a target; labeled base height and two linear contributions lead to the prediction, while the actual target height and signed error remain separate.
- Item:
  - kind: graph
  - description: Compare predicted and actual target height against the horizontal offset dx with dy and the base point fixed.
- Item:
  - kind: spatial
  - description: A genuine orthographic height surface, local tangent plane, base point and two target-height markers expose the signed approximation gap; camera settings are viewing state.

## Applications

- Item:
  - context: Nearby terrain estimate
  - mapping: Known local height and two slopes predict a nearby height on a stipulated smooth sketch.
  - limitations: A local mathematical approximation, not a terrain survey or guaranteed construction tolerance.
  - evidence kind: constructed_example
  - example ref: math:example:tangent-plane:nearby-height
- Item:
  - context: Saddle-shaped response
  - mapping: Two opposing curvature contributions are compared through the signed approximation error.
  - limitations: The exact remainder formula belongs only to the chosen quadratic family.
  - evidence kind: constructed_example
  - example ref: math:example:tangent-plane:saddle-sketch

## Source Refs

- source:openstax:tangent-planes-linear-approximations
- source:openstax:gradient-directional

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded interactive family is an illustration, not a general symbolic engine or proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, connected modular story and declared Geometry/Graph views with a genuine 3D surface.

## Referenced source registry

- Source ID: source:openstax:gradient-directional. [Calculus Volume 3, 4.6 Directional Derivatives and the Gradient](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient). Locator: Gradient definition; directional derivative for differentiable fields; maximum directional derivative and zero-gradient case. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:tangent-planes-linear-approximations. [Calculus Volume 3, 4.4 Tangent Planes and Linear Approximations](https://openstax.org/books/calculus-volume-3/pages/4-4-tangent-planes-and-linear-approximations). Locator: Tangent-plane equation and differentiability; Linear Approximations, definition and equation 4.25; distinction between approximation and surface height. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports definitions and conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
