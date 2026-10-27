---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:recurrence", "id": "math:concept:recurrence", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:recurrence", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "cfefa2396a896f83695f34ca0f5e1d7df61ec2bd29572b5f4cbcf859b37272c9"}, "purpose": "Follow a previous volume through retention and refill into the next exact completed-round state.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "cfefa2396a896f83695f34ca0f5e1d7df61ec2bd29572b5f4cbcf859b37272c9", "status": "draft", "title": "Recurrence relations", "topics": ["mathematics", "discrete-computation", "sequences", "modeling", "recursive sequence", "retain and refill", "iterative update"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Recurrence relations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:recurrence; revision 0.1.0-draft. Setting: A first-order affine recurrence for retained water followed by a fixed refill at discrete completed rounds. Expression: $v_{k+1}=r v_k+d,\quad v_n=r^n v_0+d\sum_{j=0}^{n-1}r^j,\quad n\in\{0,\ldots,12\}.$. Conditions required for a defined value (a case may test their violation): Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres. Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve. The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds. At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero. Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially. Scope: A recurrence needs a stated rule and initial data. This executable family uses one previous state and an affine update. The finite geometric sum is empty at n=0. At r=1 the result is v₀+nd without division by 1−r.

## Schema Version

0.1.0

## Id

math:concept:recurrence

## Slug

recurrence

## Type

concept

## Title

Recurrence relations

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Bounded models, workshop stories and worked derivations are originally authored constructed examples. No production measurements or historical priority claims are presented.

## Aliases

- recursive sequence
- retain and refill
- iterative update

## Branches

- discrete-computation
- sequences
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow a previous volume through retention and refill into the next exact completed-round state.

## Meaning

A recurrence defines successive states from earlier ones and initial data. The workshop model separates retained old water from newly added water. Its numbered graph shows actual integer-round states instead of inventing fractional iterations.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:exponential-change
  - math:concept:linear-model
- depth:
  - math:concept:chaos-theory
  - math:concept:gradient-descent

## Definition

- setting: A first-order affine recurrence for retained water followed by a fixed refill at discrete completed rounds.
- formal latex: v_{k+1}=r v_k+d,\quad v_n=r^n v_0+d\sum_{j=0}^{n-1}r^j,\quad n\in\{0,\ldots,12\}.
- signature:
  - v₀: Initial volume in litres.
  - r: Fraction retained before each refill.
  - d: Litres added after retention in each completed round.
  - n: Whole number of completed rounds.
  - k: Bound integer update index.
  - vₙ: Volume after n completed rounds in litres.
  - vₙ₋₁: Previous volume before the last completed round, for n>0.
  - r vₙ₋₁: Retained contribution in the last completed round, for n>0.
- conditions:
  - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
  - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
  - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
  - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
  - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- domain notes: A recurrence needs a stated rule and initial data. This executable family uses one previous state and an affine update. The finite geometric sum is empty at n=0. At r=1 the result is v₀+nd without division by 1−r.
- proof status: Definition-level sources; restricted-family properties are author-derived. Independent review pending.
- source refs:
  - source:openstax:sequences
  - source:openstax:geometric-sequences

## Grammar

- pronunciation: Recurrence relations
- expression latex: v_{k+1}=r v_k+d,\quad v_n=r^n v_0+d\sum_{j=0}^{n-1}r^j,\quad n\in\{0,\ldots,12\}.
- formation rule: Begin at v₀. For each integer k from zero to n−1, set vₖ₊₁=r vₖ+d. Equivalently, vₙ=rⁿv₀+d∑ from j=0 to n−1 of rʲ. At n=0 return v₀; at r=1 use vₙ=v₀+nd.
- precedence: Multiply the previous state by r before adding d; repeat the complete update exactly n times.
- symbols:
  - Item:
    - token: v₀
    - role: Starting volume
    - type: Litres
  - Item:
    - token: r
    - role: Retained fraction per completed round
    - type: Unitless real fraction
  - Item:
    - token: d
    - role: Refill per completed round
    - type: Litres
  - Item:
    - token: n
    - role: Completed round count
    - type: Nonnegative integer
  - Item:
    - token: k
    - role: Update index
    - type: Bound nonnegative integer
  - Item:
    - token: vₙ
    - role: Final completed-round volume
    - type: Litres
  - Item:
    - token: vₙ₋₁
    - role: Previous volume for n>0
    - type: Litres
  - Item:
    - token: r vₙ₋₁
    - role: Retained last-transition contribution for n>0
    - type: Litres
