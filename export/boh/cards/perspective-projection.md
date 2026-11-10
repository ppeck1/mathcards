---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:perspective-projection", "id": "math:concept:perspective-projection", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:perspective-projection", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "76cb90a41cef26d0439aa4da8240f36cf7016026db6cf8978ba807c198e45e11"}, "purpose": "Why does the same display marker look smaller farther away?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "76cb90a41cef26d0439aa4da8240f36cf7016026db6cf8978ba807c198e45e11", "status": "draft", "title": "Pinhole perspective projection", "topics": ["mathematics", "geometry", "modeling", "pinhole perspective projection", "perspective projection"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Pinhole perspective projection

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:perspective-projection; revision 0.1.0-draft. Setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases. Expression: $w=\frac{fW}{z},\qquad m=\frac{f}{z}.$. Conditions required for a defined value (a case may test their violation): The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration. Scope: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.

## Schema Version

0.1.0

## Id

math:concept:perspective-projection

## Slug

perspective-projection

## Type

concept

## Title

Pinhole perspective projection

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

- pinhole perspective projection
- perspective projection

## Branches

- geometry
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why does the same display marker look smaller farther away?

## Meaning

In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.

## Prerequisites

- required:
  - math:concept:ratio-scale
- helpful:
  - math:concept:vector-projection
- depth:
  []

## Definition

- setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
- formal latex: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
- signature:
  - z: Positive marker depth from the pinhole, in metres
  - W: Real width of the centered marker, in metres
  - f: Distance to the virtual image plane, in metres
  - w: Projected marker width on that plane, in metres
  - m: Dimensionless image-to-real width ratio
- conditions:
  - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- domain notes: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
- proof status: Definition-level sources and originally derived bounded calculations; independent review pending.
- source refs:
  - source:spatial-insights:camera

## Grammar

- pronunciation: Pinhole perspective projection
- expression latex: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
- formation rule: In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.
- precedence: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
- symbols:
  - Item:
    - token: z
    - role: Positive marker depth from the pinhole, in metres
    - type: Locally declared quantity or selector
  - Item:
    - token: W
    - role: Real width of the centered marker, in metres
    - type: Locally declared quantity or selector
  - Item:
    - token: f
    - role: Distance to the virtual image plane, in metres
    - type: Locally declared quantity or selector
  - Item:
    - token: w
    - role: Projected marker width on that plane, in metres
    - type: Locally declared quantity or selector
  - Item:
    - token: m
    - role: Dimensionless image-to-real width ratio
    - type: Locally declared quantity or selector
