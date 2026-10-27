---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:countability", "id": "math:concept:countability", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:countability", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "0a6dcf9f6a5dd58f5e4f86cc9f15e4b77d096babf25d3af15573b5a0ec47af9d"}, "purpose": "Follow a natural-number index to an integer address, then use the inverse rule to recover the index.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "0a6dcf9f6a5dd58f5e4f86cc9f15e4b77d096babf25d3af15573b5a0ec47af9d", "status": "draft", "title": "Countability and enumeration", "topics": ["mathematics", "language-foundations", "sets", "number-arithmetic", "countable set", "denumerable", "integer enumeration", "bijection with natural numbers"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Countability and enumeration

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:countability; revision 0.1.0-draft. Setting: A proved bijection from the nonnegative natural numbers ℕ₀ to the integers ℤ, illustrated in a finite index window. Expression: $f(0)=0,\quad f(n)=\begin{cases}(n+1)/2&n\text{ odd},\\-n/2&n>0\text{ even},\end{cases}\quad g(z)=\begin{cases}2z-1&z>0,\\-2z&z\le0.\end{cases}$. Conditions required for a defined value (a case may test their violation): The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0. The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality. For every n∈ℕ₀ and z∈ℤ, the stated piecewise rules satisfy g(f(n))=n and f(g(z))=z. These all-input identities establish that the full rule is a bijection. In this reference, countable means finite or denumerable. The integers are denumerable, with cardinality ℵ₀; a finite prefix alone does not establish that claim. Scope: The selected shelf-address analogy shows thirteen possible matches. The explicit all-input rule and inverse argument concern the complete infinite sets, rather than inferring infinity or exhaustiveness from a finite animation.

## Schema Version

0.1.0

## Id

math:concept:countability

## Slug

countability

## Type

concept

## Title

Countability and enumeration

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

- countable set
- denumerable
- integer enumeration
- bijection with natural numbers

## Branches

- language-foundations
- sets
- number-arithmetic

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow a natural-number index to an integer address, then use the inverse rule to recover the index.

## Meaning

A set is denumerable when a bijection pairs it with the natural numbers. Here a rule lists every integer without repeating one: 0,1,−1,2,−2 and so on. The finite shelf picture illustrates that rule; its two inverse identities establish the complete bijection beyond the displayed window.

## Prerequisites

- required:
  - math:concept:function
  - math:concept:set
- helpful:
  - math:concept:relation
  - math:concept:natural-number
- depth:
  - math:concept:infinity
  - math:concept:set

## Definition

- setting: A proved bijection from the nonnegative natural numbers ℕ₀ to the integers ℤ, illustrated in a finite index window.
- formal latex: f(0)=0,\quad f(n)=\begin{cases}(n+1)/2&n\text{ odd},\\-n/2&n>0\text{ even},\end{cases}\quad g(z)=\begin{cases}2z-1&z>0,\\-2z&z\le0.\end{cases}
- signature:
  - n: Selected enumeration index.
  - z: Selected integer address.
  - f: Integer-enumeration function.
  - g: Inverse index function.
  - f(n): Integer paired with index n.
  - g(z): Index recovered from integer z.
  - ℕ₀: Nonnegative natural-number domain.
  - ℤ: Integer-address codomain.
  - ℵ₀: Cardinality of a denumerable set.
- conditions:
  - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
  - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - For every n∈ℕ₀ and z∈ℤ, the stated piecewise rules satisfy g(f(n))=n and f(g(z))=z. These all-input identities establish that the full rule is a bijection.
  - In this reference, countable means finite or denumerable. The integers are denumerable, with cardinality ℵ₀; a finite prefix alone does not establish that claim.
- domain notes: The selected shelf-address analogy shows thirteen possible matches. The explicit all-input rule and inverse argument concern the complete infinite sets, rather than inferring infinity or exhaustiveness from a finite animation.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:lebl:cardinality

## Grammar

- pronunciation: Countability and enumeration
- expression latex: f(0)=0,\quad f(n)=\begin{cases}(n+1)/2&n\text{ odd},\\-n/2&n>0\text{ even},\end{cases}\quad g(z)=\begin{cases}2z-1&z>0,\\-2z&z\le0.\end{cases}
- formation rule: Use f(0)=0. For odd n use f(n)=(n+1)/2; for positive even n use f(n)=−n/2. The inverse is g(z)=2z−1 for positive z and g(z)=−2z for nonpositive z. The identities g(f(n))=n and f(g(z))=z establish a bijection ℕ₀→ℤ.
- precedence: Check zero and the parity of n before choosing the appropriate branch. The inverse checks the sign of the integer z.
- symbols:
  - Item:
    - token: n
    - role: Selected enumeration index
    - type: Nonnegative integer
  - Item:
    - token: z
    - role: Selected integer address
    - type: Integer
  - Item:
    - token: f
    - role: Integer-enumeration function
    - type: Function ℕ₀→ℤ
  - Item:
    - token: g
    - role: Inverse index function
    - type: Function ℤ→ℕ₀
  - Item:
    - token: f(n)
    - role: Integer paired with index n
    - type: Integer
  - Item:
    - token: g(z)
    - role: Index recovered from integer z
    - type: Nonnegative integer
  - Item:
    - token: ℕ₀
    - role: Nonnegative natural-number domain
    - type: Infinite set
  - Item:
    - token: ℤ
    - role: Integer-address codomain
    - type: Infinite set
  - Item:
    - token: ℵ₀
    - role: Cardinality of a denumerable set
    - type: Infinite cardinal
