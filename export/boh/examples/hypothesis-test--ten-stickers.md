---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:hypothesis-test:ten-stickers", "id": "math:example:hypothesis-test:ten-stickers", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hypothesis-test", "example_id": "math:example:hypothesis-test:ten-stickers", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "62cf2a30cf12baf3c5dd31574006c5fb48d20988323c2282a0a80fff7554914a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "ea60b4cdb127f0534a311684557600920285a642d638179f4dc5ba1dd71e8b80"}, "purpose": "Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ea60b4cdb127f0534a311684557600920285a642d638179f4dc5ba1dd71e8b80", "status": "draft", "title": "Cross the chosen threshold", "topics": ["mathematics", "statistics", "probability", "hypothesis test", "p value", "p-value", "null hypothesis", "significance level", "one sided test"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Cross the chosen threshold

Parent card: math:concept:hypothesis-test; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:hypothesis-test; revision 0.1.0-draft. Setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. Expression: $H_0:p=\tfrac12,\quad H_1:p>\tfrac12,\quad K\sim\operatorname{Bin}(12,\tfrac12).\quad p\text{-value}=P_{H_0}(K\ge k)=\sum_{j=k}^{12}\binom{12}{j}2^{-12}.$. Conditions required for a defined value (a case may test their violation): A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

Case unit math:example:hypothesis-test:ten-stickers. Setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. Inputs: {"observed": 10}. Result: {"exact": "The tail probability is (66+12+1)/4096=79/4096, below 0.05."}. Limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

## Complete worked case

- id: math:example:hypothesis-test:ten-stickers
- title: Cross the chosen threshold
- role: applied_model
- question: Cross the chosen threshold under the stated inputs?
- setting: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
- assumptions:
  - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- inputs:
  - observed: 10
- steps:
  - Item:
    - index: 1
    - expression: observed=10
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
    - reason: A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.
- result:
  - exact: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
- interpretation: The tail probability is (66+12+1)/4096=79/4096, below 0.05.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 0.019287109375}
- limits: The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
- preset:
  - observed: 10
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.

## Written exploration recipe

- component id: component:hypothesis-test
- renderer id: hypothesis-test-visual-model
- renderer version: 1
- model id: hypothesis-test-visual-model
- model revision: 1
- expression id: ast:hypothesis-test:expression
- interaction status: implemented
- description: Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.
- controls:
  - Item:
    - id: observed
    - type: number
    - default: 9
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - observed: 10
    - status: valid
    - output: 0.019287109375
  - Item:
    - input:
      - observed: 9
    - status: valid
    - output: 0.072998046875
  - Item:
    - input:
      - observed: 12
    - status: valid
    - output: 0.000244140625
  - Item:
    - input:
      - observed: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - observed: 6
    - status: valid
    - output: 0.61279296875
  - Item:
    - input:
      - observed: -1
    - status: invalid_parameters
  - Item:
    - input:
      - observed: 9
    - status: invalid_parameters
- compute: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k. p-value = Pₚ₀(K ≥ k)
- numeric tolerance: 1e-10
- invariants:
  - A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.
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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:inference:interval. [NIST · Confidence intervals for a binomial proportion](https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm). Locator: Exact intervals: binomial-tail inversion. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:binomial. [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm). Locator: Probability mass, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
