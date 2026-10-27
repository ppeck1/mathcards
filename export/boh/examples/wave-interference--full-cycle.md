---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:wave-interference:full-cycle", "id": "math:example:wave-interference:full-cycle", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:wave-interference", "example_id": "math:example:wave-interference:full-cycle", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477"}, "purpose": "Add two matching sinusoidal waves and connect phase difference to the resulting amplitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477", "status": "draft", "title": "Return one full cycle later", "topics": ["mathematics", "trigonometry", "physics"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Return one full cycle later

Parent card: math:concept:wave-interference; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:wave-interference; revision 0.1.0-draft. Setting: Add two matching sinusoidal waves and connect phase difference to the resulting amplitude. Expression: $R=2A|\cos(\varphi/2)|$. Conditions required for a defined value (a case may test their violation): Both component waves have the same frequency, wave number, amplitude and propagation direction. Superposition is linear; contributions are measured in the same units. The phase control is in radians, from 0 to 2π. Scope: This equal-wave model is a simplified local signal description; amplitude 0.2–2 units. R is amplitude, not energy, intensity or loudness.

Case unit math:example:wave-interference:full-cycle. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"amplitude": 1, "phase": 6.283185307179586}. Result: {"exact": "2 amplitude units"}. Limits: The coefficient sign and the half-phase shift compensate; amplitude is nonnegative.

## Complete worked case

- id: math:example:wave-interference:full-cycle
- title: Return one full cycle later
- role: structural
- question: What changes when relative phase reaches 2π?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Both component waves have the same frequency, wave number, amplitude and propagation direction.
  - Superposition is linear; contributions are measured in the same units.
  - The phase control is in radians, from 0 to 2π.
- inputs:
  - phase: 6.283185307179586
  - amplitude: 1
- steps:
  - Item:
    - index: 1
    - expression: sin(u+2π)=sin u
    - reason: A full relative cycle returns the same signal.
  - Item:
    - index: 2
    - expression: R=2|cosπ|=2
    - reason: Magnitude removes the sign of the equivalent sinusoidal coefficient.
- result:
  - exact: 2 amplitude units
- interpretation: The shape returns to the in-phase case.
- independent check:
  - method: Use periodicity before adding.
  - expected: sin u+sin(u+2π)=2sin u.
- limits: The coefficient sign and the half-phase shift compensate; amplitude is nonnegative.
- preset:
  - phase: 6.283185307179586
  - amplitude: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Both component waves have the same frequency, wave number, amplitude and propagation direction.
  - Superposition is linear; contributions are measured in the same units.
  - The phase control is in radians, from 0 to 2π.

## Written exploration recipe

- component id: wave-interference-visual-model
- renderer id: wave-interference-visual-model
- renderer version: 1.0.0
- model id: wave-interference-visual-model
- model revision: 1.0.0
- expression id: ast:wave-interference:expression
- interaction status: implemented
- description: Two component curves and their pointwise sum share one phase coordinate; an amplitude bracket follows the sum.
- controls:
  - Item:
    - id: phase
    - type: number
    - default: 1.5707963267948966
    - min: 0
    - max: 6.283185307179586
    - slider min: 0
    - slider max: 6.283185307179586
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: amplitude
    - type: number
    - default: 1
    - min: 0.2
    - max: 2
    - slider min: 0.2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - phase: 1.5707963267948966
      - amplitude: 1
    - output: 1.4142135623730951
  - Item:
    - input:
      - phase: 0
      - amplitude: 1
    - output: 2.0
  - Item:
    - input:
      - phase: 3.141592653589793
      - amplitude: 1
    - output: 1.2246467991473532e-16
  - Item:
    - input:
      - phase: 1.5707963267948966
      - amplitude: 0.5
    - output: 0.7071067811865476
  - Item:
    - input:
      - phase: 6.283185307179586
      - amplitude: 1
    - output: 2.0
  - Item:
    - input:
      - phase: 1.0471975511965976
      - amplitude: 2
    - output: 3.464101615137755
  - Item:
    - input:
      - phase: -1
      - amplitude: 1
    - status: invalid_parameters
- compute: Output=2*amplitude*abs(cos(phase/2)). The drawn signed sum is A*sin(u)+A*sin(u+phase); the output reports its nonnegative amplitude.
- numeric tolerance: 1e-10
- invariants:
  - At phase 0 or 2π output equals 2*amplitude.
  - At phaseπ the exact mathematical output is zero.
  - Scaling both source amplitudes scales every sum sample and resultant amplitude.
- limits:
  - This uses equal coherent waves and linear superposition.
  - The plot is an explanatory signal, not a room-acoustics solver.
  - Floating-point trig can leave tiny residues at exact cancellation.
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

- Source ID: source:openstax:wave-interference. [University Physics Volume1,16.5 Interference of Waves](https://openstax.org/books/university-physics-volume-1/pages/16-5-interference-of-waves). Locator: Superposition of sinusoidal waves differing by a phase shift; equation16.13. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
