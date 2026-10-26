---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:resonance", "id": "math:concept:resonance", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:resonance", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "271210a3a2f60502ae321429ae14859a48ffb58bd0471d890f1ed8f184e46eca"}, "purpose": "Explore how drive frequency and damping determine a linear oscillator’s steady amplitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "271210a3a2f60502ae321429ae14859a48ffb58bd0471d890f1ed8f184e46eca", "status": "draft", "title": "Resonance & driven motion", "topics": ["mathematics", "dynamics", "modeling", "forced oscillator", "frequency response"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Resonance & driven motion

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:resonance; revision 0.1.0-draft. Setting: Explore how drive frequency and damping determine a linear oscillator’s steady amplitude. Expression: $R(r,\zeta)=\frac{1}{\sqrt{(1-r^2)^2+(2\zeta r)^2}}$. Conditions required for a defined value (a case may test their violation): Use a linear oscillator with positive viscous damping and a sinusoidal drive. The response is the settled steady-state amplitude, excluding startup transients. Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection. Scope: The interactive controls restrict each parameter to its declared finite interval. Nonlinear effects, material limits and physical safety thresholds are outside the model.

## Schema Version

0.1.0

## Id

math:concept:resonance

## Slug

resonance

## Type

concept

## Title

Resonance & driven motion

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- forced oscillator
- frequency response

## Branches

- dynamics
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Explore how drive frequency and damping determine a linear oscillator’s steady amplitude.

## Meaning

The drive does not produce the same motion at every frequency. Follow detuning and damping into the response denominator.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:resonance:matching
  - title: Compare at frequency ratio one
  - role: applied_model
  - question: What is the response at r=1 and damping ratio 0.2?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
  - inputs:
    - frequency: 1
    - damping: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: 1−r²=0; 2ζr=0.4
      - reason: Evaluate both denominator terms.
    - Item:
      - index: 2
      - expression: D=√(0²+0.4²)=0.4; R=1/0.4=2.5
      - reason: Take the reciprocal positive denominator.
  - result:
    - exact: 2.5 normalized amplitude units
  - interpretation: Damping keeps the response finite at the undamped natural frequency.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: At r=1, the formula reduces to R=1/(2ζ).
  - limits: This is a settled linear response, not a transient simulation.
  - preset:
    - frequency: 1
    - damping: 0.2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- Item:
  - id: math:example:resonance:less-damping
  - title: Reduce damping
  - role: applied_model
  - question: What is R at r=1 and ζ=0.1?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
  - inputs:
    - frequency: 1
    - damping: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: D=2×0.1×1=0.2
      - reason: The detuning term vanishes at r=1.
    - Item:
      - index: 2
      - expression: R=1/0.2=5
      - reason: Less damping produces a larger response here.
  - result:
    - exact: 5 normalized amplitude units
  - interpretation: Halving damping doubles the amplitude at this comparison frequency.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: R(ζ=0.1)/R(ζ=0.2)=5/2.5=2.
  - limits: The drive-force amplitude remains fixed.
  - preset:
    - frequency: 1
    - damping: 0.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- Item:
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
- Item:
  - id: math:example:resonance:high-frequency
  - title: Drive well above the natural frequency
  - role: applied_model
  - question: What is R at r=2 and ζ=0.2?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
  - inputs:
    - frequency: 2
    - damping: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: Detuning=1−4=−3; damping term=0.8
      - reason: Keep the sign of detuning before squaring.
    - Item:
      - index: 2
      - expression: R=1/√(9+0.64)=5/√241≈0.322078
      - reason: Combine both contributions.
  - result:
    - exact: 5/√241 ≈ 0.322078
  - interpretation: The high-frequency drive produces a smaller steady displacement in this model.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: D²=241/25, so its reciprocal square root is 5/√241.
  - limits: The model remains linear over the illustrated amplitude range.
  - preset:
    - frequency: 2
    - damping: 0.2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- Item:
  - id: math:example:resonance:peak
  - title: Find the damped displacement peak
  - role: structural
  - question: For damping 0.2, does the largest displacement amplitude occur exactly at r=1?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
  - inputs:
    - frequency: 0.9591663046625439
    - damping: 0.2
  - steps:
    - Item:
      - index: 1
      - expression: D²=(1−r²)²+4ζ²r²
      - reason: Maximizing R means minimizing its squared denominator.
    - Item:
      - index: 2
      - expression: d(D²)/dr=4r(r²−1+2ζ²)=0
      - reason: Differentiate with damping fixed.
    - Item:
      - index: 3
      - expression: r=√(1−2ζ²)=√0.92; R≈2.55155
      - reason: Use the positive interior minimum for this damping.
  - result:
    - exact: Peak near r ≈ 0.959166 with amplitude ≈ 2.55155
  - interpretation: Positive damping shifts this displacement-amplitude peak below the undamped natural frequency.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: At the critical point D²=4ζ²(1−ζ²)=0.1536, whose reciprocal square root is about 2.55155.
  - limits: This peak formula applies to this normalized linear displacement model and ζ<1/√2.
  - preset:
    - frequency: 0.9591663046625439
    - damping: 0.2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
    - The response is the settled steady-state amplitude, excluding startup transients.
    - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.

