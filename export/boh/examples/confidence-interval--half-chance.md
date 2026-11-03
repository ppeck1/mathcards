---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:confidence-interval:half-chance", "id": "math:example:confidence-interval:half-chance", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:confidence-interval", "example_id": "math:example:confidence-interval:half-chance", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e882a541d4183e1b661ce908dbeed8466daa89ff01d20a384ac8e1a2d8c67094"}, "purpose": "Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e882a541d4183e1b661ce908dbeed8466daa89ff01d20a384ac8e1a2d8c67094", "status": "draft", "title": "Weight the green intervals", "topics": ["mathematics", "statistics", "probability", "confidence interval", "coverage", "Clopper Pearson", "confidence level", "interval estimation"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Weight the green intervals

Parent card: math:concept:confidence-interval; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:confidence-interval; revision 0.1.0-draft. Setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. Expression: $K\sim\operatorname{Bin}(8,p),\quad\alpha=0.05.\quad L(0)=0,\quad U(8)=1,\quad P_{L(k)}(K\ge k)=\alpha/2\ (1\le k\le8),\quad P_{U(k)}(K\le k)=\alpha/2\ (0\le k\le7),\quad P_p\{L(K)\le p\le U(K)\}\ge0.95.$. Conditions required for a defined value (a case may test their violation): Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.

Case unit math:example:confidence-interval:half-chance. Setting: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts. Inputs: {"observed": 4, "trueChance": 0.5}. Result: {"exact": "At p=1/2, counts 1 through 7 cover p: coverage is 254/256."}. Limits: The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:inference:interval. [NIST · Confidence intervals for a binomial proportion](https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm). Locator: Exact intervals: binomial-tail inversion. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:binomial. [NIST · Binomial Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm). Locator: Probability mass, mean and standard deviation. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
