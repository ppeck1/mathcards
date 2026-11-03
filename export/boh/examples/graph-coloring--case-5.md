---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:graph-coloring:case-5", "id": "math:example:graph-coloring:case-5", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:graph-coloring", "example_id": "math:example:graph-coloring:case-5", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "8dc414bef636656ca39f83d34c8d7097c6a85e1486352a974e8f8261d7bcf73a"}, "purpose": "How many conflict-free schedules fit the available time slots?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "8dc414bef636656ca39f83d34c8d7097c6a85e1486352a974e8f8261d7bcf73a", "status": "draft", "title": "Count schedules with four labeled slots", "topics": ["mathematics", "discrete-mathematics", "computation", "graph coloring", "vertex coloring", "graph colouring"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Count schedules with four labeled slots

Parent card: math:concept:graph-coloring; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:graph-coloring; revision 0.1.0-draft. Setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots. Expression: $\chi(G)=\min\{k:N_G(k)>0\},\quad k\in\{1,2,3,4\}.$. Conditions required for a defined value (a case may test their violation): Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied. Scope: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

Case unit math:example:graph-coloring:case-5. Setting: Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots. Inputs: {"diagonal": 0, "palette": 4}. Result: {"exact": "84 assignments"}. Limits: Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:discrete-extension:coloring. [Joy Morris · Combinatorics · Vertex colouring](https://opentext.uleth.ca/Combinatorics/sect_colouring-Vertices.html). Locator: Definitions 14.3.2–14.3.3 and notation 14.3.4: proper vertex coloring and chromatic number.. Verification: Definition-level original textbook source inspected 2026-11-03. The four-session example and exhaustive implementation are originally authored; independent review and exact-edition book mapping remain pending.. Rights: Original workshop scenario, diagrams and worked derivations; no source exercise or illustration reproduced.
