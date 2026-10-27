---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:ratio-scale", "id": "math:concept:ratio-scale", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:ratio-scale", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a"}, "purpose": "Resize a quantity while preserving the amount per unit.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2a2775d4ca990ce872160e6a390f481729c970c8cd8e4013c84e82bc2a22470a", "status": "draft", "title": "Ratio & scale", "topics": ["mathematics", "number", "scale", "modeling", "proportional scaling", "direct proportion"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Ratio & scale

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:ratio-scale; revision 0.1.0-draft. Setting: Direct proportionality between nonnegative amounts and a positive reference portion count. Expression: $Q(s)=Q_0\frac{s}{s_0},\qquad s_0>0,\quad s\geq0,\quad Q_0\geq0.$. Conditions required for a defined value (a case may test their violation): The reference portion count must be strictly positive. Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit. A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process. Scope: The mathematics allows any nonnegative real target size. A fractional portion is a portion-equivalent, not a fractional person. The renderer uses 1–12 portion-equivalents and reference amounts of 0–1000 g.

## Schema Version

0.1.0

## Id

math:concept:ratio-scale

## Slug

ratio-scale

## Type

concept

## Title

Ratio & scale

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

- proportional scaling
- direct proportion

## Branches

- number
- scale
- modeling

## Expressive Job

- model
- scale

## Purpose

Resize a quantity while preserving the amount per unit.

## Meaning

Divide the new size by the original size to find a scale factor. Multiply the original amount by that factor. Equal portions preserve equal ingredient amounts.

## Prerequisites

- required:
  - math:concept:ratio
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
  - target: math:concept:linear-model
  - type: special_case
  - conditions: Set the initial amount to zero and the rate to amount per portion; reinterpret the input unit consistently.
  - reason: Direct proportion has no fixed starting offset.
  - target status: available
  - evidence status: local_derivation
  - source refs:

## Examples

- Item:
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
- Item:
  - id: math:example:ratio-scale:small-batch
  - title: Half a batch
  - role: minimal
  - question: What mass of flour serves two equal portions from the same recipe?
  - setting: Constructed recipe with equal portion sizes and constant flour mass per portion.
  - assumptions:
    - Constructed recipe with equal portion sizes and constant flour mass per portion.
  - inputs:
    - reference mass g: 300
    - reference portions: 4
    - target portions: 2
  - steps:
    - Item:
      - index: 1
      - expression: k=2/4=1/2
      - reason: Halve the portion count.
    - Item:
      - index: 2
      - expression: Q=300 g × 1/2=150 g
      - reason: Halve the mass too.
  - result:
    - exact: 150 g
  - interpretation: A smaller target scales the mass down by the same factor.
  - independent check:
    - method: Double the smaller batch.
    - expected: 2 × 150 g=300 g.
  - limits: Halving a whole egg needs a practical choice; this example uses divisible mass.
  - preset:
    - servings: 2
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
- Item:
  - id: math:example:ratio-scale:fractional-portion
  - title: A portion and a half
  - role: structural
  - question: How much flour corresponds to 1.5 portion-equivalents?
  - setting: Constructed recipe with equal portion sizes and constant flour mass per portion.
  - assumptions:
    - Constructed recipe with equal portion sizes and constant flour mass per portion.
  - inputs:
    - reference mass g: 300
    - reference portions: 4
    - target portions: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: q=300 g/4=75 g per portion
      - reason: Compute one portion first.
    - Item:
      - index: 2
      - expression: Q=75 g per portion × 1.5 portions=112.5 g
      - reason: Multiply by the target portion-equivalents.
  - result:
    - exact: 112.5 g
  - interpretation: Portion-equivalents are a size that can change continuously, even though guests are whole people.
  - independent check:
    - method: Use the original scale-factor formula.
    - expected: 300 × (1.5/4)=112.5.
  - limits: A fractional portion describes quantity, not a fractional person.
  - preset:
    - servings: 1.5
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
- Item:
  - id: math:example:ratio-scale:zero-ingredient
  - title: No flour in the reference batch
  - role: boundary
  - question: If the reference batch contains 0 g of a selected ingredient, does doubling introduce any?
  - setting: Constructed recipe with equal portion sizes and constant flour mass per portion.
  - assumptions:
    - Constructed recipe with equal portion sizes and constant flour mass per portion.
  - inputs:
    - reference mass g: 0
    - reference portions: 4
    - target portions: 8
  - steps:
    - Item:
      - index: 1
      - expression: k=8/4=2
      - reason: Double the batch size.
    - Item:
      - index: 2
      - expression: Q=0 g × 2=0 g
      - reason: Zero remains zero under multiplication.
  - result:
    - exact: 0 g
  - interpretation: Scaling cannot introduce an ingredient absent from the reference model.
  - independent check:
    - method: Check the per-portion amount.
    - expected: 0/4=0; 0 × 8=0.
  - limits: The model concerns a selected ingredient, not total food mass.
  - preset:
    - servings: 8
    - amount: 0
    - baseServings: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The reference portion count must be strictly positive.
    - Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit.
    - A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process.
- Item:
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

## Properties

- Item:
  - claim: Doubling the target portions doubles the target amount.
  - status: algebraic derivation
  - conditions: Hold the reference amount and positive reference portions fixed.
  - derivation: Q(2s)=Q₀(2s/s₀)=2Q(s).
