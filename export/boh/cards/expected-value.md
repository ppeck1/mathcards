---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:expected-value", "id": "math:concept:expected-value", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:expected-value", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "4be949bce51ef6c52be9222fbc60762da88b086e8149b58a6c95e8ba8ad78ae7"}, "purpose": "Follow each probability-weighted book count into the expected value and the moving balance point.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "4be949bce51ef6c52be9222fbc60762da88b086e8149b58a6c95e8ba8ad78ae7", "status": "draft", "title": "Expected value", "topics": ["mathematics", "probability", "statistics", "modeling", "expectation", "probability-weighted mean", "mean of a random variable", "balance point"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Expected value

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:expected-value; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad \mu=\mathbb E[X]=\sum_{i=0}^{2}x_i p_i=0p_0+1p_1+2p_2=q+2(1-q)r.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. The weighted contribution xᵢpᵢ has units of books; its sum μ=E[X] has the same units. Zero-book probability affects the balance although its weighted value is zero. A long-run average interpretation requires an appropriate repeated sampling model. Independent repetitions with this fixed finite distribution supply one such setting; expectation itself is defined by the weighted sum. Scope: The primary output is an expected book count in [0,2], not a probability or a promised next result. For this bounded random variable the weighted sum always exists.

## Schema Version

0.1.0

## Id

math:concept:expected-value

## Slug

expected-value

## Type

concept

## Title

Expected value

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- expectation
- probability-weighted mean
- mean of a random variable
- balance point

## Branches

- probability
- statistics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow each probability-weighted book count into the expected value and the moving balance point.

## Meaning

The expected value of a finite random variable is the sum of each outcome value multiplied by its probability. It is a probability-weighted mean, can be fractional for integer outcomes, and need not itself be in the support.

## Prerequisites

- required:
  - math:concept:probability-distribution
- helpful:
  - math:concept:probability
  - math:concept:population-sample
- depth:
  - math:concept:variance

## Definition

- setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- formal latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad \mu=\mathbb E[X]=\sum_{i=0}^{2}x_i p_i=0p_0+1p_1+2p_2=q+2(1-q)r.
- signature:
  - X: Random number of books at the next check-in.
  - xᵢ: One of the three outcome values 0, 1 or 2 books.
  - pᵢ: Probability P(X=xᵢ) assigned to outcome xᵢ.
  - q: Probability of exactly one book.
  - r: Share of the probability left after one-book outcomes, assigned to two books.
  - p₀: Probability of zero books.
  - p₁: Probability of one book.
  - p₂: Probability of two books.
  - E[X]: Expected number of books under this distribution.
  - μ: The same probability-weighted mean E[X].
  - xᵢpᵢ: Weighted contribution of outcome xᵢ to the mean.
- conditions:
  - The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data.
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - The weighted contribution xᵢpᵢ has units of books; its sum μ=E[X] has the same units. Zero-book probability affects the balance although its weighted value is zero.
  - A long-run average interpretation requires an appropriate repeated sampling model. Independent repetitions with this fixed finite distribution supply one such setting; expectation itself is defined by the weighted sum.
- domain notes: The primary output is an expected book count in [0,2], not a probability or a promised next result. For this bounded random variable the weighted sum always exists.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:openstax:discrete-pmf
  - source:openstax:expected-value

## Grammar

