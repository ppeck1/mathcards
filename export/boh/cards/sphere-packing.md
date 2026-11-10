---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:sphere-packing", "id": "math:concept:sphere-packing", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sphere-packing", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d385d0cde546272f2ea6e98fde27503e84c9ef56e7b4e38e44e4c949ec48b892"}, "purpose": "How much of a repeating bead cell is actually solid?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d385d0cde546272f2ea6e98fde27503e84c9ef56e7b4e38e44e4c949ec48b892", "status": "draft", "title": "Sphere packing in cubic cells", "topics": ["mathematics", "geometry", "measurement", "modeling", "sphere packing in cubic cells", "sphere packing"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Sphere packing in cubic cells

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:sphere-packing; revision 0.1.0-draft. Setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes. Expression: $\eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.$. Conditions required for a defined value (a case may test their violation): Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted. Scope: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.

## Schema Version

0.1.0

## Id

math:concept:sphere-packing

## Slug

sphere-packing

## Type

concept

## Title

Sphere packing in cubic cells

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

- sphere packing in cubic cells
- sphere packing

## Branches

- geometry
- measurement
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How much of a repeating bead cell is actually solid?

## Meaning

A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.

## Prerequisites

- required:
  - math:concept:sphere-measurement
- helpful:
  - math:concept:pythagorean-theorem
- depth:
  []

## Definition

- setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
- formal latex: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
- signature:
  - k: Discrete packing choice: 1 simple cubic or 2 face-centered cubic
  - η: Dimensionless occupied volume fraction of the periodic cell
  - N: Equivalent whole sphere count assigned to one cell
  - r: Common sphere radius, in centimetres
  - a: Cubic cell edge length, in centimetres
  - π: Euclidean circle constant pi
- conditions:
  - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- domain notes: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
- proof status: Definition-level sources and originally derived bounded calculations; independent review pending.
- source refs:
  - source:spatial-insights:packing
  - source:spatial-insights:packing-primary

## Grammar

- pronunciation: Sphere packing in cubic cells
- expression latex: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
- formation rule: A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.
- precedence: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
- symbols:
  - Item:
    - token: k
    - role: Discrete packing choice: 1 simple cubic or 2 face-centered cubic
    - type: Locally declared quantity or selector
  - Item:
    - token: η
    - role: Dimensionless occupied volume fraction of the periodic cell
    - type: Locally declared quantity or selector
  - Item:
    - token: N
    - role: Equivalent whole sphere count assigned to one cell
    - type: Locally declared quantity or selector
  - Item:
    - token: r
    - role: Common sphere radius, in centimetres
    - type: Locally declared quantity or selector
  - Item:
    - token: a
    - role: Cubic cell edge length, in centimetres
    - type: Locally declared quantity or selector
  - Item:
    - token: π
    - role: Euclidean circle constant pi
    - type: Locally declared quantity or selector
