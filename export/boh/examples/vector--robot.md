---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:vector:robot", "id": "math:example:vector:robot", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector", "example_id": "math:example:vector:robot", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "dfe46bd8d5656cdaf90d9eec803434b67c4993b2ac28ca768f5b52a808b2dda1"}, "purpose": "Describe displacement with signed components and separate direction from length.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "dfe46bd8d5656cdaf90d9eec803434b67c4993b2ac28ca768f5b52a808b2dda1", "status": "draft", "title": "A robot chooses the straight route", "topics": ["mathematics", "linear-algebra", "geometry", "component vector", "Euclidean norm", "magnitude and direction"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# A robot chooses the straight route

Parent card: math:concept:vector; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:vector; revision 0.1.0-draft. Setting: Finite real two-dimensional Euclidean coordinates. Expression: $v=(x,y)\in\mathbb R^2,\quad\|v\|=\sqrt{x^2+y^2}.$. Conditions required for a defined value (a case may test their violation): Components share compatible units and an orthonormal frame. Norm is nonnegative and is zero exactly when both components are zero. A norm alone does not determine the vector direction. Scope: The live specimen has two real components in [-5,5] and the Euclidean norm. General vectors can belong to higher-dimensional or abstract spaces; routes and other metrics are not modeled.

Case unit math:example:vector:robot. Setting: Original constructed teaching scenario; values and rules are stipulated, not measured. Inputs: {"x": 3, "y": 4}. Result: {"exact": "5 m"}. Limits: Obstacles and real robot routes are excluded from this unobstructed grid model.

## Complete worked case

- id: math:example:vector:robot
- title: A robot chooses the straight route
- role: applied_model
- question: A robot needs a net move of 3 m east and 4 m north. What is the straight-line distance?
- setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
- assumptions:
  - Perpendicular equal-scale coordinate axes share the same length unit.
  - The arrow records net displacement; components are signed.
  - Straight-line magnitude is distinct from distance traveled along a route.
- inputs:
  - x: 3
  - y: 4
- steps:
  - Item:
    - index: 1
    - expression: v=(3,4) m
    - reason: Record both signed components.
  - Item:
    - index: 2
    - expression: ||v||=sqrt(3²+4²)=sqrt(25)=5 m
    - reason: Use perpendicular components to obtain the Euclidean norm.
- result:
  - exact: 5 m
- interpretation: The arrow joins start to destination. Traveling both floor edges instead would cover 7 m.
- independent check:
  - method: Square check
  - expected: A length of 5 m has squared length 25 m², agreeing with 9+16.
- limits: Obstacles and real robot routes are excluded from this unobstructed grid model.
- preset:
  - x: 3
  - y: 4
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - Perpendicular equal-scale coordinate axes share the same length unit.
  - The arrow records net displacement; components are signed.
  - Straight-line magnitude is distinct from distance traveled along a route.

## Written exploration recipe

- component id: vector-visual-model
- renderer id: vector-visual-model
- renderer version: 1.0.0
- model id: vector-visual-model
- model revision: 1
- expression id: ast:vector:expression
- interaction status: implemented
- description: A component arrow follows x and y on a fixed scale; its component triangle leads to the Euclidean magnitude. The Graph follows magnitude as one component varies.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 3
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
  - Item:
    - id: y
    - type: number
    - default: 4
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp or retain a stale result.
- expected cases:
  - Item:
    - input:
      - x: 3
      - y: 4
    - output: 5
  - Item:
    - input:
      - x: 0
      - y: 0
    - output: 0
  - Item:
    - input:
      - x: -3
      - y: -4
    - output: 5
  - Item:
    - input:
      - x: -5
      - y: 0
    - output: 5
  - Item:
    - input:
      - x: 5
      - y: 5
    - output: 7.0710678118654755
  - Item:
    - input:
      - x: 1.5
      - y: 2
    - output: 2.5
  - Item:
    - input:
      - x: 1e-08
      - y: 0
    - output: 1e-08
  - Item:
    - input:
      - x: 4
      - y: 3
    - output: 5
  - Item:
    - input:
      - x: 5.1
      - y: 4
    - status: invalid_parameters
  - Item:
    - input:
      - x: 3
      - y: -5.1
    - status: invalid_parameters
- compute: output=norm=hypot(x,y); xSquared=x*x; ySquared=y*y; angleDegrees=null at x=y=0, otherwise atan2(y,x) in degrees.
- numeric tolerance: 1e-10
- invariants:
  - Components share compatible units and an orthonormal frame.
  - Norm is nonnegative and is zero exactly when both components are zero.
  - A norm alone does not determine the vector direction.
- limits:
  - Bounded two-dimensional Euclidean vectors only.
  - Norm is not route length; stories declare units and physical assumptions.
  - The zero vector has no direction angle.
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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:vectors-plane. [Calculus Volume 3, 2.1 Vectors in the Plane](https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane). Locator: Plane components, Euclidean magnitude, scalar multiplication and the zero vector. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
