---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:relation", "id": "math:concept:relation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:relation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c4e49ce3e290cefa1e4480d418f71f98184928ca4d29ab3a98714a5c1f151137"}, "purpose": "Change a combined-length requirement and follow one ordered pair into a binary relation and its complete membership count.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c4e49ce3e290cefa1e4480d418f71f98184928ca4d29ab3a98714a5c1f151137", "status": "draft", "title": "Predicates and relations", "topics": ["mathematics", "language-foundations", "sets", "logic", "binary relation", "ordered pair", "predicate arity", "relation membership"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Predicates and relations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:relation; revision 0.1.0-draft. Setting: A binary length relation on two independent copies of one six-element domain. Expression: $D=\{2,4,6,8,10,12\}\,\mathrm{cm},\quad R_h=\{(x,y)\in D\times D:x+y\ge h\}.$. Conditions required for a defined value (a case may test their violation): There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed. The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal. The free requirement h ranges from zero to 26 cm. Membership means x+y≥h, with equality included. The relation Rₕ contains pairs, Rₕ(x,y) states one pair’s membership truth, and |Rₕ| is an integer count. A unary predicate such as x≥h has one argument and is a different test. Scope: Both argument positions range over the stated finite domain. Changing h changes the relation on that fixed domain product. A count of satisfying choices is not a probability unless an additional sampling model is supplied.

## Schema Version

0.1.0

## Id

math:concept:relation

## Slug

relation

## Type

concept

## Title

Predicates and relations

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

- binary relation
- ordered pair
- predicate arity
- relation membership

## Branches

- language-foundations
- sets
- logic

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Change a combined-length requirement and follow one ordered pair into a binary relation and its complete membership count.

## Meaning

A predicate takes a stated number of arguments and yields a truth value. A binary relation on a domain is a set of ordered pairs; its membership predicate tests two arguments. The two-strip example distinguishes the truth of one pair from the number of all pairs satisfying the same rule.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:quantifier
  - math:concept:logical-connectives
- depth:
  - math:concept:function

## Definition

- setting: A binary length relation on two independent copies of one six-element domain.
- formal latex: D=\{2,4,6,8,10,12\}\,\mathrm{cm},\quad R_h=\{(x,y)\in D\times D:x+y\ge h\}.
- signature:
  - D: Available lengths in either supply.
  - x: Chosen left-strip length.
  - y: Chosen right-strip length.
  - h: Combined-length requirement.
  - D×D: All ordered left-right choices.
  - Rₕ: Set of satisfying ordered pairs.
  - Rₕ(x,y): Truth of one pair’s membership.
  - |Rₕ|: Number of satisfying ordered pairs.
- conditions:
  - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
  - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - The free requirement h ranges from zero to 26 cm. Membership means x+y≥h, with equality included.
  - The relation Rₕ contains pairs, Rₕ(x,y) states one pair’s membership truth, and |Rₕ| is an integer count. A unary predicate such as x≥h has one argument and is a different test.
- domain notes: Both argument positions range over the stated finite domain. Changing h changes the relation on that fixed domain product. A count of satisfying choices is not a probability unless an additional sampling model is supplied.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:western:relations

## Grammar

- pronunciation: Predicates and relations
- expression latex: D=\{2,4,6,8,10,12\}\,\mathrm{cm},\quad R_h=\{(x,y)\in D\times D:x+y\ge h\}.
- formation rule: Choose a left length x and a right length y independently from D={2,4,6,8,10,12} cm. The predicate Rₕ(x,y) is true exactly when x+y≥h. The relation Rₕ is the set of satisfying ordered pairs; |Rₕ| counts those pairs. The highlighted pair is (6,8), with total 14 cm.
- precedence: Form an ordered pair, add its two lengths, and compare the sum with h before counting its membership.
- symbols:
  - Item:
    - token: D
    - role: Available lengths in either supply
    - type: Finite set of centimetre lengths
  - Item:
    - token: x
    - role: Chosen left-strip length
    - type: Centimetres in D
  - Item:
    - token: y
    - role: Chosen right-strip length
    - type: Centimetres in D
  - Item:
    - token: h
    - role: Combined-length requirement
    - type: Centimetres
  - Item:
    - token: D×D
    - role: All ordered left-right choices
    - type: Cartesian product
  - Item:
    - token: Rₕ
    - role: Set of satisfying ordered pairs
    - type: Binary relation
  - Item:
    - token: Rₕ(x,y)
    - role: Truth of one pair’s membership
    - type: Binary predicate
  - Item:
    - token: |Rₕ|
    - role: Number of satisfying ordered pairs
    - type: Nonnegative integer
- ast:
  - id: ast:relation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:threshold
      - kind: variable
      - type: Declared model input
      - symbol: h
      - scope ref: scope:relation:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Choose a left length x and a right length y independently from D={2,4,6,8,10,12} cm. The predicate Rₕ(x,y) is true exactly when x+y≥h. The relation Rₕ is the set of satisfying ordered pairs; |Rₕ| counts those pairs. The highlighted pair is (6,8), with total 14 cm.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:threshold
  - scopes:
    - Item:
      - id: scope:relation:expression
      - kind: modelExpression
      - free variables:
        - h
      - domain condition: A binary length relation on two independent copies of one six-element domain.
