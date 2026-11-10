---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:circle-measurement", "id": "math:concept:circle-measurement", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:circle-measurement", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "61183c16db8ba3844f732be665265551f3da3aa5eee162500c98bdfbbc06fb56"}, "purpose": "How does the same radius determine a table’s edge length and surface area?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "61183c16db8ba3844f732be665265551f3da3aa5eee162500c98bdfbbc06fb56", "status": "draft", "title": "Circle measurement and pi", "topics": ["mathematics", "geometry", "measurement", "pi", "circle area", "disk area", "circumference", "circle diameter"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Circle measurement and pi

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:circle-measurement; revision 0.1.0-draft. Setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows. Expression: $d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.$. Conditions required for a defined value (a case may test their violation): The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values. Scope: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.

## Schema Version

0.1.0

## Id

math:concept:circle-measurement

## Slug

circle-measurement

## Type

concept

## Title

Circle measurement and pi

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

- pi
- circle area
- disk area
- circumference
- circle diameter

## Branches

- geometry
- measurement

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How does the same radius determine a table’s edge length and surface area?

## Meaning

A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².

## Prerequisites

- required:
  - math:concept:ratio-scale
- helpful:
  - math:concept:regular-polygon
- depth:
  - math:concept:integral-accumulation

## Definition

- setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
- formal latex: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
- signature:
  - r: Table radius from center to boundary, in metres
  - d: Diameter across the center, in metres
  - C: Length of the table edge, in metres
  - A: Filled disk surface area, in square metres
  - π: Constant Euclidean circumference-to-diameter ratio
- conditions:
  - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- domain notes: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
- proof status: Definition-level sources and originally authored derivations; independent review pending.
- source refs:
  - source:number-insights:circle-measurement

## Grammar

- pronunciation: Circle measurement and pi
- expression latex: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
- formation rule: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
- precedence: Double the radius for diameter. Multiply diameter by π for circumference. Square the radius before multiplying by π for area.
- symbols:
  - Item:
    - token: r
    - role: Table radius from center to boundary, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: d
    - role: Diameter across the center, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: C
    - role: Length of the table edge, in metres
    - type: Locally declared quantity or constant
  - Item:
    - token: A
    - role: Filled disk surface area, in square metres
    - type: Locally declared quantity or constant
  - Item:
    - token: π
    - role: Constant Euclidean circumference-to-diameter ratio
    - type: Locally declared quantity or constant
- ast:
  - id: ast:circle-measurement:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared numeric input
      - symbol: r
      - scope ref: scope:circle-measurement
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded number/measurement rule
      - ref: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:radius
  - scopes:
    - Item:
      - id: scope:circle-measurement
      - kind: modelExpression
      - free variables:
        - r
      - external parameters:
        - Declared Euclidean geometry, exact integer choices and mathematical constants as stated
      - domain condition: The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- parse errors:
  - Item:
    - input: Use an unsupported index, domain or unit
    - status: model mismatch
    - reason: The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- ast coverage: Typed application outline; the formal expression and conditions state the full bounded construction.
- output symbol bindings:
  - r: radius
  - d: diameter
  - C: circumference
  - A: output
  - π: pi

## Properties

