---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:sphere-measurement", "id": "math:concept:sphere-measurement", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sphere-measurement", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "52ca676aeacbf233faf1bb3e48cdeee1734403996b3d4425417a577c36c6f8e6"}, "purpose": "How much does a full spherical tank hold as its radius grows?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "52ca676aeacbf233faf1bb3e48cdeee1734403996b3d4425417a577c36c6f8e6", "status": "draft", "title": "Sphere surface and volume", "topics": ["mathematics", "geometry", "measurement", "sphere surface and volume"], "type": "reference", "updated": "2026-11-05T00:00:00Z", "version": "0.1.0-draft"}
---

# Sphere surface and volume

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:sphere-measurement; revision 0.1.0-draft. Setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit. Expression: $d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.$. Conditions required for a defined value (a case may test their violation): The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball. Scope: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.

## Schema Version

0.1.0

## Id

math:concept:sphere-measurement

## Slug

sphere-measurement

## Type

concept

## Title

Sphere surface and volume

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

- sphere surface and volume

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How much does a full spherical tank hold as its radius grows?

## Meaning

A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.

## Prerequisites

- required:
  - math:concept:ratio-scale
  - math:concept:exponentiation
- helpful:
  - math:concept:pythagorean-theorem
- depth:
  - math:concept:sphere-manifold
  - math:concept:integral-accumulation

## Definition

- setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
- formal latex: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
- signature:
  - r: Inner radius from tank center to the spherical wall, in metres
  - d: Diameter through the tank center, in metres
  - A: Complete spherical surface area, in square metres
  - V: Enclosed volume of the full spherical tank, in cubic metres
  - π: Euclidean circle constant pi
- conditions:
  - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- domain notes: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
- proof status: Definition-level source and originally authored finite calculations; independent mathematical review pending.
- source refs:
  - source:geometry-extensions:sphere-measurement

## Grammar

- pronunciation: Sphere surface and volume
- expression latex: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
- formation rule: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
- precedence: Square the radius for surface area and cube it for volume before applying their respective constant factors.
- symbols:
  - Item:
    - token: r
    - role: Inner radius from tank center to the spherical wall, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Diameter through the tank center, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: A
    - role: Complete spherical surface area, in square metres
    - type: Locally declared quantity or constant
  - Item:
    - token: V
    - role: Enclosed volume of the full spherical tank, in cubic metres
    - type: Locally declared quantity or constant
  - Item:
    - token: π
    - role: Euclidean circle constant pi
    - type: Locally declared quantity or constant
- ast:
  - id: ast:sphere-measurement:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared numeric input
      - symbol: r
      - scope ref: scope:sphere-measurement
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded integer or geometric rule
      - ref: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:radius
  - scopes:
    - Item:
      - id: scope:sphere-measurement
      - kind: modelExpression
      - free variables:
        - r
      - external parameters:
        - Euclidean geometry and the circle constant π
      - domain condition: The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- parse errors:
  - Item:
    - input: Use a fractional count or omit the declared geometric assumptions
    - status: model mismatch
    - reason: The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- ast coverage: Typed application outline of the stated bounded construction; the formal expression declares the complete mathematical rule.
- output symbol bindings:
  - r: radius
  - d: diameter
  - A: surfaceArea
  - V: output
  - π: pi

## Properties

