---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:artificial-neuron:case-1", "id": "math:example:artificial-neuron:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:artificial-neuron", "example_id": "math:example:artificial-neuron:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6d8b1988a3f584420d1d2d7ece8601aaca7328db7dda82e4b8a7078da673c39c"}, "purpose": "How does a weighted signal become an activation?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6d8b1988a3f584420d1d2d7ece8601aaca7328db7dda82e4b8a7078da673c39c", "status": "draft", "title": "Begin with the stated scenario", "topics": ["mathematics", "computation", "an artificial neuron"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Begin with the stated scenario

Parent card: math:concept:artificial-neuron; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:artificial-neuron; revision 0.1.0-draft. Setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier. Expression: $z=wx+b,\quad y=\frac{1}{1+e^{-z}}.$. Conditions required for a defined value (a case may test their violation): One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

Case unit math:example:artificial-neuron:case-1. Setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier. Inputs: {"bias": 0, "signal": 1, "weight": 1}. Result: {"approximate": "0.7310585786 activation"}. Limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

## Complete worked case

- id: math:example:artificial-neuron:case-1
- title: Begin with the stated scenario
- role: applied_model
- question: How does a weighted signal become an activation?
- setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
- assumptions:
  - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- inputs:
  - signal: 1
  - weight: 1
  - bias: 0
- steps:
  - Item:
    - index: 1
    - expression: x = 1, w = 1, b = 0
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: z = w x + b; y = 1/(1 + exp(−z))
    - reason: Multiply signal by weight, add bias, then apply the sigmoid function.
  - Item:
    - index: 3
    - expression: Result ≈ 0.7310585786 activation
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - approximate: 0.7310585786 activation
- interpretation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 0.7310585786300049
- limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- preset:
  - signal: 1
  - weight: 1
  - bias: 0
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

## Written exploration recipe

- component id: component:artificial-neuron
- renderer id: artificial-neuron-visual-model
- renderer version: 1
- model id: artificial-neuron-visual-model
- model revision: 1
- expression id: ast:artificial-neuron:expression
- interaction status: implemented
- description: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
- controls:
  - Item:
    - id: signal
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: weight
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: bias
    - type: number
    - default: 0
    - min: -2
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - signal: 1
      - weight: 1
      - bias: 0
    - status: valid
    - output: 0.7310585786300049
  - Item:
    - input:
      - signal: -3
      - weight: 1
      - bias: 0
    - status: valid
    - output: 0.0474258731775668
  - Item:
    - input:
      - signal: 3
      - weight: 1
      - bias: 0
    - status: valid
    - output: 0.9525741268224333
  - Item:
    - input:
      - signal: 1
      - weight: -2
      - bias: 0
    - status: valid
    - output: 0.11920292202211757
  - Item:
    - input:
      - signal: 1
      - weight: 2
      - bias: 0
    - status: valid
    - output: 0.8807970779778824
  - Item:
    - input:
      - signal: 1
      - weight: 1
      - bias: -2
    - status: valid
    - output: 0.2689414213699951
  - Item:
    - input:
      - signal: 1
      - weight: 1
      - bias: 2
    - status: valid
    - output: 0.9525741268224333
  - Item:
    - input:
      - signal: -1.5
      - weight: 1
      - bias: 0
    - status: valid
    - output: 0.18242552380635635
  - Item:
    - input:
      - signal: 1.5
      - weight: 1
      - bias: 0
    - status: valid
    - output: 0.8175744761936437
  - Item:
    - input:
      - signal: 4
      - weight: 1
      - bias: 0
    - status: invalid_parameters
- compute: Multiply signal by weight, add bias, then apply the sigmoid function.
- numeric tolerance: 1e-10
- invariants:
  - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
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

- Source ID: source:systems:neuron. [Dive into Deep Learning · Multilayer perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/mlp.html). Locator: Weighted preactivation and sigmoid activation; this card uses one scalar unit.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
