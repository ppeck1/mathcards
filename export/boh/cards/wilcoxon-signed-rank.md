---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:wilcoxon-signed-rank", "id": "math:concept:wilcoxon-signed-rank", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:wilcoxon-signed-rank", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "30ef51d527265a728d296ca08b40aba36f3ce2f9e9fa2672334bc761fa5cf1d3"}, "purpose": "How unusual is the balance of signed ranks for five paired packing comparisons?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "30ef51d527265a728d296ca08b40aba36f3ce2f9e9fa2672334bc761fa5cf1d3", "status": "draft", "title": "Paired differences and signed ranks", "topics": ["mathematics", "statistics", "probability", "paired differences and signed ranks"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Paired differences and signed ranks

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:wilcoxon-signed-rank; revision 0.1.0-draft. Setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns. Expression: $W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.$. Conditions required for a defined value (a case may test their violation): Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks. Scope: The five times are constructed. The conditional null requires independent fair signs given the nonzero absolute paired differences; a symmetric zero-centered difference model supplies the usual justification. Exact zeros are omitted before ranking, using the Wilcoxon convention rather than Pratt ranking. Tied absolute differences receive their average rank. This implementation enumerates all 2^n sign assignments of the observed midranks, with an inclusive two-sided absolute-score tail; it does not use an untied rank table or a normal approximation. Its doubled-rank comparisons are exact integers. n is four when d₅=0 and otherwise five. At most five nonzero pairs cannot produce a two-sided p below 2/32=0.0625 in this family, so even all-positive signs cannot meet a 0.05 cutoff. This is neither a probability that the null is true nor a general before/after median claim. Moving a difference changes the teaching construction, not evidence from a completed study.

## Schema Version

0.1.0

## Id

math:concept:wilcoxon-signed-rank

## Slug

wilcoxon-signed-rank

## Type

concept

## Title

Paired differences and signed ranks

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

- paired differences and signed ranks

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How unusual is the balance of signed ranks for five paired packing comparisons?

## Meaning

Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.

## Prerequisites

- required:
  - math:concept:sign-test
- helpful:
  - math:concept:randomization-distribution
  - math:concept:hypothesis-test
- depth:
  []

## Definition

- setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
- formal latex: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
- signature:
  - d₅: Fifth B-minus-A packing-time difference, in minutes
  - dᵢ: Five paired B-minus-A differences, in minutes
  - |dᵢ|: Absolute sizes of the five paired differences; exact zero is omitted before ranking
  - rᵢ: Average absolute-difference data ranks of nonzero pairs
  - W⁺: Sum of ranks attached to positive differences
  - W⁻: Sum of ranks attached to negative differences
  - T: Observed signed rank score W⁺−W⁻
  - n: Number of nonzero paired differences after zero omission
  - m: Number of fair-sign assignments meeting the inclusive absolute-score threshold
  - M: Total conditional sign assignments, 2 raised to n
  - p: Inclusive two-sided conditional signed-rank tail probability
- conditions:
  - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
- domain notes: The five times are constructed. The conditional null requires independent fair signs given the nonzero absolute paired differences; a symmetric zero-centered difference model supplies the usual justification. Exact zeros are omitted before ranking, using the Wilcoxon convention rather than Pratt ranking. Tied absolute differences receive their average rank. This implementation enumerates all 2^n sign assignments of the observed midranks, with an inclusive two-sided absolute-score tail; it does not use an untied rank table or a normal approximation. Its doubled-rank comparisons are exact integers. n is four when d₅=0 and otherwise five. At most five nonzero pairs cannot produce a two-sided p below 2/32=0.0625 in this family, so even all-positive signs cannot meet a 0.05 cutoff. This is neither a probability that the null is true nor a general before/after median claim. Moving a difference changes the teaching construction, not evidence from a completed study.
- proof status: Definition-level primary source and original bounded derivation; independent mathematical review pending.
- source refs:
  - source:comparison-extensions:signed-rank

## Grammar

