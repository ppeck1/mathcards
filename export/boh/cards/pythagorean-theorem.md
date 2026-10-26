---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:pythagorean-theorem", "id": "math:concept:pythagorean-theorem", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:pythagorean-theorem", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ac1e67d388ba02ee7e4504a7c53de6b4cb71b24ddc38690b21a0058867a35eb0"}, "purpose": "Find a right triangle’s diagonal by connecting side lengths to square areas.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ac1e67d388ba02ee7e4504a7c53de6b4cb71b24ddc38690b21a0058867a35eb0", "status": "draft", "title": "The Pythagorean theorem", "topics": ["mathematics", "geometry", "measurement", "right-triangle distance", "hypotenuse"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# The Pythagorean theorem

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:pythagorean-theorem; revision 0.1.0-draft. Setting: Find a right triangle’s diagonal by connecting side lengths to square areas. Expression: $a^2+b^2=c^2,\qquad c=\sqrt{a^2+b^2}$. Conditions required for a defined value (a case may test their violation): The legs meet at exactly 90° in Euclidean geometry. Both leg lengths are positive and expressed in the same unit. The hypotenuse is the side opposite the right angle; choose the nonnegative square root. Scope: Both leg controls range from 0.5 to 6 m. The theorem concerns right triangles. Non-right triangles require an angle-dependent relation.

## Schema Version

0.1.0

## Id

math:concept:pythagorean-theorem

## Slug

pythagorean-theorem

## Type

concept

## Title

The Pythagorean theorem

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

- right-triangle distance
- hypotenuse

## Branches

- geometry
- measurement

## Expressive Job

- model
- visualize
- compare

## Purpose

Find a right triangle’s diagonal by connecting side lengths to square areas.

## Meaning

Each leg grows its own square. Add those two areas, then take a square root to recover the diagonal length.

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
  - id: math:example:pythagorean-theorem:brace
  - title: Fit a diagonal brace
  - role: applied_model
  - question: A rectangular frame is 3 m wide and 4 m tall. What is the ideal corner-to-corner brace length?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
  - inputs:
    - a: 3
    - b: 4
  - steps:
    - Item:
      - index: 1
      - expression: a²=9 m²; b²=16 m²
      - reason: Square each perpendicular side length.
    - Item:
      - index: 2
      - expression: c²=9 m²+16 m²=25 m²
      - reason: Add the areas of the two leg squares.
    - Item:
      - index: 3
      - expression: c=√25 m²=5 m
      - reason: Take the nonnegative root to obtain length.
  - result:
    - exact: 5 m
  - interpretation: The sloping brace is longer than either side but shorter than their sum.
  - independent check:
    - method: Verify by squaring.
    - expected: 5²=3²+4²=25.
  - limits: The frame must be rectangular; allowance for joints and real material is excluded.
  - preset:
    - a: 3
    - b: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
- Item:
  - id: math:example:pythagorean-theorem:small
  - title: A smaller matching frame
  - role: applied_model
  - question: What is the diagonal of a 1.5 m by 2 m rectangle?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
  - inputs:
    - a: 1.5
    - b: 2
  - steps:
    - Item:
      - index: 1
      - expression: c²=(1.5)²+2²=2.25+4=6.25 m²
      - reason: Use the same theorem with smaller legs.
    - Item:
      - index: 2
      - expression: c=2.5 m
      - reason: Take the positive square root.
  - result:
    - exact: 2.5 m
  - interpretation: Halving every side of the 3–4–5 triangle halves its diagonal.
  - independent check:
    - method: Scale a known right triangle.
    - expected: (3,4,5)/2=(1.5,2,2.5).
  - limits: Both side measurements use meters and meet at a right angle.
  - preset:
    - a: 1.5
    - b: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
- Item:
  - id: math:example:pythagorean-theorem:square
  - title: Across a square panel
  - role: structural
  - question: What is the diagonal of a square with side 2m?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
  - inputs:
    - a: 2
    - b: 2
  - steps:
    - Item:
      - index: 1
      - expression: c²=2²+2²=8 m²
      - reason: Equal legs contribute equal square areas.
    - Item:
      - index: 2
      - expression: c=√8 m=2√2 m
      - reason: The exact diagonal is irrational.
  - result:
    - exact: 2√2 m ≈2.82843 m
  - interpretation: A square diagonal is not the sum of its side lengths.
  - independent check:
    - method: Factor the length scale.
    - expected: A unit square diagonal is√2; scaling by 2 gives 2√2.
  - limits: The decimal is a rounded evaluation, not an exact finite decimal.
  - preset:
    - a: 2
    - b: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
- Item:
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
- Item:
  - id: math:example:pythagorean-theorem:not-right
  - title: Check the angle before calculating
  - role: counterexample
  - question: Two 3 m and 4 m sides meet at 60°. Is 5 m the opposite side?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
  - inputs:
    - a: 3
    - b: 4
    - included angle deg: 60
  - steps:
    - Item:
      - index: 1
      - expression: 90° is required for c²=a²+b²
      - reason: The stated angle fails the right-triangle condition.
    - Item:
      - index: 2
      - expression: c²=3²+4²−2(3)(4)cos 60°=13 m²
      - reason: The law of cosines gives a different value for this comparison.
    - Item:
      - index: 3
      - expression: c=√13 m, not 5 m
      - reason: The omitted angle matters.
  - result:
    - exact: Outside this right-triangle model; the comparison side is√13 m
  - interpretation: A correct formula used in the wrong setting gives a wrong model prediction.
  - independent check:
    - method: Compare the general angle formula.
    - expected: At 90°, cos 90°=0; at 60°, the correction is 12 m².
  - limits: The interactive model only accepts perpendicular legs; it has no adjustable angle.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The legs meet at exactly 90° in Euclidean geometry.
    - Both leg lengths are positive and expressed in the same unit.
    - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.

