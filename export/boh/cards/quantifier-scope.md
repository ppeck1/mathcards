---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:quantifier-scope", "id": "math:concept:quantifier-scope", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:quantifier-scope", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "3a1165682a9daa093c5d7042f7c6da906c7d3aa2ad12b461193e75783b4db69b"}, "purpose": "Change a cable reach and distinguish a station for each desk from one station serving every desk, while keeping a selected probe separate.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "3a1165682a9daa093c5d7042f7c6da906c7d3aa2ad12b461193e75783b4db69b", "status": "draft", "title": "Quantifier order and variable scope", "topics": ["mathematics", "language-foundations", "logic", "formal-semantics", "forall exists order", "exists forall order", "free variable assignment", "bound variable scope", "quantifier dependency"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Quantifier order and variable scope

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:quantifier-scope; revision 0.1.0-draft. Setting: Two finite quantifier orders for a one-dimensional distance relation, with a separately assigned free desk probe. Expression: $D=\{2,4,6,8,10,12\}\,\mathrm m,\ E=\{1,5,9\}\,\mathrm m,\ R_h(x,y):|x-y|\le h;\quad A_h=\forall x\in D\,\exists y\in E\,R_h(x,y),\quad B_h=\exists y\in E\,\forall x\in D\,R_h(x,y).$. Conditions required for a defined value (a case may test their violation): Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h. Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem. The free probe xₚ must be exactly one of the six desk positions. Changing it affects φₕ(xₚ) only; it does not control either formula’s bound variable x. In φₕ(x), y is bound while x and h are free. In Aₕ and Bₕ, x and y are bound but h remains free. Binding x and y does not make these full closed sentences if h is still a variable. Aₕ is true exactly when h≥3 m. Bₕ is true exactly when h≥7 m, and at h=7 m both stations 5 m and 9 m are common witnesses. Scope: The complete finite grid permits exact checks of these two formulas. A selected probe is an assignment to a free variable, not a new quantifier binding. The module does not parse arbitrary formulas, perform variable substitution or implement a general proof system.

## Schema Version

0.1.0

## Id

math:concept:quantifier-scope

## Slug

quantifier-scope

## Type

concept

## Title

Quantifier order and variable scope

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

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- forall exists order
- exists forall order
- free variable assignment
- bound variable scope
- quantifier dependency

## Branches

- language-foundations
- logic
- formal-semantics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Change a cable reach and distinguish a station for each desk from one station serving every desk, while keeping a selected probe separate.

## Meaning

The order of quantifiers controls which choices may depend on earlier ones. “Every desk has some reachable station” lets different desks use different witnesses. “Some station reaches every desk” requires one common witness. In both formulas x and y are bound while reach h remains free; selecting one probe desk only evaluates a separate open formula.

## Prerequisites

- required:
  - math:concept:quantifier
  - math:concept:relation
- helpful:
  - math:concept:logical-connectives
  - math:concept:equivalence
- depth:
  - math:concept:proof

## Definition

- setting: Two finite quantifier orders for a one-dimensional distance relation, with a separately assigned free desk probe.
- formal latex: D=\{2,4,6,8,10,12\}\,\mathrm m,\ E=\{1,5,9\}\,\mathrm m,\ R_h(x,y):|x-y|\le h;\quad A_h=\forall x\in D\,\exists y\in E\,R_h(x,y),\quad B_h=\exists y\in E\,\forall x\in D\,R_h(x,y).
- signature:
  - D: Desk-position domain.
  - E: Station-position domain.
  - h: Free reach parameter.
  - x: Desk variable bound in Aₕ and Bₕ.
  - y: Station variable bound by its quantifier.
  - xₚ: Separately assigned free desk probe.
  - Rₕ(x,y): Inclusive reach predicate.
  - φₕ(x): Open one-desk coverage formula.
  - φₕ(xₚ): Coverage at the assigned probe desk.
  - Aₕ: Every desk has some reachable station.
  - Bₕ: Some station reaches every desk.
  - ∀x∈D∃y∈E Rₕ(x,y): Desk-dependent witness formula.
  - ∃y∈E∀x∈D Rₕ(x,y): One common witness formula.
  - o: Selected quantified formula Aₕ or Bₕ.
- conditions:
  - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
  - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - The free probe xₚ must be exactly one of the six desk positions. Changing it affects φₕ(xₚ) only; it does not control either formula’s bound variable x.
  - In φₕ(x), y is bound while x and h are free. In Aₕ and Bₕ, x and y are bound but h remains free. Binding x and y does not make these full closed sentences if h is still a variable.
  - Aₕ is true exactly when h≥3 m. Bₕ is true exactly when h≥7 m, and at h=7 m both stations 5 m and 9 m are common witnesses.
