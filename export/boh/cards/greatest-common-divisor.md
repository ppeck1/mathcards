---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:greatest-common-divisor", "id": "math:concept:greatest-common-divisor", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:greatest-common-divisor", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3ed104aeed1d4b672a5963a318fff0b516338e54ee44d7d10f0f2517a0d7f16f"}, "purpose": "What is the longest piece that cuts both ribbons without waste?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3ed104aeed1d4b672a5963a318fff0b516338e54ee44d7d10f0f2517a0d7f16f", "status": "draft", "title": "Greatest common divisor", "topics": ["mathematics", "numbers-number-theory", "greatest common divisor"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Greatest common divisor

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:greatest-common-divisor; revision 0.1.0-draft. Setting: Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece. Expression: $\operatorname{gcd}(a,b)=\operatorname{gcd}(b,a\bmod b),\quad a=qb+r.$. Conditions required for a defined value (a case may test their violation): Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

## Schema Version

0.1.0

## Id

math:concept:greatest-common-divisor

## Slug

greatest-common-divisor

## Type

concept

## Title

Greatest common divisor

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

- greatest common divisor

## Branches

- numbers-number-theory

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What is the longest piece that cuts both ribbons without waste?

## Meaning

The greatest common divisor of two positive integers is the largest positive integer dividing both. Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:modular-arithmetic
  - math:concept:rational-number
- depth:
  []

## Definition

- setting: Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.
- formal latex: \operatorname{gcd}(a,b)=\operatorname{gcd}(b,a\bmod b),\quad a=qb+r.
- signature:
  - a: Length of the first ribbon in centimetres.
  - b: Length of the second ribbon in centimetres.
  - d: Longest whole-centimetre piece dividing both ribbon lengths.
  - gcd(a,b): Greatest common divisor of these two positive integer lengths.
- conditions:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:integer

## Grammar

- pronunciation: Greatest common divisor
- expression latex: \operatorname{gcd}(a,b)=\operatorname{gcd}(b,a\bmod b),\quad a=qb+r.
- formation rule: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: a
    - role: Length of the first ribbon in centimetres.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: b
    - role: Length of the second ribbon in centimetres.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: d
    - role: Longest whole-centimetre piece dividing both ribbon lengths.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: gcd(a,b)
    - role: Greatest common divisor of these two positive integer lengths.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:greatest-common-divisor:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:first
      - kind: variable
      - type: Declared integer input
      - symbol: a
      - scope ref: scope:greatest-common-divisor
    - Item:
      - id: n:second
      - kind: variable
      - type: Declared integer input
      - symbol: b
      - scope ref: scope:greatest-common-divisor
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
    - Item:
      - id: n:bound-first
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:first
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-first
      - argument: n:second
  - scopes:
    - Item:
      - id: scope:greatest-common-divisor
      - kind: modelExpression
      - free variables:
        - a
        - b
      - domain condition: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - a: first
  - b: second
  - d: gcd
  - gcd(a,b): output

## Properties

