---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:golden-ratio", "id": "math:concept:golden-ratio", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:golden-ratio", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e5199684f7f097f78974be967f064fa839e0a6999bf2b3475969beedbcd556b0"}, "purpose": "Which rectangle keeps the same aspect ratio after removing a square?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e5199684f7f097f78974be967f064fa839e0a6999bf2b3475969beedbcd556b0", "status": "draft", "title": "Golden ratio and similar rectangles", "topics": ["mathematics", "geometry", "algebra", "golden rectangle", "phi", "Fibonacci ratio", "self-similar rectangle"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Golden ratio and similar rectangles

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:golden-ratio; revision 0.1.0-draft. Setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers. Expression: $\varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.$. Conditions required for a defined value (a case may test their violation): The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows. Scope: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.

## Schema Version

0.1.0

## Id

math:concept:golden-ratio

## Slug

golden-ratio

## Type

concept

## Title

Golden ratio and similar rectangles

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

- golden rectangle
- phi
- Fibonacci ratio
- self-similar rectangle

## Branches

- geometry
- algebra

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which rectangle keeps the same aspect ratio after removing a square?

## Meaning

A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.

## Prerequisites

- required:
  - math:concept:ratio-scale
- helpful:
  - math:concept:irrational-square-root
- depth:
  - math:concept:geometric-series

## Definition

- setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
- formal latex: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
- signature:
  - s: Short side of the panel, in metres
  - k: Whole Fibonacci index, with F(1)=F(2)=1
  - φ: Exact golden ratio, the root greater than one of φ²=φ+1
  - L: Long side of the golden panel, in metres
  - w: Width left after removing the square, in metres
  - F k: Selected Fibonacci number
  - F {k+1}: Following Fibonacci number
  - q: Finite consecutive Fibonacci ratio
  - Δ: Finite ratio minus the golden ratio
- conditions:
  - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- domain notes: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
- proof status: Definition-level sources and originally authored derivations; independent review pending.
- source refs:
  - source:number-insights:golden-ratio

## Grammar

- pronunciation: Golden ratio and similar rectangles
- expression latex: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
- formation rule: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
- precedence: Take the positive square root of five, add one and divide by two. Multiply the short side by that constant before subtracting the square side.
- symbols:
  - Item:
    - token: s
    - role: Short side of the panel, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: k
    - role: Whole Fibonacci index, with F(1)=F(2)=1
    - type: Locally declared quantity or constant
  - Item:
    - token: φ
    - role: Exact golden ratio, the root greater than one of φ²=φ+1
    - type: Locally declared quantity or constant
  - Item:
    - token: L
    - role: Long side of the golden panel, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: w
    - role: Width left after removing the square, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: F_k
    - role: Selected Fibonacci number
    - type: Locally declared quantity or constant
  - Item:
    - token: F_{k+1}
    - role: Following Fibonacci number
    - type: Locally declared quantity or constant
  - Item:
    - token: q
    - role: Finite consecutive Fibonacci ratio
    - type: Locally declared quantity or constant
  - Item:
    - token: Δ
    - role: Finite ratio minus the golden ratio
    - type: Locally declared quantity or constant
- ast:
  - id: ast:golden-ratio:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:shortSide
      - kind: variable
      - type: Declared numeric input
      - symbol: s
      - scope ref: scope:golden-ratio
    - Item:
      - id: n:term
      - kind: variable
      - type: Declared numeric input
      - symbol: k
      - scope ref: scope:golden-ratio
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded number/measurement rule
      - ref: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:shortSide
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:term
  - scopes:
    - Item:
      - id: scope:golden-ratio
      - kind: modelExpression
      - free variables:
        - s
        - k
      - external parameters:
        - Declared Euclidean geometry, exact integer choices and mathematical constants as stated
      - domain condition: The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- parse errors:
  - Item:
    - input: Use an unsupported index, domain or unit
    - status: model mismatch
    - reason: The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- ast coverage: Typed application outline; the formal expression and conditions state the full bounded construction.
- output symbol bindings:
  - s: shortSide
  - k: term
  - φ: phi
  - L: output
  - w: remainder
  - F k: fibonacci
  - F {k+1}: following
  - q: approximation
  - Δ: ratioError

## Properties