- pronunciation: Paired differences and signed ranks
- expression latex: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
- formation rule: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
- precedence: Omit exact zeros before assigning absolute-difference midranks; restore signs before summing ranks and forming the inclusive tail.
- symbols:
  - Item:
    - token: d₅
    - role: Fifth B-minus-A packing-time difference, in minutes
    - type: Declared comparison quantity
  - Item:
    - token: dᵢ
    - role: Five paired B-minus-A differences, in minutes
    - type: Declared comparison quantity
  - Item:
    - token: |dᵢ|
    - role: Absolute sizes of the five paired differences; exact zero is omitted before ranking
    - type: Declared comparison quantity
  - Item:
    - token: rᵢ
    - role: Average absolute-difference data ranks of nonzero pairs
    - type: Declared comparison quantity
  - Item:
    - token: W⁺
    - role: Sum of ranks attached to positive differences
    - type: Declared comparison quantity
  - Item:
    - token: W⁻
    - role: Sum of ranks attached to negative differences
    - type: Declared comparison quantity
  - Item:
    - token: T
    - role: Observed signed rank score W⁺−W⁻
    - type: Declared comparison quantity
  - Item:
    - token: n
    - role: Number of nonzero paired differences after zero omission
    - type: Declared comparison quantity
  - Item:
    - token: m
    - role: Number of fair-sign assignments meeting the inclusive absolute-score threshold
    - type: Declared comparison quantity
  - Item:
    - token: M
    - role: Total conditional sign assignments, 2 raised to n
    - type: Declared comparison quantity
  - Item:
    - token: p
    - role: Inclusive two-sided conditional signed-rank tail probability
    - type: Declared comparison quantity
- ast:
  - id: ast:wilcoxon-signed-rank:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:lastDifference
      - kind: variable
      - type: Declared input or construction selector
      - symbol: d₅
      - scope ref: scope:wilcoxon-signed-rank
    - Item:
      - id: n:pattern
      - kind: variable
      - type: Declared input or construction selector
      - symbol: chosen first-four pattern
      - scope ref: scope:wilcoxon-signed-rank
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared covariance or conditional rank-comparison rule
      - ref: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:rule
      - argument: n:lastDifference
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:partial-0
      - argument: n:pattern
  - scopes:
    - Item:
      - id: scope:wilcoxon-signed-rank
      - kind: modelExpression
      - free variables:
        - d₅
        - chosen first-four pattern
      - external parameters:
        - Conditional independent fair signs and declared zero/tie convention
      - domain condition: The five times are constructed. The conditional null requires independent fair signs given the nonzero absolute paired differences; a symmetric zero-centered difference model supplies the usual justification. Exact zeros are omitted before ranking, using the Wilcoxon convention rather than Pratt ranking. Tied absolute differences receive their average rank. This implementation enumerates all 2^n sign assignments of the observed midranks, with an inclusive two-sided absolute-score tail; it does not use an untied rank table or a normal approximation. Its doubled-rank comparisons are exact integers. n is four when d₅=0 and otherwise five. At most five nonzero pairs cannot produce a two-sided p below 2/32=0.0625 in this family, so even all-positive signs cannot meet a 0.05 cutoff. This is neither a probability that the null is true nor a general before/after median claim. Moving a difference changes the teaching construction, not evidence from a completed study.
- parse errors:
  - Item:
    - input: Change the comparison design or null assumptions without changing the rule
    - status: model mismatch
    - reason: The five times are constructed. The conditional null requires independent fair signs given the nonzero absolute paired differences; a symmetric zero-centered difference model supplies the usual justification. Exact zeros are omitted before ranking, using the Wilcoxon convention rather than Pratt ranking. Tied absolute differences receive their average rank. This implementation enumerates all 2^n sign assignments of the observed midranks, with an inclusive two-sided absolute-score tail; it does not use an untied rank table or a normal approximation. Its doubled-rank comparisons are exact integers. n is four when d₅=0 and otherwise five. At most five nonzero pairs cannot produce a two-sided p below 2/32=0.0625 in this family, so even all-positive signs cannot meet a 0.05 cutoff. This is neither a probability that the null is true nor a general before/after median claim. Moving a difference changes the teaching construction, not evidence from a completed study.
- ast coverage: Typed application outline of the stated bounded construction, not an arbitrary-data analysis engine.
- output symbol bindings:
  - d₅: lastDifference
  - dᵢ: differences
  - |dᵢ|: absoluteDifferences
  - rᵢ: activeRanks
  - W⁺: positiveRankSum
  - W⁻: negativeRankSum
  - T: signedScore
  - n: nonzeroCount
  - m: tailCount
  - M: assignmentCount
  - p: output

## Properties

