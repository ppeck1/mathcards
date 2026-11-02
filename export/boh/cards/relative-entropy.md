---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:relative-entropy", "id": "math:concept:relative-entropy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:relative-entropy", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "411bc0a1561d05547cdc6954329f2d0373ea5cc637a3bd202ed73a0e4523ed51"}, "purpose": "Compare a model with a forecast while preserving direction and support conditions.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "411bc0a1561d05547cdc6954329f2d0373ea5cc637a3bd202ed73a0e4523ed51", "status": "draft", "title": "Relative entropy", "topics": ["mathematics", "information", "probability", "statistics", "relative entropy", "KL divergence", "Kullback Leibler divergence", "distribution mismatch"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Relative entropy

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:relative-entropy; revision 0.1.0-draft. Setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. Expression: $D(P\Vert Q)=\sum_{i:p_i>0}p_i\log_2\frac{p_i}{q_i},\quad P=(1-p,p),\quad Q=(1-q,q).$. Conditions required for a defined value (a case may test their violation): A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

## Schema Version

0.1.0

## Id

math:concept:relative-entropy

## Slug

relative-entropy

## Type

concept

## Title

Relative entropy

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

- relative entropy
- KL divergence
- Kullback Leibler divergence
- distribution mismatch

## Branches

- information
- probability
- statistics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Compare a model with a forecast while preserving direction and support conditions.

## Meaning

Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.

## Prerequisites

- required:
  - math:concept:entropy
  - math:concept:probability-distribution
- helpful:

- depth:


## Definition

- setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
- formal latex: D(P\Vert Q)=\sum_{i:p_i>0}p_i\log_2\frac{p_i}{q_i},\quad P=(1-p,p),\quad Q=(1-q,q).
- signature:
  - p: Sticker chance in teaching model P.
  - q: Sticker chance in forecast Q.
  - D(P∥Q): Relative entropy from P to Q in bits.
- conditions:
  - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:relative

## Grammar

- pronunciation: Relative entropy
- expression latex: D(P\Vert Q)=\sum_{i:p_i>0}p_i\log_2\frac{p_i}{q_i},\quad P=(1-p,p),\quad Q=(1-q,q).
- formation rule: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: p
    - role: Sticker chance in teaching model P.
    - type: Declared mathematical quantity
  - Item:
    - token: q
    - role: Sticker chance in forecast Q.
    - type: Declared mathematical quantity
  - Item:
    - token: D(P∥Q)
    - role: Relative entropy from P to Q in bits.
    - type: Declared mathematical quantity
- ast:
  - id: ast:relative-entropy:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:actual
      - kind: variable
      - type: Declared model input
      - symbol: p
      - scope ref: scope:relative-entropy:expression
    - Item:
      - id: n:forecast
      - kind: variable
      - type: Declared model input
      - symbol: q
      - scope ref: scope:relative-entropy:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit. D(P∥Q) = ∑ pᵢ log₂(pᵢ/qᵢ)
    - Item:
      - id: n:bound-actual
      - kind: apply
      - type: Partially applied model
      - function: n:rule
      - argument: n:actual
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-actual
      - argument: n:forecast
  - scopes:
    - Item:
      - id: scope:relative-entropy:expression
      - kind: modelExpression
      - free variables:
        - p
        - q
      - domain condition: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - p: actual
  - q: forecast
  - D(P∥Q): output

## Properties

- Item:
  - claim: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
  - conditions: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - derivation: D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:relative-entropy:mismatched-forecast

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:entropy
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses entropy.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:probability-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses probability distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:relative-entropy:mismatched-forecast
  - title: Compare an even forecast
  - role: applied_model
  - question: Compare an even forecast under the stated inputs?
  - setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - assumptions:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - inputs:
    - actual: 0.75
    - forecast: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: actual=0.75; forecast=0.5
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.
      - reason: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
  - result:
    - exact: D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.
  - interpretation: D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.18872187554086717}
  - limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - preset:
    - actual: 0.75
    - forecast: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- Item:
  - id: math:example:relative-entropy:matching-forecast
  - title: Match the model
  - role: applied_model
  - question: Match the model under the stated inputs?
  - setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - assumptions:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - inputs:
    - actual: 0.75
    - forecast: 0.75
  - steps:
    - Item:
      - index: 1
      - expression: actual=0.75; forecast=0.75
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Every positive ratio is one, giving D=0.
      - reason: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
  - result:
    - exact: Every positive ratio is one, giving D=0.
  - interpretation: Every positive ratio is one, giving D=0.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0}
  - limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - preset:
    - actual: 0.75
    - forecast: 0.75
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- Item:
  - id: math:example:relative-entropy:reverse-direction
  - title: Reverse direction
  - role: applied_model
  - question: Reverse direction under the stated inputs?
  - setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - assumptions:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - inputs:
    - actual: 0.5
    - forecast: 0.75
  - steps:
    - Item:
      - index: 1
      - expression: actual=0.5; forecast=0.75
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: D≈0.207519 bits, different from the forward comparison.
      - reason: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
  - result:
    - exact: D≈0.207519 bits, different from the forward comparison.
  - interpretation: D≈0.207519 bits, different from the forward comparison.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.2075187496394219}
  - limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - preset:
    - actual: 0.5
    - forecast: 0.75
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- Item:
  - id: math:example:relative-entropy:excluded-possible-outcome
  - title: Exclude a possible outcome
  - role: applied_model
  - question: Exclude a possible outcome under the stated inputs?
  - setting: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
  - assumptions:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - inputs:
    - actual: 0.75
    - forecast: 0
  - steps:
    - Item:
      - index: 1
      - expression: actual=0.75; forecast=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Positive model sticker mass against q=0 gives infinite divergence.
      - reason: Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.
  - result:
    - exact: Positive model sticker mass against q=0 gives infinite divergence.
  - interpretation: Positive model sticker mass against q=0 gives infinite divergence.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "infinite_divergence"}
  - limits: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - preset:
    - actual: 0.75
    - forecast: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
- Item:
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
  - conditions to check:
    - A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.
    - KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

## Interactive

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

## Prompts

- Item:
  - prompt: How much relative entropy separates P=(1/4,3/4) from Q=(1/2,1/2)?
  - answer: Contributions are (1/4)log₂(1/2)=−1/4 and (3/4)log₂(3/2). They sum to approximately 0.188722 bits. A negative individual term is allowed; the full divergence is nonnegative.
- Item:
  - prompt: What is outside this demonstration?
  - answer: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.

## Representations

- Item:
  - kind: geometry
  - description: Compare a model with a forecast while preserving direction and support conditions.
- Item:
  - kind: graph
  - description: The response curve plots D(P∥Q) versus q with p fixed. Infinite endpoints are gaps, never finite caps.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: How much does a wrong forecast cost?
  - mapping: Compare a model with a forecast while preserving direction and support conditions.
  - limitations: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - evidence kind: constructed_example
  - example ref: math:example:relative-entropy:mismatched-forecast
- Item:
  - context: Match the model
  - mapping: Every positive ratio is one, giving D=0.
  - limitations: KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.
  - evidence kind: constructed_example
  - example ref: math:example:relative-entropy:matching-forecast

## Source Refs

- source:inference:relative

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:relative. [Stanford EE376A · Information Theory lecture notes](https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf). Locator: Section 2: relative entropy definition and nonnegativity. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
