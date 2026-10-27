---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:fractal-geometry", "id": "math:concept:fractal-geometry", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:fractal-geometry", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "664a7e9a33b7b2dff115e0b3f6c4143e0f4912b3c535de2a2934fc8ea5768cd2"}, "purpose": "Build finite stages of a self-similar edge and measure their perimeter.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "664a7e9a33b7b2dff115e0b3f6c4143e0f4912b3c535de2a2934fc8ea5768cd2", "status": "draft", "title": "Fractal geometry", "topics": ["mathematics", "geometry", "infinity", "Koch snowflake", "self-similarity"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Fractal geometry

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:fractal-geometry; revision 0.1.0-draft. Setting: Build finite stages of a self-similar edge and measure their perimeter. Expression: $P_n=3s(4/3)^n\quad(n\in\mathbb N_0)$. Conditions required for a defined value (a case may test their violation): Start with an equilateral triangle and apply outward middle-third Koch replacements. Integer depth describes a finite polygon, not an infinite fractal. Fractional depth raises the next-level bump linearly and measures its actual segment lengths. Scope: Depth 0–5, initial side 0.5–3 m. With n=floor(d) and f=d−n, P(d)=3s(4/3)^n[2/3+2√(1/36+f²/12)]. The separate Sierpinski inset is another finite construction, not the measured Koch boundary.

## Schema Version

0.1.0

## Id

math:concept:fractal-geometry

## Slug

fractal-geometry

## Type

concept

## Title

Fractal geometry

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

- Koch snowflake
- self-similarity

## Branches

- geometry
- infinity

## Expressive Job

- model
- visualize
- compare

## Purpose

Build finite stages of a self-similar edge and measure their perimeter.

## Meaning

One replacement rule creates finer repeated structure. The drawing stops at a finite depth; the ideal limiting fractal is a separate mathematical object.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:fractal-geometry:wire
  - title: A decorative wire snowflake
  - role: applied_model
  - question: A designer starts with a 1m-sided equilateral triangle and applies the Koch rule three times. What ideal edge length is needed?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
  - inputs:
    - depth: 3
    - length: 1
  - steps:
    - Item:
      - index: 1
      - expression: P₀=3(1m)=3 m
      - reason: The starting triangle has three sides.
    - Item:
      - index: 2
      - expression: P₃=3m×(4/3)³=64/9 m
      - reason: Each complete replacement turns one segment into four segments each one third as long.
  - result:
    - exact: 64/9 m ≈7.11111 m
  - interpretation: Finer detail adds perimeter while staying near the same overall footprint.
  - independent check:
    - method: Count segments times segment length.
    - expected: 3×4³=192 segments, each 1/27 m;192/27=64/9 m.
  - limits: An ideal zero-thickness edge excludes joins, material thickness and manufacturing tolerance.
  - preset:
    - depth: 3
    - length: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- Item:
  - id: math:example:fractal-geometry:first
  - title: Make the first notch
  - role: structural
  - question: How long is the boundary after the first complete replacement?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
  - inputs:
    - depth: 1
    - length: 1
  - steps:
    - Item:
      - index: 1
      - expression: 3 sides×4 pieces per side=12 pieces
      - reason: Every side receives one outward triangular bump.
    - Item:
      - index: 2
      - expression: P₁=12×(1/3m)=4 m
      - reason: Count every small segment once.
  - result:
    - exact: 4 m
  - interpretation: One level adds one meter to this particular ideal outline.
  - independent check:
    - method: Compare perimeter ratio.
    - expected: 4m/3 m=4/3.
  - limits: This is a finite polygon after one replacement.
  - preset:
    - depth: 1
    - length: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- Item:
  - id: math:example:fractal-geometry:start
  - title: The triangle before detail
  - role: boundary
  - question: What perimeter does depth zero show?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
  - inputs:
    - depth: 0
    - length: 1
  - steps:
    - Item:
      - index: 1
      - expression: (4/3)⁰=1
      - reason: Zero replacement levels leave the starting shape.
    - Item:
      - index: 2
      - expression: P₀=3(1m)=3 m
      - reason: Add the three unchanged sides.
  - result:
    - exact: 3 m
  - interpretation: The fractal construction begins with an ordinary finite triangle.
  - independent check:
    - method: Inspect the initial sides.
    - expected: Three sides of 1 m sum to 3 m.
  - limits: No infinite process has been completed.
  - preset:
    - depth: 0
    - length: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- Item:
  - id: math:example:fractal-geometry:larger
  - title: Double the same decoration
  - role: applied_model
  - question: What if the starting side is 2 m at depth 3?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
  - inputs:
    - depth: 3
    - length: 2
  - steps:
    - Item:
      - index: 1
      - expression: P₃=3(2m)(4/3)³=128/9 m
      - reason: Keep the replacement count fixed while scaling every segment.
    - Item:
      - index: 2
      - expression: 128/9 ÷64/9=2
      - reason: The perimeter scales by the same factor as length.
  - result:
    - exact: 128/9 m ≈14.2222 m
  - interpretation: Scaling the whole shape changes size without adding a construction level.
  - independent check:
    - method: Use the 192-segment count.
    - expected: 192×(2/27m)=128/9 m.
  - limits: Only the geometric outline is modeled.
  - preset:
    - depth: 3
    - length: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- Item:
  - id: math:example:fractal-geometry:morph
  - title: Watch one bump grow
  - role: representation
  - question: At depth 0.5, what length is the currently drawn boundary?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
  - inputs:
    - depth: 0.5
    - length: 1
  - steps:
    - Item:
      - index: 1
      - expression: h=(0.5)√3/6 of each old segment
      - reason: The app raises each next-level peak halfway toward its full height.
    - Item:
      - index: 2
      - expression: m(0.5)=2/3+2√(1/36+0.5²/12)=(4+√7)/6
      - reason: Keep the two outer thirds and measure the two sloping pieces with Pythagoras.
    - Item:
      - index: 3
      - expression: P(0.5)=3m×m(0.5)=(4+√7)/2 m
      - reason: Multiply the old perimeter by the actual segment-length factor.
  - result:
    - exact: (4+√7)/2 m ≈3.32288 m
  - interpretation: The number measures the line actually drawn during the morph.
  - independent check:
    - method: Check the two ends of the morph.
    - expected: m(0)=1 and m(1)=4/3, so the animation connects exact adjacent levels continuously.
  - limits: A fractional depth is an animation convention. It is not another integer Koch iteration or a fractal dimension.
  - preset:
    - depth: 0.5
    - length: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Start with an equilateral triangle and apply outward middle-third Koch replacements.
    - Integer depth describes a finite polygon, not an infinite fractal.
    - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.

