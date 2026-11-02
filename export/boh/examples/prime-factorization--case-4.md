---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:prime-factorization:case-4", "id": "math:example:prime-factorization:case-4", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:prime-factorization", "example_id": "math:example:prime-factorization:case-4", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "bdab90e42e091d33179feec3810246ac7ae45ef232386734df2d934157087d53"}, "purpose": "Which prime group sizes rebuild the original pack?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "bdab90e42e091d33179feec3810246ac7ae45ef232386734df2d934157087d53", "status": "draft", "title": "The multiplicative identity", "topics": ["mathematics", "numbers-number-theory", "prime factorization"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# The multiplicative identity

Parent card: math:concept:prime-factorization; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:prime-factorization; revision 0.1.0-draft. Setting: A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept. Expression: $n=\prod_{j=1}^{s}p_j,\quad p_j\text{ prime}.$. Conditions required for a defined value (a case may test their violation): The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

Case unit math:example:prime-factorization:case-4. Setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors. Inputs: {"number": 1}. Result: {"exact": "0 factors"}. Limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

## Complete worked case

- id: math:example:prime-factorization:case-4
- title: The multiplicative identity
- role: applied_model
- question: Which prime group sizes rebuild the original pack?
- setting: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
- assumptions:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- inputs:
  - number: 1
- steps:
  - Item:
    - index: 1
    - expression: n = 1
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 1 = empty product
    - reason: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
- result:
  - exact: 0 factors
- interpretation: One has no prime factors and is neither prime nor composite.
- independent check:
  - method: The empty product equals 1, so one has no prime factors.
  - expected: 0
- limits: The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
- preset:
  - number: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.

## Written exploration recipe

- component id: component:prime-factorization
- renderer id: prime-factorization-visual-model
- renderer version: 1
- model id: prime-factorization-visual-model
- model revision: 1
- expression id: ast:prime-factorization:expression
- interaction status: implemented
- description: A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.
- controls:
  - Item:
    - id: number
    - type: number
    - default: 84
    - min: 1
    - max: 120
    - step: 1
- expected cases:
  - Item:
    - input:
      - number: 84
    - status: valid
    - output: 4
  - Item:
    - input:
      - number: 64
    - status: valid
    - output: 6
  - Item:
    - input:
      - number: 97
    - status: valid
    - output: 1
  - Item:
    - input:
      - number: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - number: 90
    - status: valid
    - output: 4
  - Item:
    - input:
      - number: 2
    - status: valid
    - output: 1
  - Item:
    - input:
      - number: 120
    - status: valid
    - output: 5
  - Item:
    - input:
      - number: 0
    - status: invalid_parameters
  - Item:
    - input:
      - number: 2.5
    - status: invalid_parameters
- compute: Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.
- numeric tolerance: 1e-10
- invariants:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.
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

- Source ID: source:number-foundations:prime. [OpenStax · Prime and Composite Numbers](https://openstax.org/books/contemporary-mathematics/pages/3-1-prime-and-composite-numbers). Locator: Prime/composite definitions and prime factorization. No cryptographic timing or historical priority claims are used.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