- domain notes: The complete finite grid permits exact checks of these two formulas. A selected probe is an assignment to a free variable, not a new quantifier binding. The module does not parse arbitrary formulas, perform variable substitution or implement a general proof system.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:waterloo:first-order-scope
  - source:western:quantifier-order

## Grammar

- pronunciation: Quantifier order and variable scope
- expression latex: D=\{2,4,6,8,10,12\}\,\mathrm m,\ E=\{1,5,9\}\,\mathrm m,\ R_h(x,y):|x-y|\le h;\quad A_h=\forall x\in D\,\exists y\in E\,R_h(x,y),\quad B_h=\exists y\in E\,\forall x\in D\,R_h(x,y).
- formation rule: Use desk positions D={2,4,6,8,10,12} m and station positions E={1,5,9} m. The relation Rₕ(x,y) means |x−y|≤h. Aₕ says every desk may choose a station; Bₕ says one station must serve every desk. The open formula φₕ(x)=∃y∈E Rₕ(x,y) has free x and h. Assigning xₚ evaluates one probe row without changing the truth of Aₕ or Bₕ.
- precedence: Preserve the written quantifier order. In Aₕ the existential station choice may depend on the desk; in Bₕ one station is chosen before the universal desk test.
- symbols:
  - Item:
    - token: D
    - role: Desk-position domain
    - type: Finite set of metre positions
  - Item:
    - token: E
    - role: Station-position domain
    - type: Finite set of metre positions
  - Item:
    - token: h
    - role: Free reach parameter
    - type: Nonnegative metres
  - Item:
    - token: x
    - role: Desk variable bound in Aₕ and Bₕ
    - type: Metre position in D
  - Item:
    - token: y
    - role: Station variable bound by its quantifier
    - type: Metre position in E
  - Item:
    - token: xₚ
    - role: Separately assigned free desk probe
    - type: One of the six desk positions
  - Item:
    - token: Rₕ(x,y)
    - role: Inclusive reach predicate
    - type: Binary predicate
  - Item:
    - token: φₕ(x)
    - role: Open one-desk coverage formula
    - type: Formula with free x and h
  - Item:
    - token: φₕ(xₚ)
    - role: Coverage at the assigned probe desk
    - type: Truth value at a free-variable assignment
  - Item:
    - token: Aₕ
    - role: Every desk has some reachable station
    - type: Truth-valued formula with free h
  - Item:
    - token: Bₕ
    - role: Some station reaches every desk
    - type: Truth-valued formula with free h
  - Item:
    - token: ∀x∈D∃y∈E Rₕ(x,y)
    - role: Desk-dependent witness formula
    - type: Truth-valued formula with free h
  - Item:
    - token: ∃y∈E∀x∈D Rₕ(x,y)
    - role: One common witness formula
    - type: Truth-valued formula with free h
  - Item:
    - token: o
    - role: Selected quantified formula Aₕ or Bₕ
    - type: One of two stated formula choices
- ast:
  - id: ast:quantifier-scope:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:reach
      - kind: variable
      - type: Declared model input
      - symbol: h
      - scope ref: scope:quantifier-scope:expression
    - Item:
      - id: n:desk
      - kind: variable
      - type: Declared model input
      - symbol: xₚ
      - scope ref: scope:quantifier-scope:expression
    - Item:
      - id: n:order
      - kind: variable
      - type: Declared model input
      - symbol: o
      - scope ref: scope:quantifier-scope:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Use desk positions D={2,4,6,8,10,12} m and station positions E={1,5,9} m. The relation Rₕ(x,y) means |x−y|≤h. Aₕ says every desk may choose a station; Bₕ says one station must serve every desk. The open formula φₕ(x)=∃y∈E Rₕ(x,y) has free x and h. Assigning xₚ evaluates one probe row without changing the truth of Aₕ or Bₕ.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:reach
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:desk
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:order
  - scopes:
    - Item:
      - id: scope:quantifier-scope:expression
      - kind: modelExpression
      - free variables:
        - h
        - xₚ
        - o
      - domain condition: Two finite quantifier orders for a one-dimensional distance relation, with a separately assigned free desk probe.
