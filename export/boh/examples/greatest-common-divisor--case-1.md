---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:greatest-common-divisor:case-1", "id": "math:example:greatest-common-divisor:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:greatest-common-divisor", "example_id": "math:example:greatest-common-divisor:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3ed104aeed1d4b672a5963a318fff0b516338e54ee44d7d10f0f2517a0d7f16f"}, "purpose": "What is the longest piece that cuts both ribbons without waste?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3ed104aeed1d4b672a5963a318fff0b516338e54ee44d7d10f0f2517a0d7f16f", "status": "draft", "title": "Cut two workshop ribbons", "topics": ["mathematics", "numbers-number-theory", "greatest common divisor"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Cut two workshop ribbons

Parent card: math:concept:greatest-common-divisor; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:greatest-common-divisor; revision 0.1.0-draft. Setting: Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece. Expression: $\operatorname{gcd}(a,b)=\operatorname{gcd}(b,a\bmod b),\quad a=qb+r.$. Conditions required for a defined value (a case may test their violation): Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

Case unit math:example:greatest-common-divisor:case-1. Setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain. Inputs: {"first": 24, "second": 18}. Result: {"exact": "6 cm"}. Limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

## Complete worked case

- id: math:example:greatest-common-divisor:case-1
- title: Cut two workshop ribbons
- role: applied_model
- question: What is the longest piece that cuts both ribbons without waste?
- setting: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
- assumptions:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- inputs:
  - first: 24
  - second: 18
- steps:
  - Item:
    - index: 1
    - expression: a = 24; b = 18
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 24 = 1 × 18 + 6; 18 = 3 × 6
    - reason: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
- result:
  - exact: 6 cm
- interpretation: The longest common cut is six centimetres.
- independent check:
  - method: The positive lengths that divide both 24 cm and 18 cm are 1, 2, 3, 6 cm. The longest common cut is 6 cm.
  - expected: 6
- limits: Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
- preset:
  - first: 24
  - second: 18
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.

## Written exploration recipe

- component id: component:greatest-common-divisor
- renderer id: greatest-common-divisor-visual-model
- renderer version: 1
- model id: greatest-common-divisor-visual-model
- model revision: 1
- expression id: ast:greatest-common-divisor:expression
- interaction status: implemented
- description: Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.
- controls:
  - Item:
    - id: first
    - type: number
    - default: 24
    - min: 1
    - max: 60
    - step: 1
  - Item:
    - id: second
    - type: number
    - default: 18
    - min: 1
    - max: 60
    - step: 1
- expected cases:
  - Item:
    - input:
      - first: 24
      - second: 18
    - status: valid
    - output: 6
  - Item:
    - input:
      - first: 35
      - second: 14
    - status: valid
    - output: 7
  - Item:
    - input:
      - first: 17
      - second: 12
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 12
      - second: 12
    - status: valid
    - output: 12
  - Item:
    - input:
      - first: 60
      - second: 15
    - status: valid
    - output: 15
  - Item:
    - input:
      - first: 1
      - second: 60
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 60
      - second: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - first: 0
      - second: 18
    - status: invalid_parameters
  - Item:
    - input:
      - first: 24
      - second: 2.5
    - status: invalid_parameters
- compute: Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.
- numeric tolerance: 1e-10
- invariants:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.
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