## Properties

- Item:
  - claim: Every complete level multiplies perimeter by 4/3.
  - status: algebraic derivation
  - conditions: Apply the Koch replacement once to every segment.
  - derivation: Each old length L becomes 4 pieces of length L/3.
- Item:
  - claim: At fixed depth, doubling s doubles perimeter.
  - status: algebraic derivation
  - conditions: Use the same construction and morph fraction.
  - derivation: The factor multiplying s is unchanged, so P(d,2s)=2P(d,s).

## Prompts

- Item:
  - prompt: Is the picture already an infinite fractal?
  - answer: No. It is a finite polygonal approximation. Infinite repetition is a limiting mathematical definition.
- Item:
  - prompt: Is a fractional depth the fractal dimension?
  - answer: No. It controls a visible transition between two finite construction levels.

## Representations

- Item:
  - kind: symbolic
  - description: Pₙ=3s(4/3)ⁿ at complete levels; the morph uses the actual two sloping lengths.
- Item:
  - kind: geometric
  - description: A Koch snowflake grows by outward triangular bumps; a separately labeled finite Sierpinski pattern offers a second repeated-rule example.

## Applications

- Item:
  - context: Estimate an ideal decorative wire outline.
  - mapping: At side 1 m and depth 3, perimeter is 64/9 m.
  - limitations: Thickness, joins and wastage are excluded.
  - evidence kind: constructed_example
  - example ref: math:example:fractal-geometry:wire
- Item:
  - context: Scale a geometric stencil.
  - mapping: At depth 3, doubling the starting side doubles every edge and the total perimeter.
  - limitations: A finite manufactured stencil is not infinitely detailed.
  - evidence kind: constructed_example
  - example ref: math:example:fractal-geometry:larger

## Source Refs

- source:openstax:koch-snowflake
- source:cornell:fractal-constructions

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Build finite stages of a self-similar edge and measure their perimeter.
- formal latex: P_n=3s(4/3)^n\quad(n\in\mathbb N_0)
- signature:
  - s: starting equilateral-triangle side length in meters
  - n: number of complete Koch replacements
  - d: display depth n+f, where 0≤f<1
  - P: currently drawn perimeter in meters
- conditions:
  - Start with an equilateral triangle and apply outward middle-third Koch replacements.
  - Integer depth describes a finite polygon, not an infinite fractal.
  - Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- domain notes: Depth 0–5, initial side 0.5–3 m. With n=floor(d) and f=d−n, P(d)=3s(4/3)^n[2/3+2√(1/36+f²/12)]. The separate Sierpinski inset is another finite construction, not the measured Koch boundary.
- proof status: Count segments and multiply by their lengths. The fractional morph formula follows from the Pythagorean theorem; it is an explicit display convention.
- source refs:
  - source:openstax:koch-snowflake

## Grammar

