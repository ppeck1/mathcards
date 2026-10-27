---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:logical-connectives", "id": "math:concept:logical-connectives", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:logical-connectives", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6f706c8a5a153f42bea090207dd4999e22342be57dcf4935f9613a90f19643e9"}, "purpose": "Test two stated workshop requirements separately, then follow their truth values through a chosen logical connective.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6f706c8a5a153f42bea090207dd4999e22342be57dcf4935f9613a90f19643e9", "status": "draft", "title": "Logical connectives and truth tables", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "conjunction", "disjunction", "truth table", "material conditional", "propositional logic"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Logical connectives and truth tables

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:logical-connectives; revision 0.1.0-draft. Setting: Classical two-valued propositional logic realized by two inclusive dimension tests on one panel. Expression: $P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad P\land Q,\ P\lor Q,\ P\to Q,\ P\leftrightarrow Q,\ \neg P.$. Conditions required for a defined value (a case may test their violation): Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included. Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true. P→Q is false exactly for P true and Q false. P↔Q is true when the two truth values agree. ¬P reverses P and ignores Q. The material conditional states a truth-table relation; it does not by itself express causation, relevance, a promise or the full meaning of an ordinary-language conditional. Scope: The numeric dimension domain supplies concrete statements. Truth values change at thresholds; smooth movement of a panel does not create a partly true statement.

## Schema Version

0.1.0

## Id

math:concept:logical-connectives

## Slug

logical-connectives

## Type

concept

## Title

Logical connectives and truth tables

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

Primary references support definitions and stated conditions. Workshop stories and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of a book edition or lesson.

## Aliases

- conjunction
- disjunction
- truth table
- material conditional
- propositional logic

## Branches

- language-foundations
- logic
- formal-semantics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Test two stated workshop requirements separately, then follow their truth values through a chosen logical connective.

## Meaning

A truth-functional connective determines a compound statement from the truth values of its parts. AND requires both statements; inclusive OR requires at least one. The material conditional fails only when its antecedent is true and its consequent false. A truth table makes every allowed input combination explicit.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:function
- depth:
  - math:concept:quantifier
  - math:concept:proof

## Definition

- setting: Classical two-valued propositional logic realized by two inclusive dimension tests on one panel.
- formal latex: P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad P\land Q,\ P\lor Q,\ P\to Q,\ P\leftrightarrow Q,\ \neg P.
- signature:
  - x: Panel length.
  - y: Panel width.
  - P: Length meets its requirement.
  - Q: Width meets its requirement.
  - P∧Q: Both requirements hold.
  - P∨Q: At least one requirement holds.
  - P→Q: Material conditional.
  - P↔Q: Matching truth values.
  - ¬P: Length requirement does not hold.
- conditions:
  - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - P→Q is false exactly for P true and Q false. P↔Q is true when the two truth values agree. ¬P reverses P and ignores Q.
  - The material conditional states a truth-table relation; it does not by itself express causation, relevance, a promise or the full meaning of an ordinary-language conditional.
- domain notes: The numeric dimension domain supplies concrete statements. Truth values change at thresholds; smooth movement of a panel does not create a partly true statement.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openstax:compound-statements
  - source:openstax:truth-tables
  - source:openstax:statements-quantifiers

## Grammar

- pronunciation: Logical connectives and truth tables
- expression latex: P:x\ge6\,\mathrm{cm},\quad Q:y\ge4\,\mathrm{cm};\quad P\land Q,\ P\lor Q,\ P\to Q,\ P\leftrightarrow Q,\ \neg P.
- formation rule: Let P mean x≥6 cm and Q mean y≥4 cm. Choose P∧Q, P∨Q, P→Q, P↔Q or ¬P, then apply its classical truth table.
- precedence: Evaluate each dimension test before applying the chosen connective. Negation applies to P only; its result does not depend on Q.
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
    - role: Length meets its requirement
    - type: Proposition
  - Item:
    - token: Q
    - role: Width meets its requirement
    - type: Proposition
  - Item:
    - token: P∧Q
    - role: Both requirements hold
    - type: Proposition
  - Item:
    - token: P∨Q
    - role: At least one requirement holds
    - type: Proposition
  - Item:
    - token: P→Q
    - role: Material conditional
    - type: Proposition
  - Item:
    - token: P↔Q
    - role: Matching truth values
    - type: Proposition
  - Item:
    - token: ¬P
    - role: Length requirement does not hold
    - type: Proposition
