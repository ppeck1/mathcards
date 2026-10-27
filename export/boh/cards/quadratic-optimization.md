---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:quadratic-optimization", "id": "math:concept:quadratic-optimization", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:quadratic-optimization", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e59e9b22a364320551279e9641e54c6cf61d86545d16812137a43803d4fd8f3d"}, "purpose": "Find the largest rectangular area available from a fixed perimeter.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e59e9b22a364320551279e9641e54c6cf61d86545d16812137a43803d4fd8f3d", "status": "draft", "title": "Quadratics & optimization", "topics": ["mathematics", "algebra-functions", "modeling", "constrained maximum", "fixed-perimeter rectangle"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Quadratics & optimization

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:quadratic-optimization; revision 0.1.0-draft. Setting: Find the largest rectangular area available from a fixed perimeter. Expression: $A(w)=w(P/2-w)=P^2/16-(w-P/4)^2$. Conditions required for a defined value (a case may test their violation): All four sides are fenced with one fixed total perimeter. The shape is a flat rectangle with positive side lengths. Width lies strictly between zero and half the perimeter. Scope: The interactive controls restrict each parameter to its declared finite interval. Fence thickness, gate openings, land constraints and costs are excluded.

## Schema Version

0.1.0

## Id

math:concept:quadratic-optimization

## Slug

quadratic-optimization

## Type

concept

## Title

Quadratics & optimization

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- constrained maximum
- fixed-perimeter rectangle

## Branches

- algebra-functions
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Find the largest rectangular area available from a fixed perimeter.

## Meaning

Widen one side and the other side must shorten. The changing rectangle follows a quadratic curve with a visible maximum.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:quadratic-optimization:square
  - title: Use the whole fence well
  - role: applied_model
  - question: Which area results from a 5 m width with a 20 m perimeter?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
  - inputs:
    - width: 5
    - perimeter: 20
  - steps:
    - Item:
      - index: 1
      - expression: ℓ=20/2−5=5 m
      - reason: The perimeter determines the other side.
    - Item:
      - index: 2
      - expression: A=5×5=25 m²
      - reason: Multiply the two side lengths.
  - result:
    - exact: 25 m²
  - interpretation: This square is the largest-area rectangle for the stated fence budget.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: A=25−(w−5)²≤25; equality occurs at w=5.
  - limits: Only flat rectangles with all four sides fenced are compared.
  - preset:
    - width: 5
    - perimeter: 20
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
- Item:
  - id: math:example:quadratic-optimization:narrow
  - title: A long narrow bed
  - role: applied_model
  - question: What area results from width 1 m and perimeter 20 m?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
  - inputs:
    - width: 1
    - perimeter: 20
  - steps:
    - Item:
      - index: 1
      - expression: ℓ=10−1=9 m
      - reason: Allocate the remaining half-perimeter.
    - Item:
      - index: 2
      - expression: A=1×9=9 m²
      - reason: A long side does not by itself maximize area.
  - result:
    - exact: 9 m²
  - interpretation: The long bed uses the same fence but encloses less ground than the square.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The loss from the maximum is (1−5)²=16 m²; 25−16=9.
  - limits: The perimeter, rather than either side, remains fixed.
  - preset:
    - width: 1
    - perimeter: 20
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
- Item:
  - id: math:example:quadratic-optimization:swap
  - title: Turn the bed
  - role: structural
  - question: What happens at width 9 m with the same fence?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
  - inputs:
    - width: 9
    - perimeter: 20
  - steps:
    - Item:
      - index: 1
      - expression: ℓ=10−9=1 m
      - reason: The other side now has the previous width.
    - Item:
      - index: 2
      - expression: A=9×1=9 m²
      - reason: Exchanging rectangle sides preserves area.
  - result:
    - exact: 9 m²
  - interpretation: Widths equally far from 5 m produce equal areas.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: A(9)=25−(9−5)²=9=A(1).
  - limits: Orientation and site constraints are excluded.
  - preset:
    - width: 9
    - perimeter: 20
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
- Item:
  - id: math:example:quadratic-optimization:larger
  - title: A larger fence budget
  - role: applied_model
  - question: What area does a square with perimeter 30 m enclose?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
  - inputs:
    - width: 7.5
    - perimeter: 30
  - steps:
    - Item:
      - index: 1
      - expression: w=ℓ=30/4=7.5 m
      - reason: Split the fence equally among four sides.
    - Item:
      - index: 2
      - expression: A=7.5²=56.25 m²
      - reason: Square the side length.
  - result:
    - exact: 56.25 m²
  - interpretation: Multiplying perimeter by 1.5 multiplies the maximum area by 2.25.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: (30/20)²×25=56.25.
  - limits: The garden remains an unconstrained rectangle.
  - preset:
    - width: 7.5
    - perimeter: 30
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
- Item:
  - id: math:example:quadratic-optimization:wall
  - title: Three fenced sides are a different problem
  - role: counterexample
  - question: If a wall replaces one side, is a 5 m square still the best use of 20 m of fence?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.
  - inputs:
    - width: 5
    - perimeter: 20
    - fenced sides: 3
  - steps:
    - Item:
      - index: 1
      - expression: 2w+ℓ=20
      - reason: A wall changes the constraint.
    - Item:
      - index: 2
      - expression: A=w(20−2w)=50−2(w−5)²
      - reason: Complete the square with the new relation.
    - Item:
      - index: 3
      - expression: w=5 m; ℓ=10 m; A=50 m²
      - reason: The maximum under three-side fencing is not a square.
  - result:
    - exact: Outside this four-sided fence model; comparison maximum is 50 m²
  - interpretation: Changing the constraint changes the optimum.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: 2×5+10=20 m and 5×10=50 m².
  - limits: This interaction assumes all four sides need fence.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - All four sides are fenced with one fixed total perimeter.
    - The shape is a flat rectangle with positive side lengths.
    - Width lies strictly between zero and half the perimeter.

