---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:variance", "id": "math:concept:variance", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:variance", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d"}, "purpose": "Follow changing lengths through their mean and squared deviations into population variance and standard deviation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d", "status": "draft", "title": "Variance and standard deviation", "topics": ["mathematics", "statistics", "probability", "measurement", "population variance", "standard deviation", "spread of measurements"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Variance and standard deviation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:variance; revision 0.1.0-draft. Setting: Population variance and standard deviation for a complete four-length workshop group. Expression: $\mu=\frac{8+10+12+x}{4},\quad \sigma^2=\frac{1}{4}\sum_{i=1}^{4}(x_i-\mu)^2=2+\frac{3}{16}(x-10)^2,\quad \sigma=\sqrt{\sigma^2}.$. Conditions required for a defined value (a case may test their violation): The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm. Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1. The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm². Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen. The deviation notation is dᵢ=xᵢ−μ for i=1,2,3,4; d₄=x−μ is the changing last strip’s signed deviation. Scope: This is a descriptive calculation for four known values. No confidence interval, uncertainty estimate for an unknown population or sample-variance correction is produced. Zero signed-deviation sum does not imply zero squared spread.

## Schema Version

0.1.0

## Id

math:concept:variance

## Slug

variance

## Type

concept

## Title

Variance and standard deviation

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Bounded models, workshop stories and worked derivations are originally authored constructed examples. No production measurements or historical priority claims are presented.

## Aliases

- population variance
- standard deviation
- spread of measurements

## Branches

- statistics
- probability
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow changing lengths through their mean and squared deviations into population variance and standard deviation.

## Meaning

Variance averages squared deviations from a mean. Standard deviation is its nonnegative square root. Equal-scale squared areas expose the distinction between signed length differences, squared spread and spread in the original units.

## Prerequisites

- required:
  - math:concept:population-sample
- helpful:
  - math:concept:exponentiation
- depth:
  - math:concept:random-variable

## Definition

- setting: Population variance and standard deviation for a complete four-length workshop group.
- formal latex: \mu=\frac{8+10+12+x}{4},\quad \sigma^2=\frac{1}{4}\sum_{i=1}^{4}(x_i-\mu)^2=2+\frac{3}{16}(x-10)^2,\quad \sigma=\sqrt{\sigma^2}.
- signature:
  - x: Changing fourth length in centimetres.
  - xᵢ: One of the four complete-group measurements.
  - N: Fixed population count four.
  - ∑xᵢ: Sum of all four lengths in centimetres.
  - μ: Complete-group mean in centimetres.
  - x−μ: Signed last deviation in centimetres.
  - (x−μ)²: Squared last deviation in square centimetres.
  - ∑(xᵢ−μ)²: Sum of squared deviations in square centimetres.
  - σ²: Population variance in square centimetres.
  - σ: Population standard deviation in centimetres.
  - dᵢ: Signed deviation of measurement i from the current mean, in centimetres.
- conditions:
  - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
  - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
  - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
  - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - The deviation notation is dᵢ=xᵢ−μ for i=1,2,3,4; d₄=x−μ is the changing last strip’s signed deviation.
- domain notes: This is a descriptive calculation for four known values. No confidence interval, uncertainty estimate for an unknown population or sample-variance correction is produced. Zero signed-deviation sum does not imply zero squared spread.
- proof status: Definition-level sources; restricted-family properties are author-derived. Independent review pending.
- source refs:
  - source:openstax:statistics-spread
  - source:openstax:statistics-mean

## Grammar