- parse errors:
  - Item:
    - input: Count unordered combinations
    - status: ordering error
    - reason: Left and right positions distinguish (6,8) from (8,6).
  - Item:
    - input: Remove equal-length choices
    - status: domain error
    - reason: The supplies are independent, so choices such as (6,6) are included.
  - Item:
    - input: Use x≥h in place of x+y≥h
    - status: arity error
    - reason: The displayed membership predicate uses both arguments.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - D: domain
  - h: threshold
  - Rₕ: members
  - Rₕ(x,y): pairs
  - |Rₕ|: pairCount
  - D×D: pairs

## Properties

- Item:
  - claim: Lowering h cannot remove a satisfying pair.
  - conditions: Keep the domain and inclusive sum rule fixed.
  - derivation: If x+y≥h₂ and h₁≤h₂, then x+y≥h₁ as well.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:relation:twenty-one-choices
- Item:
  - claim: The same pair can be a member at a boundary and fail immediately above it.
  - conditions: Use a pair with sum exactly equal to a threshold.
  - derivation: At h=14 cm the sum 14 meets ≥; for h>14 cm the same sum does not.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:relation:twenty-one-choices

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A relation is a set of ordered pairs rather than a list of truth values.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Quantifiers can ask whether some or all ordered pairs satisfy a membership predicate.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A function is a special relation with exactly one output for each allowed input; a general relation need not satisfy that condition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:relation:twenty-one-choices
  - title: Count the choices at equality
  - role: applied_model
  - question: At h=14 cm, how many ordered pairs qualify?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - inputs:
    - threshold: 14
  - steps:
    - Item:
      - index: 1
      - expression: For x=2,4,6,8,10,12 cm, the passing right-choice counts are 1,2,3,4,5,6.
      - reason: Find the minimum allowed right length in each row.
    - Item:
      - index: 2
      - expression: |Rₕ|=1+2+3+4+5+6=21.
      - reason: Count every ordered choice once.
    - Item:
      - index: 3
      - expression: Rₕ(6,8)=True because 6+8=14.
      - reason: The highlighted pair meets equality.
  - result:
    - exact: |Rₕ|=21; Rₕ(6,8)=True
  - interpretation: Twenty-one left-right choices qualify, including the highlighted pair.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: There are 15 pairs below the sum threshold and 36−15=21 at or above it.
  - limits: The count includes equal lengths and distinguishes left from right.
  - preset:
    - threshold: 14
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
- Item:
  - id: math:example:relation:higher-requirement
  - title: Raise the combined requirement
  - role: applied_model
  - question: At h=18 cm, how many choices remain?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - inputs:
    - threshold: 18
  - steps:
    - Item:
      - index: 1
      - expression: The six row counts are 0,0,1,2,3,4.
      - reason: Short left choices cannot reach 18 cm with the longest right strip.
    - Item:
      - index: 2
      - expression: |Rₕ|=0+0+1+2+3+4=10.
      - reason: Sum the complete membership rows.
    - Item:
      - index: 3
      - expression: Rₕ(6,8)=False because 14<18.
      - reason: Read one pair separately from the total count.
  - result:
    - exact: |Rₕ|=10; Rₕ(6,8)=False
  - interpretation: The requirement leaves ten qualifying ordered pairs.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The sum counts at 18,20,22,24 cm are 4,3,2,1, totalling 10.
  - limits: Failure of the highlighted pair does not imply that the relation is empty.
  - preset:
    - threshold: 18
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
- Item:
  - id: math:example:relation:longest-pair
  - title: Inspect the longest possible pair
  - role: applied_model
  - question: What happens at h=24 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - inputs:
    - threshold: 24
  - steps:
    - Item:
      - index: 1
      - expression: The largest possible sum is 12+12=24 cm.
      - reason: Use the maximum in each independent supply.
    - Item:
      - index: 2
      - expression: Only (12,12) qualifies, so |Rₕ|=1.
      - reason: Equality includes that single ordered pair.
  - result:
    - exact: |Rₕ|=1
  - interpretation: Two equal-length selections are valid because they come from different supplies.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: If either chosen length is less than 12 cm, the sum is less than 24 cm.
  - limits: The supplies permit the same numerical length in both positions.
  - preset:
    - threshold: 24
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
- Item:
  - id: math:example:relation:above-longest
  - title: Move beyond all available sums
  - role: applied_model
  - question: Does any pair qualify at h=24.01 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - inputs:
    - threshold: 24.01
  - steps:
    - Item:
      - index: 1
      - expression: For every allowed pair, x+y≤24 cm<24.01 cm.
      - reason: Bound the largest possible sum.
    - Item:
      - index: 2
      - expression: Rₕ is empty and |Rₕ|=0.
      - reason: No ordered pair satisfies the predicate.
  - result:
    - exact: |Rₕ|=0
  - interpretation: The relation has no members above the largest available sum.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The unique maximum-sum pair fails, and every other sum is smaller.
  - limits: The conclusion concerns only the stated domain product.
  - preset:
    - threshold: 24.01
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
- Item:
  - id: math:example:relation:all-pairs
  - title: Lower the requirement to the smallest sum
  - role: applied_model
  - question: At h=4 cm, how many choices qualify?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - inputs:
    - threshold: 4
  - steps:
    - Item:
      - index: 1
      - expression: The smallest sum is 2+2=4 cm.
      - reason: Use the domain minimum in both positions.
    - Item:
      - index: 2
      - expression: All 6×6=36 ordered pairs satisfy x+y≥4.
      - reason: The minimum already meets equality.
  - result:
    - exact: |Rₕ|=36
  - interpretation: The complete domain product is the relation for this requirement.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Each of six left choices admits all six right choices.
  - limits: The 36 choices are an enumeration, not a probability claim.
  - preset:
    - threshold: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
    - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.

