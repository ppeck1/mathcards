---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:structural-stability", "id": "math:concept:structural-stability", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:structural-stability", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "38e3500cf1db40770084b50576e331c523c53c1aa4c95f89e7aa8e9cfc5a16e7"}, "purpose": "What survives when the correction rule itself changes?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "38e3500cf1db40770084b50576e331c523c53c1aa4c95f89e7aa8e9cfc5a16e7", "status": "draft", "title": "Perturbing a rule, not just a starting point", "topics": ["mathematics", "dynamics", "perturbing a rule, not just a starting point"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Perturbing a rule, not just a starting point

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:structural-stability; revision 0.1.0-draft. Setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points. Expression: $f_\varepsilon(x)=-x+\varepsilon\quad\text{or}\quad f_\varepsilon(x)=\varepsilon-x^2,\qquad \dot x=f_\varepsilon(x).$. Conditions required for a defined value (a case may test their violation): This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

## Schema Version

0.1.0

## Id

math:concept:structural-stability

## Slug

structural-stability

## Type

concept

## Title

Perturbing a rule, not just a starting point

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

- perturbing a rule, not just a starting point

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What survives when the correction rule itself changes?

## Meaning

Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:stability
  - math:concept:fold-bifurcation
  - math:concept:hysteresis
- depth:
  []

## Definition

- setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
- formal latex: f_\varepsilon(x)=-x+\varepsilon\quad\text{or}\quad f_\varepsilon(x)=\varepsilon-x^2,\qquad \dot x=f_\varepsilon(x).
- signature:
  - ε: Rule perturbation ε
  - F: Rule family
  - x *: roots
  - n: Primary result
- conditions:
  - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- domain notes: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- proof status: Author-derived for the stated bounded family; independent mathematical review pending.
- source refs:
  - source:dynamics-extension:structural

## Grammar

- pronunciation: Perturbing a rule, not just a starting point
- expression latex: f_\varepsilon(x)=-x+\varepsilon\quad\text{or}\quad f_\varepsilon(x)=\varepsilon-x^2,\qquad \dot x=f_\varepsilon(x).
- formation rule: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
- precedence: Keep the selected pole, starting state, frame and input grouping explicit before evaluating.
- symbols:
  - Item:
    - token: ε
    - role: Rule perturbation ε
    - type: Declared quantity or model choice
  - Item:
    - token: F
    - role: Rule family
    - type: Declared quantity or model choice
  - Item:
    - token: x_*
    - role: roots
    - type: Declared quantity or model choice
  - Item:
    - token: n
    - role: Primary result
    - type: Declared quantity or model choice
- ast:
  - id: ast:structural-stability:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:perturbation
      - kind: variable
      - type: Declared model input
      - symbol: ε
      - scope ref: scope:structural-stability
    - Item:
      - id: n:family
      - kind: variable
      - type: Declared model input
      - symbol: F
      - scope ref: scope:structural-stability
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared family
      - ref: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
    - Item:
      - id: n:bound-perturbation
      - kind: apply
      - type: Declared model result
      - function: n:rule
      - argument: n:perturbation
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared model result
      - function: n:bound-perturbation
      - argument: n:family
  - scopes:
    - Item:
      - id: scope:structural-stability
      - kind: modelExpression
      - free variables:
        - ε
        - F
      - domain condition: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- parse errors:
  - Item:
    - input: Treat a different rule or history as the same input
    - status: domain or model mismatch
    - reason: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- ast coverage: Typed application outline of the declared family, not an arbitrary expression parser or a general theorem checker.
- output symbol bindings:
  - ε: perturbation
  - F: family
  - x *: roots
  - n: output

## Properties

- Item:
  - claim: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
  - conditions: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - derivation: Use the stated formulas under their declared hypotheses; the independent reference checks the executable cases.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:structural-stability:case-1

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
  - target: math:concept:stability
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Perturbing a rule, not just a starting point makes a bounded connection with stability.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:fold-bifurcation
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Perturbing a rule, not just a starting point makes a bounded connection with fold bifurcation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hysteresis
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Perturbing a rule, not just a starting point makes a bounded connection with hysteresis.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
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
- Item:
  - id: math:example:structural-stability:case-2
  - title: Shift the same rule right
  - role: applied_model
  - question: What survives when the correction rule itself changes?
  - setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
  - assumptions:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - inputs:
    - perturbation: 0.2
    - family: hyperbolic
  - steps:
    - Item:
      - index: 1
      - expression: ε = 0.2; F = Attracting linear rule
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
    - perturbation: 0.2
    - family: hyperbolic
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- Item:
  - id: math:example:structural-stability:case-3
  - title: Start at the critical fold
  - role: applied_model
  - question: What survives when the correction rule itself changes?
  - setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
  - assumptions:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - inputs:
    - perturbation: 0
    - family: fold
  - steps:
    - Item:
      - index: 1
      - expression: ε = 0; F = Critical fold rule
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
    - perturbation: 0
    - family: fold
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- Item:
  - id: math:example:structural-stability:case-4
  - title: Perturb toward no balance points
  - role: applied_model
  - question: What survives when the correction rule itself changes?
  - setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
  - assumptions:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - inputs:
    - perturbation: -0.01
    - family: fold
  - steps:
    - Item:
      - index: 1
      - expression: ε = -0.01; F = Critical fold rule
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: fε(x)=−x+ε or ε−x²
      - reason: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
    - Item:
      - index: 3
      - expression: 0 equilibria
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - exact: 0 equilibria
  - interpretation: What survives when the correction rule itself changes? Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0
  - limits: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - preset:
    - perturbation: -0.01
    - family: fold
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
- Item:
  - id: math:example:structural-stability:case-5
  - title: Perturb toward two balance points
  - role: applied_model
  - question: What survives when the correction rule itself changes?
  - setting: Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.
  - assumptions:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - inputs:
    - perturbation: 0.01
    - family: fold
  - steps:
    - Item:
      - index: 1
      - expression: ε = 0.01; F = Critical fold rule
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: fε(x)=−x+ε or ε−x²
      - reason: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
    - Item:
      - index: 3
      - expression: 2 equilibria
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - exact: 2 equilibria
  - interpretation: What survives when the correction rule itself changes? Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 2
  - limits: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - preset:
    - perturbation: 0.01
    - family: fold
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

## Interactive

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

## Prompts

- Item:
  - prompt: What survives when the correction rule itself changes?
  - answer: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
- Item:
  - prompt: Which assumption matters for this construction?
  - answer: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.

## Representations

- Item:
  - kind: geometry
  - description: Perturbing a rule, not just a starting point uses model-derived positions and marks.
- Item:
  - kind: graph
  - description: A distinct history, response or coordinate graph retains declared domains and gaps.
- Item:
  - kind: substitution
  - description: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.

## Applications

- Item:
  - context: Originally authored model scenario
  - mapping: What survives when the correction rule itself changes?
  - limitations: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - evidence kind: constructed_example
  - example ref: math:example:structural-stability:case-1
- Item:
  - context: A changed history, parameter or chart
  - mapping: Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.
  - limitations: This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.
  - evidence kind: constructed_example
  - example ref: math:example:structural-stability:case-2

## Source Refs

- source:dynamics-extension:structural

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch continuation: added bounded models, connected calculations, views and reference coverage.

## Referenced source registry

- Source ID: source:dynamics-extension:structural. [Rahman and Blackmore · One-dimensional structural stability](https://arxiv.org/abs/2302.04941). Locator: Primary author preprint of SIAM Review 65(3), 869–886; local hyperbolicity and perturbation distinctions. The lesson does not reproduce or claim the full compact-domain theorem.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
