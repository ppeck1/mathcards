---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:cusp-potential", "id": "math:concept:cusp-potential", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:cusp-potential", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "61690f4e48dae64780490c30808bae1bcd9b87b9781cfffae281ef1af26154b4"}, "purpose": "How does tilting a two-well landscape change its resting points?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "61690f4e48dae64780490c30808bae1bcd9b87b9781cfffae281ef1af26154b4", "status": "draft", "title": "Cusp potential and competing wells", "topics": ["mathematics", "dynamics", "cusp potential and competing wells"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Cusp potential and competing wells

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:cusp-potential; revision 0.1.0-draft. Setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells. Expression: $V(x)=\frac{x^4}{4}-\frac{a x^2}{2}-b x,\quad V\prime(x)=x^3-a x-b.$. Conditions required for a defined value (a case may test their violation): Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

## Schema Version

0.1.0

## Id

math:concept:cusp-potential

## Slug

cusp-potential

## Type

concept

## Title

Cusp potential and competing wells

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

- cusp potential and competing wells

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does tilting a two-well landscape change its resting points?

## Meaning

Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².

## Prerequisites

- required:
  []
- helpful:
  - math:concept:fold-bifurcation
  - math:concept:basin-attraction
  - math:concept:derivative
- depth:
  []

## Definition

- setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
- formal latex: V(x)=\frac{x^4}{4}-\frac{a x^2}{2}-b x,\quad V\prime(x)=x^3-a x-b.
- signature:
  - b: Tilt b; the declared input
  - a: Well parameter a; the declared input
  - result: The primary reported quantity in stationary points.
- conditions:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:cusp

## Grammar

- pronunciation: Cusp potential and competing wells
- expression latex: V(x)=\frac{x^4}{4}-\frac{a x^2}{2}-b x,\quad V\prime(x)=x^3-a x-b.
- formation rule: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: b
    - role: Tilt b; the declared input
    - type: Declared input or result
  - Item:
    - token: a
    - role: Well parameter a; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in stationary points.
    - type: Declared input or result
- ast:
  - id: ast:cusp-potential:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:bias
      - kind: variable
      - type: Declared model input
      - symbol: b
      - scope ref: scope:cusp-potential
    - Item:
      - id: n:shape
      - kind: variable
      - type: Declared model input
      - symbol: a
      - scope ref: scope:cusp-potential
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - id: n:bound-bias
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:bias
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-bias
      - argument: n:shape
  - scopes:
    - Item:
      - id: scope:cusp-potential
      - kind: modelExpression
      - free variables:
        - b
        - a
      - domain condition: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - b: bias
  - a: shape
  - result: output

## Properties

- Item:
  - claim: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
  - conditions: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - derivation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:cusp-potential:case-1

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
  - target: math:concept:fold-bifurcation
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Cusp potential and competing wells supplies a bounded connection to fold bifurcation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:basin-attraction
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Cusp potential and competing wells supplies a bounded connection to basin attraction.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:derivative
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Cusp potential and competing wells supplies a bounded connection to derivative.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:cusp-potential:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: How does tilting a two-well landscape change its resting points?
  - setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
  - assumptions:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - inputs:
    - bias: 0
    - shape: 1
  - steps:
    - Item:
      - index: 1
      - expression: b = 0, a = 1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: V(x) = x⁴/4 − a x²/2 − b x
      - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - index: 3
      - expression: Result ≈ 3 stationary points
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 3 stationary points
  - interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 3
  - limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - preset:
    - bias: 0
    - shape: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- Item:
  - id: math:example:cusp-potential:case-2
  - title: Change Tilt b to -1
  - role: applied_model
  - question: How does tilting a two-well landscape change its resting points?
  - setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
  - assumptions:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - inputs:
    - bias: -1
    - shape: 1
  - steps:
    - Item:
      - index: 1
      - expression: b = -1, a = 1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: V(x) = x⁴/4 − a x²/2 − b x
      - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - index: 3
      - expression: Result ≈ 1 stationary points
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 stationary points
  - interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - preset:
    - bias: -1
    - shape: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- Item:
  - id: math:example:cusp-potential:case-3
  - title: Inspect the flat quartic minimum
  - role: applied_model
  - question: How does tilting a two-well landscape change its resting points?
  - setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
  - assumptions:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - inputs:
    - shape: 0
    - bias: 0
  - steps:
    - Item:
      - index: 1
      - expression: a = 0, b = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: V(x) = x⁴/4 − a x²/2 − b x
      - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - index: 3
      - expression: Result ≈ 1 stationary points
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 stationary points
  - interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - preset:
    - shape: 0
    - bias: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- Item:
  - id: math:example:cusp-potential:case-4
  - title: Change Tilt b to 1
  - role: applied_model
  - question: How does tilting a two-well landscape change its resting points?
  - setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
  - assumptions:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - inputs:
    - bias: 1
    - shape: 1
  - steps:
    - Item:
      - index: 1
      - expression: b = 1, a = 1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: V(x) = x⁴/4 − a x²/2 − b x
      - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - index: 3
      - expression: Result ≈ 1 stationary points
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 stationary points
  - interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - preset:
    - bias: 1
    - shape: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- Item:
  - id: math:example:cusp-potential:case-5
  - title: Inspect the flat quartic minimum
  - role: applied_model
  - question: How does tilting a two-well landscape change its resting points?
  - setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
  - assumptions:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - inputs:
    - bias: 0
    - shape: 0
  - steps:
    - Item:
      - index: 1
      - expression: b = 0, a = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: V(x) = x⁴/4 − a x²/2 − b x
      - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
    - Item:
      - index: 3
      - expression: Result ≈ 1 stationary points
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 stationary points
  - interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - preset:
    - bias: 0
    - shape: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

## Interactive

- component id: component:cusp-potential
- renderer id: cusp-potential-visual-model
- renderer version: 1
- model id: cusp-potential-visual-model
- model revision: 1
- expression id: ast:cusp-potential:expression
- interaction status: implemented
- description: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
- controls:
  - Item:
    - id: bias
    - type: number
    - default: 0
    - min: -1
    - max: 1
    - step: 0.05
  - Item:
    - id: shape
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - bias: 0
      - shape: 1
    - status: valid
    - output: 3
  - Item:
    - input:
      - bias: -1
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - shape: 0
      - bias: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 1
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0
      - shape: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0
      - shape: 2
    - status: valid
    - output: 3
  - Item:
    - input:
      - bias: -0.5
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0.5
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 2
      - shape: 1
    - status: invalid_parameters
- compute: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
- numeric tolerance: 1e-10
- invariants:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
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
  - prompt: How does tilting a two-well landscape change its resting points?
  - answer: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
- Item:
  - prompt: What does this construction leave out?
  - answer: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

## Representations

- Item:
  - kind: geometry
  - description: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Tilt b. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: How does tilting a two-well landscape change its resting points?
  - limitations: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - evidence kind: constructed_example
  - example ref: math:example:cusp-potential:case-1
- Item:
  - context: Boundary comparison
  - mapping: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
  - limitations: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - evidence kind: constructed_example
  - example ref: math:example:cusp-potential:case-2

## Source Refs

- source:systems:cusp

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:cusp. [Kuznetsov · Cusp bifurcation](https://www.scholarpedia.org/article/Cusp_bifurcation). Locator: Two-parameter cubic equilibrium normal form; the specific potential and scene are original.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
