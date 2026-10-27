---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:pythagorean-theorem:swap", "id": "math:example:pythagorean-theorem:swap", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:pythagorean-theorem", "example_id": "math:example:pythagorean-theorem:swap", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ac1e67d388ba02ee7e4504a7c53de6b4cb71b24ddc38690b21a0058867a35eb0"}, "purpose": "Find a right triangle’s diagonal by connecting side lengths to square areas.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ac1e67d388ba02ee7e4504a7c53de6b4cb71b24ddc38690b21a0058867a35eb0", "status": "draft", "title": "Turn the frame on its side", "topics": ["mathematics", "geometry", "measurement", "right-triangle distance", "hypotenuse"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Turn the frame on its side

Parent card: math:concept:pythagorean-theorem; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:pythagorean-theorem; revision 0.1.0-draft. Setting: Find a right triangle’s diagonal by connecting side lengths to square areas. Expression: $a^2+b^2=c^2,\qquad c=\sqrt{a^2+b^2}$. Conditions required for a defined value (a case may test their violation): The legs meet at exactly 90° in Euclidean geometry. Both leg lengths are positive and expressed in the same unit. The hypotenuse is the side opposite the right angle; choose the nonnegative square root. Scope: Both leg controls range from 0.5 to 6 m. The theorem concerns right triangles. Non-right triangles require an angle-dependent relation.

Case unit math:example:pythagorean-theorem:swap. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"a": 4, "b": 3}. Result: {"exact": "5 m"}. Limits: The angle between legs is still 90°.

## Complete worked case

- id: math:example:pythagorean-theorem:swap
- title: Turn the frame on its side
- role: structural
- question: Does exchanging the 3 m and 4 m legs change the diagonal?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - The legs meet at exactly 90° in Euclidean geometry.
  - Both leg lengths are positive and expressed in the same unit.
  - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
- inputs:
  - a: 4
  - b: 3
- steps:
  - Item:
    - index: 1
    - expression: c²=4²+3²=16+9=25 m²
    - reason: Exchanging the legs reverses the two addends.
  - Item:
    - index: 2
    - expression: c=5 m
    - reason: Addition gives the same total squared area.
- result:
  - exact: 5 m
- interpretation: Orientation does not change Euclidean distance.
- independent check:
  - method: Use commutativity.
  - expected: a²+b²=b²+a².
- limits: The angle between legs is still 90°.
- preset:
  - a: 4
  - b: 3
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - The legs meet at exactly 90° in Euclidean geometry.
  - Both leg lengths are positive and expressed in the same unit.
  - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.

## Written exploration recipe

- component id: pythagorean-theorem-visual-model
- renderer id: pythagorean-theorem-visual-model
- renderer version: 1.0.0
- model id: pythagorean-theorem-visual-model
- model revision: 1.0.0
- expression id: ast:pythagorean-theorem:expression
- interaction status: implemented
- description: A right triangle and its side squares connect leg growth to the summed area and changing diagonal.
- controls:
  - Item:
    - id: a
    - type: number
    - default: 3
    - min: 0.5
    - max: 6
    - slider min: 0.5
    - slider max: 6
    - slider step: 0.05
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: b
    - type: number
    - default: 4
    - min: 0.5
    - max: 6
    - slider min: 0.5
    - slider max: 6
    - slider step: 0.05
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - a: 3
      - b: 4
    - output: 5.0
  - Item:
    - input:
      - a: 1.5
      - b: 2
    - output: 2.5
  - Item:
    - input:
      - a: 2
      - b: 2
    - output: 2.8284271247461903
  - Item:
    - input:
      - a: 4
      - b: 3
    - output: 5.0
  - Item:
    - input:
      - a: 6
      - b: 6
    - output: 8.48528137423857
  - Item:
    - input:
      - a: 0.5
      - b: 0.5
    - output: 0.7071067811865476
  - Item:
    - input:
      - a: 0
      - b: 4
    - status: invalid_parameters
- compute: Output=hypot(a,b)=sqrt(a*a+b*b). Intermediate squared area=a*a+b*b. The legs remain perpendicular throughout the interaction.
- numeric tolerance: 1e-10
- invariants:
  - output²=a²+b² up to numerical rounding.
  - Exchanging a and b preserves output.
  - For positive a and b, max(a,b)<output<a+b.
- limits:
  - The right-angle assumption is essential.
  - The numerical scene illustrates rather than proves the theorem for all triangles.
  - The controls draw a finite range of ideal Euclidean shapes.
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

- Source ID: source:openstax:pythagorean-theorem. [Contemporary Mathematics,10.8 Right Triangle Trigonometry](https://openstax.org/books/contemporary-mathematics/pages/10-8-right-triangle-trigonometry). Locator: Pythagorean theorem statement, right-angle conditions, distance and square-area relation. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
