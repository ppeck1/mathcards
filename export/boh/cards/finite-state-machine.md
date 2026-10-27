---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:finite-state-machine", "id": "math:concept:finite-state-machine", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:finite-state-machine", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2d0add4d6b3e78a07a3df878988f0f48e9affa20f25281404b1f1baed8ceb6d9"}, "purpose": "Read a bead word one symbol at a time and distinguish the current state, unread suffix and full-word acceptance.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2d0add4d6b3e78a07a3df878988f0f48e9affa20f25281404b1f1baed8ceb6d9", "status": "draft", "title": "Finite-state machines and configurations", "topics": ["mathematics", "discrete-computation", "logic", "modeling", "deterministic finite automaton", "DFA", "finite automaton configuration", "parity machine"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Finite-state machines and configurations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:finite-state-machine; revision 0.1.0-draft. Setting: A two-state deterministic finite automaton reading a fixed eight-symbol binary word from left to right. Expression: $Q=\{E,O\},\quad\Sigma=\{0,1\},\quad q_0=E,\quad\delta(q,0)=q,\quad\delta(E,1)=O,\quad\delta(O,1)=E.$. Conditions required for a defined value (a case may test their violation): The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it. Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols. A configuration consists of the current state and the unread suffix. Equal current states can have different unread suffixes and therefore different future transitions. E is an accepting state, but acceptance of the selected full word is reported only after all eight symbols have been read. Before that point the input is unfinished. The parity invariant follows by induction on processed-prefix length: zero symbols contain an even count of 1s; reading 0 preserves the count and reading 1 toggles its parity. Scope: The machine has finite memory in its two states and no writable tape. Its remaining input is part of the configuration. This bounded example does not implement a Turing machine, a universal computer or an undecidability result.

## Schema Version

0.1.0

## Id

math:concept:finite-state-machine

## Slug

finite-state-machine

## Type

concept

## Title

Finite-state machines and configurations

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

- deterministic finite automaton
- DFA
- finite automaton configuration
- parity machine

## Branches

- discrete-computation
- logic
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Read a bead word one symbol at a time and distinguish the current state, unread suffix and full-word acceptance.

## Meaning

A deterministic finite-state machine uses a fixed finite state set and a transition rule for each input symbol. This original two-state machine records whether the processed prefix contains an even or odd number of 1 symbols. A configuration includes the current state and the unread suffix; visiting an accepting state before input ends does not yet decide the whole word.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:recurrence
  - math:concept:logical-connectives
- depth:
  - math:concept:computability

## Definition

- setting: A two-state deterministic finite automaton reading a fixed eight-symbol binary word from left to right.
- formal latex: Q=\{E,O\},\quad\Sigma=\{0,1\},\quad q_0=E,\quad\delta(q,0)=q,\quad\delta(E,1)=O,\quad\delta(O,1)=E.
- signature:
  - w: Selected binary input word.
  - k: Number of processed symbols.
  - Q: Finite state set {E,O}.
  - Σ: Input alphabet {0,1}.
  - E: Even-parity accepting state.
  - O: Odd-parity state.
  - q₀: Initial state E.
  - qₖ: State after k symbols.
  - δ: Deterministic transition function.
  - δ(q,0): Transition preserving the current state.
  - δ(q,1): Transition swapping the current state.
  - ε: Empty word or suffix.
- conditions:
  - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
  - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - A configuration consists of the current state and the unread suffix. Equal current states can have different unread suffixes and therefore different future transitions.
  - E is an accepting state, but acceptance of the selected full word is reported only after all eight symbols have been read. Before that point the input is unfinished.
  - The parity invariant follows by induction on processed-prefix length: zero symbols contain an even count of 1s; reading 0 preserves the count and reading 1 toggles its parity.
- domain notes: The machine has finite memory in its two states and no writable tape. Its remaining input is part of the configuration. This bounded example does not implement a Turing machine, a universal computer or an undecidability result.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:columbia:finite-automata

## Grammar

