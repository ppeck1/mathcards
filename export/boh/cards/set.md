---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:set", "id": "math:concept:set", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:set", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d3558c55e262328e50cf7861d28d1e86b3d09ae611571caf28636c83322b7a95"}, "purpose": "Choose membership rules and see exactly which objects remain in a set.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d3558c55e262328e50cf7861d28d1e86b3d09ae611571caf28636c83322b7a95", "status": "draft", "title": "Sets and membership", "topics": ["mathematics", "logic", "discrete-mathematics", "geometry", "finite set", "set operations", "membership rules"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Sets and membership

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:set; revision 0.1.0-draft. Setting: Finite sets of distinct labeled objects; the live universe consists of twelve candidate peg heights. Expression: $U=\{1,2,\ldots,12\},\quad A=\{u\in U:u\le a\},\quad B=\{u\in U:u\ge b\},\quad R\in\{A\cap B,A\cup B,A\setminus B\},\quad output=|R|.$. Conditions required for a defined value (a case may test their violation): The universal set is the fixed finite collection U={1,2,...,12}; each label denotes one distinct candidate peg with that height in centimetres. A contains the members u of U with u<=maxSize, and B contains the members u of U with u>=minSize. Both inequalities include equality. The chosen result R is intersection, union or ordered difference A∖B. Inclusive OR includes membership in either or both sets; difference removes B members from A. The primary output |R| is cardinality: a whole number of members, not the length of a continuous interval or the sum of peg heights. Continuous cutoff motion changes membership only when a fixed candidate height is crossed. A partially crossed drawing does not create a fraction of a member. At an exact shared integer cutoff the intersection can be a singleton with cardinality one; an empty set has cardinality zero. The finite-union identity is |A∪B|=|A|+|B|−|A∩B|, counting each distinct member once. Scope: General set theory includes finite and infinite sets and many kinds of objects. This specimen only filters the fixed twelve labeled heights. It is not a measure of interval length, a multiset with duplicate entries, or an automatic proof checker.

## Schema Version

0.1.0

## Id

math:concept:set

## Slug

set

## Type

concept

## Title

Sets and membership

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. Stories and worked quantities are originally authored constructed examples, not measurements or historical events. Historical priority and notation claims require separate evidence before publication.

## Aliases

- finite set
- set operations
- membership rules

## Branches

- logic
- discrete-mathematics
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Choose membership rules and see exactly which objects remain in a set.

## Meaning

A set is a collection of distinct objects with a well-defined membership rule. The live specimen compares two finite subsets of one universal set, showing intersection, union and ordered difference while keeping the resulting set separate from its cardinality.

## Prerequisites

- required:

- helpful:
  - math:concept:expression
- depth:
  - math:concept:relation
  - math:concept:proof

## Definition

- setting: Finite sets of distinct labeled objects; the live universe consists of twelve candidate peg heights.
- formal latex: U=\{1,2,\ldots,12\},\quad A=\{u\in U:u\le a\},\quad B=\{u\in U:u\ge b\},\quad R\in\{A\cap B,A\cup B,A\setminus B\},\quad output=|R|.
- signature:
  - U: Fixed set of candidate labels 1 through 12.
  - a,maxSize: Maximum allowable height in [0,12] cm.
  - b,minSize: Minimum required height in [0,12] cm.
  - operation: One of intersection, union, difference.
  - A,B,R: Finite sets of labels, not scalar counts.
  - |A|,|B|,|R|: Cardinalities, counted in objects.
