---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:linear-search", "id": "math:concept:linear-search", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-search", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c1307482c97f57e19a9e9f9e95318b7e1c26d0da76932154cac7cf94d53bd370"}, "purpose": "How many bins have been checked, and when can the clerk stop?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c1307482c97f57e19a9e9f9e95318b7e1c26d0da76932154cac7cf94d53bd370", "status": "draft", "title": "Linear search, one check at a time", "topics": ["mathematics", "discrete-mathematics", "computation", "linear search"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Linear search, one check at a time

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:linear-search; revision 0.1.0-draft. Setting: A workshop clerk checks eight numbered bins from left to right for a requested part code. Stop at the first match or after checking every bin. Expression: $C_k=\min(k,C),\quad 0\le C\le n=8.$. Conditions required for a defined value (a case may test their violation): The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity. Scope: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.

## Schema Version

0.1.0

## Id

math:concept:linear-search

## Slug

linear-search

## Type

concept

## Title

Linear search, one check at a time

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- linear search

## Branches

- discrete-mathematics
- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How many bins have been checked, and when can the clerk stop?

## Meaning

Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.

## Prerequisites

- required:
  - math:concept:computational-complexity
- helpful:
  - math:concept:binary-search
- depth:
  []

## Definition

- setting: A workshop clerk checks eight numbered bins from left to right for a requested part code. Stop at the first match or after checking every bin.
- formal latex: C_k=\min(k,C),\quad 0\le C\le n=8.
- signature:
  - k: Whole comparison prefix selected by the learner
  - t: Requested part code
  - C: Comparison count for the complete run
  - Cₖ: Comparisons actually revealed in the selected prefix
  - n: Fixed number of bins in this lesson
  - aᵢ: Part code stored at ordinary bin position i
  - i: Ordinary bin position of the last shown comparison
- conditions:
  - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- domain notes: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algorithm-extensions:linear

## Grammar

- pronunciation: Linear search, one check at a time
- expression latex: C_k=\min(k,C),\quad 0\le C\le n=8.
- formation rule: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- precedence: Apply the declared algorithm to the fixed inventory or network, then expose the whole trace prefix or add the selected cable lengths.
- symbols:
  - Item:
    - token: k
    - role: Whole comparison prefix selected by the learner
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: t
    - role: Requested part code
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: C
    - role: Comparison count for the complete run
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: Cₖ
    - role: Comparisons actually revealed in the selected prefix
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: n
    - role: Fixed number of bins in this lesson
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: aᵢ
    - role: Part code stored at ordinary bin position i
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: i
    - role: Ordinary bin position of the last shown comparison
    - type: Declared input or finite algorithm quantity
- ast:
  - id: ast:linear-search:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared whole-number input
      - symbol: k
      - scope ref: scope:linear-search
    - Item:
      - id: n:target
      - kind: variable
      - type: Declared whole-number input
      - symbol: t
      - scope ref: scope:linear-search
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded finite algorithm
      - ref: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
    - Item:
      - id: n:first
      - kind: apply
      - type: Partially applied algorithm
      - function: n:rule
      - argument: n:steps
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary count or cable length
      - function: n:first
      - argument: n:target
  - scopes:
    - Item:
      - id: scope:linear-search
      - kind: modelExpression
      - free variables:
        - k
        - t
      - domain condition: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- parse errors:
  - Item:
    - input: Fractional step or cable quote
    - status: unsupported parameter
    - reason: Only declared whole-number states are executable; no silent rounding occurs.
- ast coverage: Typed application outline of this bounded algorithm; not an arbitrary program parser.
- output symbol bindings:
  - k: steps
  - t: target
  - C: completedCost
  - Cₖ: output
  - n: listLength
  - aᵢ: values
  - i: lastPosition

## Properties

