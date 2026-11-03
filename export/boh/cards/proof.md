---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:proof", "id": "math:concept:proof", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:proof", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "4b28f70e7d824a447fa30ab4fc0e130cfb01a22dda8464980040588e16dea38b"}, "purpose": "Check a short library-rule derivation line by line, then compare its syntactic justification with truth in a selected situation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "4b28f70e7d824a447fa30ab4fc0e130cfb01a22dda8464980040588e16dea38b", "status": "draft", "title": "Formal proof and derivation", "topics": ["mathematics", "logic", "discrete-computation", "language-foundations", "formal derivation", "proof sequence", "provability", "syntactic derivability", "premise-and-modus-ponens calculus"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Formal proof and derivation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:proof; revision 0.1.0-draft. Setting: A fixed three-premise propositional calculus with three selectable five-line candidates, the target r and all eight Boolean assignments. Expression: $\Gamma=\{p,p\to q,q\to r\},\quad\frac{A\qquad A\to B}{B}\;\mathrm{MP},\quad\Gamma\vdash r,\quad\Gamma\models r.$. Conditions required for a defined value (a case may test their violation): The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees. A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B. The chain candidate writes p, p→q and q→r as its first three lines, then derives q from lines 1 and 2 and r from lines 4 and 3. The other candidates contain an incorrect conclusion or a future-line citation at line 4. Only a consecutive valid prefix is accepted. Checking stops accepting new lines at the first invalid line; a later correct line does not repair the rejected candidate prefix. The known chain witnesses Γ⊢r in this stated forward calculus. All eight Boolean assignments also verify Γ⊨r: no assignment makes every premise true and r false. A bad candidate does not refute the existence of this other valid derivation. The selected world v is a valuation supplying truth values for p,q,r. Changing it affects truth readings and premise satisfaction, not whether a syntactic step obeys the proof rules. A derivation from Γ does not assert that Γ describes the actual library. Scope: The checker handles only three stated candidates in a tiny premise-and-modus-ponens calculus. It is not a complete propositional proof system, an arbitrary theorem prover or a proof of soundness or completeness. The real-world meanings are a constructed scenario.

## Schema Version

0.1.0

## Id

math:concept:proof

## Slug

proof

## Type

concept

## Title

Formal proof and derivation

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

- formal derivation
- proof sequence
- provability
- syntactic derivability
- premise-and-modus-ponens calculus

## Branches

- logic
- discrete-computation
- language-foundations

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Check a short library-rule derivation line by line, then compare its syntactic justification with truth in a selected situation.

## Meaning

A formal derivation is a finite sequence whose lines are premises or follow from earlier lines by declared inference rules. Here a small forward calculus uses premise membership and modus ponens. A valid candidate witnesses derivability from Γ; truth under one assignment, semantic entailment and the correctness of a particular written candidate remain separate questions.

## Prerequisites

- required:
  - math:concept:inference
- helpful:
  - math:concept:logical-connectives
  - math:concept:quantifier-scope
- depth:
  []

## Definition

- setting: A fixed three-premise propositional calculus with three selectable five-line candidates, the target r and all eight Boolean assignments.
- formal latex: \Gamma=\{p,p\to q,q\to r\},\quad\frac{A\qquad A\to B}{B}\;\mathrm{MP},\quad\Gamma\vdash r,\quad\Gamma\models r.
- signature:
  - Γ: The fixed set of premises {p,p→q,q→r}.
  - p: The return is recorded; a proposition with a selected-world truth value.
  - q: The count is updated; a proposition with a selected-world truth value.
  - r: The receipt is ready; the target proposition.
  - k: Number of candidate lines currently revealed.
  - D: The selected five-line candidate derivation.
  - v: The selected Boolean assignment to p,q,r.
  - →: Material implication between propositions.
  - ⊢: Syntactic derivability in the stated premise-and-modus-ponens calculus.
  - ⊨: Semantic entailment: no true-premises, false-conclusion assignment.
  - MP: Modus ponens: infer B from A and A→B.
- conditions:
  - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
  - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - The chain candidate writes p, p→q and q→r as its first three lines, then derives q from lines 1 and 2 and r from lines 4 and 3. The other candidates contain an incorrect conclusion or a future-line citation at line 4.
  - Only a consecutive valid prefix is accepted. Checking stops accepting new lines at the first invalid line; a later correct line does not repair the rejected candidate prefix.
  - The known chain witnesses Γ⊢r in this stated forward calculus. All eight Boolean assignments also verify Γ⊨r: no assignment makes every premise true and r false. A bad candidate does not refute the existence of this other valid derivation.
  - The selected world v is a valuation supplying truth values for p,q,r. Changing it affects truth readings and premise satisfaction, not whether a syntactic step obeys the proof rules. A derivation from Γ does not assert that Γ describes the actual library.
