---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:complex-number", "id": "math:concept:complex-number", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:complex-number", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "87e05d95d41a13bd3428beeae1e6097be22365d47015e108588d31f497dc3bfb"}, "purpose": "How far is a plotter offset from the origin, and what does reflection preserve?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "87e05d95d41a13bd3428beeae1e6097be22365d47015e108588d31f497dc3bfb", "status": "draft", "title": "Complex numbers, conjugates and modulus", "topics": ["mathematics", "algebra", "geometry", "complex numbers, conjugates and modulus"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Complex numbers, conjugates and modulus

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:complex-number; revision 0.1.0-draft. Setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle. Expression: $z=a+bi,\quad i^2=-1,\quad\bar z=a-bi,\quad |z|=\sqrt{a^2+b^2}.$. Conditions required for a defined value (a case may test their violation): The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly. Scope: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.

## Schema Version

0.1.0

## Id

math:concept:complex-number

## Slug

complex-number

## Type

concept

## Title

Complex numbers, conjugates and modulus

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

- complex numbers, conjugates and modulus

## Branches

- algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How far is a plotter offset from the origin, and what does reflection preserve?

## Meaning

A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:complex-multiplication
  - math:concept:pythagorean-theorem
- depth:
  []

## Definition

- setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
- formal latex: z=a+bi,\quad i^2=-1,\quad\bar z=a-bi,\quad |z|=\sqrt{a^2+b^2}.
- signature:
  - a: Real component
  - b: Imaginary component
  - z: Complex point represented by its components
  - i: Imaginary unit with square minus one
  - z̄: Conjugate reflected point
  - |z|: Modulus of the complex number
- conditions:
  - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- domain notes: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algebra-extension:complex
  - source:algebra-extension:conjugate

## Grammar

- pronunciation: Complex numbers, conjugates and modulus
- expression latex: z=a+bi,\quad i^2=-1,\quad\bar z=a-bi,\quad |z|=\sqrt{a^2+b^2}.
- formation rule: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
- precedence: Evaluate the declared component operations before the final quantity; preserve the stated variable domains.
- symbols:
  - Item:
    - token: a
    - role: Real component
    - type: Declared input or evaluated quantity
  - Item:
    - token: b
    - role: Imaginary component
    - type: Declared input or evaluated quantity
  - Item:
    - token: z
    - role: Complex point represented by its components
    - type: Declared input or evaluated quantity
  - Item:
    - token: i
    - role: Imaginary unit with square minus one
    - type: Declared input or evaluated quantity
  - Item:
    - token: z̄
    - role: Conjugate reflected point
    - type: Declared input or evaluated quantity
  - Item:
    - token: |z|
    - role: Modulus of the complex number
    - type: Declared input or evaluated quantity
- ast:
  - id: ast:complex-number:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:imag
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: b
      - scope ref: scope:complex-number
    - Item:
      - id: n:real
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: a
      - scope ref: scope:complex-number
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded algebra rule
      - ref: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
    - Item:
      - id: n:bound-imag
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:imag
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-imag
      - argument: n:real
  - scopes:
    - Item:
      - id: scope:complex-number
      - kind: modelExpression
      - free variables:
        - b
        - a
      - domain condition: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- parse errors:
  - Item:
    - input: An undeclared or out-of-range input
    - status: unsupported parameter
    - reason: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- ast coverage: Typed application outline for a bounded family; not a general expression parser.
- output symbol bindings:
  - a: real
  - b: imag
  - z: complexPoint
  - i: imaginaryUnit
  - z̄: conjugatePoint
  - |z|: output

## Properties

- Item:
  - claim: Conjugation preserves the modulus.
  - conditions: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - derivation: The squared real component a² and squared imaginary component b² sum to the squared modulus |z|². The imaginary component of the conjugate is −b. Its square is still b², so reflection preserves the sum and its nonnegative square root, the complex modulus.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:complex-number:case-1

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
  - target: math:concept:complex-multiplication
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Complex numbers, conjugates and modulus supplies a bounded preparation for complex multiplication.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:pythagorean-theorem
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Complex numbers, conjugates and modulus supplies a bounded preparation for pythagorean theorem.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:quadratic-equation
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Complex numbers, conjugates and modulus supplies a bounded preparation for quadratic equation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:complex-number:case-1
  - title: A plotter offset
  - role: applied_model
  - question: How far is a plotter offset from the origin, and what does reflection preserve?
  - setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
  - assumptions:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - inputs:
    - imag: 2
    - real: 3
  - steps:
    - Item:
      - index: 1
      - expression: b = 2; a = 3
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: z = a + bi; |z| = √(a² + b²); result ≈ 3.6055512755
      - reason: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
  - result:
    - approximate: 3.6055512755 dimensionless
  - interpretation: The common radius is √13; reflection changes the vertical sign.
  - independent check:
    - method: Square the two components and compare their sum with the square of the displayed radius; negating the imaginary component leaves the sum unchanged.
    - expected: 3.6055512755
  - limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - preset:
    - imag: 2
    - real: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- Item:
  - id: math:example:complex-number:case-2
  - title: A familiar radius
  - role: applied_model
  - question: How far is a plotter offset from the origin, and what does reflection preserve?
  - setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
  - assumptions:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - inputs:
    - imag: 4
    - real: 3
  - steps:
    - Item:
      - index: 1
      - expression: b = 4; a = 3
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: z = a + bi; |z| = √(a² + b²); result ≈ 5.0
      - reason: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
  - result:
    - approximate: 5.0 dimensionless
  - interpretation: The components form a 3–4–5 right triangle.
  - independent check:
    - method: Square the two components and compare their sum with the square of the displayed radius; negating the imaginary component leaves the sum unchanged.
    - expected: 5.0
  - limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - preset:
    - imag: 4
    - real: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- Item:
  - id: math:example:complex-number:case-3
  - title: Below the real axis
  - role: applied_model
  - question: How far is a plotter offset from the origin, and what does reflection preserve?
  - setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
  - assumptions:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - inputs:
    - imag: -4
    - real: 3
  - steps:
    - Item:
      - index: 1
      - expression: b = -4; a = 3
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: z = a + bi; |z| = √(a² + b²); result ≈ 5.0
      - reason: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
  - result:
    - approximate: 5.0 dimensionless
  - interpretation: Reflection gives a positive imaginary component but the same modulus.
  - independent check:
    - method: Square the two components and compare their sum with the square of the displayed radius; negating the imaginary component leaves the sum unchanged.
    - expected: 5.0
  - limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - preset:
    - imag: -4
    - real: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- Item:
  - id: math:example:complex-number:case-4
  - title: A real offset
  - role: applied_model
  - question: How far is a plotter offset from the origin, and what does reflection preserve?
  - setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
  - assumptions:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - inputs:
    - imag: 0
    - real: -2
  - steps:
    - Item:
      - index: 1
      - expression: b = 0; a = -2
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: z = a + bi; |z| = √(a² + b²); result ≈ 2.0
      - reason: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
  - result:
    - approximate: 2.0 dimensionless
  - interpretation: The conjugate coincides with the real point; the modulus is nonnegative.
  - independent check:
    - method: Square the two components and compare their sum with the square of the displayed radius; negating the imaginary component leaves the sum unchanged.
    - expected: 2.0
  - limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - preset:
    - imag: 0
    - real: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
