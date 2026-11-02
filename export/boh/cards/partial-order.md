---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:partial-order", "id": "math:concept:partial-order", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:partial-order", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1c0c6310526f92bf369523c8a89e7ebbd7abca018706fee763809717fd4c6fa9"}, "purpose": "Can two tool kits always be ranked?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1c0c6310526f92bf369523c8a89e7ebbd7abca018706fee763809717fd4c6fa9", "status": "draft", "title": "Partial orders", "topics": ["mathematics", "logic", "partial orders"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Partial orders

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:partial-order; revision 0.1.0-draft. Setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools. Expression: $A\preceq B\ \Longleftrightarrow\ A\subseteq B.$. Conditions required for a defined value (a case may test their violation): All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

## Schema Version

0.1.0

## Id

math:concept:partial-order

## Slug

partial-order

## Type

concept

## Title

Partial orders

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

- partial orders

## Branches

- logic

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can two tool kits always be ranked?

## Meaning

Compare element membership, not the integer encoding of the kit.

## Prerequisites

- required:

- helpful:
  - math:concept:set
  - math:concept:meet-join
  - math:concept:relation
- depth:


## Definition

- setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
- formal latex: A\preceq B\ \Longleftrightarrow\ A\subseteq B.
- signature:
  - A: First collection A; a collection choice
  - B: Second collection B; a collection choice
  - result: The primary reported quantity in truth value.
- conditions:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:order

## Grammar

- pronunciation: Partial orders
- expression latex: A\preceq B\ \Longleftrightarrow\ A\subseteq B.
- formation rule: Compare element membership, not the integer encoding of the kit.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: A
    - role: First collection A; a collection choice
    - type: Declared input or result
  - Item:
    - token: B
    - role: Second collection B; a collection choice
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in truth value.
    - type: Declared input or result
- ast:
  - id: ast:partial-order:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - type: Declared model input
      - symbol: A
      - scope ref: scope:partial-order
    - Item:
      - id: n:b
      - kind: variable
      - type: Declared model input
      - symbol: B
      - scope ref: scope:partial-order
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Compare element membership, not the integer encoding of the kit.
    - Item:
      - id: n:bound-a
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:a
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-a
      - argument: n:b
  - scopes:
    - Item:
      - id: scope:partial-order
      - kind: modelExpression
      - free variables:
        - A
        - B
      - domain condition: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - A: a
  - B: b
  - result: output

## Properties

- Item:
  - claim: Compare element membership, not the integer encoding of the kit.
  - conditions: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - derivation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:partial-order:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Partial orders supplies a bounded connection to set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:meet-join
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Partial orders supplies a bounded connection to meet join.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:relation
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Partial orders supplies a bounded connection to relation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:partial-order:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Can two tool kits always be ranked?
  - setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
  - assumptions:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - inputs:
    - a: 3
    - b: 5
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ≤ B exactly when A ⊆ B
      - reason: Compare element membership, not the integer encoding of the kit.
    - Item:
      - index: 3
      - expression: Result ≈ 0 truth value
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: False: A is not included in B
  - interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - preset:
    - a: 3
    - b: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- Item:
  - id: math:example:partial-order:case-2
  - title: Choose A = {}
  - role: applied_model
  - question: Can two tool kits always be ranked?
  - setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
  - assumptions:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - inputs:
    - a: 0
    - b: 5
  - steps:
    - Item:
      - index: 1
      - expression: A = {}; B = {lamp, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ≤ B exactly when A ⊆ B
      - reason: Compare element membership, not the integer encoding of the kit.
    - Item:
      - index: 3
      - expression: Result ≈ 1 truth value
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: True: A is included in B
  - interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - preset:
    - a: 0
    - b: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- Item:
  - id: math:example:partial-order:case-3
  - title: Choose A = {lamp, ruler, brush}
  - role: applied_model
  - question: Can two tool kits always be ranked?
  - setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
  - assumptions:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - inputs:
    - a: 7
    - b: 5
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler, brush}; B = {lamp, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ≤ B exactly when A ⊆ B
      - reason: Compare element membership, not the integer encoding of the kit.
    - Item:
      - index: 3
      - expression: Result ≈ 0 truth value
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: False: A is not included in B
  - interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - preset:
    - a: 7
    - b: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- Item:
  - id: math:example:partial-order:case-4
  - title: Choose B = {}
  - role: applied_model
  - question: Can two tool kits always be ranked?
  - setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
  - assumptions:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - inputs:
    - a: 3
    - b: 0
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ≤ B exactly when A ⊆ B
      - reason: Compare element membership, not the integer encoding of the kit.
    - Item:
      - index: 3
      - expression: Result ≈ 0 truth value
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: False: A is not included in B
  - interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - preset:
    - a: 3
    - b: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- Item:
  - id: math:example:partial-order:case-5
  - title: Choose B = {lamp, ruler, brush}
  - role: applied_model
  - question: Can two tool kits always be ranked?
  - setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
  - assumptions:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - inputs:
    - a: 3
    - b: 7
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ≤ B exactly when A ⊆ B
      - reason: Compare element membership, not the integer encoding of the kit.
    - Item:
      - index: 3
      - expression: Result ≈ 1 truth value
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: True: A is included in B
  - interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - preset:
    - a: 3
    - b: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

## Interactive

- component id: component:partial-order
- renderer id: partial-order-visual-model
- renderer version: 1
- model id: partial-order-visual-model
- model revision: 1
- expression id: ast:partial-order:expression
- interaction status: implemented
- description: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
- controls:
  - Item:
    - id: a
    - type: number
    - default: 3
    - min: 0
    - max: 7
    - step: 1
    - value labels:
      - 0: {}
      - 1: {lamp}
      - 2: {ruler}
      - 3: {lamp, ruler}
      - 4: {brush}
      - 5: {lamp, brush}
      - 6: {ruler, brush}
      - 7: {lamp, ruler, brush}
  - Item:
    - id: b
    - type: number
    - default: 5
    - min: 0
    - max: 7
    - step: 1
    - value labels:
      - 0: {}
      - 1: {lamp}
      - 2: {ruler}
      - 3: {lamp, ruler}
      - 4: {brush}
      - 5: {lamp, brush}
      - 6: {ruler, brush}
      - 7: {lamp, ruler, brush}
- expected cases:
  - Item:
    - input:
      - a: 3
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 0
      - b: 5
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 7
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: 7
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 2
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 5
      - b: 5
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 8
      - b: 5
    - status: invalid_parameters
  - Item:
    - input:
      - a: 0.5
      - b: 5
    - status: invalid_parameters
- compute: Compare element membership, not the integer encoding of the kit.
- numeric tolerance: 1e-10
- invariants:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
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
  - prompt: Can two tool kits always be ranked?
  - answer: Compare element membership, not the integer encoding of the kit.
- Item:
  - prompt: What does this construction leave out?
  - answer: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

## Representations

- Item:
  - kind: geometry
  - description: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against First collection A. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Compare element membership, not the integer encoding of the kit.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Can two tool kits always be ranked?
  - limitations: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - evidence kind: constructed_example
  - example ref: math:example:partial-order:case-1
- Item:
  - context: Boundary comparison
  - mapping: Compare element membership, not the integer encoding of the kit.
  - limitations: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - evidence kind: constructed_example
  - example ref: math:example:partial-order:case-2

## Source Refs

- source:systems:order

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:order. [Doerr and Levasseur · Lattices](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/13:_Boolean_Algebra/13.02:_Lattices). Locator: Lattice operations and distributivity; no exact-edition Grätzer coverage is asserted.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