- parse errors:
  - Item:
    - input: Let each desk choose its own station in Bₕ
    - status: dependency error
    - reason: Bₕ requires one station before checking all desks.
  - Item:
    - input: Change the probe desk and infer a different Aₕ truth
    - status: scope error
    - reason: The probe assignment does not replace a bound variable’s complete domain.
  - Item:
    - input: Call Aₕ a closed sentence while h is a variable
    - status: free-variable error
    - reason: Both x and y are bound, but h remains free.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - h: reach
  - xₚ: desk
  - Rₕ(x,y): pairs
  - φₕ(xₚ): probeTruth
  - Aₕ: allSomeTruth
  - Bₕ: someAllTruth
  - ∀x∈D∃y∈E Rₕ(x,y): allSomeTruth
  - ∃y∈E∀x∈D Rₕ(x,y): someAllTruth

## Properties

- Item:
  - claim: The every-desk/some-station threshold is 3 m.
  - conditions: Allow a station witness to depend on each desk.
  - derivation: The nearest-station distances are 1,1,1,1,1,3 m. Their maximum is 3 m, so every desk has a witness exactly when h≥3.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:quantifier-scope:each-desk-own-station
- Item:
  - claim: The some-station/every-desk threshold is 7 m.
  - conditions: Require one common station witness.
  - derivation: The maximum desk distances for the three stations are 11,7,7 m. Their minimum is 7 m, and both stations 5 m and 9 m witness equality.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:quantifier-scope:common-stations
- Item:
  - claim: The probe assignment does not alter either bound formula.
  - conditions: Keep h and both finite domains fixed.
  - derivation: Aₕ and Bₕ quantify over all desk positions themselves; the separate xₚ value appears only in the open-formula evaluation.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:quantifier-scope:probe-does-not-bind

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The two formulas use the same universal and existential meanings in different orders.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:relation
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Each grid cell evaluates a binary distance predicate on one ordered desk-station pair.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:open-set
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A local existence claim must be distinguished from a fixed selected witness such as one neighborhood radius.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:proof
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Scope and witness dependencies prepare later formal arguments without implementing a proof calculus.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:quantifier-scope:each-desk-own-station
  - title: Give every desk its own witness
  - role: applied_model
  - question: At h=3 m, does every desk have a reachable station?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - inputs:
    - reach: 3
    - desk: 12
    - order: all-some
  - steps:
    - Item:
      - index: 1
      - expression: For desks 2,4,6,8,10,12 m, choose stations 1,5,5,9,9,9 m.
      - reason: The witnesses may depend on the desk.
    - Item:
      - index: 2
      - expression: The distances are 1,1,1,1,1,3 m, each at most 3 m.
      - reason: Check every desk’s chosen witness.
    - Item:
      - index: 3
      - expression: A₃=True while B₃=False.
      - reason: Different witnesses need not give a common full-coverage station.
  - result:
    - exact: A₃=True; B₃=False; six desks have witnesses
  - interpretation: The last desk reaches station 9 m at the included 3 m boundary.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The maximum of the six nearest-station distances is 3 m.
  - limits: Station capacities and cable routes are outside this stipulated distance model.
  - preset:
    - reach: 3
    - desk: 12
    - order: all-some
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
- Item:
  - id: math:example:quantifier-scope:common-stations
  - title: Find both common witnesses at equality
  - role: applied_model
  - question: Which stations reach every desk at h=7 m?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - inputs:
    - reach: 7
    - desk: 12
    - order: some-all
  - steps:
    - Item:
      - index: 1
      - expression: The largest desk distances from stations 1,5,9 m are 11,7,7 m respectively.
      - reason: Check every desk for each candidate common station.
    - Item:
      - index: 2
      - expression: Both station 5 m and station 9 m have every desk within 7 m.
      - reason: Equality passes the inclusive predicate.
    - Item:
      - index: 3
      - expression: B₇=True.
      - reason: At least one common witness exists; here there are two.
  - result:
    - exact: B₇=True; common witnesses={5,9} m
  - interpretation: “Some station” allows multiple common witnesses.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: For station 5 m the farthest desk is 12 m; for station 9 m it is 2 m, each at distance 7 m.
  - limits: The common witness is fixed before ranging over desks.
  - preset:
    - reach: 7
    - desk: 12
    - order: some-all
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
- Item:
  - id: math:example:quantifier-scope:probe-does-not-bind
  - title: Change a free probe without changing bound truth
  - role: applied_model
  - question: At h=2 m, what changes when the probe desk is 2 m instead of 12 m?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - inputs:
    - reach: 2
    - desk: 2
    - order: all-some
  - steps:
    - Item:
      - index: 1
      - expression: At xₚ=2 m, station 1 m witnesses φ₂(xₚ).
      - reason: The open-formula probe is true at this assignment.
    - Item:
      - index: 2
      - expression: At xₚ=12 m, the nearest station is 9 m at distance 3 m, so φ₂(xₚ) is false.
      - reason: Another free-variable assignment changes the probe reading.
    - Item:
      - index: 3
      - expression: A₂ and B₂ remain False for either probe.
      - reason: Their bound desk domains include all six positions independently of the probe.
  - result:
    - exact: Probe at 2 m=True; probe at 12 m=False; A₂=False; B₂=False
  - interpretation: Assigning a probe value is not a new quantifier binding.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The uncovered desk at 12 m refutes A₂ regardless of which row is highlighted.
  - limits: The probe control is separate from the bound x tokens in Aₕ and Bₕ.
  - preset:
    - reach: 2
    - desk: 2
    - order: all-some
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
- Item:
  - id: math:example:quantifier-scope:order-changes-meaning
  - title: Require one witness before all desks
  - role: applied_model
  - question: Why is B₃ false although A₃ is true?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - inputs:
    - reach: 3
    - desk: 12
    - order: some-all
  - steps:
    - Item:
      - index: 1
      - expression: Station 1 m misses desk 12 m by distance 11 m.
      - reason: This candidate cannot be a common witness.
    - Item:
      - index: 2
      - expression: Station 5 m misses desk 12 m by distance 7 m; station 9 m misses desk 2 m by distance 7 m.
      - reason: The remaining candidates also fail the 3 m requirement.
    - Item:
      - index: 3
      - expression: No station covers every desk, so B₃=False.
      - reason: A common existential witness must survive the full universal desk test.
  - result:
    - exact: A₃=True; B₃=False; no common witness
  - interpretation: The quantifier order changes which witness choices are permitted to depend on a desk.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The smallest maximum desk distance over station choices is 7 m, exceeding the selected 3 m reach.
  - limits: The failed common-witness claim does not deny that each desk has an individual witness.
  - preset:
    - reach: 3
    - desk: 12
    - order: some-all
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
- Item:
  - id: math:example:quantifier-scope:larger-free-parameter
  - title: Change the still-free reach parameter
  - role: applied_model
  - question: At h=11 m, how many stations can serve every desk?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - inputs:
    - reach: 11
    - desk: 12
    - order: some-all
  - steps:
    - Item:
      - index: 1
      - expression: The maximum distances from stations 1,5,9 m are 11,7,7 m.
      - reason: Use the same complete domains as before.
    - Item:
      - index: 2
      - expression: All three maxima are at most 11 m.
      - reason: Each station is now a common witness.
    - Item:
      - index: 3
      - expression: B₁₁=True, with common witnesses 1,5,9 m.
      - reason: The still-free h parameter changes the bound formula’s truth conditions.
  - result:
    - exact: B₁₁=True; common witnesses={1,5,9} m
  - interpretation: Binding desk and station variables does not remove the formula’s dependence on h.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The most distant pair in the domain has distance |12−1|=11 m.
  - limits: This conclusion uses the stated finite domains and distance rule.
  - preset:
    - reach: 11
    - desk: 12
    - order: some-all
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
    - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.

