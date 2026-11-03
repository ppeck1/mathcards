---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:prime-factorization", "id": "math:concept:prime-factorization", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:prime-factorization", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "bdab90e42e091d33179feec3810246ac7ae45ef232386734df2d934157087d53"}, "purpose": "Which prime group sizes rebuild the original pack?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "bdab90e42e091d33179feec3810246ac7ae45ef232386734df2d934157087d53", "status": "draft", "title": "Prime factorization", "topics": ["mathematics", "numbers-number-theory", "prime factorization"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Prime factorization

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:prime-factorization; revision 0.1.0-draft. Setting: A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept. Expression: $n=\prod_{j=1}^{s}p_j,\quad p_j\text{ prime}.$. Conditions required for a defined value (a case may test their violation): The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

## Schema Version

0.1.0

## Id

math:concept:prime-factorization

## Slug

prime-factorization

## Type

concept

## Title

Prime factorization

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

- prime factorization

## Branches

- numbers-number-theory

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which prime group sizes rebuild the original pack?

## Meaning

A prime factorization expresses an integer larger than one as a product of primes, retaining repetitions. Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:modular-arithmetic
  - math:concept:greatest-common-divisor
- depth:
  []

## Definition

- setting: A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.
- formal latex: n=\prod_{j=1}^{s}p_j,\quad p_j\text{ prime}.
- signature:
  - n: Original positive item count.
  - s: Number of prime factors, counted with repetitions.
  - pⱼ: The prime factors in the displayed product.
- conditions:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:prime

## Grammar

- pronunciation: Prime factorization
- expression latex: n=\prod_{j=1}^{s}p_j,\quad p_j\text{ prime}.
- formation rule: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: n
    - role: Original positive item count.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: s
    - role: Number of prime factors, counted with repetitions.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: pⱼ
    - role: The prime factors in the displayed product.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:prime-factorization:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:number
      - kind: variable
      - type: Declared integer input
      - symbol: n
      - scope ref: scope:prime-factorization
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:number
  - scopes:
    - Item:
      - id: scope:prime-factorization
      - kind: modelExpression
      - free variables:
        - n
      - domain condition: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - n: number
  - s: output
  - pⱼ: factors

## Properties

