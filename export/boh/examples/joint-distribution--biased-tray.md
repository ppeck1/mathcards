---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:joint-distribution:biased-tray", "id": "math:example:joint-distribution:biased-tray", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:joint-distribution", "example_id": "math:example:joint-distribution:biased-tray", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a541497a6cece59e98845d0c3bb5b77ca6616a969976e85c07806797dddd7b92"}, "purpose": "Read book presence and a lamp together, then connect the four joint masses to row and column marginals.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a541497a6cece59e98845d0c3bb5b77ca6616a969976e85c07806797dddd7b92", "status": "draft", "title": "Sum rows and columns", "topics": ["mathematics", "probability", "information", "joint distribution", "joint probability mass function", "joint PMF", "bivariate discrete distribution"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Sum rows and columns

Parent card: math:concept:joint-distribution; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:joint-distribution; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad p_X(x)=\sum_y p_{xy},\quad p_Y(y)=\sum_x p_{xy},\quad P(X=x\mid Y=y)=p_{xy}/p_Y(y)\ (p_Y(y)>0).$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. Scope: This finite family is a binary symmetric channel, not an arbitrary joint-table editor. The primary result is the book/on joint mass p₁₁. A selected impossible lamp state has no conditional distribution.

Case unit math:example:joint-distribution:biased-tray. Setting: Library return-tray and sensor model from the formal setting. Inputs: {"bookChance": 0.75, "errorChance": 0.25, "observed": "0"}. Result: {"exact": "P(X=1,Y=1)=9/16; lamp marginals are 3/8 and 5/8."}. Limits: The two variables need not have the same marginal distribution.

## Complete worked case

- id: math:example:joint-distribution:biased-tray
- title: Sum rows and columns
- role: applied_model
- question: With q=3/4 and e=1/4, what are the joint masses and lamp marginals?
- setting: Library return-tray and sensor model from the formal setting.
- assumptions:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- inputs:
  - bookChance: 0.75
  - errorChance: 0.25
  - observed: 0
- steps:
  - Item:
    - index: 1
    - expression: p₀₀=3/16; p₀₁=1/16; p₁₀=3/16; p₁₁=9/16.
    - reason: Apply the same flip probability to both book states.
  - Item:
    - index: 2
    - expression: P(Y=0)=3/16+3/16=3/8; P(Y=1)=1/16+9/16=5/8.
    - reason: Marginalization adds the two book states in each lamp column.
- result:
  - exact: P(X=1,Y=1)=9/16; lamp marginals are 3/8 and 5/8.
- interpretation: The lamp-on probability differs from the book prior because the channel can flip either input.
- independent check:
  - method: Separate exact arithmetic or structural check
  - expected: The book row sums are 1/4 and 3/4; both lamp column totals sum to one.
- limits: The two variables need not have the same marginal distribution.
- preset:
  - bookChance: 0.75
  - errorChance: 0.25
  - observed: 0
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.

## Written exploration recipe

- component id: component:joint-distribution
- renderer id: joint-distribution-visual-model
- renderer version: 1
- model id: joint-distribution-visual-model
- model revision: 1
- expression id: ast:joint-distribution:expression
- interaction status: implemented
- description: The four joint masses change on a common probability scale; readable marginal totals and the selected lamp column retain their relationship to the same cells.
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
    - output: 0.45
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0.5
      - observed: 1
    - output: 0.25
  - Item:
    - input:
      - bookChance: 0.5
      - errorChance: 0
      - observed: 1
    - output: 0.5
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
    - output: 0.5625
  - Item:
    - input:
      - bookChance: 0.75
      - errorChance: 0.25
      - observed: 1
    - output: 0.5625
  - Item:
    - input:
      - bookChance: 1
      - errorChance: 0
      - observed: 0
    - output: 1
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
    - output: 0.125
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
- compute: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution.
- numeric tolerance: 1e-10
- invariants:
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
- limits:
  - Only two book states and two lamp states are modeled.
  - The selected lamp is an inspection choice, not a new sample or update to the joint law.
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

- Source ID: source:washington:joint-conditional. [Yen-Chi Chen, UW STAT 512, Lecture 1: Introduction to Probability and Statistics](https://faculty.washington.edu/yenchic/20A_stat512/Lec1_probability.html). Locator: Page heading identifies 2022 Autumn. Conditional Distribution defines discrete joint PMF, marginal sums and conditional ratios; Independence gives joint factorization. The Bayes section requires a positive conditioning-event probability.. Verification: Definition-level sections inspected 2026-11-01 on the author’s university publication. Supports the stated finite definitions, not independent review or measured sensor behavior. The later multivariate CDF display is not used.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.

- Source ID: source:mit:conditional-information. [MIT 6.441 Information Theory, Spring 2016, Conditional Entropy and Mutual Information](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, Definitions 1.2–1.3, printed page 8: joint and conditional entropy. Section 2.3, Definition 2.3 and Theorems 2.3–2.4, printed pages 23–24: symmetry, nonnegativity, independence, entropy identities and average versus per-observation conditioning. Binary symmetric channel example, printed page 26 (PDF index 25).. Verification: Definition-level material inspected 2026-11-01 on the official university publication. Supports the finite information identities and channel family, not independent mathematical review or empirical validation of the original sensor scenario.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.
