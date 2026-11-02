---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:binomial-coefficient", "id": "math:concept:binomial-coefficient", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:binomial-coefficient", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "48ad5d2e611419be8f013613868f0531f1a58ef2fe061f9509385885972ef4c6"}, "purpose": "How many teams remain when listing order does not matter?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "48ad5d2e611419be8f013613868f0531f1a58ef2fe061f9509385885972ef4c6", "status": "draft", "title": "Combinations and binomial coefficients", "topics": ["mathematics", "discrete-mathematics", "combinations and binomial coefficients"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Combinations and binomial coefficients

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:binomial-coefficient; revision 0.1.0-draft. Setting: Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team. Expression: $\binom{n}{k}=\frac{n!}{k!(n-k)!},\quad0\le k\le n\le10.$. Conditions required for a defined value (a case may test their violation): Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

## Schema Version

0.1.0

## Id

math:concept:binomial-coefficient

## Slug

binomial-coefficient

## Type

concept

## Title

Combinations and binomial coefficients

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

- combinations and binomial coefficients

## Branches

- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How many teams remain when listing order does not matter?

## Meaning

Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.

## Prerequisites

- required:

- helpful:
  - math:concept:permutation-count
  - math:concept:set
  - math:concept:binomial-distribution
- depth:


## Definition

- setting: Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.
- formal latex: \binom{n}{k}=\frac{n!}{k!(n-k)!},\quad0\le k\le n\le10.
- signature:
  - n: Number of distinct volunteers available.
  - k: Number of people in a team.
  - C(n,k): Number of unordered k-person subsets of the n-person group.
  - k!: Number of ordered listings corresponding to one team.
- conditions:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:counting

## Grammar

- pronunciation: Combinations and binomial coefficients
- expression latex: \binom{n}{k}=\frac{n!}{k!(n-k)!},\quad0\le k\le n\le10.
- formation rule: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: n
    - role: Number of distinct volunteers available.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: k
    - role: Number of people in a team.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: C(n,k)
    - role: Number of unordered k-person subsets of the n-person group.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: k!
    - role: Number of ordered listings corresponding to one team.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:binomial-coefficient:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:available
      - kind: variable
      - type: Declared integer input
      - symbol: n
      - scope ref: scope:binomial-coefficient
    - Item:
      - id: n:chosen
      - kind: variable
      - type: Declared integer input
      - symbol: k
      - scope ref: scope:binomial-coefficient
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
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
      - argument: n:chosen
  - scopes:
    - Item:
      - id: scope:binomial-coefficient
      - kind: modelExpression
      - free variables:
        - n
        - k
      - domain condition: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - n: available
  - k: chosen
  - C(n,k): output
  - k!: ordersPerTeam

## Properties

