---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:resonance:more-damping", "id": "math:example:resonance:more-damping", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:resonance", "example_id": "math:example:resonance:more-damping", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "271210a3a2f60502ae321429ae14859a48ffb58bd0471d890f1ed8f184e46eca"}, "purpose": "Explore how drive frequency and damping determine a linear oscillator’s steady amplitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "271210a3a2f60502ae321429ae14859a48ffb58bd0471d890f1ed8f184e46eca", "status": "draft", "title": "Increase damping", "topics": ["mathematics", "dynamics", "modeling", "forced oscillator", "frequency response"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Increase damping

Parent card: math:concept:resonance; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:resonance; revision 0.1.0-draft. Setting: Explore how drive frequency and damping determine a linear oscillator’s steady amplitude. Expression: $R(r,\zeta)=\frac{1}{\sqrt{(1-r^2)^2+(2\zeta r)^2}}$. Conditions required for a defined value (a case may test their violation): Use a linear oscillator with positive viscous damping and a sinusoidal drive. The response is the settled steady-state amplitude, excluding startup transients. Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection. Scope: The interactive controls restrict each parameter to its declared finite interval. Nonlinear effects, material limits and physical safety thresholds are outside the model.

Case unit math:example:resonance:more-damping. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"damping": 0.5, "frequency": 1}. Result: {"exact": "1 normalized amplitude unit"}. Limits: Static normalization does not mean the object is stationary.

## Complete worked case

- id: math:example:resonance:more-damping
- title: Increase damping
- role: applied_model
- question: What is R at r=1 and ζ=0.5?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
  - The response is the settled steady-state amplitude, excluding startup transients.
  - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- inputs:
  - frequency: 1
  - damping: 0.5
- steps:
  - Item:
    - index: 1
    - expression: D=2×0.5×1=1
    - reason: Evaluate the damping contribution.
  - Item:
    - index: 2
    - expression: R=1
    - reason: The response equals the static-deflection amplitude at this frequency.
- result:
  - exact: 1 normalized amplitude unit
- interpretation: A frequency ratio of one does not by itself specify a large amplification.
- independent check:
  - method: A separate algebraic rearrangement or frequency-table check.
  - expected: The simplified value 1/(2ζ)=1 confirms the result.
- limits: Static normalization does not mean the object is stationary.
- preset:
  - frequency: 1
  - damping: 0.5
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
  - The response is the settled steady-state amplitude, excluding startup transients.
  - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.

## Written exploration recipe

- component id: resonance-visual-model
- renderer id: resonance-visual-model
- renderer version: 1.0.0
- model id: resonance-visual-model
- model revision: 1.0.0
- expression id: ast:resonance:expression
- interaction status: implemented
- description: The cyan frequency cursor moves across the response curve; violet detuning and damping terms set the denominator that controls the gold amplitude envelope.
- controls:
  - Item:
    - id: frequency
    - type: number
    - default: 1
    - min: 0.2
    - max: 2
    - slider min: 0.2
    - slider max: 2
    - slider step: 0.005
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: damping
    - type: number
    - default: 0.2
    - min: 0.1
    - max: 0.5
    - slider min: 0.1
    - slider max: 0.5
    - slider step: 0.005
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - frequency: 1
      - damping: 0.2
    - output: 2.5
  - Item:
    - input:
      - frequency: 1
      - damping: 0.1
    - output: 5
  - Item:
    - input:
      - frequency: 1
      - damping: 0.5
    - output: 1
  - Item:
    - input:
      - frequency: 0.2
      - damping: 0.2
    - output: 1.0380684981717496
  - Item:
    - input:
      - frequency: 2
      - damping: 0.2
    - output: 0.3220783132004154
  - Item:
    - input:
      - frequency: 0.9591663046625439
      - damping: 0.2
    - output: 2.5515518153991437
  - Item:
    - input:
      - frequency: 1
      - damping: 0
    - status: invalid_parameters
- compute: detuning=1-frequency*frequency; dampingTerm=2*damping*frequency; denominator=sqrt(detuning^2+dampingTerm^2); amplitude=1/denominator; output=amplitude. For the controlled damping range, the displacement-amplitude peak occurs at frequency=sqrt(1-2*damping^2), slightly below 1.
- numeric tolerance: 1e-10
- invariants:
  - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
  - The response is the settled steady-state amplitude, excluding startup transients.
  - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- limits:
  - The model is a linear viscously damped oscillator with a sinusoidal force of fixed amplitude.
  - Frequency ratio means drive angular frequency divided by undamped natural angular frequency.
  - Each displayed amplitude is a separate steady-state prediction; startup transients and the history of a real sweep are excluded.
  - The displacement-amplitude peak shifts below ratio 1 when damping is positive; ratio 1 is the story’s comparison point, not a universal resonance location.
  - Nonlinear effects, material limits and physical safety thresholds are outside the model.
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

- Source ID: source:utexas:driven-oscillator. [University of Texas, Driven Damped Harmonic Oscillation](https://farside.ph.utexas.edu/teaching/315/Waves/node15.html). Locator: Driven oscillator equation and steady amplitude, equation 2.51. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