- domain notes: The checker handles only three stated candidates in a tiny premise-and-modus-ponens calculus. It is not a complete propositional proof system, an arbitrary theorem prover or a proof of soundness or completeness. The real-world meanings are a constructed scenario.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:openlogic:axiomatic-derivations

## Grammar

- pronunciation: Formal proof and derivation
- expression latex: \Gamma=\{p,p\to q,q\to r\},\quad\frac{A\qquad A\to B}{B}\;\mathrm{MP},\quad\Gamma\vdash r,\quad\Gamma\models r.
- formation rule: Reveal the first k lines of the selected candidate D. Accept a premise only if it belongs to Γ. Accept an MP line only if its cited earlier accepted lines contain A and A→B and the displayed conclusion is B. Stop the accepted prefix at the first bad line. Independently read p,q,r in the selected world v; these truth values never change the rule check.
- precedence: Reveal the first k lines of the selected candidate D. Accept a premise only if it belongs to Γ. Accept an MP line only if its cited earlier accepted lines contain A and A→B and the displayed conclusion is B. Stop the accepted prefix at the first bad line. Independently read p,q,r in the selected world v; these truth values never change the rule check.
- symbols:
  - Item:
    - token: Γ
    - role: The fixed set of premises {p,p→q,q→r}.
    - type: Declared symbol in the stated model
  - Item:
    - token: p
    - role: The return is recorded; a proposition with a selected-world truth value.
    - type: Declared symbol in the stated model
  - Item:
    - token: q
    - role: The count is updated; a proposition with a selected-world truth value.
    - type: Declared symbol in the stated model
  - Item:
    - token: r
    - role: The receipt is ready; the target proposition.
    - type: Declared symbol in the stated model
  - Item:
    - token: k
    - role: Number of candidate lines currently revealed.
    - type: Declared symbol in the stated model
  - Item:
    - token: D
    - role: The selected five-line candidate derivation.
    - type: Declared symbol in the stated model
  - Item:
    - token: v
    - role: The selected Boolean assignment to p,q,r.
    - type: Declared symbol in the stated model
  - Item:
    - token: →
    - role: Material implication between propositions.
    - type: Declared symbol in the stated model
  - Item:
    - token: ⊢
    - role: Syntactic derivability in the stated premise-and-modus-ponens calculus.
    - type: Declared symbol in the stated model
  - Item:
    - token: ⊨
    - role: Semantic entailment: no true-premises, false-conclusion assignment.
    - type: Declared symbol in the stated model
  - Item:
    - token: MP
    - role: Modus ponens: infer B from A and A→B.
    - type: Declared symbol in the stated model
- ast:
  - id: ast:proof:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared model input or inspection choice
      - symbol: k
      - scope ref: scope:proof:expression
    - Item:
      - id: n:plan
      - kind: variable
      - type: Declared model input or inspection choice
      - symbol: D
      - scope ref: scope:proof:expression
    - Item:
      - id: n:world
      - kind: variable
      - type: Declared model input or inspection choice
      - symbol: v
      - scope ref: scope:proof:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the declared executable family
      - ref: Reveal the first k lines of the selected candidate D. Accept a premise only if it belongs to Γ. Accept an MP line only if its cited earlier accepted lines contain A and A→B and the displayed conclusion is B. Stop the accepted prefix at the first bad line. Independently read p,q,r in the selected world v; these truth values never change the rule check.
    - Item:
      - id: n:bound-steps
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:steps
    - Item:
      - id: n:bound-plan
      - kind: apply
      - type: Declared primary result
      - function: n:bound-steps
      - argument: n:plan
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-plan
      - argument: n:world
  - scopes:
    - Item:
      - id: scope:proof:expression
      - kind: modelExpression
      - free variables:
        - k
        - D
        - v
      - domain condition: A fixed three-premise propositional calculus with three selectable five-line candidates, the target r and all eight Boolean assignments.
