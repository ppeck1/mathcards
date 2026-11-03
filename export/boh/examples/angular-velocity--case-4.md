---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:angular-velocity:case-4", "id": "math:example:angular-velocity:case-4", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:angular-velocity", "example_id": "math:example:angular-velocity:case-4", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c0ebf34a5c54a4372e8427847de379a2e689be567641608c3a6afea026492d46"}, "purpose": "Why can a rim point keep its speed while changing velocity?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c0ebf34a5c54a4372e8427847de379a2e689be567641608c3a6afea026492d46", "status": "draft", "title": "Stop the turn", "topics": ["mathematics", "mechanics", "applied-mathematics", "angular velocity and rim motion"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Stop the turn

Parent card: math:concept:angular-velocity; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:angular-velocity; revision 0.1.0-draft. Setting: A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane. Expression: $\theta=\omega t,\quad\vec r=(r\cos\theta,r\sin\theta,0),\quad\vec v=(-r\omega\sin\theta,r\omega\cos\theta,0),\quad\|\vec v\|=|\omega|r.$. Conditions required for a defined value (a case may test their violation): A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane. The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.

Case unit math:example:angular-velocity:case-4. Setting: A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed. Inputs: {"omega": 0, "radius": 1, "time": 1}. Result: {"approximate": "0.0 m/s"}. Limits: The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:spatial-foundations:angular. [OpenStax · Rotation Angle and Angular Velocity](https://openstax.org/books/college-physics-2e/pages/6-1-rotation-angle-and-angular-velocity). Locator: §6.1, radians, angular displacement per time and tangential speed.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
