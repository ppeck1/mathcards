---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:equivalence:de-morgan-current-false", "id": "math:example:equivalence:de-morgan-current-false", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:equivalence", "example_id": "math:example:equivalence:de-morgan-current-false", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "60990c323a0741e093756ab4631d9ebf18797aee7f9a2e6b87993c5f64b16e54"}, "purpose": "Change a panel predicate and trace two formula paths while checking whether they agree on every truth assignment.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "60990c323a0741e093756ab4631d9ebf18797aee7f9a2e6b87993c5f64b16e54", "status": "draft", "title": "Compare two false current results", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "De Morgan law", "equivalent statements", "truth-table equivalence", "tautological equivalence"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Compare two false current results

Parent card: math:concept:equivalence; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:equivalence; revision 0.1.0-draft. Setting: Classical truth-functional equivalence of three fixed pairs of formulas in two independent propositions. Expression: $P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad\neg(P\land Q)\equiv\neg P\lor\neg Q;\quad(P\to Q)\equiv(\neg P\lor Q).$. Conditions required for a defined value (a case may test their violation): The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality. All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions. De Morgan’s pair ¬(P∧Q) and ¬P∨¬Q has zero mismatches. The implication pair P→Q and ¬P∨Q also has zero mismatches. The lookalike pair ¬(P∧Q) and ¬P∧¬Q differs at the two assignments with exactly one true input. Its other two matching rows do not establish equivalence. Scope: The complete finite truth table establishes equivalence for these propositional truth functions. The distinction is between current assignment truth and agreement for every assignment; it is not a claim about every possible natural-language meaning or arbitrary quantified formula.

Case unit math:example:equivalence:de-morgan-current-false. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"comparison": "de-morgan", "length": 9, "width": 5}. Result: {"exact": "Left=False; right=False; mismatches=0; equivalent=True"}. Limits: Equivalence does not mean that each formula is a tautology.

## Complete worked case

- id: math:example:equivalence:de-morgan-current-false
- title: Compare two false current results
- role: applied_model
- question: At x=9 cm and y=5 cm, do the De Morgan formulas agree?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
  - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
- inputs:
  - length: 9
  - width: 5
  - comparison: de-morgan
- steps:
  - Item:
    - index: 1
    - expression: P=True and Q=True.
    - reason: Both dimension requirements hold.
  - Item:
    - index: 2
    - expression: ¬(P∧Q)=False; ¬P∨¬Q=False.
    - reason: Evaluate each formula separately.
  - Item:
    - index: 3
    - expression: All four comparison rows match.
    - reason: The current match is part of the complete equivalence check.
- result:
  - exact: Left=False; right=False; mismatches=0; equivalent=True
- interpretation: Two formulas may be equivalent while both are false on the current assignment.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: Their shared outputs for (False,False),(False,True),(True,False),(True,True) are True,True,True,False.
- limits: Equivalence does not mean that each formula is a tautology.
- preset:
  - length: 9
  - width: 5
  - comparison: de-morgan
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
  - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.

## Written exploration recipe

- component id: component:equivalence
- renderer id: equivalence-visual-model
- renderer version: 1
- model id: equivalence-visual-model
- model revision: 1
- expression id: ast:equivalence:expression
- interaction status: implemented
- description: A measured panel feeds P and Q into two formula paths. Their current truth labels sit beside the complete four-row table and its mismatch count.
- controls:
  - Item:
    - id: length
    - type: number
    - default: 9
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
    - id: comparison
    - type: enum
    - default: de-morgan
    - values:
      - de-morgan
      - implication
      - lookalike
- expected cases:
  - Item:
    - input:
      - length: 9
      - width: 5
      - comparison: de-morgan
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 3
      - comparison: de-morgan
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 5
      - comparison: de-morgan
    - output: 1
  - Item:
    - input:
      - length: 9
      - width: 3
      - comparison: implication
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 3
      - comparison: implication
    - output: 1
  - Item:
    - input:
      - length: 9
      - width: 5
      - comparison: lookalike
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 3
      - comparison: lookalike
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 5
      - comparison: lookalike
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 3
      - comparison: lookalike
    - output: 1
  - Item:
    - input:
      - length: 6
      - width: 4
      - comparison: de-morgan
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 5
      - comparison: xor
    - status: invalid_parameters
  - Item:
    - input:
      - length: 13
      - width: 5
      - comparison: de-morgan
    - status: invalid_parameters
- compute: Let P mean x≥6 cm and Q mean y≥4 cm. Compare either ¬(P∧Q) with ¬P∨¬Q, P→Q with ¬P∨Q, or the lookalike pair ¬(P∧Q) with ¬P∧¬Q. Evaluate the selected pair on all four truth assignments. Zero mismatches establishes equivalence; the current left and right truth values remain separate from that all-row result.
- numeric tolerance: 1e-10
- invariants:
  - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
  - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - De Morgan’s pair ¬(P∧Q) and ¬P∨¬Q has zero mismatches. The implication pair P→Q and ¬P∨Q also has zero mismatches.
  - The lookalike pair ¬(P∧Q) and ¬P∧¬Q differs at the two assignments with exactly one true input. Its other two matching rows do not establish equivalence.
- limits:
  - Only three fixed formula pairs are evaluated; arbitrary formula parsing is outside this module.
  - The model uses classical truth-functional meanings, including inclusive disjunction and material implication.
  - A matching current row alone is insufficient to establish logical equivalence.
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

- Source ID: source:openstax:truth-tables. [Contemporary Mathematics, 2.3 Constructing Truth Tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables). Locator: Enumeration of the four two-proposition assignments; truth tables for negation, conjunction and inclusive disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:equivalent-statements. [Contemporary Mathematics, 2.5 Equivalent Statements](https://openstax.org/books/contemporary-mathematics/pages/2-5-equivalent-statements). Locator: Matching truth values on every assignment; material conditional as a disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:de-morgan. [Contemporary Mathematics, 2.6 De Morgan’s Laws](https://openstax.org/books/contemporary-mathematics/pages/2-6-de-morgans-laws). Locator: Negation of conjunction and disjunction; conditional as negation-or, verified by all four truth assignments. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
