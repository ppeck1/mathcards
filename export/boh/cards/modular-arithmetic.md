---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:modular-arithmetic", "id": "math:concept:modular-arithmetic", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:modular-arithmetic", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ed619272206e805b0456e53b02d86d52136584a78d36a8edb559f0274ff3c59a"}, "purpose": "What is left after every full tray is packed?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ed619272206e805b0456e53b02d86d52136584a78d36a8edb559f0274ff3c59a", "status": "draft", "title": "Modular arithmetic and remainders", "topics": ["mathematics", "numbers-number-theory", "modular arithmetic and remainders"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Modular arithmetic and remainders

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:modular-arithmetic; revision 0.1.0-draft. Setting: Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder. Expression: $n=qm+r,\quad q=\lfloor n/m\rfloor,\quad0\le r<m.$. Conditions required for a defined value (a case may test their violation): This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

## Schema Version

0.1.0

## Id

math:concept:modular-arithmetic

## Slug

modular-arithmetic

## Type

concept

## Title

Modular arithmetic and remainders

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

- modular arithmetic and remainders

## Branches

- numbers-number-theory

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What is left after every full tray is packed?

## Meaning

Modular arithmetic groups integers by their remainders for a fixed positive modulus. Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:greatest-common-divisor
  - math:concept:recurrence
- depth:
  []

## Definition

- setting: Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.
- formal latex: n=qm+r,\quad q=\lfloor n/m\rfloor,\quad0\le r<m.
- signature:
  - n: Total counters before packing.
  - m: Positive number of counters in a full tray.
  - q: Number of completely filled trays.
  - r: Nonnegative leftover count, strictly smaller than one tray.
- conditions:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:integer

## Grammar

- pronunciation: Modular arithmetic and remainders
- expression latex: n=qm+r,\quad q=\lfloor n/m\rfloor,\quad0\le r<m.
- formation rule: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: n
    - role: Total counters before packing.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: m
    - role: Positive number of counters in a full tray.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: q
    - role: Number of completely filled trays.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: r
    - role: Nonnegative leftover count, strictly smaller than one tray.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:modular-arithmetic:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:total
      - kind: variable
      - type: Declared integer input
      - symbol: n
      - scope ref: scope:modular-arithmetic
    - Item:
      - id: n:modulus
      - kind: variable
      - type: Declared integer input
      - symbol: m
      - scope ref: scope:modular-arithmetic
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
    - Item:
      - id: n:bound-total
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:total
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-total
      - argument: n:modulus
  - scopes:
    - Item:
      - id: scope:modular-arithmetic
      - kind: modelExpression
      - free variables:
        - n
        - m
      - domain condition: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - n: total
  - m: modulus
  - q: quotient
  - r: remainder

## Properties