- ast:
  - id: ast:recurrence:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:initial
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: initial
      - scope ref: scope:recurrence:expression
    - Item:
      - id: n:retention
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: retention
      - scope ref: scope:recurrence:expression
    - Item:
      - id: n:addition
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: addition
      - scope ref: scope:recurrence:expression
    - Item:
      - id: n:rounds
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: rounds
      - scope ref: scope:recurrence:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried scalar-input rule for the stated bounded family
      - ref: Begin at v₀. For each integer k from zero to n−1, set vₖ₊₁=r vₖ+d. Equivalently, vₙ=rⁿv₀+d∑ from j=0 to n−1 of rʲ. At n=0 return v₀; at r=1 use vₙ=v₀+nd.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:initial
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:retention
    - Item:
      - id: n:bound-2
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-1
      - argument: n:addition
    - Item:
      - id: n:output
      - kind: apply
      - type: Primary scalar result
      - function: n:bound-2
      - argument: n:rounds
  - scopes:
    - Item:
      - id: scope:recurrence:expression
      - kind: modelExpression
      - free variables:
        - initial
        - retention
        - addition
        - rounds
      - domain condition: Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
- parse errors:
  - Item:
    - input: Apply one update when n=0
    - status: index error
    - reason: Zero completed rounds means returning the initial state.
  - Item:
    - input: Use n=1.5 completed rounds
    - status: domain error
    - reason: The update index is discrete in this model.
  - Item:
    - input: Refill before retaining without changing the rule
    - status: order error
    - reason: r(vₖ+d) generally differs from r vₖ+d.
- ast coverage: A typed outline of the fixed executable rule. Named functions refer to the stated construction, not a general symbolic solver.
- output symbol bindings:
  - v₀: initial
  - r: retention
  - d: addition
  - n: rounds
  - vₙ: output
  - vₙ₋₁: previous
  - r vₙ₋₁: retained

## Properties

- Item:
  - claim: Starting at 12 L preserves the state when r=3/4 and d=3 L.
  - conditions: Keep the rule and those two parameters fixed.
  - derivation: The rule maps 12 to (3/4)12+3=12, so every subsequent application repeats the same value.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:recurrence:fixed-volume
- Item:
  - claim: Full retention gives additive growth.
  - conditions: Use r=1 and whole completed rounds.
  - derivation: Each round adds d, yielding vₙ=v₀+nd.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:recurrence:full-retention
- Item:
  - claim: With zero refill the recurrence is geometric.
  - conditions: Use d=0 and a fixed retained fraction.
  - derivation: Each round multiplies by r, so n rounds produce rⁿv₀.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:recurrence:retain-only

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical development has not been researched for this draft. These workshop scenarios are original constructions.

## Connections

