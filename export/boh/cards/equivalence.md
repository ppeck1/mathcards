---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:equivalence", "id": "math:concept:equivalence", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:equivalence", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "60990c323a0741e093756ab4631d9ebf18797aee7f9a2e6b87993c5f64b16e54"}, "purpose": "Change a panel predicate and trace two formula paths while checking whether they agree on every truth assignment.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "60990c323a0741e093756ab4631d9ebf18797aee7f9a2e6b87993c5f64b16e54", "status": "draft", "title": "Logical equivalence", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "De Morgan law", "equivalent statements", "truth-table equivalence", "tautological equivalence"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Logical equivalence

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:equivalence; revision 0.1.0-draft. Setting: Classical truth-functional equivalence of three fixed pairs of formulas in two independent propositions. Expression: $P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad\neg(P\land Q)\equiv\neg P\lor\neg Q;\quad(P\to Q)\equiv(\neg P\lor Q).$. Conditions required for a defined value (a case may test their violation): The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality. All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions. De Morgan’s pair ¬(P∧Q) and ¬P∨¬Q has zero mismatches. The implication pair P→Q and ¬P∨Q also has zero mismatches. The lookalike pair ¬(P∧Q) and ¬P∧¬Q differs at the two assignments with exactly one true input. Its other two matching rows do not establish equivalence. Scope: The complete finite truth table establishes equivalence for these propositional truth functions. The distinction is between current assignment truth and agreement for every assignment; it is not a claim about every possible natural-language meaning or arbitrary quantified formula.

## Schema Version

0.1.0

## Id

math:concept:equivalence

## Slug

equivalence

## Type

concept

## Title

Logical equivalence

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- De Morgan law
- equivalent statements
- truth-table equivalence
- tautological equivalence

## Branches

- language-foundations
- logic
- formal-semantics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Change a panel predicate and trace two formula paths while checking whether they agree on every truth assignment.

## Meaning

Two propositional formulas are logically equivalent when they have the same truth value for every assignment to their atomic statements. Agreement at the current panel is one row of that comparison. The full four-row table distinguishes a genuine equivalence from a pair that merely happens to match here.

## Prerequisites

- required:
  - math:concept:logical-connectives
- helpful:
  - math:concept:quantifier
- depth:
  - math:concept:inference

## Definition

- setting: Classical truth-functional equivalence of three fixed pairs of formulas in two independent propositions.
- formal latex: P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad\neg(P\land Q)\equiv\neg P\lor\neg Q;\quad(P\to Q)\equiv(\neg P\lor Q).
- signature:
  - x: Panel length.
  - y: Panel width.
  - P: Length predicate result.
  - Q: Width predicate result.
  - ¬(P∧Q): Negation of conjunction.
  - ¬P∨¬Q: Disjunction of negations.
  - P→Q: Material conditional.
  - ¬P∨Q: Implication written as a disjunction.
  - ¬P∧¬Q: Conjunction of negations.
  - ≡: Agreement for every truth assignment.
  - c: Selected formula pair: De Morgan, material implication rewrite or the stated lookalike.
- conditions:
  - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
  - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - De Morgan’s pair ¬(P∧Q) and ¬P∨¬Q has zero mismatches. The implication pair P→Q and ¬P∨Q also has zero mismatches.
  - The lookalike pair ¬(P∧Q) and ¬P∧¬Q differs at the two assignments with exactly one true input. Its other two matching rows do not establish equivalence.
- domain notes: The complete finite truth table establishes equivalence for these propositional truth functions. The distinction is between current assignment truth and agreement for every assignment; it is not a claim about every possible natural-language meaning or arbitrary quantified formula.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openstax:equivalent-statements
  - source:openstax:de-morgan
  - source:openstax:truth-tables

## Grammar

- pronunciation: Logical equivalence
- expression latex: P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad\neg(P\land Q)\equiv\neg P\lor\neg Q;\quad(P\to Q)\equiv(\neg P\lor Q).
- formation rule: Let P mean x≥6 cm and Q mean y≥4 cm. Compare either ¬(P∧Q) with ¬P∨¬Q, P→Q with ¬P∨Q, or the lookalike pair ¬(P∧Q) with ¬P∧¬Q. Evaluate the selected pair on all four truth assignments. Zero mismatches establishes equivalence; the current left and right truth values remain separate from that all-row result.
- precedence: Evaluate P and Q, then inner connectives, then negation. Parentheses keep ¬(P∧Q) distinct from negating each input separately.
- symbols:
  - Item:
    - token: x
    - role: Panel length
    - type: Centimetres
  - Item:
    - token: y
    - role: Panel width
    - type: Centimetres
  - Item:
    - token: P
    - role: Length predicate result
    - type: Proposition
  - Item:
    - token: Q
    - role: Width predicate result
    - type: Proposition
  - Item:
    - token: ¬(P∧Q)
    - role: Negation of conjunction
    - type: Proposition
  - Item:
    - token: ¬P∨¬Q
    - role: Disjunction of negations
    - type: Proposition
  - Item:
    - token: P→Q
    - role: Material conditional
    - type: Proposition
  - Item:
    - token: ¬P∨Q
    - role: Implication written as a disjunction
    - type: Proposition
  - Item:
    - token: ¬P∧¬Q
    - role: Conjunction of negations
    - type: Proposition
  - Item:
    - token: ≡
    - role: Agreement for every truth assignment
    - type: Logical equivalence relation
  - Item:
    - token: c
    - role: Selected formula-pair setting
    - type: One of the three declared comparisons
