---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:permutation-count", "id": "math:concept:permutation-count", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:permutation-count", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3051242e0755a469cb39e1013f87d69f0f35a888f85cdfee729ed1942eac6471"}, "purpose": "How many ways can different people fill different roles?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3051242e0755a469cb39e1013f87d69f0f35a888f85cdfee729ed1942eac6471", "status": "draft", "title": "Permutations and factorials", "topics": ["mathematics", "discrete-mathematics", "permutations and factorials"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Permutations and factorials

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:permutation-count; revision 0.1.0-draft. Setting: Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment. Expression: $P(n,r)=\frac{n!}{(n-r)!},\quad0\le r\le n\le8.$. Conditions required for a defined value (a case may test their violation): Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

## Schema Version

0.1.0

## Id

math:concept:permutation-count

## Slug

permutation-count

## Type

concept

## Title

Permutations and factorials

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

- permutations and factorials

## Branches

- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How many ways can different people fill different roles?

## Meaning

Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:set
  - math:concept:binomial-coefficient
  - math:concept:probability-distribution
- depth:
  []

## Definition

- setting: Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.
- formal latex: P(n,r)=\frac{n!}{(n-r)!},\quad0\le r\le n\le8.
- signature:
  - n: Number of distinct volunteers available.
  - r: Number of different labeled roles to fill.
  - P(n,r): Number of ordered role assignments without repetition.
- conditions:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:counting

## Grammar

- pronunciation: Permutations and factorials
- expression latex: P(n,r)=\frac{n!}{(n-r)!},\quad0\le r\le n\le8.
- formation rule: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: n
    - role: Number of distinct volunteers available.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: r
    - role: Number of different labeled roles to fill.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: P(n,r)
    - role: Number of ordered role assignments without repetition.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:permutation-count:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:available
      - kind: variable
      - type: Declared integer input
      - symbol: n
      - scope ref: scope:permutation-count
    - Item:
      - id: n:slots
      - kind: variable
      - type: Declared integer input
      - symbol: r
      - scope ref: scope:permutation-count
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
    - Item:
      - id: n:bound-available
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:available
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-available
      - argument: n:slots
  - scopes:
    - Item:
      - id: scope:permutation-count
      - kind: modelExpression
      - free variables:
        - n
        - r
      - domain condition: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - n: available
  - r: slots
  - P(n,r): output

## Properties

