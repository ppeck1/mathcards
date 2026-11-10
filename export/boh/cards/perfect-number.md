---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:perfect-number", "id": "math:concept:perfect-number", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:perfect-number", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "995d9e3cf545d73e71a50e678cbff4fdd62206b8807bdba829f2aff3ea71d3d0"}, "purpose": "Can the proper-divisor tile strips exactly match the target strip?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "995d9e3cf545d73e71a50e678cbff4fdd62206b8807bdba829f2aff3ea71d3d0", "status": "draft", "title": "Perfect numbers and proper divisors", "topics": ["mathematics", "numbers-number-theory", "discrete-mathematics", "perfect numbers and proper divisors"], "type": "reference", "updated": "2026-11-05T00:00:00Z", "version": "0.1.0-draft"}
---

# Perfect numbers and proper divisors

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:perfect-number; revision 0.1.0-draft. Setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces. Expression: $D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.$. Conditions required for a defined value (a case may test their violation): The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero. Scope: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.

## Schema Version

0.1.0

## Id

math:concept:perfect-number

## Slug

perfect-number

## Type

concept

## Title

Perfect numbers and proper divisors

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-05T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- perfect numbers and proper divisors

## Branches

- numbers-number-theory
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can the proper-divisor tile strips exactly match the target strip?

## Meaning

A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.

## Prerequisites

- required:
  - math:concept:greatest-common-divisor
- helpful:
  - math:concept:prime-factorization
  - math:concept:set
- depth:
  []

## Definition

- setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
- formal latex: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
- signature:
  - n: Number of tiles in the target strip
  - D: Set of positive proper divisors of the chosen integer
  - s: Sum of the positive proper divisors, in tile items
  - Δ: Divisor-strip total minus the target count
  - d: Bound divisor: one member of the positive proper-divisor set
- conditions:
  - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- domain notes: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
- proof status: Definition-level source and originally authored finite calculations; independent mathematical review pending.
- source refs:
  - source:number-extensions:perfect-number

## Grammar

- pronunciation: Perfect numbers and proper divisors
- expression latex: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
- formation rule: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
- precedence: Test positive divisibility and exclude n before summing; subtract the target after forming the divisor sum.
- symbols:
  - Item:
    - token: n
    - role: Number of tiles in the target strip
    - type: Locally declared quantity or constant
  - Item:
    - token: D
    - role: Set of positive proper divisors of the chosen integer
    - type: Locally declared quantity or constant
  - Item:
    - token: s
    - role: Sum of the positive proper divisors, in tile items
    - type: Locally declared quantity or constant
  - Item:
    - token: Δ
    - role: Divisor-strip total minus the target count
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Bound divisor: one member of the positive proper-divisor set
    - type: Locally declared quantity or constant
- ast:
  - id: ast:perfect-number:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:number
      - kind: variable
      - type: Declared numeric input
      - symbol: n
      - scope ref: scope:perfect-number
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded integer or geometric rule
      - ref: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:number
  - scopes:
    - Item:
      - id: scope:perfect-number
      - kind: modelExpression
      - free variables:
        - n
      - external parameters:
        - Exact positive integer divisibility
      - domain condition: The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
      - bound variables:
        - d
- parse errors:
  - Item:
    - input: Use a fractional count or omit the declared geometric assumptions
    - status: model mismatch
    - reason: The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- ast coverage: Typed application outline of the stated bounded construction; the formal expression declares the complete mathematical rule.
- output symbol bindings:
  - n: number
  - D: divisors
  - s: divisorSum
  - Δ: balance
  - d: divisors

## Properties

