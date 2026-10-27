---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:variance:reflected-length", "id": "math:example:variance:reflected-length", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:variance", "example_id": "math:example:variance:reflected-length", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d"}, "purpose": "Follow changing lengths through their mean and squared deviations into population variance and standard deviation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d", "status": "draft", "title": "Reflect the last cut about ten", "topics": ["mathematics", "statistics", "probability", "measurement", "population variance", "standard deviation", "spread of measurements"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Reflect the last cut about ten

Parent card: math:concept:variance; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:variance; revision 0.1.0-draft. Setting: Population variance and standard deviation for a complete four-length workshop group. Expression: $\mu=\frac{8+10+12+x}{4},\quad \sigma^2=\frac{1}{4}\sum_{i=1}^{4}(x_i-\mu)^2=2+\frac{3}{16}(x-10)^2,\quad \sigma=\sqrt{\sigma^2}.$. Conditions required for a defined value (a case may test their violation): The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm. Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1. The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm². Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen. The deviation notation is dᵢ=xᵢ−μ for i=1,2,3,4; d₄=x−μ is the changing last strip’s signed deviation. Scope: This is a descriptive calculation for four known values. No confidence interval, uncertainty estimate for an unknown population or sample-variance correction is produced. Zero signed-deviation sum does not imply zero squared spread.

Case unit math:example:variance:reflected-length. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"lastLength": 6}. Result: {"exact": "μ=9 cm; σ²=5 cm²; σ=√5 cm"}. Limits: Equal variance does not make groups, means or individual observations identical.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:statistics-mean. [Introductory Statistics 2e, 2.5 Measures of the Center of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data). Locator: Arithmetic mean, sample-mean bar notation, population mean mu, sum divided by collection size. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:statistics-spread. [Introductory Statistics 2e, 2.7 Measures of the Spread of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data). Locator: Population variance with denominator N, squared deviations and standard deviation as its square root. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
