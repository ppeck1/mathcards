---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:minimum-spanning-tree", "id": "math:concept:minimum-spanning-tree", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:minimum-spanning-tree", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "dbc8f3369c7a4c6683f8cbd70f6770f928e83742d2d5e2c5049e7ed5f060526a"}, "purpose": "Which three runs connect every sensor using the least cable?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "dbc8f3369c7a4c6683f8cbd70f6770f928e83742d2d5e2c5049e7ed5f060526a", "status": "draft", "title": "Minimum spanning tree", "topics": ["mathematics", "discrete-mathematics", "computation", "optimization", "minimum spanning tree"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Minimum spanning tree

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:minimum-spanning-tree; revision 0.1.0-draft. Setting: Connect four garden sensor stations using three of six available cable runs. Each run has a quoted routed length. Seek the least total cable while connecting every station without a loop. Expression: $W(T)=\sum_{e\in T}w_e,\qquad \min_{T\text{ spanning tree}} W(T).$. Conditions required for a defined value (a case may test their violation): Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum. Scope: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.

## Schema Version

0.1.0

## Id

math:concept:minimum-spanning-tree

## Slug

minimum-spanning-tree

## Type

concept

## Title

Minimum spanning tree

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

- minimum spanning tree

## Branches

- discrete-mathematics
- computation
- optimization

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which three runs connect every sensor using the least cable?

## Meaning

Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.

## Prerequisites

- required:
  - math:concept:graph-theory
- helpful:
  - math:concept:quadratic-optimization
- depth:
  []

## Definition

- setting: Connect four garden sensor stations using three of six available cable runs. Each run has a quoted routed length. Seek the least total cable while connecting every station without a loop.
- formal latex: W(T)=\sum_{e\in T}w_e,\qquad \min_{T\text{ spanning tree}} W(T).
- signature:
  - w: Quoted routed cable length for AC
  - v: Quoted routed cable length for BD
  - T: Chosen tree joining all four stations
  - e: One available cable edge
  - wₑ: Quoted length assigned to an edge
  - W: Total quoted cable length of the chosen minimum tree
  - N: Number of minimum trees with exactly equal total length
  - A: Sensor station A, one vertex of the fixed cable graph.
  - B: Sensor station B, one vertex of the fixed cable graph.
  - C: Sensor station C, one vertex of the fixed cable graph.
  - D: Sensor station D, one vertex of the fixed cable graph.
  - AB: Undirected available run AB, labeled by its quoted routed cable length in metres.
  - AC: Undirected available run AC, labeled by its quoted routed cable length in metres.
  - AD: Undirected available run AD, labeled by its quoted routed cable length in metres.
  - BC: Undirected available run BC, labeled by its quoted routed cable length in metres.
  - BD: Undirected available run BD, labeled by its quoted routed cable length in metres.
  - CD: Undirected available run CD, labeled by its quoted routed cable length in metres.
- conditions:
  - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
- domain notes: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algorithm-extensions:mst

## Grammar

- pronunciation: Minimum spanning tree
- expression latex: W(T)=\sum_{e\in T}w_e,\qquad \min_{T\text{ spanning tree}} W(T).
- formation rule: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
- precedence: Apply the declared algorithm to the fixed inventory or network, then expose the whole trace prefix or add the selected cable lengths.
- symbols:
  - Item:
    - token: w
    - role: Quoted routed cable length for AC
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: v
    - role: Quoted routed cable length for BD
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: T
    - role: Chosen tree joining all four stations
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: e
    - role: One available cable edge
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: wₑ
    - role: Quoted length assigned to an edge
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: W
    - role: Total quoted cable length of the chosen minimum tree
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: N
    - role: Number of minimum trees with exactly equal total length
    - type: Declared input or finite algorithm quantity
  - Item:
    - token: A
    - role: Sensor station A, one vertex of the fixed cable graph.
    - type: Fixed graph vertex label
  - Item:
    - token: B
    - role: Sensor station B, one vertex of the fixed cable graph.
    - type: Fixed graph vertex label
  - Item:
    - token: C
    - role: Sensor station C, one vertex of the fixed cable graph.
    - type: Fixed graph vertex label
  - Item:
    - token: D
    - role: Sensor station D, one vertex of the fixed cable graph.
    - type: Fixed graph vertex label
  - Item:
    - token: AB
    - role: Undirected available run AB, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
  - Item:
    - token: AC
    - role: Undirected available run AC, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
  - Item:
    - token: AD
    - role: Undirected available run AD, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
  - Item:
    - token: BC
    - role: Undirected available run BC, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
  - Item:
    - token: BD
    - role: Undirected available run BD, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
  - Item:
    - token: CD
    - role: Undirected available run CD, labeled by its quoted routed cable length in metres.
    - type: Fixed graph edge label with a quoted length
