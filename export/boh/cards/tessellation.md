---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:tessellation", "id": "math:concept:tessellation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:tessellation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9dab0ee8c4953ce61c3519f14bec94fe65b90694fe36750288c2cf4bfceb701a"}, "purpose": "Which regular tile corners meet without a gap or overlap?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9dab0ee8c4953ce61c3519f14bec94fe65b90694fe36750288c2cf4bfceb701a", "status": "draft", "title": "Regular tessellations", "topics": ["mathematics", "geometry", "discrete-mathematics", "regular tessellations", "tessellation"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Regular tessellations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:tessellation; revision 0.1.0-draft. Setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings. Expression: $\alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.$. Conditions required for a defined value (a case may test their violation): Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch. Scope: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.

## Schema Version

0.1.0

## Id

math:concept:tessellation

## Slug

tessellation

## Type

concept

## Title

Regular tessellations

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

- regular tessellations
- tessellation

## Branches

- geometry
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which regular tile corners meet without a gap or overlap?

## Meaning

At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.

## Prerequisites

- required:
  - math:concept:regular-polygon
- helpful:
  - math:concept:ratio-scale
- depth:
  []

## Definition

- setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
- formal latex: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
- signature:
  - n: Whole number of sides of each regular convex tile
  - q: Whole number of tile corners brought to the same vertex
  - α: One interior angle, in degrees
  - g: Signed remaining full-turn angle, in degrees
- conditions:
  - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- domain notes: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
- proof status: Definition-level sources and originally derived bounded calculations; independent review pending.
- source refs:
  - source:spatial-insights:tiling

## Grammar

- pronunciation: Regular tessellations
- expression latex: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
- formation rule: At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.
- precedence: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
- symbols:
  - Item:
    - token: n
    - role: Whole number of sides of each regular convex tile
    - type: Locally declared quantity or selector
  - Item:
    - token: q
    - role: Whole number of tile corners brought to the same vertex
    - type: Locally declared quantity or selector
  - Item:
    - token: α
    - role: One interior angle, in degrees
    - type: Locally declared quantity or selector
  - Item:
    - token: g
    - role: Signed remaining full-turn angle, in degrees
    - type: Locally declared quantity or selector
- ast:
  - id: ast:tessellation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:sides
      - kind: variable
      - type: Declared numeric input
      - symbol: n
      - scope ref: scope:tessellation
    - Item:
      - id: n:copies
      - kind: variable
      - type: Declared numeric input
      - symbol: q
      - scope ref: scope:tessellation
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded spatial construction
      - ref: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:sides
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:copies
  - scopes:
    - Item:
      - id: scope:tessellation
      - kind: modelExpression
      - free variables:
        - n
        - q
      - external parameters:
        - The stated Euclidean model and fixed domain
      - domain condition: Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- parse errors:
  - Item:
    - input: Use a fractional categorical selector or omit the model conditions
    - status: model mismatch
    - reason: Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- ast coverage: Typed application outline of the stated bounded construction; the formal expression declares the complete mathematical rule.
- output symbol bindings:
  - n: sides
  - R: radius
  - s: sideLength
  - a: apothem
  - P: perimeter
  - A: output
  - θ: centralAngle
  - π: pi

## Properties

