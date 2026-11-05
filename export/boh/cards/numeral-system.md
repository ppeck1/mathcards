---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:numeral-system", "id": "math:concept:numeral-system", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:numeral-system", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1ac47e666e07444a363aa789429e965dc77909df88a7337c3251814e7513baa4"}, "purpose": "What changes when the same counter is written in another base?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1ac47e666e07444a363aa789429e965dc77909df88a7337c3251814e7513baa4", "status": "draft", "title": "Positional numeral systems", "topics": ["mathematics", "numbers-number-theory", "positional numeral systems"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Positional numeral systems

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:numeral-system; revision 0.1.0-draft. Setting: Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same. Expression: $n=\sum_{j=0}^{s-1}d_j b^j,\quad0\le d_j<b.$. Conditions required for a defined value (a case may test their violation): Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

## Schema Version

0.1.0

## Id

math:concept:numeral-system

## Slug

numeral-system

## Type

concept

## Title

Positional numeral systems

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

- positional numeral systems

## Branches

- numbers-number-theory

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What changes when the same counter is written in another base?

## Meaning

Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:exponentiation
  - math:concept:turing-machine
  - math:concept:modular-arithmetic
- depth:
  []

## Definition

- setting: Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.
- formal latex: n=\sum_{j=0}^{s-1}d_j b^j,\quad0\le d_j<b.
- signature:
  - n: Nonnegative represented item count.
  - b: Integer base of the positional representation.
  - dⱼ: Digit occupying position j, counted from the units place.
  - s: Number of digits, including one zero digit for zero.
  - j: Whole position index of a digit, beginning at the units place.
- conditions:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:numeral

## Grammar

- pronunciation: Positional numeral systems
- expression latex: n=\sum_{j=0}^{s-1}d_j b^j,\quad0\le d_j<b.
- formation rule: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: n
    - role: Nonnegative represented item count.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: b
    - role: Integer base of the positional representation.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: dⱼ
    - role: Digit occupying position j, counted from the units place.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: s
    - role: Number of digits, including one zero digit for zero.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: j
    - role: Whole position index of a digit, beginning at the units place.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:numeral-system:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:value
      - kind: variable
      - type: Declared integer input
      - symbol: n
      - scope ref: scope:numeral-system
    - Item:
      - id: n:base
      - kind: variable
      - type: Declared integer input
      - symbol: b
      - scope ref: scope:numeral-system
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
    - Item:
      - id: n:bound-value
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:value
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-value
      - argument: n:base
  - scopes:
    - Item:
      - id: scope:numeral-system
      - kind: modelExpression
      - free variables:
        - n
        - b
      - domain condition: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - n: value
  - b: base
  - dⱼ: places
  - s: digitCount
  - j: places

## Properties

