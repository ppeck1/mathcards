---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:linear-model:negative-time", "id": "math:example:linear-model:negative-time", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-model", "example_id": "math:example:linear-model:negative-time", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a91f0d8b5bb1476ea39259617022f1a7e03acda68a66d5e6ab4422ef0e0c09fa"}, "purpose": "Combine a starting amount with a constant rate of change.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a91f0d8b5bb1476ea39259617022f1a7e03acda68a66d5e6ab4422ef0e0c09fa", "status": "draft", "title": "Before this story starts", "topics": ["mathematics", "functions", "change", "modeling", "constant-rate model", "affine model", "starting amount plus rate"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Before this story starts

Parent card: math:concept:linear-model; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:linear-model; revision 0.1.0-draft. Setting: An affine quantity model for nonnegative elapsed time; illustrated by a tank with constant inflow. Expression: $V(t)=V_0+rt,\qquad t\geq0.$. Conditions required for a defined value (a case may test their violation): Elapsed time is nonnegative and measured in minutes. The stipulated inflow is constant and nonnegative; there is no outflow during the interval. Initial volume and rate have compatible units; the tank has enough capacity for the result. Scope: General affine functions may have negative inputs or slopes. This tank renderer uses initial 0–100 L, inflow 0–20 L/min and time 0–12 min. With nonzero V₀ the function is affine; some algebra texts call every straight-line function linear.

Case unit math:example:linear-model:negative-time. Setting: Constructed tank model with no outflow and sufficient capacity during the interval. Inputs: {"initial_L": 20, "rate_L_per_min": 4, "time_min": -1}. Result: {"exact": "Outside the elapsed-time model"}. Limits: The renderer rejects the parameter; a pre-start extrapolation is not an observed volume.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:linear-functions. [College Algebra 2e, 4.1 Linear Functions](https://openstax.org/books/college-algebra-2e/pages/4-1-linear-functions). Locator: Representing a Linear Function in Function Notation; Linear Function definition; Interpreting Slope as a Rate of Change. Verification: Definition and rate units inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