- pronunciation: Expected value
- expression latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad \mu=\mathbb E[X]=\sum_{i=0}^{2}x_i p_i=0p_0+1p_1+2p_2=q+2(1-q)r.
- formation rule: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Multiply each outcome xᵢ by pᵢ and add: E[X]=0p₀+1p₁+2p₂=q+2(1−q)r books.
- precedence: Construct all three probability masses before weighting their outcome values. Addition combines the weighted contributions, not the unweighted book counts.
- symbols:
  - Item:
    - token: X
    - role: Random number of books at the next check-in.
    - type: Random variable with book-count values
  - Item:
    - token: xᵢ
    - role: One of the three outcome values 0, 1 or 2 books.
    - type: Whole book count
  - Item:
    - token: pᵢ
    - role: Probability P(X=xᵢ) assigned to outcome xᵢ.
    - type: Dimensionless probability
  - Item:
    - token: q
    - role: Probability of exactly one book.
    - type: Dimensionless probability
  - Item:
    - token: r
    - role: Share of the probability left after one-book outcomes, assigned to two books.
    - type: Dimensionless probability
  - Item:
    - token: p₀
    - role: Probability of zero books.
    - type: Dimensionless probability
  - Item:
    - token: p₁
    - role: Probability of one book.
    - type: Dimensionless probability
  - Item:
    - token: p₂
    - role: Probability of two books.
    - type: Dimensionless probability
  - Item:
    - token: E[X]
    - role: Expected number of books under this distribution.
    - type: Expected book count
  - Item:
    - token: μ
    - role: The same probability-weighted mean E[X].
    - type: Expected book count
  - Item:
    - token: xᵢpᵢ
    - role: Weighted contribution of outcome xᵢ to the mean.
    - type: Expected book count
- ast:
  - id: ast:expected-value:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:oneChance
      - kind: variable
      - type: Declared model input
      - symbol: q
      - scope ref: scope:expected-value:expression
    - Item:
      - id: n:twoShare
      - kind: variable
      - type: Declared model input
      - symbol: r
      - scope ref: scope:expected-value:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite probability rule
      - ref: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Multiply each outcome xᵢ by pᵢ and add: E[X]=0p₀+1p₁+2p₂=q+2(1−q)r books.
    - Item:
      - id: n:bound-q
      - kind: apply
      - type: Partially applied probability rule
      - function: n:rule
      - argument: n:oneChance
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-q
      - argument: n:twoShare
  - scopes:
    - Item:
      - id: scope:expected-value:expression
      - kind: modelExpression
      - free variables:
        - q
        - r
      - domain condition: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- parse errors:
  - Item:
    - input: E[X]=(0+1+2)/3 for every distribution
    - status: weighting error
    - reason: That unweighted average assumes equal masses. The correct mean uses each actual probability.
  - Item:
    - input: The next check-in returns 1.25 books
    - status: interpretation error
    - reason: An expected count can be fractional while every realized count is whole.
- ast coverage: A typed application outline of the two-parameter family; this is not a parser for arbitrary random variables or probability expressions.
- output symbol bindings:
  - q: oneChance
  - r: twoShare
  - p₀: p0
  - p₁: p1
  - p₂: p2
  - E[X]: mean
  - μ: mean

## Properties

- Item:
  - claim: The mean lies between the smallest and largest values in the support.
  - conditions: The masses are nonnegative and sum to one.
  - derivation: A probability-weighted sum is a convex combination of the outcome values.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:expected-value:fractional-planning-mean
