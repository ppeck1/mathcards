---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:hebbian-learning", "id": "math:concept:hebbian-learning", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hebbian-learning", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a8e9cb33e48af032fc65211f5eb1edea9d4a471728985fffdcd54ed7babc3243"}, "purpose": "How does simultaneous activity change one connection?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a8e9cb33e48af032fc65211f5eb1edea9d4a471728985fffdcd54ed7babc3243", "status": "draft", "title": "A Hebbian weight update", "topics": ["mathematics", "computation", "a hebbian weight update"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# A Hebbian weight update

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:hebbian-learning; revision 0.1.0-draft. Setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning. Expression: $\Delta w=\eta u v,\quad w_1=w_0+\Delta w,\quad w_0=0.2.$. Conditions required for a defined value (a case may test their violation): One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

## Schema Version

0.1.0

## Id

math:concept:hebbian-learning

## Slug

hebbian-learning

## Type

concept

## Title

A Hebbian weight update

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

- a hebbian weight update

## Branches

- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does simultaneous activity change one connection?

## Meaning

Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:artificial-neuron
  - math:concept:linear-model
- depth:
  []

## Definition

- setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
- formal latex: \Delta w=\eta u v,\quad w_1=w_0+\Delta w,\quad w_0=0.2.
- signature:
  - u: Presynaptic activity u; the declared input
  - v: Postsynaptic activity v; the declared input
  - η: Learning rate η; the declared input
  - result: The primary reported quantity in weight units.
- conditions:
  - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:hebb

## Grammar

- pronunciation: A Hebbian weight update
- expression latex: \Delta w=\eta u v,\quad w_1=w_0+\Delta w,\quad w_0=0.2.
- formation rule: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: u
    - role: Presynaptic activity u; the declared input
    - type: Declared input or result
  - Item:
    - token: v
    - role: Postsynaptic activity v; the declared input
    - type: Declared input or result
  - Item:
    - token: η
    - role: Learning rate η; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in weight units.
    - type: Declared input or result
- ast:
  - id: ast:hebbian-learning:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:pre
      - kind: variable
      - type: Declared model input
      - symbol: u
      - scope ref: scope:hebbian-learning
    - Item:
      - id: n:post
      - kind: variable
      - type: Declared model input
      - symbol: v
      - scope ref: scope:hebbian-learning
    - Item:
      - id: n:rate
      - kind: variable
      - type: Declared model input
      - symbol: η
      - scope ref: scope:hebbian-learning
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
    - Item:
      - id: n:bound-pre
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:pre
    - Item:
      - id: n:bound-post
      - kind: apply
      - type: Declared result
      - function: n:bound-pre
      - argument: n:post
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-post
      - argument: n:rate
  - scopes:
    - Item:
      - id: scope:hebbian-learning
      - kind: modelExpression
      - free variables:
        - u
        - v
        - η
      - domain condition: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - u: pre
  - v: post
  - η: rate
  - result: output

## Properties

- Item:
  - claim: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
  - conditions: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - derivation: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:hebbian-learning:case-1

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
  - target: math:concept:artificial-neuron
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: A Hebbian weight update supplies a bounded connection to artificial neuron.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: A Hebbian weight update supplies a bounded connection to linear model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:hebbian-learning:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: How does simultaneous activity change one connection?
  - setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
  - assumptions:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - inputs:
    - pre: 0.5
    - post: 0.5
    - rate: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: u = 0.5, v = 0.5, η = 0.1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: Δw = η u v; w₁ = w₀ + Δw
      - reason: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
    - Item:
      - index: 3
      - expression: Result ≈ 0.225 weight units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.225 weight units
  - interpretation: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.225
  - limits: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - preset:
    - pre: 0.5
    - post: 0.5
    - rate: 0.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- Item:
  - id: math:example:hebbian-learning:case-2
  - title: Change Presynaptic activity u to 0
  - role: applied_model
  - question: How does simultaneous activity change one connection?
  - setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
  - assumptions:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - inputs:
    - pre: 0
    - post: 0.5
    - rate: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: u = 0, v = 0.5, η = 0.1
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
    - pre: 0
    - post: 0.5
    - rate: 0.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- Item:
  - id: math:example:hebbian-learning:case-3
  - title: Change Presynaptic activity u to 1
  - role: applied_model
  - question: How does simultaneous activity change one connection?
  - setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
  - assumptions:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - inputs:
    - pre: 1
    - post: 0.5
    - rate: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: u = 1, v = 0.5, η = 0.1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: Δw = η u v; w₁ = w₀ + Δw
      - reason: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
    - Item:
      - index: 3
      - expression: Result ≈ 0.25 weight units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.25 weight units
  - interpretation: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.25
  - limits: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - preset:
    - pre: 1
    - post: 0.5
    - rate: 0.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
- Item:
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
- Item:
  - id: math:example:hebbian-learning:case-5
  - title: Change Postsynaptic activity v to 1
  - role: applied_model
  - question: How does simultaneous activity change one connection?
  - setting: Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.
  - assumptions:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - inputs:
    - pre: 0.5
    - post: 1
    - rate: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: u = 0.5, v = 1, η = 0.1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: Δw = η u v; w₁ = w₀ + Δw
      - reason: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
    - Item:
      - index: 3
      - expression: Result ≈ 0.25 weight units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.25 weight units
  - interpretation: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.25
  - limits: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - preset:
    - pre: 0.5
    - post: 1
    - rate: 0.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

## Interactive

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

## Prompts

- Item:
  - prompt: How does simultaneous activity change one connection?
  - answer: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
- Item:
  - prompt: What does this construction leave out?
  - answer: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.

## Representations

- Item:
  - kind: geometry
  - description: The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Presynaptic activity u. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: How does simultaneous activity change one connection?
  - limitations: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - evidence kind: constructed_example
  - example ref: math:example:hebbian-learning:case-1
- Item:
  - context: Boundary comparison
  - mapping: Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.
  - limitations: One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.
  - evidence kind: constructed_example
  - example ref: math:example:hebbian-learning:case-2

## Source Refs

- source:systems:hebb

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:hebb. [Gerstner et al. · Models of Hebbian learning](https://neuronaldynamics.epfl.ch/online/Ch19.S2.html). Locator: Rate-based local correlation rules and the need for bounds or other stabilizing terms.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
