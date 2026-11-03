---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:binomial-coefficient:case-1", "id": "math:example:binomial-coefficient:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:binomial-coefficient", "example_id": "math:example:binomial-coefficient:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "48ad5d2e611419be8f013613868f0531f1a58ef2fe061f9509385885972ef4c6"}, "purpose": "How many teams remain when listing order does not matter?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "48ad5d2e611419be8f013613868f0531f1a58ef2fe061f9509385885972ef4c6", "status": "draft", "title": "Choose a three-person team", "topics": ["mathematics", "discrete-mathematics", "combinations and binomial coefficients"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Choose a three-person team

Parent card: math:concept:binomial-coefficient; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:binomial-coefficient; revision 0.1.0-draft. Setting: Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team. Expression: $\binom{n}{k}=\frac{n!}{k!(n-k)!},\quad0\le k\le n\le10.$. Conditions required for a defined value (a case may test their violation): Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

Case unit math:example:binomial-coefficient:case-1. Setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams. Inputs: {"available": 6, "chosen": 3}. Result: {"exact": "20 selections"}. Limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

## Complete worked case

- id: math:example:binomial-coefficient:case-1
- title: Choose a three-person team
- role: applied_model
- question: How many teams remain when listing order does not matter?
- setting: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
- assumptions:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- inputs:
  - available: 6
  - chosen: 3
- steps:
  - Item:
    - index: 1
    - expression: n = 6; k = 3
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: C(6,3) = 120/6 = 20
    - reason: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
- result:
  - exact: 20 selections
- interpretation: Six orders of each team correspond to one set of three members.
- independent check:
  - method: List all 3-person subsets of the 6 people, recording each team once regardless of order. The list contains 20 distinct teams.
  - expected: 20
- limits: Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
- preset:
  - available: 6
  - chosen: 3
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.

## Written exploration recipe

- component id: component:binomial-coefficient
- renderer id: binomial-coefficient-visual-model
- renderer version: 1
- model id: binomial-coefficient-visual-model
- model revision: 1
- expression id: ast:binomial-coefficient:expression
- interaction status: implemented
- description: Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.
- controls:
  - Item:
    - id: available
    - type: number
    - default: 6
    - min: 0
    - max: 10
    - step: 1
  - Item:
    - id: chosen
    - type: number
    - default: 3
    - min: 0
    - max: 10
    - step: 1
- expected cases:
  - Item:
    - input:
      - available: 6
      - chosen: 3
    - status: valid
    - output: 20
  - Item:
    - input:
      - available: 6
      - chosen: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 6
      - chosen: 6
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 8
      - chosen: 2
    - status: valid
    - output: 28
  - Item:
    - input:
      - available: 8
      - chosen: 6
    - status: valid
    - output: 28
  - Item:
    - input:
      - available: 0
      - chosen: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 10
      - chosen: 5
    - status: valid
    - output: 252
  - Item:
    - input:
      - available: 3
      - chosen: 4
    - status: invalid_parameters
  - Item:
    - input:
      - available: 6
      - chosen: 1.5
    - status: invalid_parameters
- compute: Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.
- numeric tolerance: 1e-10
- invariants:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.
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

- Source ID: source:number-foundations:counting. [OpenStax · Counting Principles](https://openstax.org/books/algebra-and-trigonometry/pages/13-5-counting-principles). Locator: Multiplication principle, ordered selections, factorials and unordered combinations.. Verification: Definition-level source inspected 2026-11-02. The bounded model and original examples remain author-derived; independent review and exact-edition book checks are pending.. Rights: Original workshop scenarios, explanations, diagrams and worked examples; no source exercise or illustration reproduced.
