---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:mann-whitney", "id": "math:concept:mann-whitney", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:mann-whitney", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6131b8b4974dc035970d253467b41be62aaa441e85261e15b46efbf7d9c8cc4d"}, "purpose": "How do two independent groups compare when the order of scores matters?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6131b8b4974dc035970d253467b41be62aaa441e85261e15b46efbf7d9c8cc4d", "status": "draft", "title": "Mann–Whitney ranks and pair comparisons", "topics": ["mathematics", "statistics", "probability", "mann–whitney ranks and pair comparisons"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Mann–Whitney ranks and pair comparisons

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:mann-whitney; revision 0.1.0-draft. Setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail. Expression: $U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.$. Conditions required for a defined value (a case may test their violation): Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely. Scope: These are constructed scores for independent groups. The conditional reference assumes group labels are exchangeable under equal population distributions, with every labeled three-versus-three allocation equally likely. Pooled ties receive midranks and remain separate learner identities in all 20 allocations. U_A counts A scores greater than B scores plus half of tied pairs; U_B=9−U_A. The two-sided convention includes allocations at least as far from 4.5 as the observed U_A, using doubled integer scores. This is not an untied exact table or a normal approximation. The empirical pair share θ=U_A/9 describes these nine comparisons; it is not a supplied population superiority probability. A general median comparison needs additional shape/location assumptions. No causal claim or probability that the null is true follows. Positive calibration preserves order and ties; numerical loss of a distinct scaled score is a precision failure. Use v from 0 to 7 points and k from 0.5 to 2.

## Schema Version

0.1.0

## Id

math:concept:mann-whitney

## Slug

mann-whitney

## Type

concept

## Title

Mann–Whitney ranks and pair comparisons

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

- mann–whitney ranks and pair comparisons

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How do two independent groups compare when the order of scores matters?

## Meaning

Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.

## Prerequisites

- required:
  - math:concept:randomization-distribution
- helpful:
  - math:concept:wilcoxon-signed-rank
  - math:concept:probability
- depth:
  []

## Definition

- setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
- formal latex: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
- signature:
  - v: Uncalibrated third A learner score, in points
  - k: Common positive score-calibration multiplier
  - A: Three calibrated group A scores, in points
  - B: Three calibrated group B scores, in points
  - R A: Sum of pooled midranks belonging to the three A learners
  - U A: A-over-B win count with half credit for tied cross-group pairs
  - U B: Complementary B-over-A pair count, 9−U_A
  - θ: Empirical A-over-B pair share U_A/9 among nine comparisons
  - n A: Number of independent group A learners, fixed at three
  - n B: Number of independent group B learners, fixed at three
  - m: Number of allocations meeting the inclusive absolute-U threshold
  - M: Total labeled three-versus-three allocations, fixed at 20
  - p: Inclusive two-sided conditional Mann–Whitney allocation tail
- conditions:
  - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
- domain notes: These are constructed scores for independent groups. The conditional reference assumes group labels are exchangeable under equal population distributions, with every labeled three-versus-three allocation equally likely. Pooled ties receive midranks and remain separate learner identities in all 20 allocations. U_A counts A scores greater than B scores plus half of tied pairs; U_B=9−U_A. The two-sided convention includes allocations at least as far from 4.5 as the observed U_A, using doubled integer scores. This is not an untied exact table or a normal approximation. The empirical pair share θ=U_A/9 describes these nine comparisons; it is not a supplied population superiority probability. A general median comparison needs additional shape/location assumptions. No causal claim or probability that the null is true follows. Positive calibration preserves order and ties; numerical loss of a distinct scaled score is a precision failure. Use v from 0 to 7 points and k from 0.5 to 2.
- proof status: Definition-level primary source and original bounded derivation; independent mathematical review pending.
- source refs:
  - source:comparison-extensions:mann-whitney

## Grammar

