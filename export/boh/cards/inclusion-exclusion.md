---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:inclusion-exclusion", "id": "math:concept:inclusion-exclusion", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:inclusion-exclusion", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1c869b7cc6b0ad56764b983522b2b464bfba28749e152b01239447e02cb3ddfa"}, "purpose": "How many chairs are needed when two signup lists overlap?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1c869b7cc6b0ad56764b983522b2b464bfba28749e152b01239447e02cb3ddfa", "status": "draft", "title": "Inclusion–exclusion: count the overlap once", "topics": ["mathematics", "set-theory", "discrete-mathematics", "inclusion-exclusion", "inclusion exclusion principle", "two-set counting"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Inclusion–exclusion: count the overlap once

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:inclusion-exclusion; revision 0.1.0-draft. Setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk. Expression: $|A\cup B|=|A|+|B|-|A\cap B|=a+b-h,\quad 0\le h\le\min(a,b).$. Conditions required for a defined value (a case may test their violation): Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable. Scope: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.

## Schema Version

0.1.0

## Id

math:concept:inclusion-exclusion

## Slug

inclusion-exclusion

## Type

concept

## Title

Inclusion–exclusion: count the overlap once

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-03T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- inclusion-exclusion
- inclusion exclusion principle
- two-set counting

## Branches

- set-theory
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How many chairs are needed when two signup lists overlap?

## Meaning

Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair. Subtracting the overlap corrects double counting of attendees who appear on both lists.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:binomial-coefficient
  - math:concept:probability
- depth:
  []

## Definition

- setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
- formal latex: |A\cup B|=|A|+|B|-|A\cap B|=a+b-h,\quad 0\le h\le\min(a,b).
- signature:
  - a: People on the woodcraft signup list
  - b: People on the repair signup list
  - h: People registered for both activities
  - A: Woodcraft signup set
  - B: Repair signup set
  - |A|: Cardinality of the woodcraft set
  - |B|: Cardinality of the repair set
  - |A∩B|: Shared people in both signup sets
  - |A∪B|: Distinct people needing one chair
- conditions:
  - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- domain notes: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:discrete-extension:inclusion

## Grammar

- pronunciation: Inclusion–exclusion: count the overlap once
- expression latex: |A\cup B|=|A|+|B|-|A\cap B|=a+b-h,\quad 0\le h\le\min(a,b).
- formation rule: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
- precedence: Evaluate whole inputs and the declared finite condition before counting valid objects.
- symbols:
  - Item:
    - token: a
    - role: People on the woodcraft signup list
    - type: Declared finite set or counting quantity
  - Item:
    - token: b
    - role: People on the repair signup list
    - type: Declared finite set or counting quantity
  - Item:
    - token: h
    - role: People registered for both activities
    - type: Declared finite set or counting quantity
  - Item:
    - token: A
    - role: Woodcraft signup set
    - type: Declared finite set or counting quantity
  - Item:
    - token: B
    - role: Repair signup set
    - type: Declared finite set or counting quantity
  - Item:
    - token: |A|
    - role: Cardinality of the woodcraft set
    - type: Declared finite set or counting quantity
  - Item:
    - token: |B|
    - role: Cardinality of the repair set
    - type: Declared finite set or counting quantity
  - Item:
    - token: |A∩B|
    - role: Shared people in both signup sets
    - type: Declared finite set or counting quantity
  - Item:
    - token: |A∪B|
    - role: Distinct people needing one chair
    - type: Declared finite set or counting quantity
- ast:
  - id: ast:inclusion-exclusion:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:overlap
      - kind: variable
      - type: Declared whole-number input
      - symbol: h
      - scope ref: scope:inclusion-exclusion
    - Item:
      - id: n:wood
      - kind: variable
      - type: Declared whole-number input
      - symbol: a
      - scope ref: scope:inclusion-exclusion
    - Item:
      - id: n:repair
      - kind: variable
      - type: Declared whole-number input
      - symbol: b
      - scope ref: scope:inclusion-exclusion
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared finite counting function
      - ref: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
    - Item:
      - id: n:apply-0
      - kind: apply
      - type: Finite exact count or partially applied counting function
      - function: n:rule
      - argument: n:overlap
    - Item:
      - id: n:apply-1
      - kind: apply
      - type: Finite exact count or partially applied counting function
      - function: n:apply-0
      - argument: n:wood
    - Item:
      - id: n:output
      - kind: apply
      - type: Finite exact count or partially applied counting function
      - function: n:apply-1
      - argument: n:repair
  - scopes:
    - Item:
      - id: scope:inclusion-exclusion
      - kind: modelExpression
      - free variables:
        - h
        - a
        - b
      - domain condition: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- parse errors:
  - Item:
    - input: Fractional or inconsistent counts
    - status: unsupported parameter
    - reason: Executable counts are whole numbers satisfying the declared constraints; no silent rounding or clipping occurs.