## Properties

- Item:
  - claim: Exchanging the legs preserves the hypotenuse.
  - status: algebraic derivation
  - conditions: Use positive perpendicular legs.
  - derivation: a²+b²=b²+a².
- Item:
  - claim: Scaling both legs by k scales the hypotenuse by k.
  - status: algebraic derivation
  - conditions: Take k>0.
  - derivation: √((ka)²+(kb)²)=k√(a²+b²).

## Prompts

- Item:
  - prompt: Why square the lengths first?
  - answer: The relation compares the areas of squares on the three sides. The square root converts the total area back to a length.
- Item:
  - prompt: Can I use it for any triangle?
  - answer: No. The legs must meet at a right angle; check the geometric condition before substituting numbers.

## Representations

- Item:
  - kind: symbolic
  - description: Square each leg, add the squared lengths and take a positive square root.
- Item:
  - kind: geometric
  - description: A right triangle and its side squares connect leg growth to the summed area and changing diagonal.

## Applications

- Item:
  - context: Estimate a diagonal frame brace.
  - mapping: Perpendicular sides 3 m and 4 m give c=5 m.
  - limitations: Joint geometry, tolerances and material specifications are excluded.
  - evidence kind: constructed_example
  - example ref: math:example:pythagorean-theorem:brace
- Item:
  - context: Scale a rectangular panel design.
  - mapping: Sides 1.5 m and 2 m give diagonal 2.5 m.
  - limitations: The rectangle and consistent units are stipulated.
  - evidence kind: constructed_example
  - example ref: math:example:pythagorean-theorem:small

## Source Refs

- source:openstax:pythagorean-theorem

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Find a right triangle’s diagonal by connecting side lengths to square areas.
- formal latex: a^2+b^2=c^2,\qquad c=\sqrt{a^2+b^2}
- signature:
  - a: first positive perpendicular leg length in meters
  - b: second positive perpendicular leg length in meters
  - c: positive hypotenuse length in meters
- conditions:
  - The legs meet at exactly 90° in Euclidean geometry.
  - Both leg lengths are positive and expressed in the same unit.
  - The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
- domain notes: Both leg controls range from 0.5 to 6 m. The theorem concerns right triangles. Non-right triangles require an angle-dependent relation.
- proof status: This draft states the theorem and verifies examples through squared areas. The animation and numerical cases are illustrations, not a general proof.
- source refs:
  - source:openstax:pythagorean-theorem

## Grammar

- pronunciation: For perpendicular legs, a squared plus b squared equals c squared; c is the positive square root of their squared sum.
- expression latex: a^2+b^2=c^2,\qquad c=\sqrt{a^2+b^2}
- formation rule: Output=hypot(a,b)=sqrt(a*a+b*b). Intermediate squared area=a*a+b*b. The legs remain perpendicular throughout the interaction.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: a
    - role: first positive perpendicular leg length in meters
    - type: Real quantity in declared setting
  - Item:
    - token: b
    - role: second positive perpendicular leg length in meters
    - type: Real quantity in declared setting
  - Item:
    - token: c
    - role: positive hypotenuse length in meters
    - type: Real quantity in declared setting
- ast:
  - id: ast:pythagorean-theorem:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Length[m]
      - scope ref: scope:pythagorean-theorem
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Length[m]
      - scope ref: scope:pythagorean-theorem
    - Item:
      - id: n:square
      - kind: functionRef
      - ref: u →u²
      - type: Length[m] → Area[m²]
    - Item:
      - id: n:root
      - kind: functionRef
      - ref: nonnegative square root
      - type: Area[m²] → Length[m]
    - Item:
      - id: n:a-square
      - kind: apply
      - function: n:square
      - argument: n:a
      - type: Area[m²]
    - Item:
      - id: n:b-square
      - kind: apply
      - function: n:square
      - argument: n:b
      - type: Area[m²]
    - Item:
      - id: n:sum
      - kind: add
      - arguments:
        - n:a-square
        - n:b-square
      - type: Area[m²]
    - Item:
      - id: n:output
      - kind: apply
      - function: n:root
      - argument: n:sum
      - type: Length[m]
  - scopes:
    - Item:
      - id: scope:pythagorean-theorem
      - kind: modelExpression
      - free variables:
        - a
        - b
        - c
      - domain condition: The legs meet at exactly 90° in Euclidean geometry.; Both leg lengths are positive and expressed in the same unit.; The hypotenuse is the side opposite the right angle; choose the nonnegative square root.
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

## Referenced source registry

- Source ID: source:openstax:pythagorean-theorem. [Contemporary Mathematics,10.8 Right Triangle Trigonometry](https://openstax.org/books/contemporary-mathematics/pages/10-8-right-triangle-trigonometry). Locator: Pythagorean theorem statement, right-angle conditions, distance and square-area relation. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
