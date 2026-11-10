---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:conditional-entropy:balanced-uncertainty", "id": "math:example:conditional-entropy:balanced-uncertainty", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:conditional-entropy", "example_id": "math:example:conditional-entropy:balanced-uncertainty", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e5451e74566d6f45b480e32244387b996633242a321e205a8706aa85bb7a104d"}, "purpose": "Normalize each possible lamp reading, then average the remaining book uncertainty with the probability of that reading.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e5451e74566d6f45b480e32244387b996633242a321e205a8706aa85bb7a104d", "status": "draft", "title": "Average the two lamp readings", "topics": ["mathematics", "information", "probability", "average remaining uncertainty", "conditional information entropy", "entropy given an observation"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Average the two lamp readings

Parent card: math:concept:conditional-entropy; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:conditional-entropy; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad H(X\mid Y)=\sum_{y:p_Y(y)>0}p_Y(y)H(X\mid Y=y),\quad H(X\mid Y=y)=-\sum_x P(X=x\mid Y=y)\log_2P(X=x\mid Y=y).$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention. H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average. The finite entropy inequality H(X|Y)≤H(X) concerns the average over Y, not every selected value y. In this channel family H(Y|X) is the binary entropy of e. Scope: All displayed entropies use bits. An impossible selected observation has undefined posterior and selected entropy, while the global averaged conditional entropy remains valid.

Case unit math:example:conditional-entropy:balanced-uncertainty. Setting: Library return-tray and sensor model from the formal setting. Inputs: {"bookChance": 0.5, "errorChance": 0.1, "observed": "1"}. Result: {"exact": "H(X|Y)=−(9/10)log₂(9/10)−(1/10)log₂(1/10)≈0.468995594 bits."}. Limits: The equality of the two slice entropies uses the balanced prior.

## Complete worked case

- id: math:example:conditional-entropy:balanced-uncertainty
- title: Average the two lamp readings
- role: applied_model
- question: At q=1/2 and e=1/10, how much uncertainty about the book remains after reading the lamp?
- setting: Library return-tray and sensor model from the formal setting.
- assumptions:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- inputs:
  - bookChance: 0.5
  - errorChance: 0.1
  - observed: 1
- steps:
  - Item:
    - index: 1
    - expression: P(X=1|Y=1)=9/10; P(X=1|Y=0)=1/10.
    - reason: Normalize each positive lamp column.
  - Item:
    - index: 2
    - expression: H(X|Y=1)=H(X|Y=0)=−(9/10)log₂(9/10)−(1/10)log₂(1/10).
    - reason: Compute the entropy of each conditional distribution.
  - Item:
    - index: 3
    - expression: H(X|Y)=(1/2)H(X|Y=0)+(1/2)H(X|Y=1)≈0.468995594 bits.
    - reason: Weight the two slice entropies by their lamp probabilities.
- result:
  - exact: H(X|Y)=−(9/10)log₂(9/10)−(1/10)log₂(1/10)≈0.468995594 bits.
- interpretation: The average remaining uncertainty is less than the prior one bit.
- independent check:
  - method: Separate exact arithmetic or structural check
  - expected: The entropy chain rule gives H(X,Y)=1+H(Y|X) and H(Y)=1, so subtracting H(Y) gives the same result.
- limits: The equality of the two slice entropies uses the balanced prior.
- preset:
  - bookChance: 0.5
  - errorChance: 0.1
  - observed: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.

## Written exploration recipe

- component id: component:conditional-entropy
- renderer id: conditional-entropy-visual-model
- renderer version: 1
- model id: conditional-entropy-visual-model
- model revision: 1
- expression id: ast:conditional-entropy:expression
- interaction status: implemented
- description: The selected conditional book distribution is distinguished from the two probability-weighted slice contributions that sum to averaged conditional entropy.
- controls:
  - Item:
    - id: bookChance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: errorChance
    - type: number
    - default: 0.1
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: observed
    - type: enum
    - default: 1
    - values:
      - 0
      - 1
- expected cases:
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0.1
      - observed: 1
    - output: 0.4689955935892812
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0.5
      - observed: 1
    - output: 1.0
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0
      - observed: 1
    - output: 0.0
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 1
      - observed: 1
    - output: 0.0
  - Item:
    - input:
      - bookChance: 0.75
      - errorChance: 0.25
      - observed: 0
    - output: 0.6681222459933007
  - Item:
    - input:
      - bookChance: 0.75
      - errorChance: 0.25
      - observed: 1
    - output: 0.6681222459933007
  - Item:
    - input:
      - bookChance: 1
      - errorChance: 0
      - observed: 0
    - output: 0.0
  - Item:
    - input:
      - bookChance: 0
      - errorChance: 0
      - observed: 1
    - output: 0.0
  - Item:
    - input:
      - bookChance: 0.25
      - errorChance: 0.5
      - observed: 0
    - output: 0.8112781244591328
  - Item:
    - input:
      - bookChance: -0.01
      - errorChance: 0.1
      - observed: 1
    - status: invalid_parameters
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 1.01
      - observed: 1
    - status: invalid_parameters
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0.1
      - observed: 2
    - status: invalid_parameters
- compute: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. For each positive lamp marginal, compute the entropy of its normalized book distribution. Weight this slice entropy by the lamp marginal and add. A zero-probability conditioning column is omitted; its conditional distribution is not assigned a made-up value.
- numeric tolerance: 1e-10
- invariants:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
  - All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention.
  - H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average.
  - The finite entropy inequality H(X|Y)≤H(X) concerns the average over Y, not every selected value y. In this channel family H(Y|X) is the binary entropy of e.
- limits:
  - The channel has one shared flip probability for both input states.
  - A selected slice can be more uncertain than the prior; only the average obeys the entropy-reduction inequality.
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

- Source ID: source:mit:entropy-units. [MIT 6.441 Information Theory, Spring 2016, Course Notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, printed page 9 (PDF page index 8): entropy definition, continuous zero-probability contribution, and base-two logarithms measured in bits.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:washington:joint-conditional. [Yen-Chi Chen, UW STAT 512, Lecture 1: Introduction to Probability and Statistics](https://faculty.washington.edu/yenchic/20A_stat512/Lec1_probability.html). Locator: Page heading identifies 2022 Autumn. Conditional Distribution defines discrete joint PMF, marginal sums and conditional ratios; Independence gives joint factorization. The Bayes section requires a positive conditioning-event probability.. Verification: Definition-level sections inspected 2026-11-01 on the author’s university publication. Supports the stated finite definitions, not independent review or measured sensor behavior. The later multivariate CDF display is not used.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.

- Source ID: source:mit:conditional-information. [MIT 6.441 Information Theory, Spring 2016, Conditional Entropy and Mutual Information](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, Definitions 1.2–1.3, printed page 8: joint and conditional entropy. Section 2.3, Definition 2.3 and Theorems 2.3–2.4, printed pages 23–24: symmetry, nonnegativity, independence, entropy identities and average versus per-observation conditioning. Binary symmetric channel example, printed page 26 (PDF index 25).. Verification: Definition-level material inspected 2026-11-01 on the official university publication. Supports the finite information identities and channel family, not independent mathematical review or empirical validation of the original sensor scenario.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.
