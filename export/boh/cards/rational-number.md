---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:rational-number", "id": "math:concept:rational-number", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:rational-number", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ad2b28db9be491d72dae82a0b5d6e28dcb2a344077b1604d00fb4224e9661778"}, "purpose": "Can a fraction change its name without changing its length?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ad2b28db9be491d72dae82a0b5d6e28dcb2a344077b1604d00fb4224e9661778", "status": "draft", "title": "Rational numbers and fractions", "topics": ["mathematics", "numbers-number-theory", "rational numbers and fractions"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Rational numbers and fractions

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:rational-number; revision 0.1.0-draft. Setting: A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length. Expression: $\frac{a}{b}=\frac{p}{q},\quad p=a/d,\quad q=b/d,\quad d=\operatorname{gcd}(|a|,b).$. Conditions required for a defined value (a case may test their violation): The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

## Schema Version

0.1.0

## Id

math:concept:rational-number

## Slug

rational-number

## Type

concept

## Title

Rational numbers and fractions

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

- rational numbers and fractions

## Branches

- numbers-number-theory

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can a fraction change its name without changing its length?

## Meaning

A rational number is expressible as a quotient of two integers with a nonzero denominator. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.

## Prerequisites

- required:

- helpful:
  - math:concept:greatest-common-divisor
  - math:concept:ratio-scale
  - math:concept:real-logarithm
- depth:


## Definition

- setting: A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.
- formal latex: \frac{a}{b}=\frac{p}{q},\quad p=a/d,\quad q=b/d,\quad d=\operatorname{gcd}(|a|,b).
- signature:
  - a: Signed count of ribbon pieces held or owed.
  - b: Positive number of equal pieces making one metre.
  - p: Numerator after canceling the common divisor.
  - q: Positive denominator after canceling the common divisor.
  - d: Common positive divisor used to reduce both parts.
- conditions:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- domain notes: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:number-foundations:fraction

## Grammar

- pronunciation: Rational numbers and fractions
- expression latex: \frac{a}{b}=\frac{p}{q},\quad p=a/d,\quad q=b/d,\quad d=\operatorname{gcd}(|a|,b).
- formation rule: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
- precedence: Respect the declared grouping, integer domain and distinction between ordered and unordered choices.
- symbols:
  - Item:
    - token: a
    - role: Signed count of ribbon pieces held or owed.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: b
    - role: Positive number of equal pieces making one metre.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: p
    - role: Numerator after canceling the common divisor.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: q
    - role: Positive denominator after canceling the common divisor.
    - type: Declared count, exact result or locally defined arithmetic quantity
  - Item:
    - token: d
    - role: Common positive divisor used to reduce both parts.
    - type: Declared count, exact result or locally defined arithmetic quantity
- ast:
  - id: ast:rational-number:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:numerator
      - kind: variable
      - type: Declared integer input
      - symbol: a
      - scope ref: scope:rational-number
    - Item:
      - id: n:denominator
      - kind: variable
      - type: Declared integer input
      - symbol: b
      - scope ref: scope:rational-number
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded arithmetic rule
      - ref: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
    - Item:
      - id: n:bound-numerator
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:numerator
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-numerator
      - argument: n:denominator
  - scopes:
    - Item:
      - id: scope:rational-number
      - kind: modelExpression
      - free variables:
        - a
        - b
      - domain condition: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- parse errors:
  - Item:
    - input: Use a fractional count or leave the declared range
    - status: unsupported parameter
    - reason: Only the stated bounded integer family is executable; no silent rounding or extrapolation is performed.
- ast coverage: A typed application outline of this bounded family; not an arbitrary arithmetic-expression parser.
- output symbol bindings:
  - a: numerator
  - b: denominator
  - p: reducedNumerator
  - q: reducedDenominator
  - d: gcd

## Properties

- Item:
  - claim: Canceling a common nonzero factor preserves a fraction.
  - conditions: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - derivation: If a=dp and b=dq with d positive, then a/b=(dp)/(dq)=p/q. The denominator remains nonzero.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:rational-number:case-1

## History

- status: source_gap
- claims:

- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:greatest-common-divisor
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Rational numbers and fractions supplies a bounded connection to greatest common divisor.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Rational numbers and fractions supplies a bounded connection to ratio scale.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
- Item:
  - target: math:concept:real-logarithm
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Rational numbers and fractions supplies a bounded connection to real logarithm.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:rational-number:case-1
  - title: Rename six eighths
  - role: applied_model
  - question: Can a fraction change its name without changing its length?
  - setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
  - assumptions:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - inputs:
    - numerator: 6
    - denominator: 8
  - steps:
    - Item:
      - index: 1
      - expression: a = 6; b = 8
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 6/8 = 3/4
      - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
  - result:
    - exact: 3/4 m
  - interpretation: Cancel two from numerator and denominator; the length stays three quarters of a metre.
  - independent check:
    - method: Cross-multiply the original and reduced fractions: 6 × 4 = 8 × (3) = 24. The reduced numerator and denominator share no positive divisor above 1.
    - expected: 0.75
  - limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - preset:
    - numerator: 6
    - denominator: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- Item:
  - id: math:example:rational-number:case-2
  - title: Record a debt of ribbon
  - role: applied_model
  - question: Can a fraction change its name without changing its length?
  - setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
  - assumptions:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - inputs:
    - numerator: -3
    - denominator: 4
  - steps:
    - Item:
      - index: 1
      - expression: a = -3; b = 4
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: −3/4 = −3/4
      - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
  - result:
    - exact: -3/4 m
  - interpretation: The negative sign places the balance to the left of zero.
  - independent check:
    - method: Cross-multiply the original and reduced fractions: -3 × 4 = 4 × (-3) = -12. The reduced numerator and denominator share no positive divisor above 1.
    - expected: -0.75
  - limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - preset:
    - numerator: -3
    - denominator: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- Item:
  - id: math:example:rational-number:case-3
  - title: A zero balance
  - role: applied_model
  - question: Can a fraction change its name without changing its length?
  - setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
  - assumptions:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - inputs:
    - numerator: 0
    - denominator: 7
  - steps:
    - Item:
      - index: 1
      - expression: a = 0; b = 7
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 0/7 = 0
      - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
  - result:
    - exact: 0 m
  - interpretation: Changing a nonzero denominator does not change a zero numerator into a positive length.
  - independent check:
    - method: Cross-multiply the original and reduced fractions: 0 × 1 = 7 × (0) = 0. The reduced numerator and denominator share no positive divisor above 1.
    - expected: 0.0
  - limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - preset:
    - numerator: 0
    - denominator: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- Item:
  - id: math:example:rational-number:case-4
  - title: Whole metres
  - role: applied_model
  - question: Can a fraction change its name without changing its length?
  - setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
  - assumptions:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - inputs:
    - numerator: 12
    - denominator: 1
  - steps:
    - Item:
      - index: 1
      - expression: a = 12; b = 1
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 12/1 = 12
      - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
  - result:
    - exact: 12 m
  - interpretation: A denominator of one names whole metres.
  - independent check:
    - method: Cross-multiply the original and reduced fractions: 12 × 1 = 1 × (12) = 12. The reduced numerator and denominator share no positive divisor above 1.
    - expected: 12.0
  - limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - preset:
    - numerator: 12
    - denominator: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- Item:
  - id: math:example:rational-number:case-5
  - title: Keep a nonterminating decimal exact
  - role: applied_model
  - question: Can a fraction change its name without changing its length?
  - setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
  - assumptions:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - inputs:
    - numerator: 2
    - denominator: 6
  - steps:
    - Item:
      - index: 1
      - expression: a = 2; b = 6
      - reason: Use the stated whole-number conditions.
    - Item:
      - index: 2
      - expression: 2/6 = 1/3
      - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
  - result:
    - exact: 1/3 m
  - interpretation: The exact fraction remains one third even when its decimal display must be rounded.
  - independent check:
    - method: Cross-multiply the original and reduced fractions: 2 × 3 = 6 × (1) = 6. The reduced numerator and denominator share no positive divisor above 1.
    - expected: 0.3333333333333333
  - limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - preset:
    - numerator: 2
    - denominator: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

## Interactive

- component id: component:rational-number
- renderer id: rational-number-visual-model
- renderer version: 1
- model id: rational-number-visual-model
- model revision: 1
- expression id: ast:rational-number:expression
- interaction status: implemented
- description: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
- controls:
  - Item:
    - id: numerator
    - type: number
    - default: 6
    - min: -12
    - max: 12
    - step: 1
  - Item:
    - id: denominator
    - type: number
    - default: 8
    - min: 1
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - numerator: 6
      - denominator: 8
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - numerator: -3
      - denominator: 4
    - status: valid
    - output: -0.75
  - Item:
    - input:
      - numerator: 0
      - denominator: 7
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - numerator: 12
      - denominator: 1
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - numerator: 2
      - denominator: 6
    - status: valid
    - output: 0.3333333333333333
  - Item:
    - input:
      - numerator: -12
      - denominator: 12
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - numerator: 1
      - denominator: 12
    - status: valid
    - output: 0.08333333333333333
  - Item:
    - input:
      - numerator: 6
      - denominator: 0
    - status: invalid_parameters
  - Item:
    - input:
      - numerator: 0.5
      - denominator: 8
    - status: invalid_parameters
- compute: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
- numeric tolerance: 1e-10
- invariants:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
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
  - prompt: Can a fraction change its name without changing its length?
  - answer: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
- Item:
  - prompt: What conditions make this picture valid?
  - answer: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

## Representations

- Item:
  - kind: geometry
  - description: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
- Item:
  - kind: graph
  - description: The graph displays exact discrete settings or positional contributions. There are no invented fractional count states.
- Item:
  - kind: substitution
  - description: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.

## Applications

- Item:
  - context: Original workshop scenario
  - mapping: Can a fraction change its name without changing its length?
  - limitations: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - evidence kind: constructed_example
  - example ref: math:example:rational-number:case-1
- Item:
  - context: Record a debt of ribbon
  - mapping: The negative sign places the balance to the left of zero.
  - limitations: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - evidence kind: constructed_example
  - example ref: math:example:rational-number:case-2

## Source Refs

- source:number-foundations:fraction

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Next branch expansion: added an exact bounded number/counting family, original examples, connected story and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:number-foundations:fraction. [OpenStax · Rational Numbers](https://openstax.org/books/contemporary-mathematics/pages/3-4-rational-numbers). Locator: Rational numbers, equivalent fractions and simplification.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
