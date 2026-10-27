---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:torque", "id": "math:concept:torque", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:torque", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "47c646cb06bd99e333a4658dd49d2c7f0be5cca3e29d0c3cddf4c54696dcf6a3"}, "purpose": "Turn a force at a fixed application point and follow its perpendicular component into signed torque about the pivot.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "47c646cb06bd99e333a4658dd49d2c7f0be5cca3e29d0c3cddf4c54696dcf6a3", "status": "draft", "title": "Torque about a pivot", "topics": ["mathematics", "applied-mathematics", "mechanics", "linear-algebra", "moment of a force", "perpendicular lever arm", "turning effect", "signed torque"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Torque about a pivot

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:torque; revision 0.1.0-draft. Setting: A planar force applied at a stated distance from a fixed pivot in a right-handed coordinate frame. Expression: $\vec{r}=(r,0,0)\,\mathrm m,\quad\vec{F}=(F\cos\theta,F\sin\theta,0)\,\mathrm N,\quad\vec{\tau}=\vec{r}\times\vec{F},\quad\tau_z=rF\sin\theta,\quad d_\perp=r|\sin\theta|.$. Conditions required for a defined value (a case may test their violation): The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N. The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction. The signed perpendicular force is F⊥=F sinθ. The actual moment arm d⊥=r|sinθ| is the perpendicular distance to the force line of action when the force is nonzero; it generally differs from r. At zero force, the construction still supplies d⊥ but the zero force vector has no distinguished line of action. The signed component τ_z=rF sinθ is in N·m. Positive z points out of the page and positive planar torque is counterclockwise. A zero torque has no distinguished normal direction. Torque is a turning effect about a selected pivot. Although N·m has the same dimensional form as a joule, this torque value is not energy or work. Scope: The metre distance and Newton force have separate drawing scales. Arrows over r and F denote the position and force vectors; plain r and F in the scalar component formula denote their stated magnitudes. The model evaluates torque for the stated geometry; it does not integrate motion or account for friction, inertia or a force needed to open a real door.

## Schema Version

0.1.0

## Id

math:concept:torque

## Slug

torque

## Type

concept

## Title

Torque about a pivot

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- moment of a force
- perpendicular lever arm
- turning effect
- signed torque

## Branches

- applied-mathematics
- mechanics
- linear-algebra

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Turn a force at a fixed application point and follow its perpendicular component into signed torque about the pivot.

## Meaning

The torque of a force about a chosen pivot is the cross product of its position vector with the force vector. Its perpendicular lever arm is the distance from the pivot to the force’s line of action. In the displayed plane, the signed normal component distinguishes turning senses, while its magnitude measures the turning effect without a sign.

## Prerequisites

- required:
  - math:concept:cross-product
- helpful:
  - math:concept:vector
  - math:concept:inner-product
- depth:


## Definition

- setting: A planar force applied at a stated distance from a fixed pivot in a right-handed coordinate frame.
- formal latex: \vec{r}=(r,0,0)\,\mathrm m,\quad\vec{F}=(F\cos\theta,F\sin\theta,0)\,\mathrm N,\quad\vec{\tau}=\vec{r}\times\vec{F},\quad\tau_z=rF\sin\theta,\quad d_\perp=r|\sin\theta|.
- signature:
  - r: Pivot-to-application distance.
  - F: Force magnitude.
  - θ: Force orientation construction setting.
  - F x: Force component along the fixed x axis.
  - F y: Signed perpendicular force component.
  - F⊥: Signed perpendicular force component.
  - d⊥: Perpendicular moment-arm distance.
  - τ z: Signed normal component of torque.
  - |τ z|: Torque magnitude.
  - N·m: Torque unit newton metre.
  - r⃗: Position vector from pivot to application point.
  - F⃗: Applied force vector.
  - r⃗×F⃗: Torque vector formed from the ordered cross product.