## Properties

- Item:
  - claim: The drive does not produce the same motion at every frequency. Follow detuning and damping into the response denominator.
  - status: algebraic derivation
  - conditions: Use a linear oscillator with positive viscous damping and a sinusoidal drive.; The response is the settled steady-state amplitude, excluding startup transients.; Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
  - derivation: detuning=1-frequency*frequency; dampingTerm=2*damping*frequency; denominator=sqrt(detuning^2+dampingTerm^2); amplitude=1/denominator; output=amplitude. For the controlled damping range, the displacement-amplitude peak occurs at frequency=sqrt(1-2*damping^2), slightly below 1.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: Use a linear oscillator with positive viscous damping and a sinusoidal drive. The response is the settled steady-state amplitude, excluding startup transients. Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan frequency cursor moves across the response curve; violet detuning and damping terms set the denominator that controls the gold amplitude envelope.

## Representations

- Item:
  - kind: symbolic
  - description: detuning=1-frequency*frequency; dampingTerm=2*damping*frequency; denominator=sqrt(detuning^2+dampingTerm^2); amplitude=1/denominator; output=amplitude. For the controlled damping range, the displacement-amplitude peak occurs at frequency=sqrt(1-2*damping^2), slightly below 1.
- Item:
  - kind: geometric
  - description: The cyan frequency cursor moves across the response curve; violet detuning and damping terms set the denominator that controls the gold amplitude envelope.

## Applications

- Item:
  - context: Compare at frequency ratio one
  - mapping: Damping keeps the response finite at the undamped natural frequency.
  - limitations: This is a settled linear response, not a transient simulation.
  - evidence kind: constructed_example
  - example ref: math:example:resonance:matching
- Item:
  - context: Reduce damping
  - mapping: Halving damping doubles the amplitude at this comparison frequency.
  - limitations: The drive-force amplitude remains fixed.
  - evidence kind: constructed_example
  - example ref: math:example:resonance:less-damping

## Source Refs

- source:utexas:driven-oscillator

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Explore how drive frequency and damping determine a linear oscillator’s steady amplitude.
- formal latex: R(r,\zeta)=\frac{1}{\sqrt{(1-r^2)^2+(2\zeta r)^2}}
- signature:
  - frequency: drive-to-natural angular frequency ratio r
  - damping: dimensionless damping ratio ζ
  - amplitude: dimensionless steady displacement amplitude relative to static deflection
- conditions:
  - Use a linear oscillator with positive viscous damping and a sinusoidal drive.
  - The response is the settled steady-state amplitude, excluding startup transients.
  - Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. Nonlinear effects, material limits and physical safety thresholds are outside the model.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:utexas:driven-oscillator

## Grammar

- pronunciation: Explore how drive frequency and damping determine a linear oscillator’s steady amplitude.
- expression latex: R(r,\zeta)=\frac{1}{\sqrt{(1-r^2)^2+(2\zeta r)^2}}
- formation rule: detuning=1-frequency*frequency; dampingTerm=2*damping*frequency; denominator=sqrt(detuning^2+dampingTerm^2); amplitude=1/denominator; output=amplitude. For the controlled damping range, the displacement-amplitude peak occurs at frequency=sqrt(1-2*damping^2), slightly below 1.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: frequency
    - role: drive-to-natural angular frequency ratio r
    - type: Real quantity in declared setting
  - Item:
    - token: damping
    - role: dimensionless damping ratio ζ
    - type: Real quantity in declared setting
  - Item:
    - token: amplitude
    - role: dimensionless steady displacement amplitude relative to static deflection
    - type: Real quantity in declared setting
- ast:
  - id: ast:resonance:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:frequency
      - kind: variable
      - symbol: frequency
      - type: Real
      - scope ref: scope:resonance
    - Item:
      - id: n:damping
      - kind: variable
      - symbol: damping
      - type: Real
      - scope ref: scope:resonance
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: detuning=1-frequency*frequency; dampingTerm=2*damping*frequency; denominator=sqrt(detuning^2+dampingTerm^2); amplitude=1/denominator; output=amplitude. For the controlled damping range, the displacement-amplitude peak occurs at frequency=sqrt(1-2*damping^2), slightly below 1.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:frequency
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial0
      - argument: n:damping
      - type: Real
  - scopes:
    - Item:
      - id: scope:resonance
      - kind: modelExpression
      - free variables:
        - frequency
        - damping
      - domain condition: Use a linear oscillator with positive viscous damping and a sinusoidal drive.; The response is the settled steady-state amplitude, excluding startup transients.; Frequency is divided by the undamped natural angular frequency and amplitude is normalized to static deflection.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

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

## Referenced source registry

- Source ID: source:utexas:driven-oscillator. [University of Texas, Driven Damped Harmonic Oscillation](https://farside.ph.utexas.edu/teaching/315/Waves/node15.html). Locator: Driven oscillator equation and steady amplitude, equation 2.51. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