- ast:
  - id: ast:minimum-spanning-tree:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:ac
      - kind: variable
      - type: Declared whole-number input
      - symbol: w
      - scope ref: scope:minimum-spanning-tree
    - Item:
      - id: n:bd
      - kind: variable
      - type: Declared whole-number input
      - symbol: v
      - scope ref: scope:minimum-spanning-tree
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded finite algorithm
      - ref: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
    - Item:
      - id: n:first
      - kind: apply
      - type: Partially applied algorithm
      - function: n:rule
      - argument: n:ac
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary count or cable length
      - function: n:first
      - argument: n:bd
  - scopes:
    - Item:
      - id: scope:minimum-spanning-tree
      - kind: modelExpression
      - free variables:
        - w
        - v
      - domain condition: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- parse errors:
  - Item:
    - input: Fractional step or cable quote
    - status: unsupported parameter
    - reason: Only declared whole-number states are executable; no silent rounding occurs.
- ast coverage: Typed application outline of this bounded algorithm; not an arbitrary program parser.
- output symbol bindings:
  - w: ac
  - v: bd
  - T: selected
  - e: edges
  - wₑ: edges
  - W: output
  - N: tieCount
  - A: stationA
  - B: stationB
  - C: stationC
  - D: stationD
  - AB: edgeAB
  - AC: edgeAC
  - AD: edgeAD
  - BC: edgeBC
  - BD: edgeBD
  - CD: edgeCD

## Properties

- Item:
  - claim: A minimum exists among the sixteen spanning trees.
  - conditions: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - derivation: The connected finite graph has finitely many spanning trees and each total is an exact nonnegative integer. Selecting the least total and all equal totals therefore retains every minimum.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:minimum-spanning-tree:case-1

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
  - target: math:concept:graph-theory
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: Compare network-wide connection with path choice.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-programming
  - type: supports
  - conditions: Use the connected lesson under its own stated assumptions.
  - reason: A bounded connection between finite decisions, feasible choices and cost.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:minimum-spanning-tree:case-1
  - title: Connect all four sensor stations
  - role: applied_model
  - question: Which three runs connect every sensor using the least cable?
  - setting: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
  - assumptions:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - inputs:
    - ac: 4
    - bd: 4
  - steps:
    - Item:
      - index: 1
      - expression: w = 4; v = 4
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: A, B, C, D
      - reason: Name the four sensor stations in this cable plan. Each pair of station names labels one undirected available run.
    - Item:
      - index: 3
      - expression: AB = 2 m; AD = 6 m; BC = 3 m; CD = 2 m
      - reason: Read the four fixed routed cable lengths. These are quotes, not straight distances measured from the drawing.
    - Item:
      - index: 4
      - expression: AC = 4 m; BD = 4 m
      - reason: The chosen inputs w and v supply the other two cable quotes for this example.
    - Item:
      - index: 5
      - expression: W = 7 m; N = 1
      - reason: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
  - result:
    - exact: 7 m
  - interpretation: The least total connects every station using three runs. Equal totals remain alternative minimum trees.
  - independent check:
    - method: Decode all sixteen length-two Prüfer sequences into distinct labeled trees, sum their quoted cable lengths, and compare the least total. Exactly 1 tree attains 7 m.
    - expected: 7
  - limits: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - preset:
    - ac: 4
    - bd: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- Item:
  - id: math:example:minimum-spanning-tree:case-2
  - title: Two short alternate cable runs
  - role: applied_model
  - question: Which three runs connect every sensor using the least cable?
  - setting: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
  - assumptions:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - inputs:
    - ac: 1
    - bd: 1
  - steps:
    - Item:
      - index: 1
      - expression: w = 1; v = 1
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: W = 4 m; N = 2
      - reason: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
  - result:
    - exact: 4 m
  - interpretation: The least total connects every station using three runs. Equal totals remain alternative minimum trees.
  - independent check:
    - method: Decode all sixteen length-two Prüfer sequences into distinct labeled trees, sum their quoted cable lengths, and compare the least total. Exactly 2 trees attain 4 m.
    - expected: 4
  - limits: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - preset:
    - ac: 1
    - bd: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- Item:
  - id: math:example:minimum-spanning-tree:case-3
  - title: Retain an exact tied minimum
  - role: applied_model
  - question: Which three runs connect every sensor using the least cable?
  - setting: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
  - assumptions:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - inputs:
    - ac: 3
    - bd: 4
  - steps:
    - Item:
      - index: 1
      - expression: w = 3; v = 4
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: W = 7 m; N = 2
      - reason: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
  - result:
    - exact: 7 m
  - interpretation: The least total connects every station using three runs. Equal totals remain alternative minimum trees.
  - independent check:
    - method: Decode all sixteen length-two Prüfer sequences into distinct labeled trees, sum their quoted cable lengths, and compare the least total. Exactly 2 trees attain 7 m.
    - expected: 7
  - limits: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - preset:
    - ac: 3
    - bd: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- Item:
  - id: math:example:minimum-spanning-tree:case-4
  - title: Expensive alternate runs
  - role: applied_model
  - question: Which three runs connect every sensor using the least cable?
  - setting: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
  - assumptions:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - inputs:
    - ac: 8
    - bd: 8
  - steps:
    - Item:
      - index: 1
      - expression: w = 8; v = 8
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: W = 7 m; N = 1
      - reason: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
  - result:
    - exact: 7 m
  - interpretation: The least total connects every station using three runs. Equal totals remain alternative minimum trees.
  - independent check:
    - method: Decode all sixteen length-two Prüfer sequences into distinct labeled trees, sum their quoted cable lengths, and compare the least total. Exactly 1 tree attains 7 m.
    - expected: 7
  - limits: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - preset:
    - ac: 8
    - bd: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- Item:
  - id: math:example:minimum-spanning-tree:case-5
  - title: Several equally short connections
  - role: applied_model
  - question: Which three runs connect every sensor using the least cable?
  - setting: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
  - assumptions:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - inputs:
    - ac: 2
    - bd: 2
  - steps:
    - Item:
      - index: 1
      - expression: w = 2; v = 2
      - reason: Use the declared whole-number choices and fixed list or network.
    - Item:
      - index: 2
      - expression: W = 6 m; N = 4
      - reason: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
  - result:
    - exact: 6 m
  - interpretation: The least total connects every station using three runs. Equal totals remain alternative minimum trees.
  - independent check:
    - method: Decode all sixteen length-two Prüfer sequences into distinct labeled trees, sum their quoted cable lengths, and compare the least total. Exactly 4 trees attain 6 m.
    - expected: 6
  - limits: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - preset:
    - ac: 2
    - bd: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.

