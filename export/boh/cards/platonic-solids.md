---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:platonic-solids", "id": "math:concept:platonic-solids", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:platonic-solids", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1f18541b22bee5c7badd109d623d6453755d3530eeaf70e406a1cbe8590b41b0"}, "purpose": "How can five different display frames keep the same Euler count?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1f18541b22bee5c7badd109d623d6453755d3530eeaf70e406a1cbe8590b41b0", "status": "draft", "title": "Platonic solids and Euler counts", "topics": ["mathematics", "geometry", "topology", "discrete-mathematics", "platonic solids and euler counts", "platonic solids"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Platonic solids and Euler counts

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:platonic-solids; revision 0.1.0-draft. Setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes. Expression: $V-E+F=2.$. Conditions required for a defined value (a case may test their violation): Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view. Scope: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.

## Schema Version

0.1.0

## Id

math:concept:platonic-solids

## Slug

platonic-solids

## Type

concept

## Title

Platonic solids and Euler counts

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-09T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- platonic solids and euler counts
- platonic solids

## Branches

- geometry
- topology
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can five different display frames keep the same Euler count?

## Meaning

A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.

## Prerequisites

- required:
  - math:concept:regular-polygon
- helpful:
  - math:concept:sphere-measurement
- depth:
  []

## Definition

- setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
- formal latex: V-E+F=2.
- signature:
  - s: Discrete solid choice: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron
  - V: Number of polyhedron vertices
  - E: Number of polyhedron edges
  - F: Number of polyhedron faces
- conditions:
  - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- domain notes: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
- proof status: Definition-level sources and originally derived bounded calculations; independent review pending.
- source refs:
  - source:spatial-insights:solid
  - source:spatial-insights:euler

## Grammar

- pronunciation: Platonic solids and Euler counts
- expression latex: V-E+F=2.
- formation rule: A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.
- precedence: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
- symbols:
  - Item:
    - token: s
    - role: Discrete solid choice: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron
    - type: Locally declared quantity or selector
  - Item:
    - token: V
    - role: Number of polyhedron vertices
    - type: Locally declared quantity or selector
  - Item:
    - token: E
    - role: Number of polyhedron edges
    - type: Locally declared quantity or selector
  - Item:
    - token: F
    - role: Number of polyhedron faces
    - type: Locally declared quantity or selector
- ast:
  - id: ast:platonic-solids:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:solid
      - kind: variable
      - type: Declared numeric input
      - symbol: s
      - scope ref: scope:platonic-solids
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded spatial construction
      - ref: V-E+F=2.
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:solid
  - scopes:
    - Item:
      - id: scope:platonic-solids
      - kind: modelExpression
      - free variables:
        - s
      - external parameters:
        - The stated Euclidean model and fixed domain
      - domain condition: Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- parse errors:
  - Item:
    - input: Use a fractional categorical selector or omit the model conditions
    - status: model mismatch
    - reason: Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- ast coverage: Typed application outline of the stated bounded construction; the formal expression declares the complete mathematical rule.
- output symbol bindings:
  - n: sides
  - R: radius
  - s: sideLength
  - a: apothem
  - P: perimeter
  - A: output
  - θ: centralAngle
  - π: pi

## Properties

