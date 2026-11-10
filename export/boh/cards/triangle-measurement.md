---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:triangle-measurement", "id": "math:concept:triangle-measurement", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:triangle-measurement", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "edf049b2399d89a17aa70c1fa006df3e24f8a3d4f3c32c861dd1fcae38d3d633"}, "purpose": "Can a shade sail change shape without changing its area?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "edf049b2399d89a17aa70c1fa006df3e24f8a3d4f3c32c861dd1fcae38d3d633", "status": "draft", "title": "Triangle area and shear", "topics": ["mathematics", "geometry", "measurement", "triangle area and shear", "triangle measurement"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Triangle area and shear

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:triangle-measurement; revision 0.1.0-draft. Setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint. Expression: $x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.$. Conditions required for a defined value (a case may test their violation): Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base. Scope: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.

## Schema Version

0.1.0

## Id

math:concept:triangle-measurement

## Slug

triangle-measurement

## Type

concept

## Title

Triangle area and shear

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-09T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- triangle area and shear
- triangle measurement

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can a shade sail change shape without changing its area?

## Meaning

A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.

## Prerequisites

- required:
  - math:concept:pythagorean-theorem
- helpful:
  - math:concept:ratio-scale
  - math:concept:regular-polygon
- depth:
  []

## Definition

- setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
- formal latex: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
- signature:
  - b: Base length in metres
  - h: Perpendicular height above the base line in metres
  - s: Signed shift of the upper corner from the base midpoint, in metres
  - x: Upper corner horizontal coordinate measured from the left anchor, in metres
  - A: Enclosed triangular area in square metres
  - P: Total triangle boundary length in metres
- conditions:
  - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- domain notes: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
- proof status: Definition-level source and original derivation; independent review pending.
- source refs:
  - source:plane-geometry:triangle-measurement

## Grammar

- pronunciation: Triangle area and shear
- expression latex: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
- formation rule: A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.
- precedence: Substitute the declared lengths and positive scale before evaluating squares, products and square roots.
- symbols:
  - Item:
    - token: b
    - role: Base length in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: h
    - role: Perpendicular height above the base line in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: s
    - role: Signed shift of the upper corner from the base midpoint, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: x
    - role: Upper corner horizontal coordinate measured from the left anchor, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: A
    - role: Enclosed triangular area in square metres
    - type: Locally declared quantity or constant
  - Item:
    - token: P
    - role: Total triangle boundary length in metres
    - type: Locally declared quantity or constant
- ast:
  - id: ast:triangle-measurement:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:height
      - kind: variable
      - type: Declared numeric input
      - symbol: h
      - scope ref: scope:triangle-measurement
    - Item:
      - id: n:base
      - kind: variable
      - type: Declared numeric input
      - symbol: b
      - scope ref: scope:triangle-measurement
    - Item:
      - id: n:skew
      - kind: variable
      - type: Declared numeric input
      - symbol: s
      - scope ref: scope:triangle-measurement
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded planar geometry rule
      - ref: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded geometric model value
      - function: n:rule
      - argument: n:height
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Bounded geometric model value
      - function: n:partial-0
      - argument: n:base
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded geometric model value
      - function: n:partial-1
      - argument: n:skew
  - scopes:
    - Item:
      - id: scope:triangle-measurement
      - kind: modelExpression
      - free variables:
        - h
        - b
        - s
      - external parameters:
        - Euclidean planar geometry
      - domain condition: Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- parse errors:
  - Item:
    - input: Use a sloping edge as the perpendicular height or omit a declared domain condition
    - status: model mismatch
    - reason: Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- ast coverage: Typed application outline of the stated construction; the formal expression declares the complete rule.
- output symbol bindings:
  - b: base
  - h: height
  - s: skew
  - x: apex
  - A: output
  - P: perimeter

## Properties

