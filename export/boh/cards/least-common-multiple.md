---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:least-common-multiple", "id": "math:concept:least-common-multiple", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:least-common-multiple", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "0cafc145e05804d81ea1890b1efad9c3dc60e57743be287ee7dd2dce92b5f69c"}, "purpose": "When will two repeating workshop signals sound together again?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "0cafc145e05804d81ea1890b1efad9c3dc60e57743be287ee7dd2dce92b5f69c", "status": "draft", "title": "Least common multiple", "topics": ["mathematics", "numbers-number-theory", "discrete-mathematics", "least common multiple"], "type": "reference", "updated": "2026-11-05T00:00:00Z", "version": "0.1.0-draft"}
---

# Least common multiple

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:least-common-multiple; revision 0.1.0-draft. Setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there. Expression: $d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.$. Conditions required for a defined value (a case may test their violation): Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60. Scope: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.

## Schema Version

0.1.0

## Id

math:concept:least-common-multiple

## Slug

least-common-multiple

## Type

concept

## Title

Least common multiple

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

- least common multiple

## Branches

- numbers-number-theory
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

When will two repeating workshop signals sound together again?

## Meaning

For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice. Signal A and signal B name the two repeating sources; a and b are their minute periods.

## Prerequisites

- required:
  - math:concept:greatest-common-divisor
- helpful:
  - math:concept:modular-arithmetic
  - math:concept:prime-factorization
- depth:
  []

## Definition

- setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
- formal latex: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
- signature:
  - a: Period of workshop signal A, in minutes
  - b: Period of workshop signal B, in minutes
  - d: Greatest common divisor of the two whole-minute periods
  - L: First positive reunion time, in minutes
  - c A: Completed cycles of A at the first positive reunion
  - c B: Completed cycles of B at the first positive reunion
- conditions:
  - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- domain notes: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
- proof status: Definition-level source and originally authored finite calculations; independent mathematical review pending.
- source refs:
  - source:number-extensions:least-common-multiple

## Grammar

- pronunciation: Least common multiple
- expression latex: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
- formation rule: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
- precedence: Find the greatest common divisor before dividing the product; divide the reunion time by each period to count cycles.
- symbols:
  - Item:
    - token: a
    - role: Period of workshop signal A, in minutes
    - type: Locally declared quantity or constant
  - Item:
    - token: b
    - role: Period of workshop signal B, in minutes
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Greatest common divisor of the two whole-minute periods
    - type: Locally declared quantity or constant
  - Item:
    - token: L
    - role: First positive reunion time, in minutes
    - type: Locally declared quantity or constant
  - Item:
    - token: c_A
    - role: Completed cycles of A at the first positive reunion
    - type: Locally declared quantity or constant
  - Item:
    - token: c_B
    - role: Completed cycles of B at the first positive reunion
    - type: Locally declared quantity or constant
- ast:
  - id: ast:least-common-multiple:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:first
      - kind: variable
      - type: Declared numeric input
      - symbol: a
      - scope ref: scope:least-common-multiple
    - Item:
      - id: n:second
      - kind: variable
      - type: Declared numeric input
      - symbol: b
      - scope ref: scope:least-common-multiple
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded integer or geometric rule
      - ref: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:first
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:second
  - scopes:
    - Item:
      - id: scope:least-common-multiple
      - kind: modelExpression
      - free variables:
        - a
        - b
      - external parameters:
        - Exact positive integer divisibility
      - domain condition: Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- parse errors:
  - Item:
    - input: Use a fractional count or omit the declared geometric assumptions
    - status: model mismatch
    - reason: Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- ast coverage: Typed application outline of the stated bounded construction; the formal expression declares the complete mathematical rule.
- output symbol bindings:
  - a: first
  - b: second
  - d: gcd
  - L: output
  - c A: firstCycles
  - c B: secondCycles

## Properties

