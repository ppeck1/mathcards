---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:modular-arithmetic:case-1", "id": "math:example:modular-arithmetic:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:modular-arithmetic", "example_id": "math:example:modular-arithmetic:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ed619272206e805b0456e53b02d86d52136584a78d36a8edb559f0274ff3c59a"}, "purpose": "What is left after every full tray is packed?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ed619272206e805b0456e53b02d86d52136584a78d36a8edb559f0274ff3c59a", "status": "draft", "title": "Pack a workshop order", "topics": ["mathematics", "numbers-number-theory", "modular arithmetic and remainders"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Pack a workshop order

Parent card: math:concept:modular-arithmetic; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:modular-arithmetic; revision 0.1.0-draft. Setting: Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder. Expression: $n=qm+r,\quad q=\lfloor n/m\rfloor,\quad0\le r<m.$. Conditions required for a defined value (a case may test their violation): This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

Case unit math:example:modular-arithmetic:case-1. Setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added. Inputs: {"modulus": 6, "total": 23}. Result: {"exact": "5 items"}. Limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

## Complete worked case

- id: math:example:modular-arithmetic:case-1
- title: Pack a workshop order
- role: applied_model
- question: What is left after every full tray is packed?
- setting: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
- assumptions:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- inputs:
  - total: 23
  - modulus: 6
- steps:
  - Item:
    - index: 1
    - expression: n = 23; m = 6
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 23 = 3 × 6 + 5
    - reason: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
- result:
  - exact: 5 items
- interpretation: Three full trays hold eighteen counters; five remain.
- independent check:
  - method: Reconstruct the order: 23 = 3 × 6 + 5. The remainder 5 is nonnegative and smaller than the tray capacity 6.
  - expected: 5
- limits: This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
- preset:
  - total: 23
  - modulus: 6
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.

## Written exploration recipe

- component id: component:modular-arithmetic
- renderer id: modular-arithmetic-visual-model
- renderer version: 1
- model id: modular-arithmetic-visual-model
- model revision: 1
- expression id: ast:modular-arithmetic:expression
- interaction status: implemented
- description: A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.
- controls:
  - Item:
    - id: total
    - type: number
    - default: 23
    - min: 0
    - max: 60
    - step: 1
  - Item:
    - id: modulus
    - type: number
    - default: 6
    - min: 2
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - total: 23
      - modulus: 6
    - status: valid
    - output: 5
  - Item:
    - input:
      - total: 24
      - modulus: 6
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 0
      - modulus: 6
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 60
      - modulus: 12
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 35
      - modulus: 8
    - status: valid
    - output: 3
  - Item:
    - input:
      - total: 1
      - modulus: 12
    - status: valid
    - output: 1
  - Item:
    - input:
      - total: 60
      - modulus: 2
    - status: valid
    - output: 0
  - Item:
    - input:
      - total: 2.5
      - modulus: 6
    - status: invalid_parameters
  - Item:
    - input:
      - total: 23
      - modulus: 0
    - status: invalid_parameters
- compute: Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.
- numeric tolerance: 1e-10
- invariants:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.
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

- Source ID: source:number-foundations:integer. [James Aspnes · Number Theory](https://www.cs.yale.edu/homes/aspnes/pinewiki/NumberTheory.html). Locator: Sections 1, 2.1 and 4: nonnegative remainders, common divisors and the Euclidean recurrence. The archive warns that some formulas are broken; only the inspected definitions and algorithm are used.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
