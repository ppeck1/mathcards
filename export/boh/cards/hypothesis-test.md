---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:hypothesis-test", "id": "math:concept:hypothesis-test", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hypothesis-test", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "62cf2a30cf12baf3c5dd31574006c5fb48d20988323c2282a0a80fff7554914a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ea60b4cdb127f0534a311684557600920285a642d638179f4dc5ba1dd71e8b80"}, "purpose": "Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ea60b4cdb127f0534a311684557600920285a642d638179f4dc5ba1dd71e8b80", "status": "draft", "title": "An exact one-sided hypothesis test", "topics": ["mathematics", "statistics", "probability", "hypothesis test", "p value", "p-value", "null hypothesis", "significance level", "one sided test"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# An exact one-sided hypothesis test

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:hypothesis-test; revision 0.1.0-draft. Setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. Expression: $H_0:p=\tfrac12,\quad H_1:p>\tfrac12,\quad K\sim\operatorname{Bin}(12,\tfrac12).\quad p\text{-value}=P_{H_0}(K\ge k)=\sum_{j=k}^{12}\binom{12}{j}2^{-12}.$. Conditions required for a defined value (a case may test their violation): A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

## Schema Version

0.1.0

## Id

math:concept:hypothesis-test

## Slug

hypothesis-test

## Type

concept

## Title

An exact one-sided hypothesis test

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

- hypothesis test
- p value
- p-value
- null hypothesis
- significance level
- one sided test

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.

## Meaning

A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.

## Prerequisites

- required:
  - math:concept:binomial-distribution
- helpful:

- depth:


## Definition

- setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
- formal latex: H_0:p=\tfrac12,\quad H_1:p>\tfrac12,\quad K\sim\operatorname{Bin}(12,\tfrac12).\quad p\text{-value}=P_{H_0}(K\ge k)=\sum_{j=k}^{12}\binom{12}{j}2^{-12}.
- signature:
  - k: Observed count out of twelve.
  - p-value: Probability of this count or a larger count under p₀=1/2.
- conditions:
  - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:binomial
  - source:inference:interval

## Grammar

- pronunciation: An exact one-sided hypothesis test
- expression latex: H_0:p=\tfrac12,\quad H_1:p>\tfrac12,\quad K\sim\operatorname{Bin}(12,\tfrac12).\quad p\text{-value}=P_{H_0}(K\ge k)=\sum_{j=k}^{12}\binom{12}{j}2^{-12}.
- formation rule: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: k
    - role: Observed count out of twelve.
    - type: Declared mathematical quantity
  - Item:
    - token: p-value
    - role: Probability of this count or a larger count under p₀=1/2.
    - type: Declared mathematical quantity
- ast:
  - id: ast:hypothesis-test:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:observed
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:hypothesis-test:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. p-value = Pₚ₀(K ≥ k)
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:observed
  - scopes:
    - Item:
      - id: scope:hypothesis-test:expression
      - kind: modelExpression
      - free variables:
        - k
      - domain condition: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - k: observed
  - p-value: output

## Properties

- Item:
  - claim: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - conditions: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - derivation: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:hypothesis-test:ten-stickers

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:binomial-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses binomial distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:hypothesis-test:ten-stickers
  - title: Cross the chosen threshold
  - role: applied_model
  - question: Cross the chosen threshold under the stated inputs?
  - setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - assumptions:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - inputs:
    - observed: 10
  - steps:
    - Item:
      - index: 1
      - expression: observed=10
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
      - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - result:
    - exact: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
  - interpretation: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.019287109375}
  - limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - preset:
    - observed: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- Item:
  - id: math:example:hypothesis-test:nine-stickers
  - title: Stay above the threshold
  - role: applied_model
  - question: Stay above the threshold under the stated inputs?
  - setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - assumptions:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - inputs:
    - observed: 9
  - steps:
    - Item:
      - index: 1
      - expression: observed=9
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The tail probability is (220+66+12+1)/4096=299/4096, above 0.05.
      - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - result:
    - exact: The tail probability is (220+66+12+1)/4096=299/4096, above 0.05.
  - interpretation: The tail probability is (220+66+12+1)/4096=299/4096, above 0.05.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.072998046875}
  - limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - preset:
    - observed: 9
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- Item:
  - id: math:example:hypothesis-test:all-stickers
  - title: Only the largest count
  - role: applied_model
  - question: Only the largest count under the stated inputs?
  - setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - assumptions:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - inputs:
    - observed: 12
  - steps:
    - Item:
      - index: 1
      - expression: observed=12
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The tail has one mass: 1/4096.
      - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - result:
    - exact: The tail has one mass: 1/4096.
  - interpretation: The tail has one mass: 1/4096.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.000244140625}
  - limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - preset:
    - observed: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- Item:
  - id: math:example:hypothesis-test:no-stickers
  - title: A result in the other direction
  - role: applied_model
  - question: A result in the other direction under the stated inputs?
  - setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - assumptions:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - inputs:
    - observed: 0
  - steps:
    - Item:
      - index: 1
      - expression: observed=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Every count is at least zero, so this one-sided p-value is one.
      - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - result:
    - exact: Every count is at least zero, so this one-sided p-value is one.
  - interpretation: Every count is at least zero, so this one-sided p-value is one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.0}
  - limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - preset:
    - observed: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- Item:
  - id: math:example:hypothesis-test:half-stickers
  - title: Read a central count
  - role: applied_model
  - question: Read a central count under the stated inputs?
  - setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - assumptions:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - inputs:
    - observed: 6
  - steps:
    - Item:
      - index: 1
      - expression: observed=6
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The upper tail includes the central mass at six and all larger counts; its value is 2510/4096.
      - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
  - result:
    - exact: The upper tail includes the central mass at six and all larger counts; its value is 2510/4096.
  - interpretation: The upper tail includes the central mass at six and all larger counts; its value is 2510/4096.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.61279296875}
  - limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - preset:
    - observed: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
    - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