- parse errors:
  - Item:
    - input: Infer r directly from p and p→q
    - status: rule error
    - reason: The consequent of p→q is q, so these citations license q rather than r.
  - Item:
    - input: Cite line 5 while checking line 4
    - status: dependency error
    - reason: This sequential calculus permits only earlier accepted lines.
  - Item:
    - input: Treat a false selected-world conclusion as proof invalidity
    - status: interpretation error
    - reason: A correct derivation from Γ is independent of the selected world. Its premises may fail in that world.
- ast coverage: A typed application outline of the declared finite executable family; it is not an arbitrary formula parser or a general proof checker.
- output symbol bindings:
  - k: steps
  - D: plan
  - v: world
  - p: pTruth
  - q: qTruth
  - r: rTruth

## Properties

- Item:
  - claim: The chain is a formal derivation of r from Γ.
  - conditions: Premise membership and MP are the only permitted rules.
  - derivation: The first three lines belong to Γ; MP on lines 1 and 2 gives q; MP on this q and line 3 gives r. Every dependency is earlier.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:proof:complete-chain
- Item:
  - claim: A failed candidate does not refute derivability.
  - conditions: Another candidate can provide a valid witness for the same Γ and target.
  - derivation: The wrong-conclusion sequence fails at line 4, but the complete chain still derives r from the identical premise set.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:proof:true-but-unlicensed

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:inference
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Truth-table validity concerns all assignments, while this card checks a particular ordered sequence of rule applications.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:logical-connectives
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Material implication determines the proposition formulas and the separate selected-world truth readings.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:turing-machine
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Both display explicit rules and exact finite traces, while proof-line justification and tape computation remain different structures.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:proof:premises-only
  - title: Separate a premise list from the target proof
  - role: applied_model
  - question: Has r been derived when only three chain lines are visible?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - inputs:
    - steps: 3
    - plan: chain
    - world: 111
  - steps:
    - Item:
      - index: 1
      - expression: Lines 1, 2 and 3 are p, p→q and q→r.
      - reason: Each is a member of the declared premise set Γ.
    - Item:
      - index: 2
      - expression: All three lines are accepted, but none is r.
      - reason: The target is not yet in the accepted prefix.
  - result:
    - exact: 3 accepted lines; target not yet derived; candidate unfinished
  - interpretation: Having useful premises is different from having written the promised derivation.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: Compare each visible formula with Γ; the list contains no standalone r.
  - limits: The target remains derivable by the known full chain, even though the currently revealed prefix has not reached it.
  - preset:
    - steps: 3
    - plan: chain
    - world: 111
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
- Item:
  - id: math:example:proof:complete-chain
  - title: Follow the recorded return to its receipt
  - role: applied_model
  - question: How do the two justified steps derive r?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - inputs:
    - steps: 5
    - plan: chain
    - world: 111
  - steps:
    - Item:
      - index: 1
      - expression: Line 4 is q by MP from line 1, p, and line 2, p→q.
      - reason: The formula q is the consequent of the cited implication.
    - Item:
      - index: 2
      - expression: Line 5 is r by MP from line 4, q, and line 3, q→r.
      - reason: Both citations are earlier accepted lines.
    - Item:
      - index: 3
      - expression: All five lines are accepted and the final target r has been derived.
      - reason: This candidate is a witness for Γ⊢r.
  - result:
    - exact: 5 accepted lines; complete valid candidate; Γ⊢r
  - interpretation: The dependencies explain exactly how each stated library rule is used.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: Check MP twice: substitute A=p,B=q, then A=q,B=r.
  - limits: The proof is conditional on Γ. It does not independently verify the library’s actual rules.
  - preset:
    - steps: 5
    - plan: chain
    - world: 111
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
- Item:
  - id: math:example:proof:true-but-unlicensed
  - title: Reject a conclusion even when the situation makes it true
  - role: applied_model
  - question: Can a true r rescue the wrong-conclusion candidate?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - inputs:
    - steps: 5
    - plan: wrong-conclusion
    - world: 111
  - steps:
    - Item:
      - index: 1
      - expression: Line 4 writes r while citing p and p→q.
      - reason: Those lines license q, not r.
    - Item:
      - index: 2
      - expression: The first invalid line is 4, so only the three premise lines form an accepted prefix.
      - reason: A later valid-looking line cannot repair that prefix.
    - Item:
      - index: 3
      - expression: In world 111, p,q,r are all true.
      - reason: Truth in this one situation does not correct the failed rule application.
  - result:
    - exact: 3 accepted lines; line 4 rejected; r true in the selected world
  - interpretation: A true statement can have an invalid written justification.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: The cited implication has consequent q; compare that symbol directly with the proposed r.
  - limits: The rejected candidate does not refute Γ⊢r: the separate chain remains a valid witness.
  - preset:
    - steps: 5
    - plan: wrong-conclusion
    - world: 111
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
- Item:
  - id: math:example:proof:future-reference
  - title: Keep proof dependencies in order
  - role: applied_model
  - question: Why can line 4 not borrow q from line 5?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - inputs:
    - steps: 5
    - plan: forward-reference
    - world: 111
  - steps:
    - Item:
      - index: 1
      - expression: Line 4 proposes r by MP from line 5, q, and line 3, q→r.
      - reason: The formulas would match MP, but line 5 is not earlier.
    - Item:
      - index: 2
      - expression: The checker rejects line 4 and keeps only the three accepted premise lines.
      - reason: Earlier accepted dependencies are part of this calculus’s formation rule.
  - result:
    - exact: 3 accepted lines; line 4 rejected for a future citation
  - interpretation: Correct-looking formulas are insufficient when the dependency order is wrong.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: Compare the cited line number 5 with the current line number 4; 5 is not less than 4.
  - limits: A differently ordered valid sequence exists. Failure of this candidate is not nonderivability.
  - preset:
    - steps: 5
    - plan: forward-reference
    - world: 111
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
- Item:
  - id: math:example:proof:false-world-valid-proof
  - title: Keep formal proof separate from a failed actual premise
  - role: applied_model
  - question: Does world 000 invalidate the complete chain?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - inputs:
    - steps: 5
    - plan: chain
    - world: 000
  - steps:
    - Item:
      - index: 1
      - expression: Both MP applications still cite the same earlier formulas.
      - reason: Changing a truth assignment does not alter the derivation’s syntax.
    - Item:
      - index: 2
      - expression: Here p,q,r are false, so the selected world does not satisfy all of Γ.
      - reason: In particular, premise p is false.
    - Item:
      - index: 3
      - expression: The complete candidate remains valid, while r is false in this world.
      - reason: Semantic entailment guarantees the target only in worlds where every premise holds.
  - result:
    - exact: 5 accepted lines; complete valid candidate; Γ not satisfied; r false
  - interpretation: A proof from assumptions is not an unconditional claim that its conclusion holds in every situation.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: At p=q=r=False, p→q and q→r are true but p is false; this is not a true-premises/false-target counterexample.
  - limits: This example distinguishes syntactic checking from empirical validation of the story’s assumptions.
  - preset:
    - steps: 5
    - plan: chain
    - world: 000
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
    - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.