- ast:
  - id: ast:equivalence:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:length
      - kind: variable
      - type: Declared model input
      - symbol: x
      - scope ref: scope:equivalence:expression
    - Item:
      - id: n:width
      - kind: variable
      - type: Declared model input
      - symbol: y
      - scope ref: scope:equivalence:expression
    - Item:
      - id: n:comparison
      - kind: variable
      - type: Declared model input
      - symbol: c
      - scope ref: scope:equivalence:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Let P mean x≥6 cm and Q mean y≥4 cm. Compare either ¬(P∧Q) with ¬P∨¬Q, P→Q with ¬P∨Q, or the lookalike pair ¬(P∧Q) with ¬P∧¬Q. Evaluate the selected pair on all four truth assignments. Zero mismatches establishes equivalence; the current left and right truth values remain separate from that all-row result.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:length
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:width
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:comparison
  - scopes:
    - Item:
      - id: scope:equivalence:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - c
      - domain condition: Classical truth-functional equivalence of three fixed pairs of formulas in two independent propositions.
- parse errors:
  - Item:
    - input: Infer equivalence from a matching current row
    - status: quantification error
    - reason: Logical equivalence requires agreement on every truth assignment.
  - Item:
    - input: Replace OR by AND in De Morgan’s law
    - status: connective error
    - reason: Negating a conjunction gives a disjunction of the negations.
  - Item:
    - input: Drop the parentheses in ¬(P∧Q)
    - status: scope error
    - reason: The negation applies to the complete conjunction.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - x: length
  - y: width
  - P: pTruth
  - Q: qTruth
  - ¬(P∧Q): notAndTruth
  - ¬P∨¬Q: notPOrNotQTruth
  - P→Q: implicationTruth
  - ¬P∨Q: notPOrQTruth
  - ¬P∧¬Q: notPAndNotQTruth
  - ≡: equivalent

## Properties

- Item:
  - claim: De Morgan’s selected formula pair is equivalent.
  - conditions: Use classical two-valued conjunction, disjunction and negation.
  - derivation: If both inputs are true both formulas are false; in the other three cases both formulas are true.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:equivalence:de-morgan-current-false
