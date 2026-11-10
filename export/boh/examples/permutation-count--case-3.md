---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:permutation-count:case-3", "id": "math:example:permutation-count:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:permutation-count", "example_id": "math:example:permutation-count:case-3", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3051242e0755a469cb39e1013f87d69f0f35a888f85cdfee729ed1942eac6471"}, "purpose": "How many ways can different people fill different roles?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3051242e0755a469cb39e1013f87d69f0f35a888f85cdfee729ed1942eac6471", "status": "draft", "title": "Give every volunteer a role", "topics": ["mathematics", "discrete-mathematics", "permutations and factorials"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Give every volunteer a role

Parent card: math:concept:permutation-count; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:permutation-count; revision 0.1.0-draft. Setting: Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment. Expression: $P(n,r)=\frac{n!}{(n-r)!},\quad0\le r\le n\le8.$. Conditions required for a defined value (a case may test their violation): Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included. All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state. Scope: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

Case unit math:example:permutation-count:case-3. Setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage. Inputs: {"available": 5, "slots": 5}. Result: {"exact": "120 arrangements"}. Limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

## Complete worked case

- id: math:example:permutation-count:case-3
- title: Give every volunteer a role
- role: applied_model
- question: How many ways can different people fill different roles?
- setting: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
- assumptions:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- inputs:
  - available: 5
  - slots: 5
- steps:
  - Item:
    - index: 1
    - expression: n = 5; r = 5
    - reason: Use the stated whole-number conditions.
  - Item:
    - index: 2
    - expression: 5! = 5 × 4 × 3 × 2 × 1 = 120
    - reason: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
- result:
  - exact: 120 arrangements
- interpretation: All people are used, but their order among roles still matters.
- independent check:
  - method: List every ordered selection of 5 different people from 5. There are 120 distinct assignments; exchanging two role holders produces a different assignment.
  - expected: 120
- limits: Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
- preset:
  - available: 5
  - slots: 5
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.

## Written exploration recipe

- component id: component:permutation-count
- renderer id: permutation-count-visual-model
- renderer version: 1
- model id: permutation-count-visual-model
- model revision: 1
- expression id: ast:permutation-count:expression
- interaction status: implemented
- description: A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.
- controls:
  - Item:
    - id: available
    - type: number
    - default: 5
    - min: 0
    - max: 8
    - step: 1
  - Item:
    - id: slots
    - type: number
    - default: 3
    - min: 0
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - available: 5
      - slots: 3
    - status: valid
    - output: 60
  - Item:
    - input:
      - available: 5
      - slots: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 5
      - slots: 5
    - status: valid
    - output: 120
  - Item:
    - input:
      - available: 8
      - slots: 2
    - status: valid
    - output: 56
  - Item:
    - input:
      - available: 0
      - slots: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 8
      - slots: 8
    - status: valid
    - output: 40320
  - Item:
    - input:
      - available: 1
      - slots: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - available: 3
      - slots: 4
    - status: invalid_parameters
  - Item:
    - input:
      - available: 5
      - slots: 1.5
    - status: invalid_parameters
- compute: Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.
- numeric tolerance: 1e-10
- invariants:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
  - All chosen inputs are whole numbers in the declared finite ranges. Both views and the story use the same evaluated state.
- limits:
  - Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.
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
