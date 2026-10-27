---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:exponential-change", "id": "math:concept:exponential-change", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponential-change", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33"}, "purpose": "Track a quantity that changes by the same factor at every step.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "7330ceb72bcb2b0d3ba38a120de01e72a056f5a8fff581b877a4fb4b2fca1d33", "status": "draft", "title": "Exponential change", "topics": ["mathematics", "functions", "scale", "change", "modeling", "repeated scaling", "geometric change", "exponential decay and growth"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Exponential change

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:exponential-change; revision 0.1.0-draft. Setting: Repeated positive scaling and its explicit real-exponent interpolation. Expression: $W(n)=W_0q^n,\qquad W_0>0,\quad q>0,\quad n\in\{0,1,2,\ldots\}.$. Conditions required for a defined value (a case may test their violation): The initial width is positive and the same positive scale factor is applied at each completed pass. Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation. The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy. Scope: The interpolation W(x)=W₀qˣ is defined for real x≥0. Actual completed passes remain integers. The controls admit q=1 as the constant boundary case; a nonconstant exponential function has q≠1. Renderer bounds: width 1–2000 px, factor 0.25–2, pass coordinate 0–8.

## Schema Version

0.1.0

## Id

math:concept:exponential-change

## Slug

exponential-change

## Type

concept

## Title

Exponential change

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- repeated scaling
- geometric change
- exponential decay and growth

## Branches

- functions
- scale
- change
- modeling

## Expressive Job

- model
- scale

## Purpose

Track a quantity that changes by the same factor at every step.

## Meaning

Apply a scale factor to the current value again and again. The percentage stays the same while absolute change depends on the current size.

## Prerequisites

- required:
  - math:concept:exponentiation
- helpful:
  - math:concept:unit-dimension
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:real-logarithm
  - type: inverse_problem
  - conditions: Positive width ratios and q≠1.
  - reason: The interpolated pass value solves n=log_q(W/W₀); an actual operation count still needs integer interpretation.
  - target status: available
  - evidence status: local_derivation
  - source refs:
- Item:
  - target: math:concept:linear-model
  - type: compared_with
  - conditions: Fixed parameters and equal input increments.
  - reason: A multiplicative model preserves ratios; an additive model preserves differences.
  - target status: available
  - evidence status: local_derivation
  - source refs:

## Examples

- Item:
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
- Item:
  - id: math:example:exponential-change:no-passes
  - title: Keep the original
  - role: boundary
  - question: What is the width before any resize pass?
  - setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - assumptions:
    - Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - inputs:
    - initial width px: 1200
    - factor per pass: 0.8
    - completed passes: 0
  - steps:
    - Item:
      - index: 1
      - expression: 0.8⁰=1
      - reason: Zero passes apply the identity multiplier.
    - Item:
      - index: 2
      - expression: W(0)=1200 × 1=1200 px
      - reason: Keep the initial width.
  - result:
    - exact: 1200 px
  - interpretation: The initial value is the output at zero passes.
  - independent check:
    - method: Use the empty sequence of operations.
    - expected: No resize changes the initial 1200 px width.
  - limits: Zero passes is valid; it differs from a zero scale factor.
  - preset:
    - initial: 1200
    - factor: 0.8
    - time: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The initial width is positive and the same positive scale factor is applied at each completed pass.
    - Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation.
    - The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy.
- Item:
  - id: math:example:exponential-change:halves
  - title: Half, then half again
  - role: minimal
  - question: What happens to an 800 px width after two halvings?
  - setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - assumptions:
    - Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - inputs:
    - initial width px: 800
    - factor per pass: 0.5
    - completed passes: 2
  - steps:
    - Item:
      - index: 1
      - expression: 800 × 0.5=400 px
      - reason: Keep half on the first pass.
    - Item:
      - index: 2
      - expression: 400 × 0.5=200 px
      - reason: Keep half of the remaining width.
  - result:
    - exact: 200 px
  - interpretation: Two halvings retain a quarter, not zero.
  - independent check:
    - method: Use the exponent form.
    - expected: 800 × (1/2)²=800/4=200.
  - limits: Equal percentages remove unequal pixel counts: 400 px, then 200 px.
  - preset:
    - initial: 800
    - factor: 0.5
    - time: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The initial width is positive and the same positive scale factor is applied at each completed pass.
    - Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation.
    - The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy.
- Item:
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
- Item:
  - id: math:example:exponential-change:identity
  - title: A factor of one
  - role: boundary
  - question: What changes if each pass keeps 100% of the width?
  - setting: Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - assumptions:
    - Constructed ideal image-width model; completed passes are integers and rounding is postponed until export.
  - inputs:
    - initial width px: 1200
    - factor per pass: 1
    - completed passes: 3
  - steps:
    - Item:
      - index: 1
      - expression: 1³=1
      - reason: An identity factor stays one.
    - Item:
      - index: 2
      - expression: W(3)=1200 × 1=1200 px
      - reason: The width stays fixed.
  - result:
    - exact: 1200 px
  - interpretation: The q=1 boundary is constant, not nonconstant exponential growth or decay.
  - independent check:
    - method: Compare consecutive outputs.
    - expected: W(0)=W(1)=W(2)=W(3)=1200 px.
  - limits: This comparison case is included; the usual nonconstant exponential definition excludes base one.
  - preset:
    - initial: 1200
    - factor: 1
    - time: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The initial width is positive and the same positive scale factor is applied at each completed pass.
    - Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation.
    - The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy.

## Properties

- Item:
  - claim: Each completed pass multiplies ideal width by the same factor.
  - status: algebraic identity
  - conditions: Initial width and positive factor fixed; n a nonnegative integer.
  - derivation: W(n+1)/W(n)=(W₀qⁿ⁺¹)/(W₀qⁿ)=q.
- Item:
  - claim: Equal percentage change does not mean equal absolute change.
  - status: algebraic identity
  - conditions: Compare successive outputs with fixed q.
  - derivation: W(n+1)−W(n)=(q−1)W(n).
  - example ref: math:example:exponential-change:halves

## Prompts

- Item:
  - prompt: Why does a 20% reduction remove fewer pixels later?
  - answer: The percentage applies to the current width, which is smaller after each pass.
- Item:
  - prompt: Does 1.5 passes execute one and a half resizes?
  - answer: No. It shows the interpolation W₀qˣ between integer-pass results. Completed operations remain whole numbers.

## Representations

- Item:
  - kind: symbolic
  - description: W(n)=W₀qⁿ with a positive factor and integer-pass interpretation.
- Item:
  - kind: geometric
  - description: Nested photo frames mark whole passes while the live width follows an explicit interpolation.
- Item:
  - kind: story
  - description: Make three 80% previews from 1200 px, then apply a stated final rounding rule.

## Applications

- Item:
  - context: Predict repeated image-width reductions.
  - mapping: 1200 px × 0.8³=614.4 px ideal; final nearest-integer rounding gives 614 px.
  - limitations: Completed passes are integers. Ideal width, raster rounding, quality and file size are separate.
  - evidence kind: constructed_example
  - example ref: math:example:exponential-change:resize
- Item:
  - context: Compare percentage growth and decay.
  - mapping: 800 px × 1.25²=1250 px after two enlargements.
  - limitations: Greater pixel dimensions do not imply additional image detail.
  - evidence kind: constructed_example
  - example ref: math:example:exponential-change:growth

## Source Refs

- source:openstax:exponential-functions

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, typed expression tree, bounded interactive model and numerical fixtures.

## Definition

- setting: Repeated positive scaling and its explicit real-exponent interpolation.
- formal latex: W(n)=W_0q^n,\qquad W_0>0,\quad q>0,\quad n\in\{0,1,2,\ldots\}.
- signature:
  - W 0: positive initial image width in pixels
  - q: positive dimensionless scale factor per pass
  - n: completed resize passes
  - W: ideal width before pixel rounding
- conditions:
  - The initial width is positive and the same positive scale factor is applied at each completed pass.
  - Completed resize passes are nonnegative integers. Fractional inputs show declared geometric interpolation, not a fractionally executed operation.
  - The model tracks ideal width; a real raster image has integer dimensions and needs an explicit rounding policy.
- domain notes: The interpolation W(x)=W₀qˣ is defined for real x≥0. Actual completed passes remain integers. The controls admit q=1 as the constant boundary case; a nonconstant exponential function has q≠1. Renderer bounds: width 1–2000 px, factor 0.25–2, pass coordinate 0–8.
- proof status: Repeated multiplication yields the integer-step rule by induction; the real-exponent curve is an explicitly chosen interpolation.
- source refs:
  - source:openstax:exponential-functions

## Grammar

- pronunciation: W of n equals W zero times q to the power n
- expression latex: W(n)=W_0q^n
- formation rule: Raise the dimensionless factor to the pass count; multiply by initial width.
- precedence: Evaluate qⁿ before multiplying by W₀. The expression (W₀q)ⁿ is different.
- symbols:
  - Item:
    - token: W(n)
    - role: ideal width after n passes
    - type: Length[px]
  - Item:
    - token: W₀
    - role: initial width
    - type: PositiveLength[px]
  - Item:
    - token: q
    - role: scale factor per pass
    - type: PositiveDimensionless
  - Item:
    - token: n
    - role: completed passes; fractions only for interpolation
    - type: DimensionlessCount
- ast:
  - id: ast:exponential-change:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:initial
      - kind: variable
      - symbol: W₀
      - type: PositiveLength[px]
      - scope ref: scope:exponential-change
    - Item:
      - id: n:factor
      - kind: variable
      - symbol: q
      - type: PositiveDimensionless
      - scope ref: scope:exponential-change
    - Item:
      - id: n:time
      - kind: variable
      - symbol: n
      - type: DimensionlessCount
      - scope ref: scope:exponential-change
    - Item:
      - id: n:power
      - kind: power
      - arguments:
        - n:factor
        - n:time
      - type: PositiveDimensionless
    - Item:
      - id: n:output
      - kind: multiply
      - arguments:
        - n:initial
        - n:power
      - type: Length[px]
  - scopes:
    - Item:
      - id: scope:exponential-change
      - kind: modelExpression
      - free variables:
        - W₀
        - q
        - n
      - domain condition: W₀>0, q>0, n≥0; completed passes have integer n
- parse errors:
  - Item:
    - input: 1200 × (−0.8)^0.5
    - status: undefined_in_setting
    - reason: A negative factor does not give a real-valued scaling curve for all fractional inputs.
  - Item:
    - input: (1200 × 0.8)^3
    - status: model_mismatch
    - reason: This cubes the starting width too; repeated resizing requires 1200 × 0.8³.
- ast coverage: The tree models the right-hand quantity. The output label, function declaration, physical assumptions and rounding conventions are explicit metadata.
- output symbol bindings:
  - W(n): output

## Interactive

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

## Referenced source registry

- Source ID: source:openstax:exponential-functions. [College Algebra 2e, 6.1 Exponential Functions](https://openstax.org/books/college-algebra-2e/pages/6-1-exponential-functions). Locator: Exponential Function definition; multiplicative change; base-one constant case. Verification: Definition and domain conditions inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