- conditions:
  - The universal set is the fixed finite collection U={1,2,...,12}; each label denotes one distinct candidate peg with that height in centimetres.
  - A contains the members u of U with u<=maxSize, and B contains the members u of U with u>=minSize. Both inequalities include equality.
  - The chosen result R is intersection, union or ordered difference A∖B. Inclusive OR includes membership in either or both sets; difference removes B members from A.
  - The primary output |R| is cardinality: a whole number of members, not the length of a continuous interval or the sum of peg heights.
  - Continuous cutoff motion changes membership only when a fixed candidate height is crossed. A partially crossed drawing does not create a fraction of a member.
  - At an exact shared integer cutoff the intersection can be a singleton with cardinality one; an empty set has cardinality zero.
  - The finite-union identity is |A∪B|=|A|+|B|−|A∩B|, counting each distinct member once.
- domain notes: General set theory includes finite and infinite sets and many kinds of objects. This specimen only filters the fixed twelve labeled heights. It is not a measure of interval length, a multiset with duplicate entries, or an automatic proof checker.
- proof status: Definition-level references; restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:openstax:basic-set-concepts
  - source:openstax:two-set-operations

## Grammar

- pronunciation: Sets and membership
- expression latex: U=\{1,2,\ldots,12\},\quad A=\{u\in U:u\le a\},\quad B=\{u\in U:u\ge b\},\quad R\in\{A\cap B,A\cup B,A\setminus B\},\quad output=|R|.
- formation rule: U={1,2,...,12}; A={u∈U:u<=maxSize}; B={u∈U:u>=minSize}; R=A∩B for intersection, A∪B for union, A∖B for difference; output=resultCount=|R|.
- precedence: Evaluate both membership predicates on the same universe, apply the selected set operation, then count distinct resulting members. A∖B is ordered and need not equal B∖A.
- symbols:
  - Item:
    - token: U
    - role: Fixed universal set of twelve distinct candidate heights
    - type: Finite set
  - Item:
    - token: A
    - role: Candidates meeting the maximum-clearance rule
    - type: Finite set
  - Item:
    - token: B
    - role: Candidates meeting the minimum-height rule
    - type: Finite set
  - Item:
    - token: R
    - role: Result of the selected set operation
    - type: Finite set
  - Item:
    - token: a
    - role: Inclusive maximum height, stored as maxSize
    - type: Real cutoff in centimetres
  - Item:
    - token: b
    - role: Inclusive minimum height, stored as minSize
    - type: Real cutoff in centimetres
  - Item:
    - token: |A|
    - role: Number of members of A
    - type: Nonnegative integer cardinality
  - Item:
    - token: |B|
    - role: Number of members of B
    - type: Nonnegative integer cardinality
  - Item:
    - token: |R|
    - role: Primary number of members in the selected result
    - type: Nonnegative integer cardinality
  - Item:
    - token: |A∩B|
    - role: Number of members satisfying both rules
    - type: Nonnegative integer cardinality
  - Item:
    - token: |A∪B|
    - role: Number of distinct members satisfying at least one rule
    - type: Nonnegative integer cardinality
  - Item:
    - token: |A∖B|
    - role: Number of A members that are not B members
    - type: Nonnegative integer cardinality