- pronunciation: Mann–Whitney ranks and pair comparisons
- expression latex: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
- formation rule: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
- precedence: Pool and midrank the scores before summing group A ranks; subtract the three-learner rank baseline before counting the inclusive allocation tail.
- symbols:
  - Item:
    - token: v
    - role: Uncalibrated third A learner score, in points
    - type: Declared comparison quantity
  - Item:
    - token: k
    - role: Common positive score-calibration multiplier
    - type: Declared comparison quantity
  - Item:
    - token: A
    - role: Three calibrated group A scores, in points
    - type: Declared comparison quantity
  - Item:
    - token: B
    - role: Three calibrated group B scores, in points
    - type: Declared comparison quantity
  - Item:
    - token: R_A
    - role: Sum of pooled midranks belonging to the three A learners
    - type: Declared comparison quantity
  - Item:
    - token: U_A
    - role: A-over-B win count with half credit for tied cross-group pairs
    - type: Declared comparison quantity
  - Item:
    - token: U_B
    - role: Complementary B-over-A pair count, 9−U_A
    - type: Declared comparison quantity
  - Item:
    - token: θ
    - role: Empirical A-over-B pair share U_A/9 among nine comparisons
    - type: Declared comparison quantity
  - Item:
    - token: n_A
    - role: Number of independent group A learners, fixed at three
    - type: Declared comparison quantity
  - Item:
    - token: n_B
    - role: Number of independent group B learners, fixed at three
    - type: Declared comparison quantity
  - Item:
    - token: m
    - role: Number of allocations meeting the inclusive absolute-U threshold
    - type: Declared comparison quantity
  - Item:
    - token: M
    - role: Total labeled three-versus-three allocations, fixed at 20
    - type: Declared comparison quantity
  - Item:
    - token: p
    - role: Inclusive two-sided conditional Mann–Whitney allocation tail
    - type: Declared comparison quantity
- ast:
  - id: ast:mann-whitney:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:lastScore
      - kind: variable
      - type: Declared input or construction selector
      - symbol: v
      - scope ref: scope:mann-whitney
    - Item:
      - id: n:scale
      - kind: variable
      - type: Declared input or construction selector
      - symbol: k
      - scope ref: scope:mann-whitney
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared covariance or conditional rank-comparison rule
      - ref: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:rule
      - argument: n:lastScore
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded comparison result
      - function: n:partial-0
      - argument: n:scale
  - scopes:
    - Item:
      - id: scope:mann-whitney
      - kind: modelExpression
      - free variables:
        - v
        - k
      - external parameters:
        - Six labeled learner positions under the declared exchangeable-label null
      - domain condition: These are constructed scores for independent groups. The conditional reference assumes group labels are exchangeable under equal population distributions, with every labeled three-versus-three allocation equally likely. Pooled ties receive midranks and remain separate learner identities in all 20 allocations. U_A counts A scores greater than B scores plus half of tied pairs; U_B=9−U_A. The two-sided convention includes allocations at least as far from 4.5 as the observed U_A, using doubled integer scores. This is not an untied exact table or a normal approximation. The empirical pair share θ=U_A/9 describes these nine comparisons; it is not a supplied population superiority probability. A general median comparison needs additional shape/location assumptions. No causal claim or probability that the null is true follows. Positive calibration preserves order and ties; numerical loss of a distinct scaled score is a precision failure. Use v from 0 to 7 points and k from 0.5 to 2.
- parse errors:
  - Item:
    - input: Change the comparison design or null assumptions without changing the rule
    - status: model mismatch
    - reason: These are constructed scores for independent groups. The conditional reference assumes group labels are exchangeable under equal population distributions, with every labeled three-versus-three allocation equally likely. Pooled ties receive midranks and remain separate learner identities in all 20 allocations. U_A counts A scores greater than B scores plus half of tied pairs; U_B=9−U_A. The two-sided convention includes allocations at least as far from 4.5 as the observed U_A, using doubled integer scores. This is not an untied exact table or a normal approximation. The empirical pair share θ=U_A/9 describes these nine comparisons; it is not a supplied population superiority probability. A general median comparison needs additional shape/location assumptions. No causal claim or probability that the null is true follows. Positive calibration preserves order and ties; numerical loss of a distinct scaled score is a precision failure. Use v from 0 to 7 points and k from 0.5 to 2.
