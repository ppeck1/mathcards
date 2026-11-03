---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:graph-coloring", "id": "math:concept:graph-coloring", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:graph-coloring", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "8dc414bef636656ca39f83d34c8d7097c6a85e1486352a974e8f8261d7bcf73a"}, "purpose": "How many conflict-free schedules fit the available time slots?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "8dc414bef636656ca39f83d34c8d7097c6a85e1486352a974e8f8261d7bcf73a", "status": "draft", "title": "Graph coloring and compatible sessions", "topics": ["mathematics", "discrete-mathematics", "computation", "graph coloring", "vertex coloring", "graph colouring"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Graph coloring and compatible sessions

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:graph-coloring; revision 0.1.0-draft. Setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots. Expression: $\chi(G)=\min\{k:N_G(k)>0\},\quad k\in\{1,2,3,4\}.$. Conditions required for a defined value (a case may test their violation): Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied. Scope: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

## Schema Version

0.1.0

## Id

math:concept:graph-coloring

## Slug

graph-coloring

## Type

concept

## Title

Graph coloring and compatible sessions

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

- graph coloring
- vertex coloring
- graph colouring

## Branches

- discrete-mathematics
- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How many conflict-free schedules fit the available time slots?

## Meaning

A proper vertex coloring gives labels to vertices so that every adjacent pair has different labels. Here a vertex is a workshop session and its label is a numbered time slot. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.

## Prerequisites

- required:
  - math:concept:graph-theory
- helpful:
  - math:concept:function
  - math:concept:permutation-count
- depth:
  []

## Definition

- setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
- formal latex: \chi(G)=\min\{k:N_G(k)>0\},\quad k\in\{1,2,3,4\}.
- signature:
  - k: Available numbered time slots
  - d: Whether the extra conflict is included: zero or one
  - G: The fixed four-session conflict graph
  - N G(k): Number of proper assignments with k labeled slots
  - χ(G): Fewest time slots permitting a proper assignment
  - k⁴: All labeled assignments before checking conflicts
- conditions:
  - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- domain notes: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:discrete-extension:coloring

## Grammar

- pronunciation: Graph coloring and compatible sessions
- expression latex: \chi(G)=\min\{k:N_G(k)>0\},\quad k\in\{1,2,3,4\}.
- formation rule: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
- precedence: Evaluate whole inputs and the declared finite condition before counting valid objects.
- symbols:
  - Item:
    - token: k
    - role: Available numbered time slots
    - type: Declared finite set or counting quantity
  - Item:
    - token: d
    - role: Whether the extra conflict is included: zero or one
    - type: Declared finite set or counting quantity
  - Item:
    - token: G
    - role: The fixed four-session conflict graph
    - type: Declared finite set or counting quantity
  - Item:
    - token: N_G(k)
    - role: Number of proper assignments with k labeled slots
    - type: Declared finite set or counting quantity
  - Item:
    - token: χ(G)
    - role: Fewest time slots permitting a proper assignment
    - type: Declared finite set or counting quantity
  - Item:
    - token: k⁴
    - role: All labeled assignments before checking conflicts
    - type: Declared finite set or counting quantity
- ast:
  - id: ast:graph-coloring:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:palette
      - kind: variable
      - type: Declared whole-number input
      - symbol: k
      - scope ref: scope:graph-coloring
    - Item:
      - id: n:diagonal
      - kind: variable
      - type: Declared whole-number input
      - symbol: d
      - scope ref: scope:graph-coloring
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared finite counting function
      - ref: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
    - Item:
      - id: n:apply-0
      - kind: apply
      - type: Finite exact count or partially applied counting function
      - function: n:rule
      - argument: n:palette
    - Item:
      - id: n:output
      - kind: apply
      - type: Finite exact count or partially applied counting function
      - function: n:apply-0
      - argument: n:diagonal
  - scopes:
    - Item:
      - id: scope:graph-coloring
      - kind: modelExpression
      - free variables:
        - k
        - d
      - domain condition: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- parse errors:
  - Item:
    - input: Fractional or inconsistent counts
    - status: unsupported parameter
    - reason: Executable counts are whole numbers satisfying the declared constraints; no silent rounding or clipping occurs.