- Item:
  - target: math:concept:exponential-change
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Removing the refill leaves repeated multiplicative scaling.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Full retention produces an equal additive increment per completed round.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:chaos-theory
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Both construct sequences from initial data; the chaos specimen uses a nonlinear rule.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:gradient-descent
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: The optimizer also performs numbered state updates, using a gradient-based rule.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:recurrence:six-refills
  - title: Follow six retain-and-refill rounds
  - role: applied_model
  - question: What remains after six rounds starting at 20 L, retaining three quarters, then adding 3 L?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
  - inputs:
    - initial: 20
    - retention: 0.75
    - addition: 3
    - rounds: 6
  - steps:
    - Item:
      - index: 1
      - expression: v₁=(3/4)20+3=18 L; v₂=(3/4)18+3=16.5 L
      - reason: Apply the operations in the declared order.
    - Item:
      - index: 2
      - expression: v₅=1779/128 L; r v₅=5337/512 L
      - reason: Find the previous volume and the part retained for round six.
    - Item:
      - index: 3
      - expression: v₆=5337/512+3=6873/512 L
      - reason: Add the sixth refill after retaining the previous volume.
  - result:
    - exact: v₆=6873/512 L=13.423828125 L
  - interpretation: The six completed rounds leave about 13.424 L under the stated rule.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The fixed value 12 satisfies (3/4)12+3=12. Therefore v₆=12+(20−12)(3/4)⁶=6873/512.
  - limits: This is a constructed model, not a prediction of real reservoir behavior.
  - preset:
    - initial: 20
    - retention: 0.75
    - addition: 3
    - rounds: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- Item:
  - id: math:example:recurrence:zero-rounds
  - title: Stop before the first round
  - role: applied_model
  - question: What belongs on screen before any round has been completed?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
  - inputs:
    - initial: 20
    - retention: 0.75
    - addition: 3
    - rounds: 0
  - steps:
    - Item:
      - index: 1
      - expression: n=0
      - reason: No complete update has occurred.
    - Item:
      - index: 2
      - expression: vₙ=v₀=20 L
      - reason: Return the starting volume unchanged.
    - Item:
      - index: 3
      - expression: last retained contribution=0 L; last added contribution=0 L
      - reason: There is no last transition to decompose.
  - result:
    - exact: v₀=20 L; no update
  - interpretation: The planned refill remains d=3 L per future round, but no refill has occurred.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The geometric sum has no terms, and r⁰v₀ equals v₀.
  - limits: Zero transition contributions do not mean that the future refill parameter is zero.
  - preset:
    - initial: 20
    - retention: 0.75
    - addition: 3
    - rounds: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- Item:
  - id: math:example:recurrence:full-retention
  - title: Keep all the water each round
  - role: applied_model
  - question: What happens when the retained fraction is one?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
  - inputs:
    - initial: 20
    - retention: 1
    - addition: 3
    - rounds: 6
  - steps:
    - Item:
      - index: 1
      - expression: vₖ₊₁=vₖ+3 L
      - reason: Full retention removes no volume.
    - Item:
      - index: 2
      - expression: v₆=20+6×3 L
      - reason: Accumulate six refills.
    - Item:
      - index: 3
      - expression: v₆=38 L
      - reason: Evaluate the additive total.
  - result:
    - exact: v₆=38 L
  - interpretation: The recurrence becomes additive growth at r=1.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: At r=1 the finite geometric sum contains six copies of one, giving 18 L of added water.
  - limits: Do not use a quotient with denominator 1−r at r=1.
  - preset:
    - initial: 20
    - retention: 1
    - addition: 3
    - rounds: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- Item:
  - id: math:example:recurrence:fixed-volume
  - title: Start at a value preserved by the rule
  - role: applied_model
  - question: What if the reservoir starts at 12 L with the usual retained fraction and refill?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
  - inputs:
    - initial: 12
    - retention: 0.75
    - addition: 3
    - rounds: 6
  - steps:
    - Item:
      - index: 1
      - expression: (3/4)12+3=12 L
      - reason: Verify that one update preserves the proposed fixed value.
    - Item:
      - index: 2
      - expression: v₀=12 L implies v₁=12 L
      - reason: The rule returns the same state.
    - Item:
      - index: 3
      - expression: vₙ=12 L at each subsequent integer round
      - reason: The same preserving identity applies again after every update.
  - result:
    - exact: v₆=12 L
  - interpretation: A state satisfying r v+d=v is fixed by this recurrence.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: In vₙ=12+(v₀−12)(3/4)ⁿ, the second term vanishes for v₀=12.
  - limits: The algebraic preserving identity supports this recurrence argument; equal plotted points alone are not a general proof.
  - preset:
    - initial: 12
    - retention: 0.75
    - addition: 3
    - rounds: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- Item:
  - id: math:example:recurrence:retain-only
  - title: Remove the refill
  - role: applied_model
  - question: What remains after six rounds if the refill amount is zero?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
  - inputs:
    - initial: 20
    - retention: 0.75
    - addition: 0
    - rounds: 6
  - steps:
    - Item:
      - index: 1
      - expression: vₖ₊₁=(3/4)vₖ
      - reason: The additive term vanishes.
    - Item:
      - index: 2
      - expression: v₆=20(3/4)⁶ L
      - reason: Apply the retained fraction six times.
    - Item:
      - index: 3
      - expression: v₆=3645/1024 L
      - reason: Evaluate the exact power before rounding.
  - result:
    - exact: v₆=3645/1024 L=3.5595703125 L
  - interpretation: This special case is repeated multiplicative scaling.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The initial and six updated values are 20,15,11.25,8.4375,6.328125,4.74609375,3.5595703125 L.
  - limits: The model does not define values at fractional rounds.
  - preset:
    - initial: 20
    - retention: 0.75
    - addition: 0
    - rounds: 6
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
    - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
    - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
    - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
    - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.

## Interactive

