---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:composition:geometry", "id": "math:example:composition:geometry", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:function-composition", "example_id": "math:example:composition:geometry", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.1-draft", "upstream_content_sha256": "83b04da6ca8db7e34cca2c2bd280e07016296080b83d0f060c6791e9708c1ee3"}, "purpose": "Describe one transformation whose output becomes the input of another.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "83b04da6ca8db7e34cca2c2bd280e07016296080b83d0f060c6791e9708c1ee3", "status": "draft", "title": "Compare rotate-then-translate with translate-then-rotate.", "topics": ["mathematics", "language", "functions", "composition of functions"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Compare rotate-then-translate with translate-then-rotate.

Parent card: math:concept:function-composition; revision 0.1.1-draft. Original worked draft; independent review pending.

Definition unit math:concept:function-composition; revision 0.1.1-draft. Setting: Set-based functions, with an explicitly restricted domain for partial compositions. Expression: $(f\circ g)(x)=f(g(x)),\quad x\in D=\{x\in\operatorname{dom}(g):g(x)\in\operatorname{dom}(f)\}.$. Conditions required for a defined value (a case may test their violation): For a particular x, x must be in dom(g) and g(x) must be in dom(f). A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ. Scope: More generally f may have a different declared domain Df; composition is defined on inputs of g whose outputs lie in Df. The simple B match above is a sufficient standard case.

Case unit math:example:composition:geometry. Setting: Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y) Inputs: {"point": [1, 0], "rotation": "90° counterclockwise about the origin", "translation": [1, 0]}. Result: {"exact": "(T∘R)(1,0)=(1,1); (R∘T)(1,0)=(0,2)"}. Limits: Translation is affine and is not a linear map of R². Do not label both stages linear.

## Complete worked case

- id: math:example:composition:geometry
- role: visual
- question: Compare rotate-then-translate with translate-then-rotate.
- setting: Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y)
- inputs:
  - point:
    - 1
    - 0
  - rotation: 90° counterclockwise about the origin
  - translation:
    - 1
    - 0
- steps:
  - Item:
    - index: 1
    - expression: R(1,0)=(0,1)
    - reason: Rotate the point.
  - Item:
    - index: 2
    - expression: T(0,1)=(1,1)
    - reason: Translate the rotated point.
  - Item:
    - index: 3
    - expression: T(1,0)=(2,0); R(2,0)=(0,2)
    - reason: Reverse the order.
- result:
  - exact: (T∘R)(1,0)=(1,1); (R∘T)(1,0)=(0,2)
- interpretation: The order of spatial transformations is part of the expression.
- independent check:
  - method: Substitute the original point into each expanded formula.
  - expected: T(R(x,y))=(1−y,x); R(T(x,y))=(-y,x+1).
- limits: Translation is affine and is not a linear map of R². Do not label both stages linear.
- preset: null
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- assumptions:
  - Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y)
- title: Compare rotate-then-translate with translate-then-rotate.
- conditions to check:
  - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
  - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.

## Written exploration recipe

- component id: function-composition-quadratic-affine
- model revision: 1
- description: Evaluate f(u)=a u²+b u+c and g(x)=m x+n in either order, showing intermediate values, ordered arrows, expression and result.
- controls:
  - Item:
    - id: a
    - type: number
    - min: -5
    - max: 5
    - default: 1
    - step: 1
  - Item:
    - id: b
    - type: number
    - min: -5
    - max: 5
    - default: 0
    - step: 1
  - Item:
    - id: c
    - type: number
    - min: -5
    - max: 5
    - default: 0
    - step: 1
  - Item:
    - id: m
    - type: number
    - min: -5
    - max: 5
    - default: 2
    - step: 1
  - Item:
    - id: n
    - type: number
    - min: -5
    - max: 5
    - default: 1
    - step: 1
  - Item:
    - id: x
    - type: number
    - min: -10
    - max: 10
    - default: 3
    - step: 0.5
  - Item:
    - id: order
    - type: enum
    - values:
      - f_after_g
      - g_after_f
    - default: f_after_g
- expected cases:
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: f_after_g
    - intermediate: 7
    - output: 49
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: g_after_f
    - intermediate: 9
    - output: 19
  - Item:
    - input:
      - a: 0
      - b: 1
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: f_after_g
    - intermediate: 7
    - output: 7
- invariants:
  - Identity f(u)=u leaves g(x) unchanged in either order.
  - Output and intermediate values agree across expression, mapping arrows, table and accessible result.
- limits:
  - This numeric module covers real quadratic f and affine g, not every mathematical function.
  - The structural, geometric and domain examples require separate registered views or static explanations.
  - General composition AST has abstract A/B/C types. The numeric renderer binds A=B=C=Real; reversed order is not automatically permitted in other typed settings.
- fallback: A worked expression, table of intermediate/output values and plain-language reading.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - parameters
  - order
  - result
  - viewport
  - note
- renderer id: function-composition-quadratic-affine
- renderer version: 1
- model id: function-composition-quadratic-affine
- expression id: ast:composition:apply-f-after-g
- interaction status: implemented
- expression variants:
  - f after g: ast:composition:apply-f-after-g
  - g after f: ast:composition:apply-g-after-f

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:composition. [Precalculus 2e, 1.4 Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions). Locator: Composition and domain sections. Verification: composition definition/domain inspected 2026-10-23; external reference, not independent review. Rights: Do not copy prose or exercises; verify edition license before reuse.
