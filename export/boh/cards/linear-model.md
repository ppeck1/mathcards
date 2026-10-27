---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:linear-model", "id": "math:concept:linear-model", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-model", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a91f0d8b5bb1476ea39259617022f1a7e03acda68a66d5e6ab4422ef0e0c09fa"}, "purpose": "Combine a starting amount with a constant rate of change.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a91f0d8b5bb1476ea39259617022f1a7e03acda68a66d5e6ab4422ef0e0c09fa", "status": "draft", "title": "Linear models", "topics": ["mathematics", "functions", "change", "modeling", "constant-rate model", "affine model", "starting amount plus rate"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Linear models

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:linear-model; revision 0.1.0-draft. Setting: An affine quantity model for nonnegative elapsed time; illustrated by a tank with constant inflow. Expression: $V(t)=V_0+rt,\qquad t\geq0.$. Conditions required for a defined value (a case may test their violation): Elapsed time is nonnegative and measured in minutes. The stipulated inflow is constant and nonnegative; there is no outflow during the interval. Initial volume and rate have compatible units; the tank has enough capacity for the result. Scope: General affine functions may have negative inputs or slopes. This tank renderer uses initial 0–100 L, inflow 0–20 L/min and time 0–12 min. With nonzero V₀ the function is affine; some algebra texts call every straight-line function linear.

## Schema Version

0.1.0

## Id

math:concept:linear-model

## Slug

linear-model

## Type

concept

## Title

Linear models

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

- constant-rate model
- affine model
- starting amount plus rate

## Branches

- functions
- change
- modeling

## Expressive Job

- model
- scale

## Purpose

Combine a starting amount with a constant rate of change.

## Meaning

Separate what is already there from what accumulates. Every extra minute adds the same volume, so the graph is a straight line.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:unit-dimension
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:derivative
  - type: constant_rate_case
  - conditions: Consider an interior point of a continuous-time interval with fixed rate.
  - reason: The derivative dV/dt is r.
  - target status: available
  - evidence status: local_derivation
  - source refs:
- Item:
  - target: math:concept:exponential-change
  - type: compared_with
  - conditions: Compare equal input increments with model parameters fixed.
  - reason: A constant additive increment differs from a constant multiplicative factor.
  - target status: available
  - evidence status: local_derivation
  - source refs:

## Examples

- Item:
  - id: math:example:linear-model:filling
  - title: Five minutes at the tap
  - role: applied_model
  - question: A tank starts with 20 L. A tap adds 4 L each minute. How much is in it after five minutes?
  - setting: Constructed tank model with no outflow and sufficient capacity during the interval.
  - assumptions:
    - Constructed tank model with no outflow and sufficient capacity during the interval.
  - inputs:
    - initial L: 20
    - rate L per min: 4
    - time min: 5
  - steps:
    - Item:
      - index: 1
      - expression: Added volume=(4 L/min)(5 min)=20 L
      - reason: Rate times time gives volume; minutes cancel.
    - Item:
      - index: 2
      - expression: V(5)=20 L+20 L=40 L
      - reason: Add the water already present.
  - result:
    - exact: 40 L
  - interpretation: At this time the new water equals the starting water, so the total has doubled.
  - independent check:
    - method: Count five equal one-minute additions.
    - expected: 20+4+4+4+4+4=40 L.
  - limits: Flow is stipulated as constant; a real tap and tank capacity need measurement.
  - preset:
    - initial: 20
    - rate: 4
    - time: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Elapsed time is nonnegative and measured in minutes.
    - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
    - Initial volume and rate have compatible units; the tank has enough capacity for the result.