- component id: component:recurrence
- renderer id: recurrence-visual-model
- renderer version: 1
- model id: recurrence-visual-model
- model revision: 1
- expression id: ast:recurrence:expression
- interaction status: implemented
- description: The previous volume, retained part and refill form one visible transition on a fixed 0 to 100 litre scale. Zero completed rounds is labeled as no update.
- controls:
  - Item:
    - id: initial
    - type: number
    - default: 20
    - min: 0
    - max: 40
    - step: 0.01
  - Item:
    - id: retention
    - type: number
    - default: 0.75
    - min: 0
    - max: 1
    - step: 0.01
  - Item:
    - id: addition
    - type: number
    - default: 3
    - min: 0
    - max: 5
    - step: 0.01
  - Item:
    - id: rounds
    - type: number
    - default: 6
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 6
    - output: 13.423828125
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 0
    - output: 20.0
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 1
    - output: 18.0
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 2
    - output: 16.5
  - Item:
    - input:
      - initial: 20
      - retention: 1
      - addition: 3
      - rounds: 6
    - output: 38.0
  - Item:
    - input:
      - initial: 20
      - retention: 0
      - addition: 3
      - rounds: 6
    - output: 3.0
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 0
      - rounds: 6
    - output: 3.5595703125
  - Item:
    - input:
      - initial: 0
      - retention: 0.75
      - addition: 3
      - rounds: 6
    - output: 9.8642578125
  - Item:
    - input:
      - initial: 12
      - retention: 0.75
      - addition: 3
      - rounds: 6
    - output: 12.0
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 12
    - output: 12.253410816192627
  - Item:
    - input:
      - initial: 20
      - retention: 0.75
      - addition: 3
      - rounds: 1.5
    - status: invalid_parameters
  - Item:
    - input:
      - initial: 20
      - retention: 1.1
      - addition: 3
      - rounds: 6
    - status: invalid_parameters
- compute: Begin at v₀. For each integer k from zero to n−1, set vₖ₊₁=r vₖ+d. Equivalently, vₙ=rⁿv₀+d∑ from j=0 to n−1 of rʲ. At n=0 return v₀; at r=1 use vₙ=v₀+nd.
- numeric tolerance: 1e-10
- invariants:
  - Start with v₀ litres, where 0≤v₀≤40 L. Each completed round first retains fraction r of the current volume and then adds d litres.
  - Use 0≤r≤1 and 0≤d≤5 L. The number n of completed rounds is an integer from zero to twelve.
  - The rule is vₖ₊₁=r vₖ+d for integer k≥0. Changing r smoothly recalculates exact integer-round states; it does not create fractional rounds.
  - At n=0 the result is v₀ and no last transition has occurred. Last-transition retained and added contributions are therefore zero.
  - Allowed states stay between zero and 100 L: retention cannot increase the current volume and twelve refills add at most 60 L to at most 40 L initially.
- limits:
  - Constructed fixed-fraction reservoir bookkeeping; no measured equipment behavior or capacity prediction.
  - Only this first-order affine family is executable; the card is not a general recurrence solver.
  - Round counts are integers and joining segments do not define fractional-round states.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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
  - prompt: Why does the operation order matter?
  - answer: Retaining then refilling gives r v+d. Refilling first gives r(v+d), which also reduces the new refill.
- Item:
  - prompt: Can a completed-round count be 1.5?
  - answer: Not in this model: each round is one whole application of the stated rule.

## Representations

- Item:
  - kind: geometry
  - description: The previous volume, retained part and refill form one visible transition on a fixed 0 to 100 litre scale. Zero completed rounds is labeled as no update.
- Item:
  - kind: graph
  - description: Exact volume points at integer completed rounds use fixed round and litre axes. Joining segments guide the eye without defining fractional-round values.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated formula into the displayed primary result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Follow a previous volume through retention and refill into the next exact completed-round state.
  - limitations: Constructed fixed-fraction reservoir bookkeeping; no measured equipment behavior or capacity prediction.
  - evidence kind: constructed_example
  - example ref: math:example:recurrence:six-refills
- Item:
  - context: Reservoir fixed volume
  - mapping: Start at a volume preserved by retention followed by refill and check the preserving identity.
  - limitations: Constructed fixed-fraction reservoir bookkeeping; no measured equipment behavior or capacity prediction.
  - evidence kind: constructed_example
  - example ref: math:example:recurrence:fixed-volume

## Source Refs

- source:openstax:sequences
- source:openstax:geometric-sequences

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded teaching model does not replace the broader definition or a general theorem.

## Change Log

- 0.1.0-draft: five original worked examples, twelve independently calculated fixtures, a compact connected story and shared Geometry/Graph views.

## Referenced source registry

- Source ID: source:openstax:sequences. [Precalculus 2e, 11.1 Sequences and Their Notations](https://openstax.org/books/precalculus-2e/pages/11-1-sequences-and-their-notations). Locator: Integer-indexed sequences, initial terms and recursive definitions. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:geometric-sequences. [Precalculus 2e, 11.3 Geometric Sequences](https://openstax.org/books/precalculus-2e/pages/11-3-geometric-sequences). Locator: Recursive and explicit geometric-sequence formulas and repeated multiplication. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