- Item:
  - claim: The lookalike pair is not equivalent despite two matching assignments.
  - conditions: Compare ¬(P∧Q) with ¬P∧¬Q.
  - derivation: Exactly-one-true assignments produce left=True and right=False, giving two counterexamples.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:equivalence:matching-lookalike

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:logical-connectives
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Both formula paths use the same classical connectives and predicate truth inputs.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Equivalence is an every-assignment claim, while a current match concerns one assignment.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:inference
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Equivalent formulas preserve truth across all assignments and can help analyze arguments.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
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
- Item:
  - id: math:example:equivalence:de-morgan-current-true
  - title: Change one predicate without breaking equivalence
  - role: applied_model
  - question: What happens when the width becomes 3 cm while length stays 9 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - inputs:
    - length: 9
    - width: 3
    - comparison: de-morgan
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=False.
      - reason: Only the length meets its requirement.
    - Item:
      - index: 2
      - expression: ¬(P∧Q)=True; ¬P∨¬Q=False∨True=True.
      - reason: Both paths change together.
    - Item:
      - index: 3
      - expression: The all-row mismatch count remains zero.
      - reason: Current truth changes without changing the formulas’ equivalence.
  - result:
    - exact: Left=True; right=True; mismatches=0; equivalent=True
  - interpretation: The formulas agree on a different row with a different truth value.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Negating True∧False gives True, and negating each input then taking OR also gives True.
  - limits: The global comparison is independent of the selected panel measurements.
  - preset:
    - length: 9
    - width: 3
    - comparison: de-morgan
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
- Item:
  - id: math:example:equivalence:implication-rewrite
  - title: Rewrite a material conditional
  - role: applied_model
  - question: Compare P→Q and ¬P∨Q when P is true and Q false.
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - inputs:
    - length: 9
    - width: 3
    - comparison: implication
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=False.
      - reason: Use the selected dimensions.
    - Item:
      - index: 2
      - expression: P→Q=False; ¬P∨Q=False∨False=False.
      - reason: The material conditional has its single false case here.
    - Item:
      - index: 3
      - expression: Every truth assignment gives matching results.
      - reason: The rewrite is a logical equivalence.
  - result:
    - exact: Left=False; right=False; mismatches=0; equivalent=True
  - interpretation: The disjunction reproduces the complete truth behavior of material implication.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: For P=False the disjunction has ¬P=True; for P=True it reduces to Q.
  - limits: This is a truth-functional rewrite, not a claim of causation.
  - preset:
    - length: 9
    - width: 3
    - comparison: implication
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
- Item:
  - id: math:example:equivalence:matching-lookalike
  - title: Catch a misleading matching row
  - role: applied_model
  - question: At two true inputs, does the lookalike pair establish an equivalence?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - inputs:
    - length: 9
    - width: 5
    - comparison: lookalike
  - steps:
    - Item:
      - index: 1
      - expression: ¬(True∧True)=False; ¬True∧¬True=False.
      - reason: The current row matches.
    - Item:
      - index: 2
      - expression: For P=True,Q=False, the left is True and the right False.
      - reason: One different assignment is a counterexample to equivalence.
    - Item:
      - index: 3
      - expression: The complete table has two mismatches.
      - reason: A second counterexample occurs when P=False,Q=True.
  - result:
    - exact: Left=False; right=False; current match=True; mismatches=2; equivalent=False
  - interpretation: Agreement on the current panel can hide a globally different formula.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The matching assignments have equal inputs; the two unequal-input assignments both disagree.
  - limits: The mismatch count concerns all four assignments, not only the highlighted row.
  - preset:
    - length: 9
    - width: 5
    - comparison: lookalike
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
- Item:
  - id: math:example:equivalence:one-mismatch
  - title: Display an actual differing assignment
  - role: applied_model
  - question: At x=9 cm and y=3 cm, where does the lookalike pair fail?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.
  - inputs:
    - length: 9
    - width: 3
    - comparison: lookalike
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=False.
      - reason: The panel selects a known mismatch row.
    - Item:
      - index: 2
      - expression: ¬(P∧Q)=True; ¬P∧¬Q=False∧True=False.
      - reason: Evaluate the two different outer connectives.
    - Item:
      - index: 3
      - expression: The formulas differ here and are not equivalent.
      - reason: One counterexample already refutes an every-assignment claim.
  - result:
    - exact: Left=True; right=False; current match=False; mismatches=2; equivalent=False
  - interpretation: The input-plane point lies in a mismatch region.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Negating “both” allows one failed condition; requiring both negations requires both conditions to fail.
  - limits: The example compares logical formulas rather than full lexical meanings.
  - preset:
    - length: 9
    - width: 3
    - comparison: lookalike
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The panel dimensions x and y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, including equality.
    - All four assignments to P and Q are possible. The complete comparison uses all four, rather than only the selected dimensions.

## Interactive

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

## Prompts

- Item:
  - prompt: If the formulas match on this panel, are they equivalent?
  - answer: That one row is evidence about the current assignment. Equivalence requires every row to match.
- Item:
  - prompt: Why does the lookalike fail?
  - answer: When exactly one of P and Q is true, ¬(P∧Q) is true but ¬P∧¬Q is false.

## Representations

- Item:
  - kind: geometry
  - description: A measured panel feeds P and Q into two formula paths. Their current truth labels sit beside the complete four-row table and its mismatch count.
- Item:
  - kind: graph
  - description: Input-plane truth regions compare both formulas on the same dimension axes. An explicitly labelled mismatch region and current point separate global equivalence from one matching assignment.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Change a panel predicate and trace two formula paths while checking whether they agree on every truth assignment.
  - limitations: Only three fixed formula pairs are evaluated; arbitrary formula parsing is outside this module.
  - evidence kind: constructed_example
  - example ref: math:example:equivalence:de-morgan-current-false
- Item:
  - context: Change one predicate without breaking equivalence
  - mapping: The formulas agree on a different row with a different truth value.
  - limitations: The global comparison is independent of the selected panel measurements.
  - evidence kind: constructed_example
  - example ref: math:example:equivalence:de-morgan-current-true

## Source Refs

- source:openstax:equivalent-statements
- source:openstax:de-morgan
- source:openstax:truth-tables

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.28.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:openstax:truth-tables. [Contemporary Mathematics, 2.3 Constructing Truth Tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables). Locator: Enumeration of the four two-proposition assignments; truth tables for negation, conjunction and inclusive disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:equivalent-statements. [Contemporary Mathematics, 2.5 Equivalent Statements](https://openstax.org/books/contemporary-mathematics/pages/2-5-equivalent-statements). Locator: Matching truth values on every assignment; material conditional as a disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:de-morgan. [Contemporary Mathematics, 2.6 De Morgan’s Laws](https://openstax.org/books/contemporary-mathematics/pages/2-6-de-morgans-laws). Locator: Negation of conjunction and disjunction; conditional as negation-or, verified by all four truth assignments. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