- Item:
  - claim: Distinct distributions can have the same mean.
  - conditions: Compare q=1 with q=0,r=1/2.
  - derivation: A certain one-book result and an equal split of zero and two books each give E[X]=1.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:expected-value:same-mean-different-shape

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
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: Its full probability mass function supplies the weights used in this lesson.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:entropy
  - type: supports
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: The same distribution has a separate uncertainty reading in bits.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: The existing binomial example is one family of discrete probability distributions.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:expected-value:fractional-planning-mean
  - title: Plan for a fractional average
  - role: applied_model
  - question: With probabilities (1/8,1/2,3/8), what is the expected number of books?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.5
    - twoShare: 0.75
  - steps:
    - Item:
      - index: 1
      - expression: 0(1/8)=0; 1(1/2)=1/2; 2(3/8)=3/4.
      - reason: Multiply each outcome value by its probability.
    - Item:
      - index: 2
      - expression: E[X]=0+1/2+3/4=5/4 books.
      - reason: Add the weighted contributions.
  - result:
    - exact: E[X]=μ=5/4 books = 1.25 books.
  - interpretation: The balance point lies between one and two even though a single check-in returns a whole count.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: At μ=5/4 the weighted offsets sum to (−5/4)(1/8)+(−1/4)(1/2)+(3/4)(3/8)=0.
  - limits: The expected count is not a possible fractional realized return.
  - preset:
    - oneChance: 0.5
    - twoShare: 0.75
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:expected-value:lower-two-book-share
  - title: Move the balance toward zero
  - role: applied_model
  - question: With q=1/2 and r=1/4, where is the expected-value marker?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.5
    - twoShare: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: p₀=3/8; p₁=1/2; p₂=1/8.
      - reason: Move the remaining probability toward zero.
    - Item:
      - index: 2
      - expression: E[X]=0(3/8)+1(1/2)+2(1/8)=3/4 books.
      - reason: Weight the same three outcome positions.
  - result:
    - exact: E[X]=3/4 book = 0.75 book.
  - interpretation: A larger zero-book mass pulls the balance marker to the left.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The weighted offsets at μ=3/4 sum to (−3/4)(3/8)+(1/4)(1/2)+(5/4)(1/8)=0.
  - limits: The model mean is not the average of three equally weighted bar positions.
  - preset:
    - oneChance: 0.5
    - twoShare: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:expected-value:certain-mean
  - title: A certain result has its own value as its mean
  - role: applied_model
  - question: If one book is certain, does r still affect the expectation?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 1
    - twoShare: 0.9
  - steps:
    - Item:
      - index: 1
      - expression: p₀=0; p₁=1; p₂=0.
      - reason: The remainder vanishes when q=1.
    - Item:
      - index: 2
      - expression: E[X]=0(0)+1(1)+2(0)=1 book.
      - reason: Only the certain outcome contributes.
  - result:
    - exact: E[X]=1 book.
  - interpretation: Changing r has no effect while all probability is already on one book.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The minimum and maximum outcomes in the support are both one.
  - limits: The inactive r control is a property of this endpoint, not a general rule.
  - preset:
    - oneChance: 1
    - twoShare: 0.9
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:expected-value:same-mean-different-shape
  - title: Keep the mean while changing the distribution
  - role: applied_model
  - question: What is the mean of an equal chance of zero or two books?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0
    - twoShare: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: p₀=1/2; p₁=0; p₂=1/2.
      - reason: Put equal mass at the two endpoints.
    - Item:
      - index: 2
      - expression: E[X]=0(1/2)+1(0)+2(1/2)=1 book.
      - reason: The outer weighted values balance at the center.
  - result:
    - exact: E[X]=1 book, although P(X=1)=0.
  - interpretation: A mean can equal an outcome that has zero probability.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The endpoint masses have equal distance from μ=1.
  - limits: A shared mean does not determine the distribution or its entropy.
  - preset:
    - oneChance: 0
    - twoShare: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:expected-value:mostly-two
  - title: Read a mean near the upper outcome
  - role: applied_model
  - question: With q=1/5 and all remaining probability on two books, what is the mean?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.2
    - twoShare: 1
  - steps:
    - Item:
      - index: 1
      - expression: p₀=0; p₁=1/5; p₂=4/5.
      - reason: Send all remaining probability to two books.
    - Item:
      - index: 2
      - expression: E[X]=1/5+2(4/5)=9/5 books.
      - reason: Add the two positive weighted contributions.
  - result:
    - exact: E[X]=9/5 books = 1.8 books.
  - interpretation: The balance point is close to two because that outcome holds most of the mass.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Relative to two books, the expected shortfall is 1(1/5)+0(4/5)=1/5.
  - limits: An average of 1.8 does not guarantee two books at the next check-in.
  - preset:
    - oneChance: 0.2
    - twoShare: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.

## Interactive

