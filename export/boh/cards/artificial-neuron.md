---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:artificial-neuron", "id": "math:concept:artificial-neuron", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:artificial-neuron", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6d8b1988a3f584420d1d2d7ece8601aaca7328db7dda82e4b8a7078da673c39c"}, "purpose": "How does a weighted signal become an activation?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6d8b1988a3f584420d1d2d7ece8601aaca7328db7dda82e4b8a7078da673c39c", "status": "draft", "title": "An artificial neuron", "topics": ["mathematics", "computation", "an artificial neuron"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# An artificial neuron

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:artificial-neuron; revision 0.1.0-draft. Setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier. Expression: $z=wx+b,\quad y=\frac{1}{1+e^{-z}}.$. Conditions required for a defined value (a case may test their violation): One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

## Schema Version

0.1.0

## Id

math:concept:artificial-neuron

## Slug

artificial-neuron

## Type

concept

## Title

An artificial neuron

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- an artificial neuron

## Branches

- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does a weighted signal become an activation?

## Meaning

Multiply signal by weight, add bias, then apply the sigmoid function.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:function-composition
  - math:concept:exponentiation
  - math:concept:hebbian-learning
- depth:
  []

## Definition

- setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
- formal latex: z=wx+b,\quad y=\frac{1}{1+e^{-z}}.
- signature:
  - x: Input signal x; the declared input
  - w: Weight w; the declared input
  - b: Bias b; the declared input
  - result: The primary reported quantity in activation.
- conditions:
  - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:neuron

## Grammar

- pronunciation: An artificial neuron
- expression latex: z=wx+b,\quad y=\frac{1}{1+e^{-z}}.
- formation rule: Multiply signal by weight, add bias, then apply the sigmoid function.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: x
    - role: Input signal x; the declared input
    - type: Declared input or result
  - Item:
    - token: w
    - role: Weight w; the declared input
    - type: Declared input or result
  - Item:
    - token: b
    - role: Bias b; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in activation.
    - type: Declared input or result
- ast:
  - id: ast:artificial-neuron:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:signal
      - kind: variable
      - type: Declared model input
      - symbol: x
      - scope ref: scope:artificial-neuron
    - Item:
      - id: n:weight
      - kind: variable
      - type: Declared model input
      - symbol: w
      - scope ref: scope:artificial-neuron
    - Item:
      - id: n:bias
      - kind: variable
      - type: Declared model input
      - symbol: b
      - scope ref: scope:artificial-neuron
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Multiply signal by weight, add bias, then apply the sigmoid function.
    - Item:
      - id: n:bound-signal
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:signal
    - Item:
      - id: n:bound-weight
      - kind: apply
      - type: Declared result
      - function: n:bound-signal
      - argument: n:weight
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-weight
      - argument: n:bias
  - scopes:
    - Item:
      - id: scope:artificial-neuron
      - kind: modelExpression
      - free variables:
        - x
        - w
        - b
      - domain condition: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - x: signal
  - w: weight
  - b: bias
  - result: output

## Properties

- Item:
  - claim: Multiply signal by weight, add bias, then apply the sigmoid function.
  - conditions: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - derivation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:artificial-neuron:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: An artificial neuron supplies a bounded connection to function composition.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:exponentiation
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: An artificial neuron supplies a bounded connection to exponentiation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hebbian-learning
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: An artificial neuron supplies a bounded connection to hebbian learning.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
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
- Item:
  - id: math:example:artificial-neuron:case-2
  - title: Change Input signal x to -3
  - role: applied_model
  - question: How does a weighted signal become an activation?
  - setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
  - assumptions:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - inputs:
    - signal: -3
    - weight: 1
    - bias: 0
  - steps:
    - Item:
      - index: 1
      - expression: x = -3, w = 1, b = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: z = w x + b; y = 1/(1 + exp(−z))
      - reason: Multiply signal by weight, add bias, then apply the sigmoid function.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0474258732 activation
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0474258732 activation
  - interpretation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.0474258731775668
  - limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - preset:
    - signal: -3
    - weight: 1
    - bias: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- Item:
  - id: math:example:artificial-neuron:case-3
  - title: Change Input signal x to 3
  - role: applied_model
  - question: How does a weighted signal become an activation?
  - setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
  - assumptions:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - inputs:
    - signal: 3
    - weight: 1
    - bias: 0
  - steps:
    - Item:
      - index: 1
      - expression: x = 3, w = 1, b = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: z = w x + b; y = 1/(1 + exp(−z))
      - reason: Multiply signal by weight, add bias, then apply the sigmoid function.
    - Item:
      - index: 3
      - expression: Result ≈ 0.9525741268 activation
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.9525741268 activation
  - interpretation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.9525741268224333
  - limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - preset:
    - signal: 3
    - weight: 1
    - bias: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- Item:
  - id: math:example:artificial-neuron:case-4
  - title: Change Weight w to -2
  - role: applied_model
  - question: How does a weighted signal become an activation?
  - setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
  - assumptions:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - inputs:
    - signal: 1
    - weight: -2
    - bias: 0
  - steps:
    - Item:
      - index: 1
      - expression: x = 1, w = -2, b = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: z = w x + b; y = 1/(1 + exp(−z))
      - reason: Multiply signal by weight, add bias, then apply the sigmoid function.
    - Item:
      - index: 3
      - expression: Result ≈ 0.119202922 activation
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.119202922 activation
  - interpretation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.11920292202211757
  - limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - preset:
    - signal: 1
    - weight: -2
    - bias: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
- Item:
  - id: math:example:artificial-neuron:case-5
  - title: Change Weight w to 2
  - role: applied_model
  - question: How does a weighted signal become an activation?
  - setting: A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.
  - assumptions:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - inputs:
    - signal: 1
    - weight: 2
    - bias: 0
  - steps:
    - Item:
      - index: 1
      - expression: x = 1, w = 2, b = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: z = w x + b; y = 1/(1 + exp(−z))
      - reason: Multiply signal by weight, add bias, then apply the sigmoid function.
    - Item:
      - index: 3
      - expression: Result ≈ 0.880797078 activation
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.880797078 activation
  - interpretation: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.8807970779778824
  - limits: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - preset:
    - signal: 1
    - weight: 2
    - bias: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

## Interactive

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

## Prompts

- Item:
  - prompt: How does a weighted signal become an activation?
  - answer: Multiply signal by weight, add bias, then apply the sigmoid function.
- Item:
  - prompt: What does this construction leave out?
  - answer: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.

## Representations

- Item:
  - kind: geometry
  - description: Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Input signal x. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Multiply signal by weight, add bias, then apply the sigmoid function.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: How does a weighted signal become an activation?
  - limitations: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - evidence kind: constructed_example
  - example ref: math:example:artificial-neuron:case-1
- Item:
  - context: Boundary comparison
  - mapping: Multiply signal by weight, add bias, then apply the sigmoid function.
  - limitations: One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.
  - evidence kind: constructed_example
  - example ref: math:example:artificial-neuron:case-2

## Source Refs

- source:systems:neuron

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:neuron. [Dive into Deep Learning · Multilayer perceptrons](https://d2l.ai/chapter_multilayer-perceptrons/mlp.html). Locator: Weighted preactivation and sigmoid activation; this card uses one scalar unit.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