- Item:
  - claim: At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.
  - conditions: Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - derivation: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:tessellation:case-1

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
  - target: math:concept:regular-polygon
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The same regular faces and measured quantities connect these models.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The same regular faces and measured quantities connect these models.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:tessellation:case-1
  - title: Six triangular corners
  - role: applied_model
  - question: Which regular tile corners meet without a gap or overlap?
  - setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
  - assumptions:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - inputs:
    - sides: 3
    - copies: 6
  - steps:
    - Item:
      - index: 1
      - expression: n = 3; q = 6
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
      - reason: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
    - Item:
      - index: 3
      - expression: g ≈ 0.0 °
      - reason: Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.
  - result:
    - approximate: 0.0
  - interpretation: Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.
  - independent check:
    - method: Use exact Fraction arithmetic for the triangulation angle sum and signed gap; enumerate every pair of allowed counts.
    - expected: 0.0
  - limits: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - preset:
    - sides: 3
    - copies: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- Item:
  - id: math:example:tessellation:case-2
  - title: Four square corners
  - role: applied_model
  - question: Which regular tile corners meet without a gap or overlap?
  - setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
  - assumptions:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - inputs:
    - sides: 4
    - copies: 4
  - steps:
    - Item:
      - index: 1
      - expression: n = 4; q = 4
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
      - reason: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
    - Item:
      - index: 3
      - expression: g ≈ 0.0 °
      - reason: Four 90° square corners make 360°. The corresponding square grid covers the plane.
  - result:
    - approximate: 0.0
  - interpretation: Four 90° square corners make 360°. The corresponding square grid covers the plane.
  - independent check:
    - method: Use exact Fraction arithmetic for the triangulation angle sum and signed gap; enumerate every pair of allowed counts.
    - expected: 0.0
  - limits: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - preset:
    - sides: 4
    - copies: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- Item:
  - id: math:example:tessellation:case-3
  - title: Three hexagon corners
  - role: applied_model
  - question: Which regular tile corners meet without a gap or overlap?
  - setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
  - assumptions:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - inputs:
    - sides: 6
    - copies: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; q = 3
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
      - reason: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
    - Item:
      - index: 3
      - expression: g ≈ 0.0 °
      - reason: Three 120° regular-hexagon corners make 360°. The matching hexagonal patch shares complete edges.
  - result:
    - approximate: 0.0
  - interpretation: Three 120° regular-hexagon corners make 360°. The matching hexagonal patch shares complete edges.
  - independent check:
    - method: Use exact Fraction arithmetic for the triangulation angle sum and signed gap; enumerate every pair of allowed counts.
    - expected: 0.0
  - limits: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - preset:
    - sides: 6
    - copies: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- Item:
  - id: math:example:tessellation:case-4
  - title: Pentagonal gap
  - role: applied_model
  - question: Which regular tile corners meet without a gap or overlap?
  - setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
  - assumptions:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - inputs:
    - sides: 5
    - copies: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 5; q = 3
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
      - reason: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
    - Item:
      - index: 3
      - expression: g ≈ 36.0 °
      - reason: Three regular-pentagon corners add to 324°, leaving 36°. This does not establish anything about other, nonregular pentagonal tiles.
  - result:
    - approximate: 36.0
  - interpretation: Three regular-pentagon corners add to 324°, leaving 36°. This does not establish anything about other, nonregular pentagonal tiles.
  - independent check:
    - method: Use exact Fraction arithmetic for the triangulation angle sum and signed gap; enumerate every pair of allowed counts.
    - expected: 36.0
  - limits: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - preset:
    - sides: 5
    - copies: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
- Item:
  - id: math:example:tessellation:case-5
  - title: Too many square corners
  - role: applied_model
  - question: Which regular tile corners meet without a gap or overlap?
  - setting: A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.
  - assumptions:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - inputs:
    - sides: 4
    - copies: 5
  - steps:
    - Item:
      - index: 1
      - expression: n = 4; q = 5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
      - reason: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.
    - Item:
      - index: 3
      - expression: g ≈ -90.0 °
      - reason: Five square corners total 450°, so the signed gap is −90°. Their angles overlap rather than create negative physical floor area.
  - result:
    - approximate: -90.0
  - interpretation: Five square corners total 450°, so the signed gap is −90°. Their angles overlap rather than create negative physical floor area.
  - independent check:
    - method: Use exact Fraction arithmetic for the triangulation angle sum and signed gap; enumerate every pair of allowed counts.
    - expected: -90.0
  - limits: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - preset:
    - sides: 4
    - copies: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.

## Interactive

- component id: component:tessellation
- renderer id: tessellation-visual-model
- renderer version: 1
- model id: tessellation-visual-model
- model revision: 1
- expression id: ast:tessellation:expression
- interaction status: implemented
- description: At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.
- controls:
  - Item:
    - id: sides
    - type: number
    - default: 6
    - min: 3
    - max: 12
    - step: 1
  - Item:
    - id: copies
    - type: number
    - default: 3
    - min: 2
    - max: 6
    - step: 1