- Item:
  - claim: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
  - conditions: The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - derivation: Scaling a circle by a positive factor scales every boundary length and its diameter by that same factor, so C/d is constant. Define that constant as π. Since d=2r, the circumference is C=2πr. Integrating concentric radius-ρ rings from zero to r gives area ∫₀ʳ2πρ dρ=πr². Equivalently, increasingly fine circular sectors approach a rectangle of height r and width πr. These limits justify the disk-area law; a single finite picture only illustrates it.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:circle-measurement:case-1

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
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: This lesson builds on the stated prerequisite’s ratio or geometric rule.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:regular-polygon
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked example provides a contrasting numerical or geometric construction.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:integral-accumulation
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked lesson supplies a further viewpoint without changing this bounded model.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:circle-measurement:case-1
  - title: A two-metre table radius
  - role: applied_model
  - question: How does the same radius determine a table’s edge length and surface area?
  - setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
  - assumptions:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - inputs:
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: r = 2
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
      - reason: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
    - Item:
      - index: 3
      - expression: A ≈ 12.566370614359172 m²
      - reason: The 4-metre diameter gives circumference 4π metres and disk area 4π square metres. Equal numerical coefficients do not make length and area the same quantity.
  - result:
    - approximate: 12.566370614359172
  - interpretation: The 4-metre diameter gives circumference 4π metres and disk area 4π square metres. Equal numerical coefficients do not make length and area the same quantity.
  - independent check:
    - method: Evaluate the polar-area integral and the constant-speed boundary-length integral independently of the runtime radius-squared expression.
    - expected: 12.566370614359172
  - limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - preset:
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- Item:
  - id: math:example:circle-measurement:case-2
  - title: Half the radius
  - role: applied_model
  - question: How does the same radius determine a table’s edge length and surface area?
  - setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
  - assumptions:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - inputs:
    - radius: 1
  - steps:
    - Item:
      - index: 1
      - expression: r = 1
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
      - reason: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
    - Item:
      - index: 3
      - expression: A ≈ 3.141592653589793 m²
      - reason: Compared with radius two, circumference is halved while disk area is quartered. The constant C/d remains π.
  - result:
    - approximate: 3.141592653589793
  - interpretation: Compared with radius two, circumference is halved while disk area is quartered. The constant C/d remains π.
  - independent check:
    - method: Evaluate the polar-area integral and the constant-speed boundary-length integral independently of the runtime radius-squared expression.
    - expected: 3.141592653589793
  - limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - preset:
    - radius: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- Item:
  - id: math:example:circle-measurement:case-3
  - title: A small circular top
  - role: applied_model
  - question: How does the same radius determine a table’s edge length and surface area?
  - setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
  - assumptions:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - inputs:
    - radius: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: r = 0.25
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
      - reason: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
    - Item:
      - index: 3
      - expression: A ≈ 0.19634954084936207 m²
      - reason: The half-metre diameter gives edge length π/2 metres and disk area π/16 square metres. A small radius still has the same dimensionless circle ratio.
  - result:
    - approximate: 0.19634954084936207
  - interpretation: The half-metre diameter gives edge length π/2 metres and disk area π/16 square metres. A small radius still has the same dimensionless circle ratio.
  - independent check:
    - method: Evaluate the polar-area integral and the constant-speed boundary-length integral independently of the runtime radius-squared expression.
    - expected: 0.19634954084936207
  - limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - preset:
    - radius: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- Item:
  - id: math:example:circle-measurement:case-4
  - title: A wider circular table
  - role: applied_model
  - question: How does the same radius determine a table’s edge length and surface area?
  - setting: A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.
  - assumptions:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
  - inputs:
    - radius: 3
  - steps:
    - Item:
      - index: 1
      - expression: r = 3
      - reason: Choose the declared physical lengths or whole approximation index.
    - Item:
      - index: 2
      - expression: d=2r,\quad \pi=\frac Cd,\quad C=2\pi r,\quad A=\pi r^2.
      - reason: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
    - Item:
      - index: 3
      - expression: A ≈ 28.274333882308138 m²
      - reason: A 6-metre diameter needs 6π metres of edge band and 9π square metres of surface covering. The squared radius changes area faster than edge length.
  - result:
    - approximate: 28.274333882308138
  - interpretation: A 6-metre diameter needs 6π metres of edge band and 9π square metres of surface covering. The squared radius changes area faster than edge length.
  - independent check:
    - method: Evaluate the polar-area integral and the constant-speed boundary-length integral independently of the runtime radius-squared expression.
    - expected: 28.274333882308138
  - limits: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - preset:
    - radius: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.
- Item:
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

## Interactive

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

## Prompts

- Item:
  - prompt: How does the same radius determine a table’s edge length and surface area?
  - answer: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².
- Item:
  - prompt: What does this picture measure?
  - answer: The disk radius uses a fixed equal-metre scale. A separate fixed metre bar shows circumference, while the filled disk area represents the square-law change.

## Representations

- Item:
  - kind: geometry
  - description: The disk radius uses a fixed equal-metre scale. A separate fixed metre bar shows circumference, while the filled disk area represents the square-law change.
- Item:
  - kind: graph
  - description: Disk area versus radius is the quadratic curve πr² on fixed axes; the circle ratio remains constant even while size changes.
- Item:
  - kind: substitution
  - description: A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².

## Applications

- Item:
  - context: A two-metre table radius
  - mapping: The 4-metre diameter gives circumference 4π metres and disk area 4π square metres. Equal numerical coefficients do not make length and area the same quantity.
  - limitations: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - evidence kind: constructed_example
  - example ref: math:example:circle-measurement:case-1
- Item:
  - context: Half the radius
  - mapping: Compared with radius two, circumference is halved while disk area is quartered. The constant C/d remains π.
  - limitations: Euclidean circles and filled disks of positive radius. The radius is 0.25–4 metres. Circumference and diameter use metres; disk area uses square metres. The numerical π constant and displayed decimals approximate exact analytic values; material waste and thickness are outside the model.
  - evidence kind: constructed_example
  - example ref: math:example:circle-measurement:case-2

## Source Refs

- source:number-insights:circle-measurement

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number/measurement lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-insights:circle-measurement. [Wolfram MathWorld · Circle](https://mathworld.wolfram.com/Circle.html). Locator: Definition of circle, diameter and circumference; equations (1) and (4)–(6), with the constant circumference-to-diameter ratio. The table scenario is original.. Verification: Definition-level page inspected 2026-11-09. Independent mathematical/pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored scenarios, derivations and visual encodings; no source exercise, data or artwork reproduced.
