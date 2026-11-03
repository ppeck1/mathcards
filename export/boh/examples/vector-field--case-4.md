---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:vector-field:case-4", "id": "math:example:vector-field:case-4", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector-field", "example_id": "math:example:vector-field:case-4", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "0269341da833dd0ddd48c42ee8f4f4b714906ae9ed496ab5ebf6a0634ef43d24"}, "purpose": "Which way does the alignment correction point?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "0269341da833dd0ddd48c42ee8f4f4b714906ae9ed496ab5ebf6a0634ef43d24", "status": "draft", "title": "Change Vertical position y to -2", "topics": ["mathematics", "dynamics", "vector fields"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Vertical position y to -2

Parent card: math:concept:vector-field; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:vector-field; revision 0.1.0-draft. Setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device. Expression: $\mathbf F(x,y)=(-a x,-a y),\quad\|\mathbf F\|=a\sqrt{x^2+y^2}.$. Conditions required for a defined value (a case may test their violation): A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

Case unit math:example:vector-field:case-4. Setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device. Inputs: {"rate": 1, "x": 1, "y": -2}. Result: {"approximate": "2.2360679775 units per time"}. Limits: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

## Complete worked case

- id: math:example:vector-field:case-4
- title: Change Vertical position y to -2
- role: applied_model
- question: Which way does the alignment correction point?
- setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
- assumptions:
  - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- inputs:
  - x: 1
  - y: -2
  - rate: 1
- steps:
  - Item:
    - index: 1
    - expression: x = 1, y = -2, a = 1
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: F(x,y) = (−a x, −a y)
    - reason: Evaluate each signed velocity component, then compute the Euclidean magnitude.
  - Item:
    - index: 3
    - expression: Result ≈ 2.2360679775 units per time
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - approximate: 2.2360679775 units per time
- interpretation: A velocity arrow begins at the selected position. Its direction and length follow the two computed components.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 2.23606797749979
- limits: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- preset:
  - x: 1
  - y: -2
  - rate: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

## Written exploration recipe

- component id: component:vector-field
- renderer id: vector-field-visual-model
- renderer version: 1
- model id: vector-field-visual-model
- model revision: 1
- expression id: ast:vector-field:expression
- interaction status: implemented
- description: A velocity arrow begins at the selected position. Its direction and length follow the two computed components.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: y
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: rate
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - x: 1
      - y: 1
      - rate: 1
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - x: -2
      - y: 1
      - rate: 1
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - x: 2
      - y: 1
      - rate: 1
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - x: 1
      - y: -2
      - rate: 1
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - x: 1
      - y: 2
      - rate: 1
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - x: 1
      - y: 1
      - rate: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - x: 1
      - y: 1
      - rate: 2
    - status: valid
    - output: 2.8284271247461903
  - Item:
    - input:
      - x: -1.0
      - y: 1
      - rate: 1
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - x: 1.0
      - y: 1
      - rate: 1
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - x: 3
      - y: 1
      - rate: 1
    - status: invalid_parameters
- compute: Evaluate each signed velocity component, then compute the Euclidean magnitude.
- numeric tolerance: 1e-10
- invariants:
  - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
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

- Source ID: source:systems:field. [OpenStax · Vector fields](https://openstax.org/books/calculus-volume-3/pages/6-1-vector-fields). Locator: Definition of planar vector fields and their arrow representations.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