- ast:
  - id: ast:sphere-packing:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:packing
      - kind: variable
      - type: Declared numeric input
      - symbol: k
      - scope ref: scope:sphere-packing
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared numeric input
      - symbol: r
      - scope ref: scope:sphere-packing
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded spatial construction
      - ref: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:packing
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:radius
  - scopes:
    - Item:
      - id: scope:sphere-packing
      - kind: modelExpression
      - free variables:
        - k
        - r
      - external parameters:
        - The stated Euclidean model and fixed domain
      - domain condition: Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- parse errors:
  - Item:
    - input: Use a fractional categorical selector or omit the model conditions
    - status: model mismatch
    - reason: Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
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
  - claim: A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.
  - conditions: Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - derivation: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:sphere-packing:case-1

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
  - target: math:concept:sphere-measurement
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The stated ratio, geometry and physical units supply the calculation.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The stated ratio, geometry and physical units supply the calculation.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:sphere-packing:case-1
  - title: Corner-only bead cell
  - role: applied_model
  - question: How much of a repeating bead cell is actually solid?
  - setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
  - assumptions:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - inputs:
    - packing: 1
    - radius: 1
  - steps:
    - Item:
      - index: 1
      - expression: k = 1; r = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
      - reason: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
    - Item:
      - index: 3
      - expression: η ≈ 0.5235987755982988
      - reason: Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.
  - result:
    - approximate: 0.5235987755982988
  - interpretation: Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.
  - independent check:
    - method: Derive cell edge from nearest-center coordinate distance, count boundary shares as exact fractions and integrate one sphere’s circular sections.
    - expected: 0.5235987755982988
  - limits: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - preset:
    - packing: 1
    - radius: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- Item:
  - id: math:example:sphere-packing:case-2
  - title: Add face-center beads
  - role: applied_model
  - question: How much of a repeating bead cell is actually solid?
  - setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
  - assumptions:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - inputs:
    - packing: 2
    - radius: 1
  - steps:
    - Item:
      - index: 1
      - expression: k = 2; r = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
      - reason: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
    - Item:
      - index: 3
      - expression: η ≈ 0.7404804896930611
      - reason: Six face-center halves join the eight corner eighths, totaling four spheres. FCC occupies π/(3√2), about 74.05%, of its cell.
  - result:
    - approximate: 0.7404804896930611
  - interpretation: Six face-center halves join the eight corner eighths, totaling four spheres. FCC occupies π/(3√2), about 74.05%, of its cell.
  - independent check:
    - method: Derive cell edge from nearest-center coordinate distance, count boundary shares as exact fractions and integrate one sphere’s circular sections.
    - expected: 0.7404804896930611
  - limits: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - preset:
    - packing: 2
    - radius: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- Item:
  - id: math:example:sphere-packing:case-3
  - title: Smaller SC beads
  - role: applied_model
  - question: How much of a repeating bead cell is actually solid?
  - setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
  - assumptions:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - inputs:
    - packing: 1
    - radius: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: k = 1; r = 0.5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
      - reason: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
    - Item:
      - index: 3
      - expression: η ≈ 0.5235987755982988
      - reason: Halving radius halves cell edge and divides both occupied and cell volumes by eight. The SC occupied fraction stays about 52.36%.
  - result:
    - approximate: 0.5235987755982988
  - interpretation: Halving radius halves cell edge and divides both occupied and cell volumes by eight. The SC occupied fraction stays about 52.36%.
  - independent check:
    - method: Derive cell edge from nearest-center coordinate distance, count boundary shares as exact fractions and integrate one sphere’s circular sections.
    - expected: 0.5235987755982988
  - limits: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - preset:
    - packing: 1
    - radius: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- Item:
  - id: math:example:sphere-packing:case-4
  - title: Larger FCC beads
  - role: applied_model
  - question: How much of a repeating bead cell is actually solid?
  - setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
  - assumptions:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - inputs:
    - packing: 2
    - radius: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: k = 2; r = 1.5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
      - reason: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
    - Item:
      - index: 3
      - expression: η ≈ 0.7404804896930612
      - reason: Increasing radius to 1.5 cm scales both volumes by 3.375. The FCC occupied fraction remains about 74.05%.
  - result:
    - approximate: 0.7404804896930612
  - interpretation: Increasing radius to 1.5 cm scales both volumes by 3.375. The FCC occupied fraction remains about 74.05%.
  - independent check:
    - method: Derive cell edge from nearest-center coordinate distance, count boundary shares as exact fractions and integrate one sphere’s circular sections.
    - expected: 0.7404804896930612
  - limits: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - preset:
    - packing: 2
    - radius: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
- Item:
  - id: math:example:sphere-packing:case-5
  - title: Compare at half-centimetre radius
  - role: applied_model
  - question: How much of a repeating bead cell is actually solid?
  - setting: A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.
  - assumptions:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - inputs:
    - packing: 2
    - radius: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: k = 2; r = 0.5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
      - reason: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.
    - Item:
      - index: 3
      - expression: η ≈ 0.7404804896930611
      - reason: Small FCC beads still use four equivalent spheres per periodic cell. Size changes the cell length, while this arrangement’s volume fraction stays fixed.
  - result:
    - approximate: 0.7404804896930611
  - interpretation: Small FCC beads still use four equivalent spheres per periodic cell. Size changes the cell length, while this arrangement’s volume fraction stays fixed.
  - independent check:
    - method: Derive cell edge from nearest-center coordinate distance, count boundary shares as exact fractions and integrate one sphere’s circular sections.
    - expected: 0.7404804896930611
  - limits: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - preset:
    - packing: 2
    - radius: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.

## Interactive

