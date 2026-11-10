---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:angular-velocity", "id": "math:concept:angular-velocity", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:angular-velocity", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c0ebf34a5c54a4372e8427847de379a2e689be567641608c3a6afea026492d46"}, "purpose": "Why can a rim point keep its speed while changing velocity?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c0ebf34a5c54a4372e8427847de379a2e689be567641608c3a6afea026492d46", "status": "draft", "title": "Angular velocity and rim motion", "topics": ["mathematics", "mechanics", "applied-mathematics", "angular velocity and rim motion"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Angular velocity and rim motion

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:angular-velocity; revision 0.1.0-draft. Setting: A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane. Expression: $\theta=\omega t,\quad\vec r=(r\cos\theta,r\sin\theta,0),\quad\vec v=(-r\omega\sin\theta,r\omega\cos\theta,0),\quad\|\vec v\|=|\omega|r.$. Conditions required for a defined value (a case may test their violation): A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane. The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.

## Schema Version

0.1.0

## Id

math:concept:angular-velocity

## Slug

angular-velocity

## Type

concept

## Title

Angular velocity and rim motion

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

- angular velocity and rim motion

## Branches

- mechanics
- applied-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can a rim point keep its speed while changing velocity?

## Meaning

Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.

## Prerequisites

- required:
  - math:concept:vector-rotation
- helpful:
  - math:concept:derivative
  - math:concept:linear-momentum
- depth:
  []

## Definition

- setting: A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
- formal latex: \theta=\omega t,\quad\vec r=(r\cos\theta,r\sin\theta,0),\quad\vec v=(-r\omega\sin\theta,r\omega\cos\theta,0),\quad\|\vec v\|=|\omega|r.
- signature:
  - t: Elapsed time t
  - r: Rim radius r
  - ω: Signed angular velocity ω
  - θ: Accumulated or frame angle
  - v x: Horizontal tangent velocity
  - v y: Vertical tangent velocity
  - v: Primary model result
- conditions:
  - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
  - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:angular

## Grammar

- pronunciation: Angular velocity and rim motion
- expression latex: \theta=\omega t,\quad\vec r=(r\cos\theta,r\sin\theta,0),\quad\vec v=(-r\omega\sin\theta,r\omega\cos\theta,0),\quad\|\vec v\|=|\omega|r.
- formation rule: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
- precedence: Keep the ordered operations, declared frame and units fixed; evaluate the component operations before the magnitude.
- symbols:
  - Item:
    - token: t
    - role: Elapsed time t
    - type: Declared input or computed geometric quantity
  - Item:
    - token: r
    - role: Rim radius r
    - type: Declared input or computed geometric quantity
  - Item:
    - token: ω
    - role: Signed angular velocity ω
    - type: Declared input or computed geometric quantity
  - Item:
    - token: θ
    - role: Accumulated or frame angle
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_x
    - role: Horizontal tangent velocity
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_y
    - role: Vertical tangent velocity
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v
    - role: Primary model result
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:angular-velocity:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - type: Declared bounded input
      - symbol: t
      - scope ref: scope:angular-velocity:expression
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared bounded input
      - symbol: r
      - scope ref: scope:angular-velocity:expression
    - Item:
      - id: n:omega
      - kind: variable
      - type: Declared bounded input
      - symbol: ω
      - scope ref: scope:angular-velocity:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - id: n:bound-time
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:time
    - Item:
      - id: n:bound-radius
      - kind: apply
      - type: Declared primary result
      - function: n:bound-time
      - argument: n:radius
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-radius
      - argument: n:omega
  - scopes:
    - Item:
      - id: scope:angular-velocity:expression
      - kind: modelExpression
      - free variables:
        - t
        - r
        - ω
      - domain condition: A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
- parse errors:
  - Item:
    - input: Treat the constructed model as a measured prediction
    - status: interpretation error
    - reason: A formula and stipulated inputs are not an empirical validation.
- ast coverage: Typed application outline of this bounded family; not an arbitrary expression evaluator.
- output symbol bindings:
  - t: time
  - r: radius
  - ω: omega
  - θ: angle
  - v x: velocityX
  - v y: velocityY
  - v: output

## Properties

- Item:
  - claim: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
  - conditions: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - derivation: The angle is 1.5 rad and the speed is 1.5 m/s.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:angular-velocity:case-1
- Item:
  - claim: Direction and signed angle reverse, while speed remains 1.5 m/s.
  - conditions: A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
  - derivation: 1.5 m/s
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:angular-velocity:case-2

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
  - target: math:concept:vector-rotation
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Position rotates at the accumulated angle, while the tangent is perpendicular to the radius.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:derivative
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Differentiating circular position yields the velocity components.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-momentum
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: A stated positive mass turns this velocity into momentum.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:angular-velocity:case-1
  - title: Follow one second of the stated turn
  - role: applied_model
  - question: Why can a rim point keep its speed while changing velocity?
  - setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
  - assumptions:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - inputs:
    - time: 1
    - radius: 1
    - omega: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; r = 1; ω = 1.5
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: θ = ωt; v = ω × r; speed = |ω|r
      - reason: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - index: 3
      - expression: 1.5 m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 1.5 m/s
  - interpretation: The angle is 1.5 rad and the speed is 1.5 m/s.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 1.5}
  - limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - preset:
    - time: 1
    - radius: 1
    - omega: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
