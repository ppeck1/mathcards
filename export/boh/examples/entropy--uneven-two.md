---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:entropy:uneven-two", "id": "math:example:entropy:uneven-two", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:entropy", "example_id": "math:example:entropy:uneven-two", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f9656f7cb535f577749cf185a7bae5bd3bd790e21202e0d635f137bc09e78063"}, "purpose": "Turn probability into surprisal, weight each information value, and see how uncertainty changes with the same return-count distribution.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f9656f7cb535f577749cf185a7bae5bd3bd790e21202e0d635f137bc09e78063", "status": "draft", "title": "Compare an uneven two-outcome distribution", "topics": ["mathematics", "information", "probability", "computation", "Shannon entropy", "information entropy", "average surprisal", "entropy in bits"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Compare an uneven two-outcome distribution

Parent card: math:concept:entropy; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:entropy; revision 0.1.0-draft. Setting: An assumed library return-desk model for X, the number of books at one future check-in: X has listed values 0,1,2. Expression: $p_0=(1-q)(1-r),\quad p_1=q,\quad p_2=(1-q)r,\quad \sum_{i=0}^{2}p_i=1.\quad I(x_i)=-\log_2p_i\ (p_i>0),\quad H(X)=-\sum_{i=0}^{2}p_i\log_2p_i,\quad 0\log_2 0:=0.$. Conditions required for a defined value (a case may test their violation): The random variable X counts books received at the next library check-in and takes values 0, 1 or 2. These probabilities form an assumed teaching model, not collected library data. The controls q and r lie between 0 and 1 inclusive. q is the probability of one book; r assigns a share of the remaining probability to two books. The rest goes to zero books. The probability mass function is p₀=(1−q)(1−r), p₁=q and p₂=(1−q)r. Each mass is nonnegative and their sum is one. A zero mass removes that outcome from the support. Logarithms use base two, so self-information and entropy have units of bits. A change of logarithm base rescales the numerical value. For pᵢ=0 the entropy contribution is defined as zero by continuity; its self-information is not evaluated as an ordinary finite numerical value. For three listed outcome values, 0≤H(X)≤log₂3. The upper bound is reached when all three masses are 1/3; a single unit mass gives zero entropy. Scope: This lesson uses finite Shannon entropy of a discrete distribution. It does not implement continuous differential entropy, physical entropy, conditional entropy or a coding algorithm.

Case unit math:example:entropy:uneven-two. Setting: Library return-desk model from the formal setting. Inputs: {"oneChance": 0, "twoShare": 0.25}. Result: {"exact": "H(X)=(3/4)log₂(4/3)+1/2 bits, approximately 0.811278 bits."}. Limits: The zero-probability middle term contributes zero; do not attempt to evaluate its logarithm numerically.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:discrete-pmf. [Introductory Statistics 2e, 4.1 Probability Distribution Function (PDF) for a Discrete Random Variable](https://openstax.org/books/introductory-statistics-2e/pages/4-1-probability-distribution-function-pdf-for-a-discrete-random-variable). Locator: Section 4.1: discrete random variables, probability masses between zero and one inclusive, and total mass one. The lesson calls this a probability mass function to distinguish it from a continuous density.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:stanford:discrete-entropy. [John Duchi, Stanford Statistics 311, Lecture Notes on Statistics and Information Theory](https://stanford.edu/class/stats311/lecture-notes.pdf). Locator: December 6, 2023 edition, printed pages 12–15: natural-log convention, finite discrete entropy, uniform distributions and the finite-alphabet upper bound. The lesson converts the natural-log formula and bound to base two by change of base.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:mit:entropy-units. [MIT 6.441 Information Theory, Spring 2016, Course Notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, printed page 9 (PDF page index 8): entropy definition, continuous zero-probability contribution, and base-two logarithms measured in bits.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.
