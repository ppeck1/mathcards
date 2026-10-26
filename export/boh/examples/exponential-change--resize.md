---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:exponential-change:resize", "id": "math:example:exponential-change:resize", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponential-change", "example_id": "math:example:exponential-change:resize", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33"}, "purpose": "Track a quantity that changes by the same factor at every step.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33", "status": "draft", "title": "Three smaller previews", "topics": ["mathematics", "functions", "scale", "change", "modeling", "repeated scaling", "geometric change", "exponential decay and growth"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Three smaller previews

Parent card: math:concept:exponential-change; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:exponential-change; revision 0.1.0-draft. Setting: Repeated positive scaling and its explicit real-exponent interpolation. Expression: $W(n)=W_0q^n,\qquad W_0>0,\quad q>0,\quad n\in\{0,1,2,\ldots\}.$. Conditions required for a defined value (a case may test their violation): The initial width is positive and the same positive scale factor is applied at each completed pass. Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation. The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy. Scope: The interpolation W(x)=W₀qˣ is defined for real x≥0. Actual completed passes remain integers. The controls admit q=1 as the constant boundary case; a nonconstant exponential function has q≠1. Renderer bounds: width 1–2000 px, factor 0.25–2, pass coordinate 0–8.

Case unit math:example:exponential-change:resize. Setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export. Inputs: {"completed_passes": 3, "factor_per_pass": 0.8, "initial_width_px": 1200}. Result: {"exact": "614.4 px ideal; 614 px after final nearest-integer rounding"}. Limits: This predicts width, not detail or file size. Rounding after each real resize can give a different final width.

## Complete worked case

- id: math:example:exponential-change:resize
- title: Three smaller previews
- role: applied_model
- question: A 1200 px photo is resized to 80% of its current width three times. What ideal width remains?
- setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
- assumptions:
  - Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
- inputs:
  - initial width px: 1200
  - factor per pass: 0.8
  - completed passes: 3
- steps:
  - Item:
    - index: 1
    - expression: W(1)=1200 × 0.8=960 px
    - reason: Keep 80% of the current width.
  - Item:
    - index: 2
    - expression: W(2)=960 × 0.8=768 px
    - reason: Use the new width.
  - Item:
    - index: 3
    - expression: W(3)=768 × 0.8=614.4 px
    - reason: Apply the factor a third time.
  - Item:
    - index: 4
    - expression: Round 614.4 to 614 px for a nearest-integer export.
    - reason: Apply the stated final rounding policy after the ideal calculation.
- result:
  - exact: 614.4 px ideal; 614 px after final nearest-integer rounding
- interpretation: The retained fraction is 0.8³=0.512, or 51.2% of the starting width.
- independent check:
  - method: Multiply the factor first, then the width.
  - expected: 0.8³=0.512; 1200 × 0.512=614.4.
- limits: This predicts width, not detail or file size. Rounding after each real resize can give a different final width.
- preset:
  - initial: 1200
  - factor: 0.8
  - time: 3
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
