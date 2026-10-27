---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:fractal-geometry:wire", "id": "math:example:fractal-geometry:wire", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:fractal-geometry", "example_id": "math:example:fractal-geometry:wire", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "664a7e9a33b7b2dff115e0b3f6c4143e0f4912b3c535de2a2934fc8ea5768cd2"}, "purpose": "Build finite stages of a self-similar edge and measure their perimeter.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "664a7e9a33b7b2dff115e0b3f6c4143e0f4912b3c535de2a2934fc8ea5768cd2", "status": "draft", "title": "A decorative wire snowflake", "topics": ["mathematics", "geometry", "infinity", "Koch snowflake", "self-similarity"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# A decorative wire snowflake

Parent card: math:concept:fractal-geometry; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:fractal-geometry; revision 0.1.0-draft. Setting: Build finite stages of a self-similar edge and measure their perimeter. Expression: $P_n=3s(4/3)^n\quad(n\in\mathbb N_0)$. Conditions required for a defined value (a case may test their violation): Start with an equilateral triangle and apply outward middle-third Koch replacements. Integer depth describes a finite polygon, not an infinite fractal. Fractional depth raises the next-level bump linearly and measures its actual segment lengths. Scope: Depth 0–5, initial side 0.5–3 m. With n=floor(d) and f=d−n, P(d)=3s(4/3)^n[2/3+2√(1/36+f²/12)]. The separate Sierpinski inset is another finite construction, not the measured Koch boundary.

Case unit math:example:fractal-geometry:wire. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"depth": 3, "length": 1}. Result: {"exact": "64/9 m ≈7.11111 m"}. Limits: An ideal zero-thickness edge excludes joins, material thickness and manufacturing tolerance.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:koch-snowflake. [Calculus Volume2,5.2 Infinite Series](https://openstax.org/books/calculus-volume-2/pages/5-2-infinite-series). Locator: Example5.8 Koch snowflake; segment count, segment length, perimeter and limiting distinction. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:cornell:fractal-constructions. [Cornell University Mathematics, The Math of Numb3rs409: Graphic](https://pi.math.cornell.edu/~numb3rs/baker/409.html). Locator: Sierpinski triangle and Koch curve constructions; separate self-similar sets. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
