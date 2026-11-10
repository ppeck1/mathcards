---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:regular-polygon", "id": "math:concept:regular-polygon", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:regular-polygon", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "8e71b8228a8d53f519adda48ecc98766d3700ac843b00c3553bc083e6751a053"}, "purpose": "How does a pavilion floor change when its radius or number of sides changes?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "8e71b8228a8d53f519adda48ecc98766d3700ac843b00c3553bc083e6751a053", "status": "draft", "title": "Regular polygon area", "topics": ["mathematics", "geometry", "measurement", "regular polygon area"], "type": "reference", "updated": "2026-11-05T00:00:00Z", "version": "0.1.0-draft"}
---

# Regular polygon area

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:regular-polygon; revision 0.1.0-draft. Setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan. Expression: $\theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).$. Conditions required for a defined value (a case may test their violation): Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians. Scope: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.

## Schema Version

0.1.0

## Id

math:concept:regular-polygon

## Slug

regular-polygon

## Type

concept

## Title

Regular polygon area

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-05T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- regular polygon area

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does a pavilion floor change when its radius or number of sides changes?

## Meaning

A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.

## Prerequisites

- required:
  - math:concept:pythagorean-theorem
- helpful:
  - math:concept:ratio-scale
- depth:
  - math:concept:circle-manifold

## Definition

- setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
- formal latex: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
- signature:
  - n: Whole number of equal polygon sides and center triangles
  - R: Circumradius from pavilion center to a vertex, in metres
  - s: Length of one straight polygon side, in metres
  - a: Apothem: perpendicular distance from center to a side, in metres
  - P: Perimeter: total length of the polygon boundary, in metres
  - A: Planar pavilion floor area, in square metres
  - θ: Central angle between neighboring vertices, in radians
  - π: Euclidean circle constant pi
- conditions:
  - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- domain notes: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
- proof status: Definition-level source and originally authored finite calculations; independent mathematical review pending.
- source refs:
  - source:geometry-extensions:regular-polygon

## Grammar

- pronunciation: Regular polygon area
- expression latex: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
- formation rule: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
- precedence: Form the central angle in radians, find side length and apothem, then multiply the perimeter by the apothem and divide by two.
- symbols:
  - Item:
    - token: n
    - role: Whole number of equal polygon sides and center triangles
    - type: Locally declared quantity or constant
  - Item:
    - token: R
    - role: Circumradius from pavilion center to a vertex, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: s
    - role: Length of one straight polygon side, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: a
    - role: Apothem: perpendicular distance from center to a side, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: P
    - role: Perimeter: total length of the polygon boundary, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: A
    - role: Planar pavilion floor area, in square metres
    - type: Locally declared quantity or constant
  - Item:
    - token: θ
    - role: Central angle between neighboring vertices, in radians
    - type: Locally declared quantity or constant
  - Item:
    - token: π
    - role: Euclidean circle constant pi
    - type: Locally declared quantity or constant