- ast:
  - id: ast:perspective-projection:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:depth
      - kind: variable
      - type: Declared numeric input
      - symbol: z
      - scope ref: scope:perspective-projection
    - Item:
      - id: n:width
      - kind: variable
      - type: Declared numeric input
      - symbol: W
      - scope ref: scope:perspective-projection
    - Item:
      - id: n:focal
      - kind: variable
      - type: Declared numeric input
      - symbol: f
      - scope ref: scope:perspective-projection
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded spatial construction
      - ref: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:depth
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:width
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-1
      - argument: n:focal
  - scopes:
    - Item:
      - id: scope:perspective-projection
      - kind: modelExpression
      - free variables:
        - z
        - W
        - f
      - external parameters:
        - The stated Euclidean model and fixed domain
      - domain condition: The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- parse errors:
  - Item:
    - input: Use a fractional categorical selector or omit the model conditions
    - status: model mismatch
    - reason: The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
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
  - claim: In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.
  - conditions: The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - derivation: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:perspective-projection:case-1

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
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The stated ratio, geometry and physical units supply the calculation.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:vector-projection
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The stated ratio, geometry and physical units supply the calculation.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:perspective-projection:case-1
  - title: A display four metres away
  - role: applied_model
  - question: Why does the same display marker look smaller farther away?
  - setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
  - assumptions:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - inputs:
    - depth: 4
    - width: 2
    - focal: 1
  - steps:
    - Item:
      - index: 1
      - expression: z = 4; W = 2; f = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
      - reason: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
    - Item:
      - index: 3
      - expression: w ≈ 0.5 m
      - reason: At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.
  - result:
    - approximate: 0.5
  - interpretation: At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.
  - independent check:
    - method: Intersect two rational parametric endpoint rays with the plane z=f and subtract the resulting image coordinates.
    - expected: 0.5
  - limits: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - preset:
    - depth: 4
    - width: 2
    - focal: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- Item:
  - id: math:example:perspective-projection:case-2
  - title: Double the distance
  - role: applied_model
  - question: Why does the same display marker look smaller farther away?
  - setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
  - assumptions:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - inputs:
    - depth: 8
    - width: 2
    - focal: 1
  - steps:
    - Item:
      - index: 1
      - expression: z = 8; W = 2; f = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
      - reason: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
    - Item:
      - index: 3
      - expression: w ≈ 0.25 m
      - reason: Doubling depth from four to eight metres halves image width from 0.5 to 0.25 m without changing the marker.
  - result:
    - approximate: 0.25
  - interpretation: Doubling depth from four to eight metres halves image width from 0.5 to 0.25 m without changing the marker.
  - independent check:
    - method: Intersect two rational parametric endpoint rays with the plane z=f and subtract the resulting image coordinates.
    - expected: 0.25
  - limits: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - preset:
    - depth: 8
    - width: 2
    - focal: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- Item:
  - id: math:example:perspective-projection:case-3
  - title: Double the real marker
  - role: applied_model
  - question: Why does the same display marker look smaller farther away?
  - setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
  - assumptions:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - inputs:
    - depth: 4
    - width: 4
    - focal: 1
  - steps:
    - Item:
      - index: 1
      - expression: z = 4; W = 4; f = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
      - reason: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
    - Item:
      - index: 3
      - expression: w ≈ 1.0 m
      - reason: At the same depth and plane position, doubling the real marker width doubles its image width to one metre.
  - result:
    - approximate: 1.0
  - interpretation: At the same depth and plane position, doubling the real marker width doubles its image width to one metre.
  - independent check:
    - method: Intersect two rational parametric endpoint rays with the plane z=f and subtract the resulting image coordinates.
    - expected: 1.0
  - limits: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - preset:
    - depth: 4
    - width: 4
    - focal: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- Item:
  - id: math:example:perspective-projection:case-4
  - title: Move the image plane
  - role: applied_model
  - question: Why does the same display marker look smaller farther away?
  - setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
  - assumptions:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - inputs:
    - depth: 4
    - width: 2
    - focal: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: z = 4; W = 2; f = 1.5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
      - reason: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
    - Item:
      - index: 3
      - expression: w ≈ 0.75 m
      - reason: Moving the virtual plane to 1.5 m increases image width to 0.75 m. This changes projection scale, not optical focus.
  - result:
    - approximate: 0.75
  - interpretation: Moving the virtual plane to 1.5 m increases image width to 0.75 m. This changes projection scale, not optical focus.
  - independent check:
    - method: Intersect two rational parametric endpoint rays with the plane z=f and subtract the resulting image coordinates.
    - expected: 0.75
  - limits: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - preset:
    - depth: 4
    - width: 2
    - focal: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
- Item:
  - id: math:example:perspective-projection:case-5
  - title: Small distant marker
  - role: applied_model
  - question: Why does the same display marker look smaller farther away?
  - setting: A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.
  - assumptions:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - inputs:
    - depth: 10
    - width: 1
    - focal: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: z = 10; W = 1; f = 0.5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
      - reason: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.
    - Item:
      - index: 3
      - expression: w ≈ 0.05 m
      - reason: A one-metre marker at ten metres depth projects to 0.05 m on the virtual plane half a metre in front of the pinhole.
  - result:
    - approximate: 0.05
  - interpretation: A one-metre marker at ten metres depth projects to 0.05 m on the virtual plane half a metre in front of the pinhole.
  - independent check:
    - method: Intersect two rational parametric endpoint rays with the plane z=f and subtract the resulting image coordinates.
    - expected: 0.05
  - limits: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - preset:
    - depth: 10
    - width: 1
    - focal: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.

## Interactive

