---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:graph-theory:two", "id": "math:example:graph-theory:two", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:graph-theory", "example_id": "math:example:graph-theory:two", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "670b31cc641355b27889581c93acb6fade7b91b757e4a44746e7e6e3f8c0e755"}, "purpose": "Choose a route by summing edge weights rather than judging a drawing’s apparent lengths.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "670b31cc641355b27889581c93acb6fade7b91b757e4a44746e7e6e3f8c0e755", "status": "draft", "title": "A moderate bridge", "topics": ["mathematics", "discrete-computation", "modeling", "weighted graph", "route optimization"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# A moderate bridge

Parent card: math:concept:graph-theory; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:graph-theory; revision 0.1.0-draft. Setting: Choose a route by summing edge weights rather than judging a drawing’s apparent lengths. Expression: $d(A,D)=\min(3+7,6+2,3+b+2)=\min(10,8,5+b)$. Conditions required for a defined value (a case may test their violation): The graph is undirected with positive edge weights. Edges AB=3, BD=7, AC=6 and CD=2 stay fixed; only BC changes. Route weights add, and there are no access restrictions or congestion effects. Scope: The interactive controls restrict each parameter to its declared finite interval. At a tie, more than one route attains the same minimum; the optimum time remains continuous while route identity can switch.

Case unit math:example:graph-theory:two. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"bridge": 2}. Result: {"exact": "7 min via A–B–C–D"}. Limits: The other edge weights remain fixed.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:cornell:shortest-paths. [Cornell CS 2110, Lecture 23: Shortest Paths](https://courses.cis.cornell.edu/courses/cs2110/2026sp/lectures/lec23/). Locator: Weighted shortest paths and additive path lengths. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