- Item:
  - claim: Revealing extra steps cannot lower the shown comparison count.
  - conditions: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - derivation: For fixed target, the full-run comparison count C is fixed. The prefix count min(k,C) is nondecreasing in k and stays equal to C after completion.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:linear-search:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:binary-search
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: A bounded connection between finite decisions, feasible choices and cost.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:computational-complexity
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: A bounded connection between finite decisions, feasible choices and cost.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:linear-search:case-1
  - title: Find the requested middle code
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
  - assumptions:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - inputs:
    - steps: 8
    - target: 10
  - steps:
    - Item:
      - index: 1
      - expression: k = 8; t = 10
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 5; Cₖ = min(8,5) = 5
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 5 checks
  - interpretation: The selected trace reveals 5 comparisons; the completed search requires 5. A partial prefix is not a claim of completion.
  - independent check:
    - method: Enumerate the bin values until equality or exhaustion; count the inspected positions. The completed run uses 5 checks, so the shown prefix has 5.
    - expected: 5
  - limits: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - preset:
    - steps: 8
    - target: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- Item:
  - id: math:example:linear-search:case-2
  - title: Before the first comparison
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
  - assumptions:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - inputs:
    - steps: 0
    - target: 10
  - steps:
    - Item:
      - index: 1
      - expression: k = 0; t = 10
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 5; Cₖ = min(0,5) = 0
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 0 checks
  - interpretation: The selected trace reveals 0 comparisons; the completed search requires 5. A partial prefix is not a claim of completion.
  - independent check:
    - method: Enumerate the bin values until equality or exhaustion; count the inspected positions. The completed run uses 5 checks, so the shown prefix has 0.
    - expected: 0
  - limits: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - preset:
    - steps: 0
    - target: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- Item:
  - id: math:example:linear-search:case-3
  - title: Reveal one actual comparison
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
  - assumptions:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - inputs:
    - steps: 1
    - target: 8
  - steps:
    - Item:
      - index: 1
      - expression: k = 1; t = 8
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 4; Cₖ = min(1,4) = 1
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 1 checks
  - interpretation: The selected trace reveals 1 comparisons; the completed search requires 4. A partial prefix is not a claim of completion.
  - independent check:
    - method: Enumerate the bin values until equality or exhaustion; count the inspected positions. The completed run uses 4 checks, so the shown prefix has 1.
    - expected: 1
  - limits: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - preset:
    - steps: 1
    - target: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- Item:
  - id: math:example:linear-search:case-4
  - title: Finish an absent-code search
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
  - assumptions:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - inputs:
    - steps: 8
    - target: 17
  - steps:
    - Item:
      - index: 1
      - expression: k = 8; t = 17
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 8; Cₖ = min(8,8) = 8
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 8 checks
  - interpretation: The selected trace reveals 8 comparisons; the completed search requires 8. A partial prefix is not a claim of completion.
  - independent check:
    - method: Enumerate the bin values until equality or exhaustion; count the inspected positions. The completed run uses 8 checks, so the shown prefix has 8.
    - expected: 8
  - limits: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - preset:
    - steps: 8
    - target: 17
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- Item:
  - id: math:example:linear-search:case-5
  - title: Find the first listed code
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
  - assumptions:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - inputs:
    - steps: 8
    - target: 2
  - steps:
    - Item:
      - index: 1
      - expression: k = 8; t = 2
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 1; Cₖ = min(8,1) = 1
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 1 checks
  - interpretation: The selected trace reveals 1 comparisons; the completed search requires 1. A partial prefix is not a claim of completion.
  - independent check:
    - method: Enumerate the bin values until equality or exhaustion; count the inspected positions. The completed run uses 1 checks, so the shown prefix has 1.
    - expected: 1
  - limits: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - preset:
    - steps: 8
    - target: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.

## Interactive

- component id: component:linear-search
- renderer id: linear-search-visual-model
- renderer version: 1
- model id: linear-search-visual-model
- model revision: 1
- expression id: ast:linear-search:expression
- interaction status: implemented
- description: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 5
    - min: 0
    - max: 8
    - step: 1
  - Item:
    - id: target
    - type: number
    - default: 10
    - min: 0
    - max: 17
    - step: 1
