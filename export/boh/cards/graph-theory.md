---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:graph-theory", "id": "math:concept:graph-theory", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:graph-theory", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "670b31cc641355b27889581c93acb6fade7b91b757e4a44746e7e6e3f8c0e755"}, "purpose": "Choose a route by summing edge weights rather than judging a drawing’s apparent lengths.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "670b31cc641355b27889581c93acb6fade7b91b757e4a44746e7e6e3f8c0e755", "status": "draft", "title": "Graph theory & shortest paths", "topics": ["mathematics", "discrete-computation", "modeling", "weighted graph", "route optimization"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Graph theory & shortest paths

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:graph-theory; revision 0.1.0-draft. Setting: Choose a route by summing edge weights rather than judging a drawing’s apparent lengths. Expression: $d(A,D)=\min(3+7,6+2,3+b+2)=\min(10,8,5+b)$. Conditions required for a defined value (a case may test their violation): The graph is undirected with positive edge weights. Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes. Route weights add, and there are no access restrictions or congestion effects. Scope: The interactive controls restrict each parameter to its declared finite interval. At a tie, more than one route attains the same minimum; the optimum time remains continuous while route identity can switch.

## Schema Version

0.1.0

## Id

math:concept:graph-theory

## Slug

graph-theory

## Type

concept

## Title

Graph theory & shortest paths

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- weighted graph
- route optimization

## Branches

- discrete-computation
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Choose a route by summing edge weights rather than judging a drawing’s apparent lengths.

## Meaning

Nodes are places and edges are available links. A changing bridge weight can switch which complete path is shortest.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:graph-theory:four
  - title: A slow bridge
  - role: applied_model
  - question: Which route is shortest when bridge BC takes 4 min?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
  - inputs:
    - bridge: 4
  - steps:
    - Item:
      - index: 1
      - expression: A–B–C–D = 3+4+2=9 min
      - reason: Add all edges on the bridge route.
    - Item:
      - index: 2
      - expression: A–C–D = 6+2=8 min; A–B–D=10 min
      - reason: Compare complete alternatives.
    - Item:
      - index: 3
      - expression: min(9,8,10)=8 min
      - reason: Choose a route with the smallest total.
  - result:
    - exact: 8 min via A–C–D
  - interpretation: A link that looks like a shortcut can take longer than a route avoiding it.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The remaining simple route A–C–B–D takes 6+4+7=17 min, so it cannot improve 8.
  - limits: All links are available and walking times are additive.
  - preset:
    - bridge: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
- Item:
  - id: math:example:graph-theory:quick
  - title: A quick bridge
  - role: applied_model
  - question: What is the shortest time when BC takes 1 min?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
  - inputs:
    - bridge: 1
  - steps:
    - Item:
      - index: 1
      - expression: A–B–C–D=3+1+2=6 min
      - reason: Use the fast bridge.
    - Item:
      - index: 2
      - expression: min(6,8,10)=6 min
      - reason: Compare it with routes without the bridge.
  - result:
    - exact: 6 min via A–B–C–D
  - interpretation: A third edge can still make a route shorter in time.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The bridge saves 8−6=2 min compared with A–C–D.
  - limits: Fewest edges and least total weight are different goals.
  - preset:
    - bridge: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
- Item:
  - id: math:example:graph-theory:two
  - title: A moderate bridge
  - role: applied_model
  - question: What changes when BC takes 2 min?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
  - inputs:
    - bridge: 2
  - steps:
    - Item:
      - index: 1
      - expression: Bridge route=3+2+2=7 min
      - reason: Only the bridge term changes.
    - Item:
      - index: 2
      - expression: min(7,8,10)=7 min
      - reason: The bridge route remains shortest.
  - result:
    - exact: 7 min via A–B–C–D
  - interpretation: Increasing the bridge time by one minute raises the optimum by one minute in this region.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: For b<3, 5+b<8.
  - limits: The other edge weights remain fixed.
  - preset:
    - bridge: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
