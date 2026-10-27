---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:integral-accumulation", "id": "math:concept:integral-accumulation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:integral-accumulation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a00202611d82b03f7cf7593076caee9fb6c2b00e583e7d3e592dc597e895afc5"}, "purpose": "Recover a traveled distance by accumulating a changing velocity.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a00202611d82b03f7cf7593076caee9fb6c2b00e583e7d3e592dc597e895afc5", "status": "draft", "title": "Integrals & accumulation", "topics": ["mathematics", "calculus", "modeling", "definite integral", "area under a velocity curve"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Integrals & accumulation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:integral-accumulation; revision 0.1.0-draft. Setting: Recover a traveled distance by accumulating a changing velocity. Expression: $s(T)=\int_0^T at\,dt=\frac12aT^2$. Conditions required for a defined value (a case may test their violation): The cart starts from rest at position zero. Acceleration is constant and positive; motion remains along one forward axis. Time is nonnegative and the stated units are consistent. Scope: The interactive controls restrict each parameter to its declared finite interval. The illustration excludes power limits, friction, braking and measured motor behavior.

## Schema Version

0.1.0

## Id

math:concept:integral-accumulation

## Slug

integral-accumulation

## Type

concept

## Title

Integrals & accumulation

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

- definite integral
- area under a velocity curve

## Branches

- calculus
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Recover a traveled distance by accumulating a changing velocity.

## Meaning

Each thin time slice adds a little distance. The whole shaded area connects instantaneous speed to the cart’s position.

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
  - id: math:example:integral-accumulation:cart
  - title: A cart from rest
  - role: applied_model
  - question: How far does a cart travel in 4 s at constant acceleration 2 m/s²?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
  - inputs:
    - time: 4
    - rate: 2
  - steps:
    - Item:
      - index: 1
      - expression: v(4)=2×4=8 m/s
      - reason: Find the velocity at the end of the interval.
    - Item:
      - index: 2
      - expression: s(4)=½×4×8=16 m
      - reason: Accumulate the triangular velocity–time area.
  - result:
    - exact: 16 m
  - interpretation: The instantaneous final speed is 8 m/s; the accumulated distance is 16 m.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: Average velocity is (0+8)/2=4 m/s; 4 m/s × 4 s = 16 m.
  - limits: The cart starts from rest and acceleration remains constant.
  - preset:
    - time: 4
    - rate: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
- Item:
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
- Item:
  - id: math:example:integral-accumulation:gentle
  - title: A gentler test
  - role: applied_model
  - question: What distance accumulates in 6 s at 0.5 m/s²?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
  - inputs:
    - time: 6
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: v(6)=0.5×6=3 m/s
      - reason: Find the endpoint velocity.
    - Item:
      - index: 2
      - expression: s(6)=½×6×3=9 m
      - reason: Measure the area under the increasing velocity line.
  - result:
    - exact: 9 m
  - interpretation: Longer time can still give less distance when acceleration is lower.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The mean velocity is 1.5 m/s, giving 9 m in 6 s.
  - limits: The acceleration is stipulated, not measured.
  - preset:
    - time: 6
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
- Item:
  - id: math:example:integral-accumulation:zero
  - title: At the start
  - role: boundary
  - question: What distance has accumulated at time zero?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
  - inputs:
    - time: 0
    - rate: 2
  - steps:
    - Item:
      - index: 1
      - expression: T=0 s
      - reason: The integration interval has zero width.
    - Item:
      - index: 2
      - expression: s(0)=½×2×0²=0 m
      - reason: No elapsed interval contributes distance.
  - result:
    - exact: 0 m
  - interpretation: A nonzero acceleration does not imply a nonzero starting velocity or distance.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The integral with identical lower and upper limits is zero.
  - limits: Initial position is defined as zero.
  - preset:
    - time: 0
    - rate: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
- Item:
  - id: math:example:integral-accumulation:not-rest
  - title: Check the initial velocity
  - role: counterexample
  - question: A cart already moving at 3 m/s then accelerates at 2 m/s² for 4 s. Is 16 m its distance?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.
  - inputs:
    - time: 4
    - rate: 2
    - initial velocity: 3
  - steps:
    - Item:
      - index: 1
      - expression: v(t)=3+2t
      - reason: The stated start differs from rest.
    - Item:
      - index: 2
      - expression: s(4)=3×4+½×2×4²=28 m
      - reason: Include the rectangular area below the initial velocity.
  - result:
    - exact: Outside this rest-start model; comparison distance is 28 m
  - interpretation: The omitted starting velocity contributes another 12 m.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: Average velocity (3+11)/2=7 m/s for 4 s gives 28 m.
  - limits: This interactive model has no initial-velocity control.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The cart starts from rest at position zero.
    - Acceleration is constant and positive; motion remains along one forward axis.
    - Time is nonnegative and the stated units are consistent.