- Item:
  - claim: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
  - conditions: The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - derivation: Let the long-to-short ratio be φ=L/s>1. After removing an s-by-s square, the remaining dimensions are s and L−s. Requiring the rotated remainder to be similar gives L/s=s/(L−s), hence φ(φ−1)=1 and φ²−φ−1=0. The positive root greater than one is (1+√5)/2. Fibonacci numbers satisfy F(k+1)=F(k)+F(k−1); the shown ratios are rational approximations. This finite display does not by itself prove convergence.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:golden-ratio:case-1

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
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: This lesson builds on the stated prerequisite’s ratio or geometric rule.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:irrational-square-root
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked example provides a contrasting numerical or geometric construction.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:geometric-series
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked lesson supplies a further viewpoint without changing this bounded model.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:golden-ratio:case-1
  - title: A one-metre panel height
  - role: applied_model
  - question: Which rectangle keeps the same aspect ratio after removing a square?
  - setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
  - assumptions:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - inputs:
    - shortSide: 1
    - term: 5
  - steps:
    - Item:
      - index: 1
      - expression: s = 1; k = 5
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
      - reason: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
    - Item:
      - index: 3
      - expression: L ≈ 1.618033988749895 m
      - reason: The long side is φ metres. Removing a one-metre square leaves width φ−1, and rotating the remainder restores aspect ratio φ.
  - result:
    - approximate: 1.618033988749895
  - interpretation: The long side is φ metres. Removing a one-metre square leaves width φ−1, and rotating the remainder restores aspect ratio φ.
  - independent check:
    - method: Use a Decimal Newton square root to recover the positive quadratic root, and an independently tabulated Fibonacci sequence to check the chosen finite ratio.
    - expected: 1.618033988749895
  - limits: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - preset:
    - shortSide: 1
    - term: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- Item:
  - id: math:example:golden-ratio:case-2
  - title: The first coarse ratio
  - role: applied_model
  - question: Which rectangle keeps the same aspect ratio after removing a square?
  - setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
  - assumptions:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - inputs:
    - shortSide: 1
    - term: 2
  - steps:
    - Item:
      - index: 1
      - expression: s = 1; k = 2
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
      - reason: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
    - Item:
      - index: 3
      - expression: L ≈ 1.618033988749895 m
      - reason: The finite candidate 2/1 is wider than the golden panel. The green rectangle retains its exact defining ratio while the gold candidate shows the overshoot.
  - result:
    - approximate: 1.618033988749895
  - interpretation: The finite candidate 2/1 is wider than the golden panel. The green rectangle retains its exact defining ratio while the gold candidate shows the overshoot.
  - independent check:
    - method: Use a Decimal Newton square root to recover the positive quadratic root, and an independently tabulated Fibonacci sequence to check the chosen finite ratio.
    - expected: 1.618033988749895
  - limits: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - preset:
    - shortSide: 1
    - term: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- Item:
  - id: math:example:golden-ratio:case-3
  - title: A candidate from 3 and 2
  - role: applied_model
  - question: Which rectangle keeps the same aspect ratio after removing a square?
  - setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
  - assumptions:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - inputs:
    - shortSide: 1
    - term: 3
  - steps:
    - Item:
      - index: 1
      - expression: s = 1; k = 3
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
      - reason: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
    - Item:
      - index: 3
      - expression: L ≈ 1.618033988749895 m
      - reason: The ratio 3/2 is below φ. A rational candidate can undershoot as well as overshoot without changing the exact rectangle.
  - result:
    - approximate: 1.618033988749895
  - interpretation: The ratio 3/2 is below φ. A rational candidate can undershoot as well as overshoot without changing the exact rectangle.
  - independent check:
    - method: Use a Decimal Newton square root to recover the positive quadratic root, and an independently tabulated Fibonacci sequence to check the chosen finite ratio.
    - expected: 1.618033988749895
  - limits: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - preset:
    - shortSide: 1
    - term: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- Item:
  - id: math:example:golden-ratio:case-4
  - title: Double the panel height
  - role: applied_model
  - question: Which rectangle keeps the same aspect ratio after removing a square?
  - setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
  - assumptions:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - inputs:
    - shortSide: 2
    - term: 5
  - steps:
    - Item:
      - index: 1
      - expression: s = 2; k = 5
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
      - reason: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
    - Item:
      - index: 3
      - expression: L ≈ 3.23606797749979 m
      - reason: Doubling the short side doubles the long side and the remaining strip width. The whole panel area increases by a factor of four.
  - result:
    - approximate: 3.23606797749979
  - interpretation: Doubling the short side doubles the long side and the remaining strip width. The whole panel area increases by a factor of four.
  - independent check:
    - method: Use a Decimal Newton square root to recover the positive quadratic root, and an independently tabulated Fibonacci sequence to check the chosen finite ratio.
    - expected: 3.23606797749979
  - limits: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - preset:
    - shortSide: 2
    - term: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
- Item:
  - id: math:example:golden-ratio:case-5
  - title: A finer rational candidate
  - role: applied_model
  - question: Which rectangle keeps the same aspect ratio after removing a square?
  - setting: A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.
  - assumptions:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - inputs:
    - shortSide: 3
    - term: 12
  - steps:
    - Item:
      - index: 1
      - expression: s = 3; k = 12
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
      - reason: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
    - Item:
      - index: 3
      - expression: L ≈ 4.854101966249685 m
      - reason: The finite ratio 233/144 is close to φ but unequal to it. Large integer counts improve this comparison without becoming the exact quadratic root.
  - result:
    - approximate: 4.854101966249685
  - interpretation: The finite ratio 233/144 is close to φ but unequal to it. Large integer counts improve this comparison without becoming the exact quadratic root.
  - independent check:
    - method: Use a Decimal Newton square root to recover the positive quadratic root, and an independently tabulated Fibonacci sequence to check the chosen finite ratio.
    - expected: 4.854101966249685
  - limits: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - preset:
    - shortSide: 3
    - term: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.

