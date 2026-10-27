---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:wave-interference:cancel", "id": "math:example:wave-interference:cancel", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:wave-interference", "example_id": "math:example:wave-interference:cancel", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477"}, "purpose": "Add two matching sinusoidal waves and connect phase difference to the resulting amplitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477", "status": "draft", "title": "Meet a crest with a trough", "topics": ["mathematics", "trigonometry", "physics"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Meet a crest with a trough

Parent card: math:concept:wave-interference; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:wave-interference; revision 0.1.0-draft. Setting: Add two matching sinusoidal waves and connect phase difference to the resulting amplitude. Expression: $R=2A|\cos(\varphi/2)|$. Conditions required for a defined value (a case may test their violation): Both component waves have the same frequency, wave number, amplitude and propagation direction. Superposition is linear; contributions are measured in the same units. The phase control is in radians, from 0 to 2π. Scope: This equal-wave model is a simplified local signal description; amplitude 0.2–2 units. R is amplitude, not energy, intensity or loudness.

Case unit math:example:wave-interference:cancel. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"amplitude": 1, "phase": 3.141592653589793}. Result: {"exact": "0 amplitude units"}. Limits: A tiny floating-point residue is numerical error; real unmatched signals need not cancel perfectly.

## Complete worked case

- id: math:example:wave-interference:cancel
- title: Meet a crest with a trough
- role: boundary
- question: What amplitude remains at exactly half a cycle?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Both component waves have the same frequency, wave number, amplitude and propagation direction.
  - Superposition is linear; contributions are measured in the same units.
  - The phase control is in radians, from 0 to 2π.
- inputs:
  - phase: 3.141592653589793
  - amplitude: 1
- steps:
  - Item:
    - index: 1
    - expression: sin(u+π)=−sin u
    - reason: The signals are opposites at every phase coordinate.
  - Item:
    - index: 2
    - expression: R=2|cos(π/2)|=0
    - reason: Add the two signals, which cancel pointwise.
- result:
  - exact: 0 amplitude units
- interpretation: Ideal cancellation requires matched waves at the modeled location.
- independent check:
  - method: Add arbitrary matching samples.
  - expected: a+(−a)=0 for every sample.
- limits: A tiny floating-point residue is numerical error; real unmatched signals need not cancel perfectly.
- preset:
  - phase: 3.141592653589793
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