- ast:
  - id: ast:regular-polygon:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:sides
      - kind: variable
      - type: Declared numeric input
      - symbol: n
      - scope ref: scope:regular-polygon
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared numeric input
      - symbol: R
      - scope ref: scope:regular-polygon
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded integer or geometric rule
      - ref: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
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
      - argument: n:radius
  - scopes:
    - Item:
      - id: scope:regular-polygon
      - kind: modelExpression
      - free variables:
        - n
        - R
      - external parameters:
        - Euclidean geometry and the circle constant π
      - domain condition: Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- parse errors:
  - Item:
    - input: Use a fractional count or omit the declared geometric assumptions
    - status: model mismatch
    - reason: Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
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
  - claim: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
  - conditions: Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - derivation: Bisect one center triangle to make a right triangle with hypotenuse R and half-angle θ/2. Its half-base is R sin(θ/2) and height is R cos(θ/2), giving side length and apothem. Each complete triangle has area sa/2. Adding n copies gives A=nsa/2=Pa/2. The double-angle identity gives the radius formula nR² sin(2π/n)/2. A separate shoelace sum of the vertex coordinates checks the same area.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:regular-polygon:case-1

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
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Bisecting the center triangles creates right triangles with radius as hypotenuse.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Scaling every length by a positive factor scales area by its square.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:circle-manifold
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Equally spaced vertices lie on a circle; the polygon remains a different boundary.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:regular-polygon:case-1
  - title: Six equal pavilion bays
  - role: applied_model
  - question: How does a pavilion floor change when its radius or number of sides changes?
  - setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - assumptions:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - inputs:
    - sides: 6
    - radius: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; R = 3
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
      - reason: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
    - Item:
      - index: 3
      - expression: A ≈ 23.382685902179844 m²
      - reason: Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.
  - result:
    - approximate: 23.382685902179844
  - interpretation: Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.
  - independent check:
    - method: Independently construct the regular vertices on the circumcircle and compute their shoelace area; sum edge lengths for the perimeter.
    - expected: 23.382685902179844
  - limits: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - preset:
    - sides: 6
    - radius: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- Item:
  - id: math:example:regular-polygon:case-2
  - title: A triangular floor
  - role: applied_model
  - question: How does a pavilion floor change when its radius or number of sides changes?
  - setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - assumptions:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - inputs:
    - sides: 3
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 3; R = 2
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
      - reason: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
    - Item:
      - index: 3
      - expression: A ≈ 5.196152422706632 m²
      - reason: The circumradius stays 2 metres, but the triangle reaches inward between its three vertices. Its area is 3√3, about 5.196 square metres.
  - result:
    - approximate: 5.196152422706632
  - interpretation: The circumradius stays 2 metres, but the triangle reaches inward between its three vertices. Its area is 3√3, about 5.196 square metres.
  - independent check:
    - method: Independently construct the regular vertices on the circumcircle and compute their shoelace area; sum edge lengths for the perimeter.
    - expected: 5.196152422706632
  - limits: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - preset:
    - sides: 3
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- Item:
  - id: math:example:regular-polygon:case-3
  - title: A square on the same circle
  - role: applied_model
  - question: How does a pavilion floor change when its radius or number of sides changes?
  - setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - assumptions:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - inputs:
    - sides: 4
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 4; R = 2
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
      - reason: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
    - Item:
      - index: 3
      - expression: A ≈ 8.0 m²
      - reason: Four radial triangles form a square with diagonal 4 metres. Its area is 8 square metres, distinct from the enclosing circle area 4π.
  - result:
    - approximate: 8.0
  - interpretation: Four radial triangles form a square with diagonal 4 metres. Its area is 8 square metres, distinct from the enclosing circle area 4π.
  - independent check:
    - method: Independently construct the regular vertices on the circumcircle and compute their shoelace area; sum edge lengths for the perimeter.
    - expected: 8.0
  - limits: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - preset:
    - sides: 4
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- Item:
  - id: math:example:regular-polygon:case-4
  - title: Twelve shorter edges
  - role: applied_model
  - question: How does a pavilion floor change when its radius or number of sides changes?
  - setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - assumptions:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - inputs:
    - sides: 12
    - radius: 3
  - steps:
    - Item:
      - index: 1
      - expression: n = 12; R = 3
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
      - reason: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
    - Item:
      - index: 3
      - expression: A ≈ 27.0 m²
      - reason: Twelve center angles of 30 degrees give area 27 square metres. More sides fill more of the fixed circumcircle while retaining straight edges.
  - result:
    - approximate: 27.0
  - interpretation: Twelve center angles of 30 degrees give area 27 square metres. More sides fill more of the fixed circumcircle while retaining straight edges.
  - independent check:
    - method: Independently construct the regular vertices on the circumcircle and compute their shoelace area; sum edge lengths for the perimeter.
    - expected: 27.0
  - limits: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - preset:
    - sides: 12
    - radius: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
- Item:
  - id: math:example:regular-polygon:case-5
  - title: Half the radius
  - role: applied_model
  - question: How does a pavilion floor change when its radius or number of sides changes?
  - setting: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - assumptions:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - inputs:
    - sides: 6
    - radius: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; R = 1.5
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
      - reason: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
    - Item:
      - index: 3
      - expression: A ≈ 5.845671475544961 m²
      - reason: Halving all lengths quarters the hexagonal floor area, to about 5.846 square metres. The side count and central angle are unchanged.
  - result:
    - approximate: 5.845671475544961
  - interpretation: Halving all lengths quarters the hexagonal floor area, to about 5.846 square metres. The side count and central angle are unchanged.
  - independent check:
    - method: Independently construct the regular vertices on the circumcircle and compute their shoelace area; sum edge lengths for the perimeter.
    - expected: 5.845671475544961
  - limits: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - preset:
    - sides: 6
    - radius: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.

## Interactive