- Item:
  - claim: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
  - conditions: The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - derivation: The sphere surface area is four times its equatorial disk area πr². Integrating circular cross-sections from one pole to the other gives the enclosed volume 4πr³/3. As an independent numerical check, integrate the disk areas π(r²−x²) with Simpson quadrature, which is exact for this quadratic cross-section profile apart from floating-point rounding. Doubling r multiplies surface area by four and volume by eight.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:sphere-measurement:case-1

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
  - target: math:concept:sphere-manifold
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: The sphere surface can be studied by local coordinates; the enclosed volume is a separate quantity.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Uniform length scaling changes area quadratically and volume cubically.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:integral-accumulation
  - type: supports
  - conditions: Use the stated domains, units and interpretation in both lessons.
  - reason: Circular cross-sections accumulate to the full enclosed ball volume.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:sphere-measurement:case-1
  - title: A two-metre inner radius
  - role: applied_model
  - question: How much does a full spherical tank hold as its radius grows?
  - setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - assumptions:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - inputs:
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: r = 2
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
      - reason: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
    - Item:
      - index: 3
      - expression: V ≈ 33.510321638291124 m³
      - reason: The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.
  - result:
    - approximate: 33.510321638291124
  - interpretation: The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.
  - independent check:
    - method: Independently integrate the quadratic disk-area profile across the diameter using Simpson quadrature and compare doubling ratios; check surface area from four equatorial disks.
    - expected: 33.510321638291124
  - limits: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - preset:
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- Item:
  - id: math:example:sphere-measurement:case-2
  - title: A one-metre reference
  - role: applied_model
  - question: How much does a full spherical tank hold as its radius grows?
  - setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - assumptions:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - inputs:
    - radius: 1
  - steps:
    - Item:
      - index: 1
      - expression: r = 1
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
      - reason: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
    - Item:
      - index: 3
      - expression: V ≈ 4.1887902047863905 m³
      - reason: The surface area is 4π square metres and the full volume is 4π/3 cubic metres. Their numerical formulas refer to different dimensions.
  - result:
    - approximate: 4.1887902047863905
  - interpretation: The surface area is 4π square metres and the full volume is 4π/3 cubic metres. Their numerical formulas refer to different dimensions.
  - independent check:
    - method: Independently integrate the quadratic disk-area profile across the diameter using Simpson quadrature and compare doubling ratios; check surface area from four equatorial disks.
    - expected: 4.1887902047863905
  - limits: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - preset:
    - radius: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- Item:
  - id: math:example:sphere-measurement:case-3
  - title: Double the two-metre radius
  - role: applied_model
  - question: How much does a full spherical tank hold as its radius grows?
  - setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - assumptions:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - inputs:
    - radius: 4
  - steps:
    - Item:
      - index: 1
      - expression: r = 4
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
      - reason: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
    - Item:
      - index: 3
      - expression: V ≈ 268.082573106329 m³
      - reason: Compared with radius 2 metres, the diameter doubles, surface area quadruples and full capacity grows eightfold to about 268.083 cubic metres.
  - result:
    - approximate: 268.082573106329
  - interpretation: Compared with radius 2 metres, the diameter doubles, surface area quadruples and full capacity grows eightfold to about 268.083 cubic metres.
  - independent check:
    - method: Independently integrate the quadratic disk-area profile across the diameter using Simpson quadrature and compare doubling ratios; check surface area from four equatorial disks.
    - expected: 268.082573106329
  - limits: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - preset:
    - radius: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- Item:
  - id: math:example:sphere-measurement:case-4
  - title: A small spherical vessel
  - role: applied_model
  - question: How much does a full spherical tank hold as its radius grows?
  - setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - assumptions:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - inputs:
    - radius: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: r = 0.25
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
      - reason: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
    - Item:
      - index: 3
      - expression: V ≈ 0.06544984694978735 m³
      - reason: The diameter is 0.5 metres. The full capacity is π/48, about 0.06545 cubic metres; a small radius still requires a cubic capacity calculation.
  - result:
    - approximate: 0.06544984694978735
  - interpretation: The diameter is 0.5 metres. The full capacity is π/48, about 0.06545 cubic metres; a small radius still requires a cubic capacity calculation.
  - independent check:
    - method: Independently integrate the quadratic disk-area profile across the diameter using Simpson quadrature and compare doubling ratios; check surface area from four equatorial disks.
    - expected: 0.06544984694978735
  - limits: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - preset:
    - radius: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
- Item:
  - id: math:example:sphere-measurement:case-5
  - title: The upper radius boundary
  - role: applied_model
  - question: How much does a full spherical tank hold as its radius grows?
  - setting: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - assumptions:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - inputs:
    - radius: 5
  - steps:
    - Item:
      - index: 1
      - expression: r = 5
      - reason: Place the selected inputs in the stated construction.
    - Item:
      - index: 2
      - expression: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
      - reason: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
    - Item:
      - index: 3
      - expression: V ≈ 523.5987755982989 m³
      - reason: At radius 5 metres the ideal surface area is 100π square metres and full capacity is 500π/3, about 523.599 cubic metres.
  - result:
    - approximate: 523.5987755982989
  - interpretation: At radius 5 metres the ideal surface area is 100π square metres and full capacity is 500π/3, about 523.599 cubic metres.
  - independent check:
    - method: Independently integrate the quadratic disk-area profile across the diameter using Simpson quadrature and compare doubling ratios; check surface area from four equatorial disks.
    - expected: 523.5987755982989
  - limits: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - preset:
    - radius: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.

