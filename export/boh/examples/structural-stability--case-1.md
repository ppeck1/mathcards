---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:structural-stability:case-1", "id": "math:example:structural-stability:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:structural-stability", "example_id": "math:example:structural-stability:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "38e3500cf1db40770084b50576e331c523c53c1aa4c95f89e7aa8e9cfc5a16e7"}, "purpose": "What survives when the correction rule itself changes?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "38e3500cf1db40770084b50576e331c523c53c1aa4c95f89e7aa8e9cfc5a16e7", "status": "draft", "title": "Shift an attracting rule left", "topics": ["mathematics", "dynamics", "perturbing a rule, not just a starting point"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Shift an attracting rule left

Parent card: math:concept:structural-stability; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:structural-stability; revision 0.1.0-draft. Setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points. Expression: $f_\varepsilon(x)=-x+\varepsilon\quad\text{or}\quad f_\varepsilon(x)=\varepsilon-x^2,\qquad \dot x=f_\varepsilon(x).$. Conditions required for a defined value (a case may test their violation): This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

Case unit math:example:structural-stability:case-1. Setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points. Inputs: {"family": "hyperbolic", "perturbation": -0.2}. Result: {"exact": "1 equilibria"}. Limits: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

## Complete worked case

- id: math:example:structural-stability:case-1
- title: Shift an attracting rule left
- role: applied_model
- question: What survives when the correction rule itself changes?
- setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
- assumptions:
  - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- inputs:
  - perturbation: -0.2
  - family: hyperbolic
- steps:
  - Item:
    - index: 1
    - expression: ε = -0.2; F = Attracting linear rule
    - reason: These conditions select the declared family, coordinate chart or whole history step.
  - Item:
    - index: 2
    - expression: fε(x)=−x+ε or ε−x²
    - reason: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
  - Item:
    - index: 3
    - expression: 1 equilibria
    - reason: Read the evaluated quantity, retaining its domain and units.
- result:
  - exact: 1 equilibria
- interpretation: What survives when the correction rule itself changes? Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
- independent check:
  - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
  - expected: 1
- limits: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- preset:
  - perturbation: -0.2
  - family: hyperbolic
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

## Written exploration recipe

- component id: component:structural-stability
- renderer id: structural-stability-visual-model
- renderer version: 1
- model id: structural-stability-visual-model
- model revision: 1
- expression id: ast:structural-stability:expression
- interaction status: implemented
- description: Perturbing a rule, not just a starting point. Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
- controls:
  - Item:
    - id: perturbation
    - type: number
    - default: 0.2
    - min: -0.5
    - max: 0.5
    - step: 0.01
  - Item:
    - id: family
    - type: enum
    - default: hyperbolic
    - values:
      - hyperbolic
      - fold
    - value labels:
      - hyperbolic: Attracting linear rule
      - fold: Critical fold rule
- expected cases:
  - Item:
    - input:
      - perturbation: -0.2
      - family: hyperbolic
    - status: valid
    - output: 1
  - Item:
    - input:
      - perturbation: 0.2
      - family: hyperbolic
    - status: valid
    - output: 1
  - Item:
    - input:
      - perturbation: 0
      - family: fold
    - status: valid
    - output: 1
  - Item:
    - input:
      - perturbation: -0.01
      - family: fold
    - status: valid
    - output: 0
  - Item:
    - input:
      - perturbation: 0.01
      - family: fold
    - status: valid
    - output: 2
  - Item:
    - input:
      - perturbation: -0.5
      - family: hyperbolic
    - status: valid
    - output: 1
  - Item:
    - input:
      - perturbation: 0.5
      - family: hyperbolic
    - status: valid
    - output: 1
  - Item:
    - input:
      - perturbation: 0.2
      - family: fold
    - status: valid
    - output: 2
  - Item:
    - input:
      - perturbation: 1.5
      - family: hyperbolic
    - status: invalid_parameters
- compute: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
- numeric tolerance: 1e-10
- invariants:
  - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- limits:
  - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
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

- Source ID: source:dynamics-extension:structural. [Rahman and Blackmore · One-dimensional structural stability](https://arxiv.org/abs/2302.04941). Locator: Primary author preprint of SIAM Review 65(3), 869–886; local hyperbolicity and perturbation distinctions. The lesson does not reproduce or claim the full compact-domain theorem.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
