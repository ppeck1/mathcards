---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:irrational-square-root", "id": "math:concept:irrational-square-root", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:irrational-square-root", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5fd93a2fe6c9d17ba14c300e59209d128dee116bd1060ed077c73c269c1cb9c7"}, "purpose": "Why can the exact diagonal-to-side ratio have no whole-number fraction?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5fd93a2fe6c9d17ba14c300e59209d128dee116bd1060ed077c73c269c1cb9c7", "status": "draft", "title": "Irrational square root: a square diagonal", "topics": ["mathematics", "number-theory", "geometry", "square root of two", "square diagonal", "irrational number", "rational approximations"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Irrational square root: a square diagonal

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:irrational-square-root; revision 0.1.0-draft. Setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2. Expression: $d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.$. Conditions required for a defined value (a case may test their violation): The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales. Scope: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.

## Schema Version

0.1.0

## Id

math:concept:irrational-square-root

## Slug

irrational-square-root

## Type

concept

## Title

Irrational square root: a square diagonal

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-09T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- square root of two
- square diagonal
- irrational number
- rational approximations

## Branches

- number-theory
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can the exact diagonal-to-side ratio have no whole-number fraction?

## Meaning

The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.

## Prerequisites

- required:
  - math:concept:pythagorean-theorem
- helpful:
  - math:concept:rational-number
- depth:
  []

## Definition

- setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
- formal latex: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
- signature:
  - s: Square frame side, in metres
  - k: Whole choice from the first eight continued-fraction convergents
  - p: Positive integer numerator of the chosen convergent
  - q: Positive integer denominator of the chosen convergent
  - d: Exact geometric diagonal, in metres; decimal reading is approximate
  - h: Diagonal length estimated using the rational ratio p/q, in metres
  - Δ: Estimate minus geometric diagonal, in metres
  - √2: The positive square root of two, the exact diagonal-to-side ratio
- conditions:
  - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- domain notes: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
- proof status: Definition-level sources and originally authored derivations; independent review pending.
- source refs:
  - source:number-insights:irrational-square-root

## Grammar

- pronunciation: Irrational square root: a square diagonal
- expression latex: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
- formation rule: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
- precedence: Take the positive square root, multiply by the side, and separately multiply the selected numerator-to-denominator ratio by the same side before subtracting.
- symbols:
  - Item:
    - token: s
    - role: Square frame side, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: k
    - role: Whole choice from the first eight continued-fraction convergents
    - type: Locally declared quantity or constant
  - Item:
    - token: p
    - role: Positive integer numerator of the chosen convergent
    - type: Locally declared quantity or constant
  - Item:
    - token: q
    - role: Positive integer denominator of the chosen convergent
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Exact geometric diagonal, in metres; decimal reading is approximate
    - type: Locally declared quantity or constant
  - Item:
    - token: h
    - role: Diagonal length estimated using the rational ratio p/q, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: Δ
    - role: Estimate minus geometric diagonal, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: √2
    - role: The positive square root of two, the exact diagonal-to-side ratio
    - type: Locally declared quantity or constant
- ast:
  - id: ast:irrational-square-root:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:side
      - kind: variable
      - type: Declared numeric input
      - symbol: s
      - scope ref: scope:irrational-square-root
    - Item:
      - id: n:refinement
      - kind: variable
      - type: Declared numeric input
      - symbol: k
      - scope ref: scope:irrational-square-root
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded number/measurement rule
      - ref: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:side
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:refinement
  - scopes:
    - Item:
      - id: scope:irrational-square-root
      - kind: modelExpression
      - free variables:
        - s
        - k
      - external parameters:
        - Declared Euclidean geometry, exact integer choices and mathematical constants as stated
      - domain condition: The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- parse errors:
  - Item:
    - input: Use an unsupported index, domain or unit
    - status: model mismatch
    - reason: The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- ast coverage: Typed application outline; the formal expression and conditions state the full bounded construction.
- output symbol bindings:
  - s: side
  - k: refinement
  - p: numerator
  - q: denominator
  - d: output
  - h: estimatedDiagonal
  - Δ: signedError
  - √2: root

## Properties

