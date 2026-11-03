---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:mutual-information:balanced-information", "id": "math:example:mutual-information:balanced-information", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:mutual-information", "example_id": "math:example:mutual-information:balanced-information", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6ef43602296c3983cb846c89887f80ea0282d14337ca65a531cb0b03e65e150a"}, "purpose": "Split book uncertainty into the part shared with the lamp and the part left after observing it.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6ef43602296c3983cb846c89887f80ea0282d14337ca65a531cb0b03e65e150a", "status": "draft", "title": "Split prior uncertainty into learned and remaining parts", "topics": ["mathematics", "information", "probability", "computation", "shared information", "information about one variable from another", "average uncertainty reduction"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Split prior uncertainty into learned and remaining parts

Parent card: math:concept:mutual-information; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:mutual-information; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad I(X;Y)=H(X)-H(X\mid Y)=H(X)+H(Y)-H(X,Y)\geq0,\quad I(X;Y)=0\iff X\perp Y.$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention. H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average. Mutual information is I(X;Y)=H(X)−H(X|Y)=H(Y)−H(Y|X). It is symmetric, nonnegative and at most min(H(X),H(Y)); it describes dependence, without establishing a causal direction. Scope: Mutual information summarizes the whole joint distribution, not the one selected lamp reading. It is distinct from outcome surprisal I(x). This finite dependence measure establishes no causal direction.

Case unit math:example:mutual-information:balanced-information. Setting: Library return-tray and sensor model from the formal setting. Inputs: {"bookChance": 0.5, "errorChance": 0.1, "observed": "1"}. Result: {"exact": "I(X;Y)=1+(9/10)log₂(9/10)+(1/10)log₂(1/10)≈0.531004406 bits."}. Limits: Mutual information is an averaged dependence measure, not the certainty of one prediction.

## Complete worked case

- id: math:example:mutual-information:balanced-information
- title: Split prior uncertainty into learned and remaining parts
- role: applied_model
- question: At q=1/2 and e=1/10, how much information does the lamp provide about the book?
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
    - expression: H(X)=1 bit; H(X|Y)≈0.468995594 bits.
    - reason: Use the prior entropy and averaged remaining entropy from the same joint model.
  - Item:
    - index: 2
    - expression: I(X;Y)=H(X)−H(X|Y)=1−H(Y|X)≈0.531004406 bits.
    - reason: The balanced binary symmetric channel has H(Y|X)=H(X|Y).
- result:
  - exact: I(X;Y)=1+(9/10)log₂(9/10)+(1/10)log₂(1/10)≈0.531004406 bits.
- interpretation: The two nonnegative parts add to the original one bit of uncertainty.
- independent check:
  - method: Separate exact arithmetic or structural check
  - expected: H(Y)=1 and H(X,Y)=1+H(Y|X), giving I=H(X)+H(Y)−H(X,Y).
- limits: Mutual information is an averaged dependence measure, not the certainty of one prediction.
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

- component id: component:mutual-information
- renderer id: mutual-information-visual-model
- renderer version: 1
- model id: mutual-information-visual-model
- model revision: 1
- expression id: ast:mutual-information:expression
- interaction status: implemented
- description: A fixed bits scale splits H(X) into mutual information and averaged remaining entropy, keeping the target’s information ceiling and the observed lamp selection distinct.
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
    - output: 0.5310044064107188
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0.5
      - observed: 1
    - output: 0
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0
      - observed: 1
    - output: 1.0
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 1
      - observed: 1
    - output: 1.0
  - Item:
    - input:
      - bookChance: 0.75
      - errorChance: 0.25
      - observed: 0
    - output: 0.1431558784658321
  - Item:
    - input:
      - bookChance: 0.75
      - errorChance: 0.25
      - observed: 1
    - output: 0.1431558784658321
  - Item:
    - input:
      - bookChance: 1
      - errorChance: 0
      - observed: 0
    - output: 0
  - Item:
    - input:
      - bookChance: 0
      - errorChance: 0
      - observed: 1
    - output: 0
  - Item:
    - input:
      - bookChance: 0.25
      - errorChance: 0.5
      - observed: 0
    - output: 0
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
- compute: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. Compute prior entropy and averaged conditional entropy from that same joint distribution. Their difference is mutual information. The entropy chain rule gives the equivalent symmetric expression H(X)+H(Y)−H(X,Y). A deterministic inverted observation can be decoded exactly.
- numeric tolerance: 1e-10
- invariants:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
  - All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention.
  - H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average.
  - Mutual information is I(X;Y)=H(X)−H(X|Y)=H(Y)−H(Y|X). It is symmetric, nonnegative and at most min(H(X),H(Y)); it describes dependence, without establishing a causal direction.
- limits:
  - The model is a binary symmetric channel, not a general causal or channel-capacity estimator.
  - A selected lamp reading does not change the joint-distribution summary.
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
