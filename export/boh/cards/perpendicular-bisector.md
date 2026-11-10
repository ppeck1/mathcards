---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:perpendicular-bisector", "id": "math:concept:perpendicular-bisector", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:perpendicular-bisector", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6056c3af49bb71de677015a19e28fa96d21d760cce33dd66ce183fcbfb0d4797"}, "purpose": "How can two equal compass circles find the midway line?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6056c3af49bb71de677015a19e28fa96d21d760cce33dd66ce183fcbfb0d4797", "status": "draft", "title": "Perpendicular bisector construction", "topics": ["mathematics", "geometry", "measurement", "perpendicular bisector construction", "perpendicular bisector"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Perpendicular bisector construction

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:perpendicular-bisector; revision 0.1.0-draft. Setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place. Expression: $h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.$. Conditions required for a defined value (a case may test their violation): Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections. Scope: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.

## Schema Version

0.1.0

## Id

math:concept:perpendicular-bisector

## Slug

perpendicular-bisector

## Type

concept

## Title

Perpendicular bisector construction

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

- perpendicular bisector construction
- perpendicular bisector

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can two equal compass circles find the midway line?

## Meaning

A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.

## Prerequisites

- required:
  - math:concept:pythagorean-theorem
- helpful:
  - math:concept:triangle-measurement
  - math:concept:regular-polygon
- depth:
  []

## Definition

- setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
- formal latex: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
- signature:
  - r: Common compass-circle radius in metres
  - d: Distance between the two stakes in metres
  - h: Nonnegative intersection height above the stake line, in metres
  - ℓ: Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency
- conditions:
  - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- domain notes: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
- proof status: Definition-level source and original derivation; independent review pending.
- source refs:
  - source:plane-geometry:perpendicular-bisector

## Grammar

- pronunciation: Perpendicular bisector construction
- expression latex: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
- formation rule: A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.
- precedence: Substitute the declared lengths and positive scale before evaluating squares, products and square roots.
- symbols:
  - Item:
    - token: r
    - role: Common compass-circle radius in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Distance between the two stakes in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: h
    - role: Nonnegative intersection height above the stake line, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: ℓ
    - role: Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency
    - type: Locally declared quantity or constant
- ast:
  - id: ast:perpendicular-bisector:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared numeric input
      - symbol: r
      - scope ref: scope:perpendicular-bisector
    - Item:
      - id: n:distance
      - kind: variable
      - type: Declared numeric input
      - symbol: d
      - scope ref: scope:perpendicular-bisector
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded planar geometry rule
      - ref: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded geometric model value
      - function: n:rule
      - argument: n:radius
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded geometric model value
      - function: n:partial-0
      - argument: n:distance
  - scopes:
    - Item:
      - id: scope:perpendicular-bisector
      - kind: modelExpression
      - free variables:
        - r
        - d
      - external parameters:
        - Euclidean planar geometry
      - domain condition: Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- parse errors:
  - Item:
    - input: Use a sloping edge as the perpendicular height or omit a declared domain condition
    - status: model mismatch
    - reason: Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- ast coverage: Typed application outline of the stated construction; the formal expression declares the complete rule.
- output symbol bindings:
  - r: radius
  - d: distance
  - h: height
  - ℓ: output

## Properties