- Item:
  - claim: A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.
  - conditions: Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - derivation: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:triangle-measurement:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:regular-polygon
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:triangle-measurement:case-1
  - title: Four-metre base, two-metre height
  - role: applied_model
  - question: Can a shade sail change shape without changing its area?
  - setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
  - assumptions:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - inputs:
    - base: 4
    - height: 2
    - skew: 0
  - steps:
    - Item:
      - index: 1
      - expression: h = 2; b = 4; s = 0
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
      - reason: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
    - Item:
      - index: 3
      - expression: A ≈ 4.0 m²
      - reason: Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.
  - result:
    - approximate: 4.0
  - interpretation: Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 4.0
  - limits: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - preset:
    - base: 4
    - height: 2
    - skew: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- Item:
  - id: math:example:triangle-measurement:case-2
  - title: Slide the upper anchor
  - role: applied_model
  - question: Can a shade sail change shape without changing its area?
  - setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
  - assumptions:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - inputs:
    - base: 4
    - height: 2
    - skew: 2
  - steps:
    - Item:
      - index: 1
      - expression: h = 2; b = 4; s = 2
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
      - reason: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
    - Item:
      - index: 3
      - expression: A ≈ 4.0 m²
      - reason: The top corner moves above the right anchor. Area remains 4 square metres, although the boundary length changes.
  - result:
    - approximate: 4.0
  - interpretation: The top corner moves above the right anchor. Area remains 4 square metres, although the boundary length changes.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 4.0
  - limits: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - preset:
    - base: 4
    - height: 2
    - skew: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- Item:
  - id: math:example:triangle-measurement:case-3
  - title: The height foot lies outside the base
  - role: applied_model
  - question: Can a shade sail change shape without changing its area?
  - setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
  - assumptions:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - inputs:
    - base: 1
    - height: 2
    - skew: -2
  - steps:
    - Item:
      - index: 1
      - expression: h = 2; b = 1; s = -2
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
      - reason: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
    - Item:
      - index: 3
      - expression: A ≈ 1.0 m²
      - reason: The perpendicular height reaches an extension of the base line. Area is still 1 square metre; the exterior height is the correct height.
  - result:
    - approximate: 1.0
  - interpretation: The perpendicular height reaches an extension of the base line. Area is still 1 square metre; the exterior height is the correct height.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 1.0
  - limits: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - preset:
    - base: 1
    - height: 2
    - skew: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- Item:
  - id: math:example:triangle-measurement:case-4
  - title: Double only the height
  - role: applied_model
  - question: Can a shade sail change shape without changing its area?
  - setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
  - assumptions:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - inputs:
    - base: 4
    - height: 4
    - skew: 0
  - steps:
    - Item:
      - index: 1
      - expression: h = 4; b = 4; s = 0
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
      - reason: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
    - Item:
      - index: 3
      - expression: A ≈ 8.0 m²
      - reason: With the base fixed, doubling height from 2 to 4 metres doubles area from 4 to 8 square metres.
  - result:
    - approximate: 8.0
  - interpretation: With the base fixed, doubling height from 2 to 4 metres doubles area from 4 to 8 square metres.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 8.0
  - limits: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - preset:
    - base: 4
    - height: 4
    - skew: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
- Item:
  - id: math:example:triangle-measurement:case-5
  - title: A low, wide sail
  - role: applied_model
  - question: Can a shade sail change shape without changing its area?
  - setting: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.
  - assumptions:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - inputs:
    - base: 6
    - height: 0.5
    - skew: 1
  - steps:
    - Item:
      - index: 1
      - expression: h = 0.5; b = 6; s = 1
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
      - reason: Place the vertices at(0,0),(b,0),(b/2+s,h). Their determinant gives area|bh|/2=bh/2 because b and h are positive. The signed shift disappears from that determinant. Distances from the upper point to the two anchors give the two sloping sides; adding the base gives the perimeter.
    - Item:
      - index: 3
      - expression: A ≈ 1.5 m²
      - reason: The six-metre base and half-metre perpendicular height enclose 1.5 square metres. A long sloping edge would give the wrong area.
  - result:
    - approximate: 1.5
  - interpretation: The six-metre base and half-metre perpendicular height enclose 1.5 square metres. A long sloping edge would give the wrong area.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 1.5
  - limits: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - preset:
    - base: 6
    - height: 0.5
    - skew: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.

