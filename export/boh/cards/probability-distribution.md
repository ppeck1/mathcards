---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:probability-distribution", "id": "math:concept:probability-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:probability-distribution", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "af7159c6ad7d19a497bacb1e813c0e976aec438cb128aa614f078ca1a624b3a6"}, "purpose": "Assign probability mass to each possible return count and watch a complete distribution change while its total stays one.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "af7159c6ad7d19a497bacb1e813c0e976aec438cb128aa614f078ca1a624b3a6", "status": "draft", "title": "Discrete probability distributions", "topics": ["mathematics", "probability", "information", "probability mass function", "PMF", "finite distribution", "support of a distribution"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Discrete probability distributions

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:probability-distribution; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. A probability mass is dimensionless. Bar positions are whole book counts and bar heights are masses; no probability is assigned to points between the listed outcomes. Scope: This is a probability mass function on three listed values, not a probability density. The live primary result is P(X=2), one part of the full distribution.

## Schema Version

0.1.0

## Id

math:concept:probability-distribution

## Slug

probability-distribution

## Type

concept

## Title

Discrete probability distributions

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

- probability mass function
- PMF
- finite distribution
- support of a distribution

## Branches

- probability
- information

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Assign probability mass to each possible return count and watch a complete distribution change while its total stays one.

## Meaning

A finite discrete probability distribution lists the possible values of a random variable and their probability masses. Nonnegative masses add to one. The support consists of the values with positive mass.

## Prerequisites

- required:
  - math:concept:probability
- helpful:
  - math:concept:set
  - math:concept:function
- depth:
  - math:concept:sampling-distribution

## Definition

- setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- formal latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.
- signature:
  - X: Random number of books at the next check-in.
  - xᵢ: One of the three outcome values 0, 1 or 2 books.
  - pᵢ: Probability P(X=xᵢ) assigned to outcome xᵢ.
  - q: Probability of exactly one book.
  - r: Share of the probability left after one-book outcomes, assigned to two books.
  - p₀: Probability of zero books.
  - p₁: Probability of one book.
  - p₂: Probability of two books.
- conditions:
  - The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data.
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - A probability mass is dimensionless. Bar positions are whole book counts and bar heights are masses; no probability is assigned to points between the listed outcomes.
- domain notes: This is a probability mass function on three listed values, not a probability density. The live primary result is P(X=2), one part of the full distribution.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:openstax:discrete-pmf

## Grammar

- pronunciation: Discrete probability distributions
- expression latex: p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.
- formation rule: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r.
- precedence: Form the remainder 1−q first, then split it using r and 1−r. Keep an outcome value separate from its probability.
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
- ast:
  - id: ast:probability-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:oneChance
      - kind: variable
      - type: Declared model input
      - symbol: q
      - scope ref: scope:probability-distribution:expression
    - Item:
      - id: n:twoShare
      - kind: variable
      - type: Declared model input
      - symbol: r
      - scope ref: scope:probability-distribution:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite probability rule
      - ref: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r.
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
      - id: scope:probability-distribution:expression
      - kind: modelExpression
      - free variables:
        - q
        - r
      - domain condition: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2.
- parse errors:
  - Item:
    - input: P(X=2)=r
    - status: remainder error
    - reason: r acts on the remaining probability 1−q, so P(X=2)=(1−q)r.
  - Item:
    - input: Assign probability to X=1.5 in this model
    - status: domain error
    - reason: Only counts 0,1,2 are listed; intermediate bar positions do not represent outcomes.
- ast coverage: A typed application outline of the two-parameter family; this is not a parser for arbitrary random variables or probability expressions.
- output symbol bindings:
  - q: oneChance
  - r: twoShare
  - p₀: p0
  - p₁: p1
  - p₂: p2

## Properties

- Item:
  - claim: The masses sum to one for every allowed q and r.
  - conditions: 0≤q,r≤1.
  - derivation: (1−q)(1−r)+q+(1−q)r=(1−q)+q=1.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:probability-distribution:balanced-check-in
- Item:
  - claim: A fixed outcome list may contain zero-probability values.
  - conditions: The support includes only values with positive mass.
  - derivation: At q=0,r=1/2, the middle mass vanishes while the outer masses remain positive.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:probability-distribution:missing-middle

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:expected-value
  - type: supports
  - conditions: Use each connected lesson under its own stated finite model and units.
  - reason: The weighted mean combines values and probabilities; it differs from uncertainty measured in bits.
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
  - id: math:example:probability-distribution:balanced-check-in
  - title: Build a whole probability distribution
  - role: applied_model
  - question: If q=1/2 and r=1/2, how much probability belongs to each book count?
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
      - expression: p₀=(1/2)(1/2)=1/4; p₁=1/2; p₂=(1/2)(1/2)=1/4.
      - reason: Split the probability remaining after one-book outcomes.
    - Item:
      - index: 2
      - expression: 1/4+1/2+1/4=1.
      - reason: Check that all probability mass is accounted for.
  - result:
    - exact: P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4.
  - interpretation: A bar height gives a probability; its horizontal position gives a whole book count.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The outer masses match, and together equal the one-book mass.
  - limits: A probability distribution does not reveal the next realized count.
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
  - id: math:example:probability-distribution:two-book-tilt
  - title: Give more of the remainder to two books
  - role: applied_model
  - question: With q=1/4 and r=3/4, what is the probability of two books?
  - setting: Library return-desk model from the formal setting.
  - assumptions:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - inputs:
    - oneChance: 0.25
    - twoShare: 0.75
  - steps:
    - Item:
      - index: 1
      - expression: 1−q=3/4.
      - reason: Remove the one-book mass first.
    - Item:
      - index: 2
      - expression: p₂=(3/4)(3/4)=9/16; p₀=(3/4)(1/4)=3/16; p₁=4/16.
      - reason: Allocate the remainder between zero and two books.
  - result:
    - exact: P(X=2)=9/16; the full mass vector is (3/16,4/16,9/16).
  - interpretation: Two books now has the largest individual probability.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The three sixteenths numerators sum to 16.
  - limits: r alone is not P(X=2); it acts on the remainder 1−q.
  - preset:
    - oneChance: 0.25
    - twoShare: 0.75
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
    - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
- Item:
  - id: math:example:probability-distribution:equal-masses
  - title: Make three outcomes equally likely
  - role: applied_model
  - question: Which q gives equal masses when the remainder is split evenly?
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
      - expression: q=1/3; 1−q=2/3.
      - reason: Choose the middle mass.
    - Item:
      - index: 2
      - expression: p₀=p₂=(2/3)(1/2)=1/3.
      - reason: Split the remaining mass evenly.
  - result:
    - exact: p₀=p₁=p₂=1/3.
  - interpretation: Equal bar heights represent the uniform distribution on these three outcomes.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Three masses of 1/3 sum to one.
  - limits: The displayed decimal approximation does not replace the exact fraction 1/3.
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
  - id: math:example:probability-distribution:certain-one
  - title: Concentrate every possibility on one book
  - role: applied_model
  - question: What happens to the remaining share when q=1?
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
      - expression: 1−q=0.
      - reason: No probability remains after the one-book mass.
    - Item:
      - index: 2
      - expression: p₀=0; p₁=1; p₂=0.
      - reason: Any choice of r multiplies the zero remainder.
  - result:
    - exact: P(X=1)=1; P(X=0)=P(X=2)=0.
  - interpretation: Only one book belongs to the support in this model.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Changing r cannot change a zero remainder.
  - limits: The claim of certainty belongs to the assumed model.
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
  - id: math:example:probability-distribution:missing-middle
  - title: Give the middle outcome zero probability
  - role: applied_model
  - question: Can zero and two books remain possible while one book is impossible?
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
      - expression: p₁=0; 1−q=1.
      - reason: Remove the middle outcome from the support.
    - Item:
      - index: 2
      - expression: p₀=p₂=1/2.
      - reason: Divide all probability between the two outer outcomes.
  - result:
    - exact: P(X=0)=P(X=2)=1/2; P(X=1)=0.
  - interpretation: The outcome list stays 0,1,2 while the support is only 0 and 2.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The two positive masses add to one.
  - limits: Do not connect mass bars into a probability density between integer outcomes.
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

## Interactive

- component id: component:probability-distribution
- renderer id: probability-distribution-visual-model
- renderer version: 1
- model id: probability-distribution-visual-model
- model revision: 1
- expression id: ast:probability-distribution:expression
- interaction status: implemented
- description: A fixed 100% strip and fixed-height mass bars share the same three probabilities. Positions 0,1,2 are whole book counts, while lengths and bar heights encode mass.
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
    - output: 1
  - Item:
    - input:
      - oneChance: 1
      - twoShare: 0.5
    - output: 0.0
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.5
    - output: 0.25
  - Item:
    - input:
      - oneChance: 0.3333333333333333
      - twoShare: 0.5
    - output: 0.33333333333333337
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.75
    - output: 0.375
  - Item:
    - input:
      - oneChance: 0.5
      - twoShare: 0.25
    - output: 0.125
  - Item:
    - input:
      - oneChance: 0.25
      - twoShare: 0.75
    - output: 0.5625
  - Item:
    - input:
      - oneChance: 0
      - twoShare: 0.5
    - output: 0.5
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
- compute: Use q for the one-book probability. The remaining probability is 1−q; r sends its selected share to two books and 1−r sends the rest to zero books. Thus p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r.
- numeric tolerance: 1e-10
- invariants:
  - The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books.
  - The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support.
  - A probability mass is dimensionless. Bar positions are whole book counts and bar heights are masses; no probability is assigned to points between the listed outcomes.
- limits:
  - The model has only three listed outcome values and does not fit probabilities from observations.
  - The two-book share r splits only the remainder 1−q; it is not the whole two-book probability.
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
  - prompt: Does zero probability remove a value from the displayed outcome list?
  - answer: The list can retain the label as a reference, but only positive-probability values belong to the support.
- Item:
  - prompt: Why do the masses always add to one?
  - answer: The outer masses add to (1−q)((1−r)+r)=1−q, and the middle mass is q.

## Representations

- Item:
  - kind: geometry
  - description: A fixed 100% strip and fixed-height mass bars share the same three probabilities. Positions 0,1,2 are whole book counts, while lengths and bar heights encode mass.
- Item:
  - kind: graph
  - description: Separate masses are plotted at the three outcome values. The graph does not join them into a continuous density.
- Item:
  - kind: substitution
  - description: Follow the same declared probability inputs through the expression into the labelled result.

## Applications

- Item:
  - context: Library return-desk planning
  - mapping: Assign probability mass to each possible return count and watch a complete distribution change while its total stays one.
  - limitations: The model has only three listed outcome values and does not fit probabilities from observations.
  - evidence kind: constructed_example
  - example ref: math:example:probability-distribution:balanced-check-in
- Item:
  - context: Concentrate every possibility on one book
  - mapping: Only one book belongs to the support in this model.
  - limitations: The claim of certainty belongs to the assumed model.
  - evidence kind: constructed_example
  - example ref: math:example:probability-distribution:certain-one

## Source Refs

- source:openstax:discrete-pmf

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.30.0: Added a modular library-return story, Geometry and Graph views, five original worked examples and twelve numeric fixtures.

## Referenced source registry

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
