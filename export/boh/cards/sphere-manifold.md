---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:sphere-manifold", "id": "math:concept:sphere-manifold", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sphere-manifold", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "b6dc8007cb12680ef467f90c859ad6cfc9a626c67da6fffa9e44339ce57eb00b"}, "purpose": "How can a curved sphere have two local coordinates?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "b6dc8007cb12680ef467f90c859ad6cfc9a626c67da6fffa9e44339ce57eb00b", "status": "draft", "title": "Local coordinates on a sphere", "topics": ["mathematics", "geometry-topology", "local coordinates on a sphere"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Local coordinates on a sphere

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:sphere-manifold; revision 0.1.0-draft. Setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe. Expression: $S^2=\{(x,y,z):x^2+y^2+z^2=1\},\quad (u_N,v_N)=\frac{(x,y)}{1-z},\quad (u_S,v_S)=\frac{(x,y)}{1+z}.$. Conditions required for a defined value (a case may test their violation): Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.

## Schema Version

0.1.0

## Id

math:concept:sphere-manifold

## Slug

sphere-manifold

## Type

concept

## Title

Local coordinates on a sphere

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- local coordinates on a sphere

## Branches

- geometry-topology

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can a curved sphere have two local coordinates?

## Meaning

Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:circle-manifold
  - math:concept:vector
  - math:concept:open-set
- depth:
  []

## Definition

- setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
- formal latex: S^2=\{(x,y,z):x^2+y^2+z^2=1\},\quad (u_N,v_N)=\frac{(x,y)}{1-z},\quad (u_S,v_S)=\frac{(x,y)}{1+z}.
- signature:
  - φ: Latitude φ (degrees)
  - λ: Longitude λ (degrees)
  - P: Projection pole
  - x: x
  - y: y
  - z: z
  - u: u
  - v: v
  - r: Radius in the chart plane
- conditions:
  - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- domain notes: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- proof status: Author-derived for the stated bounded family; independent mathematical review pending.
- source refs:
  - source:dynamics-extension:charts

## Grammar

- pronunciation: Local coordinates on a sphere
- expression latex: S^2=\{(x,y,z):x^2+y^2+z^2=1\},\quad (u_N,v_N)=\frac{(x,y)}{1-z},\quad (u_S,v_S)=\frac{(x,y)}{1+z}.
- formation rule: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
- precedence: Keep the selected pole, starting state, frame and input grouping explicit before evaluating.
- symbols:
  - Item:
    - token: φ
    - role: Latitude φ (degrees)
    - type: Declared quantity or model choice
  - Item:
    - token: λ
    - role: Longitude λ (degrees)
    - type: Declared quantity or model choice
  - Item:
    - token: P
    - role: Projection pole
    - type: Declared quantity or model choice
  - Item:
    - token: x
    - role: x
    - type: Declared quantity or model choice
  - Item:
    - token: y
    - role: y
    - type: Declared quantity or model choice
  - Item:
    - token: z
    - role: z
    - type: Declared quantity or model choice
  - Item:
    - token: u
    - role: u
    - type: Declared quantity or model choice
  - Item:
    - token: v
    - role: v
    - type: Declared quantity or model choice
  - Item:
    - token: r
    - role: Radius in the chart plane
    - type: Declared quantity or model choice
- ast:
  - id: ast:sphere-manifold:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:latitude
      - kind: variable
      - type: Declared model input
      - symbol: φ
      - scope ref: scope:sphere-manifold
    - Item:
      - id: n:longitude
      - kind: variable
      - type: Declared model input
      - symbol: λ
      - scope ref: scope:sphere-manifold
    - Item:
      - id: n:pole
      - kind: variable
      - type: Declared model input
      - symbol: P
      - scope ref: scope:sphere-manifold
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared family
      - ref: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - id: n:bound-latitude
      - kind: apply
      - type: Declared model result
      - function: n:rule
      - argument: n:latitude
    - Item:
      - id: n:bound-longitude
      - kind: apply
      - type: Declared model result
      - function: n:bound-latitude
      - argument: n:longitude
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared model result
      - function: n:bound-longitude
      - argument: n:pole
  - scopes:
    - Item:
      - id: scope:sphere-manifold
      - kind: modelExpression
      - free variables:
        - φ
        - λ
        - P
      - domain condition: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- parse errors:
  - Item:
    - input: Change a chart at its excluded pole without switching charts
    - status: domain or model mismatch
    - reason: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- ast coverage: Typed application outline of the declared family, not an arbitrary expression parser or a general theorem checker.