- Item:
  - claim: A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.
  - conditions: Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - derivation: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:platonic-solids:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:regular-polygon
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The same regular faces and measured quantities connect these models.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:sphere-measurement
  - type: supports
  - conditions: Use the stated domains and interpretation in both lessons.
  - reason: The same regular faces and measured quantities connect these models.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:platonic-solids:case-1
  - title: A triangular frame
  - role: applied_model
  - question: How can five different display frames keep the same Euler count?
  - setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
  - assumptions:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - inputs:
    - solid: 1
  - steps:
    - Item:
      - index: 1
      - expression: s = 1
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: V-E+F=2.
      - reason: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
    - Item:
      - index: 3
      - expression: F = 4
      - reason: A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.
  - result:
    - approximate: 4
  - interpretation: A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.
  - independent check:
    - method: Double-count face-edge and vertex-edge incidences independently of the runtime table; check every coordinate edge length and vertex degree.
    - expected: 4
  - limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - preset:
    - solid: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- Item:
  - id: math:example:platonic-solids:case-2
  - title: A familiar box
  - role: applied_model
  - question: How can five different display frames keep the same Euler count?
  - setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
  - assumptions:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - inputs:
    - solid: 2
  - steps:
    - Item:
      - index: 1
      - expression: s = 2
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: V-E+F=2.
      - reason: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
    - Item:
      - index: 3
      - expression: F = 6
      - reason: A cubic frame has six square faces, twelve edges and eight vertices: 8−12+6=2.
  - result:
    - approximate: 6
  - interpretation: A cubic frame has six square faces, twelve edges and eight vertices: 8−12+6=2.
  - independent check:
    - method: Double-count face-edge and vertex-edge incidences independently of the runtime table; check every coordinate edge length and vertex degree.
    - expected: 6
  - limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - preset:
    - solid: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- Item:
  - id: math:example:platonic-solids:case-3
  - title: Two pyramids base to base
  - role: applied_model
  - question: How can five different display frames keep the same Euler count?
  - setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
  - assumptions:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - inputs:
    - solid: 3
  - steps:
    - Item:
      - index: 1
      - expression: s = 3
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: V-E+F=2.
      - reason: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
    - Item:
      - index: 3
      - expression: F = 8
      - reason: An octahedral frame has eight triangular faces, twelve edges and six vertices: 6−12+8=2.
  - result:
    - approximate: 8
  - interpretation: An octahedral frame has eight triangular faces, twelve edges and six vertices: 6−12+8=2.
  - independent check:
    - method: Double-count face-edge and vertex-edge incidences independently of the runtime table; check every coordinate edge length and vertex degree.
    - expected: 8
  - limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - preset:
    - solid: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- Item:
  - id: math:example:platonic-solids:case-4
  - title: Twelve pentagonal panels
  - role: applied_model
  - question: How can five different display frames keep the same Euler count?
  - setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
  - assumptions:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - inputs:
    - solid: 4
  - steps:
    - Item:
      - index: 1
      - expression: s = 4
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: V-E+F=2.
      - reason: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
    - Item:
      - index: 3
      - expression: F = 12
      - reason: A dodecahedral frame has twelve pentagonal faces, thirty edges and twenty vertices: 20−30+12=2.
  - result:
    - approximate: 12
  - interpretation: A dodecahedral frame has twelve pentagonal faces, thirty edges and twenty vertices: 20−30+12=2.
  - independent check:
    - method: Double-count face-edge and vertex-edge incidences independently of the runtime table; check every coordinate edge length and vertex degree.
    - expected: 12
  - limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - preset:
    - solid: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
- Item:
  - id: math:example:platonic-solids:case-5
  - title: Twenty triangular panels
  - role: applied_model
  - question: How can five different display frames keep the same Euler count?
  - setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.
  - assumptions:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - inputs:
    - solid: 5
  - steps:
    - Item:
      - index: 1
      - expression: s = 5
      - reason: Choose the stated counts, category and measurements.
    - Item:
      - index: 2
      - expression: V-E+F=2.
      - reason: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.
    - Item:
      - index: 3
      - expression: F = 20
      - reason: An icosahedral frame has twenty triangular faces, thirty edges and twelve vertices: 12−30+20=2.
  - result:
    - approximate: 20
  - interpretation: An icosahedral frame has twenty triangular faces, thirty edges and twelve vertices: 12−30+20=2.
  - independent check:
    - method: Double-count face-edge and vertex-edge incidences independently of the runtime table; check every coordinate edge length and vertex degree.
    - expected: 20
  - limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - preset:
    - solid: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.