- pronunciation: Finite-state machines and configurations
- expression latex: Q=\{E,O\},\quad\Sigma=\{0,1\},\quad q_0=E,\quad\delta(q,0)=q,\quad\delta(E,1)=O,\quad\delta(O,1)=E.
- formation rule: Start in state E. A 0 symbol preserves the state, while a 1 symbol swaps E and O. After k whole symbols, qₖ records the parity of the number of 1s in the processed prefix. The configuration is the pair of current state and unread suffix. E is the accepting state, but an eight-symbol word is accepted only when all eight symbols have been read and the final state is E.
- precedence: Read exactly one next input symbol, apply its transition to the current state, then advance the processed-prefix boundary by one.
- symbols:
  - Item:
    - token: w
    - role: Selected binary input word
    - type: Eight-symbol word
  - Item:
    - token: k
    - role: Number of processed symbols
    - type: Integer from zero through eight
  - Item:
    - token: Q
    - role: Finite state set {E,O}
    - type: Set of states
  - Item:
    - token: Σ
    - role: Input alphabet {0,1}
    - type: Finite symbol set
  - Item:
    - token: E
    - role: Even-parity accepting state
    - type: State
  - Item:
    - token: O
    - role: Odd-parity state
    - type: State
  - Item:
    - token: q₀
    - role: Initial state E
    - type: State
  - Item:
    - token: qₖ
    - role: State after k symbols
    - type: State
  - Item:
    - token: δ
    - role: Deterministic transition function
    - type: Function Q×Σ→Q
  - Item:
    - token: δ(q,0)
    - role: Transition preserving the current state
    - type: State-valued rule
  - Item:
    - token: δ(q,1)
    - role: Transition swapping the current state
    - type: State-valued rule
  - Item:
    - token: ε
    - role: Empty word or suffix
    - type: Word of length zero
- ast:
  - id: ast:finite-state-machine:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:finite-state-machine:expression
    - Item:
      - id: n:pattern
      - kind: variable
      - type: Declared model input
      - symbol: w
      - scope ref: scope:finite-state-machine:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Start in state E. A 0 symbol preserves the state, while a 1 symbol swaps E and O. After k whole symbols, qₖ records the parity of the number of 1s in the processed prefix. The configuration is the pair of current state and unread suffix. E is the accepting state, but an eight-symbol word is accepted only when all eight symbols have been read and the final state is E.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:steps
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-0
      - argument: n:pattern
  - scopes:
    - Item:
      - id: scope:finite-state-machine:expression
      - kind: modelExpression
      - free variables:
        - k
        - w
      - domain condition: A two-state deterministic finite automaton reading a fixed eight-symbol binary word from left to right.
- parse errors:
  - Item:
    - input: Declare the full word accepted while unread input remains
    - status: acceptance error
    - reason: An accepting current state does not decide the complete word before the input is finished.
  - Item:
    - input: Use k=2.5 processed symbols
    - status: domain error
    - reason: Each transition consumes one whole symbol.
  - Item:
    - input: Identify configurations by state alone
    - status: configuration error
    - reason: The unread suffix affects which transition occurs next.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - w: word
  - k: steps
  - qₖ: stateCode

## Properties

- Item:
  - claim: The state records the parity of 1s in every processed prefix.
  - conditions: Start at E and use the stated 0/1 transition rules.
  - derivation: The empty prefix has zero 1s and state E. A 0 preserves both parity and state; a 1 changes both. Induction gives the invariant for every prefix.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:finite-state-machine:seven-symbols