## Interactive

- component id: component:golden-ratio
- renderer id: golden-ratio-visual-model
- renderer version: 1
- model id: golden-ratio-visual-model
- model revision: 1
- expression id: ast:golden-ratio:expression
- interaction status: implemented
- description: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
- controls:
  - Item:
    - id: shortSide
    - type: number
    - default: 1
    - min: 0.5
    - max: 3
    - step: 0.05
  - Item:
    - id: term
    - type: number
    - default: 5
    - min: 2
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - shortSide: 0.5
      - term: 2
    - status: valid
    - output: 0.8090169943749475
  - Item:
    - input:
      - shortSide: 0.5
      - term: 3
    - status: valid
    - output: 0.8090169943749475
  - Item:
    - input:
      - shortSide: 0.5
      - term: 5
    - status: valid
    - output: 0.8090169943749475
  - Item:
    - input:
      - shortSide: 0.5
      - term: 12
    - status: valid
    - output: 0.8090169943749475
  - Item:
    - input:
      - shortSide: 1
      - term: 2
    - status: valid
    - output: 1.618033988749895
  - Item:
    - input:
      - shortSide: 1
      - term: 3
    - status: valid
    - output: 1.618033988749895
  - Item:
    - input:
      - shortSide: 1
      - term: 5
    - status: valid
    - output: 1.618033988749895
  - Item:
    - input:
      - shortSide: 1
      - term: 12
    - status: valid
    - output: 1.618033988749895
  - Item:
    - input:
      - shortSide: 3
      - term: 2
    - status: valid
    - output: 4.854101966249685
  - Item:
    - input:
      - shortSide: 3
      - term: 3
    - status: valid
    - output: 4.854101966249685
  - Item:
    - input:
      - shortSide: 3
      - term: 5
    - status: valid
    - output: 4.854101966249685
  - Item:
    - input:
      - shortSide: 3
      - term: 12
    - status: valid
    - output: 4.854101966249685
  - Item:
    - input:
      - shortSide: 0.25
      - term: 5
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 3.25
      - term: 5
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: true
      - term: 5
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 2
      - term: 5
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 1
      - term: 1.75
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 1
      - term: 12.25
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 1
      - term: true
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 1
      - term: 2
    - status: invalid_parameters
  - Item:
    - input:
      - shortSide: 1
      - term: 2.5
    - status: invalid_parameters
- compute: \varphi=\frac{1+\sqrt{5}}{2},\quad L=\varphi s,\quad w=L-s,\quad \frac Ls=\frac sw.
- numeric tolerance: 5e-11
- invariants:
  - The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Continuous physical quantities retain continuous shapes; whole indices and output counts retain discrete meanings.
- limits:
  - This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
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
  - prompt: Which rectangle keeps the same aspect ratio after removing a square?
  - answer: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.
- Item:
  - prompt: What does this picture measure?
  - answer: The original panel and removed square use equal fixed metre axes. The remainder has the exact self-similar aspect ratio; a separate gold line measures the finite candidate width.

## Representations

- Item:
  - kind: geometry
  - description: The original panel and removed square use equal fixed metre axes. The remainder has the exact self-similar aspect ratio; a separate gold line measures the finite candidate width.
- Item:
  - kind: graph
  - description: Long side versus short side has constant slope φ on fixed axes. Changing the Fibonacci index changes the comparison, not the defining golden-panel line.
- Item:
  - kind: substitution
  - description: A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.

## Applications

- Item:
  - context: A one-metre panel height
  - mapping: The long side is φ metres. Removing a one-metre square leaves width φ−1, and rotating the remainder restores aspect ratio φ.
  - limitations: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - evidence kind: constructed_example
  - example ref: math:example:golden-ratio:case-1
- Item:
  - context: The first coarse ratio
  - mapping: The finite candidate 2/1 is wider than the golden panel. The green rectangle retains its exact defining ratio while the gold candidate shows the overshoot.
  - limitations: This is an exact Euclidean ratio defined by a quadratic equation, plus finite Fibonacci comparisons. No universal aesthetic, biological or optimality claim follows. The finite sequence does not constitute a convergence proof.
  - evidence kind: constructed_example
  - example ref: math:example:golden-ratio:case-2

## Source Refs

- source:number-insights:golden-ratio

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number/measurement lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-insights:golden-ratio. [Wolfram MathWorld · Golden Ratio](https://mathworld.wolfram.com/GoldenRatio.html). Locator: Golden-rectangle similarity definition and equations (1), (2) and (6). Panel dimensions and finite candidate comparisons are original constructions.. Verification: Definition-level page inspected 2026-11-09. Independent mathematical/pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored scenarios, derivations and visual encodings; no source exercise, data or artwork reproduced.