- Item:
  - id: math:example:linear-model:start
  - title: Before the tap runs
  - role: boundary
  - question: What does the formula predict exactly when the timer starts?
  - setting: Constructed tank model with no outflow and sufficient capacity during the interval.
  - assumptions:
    - Constructed tank model with no outflow and sufficient capacity during the interval.
  - inputs:
    - initial L: 20
    - rate L per min: 4
    - time min: 0
  - steps:
    - Item:
      - index: 1
      - expression: rt=(4 L/min)(0 min)=0 L
      - reason: No time has passed.
    - Item:
      - index: 2
      - expression: V(0)=20 L+0 L=20 L
      - reason: Read the initial value.
  - result:
    - exact: 20 L
  - interpretation: The intercept is the amount present at the start, not an extra flow contribution.
  - independent check:
    - method: Check the story before any addition.
    - expected: The tank initially contains 20 L.
  - limits: Time zero is included; negative elapsed time is outside this story.
  - preset:
    - initial: 20
    - rate: 4
    - time: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Elapsed time is nonnegative and measured in minutes.
    - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
    - Initial volume and rate have compatible units; the tank has enough capacity for the result.
- Item:
  - id: math:example:linear-model:closed-tap
  - title: Close the tap
  - role: structural
  - question: What happens to 20 L when inflow is zero for five minutes?
  - setting: Constructed tank model with no outflow and sufficient capacity during the interval.
  - assumptions:
    - Constructed tank model with no outflow and sufficient capacity during the interval.
  - inputs:
    - initial L: 20
    - rate L per min: 0
    - time min: 5
  - steps:
    - Item:
      - index: 1
      - expression: rt=(0 L/min)(5 min)=0 L
      - reason: A zero rate adds no water.
    - Item:
      - index: 2
      - expression: V(5)=20 L
      - reason: Keep the initial amount.
  - result:
    - exact: 20 L
  - interpretation: A straight line can be horizontal: the zero-rate case is constant.
  - independent check:
    - method: Compare two times.
    - expected: V(0)=20 L and V(5)=20 L.
  - limits: No outflow or evaporation is included; closing an actual tap alone does not ensure constant volume.
  - preset:
    - initial: 20
    - rate: 0
    - time: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Elapsed time is nonnegative and measured in minutes.
    - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
    - Initial volume and rate have compatible units; the tank has enough capacity for the result.
- Item:
  - id: math:example:linear-model:target
  - title: When will it reach 52 L?
  - role: inverse_problem
  - question: At 4 L/min from an initial 20 L, how long until the tank holds 52 L?
  - setting: Constructed tank model with no outflow and sufficient capacity during the interval.
  - assumptions:
    - Constructed tank model with no outflow and sufficient capacity during the interval.
  - inputs:
    - initial L: 20
    - rate L per min: 4
    - target L: 52
  - steps:
    - Item:
      - index: 1
      - expression: 52 L−20 L=32 L
      - reason: Remove the starting amount to find the required addition.
    - Item:
      - index: 2
      - expression: t=(32 L)/(4 L/min)=8 min
      - reason: Divide required addition by rate.
    - Item:
      - index: 3
      - expression: V(8)=20 L+(4 L/min)(8 min)=52 L
      - reason: Substitute to check.
  - result:
    - exact: 8 min
  - interpretation: Solving backward reveals the waiting time under the same assumptions.
  - independent check:
    - method: Use the rate equation independently.
    - expected: (52−20)/8=4 L/min.
  - limits: The tank must hold 52 L. At zero inflow the higher target cannot be reached.
  - preset:
    - initial: 20
    - rate: 4
    - time: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Elapsed time is nonnegative and measured in minutes.
    - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
    - Initial volume and rate have compatible units; the tank has enough capacity for the result.