## Interactive

- component id: component:sphere-measurement
- renderer id: sphere-measurement-visual-model
- renderer version: 1
- model id: sphere-measurement-visual-model
- model revision: 1
- expression id: ast:sphere-measurement:expression
- interaction status: implemented
- description: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
- controls:
  - Item:
    - id: radius
    - type: number
    - default: 2
    - min: 0.25
    - max: 5
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - radius: 0.25
    - status: valid
    - output: 0.06544984694978735
  - Item:
    - input:
      - radius: 0.35
    - status: valid
    - output: 0.17959438003021647
  - Item:
    - input:
      - radius: 0.45
    - status: valid
    - output: 0.3817035074111599
  - Item:
    - input:
      - radius: 0.55
    - status: valid
    - output: 0.6969099703213361
  - Item:
    - input:
      - radius: 0.65
    - status: valid
    - output: 1.1503465099894628
  - Item:
    - input:
      - radius: 0.75
    - status: valid
    - output: 1.7671458676442586
  - Item:
    - input:
      - radius: 0.85
    - status: valid
    - output: 2.5724407845144417
  - Item:
    - input:
      - radius: 0.95
    - status: valid
    - output: 3.591364001828732
  - Item:
    - input:
      - radius: 1.05
    - status: valid
    - output: 4.849048260815846
  - Item:
    - input:
      - radius: 1.15
    - status: valid
    - output: 6.3706263027045
  - Item:
    - input:
      - radius: 1.25
    - status: valid
    - output: 8.18123086872342
  - Item:
    - input:
      - radius: 1.35
    - status: valid
    - output: 10.305994700101317
  - Item:
    - input:
      - radius: 1.45
    - status: valid
    - output: 12.770050538066913
  - Item:
    - input:
      - radius: 1.55
    - status: valid
    - output: 15.598531123848923
  - Item:
    - input:
      - radius: 1.65
    - status: valid
    - output: 18.816569198676063
  - Item:
    - input:
      - radius: 1.75
    - status: valid
    - output: 22.449297503777064
  - Item:
    - input:
      - radius: 1.85
    - status: valid
    - output: 26.521848780380633
  - Item:
    - input:
      - radius: 1.95
    - status: valid
    - output: 31.05935576971549
  - Item:
    - input:
      - radius: 2.05
    - status: valid
    - output: 36.086951213010344
  - Item:
    - input:
      - radius: 2.15
    - status: valid
    - output: 41.629767851493945
  - Item:
    - input:
      - radius: 2.25
    - status: valid
    - output: 47.71293842639499
  - Item:
    - input:
      - radius: 2.35
    - status: valid
    - output: 54.361595678942194
  - Item:
    - input:
      - radius: 2.45
    - status: valid
    - output: 61.600872350364284
  - Item:
    - input:
      - radius: 2.55
    - status: valid
    - output: 69.45590118188994
  - Item:
    - input:
      - radius: 2.65
    - status: valid
    - output: 77.95181491474794
  - Item:
    - input:
      - radius: 2.75
    - status: valid
    - output: 87.11374629016696
  - Item:
    - input:
      - radius: 2.85
    - status: valid
    - output: 96.96682804937576
  - Item:
    - input:
      - radius: 2.95
    - status: valid
    - output: 107.53619293360303
  - Item:
    - input:
      - radius: 3.05
    - status: valid
    - output: 118.84697368407745
  - Item:
    - input:
      - radius: 3.15
    - status: valid
    - output: 130.92430304202784
  - Item:
    - input:
      - radius: 3.25
    - status: valid
    - output: 143.79331374868283
  - Item:
    - input:
      - radius: 3.35
    - status: valid
    - output: 157.47913854527118
  - Item:
    - input:
      - radius: 3.45
    - status: valid
    - output: 172.00691017302157
  - Item:
    - input:
      - radius: 3.55
    - status: valid
    - output: 187.4017613731627
  - Item:
    - input:
      - radius: 3.65
    - status: valid
    - output: 203.6888248869234
  - Item:
    - input:
      - radius: 3.75
    - status: valid
    - output: 220.89323345553234
  - Item:
    - input:
      - radius: 3.85
    - status: valid
    - output: 239.04011982021822
  - Item:
    - input:
      - radius: 3.95
    - status: valid
    - output: 258.1546167222097
  - Item:
    - input:
      - radius: 4.05
    - status: valid
    - output: 278.26185690273553
  - Item:
    - input:
      - radius: 4.15
    - status: valid
    - output: 299.3869731030246
  - Item:
    - input:
      - radius: 4.25
    - status: valid
    - output: 321.55509806430524
  - Item:
    - input:
      - radius: 4.35
    - status: valid
    - output: 344.79136452780654
  - Item:
    - input:
      - radius: 4.45
    - status: valid
    - output: 369.1209052347572
  - Item:
    - input:
      - radius: 4.55
    - status: valid
    - output: 394.56885292638566
  - Item:
    - input:
      - radius: 4.65
    - status: valid
    - output: 421.16034034392084
  - Item:
    - input:
      - radius: 4.75
    - status: valid
    - output: 448.92050022859144
  - Item:
    - input:
      - radius: 4.85
    - status: valid
    - output: 477.87446532162613
  - Item:
    - input:
      - radius: 4.95
    - status: valid
    - output: 508.0473683642538
  - Item:
    - input:
      - radius: 5
    - status: valid
    - output: 523.5987755982989
  - Item:
    - input:
      - radius: 0
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 0.24
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 5.01
    - status: invalid_parameters
  - Item:
    - input:
      - radius: null
    - status: invalid_parameters
  - Item:
    - input:
      - radius: true
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 2
    - status: invalid_parameters