- Item:
  - claim: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
  - conditions: The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - derivation: For a unit square, Pythagoras gives d²=1²+1²=2, hence d=√2. Suppose √2=p/q for coprime positive integers p and q. Then p²=2q², so p² is even, hence p is even. Write p=2t. Substitution gives q²=2t², so q is also even, contradicting coprimality. Thus no integer ratio equals √2. Scaling both legs to s gives diagonal s√2. The finite convergents displayed here approximate this length; the parity contradiction, rather than their decimal agreement, proves irrationality.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:irrational-square-root:case-1

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
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: This lesson builds on the stated prerequisite’s ratio or geometric rule.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:rational-number
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked example provides a contrasting numerical or geometric construction.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:irrational-square-root:case-1
  - title: A unit-square brace
  - role: applied_model
  - question: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
  - assumptions:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - inputs:
    - side: 1
    - refinement: 3
  - steps:
    - Item:
      - index: 1
      - expression: s = 1; k = 3
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
      - reason: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
    - Item:
      - index: 3
      - expression: d ≈ 1.4142135623730951 m
      - reason: The 7/5 estimate is 1.4 metres, shorter than the true √2-metre diagonal. A close finite fraction is still a different number.
  - result:
    - approximate: 1.4142135623730951
  - interpretation: The 7/5 estimate is 1.4 metres, shorter than the true √2-metre diagonal. A close finite fraction is still a different number.
  - independent check:
    - method: Evaluate the finite continued fraction from its tail using exact Fraction arithmetic, and compare the geometric diagonal with a high-precision Decimal Newton square root.
    - expected: 1.4142135623730951
  - limits: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - preset:
    - side: 1
    - refinement: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- Item:
  - id: math:example:irrational-square-root:case-2
  - title: An overlong first refinement
  - role: applied_model
  - question: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
  - assumptions:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - inputs:
    - side: 1
    - refinement: 2
  - steps:
    - Item:
      - index: 1
      - expression: s = 1; k = 2
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
      - reason: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
    - Item:
      - index: 3
      - expression: d ≈ 1.4142135623730951 m
      - reason: The fraction 3/2 gives a 1.5-metre brace, longer than the geometric diagonal. The signed error identifies the overshoot.
  - result:
    - approximate: 1.4142135623730951
  - interpretation: The fraction 3/2 gives a 1.5-metre brace, longer than the geometric diagonal. The signed error identifies the overshoot.
  - independent check:
    - method: Evaluate the finite continued fraction from its tail using exact Fraction arithmetic, and compare the geometric diagonal with a high-precision Decimal Newton square root.
    - expected: 1.4142135623730951
  - limits: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - preset:
    - side: 1
    - refinement: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- Item:
  - id: math:example:irrational-square-root:case-3
  - title: Scale the entire frame
  - role: applied_model
  - question: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
  - assumptions:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - inputs:
    - side: 2
    - refinement: 3
  - steps:
    - Item:
      - index: 1
      - expression: s = 2; k = 3
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
      - reason: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
    - Item:
      - index: 3
      - expression: d ≈ 2.8284271247461903 m
      - reason: Doubling both square sides doubles both the true and estimated braces. The absolute length error doubles too; their dimensionless ratios stay fixed.
  - result:
    - approximate: 2.8284271247461903
  - interpretation: Doubling both square sides doubles both the true and estimated braces. The absolute length error doubles too; their dimensionless ratios stay fixed.
  - independent check:
    - method: Evaluate the finite continued fraction from its tail using exact Fraction arithmetic, and compare the geometric diagonal with a high-precision Decimal Newton square root.
    - expected: 2.8284271247461903
  - limits: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - preset:
    - side: 2
    - refinement: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- Item:
  - id: math:example:irrational-square-root:case-4
  - title: A much closer workshop estimate
  - role: applied_model
  - question: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
  - assumptions:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - inputs:
    - side: 3
    - refinement: 8
  - steps:
    - Item:
      - index: 1
      - expression: s = 3; k = 8
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
      - reason: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
    - Item:
      - index: 3
      - expression: d ≈ 4.242640687119286 m
      - reason: The ratio 577/408 has exact integer residual p²−2q²=1. Its length error is small enough for the two drawing lines to overlap, but the fraction still differs from √2.
  - result:
    - approximate: 4.242640687119286
  - interpretation: The ratio 577/408 has exact integer residual p²−2q²=1. Its length error is small enough for the two drawing lines to overlap, but the fraction still differs from √2.
  - independent check:
    - method: Evaluate the finite continued fraction from its tail using exact Fraction arithmetic, and compare the geometric diagonal with a high-precision Decimal Newton square root.
    - expected: 4.242640687119286
  - limits: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - preset:
    - side: 3
    - refinement: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
- Item:
  - id: math:example:irrational-square-root:case-5
  - title: A small frame with the coarsest estimate
  - role: applied_model
  - question: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - setting: A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.
  - assumptions:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - inputs:
    - side: 0.5
    - refinement: 1
  - steps:
    - Item:
      - index: 1
      - expression: s = 0.5; k = 1
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
      - reason: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
    - Item:
      - index: 3
      - expression: d ≈ 0.7071067811865476 m
      - reason: The fraction 1/1 gives a half-metre estimate, equal to a side and shorter than the diagonal. This makes the gap visible before considering finer fractions.
  - result:
    - approximate: 0.7071067811865476
  - interpretation: The fraction 1/1 gives a half-metre estimate, equal to a side and shorter than the diagonal. This makes the gap visible before considering finer fractions.
  - independent check:
    - method: Evaluate the finite continued fraction from its tail using exact Fraction arithmetic, and compare the geometric diagonal with a high-precision Decimal Newton square root.
    - expected: 0.7071067811865476
  - limits: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - preset:
    - side: 0.5
    - refinement: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.

