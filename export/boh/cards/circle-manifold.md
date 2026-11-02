---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:circle-manifold", "id": "math:concept:circle-manifold", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:circle-manifold", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3bfb639201a87ce0b2560272c39746522947cf1d2549cc1b96d86a46e119d1ce"}, "purpose": "Can a smooth circle need a second coordinate map?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3bfb639201a87ce0b2560272c39746522947cf1d2549cc1b96d86a46e119d1ce", "status": "draft", "title": "A circle needs more than one chart", "topics": ["mathematics", "geometry-topology", "a circle needs more than one chart"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# A circle needs more than one chart

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:circle-manifold; revision 0.1.0-draft. Setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes. Expression: $S^1=\{(x,y):x^2+y^2=1\},\quad u_N=\frac{x}{1-y},\quad u_S=\frac{x}{1+y}.$. Conditions required for a defined value (a case may test their violation): The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.

## Schema Version

0.1.0

## Id

math:concept:circle-manifold

## Slug

circle-manifold

## Type

concept

## Title

A circle needs more than one chart

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

- a circle needs more than one chart

## Branches

- geometry-topology

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can a smooth circle need a second coordinate map?

## Meaning

Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:open-set
  - math:concept:sphere-manifold
  - math:concept:function
- depth:
  []

## Definition

- setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
- formal latex: S^1=\{(x,y):x^2+y^2=1\},\quad u_N=\frac{x}{1-y},\quad u_S=\frac{x}{1+y}.
- signature:
  - θ: Position angle θ (degrees)
  - P: Projection pole
  - x: x
  - y: y
  - u: u
- conditions:
  - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- domain notes: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- proof status: Author-derived for the stated bounded family; independent mathematical review pending.
- source refs:
  - source:dynamics-extension:charts

## Grammar

- pronunciation: A circle needs more than one chart
- expression latex: S^1=\{(x,y):x^2+y^2=1\},\quad u_N=\frac{x}{1-y},\quad u_S=\frac{x}{1+y}.
- formation rule: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
- precedence: Keep the selected pole, starting state, frame and input grouping explicit before evaluating.
- symbols:
  - Item:
    - token: θ
    - role: Position angle θ (degrees)
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
    - token: u
    - role: u
    - type: Declared quantity or model choice
- ast:
  - id: ast:circle-manifold:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:angle
      - kind: variable
      - type: Declared model input
      - symbol: θ
      - scope ref: scope:circle-manifold
    - Item:
      - id: n:pole
      - kind: variable
      - type: Declared model input
      - symbol: P
      - scope ref: scope:circle-manifold
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared family
      - ref: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - id: n:bound-angle
      - kind: apply
      - type: Declared model result
      - function: n:rule
      - argument: n:angle
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared model result
      - function: n:bound-angle
      - argument: n:pole
  - scopes:
    - Item:
      - id: scope:circle-manifold
      - kind: modelExpression
      - free variables:
        - θ
        - P
      - domain condition: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- parse errors:
  - Item:
    - input: Change a chart at its excluded pole without switching charts
    - status: domain or model mismatch
    - reason: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- ast coverage: Typed application outline of the declared family, not an arbitrary expression parser or a general theorem checker.
- output symbol bindings:
  - θ: angle
  - P: pole
  - x: x
  - y: y
  - u: u

## Properties

