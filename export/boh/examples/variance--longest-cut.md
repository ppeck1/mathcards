---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:variance:longest-cut", "id": "math:example:variance:longest-cut", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:variance", "example_id": "math:example:variance:longest-cut", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d"}, "purpose": "Follow changing lengths through their mean and squared deviations into population variance and standard deviation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d2322087113c078b4aeefa6d48b5ac3a354c0c28620368ba662d10a33d68953d", "status": "draft", "title": "Inspect the longest allowed final cut", "topics": ["mathematics", "statistics", "probability", "measurement", "population variance", "standard deviation", "spread of measurements"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Inspect the longest allowed final cut

Parent card: math:concept:variance; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:variance; revision 0.1.0-draft. Setting: Population variance and standard deviation for a complete four-length workshop group. Expression: $\mu=\frac{8+10+12+x}{4},\quad \sigma^2=\frac{1}{4}\sum_{i=1}^{4}(x_i-\mu)^2=2+\frac{3}{16}(x-10)^2,\quad \sigma=\sqrt{\sigma^2}.$. Conditions required for a defined value (a case may test their violation): The complete group contains four known strip lengths: 8,10,12,x cm, with 0≤x≤20 cm. Use population variance: divide the four squared deviations by N=4. This is not the sample estimator with denominator N−1. The mean μ changes with x. Each signed deviation is a length in cm; its square and the variance have units cm². Standard deviation σ is the nonnegative square root of variance and has units cm. The unequal fixed first three lengths prevent zero variance in this specimen. The deviation notation is dᵢ=xᵢ−μ for i=1,2,3,4; d₄=x−μ is the changing last strip’s signed deviation. Scope: This is a descriptive calculation for four known values. No confidence interval, uncertainty estimate for an unknown population or sample-variance correction is produced. Zero signed-deviation sum does not imply zero squared spread.

Case unit math:example:variance:longest-cut. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"lastLength": 20}. Result: {"exact": "μ=12.5 cm; σ²=83/4 cm²; σ=√83/2 cm"}. Limits: Population variance describes spread; it is not an interval around a predicted cut.

## Complete worked case

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