- compute: d=2r,\quad A=4\pi r^2,\quad V=\frac{4}{3}\pi r^3.
- numeric tolerance: 5e-11
- invariants:
  - The radius is positive, from 0.25 to 5 metres. The tank is exactly spherical and full. Surface area measures the complete ideal inner surface; volume measures its enclosed ball.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Whole-number counts change at exact integer choices; physical radii can vary continuously.
- limits:
  - The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
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
  - prompt: How much does a full spherical tank hold as its radius grows?
  - answer: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.
- Item:
  - prompt: What does this picture measure?
  - answer: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.

## Representations

- Item:
  - kind: geometry
  - description: The cutaway sphere carries its measured radius, diameter and equatorial disk; complete surface and enclosed volume have separate dimensional readouts.
- Item:
  - kind: graph
  - description: Full tank volume versus radius shows the same cubic growth as the enclosing geometry, using cubic metres on its vertical scale.
- Item:
  - kind: substitution
  - description: A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.

## Applications

- Item:
  - context: Originally authored ideal design example
  - mapping: An ideal full spherical tank has inner radius r metres. A cutaway view shows the center-to-wall radius, the diameter and the equatorial disk. Follow a radius change into the complete curved surface area and the full enclosed volume, with each quantity labeled in its own physical unit.
  - limitations: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-measurement:case-1
- Item:
  - context: A one-metre reference
  - mapping: The surface area is 4π square metres and the full volume is 4π/3 cubic metres. Their numerical formulas refer to different dimensions.
  - limitations: The equatorial disk is a cross-section with area πr²; it is neither the sphere surface area nor its volume. Perspective and projection are illustrations, while all values come from the analytic Euclidean formulas. Wall thickness, supports, filling depth and practical construction are outside this full-tank model.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-measurement:case-2

## Source Refs

- source:geometry-extensions:sphere-measurement

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number or geometry lesson through the existing modular host.

## Referenced source registry

- Source ID: source:geometry-extensions:sphere-measurement. [Wolfram MathWorld · Sphere](https://mathworld.wolfram.com/Sphere.html). Locator: Radius and diameter, surface area 4πr², and enclosed volume 4πr³/3 for a Euclidean sphere. The full spherical tank and its comparison of surface and volume are original constructions.. Verification: Definition-level page inspected 2026-11-05. Independent mathematical and pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored ideal tank scenario and dimensional comparisons. No source exercise, illustration or data reproduced.
