---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:probability", "id": "math:concept:probability", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:probability", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e72fd40b0d1c76a4fb4fe45d452c4a63c7aa809043ffb0295ec49e119d35ea49"}, "purpose": "Connect a single success probability to the distribution of a six-trial count.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e72fd40b0d1c76a4fb4fe45d452c4a63c7aa809043ffb0295ec49e119d35ea49", "status": "draft", "title": "Probability & expectation", "topics": ["mathematics", "probability", "modeling", "binomial distribution", "expected successes"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Probability & expectation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:probability; revision 0.1.0-draft. Setting: Connect a single success probability to the distribution of a six-trial count. Expression: $X\sim\operatorname{Binomial}(6,p),\quad E[X]=6p$. Conditions required for a defined value (a case may test their violation): Use exactly six Bernoulli trials, each with two outcomes. Trials are independent and share the same fixed success probability 0≤p≤1. The output is expectation; the distribution describes possible integer outcomes. Scope: The only adjustable parameter is chance=p. The seven bars show P(X=k)=C(6,k)pᵏ(1−p)^(6−k), with endpoint distributions handled directly.

## Schema Version

0.1.0

## Id

math:concept:probability

## Slug

probability

## Type

concept

## Title

Probability & expectation

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- binomial distribution
- expected successes

## Branches

- probability
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Connect a single success probability to the distribution of a six-trial count.

## Meaning

One slider moves probability mass between seven possible counts. The mean marks the balance point of that distribution, not a guaranteed outcome.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:probability:seeds
  - title: Six seeds in separate pots
  - role: applied_model
  - question: Suppose each of six seeds germinates independently with probability 0.5. What count should a grower expect on average?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
  - inputs:
    - chance: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: E(Iᵢ)=1(0.5)+0(0.5)=0.5
      - reason: Represent each pot with a success indicator.
    - Item:
      - index: 2
      - expression: E(X)=E(I₁+⋯+I₆)=6(0.5)=3
      - reason: Add the expected contributions.
  - result:
    - exact: 3 expected germinations
  - interpretation: The mean is an average over repeated six-pot batches, not a promise about one batch.
  - independent check:
    - method: Use the symmetric binomial distribution.
    - expected: The probabilities for k and 6−k match, so the center of mass is 3.
  - limits: The probability and independence are stipulated. Shared soil, temperature or seed source can violate them.
  - preset:
    - chance: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
- Item:
  - id: math:example:probability:rare
  - title: A lower germination chance
  - role: applied_model
  - question: With p=0.25, what is the expected count and chance of no germination?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
  - inputs:
    - chance: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: E(X)=6(0.25)=1.5
      - reason: Multiply the fixed number of trials by the success probability.
    - Item:
      - index: 2
      - expression: P(X=0)=(0.75)⁶=729/4096
      - reason: All six independent failures must occur.
  - result:
    - exact: 1.5 expected successes; P(X=0)=729/4096 ≈0.177979
  - interpretation: An expected count may be fractional although each realized count is an integer.
  - independent check:
    - method: Sum six Bernoulli means.
    - expected: 0.25+0.25+0.25+0.25+0.25+0.25=1.5.
  - limits: The displayed mean alone does not report the probability of a particular count.
  - preset:
    - chance: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
- Item:
  - id: math:example:probability:none
  - title: No chance of success
  - role: boundary
  - question: What distribution appears when p=0?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
  - inputs:
    - chance: 0
  - steps:
    - Item:
      - index: 1
      - expression: P(X=0)=1
      - reason: Every trial fails under this stipulated model.
    - Item:
      - index: 2
      - expression: E(X)=6(0)=0
      - reason: All probability mass is at zero.
  - result:
    - exact: 0 expected successes
  - interpretation: At this endpoint the count is certain.
  - independent check:
    - method: Inspect possible outcomes.
    - expected: The sole positive-probability batch has six failures.
  - limits: Probability zero is a model input; it should not be inferred merely from a small sample.
  - preset:
    - chance: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
- Item:
  - id: math:example:probability:all
  - title: Certain success
  - role: boundary
  - question: What distribution appears when p=1?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
  - inputs:
    - chance: 1
  - steps:
    - Item:
      - index: 1
      - expression: P(X=6)=1
      - reason: All trials succeed under this stipulated model.
    - Item:
      - index: 2
      - expression: E(X)=6(1)=6
      - reason: The mean equals the only possible count.
  - result:
    - exact: 6 expected successes
  - interpretation: The distribution collapses to its upper endpoint.
  - independent check:
    - method: Sum six certain indicators.
    - expected: 1+1+1+1+1+1=6.
  - limits: The certainty is stipulated, not a guarantee about real seeds.
  - preset:
    - chance: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
- Item:
  - id: math:example:probability:batch
  - title: Why not promise three?
  - role: interpretation
  - question: At p=0.5, how likely is exactly three successes in one batch?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.
  - inputs:
    - chance: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: C(6,3)=20
      - reason: Choose which three of the six trials succeed.
    - Item:
      - index: 2
      - expression: P(X=3)=20(0.5)³(0.5)³=20/64=5/16
      - reason: Each chosen success/failure arrangement has probability 1/64.
  - result:
    - exact: P(X=3)=5/16=0.3125
  - interpretation: The mean is 3, yet most batches do not have exactly 3 successes.
  - independent check:
    - method: Count all equally likely binary arrangements.
    - expected: There are 2⁶=64 arrangements;20 have three successes.
  - limits: Equal arrangement probabilities require p=0.5 and independence.
  - preset:
    - chance: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use exactly six Bernoulli trials, each with two outcomes.
    - Trials are independent and share the same fixed success probability 0≤p≤1.
    - The output is expectation; the distribution describes possible integer outcomes.

