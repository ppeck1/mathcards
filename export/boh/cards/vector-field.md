---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:vector-field", "id": "math:concept:vector-field", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector-field", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "0269341da833dd0ddd48c42ee8f4f4b714906ae9ed496ab5ebf6a0634ef43d24"}, "purpose": "Which way does the alignment correction point?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "0269341da833dd0ddd48c42ee8f4f4b714906ae9ed496ab5ebf6a0634ef43d24", "status": "draft", "title": "Vector fields", "topics": ["mathematics", "dynamics", "vector fields"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Vector fields

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:vector-field; revision 0.1.0-draft. Setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device. Expression: $\mathbf F(x,y)=(-a x,-a y),\quad\|\mathbf F\|=a\sqrt{x^2+y^2}.$. Conditions required for a defined value (a case may test their violation): A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

## Schema Version

0.1.0

## Id

math:concept:vector-field

## Slug

vector-field

## Type

concept

## Title

Vector fields

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

- vector fields

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which way does the alignment correction point?

## Meaning

Evaluate each signed velocity component, then compute the Euclidean magnitude.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:vector
  - math:concept:continuous-flow
- depth:
  []

## Definition

- setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
- formal latex: \mathbf F(x,y)=(-a x,-a y),\quad\|\mathbf F\|=a\sqrt{x^2+y^2}.
- signature:
  - x: Horizontal position x; the declared input
  - y: Vertical position y; the declared input
  - a: Inward rate a; the declared input
  - result: The primary reported quantity in units per time.
- conditions:
  - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:field

## Grammar

- pronunciation: Vector fields
- expression latex: \mathbf F(x,y)=(-a x,-a y),\quad\|\mathbf F\|=a\sqrt{x^2+y^2}.
- formation rule: Evaluate each signed velocity component, then compute the Euclidean magnitude.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: x
    - role: Horizontal position x; the declared input
    - type: Declared input or result
  - Item:
    - token: y
    - role: Vertical position y; the declared input
    - type: Declared input or result
  - Item:
    - token: a
    - role: Inward rate a; the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in units per time.
    - type: Declared input or result
- ast:
  - id: ast:vector-field:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - type: Declared model input
      - symbol: x
      - scope ref: scope:vector-field
    - Item:
      - id: n:y
      - kind: variable
      - type: Declared model input
      - symbol: y
      - scope ref: scope:vector-field
    - Item:
      - id: n:rate
      - kind: variable
      - type: Declared model input
      - symbol: a
      - scope ref: scope:vector-field
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Evaluate each signed velocity component, then compute the Euclidean magnitude.
    - Item:
      - id: n:bound-x
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:x
    - Item:
      - id: n:bound-y
      - kind: apply
      - type: Declared result
      - function: n:bound-x
      - argument: n:y
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-y
      - argument: n:rate
  - scopes:
    - Item:
      - id: scope:vector-field
      - kind: modelExpression
      - free variables:
        - x
        - y
        - a
      - domain condition: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - x: x
  - y: y
  - a: rate
  - result: output

## Properties

- Item:
  - claim: Evaluate each signed velocity component, then compute the Euclidean magnitude.
  - conditions: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - derivation: A velocity arrow begins at the selected position. Its direction and length follow the two computed components.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:vector-field:case-1

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
  - target: math:concept:vector
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Vector fields supplies a bounded connection to vector.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:continuous-flow
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Vector fields supplies a bounded connection to continuous flow.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:vector-field:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Which way does the alignment correction point?
  - setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
  - assumptions:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - inputs:
    - x: 1
    - y: 1
    - rate: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = 1, y = 1, a = 1
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: F(x,y) = (−a x, −a y)
      - reason: Evaluate each signed velocity component, then compute the Euclidean magnitude.
    - Item:
      - index: 3
      - expression: Result ≈ 1.4142135624 units per time
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 1.4142135624 units per time
  - interpretation: A velocity arrow begins at the selected position. Its direction and length follow the two computed components.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1.4142135623730951
  - limits: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - preset:
    - x: 1
    - y: 1
    - rate: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- Item:
  - id: math:example:vector-field:case-2
  - title: Change Horizontal position x to -2
  - role: applied_model
  - question: Which way does the alignment correction point?
  - setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
  - assumptions:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - inputs:
    - x: -2
    - y: 1
    - rate: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = -2, y = 1, a = 1
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
    - x: -2
    - y: 1
    - rate: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- Item:
  - id: math:example:vector-field:case-3
  - title: Change Horizontal position x to 2
  - role: applied_model
  - question: Which way does the alignment correction point?
  - setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
  - assumptions:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - inputs:
    - x: 2
    - y: 1
    - rate: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = 2, y = 1, a = 1
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
    - x: 2
    - y: 1
    - rate: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
- Item:
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
- Item:
  - id: math:example:vector-field:case-5
  - title: Change Vertical position y to 2
  - role: applied_model
  - question: Which way does the alignment correction point?
  - setting: A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.
  - assumptions:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - inputs:
    - x: 1
    - y: 2
    - rate: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = 1, y = 2, a = 1
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
    - y: 2
    - rate: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

## Interactive

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

## Prompts

- Item:
  - prompt: Which way does the alignment correction point?
  - answer: Evaluate each signed velocity component, then compute the Euclidean magnitude.
- Item:
  - prompt: What does this construction leave out?
  - answer: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.

## Representations

- Item:
  - kind: geometry
  - description: A velocity arrow begins at the selected position. Its direction and length follow the two computed components.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Horizontal position x. Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Evaluate each signed velocity component, then compute the Euclidean magnitude.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Which way does the alignment correction point?
  - limitations: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - evidence kind: constructed_example
  - example ref: math:example:vector-field:case-1
- Item:
  - context: Boundary comparison
  - mapping: Evaluate each signed velocity component, then compute the Euclidean magnitude.
  - limitations: A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.
  - evidence kind: constructed_example
  - example ref: math:example:vector-field:case-2

## Source Refs

- source:systems:field

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:field. [OpenStax · Vector fields](https://openstax.org/books/calculus-volume-3/pages/6-1-vector-fields). Locator: Definition of planar vector fields and their arrow representations.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