## Interactive

- component id: component:minimum-spanning-tree
- renderer id: minimum-spanning-tree-visual-model
- renderer version: 1
- model id: minimum-spanning-tree-visual-model
- model revision: 1
- expression id: ast:minimum-spanning-tree:expression
- interaction status: implemented
- description: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
- controls:
  - Item:
    - id: ac
    - type: number
    - default: 4
    - min: 1
    - max: 8
    - step: 1
  - Item:
    - id: bd
    - type: number
    - default: 4
    - min: 1
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - ac: 1
      - bd: 1
    - status: valid
    - output: 4
  - Item:
    - input:
      - ac: 1
      - bd: 2
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 3
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 4
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 5
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 6
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 7
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 1
      - bd: 8
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 2
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 2
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 3
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 4
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 5
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 6
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 7
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 2
      - bd: 8
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 3
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 3
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 3
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 3
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 3
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 3
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 3
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 3
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 4
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 4
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 4
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 5
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 5
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 5
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 6
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 6
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 6
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 7
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 7
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 7
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 1
    - status: valid
    - output: 5
  - Item:
    - input:
      - ac: 8
      - bd: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - ac: 8
      - bd: 3
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 4
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 5
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 6
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 8
      - bd: 8
    - status: valid
    - output: 7
  - Item:
    - input:
      - ac: 0.9
      - bd: 4
    - status: invalid_parameters
  - Item:
    - input:
      - ac: true
      - bd: 4
    - status: invalid_parameters
  - Item:
    - input:
      - ac: 9
      - bd: 4
    - status: invalid_parameters
  - Item:
    - input:
      - ac: 4
      - bd: 0
    - status: invalid_parameters
  - Item:
    - input:
      - ac: 4
      - bd: 4
    - status: invalid_parameters
  - Item:
    - input:
      - ac: false
      - bd: 4
    - status: invalid_parameters
- compute: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
- numeric tolerance: 1e-10
- invariants:
  - A minimum exists among the sixteen spanning trees.
  - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
- limits:
  - Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
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
  - prompt: Which three runs connect every sensor using the least cable?
  - answer: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.
- Item:
  - prompt: What does one shown step mean?
  - answer: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.

## Representations

- Item:
  - kind: geometry
  - description: Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.
- Item:
  - kind: graph
  - description: Whole choices shown as dots on a fixed scale. Pin a previous input to compare both evaluated families.
- Item:
  - kind: substitution
  - description: Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.

## Applications

- Item:
  - context: Garden sensor cable planning
  - mapping: Which three runs connect every sensor using the least cable?
  - limitations: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - evidence kind: constructed_example
  - example ref: math:example:minimum-spanning-tree:case-1
- Item:
  - context: Compare alternative quotes
  - mapping: An equal least total can leave more than one usable tree.
  - limitations: Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.
  - evidence kind: constructed_example
  - example ref: math:example:minimum-spanning-tree:case-3

## Source Refs

- source:algorithm-extensions:mst

## Review Gaps

- Independent mathematical and learning review is pending.
- No historical priority claim or exact-edition book coverage is certified.
- The fixed inventory/network is an executable introduction, not a general algorithm editor.

## Change Log

- Next branch continuation: original bounded algorithm model, connected story, Geometry/Graph, previews, reference readers and independent finite oracle.

## Referenced source registry

- Source ID: source:algorithm-extensions:mst. [Sedgewick and Wayne · Minimum spanning trees](https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/KruskalMST.java). Locator: Minimum total edge weight, connected tree, equal weights and greedy cycle rejection. The card separately enumerates its finite tied minima; no source code or data is reproduced.. Verification: Definition-level primary implementation inspected 2026-11-02. Original bounded models and examples; independent mathematics, learning and exact-edition book review remain pending.. Rights: Original workshop and sensor-network stories, calculations and diagrams. Algorithms are mathematical procedures; no source implementation, exercise or dataset is copied.