- conditions:
  - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
  - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - The signed perpendicular force is F⊥=F sinθ. The actual moment arm d⊥=r|sinθ| is the perpendicular distance to the force line of action when the force is nonzero; it generally differs from r. At zero force, the construction still supplies d⊥ but the zero force vector has no distinguished line of action.
  - The signed component τ_z=rF sinθ is in N·m. Positive z points out of the page and positive planar torque is counterclockwise. A zero torque has no distinguished normal direction.
  - Torque is a turning effect about a selected pivot. Although N·m has the same dimensional form as a joule, this torque value is not energy or work.
- domain notes: The metre distance and Newton force have separate drawing scales. Arrows over r and F denote the position and force vectors; plain r and F in the scalar component formula denote their stated magnitudes. The model evaluates torque for the stated geometry; it does not integrate motion or account for friction, inertia or a force needed to open a real door.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openstax:torque
  - source:openstax:cross-product

## Grammar

- pronunciation: Torque about a pivot
- expression latex: \vec{r}=(r,0,0)\,\mathrm m,\quad\vec{F}=(F\cos\theta,F\sin\theta,0)\,\mathrm N,\quad\vec{\tau}=\vec{r}\times\vec{F},\quad\tau_z=rF\sin\theta,\quad d_\perp=r|\sin\theta|.
- formation rule: Let r be the nonnegative pivot-to-application distance and F the nonnegative force magnitude. In the fixed plane the position vector is (r,0,0) m and the force vector is (F cosθ,F sinθ,0) N. Their cross product has signed component τ_z=rF sinθ. The perpendicular lever arm is d⊥=r|sinθ| and the torque magnitude is |τ_z|=F d⊥.
- precedence: Resolve the force’s signed perpendicular component F⊥=F sinθ before multiplying by the application distance r. Take absolute value when reading torque magnitude or perpendicular lever-arm distance.
- symbols:
  - Item:
    - token: r
    - role: Pivot-to-application distance
    - type: Nonnegative metres
  - Item:
    - token: F
    - role: Force magnitude
    - type: Nonnegative newtons
  - Item:
    - token: θ
    - role: Force orientation construction setting
    - type: Degrees
  - Item:
    - token: F_x
    - role: Force component along the fixed x axis
    - type: Newtons
  - Item:
    - token: F_y
    - role: Signed perpendicular force component
    - type: Newtons
  - Item:
    - token: F⊥
    - role: Signed perpendicular force component
    - type: Newtons
  - Item:
    - token: d⊥
    - role: Perpendicular moment-arm distance
    - type: Nonnegative metres
  - Item:
    - token: τ_z
    - role: Signed normal component of torque
    - type: Newton metres
  - Item:
    - token: |τ_z|
    - role: Torque magnitude
    - type: Nonnegative newton metres
  - Item:
    - token: r⃗×F⃗
    - role: Cross product of the position and force vectors
    - type: Torque vector
  - Item:
    - token: N·m
    - role: Torque unit newton metre
    - type: Unit of torque
  - Item:
    - token: r⃗
    - role: Position vector from pivot to application point
    - type: Vector in metres
  - Item:
    - token: F⃗
    - role: Applied force vector
    - type: Vector in newtons
- ast:
  - id: ast:torque:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:arm
      - kind: variable
      - type: Declared model input
      - symbol: r
      - scope ref: scope:torque:expression
    - Item:
      - id: n:force
      - kind: variable
      - type: Declared model input
      - symbol: F
      - scope ref: scope:torque:expression
    - Item:
      - id: n:angle
      - kind: variable
      - type: Declared model input
      - symbol: θ
      - scope ref: scope:torque:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Let r be the nonnegative pivot-to-application distance and F the nonnegative force magnitude. In the fixed plane the position vector is (r,0,0) m and the force vector is (F cosθ,F sinθ,0) N. Their cross product has signed component τ_z=rF sinθ. The perpendicular lever arm is d⊥=r|sinθ| and the torque magnitude is |τ_z|=F d⊥.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:arm
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:force
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:angle
  - scopes:
    - Item:
      - id: scope:torque:expression
      - kind: modelExpression
      - free variables:
        - r
        - F
        - θ
      - domain condition: A planar force applied at a stated distance from a fixed pivot in a right-handed coordinate frame.
