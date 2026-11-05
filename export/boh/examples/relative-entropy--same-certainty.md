---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:relative-entropy:same-certainty", "id": "math:example:relative-entropy:same-certainty", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:relative-entropy", "example_id": "math:example:relative-entropy:same-certainty", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "411bc0a1561d05547cdc6954329f2d0373ea5cc637a3bd202ed73a0e4523ed51"}, "purpose": "Compare a model with a forecast while preserving direction and support conditions.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "411bc0a1561d05547cdc6954329f2d0373ea5cc637a3bd202ed73a0e4523ed51", "status": "draft", "title": "Two zero masses", "topics": ["mathematics", "information", "probability", "statistics", "relative entropy", "KL divergence", "Kullback Leibler divergence", "distribution mismatch"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Two zero masses

Parent card: math:concept:relative-entropy; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:relative-entropy; revision 0.1.0-draft. Setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. Expression: $D(P\Vert Q)=\sum_{i:p_i>0}p_i\log_2\frac{p_i}{q_i},\quad P=(1-p,p),\quad Q=(1-q,q).$. Conditions required for a defined value (a case may test their violation): A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

Case unit math:example:relative-entropy:same-certainty. Setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. Inputs: {"actual": 0, "forecast": 0}. Result: {"exact": "Certain no-sticker masses agree; zero model mass contributes zero, so D=0."}. Limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

## Complete worked case

- id: math:example:relative-entropy:same-certainty
- title: Two zero masses
- role: applied_model
- question: Two zero masses under the stated inputs?
- setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
- assumptions:
  - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- inputs:
  - actual: 0
  - forecast: 0
- steps:
  - Item:
    - index: 1
    - expression: actual=0; forecast=0
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: Certain no-sticker masses agree; zero model mass contributes zero, so D=0.
    - reason: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
- result:
  - exact: Certain no-sticker masses agree; zero model mass contributes zero, so D=0.
- interpretation: Certain no-sticker masses agree; zero model mass contributes zero, so D=0.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 0}
- limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- preset:
  - actual: 0
  - forecast: 0
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

## Written exploration recipe

- component id: component:relative-entropy
- renderer id: relative-entropy-visual-model
- renderer version: 1
- model id: relative-entropy-visual-model
- model revision: 1
- expression id: ast:relative-entropy:expression
- interaction status: implemented
- description: Compare a model with a forecast while preserving direction and support conditions.
- controls:
  - Item:
    - id: actual
    - type: number
    - default: 0.75
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: forecast
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - actual: 0.75
      - forecast: 0.5
    - status: valid
    - output: 0.18872187554086717
  - Item:
    - input:
      - actual: 0.75
      - forecast: 0.75
    - status: valid
    - output: 0
  - Item:
    - input:
      - actual: 0.5
      - forecast: 0.75
    - status: valid
    - output: 0.2075187496394219
  - Item:
    - input:
      - actual: 0.75
      - forecast: 0
    - status: infinite_divergence
  - Item:
    - input:
      - actual: 0
      - forecast: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - actual: 0
      - forecast: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - actual: 1
      - forecast: 0.5
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - actual: 0.75
      - forecast: 1
    - status: infinite_divergence
  - Item:
    - input:
      - actual: -1
      - forecast: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - actual: 0.75
      - forecast: 0.5
    - status: invalid_parameters
- compute: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. D(P∥Q) = ∑ pᵢ log₂(pᵢ/qᵢ)
- numeric tolerance: 1e-10
- invariants:
  - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
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

- Source ID: source:inference:relative. [Stanford EE376A · Information Theory lecture notes](https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf). Locator: Section 2: relative entropy definition and nonnegativity. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