- Item:
  - id: math:example:angular-velocity:case-2
  - title: Reverse the spin
  - role: applied_model
  - question: Why can a rim point keep its speed while changing velocity?
  - setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
  - assumptions:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - inputs:
    - time: 1
    - radius: 1
    - omega: -1.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; r = 1; ω = -1.5
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: θ = ωt; v = ω × r; speed = |ω|r
      - reason: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - index: 3
      - expression: 1.5 m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 1.5 m/s
  - interpretation: Direction and signed angle reverse, while speed remains 1.5 m/s.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 1.5}
  - limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - preset:
    - time: 1
    - radius: 1
    - omega: -1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
- Item:
  - id: math:example:angular-velocity:case-3
  - title: Move the mark to a larger radius
  - role: applied_model
  - question: Why can a rim point keep its speed while changing velocity?
  - setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
  - assumptions:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - inputs:
    - time: 1
    - radius: 2
    - omega: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; r = 2; ω = 1.5
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: θ = ωt; v = ω × r; speed = |ω|r
      - reason: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - index: 3
      - expression: 3.0 m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 3.0 m/s
  - interpretation: The same angular rate gives twice the rim speed.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 3.0}
  - limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - preset:
    - time: 1
    - radius: 2
    - omega: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
- Item:
  - id: math:example:angular-velocity:case-4
  - title: Stop the turn
  - role: applied_model
  - question: Why can a rim point keep its speed while changing velocity?
  - setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
  - assumptions:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - inputs:
    - time: 1
    - radius: 1
    - omega: 0
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; r = 1; ω = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: θ = ωt; v = ω × r; speed = |ω|r
      - reason: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - index: 3
      - expression: 0.0 m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m/s
  - interpretation: The point has zero tangent velocity and no velocity direction.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - preset:
    - time: 1
    - radius: 1
    - omega: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
- Item:
  - id: math:example:angular-velocity:case-5
  - title: Put the mark at the centre
  - role: applied_model
  - question: Why can a rim point keep its speed while changing velocity?
  - setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
  - assumptions:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - inputs:
    - time: 1
    - radius: 0
    - omega: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; r = 0; ω = 1.5
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: θ = ωt; v = ω × r; speed = |ω|r
      - reason: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
    - Item:
      - index: 3
      - expression: 0.0 m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 m/s
  - interpretation: A rotating wheel can have a stationary centre point with zero speed.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - preset:
    - time: 1
    - radius: 0
    - omega: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
    - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.

## Interactive

- component id: component:angular-velocity
- renderer id: angular-velocity-visual-model
- renderer version: 1
- model id: angular-velocity-visual-model
- model revision: 1
- expression id: ast:angular-velocity:expression
- interaction status: implemented
- description: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 1
    - min: 0
    - max: 3
    - step: 0.02
  - Item:
    - id: radius
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
  - Item:
    - id: omega
    - type: number
    - default: 1.5
    - min: -4
    - max: 4
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: 1.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: -1.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - time: 1
      - radius: 2
      - omega: 1.5
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - time: 1
      - radius: 0
      - omega: 1.5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - time: 0
      - radius: 1
      - omega: 1.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - time: 3
      - radius: 1
      - omega: 1.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: -4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: 4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - time: 4
      - radius: 1
      - omega: 1.5
    - status: invalid_parameters
  - Item:
    - input:
      - time: 1
      - radius: 1
      - omega: 1.5
    - status: invalid_parameters
- compute: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
- numeric tolerance: 1e-10
- invariants:
  - A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.
  - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
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
  - prompt: Why can a rim point keep its speed while changing velocity?
  - answer: Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.

## Representations

- Item:
  - kind: geometry
  - description: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Elapsed time t.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Follow one second of the stated turn
  - mapping: The angle is 1.5 rad and the speed is 1.5 m/s.
  - limitations: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - evidence kind: constructed_example
  - example ref: math:example:angular-velocity:case-1
- Item:
  - context: Reverse the spin
  - mapping: Direction and signed angle reverse, while speed remains 1.5 m/s.
  - limitations: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.
  - evidence kind: constructed_example
  - example ref: math:example:angular-velocity:case-2

## Source Refs

- source:spatial-foundations:angular

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- Continuation of 0.34.0 branch: original connected spatial/coordinate/mechanics family, two distinct views and independent references.

## Referenced source registry

- Source ID: source:spatial-foundations:angular. [OpenStax · Rotation Angle and Angular Velocity](https://openstax.org/books/college-physics-2e/pages/6-1-rotation-angle-and-angular-velocity). Locator: §6.1, radians, angular displacement per time and tangential speed.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
