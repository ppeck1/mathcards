---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:quadratic-optimization:wall", "id": "math:example:quadratic-optimization:wall", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:quadratic-optimization", "example_id": "math:example:quadratic-optimization:wall", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e59e9b22a364320551279e9641e54c6cf61d86545d16812137a43803d4fd8f3d"}, "purpose": "Find the largest rectangular area available from a fixed perimeter.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e59e9b22a364320551279e9641e54c6cf61d86545d16812137a43803d4fd8f3d", "status": "draft", "title": "Three fenced sides are a different problem", "topics": ["mathematics", "algebra-functions", "modeling", "constrained maximum", "fixed-perimeter rectangle"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Three fenced sides are a different problem

Parent card: math:concept:quadratic-optimization; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:quadratic-optimization; revision 0.1.0-draft. Setting: Find the largest rectangular area available from a fixed perimeter. Expression: $A(w)=w(P/2-w)=P^2/16-(w-P/4)^2$. Conditions required for a defined value (a case may test their violation): All four sides are fenced with one fixed total perimeter. The shape is a flat rectangle with positive side lengths. Width lies strictly between zero and half the perimeter. Scope: The interactive controls restrict each parameter to its declared finite interval. Fence thickness, gate openings, land constraints and costs are excluded.

Case unit math:example:quadratic-optimization:wall. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"fenced_sides": 3, "perimeter": 20, "width": 5}. Result: {"exact": "Outside this four-sided fence model; comparison maximum is 50 m²"}. Limits: This interaction assumes all four sides need fence.

## Complete worked case

- id: math:example:quadratic-optimization:wall
- title: Three fenced sides are a different problem
- role: counterexample
- question: If a wall replaces one side, is a 5 m square still the best use of 20 m of fence?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - All four sides are fenced with one fixed total perimeter.
  - The shape is a flat rectangle with positive side lengths.
  - Width lies strictly between zero and half the perimeter.
- inputs:
  - width: 5
  - perimeter: 20
  - fenced sides: 3
- steps:
  - Item:
    - index: 1
    - expression: 2w+ℓ=20
    - reason: A wall changes the constraint.
  - Item:
    - index: 2
    - expression: A=w(20−2w)=50−2(w−5)²
    - reason: Complete the square with the new relation.
  - Item:
    - index: 3
    - expression: w=5 m; ℓ=10 m; A=50 m²
    - reason: The maximum under three-side fencing is not a square.
- result:
  - exact: Outside this four-sided fence model; comparison maximum is 50 m²
- interpretation: Changing the constraint changes the optimum.
- independent check:
  - method: A separate algebraic rearrangement or frequency-table check.
  - expected: 2×5+10=20 m and 5×10=50 m².
- limits: This interaction assumes all four sides need fence.
- preset: null
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - All four sides are fenced with one fixed total perimeter.
  - The shape is a flat rectangle with positive side lengths.
  - Width lies strictly between zero and half the perimeter.

## Written exploration recipe

- component id: quadratic-optimization-visual-model
- renderer id: quadratic-optimization-visual-model
- renderer version: 1.0.0
- model id: quadratic-optimization-visual-model
- model revision: 1.0.0
- expression id: ast:quadratic-optimization:expression
- interaction status: implemented
- description: The cyan width changes one pair of sides while the violet length compensates; the gold area and graph point move together.
- controls:
  - Item:
    - id: width
    - type: number
    - default: 5
    - min: 0.5
    - max: 9.5
    - slider min: 0.5
    - slider max: 9.5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: perimeter
    - type: number
    - default: 20
    - min: 20
    - max: 30
    - slider min: 20
    - slider max: 30
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - width: 5
      - perimeter: 20
    - output: 25
  - Item:
    - input:
      - width: 1
      - perimeter: 20
    - output: 9
  - Item:
    - input:
      - width: 9
      - perimeter: 20
    - output: 9
  - Item:
    - input:
      - width: 7.5
      - perimeter: 30
    - output: 56.25
  - Item:
    - input:
      - width: 0.5
      - perimeter: 20
    - output: 4.75
  - Item:
    - input:
      - width: 9.5
      - perimeter: 30
    - output: 52.25
  - Item:
    - input:
      - width: 0
      - perimeter: 20
    - status: invalid_parameters
- compute: otherSide=perimeter/2-width; area=width*otherSide; optimumWidth=perimeter/4; maxArea=(perimeter/4)^2; output=area.
- numeric tolerance: 1e-10
- invariants:
  - All four sides are fenced with one fixed total perimeter.
  - The shape is a flat rectangle with positive side lengths.
  - Width lies strictly between zero and half the perimeter.
- limits:
  - The same 20 m of fence encloses all four sides of a flat rectangle.
  - The optimum shown is among rectangles only; circles and other boundaries are not compared.
  - Fence thickness, gate openings, land constraints and costs are excluded.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

- Source ID: source:openstax:optimization. [Calculus Volume 1, 4.7 Applied Optimization Problems](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems). Locator: Optimization under a perimeter constraint; positivity of dimensions. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