- Item:
  - id: math:example:linear-model:negative-time
  - title: Before this story starts
  - role: boundary
  - question: Should the filling model interpret −1 minute as elapsed time?
  - setting: Constructed tank model with no outflow and sufficient capacity during the interval.
  - assumptions:
    - Constructed tank model with no outflow and sufficient capacity during the interval.
  - inputs:
    - initial L: 20
    - rate L per min: 4
    - time min: -1
  - steps:
    - Item:
      - index: 1
      - expression: 20+4(−1)=16 L in the algebraic extension.
      - reason: An expression can have a value outside a physical model.
    - Item:
      - index: 2
      - expression: Elapsed time t≥0 is required.
      - reason: Reject this input as a tank-story prediction.
  - result:
    - exact: Outside the elapsed-time model
  - interpretation: A formula value is not automatically a meaningful physical prediction.
  - independent check:
    - method: Check the declared domain.
    - expected: −1 is not in [0,∞).
  - limits: The renderer rejects the parameter; a pre-start extrapolation is not an observed volume.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Elapsed time is nonnegative and measured in minutes.
    - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
    - Initial volume and rate have compatible units; the tank has enough capacity for the result.

## Properties

- Item:
  - claim: Equal time intervals add equal water volumes.
  - status: algebraic identity
  - conditions: Fixed rate and both times inside the modeled interval.
  - derivation: V(t+Δt)−V(t)=rΔt.
- Item:
  - claim: Changing initial volume shifts every predicted volume by the same amount.
  - status: algebraic derivation
  - conditions: Fixed rate and time.
  - derivation: (V₀+δ)+rt−(V₀+rt)=δ.

## Prompts

- Item:
  - prompt: Which part came from the tap?
  - answer: Only rt is added water. V₀ was already present before the timer started.
- Item:
  - prompt: Does double the time mean double the total water?
  - answer: It doubles the added water, but the starting amount is counted once. Total volume is proportional to time only when V₀=0.

## Representations

- Item:
  - kind: symbolic
  - description: V(t)=V₀+rt with liters and minutes.
- Item:
  - kind: geometric
  - description: A tank distinguishes initial water from added water with a labeled scale.
- Item:
  - kind: story
  - description: Fill from 20 L at 4 L/min; solve forward for volume or backward for time.

## Applications

- Item:
  - context: Predict a tank volume after five minutes.
  - mapping: 20 L+(4 L/min)(5 min)=40 L.
  - limitations: Constant inflow, no outflow and sufficient capacity are assumed.
  - evidence kind: constructed_example
  - example ref: math:example:linear-model:filling
- Item:
  - context: Find waiting time for a target volume.
  - mapping: At nonzero rate, t=(target−initial)/rate; (52−20)/4=8 min.
  - limitations: The target is at least the initial volume; capacity and flow assumptions still apply.
  - evidence kind: constructed_example
  - example ref: math:example:linear-model:target

## Source Refs

- source:openstax:linear-functions

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, typed expression tree, bounded interactive model and numerical fixtures.

## Definition

- setting: An affine quantity model for nonnegative elapsed time; illustrated by a tank with constant inflow.
- formal latex: V(t)=V_0+rt,\qquad t\geq0.
- signature:
  - t: elapsed time in minutes
  - V 0: initial water volume in liters
  - r: constant inflow in liters per minute
  - V: water volume in liters
- conditions:
  - Elapsed time is nonnegative and measured in minutes.
  - The stipulated inflow is constant and nonnegative; there is no outflow during the interval.
  - Initial volume and rate have compatible units; the tank has enough capacity for the result.
- domain notes: General affine functions may have negative inputs or slopes. This tank renderer uses initial 0–100 L, inflow 0–20 L/min and time 0–12 min. With nonzero V₀ the function is affine; some algebra texts call every straight-line function linear.
- proof status: A stipulated constant-rate model: add initial volume and rate multiplied by elapsed time.
- source refs:
  - source:openstax:linear-functions

## Grammar

- pronunciation: V of t equals V zero plus r times t
- expression latex: V(t)=V_0+rt
- formation rule: Multiply rate by elapsed time to get added volume; add initial volume with the same unit.
- precedence: Multiply rt before adding V₀.
- symbols:
  - Item:
    - token: V(t)
    - role: volume after elapsed time
    - type: Volume[L]
  - Item:
    - token: V₀
    - role: initial volume
    - type: Volume[L]
  - Item:
    - token: r
    - role: inflow per minute
    - type: VolumeRate[L/min]
  - Item:
    - token: t
    - role: elapsed time
    - type: Time[min]
