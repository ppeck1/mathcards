---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:sampling-distribution", "id": "math:concept:sampling-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sampling-distribution", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5bab4e1c273d073c9f18f7a162535b3d30afc57439b03e815540fbfba4baedf8"}, "purpose": "See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5bab4e1c273d073c9f18f7a162535b3d30afc57439b03e815540fbfba4baedf8", "status": "draft", "title": "Sampling distribution of a mean", "topics": ["mathematics", "statistics", "probability", "sampling distribution", "standard error", "repeated sampling", "with replacement"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Sampling distribution of a mean

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:sampling-distribution; revision 0.1.0-draft. Setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. Expression: $X_i\in\{2,4,8,10\},\quad P(X_i=x)=\tfrac14.\quad\bar X=\frac1n\sum_{i=1}^{n}X_i,\quad E[\bar X]=6,\quad\operatorname{Var}(\bar X)=\frac{10}{n},\quad \operatorname{SE}(\bar X)=\sqrt{10/n}.$. Conditions required for a defined value (a case may test their violation): Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

## Schema Version

0.1.0

## Id

math:concept:sampling-distribution

## Slug

sampling-distribution

## Type

concept

## Title

Sampling distribution of a mean

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

- sampling distribution
- standard error
- repeated sampling
- with replacement

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.

## Meaning

A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.

## Prerequisites

- required:
  - math:concept:population-sample
  - math:concept:expected-value
  - math:concept:variance
- helpful:
  []
- depth:
  []

## Definition

- setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
- formal latex: X_i\in\{2,4,8,10\},\quad P(X_i=x)=\tfrac14.\quad\bar X=\frac1n\sum_{i=1}^{n}X_i,\quad E[\bar X]=6,\quad\operatorname{Var}(\bar X)=\frac{10}{n},\quad \operatorname{SE}(\bar X)=\sqrt{10/n}.
- signature:
  - n: Number of independent draws.
  - SE(X̄): Standard deviation of the sample mean, in kg.
- conditions:
  - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:sampling

## Grammar

- pronunciation: Sampling distribution of a mean
- expression latex: X_i\in\{2,4,8,10\},\quad P(X_i=x)=\tfrac14.\quad\bar X=\frac1n\sum_{i=1}^{n}X_i,\quad E[\bar X]=6,\quad\operatorname{Var}(\bar X)=\frac{10}{n},\quad \operatorname{SE}(\bar X)=\sqrt{10/n}.
- formation rule: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: n
    - role: Number of independent draws.
    - type: Declared mathematical quantity
  - Item:
    - token: SE(X̄)
    - role: Standard deviation of the sample mean, in kg.
    - type: Declared mathematical quantity
- ast:
  - id: ast:sampling-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:sampleSize
      - kind: variable
      - type: Declared model input
      - symbol: n
      - scope ref: scope:sampling-distribution:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. SE(X̄) = σ/√n
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:sampleSize
  - scopes:
    - Item:
      - id: scope:sampling-distribution:expression
      - kind: modelExpression
      - free variables:
        - n
      - domain condition: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - n: sampleSize
  - SE(X̄): output

## Properties

- Item:
  - claim: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - conditions: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - derivation: A single draw has variance 10 kg² and standard error √10 kg.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:sampling-distribution:one-draw

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
  - target: math:concept:population-sample
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses population sample.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:expected-value
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses expected value.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:variance
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses variance.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:sampling-distribution:one-draw
  - title: One parcel is one observation
  - role: applied_model
  - question: One parcel is one observation under the stated inputs?
  - setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - assumptions:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - inputs:
    - sampleSize: 1
  - steps:
    - Item:
      - index: 1
      - expression: sampleSize=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: A single draw has variance 10 kg² and standard error √10 kg.
      - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - result:
    - exact: A single draw has variance 10 kg² and standard error √10 kg.
  - interpretation: A single draw has variance 10 kg² and standard error √10 kg.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 3.1622776601683795}
  - limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - preset:
    - sampleSize: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- Item:
  - id: math:example:sampling-distribution:two-draws
  - title: Average two parcels
  - role: applied_model
  - question: Average two parcels under the stated inputs?
  - setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - assumptions:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - inputs:
    - sampleSize: 2
  - steps:
    - Item:
      - index: 1
      - expression: sampleSize=2
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: There are 16 equally likely ordered pairs; the mean has variance 5 kg².
      - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - result:
    - exact: There are 16 equally likely ordered pairs; the mean has variance 5 kg².
  - interpretation: There are 16 equally likely ordered pairs; the mean has variance 5 kg².
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 2.23606797749979}
  - limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - preset:
    - sampleSize: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- Item:
  - id: math:example:sampling-distribution:three-draws
  - title: Average three parcels
  - role: applied_model
  - question: Average three parcels under the stated inputs?
  - setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - assumptions:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - inputs:
    - sampleSize: 3
  - steps:
    - Item:
      - index: 1
      - expression: sampleSize=3
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: There are 64 equally likely ordered triples; standard error is √(10/3) kg.
      - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - result:
    - exact: There are 64 equally likely ordered triples; standard error is √(10/3) kg.
  - interpretation: There are 64 equally likely ordered triples; standard error is √(10/3) kg.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.8257418583505538}
  - limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - preset:
    - sampleSize: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- Item:
  - id: math:example:sampling-distribution:four-draws
  - title: Halve the standard error
  - role: applied_model
  - question: Halve the standard error under the stated inputs?
  - setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - assumptions:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - inputs:
    - sampleSize: 4
  - steps:
    - Item:
      - index: 1
      - expression: sampleSize=4
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: There are 256 ordered samples; standard error is √2.5 kg.
      - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - result:
    - exact: There are 256 ordered samples; standard error is √2.5 kg.
  - interpretation: There are 256 ordered samples; standard error is √2.5 kg.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.5811388300841898}
  - limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - preset:
    - sampleSize: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