- output symbol bindings:
  - φ: latitude
  - λ: longitude
  - P: pole
  - x: x
  - y: y
  - z: z
  - u: u
  - v: v
  - r: chartRadius

## Properties

- Item:
  - claim: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - conditions: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - derivation: Use the stated formulas under their declared hypotheses; the independent reference checks the executable cases.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:sphere-manifold:case-1

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
  - target: math:concept:circle-manifold
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Local coordinates on a sphere makes a bounded connection with circle manifold.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Local coordinates on a sphere makes a bounded connection with vector.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:open-set
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Local coordinates on a sphere makes a bounded connection with open set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:sphere-manifold:case-1
  - title: Project an equatorial point
  - role: applied_model
  - question: How can a curved sphere have two local coordinates?
  - setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
  - assumptions:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - inputs:
    - latitude: 0
    - longitude: 0
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: φ = 0 degrees; λ = 0 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: (u,v) = (x,y)/(1−z) or (x,y)/(1+z)
      - reason: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - index: 3
      - expression: 1.0 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.0 chart units
  - interpretation: How can a curved sphere have two local coordinates? Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.0000000000000002
  - limits: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - preset:
    - latitude: 0
    - longitude: 0
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- Item:
  - id: math:example:sphere-manifold:case-2
  - title: Turn a point above the equator
  - role: applied_model
  - question: How can a curved sphere have two local coordinates?
  - setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
  - assumptions:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - inputs:
    - latitude: 30
    - longitude: 90
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: φ = 30 degrees; λ = 90 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: (u,v) = (x,y)/(1−z) or (x,y)/(1+z)
      - reason: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - index: 3
      - expression: 1.7320508076 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.7320508076 chart units
  - interpretation: How can a curved sphere have two local coordinates? Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.7320508075688774
  - limits: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - preset:
    - latitude: 30
    - longitude: 90
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- Item:
  - id: math:example:sphere-manifold:case-3
  - title: Reach the omitted north pole
  - role: failure_case
  - question: How can a curved sphere have two local coordinates?
  - setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
  - assumptions:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - inputs:
    - latitude: 90
    - longitude: 35
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: φ = 90 degrees; λ = 35 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: (u,v) = (x,y)/(1−z) or (x,y)/(1+z)
      - reason: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - index: 3
      - expression: The chosen chart is undefined at its own pole; the point remains available in the other chart.
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - exact: The chosen chart is undefined at its own pole; the point remains available in the other chart.
  - interpretation: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: outside_chart
  - limits: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - preset:
    - latitude: 90
    - longitude: 35
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- Item:
  - id: math:example:sphere-manifold:case-4
  - title: Cover the pole from the south
  - role: applied_model
  - question: How can a curved sphere have two local coordinates?
  - setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
  - assumptions:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - inputs:
    - latitude: 90
    - longitude: 35
    - pole: south
  - steps:
    - Item:
      - index: 1
      - expression: φ = 90 degrees; λ = 35 degrees; P = South pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: (u,v) = (x,y)/(1−z) or (x,y)/(1+z)
      - reason: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - index: 3
      - expression: 0.0 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.0 chart units
  - interpretation: How can a curved sphere have two local coordinates? Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.0
  - limits: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - preset:
    - latitude: 90
    - longitude: 35
    - pole: south
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
- Item:
  - id: math:example:sphere-manifold:case-5
  - title: Project into the opposite half-plane
  - role: applied_model
  - question: How can a curved sphere have two local coordinates?
  - setting: Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.
  - assumptions:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - inputs:
    - latitude: -30
    - longitude: 180
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: φ = -30 degrees; λ = 180 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: (u,v) = (x,y)/(1−z) or (x,y)/(1+z)
      - reason: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
    - Item:
      - index: 3
      - expression: 0.5773502692 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.5773502692 chart units
  - interpretation: How can a curved sphere have two local coordinates? Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.577350269189626
  - limits: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - preset:
    - latitude: -30
    - longitude: 180
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.