- ast coverage: Typed application outline of the declared bounded model; not a general graph or set-expression parser.
- output symbol bindings:
  - a: wood
  - b: repair
  - h: overlap
  - A: woodMembers
  - B: repairMembers
  - |A|: wood
  - |B|: repair
  - |A∩B|: overlap
  - |A∪B|: output

## Properties

- Item:
  - claim: The displayed finite count is a nonnegative whole number.
  - conditions: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - derivation: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:inclusion-exclusion:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories, diagrams and examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Finite union and intersection counts connect to set operations and probability when a separate probability model is supplied.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:binomial-coefficient
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Finite union and intersection counts connect to set operations and probability when a separate probability model is supplied.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Finite union and intersection counts connect to set operations and probability when a separate probability model is supplied.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:inclusion-exclusion:case-1
  - title: Subtract one copy of shared registrations
  - role: applied_model
  - question: How many chairs are needed when two signup lists overlap?
  - setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
  - assumptions:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - inputs:
    - overlap: 3
    - wood: 7
    - repair: 6
  - steps:
    - Item:
      - index: 1
      - expression: h = 3; a = 7; b = 6
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: 7 + 6 − 3 = 10
      - reason: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - result:
    - exact: 10 people
  - interpretation: 10 distinct people need chairs. The shared group contributes once.
  - independent check:
    - method: Count the disjoint groups of 4 woodcraft-only, 3 shared and 3 repair-only people.
    - expected: 10
  - limits: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - preset:
    - overlap: 3
    - wood: 7
    - repair: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- Item:
  - id: math:example:inclusion-exclusion:case-2
  - title: Combine disjoint activity lists
  - role: applied_model
  - question: How many chairs are needed when two signup lists overlap?
  - setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
  - assumptions:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - inputs:
    - overlap: 0
    - wood: 5
    - repair: 4
  - steps:
    - Item:
      - index: 1
      - expression: h = 0; a = 5; b = 4
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: 5 + 4 − 0 = 9
      - reason: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - result:
    - exact: 9 people
  - interpretation: 9 distinct people need chairs. The shared group contributes once.
  - independent check:
    - method: Count the disjoint groups of 5 woodcraft-only, 0 shared and 4 repair-only people.
    - expected: 9
  - limits: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - preset:
    - overlap: 0
    - wood: 5
    - repair: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- Item:
  - id: math:example:inclusion-exclusion:case-3
  - title: Both lists contain the same people
  - role: applied_model
  - question: How many chairs are needed when two signup lists overlap?
  - setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
  - assumptions:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - inputs:
    - overlap: 5
    - wood: 5
    - repair: 5
  - steps:
    - Item:
      - index: 1
      - expression: h = 5; a = 5; b = 5
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: 5 + 5 − 5 = 5
      - reason: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - result:
    - exact: 5 people
  - interpretation: 5 distinct people need chairs. The shared group contributes once.
  - independent check:
    - method: Count the disjoint groups of 0 woodcraft-only, 5 shared and 0 repair-only people.
    - expected: 5
  - limits: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - preset:
    - overlap: 5
    - wood: 5
    - repair: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- Item:
  - id: math:example:inclusion-exclusion:case-4
  - title: Prepare for no registrations
  - role: applied_model
  - question: How many chairs are needed when two signup lists overlap?
  - setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
  - assumptions:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - inputs:
    - overlap: 0
    - wood: 0
    - repair: 0
  - steps:
    - Item:
      - index: 1
      - expression: h = 0; a = 0; b = 0
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: 0 + 0 − 0 = 0
      - reason: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - result:
    - exact: 0 people
  - interpretation: 0 distinct people need chairs. The shared group contributes once.
  - independent check:
    - method: Count the disjoint groups of 0 woodcraft-only, 0 shared and 0 repair-only people.
    - expected: 0
  - limits: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - preset:
    - overlap: 0
    - wood: 0
    - repair: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- Item:
  - id: math:example:inclusion-exclusion:case-5
  - title: One list sits inside the other
  - role: applied_model
  - question: How many chairs are needed when two signup lists overlap?
  - setting: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
  - assumptions:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - inputs:
    - overlap: 2
    - wood: 2
    - repair: 8
  - steps:
    - Item:
      - index: 1
      - expression: h = 2; a = 2; b = 8
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: 2 + 8 − 2 = 8
      - reason: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
  - result:
    - exact: 8 people
  - interpretation: 8 distinct people need chairs. The shared group contributes once.
  - independent check:
    - method: Count the disjoint groups of 0 woodcraft-only, 2 shared and 6 repair-only people.
    - expected: 8
  - limits: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - preset:
    - overlap: 2
    - wood: 2
    - repair: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.