## Properties

- Item:
  - claim: The expected count is 6p.
  - status: algebraic derivation
  - conditions: Use six indicators each with success probability p.
  - derivation: E(X)=ΣE(Iᵢ)=6p.
- Item:
  - claim: The seven probabilities sum to 1.
  - status: algebraic derivation
  - conditions: Use the binomial model with 0≤p≤1.
  - derivation: Σ C(6,k)pᵏ(1−p)^(6−k)=(p+(1−p))⁶=1.

## Prompts

- Item:
  - prompt: Can 1.5 seeds germinate?
  - answer: A realized count is an integer. An expected count of 1.5 is an average over repeated batches.
- Item:
  - prompt: Do all six trials need to be independent for the mean formula?
  - answer: Linearity gives 6p even without independence when the six marginal probabilities equal p. Independence is needed for the binomial distribution drawn here.

## Representations

- Item:
  - kind: symbolic
  - description: A binomial probability rule describes the counts;6p locates their mean.
- Item:
  - kind: geometric
  - description: Seven bars change continuously with p; a mean marker moves from count 0 tocount 6.

## Applications

- Item:
  - context: Plan an ideal six-pot germination batch.
  - mapping: Six independent chances of 0.5 give expected count 3.
  - limitations: Real germination probabilities and dependencies require evidence.
  - evidence kind: constructed_example
  - example ref: math:example:probability:seeds
- Item:
  - context: Read uncertainty beyond the mean.
  - mapping: At p=0.5, exactly three successes has probability 5/16.
  - limitations: A mean is not an assurance for one batch.
  - evidence kind: constructed_example
  - example ref: math:example:probability:batch

## Source Refs

- source:openstax:binomial-distribution

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Connect a single success probability to the distribution of a six-trial count.
- formal latex: X\sim\operatorname{Binomial}(6,p),\quad E[X]=6p
- signature:
  - p: success probability in each trial
  - X: integer success count from 0 through 6
  - E[X]: expected success count across repetitions
- conditions:
  - Use exactly six Bernoulli trials, each with two outcomes.
  - Trials are independent and share the same fixed success probability 0≤p≤1.
  - The output is expectation; the distribution describes possible integer outcomes.
- domain notes: The only adjustable parameter is chance=p. The seven bars show P(X=k)=C(6,k)pᵏ(1−p)^(6−k), with endpoint distributions handled directly.
- proof status: Write X as a sum of six indicators and use linearity of expectation. Independence supplies the stated binomial distribution.
- source refs:
  - source:openstax:binomial-distribution

## Grammar

- pronunciation: For six independent trials with success probability p, the expected count is six times p.
- expression latex: X\sim\operatorname{Binomial}(6,p),\quad E[X]=6p
- formation rule: The only model parameter is chance=p; trial count is fixed at 6. Output=6*p. Distribution[k]=C(6,k)*p^k*(1-p)^(6-k) for k=0…6; handle p=0 and p=1 by point masses.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: p
    - role: success probability in each trial
    - type: Real quantity in declared setting
  - Item:
    - token: X
    - role: integer success count from 0 through 6
    - type: Real quantity in declared setting
  - Item:
    - token: E[X]
    - role: expected success count across repetitions
    - type: Real quantity in declared setting
- ast:
  - id: ast:probability:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:chance
      - kind: variable
      - symbol: p
      - type: Probability
      - scope ref: scope:probability
    - Item:
      - id: n:six
      - kind: functionRef
      - ref: p →6p
      - type: Probability → ExpectedCount
    - Item:
      - id: n:output
      - kind: apply
      - function: n:six
      - argument: n:chance
      - type: ExpectedCount
  - scopes:
    - Item:
      - id: scope:probability
      - kind: modelExpression
      - free variables:
        - p
        - X
        - E[X]
      - domain condition: Use exactly six Bernoulli trials, each with two outcomes.; Trials are independent and share the same fixed success probability 0≤p≤1.; The output is expectation; the distribution describes possible integer outcomes.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: probability-visual-model
- renderer id: probability-visual-model
- renderer version: 1.0.0
- model id: probability-visual-model
- model revision: 1.0.0
- expression id: ast:probability:expression
- interaction status: implemented
- description: Seven bars change continuously with p; a mean marker moves from count 0 tocount 6.
- controls:
  - Item:
    - id: chance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - slider min: 0
    - slider max: 1
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - chance: 0.5
    - output: 3.0
  - Item:
    - input:
      - chance: 0.25
    - output: 1.5
  - Item:
    - input:
      - chance: 0
    - output: 0
  - Item:
    - input:
      - chance: 1
    - output: 6
  - Item:
    - input:
      - chance: 0.8
    - output: 4.800000000000001
  - Item:
    - input:
      - chance: 0.3333333333333333
    - output: 2.0
  - Item:
    - input:
      - chance: 1.01
    - status: invalid_parameters
- compute: The only model parameter is chance=p; trial count is fixed at 6. Output=6*p. Distribution[k]=C(6,k)*p^k*(1-p)^(6-k) for k=0…6; handle p=0 and p=1 by point masses.
- numeric tolerance: 1e-10
- invariants:
  - The output is between 0 and 6.
  - At p=0 only count 0 has probability 1; at p=1 only count 6 does.
  - The probability-weighted mean of the seven bars equals 6p.
- limits:
  - No random trial is needed to draw this exact model distribution.
  - The expected count is not a guaranteed realized count.
  - The binomial distribution assumes independence and identical success probabilities.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

## Referenced source registry

- Source ID: source:openstax:binomial-distribution. [Introductory Statistics2e,4.3 Binomial Distribution](https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution). Locator: Fixed independent identical Bernoulli trials; count probabilities and mean np. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
