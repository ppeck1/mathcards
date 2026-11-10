---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:similar-triangles", "id": "math:concept:similar-triangles", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:similar-triangles", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1ae1defa2af1398b278497d40b963776a55d2b6ca34090ed23dc9b547c905bf9"}, "purpose": "How much more material does an enlarged triangular panel need?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1ae1defa2af1398b278497d40b963776a55d2b6ca34090ed23dc9b547c905bf9", "status": "draft", "title": "Similar triangles and square-law area", "topics": ["mathematics", "geometry", "measurement", "similar triangles and square-law area", "similar triangles"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Similar triangles and square-law area

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:similar-triangles; revision 0.1.0-draft. Setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original. Expression: $b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.$. Conditions required for a defined value (a case may test their violation): The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation. Scope: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.

## Schema Version

0.1.0

## Id

math:concept:similar-triangles

## Slug

similar-triangles

## Type

concept

## Title

Similar triangles and square-law area

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

- similar triangles and square-law area
- similar triangles

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How much more material does an enlarged triangular panel need?

## Meaning

Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.

## Prerequisites

- required:
  - math:concept:ratio-scale
- helpful:
  - math:concept:pythagorean-theorem
  - math:concept:triangle-measurement
- depth:
  []

## Definition

- setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
- formal latex: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
- signature:
  - k: Positive dimensionless scale factor for all lengths
  - b: Scaled base length in metres
  - h: Scaled perpendicular height in metres
  - c: Scaled sloping side length in metres
  - A: Scaled enclosed area in square metres
  - q: Dimensionless ratio of scaled area to the 6-square-metre reference area
- conditions:
  - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- domain notes: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
- proof status: Definition-level source and original derivation; independent review pending.
- source refs:
  - source:plane-geometry:similar-triangles

## Grammar

- pronunciation: Similar triangles and square-law area
- expression latex: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
- formation rule: Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.
- precedence: Substitute the declared lengths and positive scale before evaluating squares, products and square roots.
- symbols:
  - Item:
    - token: k
    - role: Positive dimensionless scale factor for all lengths
    - type: Locally declared quantity or constant
  - Item:
    - token: b
    - role: Scaled base length in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: h
    - role: Scaled perpendicular height in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: c
    - role: Scaled sloping side length in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: A
    - role: Scaled enclosed area in square metres
    - type: Locally declared quantity or constant
  - Item:
    - token: q
    - role: Dimensionless ratio of scaled area to the 6-square-metre reference area
    - type: Locally declared quantity or constant
- ast:
  - id: ast:similar-triangles:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:scale
      - kind: variable
      - type: Declared numeric input
      - symbol: k
      - scope ref: scope:similar-triangles
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded planar geometry rule
      - ref: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded geometric model value
      - function: n:rule
      - argument: n:scale
  - scopes:
    - Item:
      - id: scope:similar-triangles
      - kind: modelExpression
      - free variables:
        - k
      - external parameters:
        - Euclidean planar geometry
      - domain condition: The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- parse errors:
  - Item:
    - input: Use a sloping edge as the perpendicular height or omit a declared domain condition
    - status: model mismatch
    - reason: The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- ast coverage: Typed application outline of the stated construction; the formal expression declares the complete rule.
- output symbol bindings:
  - k: scale
  - b: base
  - h: height
  - c: hypotenuse
  - A: output
  - q: areaFactor

## Properties

- Item:
  - claim: Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.
  - conditions: The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - derivation: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:similar-triangles:case-1

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
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
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
  - target: math:concept:triangle-measurement
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:similar-triangles:case-1
  - title: A quarter larger in every length
  - role: applied_model
  - question: How much more material does an enlarged triangular panel need?
  - setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
  - assumptions:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - inputs:
    - scale: 1.25
  - steps:
    - Item:
      - index: 1
      - expression: k = 1.25
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
      - reason: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
    - Item:
      - index: 3
      - expression: A ≈ 9.375 m²
      - reason: The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.
  - result:
    - approximate: 9.375
  - interpretation: The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 9.375
  - limits: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - preset:
    - scale: 1.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- Item:
  - id: math:example:similar-triangles:case-2
  - title: The unchanged reference
  - role: applied_model
  - question: How much more material does an enlarged triangular panel need?
  - setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
  - assumptions:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - inputs:
    - scale: 1
  - steps:
    - Item:
      - index: 1
      - expression: k = 1
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
      - reason: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
    - Item:
      - index: 3
      - expression: A ≈ 6.0 m²
      - reason: At k=1 the panel coincides with the 3–4–5 reference and has area 6 square metres.
  - result:
    - approximate: 6.0
  - interpretation: At k=1 the panel coincides with the 3–4–5 reference and has area 6 square metres.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 6.0
  - limits: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - preset:
    - scale: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- Item:
  - id: math:example:similar-triangles:case-3
  - title: Double every side
  - role: applied_model
  - question: How much more material does an enlarged triangular panel need?
  - setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
  - assumptions:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - inputs:
    - scale: 2
  - steps:
    - Item:
      - index: 1
      - expression: k = 2
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
      - reason: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
    - Item:
      - index: 3
      - expression: A ≈ 24.0 m²
      - reason: The edges become 6,8 and 10 metres. The 24-square-metre panel has four times the original area.
  - result:
    - approximate: 24.0
  - interpretation: The edges become 6,8 and 10 metres. The 24-square-metre panel has four times the original area.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 24.0
  - limits: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - preset:
    - scale: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- Item:
  - id: math:example:similar-triangles:case-4
  - title: Half every side
  - role: applied_model
  - question: How much more material does an enlarged triangular panel need?
  - setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
  - assumptions:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - inputs:
    - scale: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: k = 0.5
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
      - reason: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
    - Item:
      - index: 3
      - expression: A ≈ 1.5 m²
      - reason: The edges become 1.5,2 and 2.5 metres. Area becomes 1.5 square metres, one quarter of the original.
  - result:
    - approximate: 1.5
  - interpretation: The edges become 1.5,2 and 2.5 metres. Area becomes 1.5 square metres, one quarter of the original.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 1.5
  - limits: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - preset:
    - scale: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
