---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:binomial-distribution", "id": "math:concept:binomial-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:binomial-distribution", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ec3a81e75abfa149222e722b16256b0bd0f3367311ea45f19f638e92ff1b1811"}, "purpose": "Connect trial probability to the full set of count masses and one selected count.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ec3a81e75abfa149222e722b16256b0bd0f3367311ea45f19f638e92ff1b1811", "status": "draft", "title": "Binomial counts", "topics": ["mathematics", "probability", "statistics", "binomial distribution", "Bernoulli trials", "number of successes", "binomial probability"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Binomial counts

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:binomial-distribution; revision 0.1.0-draft. Setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k. Expression: $K\sim\operatorname{Bin}(n,p),\quad P(K=k)=\binom{n}{k} p^k(1-p)^{n-k},\quad E[K]=np,\quad\operatorname{Var}(K)=n p (1-p).$. Conditions required for a defined value (a case may test their violation): Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k. Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.

## Schema Version

0.1.0

## Id

math:concept:binomial-distribution

## Slug

binomial-distribution

## Type

concept

## Title

Binomial counts

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

- binomial distribution
- Bernoulli trials
- number of successes
- binomial probability

## Branches

- probability
- statistics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Connect trial probability to the full set of count masses and one selected count.

## Meaning

A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.

## Prerequisites

- required:
  - math:concept:probability-distribution
  - math:concept:expected-value
- helpful:

- depth:


## Definition

- setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
- formal latex: K\sim\operatorname{Bin}(n,p),\quad P(K=k)=\binom{n}{k} p^k(1-p)^{n-k},\quad E[K]=np,\quad\operatorname{Var}(K)=n p (1-p).
- signature:
  - p: Common sticker chance on each independent trial.
  - k: Selected whole sticker count.
- conditions:
  - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:binomial

## Grammar

- pronunciation: Binomial counts
- expression latex: K\sim\operatorname{Bin}(n,p),\quad P(K=k)=\binom{n}{k} p^k(1-p)^{n-k},\quad E[K]=np,\quad\operatorname{Var}(K)=n p (1-p).
- formation rule: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: p
    - role: Common sticker chance on each independent trial.
    - type: Declared mathematical quantity
  - Item:
    - token: k
    - role: Selected whole sticker count.
    - type: Declared mathematical quantity
- ast:
  - id: ast:binomial-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:chance
      - kind: variable
      - type: Declared model input
      - symbol: p
      - scope ref: scope:binomial-distribution:expression
    - Item:
      - id: n:trials
      - kind: variable
      - type: Declared model input
      - symbol: trials
      - scope ref: scope:binomial-distribution:expression
    - Item:
      - id: n:count
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:binomial-distribution:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k. P(K=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ
    - Item:
      - id: n:bound-chance
      - kind: apply
      - type: Partially applied model
      - function: n:rule
      - argument: n:chance
    - Item:
      - id: n:bound-trials
      - kind: apply
      - type: Partially applied model
      - function: n:bound-chance
      - argument: n:trials
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-trials
      - argument: n:count
  - scopes:
    - Item:
      - id: scope:binomial-distribution:expression
      - kind: modelExpression
      - free variables:
        - p
        - trials
        - k
      - domain condition: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - p: chance
  - k: count

## Properties

- Item:
  - claim: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - conditions: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - derivation: C(8,4)/2⁸=70/256.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:binomial-distribution:four-of-eight

## History

- status: source_gap
- claims:

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
- Item:
  - target: math:concept:expected-value
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses expected value.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:binomial-distribution:four-of-eight
  - title: Choose the central count
  - role: applied_model
  - question: Choose the central count under the stated inputs?
  - setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - assumptions:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - inputs:
    - chance: 0.5
    - trials: 8
    - count: 4
  - steps:
    - Item:
      - index: 1
      - expression: chance=0.5; trials=8; count=4
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: C(8,4)/2⁸=70/256.
      - reason: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - result:
    - exact: C(8,4)/2⁸=70/256.
  - interpretation: C(8,4)/2⁸=70/256.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.2734375}
  - limits: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - preset:
    - chance: 0.5
    - trials: 8
    - count: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
- Item:
  - id: math:example:binomial-distribution:no-chance
  - title: Zero stickers certain
  - role: applied_model
  - question: Zero stickers certain under the stated inputs?
  - setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - assumptions:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - inputs:
    - chance: 0
    - trials: 8
    - count: 0
  - steps:
    - Item:
      - index: 1
      - expression: chance=0; trials=8; count=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=0 the zero count has probability one.
      - reason: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - result:
    - exact: At p=0 the zero count has probability one.
  - interpretation: At p=0 the zero count has probability one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1}
  - limits: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - preset:
    - chance: 0
    - trials: 8
    - count: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