- parse errors:
  - Item:
    - input: Call the application distance the perpendicular moment arm at every angle
    - status: geometry error
    - reason: The moment arm is r|sinθ|, which equals r only at a right angle for r>0.
  - Item:
    - input: Use the full force as its perpendicular component
    - status: component error
    - reason: Only F sinθ contributes to the signed planar torque.
  - Item:
    - input: Read torque in N·m as energy in joules
    - status: quantity error
    - reason: Equal dimensional form does not make the physical quantities identical.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - r: arm
  - F: force
  - θ: angle
  - F x: forceX
  - F y: forceY
  - F⊥: perpendicularForce
  - d⊥: momentArm
  - τ z: output
  - |τ z|: magnitude
  - r⃗: positionVector
  - F⃗: forceVector
  - r⃗×F⃗: torqueVector

## Properties

- Item:
  - claim: The largest torque magnitude for fixed r and F occurs at a right angle.
  - conditions: Keep r,F≥0 fixed in the displayed planar family.
  - derivation: |τ_z|=rF|sinθ|≤rF, with equality at ±90° when both magnitudes are positive.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:torque:perpendicular-pull
- Item:
  - claim: Application distance and moment arm generally differ.
  - conditions: Use an oblique nonzero force and nonzero position vector.
  - derivation: At 30°, d⊥=r/2, while r remains the full pivot-to-application distance.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:torque:angled-pull
- Item:
  - claim: Reversing the signed right angle reverses torque while preserving its magnitude.
  - conditions: Use the same pivot, application distance and force magnitude.
  - derivation: The sine changes sign and its absolute value remains one.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:torque:reverse-sense

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:cross-product
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Torque applies the ordered vector product to a position vector and a force vector with different units.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Force and position each have directed components relative to the pivot frame.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Parallel and perpendicular components provide complementary views of a vector’s contribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:torque:angled-pull
  - title: Separate distance from the actual moment arm
  - role: applied_model
  - question: At r=0.8 m, F=10 N and θ=30°, what torque acts about the pivot?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - inputs:
    - arm: 0.8
    - force: 10
    - angle: 30
  - steps:
    - Item:
      - index: 1
      - expression: F⊥=10 sin30°=5 N.
      - reason: Resolve the signed perpendicular force.
    - Item:
      - index: 2
      - expression: τ_z=0.8×5=4 N·m.
      - reason: Multiply by the pivot-to-application distance.
    - Item:
      - index: 3
      - expression: d⊥=0.8 sin30°=0.4 m.
      - reason: Read the actual perpendicular lever arm separately.
  - result:
    - exact: τ_z=4 N·m; d⊥=0.4 m
  - interpretation: The positive normal is out of the page; the moment arm is half the application distance.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: F d⊥=10 N×0.4 m=4 N·m agrees with rF⊥.
  - limits: This is a turning effect about the stated pivot, not an energy or motion prediction.
  - preset:
    - arm: 0.8
    - force: 10
    - angle: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
- Item:
  - id: math:example:torque:perpendicular-pull
  - title: Turn the same force to a right angle
  - role: applied_model
  - question: What changes at θ=90° with the same point and force?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - inputs:
    - arm: 0.8
    - force: 10
    - angle: 90
  - steps:
    - Item:
      - index: 1
      - expression: F⊥=10 sin90°=10 N.
      - reason: The entire force is perpendicular.
    - Item:
      - index: 2
      - expression: d⊥=0.8 m; τ_z=0.8×10=8 N·m.
      - reason: The perpendicular moment arm equals the application distance here.
  - result:
    - exact: τ_z=8 N·m; d⊥=0.8 m
  - interpretation: This angle gives the largest magnitude for these fixed inputs.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: |sinθ|≤1 implies |τ_z|≤rF=8 N·m.
  - limits: The maximum is for the stipulated force magnitude and application distance.
  - preset:
    - arm: 0.8
    - force: 10
    - angle: 90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