## Properties

- Item:
  - claim: Each thin time slice adds a little distance. The whole shaded area connects instantaneous speed to the cart’s position.
  - status: algebraic derivation
  - conditions: The cart starts from rest at position zero.; Acceleration is constant and positive; motion remains along one forward axis.; Time is nonnegative and the stated units are consistent.
  - derivation: distance=triangleArea=0.5*rate*time*time; velocity=rate*time; output=distance. The definite integral of v(t)=rate*t from 0 to time is the triangular area beneath the velocity line.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: The cart starts from rest at position zero. Acceleration is constant and positive; motion remains along one forward axis. Time is nonnegative and the stated units are consistent.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan time cursor widens the shaded velocity triangle; its gold area determines the cart’s distance along the track.

## Representations

- Item:
  - kind: symbolic
  - description: distance=triangleArea=0.5*rate*time*time; velocity=rate*time; output=distance. The definite integral of v(t)=rate*t from 0 to time is the triangular area beneath the velocity line.
- Item:
  - kind: geometric
  - description: The cyan time cursor widens the shaded velocity triangle; its gold area determines the cart’s distance along the track.

## Applications

- Item:
  - context: A cart from rest
  - mapping: The instantaneous final speed is 8 m/s; the accumulated distance is 16 m.
  - limitations: The cart starts from rest and acceleration remains constant.
  - evidence kind: constructed_example
  - example ref: math:example:integral-accumulation:cart
- Item:
  - context: Stop the clock earlier
  - mapping: Halving the elapsed time quarters the traveled distance in this model.
  - limitations: The comparison keeps acceleration fixed.
  - evidence kind: constructed_example
  - example ref: math:example:integral-accumulation:half-time

## Source Refs

- source:openstax:net-change

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Recover a traveled distance by accumulating a changing velocity.
- formal latex: s(T)=\int_0^T at\,dt=\frac12aT^2
- signature:
  - time: elapsed time T in seconds
  - rate: constant acceleration a in metres per second squared
  - distance: distance from rest in metres
- conditions:
  - The cart starts from rest at position zero.
  - Acceleration is constant and positive; motion remains along one forward axis.
  - Time is nonnegative and the stated units are consistent.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. The illustration excludes power limits, friction, braking and measured motor behavior.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:openstax:net-change

## Grammar

- pronunciation: Recover a traveled distance by accumulating a changing velocity.
- expression latex: s(T)=\int_0^T at\,dt=\frac12aT^2
- formation rule: distance=triangleArea=0.5*rate*time*time; velocity=rate*time; output=distance. The definite integral of v(t)=rate*t from 0 to time is the triangular area beneath the velocity line.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: time
    - role: elapsed time T in seconds
    - type: Real quantity in declared setting
  - Item:
    - token: rate
    - role: constant acceleration a in metres per second squared
    - type: Real quantity in declared setting
  - Item:
    - token: distance
    - role: distance from rest in metres
    - type: Real quantity in declared setting
- ast:
  - id: ast:integral-accumulation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - symbol: time
      - type: Real
      - scope ref: scope:integral-accumulation
    - Item:
      - id: n:rate
      - kind: variable
      - symbol: rate
      - type: Real
      - scope ref: scope:integral-accumulation
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: distance=triangleArea=0.5*rate*time*time; velocity=rate*time; output=distance. The definite integral of v(t)=rate*t from 0 to time is the triangular area beneath the velocity line.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:time
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial0
      - argument: n:rate
      - type: Real
  - scopes:
    - Item:
      - id: scope:integral-accumulation
      - kind: modelExpression
      - free variables:
        - time
        - rate
      - domain condition: The cart starts from rest at position zero.; Acceleration is constant and positive; motion remains along one forward axis.; Time is nonnegative and the stated units are consistent.
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

## Referenced source registry

- Source ID: source:openstax:net-change. [Calculus Volume 1, 5.4 Integration Formulas and the Net Change Theorem](https://openstax.org/books/calculus-volume-1/pages/5-4-integration-formulas-and-the-net-change-theorem). Locator: Net Change Theorem; velocity, displacement and distance distinction. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
