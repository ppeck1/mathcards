---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:binary-search", "id": "math:concept:binary-search", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:binary-search", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3fdeeea95b4052417ab542089882e0b8422c02cf8ad2421064404e42cb46b011"}, "purpose": "How many bins have been checked, and when can the clerk stop?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3fdeeea95b4052417ab542089882e0b8422c02cf8ad2421064404e42cb46b011", "status": "draft", "title": "Binary search and the remaining window", "topics": ["mathematics", "discrete-mathematics", "computation", "binary search"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Binary search and the remaining window

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:binary-search; revision 0.1.0-draft. Setting: The same workshop bins are sorted by increasing part code. Compare the middle bin of the remaining window, then discard the half whose values cannot match. Expression: $m=\left\lfloor\frac{\ell+h}{2}\right\rfloor,\qquad C_k=\min(k,C),\quad n=8.$. Conditions required for a defined value (a case may test their violation): The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity. Scope: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.

## Schema Version

0.1.0

## Id

math:concept:binary-search

## Slug

binary-search

## Type

concept

## Title

Binary search and the remaining window

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

- binary search

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
  - math:concept:linear-search
- depth:
  []

## Definition

- setting: The same workshop bins are sorted by increasing part code. Compare the middle bin of the remaining window, then discard the half whose values cannot match.
- formal latex: m=\left\lfloor\frac{\ell+h}{2}\right\rfloor,\qquad C_k=\min(k,C),\quad n=8.
- signature:
  - k: Whole comparison prefix selected by the learner
  - t: Requested part code
  - C: Comparison count for the complete run
  - Cₖ: Comparisons actually revealed in the selected prefix
  - n: Fixed number of bins in this lesson
  - aᵢ: Part code stored at ordinary bin position i
  - i: Ordinary bin position of the last shown comparison
  - ℓ: First remaining candidate bin position
  - h: Last remaining candidate bin position
  - m: Middle bin selected for the next comparison
- conditions:
  - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- domain notes: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algorithm-extensions:binary

## Grammar

- pronunciation: Binary search and the remaining window
- expression latex: m=\left\lfloor\frac{\ell+h}{2}\right\rfloor,\qquad C_k=\min(k,C),\quad n=8.
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
  - Item:
    - token: ℓ
    - role: First remaining candidate bin position
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: h
    - role: Last remaining candidate bin position
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: m
    - role: Middle bin selected for the next comparison
    - type: Declared input or finite algorithm quantity
- ast:
  - id: ast:binary-search:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared whole-number input
      - symbol: k
      - scope ref: scope:binary-search
    - Item:
      - id: n:target
      - kind: variable
      - type: Declared whole-number input
      - symbol: t
      - scope ref: scope:binary-search
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
      - id: scope:binary-search
      - kind: modelExpression
      - free variables:
        - k
        - t
      - domain condition: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
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
  - ℓ: low
  - h: high
  - m: nextPosition

## Properties