- Item:
  - id: math:example:binomial-distribution:all-certain
  - title: All stickers certain
  - role: applied_model
  - question: All stickers certain under the stated inputs?
  - setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - assumptions:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - inputs:
    - chance: 1
    - trials: 8
    - count: 8
  - steps:
    - Item:
      - index: 1
      - expression: chance=1; trials=8; count=8
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: At p=1 count eight has probability one.
      - reason: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - result:
    - exact: At p=1 count eight has probability one.
  - interpretation: At p=1 count eight has probability one.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1}
  - limits: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - preset:
    - chance: 1
    - trials: 8
    - count: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
- Item:
  - id: math:example:binomial-distribution:outside-support
  - title: More stickers than packets
  - role: applied_model
  - question: More stickers than packets under the stated inputs?
  - setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - assumptions:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - inputs:
    - chance: 0.5
    - trials: 4
    - count: 5
  - steps:
    - Item:
      - index: 1
      - expression: chance=0.5; trials=4; count=5
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Count five cannot occur in four trials, so its mass is zero.
      - reason: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - result:
    - exact: Count five cannot occur in four trials, so its mass is zero.
  - interpretation: Count five cannot occur in four trials, so its mass is zero.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - preset:
    - chance: 0.5
    - trials: 4
    - count: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
- Item:
  - id: math:example:binomial-distribution:one-of-four
  - title: A less symmetric law
  - role: applied_model
  - question: A less symmetric law under the stated inputs?
  - setting: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - assumptions:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - inputs:
    - chance: 0.25
    - trials: 4
    - count: 1
  - steps:
    - Item:
      - index: 1
      - expression: chance=0.25; trials=4; count=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: C(4,1)(1/4)(3/4)³=27/64.
      - reason: A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.
  - result:
    - exact: C(4,1)(1/4)(3/4)³=27/64.
  - interpretation: C(4,1)(1/4)(3/4)³=27/64.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.421875}
  - limits: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - preset:
    - chance: 0.25
    - trials: 4
    - count: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
    - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.

## Interactive

- component id: component:binomial-distribution
- renderer id: binomial-distribution-visual-model
- renderer version: 1
- model id: binomial-distribution-visual-model
- model revision: 1
- expression id: ast:binomial-distribution:expression
- interaction status: implemented
- description: Connect trial probability to the full set of count masses and one selected count.
- controls:
  - Item:
    - id: chance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: trials
    - type: number
    - default: 8
    - min: 1
    - max: 20
    - step: 1
  - Item:
    - id: count
    - type: number
    - default: 4
    - min: 0
    - max: 20
    - step: 1
- expected cases:
  - Item:
    - input:
      - chance: 0.5
      - trials: 8
      - count: 4
    - status: valid
    - output: 0.2734375
  - Item:
    - input:
      - chance: 0
      - trials: 8
      - count: 0
    - status: valid
    - output: 1
  - Item:
    - input:
      - chance: 1
      - trials: 8
      - count: 8
    - status: valid
    - output: 1
  - Item:
    - input:
      - chance: 0.5
      - trials: 4
      - count: 5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - chance: 0.25
      - trials: 4
      - count: 1
    - status: valid
    - output: 0.421875
  - Item:
    - input:
      - chance: 0
      - trials: 8
      - count: 4
    - status: valid
    - output: 0
  - Item:
    - input:
      - chance: 1
      - trials: 8
      - count: 4
    - status: valid
    - output: 0
  - Item:
    - input:
      - chance: 0.5
      - trials: 1
      - count: 4
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - chance: 0.5
      - trials: 20
      - count: 4
    - status: valid
    - output: 0.004620552062988281
  - Item:
    - input:
      - chance: 0.5
      - trials: 8
      - count: 0
    - status: valid
    - output: 0.00390625
  - Item:
    - input:
      - chance: 0.5
      - trials: 8
      - count: 20
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - chance: -1
      - trials: 8
      - count: 4
    - status: invalid_parameters
  - Item:
    - input:
      - chance: 0.5
      - trials: 8
      - count: 4
    - status: invalid_parameters
- compute: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k. P(K=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ
- numeric tolerance: 1e-10
- invariants:
  - Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.
  - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
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
  - prompt: At p=1/2, what is the chance of exactly four stickers among eight packets?
  - answer: There are C(8,4)=70 arrangements with four stickers, each of probability (1/2)⁸. Their total is 70/256=0.2734375. The expected count is four, which is not guaranteed.
- Item:
  - prompt: What is outside this demonstration?
  - answer: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.

## Representations

- Item:
  - kind: geometry
  - description: Connect trial probability to the full set of count masses and one selected count.
- Item:
  - kind: graph
  - description: A continuous response curve plots one integer-count probability against p. It does not connect counts into a density.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: How likely are exactly four sticker packets?
  - mapping: Connect trial probability to the full set of count masses and one selected count.
  - limitations: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - evidence kind: constructed_example
  - example ref: math:example:binomial-distribution:four-of-eight
- Item:
  - context: Zero stickers certain
  - mapping: At p=0 the zero count has probability one.
  - limitations: Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.
  - evidence kind: constructed_example
  - example ref: math:example:binomial-distribution:no-chance

## Source Refs

- source:inference:binomial

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:binomial. [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm). Locator: Probability mass, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