- Item:
  - claim: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
  - conditions: Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - derivation: Write a=d times an integer and b=d times another integer, with the remaining integers coprime. Their smallest shared positive multiple uses both remaining factors and one copy of d, giving ab/d. Each period divides L exactly, so L/a and L/b are whole cycle counts. A separate scan of positive minute marks verifies the first reunion for every allowed pair.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:least-common-multiple:case-1

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
  - reason: The gcd removes the shared factor from the period product.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:modular-arithmetic
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: A shared event has remainder zero for both periods.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:prime-factorization
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Prime factors give another way to choose the largest required exponent of each prime.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:least-common-multiple:case-1
  - title: Four-minute and six-minute signals
  - role: applied_model
  - question: When will two repeating workshop signals sound together again?
  - setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - assumptions:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - inputs:
    - first: 4
    - second: 6
  - steps:
    - Item:
      - index: 1
      - expression: a = 4; b = 6
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
      - reason: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
    - Item:
      - index: 3
      - expression: L = 12 min
      - reason: The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.
  - result:
    - exact: 12
  - interpretation: The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.
  - independent check:
    - method: Independently scan positive minute marks until both period remainders are zero; count cycles by repeated addition.
    - expected: 12.0
  - limits: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - preset:
    - first: 4
    - second: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- Item:
  - id: math:example:least-common-multiple:case-2
  - title: One signal sounds every minute
  - role: applied_model
  - question: When will two repeating workshop signals sound together again?
  - setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - assumptions:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - inputs:
    - first: 1
    - second: 8
  - steps:
    - Item:
      - index: 1
      - expression: a = 1; b = 8
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
      - reason: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
    - Item:
      - index: 3
      - expression: L = 8 min
      - reason: Every B event is also an A event. The first positive reunion is minute 8: eight A cycles and one B cycle.
  - result:
    - exact: 8
  - interpretation: Every B event is also an A event. The first positive reunion is minute 8: eight A cycles and one B cycle.
  - independent check:
    - method: Independently scan positive minute marks until both period remainders are zero; count cycles by repeated addition.
    - expected: 8.0
  - limits: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - preset:
    - first: 1
    - second: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- Item:
  - id: math:example:least-common-multiple:case-3
  - title: Coprime periods
  - role: applied_model
  - question: When will two repeating workshop signals sound together again?
  - setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - assumptions:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - inputs:
    - first: 5
    - second: 7
  - steps:
    - Item:
      - index: 1
      - expression: a = 5; b = 7
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
      - reason: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
    - Item:
      - index: 3
      - expression: L = 35 min
      - reason: The periods share no factor above one. Their first reunion is the full product, minute 35.
  - result:
    - exact: 35
  - interpretation: The periods share no factor above one. Their first reunion is the full product, minute 35.
  - independent check:
    - method: Independently scan positive minute marks until both period remainders are zero; count cycles by repeated addition.
    - expected: 35.0
  - limits: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - preset:
    - first: 5
    - second: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- Item:
  - id: math:example:least-common-multiple:case-4
  - title: Matching periods
  - role: applied_model
  - question: When will two repeating workshop signals sound together again?
  - setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - assumptions:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - inputs:
    - first: 6
    - second: 6
  - steps:
    - Item:
      - index: 1
      - expression: a = 6; b = 6
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
      - reason: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
    - Item:
      - index: 3
      - expression: L = 6 min
      - reason: Matching periods reunite after one cycle each, at minute 6. Their product 36 is a later shared time, not the least one.
  - result:
    - exact: 6
  - interpretation: Matching periods reunite after one cycle each, at minute 6. Their product 36 is a later shared time, not the least one.
  - independent check:
    - method: Independently scan positive minute marks until both period remainders are zero; count cycles by repeated addition.
    - expected: 6.0
  - limits: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - preset:
    - first: 6
    - second: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
