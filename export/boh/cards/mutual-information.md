---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:mutual-information", "id": "math:concept:mutual-information", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:mutual-information", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e8dd2217d2daab51c2f597db74498ca7e2c21c769dde4c95891aafc8dc847e8", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6ef43602296c3983cb846c89887f80ea0282d14337ca65a531cb0b03e65e150a"}, "purpose": "Split book uncertainty into the part shared with the lamp and the part left after observing it.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6ef43602296c3983cb846c89887f80ea0282d14337ca65a531cb0b03e65e150a", "status": "draft", "title": "Mutual information", "topics": ["mathematics", "information", "probability", "computation", "shared information", "information about one variable from another", "average uncertainty reduction"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Mutual information

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:mutual-information; revision 0.1.0-draft. Setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp. Expression: $p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad I(X;Y)=H(X)-H(X\mid Y)=H(X)+H(Y)-H(X,Y)\geq0,\quad I(X;Y)=0\iff X\perp Y.$. Conditions required for a defined value (a case may test their violation): X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements. The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule. The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one. Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total. The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information. All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention. H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average. Mutual information is I(X;Y)=H(X)−H(X|Y)=H(Y)−H(Y|X). It is symmetric, nonnegative and at most min(H(X),H(Y)); it describes dependence, without establishing a causal direction. Scope: Mutual information summarizes the whole joint distribution, not the one selected lamp reading. It is distinct from outcome surprisal I(x). This finite dependence measure establishes no causal direction.

## Schema Version

0.1.0

## Id

math:concept:mutual-information

## Slug

mutual-information

## Type

concept

## Title

Mutual information

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

- shared information
- information about one variable from another
- average uncertainty reduction

## Branches

- information
- probability
- computation

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Split book uncertainty into the part shared with the lamp and the part left after observing it.

## Meaning

Mutual information measures dependence between two random variables. For finite variables, I(X;Y)=H(X)−H(X|Y). It is symmetric and nonnegative, and vanishes exactly when the variables are independent. A consistently inverted observation can retain full information.

## Prerequisites

- required:
  - math:concept:joint-distribution
  - math:concept:conditional-entropy
  - math:concept:entropy
- helpful:
  - math:concept:conditional-probability
- depth:
  - math:concept:relative-entropy
  - math:concept:channel-capacity

## Definition

- setting: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- formal latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad I(X;Y)=H(X)-H(X\mid Y)=H(X)+H(Y)-H(X,Y)\geq0,\quad I(X;Y)=0\iff X\perp Y.
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
  - I(X;Y): Mutual information between book presence and the lamp, measured in bits.
  - H(X): Prior uncertainty of book presence.
  - H(Y): Uncertainty of the lamp marginal.
  - H(X,Y): Joint entropy of the book and lamp pair.
  - H(X|Y): Averaged remaining book uncertainty after observing the lamp.
  - X ⟂ Y: Probability independence of book presence and the lamp.
- conditions:
  - X records presence in one library return tray: 0 means empty and 1 means a book. Y records its sensor lamp: 0 means off and 1 means on. This binary presence model differs from the preceding lesson’s three possible book counts. The channel probabilities are assumed for teaching, not fitted sensor measurements.
  - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
  - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
  - Marginal distributions come from summing rows or columns. A conditional distribution given Y=y is formed only when P(Y=y)>0; then divide the selected column by its total.
  - The selected lamp value yₛ is a view selection. Changing it does not alter the joint distribution or any averaged entropy or mutual information.
  - All logarithms in these finite information quantities use base two and the unit is bits. Terms with zero joint or marginal mass are omitted from their entropy sums using the continuous zero-term convention.
  - H(X|Y) is the probability-weighted average of the defined slice entropies H(X|Y=y). A zero-probability column has no defined conditional distribution, and is omitted from this weighted average.
  - Mutual information is I(X;Y)=H(X)−H(X|Y)=H(Y)−H(Y|X). It is symmetric, nonnegative and at most min(H(X),H(Y)); it describes dependence, without establishing a causal direction.
- domain notes: Mutual information summarizes the whole joint distribution, not the one selected lamp reading. It is distinct from outcome surprisal I(x). This finite dependence measure establishes no causal direction.
- proof status: Definition-level sources and original finite calculations; independent review pending.
- source refs:
  - source:mit:conditional-information
  - source:washington:joint-conditional
  - source:mit:entropy-units

## Grammar

- pronunciation: Mutual information
- expression latex: p_{00}=(1-q)(1-e),\quad p_{01}=(1-q)e,\quad p_{10}=qe,\quad p_{11}=q(1-e),\quad \sum_{x,y}p_{xy}=1.\quad I(X;Y)=H(X)-H(X\mid Y)=H(X)+H(Y)-H(X,Y)\geq0,\quad I(X;Y)=0\iff X\perp Y.
- formation rule: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. Compute prior entropy and averaged conditional entropy from that same joint distribution. Their difference is mutual information. The entropy chain rule gives the equivalent symmetric expression H(X)+H(Y)−H(X,Y). A deterministic inverted observation can be decoded exactly.
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
    - token: I(X;Y)
    - role: Mutual information between book presence and the lamp, measured in bits.
    - type: Information quantity in bits
  - Item:
    - token: H(X)
    - role: Prior uncertainty of book presence.
    - type: Information quantity in bits
  - Item:
    - token: H(Y)
    - role: Uncertainty of the lamp marginal.
    - type: Information quantity in bits
  - Item:
    - token: H(X,Y)
    - role: Joint entropy of the book and lamp pair.
    - type: Information quantity in bits
  - Item:
    - token: H(X|Y)
    - role: Averaged remaining book uncertainty after observing the lamp.
    - type: Information quantity in bits
  - Item:
    - token: X ⟂ Y
    - role: Probability independence of book presence and the lamp.
    - type: Independence relation
- ast:
  - id: ast:mutual-information:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried finite channel rule
      - ref: First use q and 1−q for the book-presence probabilities. Split each row with channel probabilities 1−e and e, keeping the X index first and Y index second. Sum the joint masses across the other variable to get a marginal distribution. Divide a selected lamp column by its positive marginal total to obtain the conditional distribution. Compute prior entropy and averaged conditional entropy from that same joint distribution. Their difference is mutual information. The entropy chain rule gives the equivalent symmetric expression H(X)+H(Y)−H(X,Y). A deterministic inverted observation can be decoded exactly.
    - Item:
      - id: n:bookChance
      - kind: variable
      - type: Declared model input or inspection selection
      - symbol: q
      - scope ref: scope:mutual-information:expression
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
      - scope ref: scope:mutual-information:expression
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
      - scope ref: scope:mutual-information:expression
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared channel reading
      - function: n:bound-errorChance
      - argument: n:observed
  - scopes:
    - Item:
      - id: scope:mutual-information:expression
      - kind: modelExpression
      - free variables:
        - q
        - e
        - yₛ
      - domain condition: An assumed binary library return-tray model: X records book presence and Y records the sensor lamp.
- parse errors:
  - Item:
    - input: Use I(X;Y)=H(X)−H(X|Y=yₛ)
    - status: averaging error
    - reason: Mutual information subtracts the averaged conditional entropy, not a selected slice.
  - Item:
    - input: Treat zero literal lamp accuracy as zero information
    - status: label error
    - reason: At e=1 the labels are inverted consistently and still determine book presence exactly.
- ast coverage: A typed application outline of a two-probability channel family and a selected observation; this is not an arbitrary probability-expression parser.
- output symbol bindings:
  - q: bookChance
  - e: errorChance
  - yₛ: observed
  - p₀₀: p00
  - p₀₁: p01
  - p₁₀: p10
  - p₁₁: p11
  - I(X;Y): mutualInformation
  - H(X): hx
  - H(Y): hy
  - H(X,Y): hxy
  - H(X|Y): hxGivenY

## Properties

- Item:
  - claim: Mutual information is symmetric, nonnegative and bounded by both marginal entropies.
  - conditions: Use finite random variables and their single common joint distribution.
  - derivation: The entropy identities and nonnegativity of conditional entropy give I(X;Y)=I(Y;X) and 0≤I(X;Y)≤min(H(X),H(Y)).
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:mutual-information:balanced-information
- Item:
  - claim: A one-to-one relabeling preserves full information.
  - conditions: The inverse observation rule is known and deterministic on the support.
  - derivation: At e=1, X=1−Y; each observed lamp value fixes X, so H(X|Y)=0 and I(X;Y)=H(X).
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:mutual-information:inverted-information

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
  - reason: Dependence is a property of the complete joint distribution, including both marginals.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:conditional-entropy
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: The part left after observation is averaged H(X|Y), not a selected observation entropy.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:entropy
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: Prior entropy is split into mutual information and averaged remaining entropy.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:bayes-theorem
  - type: supports
  - conditions: Use each lesson under its own stated finite model and units.
  - reason: Posterior probabilities help interpret individual observations, while mutual information averages over the joint law.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
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
  - conditions to check:
    - The prior book probability q=P(X=1) and symmetric flip probability e lie in [0,1]. The same channel rule gives P(Y≠X|X=x)=e for each possible input value x; a row with zero prior mass still has a specified channel rule.
    - The joint masses are p₀₀=(1−q)(1−e), p₀₁=(1−q)e, p₁₀=qe and p₁₁=q(1−e). The first index belongs to X and the second to Y. All four masses are nonnegative and add to one.
- Item:
  - id: math:example:mutual-information:independent-information
  - title: Find zero information in a changing lamp
  - role: applied_model
  - question: At q=1/4 and e=1/2, does a flashing lamp reveal book presence?
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
      - expression: P(X=x,Y=y)=P(X=x)P(Y=y) in all four cells.
      - reason: Check the full joint factorization for independence.
    - Item:
      - index: 2
      - expression: H(X|Y)=H(X)≈0.811278124 bits; I(X;Y)=0 bits.
      - reason: No average uncertainty is removed by reading Y.
  - result:
    - exact: I(X;Y)=0 bits.
  - interpretation: A lamp can vary while carrying no information about the target variable.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Each positive conditional distribution for X equals its marginal distribution.
  - limits: Zero information here follows from the entire modeled joint distribution, not one observed match.
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
  - id: math:example:mutual-information:perfect-information
  - title: Let the lamp identify an unbalanced target
  - role: applied_model
  - question: With q=3/4 and e=0, how much information can a perfect lamp provide?
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
      - expression: H(X)=−(3/4)log₂(3/4)−(1/4)log₂(1/4)≈0.811278124 bits.
      - reason: The book prior is not balanced and has less than one bit of uncertainty.
    - Item:
      - index: 2
      - expression: H(X|Y)=0, so I(X;Y)=H(X)≈0.811278124 bits.
      - reason: A deterministic matching lamp removes all available uncertainty.
  - result:
    - exact: I(X;Y)=−(3/4)log₂(3/4)−(1/4)log₂(1/4)≈0.811278124 bits.
  - interpretation: The information ceiling is the target’s prior entropy, not automatically one bit.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Y=X makes H(Y)=H(X)=H(X,Y), so H(X)+H(Y)−H(X,Y)=H(X).
  - limits: The result uses the stated perfect channel and prior.
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
  - id: math:example:mutual-information:inverted-information
  - title: Keep full information with reversed labels
  - role: applied_model
  - question: With q=1/2 and e=1, is information lost when the lamp is always inverted?
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
      - expression: Y=1−X; each lamp value identifies the opposite book state.
      - reason: Invert the known label rule to recover X exactly.
    - Item:
      - index: 2
      - expression: H(X)=1; H(X|Y)=0; I(X;Y)=1 bit.
      - reason: A one-to-one relabeling preserves all information about the balanced target.
  - result:
    - exact: I(X;Y)=1 bit, although P(Y=X)=0.
  - interpretation: Perfectly inverted observations remain informative when their relation to the target is known.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: Only the two off-diagonal cells have mass 1/2; both conditional book distributions are certain.
  - limits: Information is not literal label accuracy, and dependence alone establishes no causal direction.
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
  - id: math:example:mutual-information:biased-information
  - title: Use the average rather than one surprising slice
  - role: applied_model
  - question: At q=3/4 and e=1/4, how much information is shared even though lamp off makes the book uncertain?
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
      - expression: H(X)≈0.811278124; selected H(X|Y=0)=1 bit.
      - reason: Keep the selected slice separate from the global information calculation.
    - Item:
      - index: 2
      - expression: H(X|Y)≈0.668122246; I(X;Y)≈0.811278124−0.668122246≈0.143155878 bits.
      - reason: Subtract the averaged conditional entropy, not the selected one.
  - result:
    - exact: I(X;Y)≈0.143155878 bits.
  - interpretation: Selecting a different displayed lamp state leaves this joint-distribution summary unchanged.
  - independent check:
    - method: Separate exact arithmetic or structural check
    - expected: H(Y)≈0.954434003 and H(Y|X)≈0.811278124, so I(X;Y)=H(Y)−H(Y|X) gives the same value.
  - limits: Mutual information averages over all possible observations, not a single selected lamp reading.
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

## Interactive

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

## Prompts

- Item:
  - prompt: Can a perfectly inverted lamp carry all information about a book?
  - answer: Yes. If the inverse label rule is known, Y determines X exactly and no conditional uncertainty remains.
- Item:
  - prompt: Does symmetric mutual information identify which variable causes the other?
  - answer: No. Mutual information is a dependence measure and provides no causal direction on its own.

## Representations

- Item:
  - kind: geometry
  - description: A fixed bits scale splits H(X) into mutual information and averaged remaining entropy, keeping the target’s information ceiling and the observed lamp selection distinct.
- Item:
  - kind: graph
  - description: Plot I(X;Y) against channel error e with q fixed. Independence occurs at e=1/2; deterministic matching and inverted channels at e=0 and e=1 both preserve the target’s full entropy.
- Item:
  - kind: substitution
  - description: Follow the same prior and channel error through the joint cells into the declared primary result.

## Applications

- Item:
  - context: Library return-tray sensor
  - mapping: Split book uncertainty into the part shared with the lamp and the part left after observing it.
  - limitations: The model is a binary symmetric channel, not a general causal or channel-capacity estimator.
  - evidence kind: constructed_example
  - example ref: math:example:mutual-information:balanced-information
- Item:
  - context: Find zero information in a changing lamp
  - mapping: A lamp can vary while carrying no information about the target variable.
  - limitations: Zero information here follows from the entire modeled joint distribution, not one observed match.
  - evidence kind: constructed_example
  - example ref: math:example:mutual-information:independent-information

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