- ast coverage: Typed application outline of the stated bounded construction, not an arbitrary-data analysis engine.
- output symbol bindings:
  - v: lastScore
  - k: scale
  - A: groupA
  - B: groupB
  - R A: rankSumA
  - U A: uA
  - U B: uB
  - θ: probabilitySuperiority
  - n A: sampleSizeA
  - n B: sampleSizeB
  - m: tailCount
  - M: allocationCount
  - p: output

## Properties

- Item:
  - claim: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
  - conditions: Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - derivation: For three A learners, subtracting 1+2+3=6 from their pooled rank sum leaves the A-over-B pair count with half credit for ties. The complementary U statistics sum to 3×3=9. Under the equal-distribution exchangeable-label null, all 20 choices of three labeled learners for A are equally likely. The finite two-sided reference compares absolute distance from 4.5 and includes ties. A common positive score multiplier leaves the ordering and pair comparisons unchanged.
  - status: author-derived under stated conditions; independent review pending
  - example ref: math:example:mann-whitney:case-1

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
  - target: math:concept:randomization-distribution
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Both references enumerate allowed assignments, but the fixed quantities and statistics differ.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:wilcoxon-signed-rank
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Paired signed ranks and independent-group pooled ranks answer different comparison questions.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: Retain the individual lesson’s data structure, units, null model and comparison convention.
  - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:mann-whitney:case-1
  - title: Alternating ordered scores
  - role: applied_model
  - question: How do two independent groups compare when the order of scores matters?
  - setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - assumptions:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - inputs:
    - lastScore: 5
    - scale: 1
  - steps:
    - Item:
      - index: 1
      - expression: v = 5; k = 1
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
      - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - index: 3
      - expression: p = 14 allocations / 20 allocations = 0.7
      - reason: The A scores win three of nine cross-group comparisons. U_A=3 and θ=1/3; fourteen of 20 labeled allocations are at least as far from 4.5, giving p=0.7.
  - result:
    - approximate: 0.7
  - interpretation: The A scores win three of nine cross-group comparisons. U_A=3 and θ=1/3; fourteen of 20 labeled allocations are at least as far from 4.5, giving p=0.7.
  - independent check:
    - method: Independent Python cross-group wins/ties counted as exact fractions for every labeled allocation; the rank-sum relation is checked separately from the runtime ranking implementation.
    - expected: 0.7
  - limits: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - preset:
    - lastScore: 5
    - scale: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
- Item:
  - id: math:example:mann-whitney:case-2
  - title: One cross-group tied score
  - role: applied_model
  - question: How do two independent groups compare when the order of scores matters?
  - setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - assumptions:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - inputs:
    - lastScore: 2
    - scale: 1
  - steps:
    - Item:
      - index: 1
      - expression: v = 2; k = 1
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
      - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - index: 3
      - expression: p = 6 allocations / 20 allocations = 0.3
      - reason: The third A score ties the B score of two. Its cross-group comparison receives half credit, while pooled midranks and the tied allocation distribution are recomputed.
  - result:
    - approximate: 0.3
  - interpretation: The third A score ties the B score of two. Its cross-group comparison receives half credit, while pooled midranks and the tied allocation distribution are recomputed.
  - independent check:
    - method: Independent Python cross-group wins/ties counted as exact fractions for every labeled allocation; the rank-sum relation is checked separately from the runtime ranking implementation.
    - expected: 0.3
  - limits: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - preset:
    - lastScore: 2
    - scale: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
- Item:
  - id: math:example:mann-whitney:case-3
  - title: A new highest individual score
  - role: applied_model
  - question: How do two independent groups compare when the order of scores matters?
  - setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - assumptions:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - inputs:
    - lastScore: 7
    - scale: 1
  - steps:
    - Item:
      - index: 1
      - expression: v = 7; k = 1
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
      - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - index: 3
      - expression: p = 20 allocations / 20 allocations = 1.0
      - reason: One A learner now scores above every B learner. The statistic still combines all nine comparisons, rather than replacing the group comparison with its maximum.
  - result:
    - approximate: 1.0
  - interpretation: One A learner now scores above every B learner. The statistic still combines all nine comparisons, rather than replacing the group comparison with its maximum.
  - independent check:
    - method: Independent Python cross-group wins/ties counted as exact fractions for every labeled allocation; the rank-sum relation is checked separately from the runtime ranking implementation.
    - expected: 1.0
  - limits: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - preset:
    - lastScore: 7
    - scale: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