- Item:
  - claim: The count multiplies choices without reusing a person.
  - conditions: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - derivation: The first role has n choices; each later role excludes those already used. Multiplying r branch counts gives n!/(n−r)! for the stated domain.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:permutation-count:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Permutations and factorials supplies a bounded connection to set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:binomial-coefficient
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Permutations and factorials supplies a bounded connection to binomial coefficient.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:probability-distribution
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Permutations and factorials supplies a bounded connection to probability distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:permutation-count:case-1
  - title: Assign three workshop roles
  - role: applied_model
  - question: How many ways can different people fill different roles?
  - setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
  - assumptions:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - inputs:
    - available: 5
    - slots: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 5; r = 3
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 5 × 4 × 3 = 60
      - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
  - result:
    - exact: 60 arrangements
  - interpretation: Changing who opens versus who closes makes another assignment.
  - independent check:
    - method: List every ordered selection of 3 different people from 5. There are 60 distinct assignments; exchanging two role holders produces a different assignment.
    - expected: 60
  - limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - preset:
    - available: 5
    - slots: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- Item:
  - id: math:example:permutation-count:case-2
  - title: No roles need filling
  - role: applied_model
  - question: How many ways can different people fill different roles?
  - setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
  - assumptions:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - inputs:
    - available: 5
    - slots: 0
  - steps:
    - Item:
      - index: 1
      - expression: n = 5; r = 0
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: P(5,0) = 1
      - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
  - result:
    - exact: 1 arrangements
  - interpretation: There is one empty assignment, rather than zero possible actions.
  - independent check:
    - method: With no roles, the one empty assignment is the entire list; choosing nobody contributes a count of 1.
    - expected: 1
  - limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - preset:
    - available: 5
    - slots: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- Item:
  - id: math:example:permutation-count:case-3
  - title: Give every volunteer a role
  - role: applied_model
  - question: How many ways can different people fill different roles?
  - setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
  - assumptions:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - inputs:
    - available: 5
    - slots: 5
  - steps:
    - Item:
      - index: 1
      - expression: n = 5; r = 5
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 5! = 5 × 4 × 3 × 2 × 1 = 120
      - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
  - result:
    - exact: 120 arrangements
  - interpretation: All people are used, but their order among roles still matters.
  - independent check:
    - method: List every ordered selection of 5 different people from 5. There are 120 distinct assignments; exchanging two role holders produces a different assignment.
    - expected: 120
  - limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - preset:
    - available: 5
    - slots: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- Item:
  - id: math:example:permutation-count:case-4
  - title: Choose two different role holders
  - role: applied_model
  - question: How many ways can different people fill different roles?
  - setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
  - assumptions:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - inputs:
    - available: 8
    - slots: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 8; r = 2
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 8 × 7 = 56
      - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
  - result:
    - exact: 56 arrangements
  - interpretation: The second role has seven choices after the first is filled.
  - independent check:
    - method: List every ordered selection of 2 different people from 8. There are 56 distinct assignments; exchanging two role holders produces a different assignment.
    - expected: 56
  - limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - preset:
    - available: 8
    - slots: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- Item:
  - id: math:example:permutation-count:case-5
  - title: Empty group, empty assignment
  - role: applied_model
  - question: How many ways can different people fill different roles?
  - setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
  - assumptions:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - inputs:
    - available: 0
    - slots: 0
  - steps:
    - Item:
      - index: 1
      - expression: n = 0; r = 0
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: P(0,0) = 1
      - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
  - result:
    - exact: 1 arrangements
  - interpretation: The multiplication principle consistently keeps the empty assignment.
  - independent check:
    - method: With no roles, the one empty assignment is the entire list; choosing nobody contributes a count of 1.
    - expected: 1
  - limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - preset:
    - available: 0
    - slots: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

## Interactive

- component id: component:permutation-count
- renderer id: permutation-count-visual-model
- renderer version: 1
- model id: permutation-count-visual-model
- model revision: 1
- expression id: ast:permutation-count:expression
- interaction status: implemented
- description: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
- controls:
  - Item:
    - id: available
    - type: number
    - default: 5
    - min: 0
    - max: 8
    - step: 1
  - Item:
    - id: slots
    - type: number
    - default: 3
    - min: 0
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - available: 5
      - slots: 3
    - status: valid
    - output: 60
  - Item:
    - input:
      - available: 5
      - slots: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 5
      - slots: 5
    - status: valid
    - output: 120
  - Item:
    - input:
      - available: 8
      - slots: 2
    - status: valid
    - output: 56
  - Item:
    - input:
      - available: 0
      - slots: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 8
      - slots: 8
    - status: valid
    - output: 40320
  - Item:
    - input:
      - available: 1
      - slots: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 3
      - slots: 4
    - status: invalid_parameters
  - Item:
    - input:
      - available: 5
      - slots: 1.5
    - status: invalid_parameters
- compute: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
- numeric tolerance: 1e-10
- invariants:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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
  - prompt: How many ways can different people fill different roles?
  - answer: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

## Representations

- Item:
  - kind: geometry
  - description: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: How many ways can different people fill different roles?
  - limitations: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - evidence kind: constructed_example
  - example ref: math:example:permutation-count:case-1
- Item:
  - context: No roles need filling
  - mapping: There is one empty assignment, rather than zero possible actions.
  - limitations: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - evidence kind: constructed_example
  - example ref: math:example:permutation-count:case-2

## Source Refs

- source:number-foundations:counting

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Next branch expansion: added an exact bounded number/counting family, original examples, connected story and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:number-foundations:counting. [OpenStax · Counting Principles](https://openstax.org/books/algebra-and-trigonometry/pages/13-5-counting-principles). Locator: Multiplication principle, ordered selections, factorials and unordered combinations.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