- Item:
  - claim: Mass per target portion equals mass per reference portion.
  - status: algebraic identity
  - conditions: Both portion counts are positive.
  - derivation: Q(s)/s=(Q₀s/s₀)/s=Q₀/s₀.
  - example ref: math:example:ratio-scale:dinner

## Prompts

- Item:
  - prompt: What stays the same as the dinner grows?
  - answer: Ingredient mass per equal portion stays fixed; total mass changes with target portions.
- Item:
  - prompt: Should cooking time use the same factor?
  - answer: That does not follow from this ingredient model. Time, temperature and equipment need their own assumptions.

## Representations

- Item:
  - kind: symbolic
  - description: Q=Q₀(s/s₀), with units on ingredient amounts.
- Item:
  - kind: geometric
  - description: A mass frame and portion groups share a consistent scale.
- Item:
  - kind: story
  - description: Prepare six equal dinner portions from a four-portion reference recipe.

## Applications

- Item:
  - context: Resize a recipe for six equal portions.
  - mapping: 300 g for 4 portions becomes 300 × (6/4)=450 g.
  - limitations: Constant mass per portion is assumed; the formula does not determine cooking time or recipe quality.
  - evidence kind: constructed_example
  - example ref: math:example:ratio-scale:dinner
- Item:
  - context: Prepare a smaller portion-equivalent.
  - mapping: 75 g per portion × 1.5 portions=112.5 g.
  - limitations: Fractions describe portion size; measurement resolution is separate.
  - evidence kind: constructed_example
  - example ref: math:example:ratio-scale:fractional-portion

## Source Refs

- source:openstax:proportions

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, typed expression tree, bounded interactive model and numerical fixtures.

## Definition

- setting: Direct proportionality between nonnegative amounts and a positive reference portion count.
- formal latex: Q(s)=Q_0\frac{s}{s_0},\qquad s_0>0,\quad s\geq0,\quad Q_0\geq0.
- signature:
  - s: target portion-equivalents
  - s 0: positive reference portion-equivalents
  - Q 0: reference mass in grams
  - Q: target mass in grams
- conditions:
  - The reference portion count must be strictly positive.
  - Target and reference portions use the same portion unit; ingredient amounts use a consistent mass unit.
  - A constant amount per portion is a modeling assumption, not a rule for every ingredient or cooking process.
- domain notes: The mathematics allows any nonnegative real target size. A fractional portion is a portion-equivalent, not a fractional person. The renderer uses 1–12 portion-equivalents and reference amounts of 0–1000 g.
- proof status: Solve Q/s=Q₀/s₀ when s>0; the direct model extends to Q(0)=0. Examples are local derivations.
- source refs:
  - source:openstax:proportions

## Grammar

- pronunciation: Q equals Q zero times s divided by s zero
- expression latex: Q=Q_0\left(\frac{s}{s_0}\right)
- formation rule: Divide target portions by positive reference portions; multiply that dimensionless ratio by the reference amount.
- precedence: Form the ratio before multiplication. The denominator belongs to the ratio.
- symbols:
  - Item:
    - token: Q
    - role: new ingredient mass
    - type: Mass[g]
  - Item:
    - token: Q₀
    - role: reference ingredient mass
    - type: Mass[g]
  - Item:
    - token: s
    - role: target portion-equivalents
    - type: PortionEquivalent
  - Item:
    - token: s₀
    - role: reference portion-equivalents
    - type: PositivePortionEquivalent
- ast:
  - id: ast:ratio-scale:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:amount
      - kind: variable
      - symbol: Q₀
      - type: Mass[g]
      - scope ref: scope:ratio-scale
    - Item:
      - id: n:servings
      - kind: variable
      - symbol: s
      - type: PortionEquivalent
      - scope ref: scope:ratio-scale
    - Item:
      - id: n:baseServings
      - kind: variable
      - symbol: s₀
      - type: PositivePortionEquivalent
      - scope ref: scope:ratio-scale
    - Item:
      - id: n:factor
      - kind: divide
      - arguments:
        - n:servings
        - n:baseServings
      - type: Dimensionless
    - Item:
      - id: n:output
      - kind: multiply
      - arguments:
        - n:amount
        - n:factor
      - type: Mass[g]
  - scopes:
    - Item:
      - id: scope:ratio-scale
      - kind: modelExpression
      - free variables:
        - Q₀
        - s
        - s₀
      - domain condition: s₀>0, s≥0, Q₀≥0
- parse errors:
  - Item:
    - input: 300 × (6 / 0)
    - status: undefined_in_setting
    - reason: A zero reference portion count makes the scale factor undefined.
  - Item:
    - input: 300 g × (6 people / 4 minutes)
    - status: type_error
    - reason: The two reference sizes need the same quantity type to form the declared dimensionless ratio.
- ast coverage: The tree models the right-hand quantity. The output label, function declaration, physical assumptions and rounding conventions are explicit metadata.
- output symbol bindings:
  - Q: output

## Interactive

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

## Referenced source registry

- Source ID: source:openstax:proportions. [Prealgebra 2e, 6.5 Solve Proportions and their Applications](https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications). Locator: Use the Definition of Proportion; denominator conditions and consistent units. Verification: Definition and domain conditions inspected 2026-10-23 via the official publisher page. This is not independent review of the package.. Rights: Reference only. Narrative, examples and explanations are originally authored; no exercise bank or source prose copied.