- Item:
  - id: math:example:sampling-distribution:same-center
  - title: Keep the population center
  - role: applied_model
  - question: Keep the population center under the stated inputs?
  - setting: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - assumptions:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - inputs:
    - sampleSize: 2
  - steps:
    - Item:
      - index: 1
      - expression: sampleSize=2
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The probability-weighted mean of the sample means remains (2+4+8+10)/4=6 kg.
      - reason: A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.
  - result:
    - exact: The probability-weighted mean of the sample means remains (2+4+8+10)/4=6 kg.
  - interpretation: The probability-weighted mean of the sample means remains (2+4+8+10)/4=6 kg.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 2.23606797749979}
  - limits: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - preset:
    - sampleSize: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
    - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

## Interactive

- component id: component:sampling-distribution
- renderer id: sampling-distribution-visual-model
- renderer version: 1
- model id: sampling-distribution-visual-model
- model revision: 1
- expression id: ast:sampling-distribution:expression
- interaction status: implemented
- description: See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.
- controls:
  - Item:
    - id: sampleSize
    - type: number
    - default: 2
    - min: 1
    - max: 4
    - step: 1
- expected cases:
  - Item:
    - input:
      - sampleSize: 1
    - status: valid
    - output: 3.1622776601683795
  - Item:
    - input:
      - sampleSize: 2
    - status: valid
    - output: 2.23606797749979
  - Item:
    - input:
      - sampleSize: 3
    - status: valid
    - output: 1.8257418583505538
  - Item:
    - input:
      - sampleSize: 4
    - status: valid
    - output: 1.5811388300841898
  - Item:
    - input:
      - sampleSize: 0
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 2
    - status: invalid_parameters
- compute: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample. SE(X̄) = σ/√n
- numeric tolerance: 1e-10
- invariants:
  - Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
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
  - prompt: How does taking four draws instead of one change the standard error of the mean?
  - answer: Four draws reduce standard error from √10 to √(10/4)=√2.5 kg, exactly half. The expected mean remains 6 kg. No normal approximation is needed.
- Item:
  - prompt: What is outside this demonstration?
  - answer: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.

## Representations

- Item:
  - kind: geometry
  - description: See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.
- Item:
  - kind: graph
  - description: A discrete graph places standard error at n=1,2,3,4. No fractional draw counts are evaluated.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: Why is an average steadier than one parcel?
  - mapping: See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.
  - limitations: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - evidence kind: constructed_example
  - example ref: math:example:sampling-distribution:one-draw
- Item:
  - context: Average two parcels
  - mapping: There are 16 equally likely ordered pairs; the mean has variance 5 kg².
  - limitations: Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.
  - evidence kind: constructed_example
  - example ref: math:example:sampling-distribution:two-draws

## Source Refs

- source:inference:sampling

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:sampling. [Penn State STAT 500 · Sampling Distributions](https://online.stat.psu.edu/stat500/Lesson04). Locator: Lesson 4: sampling distributions and the sample mean. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