- ast:
  - id: ast:set:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:maxSize
      - kind: variable
      - type: Finite real control
      - symbol: maxSize
      - scope ref: scope:set:expression
    - Item:
      - id: n:minSize
      - kind: variable
      - type: Finite real control
      - symbol: minSize
      - scope ref: scope:set:expression
    - Item:
      - id: n:operation
      - kind: variable
      - type: Declared operation selector
      - symbol: operation
      - scope ref: scope:set:expression
    - Item:
      - id: n:leftRule
      - kind: functionRef
      - type: Real to finite set
      - ref: Given maxSize, select all members u of U={1,...,12} with u<=maxSize.
    - Item:
      - id: n:A
      - kind: apply
      - type: Finite set of candidate labels
      - function: n:leftRule
      - argument: n:maxSize
    - Item:
      - id: n:rightRule
      - kind: functionRef
      - type: Real to finite set
      - ref: Given minSize, select all members u of U={1,...,12} with u>=minSize.
    - Item:
      - id: n:B
      - kind: apply
      - type: Finite set of candidate labels
      - function: n:rightRule
      - argument: n:minSize
    - Item:
      - id: n:operationRule
      - kind: functionRef
      - type: Selector to finite-set operator
      - ref: Choose one curried operation: intersection, union, or ordered difference of two finite sets.
    - Item:
      - id: n:chosenOperation
      - kind: apply
      - type: Finite set to finite set to finite set
      - function: n:operationRule
      - argument: n:operation
    - Item:
      - id: n:operationOnA
      - kind: apply
      - type: Finite set to finite set
      - function: n:chosenOperation
      - argument: n:A
    - Item:
      - id: n:R
      - kind: apply
      - type: Finite set of candidate labels
      - function: n:operationOnA
      - argument: n:B
    - Item:
      - id: n:cardinality
      - kind: functionRef
      - type: Finite set to nonnegative integer
      - ref: Count distinct members of a finite set.
    - Item:
      - id: n:output
      - kind: apply
      - type: Nonnegative integer cardinality
      - function: n:cardinality
      - argument: n:R
  - scopes:
    - Item:
      - id: scope:set:expression
      - kind: modelExpression
      - free variables:
        - maxSize
        - minSize
        - operation
      - domain condition: The universal set is the fixed finite collection U={1,2,...,12}; each label denotes one distinct candidate peg with that height in centimetres.
- parse errors:
  - Item:
    - input: Treat |R| as the length between two cutoffs
    - status: quantity error
    - reason: Cardinality counts selected fixed objects; an interval length measures a different quantity.
  - Item:
    - input: Replace A∩B by A∪B without changing the question
    - status: operation error
    - reason: AND requires both rules; inclusive OR accepts either or both.
  - Item:
    - input: Call an empty result a set containing zero
    - status: membership error
    - reason: The empty set has no members; a set containing the number zero has one member, and zero is not a candidate here.
- ast coverage: A narrow typed expression outline for the declared executable specimen. Function references name fixed finite selection/counting procedures; no general set parser, statistical inference engine or program analyzer is claimed.
- output symbol bindings:
  - U: set:U
  - A: set:A
  - B: set:B
  - R: set:R
  - a: maxSize
  - b: minSize
  - |A|: countA
  - |B|: countB
  - |R|: resultCount
  - |A∩B|: intersectionCount
  - |A∪B|: unionCount
  - |A∖B|: differenceCount

## Properties

- Item:
  - claim: Finite union avoids counting the intersection twice.
  - conditions: A and B are finite subsets of the same universe.
  - derivation: Count the A-only, shared and B-only membership groups once each.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:set:either-rule
- Item:
  - claim: A singleton can occur at equal inclusive cutoffs.
  - conditions: The shared cutoff is one of the candidate integer heights.
  - derivation: That one height satisfies both <= and >=; cardinality is one despite zero cutoff separation.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:set:exact-boundary