- Item:
  - claim: The current state does not alone determine full-word acceptance at an unfinished prefix.
  - conditions: At least one unread symbol remains.
  - derivation: A later 1 can change parity, so the final state must be read only after consuming the whole word.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:finite-state-machine:accepting-before-finish

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The deterministic transition assigns one next state to each allowed state-symbol pair.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:recurrence
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The processed state sequence follows repeated applications of one fixed transition rule.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:computability
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Finite-state computation is a prerequisite for broader models, without establishing their capabilities or limits.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:finite-state-machine:seven-symbols
  - title: Stop before the last bead
  - role: applied_model
  - question: What is the configuration after seven symbols of 10010010?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - inputs:
    - steps: 7
    - pattern: 10010010
  - steps:
    - Item:
      - index: 1
      - expression: The processed prefix is 1001001 and contains three 1s.
      - reason: Count only symbols before the prefix boundary.
    - Item:
      - index: 2
      - expression: The current state is O and the unread suffix is 0.
      - reason: An odd marked count determines the state, while one symbol remains.
  - result:
    - exact: State=Odd; unread=0; input unfinished
  - interpretation: The state answers a prefix question; the final word result remains undecided.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Transitions on the three 1s give E→O→E→O, and each intervening 0 leaves the state unchanged.
  - limits: Do not label the unfinished full word Rejected merely because its current state is Odd.
  - preset:
    - steps: 7
    - pattern: 10010010
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
- Item:
  - id: math:example:finite-state-machine:accepting-before-finish
  - title: Visit an accepting state before the input ends
  - role: applied_model
  - question: After four symbols, has 10010010 already been accepted?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - inputs:
    - steps: 4
    - pattern: 10010010
  - steps:
    - Item:
      - index: 1
      - expression: The prefix 1001 contains two 1s, so q₄=E.
      - reason: The marked count is even.
    - Item:
      - index: 2
      - expression: The unread suffix is 0010.
      - reason: Four input symbols still remain.
    - Item:
      - index: 3
      - expression: The current state is accepting, but the full input is unfinished.
      - reason: Full-word acceptance requires completion.
  - result:
    - exact: State=Even; accepting state=True; full input unfinished
  - interpretation: An accepting state and an accepted complete word are different notions.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The remaining suffix contains one more 1, which will change the final state.
  - limits: No full-word decision is made at a proper prefix.
  - preset:
    - steps: 4
    - pattern: 10010010
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
- Item:
  - id: math:example:finite-state-machine:finished-odd
  - title: Finish the original word
  - role: applied_model
  - question: What result follows all eight symbols of 10010010?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - inputs:
    - steps: 8
    - pattern: 10010010
  - steps:
    - Item:
      - index: 1
      - expression: The complete word contains three 1s.
      - reason: Count the marked symbols in the finished input.
    - Item:
      - index: 2
      - expression: q₈=O and the unread suffix is ε.
      - reason: All input has been consumed.
    - Item:
      - index: 3
      - expression: The full word is Rejected.
      - reason: The final state is not the accepting state E.
  - result:
    - exact: State=Odd; unread=ε; Rejected
  - interpretation: The acceptance result is now a complete-word result.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Three swaps of the initial E state leave O; zeros do not alter it.
  - limits: The machine recognizes parity of 1s in this original construction.
  - preset:
    - steps: 8
    - pattern: 10010010
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
- Item:
  - id: math:example:finite-state-machine:leading-zero-word
  - title: Preserve all leading zero symbols
  - role: applied_model
  - question: What happens when the word is 00000000?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - inputs:
    - steps: 8
    - pattern: 00000000
  - steps:
    - Item:
      - index: 1
      - expression: Eight 0 transitions each preserve E.
      - reason: A zero is an input symbol, not missing data.
    - Item:
      - index: 2
      - expression: q₈=E and all eight symbols have been read.
      - reason: The final state is accepting and the input is finished.
  - result:
    - exact: State=Even; ones read=0; Accepted
  - interpretation: The complete zero word is accepted because zero is an even count of 1s.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The parity invariant gives an even marked count at every prefix.
  - limits: The eight-symbol string is retained rather than converted to the number zero.
  - preset:
    - steps: 8
    - pattern: 00000000
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
- Item:
  - id: math:example:finite-state-machine:same-state-different-suffix
  - title: Compare two configurations with the same state
  - role: applied_model
  - question: Why do prefixes of lengths one and three not give the same configuration?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - inputs:
    - steps: 1
    - pattern: 10010010
  - steps:
    - Item:
      - index: 1
      - expression: After prefix 1, the state is O and the unread suffix is 0010010.
      - reason: Read one symbol from the original word.
    - Item:
      - index: 2
      - expression: After prefix 100, the state is also O but the unread suffix is 10010.
      - reason: Two extra zero transitions preserve O while advancing input.
    - Item:
      - index: 3
      - expression: The next symbols are 0 and 1 respectively.
      - reason: The first configuration stays O next, while the second changes to E.
  - result:
    - exact: Both states=Odd; configurations differ
  - interpretation: Current state alone does not determine the next transition without the next unread symbol.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Apply δ(O,0)=O and δ(O,1)=E to the two actual next symbols.
  - limits: A configuration includes the unread suffix, not only the finite-state memory.
  - preset:
    - steps: 1
    - pattern: 10010010
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
    - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.

## Interactive

