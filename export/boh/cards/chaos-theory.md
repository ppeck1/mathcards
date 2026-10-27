---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:chaos-theory", "id": "math:concept:chaos-theory", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:chaos-theory", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c5f23ce70b628dbb0dea920554bf5784e7d3b774ed1c9524c4af741cf4a7144a"}, "purpose": "Explore how a deterministic nonlinear rule responds to nearby starting values.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c5f23ce70b628dbb0dea920554bf5784e7d3b774ed1c9524c4af741cf4a7144a", "status": "draft", "title": "Chaos theory", "topics": ["mathematics", "dynamics", "modeling", "sensitivity to initial conditions", "logistic map"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Chaos theory

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:chaos-theory; revision 0.1.0-draft. Setting: Explore how a deterministic nonlinear rule responds to nearby starting values. Expression: $x_{n+1}=rx_n(1-x_n),\quad D_n=|z_n-x_n|$. Conditions required for a defined value (a case may test their violation): Use a fixed rate and two starting values in [0,1]. The recurrence is a stipulated deterministic discrete model, not measured population data. Fractional generations linearly interpolate neighboring samples for display. Scope: Controls: rate 2.5–4, seed 0.01–0.99, perturbation 0.000001–0.01 and generation 0–36. Some rates give periodic or convergent behavior; the whole slider is not a chaotic regime.

## Schema Version

0.1.0

## Id

math:concept:chaos-theory

## Slug

chaos-theory

## Type

concept

## Title

Chaos theory

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

- sensitivity to initial conditions
- logistic map

## Branches

- dynamics
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Explore how a deterministic nonlinear rule responds to nearby starting values.

## Meaning

Follow two traces through the same rule. Their separation can expand or shrink, and changing the rate can change the pattern.

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
  - id: math:example:chaos-theory:two-counts
  - title: Two nearly identical pond estimates
  - role: applied_model
  - question: Two normalized pond-population estimates start at 0.35 and 0.3501. What is their one-generation gap at rate 3.8?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
  - inputs:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 1
  - steps:
    - Item:
      - index: 1
      - expression: x₁=3.8(0.35)(0.65)=0.8645
      - reason: Apply the same nonlinear update to the first estimate.
    - Item:
      - index: 2
      - expression: z₁=3.8(0.3501)(0.6499)=0.864613962
      - reason: Keep the tiny initial difference in the second update.
    - Item:
      - index: 3
      - expression: |z₁−x₁|=0.000113962
      - reason: Compare both trajectories at the same generation.
  - result:
    - exact: 0.000113962 normalized units
  - interpretation: The first gap is slightly larger than the initial 0.0001; later gaps need not increase at every step.
  - independent check:
    - method: Expand the update difference.
    - expected: rδ(1−2s−δ)=3.8(0.0001)(0.2999)=0.000113962.
  - limits: This is an ideal discrete population model. It does not establish an ecological forecast or prove chaos.
  - preset:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
- Item:
  - id: math:example:chaos-theory:twelve
  - title: Twelve updates later
  - role: applied_model
  - question: How far apart are those two model estimates after twelve updates?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
  - inputs:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 12
  - steps:
    - Item:
      - index: 1
      - expression: x₀=0.35; z₀=0.3501
      - reason: Hold the update rule and rate fixed so only the starting estimate differs.
    - Item:
      - index: 2
      - expression: xₖ₊₁=3.8xₖ(1−xₖ); zₖ₊₁=3.8zₖ(1−zₖ), k=0,…,11
      - reason: Apply each update to its own preceding value.
    - Item:
      - index: 3
      - expression: |z₁₂−x₁₂| ≈ 0.0264415841071
      - reason: Take the absolute gap after the same number of updates.
  - result:
    - exact: Numerically approximately 0.0264415841071 normalized units
  - interpretation: Small starting uncertainty can matter later under nonlinear iteration.
  - independent check:
    - method: Recalculate using exact rational starting inputs and rational rate.
    - expected: Use 19/5, 7/20 and 3501/10000 for the twelve rational recurrences, then compare rounded values.
  - limits: A finite floating-point trace illustrates sensitivity; it is not a proof of chaotic behavior for this parameter.
  - preset:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