- component id: component:perspective-projection
- renderer id: perspective-projection-visual-model
- renderer version: 1
- model id: perspective-projection-visual-model
- model revision: 1
- expression id: ast:perspective-projection:expression
- interaction status: implemented
- description: In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.
- controls:
  - Item:
    - id: depth
    - type: number
    - default: 4
    - min: 2
    - max: 10
    - step: 0.05
  - Item:
    - id: width
    - type: number
    - default: 2
    - min: 1
    - max: 4
    - step: 0.05
  - Item:
    - id: focal
    - type: number
    - default: 1
    - min: 0.5
    - max: 1.5
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - depth: 2
      - width: 1
      - focal: 0.5
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - depth: 2
      - width: 4
      - focal: 1.5
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - depth: 10
      - width: 1
      - focal: 0.5
    - status: valid
    - output: 0.05
  - Item:
    - input:
      - depth: 10
      - width: 4
      - focal: 1.5
    - status: valid
    - output: 0.6
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: 1
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - depth: 8
      - width: 2
      - focal: 1
    - status: valid
    - output: 0.25
  - Item:
    - input:
      - depth: 4
      - width: 4
      - focal: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: 1.5
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - depth: 3.25
      - width: 1.25
      - focal: 0.75
    - status: valid
    - output: 0.28846153846153844
  - Item:
    - input:
      - depth: 9.75
      - width: 3.75
      - focal: 1.25
    - status: valid
    - output: 0.4807692307692308
  - Item:
    - input:
      - depth: 2.05
      - width: 2
      - focal: 0.55
    - status: valid
    - output: 0.5365853658536586
  - Item:
    - input:
      - depth: 6
      - width: 3
      - focal: 1
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - depth: 1.9
      - width: 2
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 10.1
      - width: 2
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: true
      - width: 2
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: null
      - width: 2
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 1
      - width: 2
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 0.9
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 4.1
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: true
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: null
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 1
      - focal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: 1.6
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: true
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: null
    - status: invalid_parameters
  - Item:
    - input:
      - depth: 4
      - width: 2
      - focal: 1
    - status: invalid_parameters
- compute: w=\frac{fW}{z},\qquad m=\frac{f}{z}.
- numeric tolerance: 5e-11
- invariants:
  - The marker is centered, straight and parallel to the image plane. Use depth 2–10 m, real width 1–4 m and virtual image-plane distance 0.5–1.5 m, so the marker always lies beyond the plane. This point-pinhole model has no lens, finite aperture, sensor bounds or pixel calibration.
  - Story, formula, measured Geometry and Graph use the same evaluated state.
  - Categorical and integer choices stay discrete; physical lengths may change continuously.
- limits:
  - Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
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
  - prompt: Why does the same display marker look smaller farther away?
  - answer: In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.
- Item:
  - prompt: What does this view measure?
  - answer: A fixed equal-metre side section shows real and virtual-image segments joined by the same endpoint rays through the pinhole.

## Representations

- Item:
  - kind: geometry
  - description: A fixed equal-metre side section shows real and virtual-image segments joined by the same endpoint rays through the pinhole.
- Item:
  - kind: graph
  - description: Image width versus depth follows inverse depth at fixed real width and plane distance. Both axes retain physical metre units.
- Item:
  - kind: substitution
  - description: The ray from the pinhole to either endpoint intersects the virtual plane at the fraction f/z of its full depth. Its sideways displacement scales by the same factor. Subtract the two projected endpoint coordinates, f(W/2)/z and −f(W/2)/z, to obtain fW/z. Doubling depth halves this image width while leaving the real marker unchanged.

## Applications

- Item:
  - context: A display four metres away
  - mapping: At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.
  - limitations: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - evidence kind: constructed_example
  - example ref: math:example:perspective-projection:case-1
- Item:
  - context: Double the distance
  - mapping: Doubling depth from four to eight metres halves image width from 0.5 to 0.25 m without changing the marker.
  - limitations: Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.
  - evidence kind: constructed_example
  - example ref: math:example:perspective-projection:case-2

## Source Refs

- source:spatial-insights:camera

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this original bounded spatial lesson through the existing shared host.

## Referenced source registry

- Source ID: source:spatial-insights:camera. [Stanford CS231A · Camera Models, Kenji Hata and Silvio Savarese](https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf). Locator: Section 2, pages 2–3, equation (1): virtual image plane and pinhole coordinates (fx/z, fy/z). The marker endpoints and width calculation are original applications.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.