- Item:
  - claim: The displayed factors multiply back to the input.
  - conditions: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - derivation: Every successful division replaces a remaining count by a prime factor times a smaller remaining count. The product is unchanged through the trace.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:prime-factorization:case-1

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
  - target: math:concept:modular-arithmetic
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Prime factorization supplies a bounded connection to modular arithmetic.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:greatest-common-divisor
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Prime factorization supplies a bounded connection to greatest common divisor.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:prime-factorization:case-1
  - title: Split an eighty-four-item pack
  - role: applied_model
  - question: Which prime group sizes rebuild the original pack?
  - setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
  - assumptions:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - inputs:
    - number: 84
  - steps:
    - Item:
      - index: 1
      - expression: n = 84
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 84 = 2 × 2 × 3 × 7
      - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
  - result:
    - exact: 4 factors
  - interpretation: There are four prime factors when repeated twos are counted.
  - independent check:
    - method: Multiply the prime factors: 2 × 2 × 3 × 7 = 84. Each listed factor is prime, and repeated factors are counted separately; the count is 4.
    - expected: 4
  - limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - preset:
    - number: 84
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- Item:
  - id: math:example:prime-factorization:case-2
  - title: Repeated binary group sizes
  - role: applied_model
  - question: Which prime group sizes rebuild the original pack?
  - setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
  - assumptions:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - inputs:
    - number: 64
  - steps:
    - Item:
      - index: 1
      - expression: n = 64
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 64 = 2 × 2 × 2 × 2 × 2 × 2
      - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
  - result:
    - exact: 6 factors
  - interpretation: Six copies of the same prime are six factors, not one.
  - independent check:
    - method: Multiply the prime factors: 2 × 2 × 2 × 2 × 2 × 2 = 64. Each listed factor is prime, and repeated factors are counted separately; the count is 6.
    - expected: 6
  - limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - preset:
    - number: 64
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- Item:
  - id: math:example:prime-factorization:case-3
  - title: A prime-sized pack
  - role: applied_model
  - question: Which prime group sizes rebuild the original pack?
  - setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
  - assumptions:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - inputs:
    - number: 97
  - steps:
    - Item:
      - index: 1
      - expression: n = 97
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 97 = 97
      - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
  - result:
    - exact: 1 factors
  - interpretation: A prime count has one prime factor: itself.
  - independent check:
    - method: Multiply the prime factors: 97 = 97. Each listed factor is prime, and repeated factors are counted separately; the count is 1.
    - expected: 1
  - limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - preset:
    - number: 97
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- Item:
  - id: math:example:prime-factorization:case-4
  - title: The multiplicative identity
  - role: applied_model
  - question: Which prime group sizes rebuild the original pack?
  - setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
  - assumptions:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - inputs:
    - number: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 1
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 1 = empty product
      - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
  - result:
    - exact: 0 factors
  - interpretation: One has no prime factors and is neither prime nor composite.
  - independent check:
    - method: The empty product equals 1, so one has no prime factors.
    - expected: 0
  - limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - preset:
    - number: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- Item:
  - id: math:example:prime-factorization:case-5
  - title: Two different repeated factors
  - role: applied_model
  - question: Which prime group sizes rebuild the original pack?
  - setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
  - assumptions:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - inputs:
    - number: 90
  - steps:
    - Item:
      - index: 1
      - expression: n = 90
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 90 = 2 × 3 × 3 × 5
      - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
  - result:
    - exact: 4 factors
  - interpretation: The product uses every factor, including both threes.
  - independent check:
    - method: Multiply the prime factors: 2 × 3 × 3 × 5 = 90. Each listed factor is prime, and repeated factors are counted separately; the count is 4.
    - expected: 4
  - limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - preset:
    - number: 90
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

## Interactive

- component id: component:prime-factorization
- renderer id: prime-factorization-visual-model
- renderer version: 1
- model id: prime-factorization-visual-model
- model revision: 1
- expression id: ast:prime-factorization:expression
- interaction status: implemented
- description: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
- controls:
  - Item:
    - id: number
    - type: number
    - default: 84
    - min: 1
    - max: 120
    - step: 1
- expected cases:
  - Item:
    - input:
      - number: 84
    - status: valid
    - output: 4
  - Item:
    - input:
      - number: 64
    - status: valid
    - output: 6
  - Item:
    - input:
      - number: 97
    - status: valid
    - output: 1
  - Item:
    - input:
      - number: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - number: 90
    - status: valid
    - output: 4
  - Item:
    - input:
      - number: 2
    - status: valid
    - output: 1
  - Item:
    - input:
      - number: 120
    - status: valid
    - output: 5
  - Item:
    - input:
      - number: 0
    - status: invalid_parameters
  - Item:
    - input:
      - number: 2.5
    - status: invalid_parameters
- compute: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
- numeric tolerance: 1e-10
- invariants:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
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
  - prompt: Which prime group sizes rebuild the original pack?
  - answer: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

## Representations

- Item:
  - kind: geometry
  - description: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: Which prime group sizes rebuild the original pack?
  - limitations: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - evidence kind: constructed_example
  - example ref: math:example:prime-factorization:case-1
- Item:
  - context: Repeated binary group sizes
  - mapping: Six copies of the same prime are six factors, not one.
  - limitations: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - evidence kind: constructed_example
  - example ref: math:example:prime-factorization:case-2

## Source Refs

- source:number-foundations:prime

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Next branch expansion: added an exact bounded number/counting family, original examples, connected story and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:number-foundations:prime. [OpenStax · Prime and Composite Numbers](https://openstax.org/books/contemporary-mathematics/pages/3-1-prime-and-composite-numbers). Locator: Prime/composite definitions and prime factorization. No cryptographic timing or historical priority claims are used.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
