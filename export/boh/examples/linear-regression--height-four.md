---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:linear-regression:height-four", "id": "math:example:linear-regression:height-four", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-regression", "example_id": "math:example:linear-regression:height-four", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d3b6c7f41ccb5e5f168c467c428a4ccd3df0844aed595d610e8ab96e5c06dc7d"}, "purpose": "Connect a moved measurement to the fitted line, its slope and all its residuals.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d3b6c7f41ccb5e5f168c467c428a4ccd3df0844aed595d610e8ab96e5c06dc7d", "status": "draft", "title": "Keep the final height level", "topics": ["mathematics", "statistics", "algebra", "modeling", "linear regression", "least squares", "residual", "fitted value", "slope estimate"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Keep the final height level

Parent card: math:concept:linear-regression; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:linear-regression; revision 0.1.0-draft. Setting: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares. Expression: $\hat y_i=a+bx_i,\quad b=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2},\quad a=\bar y-b\bar x,\quad SSE=\sum_i(y_i-\hat y_i)^2.$. Conditions required for a defined value (a case may test their violation): Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares. The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.

Case unit math:example:linear-regression:height-four. Setting: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares. Inputs: {"lastValue": 4}. Result: {"exact": "Sₓᵧ=5 gives b=0.5; the fit still uses all observations."}. Limits: The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.

## Complete worked case

- id: math:example:linear-regression:height-four
- title: Keep the final height level
- role: applied_model
- question: Keep the final height level under the stated inputs?
- setting: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.
- assumptions:
  - Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.
  - The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.
- inputs:
  - lastValue: 4
- steps:
  - Item:
    - index: 1
    - expression: lastValue=4
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: Sₓᵧ=5 gives b=0.5; the fit still uses all observations.
    - reason: Ordinary least squares chooses line parameters that minimize the sum of squared vertical residuals. A residual is an observed response minus its fitted response. This family refits five constructed seedling heights whenever the final height changes.
- result:
  - exact: Sₓᵧ=5 gives b=0.5; the fit still uses all observations.
- interpretation: Sₓᵧ=5 gives b=0.5; the fit still uses all observations.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 0.5}
- limits: The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.
- preset:
  - lastValue: 4
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.
  - The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.

## Written exploration recipe

- component id: component:linear-regression
- renderer id: linear-regression-visual-model
- renderer version: 1
- model id: linear-regression-visual-model
- model revision: 1
- expression id: ast:linear-regression:expression
- interaction status: implemented
- description: Connect a moved measurement to the fitted line, its slope and all its residuals.
- controls:
  - Item:
    - id: lastValue
    - type: number
    - default: 6
    - min: 0
    - max: 10
    - step: 0.1
- expected cases:
  - Item:
    - input:
      - lastValue: 6
    - status: valid
    - output: 0.9
  - Item:
    - input:
      - lastValue: 0
    - status: valid
    - output: -0.3
  - Item:
    - input:
      - lastValue: 10
    - status: valid
    - output: 1.7
  - Item:
    - input:
      - lastValue: 4
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - lastValue: 1.5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - lastValue: -1
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 6
    - status: invalid_parameters
- compute: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares. b = Sₓᵧ/Sₓₓ; a = ȳ − bx̄
- numeric tolerance: 1e-10
- invariants:
  - Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.
  - The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.
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

- Source ID: source:inference:regression. [NIST · Linear Least Squares Regression](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm). Locator: Linear parameters and vertical squared-deviation minimization. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
