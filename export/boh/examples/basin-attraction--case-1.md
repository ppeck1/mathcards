---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:basin-attraction:case-1", "id": "math:example:basin-attraction:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:basin-attraction", "example_id": "math:example:basin-attraction:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "b0a85a644bd26215f183f8427068668f068382e57dbb3f5098d009edd7ed9c5b"}, "purpose": "Which resting position will the mechanism approach?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "b0a85a644bd26215f183f8427068668f068382e57dbb3f5098d009edd7ed9c5b", "status": "draft", "title": "Begin with the stated scenario", "topics": ["mathematics", "dynamics", "basins of attraction"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Begin with the stated scenario

Parent card: math:concept:basin-attraction; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:basin-attraction; revision 0.1.0-draft. Setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring. Expression: $\dot x=x-x^3,\quad x(t)=\frac{x_0}{\sqrt{x_0^2+(1-x_0^2)e^{-2t}}}.$. Conditions required for a defined value (a case may test their violation): One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

Case unit math:example:basin-attraction:case-1. Setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring. Inputs: {"initial": 0.3, "time": 2}. Result: {"approximate": "0.918556222 position units"}. Limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

## Complete worked case

- id: math:example:basin-attraction:case-1
- title: Begin with the stated scenario
- role: applied_model
- question: Which resting position will the mechanism approach?
- setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
- assumptions:
  - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- inputs:
  - initial: 0.3
  - time: 2
- steps:
  - Item:
    - index: 1
    - expression: x₀ = 0.3, t = 2
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: dx/dt = x − x³
    - reason: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
  - Item:
    - index: 3
    - expression: Result ≈ 0.918556222 position units
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - approximate: 0.918556222 position units
- interpretation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 0.9185562220048088
- limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- preset:
  - initial: 0.3
  - time: 2
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

## Written exploration recipe

- component id: component:basin-attraction
- renderer id: basin-attraction-visual-model
- renderer version: 1
- model id: basin-attraction-visual-model
- model revision: 1
- expression id: ast:basin-attraction:expression
- interaction status: implemented
- description: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
- controls:
  - Item:
    - id: initial
    - type: number
    - default: 0.3
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: time
    - type: number
    - default: 2
    - min: 0
    - max: 5
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - initial: 0.3
      - time: 2
    - status: valid
    - output: 0.9185562220048088
  - Item:
    - input:
      - initial: -2
      - time: 2
    - status: valid
    - output: -1.0069399461174926
  - Item:
    - input:
      - initial: 2
      - time: 2
    - status: valid
    - output: 1.0069399461174926
  - Item:
    - input:
      - initial: 0.3
      - time: 0
    - status: valid
    - output: 0.3
  - Item:
    - input:
      - initial: 0.3
      - time: 5
    - status: valid
    - output: 0.9997705571230827
  - Item:
    - input:
      - initial: -1.0
      - time: 2
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - initial: 1.0
      - time: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - initial: 3
      - time: 2
    - status: invalid_parameters
- compute: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
- numeric tolerance: 1e-10
- invariants:
  - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
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