## Interactive

- component id: component:sphere-manifold
- renderer id: sphere-manifold-visual-model
- renderer version: 1
- model id: sphere-manifold-visual-model
- model revision: 1
- expression id: ast:sphere-manifold:expression
- interaction status: implemented
- description: Local coordinates on a sphere. Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
- controls:
  - Item:
    - id: latitude
    - type: number
    - default: 20
    - min: -90
    - max: 90
    - step: 1
  - Item:
    - id: longitude
    - type: number
    - default: 35
    - min: -180
    - max: 180
    - step: 1
  - Item:
    - id: pole
    - type: enum
    - default: north
    - values:
      - north
      - south
    - value labels:
      - north: North pole
      - south: South pole
- expected cases:
  - Item:
    - input:
      - latitude: 0
      - longitude: 0
      - pole: north
    - status: valid
    - output: 1.0000000000000002
  - Item:
    - input:
      - latitude: 30
      - longitude: 90
      - pole: north
    - status: valid
    - output: 1.7320508075688774
  - Item:
    - input:
      - latitude: 90
      - longitude: 35
      - pole: north
    - status: outside_chart
  - Item:
    - input:
      - latitude: 90
      - longitude: 35
      - pole: south
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - latitude: -30
      - longitude: 180
      - pole: north
    - status: valid
    - output: 0.577350269189626
  - Item:
    - input:
      - latitude: 20
      - longitude: 35
      - pole: north
    - status: valid
    - output: 1.4281480067421146
  - Item:
    - input:
      - latitude: -90
      - longitude: 35
      - pole: north
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - latitude: 20
      - longitude: -180
      - pole: north
    - status: valid
    - output: 1.4281480067421146
  - Item:
    - input:
      - latitude: 20
      - longitude: 180
      - pole: north
    - status: valid
    - output: 1.4281480067421146
  - Item:
    - input:
      - latitude: 20
      - longitude: 35
      - pole: south
    - status: valid
    - output: 0.7002075382097097
  - Item:
    - input:
      - latitude: 91
      - longitude: 35
      - pole: north
    - status: invalid_parameters
- compute: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
- numeric tolerance: 1e-10
- invariants:
  - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- limits:
  - Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
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
  - prompt: How can a curved sphere have two local coordinates?
  - answer: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
- Item:
  - prompt: Which assumption matters for this construction?
  - answer: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.

## Representations

- Item:
  - kind: geometry
  - description: Local coordinates on a sphere uses model-derived positions and marks.
- Item:
  - kind: graph
  - description: A distinct history, response or coordinate graph retains declared domains and gaps.
- Item:
  - kind: substitution
  - description: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.

## Applications

- Item:
  - context: Originally authored model scenario
  - mapping: How can a curved sphere have two local coordinates?
  - limitations: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-manifold:case-1
- Item:
  - context: A changed history, parameter or chart
  - mapping: Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.
  - limitations: Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.
  - evidence kind: constructed_example
  - example ref: math:example:sphere-manifold:case-2

## Source Refs

- source:dynamics-extension:charts

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch continuation: added bounded models, connected calculations, views and reference coverage.

## Referenced source registry

- Source ID: source:dynamics-extension:charts. [Peter Petersen · Manifolds, Transversality, and de Rham Cohomology](https://www.math.ucla.edu/~petersen/manifolds.pdf). Locator: §1.2.1 Spheres: stereographic charts from a pole to its orthogonal plane; §1.1 chart definition. Unit circle and sphere formulas derived directly here.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