## Interactive

- component id: component:triangle-measurement
- renderer id: triangle-measurement-visual-model
- renderer version: 1
- model id: triangle-measurement-visual-model
- model revision: 1
- expression id: ast:triangle-measurement:expression
- interaction status: implemented
- description: A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.
- controls:
  - Item:
    - id: height
    - type: number
    - default: 2
    - min: 0.5
    - max: 4
    - step: 0.05
  - Item:
    - id: base
    - type: number
    - default: 4
    - min: 1
    - max: 6
    - step: 0.05
  - Item:
    - id: skew
    - type: number
    - default: 0
    - min: -2
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - base: 1
      - height: 0.5
      - skew: -2
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - base: 1
      - height: 4
      - skew: 2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - base: 6
      - height: 0.5
      - skew: -2
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - base: 6
      - height: 4
      - skew: 2
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - base: 4
      - height: 2
      - skew: 0
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - base: 4
      - height: 2
      - skew: 2
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - base: 4
      - height: 2
      - skew: -2
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - base: 2
      - height: 1
      - skew: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - base: 5
      - height: 3
      - skew: 1.5
    - status: valid
    - output: 7.5
  - Item:
    - input:
      - base: 3
      - height: 4
      - skew: -1
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - base: 6
      - height: 1
      - skew: 0
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - base: 1
      - height: 2
      - skew: -2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - base: 4
      - height: 2
      - skew: 0
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - base: 4
      - height: 2
      - skew: 2
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - base: 1
      - height: 2
      - skew: -2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - base: 4
      - height: 4
      - skew: 0
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - base: 6
      - height: 0.5
      - skew: 1
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - height: 0.49
      - base: 4
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 4.01
      - base: 4
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: true
      - base: 4
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: null
      - base: 4
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 0.99
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 6.01
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: true
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 2
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: null
      - skew: 0
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: -2.01
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: 2.01
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: true
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: 2
    - status: invalid_parameters
  - Item:
    - input:
      - height: 2
      - base: 4
      - skew: null
    - status: invalid_parameters
- compute: x=b/2+s,\quad A=\frac{bh}{2},\quad P=b+\sqrt{x^2+h^2}+\sqrt{(b-x)^2+h^2}.
- numeric tolerance: 5e-11
- invariants:
  - Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base.
  - Story, calculation, Geometry and Graph evaluate the same state.
  - Fixed equal physical scales preserve measured shape and growth.
- limits:
  - This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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

## Prompts

- Item:
  - prompt: Can a shade sail change shape without changing its area?
  - answer: A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.
- Item:
  - prompt: What does the shape measure?
  - answer: A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.

## Representations

- Item:
  - kind: geometry
  - description: Measured lengths and enclosed shapes on fixed equal metre axes.
- Item:
  - kind: graph
  - description: The primary output against its first input on fixed bounds, with other inputs held fixed.
- Item:
  - kind: substitution
  - description: A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.

## Applications

- Item:
  - context: Four-metre base, two-metre height
  - mapping: Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.
  - limitations: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - evidence kind: constructed_example
  - example ref: math:example:triangle-measurement:case-1
- Item:
  - context: Slide the upper anchor
  - mapping: The top corner moves above the right anchor. Area remains 4 square metres, although the boundary length changes.
  - limitations: This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.
  - evidence kind: constructed_example
  - example ref: math:example:triangle-measurement:case-2

## Source Refs

- source:plane-geometry:triangle-measurement

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded plane-geometry module, connected story and quantitative views.

## Referenced source registry

- Source ID: source:plane-geometry:triangle-measurement. [Wolfram MathWorld · Triangle Area](https://mathworld.wolfram.com/TriangleArea.html). Locator: Triangle area equations(9), (16)–(17): half the determinant of edge vectors and the vertex-coordinate area. The shade sail, shear controls and worked examples are original applications.. Verification: Definition-level page inspected2026-11-09. Independent mathematics and teaching review and exact-edition book-page confirmation remain pending.. Rights: Original scenarios, worked examples and code-native geometry. No source exercise, data or illustration reproduced.