- Item:
  - claim: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
  - conditions: Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - derivation: Data ranks are ordinal positions, with a tied block assigned its average position. Under the conditional fair-sign null, all 2^n independent sign assignments are equally likely. Count each assignment whose absolute signed rank score is at least the observed absolute score. Average ranks are half-integers, so doubling every rank gives integer scores and exact tie comparisons. The test uses magnitude order as well as sign; the simpler sign test uses signs alone.
  - status: author-derived under stated conditions; independent review pending
  - example ref: math:example:wilcoxon-signed-rank:case-1

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
  - target: math:concept:sign-test
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: The sign test uses sign counts; the signed-rank procedure also uses the order of nonzero magnitudes.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:randomization-distribution
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Both references enumerate allowed assignments, but the fixed quantities and statistics differ.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:hypothesis-test
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:wilcoxon-signed-rank:case-1
  - title: Five mixed differences
  - role: applied_model
  - question: How unusual is the balance of signed ranks for five paired packing comparisons?
  - setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - assumptions:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - inputs:
    - lastDifference: 5
    - pattern: mixed
  - steps:
    - Item:
      - index: 1
      - expression: d₅ = 5; chosen first-four pattern = mixed
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
      - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - index: 3
      - expression: 0.4375
      - reason: The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.
  - result:
    - approximate: 0.4375
  - interpretation: The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.
  - independent check:
    - method: Independent Python average-rank assignment and exhaustive sign products using exact fractions; no runtime table or asymptotic approximation is copied.
    - expected: 0.4375
  - limits: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - preset:
    - lastDifference: 5
    - pattern: mixed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
- Item:
  - id: math:example:wilcoxon-signed-rank:case-2
  - title: One unchanged paired task
  - role: applied_model
  - question: How unusual is the balance of signed ranks for five paired packing comparisons?
  - setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - assumptions:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - inputs:
    - lastDifference: 0
    - pattern: mixed
  - steps:
    - Item:
      - index: 1
      - expression: d₅ = 0; chosen first-four pattern = mixed
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
      - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - index: 3
      - expression: 0.875
      - reason: The fifth pair contributes no sign or data rank. The other four pairs are ranked before enumerating 16 fair-sign assignments; zero is not assigned rank zero.
  - result:
    - approximate: 0.875
  - interpretation: The fifth pair contributes no sign or data rank. The other four pairs are ranked before enumerating 16 fair-sign assignments; zero is not assigned rank zero.
  - independent check:
    - method: Independent Python average-rank assignment and exhaustive sign products using exact fractions; no runtime table or asymptotic approximation is copied.
    - expected: 0.875
  - limits: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - preset:
    - lastDifference: 0
    - pattern: mixed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
- Item:
  - id: math:example:wilcoxon-signed-rank:case-3
  - title: Equal absolute differences
  - role: applied_model
  - question: How unusual is the balance of signed ranks for five paired packing comparisons?
  - setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - assumptions:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - inputs:
    - lastDifference: 2
    - pattern: tied
  - steps:
    - Item:
      - index: 1
      - expression: d₅ = 2; chosen first-four pattern = tied
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
      - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - index: 3
      - expression: 1.0
      - reason: All five absolute differences equal two minutes, so each receives average rank three. The signed balance is small relative to this tied conditional distribution.
  - result:
    - approximate: 1.0
  - interpretation: All five absolute differences equal two minutes, so each receives average rank three. The signed balance is small relative to this tied conditional distribution.
  - independent check:
    - method: Independent Python average-rank assignment and exhaustive sign products using exact fractions; no runtime table or asymptotic approximation is copied.
    - expected: 1.0
  - limits: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - preset:
    - lastDifference: 2
    - pattern: tied
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
- Item:
  - id: math:example:wilcoxon-signed-rank:case-4
  - title: All five differences positive
  - role: applied_model
  - question: How unusual is the balance of signed ranks for five paired packing comparisons?
  - setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - assumptions:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - inputs:
    - lastDifference: 5
    - pattern: positive
  - steps:
    - Item:
      - index: 1
      - expression: d₅ = 5; chosen first-four pattern = positive
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
      - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - index: 3
      - expression: 0.0625
      - reason: All ranks carry a positive sign. Only the all-positive and all-negative assignments are as extreme, giving 2/32=0.0625; five pairs still cannot attain a two-sided 0.05 cutoff.
  - result:
    - approximate: 0.0625
  - interpretation: All ranks carry a positive sign. Only the all-positive and all-negative assignments are as extreme, giving 2/32=0.0625; five pairs still cannot attain a two-sided 0.05 cutoff.
  - independent check:
    - method: Independent Python average-rank assignment and exhaustive sign products using exact fractions; no runtime table or asymptotic approximation is copied.
    - expected: 0.0625
  - limits: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - preset:
    - lastDifference: 5
    - pattern: positive
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
- Item:
  - id: math:example:wilcoxon-signed-rank:case-5
  - title: Reverse the largest paired change
  - role: applied_model
  - question: How unusual is the balance of signed ranks for five paired packing comparisons?
  - setting: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - assumptions:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - inputs:
    - lastDifference: -5
    - pattern: mixed
  - steps:
    - Item:
      - index: 1
      - expression: d₅ = -5; chosen first-four pattern = mixed
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: W^+=\sum_{d_i>0}r_i,\quad W^-=\sum_{d_i<0}r_i,\quad T=W^+-W^-,\quad M=2^n,\quad p=\frac{m}{M}.
      - reason: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
    - Item:
      - index: 3
      - expression: 0.8125
      - reason: The largest absolute difference now contributes a negative rank. Its magnitude order stays the same while the signed score and inclusive tail change.
  - result:
    - approximate: 0.8125
  - interpretation: The largest absolute difference now contributes a negative rank. Its magnitude order stays the same while the signed score and inclusive tail change.
  - independent check:
    - method: Independent Python average-rank assignment and exhaustive sign products using exact fractions; no runtime table or asymptotic approximation is copied.
    - expected: 0.8125
  - limits: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - preset:
    - lastDifference: -5
    - pattern: mixed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.