- Item:
  - id: math:example:least-common-multiple:case-5
  - title: A shared factor reduces the wait
  - role: applied_model
  - question: When will two repeating workshop signals sound together again?
  - setting: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - assumptions:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - inputs:
    - first: 6
    - second: 8
  - steps:
    - Item:
      - index: 1
      - expression: a = 6; b = 8
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
      - reason: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
    - Item:
      - index: 3
      - expression: L = 24 min
      - reason: The product is 48, but the common factor two makes the first reunion minute 24: four A cycles and three B cycles.
  - result:
    - exact: 24
  - interpretation: The product is 48, but the common factor two makes the first reunion minute 24: four A cycles and three B cycles.
  - independent check:
    - method: Independently scan positive minute marks until both period remainders are zero; count cycles by repeated addition.
    - expected: 24.0
  - limits: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - preset:
    - first: 6
    - second: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.

## Interactive

- component id: component:least-common-multiple
- renderer id: least-common-multiple-visual-model
- renderer version: 1
- model id: least-common-multiple-visual-model
- model revision: 1
- expression id: ast:least-common-multiple:expression
- interaction status: implemented
- description: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
- controls:
  - Item:
    - id: first
    - type: number
    - default: 4
    - min: 1
    - max: 8
    - step: 1
  - Item:
    - id: second
    - type: number
    - default: 6
    - min: 1
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - first: 1
      - second: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - first: 1
      - second: 2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - first: 1
      - second: 3
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - first: 1
      - second: 4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - first: 1
      - second: 5
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - first: 1
      - second: 6
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 1
      - second: 7
    - status: valid
    - output: 7.0
  - Item:
    - input:
      - first: 1
      - second: 8
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 2
      - second: 1
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - first: 2
      - second: 2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - first: 2
      - second: 3
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 2
      - second: 4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - first: 2
      - second: 5
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - first: 2
      - second: 6
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 2
      - second: 7
    - status: valid
    - output: 14.0
  - Item:
    - input:
      - first: 2
      - second: 8
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 3
      - second: 1
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - first: 3
      - second: 2
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 3
      - second: 3
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - first: 3
      - second: 4
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - first: 3
      - second: 5
    - status: valid
    - output: 15.0
  - Item:
    - input:
      - first: 3
      - second: 6
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 3
      - second: 7
    - status: valid
    - output: 21.0
  - Item:
    - input:
      - first: 3
      - second: 8
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - first: 4
      - second: 1
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - first: 4
      - second: 2
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - first: 4
      - second: 3
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - first: 4
      - second: 4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - first: 4
      - second: 5
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - first: 4
      - second: 6
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - first: 4
      - second: 7
    - status: valid
    - output: 28.0
  - Item:
    - input:
      - first: 4
      - second: 8
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 5
      - second: 1
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - first: 5
      - second: 2
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - first: 5
      - second: 3
    - status: valid
    - output: 15.0
  - Item:
    - input:
      - first: 5
      - second: 4
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - first: 5
      - second: 5
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - first: 5
      - second: 6
    - status: valid
    - output: 30.0
  - Item:
    - input:
      - first: 5
      - second: 7
    - status: valid
    - output: 35.0
  - Item:
    - input:
      - first: 5
      - second: 8
    - status: valid
    - output: 40.0
  - Item:
    - input:
      - first: 6
      - second: 1
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 6
      - second: 2
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 6
      - second: 3
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 6
      - second: 4
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - first: 6
      - second: 5
    - status: valid
    - output: 30.0
  - Item:
    - input:
      - first: 6
      - second: 6
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - first: 6
      - second: 7
    - status: valid
    - output: 42.0
  - Item:
    - input:
      - first: 6
      - second: 8
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - first: 7
      - second: 1
    - status: valid
    - output: 7.0
  - Item:
    - input:
      - first: 7
      - second: 2
    - status: valid
    - output: 14.0
  - Item:
    - input:
      - first: 7
      - second: 3
    - status: valid
    - output: 21.0
  - Item:
    - input:
      - first: 7
      - second: 4
    - status: valid
    - output: 28.0
  - Item:
    - input:
      - first: 7
      - second: 5
    - status: valid
    - output: 35.0
  - Item:
    - input:
      - first: 7
      - second: 6
    - status: valid
    - output: 42.0
  - Item:
    - input:
      - first: 7
      - second: 7
    - status: valid
    - output: 7.0
  - Item:
    - input:
      - first: 7
      - second: 8
    - status: valid
    - output: 56.0
  - Item:
    - input:
      - first: 8
      - second: 1
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 8
      - second: 2
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 8
      - second: 3
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - first: 8
      - second: 4
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 8
      - second: 5
    - status: valid
    - output: 40.0
  - Item:
    - input:
      - first: 8
      - second: 6
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - first: 8
      - second: 7
    - status: valid
    - output: 56.0
  - Item:
    - input:
      - first: 8
      - second: 8
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - first: 0
      - second: 6
    - status: invalid_parameters
  - Item:
    - input:
      - first: 9
      - second: 6
    - status: invalid_parameters
  - Item:
    - input:
      - first: 1.5
      - second: 6
    - status: invalid_parameters
  - Item:
    - input:
      - first: true
      - second: 6
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: 6
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: 0
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: 9
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: 2.5
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: null
    - status: invalid_parameters
  - Item:
    - input:
      - first: 4
      - second: false
    - status: invalid_parameters