- pronunciation: Variance and standard deviation
- expression latex: \mu=\frac{8+10+12+x}{4},\quad \sigma^2=\frac{1}{4}\sum_{i=1}^{4}(x_i-\mu)^2=2+\frac{3}{16}(x-10)^2,\quad \sigma=\sqrt{\sigma^2}.
- formation rule: N=4; μ=(8+10+12+x)/4. Form each signed deviation dᵢ=xᵢ−μ, square it, add the four squares and divide by four: σ²=∑(xᵢ−μ)²/4. Then σ=√(σ²). In this fixed family, σ²=2+(3/16)(x−10)².
- precedence: Compute the current mean before subtracting it; square before adding; take the square root after averaging.
- symbols:
  - Item:
    - token: x
    - role: Changing fourth length
    - type: Real length in centimetres
  - Item:
    - token: xᵢ
    - role: One of the four measurements
    - type: Length in centimetres
  - Item:
    - token: N
    - role: Complete-group measurement count
    - type: Integer four
  - Item:
    - token: ∑xᵢ
    - role: Sum of the four lengths
    - type: Length in centimetres
  - Item:
    - token: μ
    - role: Complete-group mean
    - type: Length in centimetres
  - Item:
    - token: x−μ
    - role: Last signed deviation
    - type: Length in centimetres
  - Item:
    - token: (x−μ)²
    - role: Last squared deviation
    - type: Square centimetres
  - Item:
    - token: ∑(xᵢ−μ)²
    - role: Sum of squared deviations
    - type: Square centimetres
  - Item:
    - token: σ²
    - role: Population variance
    - type: Square centimetres
  - Item:
    - token: σ
    - role: Population standard deviation
    - type: Centimetres
  - Item:
    - token: dᵢ
    - role: Signed measurement deviation from the current mean
    - type: Length in centimetres
- ast:
  - id: ast:variance:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:lastLength
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: lastLength
      - scope ref: scope:variance:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried scalar-input rule for the stated bounded family
      - ref: N=4; μ=(8+10+12+x)/4. Form each signed deviation xᵢ−μ, square it, add the four squares and divide by four: σ²=∑(xᵢ−μ)²/4. Then σ=√(σ²). In this fixed family, σ²=2+(3/16)(x−10)².
    - Item:
      - id: n:output
      - kind: apply
      - type: Primary scalar result
      - function: n:rule
      - argument: n:lastLength
  - scopes:
    - Item:
      - id: scope:variance:expression
      - kind: modelExpression
      - free variables:
        - lastLength
      - domain condition: The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
- parse errors:
  - Item:
    - input: Divide the four population squares by three
    - status: denominator error
    - reason: The complete described group has four measurements, so the population denominator is four.
  - Item:
    - input: Call the sum of signed deviations variance
    - status: operation error
    - reason: Opposite signed deviations cancel; variance averages their squares.
  - Item:
    - input: Report σ² in centimetres
    - status: unit error
    - reason: Squaring a length gives cm²; the square root restores cm.
- ast coverage: A typed outline of the fixed executable rule. Named functions refer to the stated construction, not a general symbolic solver.
- output symbol bindings:
  - x: lastLength
  - N: count
  - ∑xᵢ: lengthSum
  - μ: mean
  - x−μ: deviation4
  - (x−μ)²: square4
  - ∑(xᵢ−μ)²: sumSquaredDeviations
  - σ²: variance
  - σ: standardDeviation
  - xᵢ: measurements
  - dᵢ: deviations

## Properties

- Item:
  - claim: The minimum variance is 2 cm² at x=10 cm.
  - conditions: Keep the first three lengths fixed at 8,10,12 cm.
  - derivation: The expression 2+(3/16)(x−10)² has a nonnegative square term that vanishes at ten.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:variance:minimum-spread
- Item:
  - claim: Reflecting x about ten preserves variance in this family.
  - conditions: Use two allowed last lengths equally far from 10 cm.
  - derivation: Their squared distances from ten are equal in the same expanded formula.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:variance:reflected-length

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical development has not been researched for this draft. These workshop scenarios are original constructions.

## Connections