- component id: component:sphere-packing
- renderer id: sphere-packing-visual-model
- renderer version: 1
- model id: sphere-packing-visual-model
- model revision: 1
- expression id: ast:sphere-packing:expression
- interaction status: implemented
- description: A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.
- controls:
  - Item:
    - id: packing
    - type: number
    - default: 1
    - min: 1
    - max: 2
    - step: 1
  - Item:
    - id: radius
    - type: number
    - default: 1
    - min: 0.5
    - max: 1.5
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - packing: 1
      - radius: 0.5
    - status: valid
    - output: 0.5235987755982988
  - Item:
    - input:
      - packing: 1
      - radius: 0.55
    - status: valid
    - output: 0.5235987755982987
  - Item:
    - input:
      - packing: 1
      - radius: 0.75
    - status: valid
    - output: 0.5235987755982988
  - Item:
    - input:
      - packing: 1
      - radius: 1
    - status: valid
    - output: 0.5235987755982988
  - Item:
    - input:
      - packing: 1
      - radius: 1.25
    - status: valid
    - output: 0.5235987755982988
  - Item:
    - input:
      - packing: 1
      - radius: 1.5
    - status: valid
    - output: 0.5235987755982988
  - Item:
    - input:
      - packing: 2
      - radius: 0.5
    - status: valid
    - output: 0.7404804896930611
  - Item:
    - input:
      - packing: 2
      - radius: 0.55
    - status: valid
    - output: 0.7404804896930609
  - Item:
    - input:
      - packing: 2
      - radius: 0.75
    - status: valid
    - output: 0.7404804896930612
  - Item:
    - input:
      - packing: 2
      - radius: 1
    - status: valid
    - output: 0.7404804896930611
  - Item:
    - input:
      - packing: 2
      - radius: 1.25
    - status: valid
    - output: 0.7404804896930612
  - Item:
    - input:
      - packing: 2
      - radius: 1.5
    - status: valid
    - output: 0.7404804896930612
  - Item:
    - input:
      - packing: 0.9
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 2.1
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: true
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: null
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1.5
      - radius: 1
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: 1.6
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: true
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: null
    - status: invalid_parameters
  - Item:
    - input:
      - packing: 1
      - radius: 1
    - status: invalid_parameters
- compute: \eta=\frac{N(4\pi r^3/3)}{a^3},\qquad a=2r\text{ for SC},\quad a=2\sqrt{2}r\text{ for FCC}.
- numeric tolerance: 5e-11
- invariants:
  - Choose integer packing 1 simple cubic or 2 face-centered cubic, and equal sphere radii 0.5–1.5 cm. Use periodic unit-cell sharing and nearest-neighbor contacts. The displayed face-plane circular sections do not measure three-dimensional occupancy by their flat area. No comparison with all possible packings or real materials is asserted.
  - Story, formula, measured Geometry and Graph use the same evaluated state.
  - Categorical and integer choices stay discrete; physical lengths may change continuously.
- limits:
  - Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
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
  - prompt: How much of a repeating bead cell is actually solid?
  - answer: A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.
- Item:
  - prompt: What does this view measure?
  - answer: The fixed-centimetre face-plane section shows circular sphere contacts and cell edge length. A separate fixed 0–1 bar measures occupied three-dimensional fraction.

## Representations

- Item:
  - kind: geometry
  - description: The fixed-centimetre face-plane section shows circular sphere contacts and cell edge length. A separate fixed 0–1 bar measures occupied three-dimensional fraction.
- Item:
  - kind: graph
  - description: Two categorical dots compare simple cubic and FCC fractions. Radius changes cell and bead size while preserving each fraction.
- Item:
  - kind: substitution
  - description: Each corner sphere is shared among eight adjacent cells and each face-center sphere among two. Thus equivalent counts are 8/8=1 for SC and 8/8+6/2=4 for FCC. SC neighbors touch along an edge, making a=2r. FCC corner-to-face-center-to-corner contacts span a face diagonal of length 4r, while that diagonal is √2a. Insert the resulting edge length and equivalent sphere count into occupied sphere volume divided by a³. Both volumes scale as r³, so their ratio does not depend on radius.

## Applications

- Item:
  - context: Corner-only bead cell
  - mapping: Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.
  - limitations: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-packing:case-1
- Item:
  - context: Add face-center beads
  - mapping: Six face-center halves join the eight corner eighths, totaling four spheres. FCC occupies π/(3√2), about 74.05%, of its cell.
  - limitations: Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-packing:case-2

## Source Refs

- source:spatial-insights:packing
- source:spatial-insights:packing-primary

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this original bounded spatial lesson through the existing shared host.

## Referenced source registry

- Source ID: source:spatial-insights:packing. [Wolfram MathWorld · Cubic Close Packing](https://mathworld.wolfram.com/CubicClosePacking.html). Locator: SC/FCC density table and equations (1)–(5): shared corner/face sphere volumes and the FCC face-diagonal contact relation. Only these two periodic arrangements are compared.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.

- Source ID: source:spatial-insights:packing-primary. [International Union of Crystallography · Close-packed structures, P. Krishna and D. Pandey](https://www.iucr.org/what-we-do/education/pamphlets/close-packed-structures). Locator: Introduction and possible lattice types: equal-sphere contacts, cubic close packing and its face-centered cubic unit cell. No copied crystal data, source figures or exercises.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.
