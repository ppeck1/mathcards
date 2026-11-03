---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:complex-number:case-1", "id": "math:example:complex-number:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:complex-number", "example_id": "math:example:complex-number:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "87e05d95d41a13bd3428beeae1e6097be22365d47015e108588d31f497dc3bfb"}, "purpose": "How far is a plotter offset from the origin, and what does reflection preserve?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "87e05d95d41a13bd3428beeae1e6097be22365d47015e108588d31f497dc3bfb", "status": "draft", "title": "A plotter offset", "topics": ["mathematics", "algebra", "geometry", "complex numbers, conjugates and modulus"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# A plotter offset

Parent card: math:concept:complex-number; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:complex-number; revision 0.1.0-draft. Setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle. Expression: $z=a+bi,\quad i^2=-1,\quad\bar z=a-bi,\quad |z|=\sqrt{a^2+b^2}.$. Conditions required for a defined value (a case may test their violation): The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly. Scope: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.

Case unit math:example:complex-number:case-1. Setting: A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle. Inputs: {"imag": 2, "real": 3}. Result: {"approximate": "3.6055512755 dimensionless"}. Limits: The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:algebra-extension:complex. [OpenStax · Complex Numbers and Polar Form](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers). Locator: Definition of complex modulus as distance in the complex plane. Conjugation definition also inspected in section 2.4.. Verification: Definition-level source inspected 2026-11-02. Original bounded model and examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original scenario, diagrams, calculations and examples; no source exercise or illustration reproduced.

- Source ID: source:algebra-extension:conjugate. [OpenStax · Complex Numbers](https://openstax.org/books/college-algebra-2e/pages/2-4-complex-numbers). Locator: Complex plane and conjugation of a real-plus-imaginary representation.. Verification: Definition-level source inspected 2026-11-02; independent mathematical and exact-edition book review remains open.. Rights: Original plotter scenario; no source exercise or illustration reproduced.