- Item:
  - target: math:concept:population-sample
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: A mean describes location; variance additionally describes complete-group spread.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:exponentiation
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Each deviation is squared before its nonnegative area contribution is averaged.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:conditional-probability
  - type: supports
  - conditions: No probabilistic independence or inference is asserted for the four known lengths.
  - reason: Both descriptions require stating which group or event is being considered.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:variance:four-straps
  - title: Describe four cut straps
  - role: applied_model
  - question: What are the mean, population variance and standard deviation of 8,10,12,14 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - inputs:
    - lastLength: 14
  - steps:
    - Item:
      - index: 1
      - expression: μ=(8+10+12+14)/4=11 cm
      - reason: Find the complete-group mean.
    - Item:
      - index: 2
      - expression: xᵢ−μ=(−3,−1,1,3) cm; (xᵢ−μ)²=(9,1,1,9) cm²
      - reason: Keep signed differences distinct from their nonnegative squares.
    - Item:
      - index: 3
      - expression: σ²=(9+1+1+9)/4=5 cm²; σ=√5 cm
      - reason: Average the squares, then take the nonnegative square root.
  - result:
    - exact: μ=11 cm; σ²=5 cm²; σ=√5 cm
  - interpretation: The signed deviations cancel while the squared areas give positive spread.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The separately expanded identity 2+(3/16)(14−10)² also gives five.
  - limits: The four lengths form the complete described group, not a random sample.
  - preset:
    - lastLength: 14
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
- Item:
  - id: math:example:variance:shorter-last
  - title: Shorten the final strap
  - role: applied_model
  - question: What happens when the last strap changes to 10 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - inputs:
    - lastLength: 10
  - steps:
    - Item:
      - index: 1
      - expression: μ=(8+10+12+10)/4=10 cm
      - reason: Recalculate the mean after the last cut changes.
    - Item:
      - index: 2
      - expression: (xᵢ−μ)²=(4,0,4,0) cm²
      - reason: Two measurements now equal the mean.
    - Item:
      - index: 3
      - expression: σ²=8/4=2 cm²; σ=√2 cm
      - reason: Average over all four known measurements.
  - result:
    - exact: μ=10 cm; σ²=2 cm²; σ=√2 cm
  - interpretation: Spread decreases but remains positive because 8 cm and 12 cm differ.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: At x=10 the square term in 2+(3/16)(x−10)² is zero.
  - limits: The mean changes too; do not reuse deviations from the former mean.
  - preset:
    - lastLength: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
- Item:
  - id: math:example:variance:reflected-length
  - title: Reflect the last cut about ten
  - role: applied_model
  - question: Do last lengths 6 cm and 14 cm give the same spread?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - inputs:
    - lastLength: 6
  - steps:
    - Item:
      - index: 1
      - expression: μ=(8+10+12+6)/4=9 cm
      - reason: The reflected last cut gives a different mean.
    - Item:
      - index: 2
      - expression: (xᵢ−μ)²=(1,1,9,9) cm²
      - reason: Compute each deviation from the new mean.
    - Item:
      - index: 3
      - expression: σ²=20/4=5 cm²; σ=√5 cm
      - reason: The squared areas still sum to twenty.
  - result:
    - exact: μ=9 cm; σ²=5 cm²; σ=√5 cm
  - interpretation: These two different groups have equal variance but different means.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: Both last lengths are four centimetres from ten in the equivalent quadratic.
  - limits: Equal variance does not make groups, means or individual observations identical.
  - preset:
    - lastLength: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
- Item:
  - id: math:example:variance:minimum-spread
  - title: Find the least spread in this family
  - role: applied_model
  - question: Which allowed last length minimizes the population variance?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - inputs:
    - lastLength: 10
  - steps:
    - Item:
      - index: 1
      - expression: σ²=2+(3/16)(x−10)²
      - reason: Expand the mean squared deviations for this fixed four-value family.
    - Item:
      - index: 2
      - expression: (x−10)²≥0, with equality at x=10
      - reason: The real square term is minimized at zero.
    - Item:
      - index: 3
      - expression: min σ²=2 cm² at x=10 cm
      - reason: The first three unequal fixed lengths leave a positive minimum.
  - result:
    - exact: Minimum population variance 2 cm² at x=10 cm
  - interpretation: Choosing the fourth length equal to the first-three mean minimizes this restricted family.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: Direct deviations at x=10 are −2,0,2,0 cm; their mean square is two.
  - limits: The optimum applies only while the first three lengths remain fixed.
  - preset:
    - lastLength: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
- Item:
  - id: math:example:variance:longest-cut
  - title: Inspect the longest allowed final cut
  - role: applied_model
  - question: What spread comes from a last strap of 20 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
  - inputs:
    - lastLength: 20
  - steps:
    - Item:
      - index: 1
      - expression: μ=(8+10+12+20)/4=12.5 cm
      - reason: The last length pulls the mean upward.
    - Item:
      - index: 2
      - expression: (xᵢ−μ)²=(20.25,6.25,0.25,56.25) cm²
      - reason: Use the same current mean for all four deviations.
    - Item:
      - index: 3
      - expression: σ²=83/4=20.75 cm²; σ=√83/2 cm
      - reason: Average the squares and take the square root.
  - result:
    - exact: μ=12.5 cm; σ²=83/4 cm²; σ=√83/2 cm
  - interpretation: The last squared deviation contributes most of the total, while the other deviations also change.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The equivalent expression gives 2+(3/16)100=83/4.
  - limits: Population variance describes spread; it is not an interval around a predicted cut.
  - preset:
    - lastLength: 20
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
    - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
    - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
    - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.

