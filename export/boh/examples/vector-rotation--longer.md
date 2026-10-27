---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:vector-rotation:longer", "id": "math:example:vector-rotation:longer", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector-rotation", "example_id": "math:example:vector-rotation:longer", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5da0caf147fe5b055476a594ee66924ff0273e1aa91bdef4858a1c16053b166d"}, "purpose": "Turn a planar vector and follow its horizontal and vertical projections.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5da0caf147fe5b055476a594ee66924ff0273e1aa91bdef4858a1c16053b166d", "status": "draft", "title": "Reach farther at the same direction", "topics": ["mathematics", "geometry", "trigonometry", "linear-algebra", "polar to Cartesian", "vector components"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Reach farther at the same direction

Parent card: math:concept:vector-rotation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:vector-rotation; revision 0.1.0-draft. Setting: Turn a planar vector and follow its horizontal and vertical projections. Expression: $x=r\cos(\theta\pi/180),\qquad y=r\sin(\theta\pi/180)$. Conditions required for a defined value (a case may test their violation): Use an orthonormal two-dimensional Cartesian coordinate system. The angle is measured counterclockwise from positive x in degrees. The radius is positive; rotation preserves distance from the origin. Scope: Angle 0–360°, radius 0.5–3 m. The primary numerical output is x; the scene also shows y. This parameterizes a rotated radius vector, not every possible affine transformation.

Case unit math:example:vector-rotation:longer. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"angle": 30, "radius": 3}. Result: {"exact": "(3√3/2,3/2)m ≈(2.59808,1.5)m"}. Limits: The construction is two-dimensional and assumes a fixed origin.

## Complete worked case

- id: math:example:vector-rotation:longer
- title: Reach farther at the same direction
- role: applied_model
- question: A 3 m arm points 30°. What are its projections?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Use an orthonormal two-dimensional Cartesian coordinate system.
  - The angle is measured counterclockwise from positive x in degrees.
  - The radius is positive; rotation preserves distance from the origin.
- inputs:
  - angle: 30
  - radius: 3
- steps:
  - Item:
    - index: 1
    - expression: x=3cos 30°=3√3/2 m
    - reason: Multiply radius by the horizontal directional factor.
  - Item:
    - index: 2
    - expression: y=3sin 30°=3/2 m
    - reason: Use the corresponding vertical factor.
- result:
  - exact: (3√3/2,3/2)m ≈(2.59808,1.5)m
- interpretation: Scaling radius scales both coordinates without changing angle.
- independent check:
  - method: Check length.
  - expected: (3√3/2)²+(3/2)²=27/4+9/4=9.
- limits: The construction is two-dimensional and assumes a fixed origin.
- preset:
  - angle: 30
  - radius: 3
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Use an orthonormal two-dimensional Cartesian coordinate system.
  - The angle is measured counterclockwise from positive x in degrees.
  - The radius is positive; rotation preserves distance from the origin.

## Written exploration recipe

- component id: vector-rotation-visual-model
- renderer id: vector-rotation-visual-model
- renderer version: 1.0.0
- model id: vector-rotation-visual-model
- model revision: 1.0.0
- expression id: ast:vector-rotation:expression
- interaction status: implemented
- description: A rotating arm, its horizontal and vertical projections, and angle arc share the same tip position.
- controls:
  - Item:
    - id: angle
    - type: number
    - default: 60
    - min: 0
    - max: 360
    - slider min: 0
    - slider max: 360
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: radius
    - type: number
    - default: 2
    - min: 0.5
    - max: 3
    - slider min: 0.5
    - slider max: 3
    - slider step: 0.05
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - angle: 60
      - radius: 2
    - output: 1.0000000000000002
  - Item:
    - input:
      - angle: 90
      - radius: 2
    - output: 1.2246467991473532e-16
  - Item:
    - input:
      - angle: 180
      - radius: 2
    - output: -2.0
  - Item:
    - input:
      - angle: 360
      - radius: 2
    - output: 2.0
  - Item:
    - input:
      - angle: 30
      - radius: 3
    - output: 2.598076211353316
  - Item:
    - input:
      - angle: 0
      - radius: 0.5
    - output: 0.5
  - Item:
    - input:
      - angle: 361
      - radius: 2
    - status: invalid_parameters
- compute: Convert angle to radians with theta=angle*pi/180. Output=radius*cos(theta); the vertical component is y=radius*sin(theta).
- numeric tolerance: 1e-10
- invariants:
  - x²+y²=radius² up to numerical rounding.
  - At 0° and 360°, output equals radius.
  - At 180°, output equals negative radius.
- limits:
  - Only a planar rotation of a radius vector is modeled.
  - Trig values at exact quarter turns can have tiny floating-point residues.
  - The primary output is a signed x-coordinate; radius remains a positive length.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

- Source ID: source:openstax:polar-coordinates. [Precalculus2e,8.3 Polar Coordinates](https://openstax.org/books/precalculus-2e/pages/8-3-polar-coordinates). Locator: Converting polar coordinates to rectangular coordinates: x=r cosθ and y=r sinθ. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
