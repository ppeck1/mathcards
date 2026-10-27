---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:logical-connectives:false-antecedent", "id": "math:example:logical-connectives:false-antecedent", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:logical-connectives", "example_id": "math:example:logical-connectives:false-antecedent", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6f706c8a5a153f42bea090207dd4999e22342be57dcf4935f9613a90f19643e9"}, "purpose": "Test two stated workshop requirements separately, then follow their truth values through a chosen logical connective.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6f706c8a5a153f42bea090207dd4999e22342be57dcf4935f9613a90f19643e9", "status": "draft", "title": "Inspect a material conditional", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "conjunction", "disjunction", "truth table", "material conditional", "propositional logic"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Inspect a material conditional

Parent card: math:concept:logical-connectives; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:logical-connectives; revision 0.1.0-draft. Setting: Classical two-valued propositional logic realized by two inclusive dimension tests on one panel. Expression: $P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad P\land Q,\ P\lor Q,\ P\to Q,\ P\leftrightarrow Q,\ \neg P.$. Conditions required for a defined value (a case may test their violation): Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included. Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true. P→Q is false exactly for P true and Q false. P↔Q is true when the two truth values agree. ¬P reverses P and ignores Q. The material conditional states a truth-table relation; it does not by itself express causation, relevance, a promise or the full meaning of an ordinary-language conditional. Scope: The numeric dimension domain supplies concrete statements. Truth values change at thresholds; smooth movement of a panel does not create a partly true statement.

Case unit math:example:logical-connectives:false-antecedent. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"length": 3, "operation": "implies", "width": 2}. Result: {"exact": "True"}. Limits: The material conditional does not certify the panel or assert a causal relationship.

## Complete worked case

- id: math:example:logical-connectives:false-antecedent
- title: Inspect a material conditional
- role: applied_model
- question: What is P→Q for a 3 cm by 2 cm panel?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
- inputs:
  - length: 3
  - width: 2
  - operation: implies
- steps:
  - Item:
    - index: 1
    - expression: P=False and Q=False.
    - reason: Both dimension comparisons fail.
  - Item:
    - index: 2
    - expression: P→Q=¬P∨Q=True∨False=True.
    - reason: The material conditional fails only for True→False.
- result:
  - exact: True
- interpretation: The truth-table conditional is true despite both requirements failing.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: Rewrite the conditional as ¬P∨Q and evaluate its disjunction.
- limits: The material conditional does not certify the panel or assert a causal relationship.
- preset:
  - length: 3
  - width: 2
  - operation: implies
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.

## Written exploration recipe

- component id: component:logical-connectives
- renderer id: logical-connectives-visual-model
- renderer version: 1
- model id: logical-connectives-visual-model
- model revision: 1
- expression id: ast:logical-connectives:expression
- interaction status: implemented
- description: A centimetre-scale panel, two threshold tests and a truth table show which concrete measurements determine P, Q and the compound result.
- controls:
  - Item:
    - id: length
    - type: number
    - default: 3
    - min: 0
    - max: 12
    - step: 0.01
  - Item:
    - id: width
    - type: number
    - default: 5
    - min: 0
    - max: 12
    - step: 0.01
  - Item:
    - id: operation
    - type: enum
    - default: and
    - values:
      - and
      - or
      - implies
      - iff
      - not
- expected cases:
  - Item:
    - input:
      - length: 3
      - width: 5
      - operation: and
    - output: 0
  - Item:
    - input:
      - length: 6
      - width: 4
      - operation: and
    - output: 1
  - Item:
    - input:
      - length: 6
      - width: 3.999
      - operation: and
    - output: 0
  - Item:
    - input:
      - length: 5.999
      - width: 4
      - operation: and
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 5
      - operation: or
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 2
      - operation: or
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 2
      - operation: implies
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 2
      - operation: implies
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 2
      - operation: iff
    - output: 1
  - Item:
    - input:
      - length: 6
      - width: 5
      - operation: not
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 5
      - operation: xor
    - status: invalid_parameters
  - Item:
    - input:
      - length: -1
      - width: 5
      - operation: and
    - status: invalid_parameters
- compute: Let P mean x≥6 cm and Q mean y≥4 cm. Choose P∧Q, P∨Q, P→Q, P↔Q or ¬P, then apply its classical truth table.
- numeric tolerance: 1e-10
- invariants:
  - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - P→Q is false exactly for P true and Q false. P↔Q is true when the two truth values agree. ¬P reverses P and ignores Q.
  - The material conditional states a truth-table relation; it does not by itself express causation, relevance, a promise or the full meaning of an ordinary-language conditional.
- limits:
  - The executable predicates are two fixed inclusive dimension requirements; arbitrary formulas and predicates are not parsed.
  - The visual uses classical two-valued logic and inclusive OR, rather than graded truth or probabilistic belief.
  - Truth tables capture only a stated truth-functional interpretation of language.
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

- Source ID: source:openstax:statements-quantifiers. [Contemporary Mathematics, 2.1 Statements and Quantifiers](https://openstax.org/books/contemporary-mathematics/pages/2-1-statements-and-quantifiers). Locator: Logical statements and truth values; all, some and none; negation of quantified claims. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:compound-statements. [Contemporary Mathematics, 2.2 Compound Statements](https://openstax.org/books/contemporary-mathematics/pages/2-2-compound-statements). Locator: Conjunction, inclusive disjunction, negation, material conditional and biconditional, Table 2.3. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:truth-tables. [Contemporary Mathematics, 2.3 Constructing Truth Tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables). Locator: Enumeration of the four two-proposition assignments; truth tables for negation, conjunction and inclusive disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