- Item:
  - claim: Changing the base preserves the represented integer.
  - conditions: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - derivation: At each division n=qb+r, the remainder is the next digit. Repeating on q reconstructs n as the sum of digit times place weight.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:numeral-system:case-1

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
  - target: math:concept:exponentiation
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Positional numeral systems supplies a bounded connection to exponentiation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:turing-machine
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Positional numeral systems supplies a bounded connection to turing machine.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:modular-arithmetic
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Positional numeral systems supplies a bounded connection to modular arithmetic.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:numeral-system:case-1
  - title: A binary counter
  - role: applied_model
  - question: What changes when the same counter is written in another base?
  - setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
  - assumptions:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - inputs:
    - value: 27
    - base: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 27; b = 2
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 11011₂ = 16 + 8 + 2 + 1 = 27
      - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
  - result:
    - exact: 27 items
  - interpretation: Zero in the fours place is significant even though its contribution is zero.
  - independent check:
    - method: Add the place contributions: 16 + 8 + 0 + 2 + 1 = 27. Every digit is between 0 and 1, so this is a valid base-2 representation of the same quantity.
    - expected: 27
  - limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - preset:
    - value: 27
    - base: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- Item:
  - id: math:example:numeral-system:case-2
  - title: Regroup the same quantity in threes
  - role: applied_model
  - question: What changes when the same counter is written in another base?
  - setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
  - assumptions:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - inputs:
    - value: 27
    - base: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 27; b = 3
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 1000₃ = 1 × 27 = 27
      - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
  - result:
    - exact: 27 items
  - interpretation: The same quantity uses a different digit string and different place weights.
  - independent check:
    - method: Add the place contributions: 27 + 0 + 0 + 0 = 27. Every digit is between 0 and 2, so this is a valid base-3 representation of the same quantity.
    - expected: 27
  - limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - preset:
    - value: 27
    - base: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- Item:
  - id: math:example:numeral-system:case-3
  - title: Every supported binary place is filled
  - role: applied_model
  - question: What changes when the same counter is written in another base?
  - setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
  - assumptions:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - inputs:
    - value: 63
    - base: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 63; b = 2
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 111111₂ = 32 + 16 + 8 + 4 + 2 + 1
      - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
  - result:
    - exact: 63 items
  - interpretation: The six-place display reaches the largest supported item count.
  - independent check:
    - method: Add the place contributions: 32 + 16 + 8 + 4 + 2 + 1 = 63. Every digit is between 0 and 1, so this is a valid base-2 representation of the same quantity.
    - expected: 63
  - limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - preset:
    - value: 63
    - base: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- Item:
  - id: math:example:numeral-system:case-4
  - title: Represent zero
  - role: applied_model
  - question: What changes when the same counter is written in another base?
  - setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
  - assumptions:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - inputs:
    - value: 0
    - base: 10
  - steps:
    - Item:
      - index: 1
      - expression: n = 0; b = 10
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 0₁₀ = 0
      - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
  - result:
    - exact: 0 items
  - interpretation: Zero is represented by one zero digit, not an empty display.
  - independent check:
    - method: Add the place contributions: 0 = 0. Every digit is between 0 and 9, so this is a valid base-10 representation of the same quantity.
    - expected: 0
  - limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - preset:
    - value: 0
    - base: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- Item:
  - id: math:example:numeral-system:case-5
  - title: Use familiar decimal places
  - role: applied_model
  - question: What changes when the same counter is written in another base?
  - setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
  - assumptions:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - inputs:
    - value: 37
    - base: 10
  - steps:
    - Item:
      - index: 1
      - expression: n = 37; b = 10
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 37₁₀ = 3 × 10 + 7 × 1
      - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
  - result:
    - exact: 37 items
  - interpretation: The decimal representation follows the same positional rule.
  - independent check:
    - method: Add the place contributions: 30 + 7 = 37. Every digit is between 0 and 9, so this is a valid base-10 representation of the same quantity.
    - expected: 37
  - limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - preset:
    - value: 37
    - base: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

## Interactive

- component id: component:numeral-system
- renderer id: numeral-system-visual-model
- renderer version: 1
- model id: numeral-system-visual-model
- model revision: 1
- expression id: ast:numeral-system:expression
- interaction status: implemented
- description: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
- controls:
  - Item:
    - id: value
    - type: number
    - default: 27
    - min: 0
    - max: 63
    - step: 1
  - Item:
    - id: base
    - type: number
    - default: 2
    - min: 2
    - max: 10
    - step: 1
- expected cases:
  - Item:
    - input:
      - value: 27
      - base: 2
    - status: valid
    - output: 27
  - Item:
    - input:
      - value: 27
      - base: 3
    - status: valid
    - output: 27
  - Item:
    - input:
      - value: 63
      - base: 2
    - status: valid
    - output: 63
  - Item:
    - input:
      - value: 0
      - base: 10
    - status: valid
    - output: 0
  - Item:
    - input:
      - value: 37
      - base: 10
    - status: valid
    - output: 37
  - Item:
    - input:
      - value: 1
      - base: 2
    - status: valid
    - output: 1
  - Item:
    - input:
      - value: 63
      - base: 10
    - status: valid
    - output: 63
  - Item:
    - input:
      - value: 27
      - base: 1
    - status: invalid_parameters
  - Item:
    - input:
      - value: 64
      - base: 2
    - status: invalid_parameters
- compute: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
- numeric tolerance: 1e-10
- invariants:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
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
  - prompt: What changes when the same counter is written in another base?
  - answer: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

## Representations

- Item:
  - kind: geometry
  - description: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: What changes when the same counter is written in another base?
  - limitations: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - evidence kind: constructed_example
  - example ref: math:example:numeral-system:case-1
- Item:
  - context: Regroup the same quantity in threes
  - mapping: The same quantity uses a different digit string and different place weights.
  - limitations: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - evidence kind: constructed_example
  - example ref: math:example:numeral-system:case-2

## Source Refs

- source:number-foundations:numeral

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Next branch expansion: added an exact bounded number/counting family, original examples, connected story and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:number-foundations:numeral. [Carl Burch · More About Binary Numbers](https://www.cs.cmu.edu/~cburch/pgss97/binary.html). Locator: Binary positional weights and conversion to/from base ten; the ordinary-base generalization is author-derived.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