- Item:
  - id: math:example:torque:reverse-sense
  - title: Reverse the planar turning sense
  - role: applied_model
  - question: What happens at θ=−90°?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - inputs:
    - arm: 0.8
    - force: 10
    - angle: -90
  - steps:
    - Item:
      - index: 1
      - expression: F⊥=−10 N.
      - reason: The force points below the positive x axis.
    - Item:
      - index: 2
      - expression: τ_z=0.8×(−10)=−8 N·m.
      - reason: The signed cross-product component reverses.
    - Item:
      - index: 3
      - expression: |τ_z|=8 N·m and d⊥=0.8 m.
      - reason: Magnitude and moment-arm distance remain nonnegative.
  - result:
    - exact: τ_z=−8 N·m; |τ_z|=8 N·m
  - interpretation: The normal points into the page and the turning sense is clockwise in the stated frame.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Changing the sign of sinθ reverses τ_z but not its absolute value.
  - limits: The sign depends on the stated pivot and orientation convention.
  - preset:
    - arm: 0.8
    - force: 10
    - angle: -90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
- Item:
  - id: math:example:torque:along-handle
  - title: Put the force line through the pivot
  - role: applied_model
  - question: What torque does a force at θ=0° produce?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - inputs:
    - arm: 0.8
    - force: 10
    - angle: 0
  - steps:
    - Item:
      - index: 1
      - expression: F⊥=10 sin0°=0 N.
      - reason: The force has no perpendicular component.
    - Item:
      - index: 2
      - expression: d⊥=0 m; τ_z=0 N·m.
      - reason: Its line of action passes through the pivot.
  - result:
    - exact: τ_z=0 N·m; d⊥=0 m
  - interpretation: A nonzero force at a nonzero application distance can still produce zero torque.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The two input vectors are parallel, so their cross product is zero.
  - limits: No zero torque normal direction is distinguished.
  - preset:
    - arm: 0.8
    - force: 10
    - angle: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
- Item:
  - id: math:example:torque:at-pivot
  - title: Apply the force at the pivot
  - role: applied_model
  - question: What torque results when r=0?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - inputs:
    - arm: 0
    - force: 10
    - angle: 30
  - steps:
    - Item:
      - index: 1
      - expression: The position vector is zero.
      - reason: The application point coincides with the pivot.
    - Item:
      - index: 2
      - expression: τ_z=0×10 sin30°=0 N·m; d⊥=0 m.
      - reason: A force through the pivot has no moment arm.
  - result:
    - exact: τ_z=0 N·m; d⊥=0 m
  - interpretation: The orientation setting can still orient a nonzero force, but it gives the zero position vector no direction.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The cross product of the zero vector with any force is zero.
  - limits: The construction angle is not a geometric angle from a zero vector.
  - preset:
    - arm: 0
    - force: 10
    - angle: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
    - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.

## Interactive

- component id: component:torque
- renderer id: torque-visual-model
- renderer version: 1
- model id: torque-visual-model
- model revision: 1
- expression id: ast:torque:expression
- interaction status: implemented
- description: A pivot and application-distance bracket use a metre scale. The force arrow and perpendicular component share a separate Newton scale. Signed torque and the perpendicular lever-arm construction remain labelled quantities.
- controls:
  - Item:
    - id: arm
    - type: number
    - default: 0.8
    - min: 0
    - max: 2
    - step: 0.01
  - Item:
    - id: force
    - type: number
    - default: 10
    - min: 0
    - max: 20
    - step: 0.01
  - Item:
    - id: angle
    - type: number
    - default: 30
    - min: -180
    - max: 180
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: 30
    - output: 4
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: 90
    - output: 8
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: -90
    - output: -8
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: 0
    - output: 0
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: 180
    - output: 0
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: -180
    - output: 0
  - Item:
    - input:
      - arm: 0
      - force: 10
      - angle: 30
    - output: 0
  - Item:
    - input:
      - arm: 0.8
      - force: 0
      - angle: 30
    - output: 0
  - Item:
    - input:
      - arm: 2
      - force: 20
      - angle: 90
    - output: 40
  - Item:
    - input:
      - arm: 1
      - force: 10
      - angle: 150
    - output: 5
  - Item:
    - input:
      - arm: 2.1
      - force: 10
      - angle: 30
    - status: invalid_parameters
  - Item:
    - input:
      - arm: 0.8
      - force: 10
      - angle: 181
    - status: invalid_parameters