- Item:
  - id: math:example:chaos-theory:initial
  - title: Before the first update
  - role: boundary
  - question: What is the gap before either estimate changes?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
  - inputs:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 0
  - steps:
    - Item:
      - index: 1
      - expression: z₀=s+δ
      - reason: The second starting estimate differs by the chosen positive perturbation.
    - Item:
      - index: 2
      - expression: |z₀−x₀|=|(s+δ)−s|=δ=0.0001
      - reason: No recurrence has run yet.
  - result:
    - exact: 0.0001 normalized units
  - interpretation: The initial uncertainty is visible as a small separation.
  - independent check:
    - method: Cancel equal terms.
    - expected: (s+δ)−s=δ independently of r.
  - limits: The app permits positive δ only, with both starting estimates inside [0,1].
  - preset:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
- Item:
  - id: math:example:chaos-theory:equilibrium
  - title: A calm setting of the same rule
  - role: counterexample
  - question: At rate 2.5, start at 0.6 and 0.6001. Does the first gap have to grow?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
  - inputs:
    - rate: 2.5
    - seed: 0.6
    - delta: 0.0001
    - generation: 1
  - steps:
    - Item:
      - index: 1
      - expression: 2.5(0.6)(0.4)=0.6
      - reason: The first starting value is a fixed point.
    - Item:
      - index: 2
      - expression: 2.5(0.6001)(0.3999)=0.599949975
      - reason: The neighboring value moves just below it.
    - Item:
      - index: 3
      - expression: |0.599949975−0.6|=0.000050025
      - reason: The one-step gap is smaller than 0.0001.
  - result:
    - exact: 0.000050025 normalized units
  - interpretation: Nonlinear rules can have calm parameter regimes. A chaos label does not make every setting chaotic.
  - independent check:
    - method: Use the difference identity.
    - expected: |2.5δ(1−2s−δ)|=0.000050025.
  - limits: A one-step calculation alone does not classify the long-run attractor.
  - preset:
    - rate: 2.5
    - seed: 0.6
    - delta: 0.0001
    - generation: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
- Item:
  - id: math:example:chaos-theory:between
  - title: Halfway between generations
  - role: representation
  - question: What does generation 0.5 represent in the animation?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.
  - inputs:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: x(0.5)=(0.35+0.8645)/2=0.60725
      - reason: Linearly join the first trajectory’s two discrete samples.
    - Item:
      - index: 2
      - expression: z(0.5)=(0.3501+0.864613962)/2=0.607356981
      - reason: Use the same display fraction for the second trajectory.
    - Item:
      - index: 3
      - expression: |z(0.5)−x(0.5)|=0.000106981
      - reason: Subtract the interpolated values, then take magnitude.
  - result:
    - exact: 0.000106981 normalized units
  - interpretation: Fractional generation is a display transition, not a biological half-generation prediction.
  - independent check:
    - method: Interpolate the signed endpoint differences before taking absolute value.
    - expected: 0.5(0.0001)+0.5(0.000113962)=0.000106981.
  - limits: This interpolation convention is declared by the app; it is not a continuous-time logistic equation.
  - preset:
    - rate: 3.8
    - seed: 0.35
    - delta: 0.0001
    - generation: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use a fixed rate and two starting values in [0,1].
    - The recurrence is a stipulated deterministic discrete model, not measured population data.
    - Fractional generations linearly interpolate neighboring samples for display.

## Properties

- Item:
  - claim: The update is deterministic.
  - status: algebraic derivation
  - conditions: Fix exact r and an exact starting value.
  - derivation: Each next value is a uniquely determined product r x(1−x).
- Item:
  - claim: The gap need not increase at every update.
  - status: algebraic derivation
  - conditions: Compare two valid current states x and z.
  - derivation: F(z)−F(x)=r(z−x)(1−z−x); the multiplying factor may have magnitude below one.

