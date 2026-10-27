---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:exponential-change:growth", "id": "math:example:exponential-change:growth", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponential-change", "example_id": "math:example:exponential-change:growth", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33"}, "purpose": "Track a quantity that changes by the same factor at every step.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33", "status": "draft", "title": "Enlarge the preview", "topics": ["mathematics", "functions", "scale", "change", "modeling", "repeated scaling", "geometric change", "exponential decay and growth"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Enlarge the preview

Parent card: math:concept:exponential-change; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:exponential-change; revision 0.1.0-draft. Setting: Repeated positive scaling and its explicit real-exponent interpolation. Expression: $W(n)=W_0q^n,\qquad W_0>0,\quad q>0,\quad n\in\{0,1,2,\ldots\}.$. Conditions required for a defined value (a case may test their violation): The initial width is positive and the same positive scale factor is applied at each completed pass. Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation. The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy. Scope: The interpolation W(x)=W₀qˣ is defined for real x≥0. Actual completed passes remain integers. The controls admit q=1 as the constant boundary case; a nonconstant exponential function has q≠1. Renderer bounds: width 1–2000 px, factor 0.25–2, pass coordinate 0–8.

Case unit math:example:exponential-change:growth. Setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export. Inputs: {"completed_passes": 2, "factor_per_pass": 1.25, "initial_width_px": 800}. Result: {"exact": "1250 px"}. Limits: Larger dimensions do not recover lost detail; resampling is a separate model.

## Complete worked case

- id: math:example:exponential-change:growth
- title: Enlarge the preview
- role: structural
- question: What ideal width follows two enlargements by 1.25 from 800 px?
- setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
- assumptions:
  - Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
- inputs:
  - initial width px: 800
  - factor per pass: 1.25
  - completed passes: 2
- steps:
  - Item:
    - index: 1
    - expression: W(1)=800 × 1.25=1000 px
    - reason: Increase by 25% of current width.
  - Item:
    - index: 2
    - expression: W(2)=1000 × 1.25=1250 px
    - reason: Apply 25% to the larger width.
- result:
  - exact: 1250 px
- interpretation: A factor above one gives growth; a factor between zero and one gives decay.
- independent check:
  - method: Compute the combined multiplier.
  - expected: 1.25²=1.5625; 800 × 1.5625=1250.
- limits: Larger dimensions do not recover lost detail; resampling is a separate model.
- preset:
  - initial: 800
  - factor: 1.25
  - time: 2
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - The initial width is positive and the same positive scale factor is applied at each completed pass.
  - Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation.
  - The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy.

## Written exploration recipe

- component id: exponential-change-resize
- renderer id: exponential-change-resize
- renderer version: 1
- model id: exponential-change-resize
- model revision: 1
- expression id: ast:exponential-change:expression
- interaction status: implemented
- description: Resize a photo frame by a repeated factor; integer markers show completed passes and a smooth geometric interpolation joins them.
- controls:
  - Item:
    - id: initial
    - type: number
    - default: 1200
    - min: 1
    - max: 2000
    - slider min: 1
    - slider max: 2000
    - slider step: 10
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: factor
    - type: number
    - default: 0.8
    - min: 0.25
    - max: 2
    - slider min: 0.25
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: time
    - type: number
    - default: 3
    - min: 0
    - max: 8
    - slider min: 0
    - slider max: 8
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - initial: 1200
      - factor: 0.8
      - time: 3
    - output: 614.4
  - Item:
    - input:
      - initial: 1200
      - factor: 0.8
      - time: 0
    - output: 1200
  - Item:
    - input:
      - initial: 800
      - factor: 0.5
      - time: 2
    - output: 200
  - Item:
    - input:
      - initial: 800
      - factor: 1.25
      - time: 2
    - output: 1250
  - Item:
    - input:
      - initial: 1200
      - factor: 1
      - time: 3
    - output: 1200
  - Item:
    - input:
      - initial: 1200
      - factor: 0.25
      - time: 0.5
    - output: 600
  - Item:
    - input:
      - initial: 1
      - factor: 2
      - time: 8
    - output: 256
  - Item:
    - input:
      - initial: 1200
      - factor: 0
      - time: 3
    - status: invalid_parameters
- compute: output = initial * factor ** time. Internal time is the displayed pass coordinate n. Integer n gives ideal completed-pass widths; fractional n is geometric interpolation. Keep model output unrounded and state pixel rounding separately.
- numeric tolerance: 1e-10
- invariants:
  - At zero passes, output equals initial width.
  - Consecutive completed-pass widths have ratio factor.
  - At factor one, output stays constant.
  - Fractional pass inputs are labeled as geometric interpolation, not completed operations.
- limits:
  - The controls define a finite illustrative window, not the full mathematical domain.
  - Shape size and accessible numeric output use the same validated parameters. Display interpolation is not an observation.
  - Invalid parameters produce an explicit failure, never a stale valid result.
  - The smooth curve between passes is a display convention. Real operations have integer counts and raster dimensions need rounding.
- fallback: Read the formula, substituted values, worked steps and labeled output without animation.
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

- Source ID: source:openstax:exponential-functions. [College Algebra 2e, 6.1 Exponential Functions](https://openstax.org/books/college-algebra-2e/pages/6-1-exponential-functions). Locator: Exponential Function definition; multiplicative change; base-one constant case. Verification: Definition and domain conditions inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