- ast:
  - id: ast:logical-connectives:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:length
      - kind: variable
      - type: Declared model input
      - symbol: length
      - scope ref: scope:logical-connectives:expression
    - Item:
      - id: n:width
      - kind: variable
      - type: Declared model input
      - symbol: width
      - scope ref: scope:logical-connectives:expression
    - Item:
      - id: n:operation
      - kind: variable
      - type: Declared model input
      - symbol: operation
      - scope ref: scope:logical-connectives:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for this explicitly bounded executable family
      - ref: Let P mean x≥6 cm and Q mean y≥4 cm. Choose P∧Q, P∨Q, P→Q, P↔Q or ¬P, then apply its classical truth table.
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
      - argument: n:operation
  - scopes:
    - Item:
      - id: scope:logical-connectives:expression
      - kind: modelExpression
      - free variables:
        - length
        - width
        - operation
      - domain condition: Classical two-valued propositional logic realized by two inclusive dimension tests on one panel.
- parse errors:
  - Item:
    - input: Treat x=6 cm as too short
    - status: boundary error
    - reason: The stipulated length test includes equality.
  - Item:
    - input: Read OR as exactly one
    - status: connective error
    - reason: The chosen disjunction is inclusive, so two true inputs give a true result.
  - Item:
    - input: Infer causation from P→Q
    - status: interpretation error
    - reason: The material conditional is a truth function, not a causal model.
- ast coverage: A typed application outline of the stated executable rule. Bound notation in the displayed mathematical definition is explained in the signature; this outline is not a general formula parser or proof engine.
- output symbol bindings:
  - x: length
  - y: width
  - P: pTruth
  - Q: qTruth
  - P∧Q: output
  - P∨Q: output
  - P→Q: output
  - P↔Q: output
  - ¬P: output

## Properties

- Item:
  - claim: Conjunction is true exactly when both requirements hold.
  - conditions: Use the two fixed inclusive dimension predicates and operation AND.
  - derivation: The AND truth table has one true row: both P and Q true.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:logical-connectives:two-requirements
- Item:
  - claim: The material conditional can be true while both requirements fail.
  - conditions: Use the material truth function P→Q, not a causal interpretation.
  - derivation: P→Q is equivalent to ¬P∨Q; two false inputs give True∨False=True.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:logical-connectives:false-antecedent

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the concept and notation before adding historical priority claims.
  - Check book-specific statements against the exact edition before treating the supplied planning matrix as verified coverage.