- expected cases:
  - Item:
    - input:
      - sides: 3
      - copies: 6
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - sides: 4
      - copies: 4
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - sides: 6
      - copies: 3
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - sides: 5
      - copies: 3
    - status: valid
    - output: 36.0
  - Item:
    - input:
      - sides: 4
      - copies: 5
    - status: valid
    - output: -90.0
  - Item:
    - input:
      - sides: 3
      - copies: 2
    - status: valid
    - output: 240.0
  - Item:
    - input:
      - sides: 12
      - copies: 6
    - status: valid
    - output: -540.0
  - Item:
    - input:
      - sides: 12
      - copies: 2
    - status: valid
    - output: 60.0
  - Item:
    - input:
      - sides: 7
      - copies: 4
    - status: valid
    - output: -154.28571428571428
  - Item:
    - input:
      - sides: 8
      - copies: 3
    - status: valid
    - output: -45.0
  - Item:
    - input:
      - sides: 9
      - copies: 5
    - status: valid
    - output: -340.0
  - Item:
    - input:
      - sides: 10
      - copies: 2
    - status: valid
    - output: 72.0
  - Item:
    - input:
      - sides: 2.9
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 12.1
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: true
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: null
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 1
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 3.5
      - copies: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: 1.9
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: 6.1
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: true
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: null
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - copies: 2.5
    - status: invalid_parameters
- compute: \alpha=\frac{180(n-2)}{n}\,{^{\circ}},\qquad g=360\,{^{\circ}}-q\alpha.
- numeric tolerance: 5e-11
- invariants:
  - Use a whole side count from three through twelve and whole corner count from two through six, in the Euclidean plane. Congruent convex regular polygons are assumed. The signed gap describes this local vertex; only the compatible triangle, square and hexagon cases show a plane-tiling patch.
  - Story, formula, measured Geometry and Graph use the same evaluated state.
  - Categorical and integer choices stay discrete; physical lengths may change continuously.
- limits:
  - Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
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
  - prompt: Which regular tile corners meet without a gap or overlap?
  - answer: At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.
- Item:
  - prompt: What does this view measure?
  - answer: Circular sectors encode the selected interior angles. Compatible triangle, square and hexagon settings also show actual finite polygon patches.

## Representations

- Item:
  - kind: geometry
  - description: Circular sectors encode the selected interior angles. Compatible triangle, square and hexagon settings also show actual finite polygon patches.
- Item:
  - kind: graph
  - description: Separate integer side-count dots show the signed gap for a fixed number of corners. A negative ordinate means angle overlap.
- Item:
  - kind: substitution
  - description: Triangulating a convex n-gon gives n−2 triangles and total interior angle 180(n−2) degrees. Regularity makes each of its n angles equal. Multiply one angle by the whole corner count and subtract from a full turn. Exact rational arithmetic gives zero only for the pairs (3,6), (4,4) and (6,3) within these domains. Explicit triangle, square and hexagon translation patterns provide the corresponding plane patches.

## Applications

- Item:
  - context: Six triangular corners
  - mapping: Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.
  - limitations: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - evidence kind: constructed_example
  - example ref: math:example:tessellation:case-1
- Item:
  - context: Four square corners
  - mapping: Four 90° square corners make 360°. The corresponding square grid covers the plane.
  - limitations: Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.
  - evidence kind: constructed_example
  - example ref: math:example:tessellation:case-2

## Source Refs

- source:spatial-insights:tiling

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this original bounded spatial lesson through the existing shared host.

## Referenced source registry

- Source ID: source:spatial-insights:tiling. [Wolfram MathWorld · Regular Tessellation](https://mathworld.wolfram.com/RegularTessellation.html). Locator: Equations (1)–(6): regular polygon angles around a vertex and the three regular Euclidean plane tessellations. Original finite patches and angle-sector drawings.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.
