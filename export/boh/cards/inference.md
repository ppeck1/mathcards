---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:inference", "id": "math:concept:inference", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:inference", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "85fe9d892c4f7c9675d210beca244c0a1c2ede55cc687fb347ed4c031b14ec30"}, "purpose": "Follow current predicate truths through an argument’s premises and conclusion, then test its validity on every assignment.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "85fe9d892c4f7c9675d210beca244c0a1c2ede55cc687fb347ed4c031b14ec30", "status": "draft", "title": "Inference rules and counterexamples", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "modus ponens", "modus tollens", "argument validity", "affirming the consequent", "semantic entailment"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Inference rules and counterexamples

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:inference; revision 0.1.0-draft. Setting: Semantic validity of three fixed classical propositional argument patterns with two independent atomic statements. Expression: $P\to Q,\ P\models Q;\qquad P\to Q,\ \neg Q\models\neg P.$. Conditions required for a defined value (a case may test their violation): Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included. The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law. A counterexample assignment must make every premise true and the conclusion false. A row with a false premise is not a counterexample to validity. A true current conclusion need not have been licensed by the stated premises. The module separately displays current premises, current conclusion and global argument validity. The complete four-row check establishes semantic validity for these propositional patterns. It is not a general formal proof system, theorem prover or empirical validation method. Scope: Semantic entailment means preservation of truth across all assignments satisfying the premises. This differs from deriving a formula inside a specified syntactic proof calculus. Every allowed P/Q assignment is represented in the table.

## Schema Version

0.1.0

## Id

math:concept:inference

## Slug

inference

## Type

concept

## Title

Inference rules and counterexamples

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

- modus ponens
- modus tollens
- argument validity
- affirming the consequent
- semantic entailment

## Branches

- language-foundations
- logic
- formal-semantics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow current predicate truths through an argument’s premises and conclusion, then test its validity on every assignment.

## Meaning

A propositional argument is valid when no truth assignment makes all its premises true and its conclusion false. The truth of the current conclusion is a different question. Modus ponens and modus tollens are valid patterns; affirming the consequent has a counterexample even though it can give a true conclusion in some individual cases.

## Prerequisites

- required:
  - math:concept:logical-connectives
- helpful:
  - math:concept:equivalence
  - math:concept:quantifier
- depth:
  - math:concept:proof

## Definition

- setting: Semantic validity of three fixed classical propositional argument patterns with two independent atomic statements.
- formal latex: P\to Q,\ P\models Q;\qquad P\to Q,\ \neg Q\models\neg P.
- signature:
  - x: Panel length.
  - y: Panel width.
  - P: Length statement.
  - Q: Width statement.
  - P→Q: Material conditional premise.
  - ¬P: Negated length statement.
  - ¬Q: Negated width statement.
  - ⊨: Semantic entailment from premises to conclusion.
  - a: Selected argument pattern: modus ponens, modus tollens or affirming the consequent.
- conditions:
  - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - A counterexample assignment must make every premise true and the conclusion false. A row with a false premise is not a counterexample to validity.
  - A true current conclusion need not have been licensed by the stated premises. The module separately displays current premises, current conclusion and global argument validity.
  - The complete four-row check establishes semantic validity for these propositional patterns. It is not a general formal proof system, theorem prover or empirical validation method.
- domain notes: Semantic entailment means preservation of truth across all assignments satisfying the premises. This differs from deriving a formula inside a specified syntactic proof calculus. Every allowed P/Q assignment is represented in the table.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openstax:logical-arguments
  - source:openstax:truth-tables

## Grammar

- pronunciation: Inference rules and counterexamples
- expression latex: P\to Q,\ P\models Q;\qquad P\to Q,\ \neg Q\models\neg P.
- formation rule: Let P mean x≥6 cm and Q mean y≥4 cm. Modus ponens uses premises P→Q and P with conclusion Q. Modus tollens uses P→Q and ¬Q with conclusion ¬P. The invalid pattern affirming the consequent uses P→Q and Q with conclusion P. Enumerate all four assignments: validity means there is no row with all premises true and conclusion false.
- precedence: Evaluate P and Q, then each premise and the conclusion independently. A current truth label is read before the separate all-assignment validity check.
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
    - role: Length statement
    - type: Proposition
  - Item:
    - token: Q
    - role: Width statement
    - type: Proposition
  - Item:
    - token: P→Q
    - role: Material conditional premise
    - type: Proposition
  - Item:
    - token: ¬P
    - role: Negated length statement
    - type: Proposition
  - Item:
    - token: ¬Q
    - role: Negated width statement
    - type: Proposition
  - Item:
    - token: ⊨
    - role: Semantic entailment from premises to conclusion
    - type: Every-assignment truth-preservation relation
  - Item:
    - token: a
    - role: Selected argument-pattern setting
    - type: One of the three declared patterns
