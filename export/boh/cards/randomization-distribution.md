---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:randomization-distribution", "id": "math:concept:randomization-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:randomization-distribution", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "50289b9a8863ef4753f3af85a7368432384da609a34ee5a415c3abefcc78ce66"}, "purpose": "How unusual is a four-versus-four learner-score difference under random assignment?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "50289b9a8863ef4753f3af85a7368432384da609a34ee5a415c3abefcc78ce66", "status": "draft", "title": "An exact randomization distribution", "topics": ["mathematics", "statistics", "probability", "experimental-design", "an exact randomization distribution"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# An exact randomization distribution

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:randomization-distribution; revision 0.1.0-draft. Setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores. Expression: $d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.$. Conditions required for a defined value (a case may test their violation): The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence. Scope: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.

## Schema Version

0.1.0

## Id

math:concept:randomization-distribution

## Slug

randomization-distribution

## Type

concept

## Title

An exact randomization distribution

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-03T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- an exact randomization distribution

## Branches

- statistics
- probability
- experimental-design

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How unusual is a four-versus-four learner-score difference under random assignment?

## Meaning

Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.

## Prerequisites

- required:
  - math:concept:randomized-block-design
- helpful:
  - math:concept:binomial-coefficient
  - math:concept:hypothesis-test
  - math:concept:expected-value
- depth:
  []

## Definition

- setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
- formal latex: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
- signature:
  - v: Eighth constructed learner score, in points
  - y: Eight fixed learner scores used under reassignment
  - A: Numbers of the four learners assigned to instructions A
  - B: Numbers of the four learners assigned to instructions B
  - ȳ A: Mean learner score among the four A-assigned positions
  - ȳ B: Mean learner score among the four B-assigned positions
  - d: Observed mean B−A difference, in points
  - D: Mean B−A differences across all 70 allocations, in points
  - m: Number of allocations at least as extreme in absolute difference
  - M: Total number of equally likely fixed-size allocations, 70
  - p: Exact absolute-tail fraction conditional on the sharp null and assignment mechanism
- conditions:
  - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- domain notes: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- proof status: Definition-level primary reference and original bounded construction; independent mathematical review pending.
- source refs:
  - source:sampling-extensions:randomization

## Grammar

- pronunciation: An exact randomization distribution
- expression latex: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
- formation rule: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
- precedence: Fix the eight outcomes and observed allocation before computing the observed difference and the complete absolute-tail count.
- symbols:
  - Item:
    - token: v
    - role: Eighth constructed learner score, in points
    - type: Declared inference quantity
  - Item:
    - token: y
    - role: Eight fixed learner scores used under reassignment
    - type: Declared inference quantity
  - Item:
    - token: A
    - role: Numbers of the four learners assigned to instructions A
    - type: Declared inference quantity
  - Item:
    - token: B
    - role: Numbers of the four learners assigned to instructions B
    - type: Declared inference quantity
  - Item:
    - token: ȳ_A
    - role: Mean learner score among the four A-assigned positions
    - type: Declared inference quantity
  - Item:
    - token: ȳ_B
    - role: Mean learner score among the four B-assigned positions
    - type: Declared inference quantity
  - Item:
    - token: d
    - role: Observed mean B−A difference, in points
    - type: Declared inference quantity
  - Item:
    - token: D
    - role: Mean B−A differences across all 70 allocations, in points
    - type: Declared inference quantity
  - Item:
    - token: m
    - role: Number of allocations at least as extreme in absolute difference
    - type: Declared inference quantity
  - Item:
    - token: M
    - role: Total number of equally likely fixed-size allocations, 70
    - type: Declared inference quantity
  - Item:
    - token: p
    - role: Exact absolute-tail fraction conditional on the sharp null and assignment mechanism
    - type: Declared inference quantity
- ast:
  - id: ast:randomization-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:lastValue
      - kind: variable
      - type: Declared numerical input or whole sample count
      - symbol: v
      - scope ref: scope:randomization-distribution
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded inference rule
      - ref: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:lastValue
  - scopes:
    - Item:
      - id: scope:randomization-distribution
      - kind: modelExpression
      - free variables:
        - v
      - external parameters:
        - Declared observed allocation
      - domain condition: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- parse errors:
  - Item:
    - input: Use a different sampling or assignment model without changing the procedure
    - status: model or role mismatch
    - reason: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- ast coverage: Typed application outline of this bounded model; not a general formula parser, random sampler or arbitrary-data analysis engine.
- output symbol bindings:
  - v: lastValue
  - y: outcomes
  - A: aMembers
  - B: bMembers
  - ȳ A: meanA
  - ȳ B: meanB
  - d: observedDifference
  - D: randomizedDifferences
  - m: tailCount
  - M: assignmentCount
  - p: output

## Properties

- Item:
  - claim: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
  - conditions: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - derivation: There are binom(8,4)=70 subsets of four participant positions for A, each with one complementary B group. Under the sharp no-effect null and uniform assignment, each subset has probability 1/70. The absolute-tail event therefore has probability m/70.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:randomization-distribution:case-1

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
  - target: math:concept:randomized-block-design
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:binomial-coefficient
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hypothesis-test
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:expected-value
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:randomization-distribution:case-1
  - title: Separated labels and increasing learner scores
  - role: applied_model
  - question: How unusual is a four-versus-four learner-score difference under random assignment?
  - setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - lastValue: 8
    - allocation: separated
  - steps:
    - Item:
      - index: 1
      - expression: v = 8
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
      - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - index: 3
      - expression: 0.02857142857142857
      - reason: The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.
  - result:
    - approximate: 0.02857142857142857
  - interpretation: The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.
  - independent check:
    - method: Independent Python combinations enumerate all70 labeled-position subsets; decimal scores are represented by Fraction before comparing absolute statistics exactly.
    - expected: 0.02857142857142857
  - limits: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - preset:
    - lastValue: 8
    - allocation: separated
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- Item:
  - id: math:example:randomization-distribution:case-2
  - title: Alternate the observed labels
  - role: applied_model
  - question: How unusual is a four-versus-four learner-score difference under random assignment?
  - setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - lastValue: 8
    - allocation: alternating
  - steps:
    - Item:
      - index: 1
      - expression: v = 8
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
      - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - index: 3
      - expression: 0.6857142857142857
      - reason: The fixed scores are unchanged, but the observed A/B allocation changes. Its smaller observed difference admits more reassigned outcomes into the tail.
  - result:
    - approximate: 0.6857142857142857
  - interpretation: The fixed scores are unchanged, but the observed A/B allocation changes. Its smaller observed difference admits more reassigned outcomes into the tail.
  - independent check:
    - method: Independent Python combinations enumerate all70 labeled-position subsets; decimal scores are represented by Fraction before comparing absolute statistics exactly.
    - expected: 0.6857142857142857
  - limits: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - preset:
    - lastValue: 8
    - allocation: alternating
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- Item:
  - id: math:example:randomization-distribution:case-3
  - title: A central mixed allocation
  - role: applied_model
  - question: How unusual is a four-versus-four learner-score difference under random assignment?
  - setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - lastValue: 8
    - allocation: mixed
  - steps:
    - Item:
      - index: 1
      - expression: v = 8
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
      - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - index: 3
      - expression: 1.0
      - reason: A uses participant positions 1, 4, 6 and 7 and B uses their complement. Both means are 4.5, so every allocation satisfies |D|≥0 and p=1.
  - result:
    - approximate: 1.0
  - interpretation: A uses participant positions 1, 4, 6 and 7 and B uses their complement. Both means are 4.5, so every allocation satisfies |D|≥0 and p=1.
  - independent check:
    - method: Independent Python combinations enumerate all70 labeled-position subsets; decimal scores are represented by Fraction before comparing absolute statistics exactly.
    - expected: 1.0
  - limits: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - preset:
    - lastValue: 8
    - allocation: mixed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- Item:
  - id: math:example:randomization-distribution:case-4
  - title: An eighth score equal to an earlier score
  - role: applied_model
  - question: How unusual is a four-versus-four learner-score difference under random assignment?
  - setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - lastValue: 4
    - allocation: separated
  - steps:
    - Item:
      - index: 1
      - expression: v = 4
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
      - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - index: 3
      - expression: 0.05714285714285714
      - reason: Repeated scores do not merge participant positions: all 70 allocations still count. Equal absolute differences remain in the tail.
  - result:
    - approximate: 0.05714285714285714
  - interpretation: Repeated scores do not merge participant positions: all 70 allocations still count. Equal absolute differences remain in the tail.
  - independent check:
    - method: Independent Python combinations enumerate all70 labeled-position subsets; decimal scores are represented by Fraction before comparing absolute statistics exactly.
    - expected: 0.05714285714285714
  - limits: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - preset:
    - lastValue: 4
    - allocation: separated
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
- Item:
  - id: math:example:randomization-distribution:case-5
  - title: A changed eighth learner score
  - role: applied_model
  - question: How unusual is a four-versus-four learner-score difference under random assignment?
  - setting: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - lastValue: 10
    - allocation: alternating
  - steps:
    - Item:
      - index: 1
      - expression: v = 10
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: d=\bar{y}_B-\bar{y}_A,\quad M=\binom{8}{4}=70,\quad p=\frac{m}{M},\quad m=\#\{\text{allocations with }|D|\ge|d|\}.
      - reason: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
    - Item:
      - index: 3
      - expression: 0.6
      - reason: Moving the eighth score changes the observed B mean and the entire reassignment distribution together. This is a new constructed set of outcomes.
  - result:
    - approximate: 0.6
  - interpretation: Moving the eighth score changes the observed B mean and the entire reassignment distribution together. This is a new constructed set of outcomes.
  - independent check:
    - method: Independent Python combinations enumerate all70 labeled-position subsets; decimal scores are represented by Fraction before comparing absolute statistics exactly.
    - expected: 0.6
  - limits: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - preset:
    - lastValue: 10
    - allocation: alternating
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.

## Interactive

- component id: component:randomization-distribution
- renderer id: randomization-distribution-visual-model
- renderer version: 1
- model id: randomization-distribution-visual-model
- model revision: 1
- expression id: ast:randomization-distribution:expression
- interaction status: implemented
- description: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
- controls:
  - Item:
    - id: lastValue
    - type: number
    - default: 8
    - min: 0
    - max: 10
    - step: 0.05
  - Item:
    - id: allocation
    - type: enum
    - default: separated
    - values:
      - separated
      - alternating
      - mixed
    - value labels:
      - separated: First four A, last four B
      - alternating: Alternating A and B
      - mixed: A at participant positions 1, 4, 6 and 7
- expected cases:
  - Item:
    - input:
      - lastValue: 0.0
      - allocation: separated
    - status: valid
    - output: 0.34285714285714286
  - Item:
    - input:
      - lastValue: 0.0
      - allocation: alternating
    - status: valid
    - output: 0.6857142857142857
  - Item:
    - input:
      - lastValue: 0.0
      - allocation: mixed
    - status: valid
    - output: 0.34285714285714286
  - Item:
    - input:
      - lastValue: 0.5
      - allocation: separated
    - status: valid
    - output: 0.22857142857142856
  - Item:
    - input:
      - lastValue: 0.5
      - allocation: alternating
    - status: valid
    - output: 0.6857142857142857
  - Item:
    - input:
      - lastValue: 0.5
      - allocation: mixed
    - status: valid
    - output: 0.34285714285714286
  - Item:
    - input:
      - lastValue: 1.0
      - allocation: separated
    - status: valid
    - output: 0.22857142857142856
  - Item:
    - input:
      - lastValue: 1.0
      - allocation: alternating
    - status: valid
    - output: 0.7714285714285715
  - Item:
    - input:
      - lastValue: 1.0
      - allocation: mixed
    - status: valid
    - output: 0.37142857142857144
  - Item:
    - input:
      - lastValue: 1.5
      - allocation: separated
    - status: valid
    - output: 0.14285714285714285
  - Item:
    - input:
      - lastValue: 1.5
      - allocation: alternating
    - status: valid
    - output: 0.7714285714285715
  - Item:
    - input:
      - lastValue: 1.5
      - allocation: mixed
    - status: valid
    - output: 0.37142857142857144
  - Item:
    - input:
      - lastValue: 2.0
      - allocation: separated
    - status: valid
    - output: 0.14285714285714285
  - Item:
    - input:
      - lastValue: 2.0
      - allocation: alternating
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 2.0
      - allocation: mixed
    - status: valid
    - output: 0.42857142857142855
  - Item:
    - input:
      - lastValue: 2.5
      - allocation: separated
    - status: valid
    - output: 0.08571428571428572
  - Item:
    - input:
      - lastValue: 2.5
      - allocation: alternating
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 2.5
      - allocation: mixed
    - status: valid
    - output: 0.42857142857142855
  - Item:
    - input:
      - lastValue: 3.0
      - allocation: separated
    - status: valid
    - output: 0.08571428571428572
  - Item:
    - input:
      - lastValue: 3.0
      - allocation: alternating
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 3.0
      - allocation: mixed
    - status: valid
    - output: 0.5142857142857142
  - Item:
    - input:
      - lastValue: 3.5
      - allocation: separated
    - status: valid
    - output: 0.05714285714285714
  - Item:
    - input:
      - lastValue: 3.5
      - allocation: alternating
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 3.5
      - allocation: mixed
    - status: valid
    - output: 0.5142857142857142
  - Item:
    - input:
      - lastValue: 4.0
      - allocation: separated
    - status: valid
    - output: 0.05714285714285714
  - Item:
    - input:
      - lastValue: 4.0
      - allocation: alternating
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 4.0
      - allocation: mixed
    - status: valid
    - output: 0.6285714285714286
  - Item:
    - input:
      - lastValue: 4.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 4.5
      - allocation: alternating
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 4.5
      - allocation: mixed
    - status: valid
    - output: 0.6285714285714286
  - Item:
    - input:
      - lastValue: 5.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 5.0
      - allocation: alternating
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 5.0
      - allocation: mixed
    - status: valid
    - output: 0.7428571428571429
  - Item:
    - input:
      - lastValue: 5.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 5.5
      - allocation: alternating
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 5.5
      - allocation: mixed
    - status: valid
    - output: 0.7428571428571429
  - Item:
    - input:
      - lastValue: 6.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 6.0
      - allocation: alternating
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 6.0
      - allocation: mixed
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 6.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 6.5
      - allocation: alternating
    - status: valid
    - output: 0.7714285714285715
  - Item:
    - input:
      - lastValue: 6.5
      - allocation: mixed
    - status: valid
    - output: 0.8857142857142857
  - Item:
    - input:
      - lastValue: 7.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 7.0
      - allocation: alternating
    - status: valid
    - output: 0.7714285714285715
  - Item:
    - input:
      - lastValue: 7.0
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 7.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 7.5
      - allocation: alternating
    - status: valid
    - output: 0.6857142857142857
  - Item:
    - input:
      - lastValue: 7.5
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 8.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 8.0
      - allocation: alternating
    - status: valid
    - output: 0.6857142857142857
  - Item:
    - input:
      - lastValue: 8.0
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 8.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 8.5
      - allocation: alternating
    - status: valid
    - output: 0.6285714285714286
  - Item:
    - input:
      - lastValue: 8.5
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 9.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 9.0
      - allocation: alternating
    - status: valid
    - output: 0.6285714285714286
  - Item:
    - input:
      - lastValue: 9.0
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 9.5
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 9.5
      - allocation: alternating
    - status: valid
    - output: 0.6
  - Item:
    - input:
      - lastValue: 9.5
      - allocation: mixed
    - status: valid
    - output: 0.9142857142857143
  - Item:
    - input:
      - lastValue: 10.0
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 10.0
      - allocation: alternating
    - status: valid
    - output: 0.6
  - Item:
    - input:
      - lastValue: 10.0
      - allocation: mixed
    - status: valid
    - output: 0.9142857142857143
  - Item:
    - input:
      - lastValue: 3.95
      - allocation: separated
    - status: valid
    - output: 0.05714285714285714
  - Item:
    - input:
      - lastValue: 3.95
      - allocation: mixed
    - status: valid
    - output: 0.5142857142857142
  - Item:
    - input:
      - lastValue: 4.05
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 4.05
      - allocation: mixed
    - status: valid
    - output: 0.6285714285714286
  - Item:
    - input:
      - lastValue: 7.95
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 7.95
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: 8.05
      - allocation: separated
    - status: valid
    - output: 0.02857142857142857
  - Item:
    - input:
      - lastValue: 8.05
      - allocation: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastValue: -1
      - allocation: separated
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 11
      - allocation: separated
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: true
      - allocation: separated
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 8
      - allocation: separated
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 8
      - allocation: random
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 8
      - allocation: null
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: null
      - allocation: separated
    - status: invalid_parameters
- compute: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
- numeric tolerance: 3e-12
- invariants:
  - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - Story, calculation, geometry and graph use the same supplied parameters.
  - Whole counts and fixed allocation labels remain discrete.
- limits:
  - The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
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
  - prompt: How unusual is a four-versus-four learner-score difference under random assignment?
  - answer: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.
- Item:
  - prompt: What does this construction assume?
  - answer: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.

## Representations

- Item:
  - kind: geometry
  - description: Eight score marks retain their actual A/B assignment; the observed mean difference and 70 reassignment marks share the same point units.
- Item:
  - kind: graph
  - description: All 70 mean differences show the exact finite assignment distribution and the inclusive absolute tail.
- Item:
  - kind: substitution
  - description: Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: Eight learners complete a workshop challenge using instruction A or B. The design assigns exactly four learners to each instruction, with all 70 allocations equally likely. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Choose a displayed allocation and move the eighth score: the observed difference and all 70 reassigned differences follow the same scores.
  - limitations: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - evidence kind: constructed_example
  - example ref: math:example:randomization-distribution:case-1
- Item:
  - context: Alternate the observed labels
  - mapping: The fixed scores are unchanged, but the observed A/B allocation changes. Its smaller observed difference admits more reassigned outcomes into the tail.
  - limitations: The eight outcomes are constructed. For the sharp null that changing instructions has no effect on any learner, their fixed scores can be reassigned across all 70 equally likely four-versus-four allocations. The selector displays a fixed observed allocation, not a random draw. The exact two-sided convention counts |D|≥|d|, including ties; it differs from some other two-sided conventions. For these seven fixed integer scores and one variable score, exact absolute-tail comparisons reduce to comparisons with integer thresholds; no tie tolerance is used. The independent oracle uses exact decimal fractions. Use v from 0 to 10 points. The p-value is conditional on these outcomes and the declared assignment mechanism; it is not the probability that the null is true, a treatment effect estimate or a guarantee about a wider population. Changing a score constructs a different example rather than adding observed evidence.
  - evidence kind: constructed_example
  - example ref: math:example:randomization-distribution:case-2

## Source Refs

- source:sampling-extensions:randomization

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded inference lesson through the shared modular host.

## Referenced source registry

- Source ID: source:sampling-extensions:randomization. [SciPy · permutation_test: exact independent partitions and finite-precision ties](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.permutation_test.html). Locator: Notes: all distinct fixed-size partitions form an exact permutation distribution; equal statistics count in the tail; two-sided conventions must be declared. Mathcards uses its stated absolute-statistic tail on a symmetric equal-size assignment distribution, and does not import SciPy or reproduce its example.. Verification: Official primary software/method documentation inspected 2026-11-03. The finite assignment construction is independently enumerated; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original eight-task construction, prose, arithmetic and diagrams; no source example, data, code or illustration reproduced.
