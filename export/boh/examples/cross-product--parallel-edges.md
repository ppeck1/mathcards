---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:cross-product:parallel-edges", "id": "math:example:cross-product:parallel-edges", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:cross-product", "example_id": "math:example:cross-product:parallel-edges", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d3faf20e301e82884926a0775061975bd7a07baa96dfea2d8e303cdb9fa89add"}, "purpose": "Rotate one measured edge, follow the perpendicular component into parallelogram area, and keep the normal direction separate from magnitude.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d3faf20e301e82884926a0775061975bd7a07baa96dfea2d8e303cdb9fa89add", "status": "draft", "title": "Flatten the frame", "topics": ["mathematics", "linear-algebra", "geometry", "measurement", "vector product", "oriented parallelogram area", "right-hand rule", "normal vector"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Flatten the frame

Parent card: math:concept:cross-product; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:cross-product; revision 0.1.0-draft. Setting: A planar family of vectors inside a fixed right-handed orthonormal three-dimensional coordinate frame. Expression: $\mathbf u=(a,0,0),\quad\mathbf v=(b\cos\theta,b\sin\theta,0),\quad\mathbf u\times\mathbf v=(0,0,ab\sin\theta),\quad A=\lVert\mathbf u\times\mathbf v\rVert.$. Conditions required for a defined value (a case may test their violation): The reference frame is orthonormal and right-handed, with positive z directed out of the input plane. The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis. The input vectors are u=(a,0,0) and v=(b cosθ,b sinθ,0). Their cross product points only in the z direction and its signed component is a b sinθ square metres. Unoriented area A is the nonnegative magnitude |a b sinθ|. A zero product has no distinguished normal direction, including parallel inputs and a zero vector. When either length is zero, θ remains the construction's orientation parameter; it is not an angle defined by two nonzero vectors. Scope: The broader cross-product definition applies to three-dimensional vectors in an oriented Euclidean frame. This executable planar family illustrates its component formula, magnitude and orientation without being an arbitrary 3D vector editor.

Case unit math:example:cross-product:parallel-edges. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"angle": 180, "uLength": 3, "vLength": 2}. Result: {"exact": "u×v=(0,0,0) m²; A=0 m²"}. Limits: Zero magnitude carries no positive or negative orientation.

## Complete worked case

- id: math:example:cross-product:parallel-edges
- title: Flatten the frame
- role: applied_model
- question: What is the product when the angle is 180°?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
  - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
- inputs:
  - uLength: 3
  - vLength: 2
  - angle: 180
- steps:
  - Item:
    - index: 1
    - expression: u=(3,0,0) m; v=(−2,0,0) m.
    - reason: Both inputs lie on the same line.
  - Item:
    - index: 2
    - expression: u_xv_y−u_yv_x=3·0−0·(−2)=0.
    - reason: There is no perpendicular height.
- result:
  - exact: u×v=(0,0,0) m²; A=0 m²
- interpretation: The parallelogram degenerates to a line and no normal direction is distinguished.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: Parallel vectors are linearly dependent and span zero area.
- limits: Zero magnitude carries no positive or negative orientation.
- preset:
  - uLength: 3
  - vLength: 2
  - angle: 180
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
  - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.

## Written exploration recipe

- component id: component:cross-product
- renderer id: cross-product-visual-model
- renderer version: 1
- model id: cross-product-visual-model
- model revision: 1
- expression id: ast:cross-product:expression
- interaction status: implemented
- description: Shared-scale directed edges span the actual parallelogram. An explicitly out-of-page or into-page normal symbol identifies the sign; the readout separately gives signed component and area.
- controls:
  - Item:
    - id: uLength
    - type: number
    - default: 3
    - min: 0
    - max: 4
    - step: 0.01
  - Item:
    - id: vLength
    - type: number
    - default: 2
    - min: 0
    - max: 4
    - step: 0.01
  - Item:
    - id: angle
    - type: number
    - default: 60
    - min: -180
    - max: 180
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 60
    - output: 5.196152422706632
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 90
    - output: 6
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: -90
    - output: -6
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 0
    - output: 0
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 180
    - output: 0
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: -180
    - output: 0
  - Item:
    - input:
      - uLength: 0
      - vLength: 2
      - angle: 60
    - output: 0
  - Item:
    - input:
      - uLength: 4
      - vLength: 4
      - angle: 90
    - output: 16
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 30
    - output: 3
  - Item:
    - input:
      - uLength: 4
      - vLength: 4
      - angle: -150
    - output: -8
  - Item:
    - input:
      - uLength: 3
      - vLength: 2
      - angle: 181
    - status: invalid_parameters
  - Item:
    - input:
      - uLength: 5
      - vLength: 2
      - angle: 60
    - status: invalid_parameters
- compute: Set u=(a,0,0) and v=(b cosθ,b sinθ,0). The general component rule gives u×v=(u_yv_z−u_zv_y,u_zv_x−u_xv_z,u_xv_y−u_yv_x). In this family w_z=a b sinθ and A=|w_z|. The displayed angle is in degrees.
- numeric tolerance: 1e-10
- invariants:
  - The reference frame is orthonormal and right-handed, with positive z directed out of the input plane.
  - The lengths a and b lie from zero to four metres. The signed planar angle θ lies from −180 to 180 degrees; negative angles turn below the positive x axis.
  - The input vectors are u=(a,0,0) and v=(b cosθ,b sinθ,0). Their cross product points only in the z direction and its signed component is a b sinθ square metres.
  - Unoriented area A is the nonnegative magnitude |a b sinθ|. A zero product has no distinguished normal direction, including parallel inputs and a zero vector.
- limits:
  - Both inputs stay in the coordinate plane and their lengths are nonnegative; this is a stated specialization of the three-dimensional cross product.
  - An area vector is not a force, moment or torque unless inputs and units are changed under a separately stated model.
  - The out-of-page symbol expresses orientation; it is not a perspective rendering of an extra measured length.
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

- Source ID: source:openstax:vectors-plane. [Calculus Volume 3, 2.1 Vectors in the Plane](https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane). Locator: Plane components, Euclidean magnitude, scalar multiplication and the zero vector. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports vocabulary and conditions, not historical priority or independent review of the original scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:cross-product. [Calculus Volume 3, 2.4 The Cross Product](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product). Locator: Component definition, orthogonality and orientation; parallelogram area as the cross-product norm. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions, not independent review, photographed-book coverage or the original workshop scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