- component id: component:expected-value
- renderer id: expected-value-visual-model
- renderer version: 1
- model id: expected-value-visual-model
- model revision: 1
- expression id: ast:expected-value:expression
- interaction status: implemented
- description: Probability masses sit at outcome positions 0,1,2 and a balance marker follows their weighted mean. Individual weighted contributions connect the formula to the result.
- controls:
  - Item:
    - id: oneChance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: twoShare
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - oneChance: 0
      - twoShare: 0
    - output: 0
  - Item:
    - input:
      - oneChance: 0
      - twoShare: 1
    - output: 2
  - Item:
    - input:
      - oneChance: 1
      - twoShare: 0.5
    - output: 1.0
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.5
    - output: 1.0
  - Item:
    - input:
      - oneChance: 0.3333333333333333
      - twoShare: 0.5
    - output: 1.0
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.75
    - output: 1.25
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.25
    - output: 0.75
  - Item:
    - input:
      - oneChance: 0.25
      - twoShare: 0.75
    - output: 1.375
  - Item:
    - input:
      - oneChance: 0
      - twoShare: 0.5
    - output: 1.0
  - Item:
    - input:
      - oneChance: -0.01
      - twoShare: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 1.01
    - status: invalid_parameters
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.5
    - status: invalid_parameters
- compute: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Multiply each outcome xᵢ by pᵢ and add: E[X]=0p₀+1p₁+2p₂=q+2(1−q)r books.
- numeric tolerance: 1e-10
- invariants:
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - The weighted contribution xᵢpᵢ has units of books; its sum μ=E[X] has the same units. Zero-book probability affects the balance although its weighted value is zero.
  - A long-run average interpretation requires an appropriate repeated sampling model. Independent repetitions with this fixed finite distribution supply one such setting; expectation itself is defined by the weighted sum.
- limits:
  - The expected value does not determine the complete distribution or guarantee any single return count.
  - A finite collection of future check-ins need not have exactly the model mean as its observed average.
- fallback: Pause to read the quantities. Worked steps, Geometry, Graph and the model-data table provide numeric and text alternatives.
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
  - prompt: Can the expected value be 1.25 books?
  - answer: Yes. An expectation is a weighted average; a realized return count is still 0, 1 or 2.
- Item:
  - prompt: Can two distributions have the same expectation?
  - answer: Yes. A certain one-book count and an equal split between zero and two books both have mean one.

## Representations

- Item:
  - kind: geometry
  - description: Probability masses sit at outcome positions 0,1,2 and a balance marker follows their weighted mean. Individual weighted contributions connect the formula to the result.
- Item:
  - kind: graph
  - description: The mean is plotted against the two-book share r while q stays fixed. This is a parameter-response graph, not a density or a history of observed returns.
- Item:
  - kind: substitution
  - description: Follow the same declared probability inputs through the expression into the labelled result.

## Applications

- Item:
  - context: Library return-desk planning
  - mapping: Follow each probability-weighted book count into the expected value and the moving balance point.
  - limitations: The expected value does not determine the complete distribution or guarantee any single return count.
  - evidence kind: constructed_example
  - example ref: math:example:expected-value:fractional-planning-mean
- Item:
  - context: Keep the mean while changing the distribution
  - mapping: A mean can equal an outcome that has zero probability.
  - limitations: A shared mean does not determine the distribution or its entropy.
  - evidence kind: constructed_example
  - example ref: math:example:expected-value:same-mean-different-shape

## Source Refs

- source:openstax:discrete-pmf
- source:openstax:expected-value

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.30.0: Added a modular library-return story, Geometry and Graph views, five original worked examples and twelve numeric fixtures.

## Referenced source registry

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:openstax:expected-value. [Introductory Statistics 2e, 4.2 Mean or Expected Value and Standard Deviation](https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation). Locator: Section 4.2: the probability-weighted mean of a discrete random variable, its expected-value formula and the difference between the model mean and a short-run result.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
