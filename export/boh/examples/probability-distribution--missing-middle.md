---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:probability-distribution:missing-middle", "id": "math:example:probability-distribution:missing-middle", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:probability-distribution", "example_id": "math:example:probability-distribution:missing-middle", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "af7159c6ad7d19a497bacb1e813c0e976aec438cb128aa614f078ca1a624b3a6"}, "purpose": "Assign probability mass to each possible return count and watch a complete distribution change while its total stays one.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "af7159c6ad7d19a497bacb1e813c0e976aec438cb128aa614f078ca1a624b3a6", "status": "draft", "title": "Give the middle outcome zero probability", "topics": ["mathematics", "probability", "information", "probability mass function", "PMF", "finite distribution", "support of a distribution"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Give the middle outcome zero probability

Parent card: math:concept:probability-distribution; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:probability-distribution; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. A probability mass is dimensionless. Bar positions are whole book counts and bar heights are masses; no probability is assigned to points between the listed outcomes. Scope: This is a probability mass function on three listed values, not a probability density. The live primary result is P(X=2), one part of the full distribution.

Case unit math:example:probability-distribution:missing-middle. Setting: Library return-desk model from the formal setting. Inputs: {"oneChance": 0, "twoShare": 0.5}. Result: {"exact": "P(X=0)=P(X=2)=1/2; P(X=1)=0."}. Limits: Do not connect mass bars into a probability density between integer outcomes.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