- Item:
  - claim: Raising a maximum cutoff cannot remove an intersection member when the minimum is fixed.
  - conditions: Use intersection and hold the candidate universe and minSize fixed.
  - derivation: Every previously accepted u still satisfies u<=the larger maximum and the unchanged minimum.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:set:raise-clearance

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:population-sample
  - type: supports
  - conditions: Keep the population and selection rule explicit.
  - reason: A selected sample is a subset of a declared population.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: A probability model also needs a sample space and assigned probabilities.
  - reason: Events can be viewed as sets of possible outcomes.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:computational-complexity
  - type: supports
  - conditions: Count only the explicitly selected basic membership operation; no general runtime follows from a set picture alone.
  - reason: A direct filter can inspect each candidate once.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:set:both-rules
  - title: Find pegs that meet both display rules
  - role: applied_model
  - question: Which pegs fit a 7.5 cm clearance and reach at least 4 cm?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
  - inputs:
    - maxSize: 7.5
    - minSize: 4
    - operation: intersection
  - steps:
    - Item:
      - index: 1
      - expression: A={1,2,3,4,5,6,7}; B={4,5,6,7,8,9,10,11,12}
      - reason: List the members of the two sets from their predicates.
    - Item:
      - index: 2
      - expression: R=A∩B={4,5,6,7}
      - reason: Apply the operation specified by the question.
    - Item:
      - index: 3
      - expression: |R|=4
      - reason: Count distinct members rather than measuring the drawn band.
  - result:
    - exact: |R|=4
  - interpretation: Four candidate pegs meet both constraints; the 7.5 cm cutoff does not create a half peg.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Individually test each of the twelve labels against both inclusive rules, apply the selected Boolean condition, and tally the accepted labels.
  - limits: These results describe a fixed finite candidate collection. They do not turn the full continuous interval of possible physical heights into twelve objects.
  - preset:
    - maxSize: 7.5
    - minSize: 4
    - operation: intersection
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
- Item:
  - id: math:example:set:raise-clearance
  - title: Raise the shelf clearance
  - role: applied_model
  - question: What changes when clearance rises to 9 cm with the minimum still 4 cm?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
  - inputs:
    - maxSize: 9
    - minSize: 4
    - operation: intersection
  - steps:
    - Item:
      - index: 1
      - expression: A={1,2,3,4,5,6,7,8,9}; B={4,5,6,7,8,9,10,11,12}
      - reason: List the members of the two sets from their predicates.
    - Item:
      - index: 2
      - expression: R=A∩B={4,5,6,7,8,9}
      - reason: Apply the operation specified by the question.
    - Item:
      - index: 3
      - expression: |R|=6
      - reason: Count distinct members rather than measuring the drawn band.
  - result:
    - exact: |R|=6
  - interpretation: Crossing the fixed 8 and 9 cm heights adds two distinct members.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Individually test each of the twelve labels against both inclusive rules, apply the selected Boolean condition, and tally the accepted labels.
  - limits: These results describe a fixed finite candidate collection. They do not turn the full continuous interval of possible physical heights into twelve objects.
  - preset:
    - maxSize: 9
    - minSize: 4
    - operation: intersection
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
- Item:
  - id: math:example:set:either-rule
  - title: Keep candidates meeting either requirement
  - role: applied_model
  - question: With maximum 3 cm and minimum 8 cm, which pegs meet at least one rule?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
  - inputs:
    - maxSize: 3
    - minSize: 8
    - operation: union
  - steps:
    - Item:
      - index: 1
      - expression: A={1,2,3}; B={8,9,10,11,12}
      - reason: List the members of the two sets from their predicates.
    - Item:
      - index: 2
      - expression: R=A∪B={1,2,3,8,9,10,11,12}
      - reason: Apply the operation specified by the question.
    - Item:
      - index: 3
      - expression: |R|=8
      - reason: Count distinct members rather than measuring the drawn band.
  - result:
    - exact: |R|=8
  - interpretation: The union accepts either group. Pegs 4 through 7 meet neither rule and remain outside.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Individually test each of the twelve labels against both inclusive rules, apply the selected Boolean condition, and tally the accepted labels.
  - limits: These results describe a fixed finite candidate collection. They do not turn the full continuous interval of possible physical heights into twelve objects.
  - preset:
    - maxSize: 3
    - minSize: 8
    - operation: union
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
- Item:
  - id: math:example:set:ordered-removal
  - title: Remove the tall candidates from the short list
  - role: applied_model
  - question: Which pegs are in A but not B for maximum 9 cm and minimum 6 cm?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
  - inputs:
    - maxSize: 9
    - minSize: 6
    - operation: difference
  - steps:
    - Item:
      - index: 1
      - expression: A={1,2,3,4,5,6,7,8,9}; B={6,7,8,9,10,11,12}
      - reason: List the members of the two sets from their predicates.
    - Item:
      - index: 2
      - expression: R=A∖B={1,2,3,4,5}
      - reason: Apply the operation specified by the question.
    - Item:
      - index: 3
      - expression: |R|=5
      - reason: Count distinct members rather than measuring the drawn band.
  - result:
    - exact: |R|=5
  - interpretation: Difference keeps A members failing the B rule; it is not a symmetric operation.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Individually test each of the twelve labels against both inclusive rules, apply the selected Boolean condition, and tally the accepted labels.
  - limits: These results describe a fixed finite candidate collection. They do not turn the full continuous interval of possible physical heights into twelve objects.
  - preset:
    - maxSize: 9
    - minSize: 6
    - operation: difference
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
- Item:
  - id: math:example:set:exact-boundary
  - title: One peg exactly meets both limits
  - role: applied_model
  - question: If maximum and minimum are both 4 cm, how many candidates remain?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.
  - inputs:
    - maxSize: 4
    - minSize: 4
    - operation: intersection
  - steps:
    - Item:
      - index: 1
      - expression: A={1,2,3,4}; B={4,5,6,7,8,9,10,11,12}
      - reason: List the members of the two sets from their predicates.
    - Item:
      - index: 2
      - expression: R=A∩B={4}
      - reason: Apply the operation specified by the question.
    - Item:
      - index: 3
      - expression: |R|=1
      - reason: Count distinct members rather than measuring the drawn band.
  - result:
    - exact: |R|=1
  - interpretation: Inclusive equality admits the 4 cm peg. The result is a singleton even though the cutoff gap is zero.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Individually test each of the twelve labels against both inclusive rules, apply the selected Boolean condition, and tally the accepted labels.
  - limits: These results describe a fixed finite candidate collection. They do not turn the full continuous interval of possible physical heights into twelve objects.
  - preset:
    - maxSize: 4
    - minSize: 4
    - operation: intersection
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The candidate pegs are the distinct heights 1 through 12 cm.
    - The two limits are inclusive and use the same centimetre scale.
    - Membership is decided from the stated labels, not estimated from drawn overlap.
    - The operation is fixed for each worked case; every counted peg appears once.

