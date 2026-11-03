---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:numeral-system:case-5", "id": "math:example:numeral-system:case-5", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:numeral-system", "example_id": "math:example:numeral-system:case-5", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1ac47e666e07444a363aa789429e965dc77909df88a7337c3251814e7513baa4"}, "purpose": "What changes when the same counter is written in another base?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1ac47e666e07444a363aa789429e965dc77909df88a7337c3251814e7513baa4", "status": "draft", "title": "Use familiar decimal places", "topics": ["mathematics", "numbers-number-theory", "positional numeral systems"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Use familiar decimal places

Parent card: math:concept:numeral-system; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:numeral-system; revision 0.1.0-draft. Setting: Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same. Expression: $n=\sum_{j=0}^{s-1}d_j b^j,\quad0\le d_j<b.$. Conditions required for a defined value (a case may test their violation): Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

Case unit math:example:numeral-system:case-5. Setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count. Inputs: {"base": 10, "value": 37}. Result: {"exact": "37 items"}. Limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

## Complete worked case

- id: math:example:numeral-system:case-5
- title: Use familiar decimal places
- role: applied_model
- question: What changes when the same counter is written in another base?
- setting: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
- assumptions:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- inputs:
  - value: 37
  - base: 10
- steps:
  - Item:
    - index: 1
    - expression: n = 37; b = 10
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 37₁₀ = 3 × 10 + 7 × 1
    - reason: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
- result:
  - exact: 37 items
- interpretation: The decimal representation follows the same positional rule.
- independent check:
  - method: Add the place contributions: 30 + 7 = 37. Every digit is between 0 and 9, so this is a valid base-10 representation of the same quantity.
  - expected: 37
- limits: Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
- preset:
  - value: 37
  - base: 10
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.

## Written exploration recipe

- component id: component:numeral-system
- renderer id: numeral-system-visual-model
- renderer version: 1
- model id: numeral-system-visual-model
- model revision: 1
- expression id: ast:numeral-system:expression
- interaction status: implemented
- description: A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.
- controls:
  - Item:
    - id: value
    - type: number
    - default: 27
    - min: 0
    - max: 63
    - step: 1
  - Item:
    - id: base
    - type: number
    - default: 2
    - min: 2
    - max: 10
    - step: 1
- expected cases:
  - Item:
    - input:
      - value: 27
      - base: 2
    - status: valid
    - output: 27
  - Item:
    - input:
      - value: 27
      - base: 3
    - status: valid
    - output: 27
  - Item:
    - input:
      - value: 63
      - base: 2
    - status: valid
    - output: 63
  - Item:
    - input:
      - value: 0
      - base: 10
    - status: valid
    - output: 0
  - Item:
    - input:
      - value: 37
      - base: 10
    - status: valid
    - output: 37
  - Item:
    - input:
      - value: 1
      - base: 2
    - status: valid
    - output: 1
  - Item:
    - input:
      - value: 63
      - base: 10
    - status: valid
    - output: 63
  - Item:
    - input:
      - value: 27
      - base: 1
    - status: invalid_parameters
  - Item:
    - input:
      - value: 64
      - base: 2
    - status: invalid_parameters
- compute: Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.
- numeric tolerance: 1e-10
- invariants:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.
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

- Source ID: source:number-foundations:numeral. [Carl Burch · More About Binary Numbers](https://www.cs.cmu.edu/~cburch/pgss97/binary.html). Locator: Binary positional weights and conversion to/from base ten; the ordinary-base generalization is author-derived.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