- ast:
  - id: ast:inference:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:length
      - kind: variable
      - type: Declared model input
      - symbol: x
      - scope ref: scope:inference:expression
    - Item:
      - id: n:width
      - kind: variable
      - type: Declared model input
      - symbol: y
      - scope ref: scope:inference:expression
    - Item:
      - id: n:argument
      - kind: variable
      - type: Declared model input
      - symbol: a
      - scope ref: scope:inference:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Let P mean x≥6 cm and Q mean y≥4 cm. Modus ponens uses premises P→Q and P with conclusion Q. Modus tollens uses P→Q and ¬Q with conclusion ¬P. The invalid pattern affirming the consequent uses P→Q and Q with conclusion P. Enumerate all four assignments: validity means there is no row with all premises true and conclusion false.
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
      - argument: n:argument
  - scopes:
    - Item:
      - id: scope:inference:expression
      - kind: modelExpression
      - free variables:
        - x
        - y
        - a
      - domain condition: Semantic validity of three fixed classical propositional argument patterns with two independent atomic statements.
- parse errors:
  - Item:
    - input: Treat a false-premise row as a counterexample
    - status: validity error
    - reason: A validity counterexample requires every premise to be true.
  - Item:
    - input: Infer P from P→Q and Q
    - status: invalid inference
    - reason: P can be false while the two stated premises are true.
  - Item:
    - input: Call a true conclusion a valid argument
    - status: scope error
    - reason: Validity depends on every assignment, not the current conclusion alone.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - x: length
  - y: width
  - P: pTruth
  - Q: qTruth
  - P→Q: conditionalTruth
  - ¬P: negatedP
  - ¬Q: negatedQ
  - ⊨: validArgument

## Properties

- Item:
  - claim: Modus ponens has no counterexample assignment.
  - conditions: Use premises P→Q and P with conclusion Q.
  - derivation: Any false Q paired with true P makes the conditional premise false, so every true-premises row has Q true.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:inference:modus-ponens
