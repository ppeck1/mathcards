---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:complex-multiplication:collapse", "id": "math:example:complex-multiplication:collapse", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:complex-multiplication", "example_id": "math:example:complex-multiplication:collapse", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9a5270f0b11fb663a32fc8495871156e02d032112aa93c9e732ad0f12d11965e"}, "purpose": "Use one complex multiplication to rotate and scale a point in the plane.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9a5270f0b11fb663a32fc8495871156e02d032112aa93c9e732ad0f12d11965e", "status": "draft", "title": "A zero multiplier", "topics": ["mathematics", "number-arithmetic", "modeling", "complex multiplication", "rotation and scale"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# A zero multiplier

Parent card: math:concept:complex-multiplication; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:complex-multiplication; revision 0.1.0-draft. Setting: Use one complex multiplication to rotate and scale a point in the plane. Expression: $(2+i)(u+iv)=(2u-v)+i(u+2v)$. Conditions required for a defined value (a case may test their violation): Use the complex plane with i²=−1 and fixed input z=2+i. The real and imaginary coordinates share the same chosen unit. A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument. Scope: The interactive controls restrict each parameter to its declared finite interval. A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle.

Case unit math:example:complex-multiplication:collapse. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"imag": 0, "real": 0}. Result: {"exact": "0; no defined product argument"}. Limits: Do not report an arbitrary angle for the zero multiplier.

## Complete worked case

- id: math:example:complex-multiplication:collapse
- title: A zero multiplier
- role: boundary
- question: Does multiplying by zero define a rotation angle?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Use the complex plane with i²=−1 and fixed input z=2+i.
  - The real and imaginary coordinates share the same chosen unit.
  - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- inputs:
  - real: 0
  - imag: 0
- steps:
  - Item:
    - index: 1
    - expression: (2+i)0=0
    - reason: Both product coordinates collapse to zero.
  - Item:
    - index: 2
    - expression: |0|=0; arg(0) is undefined
    - reason: A point at the origin has no direction.
- result:
  - exact: 0; no defined product argument
- interpretation: The algebra remains defined even though rotation language no longer identifies an angle.
- independent check:
  - method: A separate algebraic rearrangement or frequency-table check.
  - expected: Both real and imaginary formulas give zero.
- limits: Do not report an arbitrary angle for the zero multiplier.
- preset:
  - real: 0
  - imag: 0
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Use the complex plane with i²=−1 and fixed input z=2+i.
  - The real and imaginary coordinates share the same chosen unit.
  - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.

## Written exploration recipe

- component id: complex-multiplication-visual-model
- renderer id: complex-multiplication-visual-model
- renderer version: 1.0.0
- model id: complex-multiplication-visual-model
- model revision: 1.0.0
- expression id: ast:complex-multiplication:expression
- interaction status: implemented
- description: The cyan multiplier changes the gold product point; violet component arrows expose where both product coordinates come from.
- controls:
  - Item:
    - id: real
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: imag
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - real: 1
      - imag: 1
    - output: 1
  - Item:
    - input:
      - real: 1
      - imag: 0
    - output: 2
  - Item:
    - input:
      - real: 0
      - imag: 1
    - output: -1
  - Item:
    - input:
      - real: -1
      - imag: 0
    - output: -2
  - Item:
    - input:
      - real: 0
      - imag: 0
    - output: 0
  - Item:
    - input:
      - real: 2
      - imag: -2
    - output: 6
  - Item:
    - input:
      - real: 3
      - imag: 1
    - status: invalid_parameters
- compute: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.
- numeric tolerance: 1e-10
- invariants:
  - Use the complex plane with i²=−1 and fixed input z=2+i.
  - The real and imaginary coordinates share the same chosen unit.
  - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- limits:
  - The input point is fixed at 2 + i; the multiplier’s real part stays 1 in this story.
  - Coordinates use a flat complex plane with a common arbitrary grid unit.
  - The displayed primary number is the horizontal coordinate; both coordinates are needed to locate the product.
  - A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle.
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

- Source ID: source:openstax:complex-polar. [Precalculus 2e, 8.5 Polar Form of Complex Numbers](https://openstax.org/books/precalculus-2e/pages/8-5-polar-form-of-complex-numbers). Locator: Complex-plane coordinates; multiplication of moduli and addition of arguments. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