## Interactive

- component id: component:platonic-solids
- renderer id: platonic-solids-visual-model
- renderer version: 1
- model id: platonic-solids-visual-model
- model revision: 1
- expression id: ast:platonic-solids:expression
- interaction status: implemented
- description: A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.
- controls:
  - Item:
    - id: solid
    - type: number
    - default: 2
    - min: 1
    - max: 5
    - step: 1
- expected cases:
  - Item:
    - input:
      - solid: 1
    - status: valid
    - output: 4
  - Item:
    - input:
      - solid: 2
    - status: valid
    - output: 6
  - Item:
    - input:
      - solid: 3
    - status: valid
    - output: 8
  - Item:
    - input:
      - solid: 4
    - status: valid
    - output: 12
  - Item:
    - input:
      - solid: 5
    - status: valid
    - output: 20
  - Item:
    - input:
      - solid: 0.9
    - status: invalid_parameters
  - Item:
    - input:
      - solid: 5.1
    - status: invalid_parameters
  - Item:
    - input:
      - solid: true
    - status: invalid_parameters
  - Item:
    - input:
      - solid: null
    - status: invalid_parameters
  - Item:
    - input:
      - solid: 1
    - status: invalid_parameters
  - Item:
    - input:
      - solid: 1.5
    - status: invalid_parameters
  - Item:
    - input:
      - solid: 0
    - status: invalid_parameters
  - Item:
    - input:
      - solid: 6
    - status: invalid_parameters
- compute: V-E+F=2.
- numeric tolerance: 5e-11
- invariants:
  - Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view.
  - Story, formula, measured Geometry and Graph use the same evaluated state.
  - Categorical and integer choices stay discrete; physical lengths may change continuously.
- limits:
  - Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
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
  - prompt: How can five different display frames keep the same Euler count?
  - answer: A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.
- Item:
  - prompt: What does this view measure?
  - answer: A fixed orthographic view shows the actual unit-edge skeleton, including hidden edges, and the count identity. Crossings in the projection are not new vertices.

## Representations

- Item:
  - kind: geometry
  - description: A fixed orthographic view shows the actual unit-edge skeleton, including hidden edges, and the count identity. Crossings in the projection are not new vertices.
- Item:
  - kind: graph
  - description: Separate category dots compare the five face counts. The ordinal choice is a label and has no intermediate physical value.
- Item:
  - kind: substitution
  - description: Each edge belongs to two faces, so face count times sides per face equals twice edge count. Each edge has two ends, so vertex count times edges per vertex also equals twice edge count. Explicit coordinate edge skeletons supply the same counts. Substituting those integer counts gives two for V−E+F in every displayed model. This verifies these five cases rather than proving a general topological theorem.

## Applications

- Item:
  - context: A triangular frame
  - mapping: A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.
  - limitations: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - evidence kind: constructed_example
  - example ref: math:example:platonic-solids:case-1
- Item:
  - context: A familiar box
  - mapping: A cubic frame has six square faces, twelve edges and eight vertices: 8−12+6=2.
  - limitations: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.
  - evidence kind: constructed_example
  - example ref: math:example:platonic-solids:case-2

## Source Refs

- source:spatial-insights:solid
- source:spatial-insights:euler

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this original bounded spatial lesson through the existing shared host.

## Referenced source registry

- Source ID: source:spatial-insights:solid. [Wolfram MathWorld · Platonic Solid](https://mathworld.wolfram.com/PlatonicSolid.html). Locator: Definition and table of the five convex regular solids, their face types and vertex/edge/face counts. Original coordinate skeletons use unit edges.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.

- Source ID: source:spatial-insights:euler. [Wolfram MathWorld · Euler Characteristic](https://mathworld.wolfram.com/EulerCharacteristic.html). Locator: Equations (1)–(2), with genus zero: the closed convex polyhedral count V−E+F=2. This lesson verifies five explicit cases rather than proves the theorem.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.