- ast:
  - id: ast:countability:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:index
      - kind: variable
      - type: Declared model input
      - symbol: n
      - scope ref: scope:countability:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Use f(0)=0. For odd n use f(n)=(n+1)/2; for positive even n use f(n)=−n/2. The inverse is g(z)=2z−1 for positive z and g(z)=−2z for nonpositive z. The identities g(f(n))=n and f(g(z))=z establish a bijection ℕ₀→ℤ.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:index
  - scopes:
    - Item:
      - id: scope:countability:expression
      - kind: modelExpression
      - free variables:
        - n
      - domain condition: A proved bijection from the nonnegative natural numbers ℕ₀ to the integers ℤ, illustrated in a finite index window.
- parse errors:
  - Item:
    - input: Read the prefix size as ℵ₀
    - status: quantity error
    - reason: A displayed prefix is finite; ℵ₀ names the cardinality of the complete denumerable set.
  - Item:
    - input: Use n=2.5
    - status: domain error
    - reason: The enumeration index is a whole natural number.
  - Item:
    - input: Infer a bijection because the first few matches look correct
    - status: proof gap
    - reason: The proof must cover all inputs, which the inverse identities do here.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - n: index
  - z: integer
  - f(n): output
  - g(z): inverseIndex

## Properties

- Item:
  - claim: The two rules are inverses on their complete domains.
  - conditions: Use n∈ℕ₀ and z∈ℤ.
  - derivation: For n=0 both rules return zero. For odd n, g((n+1)/2)=n. For positive even n, g(−n/2)=n. For z>0, f(2z−1)=z; for z=0 both return zero; for z<0, f(−2z)=z.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:countability:negative-address
- Item:
  - claim: The integer set is denumerable under the stated convention.
  - conditions: Use the full functions, not only the finite display.
  - derivation: Both inverse identities imply that f is one-to-one and onto, hence a bijection ℕ₀→ℤ.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:countability:inverse-positive

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The forward and inverse maps assign one result to each allowed input.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:relation
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A bijection is a special relation pairing the domains one-to-one and onto.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:infinity
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A full infinite-set claim requires a complete rule and argument, not only an expanding finite display.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:countability:negative-address
  - title: Recover an index from a negative address
  - role: applied_model
  - question: Which integer pairs with n=8, and what does the inverse return?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - inputs:
    - index: 8
  - steps:
    - Item:
      - index: 1
      - expression: Since 8 is positive and even, f(8)=−8/2=−4.
      - reason: Choose the even-index branch.
    - Item:
      - index: 2
      - expression: g(−4)=−2(−4)=8.
      - reason: The nonpositive inverse branch recovers the original index.
  - result:
    - exact: f(8)=−4; g(−4)=8; prefix size=9
  - interpretation: The selected integer lies four addresses left of zero, while nine index matches are emphasized.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Both compositions at this pair recover their original inputs: g(f(8))=8 and f(g(−4))=−4.
  - limits: The prefix of nine matches is finite.
  - preset:
    - index: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
- Item:
  - id: math:example:countability:positive-address
  - title: Use an odd index
  - role: applied_model
  - question: What integer pairs with n=5?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - inputs:
    - index: 5
  - steps:
    - Item:
      - index: 1
      - expression: f(5)=(5+1)/2=3.
      - reason: The odd branch gives a positive integer.
    - Item:
      - index: 2
      - expression: g(3)=2·3−1=5.
      - reason: The positive inverse branch returns the index.
  - result:
    - exact: f(5)=3; g(3)=5
  - interpretation: Odd indices reach the positive side of the address line.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The fifth index is odd and the inverse produces that same odd index.
  - limits: The selected match is one instance of the complete all-input rule.
  - preset:
    - index: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
- Item:
  - id: math:example:countability:central-address
  - title: Pair the two zeros directly
  - role: applied_model
  - question: What happens at n=0?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - inputs:
    - index: 0
  - steps:
    - Item:
      - index: 1
      - expression: f(0)=0.
      - reason: Use the explicitly stated zero branch.
    - Item:
      - index: 2
      - expression: g(0)=−2·0=0.
      - reason: The inverse’s nonpositive branch includes zero.
  - result:
    - exact: f(0)=0; g(0)=0; prefix size=1
  - interpretation: The central address is the first match of this enumeration.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Both inverse identities hold at zero without assigning the zero address a sign.
  - limits: ℕ₀ is explicitly chosen to include zero.
  - preset:
    - index: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
