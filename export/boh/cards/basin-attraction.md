---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:basin-attraction", "id": "math:concept:basin-attraction", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:basin-attraction", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "62cf2a30cf12baf3c5dd31574006c5fb48d20988323c2282a0a80fff7554914a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "b0a85a644bd26215f183f8427068668f068382e57dbb3f5098d009edd7ed9c5b"}, "purpose": "Which resting position will the mechanism approach?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "b0a85a644bd26215f183f8427068668f068382e57dbb3f5098d009edd7ed9c5b", "status": "draft", "title": "Basins of attraction", "topics": ["mathematics", "dynamics", "basins of attraction"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Basins of attraction

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:basin-attraction; revision 0.1.0-draft. Setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring. Expression: $\dot x=x-x^3,\quad x(t)=\frac{x_0}{\sqrt{x_0^2+(1-x_0^2)e^{-2t}}}.$. Conditions required for a defined value (a case may test their violation): One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

## Schema Version

0.1.0

## Id

math:concept:basin-attraction

## Slug

basin-attraction

## Type

concept

## Title

Basins of attraction

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

- basins of attraction

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which resting position will the mechanism approach?

## Meaning

Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.

## Prerequisites

- required:

- helpful:
  - math:concept:continuous-flow
  - math:concept:stability
  - math:concept:cusp-potential
- depth:


## Definition

- setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
- formal latex: \dot x=x-x^3,\quad x(t)=\frac{x_0}{\sqrt{x_0^2+(1-x_0^2)e^{-2t}}}.
- signature:
  - x₀: Starting position x₀; the declared input
  - t: Elapsed time t; the declared input
  - result: The primary reported quantity in position units.
- conditions:
  - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:flow

## Grammar

- pronunciation: Basins of attraction
- expression latex: \dot x=x-x^3,\quad x(t)=\frac{x_0}{\sqrt{x_0^2+(1-x_0^2)e^{-2t}}}.
- formation rule: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: x₀
    - role: Starting position x₀; the declared input
    - type: Declared input or result
  - Item:
    - token: t
    - role: Elapsed time t; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in position units.
    - type: Declared input or result
- ast:
  - id: ast:basin-attraction:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:initial
      - kind: variable
      - type: Declared model input
      - symbol: x₀
      - scope ref: scope:basin-attraction
    - Item:
      - id: n:time
      - kind: variable
      - type: Declared model input
      - symbol: t
      - scope ref: scope:basin-attraction
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
    - Item:
      - id: n:bound-initial
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:initial
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-initial
      - argument: n:time
  - scopes:
    - Item:
      - id: scope:basin-attraction
      - kind: modelExpression
      - free variables:
        - x₀
        - t
      - domain condition: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - x₀: initial
  - t: time
  - result: output

## Properties

- Item:
  - claim: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
  - conditions: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - derivation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:basin-attraction:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:continuous-flow
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Basins of attraction supplies a bounded connection to continuous flow.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:stability
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Basins of attraction supplies a bounded connection to stability.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:cusp-potential
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Basins of attraction supplies a bounded connection to cusp potential.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
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
  - conditions to check:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- Item:
  - id: math:example:basin-attraction:case-2
  - title: Change Starting position x₀ to -2
  - role: applied_model
  - question: Which resting position will the mechanism approach?
  - setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
  - assumptions:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - inputs:
    - initial: -2
    - time: 2
  - steps:
    - Item:
      - index: 1
      - expression: x₀ = -2, t = 2
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = x − x³
      - reason: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
    - Item:
      - index: 3
      - expression: Result ≈ -1.0069399461 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: -1.0069399461 position units
  - interpretation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: -1.0069399461174926
  - limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - preset:
    - initial: -2
    - time: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- Item:
  - id: math:example:basin-attraction:case-3
  - title: Change Starting position x₀ to 2
  - role: applied_model
  - question: Which resting position will the mechanism approach?
  - setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
  - assumptions:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - inputs:
    - initial: 2
    - time: 2
  - steps:
    - Item:
      - index: 1
      - expression: x₀ = 2, t = 2
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = x − x³
      - reason: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
    - Item:
      - index: 3
      - expression: Result ≈ 1.0069399461 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 1.0069399461 position units
  - interpretation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1.0069399461174926
  - limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - preset:
    - initial: 2
    - time: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- Item:
  - id: math:example:basin-attraction:case-4
  - title: Change Elapsed time t to 0
  - role: applied_model
  - question: Which resting position will the mechanism approach?
  - setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
  - assumptions:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - inputs:
    - initial: 0.3
    - time: 0
  - steps:
    - Item:
      - index: 1
      - expression: x₀ = 0.3, t = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = x − x³
      - reason: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
    - Item:
      - index: 3
      - expression: Result ≈ 0.3 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.3 position units
  - interpretation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.3
  - limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - preset:
    - initial: 0.3
    - time: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
- Item:
  - id: math:example:basin-attraction:case-5
  - title: Change Elapsed time t to 5
  - role: applied_model
  - question: Which resting position will the mechanism approach?
  - setting: Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.
  - assumptions:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - inputs:
    - initial: 0.3
    - time: 5
  - steps:
    - Item:
      - index: 1
      - expression: x₀ = 0.3, t = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = x − x³
      - reason: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
    - Item:
      - index: 3
      - expression: Result ≈ 0.9997705571 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.9997705571 position units
  - interpretation: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.9997705571230827
  - limits: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - preset:
    - initial: 0.3
    - time: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

## Interactive

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

## Prompts

- Item:
  - prompt: Which resting position will the mechanism approach?
  - answer: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
- Item:
  - prompt: What does this construction leave out?
  - answer: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.

## Representations

- Item:
  - kind: geometry
  - description: The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Starting position x₀. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Which resting position will the mechanism approach?
  - limitations: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - evidence kind: constructed_example
  - example ref: math:example:basin-attraction:case-1
- Item:
  - context: Boundary comparison
  - mapping: Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.
  - limitations: One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.
  - evidence kind: constructed_example
  - example ref: math:example:basin-attraction:case-2

## Source Refs

- source:systems:flow

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:flow. [OpenStax · Separable differential equations](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations). Locator: Exact separable autonomous scalar equations; the displayed families and algebraic solutions are original derivations.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
