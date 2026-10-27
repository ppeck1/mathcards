---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:expected-value:same-mean-different-shape", "id": "math:example:expected-value:same-mean-different-shape", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:expected-value", "example_id": "math:example:expected-value:same-mean-different-shape", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "4be949bce51ef6c52be9222fbc60762da88b086e8149b58a6c95e8ba8ad78ae7"}, "purpose": "Follow each probability-weighted book count into the expected value and the moving balance point.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "4be949bce51ef6c52be9222fbc60762da88b086e8149b58a6c95e8ba8ad78ae7", "status": "draft", "title": "Keep the mean while changing the distribution", "topics": ["mathematics", "probability", "statistics", "modeling", "expectation", "probability-weighted mean", "mean of a random variable", "balance point"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Keep the mean while changing the distribution

Parent card: math:concept:expected-value; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:expected-value; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad \mu=\mathbb E[X]=\sum_{i=0}^{2}x_i p_i=0p_0+1p_1+2p_2=q+2(1-q)r.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. The weighted contribution xᵢpᵢ has units of books; its sum μ=E[X] has the same units. Zero-book probability affects the balance although its weighted value is zero. A long-run average interpretation requires an appropriate repeated sampling model. Independent repetitions with this fixed finite distribution supply one such setting; expectation itself is defined by the weighted sum. Scope: The primary output is an expected book count in [0,2], not a probability or a promised next result. For this bounded random variable the weighted sum always exists.

Case unit math:example:expected-value:same-mean-different-shape. Setting: Library return-desk model from the formal setting. Inputs: {"oneChance": 0, "twoShare": 0.5}. Result: {"exact": "E[X]=1 book, although P(X=1)=0."}. Limits: A shared mean does not determine the distribution or its entropy.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:openstax:expected-value. [Introductory Statistics 2e, 4.2 Mean or Expected Value and Standard Deviation](https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation). Locator: Section 4.2: the probability-weighted mean of a discrete random variable, its expected-value formula and the difference between the model mean and a short-run result.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