- Item:
  - id: math:example:countability:end-of-window
  - title: Read the last displayed match
  - role: applied_model
  - question: Which integer pairs with n=12?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - inputs:
    - index: 12
  - steps:
    - Item:
      - index: 1
      - expression: f(12)=−12/2=−6.
      - reason: Use the positive even branch.
    - Item:
      - index: 2
      - expression: g(−6)=12.
      - reason: Recover the displayed endpoint index.
  - result:
    - exact: f(12)=−6; g(−6)=12
  - interpretation: The finite window reaches its last displayed negative address.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The prefix consists of indices 0 through 12, so it has 13 matches.
  - limits: The full rule continues beyond the live window.
  - preset:
    - index: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
- Item:
  - id: math:example:countability:inverse-positive
  - title: Start from an integer and recover its place
  - role: applied_model
  - question: Where does integer z=4 occur?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - inputs:
    - index: 7
  - steps:
    - Item:
      - index: 1
      - expression: g(4)=2·4−1=7.
      - reason: The positive inverse branch gives its index.
    - Item:
      - index: 2
      - expression: f(7)=(7+1)/2=4.
      - reason: The forward odd branch returns the given integer.
  - result:
    - exact: g(4)=7; f(7)=4
  - interpretation: Every positive integer has an explicitly determined odd index.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: For any positive integer z, f(2z−1)=(2z−1+1)/2=z.
  - limits: This branch argument concerns all positive integers, rather than only z=4.
  - preset:
    - index: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
    - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.

## Interactive

- component id: component:countability
- renderer id: countability-visual-model
- renderer version: 1
- model id: countability-visual-model
- model revision: 1
- expression id: ast:countability:expression
- interaction status: implemented
- description: A fixed index row and a signed integer-address line show selected pairings without rearranging the scale. The current prefix is emphasized while upcoming matches remain visible.
- controls:
  - Item:
    - id: index
    - type: number
    - default: 4
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - index: 0
    - output: 0
  - Item:
    - input:
      - index: 1
    - output: 1
  - Item:
    - input:
      - index: 2
    - output: -1
  - Item:
    - input:
      - index: 3
    - output: 2
  - Item:
    - input:
      - index: 4
    - output: -2
  - Item:
    - input:
      - index: 5
    - output: 3
  - Item:
    - input:
      - index: 8
    - output: -4
  - Item:
    - input:
      - index: 11
    - output: 6
  - Item:
    - input:
      - index: 12
    - output: -6
  - Item:
    - input:
      - index: -1
    - status: invalid_parameters
  - Item:
    - input:
      - index: 13
    - status: invalid_parameters
  - Item:
    - input:
      - index: 1.5
    - status: invalid_parameters
- compute: Use f(0)=0. For odd n use f(n)=(n+1)/2; for positive even n use f(n)=−n/2. The inverse is g(z)=2z−1 for positive z and g(z)=−2z for nonpositive z. The identities g(f(n))=n and f(g(z))=z establish a bijection ℕ₀→ℤ.
- numeric tolerance: 1e-10
- invariants:
  - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
  - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - For every n∈ℕ₀ and z∈ℤ, the stated piecewise rules satisfy g(f(n))=n and f(g(z))=z. These all-input identities establish that the full rule is a bijection.
  - In this reference, countable means finite or denumerable. The integers are denumerable, with cardinality ℵ₀; a finite prefix alone does not establish that claim.
- limits:
  - The live controls display only indices zero through twelve.
  - The selected integer and finite prefix size are different quantities from ℵ₀.
  - This lesson establishes the stated integer bijection, not uncountability, ordinal arithmetic or a theorem about countable models.
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
  - prompt: Why do negative integer addresses not require negative natural indices?
  - answer: Positive even indices produce negative integers, while odd indices produce positive integers.
- Item:
  - prompt: What supplies the proof beyond the picture?
  - answer: The inverse rules cover every natural index and every integer, yielding both inverse identities.

## Representations

- Item:
  - kind: geometry
  - description: A fixed index row and a signed integer-address line show selected pairings without rearranging the scale. The current prefix is emphasized while upcoming matches remain visible.
- Item:
  - kind: graph
  - description: Discrete points show f(n) on fixed whole-index and integer axes. There are no points or interpolated values at fractional indices.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Follow a natural-number index to an integer address, then use the inverse rule to recover the index.
  - limitations: The live controls display only indices zero through twelve.
  - evidence kind: constructed_example
  - example ref: math:example:countability:negative-address
- Item:
  - context: Use an odd index
  - mapping: Odd indices reach the positive side of the address line.
  - limitations: The word fifth refers to the mathematical index value, not the size of the prefix.
  - evidence kind: constructed_example
  - example ref: math:example:countability:positive-address

## Source Refs

- source:lebl:cardinality

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.29.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:lebl:cardinality. [Jiří Lebl, Basic Analysis, 0.3 Basic Set Theory](https://jirilebl.github.io/ra/html/sec_basicset.html). Locator: Sections 0.3.3 and 0.3.5: injective/surjective/bijective functions, cardinality, countable versus countably infinite, and aleph-zero notation. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
