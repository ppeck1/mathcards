---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:finite-state-machine:accepting-before-finish", "id": "math:example:finite-state-machine:accepting-before-finish", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:finite-state-machine", "example_id": "math:example:finite-state-machine:accepting-before-finish", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2d0add4d6b3e78a07a3df878988f0f48e9affa20f25281404b1f1baed8ceb6d9"}, "purpose": "Read a bead word one symbol at a time and distinguish the current state, unread suffix and full-word acceptance.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2d0add4d6b3e78a07a3df878988f0f48e9affa20f25281404b1f1baed8ceb6d9", "status": "draft", "title": "Visit an accepting state before the input ends", "topics": ["mathematics", "discrete-computation", "logic", "modeling", "deterministic finite automaton", "DFA", "finite automaton configuration", "parity machine"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Visit an accepting state before the input ends

Parent card: math:concept:finite-state-machine; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:finite-state-machine; revision 0.1.0-draft. Setting: A two-state deterministic finite automaton reading a fixed eight-symbol binary word from left to right. Expression: $Q=\{E,O\},\quad\Sigma=\{0,1\},\quad q_0=E,\quad\delta(q,0)=q,\quad\delta(E,1)=O,\quad\delta(O,1)=E.$. Conditions required for a defined value (a case may test their violation): The alphabet is Σ={0,1}, the states are Q={E,O}, and the initial state is E. Each 1 changes parity and each 0 preserves it. Choose one of the four stated eight-symbol words and a whole processed-prefix length k from zero through eight. Leading zeros remain input symbols. A configuration consists of the current state and the unread suffix. Equal current states can have different unread suffixes and therefore different future transitions. E is an accepting state, but acceptance of the selected full word is reported only after all eight symbols have been read. Before that point the input is unfinished. The parity invariant follows by induction on processed-prefix length: zero symbols contain an even count of 1s; reading 0 preserves the count and reading 1 toggles its parity. Scope: The machine has finite memory in its two states and no writable tape. Its remaining input is part of the configuration. This bounded example does not implement a Turing machine, a universal computer or an undecidability result.

Case unit math:example:finite-state-machine:accepting-before-finish. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"pattern": "10010010", "steps": 4}. Result: {"exact": "State=Even; accepting state=True; full input unfinished"}. Limits: No full-word decision is made at a proper prefix.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:columbia:finite-automata. [Alfred Aho, COMS W3261, Lecture 2: Finite Automata and Regular Languages](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L2-Finite_Automata.html). Locator: Section 2: deterministic finite-automaton components, alphabet, transition function, accepting states and acceptance after a complete input. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
