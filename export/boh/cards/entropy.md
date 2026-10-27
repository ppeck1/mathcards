---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:entropy", "id": "math:concept:entropy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:entropy", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f9656f7cb535f577749cf185a7bae5bd3bd790e21202e0d635f137bc09e78063"}, "purpose": "Turn probability into surprisal, weight each information value, and see how uncertainty changes with the same return-count distribution.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f9656f7cb535f577749cf185a7bae5bd3bd790e21202e0d635f137bc09e78063", "status": "draft", "title": "Discrete entropy", "topics": ["mathematics", "information", "probability", "computation", "Shannon entropy", "information entropy", "average surprisal", "entropy in bits"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Discrete entropy

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:entropy; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad I(x_i)=-\log_2p_i\ (p_i>0),\quad H(X)=-\sum_{i=0}^{2}p_i\log_2p_i,\quad 0\log_2 0:=0.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. Logarithms use base two, so self-information and entropy have units of bits. A change of logarithm base rescales the numerical value. For pᵢ=0 the entropy contribution is defined as zero by continuity; its self-information is not evaluated as an ordinary finite numerical value. For three listed outcome values, 0≤H(X)≤log₂3. The upper bound is reached when all three masses are 1/3; a single unit mass gives zero entropy. Scope: This lesson uses finite Shannon entropy of a discrete distribution. It does not implement continuous differential entropy, physical entropy, conditional entropy or a coding algorithm.

## Schema Version

0.1.0

## Id

math:concept:entropy

## Slug

entropy

## Type

concept

## Title

Discrete entropy

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

- Shannon entropy
- information entropy
- average surprisal
- entropy in bits

## Branches

- information
- probability
- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Turn probability into surprisal, weight each information value, and see how uncertainty changes with the same return-count distribution.

## Meaning

The Shannon entropy of a finite random variable is its expected self-information. With logarithms to base two, the result is measured in bits. Certainty gives zero; equal masses maximize entropy among distributions on a fixed finite set of outcome values.

## Prerequisites

- required:
  - math:concept:probability-distribution
  - math:concept:real-logarithm
- helpful:
  - math:concept:expected-value
- depth:
  - math:concept:conditional-entropy
  - math:concept:relative-entropy

## Definition

- setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- formal latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad I(x_i)=-\log_2p_i\ (p_i>0),\quad H(X)=-\sum_{i=0}^{2}p_i\log_2p_i,\quad 0\log_2 0:=0.
- signature:
  - X: Random number of books at the next check-in.
  - xᵢ: One of the three outcome values 0, 1 or 2 books.
  - pᵢ: Probability P(X=xᵢ) assigned to outcome xᵢ.
  - q: Probability of exactly one book.
  - r: Share of the probability left after one-book outcomes, assigned to two books.
  - p₀: Probability of zero books.
  - p₁: Probability of one book.
  - p₂: Probability of two books.
  - I(xᵢ): Self-information, or surprisal, of a positive-probability outcome.
  - H(X): Expected self-information of the whole distribution.
  - log₂: Logarithm to base two.
  - −pᵢlog₂pᵢ: One outcome’s entropy contribution in bits.
- conditions:
  - The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data.
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - Logarithms use base two, so self-information and entropy have units of bits. A change of logarithm base rescales the numerical value.
  - For pᵢ=0 the entropy contribution is defined as zero by continuity; its self-information is not evaluated as an ordinary finite numerical value.
  - For three listed outcome values, 0≤H(X)≤log₂3. The upper bound is reached when all three masses are 1/3; a single unit mass gives zero entropy.
- domain notes: This lesson uses finite Shannon entropy of a discrete distribution. It does not implement continuous differential entropy, physical entropy, conditional entropy or a coding algorithm.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:stanford:discrete-entropy
  - source:mit:entropy-units
  - source:openstax:discrete-pmf

## Grammar

- pronunciation: Discrete entropy
- expression latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad I(x_i)=-\log_2p_i\ (p_i>0),\quad H(X)=-\sum_{i=0}^{2}p_i\log_2p_i,\quad 0\log_2 0:=0.
- formation rule: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. For a positive mass use I(xᵢ)=−log₂pᵢ bits. Multiply by pᵢ and add the contributions to obtain H(X). A zero-probability contribution is defined as zero by continuity.
- precedence: Compute a logarithm only for a positive mass, then negate, multiply by that mass and sum. Use the zero-term convention separately at an impossible outcome.
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
    - token: I(xᵢ)
    - role: Self-information, or surprisal, of a positive-probability outcome.
    - type: Information quantity in bits
  - Item:
    - token: H(X)
    - role: Expected self-information of the whole distribution.
    - type: Information quantity in bits
  - Item:
    - token: log₂
    - role: Logarithm to base two.
    - type: Logarithm function
  - Item:
    - token: −pᵢlog₂pᵢ
    - role: One outcome’s entropy contribution in bits.
    - type: Information quantity in bits
- ast:
  - id: ast:entropy:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:oneChance
      - kind: variable
      - type: Declared model input
      - symbol: q
      - scope ref: scope:entropy:expression
    - Item:
      - id: n:twoShare
      - kind: variable
      - type: Declared model input
      - symbol: r
      - scope ref: scope:entropy:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite probability rule
      - ref: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. For a positive mass use I(xᵢ)=−log₂pᵢ bits. Multiply by pᵢ and add the contributions to obtain H(X). A zero-probability contribution is defined as zero by continuity.
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
      - id: scope:entropy:expression
      - kind: modelExpression
      - free variables:
        - q
        - r
      - domain condition: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- parse errors:
  - Item:
    - input: Evaluate log₂0 directly in the entropy sum
    - status: endpoint error
    - reason: Use the continuous zero contribution instead of evaluating a finite logarithm at zero.
  - Item:
    - input: Read H(X) as the expected number of books
    - status: unit error
    - reason: H(X) uses bits; the mean E[X] uses books.
- ast coverage: A typed application outline of the two-parameter family; this is not a parser for arbitrary random variables or probability expressions.
- output symbol bindings:
  - q: oneChance
  - r: twoShare
  - p₀: p0
  - p₁: p1
  - p₂: p2
  - H(X): entropy

## Properties

- Item:
  - claim: Entropy is nonnegative and vanishes for a certain outcome.
  - conditions: Use finite probabilities with base-two logarithms and the zero-term convention.
  - derivation: For 0<p≤1, −log₂p≥0. A unit mass has −log₂1=0; every other term has zero mass.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:entropy:certain-return
- Item:
  - claim: Uniform masses maximize entropy on the three listed values.
  - conditions: The full probability vector has three nonnegative entries adding to one.
  - derivation: The finite entropy bound H≤log₂3 has equality at (1/3,1/3,1/3). The formal proof is in the source references; the display shows this family.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:entropy:uniform-three

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
  - target: math:concept:expected-value
  - type: supports
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: The weighted mean combines values and probabilities; it differs from uncertainty measured in bits.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:real-logarithm
  - type: supports
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: Base-two logarithms turn positive probability into self-information.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:entropy:certain-return
  - title: A certain check-in carries zero uncertainty
  - role: applied_model
  - question: How much entropy remains when one book is certain?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 1
    - twoShare: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: p₀=0; p₁=1; p₂=0.
      - reason: Find the positive-probability outcome.
    - Item:
      - index: 2
      - expression: I(1)=−log₂1=0; H(X)=1(0)=0 bits.
      - reason: Zero-probability terms contribute zero by continuity.
  - result:
    - exact: H(X)=0 bits.
  - interpretation: The model leaves no uncertainty about the next book count.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: A distribution with a single unit mass has no alternative positive-probability outcome.
  - limits: This is information entropy, not physical or thermodynamic entropy.
  - preset:
    - oneChance: 1
    - twoShare: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:entropy:two-equally-likely
  - title: Two equally likely outcomes give one bit
  - role: applied_model
  - question: What is the uncertainty when zero and two books each have probability 1/2?
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
      - expression: I(0)=I(2)=−log₂(1/2)=1 bit.
      - reason: Each positive-probability outcome has the same surprisal.
    - Item:
      - index: 2
      - expression: H(X)=(1/2)(1)+(1/2)(1)=1 bit.
      - reason: Weight and add their information contributions.
  - result:
    - exact: H(X)=1 bit.
  - interpretation: The impossible one-book outcome adds no entropy term.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: This is a uniform distribution on a two-element support, so H=log₂2=1.
  - limits: Entropy measures the distribution; it does not identify which outcome will occur.
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
  - id: math:example:entropy:middle-heavier
  - title: A heavier middle outcome lowers uncertainty
  - role: applied_model
  - question: What is H when the probability masses are 1/4,1/2,1/4?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.5
    - twoShare: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: I(0)=I(2)=2 bits; I(1)=1 bit.
      - reason: A rarer positive-probability outcome has greater surprisal.
    - Item:
      - index: 2
      - expression: H(X)=(1/4)(2)+(1/2)(1)+(1/4)(2)=3/2 bits.
      - reason: The expected information is the sum of three weighted terms.
  - result:
    - exact: H(X)=3/2 bits = 1.5 bits.
  - interpretation: All three entropy contributions equal 1/2 bit even though the middle outcome is more likely.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The three contribution areas each equal 1/2, so their total is 3/2.
  - limits: Surprisal of one outcome and average surprisal of the distribution are different quantities.
  - preset:
    - oneChance: 0.5
    - twoShare: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:entropy:uniform-three
  - title: Spread uncertainty evenly over three outcomes
  - role: applied_model
  - question: Which distribution on these outcomes maximizes entropy?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.3333333333333333
    - twoShare: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: p₀=p₁=p₂=1/3; I(xᵢ)=log₂3.
      - reason: Make all three outcomes equally likely.
    - Item:
      - index: 2
      - expression: H(X)=3(1/3)log₂3=log₂3 ≈1.584963 bits.
      - reason: Average the equal information values.
  - result:
    - exact: H(X)=log₂3 bits, approximately 1.584963 bits.
  - interpretation: For three available outcome values, the uniform distribution reaches the entropy upper bound.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The finite-alphabet bound is H≤log₂3, with equality at equal masses.
  - limits: The exact value is logarithmic; its decimal display is an approximation.
  - preset:
    - oneChance: 0.3333333333333333
    - twoShare: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:entropy:uneven-two
  - title: Compare an uneven two-outcome distribution
  - role: applied_model
  - question: What is H when zero books has mass 3/4 and two books has mass 1/4?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0
    - twoShare: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: I(0)=log₂(4/3); I(2)=2 bits.
      - reason: Compute information only for the two positive masses.
    - Item:
      - index: 2
      - expression: H(X)=(3/4)log₂(4/3)+(1/4)(2) ≈0.811278 bits.
      - reason: Weight the more surprising outcome by its smaller probability.
  - result:
    - exact: H(X)=(3/4)log₂(4/3)+1/2 bits, approximately 0.811278 bits.
  - interpretation: Unequal masses are less uncertain than an equal split on the same two outcomes.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The binary uniform bound is one bit, and this unequal pair lies below it.
  - limits: The zero-probability middle term contributes zero; do not attempt to evaluate its logarithm numerically.
  - preset:
    - oneChance: 0
    - twoShare: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.

## Interactive

- component id: component:entropy
- renderer id: entropy-visual-model
- renderer version: 1
- model id: entropy-visual-model
- model revision: 1
- expression id: ast:entropy:expression
- interaction status: implemented
- description: Each probability, positive-outcome surprisal and weighted entropy contribution remains connected; contribution sizes and their total use a shared bits scale.
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
    - output: 0.0
  - Item:
    - input:
      - oneChance: 0
      - twoShare: 1
    - output: 0.0
  - Item:
    - input:
      - oneChance: 1
      - twoShare: 0.5
    - output: 0.0
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.5
    - output: 1.5
  - Item:
    - input:
      - oneChance: 0.3333333333333333
      - twoShare: 0.5
    - output: 1.584962500721156
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.75
    - output: 1.4056390622295665
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.25
    - output: 1.4056390622295665
  - Item:
    - input:
      - oneChance: 0.25
      - twoShare: 0.75
    - output: 1.4197367178034825
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
- compute: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. For a positive mass use I(xᵢ)=−log₂pᵢ bits. Multiply by pᵢ and add the contributions to obtain H(X). A zero-probability contribution is defined as zero by continuity.
- numeric tolerance: 1e-10
- invariants:
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - Logarithms use base two, so self-information and entropy have units of bits. A change of logarithm base rescales the numerical value.
  - For pᵢ=0 the entropy contribution is defined as zero by continuity; its self-information is not evaluated as an ordinary finite numerical value.
  - For three listed outcome values, 0≤H(X)≤log₂3. The upper bound is reached when all three masses are 1/3; a single unit mass gives zero entropy.
- limits:
  - Entropy concerns uncertainty in the distribution rather than the meaning, value or book count of an outcome.
  - An entropy in bits is an average information quantity; this display does not construct codewords or assert an exact codeword length.
  - The current information model makes no thermodynamic interpretation.
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
  - prompt: Why does an impossible outcome contribute zero?
  - answer: The function −p log₂p approaches zero as positive p approaches zero; the entropy sum uses that continuous extension.
- Item:
  - prompt: Does entropy have the same units as the mean?
  - answer: No. The expected count has units of books. Base-two Shannon entropy has units of bits.

## Representations

- Item:
  - kind: geometry
  - description: Each probability, positive-outcome surprisal and weighted entropy contribution remains connected; contribution sizes and their total use a shared bits scale.
- Item:
  - kind: graph
  - description: Entropy is plotted against the one-book probability q while r stays fixed. The base-two units, current distribution and zero-term convention remain explicit.
- Item:
  - kind: substitution
  - description: Follow the same declared probability inputs through the expression into the labelled result.

## Applications

- Item:
  - context: Library return-desk planning
  - mapping: Turn probability into surprisal, weight each information value, and see how uncertainty changes with the same return-count distribution.
  - limitations: Entropy concerns uncertainty in the distribution rather than the meaning, value or book count of an outcome.
  - evidence kind: constructed_example
  - example ref: math:example:entropy:certain-return
- Item:
  - context: Spread uncertainty evenly over three outcomes
  - mapping: For three available outcome values, the uniform distribution reaches the entropy upper bound.
  - limitations: The exact value is logarithmic; its decimal display is an approximation.
  - evidence kind: constructed_example
  - example ref: math:example:entropy:uniform-three

## Source Refs

- source:stanford:discrete-entropy
- source:mit:entropy-units
- source:openstax:discrete-pmf

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.30.0: Added a modular library-return story, Geometry and Graph views, five original worked examples and twelve numeric fixtures.

## Referenced source registry

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:stanford:discrete-entropy. [John Duchi, Stanford Statistics 311, Lecture Notes on Statistics and Information Theory](https://stanford.edu/class/stats311/lecture-notes.pdf). Locator: December 6, 2023 edition, printed pages 12–15: natural-log convention, finite discrete entropy, uniform distributions and the finite-alphabet upper bound. The lesson converts the natural-log formula and bound to base two by change of base.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:mit:entropy-units. [MIT 6.441 Information Theory, Spring 2016, Course Notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, printed page 9 (PDF page index 8): entropy definition, continuous zero-probability contribution, and base-two logarithms measured in bits.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
