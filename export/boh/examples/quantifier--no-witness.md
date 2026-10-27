---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:quantifier:no-witness", "id": "math:example:quantifier:no-witness", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:quantifier", "example_id": "math:example:quantifier:no-witness", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9fc15feb4939210cf4eb85cd3a4387f1743c64866e3a5a3b7720fe89587dba88"}, "purpose": "Change one length requirement and see which known strips witness an existential claim or refute a universal claim.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9fc15feb4939210cf4eb85cd3a4387f1743c64866e3a5a3b7720fe89587dba88", "status": "draft", "title": "Move beyond the longest strip", "topics": ["mathematics", "language-foundations", "logic", "sets", "for all", "there exists", "universal claim", "existential claim", "witness", "counterexample"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Move beyond the longest strip

Parent card: math:concept:quantifier; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:quantifier; revision 0.1.0-draft. Setting: Universal and existential quantification over the complete finite nonempty domain of six stated strip lengths. Expression: $D=\{2,4,6,8,10,12\}\,\mathrm{cm},\quad P(x):x\ge h;\quad \forall x\in D\ P(x),\quad \exists x\in D\ P(x).$. Conditions required for a defined value (a case may test their violation): The complete domain D consists of six known strip lengths: 2,4,6,8,10 and 12 cm. Every strip is included in the check. The free parameter h is a real required length from zero to fourteen centimetres. The predicate P(x) is x≥h, including equality. The universal statement is true if all six elements satisfy P. The existential statement is true if at least one satisfies P; “some” does not mean “some but not all”. This finite nonempty domain permits a complete enumeration. An animation of these six cases does not establish a claim over all real numbers or an unspecified domain. Scope: The symbol x is bound inside a quantified statement; h remains a free parameter controlled by the learner. The domain itself stays fixed and nonempty in this executable family.

Case unit math:example:quantifier:no-witness. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"mode": "some", "threshold": 12.01}. Result: {"exact": "False; zero qualifying strips"}. Limits: This says nothing about lengths outside D.

## Complete worked case

- id: math:example:quantifier:no-witness
- title: Move beyond the longest strip
- role: applied_model
- question: At h=12.01 cm, is there a passing strip?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - The complete domain D consists of six known strip lengths: 2,4,6,8,10 and 12 cm. Every strip is included in the check.
  - The free parameter h is a real required length from zero to fourteen centimetres. The predicate P(x) is x≥h, including equality.
- inputs:
  - threshold: 12.01
  - mode: some
- steps:
  - Item:
    - index: 1
    - expression: Every x∈D is at most12 cm, and 12<12.01.
    - reason: Compare the complete domain with the requirement.
  - Item:
    - index: 2
    - expression: ∃x∈D P(x)=False.
    - reason: There is no witness in the specified domain.
- result:
  - exact: False; zero qualifying strips
- interpretation: The claim becomes false immediately above the included12 cm endpoint.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: The largest domain member fails, so all shorter members fail too.
- limits: This says nothing about lengths outside D.
- preset:
  - threshold: 12.01
  - mode: some
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The complete domain D consists of six known strip lengths: 2,4,6,8,10 and 12 cm. Every strip is included in the check.
  - The free parameter h is a real required length from zero to fourteen centimetres. The predicate P(x) is x≥h, including equality.

## Written exploration recipe

- component id: component:quantifier
- renderer id: quantifier-visual-model
- renderer version: 1
- model id: quantifier-visual-model
- model revision: 1
- expression id: ast:quantifier:expression
- interaction status: implemented
- description: Six measured strips share one centimetre scale. A moving requirement h marks each predicate outcome; the universal and existential truth results remain separate.
- controls:
  - Item:
    - id: threshold
    - type: number
    - default: 8
    - min: 0
    - max: 14
    - step: 0.01
  - Item:
    - id: mode
    - type: enum
    - default: all
    - values:
      - all
      - some
- expected cases:
  - Item:
    - input:
      - threshold: 8
      - mode: all
    - output: 0
  - Item:
    - input:
      - threshold: 2
      - mode: all
    - output: 1
  - Item:
    - input:
      - threshold: 2.0001
      - mode: all
    - output: 0
  - Item:
    - input:
      - threshold: 12
      - mode: some
    - output: 1
  - Item:
    - input:
      - threshold: 12.0001
      - mode: some
    - output: 0
  - Item:
    - input:
      - threshold: 0
      - mode: all
    - output: 1
  - Item:
    - input:
      - threshold: 14
      - mode: some
    - output: 0
  - Item:
    - input:
      - threshold: 8
      - mode: some
    - output: 1
  - Item:
    - input:
      - threshold: 14
      - mode: all
    - output: 0
  - Item:
    - input:
      - threshold: 8
      - mode: any
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 15
      - mode: all
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: -1
      - mode: some
    - status: invalid_parameters
- compute: Use D={2,4,6,8,10,12} cm and P(x): x≥h. Count the six predicate outcomes. ∀x∈D P(x) is true exactly when all six pass; ∃x∈D P(x) is true exactly when at least one passes. Select all or some for the primary truth result.
- numeric tolerance: 1e-10
- invariants:
  - The complete domain D consists of six known strip lengths: 2,4,6,8,10 and 12 cm. Every strip is included in the check.
  - The free parameter h is a real required length from zero to fourteen centimetres. The predicate P(x) is x≥h, including equality.
  - The universal statement is true if all six elements satisfy P. The existential statement is true if at least one satisfies P; “some” does not mean “some but not all”.
  - This finite nonempty domain permits a complete enumeration. An animation of these six cases does not establish a claim over all real numbers or an unspecified domain.
- limits:
  - Only the six-element domain and threshold predicate are executable; arbitrary domains and formulas are not parsed.
  - A complete finite check here supplies no proof about a larger or infinite domain.
  - A truth value is not the passing fraction or a probability.
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
