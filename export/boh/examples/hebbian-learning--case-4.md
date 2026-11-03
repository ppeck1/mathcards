---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:hebbian-learning:case-4", "id": "math:example:hebbian-learning:case-4", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hebbian-learning", "example_id": "math:example:hebbian-learning:case-4", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a8e9cb33e48af032fc65211f5eb1edea9d4a471728985fffdcd54ed7babc3243"}, "purpose": "How does simultaneous activity change one connection?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a8e9cb33e48af032fc65211f5eb1edea9d4a471728985fffdcd54ed7babc3243", "status": "draft", "title": "Change Postsynaptic activity v to 0", "topics": ["mathematics", "computation", "a hebbian weight update"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Postsynaptic activity v to 0

Parent card: math:concept:hebbian-learning; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:hebbian-learning; revision 0.1.0-draft. Setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning. Expression: $\Delta w=\eta u v,\quad w_1=w_0+\Delta w,\quad w_0=0.2.$. Conditions required for a defined value (a case may test their violation): One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

Case unit math:example:hebbian-learning:case-4. Setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning. Inputs: {"post": 0, "pre": 0.5, "rate": 0.1}. Result: {"approximate": "0.2 weight units"}. Limits: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

## Complete worked case

- id: math:example:hebbian-learning:case-4
- title: Change Postsynaptic activity v to 0
- role: applied_model
- question: How does simultaneous activity change one connection?
- setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
- assumptions:
  - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- inputs:
  - pre: 0.5
  - post: 0
  - rate: 0.1
- steps:
  - Item:
    - index: 1
    - expression: u = 0.5, v = 0, η = 0.1
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: Δw = η u v; w₁ = w₀ + Δw
    - reason: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
  - Item:
    - index: 3
    - expression: Result ≈ 0.2 weight units
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - approximate: 0.2 weight units
- interpretation: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 0.2
- limits: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- preset:
  - pre: 0.5
  - post: 0
  - rate: 0.1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

## Written exploration recipe

- component id: component:hebbian-learning
- renderer id: hebbian-learning-visual-model
- renderer version: 1
- model id: hebbian-learning-visual-model
- model revision: 1
- expression id: ast:hebbian-learning:expression
- interaction status: implemented
- description: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
- controls:
  - Item:
    - id: pre
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.05
  - Item:
    - id: post
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.05
  - Item:
    - id: rate
    - type: number
    - default: 0.1
    - min: 0
    - max: 0.2
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - pre: 0.5
      - post: 0.5
      - rate: 0.1
    - status: valid
    - output: 0.225
  - Item:
    - input:
      - pre: 0
      - post: 0.5
      - rate: 0.1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - pre: 1
      - post: 0.5
      - rate: 0.1
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - pre: 0.5
      - post: 0
      - rate: 0.1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - pre: 0.5
      - post: 1
      - rate: 0.1
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - pre: 0.5
      - post: 0.5
      - rate: 0
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - pre: 0.5
      - post: 0.5
      - rate: 0.2
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - pre: 0.25
      - post: 0.5
      - rate: 0.1
    - status: valid
    - output: 0.21250000000000002
  - Item:
    - input:
      - pre: 0.75
      - post: 0.5
      - rate: 0.1
    - status: valid
    - output: 0.23750000000000002
  - Item:
    - input:
      - pre: 2
      - post: 0.5
      - rate: 0.1
    - status: invalid_parameters
- compute: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
- numeric tolerance: 1e-10
- invariants:
  - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
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

- Source ID: source:systems:hebb. [Gerstner et al. · Models of Hebbian learning](https://neuronaldynamics.epfl.ch/online/Ch19.S2.html). Locator: Rate-based local correlation rules and the need for bounds or other stabilizing terms.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