- Item:
  - id: math:example:similar-triangles:case-5
  - title: The smallest allowed panel
  - role: applied_model
  - question: How much more material does an enlarged triangular panel need?
  - setting: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.
  - assumptions:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - inputs:
    - scale: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: k = 0.25
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
      - reason: A positive dilation multiplies each coordinate difference by k. Euclidean distances therefore gain factor k and corresponding angles stay equal. The determinant of two planar edges gains k². The reference right-triangle area is 3×4/2=6, giving scaled area 6 k².
    - Item:
      - index: 3
      - expression: A ≈ 0.375 m²
      - reason: A quarter length scale gives one sixteenth of the original area:0.375 square metres.
  - result:
    - approximate: 0.375
  - interpretation: A quarter length scale gives one sixteenth of the original area:0.375 square metres.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 0.375
  - limits: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - preset:
    - scale: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.

## Interactive

- component id: component:similar-triangles
- renderer id: similar-triangles-visual-model
- renderer version: 1
- model id: similar-triangles-visual-model
- model revision: 1
- expression id: ast:similar-triangles:expression
- interaction status: implemented
- description: Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.
- controls:
  - Item:
    - id: scale
    - type: number
    - default: 1.25
    - min: 0.25
    - max: 2
    - step: 0.025
- expected cases:
  - Item:
    - input:
      - scale: 0.25
    - status: valid
    - output: 0.375
  - Item:
    - input:
      - scale: 0.275
    - status: valid
    - output: 0.4537500000000001
  - Item:
    - input:
      - scale: 0.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - scale: 0.75
    - status: valid
    - output: 3.375
  - Item:
    - input:
      - scale: 1
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - scale: 1.025
    - status: valid
    - output: 6.303749999999999
  - Item:
    - input:
      - scale: 1.25
    - status: valid
    - output: 9.375
  - Item:
    - input:
      - scale: 1.5
    - status: valid
    - output: 13.5
  - Item:
    - input:
      - scale: 1.75
    - status: valid
    - output: 18.375
  - Item:
    - input:
      - scale: 1.975
    - status: valid
    - output: 23.403750000000002
  - Item:
    - input:
      - scale: 2
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - scale: 1.25
    - status: valid
    - output: 9.375
  - Item:
    - input:
      - scale: 1
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - scale: 2
    - status: valid
    - output: 24.0
  - Item:
    - input:
      - scale: 0.5
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - scale: 0.25
    - status: valid
    - output: 0.375
  - Item:
    - input:
      - scale: 0.24
    - status: invalid_parameters
  - Item:
    - input:
      - scale: 2.01
    - status: invalid_parameters
  - Item:
    - input:
      - scale: true
    - status: invalid_parameters
  - Item:
    - input:
      - scale: 2
    - status: invalid_parameters
  - Item:
    - input:
      - scale: null
    - status: invalid_parameters
- compute: b=3k,\quad h=4k,\quad c=5k,\quad A=\frac{bh}{2}=6k^2,\quad q=k^2.
- numeric tolerance: 5e-11
- invariants:
  - The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation.
  - Story, calculation, Geometry and Graph evaluate the same state.
  - Fixed equal physical scales preserve measured shape and growth.
- limits:
  - Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
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
  - prompt: How much more material does an enlarged triangular panel need?
  - answer: Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.
- Item:
  - prompt: What does the shape measure?
  - answer: A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.

## Representations

- Item:
  - kind: geometry
  - description: Measured lengths and enclosed shapes on fixed equal metre axes.
- Item:
  - kind: graph
  - description: The primary output against its first input on fixed bounds, with other inputs held fixed.
- Item:
  - kind: substitution
  - description: Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.

## Applications

- Item:
  - context: A quarter larger in every length
  - mapping: The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.
  - limitations: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - evidence kind: constructed_example
  - example ref: math:example:similar-triangles:case-1
- Item:
  - context: The unchanged reference
  - mapping: At k=1 the panel coincides with the 3–4–5 reference and has area 6 square metres.
  - limitations: Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.
  - evidence kind: constructed_example
  - example ref: math:example:similar-triangles:case-2

## Source Refs

- source:plane-geometry:similar-triangles

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded plane-geometry module, connected story and quantitative views.

## Referenced source registry

- Source ID: source:plane-geometry:similar-triangles. [Wolfram MathWorld · Similar Triangles](https://mathworld.wolfram.com/SimilarTriangles.html). Locator: Definition: equal corresponding angle measures and proportional corresponding side lengths; similarity need not mean congruence. The panel and square-area derivation are original constructions.. Verification: Definition-level page inspected2026-11-09. Independent mathematics and teaching review and exact-edition book-page confirmation remain pending.. Rights: Original scenarios, worked examples and code-native geometry. No source exercise, data or illustration reproduced.