- ast:
  - id: ast:linear-model:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:initial
      - kind: variable
      - symbol: V₀
      - type: Volume[L]
      - scope ref: scope:linear-model
    - Item:
      - id: n:rate
      - kind: variable
      - symbol: r
      - type: VolumeRate[L/min]
      - scope ref: scope:linear-model
    - Item:
      - id: n:time
      - kind: variable
      - symbol: t
      - type: Time[min]
      - scope ref: scope:linear-model
    - Item:
      - id: n:added
      - kind: multiply
      - arguments:
        - n:rate
        - n:time
      - type: Volume[L]
    - Item:
      - id: n:output
      - kind: add
      - arguments:
        - n:initial
        - n:added
      - type: Volume[L]
  - scopes:
    - Item:
      - id: scope:linear-model
      - kind: modelExpression
      - free variables:
        - V₀
        - r
        - t
      - domain condition: t≥0, V₀≥0, r≥0 in this filling model
- parse errors:
  - Item:
    - input: 20 L + 4 L/min
    - status: type_error
    - reason: Volume and volume per minute cannot be added without a time factor.
  - Item:
    - input: V(−2 min) as elapsed time
    - status: outside_model_domain
    - reason: The story starts at time zero; negative elapsed time is outside its domain.
- ast coverage: The tree models the right-hand quantity. The output label, function declaration, physical assumptions and rounding conventions are explicit metadata.
- output symbol bindings:
  - V(t): output

## Interactive

- component id: linear-model-tank
- renderer id: linear-model-tank
- renderer version: 1
- model id: linear-model-tank
- model revision: 1
- expression id: ast:linear-model:expression
- interaction status: implemented
- description: Fill a tank continuously from a starting level; label added water, inflow, elapsed time and total volume.
- controls:
  - Item:
    - id: initial
    - type: number
    - default: 20
    - min: 0
    - max: 100
    - slider min: 0
    - slider max: 100
    - slider step: 1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: rate
    - type: number
    - default: 4
    - min: 0
    - max: 20
    - slider min: 0
    - slider max: 20
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: time
    - type: number
    - default: 5
    - min: 0
    - max: 12
    - slider min: 0
    - slider max: 12
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - initial: 20
      - rate: 4
      - time: 5
    - output: 40
  - Item:
    - input:
      - initial: 20
      - rate: 4
      - time: 0
    - output: 20
  - Item:
    - input:
      - initial: 20
      - rate: 0
      - time: 5
    - output: 20
  - Item:
    - input:
      - initial: 20
      - rate: 4
      - time: 8
    - output: 52
  - Item:
    - input:
      - initial: 0
      - rate: 4
      - time: 2.5
    - output: 10
  - Item:
    - input:
      - initial: 100
      - rate: 20
      - time: 12
    - output: 340
  - Item:
    - input:
      - initial: 20
      - rate: 4
      - time: -1
    - status: invalid_parameters
- compute: output = initial + rate * time. Volume is not clamped to a decorative boundary; all values retain their units.
- numeric tolerance: 1e-10
- invariants:
  - At time zero, output equals initial.
  - At zero rate, output remains initial.
  - Output minus initial equals rate multiplied by time.
- limits:
  - The controls define a finite illustrative window, not the full mathematical domain.
  - Shape size and accessible numeric output use the same validated parameters. Display interpolation is not an observation.
  - Invalid parameters produce an explicit failure, never a stale valid result.
- fallback: Read the formula, substituted values, worked steps and labeled output without animation.
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

- Source ID: source:openstax:linear-functions. [College Algebra 2e, 4.1 Linear Functions](https://openstax.org/books/college-algebra-2e/pages/4-1-linear-functions). Locator: Representing a Linear Function in Function Notation; Linear Function definition; Interpreting Slope as a Rate of Change. Verification: Definition and rate units inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
