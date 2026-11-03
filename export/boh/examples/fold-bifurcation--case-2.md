---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:fold-bifurcation:case-2", "id": "math:example:fold-bifurcation:case-2", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:fold-bifurcation", "example_id": "math:example:fold-bifurcation:case-2", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "36c5ac53a097da819a7a9df2c20f39abf437d057fb98e254a1f9c15343698c69"}, "purpose": "When do two balance points disappear?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "36c5ac53a097da819a7a9df2c20f39abf437d057fb98e254a1f9c15343698c69", "status": "draft", "title": "Change Control parameter μ to -1", "topics": ["mathematics", "dynamics", "fold bifurcations"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Control parameter μ to -1

Parent card: math:concept:fold-bifurcation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:fold-bifurcation; revision 0.1.0-draft. Setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain. Expression: $\dot x=\mu-x^2,\quad x_*^2=\mu,\quad f\prime(x_*)=-2x_*.$. Conditions required for a defined value (a case may test their violation): A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

Case unit math:example:fold-bifurcation:case-2. Setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain. Inputs: {"mu": -1}. Result: {"exact": "0 equilibria"}. Limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

## Complete worked case

- id: math:example:fold-bifurcation:case-2
- title: Change Control parameter μ to -1
- role: applied_model
- question: When do two balance points disappear?
- setting: A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.
- assumptions:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- inputs:
  - mu: -1
- steps:
  - Item:
    - index: 1
    - expression: μ = -1
    - reason: These are the stipulated inputs for this case.
  - Item:
    - index: 2
    - expression: dx/dt = μ − x²
    - reason: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
  - Item:
    - index: 3
    - expression: Result ≈ 0 equilibria
    - reason: Evaluate the stated rule before rounding the display.
- result:
  - exact: 0 equilibria
- interpretation: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
- independent check:
  - method: Independent Python reference using sets, algebra or alternate analytic identities.
  - expected: 0
- limits: A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
- preset:
  - mu: -1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.

## Written exploration recipe

- component id: component:fold-bifurcation
- renderer id: fold-bifurcation-visual-model
- renderer version: 1
- model id: fold-bifurcation-visual-model
- model revision: 1
- expression id: ast:fold-bifurcation:expression
- interaction status: implemented
- description: The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.
- controls:
  - Item:
    - id: mu
    - type: number
    - default: 1
    - min: -1
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - mu: 1
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: -1
    - status: valid
    - output: 0
  - Item:
    - input:
      - mu: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - mu: 2
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: -0.25
    - status: valid
    - output: 0
  - Item:
    - input:
      - mu: 1.25
    - status: valid
    - output: 2
  - Item:
    - input:
      - mu: 3
    - status: invalid_parameters
- compute: Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.
- numeric tolerance: 1e-10
- invariants:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.
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

- Source ID: source:systems:fold. [Kuznetsov · Saddle-node bifurcation](https://www.scholarpedia.org/article/Saddle-node). Locator: One-dimensional normal forms and simple-root stability. Our sign convention is dx/dt=μ−x².. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