- Item:
  - claim: Complementary team sizes have the same count.
  - conditions: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - derivation: Map every selected team to the people left out. This is a reversible correspondence between k-person and (n−k)-person teams.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:binomial-coefficient:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:permutation-count
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Combinations and binomial coefficients supplies a bounded connection to permutation count.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Combinations and binomial coefficients supplies a bounded connection to set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:binomial-distribution
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Combinations and binomial coefficients supplies a bounded connection to binomial distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:binomial-coefficient:case-1
  - title: Choose a three-person team
  - role: applied_model
  - question: How many teams remain when listing order does not matter?
  - setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
  - assumptions:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - inputs:
    - available: 6
    - chosen: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; k = 3
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: C(6,3) = 120/6 = 20
      - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
  - result:
    - exact: 20 selections
  - interpretation: Six orders of each team correspond to one set of three members.
  - independent check:
    - method: List all 3-person subsets of the 6 people, recording each team once regardless of order. The list contains 20 distinct teams.
    - expected: 20
  - limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - preset:
    - available: 6
    - chosen: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- Item:
  - id: math:example:binomial-coefficient:case-2
  - title: Choose nobody
  - role: applied_model
  - question: How many teams remain when listing order does not matter?
  - setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
  - assumptions:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - inputs:
    - available: 6
    - chosen: 0
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; k = 0
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: C(6,0) = 1
      - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
  - result:
    - exact: 1 selections
  - interpretation: The empty team is one subset.
  - independent check:
    - method: List all 0-person subsets of the 6 people, recording each team once regardless of order. The list contains 1 distinct team.
    - expected: 1
  - limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - preset:
    - available: 6
    - chosen: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- Item:
  - id: math:example:binomial-coefficient:case-3
  - title: Choose everybody
  - role: applied_model
  - question: How many teams remain when listing order does not matter?
  - setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
  - assumptions:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - inputs:
    - available: 6
    - chosen: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; k = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: C(6,6) = 1
      - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
  - result:
    - exact: 1 selections
  - interpretation: There is only one team containing all six people.
  - independent check:
    - method: List all 6-person subsets of the 6 people, recording each team once regardless of order. The list contains 1 distinct team.
    - expected: 1
  - limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - preset:
    - available: 6
    - chosen: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- Item:
  - id: math:example:binomial-coefficient:case-4
  - title: Choose two of eight
  - role: applied_model
  - question: How many teams remain when listing order does not matter?
  - setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
  - assumptions:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - inputs:
    - available: 8
    - chosen: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 8; k = 2
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: C(8,2) = 56/2 = 28
      - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
  - result:
    - exact: 28 selections
  - interpretation: Each pair was counted twice as an ordered assignment.
  - independent check:
    - method: List all 2-person subsets of the 8 people, recording each team once regardless of order. The list contains 28 distinct teams.
    - expected: 28
  - limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - preset:
    - available: 8
    - chosen: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- Item:
  - id: math:example:binomial-coefficient:case-5
  - title: Choose the complement size
  - role: applied_model
  - question: How many teams remain when listing order does not matter?
  - setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
  - assumptions:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - inputs:
    - available: 8
    - chosen: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 8; k = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: C(8,6) = C(8,2) = 28
      - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
  - result:
    - exact: 28 selections
  - interpretation: Choosing six members is equivalent to choosing the two excluded members.
  - independent check:
    - method: List all 6-person subsets of the 8 people, recording each team once regardless of order. The list contains 28 distinct teams.
    - expected: 28
  - limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - preset:
    - available: 8
    - chosen: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

## Interactive

- component id: component:binomial-coefficient
- renderer id: binomial-coefficient-visual-model
- renderer version: 1
- model id: binomial-coefficient-visual-model
- model revision: 1
- expression id: ast:binomial-coefficient:expression
- interaction status: implemented
- description: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
- controls:
  - Item:
    - id: available
    - type: number
    - default: 6
    - min: 0
    - max: 10
    - step: 1
  - Item:
    - id: chosen
    - type: number
    - default: 3
    - min: 0
    - max: 10
    - step: 1
- expected cases:
  - Item:
    - input:
      - available: 6
      - chosen: 3
    - status: valid
    - output: 20
  - Item:
    - input:
      - available: 6
      - chosen: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 6
      - chosen: 6
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 8
      - chosen: 2
    - status: valid
    - output: 28
  - Item:
    - input:
      - available: 8
      - chosen: 6
    - status: valid
    - output: 28
  - Item:
    - input:
      - available: 0
      - chosen: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 10
      - chosen: 5
    - status: valid
    - output: 252
  - Item:
    - input:
      - available: 3
      - chosen: 4
    - status: invalid_parameters
  - Item:
    - input:
      - available: 6
      - chosen: 1.5
    - status: invalid_parameters
- compute: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
- numeric tolerance: 1e-10
- invariants:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
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
  - prompt: How many teams remain when listing order does not matter?
  - answer: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

## Representations

- Item:
  - kind: geometry
  - description: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: How many teams remain when listing order does not matter?
  - limitations: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - evidence kind: constructed_example
  - example ref: math:example:binomial-coefficient:case-1
- Item:
  - context: Choose nobody
  - mapping: The empty team is one subset.
  - limitations: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - evidence kind: constructed_example
  - example ref: math:example:binomial-coefficient:case-2

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
