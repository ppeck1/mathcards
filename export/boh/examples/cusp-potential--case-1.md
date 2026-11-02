---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:cusp-potential:case-1", "id": "math:example:cusp-potential:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:cusp-potential", "example_id": "math:example:cusp-potential:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "61690f4e48dae64780490c30808bae1bcd9b87b9781cfffae281ef1af26154b4"}, "purpose": "How does tilting a two-well landscape change its resting points?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "61690f4e48dae64780490c30808bae1bcd9b87b9781cfffae281ef1af26154b4", "status": "draft", "title": "Begin with the stated scenario", "topics": ["mathematics", "dynamics", "cusp potential and competing wells"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Begin with the stated scenario

Parent card: math:concept:cusp-potential; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:cusp-potential; revision 0.1.0-draft. Setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells. Expression: $V(x)=\frac{x^4}{4}-\frac{a x^2}{2}-b x,\quad V\prime(x)=x^3-a x-b.$. Conditions required for a defined value (a case may test their violation): Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

Case unit math:example:cusp-potential:case-1. Setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells. Inputs: {"bias": 0, "shape": 1}. Result: {"exact": "3 stationary points"}. Limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

## Complete worked case

- id: math:example:cusp-potential:case-1
- title: Begin with the stated scenario
- role: applied_model
- question: How does tilting a two-well landscape change its resting points?
- setting: A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.
- assumptions:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- inputs:
  - bias: 0
  - shape: 1
- steps:
  - Item:
    - index: 1
    - expression: b = 0, a = 1
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: V(x) = x⁴/4 − a x²/2 − b x
    - reason: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
  - Item:
    - index: 3
    - expression: Result ≈ 3 stationary points
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - exact: 3 stationary points
- interpretation: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 3
- limits: Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
- preset:
  - bias: 0
  - shape: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.

## Written exploration recipe

- component id: component:cusp-potential
- renderer id: cusp-potential-visual-model
- renderer version: 1
- model id: cusp-potential-visual-model
- model revision: 1
- expression id: ast:cusp-potential:expression
- interaction status: implemented
- description: The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.
- controls:
  - Item:
    - id: bias
    - type: number
    - default: 0
    - min: -1
    - max: 1
    - step: 0.05
  - Item:
    - id: shape
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - bias: 0
      - shape: 1
    - status: valid
    - output: 3
  - Item:
    - input:
      - bias: -1
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - shape: 0
      - bias: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 1
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0
      - shape: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0
      - shape: 2
    - status: valid
    - output: 3
  - Item:
    - input:
      - bias: -0.5
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 0.5
      - shape: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - bias: 2
      - shape: 1
    - status: invalid_parameters
- compute: Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².
- numeric tolerance: 1e-10
- invariants:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.
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

- Source ID: source:systems:cusp. [Kuznetsov · Cusp bifurcation](https://www.scholarpedia.org/article/Cusp_bifurcation). Locator: Two-parameter cubic equilibrium normal form; the specific potential and scene are original.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