## Interactive

- component id: component:variance
- renderer id: variance-visual-model
- renderer version: 1
- model id: variance-visual-model
- model revision: 1
- expression id: ast:variance:expression
- interaction status: implemented
- description: Four length bars share one centimetre scale and a mean line. Four squared-deviation areas share one fixed area scale, linking the last length to its deviation and square.
- controls:
  - Item:
    - id: lastLength
    - type: number
    - default: 14
    - min: 0
    - max: 20
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - lastLength: 14
    - output: 5.0
  - Item:
    - input:
      - lastLength: 10
    - output: 2.0
  - Item:
    - input:
      - lastLength: 0
    - output: 20.75
  - Item:
    - input:
      - lastLength: 20
    - output: 20.75
  - Item:
    - input:
      - lastLength: 6
    - output: 5.0
  - Item:
    - input:
      - lastLength: 8
    - output: 2.75
  - Item:
    - input:
      - lastLength: 12
    - output: 2.75
  - Item:
    - input:
      - lastLength: 16
    - output: 8.75
  - Item:
    - input:
      - lastLength: 4
    - output: 8.75
  - Item:
    - input:
      - lastLength: 18
    - output: 14.0
  - Item:
    - input:
      - lastLength: -1
    - status: invalid_parameters
  - Item:
    - input:
      - lastLength: 21
    - status: invalid_parameters
- compute: N=4; μ=(8+10+12+x)/4. Form each signed deviation xᵢ−μ, square it, add the four squares and divide by four: σ²=∑(xᵢ−μ)²/4. Then σ=√(σ²). In this fixed family, σ²=2+(3/16)(x−10)².
- numeric tolerance: 1e-10
- invariants:
  - The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm.
  - Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1.
  - The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm².
  - Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen.
- limits:
  - A complete stipulated four-length group, with no random-sampling or process-quality inference.
  - The first three lengths stay fixed; this is not a general dataset editor.
  - Variance uses cm²; standard deviation uses cm.
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
  - prompt: Why not average the signed deviations?
  - answer: They sum to zero by the arithmetic-mean identity. Squaring prevents opposite signs from cancelling spread.
- Item:
  - prompt: Why divide by four?
  - answer: The four known values are the whole group being described. A sample estimator for an unknown population is a different statistic.

## Representations

- Item:
  - kind: geometry
  - description: Four length bars share one centimetre scale and a mean line. Four squared-deviation areas share one fixed area scale, linking the last length to its deviation and square.
- Item:
  - kind: graph
  - description: Population variance in cm² is plotted against the fourth length x in cm. Standard deviation is reported separately, with its original length unit.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated formula into the displayed primary result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Follow changing lengths through their mean and squared deviations into population variance and standard deviation.
  - limitations: A complete stipulated four-length group, with no random-sampling or process-quality inference.
  - evidence kind: constructed_example
  - example ref: math:example:variance:four-straps
- Item:
  - context: Comparing spread at different means
  - mapping: Reflect the final cut about ten centimetres to compare equal variance with different means.
  - limitations: A complete stipulated four-length group, with no random-sampling or process-quality inference.
  - evidence kind: constructed_example
  - example ref: math:example:variance:reflected-length

## Source Refs

- source:openstax:statistics-spread
- source:openstax:statistics-mean

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded teaching model does not replace the broader definition or a general theorem.

## Change Log

- 0.1.0-draft: five original worked examples, twelve independently calculated fixtures, a compact connected story and shared Geometry/Graph views.

## Referenced source registry

- Source ID: source:openstax:statistics-mean. [Introductory Statistics 2e, 2.5 Measures of the Center of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data). Locator: Arithmetic mean, sample-mean bar notation, population mean mu, sum divided by collection size. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:statistics-spread. [Introductory Statistics 2e, 2.7 Measures of the Spread of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data). Locator: Population variance with denominator N, squared deviations and standard deviation as its square root. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