- component id: component:finite-state-machine
- renderer id: finite-state-machine-visual-model
- renderer version: 1
- model id: finite-state-machine-visual-model
- model revision: 1
- expression id: ast:finite-state-machine:expression
- interaction status: implemented
- description: Eight beads distinguish processed input, the next symbol and the unread suffix. Two state nodes show the actual 0 self-loops and 1 swaps; the current state and remaining suffix form one configuration.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 0
    - min: 0
    - max: 8
    - step: 1
  - Item:
    - id: pattern
    - type: enum
    - default: 10010010
    - values:
      - 10010010
      - 00000000
      - 11111111
      - 10101010
- expected cases:
  - Item:
    - input:
      - steps: 0
      - pattern: 10010010
    - output: 0
  - Item:
    - input:
      - steps: 1
      - pattern: 10010010
    - output: 1
  - Item:
    - input:
      - steps: 3
      - pattern: 10010010
    - output: 1
  - Item:
    - input:
      - steps: 4
      - pattern: 10010010
    - output: 0
  - Item:
    - input:
      - steps: 7
      - pattern: 10010010
    - output: 1
  - Item:
    - input:
      - steps: 8
      - pattern: 10010010
    - output: 1
  - Item:
    - input:
      - steps: 8
      - pattern: 00000000
    - output: 0
  - Item:
    - input:
      - steps: 8
      - pattern: 11111111
    - output: 0
  - Item:
    - input:
      - steps: 8
      - pattern: 10101010
    - output: 0
  - Item:
    - input:
      - steps: 1.5
      - pattern: 10010010
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 9
      - pattern: 10010010
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 3
      - pattern: 0000000
    - status: invalid_parameters
- compute: Start in state E. A 0 symbol preserves the state, while a 1 symbol swaps E and O. After k whole symbols, qₖ records the parity of the number of 1s in the processed prefix. The configuration is the pair of current state and unread suffix. E is the accepting state, but an eight-symbol word is accepted only when all eight symbols have been read and the final state is E.
- numeric tolerance: 1e-10
- invariants:
  - The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it.
  - Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols.
  - A configuration consists of the current state and the unread suffix. Equal current states can have different unread suffixes and therefore different future transitions.
  - E is an accepting state, but acceptance of the selected full word is reported only after all eight symbols have been read. Before that point the input is unfinished.
  - The parity invariant follows by induction on processed-prefix length: zero symbols contain an even count of 1s; reading 0 preserves the count and reading 1 toggles its parity.
- limits:
  - The executable input choices are four fixed binary words of length eight.
  - The numeric state encoding used by computation is not a truth value, count or probability; the learner sees Even and Odd.
  - This machine has no Turing tape, writable head or universal-computation mechanism.
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
  - prompt: Why is Even at the start not already an Accepted result?
  - answer: No symbols have been read, so the selected full word is still unfinished. Later 1 symbols may change its final parity.
- Item:
  - prompt: Can two configurations share a state and still differ?
  - answer: Yes. The same state paired with different unread suffixes can encounter different next symbols.

## Representations

- Item:
  - kind: geometry
  - description: Eight beads distinguish processed input, the next symbol and the unread suffix. Two state nodes show the actual 0 self-loops and 1 swaps; the current state and remaining suffix form one configuration.
- Item:
  - kind: graph
  - description: Categorical Even/Odd markers appear only at whole prefix lengths. The selected prefix and any comparison point refer to exact completed transitions rather than fractional states.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Read a bead word one symbol at a time and distinguish the current state, unread suffix and full-word acceptance.
  - limitations: The executable input choices are four fixed binary words of length eight.
  - evidence kind: constructed_example
  - example ref: math:example:finite-state-machine:seven-symbols
- Item:
  - context: Visit an accepting state before the input ends
  - mapping: An accepting state and an accepted complete word are different notions.
  - limitations: No full-word decision is made at a proper prefix.
  - evidence kind: constructed_example
  - example ref: math:example:finite-state-machine:accepting-before-finish

## Source Refs

- source:columbia:finite-automata

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.29.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:columbia:finite-automata. [Alfred Aho, COMS W3261, Lecture 2: Finite Automata and Regular Languages](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L2-Finite_Automata.html). Locator: Section 2: deterministic finite-automaton components, alphabet, transition function, accepting states and acceptance after a complete input. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