- Item:
  - id: math:example:graph-theory:tie
  - title: The switching point
  - role: boundary
  - question: Which routes are shortest when BC takes 3 min?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
  - inputs:
    - bridge: 3
  - steps:
    - Item:
      - index: 1
      - expression: A–B–C–D=3+3+2=8 min
      - reason: Evaluate the bridge route.
    - Item:
      - index: 2
      - expression: A–C–D=6+2=8 min
      - reason: Evaluate the alternative.
    - Item:
      - index: 3
      - expression: Both totals equal the minimum 8 min
      - reason: Retain both equally good routes.
  - result:
    - exact: 8 min, with two shortest routes
  - interpretation: A minimum value can be unique even when the minimizing route is not.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: Solve 5+b=8 to obtain b=3.
  - limits: Tie breaking does not change the optimum time.
  - preset:
    - bridge: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
- Item:
  - id: math:example:graph-theory:very-slow
  - title: Avoid a costly link
  - role: applied_model
  - question: What is the best time when the bridge takes 12 min?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.
  - inputs:
    - bridge: 12
  - steps:
    - Item:
      - index: 1
      - expression: Bridge route=3+12+2=17 min
      - reason: Compute the now expensive candidate.
    - Item:
      - index: 2
      - expression: min(17,8,10)=8 min
      - reason: The optimum avoids the bridge.
  - result:
    - exact: 8 min via A–C–D
  - interpretation: A cost change on an unused edge need not change the shortest total.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: For every b>3, 5+b>8.
  - limits: No new links or restrictions are introduced.
  - preset:
    - bridge: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - The graph is undirected with positive edge weights.
    - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
    - Route weights add, and there are no access restrictions or congestion effects.

## Properties

- Item:
  - claim: Nodes are places and edges are available links. A changing bridge weight can switch which complete path is shortest.
  - status: algebraic derivation
  - conditions: The graph is undirected with positive edge weights.; Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.; Route weights add, and there are no access restrictions or congestion effects.
  - derivation: directDistance=8; bridgeDistance=5+bridge; shortestDistance=min(10,8,5+bridge); output=shortestDistance. The remaining simple path A-C-B-D has weight 13+bridge and is always dominated. route is A-B-C-D for bridge<3 and A-C-D for bridge>3; both tie at bridge=3.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: The graph is undirected with positive edge weights. Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes. Route weights add, and there are no access restrictions or congestion effects.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan bridge weight changes one edge; violet path sums feed the gold shortest-route highlight and total.

## Representations

- Item:
  - kind: symbolic
  - description: directDistance=8; bridgeDistance=5+bridge; shortestDistance=min(10,8,5+bridge); output=shortestDistance. The remaining simple path A-C-B-D has weight 13+bridge and is always dominated. route is A-B-C-D for bridge<3 and A-C-D for bridge>3; both tie at bridge=3.
- Item:
  - kind: geometric
  - description: The cyan bridge weight changes one edge; violet path sums feed the gold shortest-route highlight and total.

## Applications

- Item:
  - context: A slow bridge
  - mapping: A link that looks like a shortcut can take longer than a route avoiding it.
  - limitations: All links are available and walking times are additive.
  - evidence kind: constructed_example
  - example ref: math:example:graph-theory:four
- Item:
  - context: A quick bridge
  - mapping: A third edge can still make a route shorter in time.
  - limitations: Fewest edges and least total weight are different goals.
  - evidence kind: constructed_example
  - example ref: math:example:graph-theory:quick

## Source Refs

- source:cornell:shortest-paths

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Choose a route by summing edge weights rather than judging a drawing’s apparent lengths.
- formal latex: d(A,D)=\min(3+7,6+2,3+b+2)=\min(10,8,5+b)
- signature:
  - bridge: weight b of the B–C bridge, in walking minutes
  - shortestDistance: minimum route weight from A to D in minutes