- ast coverage: Typed application outline of the declared bounded model; not a general graph or set-expression parser.
- output symbol bindings:
  - k: palette
  - d: diagonal
  - G: edges
  - N G(k): output
  - χ(G): chromatic
  - k⁴: candidateCount

## Properties

- Item:
  - claim: The displayed finite count is a nonnegative whole number.
  - conditions: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - derivation: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:graph-coloring:case-1

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
  - target: math:concept:graph-theory
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Graph color classes are sets of mutually compatible sessions.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Graph color classes are sets of mutually compatible sessions.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:permutation-count
  - type: supports
  - conditions: Read the connected lesson under its own assumptions.
  - reason: Graph color classes are sets of mutually compatible sessions.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:graph-coloring:case-1
  - title: Reuse two slots around the cycle
  - role: applied_model
  - question: How many conflict-free schedules fit the available time slots?
  - setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
  - assumptions:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - inputs:
    - palette: 2
    - diagonal: 0
  - steps:
    - Item:
      - index: 1
      - expression: k = 2; d = 0
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: N_G(2) = 2
      - reason: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - result:
    - exact: 2 assignments
  - interpretation: A proper assignment exists. Slot labels are distinct, so relabelings are counted separately.
  - independent check:
    - method: Independently enumerate all 16 four-session slot tuples and test each declared conflict edge.
    - expected: 2
  - limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - preset:
    - palette: 2
    - diagonal: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- Item:
  - id: math:example:graph-coloring:case-2
  - title: Add a conflicting diagonal
  - role: applied_model
  - question: How many conflict-free schedules fit the available time slots?
  - setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
  - assumptions:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - inputs:
    - palette: 2
    - diagonal: 1
  - steps:
    - Item:
      - index: 1
      - expression: k = 2; d = 1
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: N_G(2) = 0
      - reason: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - result:
    - exact: 0 assignments
  - interpretation: Every assignment has a conflicting pair; the palette is insufficient. Slot labels are distinct, so relabelings are counted separately.
  - independent check:
    - method: Independently enumerate all 16 four-session slot tuples and test each declared conflict edge.
    - expected: 0
  - limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - preset:
    - palette: 2
    - diagonal: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- Item:
  - id: math:example:graph-coloring:case-3
  - title: Give the triangle a third slot
  - role: applied_model
  - question: How many conflict-free schedules fit the available time slots?
  - setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
  - assumptions:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - inputs:
    - palette: 3
    - diagonal: 1
  - steps:
    - Item:
      - index: 1
      - expression: k = 3; d = 1
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: N_G(3) = 6
      - reason: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - result:
    - exact: 6 assignments
  - interpretation: A proper assignment exists. Slot labels are distinct, so relabelings are counted separately.
  - independent check:
    - method: Independently enumerate all 81 four-session slot tuples and test each declared conflict edge.
    - expected: 6
  - limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - preset:
    - palette: 3
    - diagonal: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- Item:
  - id: math:example:graph-coloring:case-4
  - title: Try one slot for conflicting sessions
  - role: applied_model
  - question: How many conflict-free schedules fit the available time slots?
  - setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
  - assumptions:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - inputs:
    - palette: 1
    - diagonal: 0
  - steps:
    - Item:
      - index: 1
      - expression: k = 1; d = 0
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: N_G(1) = 0
      - reason: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - result:
    - exact: 0 assignments
  - interpretation: Every assignment has a conflicting pair; the palette is insufficient. Slot labels are distinct, so relabelings are counted separately.
  - independent check:
    - method: Independently enumerate all 1 four-session slot tuples and test each declared conflict edge.
    - expected: 0
  - limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - preset:
    - palette: 1
    - diagonal: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- Item:
  - id: math:example:graph-coloring:case-5
  - title: Count schedules with four labeled slots
  - role: applied_model
  - question: How many conflict-free schedules fit the available time slots?
  - setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
  - assumptions:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - inputs:
    - palette: 4
    - diagonal: 0
  - steps:
    - Item:
      - index: 1
      - expression: k = 4; d = 0
      - reason: Use the declared finite whole-number state.
    - Item:
      - index: 2
      - expression: N_G(4) = 84
      - reason: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
  - result:
    - exact: 84 assignments
  - interpretation: A proper assignment exists. Slot labels are distinct, so relabelings are counted separately.
  - independent check:
    - method: Independently enumerate all 256 four-session slot tuples and test each declared conflict edge.
    - expected: 84
  - limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - preset:
    - palette: 4
    - diagonal: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