- Item:
  - claim: Affirming the consequent is invalid.
  - conditions: Use premises P→Q and Q with conclusion P.
  - derivation: The assignment P=False,Q=True makes both premises true and the conclusion false.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:inference:affirming-counterexample

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
  - reason: The material conditional and negation supply the premise and conclusion formulas.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:equivalence
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Equivalent formulas preserve their truth behavior in the all-assignment analysis.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The absence of every counterexample is an all-assignment condition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:proof
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Semantic truth preservation can be compared later with derivability in a specified proof system.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:inference:modus-ponens
  - title: Apply modus ponens with true premises
  - role: applied_model
  - question: At x=9 cm and y=5 cm, what do the two modus ponens premises support?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - inputs:
    - length: 9
    - width: 5
    - argument: modus-ponens
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=True; P→Q=True.
      - reason: Evaluate the two dimension statements and conditional.
    - Item:
      - index: 2
      - expression: Premises P→Q and P are both True; conclusion Q is True.
      - reason: The current assignment satisfies every premise.
    - Item:
      - index: 3
      - expression: No assignment has both premises true and Q false.
      - reason: The complete table establishes this pattern’s validity.
  - result:
    - exact: Premises hold=True; conclusion=True; valid=True; counterexamples=0
  - interpretation: The current true conclusion is licensed by this valid pattern with its premises met.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: If P is true and P→Q is true, Q cannot be false because that would make the conditional false.
  - limits: The reasoning preserves truth conditional on the stated premises.
  - preset:
    - length: 9
    - width: 5
    - argument: modus-ponens
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
- Item:
  - id: math:example:inference:false-premise
  - title: Separate false premises from invalidity
  - role: applied_model
  - question: At x=9 cm and y=3 cm, does a false conclusion refute modus ponens?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - inputs:
    - length: 9
    - width: 3
    - argument: modus-ponens
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=False; P→Q=False.
      - reason: The selected panel violates the conditional premise.
    - Item:
      - index: 2
      - expression: Not all premises hold; conclusion Q is False.
      - reason: This is not a true-premises/false-conclusion assignment.
    - Item:
      - index: 3
      - expression: The argument pattern remains valid.
      - reason: A false premise prevents this row from being a validity counterexample.
  - result:
    - exact: Premises hold=False; conclusion=False; valid=True; counterexamples=0
  - interpretation: The current argument cannot use a premise that is false on the selected assignment.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The unique P=True,Q=False row has its conditional premise false.
  - limits: The current false conclusion does not by itself determine validity.
  - preset:
    - length: 9
    - width: 3
    - argument: modus-ponens
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
- Item:
  - id: math:example:inference:modus-tollens
  - title: Use denial of the consequent
  - role: applied_model
  - question: What does modus tollens conclude at x=3 cm and y=3 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - inputs:
    - length: 3
    - width: 3
    - argument: modus-tollens
  - steps:
    - Item:
      - index: 1
      - expression: P=False; Q=False; P→Q=True.
      - reason: Read the current predicate truths.
    - Item:
      - index: 2
      - expression: Premises P→Q and ¬Q are True; conclusion ¬P is True.
      - reason: Both premises are met on this assignment.
    - Item:
      - index: 3
      - expression: If P were true while Q were false, P→Q would fail.
      - reason: No assignment can satisfy both premises while making ¬P false.
  - result:
    - exact: Premises hold=True; conclusion=True; valid=True; counterexamples=0
  - interpretation: Denying Q together with the conditional supports denying P.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The only assignment satisfying both premises is P=False,Q=False.
  - limits: The material conditional is used with its stated truth table.
  - preset:
    - length: 3
    - width: 3
    - argument: modus-tollens
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
- Item:
  - id: math:example:inference:affirming-counterexample
  - title: Find a genuine invalid-argument counterexample
  - role: applied_model
  - question: What happens for affirming the consequent at x=3 cm and y=5 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - inputs:
    - length: 3
    - width: 5
    - argument: affirming-consequent
  - steps:
    - Item:
      - index: 1
      - expression: P=False; Q=True; P→Q=True.
      - reason: This assignment makes the conditional and consequent true.
    - Item:
      - index: 2
      - expression: Both premises hold while the conclusion P is False.
      - reason: The row is a genuine counterexample.
    - Item:
      - index: 3
      - expression: The argument is invalid and has one counterexample assignment.
      - reason: One such row is sufficient to refute validity.
  - result:
    - exact: Premises hold=True; conclusion=False; valid=False; counterexamples=1
  - interpretation: A passing width does not logically establish the passing length from this conditional alone.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The assignment P=False,Q=True directly satisfies P→Q and Q while falsifying P.
  - limits: The counterexample concerns the argument form, not a causal mechanism.
  - preset:
    - length: 3
    - width: 5
    - argument: affirming-consequent
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
- Item:
  - id: math:example:inference:true-but-invalid
  - title: Avoid judging validity from one successful conclusion
  - role: applied_model
  - question: At x=9 cm and y=5 cm, does a true conclusion make affirming the consequent valid?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - inputs:
    - length: 9
    - width: 5
    - argument: affirming-consequent
  - steps:
    - Item:
      - index: 1
      - expression: P=True; Q=True; P→Q=True.
      - reason: The current conclusion happens to be true.
    - Item:
      - index: 2
      - expression: The current row has no failure.
      - reason: An individual successful case is not an every-assignment argument.
    - Item:
      - index: 3
      - expression: The P=False,Q=True counterexample still exists.
      - reason: The global validity result stays Invalid.
  - result:
    - exact: Premises hold=True; conclusion=True; valid=False; counterexamples=1
  - interpretation: The same invalid pattern can coincide with a true current conclusion.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Compare the current assignment with the distinct False/True counterexample row.
  - limits: Validity belongs to the complete truth-preservation pattern.
  - preset:
    - length: 9
    - width: 5
    - argument: affirming-consequent
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
    - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.

## Interactive

- component id: component:inference
- renderer id: inference-visual-model
- renderer version: 1
- model id: inference-visual-model
- model revision: 1
- expression id: ast:inference:expression
- interaction status: implemented
- description: The measured panel supplies P and Q to two explicit premise boxes and a conclusion box. The complete argument table marks premise failures, licensed conclusions and genuine counterexamples separately.
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
    - id: argument
    - type: enum
    - default: modus-ponens
    - values:
      - modus-ponens
      - modus-tollens
      - affirming-consequent