## Interactive

- component id: component:quantifier-scope
- renderer id: quantifier-scope-visual-model
- renderer version: 1
- model id: quantifier-scope-visual-model
- model revision: 1
- expression id: ast:quantifier-scope:expression
- interaction status: implemented
- description: A six-desk by three-station membership grid distinguishes each row’s witnesses from a whole-desk covering column. A separately highlighted probe row and common-scale nearest-distance bar do not replace the bound-variable formulas.
- controls:
  - Item:
    - id: reach
    - type: number
    - default: 2
    - min: 0
    - max: 12
    - step: 0.01
  - Item:
    - id: desk
    - type: number
    - default: 12
    - min: 2
    - max: 12
    - step: 2
  - Item:
    - id: order
    - type: enum
    - default: all-some
    - values:
      - all-some
      - some-all
- expected cases:
  - Item:
    - input:
      - reach: 2
      - desk: 12
      - order: all-some
    - output: 0
  - Item:
    - input:
      - reach: 3
      - desk: 12
      - order: all-some
    - output: 1
  - Item:
    - input:
      - reach: 2.9999
      - desk: 12
      - order: all-some
    - output: 0
  - Item:
    - input:
      - reach: 7
      - desk: 12
      - order: some-all
    - output: 1
  - Item:
    - input:
      - reach: 6.9999
      - desk: 12
      - order: some-all
    - output: 0
  - Item:
    - input:
      - reach: 7
      - desk: 2
      - order: some-all
    - output: 1
  - Item:
    - input:
      - reach: 3
      - desk: 2
      - order: all-some
    - output: 1
  - Item:
    - input:
      - reach: 0
      - desk: 2
      - order: all-some
    - output: 0
  - Item:
    - input:
      - reach: 12
      - desk: 12
      - order: some-all
    - output: 1
  - Item:
    - input:
      - reach: 13
      - desk: 12
      - order: all-some
    - status: invalid_parameters
  - Item:
    - input:
      - reach: 3
      - desk: 3
      - order: all-some
    - status: invalid_parameters
  - Item:
    - input:
      - reach: 3
      - desk: 12
      - order: all-any
    - status: invalid_parameters