- compute: Let r be the nonnegative pivot-to-application distance and F the nonnegative force magnitude. In the fixed plane the position vector is (r,0,0) m and the force vector is (F cosθ,F sinθ,0) N. Their cross product has signed component τ_z=rF sinθ. The perpendicular lever arm is d⊥=r|sinθ| and the torque magnitude is |τ_z|=F d⊥.
- numeric tolerance: 1e-10
- invariants:
  - The position vector and force vector use a fixed right-handed frame. The application point is r metres along positive x, with 0≤r≤2 m; the force magnitude satisfies 0≤F≤20 N.
  - The construction setting θ ranges from −180 to 180 degrees relative to the positive x axis. For nonzero position and force vectors it is the directed angle from the position vector toward the force. If either vector is zero, the setting does not give that zero vector a direction.
  - The signed perpendicular force is F⊥=F sinθ. The actual moment arm d⊥=r|sinθ| is the perpendicular distance to the force line of action when the force is nonzero; it generally differs from r. At zero force, the construction still supplies d⊥ but the zero force vector has no distinguished line of action.
  - The signed component τ_z=rF sinθ is in N·m. Positive z points out of the page and positive planar torque is counterclockwise. A zero torque has no distinguished normal direction.
  - Torque is a turning effect about a selected pivot. Although N·m has the same dimensional form as a joule, this torque value is not energy or work.
- limits:
  - This constructed planar statics calculation supplies a turning effect about a chosen pivot, not a simulation of door motion.
  - The pivot-to-application distance is not generally the perpendicular moment arm.
  - The drawing’s metre and Newton scales are distinct; torque in N·m is not a work or energy measurement.
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
  - prompt: Is r always the perpendicular lever arm?
  - answer: No. At 30° the perpendicular moment arm is r sin30°=r/2. At 90° it equals r.
- Item:
  - prompt: Does the computed torque tell how fast a real door rotates?
  - answer: No. The module evaluates the turning effect of the stated force; motion needs additional information such as inertia and other forces.

## Representations

- Item:
  - kind: geometry
  - description: A pivot and application-distance bracket use a metre scale. The force arrow and perpendicular component share a separate Newton scale. Signed torque and the perpendicular lever-arm construction remain labelled quantities.
- Item:
  - kind: graph
  - description: Signed torque varies with force orientation on fixed degree and N·m axes. A separately labelled magnitude curve preserves the difference between turning sense and nonnegative strength.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Turn a force at a fixed application point and follow its perpendicular component into signed torque about the pivot.
  - limitations: This constructed planar statics calculation supplies a turning effect about a chosen pivot, not a simulation of door motion.
  - evidence kind: constructed_example
  - example ref: math:example:torque:angled-pull
- Item:
  - context: Turn the same force to a right angle
  - mapping: This angle gives the largest magnitude for these fixed inputs.
  - limitations: The maximum is for the stipulated force magnitude and application distance.
  - evidence kind: constructed_example
  - example ref: math:example:torque:perpendicular-pull

## Source Refs

- source:openstax:torque
- source:openstax:cross-product

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.28.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:openstax:cross-product. [Calculus Volume 3, 2.4 The Cross Product](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product). Locator: Component definition, orthogonality and orientation; parallelogram area as the cross-product norm. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:torque. [University Physics Volume 1, 10.6 Torque](https://openstax.org/books/university-physics-volume-1/pages/10-6-torque). Locator: Torque as position cross force, signed normal component, N·m and perpendicular moment arm. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