## Interactive

- component id: component:graph-coloring
- renderer id: graph-coloring-visual-model
- renderer version: 1
- model id: graph-coloring-visual-model
- model revision: 1
- expression id: ast:graph-coloring:expression
- interaction status: implemented
- description: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
- controls:
  - Item:
    - id: palette
    - type: number
    - default: 2
    - min: 1
    - max: 4
    - step: 1
  - Item:
    - id: diagonal
    - type: number
    - default: 0
    - min: 0
    - max: 1
    - step: 1
- expected cases:
  - Item:
    - input:
      - palette: 1
      - diagonal: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - palette: 2
      - diagonal: 0
    - status: valid
    - output: 2
  - Item:
    - input:
      - palette: 3
      - diagonal: 0
    - status: valid
    - output: 18
  - Item:
    - input:
      - palette: 4
      - diagonal: 0
    - status: valid
    - output: 84
  - Item:
    - input:
      - palette: 1
      - diagonal: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - palette: 2
      - diagonal: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - palette: 3
      - diagonal: 1
    - status: valid
    - output: 6
  - Item:
    - input:
      - palette: 4
      - diagonal: 1
    - status: valid
    - output: 48
  - Item:
    - input:
      - palette: 0
      - diagonal: 0
    - status: invalid_parameters
  - Item:
    - input:
      - palette: 5
      - diagonal: 1
    - status: invalid_parameters
  - Item:
    - input:
      - palette: 2.5
      - diagonal: 0
    - status: invalid_parameters
  - Item:
    - input:
      - palette: true
      - diagonal: 0
    - status: invalid_parameters
  - Item:
    - input:
      - palette: 2
      - diagonal: 2
    - status: invalid_parameters
  - Item:
    - input:
      - palette: 2
      - diagonal: 1
    - status: invalid_parameters
- compute: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
- numeric tolerance: 1e-10
- invariants:
  - Every valid primary result is a nonnegative exact integer.
  - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
- limits:
  - Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
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
  - prompt: How many conflict-free schedules fit the available time slots?
  - answer: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.
- Item:
  - prompt: What can this demonstration establish?
  - answer: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

## Representations

- Item:
  - kind: geometry
  - description: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.
- Item:
  - kind: graph
  - description: Exact whole choices are dots. Other inputs stay fixed; invalid overlap choices remain gaps. Pins use their own fixed inputs.
- Item:
  - kind: substitution
  - description: Enumerate all k⁴ labeled assignments of four sessions, reject any assignment whose conflicting endpoints share a slot, and count those remaining. Independently repeat for palettes one through four to find the first positive count.

## Applications

- Item:
  - context: Workshop session planning
  - mapping: How many conflict-free schedules fit the available time slots?
  - limitations: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - evidence kind: constructed_example
  - example ref: math:example:graph-coloring:case-1
- Item:
  - context: An added instructor conflict
  - mapping: Adding the diagonal rules out every two-slot assignment; a third slot makes the newly formed triangle schedulable.
  - limitations: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.
  - evidence kind: constructed_example
  - example ref: math:example:graph-coloring:case-2

## Source Refs

- source:discrete-extension:coloring

## Review Gaps

- Independent mathematical and learning review is pending.
- Historical priority and exact-edition book coverage are not certified.
- Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

## Change Log

- Original bounded discrete continuation: connected story, Geometry/Graph, preview, reference readers and independent counting oracle.

## Referenced source registry

- Source ID: source:discrete-extension:coloring. [Joy Morris · Combinatorics · Vertex colouring](https://opentext.uleth.ca/Combinatorics/sect_colouring-Vertices.html). Locator: Definitions 14.3.2–14.3.3 and notation 14.3.4: proper vertex coloring and chromatic number.. Verification: Definition-level original textbook source inspected 2026-11-03. The four-session example and exhaustive implementation are originally authored; independent review and exact-edition book mapping remain pending.. Rights: Original workshop scenario, diagrams and worked derivations; no source exercise or illustration reproduced.
