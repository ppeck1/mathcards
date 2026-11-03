---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:quadratic-equation", "id": "math:concept:quadratic-equation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:quadratic-equation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f3c469f49a7e208d8fe152425138998d722f5b1f8721ea38c3ee425de39505bd"}, "purpose": "When does a calibration trace cross its target level?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f3c469f49a7e208d8fe152425138998d722f5b1f8721ea38c3ee425de39505bd", "status": "draft", "title": "Quadratic equations and real roots", "topics": ["mathematics", "algebra", "geometry", "quadratic equations and real roots"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Quadratic equations and real roots

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:quadratic-equation; revision 0.1.0-draft. Setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target. Expression: $ax^2+bx+c=0,\quad a>0,\quad D=b^2-4ac,\quad x=\frac{-b\pm\sqrt D}{2a}\quad(D\ge0).$. Conditions required for a defined value (a case may test their violation): The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root. Scope: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.

## Schema Version

0.1.0

## Id

math:concept:quadratic-equation

## Slug

quadratic-equation

## Type

concept

## Title

Quadratic equations and real roots

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

- quadratic equations and real roots

## Branches

- algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

When does a calibration trace cross its target level?

## Meaning

The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:complex-number
  - math:concept:quadratic-optimization
- depth:
  []

## Definition

- setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
- formal latex: ax^2+bx+c=0,\quad a>0,\quad D=b^2-4ac,\quad x=\frac{-b\pm\sqrt D}{2a}\quad(D\ge0).
- signature:
  - a: Positive leading coefficient
  - b: Linear coefficient
  - c: Constant offset
  - x: Real solution coordinate
  - D: Discriminant
  - N: Number of distinct real roots
- conditions:
  - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- domain notes: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algebra-extension:quadratic

## Grammar

- pronunciation: Quadratic equations and real roots
- expression latex: ax^2+bx+c=0,\quad a>0,\quad D=b^2-4ac,\quad x=\frac{-b\pm\sqrt D}{2a}\quad(D\ge0).
- formation rule: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
- precedence: Evaluate the declared component operations before the final quantity; preserve the stated variable domains.
- symbols:
  - Item:
    - token: a
    - role: Positive leading coefficient
    - type: Declared input or evaluated quantity
  - Item:
    - token: b
    - role: Linear coefficient
    - type: Declared input or evaluated quantity
  - Item:
    - token: c
    - role: Constant offset
    - type: Declared input or evaluated quantity
  - Item:
    - token: x
    - role: Real solution coordinate
    - type: Declared input or evaluated quantity
  - Item:
    - token: D
    - role: Discriminant
    - type: Declared input or evaluated quantity
  - Item:
    - token: N
    - role: Number of distinct real roots
    - type: Declared input or evaluated quantity
- ast:
  - id: ast:quadratic-equation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:constant
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: c
      - scope ref: scope:quadratic-equation
    - Item:
      - id: n:linear
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: b
      - scope ref: scope:quadratic-equation
    - Item:
      - id: n:leading
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: a
      - scope ref: scope:quadratic-equation
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded algebra rule
      - ref: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
    - Item:
      - id: n:bound-constant
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:constant
    - Item:
      - id: n:bound-linear
      - kind: apply
      - type: Declared primary result
      - function: n:bound-constant
      - argument: n:linear
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-linear
      - argument: n:leading
  - scopes:
    - Item:
      - id: scope:quadratic-equation
      - kind: modelExpression
      - free variables:
        - c
        - b
        - a
      - domain condition: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- parse errors:
  - Item:
    - input: An undeclared or out-of-range input
    - status: unsupported parameter
    - reason: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- ast coverage: Typed application outline for a bounded family; not a general expression parser.
- output symbol bindings:
  - a: leading
  - b: linear
  - c: constant
  - x: roots
  - D: discriminant
  - N: output

## Properties

