---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:meet-join", "id": "math:concept:meet-join", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:meet-join", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9a84fd4abff30ad0b44cdbc7211fa42fe1c28f7851df756ff476620c69a72699"}, "purpose": "Which tools are shared, and which are available together?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9a84fd4abff30ad0b44cdbc7211fa42fe1c28f7851df756ff476620c69a72699", "status": "draft", "title": "Meet and join", "topics": ["mathematics", "logic", "meet and join"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Meet and join

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:meet-join; revision 0.1.0-draft. Setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram. Expression: $A\wedge B=A\cap B,\quad A\vee B=A\cup B.$. Conditions required for a defined value (a case may test their violation): In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.

## Schema Version

0.1.0

## Id

math:concept:meet-join

## Slug

meet-join

## Type

concept

## Title

Meet and join

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

- meet and join

## Branches

- logic

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which tools are shared, and which are available together?

## Meaning

Take the intersection for meet or the union for join, then count selected tools.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:partial-order
  - math:concept:set
  - math:concept:lattice-distributivity
- depth:
  []

## Definition

- setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
- formal latex: A\wedge B=A\cap B,\quad A\vee B=A\cup B.
- signature:
  - A: First collection A; a collection choice
  - B: Second collection B; a collection choice
  - operation: Lattice operation; the declared input
  - result: The primary reported quantity in tools.
- conditions:
  - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:order

## Grammar

- pronunciation: Meet and join
- expression latex: A\wedge B=A\cap B,\quad A\vee B=A\cup B.
- formation rule: Take the intersection for meet or the union for join, then count selected tools.
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
    - token: operation
    - role: Lattice operation; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in tools.
    - type: Declared input or result
- ast:
  - id: ast:meet-join:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - type: Declared model input
      - symbol: A
      - scope ref: scope:meet-join
    - Item:
      - id: n:b
      - kind: variable
      - type: Declared model input
      - symbol: B
      - scope ref: scope:meet-join
    - Item:
      - id: n:operation
      - kind: variable
      - type: Declared model input
      - symbol: operation
      - scope ref: scope:meet-join
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Take the intersection for meet or the union for join, then count selected tools.
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
      - argument: n:operation
  - scopes:
    - Item:
      - id: scope:meet-join
      - kind: modelExpression
      - free variables:
        - A
        - B
        - operation
      - domain condition: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - A: a
  - B: b
  - operation: operation
  - result: output

## Properties