- Item:
  - id: math:example:mann-whitney:case-4
  - title: A zero challenge score
  - role: applied_model
  - question: How do two independent groups compare when the order of scores matters?
  - setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - assumptions:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - inputs:
    - lastScore: 0
    - scale: 1
  - steps:
    - Item:
      - index: 1
      - expression: v = 0; k = 1
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
      - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - index: 3
      - expression: p = 4 allocations / 20 allocations = 0.2
      - reason: The third A score falls below every B score. The fixed A score of three still wins one comparison, so U_A is one rather than zero.
  - result:
    - approximate: 0.2
  - interpretation: The third A score falls below every B score. The fixed A score of three still wins one comparison, so U_A is one rather than zero.
  - independent check:
    - method: Independent Python cross-group wins/ties counted as exact fractions for every labeled allocation; the rank-sum relation is checked separately from the runtime ranking implementation.
    - expected: 0.2
  - limits: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - preset:
    - lastScore: 0
    - scale: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
- Item:
  - id: math:example:mann-whitney:case-5
  - title: Double every calibrated score
  - role: applied_model
  - question: How do two independent groups compare when the order of scores matters?
  - setting: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - assumptions:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - inputs:
    - lastScore: 5
    - scale: 2
  - steps:
    - Item:
      - index: 1
      - expression: v = 5; k = 2
      - reason: Keep the declared construction and comparison assumptions explicit.
    - Item:
      - index: 2
      - expression: U_A=R_A-\frac{3(3+1)}{2}=R_A-6,\quad U_B=9-U_A,\quad \theta=\frac{U_A}{9},\quad M=\binom{6}{3}=20,\quad p=\frac{m}{M}.
      - reason: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
    - Item:
      - index: 3
      - expression: p = 14 allocations / 20 allocations = 0.7
      - reason: All six score positions double, but order and ties stay unchanged. The ranks, U_A=3, empirical pair share and p=0.7 are exactly the same as in the unscaled case.
  - result:
    - approximate: 0.7
  - interpretation: All six score positions double, but order and ties stay unchanged. The ranks, U_A=3, empirical pair share and p=0.7 are exactly the same as in the unscaled case.
  - independent check:
    - method: Independent Python cross-group wins/ties counted as exact fractions for every labeled allocation; the rank-sum relation is checked separately from the runtime ranking implementation.
    - expected: 0.7
  - limits: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - preset:
    - lastScore: 5
    - scale: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.

## Interactive