- Item:
  - claim: A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.
  - conditions: Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - derivation: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:perpendicular-bisector:case-1

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
- Item:
  - target: math:concept:regular-polygon
  - type: supports
  - conditions: Retain the declared domains and measurement units.
  - reason: The stated geometry connects these measured lengths, ratios or enclosed areas.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:perpendicular-bisector:case-1
  - title: A six-metre compass diameter
  - role: applied_model
  - question: How can two equal compass circles find the midway line?
  - setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
  - assumptions:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - inputs:
    - radius: 3
    - distance: 4
  - steps:
    - Item:
      - index: 1
      - expression: r = 3; d = 4
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
      - reason: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
    - Item:
      - index: 3
      - expression: ℓ ≈ 4.47213595499958 m
      - reason: Each intersection is√5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.
  - result:
    - approximate: 4.47213595499958
  - interpretation: Each intersection is√5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 4.47213595499958
  - limits: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - preset:
    - radius: 3
    - distance: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- Item:
  - id: math:example:perpendicular-bisector:case-2
  - title: The tangent boundary
  - role: applied_model
  - question: How can two equal compass circles find the midway line?
  - setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
  - assumptions:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - inputs:
    - radius: 2
    - distance: 4
  - steps:
    - Item:
      - index: 1
      - expression: r = 2; d = 4
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
      - reason: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
    - Item:
      - index: 3
      - expression: ℓ ≈ 0.0 m
      - reason: Each radius equals half the stake distance. The circles have one midpoint contact, separation zero, and no line can be drawn through two distinct intersections.
  - result:
    - approximate: 0.0
  - interpretation: Each radius equals half the stake distance. The circles have one midpoint contact, separation zero, and no line can be drawn through two distinct intersections.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 0.0
  - limits: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - preset:
    - radius: 2
    - distance: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- Item:
  - id: math:example:perpendicular-bisector:case-3
  - title: Open the compass wider
  - role: applied_model
  - question: How can two equal compass circles find the midway line?
  - setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
  - assumptions:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - inputs:
    - radius: 4
    - distance: 4
  - steps:
    - Item:
      - index: 1
      - expression: r = 4; d = 4
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
      - reason: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
    - Item:
      - index: 3
      - expression: ℓ ≈ 6.928203230275509 m
      - reason: The stakes stay fixed, but the intersection separation grows to 4√3, about 6.928 metres. The bisector line itself stays fixed.
  - result:
    - approximate: 6.928203230275509
  - interpretation: The stakes stay fixed, but the intersection separation grows to 4√3, about 6.928 metres. The bisector line itself stays fixed.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 6.928203230275509
  - limits: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - preset:
    - radius: 4
    - distance: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- Item:
  - id: math:example:perpendicular-bisector:case-4
  - title: Bring the stakes closer
  - role: applied_model
  - question: How can two equal compass circles find the midway line?
  - setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
  - assumptions:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - inputs:
    - radius: 3
    - distance: 2
  - steps:
    - Item:
      - index: 1
      - expression: r = 3; d = 2
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
      - reason: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
    - Item:
      - index: 3
      - expression: ℓ ≈ 5.656854249492381 m
      - reason: The shared circles have intersection height√8 and separation 4√2, about 5.657 metres.
  - result:
    - approximate: 5.656854249492381
  - interpretation: The shared circles have intersection height√8 and separation 4√2, about 5.657 metres.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 5.656854249492381
  - limits: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - preset:
    - radius: 3
    - distance: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
- Item:
  - id: math:example:perpendicular-bisector:case-5
  - title: The widest available pair of points
  - role: applied_model
  - question: How can two equal compass circles find the midway line?
  - setting: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.
  - assumptions:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - inputs:
    - radius: 4
    - distance: 2
  - steps:
    - Item:
      - index: 1
      - expression: r = 4; d = 2
      - reason: Set the chosen measurements in the geometric model.
    - Item:
      - index: 2
      - expression: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
      - reason: Place stakes at(−d/2,0) and(d/2,0). Subtracting their equal-radius circle equations gives 2 dx=0, hence x=0 because d>0. Substitute this midpoint coordinate to get y²=r²−d²/4. Positive height gives the two points(0,h) and(0,−h); height zero gives just one point.
    - Item:
      - index: 3
      - expression: ℓ ≈ 7.745966692414834 m
      - reason: The height is√15 and separation 2√15, about 7.746 metres. Both intersections remain equally far from the two stakes.
  - result:
    - approximate: 7.745966692414834
  - interpretation: The height is√15 and separation 2√15, about 7.746 metres. Both intersections remain equally far from the two stakes.
  - independent check:
    - method: Independent coordinate shoelace and distance calculations, or a bisection solution of equal-distance equations; compare with geometric invariants.
    - expected: 7.745966692414834
  - limits: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - preset:
    - radius: 4
    - distance: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.

## Interactive

- component id: component:perpendicular-bisector
- renderer id: perpendicular-bisector-visual-model
- renderer version: 1
- model id: perpendicular-bisector-visual-model
- model revision: 1
- expression id: ast:perpendicular-bisector:expression
- interaction status: implemented
- description: A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.
- controls:
  - Item:
    - id: radius
    - type: number
    - default: 3
    - min: 2
    - max: 4
    - step: 0.025
  - Item:
    - id: distance
    - type: number
    - default: 4
    - min: 2
    - max: 4
    - step: 0.025