- Item:
  - claim: Take the intersection for meet or the union for join, then count selected tools.
  - conditions: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - derivation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:meet-join:case-1

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
  - target: math:concept:partial-order
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Meet and join supplies a bounded connection to partial order.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Meet and join supplies a bounded connection to set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:lattice-distributivity
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Meet and join supplies a bounded connection to lattice distributivity.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:meet-join:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Which tools are shared, and which are available together?
  - setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
  - assumptions:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - inputs:
    - a: 3
    - b: 5
    - operation: meet
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, brush}; operation = meet
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ B = A ∩ B; A ∨ B = A ∪ B
      - reason: Take the intersection for meet or the union for join, then count selected tools.
    - Item:
      - index: 3
      - expression: Result ≈ 1 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 1 tool
  - interpretation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1
  - limits: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - preset:
    - a: 3
    - b: 5
    - operation: meet
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- Item:
  - id: math:example:meet-join:case-2
  - title: Choose A = {}
  - role: applied_model
  - question: Which tools are shared, and which are available together?
  - setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
  - assumptions:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - inputs:
    - a: 0
    - b: 5
    - operation: meet
  - steps:
    - Item:
      - index: 1
      - expression: A = {}; B = {lamp, brush}; operation = meet
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ B = A ∩ B; A ∨ B = A ∪ B
      - reason: Take the intersection for meet or the union for join, then count selected tools.
    - Item:
      - index: 3
      - expression: Result ≈ 0 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 0 tools
  - interpretation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - preset:
    - a: 0
    - b: 5
    - operation: meet
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- Item:
  - id: math:example:meet-join:case-3
  - title: Choose A = {lamp, ruler, brush}
  - role: applied_model
  - question: Which tools are shared, and which are available together?
  - setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
  - assumptions:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - inputs:
    - a: 7
    - b: 5
    - operation: meet
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler, brush}; B = {lamp, brush}; operation = meet
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ B = A ∩ B; A ∨ B = A ∪ B
      - reason: Take the intersection for meet or the union for join, then count selected tools.
    - Item:
      - index: 3
      - expression: Result ≈ 2 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 tools
  - interpretation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - preset:
    - a: 7
    - b: 5
    - operation: meet
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- Item:
  - id: math:example:meet-join:case-4
  - title: Choose B = {}
  - role: applied_model
  - question: Which tools are shared, and which are available together?
  - setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
  - assumptions:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - inputs:
    - a: 3
    - b: 0
    - operation: meet
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {}; operation = meet
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ B = A ∩ B; A ∨ B = A ∪ B
      - reason: Take the intersection for meet or the union for join, then count selected tools.
    - Item:
      - index: 3
      - expression: Result ≈ 0 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 0 tools
  - interpretation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0
  - limits: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - preset:
    - a: 3
    - b: 0
    - operation: meet
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
- Item:
  - id: math:example:meet-join:case-5
  - title: Choose B = {lamp, ruler, brush}
  - role: applied_model
  - question: Which tools are shared, and which are available together?
  - setting: The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.
  - assumptions:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - inputs:
    - a: 3
    - b: 7
    - operation: meet
  - steps:
    - Item:
      - index: 1
      - expression: A = {lamp, ruler}; B = {lamp, ruler, brush}; operation = meet
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: A ∧ B = A ∩ B; A ∨ B = A ∪ B
      - reason: Take the intersection for meet or the union for join, then count selected tools.
    - Item:
      - index: 3
      - expression: Result ≈ 2 tools
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - exact: 2 tools
  - interpretation: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2
  - limits: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - preset:
    - a: 3
    - b: 7
    - operation: meet
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.

## Interactive

- component id: component:meet-join
- renderer id: meet-join-visual-model
- renderer version: 1
- model id: meet-join-visual-model
- model revision: 1
- expression id: ast:meet-join:expression
- interaction status: implemented
- description: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
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
    - id: operation
    - type: enum
    - default: meet
    - values:
      - meet
      - join
    - value labels:
      - meet: Meet · shared tools
      - join: Join · combined tools
- expected cases:
  - Item:
    - input:
      - a: 3
      - b: 5
      - operation: meet
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 0
      - b: 5
      - operation: meet
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 7
      - b: 5
      - operation: meet
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 3
      - b: 0
      - operation: meet
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: 7
      - operation: meet
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 3
      - b: 5
      - operation: join
    - status: valid
    - output: 3
  - Item:
    - input:
      - a: 2
      - b: 5
      - operation: meet
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 5
      - b: 5
      - operation: meet
    - status: valid
    - output: 2
  - Item:
    - input:
      - a: 8
      - b: 5
      - operation: meet
    - status: invalid_parameters
  - Item:
    - input:
      - a: 0.5
      - b: 5
      - operation: meet
    - status: invalid_parameters
- compute: Take the intersection for meet or the union for join, then count selected tools.
- numeric tolerance: 1e-10
- invariants:
  - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
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
  - prompt: Which tools are shared, and which are available together?
  - answer: Take the intersection for meet or the union for join, then count selected tools.
- Item:
  - prompt: What does this construction leave out?
  - answer: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.

## Representations

- Item:
  - kind: geometry
  - description: Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against First collection A. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Take the intersection for meet or the union for join, then count selected tools.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Which tools are shared, and which are available together?
  - limitations: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - evidence kind: constructed_example
  - example ref: math:example:meet-join:case-1
- Item:
  - context: Boundary comparison
  - mapping: Take the intersection for meet or the union for join, then count selected tools.
  - limitations: In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.
  - evidence kind: constructed_example
  - example ref: math:example:meet-join:case-2

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