## Interactive

- component id: component:wilcoxon-signed-rank
- renderer id: wilcoxon-signed-rank-visual-model
- renderer version: 1
- model id: wilcoxon-signed-rank-visual-model
- model revision: 1
- expression id: ast:wilcoxon-signed-rank:expression
- interaction status: implemented
- description: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
- controls:
  - Item:
    - id: lastDifference
    - type: number
    - default: 5
    - min: -5
    - max: 5
    - step: 0.05
  - Item:
    - id: pattern
    - type: enum
    - default: mixed
    - values:
      - mixed
      - tied
      - positive
- expected cases:
  - Item:
    - input:
      - lastDifference: -5.0
      - pattern: mixed
    - status: valid
    - output: 0.8125
  - Item:
    - input:
      - lastDifference: -5.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -5.0
      - pattern: positive
    - status: valid
    - output: 0.625
  - Item:
    - input:
      - lastDifference: -4.5
      - pattern: mixed
    - status: valid
    - output: 0.8125
  - Item:
    - input:
      - lastDifference: -4.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -4.5
      - pattern: positive
    - status: valid
    - output: 0.625
  - Item:
    - input:
      - lastDifference: -4.0
      - pattern: mixed
    - status: valid
    - output: 0.875
  - Item:
    - input:
      - lastDifference: -4.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -4.0
      - pattern: positive
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastDifference: -3.5
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -3.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -3.5
      - pattern: positive
    - status: valid
    - output: 0.4375
  - Item:
    - input:
      - lastDifference: -3.0
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -3.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -3.0
      - pattern: positive
    - status: valid
    - output: 0.375
  - Item:
    - input:
      - lastDifference: -2.5
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -2.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: -2.5
      - pattern: positive
    - status: valid
    - output: 0.3125
  - Item:
    - input:
      - lastDifference: -2.0
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -2.0
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -2.0
      - pattern: positive
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - lastDifference: -1.5
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -1.5
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -1.5
      - pattern: positive
    - status: valid
    - output: 0.1875
  - Item:
    - input:
      - lastDifference: -1.0
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -1.0
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -1.0
      - pattern: positive
    - status: valid
    - output: 0.1875
  - Item:
    - input:
      - lastDifference: -0.5
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -0.5
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -0.5
      - pattern: positive
    - status: valid
    - output: 0.125
  - Item:
    - input:
      - lastDifference: 0.0
      - pattern: mixed
    - status: valid
    - output: 0.875
  - Item:
    - input:
      - lastDifference: 0.0
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 0.0
      - pattern: positive
    - status: valid
    - output: 0.125
  - Item:
    - input:
      - lastDifference: 0.5
      - pattern: mixed
    - status: valid
    - output: 0.8125
  - Item:
    - input:
      - lastDifference: 0.5
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 0.5
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 1.0
      - pattern: mixed
    - status: valid
    - output: 0.6875
  - Item:
    - input:
      - lastDifference: 1.0
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 1.0
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 1.5
      - pattern: mixed
    - status: valid
    - output: 0.625
  - Item:
    - input:
      - lastDifference: 1.5
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 1.5
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 2.0
      - pattern: mixed
    - status: valid
    - output: 0.625
  - Item:
    - input:
      - lastDifference: 2.0
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 2.0
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 2.5
      - pattern: mixed
    - status: valid
    - output: 0.625
  - Item:
    - input:
      - lastDifference: 2.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 2.5
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 3.0
      - pattern: mixed
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastDifference: 3.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 3.0
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 3.5
      - pattern: mixed
    - status: valid
    - output: 0.4375
  - Item:
    - input:
      - lastDifference: 3.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 3.5
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 4.0
      - pattern: mixed
    - status: valid
    - output: 0.375
  - Item:
    - input:
      - lastDifference: 4.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 4.0
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 4.5
      - pattern: mixed
    - status: valid
    - output: 0.4375
  - Item:
    - input:
      - lastDifference: 4.5
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 4.5
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: 5.0
      - pattern: mixed
    - status: valid
    - output: 0.4375
  - Item:
    - input:
      - lastDifference: 5.0
      - pattern: tied
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - lastDifference: 5.0
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: -0.05
      - pattern: mixed
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -0.05
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: -0.05
      - pattern: positive
    - status: valid
    - output: 0.125
  - Item:
    - input:
      - lastDifference: 0.05
      - pattern: mixed
    - status: valid
    - output: 0.8125
  - Item:
    - input:
      - lastDifference: 0.05
      - pattern: tied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastDifference: 0.05
      - pattern: positive
    - status: valid
    - output: 0.0625
  - Item:
    - input:
      - lastDifference: -6
      - pattern: mixed
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: 6
      - pattern: mixed
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: true
      - pattern: mixed
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: null
      - pattern: mixed
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: 1
      - pattern: mixed
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: 5
      - pattern: other
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: 5
      - pattern: null
    - status: invalid_parameters
  - Item:
    - input:
      - lastDifference: 5
      - pattern: 1
    - status: invalid_parameters