- compute: Use desk positions D={2,4,6,8,10,12} m and station positions E={1,5,9} m. The relation Rₕ(x,y) means |x−y|≤h. Aₕ says every desk may choose a station; Bₕ says one station must serve every desk. The open formula φₕ(x)=∃y∈E Rₕ(x,y) has free x and h. Assigning xₚ evaluates one probe row without changing the truth of Aₕ or Bₕ.
- numeric tolerance: 1e-10
- invariants:
  - Desk positions are D={2,4,6,8,10,12} m and station positions are E={1,5,9} m on one straight line. Reach h ranges from zero to twelve metres, and Rₕ uses the inclusive distance test |x−y|≤h.
  - Each desk may use a station without station-capacity, routing or allocation constraints. The model compares distance statements, not a capacity-constrained matching problem.
  - The free probe xₚ must be exactly one of the six desk positions. Changing it affects φₕ(xₚ) only; it does not control either formula’s bound variable x.
  - In φₕ(x), y is bound while x and h are free. In Aₕ and Bₕ, x and y are bound but h remains free. Binding x and y does not make these full closed sentences if h is still a variable.
  - Aₕ is true exactly when h≥3 m. Bₕ is true exactly when h≥7 m, and at h=7 m both stations 5 m and 9 m are common witnesses.
- limits:
  - Only the two fixed finite domains, inclusive distance predicate and two stated quantifier orders are executable.
  - The selected probe is not the universally bound x variable in Aₕ or Bₕ.
  - Free-variable scope is explained for these authored formulas; there is no arbitrary formula parser, capture engine or proof solver.
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
  - prompt: Why can Aₕ be true while Bₕ is false?
  - answer: Different desks may have different reachable stations, yet no single station may reach every desk.
- Item:
  - prompt: Does selecting desk 2 m instead of 12 m change Aₕ?
  - answer: No. It changes only the open-formula probe reading; the bound desk quantifier still ranges over all six desks.

## Representations

- Item:
  - kind: geometry
  - description: A six-desk by three-station membership grid distinguishes each row’s witnesses from a whole-desk covering column. A separately highlighted probe row and common-scale nearest-distance bar do not replace the bound-variable formulas.
- Item:
  - kind: graph
  - description: Two exact Boolean step traces compare Aₕ and Bₕ against reach. Closed endpoints at 3 m and 7 m include equality, and there are no interpolated partly true states.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Change a cable reach and distinguish a station for each desk from one station serving every desk, while keeping a selected probe separate.
  - limitations: Only the two fixed finite domains, inclusive distance predicate and two stated quantifier orders are executable.
  - evidence kind: constructed_example
  - example ref: math:example:quantifier-scope:each-desk-own-station
- Item:
  - context: Find both common witnesses at equality
  - mapping: “Some station” allows multiple common witnesses.
  - limitations: The common witness is fixed before ranging over desks.
  - evidence kind: constructed_example
  - example ref: math:example:quantifier-scope:common-stations

## Source Refs

- source:waterloo:first-order-scope
- source:western:quantifier-order

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.29.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:waterloo:first-order-scope. [University of Waterloo CS 245, First-Order Logic: Summary of Definitions and Main Results](https://cs.uwaterloo.ca/~david/cs245/cs-firstorder.pdf). Locator: Printed pages 2–3, Definitions 4, 5 and 9: free variables, closed formulas, valuations and quantified satisfaction. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:western:quantifier-order. [Alexander Brandt, Discrete Structures for Computing, 1.2 Predicate Logic](https://www.csd.uwo.ca/~abrandt5/teaching/DiscreteStructures/Chapter1/pred-logic.html). Locator: Order of Quantifiers: witness dependence and the difference between universal-existential and existential-universal claims. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