## Prompts

- Item:
  - prompt: Does chaos mean fresh randomness is added?
  - answer: No. This model uses the same deterministic update. Sensitivity concerns how nearby starts evolve.
- Item:
  - prompt: Does this picture prove chaos?
  - answer: No. A finite plot is an illustration. A mathematical chaos claim needs a precise definition and an argument beyond these samples.

## Representations

- Item:
  - kind: symbolic
  - description: Apply x↦rx(1−x) repeatedly to two initial values.
- Item:
  - kind: geometric
  - description: Two colored traces and a gap marker use the same evaluated generation; fractional generation joins neighboring samples.

## Applications

- Item:
  - context: Compare two uncertain starting population estimates.
  - mapping: Use 0.35 and 0.3501 with the same rate 3.8, and compare their first updates.
  - limitations: Constructed normalized model; no actual pond calibration.
  - evidence kind: constructed_example
  - example ref: math:example:chaos-theory:two-counts
- Item:
  - context: Test whether every nonlinear setting amplifies uncertainty.
  - mapping: At rate 2.5 the one-step gap from 0.6 decreases.
  - limitations: One step does not classify all future behavior.
  - evidence kind: constructed_example
  - example ref: math:example:chaos-theory:equilibrium

## Source Refs

- source:mit:logistic-dynamics

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Explore how a deterministic nonlinear rule responds to nearby starting values.
- formal latex: x_{n+1}=rx_n(1-x_n),\quad D_n=|z_n-x_n|
- signature:
  - r: dimensionless rate, held fixed within a trace
  - s: first normalized initial value
  - δ: positive initial perturbation; z₀=s+δ
  - n: nonnegative discrete generation; fractions are display interpolation
  - D: absolute separation of the two traces
- conditions:
  - Use a fixed rate and two starting values in [0,1].
  - The recurrence is a stipulated deterministic discrete model, not measured population data.
  - Fractional generations linearly interpolate neighboring samples for display.
- domain notes: Controls: rate 2.5–4, seed 0.01–0.99, perturbation 0.000001–0.01 and generation 0–36. Some rates give periodic or convergent behavior; the whole slider is not a chaotic regime.
- proof status: Recurrence evaluation and a local algebraic difference identity are derived here. No numerical trace is offered as a proof of chaos.
- source refs:
  - source:mit:logistic-dynamics

## Grammar

- pronunciation: The next state is rate times the current state times one minus the current state. Compare two starts by the absolute difference of their iterates.
- expression latex: x_{n+1}=rx_n(1-x_n),\quad D_n=|z_n-x_n|
- formation rule: For each seed s and s+δ, iterate F(x)=r*x*(1-x) floor(generation) times. At fraction f linearly interpolate that sample and its next sample. Output is the absolute difference of the two interpolated values.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: r
    - role: dimensionless rate, held fixed within a trace
    - type: Real quantity in declared setting
  - Item:
    - token: s
    - role: first normalized initial value
    - type: Real quantity in declared setting
  - Item:
    - token: δ
    - role: positive initial perturbation; z₀=s+δ
    - type: Real quantity in declared setting
  - Item:
    - token: n
    - role: nonnegative discrete generation; fractions are display interpolation
    - type: Real quantity in declared setting
  - Item:
    - token: D
    - role: absolute separation of the two traces
    - type: Real quantity in declared setting