## Interactive

- component id: component:proof
- renderer id: proof-visual-model
- renderer version: 1
- model id: proof-visual-model
- model revision: 1
- expression id: ast:proof:expression
- interaction status: implemented
- description: Five large proof-line boxes reveal premises and cited dependencies. Each accepted step has an explicit reason; an invalid line stops the accepted prefix. A separate truth panel reports whether the selected world satisfies Γ and r.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 0
    - min: 0
    - max: 5
    - step: 1
  - Item:
    - id: plan
    - type: enum
    - default: chain
    - values:
      - chain
      - wrong-conclusion
      - forward-reference
  - Item:
    - id: world
    - type: enum
    - default: 111
    - values:
      - 000
      - 001
      - 010
      - 011
      - 100
      - 101
      - 110
      - 111
- expected cases:
  - Item:
    - input:
      - steps: 0
      - plan: chain
      - world: 111
    - output: 0
  - Item:
    - input:
      - steps: 3
      - plan: chain
      - world: 111
    - output: 3
  - Item:
    - input:
      - steps: 4
      - plan: chain
      - world: 111
    - output: 4
  - Item:
    - input:
      - steps: 5
      - plan: chain
      - world: 111
    - output: 5
  - Item:
    - input:
      - steps: 5
      - plan: chain
      - world: 000
    - output: 5
  - Item:
    - input:
      - steps: 3
      - plan: wrong-conclusion
      - world: 111
    - output: 3
  - Item:
    - input:
      - steps: 4
      - plan: wrong-conclusion
      - world: 111
    - output: 3
  - Item:
    - input:
      - steps: 5
      - plan: wrong-conclusion
      - world: 111
    - output: 3
  - Item:
    - input:
      - steps: 5
      - plan: forward-reference
      - world: 111
    - output: 3
  - Item:
    - input:
      - steps: 2.5
      - plan: chain
      - world: 111
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 6
      - plan: chain
      - world: 111
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 5
      - plan: chain
      - world: 11
    - status: invalid_parameters