## Interactive

- component id: component:irrational-square-root
- renderer id: irrational-square-root-visual-model
- renderer version: 1
- model id: irrational-square-root-visual-model
- model revision: 1
- expression id: ast:irrational-square-root:expression
- interaction status: implemented
- description: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
- controls:
  - Item:
    - id: side
    - type: number
    - default: 1
    - min: 0.5
    - max: 3
    - step: 0.05
  - Item:
    - id: refinement
    - type: number
    - default: 3
    - min: 1
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - side: 0.5
      - refinement: 1
    - status: valid
    - output: 0.7071067811865476
  - Item:
    - input:
      - side: 0.5
      - refinement: 2
    - status: valid
    - output: 0.7071067811865476
  - Item:
    - input:
      - side: 0.5
      - refinement: 4
    - status: valid
    - output: 0.7071067811865476
  - Item:
    - input:
      - side: 0.5
      - refinement: 8
    - status: valid
    - output: 0.7071067811865476
  - Item:
    - input:
      - side: 1
      - refinement: 1
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - side: 1
      - refinement: 2
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - side: 1
      - refinement: 4
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - side: 1
      - refinement: 8
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - side: 3
      - refinement: 1
    - status: valid
    - output: 4.242640687119286
  - Item:
    - input:
      - side: 3
      - refinement: 2
    - status: valid
    - output: 4.242640687119286
  - Item:
    - input:
      - side: 3
      - refinement: 4
    - status: valid
    - output: 4.242640687119286
  - Item:
    - input:
      - side: 3
      - refinement: 8
    - status: valid
    - output: 4.242640687119286
  - Item:
    - input:
      - side: 0.25
      - refinement: 3
    - status: invalid_parameters
  - Item:
    - input:
      - side: 3.25
      - refinement: 3
    - status: invalid_parameters
  - Item:
    - input:
      - side: true
      - refinement: 3
    - status: invalid_parameters
  - Item:
    - input:
      - side: 2
      - refinement: 3
    - status: invalid_parameters
  - Item:
    - input:
      - side: 1
      - refinement: 0.75
    - status: invalid_parameters
  - Item:
    - input:
      - side: 1
      - refinement: 8.25
    - status: invalid_parameters
  - Item:
    - input:
      - side: 1
      - refinement: true
    - status: invalid_parameters
  - Item:
    - input:
      - side: 1
      - refinement: 2
    - status: invalid_parameters
  - Item:
    - input:
      - side: 1
      - refinement: 1.5
    - status: invalid_parameters
- compute: d=s\sqrt{2},\quad h=s\frac{p}{q},\quad \Delta=h-d.
- numeric tolerance: 5e-11
- invariants:
  - The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Continuous physical quantities retain continuous shapes; whole indices and output counts retain discrete meanings.
- limits:
  - The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
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
  - prompt: Why can the exact diagonal-to-side ratio have no whole-number fraction?
  - answer: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.
- Item:
  - prompt: What does this picture measure?
  - answer: The square, true diagonal and rational comparison lengths share one fixed metre scale; exact integer residual and signed error retain meaning below drawing resolution.

## Representations

- Item:
  - kind: geometry
  - description: The square, true diagonal and rational comparison lengths share one fixed metre scale; exact integer residual and signed error retain meaning below drawing resolution.
- Item:
  - kind: graph
  - description: Geometric diagonal versus square side is a straight line of slope √2. The rational approximation choice stays fixed and does not change the true diagonal.
- Item:
  - kind: substitution
  - description: The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.

## Applications

- Item:
  - context: A unit-square brace
  - mapping: The 7/5 estimate is 1.4 metres, shorter than the true √2-metre diagonal. A close finite fraction is still a different number.
  - limitations: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - evidence kind: constructed_example
  - example ref: math:example:irrational-square-root:case-1
- Item:
  - context: An overlong first refinement
  - mapping: The fraction 3/2 gives a 1.5-metre brace, longer than the geometric diagonal. The signed error identifies the overshoot.
  - limitations: The eight finite ratios come from the continued fraction [1;2,2,…]. The drawing and numerical tests compare approximations, while the parity proof establishes irrationality of √2. This is not a general classification of irrational numbers or a numerical proof from finitely many digits.
  - evidence kind: constructed_example
  - example ref: math:example:irrational-square-root:case-2

## Source Refs

- source:number-insights:irrational-square-root

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number/measurement lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-insights:irrational-square-root. [Wolfram MathWorld · Pythagoras’s Constant](https://mathworld.wolfram.com/PythagorassConstant.html). Locator: Unit-square diagonal interpretation, irrational-number definition and continued fraction, equation (2); the parity contradiction and frame examples are original derivations.. Verification: Definition-level page inspected 2026-11-09. Independent mathematical/pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored scenarios, derivations and visual encodings; no source exercise, data or artwork reproduced.