- expected cases:
  - Item:
    - input:
      - length: 9
      - width: 5
      - argument: modus-ponens
    - output: 1
  - Item:
    - input:
      - length: 9
      - width: 3
      - argument: modus-ponens
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 5
      - argument: modus-ponens
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 3
      - argument: modus-tollens
    - output: 1
  - Item:
    - input:
      - length: 9
      - width: 3
      - argument: modus-tollens
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 5
      - argument: modus-tollens
    - output: 0
  - Item:
    - input:
      - length: 3
      - width: 5
      - argument: affirming-consequent
    - output: 0
  - Item:
    - input:
      - length: 9
      - width: 5
      - argument: affirming-consequent
    - output: 1
  - Item:
    - input:
      - length: 3
      - width: 3
      - argument: affirming-consequent
    - output: 0
  - Item:
    - input:
      - length: 6
      - width: 4
      - argument: modus-ponens
    - output: 1
  - Item:
    - input:
      - length: 9
      - width: 5
      - argument: deduce
    - status: invalid_parameters
  - Item:
    - input:
      - length: 9
      - width: -1
      - argument: modus-ponens
    - status: invalid_parameters
- compute: Let P mean x≥6 cm and Q mean y≥4 cm. Modus ponens uses premises P→Q and P with conclusion Q. Modus tollens uses P→Q and ¬Q with conclusion ¬P. The invalid pattern affirming the consequent uses P→Q and Q with conclusion P. Enumerate all four assignments: validity means there is no row with all premises true and conclusion false.
- numeric tolerance: 1e-10
- invariants:
  - Panel length x and width y independently range from zero to 12 cm. P means x≥6 cm and Q means y≥4 cm, with equality included.
  - The premises and conclusion use classical truth-functional meanings. P→Q is material implication, which does not assert a cause or an empirical size law.
  - A counterexample assignment must make every premise true and the conclusion false. A row with a false premise is not a counterexample to validity.
  - A true current conclusion need not have been licensed by the stated premises. The module separately displays current premises, current conclusion and global argument validity.
  - The complete four-row check establishes semantic validity for these propositional patterns. It is not a general formal proof system, theorem prover or empirical validation method.
- limits:
  - Only three stated propositional argument patterns are evaluated.
  - Current predicate truth, premise satisfaction, conclusion truth and argument validity are distinct results.
  - Semantic validity alone does not establish that real-world premises are true or that one event causes another.
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
  - prompt: Can a valid pattern have a false current conclusion?
  - answer: Yes, if its premises are not all true on that assignment. Validity excludes only true-premises/false-conclusion cases.
- Item:
  - prompt: What refutes affirming the consequent?
  - answer: Take P=False and Q=True. Then P→Q and Q are both true while the conclusion P is false.

## Representations

- Item:
  - kind: geometry
  - description: The measured panel supplies P and Q to two explicit premise boxes and a conclusion box. The complete argument table marks premise failures, licensed conclusions and genuine counterexamples separately.
- Item:
  - kind: graph
  - description: Input-plane regions distinguish where every premise holds, where the conclusion is true and where a counterexample occurs. A valid pattern has no counterexample region.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Follow current predicate truths through an argument’s premises and conclusion, then test its validity on every assignment.
  - limitations: Only three stated propositional argument patterns are evaluated.
  - evidence kind: constructed_example
  - example ref: math:example:inference:modus-ponens
- Item:
  - context: Separate false premises from invalidity
  - mapping: The current argument cannot use a premise that is false on the selected assignment.
  - limitations: The current false conclusion does not by itself determine validity.
  - evidence kind: constructed_example
  - example ref: math:example:inference:false-premise

## Source Refs

- source:openstax:logical-arguments
- source:openstax:truth-tables

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.28.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:openstax:truth-tables. [Contemporary Mathematics, 2.3 Constructing Truth Tables](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables). Locator: Enumeration of the four two-proposition assignments; truth tables for negation, conjunction and inclusive disjunction. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:logical-arguments. [Contemporary Mathematics, 2.7 Logical Arguments](https://openstax.org/books/contemporary-mathematics/pages/2-7-logical-arguments). Locator: Validity and soundness; law of detachment, denying the consequent, and counterexamples to affirming the consequent. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