- Item:
  - claim: Revealing extra steps cannot lower the shown comparison count.
  - conditions: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - derivation: For fixed target, the full-run comparison count C is fixed. The prefix count min(k,C) is nondecreasing in k and stays equal to C after completion.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:binary-search:case-1

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
  - target: math:concept:linear-search
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: A bounded connection between finite decisions, feasible choices and cost.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:finite-state-machine
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: A bounded connection between finite decisions, feasible choices and cost.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:binary-search:case-1
  - title: Find the requested middle code
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
  - assumptions:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - inputs:
    - steps: 4
    - target: 10
  - steps:
    - Item:
      - index: 1
      - expression: k = 4; t = 10
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 3; Cₖ = min(4,3) = 3
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 3 checks
  - interpretation: The selected trace reveals 3 comparisons; the completed search requires 3. A partial prefix is not a claim of completion.
  - independent check:
    - method: Shrink actual sorted list slices around their lower middle value and count the comparisons. The completed run uses 3 checks, so the shown prefix has 3.
    - expected: 3
  - limits: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - preset:
    - steps: 4
    - target: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- Item:
  - id: math:example:binary-search:case-2
  - title: Before the first comparison
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
  - assumptions:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
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
      - expression: C = 3; Cₖ = min(0,3) = 0
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 0 checks
  - interpretation: The selected trace reveals 0 comparisons; the completed search requires 3. A partial prefix is not a claim of completion.
  - independent check:
    - method: Shrink actual sorted list slices around their lower middle value and count the comparisons. The completed run uses 3 checks, so the shown prefix has 0.
    - expected: 0
  - limits: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - preset:
    - steps: 0
    - target: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- Item:
  - id: math:example:binary-search:case-3
  - title: Reveal one actual comparison
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
  - assumptions:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
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
      - expression: C = 1; Cₖ = min(1,1) = 1
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 1 checks
  - interpretation: The selected trace reveals 1 comparisons; the completed search requires 1. A partial prefix is not a claim of completion.
  - independent check:
    - method: Shrink actual sorted list slices around their lower middle value and count the comparisons. The completed run uses 1 checks, so the shown prefix has 1.
    - expected: 1
  - limits: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - preset:
    - steps: 1
    - target: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- Item:
  - id: math:example:binary-search:case-4
  - title: Finish an absent-code search
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
  - assumptions:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - inputs:
    - steps: 4
    - target: 17
  - steps:
    - Item:
      - index: 1
      - expression: k = 4; t = 17
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 4; Cₖ = min(4,4) = 4
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 4 checks
  - interpretation: The selected trace reveals 4 comparisons; the completed search requires 4. A partial prefix is not a claim of completion.
  - independent check:
    - method: Shrink actual sorted list slices around their lower middle value and count the comparisons. The completed run uses 4 checks, so the shown prefix has 4.
    - expected: 4
  - limits: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - preset:
    - steps: 4
    - target: 17
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- Item:
  - id: math:example:binary-search:case-5
  - title: Find the first listed code
  - role: applied_model
  - question: How many bins have been checked, and when can the clerk stop?
  - setting: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
  - assumptions:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - inputs:
    - steps: 4
    - target: 2
  - steps:
    - Item:
      - index: 1
      - expression: k = 4; t = 2
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: C = 3; Cₖ = min(4,3) = 3
      - reason: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
  - result:
    - exact: 3 checks
  - interpretation: The selected trace reveals 3 comparisons; the completed search requires 3. A partial prefix is not a claim of completion.
  - independent check:
    - method: Shrink actual sorted list slices around their lower middle value and count the comparisons. The completed run uses 3 checks, so the shown prefix has 3.
    - expected: 3
  - limits: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - preset:
    - steps: 4
    - target: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.

## Interactive

- component id: component:binary-search
- renderer id: binary-search-visual-model
- renderer version: 1
- model id: binary-search-visual-model
- model revision: 1
- expression id: ast:binary-search:expression
- interaction status: implemented
- description: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 3
    - min: 0
    - max: 4
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
      - steps: 4
      - target: 0
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 1
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 2
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 3
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 4
    - status: valid
    - output: 2
  - Item:
    - input:
      - steps: 4
      - target: 5
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 6
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 7
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 8
    - status: valid
    - output: 1
  - Item:
    - input:
      - steps: 4
      - target: 9
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 10
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 11
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 12
    - status: valid
    - output: 2
  - Item:
    - input:
      - steps: 4
      - target: 13
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 14
    - status: valid
    - output: 3
  - Item:
    - input:
      - steps: 4
      - target: 15
    - status: valid
    - output: 4
  - Item:
    - input:
      - steps: 4
      - target: 16
    - status: valid
    - output: 4
  - Item:
    - input:
      - steps: 4
      - target: 17
    - status: valid
    - output: 4
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
      - steps: 5
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 3
      - target: -1
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 3
      - target: 10
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 3
      - target: false
    - status: invalid_parameters
- compute: Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.
- numeric tolerance: 1e-10
- invariants:
  - Revealing extra steps cannot lower the shown comparison count.
  - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
- limits:
  - The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
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
  - answer: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.

## Representations

- Item:
  - kind: geometry
  - description: A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.
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
  - limitations: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - evidence kind: constructed_example
  - example ref: math:example:binary-search:case-1
- Item:
  - context: An absent part-code request
  - mapping: A complete run can certify absence, while an unfinished prefix cannot.
  - limitations: The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.
  - evidence kind: constructed_example
  - example ref: math:example:binary-search:case-4

## Source Refs

- source:algorithm-extensions:binary

## Review Gaps

- Independent mathematical and learning review is pending.
- No historical priority claim or exact-edition book coverage is certified.
- The fixed inventory/network is an executable introduction, not a general algorithm editor.

## Change Log

- Next branch continuation: original bounded algorithm model, connected story, Geometry/Graph, previews, reference readers and independent finite oracle.

## Referenced source registry

- Source ID: source:algorithm-extensions:binary. [Sedgewick and Wayne · Binary search in a sorted list](https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/BinarySearch.java). Locator: Sorted-array precondition; middle comparison and retained index interval. The card counts one three-way value comparison, not primitive language operators.. Verification: Definition-level primary implementation inspected 2026-11-02. Original bounded models and examples; independent mathematics, learning and exact-edition book review remain pending.. Rights: Original workshop and sensor-network stories, calculations and diagrams. Algorithms are mathematical procedures; no source implementation, exercise or dataset is copied.