- pronunciation: At a complete level, perimeter is three times the starting side times four thirds to the level power.
- expression latex: P_n=3s(4/3)^n\quad(n\in\mathbb N_0)
- formation rule: Let n=floor(depth), f=depth-n. Output=3*length*(4/3)^n*(2/3+2*sqrt(1/36+f^2/12)). At integer levels this is 3*length*(4/3)^n. The fractional factor measures a peak raised to f times its final height.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: s
    - role: starting equilateral-triangle side length in meters
    - type: Real quantity in declared setting
  - Item:
    - token: n
    - role: number of complete Koch replacements
    - type: Real quantity in declared setting
  - Item:
    - token: d
    - role: display depth n+f, where 0≤f<1
    - type: Real quantity in declared setting
  - Item:
    - token: P
    - role: currently drawn perimeter in meters
    - type: Real quantity in declared setting
- ast:
  - id: ast:fractal-geometry:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:depth
      - kind: variable
      - symbol: d
      - type: Real
      - scope ref: scope:fractal-geometry
    - Item:
      - id: n:length
      - kind: variable
      - symbol: s
      - type: Length[m]
      - scope ref: scope:fractal-geometry
    - Item:
      - id: n:growth
      - kind: functionRef
      - ref: K(d)=(4/3)^floor(d) [2/3+2 sqrt(1/36+frac(d)^2/12)]
      - type: Real → Real
    - Item:
      - id: n:triple
      - kind: functionRef
      - ref: s →3s
      - type: Length[m] → Length[m]
    - Item:
      - id: n:base
      - kind: apply
      - function: n:triple
      - argument: n:length
      - type: Length[m]
    - Item:
      - id: n:factor
      - kind: apply
      - function: n:growth
      - argument: n:depth
      - type: Real
    - Item:
      - id: n:output
      - kind: multiply
      - arguments:
        - n:base
        - n:factor
      - type: Length[m]
  - scopes:
    - Item:
      - id: scope:fractal-geometry
      - kind: modelExpression
      - free variables:
        - s
        - n
        - d
        - P
      - domain condition: Start with an equilateral triangle and apply outward middle-third Koch replacements.; Integer depth describes a finite polygon, not an infinite fractal.; Fractional depth raises the next-level bump linearly and measures its actual segment lengths.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: fractal-geometry-visual-model
- renderer id: fractal-geometry-visual-model
- renderer version: 1.0.0
- model id: fractal-geometry-visual-model
- model revision: 1.0.0
- expression id: ast:fractal-geometry:expression
- interaction status: implemented
- description: A Koch snowflake grows by outward triangular bumps; a separately labeled finite Sierpinski pattern offers a second repeated-rule example.
- controls:
  - Item:
    - id: depth
    - type: number
    - default: 3
    - min: 0
    - max: 5
    - slider min: 0
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: length
    - type: number
    - default: 1
    - min: 0.5
    - max: 3
    - slider min: 0.5
    - slider max: 3
    - slider step: 0.05
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - depth: 3
      - length: 1
    - output: 7.111111111111109
  - Item:
    - input:
      - depth: 0
      - length: 1
    - output: 3.0
  - Item:
    - input:
      - depth: 1
      - length: 1
    - output: 4.0
  - Item:
    - input:
      - depth: 3
      - length: 2
    - output: 14.222222222222218
  - Item:
    - input:
      - depth: 0.5
      - length: 1
    - output: 3.3228756555322954
  - Item:
    - input:
      - depth: 5
      - length: 3
    - output: 37.92592592592591
  - Item:
    - input:
      - depth: 5.1
      - length: 1
    - status: invalid_parameters
- compute: Let n=floor(depth), f=depth-n. Output=3*length*(4/3)^n*(2/3+2*sqrt(1/36+f^2/12)). At integer levels this is 3*length*(4/3)^n. The fractional factor measures a peak raised to f times its final height.
- numeric tolerance: 1e-10
- invariants:
  - At depth zero output equals 3*length.
  - At each integer level the perimeter ratio to the preceding level is 4/3.
  - The perimeter is continuous at the joins of morph intervals.
- limits:
  - Only finite levels 0–5 are drawn; the ideal limiting curve is not rendered.
  - Fractional depth is an explicit geometric morph, not the conventional integer recursion.
  - The Sierpinski inset is separate and does not contribute to the displayed perimeter.
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

## Referenced source registry

- Source ID: source:openstax:koch-snowflake. [Calculus Volume2,5.2 Infinite Series](https://openstax.org/books/calculus-volume-2/pages/5-2-infinite-series). Locator: Example5.8 Koch snowflake; segment count, segment length, perimeter and limiting distinction. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:cornell:fractal-constructions. [Cornell University Mathematics, The Math of Numb3rs409: Graphic](https://pi.math.cornell.edu/~numb3rs/baker/409.html). Locator: Sierpinski triangle and Koch curve constructions; separate self-similar sets. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