## Interactive

- component id: component:set
- renderer id: set-visual-model
- renderer version: 1
- model id: set-visual-model
- model revision: 1
- expression id: ast:set:expression
- interaction status: implemented
- description: A row of twelve fixed objects is compared with two moving threshold bands. Membership marks and the selected result identify actual members; counts change at discrete inclusion boundaries.
- controls:
  - Item:
    - id: maxSize
    - type: number
    - default: 7.5
    - min: 0
    - max: 12
    - step: 0.01
  - Item:
    - id: minSize
    - type: number
    - default: 4
    - min: 0
    - max: 12
    - step: 0.01
  - Item:
    - id: operation
    - type: enum
    - default: intersection
    - values:
      - intersection
      - union
      - difference
- expected cases:
  - Item:
    - input:
      - maxSize: 7.5
      - minSize: 4
      - operation: intersection
    - output: 4
  - Item:
    - input:
      - maxSize: 0
      - minSize: 4
      - operation: intersection
    - output: 0
  - Item:
    - input:
      - maxSize: 12
      - minSize: 0
      - operation: intersection
    - output: 12
  - Item:
    - input:
      - maxSize: 12
      - minSize: 12
      - operation: intersection
    - output: 1
  - Item:
    - input:
      - maxSize: 4
      - minSize: 4
      - operation: intersection
    - output: 1
  - Item:
    - input:
      - maxSize: 3.999
      - minSize: 4
      - operation: intersection
    - output: 0
  - Item:
    - input:
      - maxSize: 7.5
      - minSize: 4
      - operation: union
    - output: 12
  - Item:
    - input:
      - maxSize: 3
      - minSize: 8
      - operation: union
    - output: 8
  - Item:
    - input:
      - maxSize: 9
      - minSize: 6
      - operation: difference
    - output: 5
  - Item:
    - input:
      - maxSize: 12
      - minSize: 12
      - operation: difference
    - output: 11
  - Item:
    - input:
      - maxSize: 7.5
      - minSize: -1
      - operation: intersection
    - status: invalid_parameters
  - Item:
    - input:
      - maxSize: 13
      - minSize: 4
      - operation: intersection
    - status: invalid_parameters