- component id: component:mann-whitney
- renderer id: mann-whitney-visual-model
- renderer version: 1
- model id: mann-whitney-visual-model
- model revision: 1
- expression id: ast:mann-whitney:expression
- interaction status: implemented
- description: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
- controls:
  - Item:
    - id: lastScore
    - type: number
    - default: 5
    - min: 0
    - max: 7
    - step: 0.05
  - Item:
    - id: scale
    - type: number
    - default: 1
    - min: 0.5
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - lastScore: 0.0
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.0
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.0
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.5
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.5
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.5
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.0
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.0
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.0
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.5
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.5
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.5
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 2.0
      - scale: 0.5
    - status: valid
    - output: 0.3
  - Item:
    - input:
      - lastScore: 2.0
      - scale: 1
    - status: valid
    - output: 0.3
  - Item:
    - input:
      - lastScore: 2.0
      - scale: 2
    - status: valid
    - output: 0.3
  - Item:
    - input:
      - lastScore: 2.5
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.5
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.5
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.0
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.0
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.0
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.5
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.5
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.5
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 4.0
      - scale: 0.5
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastScore: 4.0
      - scale: 1
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastScore: 4.0
      - scale: 2
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastScore: 4.5
      - scale: 0.5
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 4.5
      - scale: 1
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 4.5
      - scale: 2
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.0
      - scale: 0.5
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.0
      - scale: 1
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.0
      - scale: 2
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.5
      - scale: 0.5
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.5
      - scale: 1
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.5
      - scale: 2
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 6.0
      - scale: 0.5
    - status: valid
    - output: 0.8
  - Item:
    - input:
      - lastScore: 6.0
      - scale: 1
    - status: valid
    - output: 0.8
  - Item:
    - input:
      - lastScore: 6.0
      - scale: 2
    - status: valid
    - output: 0.8
  - Item:
    - input:
      - lastScore: 6.5
      - scale: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 6.5
      - scale: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 6.5
      - scale: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 7.0
      - scale: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 7.0
      - scale: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 7.0
      - scale: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 0.95
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.95
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 0.95
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.05
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.05
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.05
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.95
      - scale: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.95
      - scale: 1
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 1.95
      - scale: 2
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - lastScore: 2.05
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.05
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.05
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.95
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.95
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 2.95
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.05
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.05
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.05
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.95
      - scale: 0.5
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.95
      - scale: 1
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 3.95
      - scale: 2
    - status: valid
    - output: 0.4
  - Item:
    - input:
      - lastScore: 4.05
      - scale: 0.5
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 4.05
      - scale: 1
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 4.05
      - scale: 2
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.95
      - scale: 0.5
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.95
      - scale: 1
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 5.95
      - scale: 2
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - lastScore: 6.05
      - scale: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 6.05
      - scale: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: 6.05
      - scale: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - lastScore: -1
      - scale: 1
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 8
      - scale: 1
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: true
      - scale: 1
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: null
      - scale: 1
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 5
      - scale: 1
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 5
      - scale: 0
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 5
      - scale: 3
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 5
      - scale: false
    - status: invalid_parameters
  - Item:
    - input:
      - lastScore: 5
      - scale: 1
    - status: invalid_parameters
- compute: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
- numeric tolerance: 5e-11
- invariants:
  - Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.
  - Story, calculation, Geometry and Graph use the same declared model values.
  - Rank order, omitted zeros and finite tail counts remain discrete where their definitions change.
- limits:
  - This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
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
  - prompt: How do two independent groups compare when the order of scores matters?
  - answer: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.
- Item:
  - prompt: What is fixed in this comparison?
  - answer: Two independent groups of three use the same positive score calibration. Under the declared equal-distribution null, all 20 labeled allocations are equally likely.

## Representations

- Item:
  - kind: geometry
  - description: Calibrated score positions and a three-by-three pair grid show the same nine wins, ties and losses used by the U statistic; the pooled-rank reading leads into its exact allocation tail.
- Item:
  - kind: graph
  - description: Separate evaluated p-value dots as the third A score crosses pooled ranks. Calibration changes displayed distances while preserving every U statistic and tail probability.
- Item:
  - kind: substitution
  - description: Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: Six learners complete a workshop challenge in two independent groups of three. The constructed uncalibrated A scores are 1, 3 and v; B scores are 2, 4 and 6. Drag the third A score v, or apply the same positive calibration multiplier k to every score. Follow the pooled ranks into nine cross-group pair comparisons and then the finite allocation tail.
  - limitations: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - evidence kind: constructed_example
  - example ref: math:example:mann-whitney:case-1
- Item:
  - context: One cross-group tied score
  - mapping: The third A score ties the B score of two. Its cross-group comparison receives half credit, while pooled midranks and the tied allocation distribution are recomputed.
  - limitations: This conditional label-allocation tail assumes exchangeable equal-distribution labels. It does not establish a causal effect or a general median difference.
  - evidence kind: constructed_example
  - example ref: math:example:mann-whitney:case-2

## Source Refs

- source:comparison-extensions:mann-whitney

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded joint-spread or exact rank-comparison lesson through the existing modular host.

## Referenced source registry

- Source ID: source:comparison-extensions:mann-whitney. [SciPy · Mann–Whitney U rank test](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html). Locator: Definition/Notes: independent samples, equal-distribution null, complementary U statistics and rank-sum relation. Location/median interpretations need additional assumptions. Tied small samples call for permutation methods; this original construction enumerates all 20 labeled three-versus-three allocations with fixed pooled midranks.. Verification: Official primary method documentation inspected 2026-11-03. Independent finite enumeration and original examples; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original six-learner score construction, calibration comparisons and figures; no source example, data or implementation reproduced.