- Item:
  - claim: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
  - conditions: The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - derivation: A positive divisor d of n leaves zero remainder in integer division. Excluding n leaves exactly the proper divisors. Add each member once and subtract n to obtain the balance. At n=1 there are no allowed members, so the empty sum is zero and the balance is −1. Divisor pairs found up to the square root give an independent check, counting a square-root divisor only once.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:perfect-number:case-1

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
  - target: math:concept:greatest-common-divisor
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Both lessons use exact positive divisibility, while a common divisor refers to two integers.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:prime-factorization
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Prime factorization helps organize the divisors of an integer.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: The proper divisors form a finite set; the empty-set case has no members to add.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:perfect-number:case-1
  - title: Six tiles match exactly
  - role: applied_model
  - question: Can the proper-divisor tile strips exactly match the target strip?
  - setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - assumptions:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - inputs:
    - number: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 6
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
      - reason: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
    - Item:
      - index: 3
      - expression: s = 6 items
      - reason: The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.
  - result:
    - exact: 6
  - interpretation: The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.
  - independent check:
    - method: Independently enumerate factor pairs up to the integer square root, exclude the target divisor, deduplicate a square root, and sum the remaining positive divisors.
    - expected: 6.0
  - limits: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - preset:
    - number: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- Item:
  - id: math:example:perfect-number:case-2
  - title: A second exact match
  - role: applied_model
  - question: Can the proper-divisor tile strips exactly match the target strip?
  - setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - assumptions:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - inputs:
    - number: 28
  - steps:
    - Item:
      - index: 1
      - expression: n = 28
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
      - reason: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
    - Item:
      - index: 3
      - expression: s = 28 items
      - reason: The strips 1, 2, 4, 7 and 14 total 28. Equality, rather than the number of strips, makes 28 perfect.
  - result:
    - exact: 28
  - interpretation: The strips 1, 2, 4, 7 and 14 total 28. Equality, rather than the number of strips, makes 28 perfect.
  - independent check:
    - method: Independently enumerate factor pairs up to the integer square root, exclude the target divisor, deduplicate a square root, and sum the remaining positive divisors.
    - expected: 28.0
  - limits: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - preset:
    - number: 28
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- Item:
  - id: math:example:perfect-number:case-3
  - title: Too many divisor tiles
  - role: applied_model
  - question: Can the proper-divisor tile strips exactly match the target strip?
  - setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - assumptions:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - inputs:
    - number: 12
  - steps:
    - Item:
      - index: 1
      - expression: n = 12
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
      - reason: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
    - Item:
      - index: 3
      - expression: s = 16 items
      - reason: The proper divisors 1, 2, 3, 4 and 6 total 16. The four-tile surplus classifies 12 as abundant.
  - result:
    - exact: 16
  - interpretation: The proper divisors 1, 2, 3, 4 and 6 total 16. The four-tile surplus classifies 12 as abundant.
  - independent check:
    - method: Independently enumerate factor pairs up to the integer square root, exclude the target divisor, deduplicate a square root, and sum the remaining positive divisors.
    - expected: 16.0
  - limits: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - preset:
    - number: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- Item:
  - id: math:example:perfect-number:case-4
  - title: A prime target has one proper divisor
  - role: applied_model
  - question: Can the proper-divisor tile strips exactly match the target strip?
  - setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - assumptions:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - inputs:
    - number: 13
  - steps:
    - Item:
      - index: 1
      - expression: n = 13
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
      - reason: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
    - Item:
      - index: 3
      - expression: s = 1 items
      - reason: Only the strip of one tile is allowed. Its sum is 1 and the balance is −12, so 13 is deficient.
  - result:
    - exact: 1
  - interpretation: Only the strip of one tile is allowed. Its sum is 1 and the balance is −12, so 13 is deficient.
  - independent check:
    - method: Independently enumerate factor pairs up to the integer square root, exclude the target divisor, deduplicate a square root, and sum the remaining positive divisors.
    - expected: 1.0
  - limits: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - preset:
    - number: 13
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
- Item:
  - id: math:example:perfect-number:case-5
  - title: The empty-divisor boundary
  - role: applied_model
  - question: Can the proper-divisor tile strips exactly match the target strip?
  - setting: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - assumptions:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - inputs:
    - number: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 1
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
      - reason: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
    - Item:
      - index: 3
      - expression: s = 0 items
      - reason: No positive integer is smaller than one and divides it. D is empty, its sum is zero, and 1 is deficient with balance −1.
  - result:
    - exact: 0
  - interpretation: No positive integer is smaller than one and divides it. D is empty, its sum is zero, and 1 is deficient with balance −1.
  - independent check:
    - method: Independently enumerate factor pairs up to the integer square root, exclude the target divisor, deduplicate a square root, and sum the remaining positive divisors.
    - expected: 0.0
  - limits: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - preset:
    - number: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.

## Interactive

- component id: component:perfect-number
- renderer id: perfect-number-visual-model
- renderer version: 1
- model id: perfect-number-visual-model
- model revision: 1
- expression id: ast:perfect-number:expression
- interaction status: implemented
- description: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
- controls:
  - Item:
    - id: number
    - type: number
    - default: 6
    - min: 1
    - max: 60
    - step: 1