- compute: U={1,2,...,12}; A={u∈U:u<=maxSize}; B={u∈U:u>=minSize}; R=A∩B for intersection, A∪B for union, A∖B for difference; output=resultCount=|R|.
- numeric tolerance: 1e-10
- invariants:
  - The universal set is the fixed finite collection U={1,2,...,12}; each label denotes one distinct candidate peg with that height in centimetres.
  - A contains the members u of U with u<=maxSize, and B contains the members u of U with u>=minSize. Both inequalities include equality.
  - The chosen result R is intersection, union or ordered difference A∖B. Inclusive OR includes membership in either or both sets; difference removes B members from A.
  - The primary output |R| is cardinality: a whole number of members, not the length of a continuous interval or the sum of peg heights.
  - Continuous cutoff motion changes membership only when a fixed candidate height is crossed. A partially crossed drawing does not create a fraction of a member.
- limits:
  - Only twelve fixed distinct candidates, without duplicate labels.
  - Cutoffs move continuously, but membership and cardinality are discrete.
  - The three operation choices are separate discrete mathematical states; no blend between intersection and union is used.
- fallback: Pause to read the labeled quantities. The model-data table, exact worked steps and searchable definitions provide numeric and textual alternatives to the scene.
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
  - prompt: Can a count change smoothly between four and five members?
  - answer: Not for this finite distinct collection. The threshold band can move smoothly, but the cardinality changes when another fixed candidate enters.
- Item:
  - prompt: Why is equal cutoff separation not an empty set?
  - answer: The inclusive rules can share a candidate at that exact height. Cardinality counts that object, not the gap length.

## Representations

- Item:
  - kind: geometry
  - description: Fixed candidate labels, moving inclusive cutoff bands, the sets A and B and the selected result R connect membership predicates with actual accepted objects.
- Item:
  - kind: graph
  - description: Cardinality is plotted against the maximum cutoff at fixed minimum and operation. The graph preserves discrete changes rather than inventing fractional members.
- Item:
  - kind: substitution
  - description: Roster lists and the cardinalities of intersection, union and ordered difference are evaluated from the same twelve candidates.

## Applications

- Item:
  - context: Workshop display pegs
  - mapping: Two inclusive physical limits select candidate peg heights; the operation decides whether both, either, or only the first rule is required.
  - limitations: Original stipulated candidate sizes; not manufacturing tolerances or measured inventory.
  - evidence kind: constructed_example
  - example ref: math:example:set:both-rules
- Item:
  - context: Boundary inclusion
  - mapping: Exactly matching the lower and upper cutoff retains one fixed candidate.
  - limitations: A finite membership count, not an interval-length calculation.
  - evidence kind: constructed_example
  - example ref: math:example:set:exact-boundary

## Source Refs

- source:openstax:basic-set-concepts
- source:openstax:two-set-operations

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- This bounded teaching model does not replace the broader mathematical definition or independent proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, a connected modular story and distinct Geometry/Graph views.

## Referenced source registry

- Source ID: source:openstax:basic-set-concepts. [Contemporary Mathematics, 1.1 Basic Set Concepts](https://openstax.org/books/contemporary-mathematics/pages/1-1-basic-set-concepts). Locator: Sets, well-defined membership, roster notation, empty set and finite cardinality. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:two-set-operations. [Contemporary Mathematics, 1.4 Set Operations with Two Sets](https://openstax.org/books/contemporary-mathematics/pages/1-4-set-operations-with-two-sets). Locator: Intersection, inclusive union, union cardinality; Tech Check explains ordered set difference. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