- component id: component:regular-polygon
- renderer id: regular-polygon-visual-model
- renderer version: 1
- model id: regular-polygon-visual-model
- model revision: 1
- expression id: ast:regular-polygon:expression
- interaction status: implemented
- description: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
- controls:
  - Item:
    - id: sides
    - type: number
    - default: 6
    - min: 3
    - max: 12
    - step: 1
  - Item:
    - id: radius
    - type: number
    - default: 3
    - min: 1
    - max: 4
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - sides: 3
      - radius: 1
    - status: valid
    - output: 1.299038105676658
  - Item:
    - input:
      - sides: 3
      - radius: 1.05
    - status: valid
    - output: 1.4321895115085155
  - Item:
    - input:
      - sides: 3
      - radius: 2
    - status: valid
    - output: 5.196152422706632
  - Item:
    - input:
      - sides: 3
      - radius: 3
    - status: valid
    - output: 11.691342951089922
  - Item:
    - input:
      - sides: 3
      - radius: 4
    - status: valid
    - output: 20.784609690826528
  - Item:
    - input:
      - sides: 4
      - radius: 1
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - sides: 4
      - radius: 1.05
    - status: valid
    - output: 2.205
  - Item:
    - input:
      - sides: 4
      - radius: 2
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - sides: 4
      - radius: 3
    - status: valid
    - output: 18.0
  - Item:
    - input:
      - sides: 4
      - radius: 4
    - status: valid
    - output: 32.0
  - Item:
    - input:
      - sides: 5
      - radius: 1
    - status: valid
    - output: 2.3776412907378837
  - Item:
    - input:
      - sides: 5
      - radius: 1.05
    - status: valid
    - output: 2.621349523038517
  - Item:
    - input:
      - sides: 5
      - radius: 2
    - status: valid
    - output: 9.510565162951535
  - Item:
    - input:
      - sides: 5
      - radius: 3
    - status: valid
    - output: 21.398771616640953
  - Item:
    - input:
      - sides: 5
      - radius: 4
    - status: valid
    - output: 38.04226065180614
  - Item:
    - input:
      - sides: 6
      - radius: 1
    - status: valid
    - output: 2.598076211353316
  - Item:
    - input:
      - sides: 6
      - radius: 1.05
    - status: valid
    - output: 2.8643790230170305
  - Item:
    - input:
      - sides: 6
      - radius: 2
    - status: valid
    - output: 10.392304845413264
  - Item:
    - input:
      - sides: 6
      - radius: 3
    - status: valid
    - output: 23.382685902179844
  - Item:
    - input:
      - sides: 6
      - radius: 4
    - status: valid
    - output: 41.569219381653056
  - Item:
    - input:
      - sides: 7
      - radius: 1
    - status: valid
    - output: 2.7364101886381045
  - Item:
    - input:
      - sides: 7
      - radius: 1.05
    - status: valid
    - output: 3.016892232973511
  - Item:
    - input:
      - sides: 7
      - radius: 2
    - status: valid
    - output: 10.945640754552418
  - Item:
    - input:
      - sides: 7
      - radius: 3
    - status: valid
    - output: 24.627691697742943
  - Item:
    - input:
      - sides: 7
      - radius: 4
    - status: valid
    - output: 43.78256301820967
  - Item:
    - input:
      - sides: 8
      - radius: 1
    - status: valid
    - output: 2.8284271247461907
  - Item:
    - input:
      - sides: 8
      - radius: 1.05
    - status: valid
    - output: 3.1183409050326745
  - Item:
    - input:
      - sides: 8
      - radius: 2
    - status: valid
    - output: 11.313708498984763
  - Item:
    - input:
      - sides: 8
      - radius: 3
    - status: valid
    - output: 25.455844122715714
  - Item:
    - input:
      - sides: 8
      - radius: 4
    - status: valid
    - output: 45.25483399593905
  - Item:
    - input:
      - sides: 9
      - radius: 1
    - status: valid
    - output: 2.8925442435894273
  - Item:
    - input:
      - sides: 9
      - radius: 1.05
    - status: valid
    - output: 3.1890300285573434
  - Item:
    - input:
      - sides: 9
      - radius: 2
    - status: valid
    - output: 11.57017697435771
  - Item:
    - input:
      - sides: 9
      - radius: 3
    - status: valid
    - output: 26.03289819230484
  - Item:
    - input:
      - sides: 9
      - radius: 4
    - status: valid
    - output: 46.28070789743084
  - Item:
    - input:
      - sides: 10
      - radius: 1
    - status: valid
    - output: 2.9389262614623664
  - Item:
    - input:
      - sides: 10
      - radius: 1.05
    - status: valid
    - output: 3.240166203262258
  - Item:
    - input:
      - sides: 10
      - radius: 2
    - status: valid
    - output: 11.755705045849465
  - Item:
    - input:
      - sides: 10
      - radius: 3
    - status: valid
    - output: 26.45033635316129
  - Item:
    - input:
      - sides: 10
      - radius: 4
    - status: valid
    - output: 47.02282018339786
  - Item:
    - input:
      - sides: 11
      - radius: 1
    - status: valid
    - output: 2.9735244960057865
  - Item:
    - input:
      - sides: 11
      - radius: 1.05
    - status: valid
    - output: 3.2783107568463796
  - Item:
    - input:
      - sides: 11
      - radius: 2
    - status: valid
    - output: 11.894097984023146
  - Item:
    - input:
      - sides: 11
      - radius: 3
    - status: valid
    - output: 26.761720464052075
  - Item:
    - input:
      - sides: 11
      - radius: 4
    - status: valid
    - output: 47.576391936092584
  - Item:
    - input:
      - sides: 12
      - radius: 1
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - sides: 12
      - radius: 1.05
    - status: valid
    - output: 3.3075000000000006
  - Item:
    - input:
      - sides: 12
      - radius: 2
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - sides: 12
      - radius: 3
    - status: valid
    - output: 27.0
  - Item:
    - input:
      - sides: 12
      - radius: 4
    - status: valid
    - output: 48.0
  - Item:
    - input:
      - sides: 2
      - radius: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 13
      - radius: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 3.5
      - radius: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: true
      - radius: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: 3
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: 0
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: 0.99
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: 4.01
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: null
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: false
    - status: invalid_parameters
  - Item:
    - input:
      - sides: 6
      - radius: 3
    - status: invalid_parameters