## Interactive

- component id: component:relation
- renderer id: relation-visual-model
- renderer version: 1
- model id: relation-visual-model
- model revision: 1
- expression id: ast:relation:expression
- interaction status: implemented
- description: A labelled 6×6 membership grid keeps left and right choices separate. The distinguished 6 cm and 8 cm strips share a length scale with their 14 cm sum and the moving requirement.
- controls:
  - Item:
    - id: threshold
    - type: number
    - default: 18
    - min: 0
    - max: 26
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - threshold: 18
    - output: 10
  - Item:
    - input:
      - threshold: 14
    - output: 21
  - Item:
    - input:
      - threshold: 14.0001
    - output: 15
  - Item:
    - input:
      - threshold: 24
    - output: 1
  - Item:
    - input:
      - threshold: 24.0001
    - output: 0
  - Item:
    - input:
      - threshold: 0
    - output: 36
  - Item:
    - input:
      - threshold: 4
    - output: 36
  - Item:
    - input:
      - threshold: 4.0001
    - output: 35
  - Item:
    - input:
      - threshold: 26
    - output: 0
  - Item:
    - input:
      - threshold: -1
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 27
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 14
    - status: invalid_parameters
- compute: Choose a left length x and a right length y independently from D={2,4,6,8,10,12} cm. The predicate Rₕ(x,y) is true exactly when x+y≥h. The relation Rₕ is the set of satisfying ordered pairs; |Rₕ| counts those pairs. The highlighted pair is (6,8), with total 14 cm.
- numeric tolerance: 1e-10
- invariants:
  - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
  - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - The free requirement h ranges from zero to 26 cm. Membership means x+y≥h, with equality included.
  - The relation Rₕ contains pairs, Rₕ(x,y) states one pair’s membership truth, and |Rₕ| is an integer count. A unary predicate such as x≥h has one argument and is a different test.
- limits:
  - This executable relation uses one fixed finite domain and one sum-threshold predicate.
  - The two supplies are independent; the model does not choose two distinct objects without replacement from one tray.
  - A pair count alone does not assert a probability or model actual stock availability.
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
  - prompt: Why are (6,8) and (8,6) different choices?
  - answer: The first position is the left supply and the second the right supply. Their identities differ even though this particular sum test gives them the same truth value.
- Item:
  - prompt: What changes at h=14 cm?
  - answer: Every ordered pair with sum 14 still qualifies at equality. Immediately above 14, those six pairs no longer belong to Rₕ.

## Representations

- Item:
  - kind: geometry
  - description: A labelled 6×6 membership grid keeps left and right choices separate. The distinguished 6 cm and 8 cm strips share a length scale with their 14 cm sum and the moving requirement.
- Item:
  - kind: graph
  - description: The exact count |Rₕ| is a step function of h. Closed endpoints include pairs whose sum equals the requirement, and open following endpoints exclude them immediately above it.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Change a combined-length requirement and follow one ordered pair into a binary relation and its complete membership count.
  - limitations: This executable relation uses one fixed finite domain and one sum-threshold predicate.
  - evidence kind: constructed_example
  - example ref: math:example:relation:twenty-one-choices
- Item:
  - context: Raise the combined requirement
  - mapping: The requirement leaves ten qualifying ordered pairs.
  - limitations: Failure of the highlighted pair does not imply that the relation is empty.
  - evidence kind: constructed_example
  - example ref: math:example:relation:higher-requirement

## Source Refs

- source:western:relations

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.28.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:western:relations. [Alexander Brandt, Discrete Structures for Computing, 2.2 Relations](https://www.csd.uwo.ca/~abrandt5/teaching/DiscreteStructures/Chapter2/relations.html). Locator: Binary Relations and Relations as Predicates: Cartesian products, subsets of ordered pairs, and one-place versus two-place predicates. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
