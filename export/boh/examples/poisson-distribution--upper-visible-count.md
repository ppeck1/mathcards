---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:poisson-distribution:upper-visible-count", "id": "math:example:poisson-distribution:upper-visible-count", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:poisson-distribution", "example_id": "math:example:poisson-distribution:upper-visible-count", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "db36b4e01e82124112f80b8a366c33dfa49d2e22875b3d3a1b6045bf1fff4485"}, "purpose": "Connect an arrival rate to count probabilities while retaining the undisplayed tail.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "db36b4e01e82124112f80b8a366c33dfa49d2e22875b3d3a1b6045bf1fff4485", "status": "draft", "title": "Inspect the last visible bar", "topics": ["mathematics", "probability", "statistics", "modeling", "Poisson distribution", "arrival count", "event rate", "Poisson probability"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Inspect the last visible bar

Parent card: math:concept:poisson-distribution; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:poisson-distribution; revision 0.1.0-draft. Setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. Expression: $K\sim\operatorname{Poisson}(\lambda),\quad P(K=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\ldots,\quad E[K]=\operatorname{Var}(K)=\lambda.$. Conditions required for a defined value (a case may test their violation): A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.

Case unit math:example:poisson-distribution:upper-visible-count. Setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. Inputs: {"count": 20, "rate": 10}. Result: {"exact": "P(K=20)=e⁻¹⁰10²⁰/20!; positive mass remains above twenty."}. Limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.

## Complete worked case

- id: math:example:poisson-distribution:upper-visible-count
- title: Inspect the last visible bar
- role: applied_model
- question: Inspect the last visible bar under the stated inputs?
- setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
- assumptions:
  - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- inputs:
  - rate: 10
  - count: 20
- steps:
  - Item:
    - index: 1
    - expression: rate=10; count=20
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: P(K=20)=e⁻¹⁰10²⁰/20!; positive mass remains above twenty.
    - reason: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
- result:
  - exact: P(K=20)=e⁻¹⁰10²⁰/20!; positive mass remains above twenty.
- interpretation: P(K=20)=e⁻¹⁰10²⁰/20!; positive mass remains above twenty.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 0.0018660813139987594}
- limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- preset:
  - rate: 10
  - count: 20
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.

## Written exploration recipe

- component id: component:poisson-distribution
- renderer id: poisson-distribution-visual-model
- renderer version: 1
- model id: poisson-distribution-visual-model
- model revision: 1
- expression id: ast:poisson-distribution:expression
- interaction status: implemented
- description: Connect an arrival rate to count probabilities while retaining the undisplayed tail.
- controls:
  - Item:
    - id: rate
    - type: number
    - default: 3
    - min: 0
    - max: 10
    - step: 0.05
  - Item:
    - id: count
    - type: number
    - default: 3
    - min: 0
    - max: 20
    - step: 1
- expected cases:
  - Item:
    - input:
      - rate: 3
      - count: 3
    - status: valid
    - output: 0.22404180765538775
  - Item:
    - input:
      - rate: 0
      - count: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - rate: 0
      - count: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - rate: 2
      - count: 0
    - status: valid
    - output: 0.1353352832366127
  - Item:
    - input:
      - rate: 10
      - count: 20
    - status: valid
    - output: 0.0018660813139987594
  - Item:
    - input:
      - rate: 0
      - count: 3
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - rate: 10
      - count: 3
    - status: valid
    - output: 0.007566654960414142
  - Item:
    - input:
      - rate: 3
      - count: 0
    - status: valid
    - output: 0.049787068367863944
  - Item:
    - input:
      - rate: 3
      - count: 20
    - status: valid
    - output: 7.135378768777135e-11
  - Item:
    - input:
      - rate: -1
      - count: 3
    - status: invalid_parameters
  - Item:
    - input:
      - rate: 3
      - count: 3
    - status: invalid_parameters
- compute: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. P(K=k) = e⁻λ λᵏ/k!
- numeric tolerance: 1e-10
- invariants:
  - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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

- Source ID: source:inference:poisson. [NIST · Poisson Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366j.htm). Locator: Probability mass, infinite support, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