- Item:
  - claim: The discriminant determines the number of distinct real roots.
  - conditions: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - derivation: Complete the square to obtain a positive multiple of a square equal to the discriminant. Positive, zero and negative right sides give two, one and zero real values respectively.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:quadratic-equation:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:complex-number
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Quadratic equations and real roots supplies a bounded preparation for complex number.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:quadratic-optimization
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Quadratic equations and real roots supplies a bounded preparation for quadratic optimization.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Quadratic equations and real roots supplies a bounded preparation for function.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:quadratic-equation:case-1
  - title: Two calibration crossings
  - role: applied_model
  - question: When does a calibration trace cross its target level?
  - setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
  - assumptions:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - inputs:
    - constant: -3
    - linear: -2
    - leading: 1
  - steps:
    - Item:
      - index: 1
      - expression: c = -3; b = -2; a = 1
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: ax² + bx + c = 0; D = b² − 4ac; result ≈ 2
      - reason: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
  - result:
    - approximate: 2 roots
  - interpretation: The trace crosses zero at −1 and 3.
  - independent check:
    - method: Substitute the numerical roots into the original polynomial; classify the represented discriminant independently with rational arithmetic.
    - expected: 2
  - limits: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - preset:
    - constant: -3
    - linear: -2
    - leading: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- Item:
  - id: math:example:quadratic-equation:case-2
  - title: A tangent calibration
  - role: applied_model
  - question: When does a calibration trace cross its target level?
  - setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
  - assumptions:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - inputs:
    - constant: 1
    - linear: -2
    - leading: 1
  - steps:
    - Item:
      - index: 1
      - expression: c = 1; b = -2; a = 1
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: ax² + bx + c = 0; D = b² − 4ac; result ≈ 1
      - reason: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
  - result:
    - approximate: 1 roots
  - interpretation: The trace touches at 1; multiplicity two still gives one distinct root.
  - independent check:
    - method: Substitute the numerical roots into the original polynomial; classify the represented discriminant independently with rational arithmetic.
    - expected: 1
  - limits: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - preset:
    - constant: 1
    - linear: -2
    - leading: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- Item:
  - id: math:example:quadratic-equation:case-3
  - title: A trace above target
  - role: applied_model
  - question: When does a calibration trace cross its target level?
  - setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
  - assumptions:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - inputs:
    - constant: 2
    - linear: -2
    - leading: 1
  - steps:
    - Item:
      - index: 1
      - expression: c = 2; b = -2; a = 1
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: ax² + bx + c = 0; D = b² − 4ac; result ≈ 0
      - reason: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
  - result:
    - approximate: 0 roots
  - interpretation: The discriminant is negative; there are no real crossings.
  - independent check:
    - method: Substitute the numerical roots into the original polynomial; classify the represented discriminant independently with rational arithmetic.
    - expected: 0
  - limits: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - preset:
    - constant: 2
    - linear: -2
    - leading: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- Item:
  - id: math:example:quadratic-equation:case-4
  - title: Symmetric crossings
  - role: applied_model
  - question: When does a calibration trace cross its target level?
  - setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
  - assumptions:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - inputs:
    - constant: -2
    - linear: 0
    - leading: 2
  - steps:
    - Item:
      - index: 1
      - expression: c = -2; b = 0; a = 2
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: ax² + bx + c = 0; D = b² − 4ac; result ≈ 2
      - reason: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
  - result:
    - approximate: 2 roots
  - interpretation: The crossings are −1 and 1.
  - independent check:
    - method: Substitute the numerical roots into the original polynomial; classify the represented discriminant independently with rational arithmetic.
    - expected: 2
  - limits: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - preset:
    - constant: -2
    - linear: 0
    - leading: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- Item:
  - id: math:example:quadratic-equation:case-5
  - title: One crossing at the origin
  - role: applied_model
  - question: When does a calibration trace cross its target level?
  - setting: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
  - assumptions:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - inputs:
    - constant: 0
    - linear: -3
    - leading: 1.5
  - steps:
    - Item:
      - index: 1
      - expression: c = 0; b = -3; a = 1.5
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: ax² + bx + c = 0; D = b² − 4ac; result ≈ 2
      - reason: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
  - result:
    - approximate: 2 roots
  - interpretation: The two distinct crossings are 0 and 2.
  - independent check:
    - method: Substitute the numerical roots into the original polynomial; classify the represented discriminant independently with rational arithmetic.
    - expected: 2
  - limits: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - preset:
    - constant: 0
    - linear: -3
    - leading: 1.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.

## Interactive

- component id: component:quadratic-equation
- renderer id: quadratic-equation-visual-model
- renderer version: 1
- model id: quadratic-equation-visual-model
- model revision: 1
- expression id: ast:quadratic-equation:expression
- interaction status: implemented
- description: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
- controls:
  - Item:
    - id: constant
    - type: number
    - default: -3
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: linear
    - type: number
    - default: -2
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: leading
    - type: number
    - default: 1
    - min: 0.5
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - constant: -3
      - linear: -2
      - leading: 1
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: 1
      - linear: -2
      - leading: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - constant: 2
      - linear: -2
      - leading: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - constant: -2
      - linear: 0
      - leading: 2
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: 0
      - linear: -3
      - leading: 1.5
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: 0.9999999999999999
      - linear: -2
      - leading: 1
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: 1.0000000000000002
      - linear: -2
      - leading: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - constant: 0
      - linear: 0
      - leading: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - constant: 4
      - linear: 4
      - leading: 0.5
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: -4
      - linear: 4
      - leading: 0.5
    - status: valid
    - output: 2
  - Item:
    - input:
      - constant: 0
      - linear: 5e-324
      - leading: 1
    - status: numeric_precision
  - Item:
    - input:
      - constant: -3
      - linear: -2
      - leading: 0
    - status: invalid_parameters
  - Item:
    - input:
      - constant: 1
      - linear: -2
      - leading: 1
    - status: invalid_parameters
- compute: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
- numeric tolerance: 1e-10
- invariants:
  - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - Story, controls, calculations and both views use one evaluated state.
- limits:
  - The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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
  - prompt: When does a calibration trace cross its target level?
  - answer: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.
- Item:
  - prompt: Which assumptions make this picture valid?
  - answer: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.

## Representations

- Item:
  - kind: geometry
  - description: A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.
- Item:
  - kind: graph
  - description: Hold the other inputs fixed and graph the declared primary result against Calibration offset c. Real-root counts are isolated evaluated dots, never fractional counts.
- Item:
  - kind: substitution
  - description: The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.

## Applications

- Item:
  - context: Two calibration crossings
  - mapping: The trace crosses zero at −1 and 3.
  - limitations: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - evidence kind: constructed_example
  - example ref: math:example:quadratic-equation:case-1
- Item:
  - context: A tangent calibration
  - mapping: The trace touches at 1; multiplicity two still gives one distinct root.
  - limitations: The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.
  - evidence kind: constructed_example
  - example ref: math:example:quadratic-equation:case-2

## Source Refs

- source:algebra-extension:quadratic

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Added a bounded algebra family with original story, independent reference, matching preview and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:algebra-extension:quadratic. [OpenStax · Quadratic Equations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-5-quadratic-equations). Locator: Quadratic formula and discriminant classification. The exact binary-sign and stable numerical implementation is author-derived.. Verification: Definition-level source inspected 2026-11-02; independent mathematical and exact-edition book review remains open.. Rights: Original calibration scenario and worked examples; no source exercise reproduced.
