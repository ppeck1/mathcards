---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:lattice-distributivity", "id": "math:concept:lattice-distributivity", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:lattice-distributivity", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "591e1b8d12cc3242e8ede857f477cf39f3162021e9341dd4e3af204aa50ff97e"}, "purpose": "Do two ways of selecting tools agree?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "591e1b8d12cc3242e8ede857f477cf39f3162021e9341dd4e3af204aa50ff97e", "status": "draft", "title": "Distributive lattices", "topics": ["mathematics", "logic", "distributive lattices"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Distributive lattices

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:lattice-distributivity; revision 0.1.0-draft. Setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools. Expression: $A\wedge(B\vee C)=(A\wedge B)\vee(A\wedge C).$. Conditions required for a defined value (a case may test their violation): This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.

## Schema Version

0.1.0

## Id

math:concept:lattice-distributivity

## Slug

lattice-distributivity

## Type

concept

## Title

Distributive lattices

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

- distributive lattices

## Branches

- logic

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Do two ways of selecting tools agree?

## Meaning

Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:meet-join
  - math:concept:equivalence
- depth:
  []

## Definition

- setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
- formal latex: A\wedge(B\vee C)=(A\wedge B)\vee(A\wedge C).
- signature:
  - A: First collection A; a collection choice
  - B: Second collection B; a collection choice
  - C: Third collection C; a collection choice
  - result: The primary reported quantity in tools.
- conditions:
  - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:order

## Grammar

- pronunciation: Distributive lattices
- expression latex: A\wedge(B\vee C)=(A\wedge B)\vee(A\wedge C).
- formation rule: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
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
    - token: C
    - role: Third collection C; a collection choice
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in tools.
    - type: Declared input or result
- ast:
  - id: ast:lattice-distributivity:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - type: Declared model input
      - symbol: A
      - scope ref: scope:lattice-distributivity
    - Item:
      - id: n:b
      - kind: variable
      - type: Declared model input
      - symbol: B
      - scope ref: scope:lattice-distributivity
    - Item:
      - id: n:c
      - kind: variable
      - type: Declared model input
      - symbol: C
      - scope ref: scope:lattice-distributivity
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - id: n:bound-a
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:a
    - Item:
      - id: n:bound-b
      - kind: apply
      - type: Declared result
      - function: n:bound-a
      - argument: n:b
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-b
      - argument: n:c
  - scopes:
    - Item:
      - id: scope:lattice-distributivity
      - kind: modelExpression
      - free variables:
        - A
        - B
        - C
      - domain condition: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - A: a
  - B: b
  - C: c
  - result: output

## Properties

- Item:
  - claim: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
  - conditions: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - derivation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:lattice-distributivity:case-1

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
  - target: math:concept:meet-join
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Distributive lattices supplies a bounded connection to meet join.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:equivalence
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Distributive lattices supplies a bounded connection to equivalence.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:lattice-distributivity:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Do two ways of selecting tools agree?
  - setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
  - assumptions:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - inputs:
    - a: 3
    - b: 5
    - c: 6
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, brush}; C = {ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
      - reason: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - index: 3
      - expression: Result ≈ 2 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 tools
  - interpretation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - preset:
    - a: 3
    - b: 5
    - c: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- Item:
  - id: math:example:lattice-distributivity:case-2
  - title: Choose A = {}
  - role: applied_model
  - question: Do two ways of selecting tools agree?
  - setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
  - assumptions:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - inputs:
    - a: 0
    - b: 5
    - c: 6
  - steps:
    - Item:
      - index: 1
      - expression: A = {}; B = {lamp, brush}; C = {ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
      - reason: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - index: 3
      - expression: Result ≈ 0 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 0 tools
  - interpretation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - preset:
    - a: 0
    - b: 5
    - c: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- Item:
  - id: math:example:lattice-distributivity:case-3
  - title: Choose A = {lamp, ruler, brush}
  - role: applied_model
  - question: Do two ways of selecting tools agree?
  - setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
  - assumptions:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - inputs:
    - a: 7
    - b: 5
    - c: 6
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler, brush}; B = {lamp, brush}; C = {ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
      - reason: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - index: 3
      - expression: Result ≈ 3 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 3 tools
  - interpretation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 3
  - limits: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - preset:
    - a: 7
    - b: 5
    - c: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- Item:
  - id: math:example:lattice-distributivity:case-4
  - title: Choose B = {}
  - role: applied_model
  - question: Do two ways of selecting tools agree?
  - setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
  - assumptions:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - inputs:
    - a: 3
    - b: 0
    - c: 6
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {}; C = {ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
      - reason: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - index: 3
      - expression: Result ≈ 1 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 tool
  - interpretation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - preset:
    - a: 3
    - b: 0
    - c: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
- Item:
  - id: math:example:lattice-distributivity:case-5
  - title: Choose B = {lamp, ruler, brush}
  - role: applied_model
  - question: Do two ways of selecting tools agree?
  - setting: Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.
  - assumptions:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - inputs:
    - a: 3
    - b: 7
    - c: 6
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, ruler, brush}; C = {ruler, brush}
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
      - reason: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
    - Item:
      - index: 3
      - expression: Result ≈ 2 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 tools
  - interpretation: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - preset:
    - a: 3
    - b: 7
    - c: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.

## Interactive

- component id: component:lattice-distributivity
- renderer id: lattice-distributivity-visual-model
- renderer version: 1
- model id: lattice-distributivity-visual-model
- model revision: 1
- expression id: ast:lattice-distributivity:expression
- interaction status: implemented
- description: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
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
  - Item:
    - id: c
    - type: number
    - default: 6
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
      - c: 6
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 0
      - b: 5
      - c: 6
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 7
      - b: 5
      - c: 6
    - status: valid
    - output: 3
  - Item:
    - input:
      - a: 3
      - b: 0
      - c: 6
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 3
      - b: 7
      - c: 6
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 3
      - b: 5
      - c: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 3
      - b: 5
      - c: 7
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 2
      - b: 5
      - c: 6
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 5
      - b: 5
      - c: 6
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 8
      - b: 5
      - c: 6
    - status: invalid_parameters
  - Item:
    - input:
      - a: 0.5
      - b: 5
      - c: 6
    - status: invalid_parameters
- compute: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
- numeric tolerance: 1e-10
- invariants:
  - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
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
  - prompt: Do two ways of selecting tools agree?
  - answer: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
- Item:
  - prompt: What does this construction leave out?
  - answer: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.

## Representations

- Item:
  - kind: geometry
  - description: The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against First collection A. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Do two ways of selecting tools agree?
  - limitations: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - evidence kind: constructed_example
  - example ref: math:example:lattice-distributivity:case-1
- Item:
  - context: Boundary comparison
  - mapping: Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.
  - limitations: This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.
  - evidence kind: constructed_example
  - example ref: math:example:lattice-distributivity:case-2

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