- expected cases:
  - Item:
    - input:
      - radius: 2
      - distance: 4
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - radius: 2
      - distance: 2
    - status: valid
    - output: 3.4641016151377544
  - Item:
    - input:
      - radius: 2.025
      - distance: 4
    - status: valid
    - output: 0.6344288770224749
  - Item:
    - input:
      - radius: 3
      - distance: 4
    - status: valid
    - output: 4.47213595499958
  - Item:
    - input:
      - radius: 4
      - distance: 4
    - status: valid
    - output: 6.928203230275509
  - Item:
    - input:
      - radius: 3
      - distance: 2
    - status: valid
    - output: 5.656854249492381
  - Item:
    - input:
      - radius: 4
      - distance: 2
    - status: valid
    - output: 7.745966692414834
  - Item:
    - input:
      - radius: 2.5
      - distance: 3
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - radius: 3.5
      - distance: 3.5
    - status: valid
    - output: 6.06217782649107
  - Item:
    - input:
      - radius: 4
      - distance: 3
    - status: valid
    - output: 7.416198487095663
  - Item:
    - input:
      - radius: 2
      - distance: 3
    - status: valid
    - output: 2.6457513110645907
  - Item:
    - input:
      - radius: 3
      - distance: 4
    - status: valid
    - output: 4.47213595499958
  - Item:
    - input:
      - radius: 2
      - distance: 4
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - radius: 4
      - distance: 4
    - status: valid
    - output: 6.928203230275509
  - Item:
    - input:
      - radius: 3
      - distance: 2
    - status: valid
    - output: 5.656854249492381
  - Item:
    - input:
      - radius: 4
      - distance: 2
    - status: valid
    - output: 7.745966692414834
  - Item:
    - input:
      - radius: 1.99
      - distance: 4
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 4.01
      - distance: 4
    - status: invalid_parameters
  - Item:
    - input:
      - radius: true
      - distance: 4
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 2
      - distance: 4
    - status: invalid_parameters
  - Item:
    - input:
      - radius: null
      - distance: 4
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 3
      - distance: 1.99
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 3
      - distance: 4.01
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 3
      - distance: true
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 3
      - distance: 2
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 3
      - distance: null
    - status: invalid_parameters
- compute: h=\sqrt{r^2-d^2/4},\quad \ell=2h,\quad r\ge d/2.
- numeric tolerance: 5e-11
- invariants:
  - Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections.
  - Story, calculation, Geometry and Graph evaluate the same state.
  - Fixed equal physical scales preserve measured shape and growth.
- limits:
  - This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
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
  - prompt: How can two equal compass circles find the midway line?
  - answer: A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.
- Item:
  - prompt: What does the shape measure?
  - answer: A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.

## Representations

- Item:
  - kind: geometry
  - description: Measured lengths and enclosed shapes on fixed equal metre axes.
- Item:
  - kind: graph
  - description: The primary output against its first input on fixed bounds, with other inputs held fixed.
- Item:
  - kind: substitution
  - description: A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.

## Applications

- Item:
  - context: A six-metre compass diameter
  - mapping: Each intersection is√5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.
  - limitations: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - evidence kind: constructed_example
  - example ref: math:example:perpendicular-bisector:case-1
- Item:
  - context: The tangent boundary
  - mapping: Each radius equals half the stake distance. The circles have one midpoint contact, separation zero, and no line can be drawn through two distinct intersections.
  - limitations: This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.
  - evidence kind: constructed_example
  - example ref: math:example:perpendicular-bisector:case-2

## Source Refs

- source:plane-geometry:perpendicular-bisector

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded plane-geometry module, connected story and quantitative views.

## Referenced source registry

- Source ID: source:plane-geometry:perpendicular-bisector. [Wolfram MathWorld · Perpendicular Bisector](https://mathworld.wolfram.com/PerpendicularBisector.html). Locator: Definition and equal-radius circle construction. A rigid compass may use any radius larger than half the endpoint distance; the source distinguishes collapsible-compass assumptions. Tangency is treated separately in this original bounded model.. Verification: Definition-level page inspected2026-11-09. Independent mathematics and teaching review and exact-edition book-page confirmation remain pending.. Rights: Original scenarios, worked examples and code-native geometry. No source exercise, data or illustration reproduced.
