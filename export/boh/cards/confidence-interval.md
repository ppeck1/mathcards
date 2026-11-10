---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:confidence-interval", "id": "math:concept:confidence-interval", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:confidence-interval", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e882a541d4183e1b661ce908dbeed8466daa89ff01d20a384ac8e1a2d8c67094"}, "purpose": "Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e882a541d4183e1b661ce908dbeed8466daa89ff01d20a384ac8e1a2d8c67094", "status": "draft", "title": "Confidence intervals and coverage", "topics": ["mathematics", "statistics", "probability", "confidence interval", "coverage", "Clopper Pearson", "confidence level", "interval estimation"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Confidence intervals and coverage

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:confidence-interval; revision 0.1.0-draft. Setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. Expression: $K\sim\operatorname{Bin}(8,p),\quad\alpha=0.05.\quad L(0)=0,\quad U(8)=1,\quad P_{L(k)}(K\ge k)=\alpha/2\ (1\le k\le8),\quad P_{U(k)}(K\le k)=\alpha/2\ (0\le k\le7),\quad P_p\{L(K)\le p\le U(K)\}\ge0.95.$. Conditions required for a defined value (a case may test their violation): Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.

## Schema Version

0.1.0

## Id

math:concept:confidence-interval

## Slug

confidence-interval

## Type

concept

## Title

Confidence intervals and coverage

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

- confidence interval
- coverage
- Clopper Pearson
- confidence level
- interval estimation

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.

## Meaning

A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.

## Prerequisites

- required:
  - math:concept:binomial-distribution
  - math:concept:sampling-distribution
- helpful:
  []
- depth:
  []

## Definition

- setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
- formal latex: K\sim\operatorname{Bin}(8,p),\quad\alpha=0.05.\quad L(0)=0,\quad U(8)=1,\quad P_{L(k)}(K\ge k)=\alpha/2\ (1\le k\le8),\quad P_{U(k)}(K\le k)=\alpha/2\ (0\le k\le7),\quad P_p\{L(K)\le p\le U(K)\}\ge0.95.
- signature:
  - p: Fixed probability used to inspect repeated-sampling coverage.
  - k: Highlighted observed count out of eight.
  - L(k): Lower endpoint of the highlighted interval.
  - U(k): Upper endpoint of the highlighted interval.
- conditions:
  - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:interval
  - source:inference:binomial

## Grammar

- pronunciation: Confidence intervals and coverage
- expression latex: K\sim\operatorname{Bin}(8,p),\quad\alpha=0.05.\quad L(0)=0,\quad U(8)=1,\quad P_{L(k)}(K\ge k)=\alpha/2\ (1\le k\le8),\quad P_{U(k)}(K\le k)=\alpha/2\ (0\le k\le7),\quad P_p\{L(K)\le p\le U(K)\}\ge0.95.
- formation rule: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: p
    - role: Fixed probability used to inspect repeated-sampling coverage.
    - type: Declared mathematical quantity
  - Item:
    - token: k
    - role: Highlighted observed count out of eight.
    - type: Declared mathematical quantity
  - Item:
    - token: L(k)
    - role: Lower endpoint of the highlighted interval.
    - type: Declared mathematical quantity
  - Item:
    - token: U(k)
    - role: Upper endpoint of the highlighted interval.
    - type: Declared mathematical quantity
- ast:
  - id: ast:confidence-interval:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:trueChance
      - kind: variable
      - type: Declared model input
      - symbol: p
      - scope ref: scope:confidence-interval:expression
    - Item:
      - id: n:observed
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:confidence-interval:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. Pₚ{L(K) ≤ p ≤ U(K)} ≥ 0.95
    - Item:
      - id: n:bound-trueChance
      - kind: apply
      - type: Partially applied model
      - function: n:rule
      - argument: n:trueChance
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-trueChance
      - argument: n:observed
  - scopes:
    - Item:
      - id: scope:confidence-interval:expression
      - kind: modelExpression
      - free variables:
        - p
        - k
      - domain condition: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - p: trueChance
  - k: observed
  - L(k): low
  - U(k): high

## Properties

- Item:
  - claim: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - conditions: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - derivation: At p=1/2, counts 1 through 7 cover p: coverage is 254/256.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:confidence-interval:half-chance

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
  - target: math:concept:binomial-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses binomial distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:sampling-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses sampling distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:confidence-interval:half-chance
  - title: Weight the green intervals
  - role: applied_model
  - question: Weight the green intervals under the stated inputs?
  - setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - assumptions:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - inputs:
    - trueChance: 0.5
    - observed: 4
  - steps:
    - Item:
      - index: 1
      - expression: trueChance=0.5; observed=4
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=1/2, counts 1 through 7 cover p: coverage is 254/256.
      - reason: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - result:
    - exact: At p=1/2, counts 1 through 7 cover p: coverage is 254/256.
  - interpretation: At p=1/2, counts 1 through 7 cover p: coverage is 254/256.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.9921875}
  - limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - preset:
    - trueChance: 0.5
    - observed: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
