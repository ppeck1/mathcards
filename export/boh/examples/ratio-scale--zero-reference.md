---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:ratio-scale:zero-reference", "id": "math:example:ratio-scale:zero-reference", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:ratio-scale", "example_id": "math:example:ratio-scale:zero-reference", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a"}, "purpose": "Resize a quantity while preserving the amount per unit.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a", "status": "draft", "title": "A missing reference size", "topics": ["mathematics", "number", "scale", "modeling", "proportional scaling", "direct proportion"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# A missing reference size

Parent card: math:concept:ratio-scale; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:ratio-scale; revision 0.1.0-draft. Setting: Direct proportionality between nonnegative amounts and a positive reference portion count. Expression: $Q(s)=Q_0\frac{s}{s_0},\qquad s_0>0,\quad s\geq0,\quad Q_0\geq0.$. Conditions required for a defined value (a case may test their violation): The reference portion count must be strictly positive. Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit. A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process. Scope: The mathematics allows any nonnegative real target size. A fractional portion is a portion-equivalent, not a fractional person. The renderer uses 1–12 portion-equivalents and reference amounts of 0–1000 g.

Case unit math:example:ratio-scale:zero-reference. Setting: Constructed recipe with equal portion sizes and constant flour mass per portion. Inputs: {"reference_mass_g": 300, "reference_portions": 0, "target_portions": 6}. Result: {"exact": "Undefined reference ratio"}. Limits: The controls reject a zero reference instead of replacing it with one.

## Complete worked case

- id: math:example:ratio-scale:zero-reference
- title: A missing reference size
- role: boundary
- question: Can 300 g for zero portions define an amount per portion?
- setting: Constructed recipe with equal portion sizes and constant flour mass per portion.
- assumptions:
  - Constructed recipe with equal portion sizes and constant flour mass per portion.
- inputs:
  - reference mass g: 300
  - reference portions: 0
  - target portions: 6
- steps:
  - Item:
    - index: 1
    - expression: k=6/0 is undefined
    - reason: Division by zero is not a scale factor.
  - Item:
    - index: 2
    - expression: No target mass follows from this reference.
    - reason: Repair the reference information first.
- result:
  - exact: Undefined reference ratio
- interpretation: A scale factor needs a nonzero, meaningful reference size.
- independent check:
  - method: Attempt the cross-product equation.
  - expected: Q × 0=300 × 6 would require 0=1800, which is impossible.
- limits: The controls reject a zero reference instead of replacing it with one.
- preset: null
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - The reference portion count must be strictly positive.
  - Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit.
  - A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process.

## Written exploration recipe

- component id: ratio-scale-proportion
- renderer id: ratio-scale-proportion
- renderer version: 1
- model id: ratio-scale-proportion
- model revision: 1
- expression id: ast:ratio-scale:expression
- interaction status: implemented
- description: Resize a recipe and see a fixed amount per portion accumulate in a labeled mass frame.
- controls:
  - Item:
    - id: servings
    - type: number
    - default: 6
    - min: 1
    - max: 12
    - slider min: 1
    - slider max: 12
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: amount
    - type: number
    - default: 300
    - min: 0
    - max: 1000
    - slider min: 0
    - slider max: 1000
    - slider step: 10
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: baseServings
    - type: number
    - default: 4
    - min: 1
    - max: 12
    - slider min: 1
    - slider max: 12
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - servings: 6
      - amount: 300
      - baseServings: 4
    - output: 450
  - Item:
    - input:
      - servings: 2
      - amount: 300
      - baseServings: 4
    - output: 150
  - Item:
    - input:
      - servings: 1.5
      - amount: 300
      - baseServings: 4
    - output: 112.5
  - Item:
    - input:
      - servings: 8
      - amount: 0
      - baseServings: 4
    - output: 0
  - Item:
    - input:
      - servings: 4
      - amount: 300
      - baseServings: 4
    - output: 300
  - Item:
    - input:
      - servings: 12
      - amount: 1000
      - baseServings: 1
    - output: 12000
  - Item:
    - input:
      - servings: 6
      - amount: 300
      - baseServings: 0
    - status: invalid_parameters
- compute: output = amount * (servings / baseServings). Fractions are permitted; slider resolution does not impose integer counts.
- numeric tolerance: 1e-10
- invariants:
  - For positive target portions, output/servings equals amount/baseServings.
  - When servings equals baseServings, output equals the reference amount.
  - Doubling target portions with the reference fixed doubles output.
- limits:
  - The controls define a finite illustrative window, not the full mathematical domain.
  - Shape size and accessible numeric output use the same validated parameters. Display interpolation is not an observation.
  - Invalid parameters produce an explicit failure, never a stale valid result.
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

- Source ID: source:openstax:proportions. [Prealgebra 2e, 6.5 Solve Proportions and their Applications](https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications). Locator: Use the Definition of Proportion; denominator conditions and consistent units. Verification: Definition and domain conditions inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