- compute: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
- numeric tolerance: 5e-11
- invariants:
  - Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.
  - Story, calculation, Geometry and Graph use the same declared model values.
  - Rank order, omitted zeros and finite tail counts remain discrete where their definitions change.
- limits:
  - The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
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
  - prompt: How unusual is the balance of signed ranks for five paired packing comparisons?
  - answer: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.
- Item:
  - prompt: What is fixed in this comparison?
  - answer: Five constructed paired differences use independent fair signs conditional on the nonzero magnitudes. Omit exact zeros before assigning tied average ranks.

## Representations

- Item:
  - kind: geometry
  - description: Each paired difference keeps its ordinary task number, absolute size, omitted-zero state and signed rank contribution. The reference counts the same conditional sign assignments.
- Item:
  - kind: graph
  - description: Separate evaluated p-value dots against the fifth difference, including rank/tie/zero events. The finite tail count is not smoothed across jumps.
- Item:
  - kind: substitution
  - description: Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A workshop compares two packing methods on five paired tasks. Each constructed A time is 10 minutes; its B time adds the task’s difference. Choose the first four differences and drag the fifth difference d₅. Follow that task through its absolute difference, data rank and signed contribution before counting the null sign patterns.
  - limitations: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - evidence kind: constructed_example
  - example ref: math:example:wilcoxon-signed-rank:case-1
- Item:
  - context: One unchanged paired task
  - mapping: The fifth pair contributes no sign or data rank. The other four pairs are ranked before enumerating 16 fair-sign assignments; zero is not assigned rank zero.
  - limitations: The inclusive conditional sign tail assumes the declared symmetric fair-sign null. With at most five nonzero pairs, the smallest two-sided p is 0.0625.
  - evidence kind: constructed_example
  - example ref: math:example:wilcoxon-signed-rank:case-2

## Source Refs

- source:comparison-extensions:signed-rank

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded joint-spread or exact rank-comparison lesson through the existing modular host.

## Referenced source registry

- Source ID: source:comparison-extensions:signed-rank. [SciPy · Wilcoxon signed-rank test](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.wilcoxon.html). Locator: Definition and zero_method notes: paired differences, symmetry about zero and Wilcoxon zero omission. Notes distinguish untied exact tables from ties/zeros and permutation enumeration. Mathcards independently enumerates all conditional sign assignments with midranks; it does not import SciPy or claim its untied exact table handles ties.. Verification: Official primary method documentation inspected 2026-11-03. Independent finite enumeration and original examples; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original five-pair packing construction and worked examples; no source sample, code, exercise or illustration reproduced.