- compute: d=\operatorname{gcd}(a,b),\quad L=\operatorname{lcm}(a,b)=\frac{ab}{d},\quad c_A=\frac{L}{a},\quad c_B=\frac{L}{b}.
- numeric tolerance: 5e-11
- invariants:
  - Both periods are whole numbers from 1 to 8 minutes, measured from the same starting instant. The displayed timeline includes zero and every event through minute 60.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Whole-number counts change at exact integer choices; physical radii can vary continuously.
- limits:
  - The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
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
  - prompt: When will two repeating workshop signals sound together again?
  - answer: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.
- Item:
  - prompt: What does this picture measure?
  - answer: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.

## Representations

- Item:
  - kind: geometry
  - description: Two signal lanes share a fixed 0–60 minute axis. Common positive marks and the first reunion use the same event lists as the calculation.
- Item:
  - kind: graph
  - description: Separate evaluated reunion times for the eight allowed whole-minute periods show the discrete arithmetic changes.
- Item:
  - kind: substitution
  - description: For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.

## Applications

- Item:
  - context: Originally authored workshop timing or tile exhibit
  - mapping: Two workshop signals sound together at minute zero. Signal A repeats every a minutes and signal B every b minutes. Choose whole-minute periods and follow their marks along the same timeline. The first shared mark after zero is the next reunion; the cycle counts show how many repetitions each signal completes to get there.
  - limitations: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - evidence kind: constructed_example
  - example ref: math:example:least-common-multiple:case-1
- Item:
  - context: One signal sounds every minute
  - mapping: Every B event is also an A event. The first positive reunion is minute 8: eight A cycles and one B cycle.
  - limitations: The intervals are exact positive whole-minute periods. Starting phases and imperfect clocks are outside this construction. Zero is a shared starting mark, while L is the first strictly positive reunion. Period edits remain discrete; the answer is not interpolated between whole-number choices.
  - evidence kind: constructed_example
  - example ref: math:example:least-common-multiple:case-2

## Source Refs

- source:number-extensions:least-common-multiple

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number or geometry lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-extensions:least-common-multiple. [Wolfram MathWorld · Least Common Multiple](https://mathworld.wolfram.com/LeastCommonMultiple.html). Locator: Definition of the least positive common multiple; equation (13), lcm(a,b)=ab/gcd(a,b) for positive integers. The repeating workshop signals and finite timeline are original constructions.. Verification: Definition-level page inspected 2026-11-05. Independent mathematical and pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored timing scenario, explanations and finite calculations. No source exercise, illustration or data reproduced.
