---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:continuous-flow", "id": "math:concept:continuous-flow", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:continuous-flow", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "266e39b8bb89bbf4455547ac0cc09be68e85380dbf056c8a4ea1dfa7270e5622"}, "purpose": "How does a continuous correction settle?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "266e39b8bb89bbf4455547ac0cc09be68e85380dbf056c8a4ea1dfa7270e5622", "status": "draft", "title": "Continuous flows", "topics": ["mathematics", "dynamics", "continuous flows"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Continuous flows

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:continuous-flow; revision 0.1.0-draft. Setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement. Expression: $\frac{dx}{dt}=-a x,\quad x(t)=x_0 e^{-a t}.$. Conditions required for a defined value (a case may test their violation): The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

## Schema Version

0.1.0

## Id

math:concept:continuous-flow

## Slug

continuous-flow

## Type

concept

## Title

Continuous flows

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

- continuous flows

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does a continuous correction settle?

## Meaning

Multiply the initial displacement by the exponential response factor.

## Prerequisites

- required:

- helpful:
  - math:concept:vector-field
  - math:concept:stability
- depth:


## Definition

- setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
- formal latex: \frac{dx}{dt}=-a x,\quad x(t)=x_0 e^{-a t}.
- signature:
  - t: Elapsed time t; the declared input
  - x₀: Starting displacement x₀; the declared input
  - a: Return rate a; the declared input
  - result: The primary reported quantity in position units.
- conditions:
  - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:flow

## Grammar

- pronunciation: Continuous flows
- expression latex: \frac{dx}{dt}=-a x,\quad x(t)=x_0 e^{-a t}.
- formation rule: Multiply the initial displacement by the exponential response factor.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: t
    - role: Elapsed time t; the declared input
    - type: Declared input or result
  - Item:
    - token: x₀
    - role: Starting displacement x₀; the declared input
    - type: Declared input or result
  - Item:
    - token: a
    - role: Return rate a; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in position units.
    - type: Declared input or result
- ast:
  - id: ast:continuous-flow:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - type: Declared model input
      - symbol: t
      - scope ref: scope:continuous-flow
    - Item:
      - id: n:initial
      - kind: variable
      - type: Declared model input
      - symbol: x₀
      - scope ref: scope:continuous-flow
    - Item:
      - id: n:rate
      - kind: variable
      - type: Declared model input
      - symbol: a
      - scope ref: scope:continuous-flow
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Multiply the initial displacement by the exponential response factor.
    - Item:
      - id: n:bound-time
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:time
    - Item:
      - id: n:bound-initial
      - kind: apply
      - type: Declared result
      - function: n:bound-time
      - argument: n:initial
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-initial
      - argument: n:rate
  - scopes:
    - Item:
      - id: scope:continuous-flow
      - kind: modelExpression
      - free variables:
        - t
        - x₀
        - a
      - domain condition: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - t: time
  - x₀: initial
  - a: rate
  - result: output

## Properties

- Item:
  - claim: Multiply the initial displacement by the exponential response factor.
  - conditions: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - derivation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:continuous-flow:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:vector-field
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Continuous flows supplies a bounded connection to vector field.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:stability
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Continuous flows supplies a bounded connection to stability.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:continuous-flow:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: How does a continuous correction settle?
  - setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
  - assumptions:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - inputs:
    - time: 1
    - initial: 2
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1, x₀ = 2, a = 0.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: x(t) = x₀ exp(−a t)
      - reason: Multiply the initial displacement by the exponential response factor.
    - Item:
      - index: 3
      - expression: Result ≈ 1.2130613194 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 1.2130613194 position units
  - interpretation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1.2130613194252668
  - limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - preset:
    - time: 1
    - initial: 2
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- Item:
  - id: math:example:continuous-flow:case-2
  - title: Change Elapsed time t to 0
  - role: applied_model
  - question: How does a continuous correction settle?
  - setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
  - assumptions:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - inputs:
    - time: 0
    - initial: 2
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 0, x₀ = 2, a = 0.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: x(t) = x₀ exp(−a t)
      - reason: Multiply the initial displacement by the exponential response factor.
    - Item:
      - index: 3
      - expression: Result ≈ 2.0 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 2.0 position units
  - interpretation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2.0
  - limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - preset:
    - time: 0
    - initial: 2
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- Item:
  - id: math:example:continuous-flow:case-3
  - title: Change Elapsed time t to 5
  - role: applied_model
  - question: How does a continuous correction settle?
  - setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
  - assumptions:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - inputs:
    - time: 5
    - initial: 2
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 5, x₀ = 2, a = 0.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: x(t) = x₀ exp(−a t)
      - reason: Multiply the initial displacement by the exponential response factor.
    - Item:
      - index: 3
      - expression: Result ≈ 0.1641699972 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.1641699972 position units
  - interpretation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.1641699972477976
  - limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - preset:
    - time: 5
    - initial: 2
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- Item:
  - id: math:example:continuous-flow:case-4
  - title: Change Starting displacement x₀ to -3
  - role: applied_model
  - question: How does a continuous correction settle?
  - setting: The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.
  - assumptions:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - inputs:
    - time: 1
    - initial: -3
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1, x₀ = -3, a = 0.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: x(t) = x₀ exp(−a t)
      - reason: Multiply the initial displacement by the exponential response factor.
    - Item:
      - index: 3
      - expression: Result ≈ -1.8195919791 position units
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: -1.8195919791 position units
  - interpretation: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: -1.8195919791379003
  - limits: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - preset:
    - time: 1
    - initial: -3
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
- Item:
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
  - conditions to check:
    - The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

## Interactive

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

## Prompts

- Item:
  - prompt: How does a continuous correction settle?
  - answer: Multiply the initial displacement by the exponential response factor.
- Item:
  - prompt: What does this construction leave out?
  - answer: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.

## Representations

- Item:
  - kind: geometry
  - description: The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Elapsed time t. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Multiply the initial displacement by the exponential response factor.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: How does a continuous correction settle?
  - limitations: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - evidence kind: constructed_example
  - example ref: math:example:continuous-flow:case-1
- Item:
  - context: Boundary comparison
  - mapping: Multiply the initial displacement by the exponential response factor.
  - limitations: The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.
  - evidence kind: constructed_example
  - example ref: math:example:continuous-flow:case-2

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
