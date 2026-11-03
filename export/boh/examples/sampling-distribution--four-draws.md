---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:sampling-distribution:four-draws", "id": "math:example:sampling-distribution:four-draws", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sampling-distribution", "example_id": "math:example:sampling-distribution:four-draws", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5bab4e1c273d073c9f18f7a162535b3d30afc57439b03e815540fbfba4baedf8"}, "purpose": "See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5bab4e1c273d073c9f18f7a162535b3d30afc57439b03e815540fbfba4baedf8", "status": "draft", "title": "Halve the standard error", "topics": ["mathematics", "statistics", "probability", "sampling distribution", "standard error", "repeated sampling", "with replacement"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Halve the standard error

Parent card: math:concept:sampling-distribution; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:sampling-distribution; revision 0.1.0-draft. Setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. Expression: $X_i\in\{2,4,8,10\},\quad P(X_i=x)=\tfrac14.\quad\bar X=\frac1n\sum_{i=1}^{n}X_i,\quad E[\bar X]=6,\quad\operatorname{Var}(\bar X)=\frac{10}{n},\quad \operatorname{SE}(\bar X)=\sqrt{10/n}.$. Conditions required for a defined value (a case may test their violation): Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

Case unit math:example:sampling-distribution:four-draws. Setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. Inputs: {"sampleSize": 4}. Result: {"exact": "There are 256 ordered samples; standard error is √2.5 kg."}. Limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

## Complete worked case

- id: math:example:sampling-distribution:four-draws
- title: Halve the standard error
- role: applied_model
- question: Halve the standard error under the stated inputs?
- setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
- assumptions:
  - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- inputs:
  - sampleSize: 4
- steps:
  - Item:
    - index: 1
    - expression: sampleSize=4
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: There are 256 ordered samples; standard error is √2.5 kg.
    - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
- result:
  - exact: There are 256 ordered samples; standard error is √2.5 kg.
- interpretation: There are 256 ordered samples; standard error is √2.5 kg.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 1.5811388300841898}
- limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- preset:
  - sampleSize: 4
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

## Written exploration recipe

- component id: component:sampling-distribution
- renderer id: sampling-distribution-visual-model
- renderer version: 1
- model id: sampling-distribution-visual-model
- model revision: 1
- expression id: ast:sampling-distribution:expression
- interaction status: implemented
- description: See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.
- controls:
  - Item:
    - id: sampleSize
    - type: number
    - default: 2
    - min: 1
    - max: 4
    - step: 1
- expected cases:
  - Item:
    - input:
      - sampleSize: 1
    - status: valid
    - output: 3.1622776601683795
  - Item:
    - input:
      - sampleSize: 2
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - sampleSize: 3
    - status: valid
    - output: 1.8257418583505538
  - Item:
    - input:
      - sampleSize: 4
    - status: valid
    - output: 1.5811388300841898
  - Item:
    - input:
      - sampleSize: 0
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 2
    - status: invalid_parameters
- compute: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. SE(X̄) = σ/√n
- numeric tolerance: 1e-10
- invariants:
  - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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

- Source ID: source:inference:sampling. [Penn State STAT 500 · Sampling Distributions](https://online.stat.psu.edu/stat500/Lesson04). Locator: Lesson 4: sampling distributions and the sample mean. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