- expected cases:
  - Item:
    - input:
      - number: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - number: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 3
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 4
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - number: 5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 6
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - number: 7
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 8
    - status: valid
    - output: 7.0
  - Item:
    - input:
      - number: 9
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - number: 10
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - number: 11
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 12
    - status: valid
    - output: 16.0
  - Item:
    - input:
      - number: 13
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 14
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - number: 15
    - status: valid
    - output: 9.0
  - Item:
    - input:
      - number: 16
    - status: valid
    - output: 15.0
  - Item:
    - input:
      - number: 17
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 18
    - status: valid
    - output: 21.0
  - Item:
    - input:
      - number: 19
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 20
    - status: valid
    - output: 22.0
  - Item:
    - input:
      - number: 21
    - status: valid
    - output: 11.0
  - Item:
    - input:
      - number: 22
    - status: valid
    - output: 14.0
  - Item:
    - input:
      - number: 23
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 24
    - status: valid
    - output: 36.0
  - Item:
    - input:
      - number: 25
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - number: 26
    - status: valid
    - output: 16.0
  - Item:
    - input:
      - number: 27
    - status: valid
    - output: 13.0
  - Item:
    - input:
      - number: 28
    - status: valid
    - output: 28.0
  - Item:
    - input:
      - number: 29
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 30
    - status: valid
    - output: 42.0
  - Item:
    - input:
      - number: 31
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 32
    - status: valid
    - output: 31.0
  - Item:
    - input:
      - number: 33
    - status: valid
    - output: 15.0
  - Item:
    - input:
      - number: 34
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - number: 35
    - status: valid
    - output: 13.0
  - Item:
    - input:
      - number: 36
    - status: valid
    - output: 55.0
  - Item:
    - input:
      - number: 37
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 38
    - status: valid
    - output: 22.0
  - Item:
    - input:
      - number: 39
    - status: valid
    - output: 17.0
  - Item:
    - input:
      - number: 40
    - status: valid
    - output: 50.0
  - Item:
    - input:
      - number: 41
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 42
    - status: valid
    - output: 54.0
  - Item:
    - input:
      - number: 43
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 44
    - status: valid
    - output: 40.0
  - Item:
    - input:
      - number: 45
    - status: valid
    - output: 33.0
  - Item:
    - input:
      - number: 46
    - status: valid
    - output: 26.0
  - Item:
    - input:
      - number: 47
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 48
    - status: valid
    - output: 76.0
  - Item:
    - input:
      - number: 49
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - number: 50
    - status: valid
    - output: 43.0
  - Item:
    - input:
      - number: 51
    - status: valid
    - output: 21.0
  - Item:
    - input:
      - number: 52
    - status: valid
    - output: 46.0
  - Item:
    - input:
      - number: 53
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 54
    - status: valid
    - output: 66.0
  - Item:
    - input:
      - number: 55
    - status: valid
    - output: 17.0
  - Item:
    - input:
      - number: 56
    - status: valid
    - output: 64.0
  - Item:
    - input:
      - number: 57
    - status: valid
    - output: 23.0
  - Item:
    - input:
      - number: 58
    - status: valid
    - output: 32.0
  - Item:
    - input:
      - number: 59
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - number: 60
    - status: valid
    - output: 108.0
  - Item:
    - input:
      - number: 0
    - status: invalid_parameters
  - Item:
    - input:
      - number: 61
    - status: invalid_parameters
  - Item:
    - input:
      - number: 6.5
    - status: invalid_parameters
  - Item:
    - input:
      - number: true
    - status: invalid_parameters
  - Item:
    - input:
      - number: null
    - status: invalid_parameters
  - Item:
    - input:
      - number: 6
    - status: invalid_parameters
- compute: D=\{d\in\mathbb{N}:d\mid n,\ 0<d<n\},\quad s=\sum_{d\in D}d,\quad \Delta=s-n,\quad n\text{ is perfect}\iff s=n.
- numeric tolerance: 5e-11
- invariants:
  - The target is a whole number from 1 to 60 items. A proper divisor is positive and strictly smaller than n. For n=1 the proper-divisor set is empty and its sum is zero.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Whole-number counts change at exact integer choices; physical radii can vary continuously.
- limits:
  - This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
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
  - prompt: Can the proper-divisor tile strips exactly match the target strip?
  - answer: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.
- Item:
  - prompt: What does this picture measure?
  - answer: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.

## Representations

- Item:
  - kind: geometry
  - description: A target strip and labeled proper-divisor strips use the same unit-tile scale. The empty set remains visible when n=1.
- Item:
  - kind: graph
  - description: Individual evaluated divisor sums for integers 1–60 compare with the equality line s=n without inventing values between integers.
- Item:
  - kind: substitution
  - description: A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.

## Applications

- Item:
  - context: Originally authored workshop timing or tile exhibit
  - mapping: A number exhibit has a target strip of n unit tiles. For every positive proper divisor d of n, it builds one separate strip with d tiles. Collect these divisor strips and compare their total with the target. The picture counts each proper divisor once; it does not partition the original strip into those pieces.
  - limitations: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - evidence kind: constructed_example
  - example ref: math:example:perfect-number:case-1
- Item:
  - context: A second exact match
  - mapping: The strips 1, 2, 4, 7 and 14 total 28. Equality, rather than the number of strips, makes 28 perfect.
  - limitations: This finite exhibit uses exact integer divisibility. Deficient means s<n, perfect means s=n, and abundant means s>n; these words classify the divisor sum. Zero and negative integers are outside the family. No claim about all perfect numbers or their historical discovery follows from the finite display.
  - evidence kind: constructed_example
  - example ref: math:example:perfect-number:case-2

## Source Refs

- source:number-extensions:perfect-number

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number or geometry lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-extensions:perfect-number. [Wolfram MathWorld · Perfect Number](https://mathworld.wolfram.com/PerfectNumber.html). Locator: Opening definition: a positive integer is perfect when it equals the sum of its proper positive divisors. The divisor-strip exhibit, empty case and classifications are original teaching constructions.. Verification: Definition-level page inspected 2026-11-05. Independent mathematical and pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored tile-strip scenario and divisor calculations; no historical priority claims. No source exercise, illustration or data reproduced.