- Item:
  - id: math:example:complex-number:case-5
  - title: The origin
  - role: applied_model
  - question: How far is a plotter offset from the origin, and what does reflection preserve?
  - setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
  - assumptions:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - inputs:
    - imag: 0
    - real: 0
  - steps:
    - Item:
      - index: 1
      - expression: b = 0; a = 0
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: z = a + bi; |z| = √(a² + b²); result ≈ 0.0
      - reason: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
  - result:
    - approximate: 0.0 dimensionless
  - interpretation: The origin has zero modulus and is its own conjugate.
  - independent check:
    - method: Square the two components and compare their sum with the square of the displayed radius; negating the imaginary component leaves the sum unchanged.
    - expected: 0.0
  - limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - preset:
    - imag: 0
    - real: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.

## Interactive

- component id: component:complex-number
- renderer id: complex-number-visual-model
- renderer version: 1
- model id: complex-number-visual-model
- model revision: 1
- expression id: ast:complex-number:expression
- interaction status: implemented
- description: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
- controls:
  - Item:
    - id: imag
    - type: number
    - default: 2
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: real
    - type: number
    - default: 3
    - min: -4
    - max: 4
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - imag: 2
      - real: 3
    - status: valid
    - output: 3.605551275463989
  - Item:
    - input:
      - imag: 4
      - real: 3
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - imag: -4
      - real: 3
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - imag: 0
      - real: -2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - imag: 0
      - real: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - imag: -1
      - real: -1
    - status: valid
    - output: 1.4142135623730951
  - Item:
    - input:
      - imag: 0.5
      - real: 1.5
    - status: valid
    - output: 1.5811388300841898
  - Item:
    - input:
      - imag: 4
      - real: -4
    - status: valid
    - output: 5.656854249492381
  - Item:
    - input:
      - imag: -3
      - real: 0
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - imag: 1e-160
      - real: 2
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - imag: 1e-200
      - real: 2
    - status: numeric_precision
  - Item:
    - input:
      - imag: 5
      - real: 0
    - status: invalid_parameters
  - Item:
    - input:
      - imag: 0
      - real: true
    - status: invalid_parameters
- compute: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
- numeric tolerance: 1e-10
- invariants:
  - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - Story, controls, calculations and both views use one evaluated state.
- limits:
  - The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
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
  - prompt: How far is a plotter offset from the origin, and what does reflection preserve?
  - answer: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.
- Item:
  - prompt: Which assumptions make this picture valid?
  - answer: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.

## Representations

- Item:
  - kind: geometry
  - description: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.
- Item:
  - kind: graph
  - description: Hold the other inputs fixed and graph the declared primary result against Imaginary component b. Real-root counts are isolated evaluated dots, never fractional counts.
- Item:
  - kind: substitution
  - description: A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.

## Applications

- Item:
  - context: A plotter offset
  - mapping: The common radius is √13; reflection changes the vertical sign.
  - limitations: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - evidence kind: constructed_example
  - example ref: math:example:complex-number:case-1
- Item:
  - context: A familiar radius
  - mapping: The components form a 3–4–5 right triangle.
  - limitations: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.
  - evidence kind: constructed_example
  - example ref: math:example:complex-number:case-2

## Source Refs

- source:algebra-extension:complex
- source:algebra-extension:conjugate

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Added a bounded algebra family with original story, independent reference, matching preview and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:algebra-extension:complex. [OpenStax · Complex Numbers and Polar Form](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers). Locator: Definition of complex modulus as distance in the complex plane. Conjugation definition also inspected in section 2.4.. Verification: Definition-level source inspected 2026-11-02. Original bounded model and examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original scenario, diagrams, calculations and examples; no source exercise or illustration reproduced.

- Source ID: source:algebra-extension:conjugate. [OpenStax · Complex Numbers](https://openstax.org/books/college-algebra-2e/pages/2-4-complex-numbers). Locator: Complex plane and conjugation of a real-plus-imaginary representation.. Verification: Definition-level source inspected 2026-11-02; independent mathematical and exact-edition book review remains open.. Rights: Original plotter scenario; no source exercise or illustration reproduced.
