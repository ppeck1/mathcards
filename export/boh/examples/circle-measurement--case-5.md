---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:circle-measurement:case-5", "id": "math:example:circle-measurement:case-5", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:circle-measurement", "example_id": "math:example:circle-measurement:case-5", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "61183c16db8ba3844f732be665265551f3da3aa5eee162500c98bdfbbc06fb56"}, "purpose": "How does the same radius determine a table’s edge length and surface area?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "61183c16db8ba3844f732be665265551f3da3aa5eee162500c98bdfbbc06fb56", "status": "draft", "title": "Double the reference radius", "topics": ["mathematics", "geometry", "measurement", "pi", "circle area", "disk area", "circumference", "circle diameter"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Double the reference radius

Parent card: math:concept:circle-measurement; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:circle-measurement; revision 0.1.0-draft. Setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows. Expression: $d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.$. Conditions required for a defined value (a case may test their violation): The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values. Scope: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.

Case unit math:example:circle-measurement:case-5. Setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows. Inputs: {"radius": 4}. Result: {"approximate": "50.26548245743669"}. Limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.

## Complete worked case

- id: math:example:circle-measurement:case-5
- title: Double the reference radius
- role: applied_model
- question: How does the same radius determine a table’s edge length and surface area?
- setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
- assumptions:
  - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- inputs:
  - radius: 4
- steps:
  - Item:
    - index: 1
    - expression: r = 4
    - reason: Choose the declared physical lengths or whole approximation index.
  - Item:
    - index: 2
    - expression: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
    - reason: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
  - Item:
    - index: 3
    - expression: A ≈ 50.26548245743669 m²
    - reason: Relative to radius two, the 8-metre diameter doubles circumference and quadruples disk area. Both drawings retain the fixed metre scale.
- result:
  - approximate: 50.26548245743669
- interpretation: Relative to radius two, the 8-metre diameter doubles circumference and quadruples disk area. Both drawings retain the fixed metre scale.
- independent check:
  - method: Evaluate the polar-area integral and the constant-speed boundary-length integral independently of the runtime radius-squared expression.
  - expected: 50.26548245743669
- limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
- preset:
  - radius: 4
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.

## Written exploration recipe

- component id: component:circle-measurement
- renderer id: circle-measurement-visual-model
- renderer version: 1
- model id: circle-measurement-visual-model
- model revision: 1
- expression id: ast:circle-measurement:expression
- interaction status: implemented
- description: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
- controls:
  - Item:
    - id: radius
    - type: number
    - default: 2
    - min: 0.25
    - max: 4
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - radius: 0.25
    - status: valid
    - output: 0.19634954084936207
  - Item:
    - input:
      - radius: 0.3
    - status: valid
    - output: 0.2827433388230814
  - Item:
    - input:
      - radius: 0.5
    - status: valid
    - output: 0.7853981633974483
  - Item:
    - input:
      - radius: 1
    - status: valid
    - output: 3.141592653589793
  - Item:
    - input:
      - radius: 1.05
    - status: valid
    - output: 3.463605900582747
  - Item:
    - input:
      - radius: 1.5
    - status: valid
    - output: 7.0685834705770345
  - Item:
    - input:
      - radius: 2
    - status: valid
    - output: 12.566370614359172
  - Item:
    - input:
      - radius: 2.5
    - status: valid
    - output: 19.634954084936208
  - Item:
    - input:
      - radius: 3
    - status: valid
    - output: 28.274333882308138
  - Item:
    - input:
      - radius: 3.75
    - status: valid
    - output: 44.178646691106465
  - Item:
    - input:
      - radius: 4
    - status: valid
    - output: 50.26548245743669
  - Item:
    - input:
      - radius: 0.0
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 4.25
    - status: invalid_parameters
  - Item:
    - input:
      - radius: true
    - status: invalid_parameters
  - Item:
    - input:
      - radius: 2
    - status: invalid_parameters
- compute: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
- numeric tolerance: 5e-11
- invariants:
  - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Continuous physical quantities retain continuous shapes; whole indices and output counts retain discrete meanings.
- limits:
  - Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
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

- Source ID: source:number-insights:circle-measurement. [Wolfram MathWorld · Circle](https://mathworld.wolfram.com/Circle.html). Locator: Definition of circle, diameter and circumference; equations (1) and (4)–(6), with the constant circumference-to-diameter ratio. The table scenario is original.. Verification: Definition-level page inspected 2026-11-09. Independent mathematical/pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored scenarios, derivations and visual encodings; no source exercise, data or artwork reproduced.
