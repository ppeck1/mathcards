---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:ratio-scale:dinner", "id": "math:example:ratio-scale:dinner", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:ratio-scale", "example_id": "math:example:ratio-scale:dinner", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a"}, "purpose": "Resize a quantity while preserving the amount per unit.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a", "status": "draft", "title": "Dinner for six", "topics": ["mathematics", "number", "scale", "modeling", "proportional scaling", "direct proportion"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Dinner for six

Parent card: math:concept:ratio-scale; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:ratio-scale; revision 0.1.0-draft. Setting: Direct proportionality between nonnegative amounts and a positive reference portion count. Expression: $Q(s)=Q_0\frac{s}{s_0},\qquad s_0>0,\quad s\geq0,\quad Q_0\geq0.$. Conditions required for a defined value (a case may test their violation): The reference portion count must be strictly positive. Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit. A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process. Scope: The mathematics allows any nonnegative real target size. A fractional portion is a portion-equivalent, not a fractional person. The renderer uses 1–12 portion-equivalents and reference amounts of 0–1000 g.

Case unit math:example:ratio-scale:dinner. Setting: Constructed recipe with equal portion sizes and constant flour mass per portion. Inputs: {"reference_mass_g": 300, "reference_portions": 4, "target_portions": 6}. Result: {"exact": "450 g"}. Limits: The recipe is assumed to scale proportionally; cooking time and equipment do not automatically scale the same way.

## Complete worked case

- id: math:example:ratio-scale:dinner
- title: Dinner for six
- role: applied_model
- question: A four-portion recipe uses 300 g of flour. How much is needed for six equal portions?
- setting: Constructed recipe with equal portion sizes and constant flour mass per portion.
- assumptions:
  - Constructed recipe with equal portion sizes and constant flour mass per portion.
- inputs:
  - reference mass g: 300
  - reference portions: 4
  - target portions: 6
- steps:
  - Item:
    - index: 1
    - expression: k=6/4=1.5
    - reason: Find the dimensionless scale factor.
  - Item:
    - index: 2
    - expression: Q=300 g × 1.5=450 g
    - reason: Scale the ingredient mass.
- result:
  - exact: 450 g
- interpretation: Six portions are one and a half batches; the mass per portion stays 75 g.
- independent check:
  - method: Check grams per portion independently.
  - expected: 450/6=75 g per portion=300/4.
- limits: The recipe is assumed to scale proportionally; cooking time and equipment do not automatically scale the same way.
- preset:
  - servings: 6
  - amount: 300
  - baseServings: 4
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
