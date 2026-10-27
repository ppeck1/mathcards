---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:wave-interference", "id": "math:concept:wave-interference", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:wave-interference", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477"}, "purpose": "Add two matching sinusoidal waves and connect phase difference to the resulting amplitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a5e276ffd764355d3d8d133ef93322818fc3cb6b9d4ae1a0a2d0d57261f70477", "status": "draft", "title": "Wave interference", "topics": ["mathematics", "trigonometry", "physics"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Wave interference

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:wave-interference; revision 0.1.0-draft. Setting: Add two matching sinusoidal waves and connect phase difference to the resulting amplitude. Expression: $R=2A|\cos(\varphi/2)|$. Conditions required for a defined value (a case may test their violation): Both component waves have the same frequency, wave number, amplitude and propagation direction. Superposition is linear; contributions are measured in the same units. The phase control is in radians, from 0 to 2π. Scope: This equal-wave model is a simplified local signal description; amplitude 0.2–2 units. R is amplitude, not energy, intensity or loudness.

## Schema Version

0.1.0

## Id

math:concept:wave-interference

## Slug

wave-interference

## Type

concept

## Title

Wave interference

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



## Branches

- trigonometry
- physics

## Expressive Job

- model
- visualize
- compare

## Purpose

Add two matching sinusoidal waves and connect phase difference to the resulting amplitude.

## Meaning

Slide one wave relative to the other. Their point-by-point sum changes continuously from reinforcement to cancellation and back.

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
  - id: math:example:wave-interference:sound
  - title: Two matching test tones
  - role: applied_model
  - question: Two ideal coherent speakers contribute equal 1-unit pressure amplitudes with a quarter-cycle phase difference at one point. What is the resultant amplitude?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
  - inputs:
    - phase: 1.5707963267948966
    - amplitude: 1
  - steps:
    - Item:
      - index: 1
      - expression: φ=π/2; φ/2=π/4
      - reason: The amplitude factor uses half the relative phase.
    - Item:
      - index: 2
      - expression: R=2(1)|cos(π/4)|=√2
      - reason: Combine equal waves with the sum-to-product identity.
  - result:
    - exact: √2 amplitude units ≈1.41421
  - interpretation: The waves partly reinforce at that point.
  - independent check:
    - method: Add sine and cosine directly.
    - expected: sin u+sin(u+π/2)=sin u+cos u=√2sin(u+π/4).
  - limits: Equal frequency, equal amplitude and coherent phase are assumed; room reflections and loudness perception are excluded.
  - preset:
    - phase: 1.5707963267948966
    - amplitude: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
- Item:
  - id: math:example:wave-interference:aligned
  - title: Align the peaks
  - role: structural
  - question: What happens when the relative phase is zero?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
  - inputs:
    - phase: 0
    - amplitude: 1
  - steps:
    - Item:
      - index: 1
      - expression: cos(0/2)=1
      - reason: The two signals line up.
    - Item:
      - index: 2
      - expression: R=2(1)(1)=2
      - reason: Equal signed displacements add.
  - result:
    - exact: 2 amplitude units
  - interpretation: The resulting amplitude doubles; frequency stays the same.
  - independent check:
    - method: Evaluate at a common crest.
    - expected: 1+1=2.
  - limits: Amplitude is not the same quantity as intensity or perceived loudness.
  - preset:
    - phase: 0
    - amplitude: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
- Item:
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
- Item:
  - id: math:example:wave-interference:quieter
  - title: Lower both source amplitudes
  - role: applied_model
  - question: At a quarter-cycle difference, what if each source amplitude is 0.5?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
  - inputs:
    - phase: 1.5707963267948966
    - amplitude: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: R=2(0.5)|cos(π/4)|
      - reason: Use the same phase with half the source amplitude.
    - Item:
      - index: 2
      - expression: R=√2/2
      - reason: The output scales with A.
  - result:
    - exact: √2/2 amplitude units ≈0.707107
  - interpretation: Scaling both waves scales their sum by the same amount.
  - independent check:
    - method: Factor the common 0.5.
    - expected: 0.5[sin u+cos u] has half the previous resultant amplitude.
  - limits: The two source amplitudes remain equal.
  - preset:
    - phase: 1.5707963267948966
    - amplitude: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Both component waves have the same frequency, wave number, amplitude and propagation direction.
    - Superposition is linear; contributions are measured in the same units.
    - The phase control is in radians, from 0 to 2π.
- Item:
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

## Properties

- Item:
  - claim: The resultant amplitude lies between 0 and 2A.
  - status: algebraic derivation
  - conditions: Use equal amplitudes A≥0.
  - derivation: 0≤|cos(φ/2)|≤1.
- Item:
  - claim: Adding a full relative cycle preserves the resultant amplitude.
  - status: algebraic derivation
  - conditions: Compare phases differing by 2π.
  - derivation: |cos((φ+2π)/2)|=|−cos(φ/2)|.