## Properties

- Item:
  - claim: Widen one side and the other side must shorten. The changing rectangle follows a quadratic curve with a visible maximum.
  - status: algebraic derivation
  - conditions: All four sides are fenced with one fixed total perimeter.; The shape is a flat rectangle with positive side lengths.; Width lies strictly between zero and half the perimeter.
  - derivation: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: All four sides are fenced with one fixed total perimeter. The shape is a flat rectangle with positive side lengths. Width lies strictly between zero and half the perimeter.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan width changes one pair of sides while the violet length compensates; the gold area and graph point move together.

## Representations

- Item:
  - kind: symbolic
  - description: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.
- Item:
  - kind: geometric
  - description: The cyan width changes one pair of sides while the violet length compensates; the gold area and graph point move together.

## Applications

- Item:
  - context: Use the whole fence well
  - mapping: This square is the largest-area rectangle for the stated fence budget.
  - limitations: Only flat rectangles with all four sides fenced are compared.
  - evidence kind: constructed_example
  - example ref: math:example:quadratic-optimization:square
- Item:
  - context: A long narrow bed
  - mapping: The long bed uses the same fence but encloses less ground than the square.
  - limitations: The perimeter, rather than either side, remains fixed.
  - evidence kind: constructed_example
  - example ref: math:example:quadratic-optimization:narrow

## Source Refs

- source:openstax:optimization

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Find the largest rectangular area available from a fixed perimeter.
- formal latex: A(w)=w(P/2-w)=P^2/16-(w-P/4)^2
- signature:
  - width: one rectangle side w in metres
  - perimeter: total fence length P in metres
  - area: enclosed rectangular area in square metres
- conditions:
  - All four sides are fenced with one fixed total perimeter.
  - The shape is a flat rectangle with positive side lengths.
  - Width lies strictly between zero and half the perimeter.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. Fence thickness, gate openings, land constraints and costs are excluded.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:openstax:optimization

## Grammar

- pronunciation: Find the largest rectangular area available from a fixed perimeter.
- expression latex: A(w)=w(P/2-w)=P^2/16-(w-P/4)^2
- formation rule: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: width
    - role: one rectangle side w in metres
    - type: Real quantity in declared setting
  - Item:
    - token: perimeter
    - role: total fence length P in metres
    - type: Real quantity in declared setting
  - Item:
    - token: area
    - role: enclosed rectangular area in square metres
    - type: Real quantity in declared setting
- ast:
  - id: ast:quadratic-optimization:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:width
      - kind: variable
      - symbol: width
      - type: Real
      - scope ref: scope:quadratic-optimization
    - Item:
      - id: n:perimeter
      - kind: variable
      - symbol: perimeter
      - type: Real
      - scope ref: scope:quadratic-optimization
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:width
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial0
      - argument: n:perimeter
      - type: Real
  - scopes:
    - Item:
      - id: scope:quadratic-optimization
      - kind: modelExpression
      - free variables:
        - width
        - perimeter
      - domain condition: All four sides are fenced with one fixed total perimeter.; The shape is a flat rectangle with positive side lengths.; Width lies strictly between zero and half the perimeter.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: quadratic-optimization-visual-model
- renderer id: quadratic-optimization-visual-model
- renderer version: 1.0.0
- model id: quadratic-optimization-visual-model
- model revision: 1.0.0
- expression id: ast:quadratic-optimization:expression
- interaction status: implemented
- description: The cyan width changes one pair of sides while the violet length compensates; the gold area and graph point move together.
- controls:
  - Item:
    - id: width
    - type: number
    - default: 5
    - min: 0.5
    - max: 9.5
    - slider min: 0.5
    - slider max: 9.5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: perimeter
    - type: number
    - default: 20
    - min: 20
    - max: 30
    - slider min: 20
    - slider max: 30
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - width: 5
      - perimeter: 20
    - output: 25
  - Item:
    - input:
      - width: 1
      - perimeter: 20
    - output: 9
  - Item:
    - input:
      - width: 9
      - perimeter: 20
    - output: 9
  - Item:
    - input:
      - width: 7.5
      - perimeter: 30
    - output: 56.25
  - Item:
    - input:
      - width: 0.5
      - perimeter: 20
    - output: 4.75
  - Item:
    - input:
      - width: 9.5
      - perimeter: 30
    - output: 52.25
  - Item:
    - input:
      - width: 0
      - perimeter: 20
    - status: invalid_parameters
- compute: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.
- numeric tolerance: 1e-10
- invariants:
  - All four sides are fenced with one fixed total perimeter.
  - The shape is a flat rectangle with positive side lengths.
  - Width lies strictly between zero and half the perimeter.
- limits:
  - The same 20 m of fence encloses all four sides of a flat rectangle.
  - The optimum shown is among rectangles only; circles and other boundaries are not compared.
  - Fence thickness, gate openings, land constraints and costs are excluded.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

## Referenced source registry

- Source ID: source:openstax:optimization. [Calculus Volume 1, 4.7 Applied Optimization Problems](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems). Locator: Optimization under a perimeter constraint; positivity of dimensions. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