- ast:
  - id: ast:chaos-theory:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:seed
      - kind: variable
      - symbol: s
      - type: Real
      - scope ref: scope:chaos-theory
    - Item:
      - id: n:delta
      - kind: variable
      - symbol: δ
      - type: Real
      - scope ref: scope:chaos-theory
    - Item:
      - id: n:iterate
      - kind: functionRef
      - ref: X_{r,n}: seed → interpolated logistic iterate with fixed r,n
      - type: Real → Real
    - Item:
      - id: n:near-seed
      - kind: add
      - arguments:
        - n:seed
        - n:delta
      - type: Real
    - Item:
      - id: n:first
      - kind: apply
      - function: n:iterate
      - argument: n:seed
      - type: Real
    - Item:
      - id: n:second
      - kind: apply
      - function: n:iterate
      - argument: n:near-seed
      - type: Real
    - Item:
      - id: n:gap
      - kind: subtract
      - arguments:
        - n:second
        - n:first
      - type: Real
    - Item:
      - id: n:absolute
      - kind: functionRef
      - ref: absolute value
      - type: Real → Real
    - Item:
      - id: n:output
      - kind: apply
      - function: n:absolute
      - argument: n:gap
      - type: Real
  - scopes:
    - Item:
      - id: scope:chaos-theory
      - kind: modelExpression
      - free variables:
        - r
        - s
        - δ
        - n
        - D
      - domain condition: Use a fixed rate and two starting values in [0,1].; The recurrence is a stipulated deterministic discrete model, not measured population data.; Fractional generations linearly interpolate neighboring samples for display.
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

- component id: chaos-theory-visual-model
- renderer id: chaos-theory-visual-model
- renderer version: 1.0.0
- model id: chaos-theory-visual-model
- model revision: 1.0.0
- expression id: ast:chaos-theory:expression
- interaction status: implemented
- description: Two colored traces and a gap marker use the same evaluated generation; fractional generation joins neighboring samples.
- controls:
  - Item:
    - id: rate
    - type: number
    - default: 3.8
    - min: 2.5
    - max: 4
    - slider min: 2.5
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: seed
    - type: number
    - default: 0.35
    - min: 0.01
    - max: 0.99
    - slider min: 0.01
    - slider max: 0.99
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: delta
    - type: number
    - default: 0.0001
    - min: 1e-06
    - max: 0.01
    - slider min: 1e-06
    - slider max: 0.01
    - slider step: 1e-06
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: generation
    - type: number
    - default: 12
    - min: 0
    - max: 36
    - slider min: 0
    - slider max: 36
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - rate: 3.8
      - seed: 0.35
      - delta: 0.0001
      - generation: 12
    - output: 0.02644158410711872
  - Item:
    - input:
      - rate: 3.8
      - seed: 0.35
      - delta: 0.0001
      - generation: 0
    - output: 9.999999999998899e-05
  - Item:
    - input:
      - rate: 3.8
      - seed: 0.35
      - delta: 0.0001
      - generation: 1
    - output: 0.00011396200000002299
  - Item:
    - input:
      - rate: 3.8
      - seed: 0.35
      - delta: 0.0001
      - generation: 0.5
    - output: 0.00010698099999995048
  - Item:
    - input:
      - rate: 2.5
      - seed: 0.6
      - delta: 0.0001
      - generation: 1
    - output: 5.00250000000646e-05
  - Item:
    - input:
      - rate: 4
      - seed: 0.99
      - delta: 0.01
      - generation: 36
    - output: 0.35336619198049213
  - Item:
    - input:
      - rate: 4.1
      - seed: 0.35
      - delta: 0.0001
      - generation: 12
    - status: invalid_parameters
- compute: For each seed s and s+δ, iterate F(x)=r*x*(1-x) floor(generation) times. At fraction f linearly interpolate that sample and its next sample. Output is the absolute difference of the two interpolated values.
- numeric tolerance: 1e-10
- invariants:
  - At generation zero output equals delta.
  - For rates at most 4 and starts in[0,1], every mathematical iterate stays in[0,1].
  - Both traces use the same rate and generation.
- limits:
  - Floating-point roundoff can affect later iterates of sensitive systems.
  - A finite trace does not prove chaos; periodic windows occur among high rates.
  - Fractional generation is a declared visual convention, not a continuous population trajectory.
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

- Source ID: source:mit:logistic-dynamics. [MIT Press Open Encyclopedia of Cognitive Science, Complex Dynamical Systems](https://oecs.mit.edu/pub/00hsw4x2/release/1/). Locator: Nonlinearity, attractors, and chaos; logistic recurrence and sensitive dependence. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
