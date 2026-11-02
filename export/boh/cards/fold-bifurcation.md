---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:fold-bifurcation", "id": "math:concept:fold-bifurcation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:fold-bifurcation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "36c5ac53a097da819a7a9df2c20f39abf437d057fb98e254a1f9c15343698c69"}, "purpose": "When do two balance points disappear?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "36c5ac53a097da819a7a9df2c20f39abf437d057fb98e254a1f9c15343698c69", "status": "draft", "title": "Fold bifurcations", "topics": ["mathematics", "dynamics", "fold bifurcations"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Fold bifurcations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:fold-bifurcation; revision 0.1.0-draft. Setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain. Expression: $\dot x=\mu-x^2,\quad x_*^2=\mu,\quad f\prime(x_*)=-2x_*.$. Conditions required for a defined value (a case may test their violation): A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

## Schema Version

0.1.0

## Id

math:concept:fold-bifurcation

## Slug

fold-bifurcation

## Type

concept

## Title

Fold bifurcations

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

- fold bifurcations

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

When do two balance points disappear?

## Meaning

Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.

## Prerequisites

- required:

- helpful:
  - math:concept:stability
  - math:concept:basin-attraction
- depth:


## Definition

- setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
- formal latex: \dot x=\mu-x^2,\quad x_*^2=\mu,\quad f\prime(x_*)=-2x_*.
- signature:
  - μ: Control parameter μ; the declared input
  - result: The primary reported quantity in equilibria.
- conditions:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:fold

## Grammar

- pronunciation: Fold bifurcations
- expression latex: \dot x=\mu-x^2,\quad x_*^2=\mu,\quad f\prime(x_*)=-2x_*.
- formation rule: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: μ
    - role: Control parameter μ; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in equilibria.
    - type: Declared input or result
- ast:
  - id: ast:fold-bifurcation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:mu
      - kind: variable
      - type: Declared model input
      - symbol: μ
      - scope ref: scope:fold-bifurcation
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:mu
  - scopes:
    - Item:
      - id: scope:fold-bifurcation
      - kind: modelExpression
      - free variables:
        - μ
      - domain condition: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - μ: mu
  - result: output

## Properties

- Item:
  - claim: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
  - conditions: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - derivation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:fold-bifurcation:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:stability
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Fold bifurcations supplies a bounded connection to stability.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:basin-attraction
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Fold bifurcations supplies a bounded connection to basin attraction.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:fold-bifurcation:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: When do two balance points disappear?
  - setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
  - assumptions:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - inputs:
    - mu: 1
  - steps:
    - Item:
      - index: 1
      - expression: μ = 1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = μ − x²
      - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - index: 3
      - expression: Result ≈ 2 equilibria
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 equilibria
  - interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - preset:
    - mu: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- Item:
  - id: math:example:fold-bifurcation:case-2
  - title: Change Control parameter μ to -1
  - role: applied_model
  - question: When do two balance points disappear?
  - setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
  - assumptions:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - inputs:
    - mu: -1
  - steps:
    - Item:
      - index: 1
      - expression: μ = -1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = μ − x²
      - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - index: 3
      - expression: Result ≈ 0 equilibria
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 0 equilibria
  - interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - preset:
    - mu: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- Item:
  - id: math:example:fold-bifurcation:case-3
  - title: Meet at the fold: μ = 0
  - role: applied_model
  - question: When do two balance points disappear?
  - setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
  - assumptions:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - inputs:
    - mu: 0
  - steps:
    - Item:
      - index: 1
      - expression: μ = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = μ − x²
      - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - index: 3
      - expression: Result ≈ 1 equilibria
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 equilibria
  - interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - preset:
    - mu: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- Item:
  - id: math:example:fold-bifurcation:case-4
  - title: Change Control parameter μ to 2
  - role: applied_model
  - question: When do two balance points disappear?
  - setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
  - assumptions:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - inputs:
    - mu: 2
  - steps:
    - Item:
      - index: 1
      - expression: μ = 2
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = μ − x²
      - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - index: 3
      - expression: Result ≈ 2 equilibria
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 equilibria
  - interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - preset:
    - mu: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- Item:
  - id: math:example:fold-bifurcation:case-5
  - title: Change Control parameter μ to -0.25
  - role: applied_model
  - question: When do two balance points disappear?
  - setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
  - assumptions:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - inputs:
    - mu: -0.25
  - steps:
    - Item:
      - index: 1
      - expression: μ = -0.25
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: dx/dt = μ − x²
      - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
    - Item:
      - index: 3
      - expression: Result ≈ 0 equilibria
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 0 equilibria
  - interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - preset:
    - mu: -0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

## Interactive

- component id: component:fold-bifurcation
- renderer id: fold-bifurcation-visual-model
- renderer version: 1
- model id: fold-bifurcation-visual-model
- model revision: 1
- expression id: ast:fold-bifurcation:expression
- interaction status: implemented
- description: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
- controls:
  - Item:
    - id: mu
    - type: number
    - default: 1
    - min: -1
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - mu: 1
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: -1
    - status: valid
    - output: 0
  - Item:
    - input:
      - mu: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - mu: 2
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: -0.25
    - status: valid
    - output: 0
  - Item:
    - input:
      - mu: 1.25
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: 3
    - status: invalid_parameters
- compute: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
- numeric tolerance: 1e-10
- invariants:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
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
  - prompt: When do two balance points disappear?
  - answer: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
- Item:
  - prompt: What does this construction leave out?
  - answer: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

## Representations

- Item:
  - kind: geometry
  - description: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Control parameter μ. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: When do two balance points disappear?
  - limitations: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - evidence kind: constructed_example
  - example ref: math:example:fold-bifurcation:case-1
- Item:
  - context: Boundary comparison
  - mapping: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
  - limitations: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - evidence kind: constructed_example
  - example ref: math:example:fold-bifurcation:case-2

## Source Refs

- source:systems:fold

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:fold. [Kuznetsov · Saddle-node bifurcation](https://www.scholarpedia.org/article/Saddle-node). Locator: One-dimensional normal forms and simple-root stability. Our sign convention is dx/dt=μ−x².. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
