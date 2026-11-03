---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:correlation:constant-response", "id": "math:example:correlation:constant-response", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:correlation", "example_id": "math:example:correlation:constant-response", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "073e684d6d162ef570c159200d95f915ac6fbc1ffce4e0699cbe5927c0a00ebf"}, "purpose": "Separate trend direction from scatter and see why the same trend can have weaker correlation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "073e684d6d162ef570c159200d95f915ac6fbc1ffce4e0699cbe5927c0a00ebf", "status": "draft", "title": "Meet an undefined case", "topics": ["mathematics", "statistics", "algebra", "correlation", "Pearson r", "linear association", "correlation coefficient"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Meet an undefined case

Parent card: math:concept:correlation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:correlation; revision 0.1.0-draft. Setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. Expression: $S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y),\quad r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.\quad S_{xx}=10,\ S_{xy}=10t,\ S_{yy}=10t^2+14s^2.$. Conditions required for a defined value (a case may test their violation): Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

Case unit math:example:correlation:constant-response. Setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. Inputs: {"scatter": 0, "trend": 0}. Result: {"exact": "All responses equal five. Sᵧᵧ=0, so the denominator is zero."}. Limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

## Complete worked case

- id: math:example:correlation:constant-response
- title: Meet an undefined case
- role: applied_model
- question: Meet an undefined case under the stated inputs?
- setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
- assumptions:
  - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- inputs:
  - trend: 0
  - scatter: 0
- steps:
  - Item:
    - index: 1
    - expression: trend=0; scatter=0
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
    - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
- result:
  - exact: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
- interpretation: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "undefined_correlation"}
- limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- preset:
  - trend: 0
  - scatter: 0
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

## Written exploration recipe

- component id: component:correlation
- renderer id: correlation-visual-model
- renderer version: 1
- model id: correlation-visual-model
- model revision: 1
- expression id: ast:correlation:expression
- interaction status: implemented
- description: Separate trend direction from scatter and see why the same trend can have weaker correlation.
- controls:
  - Item:
    - id: trend
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: scatter
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: valid
    - output: 0.6454972243679028
  - Item:
    - input:
      - trend: -1
      - scatter: 1
    - status: valid
    - output: -0.6454972243679028
  - Item:
    - input:
      - trend: 1
      - scatter: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trend: 0
      - scatter: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0
      - scatter: 0
    - status: undefined_correlation
  - Item:
    - input:
      - trend: -2
      - scatter: 1
    - status: valid
    - output: -0.8606629658238705
  - Item:
    - input:
      - trend: 2
      - scatter: 1
    - status: valid
    - output: 0.8606629658238705
  - Item:
    - input:
      - trend: 1
      - scatter: 2
    - status: valid
    - output: 0.3892494720807615
  - Item:
    - input:
      - trend: -3
      - scatter: 1
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: invalid_parameters
- compute: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. r = Sₓᵧ/√(SₓₓSᵧᵧ)
- numeric tolerance: 1e-10
- invariants:
  - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
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

- Source ID: source:inference:correlation. [NIST Dataplot · Correlation](https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/correlat.htm). Locator: Centered sums Sxx, Syy, Sxy and Pearson r. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