- compute: \theta=\frac{2\pi}{n},\quad s=2R\sin(\theta/2),\quad a=R\cos(\theta/2),\quad P=ns,\quad A=\frac{Pa}{2}=\frac{nR^2}{2}\sin(2\pi/n).
- numeric tolerance: 5e-11
- invariants:
  - Use an integer side count from 3 to 12 and a positive circumradius from 1 to 4 metres. The floor is a convex planar regular polygon in Euclidean geometry; θ=2π/n is measured in radians.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Whole-number counts change at exact integer choices; physical radii can vary continuously.
- limits:
  - The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
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
  - prompt: How does a pavilion floor change when its radius or number of sides changes?
  - answer: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.
- Item:
  - prompt: What does this picture measure?
  - answer: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.

## Representations

- Item:
  - kind: geometry
  - description: The radial triangle fan, side length, perpendicular apothem and enclosed floor share equal metre axes and the same evaluated vertices.
- Item:
  - kind: graph
  - description: Area versus circumradius at the selected side count displays the same square-law scaling as the floor geometry.
- Item:
  - kind: substitution
  - description: A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.

## Applications

- Item:
  - context: Originally authored ideal design example
  - mapping: A pavilion designer marks n equally spaced vertices on a circle of radius R metres. Connecting neighboring vertices forms the floor boundary. Radial lines split the floor into equal triangles, so a change in radius moves the same vertices and a change in side count rebuilds the same triangle fan.
  - limitations: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - evidence kind: constructed_example
  - example ref: math:example:regular-polygon:case-1
- Item:
  - context: A triangular floor
  - mapping: The circumradius stays 2 metres, but the triangle reaches inward between its three vertices. Its area is 3√3, about 5.196 square metres.
  - limitations: The circle determines the vertex radius, while the straight polygon edges determine the floor area and perimeter. A is a planar area, not the enclosing circle area. The radius can change continuously; side count is discrete. Printed values and SVG coordinates are numerical approximations to the analytic geometry.
  - evidence kind: constructed_example
  - example ref: math:example:regular-polygon:case-2

## Source Refs

- source:geometry-extensions:regular-polygon

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number or geometry lesson through the existing modular host.

## Referenced source registry

- Source ID: source:geometry-extensions:regular-polygon. [Wolfram MathWorld · Regular Polygon](https://mathworld.wolfram.com/RegularPolygon.html). Locator: Equations (2), (4) and (9): side length, apothem and area of a regular convex polygon with circumradius R. The pavilion and triangulation explanations are original applications of these definitions.. Verification: Definition-level page inspected 2026-11-05. Independent mathematical and pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored pavilion scenario, coordinates and worked calculations. No source exercise, illustration or data reproduced.