- Item:
  - id: math:example:confidence-interval:zero-chance
  - title: Certain absence
  - role: applied_model
  - question: Certain absence under the stated inputs?
  - setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - assumptions:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - inputs:
    - trueChance: 0
    - observed: 0
  - steps:
    - Item:
      - index: 1
      - expression: trueChance=0; observed=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=0 only k=0 has positive probability, and its interval contains zero: coverage is one.
      - reason: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - result:
    - exact: At p=0 only k=0 has positive probability, and its interval contains zero: coverage is one.
  - interpretation: At p=0 only k=0 has positive probability, and its interval contains zero: coverage is one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.0}
  - limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - preset:
    - trueChance: 0
    - observed: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
- Item:
  - id: math:example:confidence-interval:certain-sticker
  - title: Certain presence
  - role: applied_model
  - question: Certain presence under the stated inputs?
  - setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - assumptions:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - inputs:
    - trueChance: 1
    - observed: 8
  - steps:
    - Item:
      - index: 1
      - expression: trueChance=1; observed=8
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=1 only k=8 has positive probability, and its interval contains one: coverage is one.
      - reason: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - result:
    - exact: At p=1 only k=8 has positive probability, and its interval contains one: coverage is one.
  - interpretation: At p=1 only k=8 has positive probability, and its interval contains one: coverage is one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.0}
  - limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - preset:
    - trueChance: 1
    - observed: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
- Item:
  - id: math:example:confidence-interval:rare-sticker
  - title: Check a small probability
  - role: applied_model
  - question: Check a small probability under the stated inputs?
  - setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - assumptions:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - inputs:
    - trueChance: 0.1
    - observed: 0
  - steps:
    - Item:
      - index: 1
      - expression: trueChance=0.1; observed=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=0.1, counts 0,1,2,3 cover p. Their binomial masses sum to 0.99497565.
      - reason: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - result:
    - exact: At p=0.1, counts 0,1,2,3 cover p. Their binomial masses sum to 0.99497565.
  - interpretation: At p=0.1, counts 0,1,2,3 cover p. Their binomial masses sum to 0.99497565.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.9949756500000002}
  - limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - preset:
    - trueChance: 0.1
    - observed: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
- Item:
  - id: math:example:confidence-interval:highlight-is-not-coverage
  - title: Highlight an interval that misses
  - role: applied_model
  - question: Highlight an interval that misses under the stated inputs?
  - setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - assumptions:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - inputs:
    - trueChance: 0.5
    - observed: 8
  - steps:
    - Item:
      - index: 1
      - expression: trueChance=0.5; observed=8
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: For k=8 the highlighted interval misses p=1/2, but the procedure still covers with probability 254/256.
      - reason: A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.
  - result:
    - exact: For k=8 the highlighted interval misses p=1/2, but the procedure still covers with probability 254/256.
  - interpretation: For k=8 the highlighted interval misses p=1/2, but the procedure still covers with probability 254/256.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.9921875}
  - limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - preset:
    - trueChance: 0.5
    - observed: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
    - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.

## Interactive

- component id: component:confidence-interval
- renderer id: confidence-interval-visual-model
- renderer version: 1
- model id: confidence-interval-visual-model
- model revision: 1
- expression id: ast:confidence-interval:expression
- interaction status: implemented
- description: Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.
- controls:
  - Item:
    - id: trueChance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: observed
    - type: number
    - default: 4
    - min: 0
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - trueChance: 0.5
      - observed: 4
    - status: valid
    - output: 0.9921875
  - Item:
    - input:
      - trueChance: 0
      - observed: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trueChance: 1
      - observed: 8
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trueChance: 0.1
      - observed: 0
    - status: valid
    - output: 0.9949756500000002
  - Item:
    - input:
      - trueChance: 0.5
      - observed: 8
    - status: valid
    - output: 0.9921875
  - Item:
    - input:
      - trueChance: 0
      - observed: 4
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trueChance: 1
      - observed: 4
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trueChance: 0.5
      - observed: 0
    - status: valid
    - output: 0.9921875
  - Item:
    - input:
      - trueChance: -1
      - observed: 4
    - status: invalid_parameters
  - Item:
    - input:
      - trueChance: 0.5
      - observed: 4
    - status: invalid_parameters
- compute: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. Pₚ{L(K) ≤ p ≤ U(K)} ≥ 0.95
- numeric tolerance: 1e-10
- invariants:
  - Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.
  - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
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
  - prompt: At p=1/2, what probability belongs to intervals that cover p?
  - answer: At p=1/2 only counts 0 and 8 miss. Their combined chance is 2/256, so coverage is 254/256=0.9921875. Discreteness makes this conservative procedure exceed 95%; counting green rows without probability weights gives the wrong answer.
- Item:
  - prompt: What is outside this demonstration?
  - answer: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.

## Representations

- Item:
  - kind: geometry
  - description: Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.
- Item:
  - kind: graph
  - description: Discrete masses at nine possible counts are colored by whether their intervals cover fixed p. The coverage total is probability-weighted.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: What does 95% confidence promise?
  - mapping: Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.
  - limitations: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - evidence kind: constructed_example
  - example ref: math:example:confidence-interval:half-chance
- Item:
  - context: Certain absence
  - mapping: At p=0 only k=0 has positive probability, and its interval contains zero: coverage is one.
  - limitations: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.
  - evidence kind: constructed_example
  - example ref: math:example:confidence-interval:zero-chance

## Source Refs

- source:inference:interval
- source:inference:binomial

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:interval. [NIST · Confidence intervals for a binomial proportion](https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm). Locator: Exact intervals: binomial-tail inversion. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:binomial. [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm). Locator: Probability mass, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