- conditions:
  - The graph is undirected with positive edge weights.
  - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
  - Route weights add, and there are no access restrictions or congestion effects.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. At a tie, more than one route attains the same minimum; the optimum time remains continuous while route identity can switch.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:cornell:shortest-paths

## Grammar

- pronunciation: Choose a route by summing edge weights rather than judging a drawing’s apparent lengths.
- expression latex: d(A,D)=\min(3+7,6+2,3+b+2)=\min(10,8,5+b)
- formation rule: directDistance=8; bridgeDistance=5+bridge; shortestDistance=min(10,8,5+bridge); output=shortestDistance. The remaining simple path A-C-B-D has weight 13+bridge and is always dominated. route is A-B-C-D for bridge<3 and A-C-D for bridge>3; both tie at bridge=3.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: bridge
    - role: weight b of the B–C bridge, in walking minutes
    - type: Real quantity in declared setting
  - Item:
    - token: shortestDistance
    - role: minimum route weight from A to D in minutes
    - type: Real quantity in declared setting
- ast:
  - id: ast:graph-theory:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:bridge
      - kind: variable
      - symbol: bridge
      - type: Real
      - scope ref: scope:graph-theory
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: directDistance=8; bridgeDistance=5+bridge; shortestDistance=min(10,8,5+bridge); output=shortestDistance. The remaining simple path A-C-B-D has weight 13+bridge and is always dominated. route is A-B-C-D for bridge<3 and A-C-D for bridge>3; both tie at bridge=3.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:rule
      - argument: n:bridge
      - type: Real
  - scopes:
    - Item:
      - id: scope:graph-theory
      - kind: modelExpression
      - free variables:
        - bridge
      - domain condition: The graph is undirected with positive edge weights.; Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.; Route weights add, and there are no access restrictions or congestion effects.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: graph-theory-visual-model
- renderer id: graph-theory-visual-model
- renderer version: 1.0.0
- model id: graph-theory-visual-model
- model revision: 1.0.0
- expression id: ast:graph-theory:expression
- interaction status: implemented
- description: The cyan bridge weight changes one edge; violet path sums feed the gold shortest-route highlight and total.
- controls:
  - Item:
    - id: bridge
    - type: number
    - default: 4
    - min: 1
    - max: 12
    - slider min: 1
    - slider max: 12
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - bridge: 4
    - output: 8
  - Item:
    - input:
      - bridge: 1
    - output: 6
  - Item:
    - input:
      - bridge: 2
    - output: 7
  - Item:
    - input:
      - bridge: 3
    - output: 8
  - Item:
    - input:
      - bridge: 8
    - output: 8
  - Item:
    - input:
      - bridge: 12
    - output: 8
  - Item:
    - input:
      - bridge: 0
    - status: invalid_parameters
- compute: directDistance=8; bridgeDistance=5+bridge; shortestDistance=min(10,8,5+bridge); output=shortestDistance. The remaining simple path A-C-B-D has weight 13+bridge and is always dominated. route is A-B-C-D for bridge<3 and A-C-D for bridge>3; both tie at bridge=3.
- numeric tolerance: 1e-10
- invariants:
  - The graph is undirected with positive edge weights.
  - Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes.
  - Route weights add, and there are no access restrictions or congestion effects.
- limits:
  - Edges are undirected, available and have positive walking-time weights.
  - Edge weights add; waits, congestion, accessibility and uncertainty are excluded.
  - The network drawing is schematic: displayed edge length is not its time weight.
  - At a tie, more than one route attains the same minimum; the optimum time remains continuous while route identity can switch.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

## Referenced source registry

- Source ID: source:cornell:shortest-paths. [Cornell CS 2110, Lecture 23: Shortest Paths](https://courses.cis.cornell.edu/courses/cs2110/2026sp/lectures/lec23/). Locator: Weighted shortest paths and additive path lengths. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