- Item:
  - claim: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - conditions: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - derivation: Use the stated formulas under their declared hypotheses; the independent reference checks the executable cases.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:circle-manifold:case-1

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
  - target: math:concept:open-set
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: A circle needs more than one chart makes a bounded connection with open set.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:sphere-manifold
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: A circle needs more than one chart makes a bounded connection with sphere manifold.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: A circle needs more than one chart makes a bounded connection with function.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:circle-manifold:case-1
  - title: Give the rightmost point a coordinate
  - role: applied_model
  - question: Can a smooth circle need a second coordinate map?
  - setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
  - assumptions:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - inputs:
    - angle: 0
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: θ = 0 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: u = x/(1−y) or x/(1+y)
      - reason: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - index: 3
      - expression: 1.0 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.0 chart units
  - interpretation: Can a smooth circle need a second coordinate map? Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.0000000000000002
  - limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - preset:
    - angle: 0
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- Item:
  - id: math:example:circle-manifold:case-2
  - title: Move above the horizontal diameter
  - role: applied_model
  - question: Can a smooth circle need a second coordinate map?
  - setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
  - assumptions:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - inputs:
    - angle: 30
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: θ = 30 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: u = x/(1−y) or x/(1+y)
      - reason: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - index: 3
      - expression: 1.7320508076 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.7320508076 chart units
  - interpretation: Can a smooth circle need a second coordinate map? Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.7320508075688774
  - limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - preset:
    - angle: 30
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- Item:
  - id: math:example:circle-manifold:case-3
  - title: Meet the omitted north pole
  - role: failure_case
  - question: Can a smooth circle need a second coordinate map?
  - setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
  - assumptions:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - inputs:
    - angle: 90
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: θ = 90 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: u = x/(1−y) or x/(1+y)
      - reason: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - index: 3
      - expression: The chosen chart is undefined at its own pole; the point remains available in the other chart.
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - exact: The chosen chart is undefined at its own pole; the point remains available in the other chart.
  - interpretation: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: outside_chart
  - limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - preset:
    - angle: 90
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- Item:
  - id: math:example:circle-manifold:case-4
  - title: Cover that point with the other chart
  - role: applied_model
  - question: Can a smooth circle need a second coordinate map?
  - setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
  - assumptions:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - inputs:
    - angle: 90
    - pole: south
  - steps:
    - Item:
      - index: 1
      - expression: θ = 90 degrees; P = South pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: u = x/(1−y) or x/(1+y)
      - reason: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - index: 3
      - expression: 0.0 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.0 chart units
  - interpretation: Can a smooth circle need a second coordinate map? Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.0
  - limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - preset:
    - angle: 90
    - pole: south
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
- Item:
  - id: math:example:circle-manifold:case-5
  - title: Read a negative coordinate
  - role: applied_model
  - question: Can a smooth circle need a second coordinate map?
  - setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.
  - assumptions:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - inputs:
    - angle: 180
    - pole: north
  - steps:
    - Item:
      - index: 1
      - expression: θ = 180 degrees; P = North pole
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: u = x/(1−y) or x/(1+y)
      - reason: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
    - Item:
      - index: 3
      - expression: -1.0 chart units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: -1.0 chart units
  - interpretation: Can a smooth circle need a second coordinate map? Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: -1.0000000000000002
  - limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - preset:
    - angle: 180
    - pole: north
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.

## Interactive

- component id: component:circle-manifold
- renderer id: circle-manifold-visual-model
- renderer version: 1
- model id: circle-manifold-visual-model
- model revision: 1
- expression id: ast:circle-manifold:expression
- interaction status: implemented
- description: A circle needs more than one chart. Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
- controls:
  - Item:
    - id: angle
    - type: number
    - default: 30
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
      - angle: 0
      - pole: north
    - status: valid
    - output: 1.0000000000000002
  - Item:
    - input:
      - angle: 30
      - pole: north
    - status: valid
    - output: 1.7320508075688774
  - Item:
    - input:
      - angle: 90
      - pole: north
    - status: outside_chart
  - Item:
    - input:
      - angle: 90
      - pole: south
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - angle: 180
      - pole: north
    - status: valid
    - output: -1.0000000000000002
  - Item:
    - input:
      - angle: -180
      - pole: north
    - status: valid
    - output: -0.9999999999999998
  - Item:
    - input:
      - angle: 30
      - pole: south
    - status: valid
    - output: 0.5773502691896257
  - Item:
    - input:
      - angle: 181
      - pole: north
    - status: invalid_parameters
- compute: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
- numeric tolerance: 1e-10
- invariants:
  - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- limits:
  - The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
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
  - prompt: Can a smooth circle need a second coordinate map?
  - answer: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
- Item:
  - prompt: Which assumption matters for this construction?
  - answer: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.

## Representations

- Item:
  - kind: geometry
  - description: A circle needs more than one chart uses model-derived positions and marks.
- Item:
  - kind: graph
  - description: A distinct history, response or coordinate graph retains declared domains and gaps.
- Item:
  - kind: substitution
  - description: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.

## Applications

- Item:
  - context: Originally authored model scenario
  - mapping: Can a smooth circle need a second coordinate map?
  - limitations: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - evidence kind: constructed_example
  - example ref: math:example:circle-manifold:case-1
- Item:
  - context: A changed history, parameter or chart
  - mapping: Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.
  - limitations: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.
  - evidence kind: constructed_example
  - example ref: math:example:circle-manifold:case-2

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
