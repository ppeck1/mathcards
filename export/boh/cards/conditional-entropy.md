---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:conditional-entropy", "id": "math:concept:conditional-entropy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:conditional-entropy", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "62cf2a30cf12baf3c5dd31574006c5fb48d20988323c2282a0a80fff7554914a", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e5451e74566d6f45b480e32244387b996633242a321e205a8706aa85bb7a104d"}, "purpose": "Normalize each possible lamp reading, then average the remaining book uncertainty with the probability of that reading.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e5451e74566d6f45b480e32244387b996633242a321e205a8706aa85bb7a104d", "status": "draft", "title": "Conditional entropy", "topics": ["mathematics", "information", "probability", "average remaining uncertainty", "conditional information entropy", "entropy given an observation"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Conditional entropy

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:conditional-entropy; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad H(X\mid Y)=\sum_{y:p_Y(y)>0}p_Y(y)H(X\mid Y=y),\quad H(X\mid Y=y)=-\sum_x P(X=x\mid Y=y)\log_2P(X=x\mid Y=y).$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention. H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average. The finite entropy inequality H(X|Y)≤H(X) concerns the average over Y, not every selected value y. In this channel family H(Y|X) is the binary entropy of e. Scope: All displayed entropies use bits. An impossible selected observation has undefined posterior and selected entropy, while the global averaged conditional entropy remains valid.

## Schema Version

0.1.0

## Id

math:concept:conditional-entropy

## Slug

conditional-entropy

## Type

concept

## Title

Conditional entropy

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

- average remaining uncertainty
- conditional information entropy
- entropy given an observation

## Branches

- information
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Normalize each possible lamp reading, then average the remaining book uncertainty with the probability of that reading.

## Meaning

Conditional entropy H(X|Y) averages the entropy of X’s conditional distribution over Y. It differs from the entropy after one selected observation. Conditioning reduces finite entropy on average, although a particular observation can increase uncertainty.

## Prerequisites

- required:
  - math:concept:joint-distribution
  - math:concept:entropy
- helpful:
  - math:concept:conditional-probability
- depth:
  - math:concept:mutual-information
  - math:concept:relative-entropy

## Definition

- setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- formal latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad H(X\mid Y)=\sum_{y:p_Y(y)>0}p_Y(y)H(X\mid Y=y),\quad H(X\mid Y=y)=-\sum_x P(X=x\mid Y=y)\log_2P(X=x\mid Y=y).
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
  - H(X|Y): Average remaining uncertainty about book presence after the lamp is known.
  - H(X|Y=y): Remaining uncertainty in one defined lamp slice.
  - H(Y|X): Average remaining uncertainty in the lamp after book presence is known.
- conditions:
  - X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements.
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
  - All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention.
  - H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average.
  - The finite entropy inequality H(X|Y)≤H(X) concerns the average over Y, not every selected value y. In this channel family H(Y|X) is the binary entropy of e.
- domain notes: All displayed entropies use bits. An impossible selected observation has undefined posterior and selected entropy, while the global averaged conditional entropy remains valid.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:mit:conditional-information
  - source:washington:joint-conditional
  - source:mit:entropy-units

## Grammar

- pronunciation: Conditional entropy
- expression latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad H(X\mid Y)=\sum_{y:p_Y(y)>0}p_Y(y)H(X\mid Y=y),\quad H(X\mid Y=y)=-\sum_x P(X=x\mid Y=y)\log_2P(X=x\mid Y=y).
- formation rule: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. For each positive lamp marginal, compute the entropy of its normalized book distribution. Weight this slice entropy by the lamp marginal and add. A zero-probability conditioning column is omitted; its conditional distribution is not assigned a made-up value.
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
    - token: H(X|Y)
    - role: Average remaining uncertainty about book presence after the lamp is known.
    - type: Information quantity in bits
  - Item:
    - token: H(X|Y=y)
    - role: Remaining uncertainty in one defined lamp slice.
    - type: Information quantity in bits
  - Item:
    - token: H(Y|X)
    - role: Average remaining uncertainty in the lamp after book presence is known.
    - type: Information quantity in bits
- ast:
  - id: ast:conditional-entropy:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite channel rule
      - ref: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. For each positive lamp marginal, compute the entropy of its normalized book distribution. Weight this slice entropy by the lamp marginal and add. A zero-probability conditioning column is omitted; its conditional distribution is not assigned a made-up value.
    - Item:
      - id: n:bookChance
      - kind: variable
      - type: Declared model input or inspection selection
      - symbol: q
      - scope ref: scope:conditional-entropy:expression
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
      - scope ref: scope:conditional-entropy:expression
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
      - scope ref: scope:conditional-entropy:expression
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared channel reading
      - function: n:bound-errorChance
      - argument: n:observed
  - scopes:
    - Item:
      - id: scope:conditional-entropy:expression
      - kind: modelExpression
      - free variables:
        - q
        - e
        - yₛ
      - domain condition: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- parse errors:
  - Item:
    - input: Set H(X|Y)=H(X|Y=yₛ) for every prior
    - status: averaging error
    - reason: A selected slice is one part of the average and need not equal it.
  - Item:
    - input: Infer H(X|Y=y)≤H(X) for every observed y
    - status: scope error
    - reason: The reduction theorem is an averaged statement; a particular posterior can be more uncertain.
- ast coverage: A typed application outline of a two-probability channel family and a selected observation; this is not an arbitrary probability-expression parser.
- output symbol bindings:
  - q: bookChance
  - e: errorChance
  - yₛ: observed
  - p₀₀: p00
  - p₀₁: p01
  - p₁₀: p10
  - p₁₁: p11
  - H(X|Y): hxGivenY
  - H(X|Y=y): selectedEntropy
  - H(Y|X): hyGivenX

## Properties

- Item:
  - claim: Average conditioning cannot increase finite entropy.
  - conditions: Use finite random variables under one complete joint distribution.
  - derivation: The identity H(X)−H(X|Y)=I(X;Y) and nonnegativity of mutual information give the averaged inequality. A single slice is not the average.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:conditional-entropy:surprising-lamp-off
- Item:
  - claim: An invertible observation leaves zero remaining uncertainty.
  - conditions: The model makes X a deterministic function of Y on every positive-probability lamp column.
  - derivation: Every defined conditional book distribution has a unit mass, hence entropy zero; the average is zero.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:conditional-entropy:inverted-certainty

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:joint-distribution
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: Marginals and normalized joint columns provide the weights and conditional book distributions.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:entropy
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: Each positive-probability conditional distribution has its own finite Shannon entropy.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:mutual-information
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: Subtract averaged remaining entropy from prior entropy to obtain mutual information.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
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
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:conditional-entropy:surprising-lamp-off
  - title: A particular observation can increase uncertainty
  - role: applied_model
  - question: With q=3/4 and e=1/4, does lamp off always reduce uncertainty about a book?
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
      - expression: P(Y=0)=3/8; P(X=1|Y=0)=(3/16)/(3/8)=1/2.
      - reason: The selected lamp-off column has equal book and empty masses.
    - Item:
      - index: 2
      - expression: H(X|Y=0)=1 bit > H(X)=−(3/4)log₂(3/4)−(1/4)log₂(1/4)≈0.811278124 bits.
      - reason: A selected observation can make the posterior less certain.
    - Item:
      - index: 3
      - expression: P(Y=1)=5/8; P(X=1|Y=1)=9/10; H(X|Y)=(3/8)(1)+(5/8)(−(9/10)log₂(9/10)−(1/10)log₂(1/10))≈0.668122246 bits.
      - reason: The averaged conditional entropy includes both lamp readings, not just the surprising one.
  - result:
    - exact: Selected H(X|Y=0)=1 bit; averaged H(X|Y)≈0.668122246 bits.
  - interpretation: Average conditioning reduces entropy here even though the selected lamp-off reading increases it.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: H(X,Y)≈1.622556249 and H(Y)≈0.954434003, so their difference is approximately 0.668122246 bits.
  - limits: The inequality H(X|Y)≤H(X) concerns the average; it is not a bound on every H(X|Y=y).
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
  - id: math:example:conditional-entropy:independent-observation
  - title: Reading an independent lamp leaves the prior intact
  - role: applied_model
  - question: What is H(X|Y) at q=1/4 and e=1/2?
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
      - expression: P(X=1|Y=0)=P(X=1|Y=1)=1/4.
      - reason: An independent lamp has the same posterior in both positive columns.
    - Item:
      - index: 2
      - expression: H(X|Y)=−(1/4)log₂(1/4)−(3/4)log₂(3/4)≈0.811278124 bits=H(X).
      - reason: Averaging identical slice entropies leaves the prior entropy unchanged.
  - result:
    - exact: H(X|Y)=H(X)≈0.811278124 bits.
  - interpretation: An observation can be real without being informative about the target.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Every joint cell factorizes as P(X=x)P(Y=y); hence I(X;Y)=0.
  - limits: This is independence in the specified joint distribution, not a statement about all lamps.
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
  - id: math:example:conditional-entropy:inverted-certainty
  - title: Read a consistently inverted lamp
  - role: applied_model
  - question: At q=1/2 and e=1, how uncertain is the book after seeing the lamp?
  - setting: Library return-tray and sensor model from the formal setting.
  - assumptions:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - inputs:
    - bookChance: 0.5
    - errorChance: 1
    - observed: 1
  - steps:
    - Item:
      - index: 1
      - expression: p₀₁=p₁₀=1/2; p₀₀=p₁₁=0.
      - reason: Every lamp value is the opposite of book presence.
    - Item:
      - index: 2
      - expression: Y=1 implies X=0; Y=0 implies X=1. Each defined slice is certain, so H(X|Y)=0.
      - reason: Use the known inverse label rule instead of treating every mismatch as lost information.
  - result:
    - exact: H(X|Y)=0 bits.
  - interpretation: The labels are inverted but the book can still be inferred exactly.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: The deterministic inverse X=1−Y fixes the book in each positive lamp column.
  - limits: Literal lamp accuracy and information are different quantities.
  - preset:
    - bookChance: 0.5
    - errorChance: 1
    - observed: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:conditional-entropy:zero-weight-column
  - title: Omit an impossible observation from the average
  - role: applied_model
  - question: At q=1 and e=0, what is averaged conditional entropy when lamp off is selected?
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
      - expression: P(Y=0)=0; P(Y=1)=1. The selected distribution given Y=0 is undefined.
      - reason: Do not divide by zero or assign a made-up posterior.
    - Item:
      - index: 2
      - expression: H(X|Y=1)=0; H(X|Y)=1·0=0 bits.
      - reason: Only the positive-probability lamp column enters the average.
  - result:
    - exact: Averaged H(X|Y)=0 bits; selected H(X|Y=0) is undefined.
  - interpretation: The whole distribution has a valid averaged entropy while the selected conditioning event is impossible.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Book presence is certain before and after every possible observation, so H(X)=I(X;Y)=0.
  - limits: The zero-weight column contributes no term; its conditional distribution has not been defined as zero.
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

## Prompts

- Item:
  - prompt: Can the lamp make one observation more uncertain than the prior?
  - answer: Yes. In the biased example, lamp off makes the two book states equally likely even though the prior favors a book.
- Item:
  - prompt: What enters the average when one lamp state is impossible?
  - answer: Only positive-probability columns. The impossible column is omitted and its selected conditional entropy remains undefined.

## Representations

- Item:
  - kind: geometry
  - description: The selected conditional book distribution is distinguished from the two probability-weighted slice contributions that sum to averaged conditional entropy.
- Item:
  - kind: graph
  - description: Plot averaged H(X|Y) against symmetric channel error e, with q fixed. Selecting lamp on or off changes the inspected slice but never changes this averaged curve.
- Item:
  - kind: substitution
  - description: Follow the same prior and channel error through the joint cells into the declared primary result.

## Applications

- Item:
  - context: Library return-tray sensor
  - mapping: Normalize each possible lamp reading, then average the remaining book uncertainty with the probability of that reading.
  - limitations: The channel has one shared flip probability for both input states.
  - evidence kind: constructed_example
  - example ref: math:example:conditional-entropy:balanced-uncertainty
- Item:
  - context: A particular observation can increase uncertainty
  - mapping: Average conditioning reduces entropy here even though the selected lamp-off reading increases it.
  - limitations: The inequality H(X|Y)≤H(X) concerns the average; it is not a bound on every H(X|Y=y).
  - evidence kind: constructed_example
  - example ref: math:example:conditional-entropy:surprising-lamp-off

## Source Refs

- source:mit:conditional-information
- source:washington:joint-conditional
- source:mit:entropy-units

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.31.0: Added a modular tray/lamp story, joint and conditional readings, Geometry and Graph, five original examples and twelve fixtures.

## Referenced source registry

- Source ID: source:mit:entropy-units. [MIT 6.441 Information Theory, Spring 2016, Course Notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, printed page 9 (PDF page index 8): entropy definition, continuous zero-probability contribution, and base-two logarithms measured in bits.. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university publication. Supports the stated definitions and units, not independent mathematical review or empirical validation of the original library scenario.. Rights: Reference only. Explanations, library scenarios and worked derivations are originally authored; no source prose, exercises or diagrams copied.

- Source ID: source:washington:joint-conditional. [Yen-Chi Chen, UW STAT 512, Lecture 1: Introduction to Probability and Statistics](https://faculty.washington.edu/yenchic/20A_stat512/Lec1_probability.html). Locator: Page heading identifies 2022 Autumn. Conditional Distribution defines discrete joint PMF, marginal sums and conditional ratios; Independence gives joint factorization. The Bayes section requires a positive conditioning-event probability.. Verification: Definition-level sections inspected 2026-11-01 on the author’s university publication. Supports the stated finite definitions, not independent review or measured sensor behavior. The later multivariate CDF display is not used.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.

- Source ID: source:mit:conditional-information. [MIT 6.441 Information Theory, Spring 2016, Conditional Entropy and Mutual Information](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf). Locator: Section 1.1, Definitions 1.2–1.3, printed page 8: joint and conditional entropy. Section 2.3, Definition 2.3 and Theorems 2.3–2.4, printed pages 23–24: symmetry, nonnegativity, independence, entropy identities and average versus per-observation conditioning. Binary symmetric channel example, printed page 26 (PDF index 25).. Verification: Definition-level material inspected 2026-11-01 on the official university publication. Supports the finite information identities and channel family, not independent mathematical review or empirical validation of the original sensor scenario.. Rights: Reference only. Explanations, tray/lamp scenarios and worked derivations are originally authored; no source prose, examples or diagrams copied.