## Interactive

- component id: component:hypothesis-test
- renderer id: hypothesis-test-visual-model
- renderer version: 1
- model id: hypothesis-test-visual-model
- model revision: 1
- expression id: ast:hypothesis-test:expression
- interaction status: implemented
- description: Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.
- controls:
  - Item:
    - id: observed
    - type: number
    - default: 9
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - observed: 10
    - status: valid
    - output: 0.019287109375
  - Item:
    - input:
      - observed: 9
    - status: valid
    - output: 0.072998046875
  - Item:
    - input:
      - observed: 12
    - status: valid
    - output: 0.000244140625
  - Item:
    - input:
      - observed: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - observed: 6
    - status: valid
    - output: 0.61279296875
  - Item:
    - input:
      - observed: -1
    - status: invalid_parameters
  - Item:
    - input:
      - observed: 9
    - status: invalid_parameters
- compute: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. p-value = Pₚ₀(K ≥ k)
- numeric tolerance: 1e-10
- invariants:
  - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
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
  - prompt: Does ten stickers out of twelve cross the declared 0.05 threshold?
  - answer: At k=10 the tail contains counts 10,11,12 and has probability (66+12+1)/4096=79/4096≈0.01929. This rejects the null at α=0.05 within this test; it is not the probability that the null is true.
- Item:
  - prompt: What is outside this demonstration?
  - answer: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

## Representations

- Item:
  - kind: geometry
  - description: Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.
- Item:
  - kind: graph
  - description: Exact p-values appear only at thirteen possible counts, with a separate α=0.05 reference line.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: Which counts challenge a half-chance claim?
  - mapping: Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.
  - limitations: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - evidence kind: constructed_example
  - example ref: math:example:hypothesis-test:ten-stickers
- Item:
  - context: Stay above the threshold
  - mapping: The tail probability is (220+66+12+1)/4096=299/4096, above 0.05.
  - limitations: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - evidence kind: constructed_example
  - example ref: math:example:hypothesis-test:nine-stickers

## Source Refs

- source:inference:binomial
- source:inference:interval

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:interval. [NIST · Confidence intervals for a binomial proportion](https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm). Locator: Exact intervals: binomial-tail inversion. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:binomial. [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm). Locator: Probability mass, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
