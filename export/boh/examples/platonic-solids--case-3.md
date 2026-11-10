---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:platonic-solids:case-3", "id": "math:example:platonic-solids:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:platonic-solids", "example_id": "math:example:platonic-solids:case-3", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1f18541b22bee5c7badd109d623d6453755d3530eeaf70e406a1cbe8590b41b0"}, "purpose": "How can five different display frames keep the same Euler count?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1f18541b22bee5c7badd109d623d6453755d3530eeaf70e406a1cbe8590b41b0", "status": "draft", "title": "Two pyramids base to base", "topics": ["mathematics", "geometry", "topology", "discrete-mathematics", "platonic solids and euler counts", "platonic solids"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Two pyramids base to base

Parent card: math:concept:platonic-solids; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:platonic-solids; revision 0.1.0-draft. Setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes. Expression: $V-E+F=2.$. Conditions required for a defined value (a case may test their violation): Use a whole selection from one through five. These are convex regular solids with unit-length edges and closed surfaces without holes; count actual spatial vertices, edges and faces rather than crossings in the fixed view. Scope: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.

Case unit math:example:platonic-solids:case-3. Setting: A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes. Inputs: {"solid": 3}. Result: {"approximate": "8"}. Limits: Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:spatial-insights:solid. [Wolfram MathWorld · Platonic Solid](https://mathworld.wolfram.com/PlatonicSolid.html). Locator: Definition and table of the five convex regular solids, their face types and vertex/edge/face counts. Original coordinate skeletons use unit edges.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.

- Source ID: source:spatial-insights:euler. [Wolfram MathWorld · Euler Characteristic](https://mathworld.wolfram.com/EulerCharacteristic.html). Locator: Equations (1)–(2), with genus zero: the closed convex polyhedral count V−E+F=2. This lesson verifies five explicit cases rather than proves the theorem.. Verification: Definition-level source inspected 2026-11-09. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Originally authored display, floor, camera and bead-cell examples and drawings. No source exercise, image or dataset reproduced.
