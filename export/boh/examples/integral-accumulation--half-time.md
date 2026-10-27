---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:integral-accumulation:half-time", "id": "math:example:integral-accumulation:half-time", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:integral-accumulation", "example_id": "math:example:integral-accumulation:half-time", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a00202611d82b03f7cf7593076caee9fb6c2b00e583e7d3e592dc597e895afc5"}, "purpose": "Recover a traveled distance by accumulating a changing velocity.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a00202611d82b03f7cf7593076caee9fb6c2b00e583e7d3e592dc597e895afc5", "status": "draft", "title": "Stop the clock earlier", "topics": ["mathematics", "calculus", "modeling", "definite integral", "area under a velocity curve"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Stop the clock earlier

Parent card: math:concept:integral-accumulation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:integral-accumulation; revision 0.1.0-draft. Setting: Recover a traveled distance by accumulating a changing velocity. Expression: $s(T)=\int_0^T at\,dt=\frac12aT^2$. Conditions required for a defined value (a case may test their violation): The cart starts from rest at position zero. Acceleration is constant and positive; motion remains along one forward axis. Time is nonnegative and the stated units are consistent. Scope: The interactive controls restrict each parameter to its declared finite interval. The illustration excludes power limits, friction, braking and measured motor behavior.

Case unit math:example:integral-accumulation:half-time. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"rate": 2, "time": 2}. Result: {"exact": "4 m"}. Limits: The comparison keeps acceleration fixed.

## Complete worked case

- id: math:example:integral-accumulation:half-time
- title: Stop the clock earlier
- role: applied_model
- question: How far does the same cart move in 2 s?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - The cart starts from rest at position zero.
  - Acceleration is constant and positive; motion remains along one forward axis.
  - Time is nonnegative and the stated units are consistent.
- inputs:
  - time: 2
  - rate: 2
- steps:
  - Item:
    - index: 1
    - expression: v(2)=4 m/s
    - reason: Use the same acceleration.
  - Item:
    - index: 2
    - expression: s(2)=½×2×4=4 m
    - reason: The shorter interval reduces both triangle width and height.
- result:
  - exact: 4 m
- interpretation: Halving the elapsed time quarters the traveled distance in this model.
- independent check:
  - method: A separate algebraic rearrangement or frequency-table check.
  - expected: s(4)/s(2)=16/4=4=(4/2)².
- limits: The comparison keeps acceleration fixed.
- preset:
  - time: 2
  - rate: 2
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - The cart starts from rest at position zero.
  - Acceleration is constant and positive; motion remains along one forward axis.
  - Time is nonnegative and the stated units are consistent.

## Written exploration recipe

- component id: integral-accumulation-visual-model
- renderer id: integral-accumulation-visual-model
- renderer version: 1.0.0
- model id: integral-accumulation-visual-model
- model revision: 1.0.0
- expression id: ast:integral-accumulation:expression
- interaction status: implemented
- description: The cyan time cursor widens the shaded velocity triangle; its gold area determines the cart’s distance along the track.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 4
    - min: 0
    - max: 6
    - slider min: 0
    - slider max: 6
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: rate
    - type: number
    - default: 2
    - min: 0.5
    - max: 4
    - slider min: 0.5
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - time: 4
      - rate: 2
    - output: 16
  - Item:
    - input:
      - time: 0
      - rate: 2
    - output: 0
  - Item:
    - input:
      - time: 2
      - rate: 2
    - output: 4
  - Item:
    - input:
      - time: 6
      - rate: 0.5
    - output: 9
  - Item:
    - input:
      - time: 3
      - rate: 4
    - output: 18
  - Item:
    - input:
      - time: 1.5
      - rate: 2
    - output: 2.25
  - Item:
    - input:
      - time: -1
      - rate: 2
    - status: invalid_parameters
- compute: distance=triangleArea=0.5*rate*time*time; velocity=rate*time; output=distance. The definite integral of v(t)=rate*t from 0 to time is the triangular area beneath the velocity line.
- numeric tolerance: 1e-10
- invariants:
  - The cart starts from rest at position zero.
  - Acceleration is constant and positive; motion remains along one forward axis.
  - Time is nonnegative and the stated units are consistent.
- limits:
  - Acceleration is a constant 2 m/s², initial velocity is zero, and motion stays forward on a straight track.
  - The shaded graph area has units seconds × metres per second = metres; it is not physical ground area.
  - The illustration excludes power limits, friction, braking and measured motor behavior.
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

- Source ID: source:openstax:net-change. [Calculus Volume 1, 5.4 Integration Formulas and the Net Change Theorem](https://openstax.org/books/calculus-volume-1/pages/5-4-integration-formulas-and-the-net-change-theorem). Locator: Net Change Theorem; velocity, displacement and distance distinction. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