## Prompts

- Item:
  - prompt: Why does the sum sometimes get smaller?
  - answer: One signed displacement can oppose the other. Add samples before measuring their amplitude.
- Item:
  - prompt: Is twice the amplitude twice the loudness?
  - answer: No. This model draws amplitude; perceived loudness and acoustic intensity require additional definitions and assumptions.

## Representations

- Item:
  - kind: symbolic
  - description: Two equal sine signals combine with a half-phase cosine coefficient.
- Item:
  - kind: geometric
  - description: Two component curves and their pointwise sum share one phase coordinate; an amplitude bracket follows the sum.

## Applications

- Item:
  - context: Compare coherent test tones at one location.
  - mapping: A=1 and φ=π/2 give resultant√2.
  - limitations: A constructed signal model excludes reflections and source mismatch.
  - evidence kind: constructed_example
  - example ref: math:example:wave-interference:sound
- Item:
  - context: Explore ideal cancellation.
  - mapping: A=1 and φ=π give zero pointwise sum.
  - limitations: Real cancellation is local and limited by matching and propagation.
  - evidence kind: constructed_example
  - example ref: math:example:wave-interference:cancel

## Source Refs

- source:openstax:wave-interference

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Add two matching sinusoidal waves and connect phase difference to the resulting amplitude.
- formal latex: R=2A|\cos(\varphi/2)|
- signature:
  - A: equal nonnegative amplitude of each source
  - φ: relative phase in radians
  - R: nonnegative resultant amplitude
- conditions:
  - Both component waves have the same frequency, wave number, amplitude and propagation direction.
  - Superposition is linear; contributions are measured in the same units.
  - The phase control is in radians, from 0 to 2π.
- domain notes: This equal-wave model is a simplified local signal description; amplitude 0.2–2 units. R is amplitude, not energy, intensity or loudness.
- proof status: Apply sin u+sin v=2sin((u+v)/2)cos((u−v)/2) and take the coefficient magnitude.
- source refs:
  - source:openstax:wave-interference

## Grammar

- pronunciation: The resultant amplitude is twice the source amplitude times the absolute cosine of half the relative phase.
- expression latex: R=2A|\cos(\varphi/2)|
- formation rule: Output=2*amplitude*abs(cos(phase/2)). The drawn signed sum is A*sin(u)+A*sin(u+phase); the output reports its nonnegative amplitude.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: A
    - role: equal nonnegative amplitude of each source
    - type: Real quantity in declared setting
  - Item:
    - token: φ
    - role: relative phase in radians
    - type: Real quantity in declared setting
  - Item:
    - token: R
    - role: nonnegative resultant amplitude
    - type: Real quantity in declared setting
- ast:
  - id: ast:wave-interference:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:phase
      - kind: variable
      - symbol: φ
      - type: Angle[rad]
      - scope ref: scope:wave-interference
    - Item:
      - id: n:amplitude
      - kind: variable
      - symbol: A
      - type: Amplitude
      - scope ref: scope:wave-interference
    - Item:
      - id: n:half
      - kind: functionRef
      - ref: φ →φ/2
      - type: Angle[rad] → Angle[rad]
    - Item:
      - id: n:cos
      - kind: functionRef
      - ref: cosine of radians
      - type: Real → Real
    - Item:
      - id: n:absolute
      - kind: functionRef
      - ref: absolute value
      - type: Real → Real
    - Item:
      - id: n:double
      - kind: functionRef
      - ref: u →2u
      - type: Real → Real
    - Item:
      - id: n:half-phase
      - kind: apply
      - function: n:half
      - argument: n:phase
      - type: Real
    - Item:
      - id: n:cosine
      - kind: apply
      - function: n:cos
      - argument: n:half-phase
      - type: Real
    - Item:
      - id: n:magnitude
      - kind: apply
      - function: n:absolute
      - argument: n:cosine
      - type: Real
    - Item:
      - id: n:factor
      - kind: apply
      - function: n:double
      - argument: n:magnitude
      - type: Real
    - Item:
      - id: n:output
      - kind: multiply
      - arguments:
        - n:amplitude
        - n:factor
      - type: Amplitude
  - scopes:
    - Item:
      - id: scope:wave-interference
      - kind: modelExpression
      - free variables:
        - A
        - φ
        - R
      - domain condition: Both component waves have the same frequency, wave number, amplitude and propagation direction.; Superposition is linear; contributions are measured in the same units.; The phase control is in radians, from 0 to 2π.
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

## Referenced source registry

- Source ID: source:openstax:wave-interference. [University Physics Volume1,16.5 Interference of Waves](https://openstax.org/books/university-physics-volume-1/pages/16-5-interference-of-waves). Locator: Superposition of sinusoidal waves differing by a phase shift; equation16.13. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
