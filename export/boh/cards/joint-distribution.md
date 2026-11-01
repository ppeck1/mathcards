---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:joint-distribution", "id": "math:concept:joint-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:joint-distribution", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e0fa79998025e7dcfc3f4b6c89db8836f353c074b1b1939b75df00bb10568c4a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a541497a6cece59e98845d0c3bb5b77ca6616a969976e85c07806797dddd7b92"}, "purpose": "Read book presence and a lamp together, then connect the four joint masses to row and column marginals.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a541497a6cece59e98845d0c3bb5b77ca6616a969976e85c07806797dddd7b92", "status": "draft", "title": "Joint probability distributions", "topics": ["mathematics", "probability", "information", "joint distribution", "joint probability mass function", "joint PMF", "bivariate discrete distribution"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Joint probability distributions

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:joint-distribution; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad p_X(x)=\sum_y p_{xy},\quad p_Y(y)=\sum_x p_{xy},\quad P(X=x\mid Y=y)=p_{xy}/p_Y(y)\ (p_Y(y)>0).$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. Scope: This finite family is a binary symmetric channel, not an arbitrary joint-table editor. The primary result is the book/on joint mass p₁₁. A selected impossible lamp state has no conditional distribution.

## Schema Version

0.1.0

## Id

math:concept:joint-distribution

## Slug

joint-distribution

## Type

concept

## Title

Joint probability distributions

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-01T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- joint distribution
- joint probability mass function
- joint PMF
- bivariate discrete distribution

## Branches

- probability
- information

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Read book presence and a lamp together, then connect the four joint masses to row and column marginals.

## Meaning

A joint distribution assigns probabilities to pairs of random-variable values. Summing out one variable gives a marginal distribution; dividing a positive-probability slice gives a conditional distribution.

## Prerequisites

- required:
  - math:concept:probability-distribution
- helpful:
  - math:concept:conditional-probability
- depth:
  - math:concept:conditional-entropy
  - math:concept:mutual-information

## Definition

- setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- formal latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad p_X(x)=\sum_y p_{xy},\quad p_Y(y)=\sum_x p_{xy},\quad P(X=x\mid Y=y)=p_{xy}/p_Y(y)\ (p_Y(y)>0).
- signature:
  - X: Binary book-presence random variable: 0 empty, 1 book.
  - Y: Binary sensor-lamp random variable: 0 off, 1 on.
  - q: Prior probability that a book is present.
  - e: Symmetric channel flip probability, the same for each input state.
  - yₛ: Selected observed lamp value, either 0 or 1.
  - p₀₀: Joint probability of an empty tray and lamp off.
  - p₀₁: Joint probability of an empty tray and lamp on.
  - p₁₀: Joint probability of a book and lamp off.
  - p₁₁: Joint probability of a book and lamp on.
  - p X(x): Marginal probability P(X=x), after summing over Y.
  - p Y(y): Marginal probability P(Y=y), after summing over X.
  - P(X=x|Y=y): Conditional probability in a positive-probability lamp column.
  - pᵢⱼ: Joint probability P(X=i,Y=j), with book index first and lamp index second.
  - H(X,Y): Entropy of the complete pair of random variables, measured in bits.
- conditions:
  - X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements.
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
- domain notes: This finite family is a binary symmetric channel, not an arbitrary joint-table editor. The primary result is the book/on joint mass p₁₁. A selected impossible lamp state has no conditional distribution.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:washington:joint-conditional
  - source:mit:conditional-information

## Grammar

- pronunciation: Joint probability distributions
- expression latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad p_X(x)=\sum_y p_{xy},\quad p_Y(y)=\sum_x p_{xy},\quad P(X=x\mid Y=y)=p_{xy}/p_Y(y)\ (p_Y(y)>0).
- formation rule: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution.
- precedence: Multiply the prior by a channel probability to form a joint cell. Add cells to form marginals. Normalize only positive-probability conditioning columns, then apply base-two entropy formulas.
- symbols:
  - Item:
    - token: X
    - role: Binary book-presence random variable: 0 empty, 1 book.
    - type: Binary random variable
  - Item:
    - token: Y
    - role: Binary sensor-lamp random variable: 0 off, 1 on.
    - type: Binary random variable
  - Item:
    - token: q
    - role: Prior probability that a book is present.
    - type: Dimensionless probability
  - Item:
    - token: e
    - role: Symmetric channel flip probability, the same for each input state.
    - type: Dimensionless probability
  - Item:
    - token: yₛ
    - role: Selected observed lamp value, either 0 or 1.
    - type: Selected binary observed value
  - Item:
    - token: p₀₀
    - role: Joint probability of an empty tray and lamp off.
    - type: Dimensionless probability
  - Item:
    - token: p₀₁
    - role: Joint probability of an empty tray and lamp on.
    - type: Dimensionless probability
  - Item:
    - token: p₁₀
    - role: Joint probability of a book and lamp off.
    - type: Dimensionless probability
  - Item:
    - token: p₁₁
    - role: Joint probability of a book and lamp on.
    - type: Dimensionless probability
  - Item:
    - token: p_X(x)
    - role: Marginal probability P(X=x), after summing over Y.
    - type: Dimensionless probability
  - Item:
    - token: p_Y(y)
    - role: Marginal probability P(Y=y), after summing over X.
    - type: Dimensionless probability
  - Item:
    - token: P(X=x|Y=y)
    - role: Conditional probability in a positive-probability lamp column.
    - type: Dimensionless probability
  - Item:
    - token: pᵢⱼ
    - role: Joint probability P(X=i,Y=j), with book index first and lamp index second.
    - type: Dimensionless probability
  - Item:
    - token: H(X,Y)
    - role: Entropy of the complete pair of random variables, measured in bits.
    - type: Information quantity in bits
- ast:
  - id: ast:joint-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite channel rule
      - ref: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution.
    - Item:
      - id: n:bookChance
      - kind: variable
      - type: Declared model input or inspection selection
      - symbol: q
      - scope ref: scope:joint-distribution:expression
    - Item:
      - id: n:bound-bookChance
      - kind: apply
      - type: Declared channel reading
      - function: n:rule
      - argument: n:bookChance
    - Item:
      - id: n:errorChance
      - kind: variable
      - type: Declared model input or inspection selection
      - symbol: e
      - scope ref: scope:joint-distribution:expression
    - Item:
      - id: n:bound-errorChance
      - kind: apply
      - type: Declared channel reading
      - function: n:bound-bookChance
      - argument: n:errorChance
    - Item:
      - id: n:observed
      - kind: variable
      - type: Declared model input or inspection selection
      - symbol: yₛ
      - scope ref: scope:joint-distribution:expression
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared channel reading
      - function: n:bound-errorChance
      - argument: n:observed
  - scopes:
    - Item:
      - id: scope:joint-distribution:expression
      - kind: modelExpression
      - free variables:
        - q
        - e
        - yₛ
      - domain condition: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- parse errors:
  - Item:
    - input: Read p₁₁ as P(X=1|Y=1)
    - status: conditioning error
    - reason: p₁₁ is a joint mass; the conditional probability divides it by P(Y=1) when that marginal is positive.
  - Item:
    - input: Normalize a column whose marginal is zero
    - status: zero-denominator error
    - reason: An impossible observation does not define a conditional distribution.
- ast coverage: A typed application outline of a two-probability channel family and a selected observation; this is not an arbitrary probability-expression parser.
- output symbol bindings:
  - q: bookChance
  - e: errorChance
  - yₛ: observed
  - p₀₀: p00
  - p₀₁: p01
  - p₁₀: p10
  - p₁₁: p11

## Properties

- Item:
  - claim: The complete joint mass is one.
  - conditions: For 0≤q,e≤1.
  - derivation: The four cells sum to (1−q)((1−e)+e)+q(e+(1−e))=1.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:joint-distribution:balanced-lamp
- Item:
  - claim: At e=1/2, the lamp and book presence are independent.
  - conditions: Use the same e=1/2 in both channel rows.
  - derivation: Each lamp value has marginal 1/2 and each joint cell equals its book marginal times 1/2.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:joint-distribution:independent-lamp

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
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: A joint distribution is a distribution on ordered pairs rather than on one count.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:conditional-probability
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: A positive-probability lamp column gives a conditional distribution after normalization.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:conditional-entropy
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: The joint table supplies the slice probabilities used by averaged conditional entropy.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:mutual-information
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: The complete joint distribution determines dependence and mutual information.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:joint-distribution:balanced-lamp
  - title: Read book and lamp together
  - role: applied_model
  - question: With q=1/2 and e=1/10, what is the chance of both a book and lamp on?
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
      - expression: p₀₀=9/20; p₀₁=1/20; p₁₀=1/20; p₁₁=9/20.
      - reason: Multiply the book prior by its row’s channel probability.
    - Item:
      - index: 2
      - expression: P(X=1,Y=1)=q(1−e)=(1/2)(9/10)=9/20=0.45.
      - reason: Read the joint event at the book/on cell.
  - result:
    - exact: P(X=1,Y=1)=9/20=0.45.
  - interpretation: The cell is part of the whole distribution; it is not the chance of a book after conditioning on a lamp.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The four masses add to 20/20; each lamp marginal is 10/20.
  - limits: Joint and conditional probabilities answer different questions.
  - preset:
    - bookChance: 0.5
    - errorChance: 0.1
    - observed: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
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
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:joint-distribution:independent-lamp
  - title: Recognize an uninformative lamp
  - role: applied_model
  - question: What happens at e=1/2 when the book prior is q=1/4?
  - setting: Library return-tray and sensor model from the formal setting.
  - assumptions:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - inputs:
    - bookChance: 0.25
    - errorChance: 0.5
    - observed: 1
  - steps:
    - Item:
      - index: 1
      - expression: p₀₀=p₀₁=3/8; p₁₀=p₁₁=1/8.
      - reason: The lamp splits each book state evenly.
    - Item:
      - index: 2
      - expression: p₁₁=(1/4)(1/2)=P(X=1)P(Y=1); the same factorization holds in every cell.
      - reason: Check probability independence by the full joint table.
  - result:
    - exact: P(X=1,Y=1)=1/8 and X ⟂ Y.
  - interpretation: Reading the lamp does not change the chance that a book is present.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Both positive lamp columns normalize to book probabilities (3/4,1/4).
  - limits: A matching single cell alone would not establish independence; every cell is checked here.
  - preset:
    - bookChance: 0.25
    - errorChance: 0.5
    - observed: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:joint-distribution:perfect-lamp
  - title: Keep a perfect indicator on the diagonal
  - role: applied_model
  - question: What joint distribution does a perfect lamp give at q=3/4?
  - setting: Library return-tray and sensor model from the formal setting.
  - assumptions:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - inputs:
    - bookChance: 0.75
    - errorChance: 0
    - observed: 1
  - steps:
    - Item:
      - index: 1
      - expression: e=0 ⇒ p₀₁=p₁₀=0.
      - reason: The channel never flips the input.
    - Item:
      - index: 2
      - expression: p₀₀=1/4; p₁₁=3/4.
      - reason: The remaining mass sits on the diagonal Y=X.
  - result:
    - exact: P(X=1,Y=1)=3/4.
  - interpretation: The lamp reports book presence exactly in this model.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Each nonzero joint cell equals its book marginal and all mass lies on Y=X.
  - limits: A specified perfect channel is a mathematical boundary case.
  - preset:
    - bookChance: 0.75
    - errorChance: 0
    - observed: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:joint-distribution:impossible-observation
  - title: Keep the whole model valid at a missing column
  - role: applied_model
  - question: If a book is certain and the lamp is perfect, can the lamp-off column be normalized?
  - setting: Library return-tray and sensor model from the formal setting.
  - assumptions:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - inputs:
    - bookChance: 1
    - errorChance: 0
    - observed: 0
  - steps:
    - Item:
      - index: 1
      - expression: p₀₀=p₀₁=p₁₀=0; p₁₁=1.
      - reason: Book and lamp are both certainly one.
    - Item:
      - index: 2
      - expression: P(Y=0)=0; P(X=x|Y=0) has a zero denominator.
      - reason: Leave the selected conditional distribution undefined rather than inventing it.
  - result:
    - exact: P(X=1,Y=1)=1; conditioning on Y=0 is undefined.
  - interpretation: A zero-probability conditioning selection does not invalidate the joint distribution.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The joint masses remain nonnegative with total one, and the lamp-on column is still defined.
  - limits: No conditional claim is made about a lamp state assigned probability zero.
  - preset:
    - bookChance: 1
    - errorChance: 0
    - observed: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.

## Interactive

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

## Prompts

- Item:
  - prompt: Is lamp on the same event as book and lamp on?
  - answer: No. The lamp marginal adds both book states in that column; the joint event selects one cell.
- Item:
  - prompt: Can a valid joint distribution contain an impossible observation?
  - answer: Yes. Its zero column remains valid joint data but cannot be normalized into a conditional distribution.

## Representations

- Item:
  - kind: geometry
  - description: The four joint masses change on a common probability scale; readable marginal totals and the selected lamp column retain their relationship to the same cells.
- Item:
  - kind: graph
  - description: Plot the book/on joint probability against channel error e, holding the book prior q fixed. The horizontal coordinate is a model probability parameter, not a continuous book outcome.
- Item:
  - kind: substitution
  - description: Follow the same prior and channel error through the joint cells into the declared primary result.

## Applications

- Item:
  - context: Library return-tray sensor
  - mapping: Read book presence and a lamp together, then connect the four joint masses to row and column marginals.
  - limitations: Only two book states and two lamp states are modeled.
  - evidence kind: constructed_example
  - example ref: math:example:joint-distribution:balanced-lamp
- Item:
  - context: Sum rows and columns
  - mapping: The lamp-on probability differs from the book prior because the channel can flip either input.
  - limitations: The two variables need not have the same marginal distribution.
  - evidence kind: constructed_example
  - example ref: math:example:joint-distribution:biased-tray

## Source Refs

- source:washington:joint-conditional
- source:mit:conditional-information

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.31.0: Added a modular tray/lamp story, joint and conditional readings, Geometry and Graph, five original examples and twelve fixtures.

## Referenced source registry

- Source ID: source:washington:joint-conditional. [Yen-Chi Chen, UW STAT 512, Lecture 1: Introduction to Probability and Statistics](https://faculty.washington.edu/yenchic/20A_stat512/Lec1_probability.html). Locator: Page heading identifies 2022 Autumn. Conditional Distribution defines discrete joint PMF, marginal sums and conditional ratios; Independence gives joint factorization. The Bayes section requires a positive conditioning-event probability.. Verification: Definition-level sections inspected 2026-11-01 on the author’s university publication. Supports the stated finite definitions, not independent review or measured sensor behavior. The later multivariate CDF display is not used.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.

- Source ID: source:mit:conditional-information. [MIT 6.441 Information Theory, Spring 2016, Conditional Entropy and Mutual Information](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, Definitions 1.2–1.3, printed page 8: joint and conditional entropy. Section 2.3, Definition 2.3 and Theorems 2.3–2.4, printed pages 23–24: symmetry, nonnegativity, independence, entropy identities and average versus per-observation conditioning. Binary symmetric channel example, printed page 26 (PDF index 25).. Verification: Definition-level material inspected 2026-11-01 on the official university publication. Supports the finite information identities and channel family, not independent mathematical review or empirical validation of the original sensor scenario.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.
