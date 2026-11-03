---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:circle-manifold:case-2", "id": "math:example:circle-manifold:case-2", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:circle-manifold", "example_id": "math:example:circle-manifold:case-2", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3bfb639201a87ce0b2560272c39746522947cf1d2549cc1b96d86a46e119d1ce"}, "purpose": "Can a smooth circle need a second coordinate map?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3bfb639201a87ce0b2560272c39746522947cf1d2549cc1b96d86a46e119d1ce", "status": "draft", "title": "Move above the horizontal diameter", "topics": ["mathematics", "geometry-topology", "a circle needs more than one chart"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Move above the horizontal diameter

Parent card: math:concept:circle-manifold; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:circle-manifold; revision 0.1.0-draft. Setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes. Expression: $S^1=\{(x,y):x^2+y^2=1\},\quad u_N=\frac{x}{1-y},\quad u_S=\frac{x}{1+y}.$. Conditions required for a defined value (a case may test their violation): The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.

Case unit math:example:circle-manifold:case-2. Setting: A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes. Inputs: {"angle": 30, "pole": "north"}. Result: {"approximate": "1.7320508076 chart units"}. Limits: The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:dynamics-extension:charts. [Peter Petersen · Manifolds, Transversality, and de Rham Cohomology](https://www.math.ucla.edu/~petersen/manifolds.pdf). Locator: §1.2.1 Spheres: stereographic charts from a pole to its orthogonal plane; §1.1 chart definition. Unit circle and sphere formulas derived directly here.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
