---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:continuous-flow:case-5", "id": "math:example:continuous-flow:case-5", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:continuous-flow", "example_id": "math:example:continuous-flow:case-5", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "266e39b8bb89bbf4455547ac0cc09be68e85380dbf056c8a4ea1dfa7270e5622"}, "purpose": "How does a continuous correction settle?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "266e39b8bb89bbf4455547ac0cc09be68e85380dbf056c8a4ea1dfa7270e5622", "status": "draft", "title": "Change Starting displacement x₀ to 3", "topics": ["mathematics", "dynamics", "continuous flows"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Starting displacement x₀ to 3

Parent card: math:concept:continuous-flow; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:continuous-flow; revision 0.1.0-draft. Setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement. Expression: $\frac{dx}{dt}=-a x,\quad x(t)=x_0 e^{-a t}.$. Conditions required for a defined value (a case may test their violation): The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

Case unit math:example:continuous-flow:case-5. Setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement. Inputs: {"initial": 3, "rate": 0.5, "time": 1}. Result: {"approximate": "1.8195919791 position units"}. Limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

## Complete worked case

- id: math:example:continuous-flow:case-5
- title: Change Starting displacement x₀ to 3
- role: applied_model
- question: How does a continuous correction settle?
- setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
- assumptions:
  - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- inputs:
  - time: 1
  - initial: 3
  - rate: 0.5
- steps:
  - Item:
    - index: 1
    - expression: t = 1, x₀ = 3, a = 0.5
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: x(t) = x₀ exp(−a t)
    - reason: Multiply the initial displacement by the exponential response factor.
  - Item:
    - index: 3
    - expression: Result ≈ 1.8195919791 position units
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - approximate: 1.8195919791 position units
- interpretation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 1.8195919791379003
- limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- preset:
  - time: 1
  - initial: 3
  - rate: 0.5
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

## Written exploration recipe

- component id: component:continuous-flow
- renderer id: continuous-flow-visual-model
- renderer version: 1
- model id: continuous-flow-visual-model
- model revision: 1
- expression id: ast:continuous-flow:expression
- interaction status: implemented
- description: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 1
    - min: 0
    - max: 5
    - step: 0.05
  - Item:
    - id: initial
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: rate
    - type: number
    - default: 0.5
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - time: 1
      - initial: 2
      - rate: 0.5
    - status: valid
    - output: 1.2130613194252668
  - Item:
    - input:
      - time: 0
      - initial: 2
      - rate: 0.5
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - time: 5
      - initial: 2
      - rate: 0.5
    - status: valid
    - output: 0.1641699972477976
  - Item:
    - input:
      - time: 1
      - initial: -3
      - rate: 0.5
    - status: valid
    - output: -1.8195919791379003
  - Item:
    - input:
      - time: 1
      - initial: 3
      - rate: 0.5
    - status: valid
    - output: 1.8195919791379003
  - Item:
    - input:
      - time: 1
      - initial: 2
      - rate: 0
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - time: 1
      - initial: 2
      - rate: 2
    - status: valid
    - output: 0.2706705664732254
  - Item:
    - input:
      - time: 1.25
      - initial: 2
      - rate: 0.5
    - status: valid
    - output: 1.0705228570379806
  - Item:
    - input:
      - time: 3.75
      - initial: 2
      - rate: 0.5
    - status: valid
    - output: 0.30670993368985694
  - Item:
    - input:
      - time: 6
      - initial: 2
      - rate: 0.5
    - status: invalid_parameters
- compute: Multiply the initial displacement by the exponential response factor.
- numeric tolerance: 1e-10
- invariants:
  - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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

- Source ID: source:systems:flow. [OpenStax · Separable differential equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations). Locator: Exact separable autonomous scalar equations; the displayed families and algebraic solutions are original derivations.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