- Item:
  - claim: Adding one full tray preserves the remainder.
  - conditions: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - derivation: If n=qm+r, then n+m=(q+1)m+r. The remainder remains in the same allowed interval when both displayed totals fit the control range.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:modular-arithmetic:case-1

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
  - target: math:concept:greatest-common-divisor
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Modular arithmetic and remainders supplies a bounded connection to greatest common divisor.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:recurrence
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Modular arithmetic and remainders supplies a bounded connection to recurrence.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:modular-arithmetic:case-1
  - title: Pack a workshop order
  - role: applied_model
  - question: What is left after every full tray is packed?
  - setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
  - assumptions:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - inputs:
    - total: 23
    - modulus: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 23; m = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 23 = 3 × 6 + 5
      - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
  - result:
    - exact: 5 items
  - interpretation: Three full trays hold eighteen counters; five remain.
  - independent check:
    - method: Reconstruct the order: 23 = 3 × 6 + 5. The remainder 5 is nonnegative and smaller than the tray capacity 6.
    - expected: 5
  - limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - preset:
    - total: 23
    - modulus: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- Item:
  - id: math:example:modular-arithmetic:case-2
  - title: Finish with no loose counters
  - role: applied_model
  - question: What is left after every full tray is packed?
  - setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
  - assumptions:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - inputs:
    - total: 24
    - modulus: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 24; m = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 24 = 4 × 6 + 0
      - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
  - result:
    - exact: 0 items
  - interpretation: An exact multiple has remainder zero.
  - independent check:
    - method: Reconstruct the order: 24 = 4 × 6 + 0. The remainder 0 is nonnegative and smaller than the tray capacity 6.
    - expected: 0
  - limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - preset:
    - total: 24
    - modulus: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- Item:
  - id: math:example:modular-arithmetic:case-3
  - title: Begin with an empty order
  - role: applied_model
  - question: What is left after every full tray is packed?
  - setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
  - assumptions:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - inputs:
    - total: 0
    - modulus: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 0; m = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 0 = 0 × 6 + 0
      - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
  - result:
    - exact: 0 items
  - interpretation: No trays and no leftovers still satisfy the division identity.
  - independent check:
    - method: Reconstruct the order: 0 = 0 × 6 + 0. The remainder 0 is nonnegative and smaller than the tray capacity 6.
    - expected: 0
  - limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - preset:
    - total: 0
    - modulus: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- Item:
  - id: math:example:modular-arithmetic:case-4
  - title: Use the largest supported tray
  - role: applied_model
  - question: What is left after every full tray is packed?
  - setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
  - assumptions:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - inputs:
    - total: 60
    - modulus: 12
  - steps:
    - Item:
      - index: 1
      - expression: n = 60; m = 12
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 60 = 5 × 12 + 0
      - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
  - result:
    - exact: 0 items
  - interpretation: A different modulus changes the tray count and the remainder class.
  - independent check:
    - method: Reconstruct the order: 60 = 5 × 12 + 0. The remainder 0 is nonnegative and smaller than the tray capacity 12.
    - expected: 0
  - limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - preset:
    - total: 60
    - modulus: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- Item:
  - id: math:example:modular-arithmetic:case-5
  - title: Change the packing capacity
  - role: applied_model
  - question: What is left after every full tray is packed?
  - setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
  - assumptions:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - inputs:
    - total: 35
    - modulus: 8
  - steps:
    - Item:
      - index: 1
      - expression: n = 35; m = 8
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 35 = 4 × 8 + 3
      - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
  - result:
    - exact: 3 items
  - interpretation: Only complete trays enter the quotient; the remainder is less than eight.
  - independent check:
    - method: Reconstruct the order: 35 = 4 × 8 + 3. The remainder 3 is nonnegative and smaller than the tray capacity 8.
    - expected: 3
  - limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - preset:
    - total: 35
    - modulus: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

## Interactive

- component id: component:modular-arithmetic
- renderer id: modular-arithmetic-visual-model
- renderer version: 1
- model id: modular-arithmetic-visual-model
- model revision: 1
- expression id: ast:modular-arithmetic:expression
- interaction status: implemented
- description: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
- controls:
  - Item:
    - id: total
    - type: number
    - default: 23
    - min: 0
    - max: 60
    - step: 1
  - Item:
    - id: modulus
    - type: number
    - default: 6
    - min: 2
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - total: 23
      - modulus: 6
    - status: valid
    - output: 5
  - Item:
    - input:
      - total: 24
      - modulus: 6
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 0
      - modulus: 6
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 60
      - modulus: 12
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 35
      - modulus: 8
    - status: valid
    - output: 3
  - Item:
    - input:
      - total: 1
      - modulus: 12
    - status: valid
    - output: 1
  - Item:
    - input:
      - total: 60
      - modulus: 2
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 2.5
      - modulus: 6
    - status: invalid_parameters
  - Item:
    - input:
      - total: 23
      - modulus: 0
    - status: invalid_parameters
- compute: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
- numeric tolerance: 1e-10
- invariants:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
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
  - prompt: What is left after every full tray is packed?
  - answer: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

## Representations

- Item:
  - kind: geometry
  - description: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: What is left after every full tray is packed?
  - limitations: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - evidence kind: constructed_example
  - example ref: math:example:modular-arithmetic:case-1
- Item:
  - context: Finish with no loose counters
  - mapping: An exact multiple has remainder zero.
  - limitations: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - evidence kind: constructed_example
  - example ref: math:example:modular-arithmetic:case-2

## Source Refs

- source:number-foundations:integer

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Next branch expansion: added an exact bounded number/counting family, original examples, connected story and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:number-foundations:integer. [James Aspnes · Number Theory](https://www.cs.yale.edu/homes/aspnes/pinewiki/NumberTheory.html). Locator: Sections 1, 2.1 and 4: nonnegative remainders, common divisors and the Euclidean recurrence. The archive warns that some formulas are broken; only the inspected definitions and algorithm are used.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