- expected cases:
  - Item:
    - input:
      - steps: 8
      - target: 0
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 1
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 2
    - status: valid
    - output: 1
  - Item:
    - input:
      - steps: 8
      - target: 3
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 4
    - status: valid
    - output: 2
  - Item:
    - input:
      - steps: 8
      - target: 5
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 6
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 8
      - target: 7
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 8
    - status: valid
    - output: 4
  - Item:
    - input:
      - steps: 8
      - target: 9
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 10
    - status: valid
    - output: 5
  - Item:
    - input:
      - steps: 8
      - target: 11
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 12
    - status: valid
    - output: 6
  - Item:
    - input:
      - steps: 8
      - target: 13
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 14
    - status: valid
    - output: 7
  - Item:
    - input:
      - steps: 8
      - target: 15
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 16
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 8
      - target: 17
    - status: valid
    - output: 8
  - Item:
    - input:
      - steps: 0
      - target: 10
    - status: valid
    - output: 0
  - Item:
    - input:
      - steps: 1
      - target: 10
    - status: valid
    - output: 1
  - Item:
    - input:
      - steps: 2
      - target: 10
    - status: valid
    - output: 2
  - Item:
    - input:
      - steps: 3
      - target: 10
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 10
    - status: valid
    - output: 4
  - Item:
    - input:
      - steps: 5
      - target: 10
    - status: valid
    - output: 5
  - Item:
    - input:
      - steps: 6
      - target: 10
    - status: valid
    - output: 5
  - Item:
    - input:
      - steps: 7
      - target: 10
    - status: valid
    - output: 5
  - Item:
    - input:
      - steps: -0.1
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: true
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 9
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 5
      - target: -1
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 5
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 5
      - target: false
    - status: invalid_parameters
- compute: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- numeric tolerance: 1e-10
- invariants:
  - Revealing extra steps cannot lower the shown comparison count.
  - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- limits:
  - The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
- fallback: Pause for readable values. Geometry, Graph, story and data share the same whole state.
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
  - prompt: How many bins have been checked, and when can the clerk stop?
  - answer: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- Item:
  - prompt: What does one shown step mean?
  - answer: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.

## Representations

- Item:
  - kind: geometry
  - description: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.
- Item:
  - kind: graph
  - description: Whole choices shown as dots on a fixed scale. Pin a previous input to compare both evaluated families.
- Item:
  - kind: substitution
  - description: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.

## Applications

- Item:
  - context: Workshop part lookup
  - mapping: How many bins have been checked, and when can the clerk stop?
  - limitations: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - evidence kind: constructed_example
  - example ref: math:example:linear-search:case-1
- Item:
  - context: An absent part-code request
  - mapping: A complete run can certify absence, while an unfinished prefix cannot.
  - limitations: The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.
  - evidence kind: constructed_example
  - example ref: math:example:linear-search:case-4

## Source Refs

- source:algorithm-extensions:linear

## Review Gaps

- Independent mathematical and learning review is pending.
- No historical priority claim or exact-edition book coverage is certified.
- The fixed inventory/network is an executable introduction, not a general algorithm editor.

## Change Log

- Next branch continuation: original bounded algorithm model, connected story, Geometry/Graph, previews, reference readers and independent finite oracle.

## Referenced source registry

- Source ID: source:algorithm-extensions:linear. [Sedgewick and Wayne · Sequential search](https://raw.githubusercontent.com/kevin-wayne/algs4/master/src/main/java/edu/princeton/cs/algs4/SequentialSearchST.java). Locator: Sequential lookup tests successive keys until equality or exhaustion. The card uses an original fixed array rather than the source linked-list symbol table.. Verification: Definition-level primary implementation inspected 2026-11-02. Original bounded models and examples; independent mathematics, learning and exact-edition book review remain pending.. Rights: Original workshop and sensor-network stories, calculations and diagrams. Algorithms are mathematical procedures; no source implementation, exercise or dataset is copied.
