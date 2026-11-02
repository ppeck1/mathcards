---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:partial-order:case-3", "id": "math:example:partial-order:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:partial-order", "example_id": "math:example:partial-order:case-3", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "62cf2a30cf12baf3c5dd31574006c5fb48d20988323c2282a0a80fff7554914a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1c0c6310526f92bf369523c8a89e7ebbd7abca018706fee763809717fd4c6fa9"}, "purpose": "Can two tool kits always be ranked?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1c0c6310526f92bf369523c8a89e7ebbd7abca018706fee763809717fd4c6fa9", "status": "draft", "title": "Choose A = {lamp, ruler, brush}", "topics": ["mathematics", "logic", "partial orders"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Choose A = {lamp, ruler, brush}

Parent card: math:concept:partial-order; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:partial-order; revision 0.1.0-draft. Setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools. Expression: $A\preceq B\ \Longleftrightarrow\ A\subseteq B.$. Conditions required for a defined value (a case may test their violation): All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

Case unit math:example:partial-order:case-3. Setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools. Inputs: {"a": 7, "b": 5}. Result: {"exact": "False: A is not included in B"}. Limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

## Complete worked case

- id: math:example:partial-order:case-3
- title: Choose A = {lamp, ruler, brush}
- role: applied_model
- question: Can two tool kits always be ranked?
- setting: Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.
- assumptions:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- inputs:
  - a: 7
  - b: 5
- steps:
  - Item:
    - index: 1
    - expression: A = {lamp, ruler, brush}; B = {lamp, brush}
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: A ≤ B exactly when A ⊆ B
    - reason: Compare element membership, not the integer encoding of the kit.
  - Item:
    - index: 3
    - expression: Result ≈ 0 truth value
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - exact: False: A is not included in B
- interpretation: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 0
- limits: All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- preset:
  - a: 7
  - b: 5
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.

## Written exploration recipe

- component id: component:partial-order
- renderer id: partial-order-visual-model
- renderer version: 1
- model id: partial-order-visual-model
- model revision: 1
- expression id: ast:partial-order:expression
- interaction status: implemented
- description: The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.
- controls:
  - Item:
    - id: a
    - type: number
    - default: 3
    - min: 0
    - max: 7
    - step: 1
    - value labels:
      - 0: {}
      - 1: {lamp}
      - 2: {ruler}
      - 3: {lamp, ruler}
      - 4: {brush}
      - 5: {lamp, brush}
      - 6: {ruler, brush}
      - 7: {lamp, ruler, brush}
  - Item:
    - id: b
    - type: number
    - default: 5
    - min: 0
    - max: 7
    - step: 1
    - value labels:
      - 0: {}
      - 1: {lamp}
      - 2: {ruler}
      - 3: {lamp, ruler}
      - 4: {brush}
      - 5: {lamp, brush}
      - 6: {ruler, brush}
      - 7: {lamp, ruler, brush}
- expected cases:
  - Item:
    - input:
      - a: 3
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 0
      - b: 5
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 7
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 3
      - b: 7
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 2
      - b: 5
    - status: valid
    - output: 0
  - Item:
    - input:
      - a: 5
      - b: 5
    - status: valid
    - output: 1
  - Item:
    - input:
      - a: 8
      - b: 5
    - status: invalid_parameters
  - Item:
    - input:
      - a: 0.5
      - b: 5
    - status: invalid_parameters
- compute: Compare element membership, not the integer encoding of the kit.
- numeric tolerance: 1e-10
- invariants:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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

- Source ID: source:systems:order. [Doerr and Levasseur · Lattices](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/13:_Boolean_Algebra/13.02:_Lattices). Locator: Lattice operations and distributivity; no exact-edition Grätzer coverage is asserted.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