- Item:
  - claim: A Euclidean replacement preserves common divisors.
  - conditions: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - derivation: From a=qb+r, any common divisor of a,b divides r=a−qb; any common divisor of b,r divides a=qb+r.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:greatest-common-divisor:case-1

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
  - reason: Greatest common divisor supplies a bounded connection to modular arithmetic.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:rational-number
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Greatest common divisor supplies a bounded connection to rational number.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:greatest-common-divisor:case-1
  - title: Cut two workshop ribbons
  - role: applied_model
  - question: What is the longest piece that cuts both ribbons without waste?
  - setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
  - assumptions:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - inputs:
    - first: 24
    - second: 18
  - steps:
    - Item:
      - index: 1
      - expression: a = 24; b = 18
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 24 = 1 × 18 + 6; 18 = 3 × 6
      - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
  - result:
    - exact: 6 cm
  - interpretation: The longest common cut is six centimetres.
  - independent check:
    - method: The positive lengths that divide both 24 cm and 18 cm are 1, 2, 3, 6 cm. The longest common cut is 6 cm.
    - expected: 6
  - limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - preset:
    - first: 24
    - second: 18
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- Item:
  - id: math:example:greatest-common-divisor:case-2
  - title: Keep a seven-centimetre cut
  - role: applied_model
  - question: What is the longest piece that cuts both ribbons without waste?
  - setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
  - assumptions:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - inputs:
    - first: 35
    - second: 14
  - steps:
    - Item:
      - index: 1
      - expression: a = 35; b = 14
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 35 = 2 × 14 + 7; 14 = 2 × 7
      - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
  - result:
    - exact: 7 cm
  - interpretation: Five pieces and two pieces use all of the two ribbons.
  - independent check:
    - method: The positive lengths that divide both 35 cm and 14 cm are 1, 7 cm. The longest common cut is 7 cm.
    - expected: 7
  - limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - preset:
    - first: 35
    - second: 14
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- Item:
  - id: math:example:greatest-common-divisor:case-3
  - title: Two coprime lengths
  - role: applied_model
  - question: What is the longest piece that cuts both ribbons without waste?
  - setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
  - assumptions:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - inputs:
    - first: 17
    - second: 12
  - steps:
    - Item:
      - index: 1
      - expression: a = 17; b = 12
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 17 = 1 × 12 + 5; 12 = 2 × 5 + 2; 5 = 2 × 2 + 1
      - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
  - result:
    - exact: 1 cm
  - interpretation: Only a one-centimetre whole cut divides both lengths.
  - independent check:
    - method: The positive lengths that divide both 17 cm and 12 cm are 1 cm. The longest common cut is 1 cm.
    - expected: 1
  - limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - preset:
    - first: 17
    - second: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- Item:
  - id: math:example:greatest-common-divisor:case-4
  - title: Equal ribbon lengths
  - role: applied_model
  - question: What is the longest piece that cuts both ribbons without waste?
  - setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
  - assumptions:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - inputs:
    - first: 12
    - second: 12
  - steps:
    - Item:
      - index: 1
      - expression: a = 12; b = 12
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 12 = 1 × 12 + 0
      - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
  - result:
    - exact: 12 cm
  - interpretation: Keeping each ribbon whole is the longest common cut.
  - independent check:
    - method: The positive lengths that divide both 12 cm and 12 cm are 1, 2, 3, 4, 6, 12 cm. The longest common cut is 12 cm.
    - expected: 12
  - limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - preset:
    - first: 12
    - second: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- Item:
  - id: math:example:greatest-common-divisor:case-5
  - title: One length divides the other
  - role: applied_model
  - question: What is the longest piece that cuts both ribbons without waste?
  - setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
  - assumptions:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - inputs:
    - first: 60
    - second: 15
  - steps:
    - Item:
      - index: 1
      - expression: a = 60; b = 15
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 60 = 4 × 15 + 0
      - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
  - result:
    - exact: 15 cm
  - interpretation: A fifteen-centimetre cut makes four pieces from the longer ribbon.
  - independent check:
    - method: The positive lengths that divide both 60 cm and 15 cm are 1, 3, 5, 15 cm. The longest common cut is 15 cm.
    - expected: 15
  - limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - preset:
    - first: 60
    - second: 15
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

## Interactive

- component id: component:greatest-common-divisor
- renderer id: greatest-common-divisor-visual-model
- renderer version: 1
- model id: greatest-common-divisor-visual-model
- model revision: 1
- expression id: ast:greatest-common-divisor:expression
- interaction status: implemented
- description: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
- controls:
  - Item:
    - id: first
    - type: number
    - default: 24
    - min: 1
    - max: 60
    - step: 1
  - Item:
    - id: second
    - type: number
    - default: 18
    - min: 1
    - max: 60
    - step: 1
- expected cases:
  - Item:
    - input:
      - first: 24
      - second: 18
    - status: valid
    - output: 6
  - Item:
    - input:
      - first: 35
      - second: 14
    - status: valid
    - output: 7
  - Item:
    - input:
      - first: 17
      - second: 12
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 12
      - second: 12
    - status: valid
    - output: 12
  - Item:
    - input:
      - first: 60
      - second: 15
    - status: valid
    - output: 15
  - Item:
    - input:
      - first: 1
      - second: 60
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 60
      - second: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 0
      - second: 18
    - status: invalid_parameters
  - Item:
    - input:
      - first: 24
      - second: 2.5
    - status: invalid_parameters
- compute: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
- numeric tolerance: 1e-10
- invariants:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
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
  - prompt: What is the longest piece that cuts both ribbons without waste?
  - answer: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

## Representations

- Item:
  - kind: geometry
  - description: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: What is the longest piece that cuts both ribbons without waste?
  - limitations: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - evidence kind: constructed_example
  - example ref: math:example:greatest-common-divisor:case-1
- Item:
  - context: Keep a seven-centimetre cut
  - mapping: Five pieces and two pieces use all of the two ribbons.
  - limitations: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - evidence kind: constructed_example
  - example ref: math:example:greatest-common-divisor:case-2

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