- compute: Reveal the first k lines of the selected candidate D. Accept a premise only if it belongs to Γ. Accept an MP line only if its cited earlier accepted lines contain A and A→B and the displayed conclusion is B. Stop the accepted prefix at the first bad line. Independently read p,q,r in the selected world v; these truth values never change the rule check.
- numeric tolerance: 1e-10
- invariants:
  - The fixed premise set, or assumption set, is Γ={p,p→q,q→r}. In the constructed library story, p means the return is recorded, q means the count is updated, and r means the receipt is ready. These rules are stipulated premises, not measured software guarantees.
  - A candidate has five ordered lines. A premise line must belong to Γ. Each line citation in a modus ponens step must identify one of two earlier accepted lines containing A and A→B, and its conclusion must be B.
  - The chain candidate writes p, p→q and q→r as its first three lines, then derives q from lines 1 and 2 and r from lines 4 and 3. The other candidates contain an incorrect conclusion or a future-line citation at line 4.
  - Only a consecutive valid prefix is accepted. Checking stops accepting new lines at the first invalid line; a later correct line does not repair the rejected candidate prefix.
  - The known chain witnesses Γ⊢r in this stated forward calculus. All eight Boolean assignments also verify Γ⊨r: no assignment makes every premise true and r false. A bad candidate does not refute the existence of this other valid derivation.
  - The selected world v is a valuation supplying truth values for p,q,r. Changing it affects truth readings and premise satisfaction, not whether a syntactic step obeys the proof rules. A derivation from Γ does not assert that Γ describes the actual library.
- limits:
  - The checker handles only three stated candidates in a tiny premise-and-modus-ponens calculus. It is not a complete propositional proof system, an arbitrary theorem prover or a proof of soundness or completeness. The real-world meanings are a constructed scenario.
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
  - prompt: If a candidate fails, have we proved the target underivable?
  - answer: No. A failed written attempt says nothing by itself about all possible derivations. Here a separate valid chain witnesses Γ⊢r.
- Item:
  - prompt: Can the proof be valid while the selected-world target is false?
  - answer: Yes. If that world does not satisfy every premise, entailment makes no promise about the target there. Syntactic checking still depends on formulas and earlier citations.

## Representations

- Item:
  - kind: geometry
  - description: Five large proof-line boxes reveal premises and cited dependencies. Each accepted step has an explicit reason; an invalid line stops the accepted prefix. A separate truth panel reports whether the selected world satisfies Γ and r.
- Item:
  - kind: graph
  - description: Discrete samples count consecutive accepted lines at each whole revealed prefix. Failed candidates stop at three; the valid chain reaches five. The selected-step ring does not interpolate fractional proof lines. This count is not a truth value or a likelihood.
- Item:
  - kind: substitution
  - description: Follow the selected whole step through its rule into the labelled configuration or checked proof line.

## Applications

- Item:
  - context: Constructed library example
  - mapping: Check a short library-rule derivation line by line, then compare its syntactic justification with truth in a selected situation.
  - limitations: The checker handles only three stated candidates in a tiny premise-and-modus-ponens calculus. It is not a complete propositional proof system, an arbitrary theorem prover or a proof of soundness or completeness. The real-world meanings are a constructed scenario.
  - evidence kind: constructed_example
  - example ref: math:example:proof:premises-only
- Item:
  - context: Follow the recorded return to its receipt
  - mapping: The dependencies explain exactly how each stated library rule is used.
  - limitations: The proof is conditional on Γ. It does not independently verify the library’s actual rules.
  - evidence kind: constructed_example
  - example ref: math:example:proof:complete-chain

## Source Refs

- source:openlogic:axiomatic-derivations

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.32.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve fixtures in the computation-and-proof sequence.

## Referenced source registry

- Source ID: source:openlogic:axiomatic-derivations. [Open Logic Text, Chapter 12: Axiomatic Derivations](https://builds.openlogicproject.org/open-logic-complete.pdf). Locator: Revision 9620cc7, July 12, 2026; §12.1, printed pages 176–177, Definition 12.1 and Definition 12.3: derivation lines, earlier premises, modus ponens and Γ⊢φ. Verification: Definition-level derivation conditions, MP and existence-of-derivation reading inspected 2026-11-01. The lesson explicitly chooses only premise membership and MP, without the source’s additional axiom schemata; it does not claim completeness. Not independent review.. Rights: Definition-level reference; original library propositions, candidates, stories and checks. No exercises or source prose reproduced.
