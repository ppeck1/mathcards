---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:rational-number:case-5", "id": "math:example:rational-number:case-5", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:rational-number", "example_id": "math:example:rational-number:case-5", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ad2b28db9be491d72dae82a0b5d6e28dcb2a344077b1604d00fb4224e9661778"}, "purpose": "Can a fraction change its name without changing its length?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ad2b28db9be491d72dae82a0b5d6e28dcb2a344077b1604d00fb4224e9661778", "status": "draft", "title": "Keep a nonterminating decimal exact", "topics": ["mathematics", "numbers-number-theory", "rational numbers and fractions"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Keep a nonterminating decimal exact

Parent card: math:concept:rational-number; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:rational-number; revision 0.1.0-draft. Setting: A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length. Expression: $\frac{a}{b}=\frac{p}{q},\quad p=a/d,\quad q=b/d,\quad d=\operatorname{gcd}(|a|,b).$. Conditions required for a defined value (a case may test their violation): The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

Case unit math:example:rational-number:case-5. Setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position. Inputs: {"denominator": 6, "numerator": 2}. Result: {"exact": "1/3 m"}. Limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

## Complete worked case

- id: math:example:rational-number:case-5
- title: Keep a nonterminating decimal exact
- role: applied_model
- question: Can a fraction change its name without changing its length?
- setting: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
- assumptions:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- inputs:
  - numerator: 2
  - denominator: 6
- steps:
  - Item:
    - index: 1
    - expression: a = 2; b = 6
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 2/6 = 1/3
    - reason: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
- result:
  - exact: 1/3 m
- interpretation: The exact fraction remains one third even when its decimal display must be rounded.
- independent check:
  - method: Cross-multiply the original and reduced fractions: 2 × 3 = 6 × (1) = 6. The reduced numerator and denominator share no positive divisor above 1.
  - expected: 0.3333333333333333
- limits: The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
- preset:
  - numerator: 2
  - denominator: 6
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.

## Written exploration recipe

- component id: component:rational-number
- renderer id: rational-number-visual-model
- renderer version: 1
- model id: rational-number-visual-model
- model revision: 1
- expression id: ast:rational-number:expression
- interaction status: implemented
- description: A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.
- controls:
  - Item:
    - id: numerator
    - type: number
    - default: 6
    - min: -12
    - max: 12
    - step: 1
  - Item:
    - id: denominator
    - type: number
    - default: 8
    - min: 1
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - numerator: 6
      - denominator: 8
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - numerator: -3
      - denominator: 4
    - status: valid
    - output: -0.75
  - Item:
    - input:
      - numerator: 0
      - denominator: 7
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - numerator: 12
      - denominator: 1
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - numerator: 2
      - denominator: 6
    - status: valid
    - output: 0.3333333333333333
  - Item:
    - input:
      - numerator: -12
      - denominator: 12
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - numerator: 1
      - denominator: 12
    - status: valid
    - output: 0.08333333333333333
  - Item:
    - input:
      - numerator: 6
      - denominator: 0
    - status: invalid_parameters
  - Item:
    - input:
      - numerator: 0.5
      - denominator: 8
    - status: invalid_parameters
- compute: Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.
- numeric tolerance: 1e-10
- invariants:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.
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

- Source ID: source:number-foundations:fraction. [OpenStax · Rational Numbers](https://openstax.org/books/contemporary-mathematics/pages/3-4-rational-numbers). Locator: Rational numbers, equivalent fractions and simplification.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