## Interactive

- component id: component:inclusion-exclusion
- renderer id: inclusion-exclusion-visual-model
- renderer version: 1
- model id: inclusion-exclusion-visual-model
- model revision: 1
- expression id: ast:inclusion-exclusion:expression
- interaction status: implemented
- description: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
- controls:
  - Item:
    - id: overlap
    - type: number
    - default: 3
    - min: 0
    - max: 12
    - step: 1
  - Item:
    - id: wood
    - type: number
    - default: 7
    - min: 0
    - max: 12
    - step: 1
  - Item:
    - id: repair
    - type: number
    - default: 6
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - overlap: 0
      - wood: 0
      - repair: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - overlap: 0
      - wood: 12
      - repair: 12
    - status: valid
    - output: 24
  - Item:
    - input:
      - overlap: 12
      - wood: 12
      - repair: 12
    - status: valid
    - output: 12
  - Item:
    - input:
      - overlap: 3
      - wood: 7
      - repair: 6
    - status: valid
    - output: 10
  - Item:
    - input:
      - overlap: 0
      - wood: 5
      - repair: 4
    - status: valid
    - output: 9
  - Item:
    - input:
      - overlap: 5
      - wood: 5
      - repair: 5
    - status: valid
    - output: 5
  - Item:
    - input:
      - overlap: 2
      - wood: 2
      - repair: 8
    - status: valid
    - output: 8
  - Item:
    - input:
      - overlap: 0
      - wood: 0
      - repair: 12
    - status: valid
    - output: 12
  - Item:
    - input:
      - overlap: 0
      - wood: 12
      - repair: 0
    - status: valid
    - output: 12
  - Item:
    - input:
      - overlap: 4
      - wood: 8
      - repair: 5
    - status: valid
    - output: 9
  - Item:
    - input:
      - overlap: 1
      - wood: 1
      - repair: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - overlap: 1
      - wood: 12
      - repair: 12
    - status: valid
    - output: 23
  - Item:
    - input:
      - overlap: 4
      - wood: 3
      - repair: 6
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: 1
      - wood: 3
      - repair: 0
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: -1
      - wood: 3
      - repair: 6
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: 0.5
      - wood: 3
      - repair: 6
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: true
      - wood: 3
      - repair: 6
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: 0
      - wood: 13
      - repair: 6
    - status: invalid_parameters
  - Item:
    - input:
      - overlap: 0
      - wood: 3
      - repair: 6
    - status: invalid_parameters
- compute: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
- numeric tolerance: 1e-10
- invariants:
  - Every valid primary result is a nonnegative exact integer.
  - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- limits:
  - Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
- fallback: Pause for readable whole counts. Geometry, Graph, story and data share the same state.
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
  - prompt: How many chairs are needed when two signup lists overlap?
  - answer: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.
- Item:
  - prompt: What can this demonstration establish?
  - answer: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.

## Representations

- Item:
  - kind: geometry
  - description: At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.
- Item:
  - kind: graph
  - description: Exact whole choices are dots. Other inputs stay fixed; invalid overlap choices remain gaps. Pins use their own fixed inputs.
- Item:
  - kind: substitution
  - description: Construct three disjoint groups: people only on the woodcraft list, people on both lists, and people only on the repair list. Their total is (a−h)+h+(b−h)=a+b−h.

## Applications

- Item:
  - context: Shared workshop opening
  - mapping: How many chairs are needed when two signup lists overlap?
  - limitations: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - evidence kind: constructed_example
  - example ref: math:example:inclusion-exclusion:case-1
- Item:
  - context: Combining RSVP lists
  - mapping: Disjoint registration lists need no duplicate correction; identical lists need the whole overlap removed once.
  - limitations: Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.
  - evidence kind: constructed_example
  - example ref: math:example:inclusion-exclusion:case-2

## Source Refs

- source:discrete-extension:inclusion

## Review Gaps

- Independent mathematical and learning review is pending.
- Historical priority and exact-edition book coverage are not certified.
- Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.

## Change Log

- Original bounded discrete continuation: connected story, Geometry/Graph, preview, reference readers and independent counting oracle.

## Referenced source registry

- Source ID: source:discrete-extension:inclusion. [OpenStax · Contemporary Mathematics · Set operations with two sets](https://openstax.org/books/contemporary-mathematics/pages/1-4-set-operations-with-two-sets). Locator: Determining the cardinality of two sets: two-set inclusion–exclusion.. Verification: Definition-level primary OER source inspected 2026-11-03. Original chair-planning examples; independent mathematical and exact-edition book checks remain pending.. Rights: Original signup-list scenario, diagrams and worked examples; no source exercise or illustration reproduced.
