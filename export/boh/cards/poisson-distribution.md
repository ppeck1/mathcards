---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:poisson-distribution", "id": "math:concept:poisson-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:poisson-distribution", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "db36b4e01e82124112f80b8a366c33dfa49d2e22875b3d3a1b6045bf1fff4485"}, "purpose": "Connect an arrival rate to count probabilities while retaining the undisplayed tail.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "db36b4e01e82124112f80b8a366c33dfa49d2e22875b3d3a1b6045bf1fff4485", "status": "draft", "title": "Poisson arrivals", "topics": ["mathematics", "probability", "statistics", "modeling", "Poisson distribution", "arrival count", "event rate", "Poisson probability"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Poisson arrivals

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:poisson-distribution; revision 0.1.0-draft. Setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. Expression: $K\sim\operatorname{Poisson}(\lambda),\quad P(K=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\ldots,\quad E[K]=\operatorname{Var}(K)=\lambda.$. Conditions required for a defined value (a case may test their violation): A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.

## Schema Version

0.1.0

## Id

math:concept:poisson-distribution

## Slug

poisson-distribution

## Type

concept

## Title

Poisson arrivals

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

- Poisson distribution
- arrival count
- event rate
- Poisson probability

## Branches

- probability
- statistics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Connect an arrival rate to count probabilities while retaining the undisplayed tail.

## Meaning

A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.

## Prerequisites

- required:
  - math:concept:probability-distribution
  - math:concept:exponentiation
- helpful:
  []
- depth:
  []

## Definition

- setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
- formal latex: K\sim\operatorname{Poisson}(\lambda),\quad P(K=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\ldots,\quad E[K]=\operatorname{Var}(K)=\lambda.
- signature:
  - λ: Expected arrivals in a fixed minute.
  - k: Selected whole arrival count.
- conditions:
  - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:poisson

## Grammar

- pronunciation: Poisson arrivals
- expression latex: K\sim\operatorname{Poisson}(\lambda),\quad P(K=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\ldots,\quad E[K]=\operatorname{Var}(K)=\lambda.
- formation rule: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: λ
    - role: Expected arrivals in a fixed minute.
    - type: Declared mathematical quantity
  - Item:
    - token: k
    - role: Selected whole arrival count.
    - type: Declared mathematical quantity
- ast:
  - id: ast:poisson-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:rate
      - kind: variable
      - type: Declared model input
      - symbol: λ
      - scope ref: scope:poisson-distribution:expression
    - Item:
      - id: n:count
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:poisson-distribution:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history. P(K=k) = e⁻λ λᵏ/k!
    - Item:
      - id: n:bound-rate
      - kind: apply
      - type: Partially applied model
      - function: n:rule
      - argument: n:rate
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-rate
      - argument: n:count
  - scopes:
    - Item:
      - id: scope:poisson-distribution:expression
      - kind: modelExpression
      - free variables:
        - λ
        - k
      - domain condition: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - λ: rate
  - k: count

## Properties

- Item:
  - claim: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
  - conditions: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - derivation: e⁻³×27/6≈0.224042.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:poisson-distribution:three-arrivals

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
  - target: math:concept:probability-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses probability distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:exponentiation
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses exponentiation.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:poisson-distribution:three-arrivals
  - title: Mean three, count three
  - role: applied_model
  - question: Mean three, count three under the stated inputs?
  - setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - assumptions:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - inputs:
    - rate: 3
    - count: 3
  - steps:
    - Item:
      - index: 1
      - expression: rate=3; count=3
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: e⁻³×27/6≈0.224042.
      - reason: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
  - result:
    - exact: e⁻³×27/6≈0.224042.
  - interpretation: e⁻³×27/6≈0.224042.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.22404180765538775}
  - limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - preset:
    - rate: 3
    - count: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- Item:
  - id: math:example:poisson-distribution:zero-rate-zero-count
  - title: A zero-rate model
  - role: applied_model
  - question: A zero-rate model under the stated inputs?
  - setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - assumptions:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - inputs:
    - rate: 0
    - count: 0
  - steps:
    - Item:
      - index: 1
      - expression: rate=0; count=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Zero arrivals have probability one.
      - reason: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
  - result:
    - exact: Zero arrivals have probability one.
  - interpretation: Zero arrivals have probability one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.0}
  - limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - preset:
    - rate: 0
    - count: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- Item:
  - id: math:example:poisson-distribution:zero-rate-positive-count
  - title: An impossible positive count
  - role: applied_model
  - question: An impossible positive count under the stated inputs?
  - setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - assumptions:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - inputs:
    - rate: 0
    - count: 1
  - steps:
    - Item:
      - index: 1
      - expression: rate=0; count=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At λ=0 a positive count has probability zero.
      - reason: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
  - result:
    - exact: At λ=0 a positive count has probability zero.
  - interpretation: At λ=0 a positive count has probability zero.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - preset:
    - rate: 0
    - count: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- Item:
  - id: math:example:poisson-distribution:quiet-minute
  - title: No arrivals despite positive rate
  - role: applied_model
  - question: No arrivals despite positive rate under the stated inputs?
  - setting: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
  - assumptions:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - inputs:
    - rate: 2
    - count: 0
  - steps:
    - Item:
      - index: 1
      - expression: rate=2; count=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: P(K=0)=e⁻²≈0.135335.
      - reason: A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.
  - result:
    - exact: P(K=0)=e⁻²≈0.135335.
  - interpretation: P(K=0)=e⁻²≈0.135335.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.1353352832366127}
  - limits: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - preset:
    - rate: 2
    - count: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.
    - The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
- Item:
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

## Interactive

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

## Prompts

- Item:
  - prompt: With mean three arrivals per minute, what is the chance of exactly three?
  - answer: At λ=3 the mass is e⁻³3³/6≈0.224042. Mean three does not mean every minute has three arrivals. The display never renormalizes its finite 0–20 window.
- Item:
  - prompt: What is outside this demonstration?
  - answer: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.

## Representations

- Item:
  - kind: geometry
  - description: Connect an arrival rate to count probabilities while retaining the undisplayed tail.
- Item:
  - kind: graph
  - description: A response curve plots the selected count probability versus λ. Geometry displays count masses and the remaining tail.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: How many returns arrive in a minute?
  - mapping: Connect an arrival rate to count probabilities while retaining the undisplayed tail.
  - limitations: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - evidence kind: constructed_example
  - example ref: math:example:poisson-distribution:three-arrivals
- Item:
  - context: A zero-rate model
  - mapping: Zero arrivals have probability one.
  - limitations: The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.
  - evidence kind: constructed_example
  - example ref: math:example:poisson-distribution:zero-rate-zero-count

## Source Refs

- source:inference:poisson

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:poisson. [NIST · Poisson Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366j.htm). Locator: Probability mass, infinite support, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