- reader text: Historical development has not been researched for this draft. The workshop scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A predicate test selects the panels that meet a stated condition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A connective maps one or two truth values to one truth value.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Quantification combines a predicate with a stated domain rather than only joining two given statements.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:logical-connectives:two-requirements
  - title: Check both panel requirements
  - role: applied_model
  - question: Does a 9 cm by 5 cm panel meet both requirements?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - inputs:
    - length: 9
    - width: 5
    - operation: and
  - steps:
    - Item:
      - index: 1
      - expression: P:9≥6 is True; Q:5≥4 is True.
      - reason: Evaluate the two stated comparisons independently.
    - Item:
      - index: 2
      - expression: P∧Q=True∧True=True.
      - reason: Conjunction requires both inputs to be true.
  - result:
    - exact: True
  - interpretation: Both requirements hold for this stipulated panel.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The only true AND row is the row with both inputs true.
  - limits: Only the two stated thresholds are being checked.
  - preset:
    - length: 9
    - width: 5
    - operation: and
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
- Item:
  - id: math:example:logical-connectives:either-requirement
  - title: Read an inclusive OR
  - role: applied_model
  - question: Does a 3 cm by 5 cm panel meet at least one requirement?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - inputs:
    - length: 3
    - width: 5
    - operation: or
  - steps:
    - Item:
      - index: 1
      - expression: P:3≥6 is False; Q:5≥4 is True.
      - reason: The length fails and the width passes.
    - Item:
      - index: 2
      - expression: P∨Q=False∨True=True.
      - reason: Inclusive disjunction requires at least one true input.
  - result:
    - exact: True
  - interpretation: The panel meets the width test, so the inclusive OR is true.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The false OR row requires two false inputs; that is not this case.
  - limits: An OR result does not claim that both dimensions pass.
  - preset:
    - length: 3
    - width: 5
    - operation: or
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
- Item:
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
- Item:
  - id: math:example:logical-connectives:different-truths
  - title: Compare truth values with a biconditional
  - role: applied_model
  - question: Does P↔Q hold for a 9 cm by 2 cm panel?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - inputs:
    - length: 9
    - width: 2
    - operation: iff
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=False.
      - reason: Only the length passes its requirement.
    - Item:
      - index: 2
      - expression: P↔Q=False.
      - reason: A biconditional is true exactly when its two truth values agree.
  - result:
    - exact: False
  - interpretation: The two requirements have different truth values.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: P→Q is false, so the conjunction of the two implication directions is false.
  - limits: This compares truth values, not equality of the panel dimensions.
  - preset:
    - length: 9
    - width: 2
    - operation: iff
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
- Item:
  - id: math:example:logical-connectives:negate-length
  - title: Negate one statement
  - role: applied_model
  - question: What is ¬P for a 3 cm by 5 cm panel?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.
  - inputs:
    - length: 3
    - width: 5
    - operation: not
  - steps:
    - Item:
      - index: 1
      - expression: P:3≥6 is False.
      - reason: Read the length comparison.
    - Item:
      - index: 2
      - expression: ¬P=True.
      - reason: Negation reverses that truth value and does not use Q.
  - result:
    - exact: True
  - interpretation: The statement that the length requirement does not hold is true.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The complementary comparison3<6 is true.
  - limits: The width does not affect this unary connective.
  - preset:
    - length: 3
    - width: 5
    - operation: not
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y are real centimetre measurements from zero to twelve. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - Use classical True/False truth values. Inclusive OR is true when either or both inputs are true; AND is true only when both are true.

## Interactive

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

## Prompts

- Item:
  - prompt: Why can P→Q be true when P is false?
  - answer: Only a true antecedent with a false consequent violates the material truth-table condition; no causal relation is asserted.
- Item:
  - prompt: Does a panel halfway to the threshold make P partly true?
  - answer: No. In this classical model the measurement moves continuously, while the inclusive threshold test has a definite truth value.

## Representations

- Item:
  - kind: geometry
  - description: A centimetre-scale panel, two threshold tests and a truth table show which concrete measurements determine P, Q and the compound result.
- Item:
  - kind: graph
  - description: A length-width coordinate plane colors the exact True and False input regions. Boundary lines and the current point identify the active case.
- Item:
  - kind: substitution
  - description: Follow each declared input through the stated expression into the labelled truth value or measured result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Test two stated workshop requirements separately, then follow their truth values through a chosen logical connective.
  - limitations: The executable predicates are two fixed inclusive dimension requirements; arbitrary formulas and predicates are not parsed.
  - evidence kind: constructed_example
  - example ref: math:example:logical-connectives:two-requirements
- Item:
  - context: Read an inclusive OR
  - mapping: The panel meets the width test, so the inclusive OR is true.
  - limitations: An OR result does not claim that both dimensions pass.
  - evidence kind: constructed_example
  - example ref: math:example:logical-connectives:either-requirement

## Source Refs

- source:openstax:compound-statements
- source:openstax:truth-tables
- source:openstax:statements-quantifiers

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.27.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures, sequenced from the supplied book-scope matrix.

## Referenced source registry

- Source ID: source:openstax:statements-quantifiers. [Contemporary Mathematics, 2.1 Statements and Quantifiers](https://openstax.org/books/contemporary-mathematics/pages/2-1-statements-and-quantifiers). Locator: Logical statements and truth values; all, some and none; negation of quantified claims. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:compound-statements. [Contemporary Mathematics, 2.2 Compound Statements](https://openstax.org/books/contemporary-mathematics/pages/2-2-compound-statements). Locator: Conjunction, inclusive disjunction, negation, material conditional and biconditional, Table 2.3. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:truth-tables. [Contemporary Mathematics, 2.3 Constructing Truth Tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables). Locator: Enumeration of the four two-proposition assignments; truth tables for negation, conjunction and inclusive disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
