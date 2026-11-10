---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:turing-machine", "id": "math:concept:turing-machine", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:turing-machine", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f886c3d471c6a5f7846942cab59b41ccd587132d7e08b8dec819649c2d54f050"}, "purpose": "Follow a binary library counter through a writable tape, a moving head and the exact carry that adds one.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f886c3d471c6a5f7846942cab59b41ccd587132d7e08b8dec819649c2d54f050", "status": "draft", "title": "Writable Turing-machine tape", "topics": ["mathematics", "discrete-computation", "logic", "modeling", "Turing machine", "writable tape", "binary increment machine", "read-write head", "machine configuration"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Writable Turing-machine tape

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:turing-machine; revision 0.1.0-draft. Setting: A deterministic binary-increment machine with a two-sided tape, four selectable four-bit words and a finite view of exact whole transitions. Expression: $\delta(S,0)=(S,0,R),\quad\delta(S,1)=(S,1,R),\quad\delta(S,\square)=(C,\square,L),\quad\delta(C,1)=(C,0,L),\quad\delta(C,0)=(H,1,R),\quad\delta(C,\square)=(H,1,R).$. Conditions required for a defined value (a case may test their violation): The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S. The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs. State S scans right without altering bits. On the first blank to the right, it enters carry state C and moves left. In C, a 1 becomes 0 and the head moves left; a 0 or blank becomes 1 and the machine enters H after moving right. H is a halting state with no outgoing transition. Scrubbing beyond the actual halt leaves the configuration and actual transition count unchanged. The displayed unsigned tape numeral vₖ can decrease while the carry is propagating. It equals the completed input-plus-one result only after the machine halts. Leading zeros remain visible; overflow can write one bit to the left of the original word. Scope: This is one explicitly stated Turing-machine variant and one small program. The display covers its selected inputs, not every tape configuration. It does not establish universality, the Church–Turing thesis or undecidability.

## Schema Version

0.1.0

## Id

math:concept:turing-machine

## Slug

turing-machine

## Type

concept

## Title

Writable Turing-machine tape

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

- Turing machine
- writable tape
- binary increment machine
- read-write head
- machine configuration

## Branches

- discrete-computation
- logic
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow a binary library counter through a writable tape, a moving head and the exact carry that adds one.

## Meaning

A Turing machine combines finite control with a writable tape and a read-write head. Its configuration includes the current state, head position and tape contents. This original binary-increment program scans to the word’s right edge, carries left, then halts; its intermediate tape reading is not yet the increment result.

## Prerequisites

- required:
  - math:concept:finite-state-machine
- helpful:
  - math:concept:recurrence
  - math:concept:function
- depth:
  - math:concept:computability

## Definition

- setting: A deterministic binary-increment machine with a two-sided tape, four selectable four-bit words and a finite view of exact whole transitions.
- formal latex: \delta(S,0)=(S,0,R),\quad\delta(S,1)=(S,1,R),\quad\delta(S,\square)=(C,\square,L),\quad\delta(C,1)=(C,0,L),\quad\delta(C,0)=(H,1,R),\quad\delta(C,\square)=(H,1,R).
- signature:
  - w: Selected four-bit input word.
  - k: Requested whole transition step.
  - qₖ: Current finite control state after the selected transitions, stopping at halt.
  - hₖ: Current head address on the integer-addressed tape.
  - vₖ: Unsigned value of the current written binary numeral; intermediate until halt.
  - δ: Transition function assigning next state, written symbol and head direction.
  - □: Blank tape symbol, distinct from the digit 0.
  - S: Scanning state.
  - C: Carry state.
  - H: Halting state.
  - L: Move the tape head one address left.
  - R: Move the tape head one address right.
- conditions:
  - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
  - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - State S scans right without altering bits. On the first blank to the right, it enters carry state C and moves left. In C, a 1 becomes 0 and the head moves left; a 0 or blank becomes 1 and the machine enters H after moving right.
  - H is a halting state with no outgoing transition. Scrubbing beyond the actual halt leaves the configuration and actual transition count unchanged.
  - The displayed unsigned tape numeral vₖ can decrease while the carry is propagating. It equals the completed input-plus-one result only after the machine halts. Leading zeros remain visible; overflow can write one bit to the left of the original word.
- domain notes: This is one explicitly stated Turing-machine variant and one small program. The display covers its selected inputs, not every tape configuration. It does not establish universality, the Church–Turing thesis or undecidability.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:ucdavis:turing-configurations
  - source:princeton:turing-tape

## Grammar

- pronunciation: Writable Turing-machine tape
- expression latex: \delta(S,0)=(S,0,R),\quad\delta(S,1)=(S,1,R),\quad\delta(S,\square)=(C,\square,L),\quad\delta(C,1)=(C,0,L),\quad\delta(C,0)=(H,1,R),\quad\delta(C,\square)=(H,1,R).
- formation rule: Start with w at addresses 0 through 3, state S and head address 0. Apply the stated read-write-move transition table at most k times, stopping immediately at H. Read the current unsigned binary numeral from the written tape; call it the completed increment result only if H has been reached.
- precedence: Start with w at addresses 0 through 3, state S and head address 0. Apply the stated read-write-move transition table at most k times, stopping immediately at H. Read the current unsigned binary numeral from the written tape; call it the completed increment result only if H has been reached.
- symbols:
  - Item:
    - token: w
    - role: Selected four-bit input word.
    - type: Declared symbol in the stated model
  - Item:
    - token: k
    - role: Requested whole transition step.
    - type: Declared symbol in the stated model
  - Item:
    - token: qₖ
    - role: Current finite control state after the selected transitions, stopping at halt.
    - type: Declared symbol in the stated model
  - Item:
    - token: hₖ
    - role: Current head address on the integer-addressed tape.
    - type: Declared symbol in the stated model
  - Item:
    - token: vₖ
    - role: Unsigned value of the current written binary numeral; intermediate until halt.
    - type: Declared symbol in the stated model
  - Item:
    - token: δ
    - role: Transition function assigning next state, written symbol and head direction.
    - type: Declared symbol in the stated model
  - Item:
    - token: □
    - role: Blank tape symbol, distinct from the digit 0.
    - type: Declared symbol in the stated model
  - Item:
    - token: S
    - role: Scanning state.
    - type: Declared symbol in the stated model
  - Item:
    - token: C
    - role: Carry state.
    - type: Declared symbol in the stated model
  - Item:
    - token: H
    - role: Halting state.
    - type: Declared symbol in the stated model
  - Item:
    - token: L
    - role: Move the tape head one address left.
    - type: Declared symbol in the stated model
  - Item:
    - token: R
    - role: Move the tape head one address right.
    - type: Declared symbol in the stated model
- ast:
  - id: ast:turing-machine:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared model input or inspection choice
      - symbol: k
      - scope ref: scope:turing-machine:expression
    - Item:
      - id: n:word
      - kind: variable
      - type: Declared model input or inspection choice
      - symbol: w
      - scope ref: scope:turing-machine:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the declared executable family
      - ref: Start with w at addresses 0 through 3, state S and head address 0. Apply the stated read-write-move transition table at most k times, stopping immediately at H. Read the current unsigned binary numeral from the written tape; call it the completed increment result only if H has been reached.
    - Item:
      - id: n:bound-steps
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:steps
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-steps
      - argument: n:word
  - scopes:
    - Item:
      - id: scope:turing-machine:expression
      - kind: modelExpression
      - free variables:
        - k
        - w
      - domain condition: A deterministic binary-increment machine with a two-sided tape, four selectable four-bit words and a finite view of exact whole transitions.
- parse errors:
  - Item:
    - input: Treat □ as the binary digit 0
    - status: alphabet error
    - reason: A blank marks unwritten tape; the transition rule may treat a blank differently from a written zero.
  - Item:
    - input: Count additional transitions after H
    - status: halting error
    - reason: H has no outgoing transition. A later requested viewing step preserves the halted configuration.
  - Item:
    - input: Use k=6.5
    - status: domain error
    - reason: A configuration follows a whole number of completed machine transitions.
- ast coverage: A typed application outline of the declared finite executable family; it is not an arbitrary formula parser or a general proof checker.
- output symbol bindings:
  - w: word
  - k: steps
  - qₖ: state
  - hₖ: head
  - vₖ: tapeValue

## Properties

- Item:
  - claim: The program increments each available input word by one.
  - conditions: Use the stated scanning and carry transition table.
  - derivation: Scanning leaves the word unchanged. In carry state, a trailing block of 1s becomes zeros; the first preceding 0 becomes 1, or a new leading 1 is written on a blank. This is binary addition of one.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:turing-machine:completed-carry
- Item:
  - claim: The finite state alone does not determine the configuration.
  - conditions: A configuration includes state, head address and tape contents.
  - derivation: Carry state C can occur with different head positions and different partially rewritten tape words; those differences determine subsequent reads.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:turing-machine:first-carry

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
  - target: math:concept:finite-state-machine
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Both use finite control states and a deterministic transition rule; the Turing program additionally writes memory and moves a tape head.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:recurrence
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Successive configurations arise from repeated application of one transition rule.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:computability
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A tape machine provides a formal computation model, while universality and undecidability require separate arguments.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:turing-machine:scanned-word
  - title: Reach the blank without changing the count
  - role: applied_model
  - question: What is on the tape after four transitions from 1011?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - inputs:
    - steps: 4
    - word: 1011
  - steps:
    - Item:
      - index: 1
      - expression: S reads the four bits 1,0,1,1 and moves right four times.
      - reason: Scanning preserves each read bit.
    - Item:
      - index: 2
      - expression: The head is at address 4, reading □; the tape still reads 1011.
      - reason: The right-edge blank has not yet been processed.
  - result:
    - exact: v₄=11; state S; head address 4; not halted
  - interpretation: A moving head can change the configuration while leaving every tape bit unchanged.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: Four applications of the S digit rules preserve 1011; binary 8+2+1=11.
  - limits: The current tape reading is an intermediate reading, even though it still equals the input.
  - preset:
    - steps: 4
    - word: 1011
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
- Item:
  - id: math:example:turing-machine:first-carry
  - title: Watch a stored bit actually change
  - role: applied_model
  - question: What happens at transition six from 1011?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - inputs:
    - steps: 6
    - word: 1011
  - steps:
    - Item:
      - index: 1
      - expression: After scanning, δ(S,□)=(C,□,L) moves from address 4 to address 3.
      - reason: The blank stays blank while the control enters carry mode.
    - Item:
      - index: 2
      - expression: δ(C,1)=(C,0,L) writes 0 at address 3 and moves to address 2.
      - reason: The carry crosses the first trailing 1.
    - Item:
      - index: 3
      - expression: The tape reads 1010, so v₆=10.
      - reason: The previous 1 is now a stored 0.
  - result:
    - exact: v₆=10; state C; head address 2; not halted
  - interpretation: Writable memory changes independently of the finite control state; C continues while the tape changes.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: At address 3, changing its units bit from 1 to 0 subtracts one from 11, leaving 10.
  - limits: The tape reading can fall during a correct increment program; it is not the final arithmetic result yet.
  - preset:
    - steps: 6
    - word: 1011
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
- Item:
  - id: math:example:turing-machine:completed-carry
  - title: Finish eleven plus one
  - role: applied_model
  - question: When does 1011 become the completed increment result?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - inputs:
    - steps: 8
    - word: 1011
  - steps:
    - Item:
      - index: 1
      - expression: The two trailing 1s become 0s as the carry moves left.
      - reason: Transitions six and seven apply δ(C,1).
    - Item:
      - index: 2
      - expression: At address 1, δ(C,0)=(H,1,R) changes 0 to 1, moves to address 2 and halts.
      - reason: The first zero absorbs the carry.
    - Item:
      - index: 3
      - expression: The final word is 1100 and its value is 8+4=12.
      - reason: Only the halting configuration is labeled the completed increment.
  - result:
    - exact: 1100₂=12; H after 8 transitions; head address 2
  - interpretation: The carry rewrites the tape and then stops; state, head and tape together describe the result.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: 11+1=12, and the independently read binary word 1100 also equals 12.
  - limits: The head has moved right after the last write; it need not remain on the changed bit.
  - preset:
    - steps: 8
    - word: 1011
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
- Item:
  - id: math:example:turing-machine:left-overflow
  - title: Make room for the overflow bit
  - role: applied_model
  - question: How does the machine add one to 1111?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - inputs:
    - steps: 10
    - word: 1111
  - steps:
    - Item:
      - index: 1
      - expression: After scanning, four successive carry transitions rewrite 1111 as 0000 and reach address −1.
      - reason: Every input digit was 1, so none absorbs the carry.
    - Item:
      - index: 2
      - expression: δ(C,□)=(H,1,R) writes a new 1 at address −1 and moves to address 0.
      - reason: The writable tape supplies a cell beyond the original input.
    - Item:
      - index: 3
      - expression: The five-bit final numeral is 10000.
      - reason: The added leading bit has value 16.
  - result:
    - exact: 10000₂=16; H after 10 transitions; head address 0
  - interpretation: The program has a fixed finite control, while its tape can grow beyond the original word.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: 15+1=16 and 10000₂=16.
  - limits: One overflow example illustrates writable memory; it does not show a universal computer.
  - preset:
    - steps: 10
    - word: 1111
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
- Item:
  - id: math:example:turing-machine:halt-is-stable
  - title: Stop counting transitions when the machine stops
  - role: applied_model
  - question: What does requested step ten show for input 0000?
  - setting: An originally authored library scenario with stipulated inputs and rules.
  - assumptions:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - inputs:
    - steps: 10
    - word: 0000
  - steps:
    - Item:
      - index: 1
      - expression: Four scan transitions and one blank transition prepare the carry.
      - reason: No input bit has changed yet.
    - Item:
      - index: 2
      - expression: The last digit 0 becomes 1 at transition six, and the machine halts.
      - reason: δ(C,0) writes 1, moves right and enters H.
    - Item:
      - index: 3
      - expression: Requested viewing step ten still shows 0001 and only six actual transitions.
      - reason: A halted configuration has no next machine transition.
  - result:
    - exact: 0001₂=1; H after 6 actual transitions; requested step 10
  - interpretation: A viewing timeline can extend past the actual computation without inventing further work.
  - independent check:
    - method: Separate exact trace or rule check
    - expected: The input value is zero, the final value is one, and the exact rule trace has length six.
  - limits: The requested step and the count of actual transitions are separate quantities.
  - preset:
    - steps: 10
    - word: 0000
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
    - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.

## Interactive

- component id: component:turing-machine
- renderer id: turing-machine-visual-model
- renderer version: 1
- model id: turing-machine-visual-model
- model revision: 1
- expression id: ast:turing-machine:expression
- interaction status: implemented
- description: A writable tape shows each actual cell, the head and its current state. The active rule identifies the symbol read, symbol written and head direction; changed digits explain the current tape numeral.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 0
    - min: 0
    - max: 10
    - step: 1
  - Item:
    - id: word
    - type: enum
    - default: 1011
    - values:
      - 0101
      - 1011
      - 1111
      - 0000
- expected cases:
  - Item:
    - input:
      - steps: 0
      - word: 1011
    - output: 11
  - Item:
    - input:
      - steps: 4
      - word: 1011
    - output: 11
  - Item:
    - input:
      - steps: 5
      - word: 1011
    - output: 11
  - Item:
    - input:
      - steps: 6
      - word: 1011
    - output: 10
  - Item:
    - input:
      - steps: 7
      - word: 1011
    - output: 8
  - Item:
    - input:
      - steps: 8
      - word: 1011
    - output: 12
  - Item:
    - input:
      - steps: 10
      - word: 1111
    - output: 16
  - Item:
    - input:
      - steps: 10
      - word: 0000
    - output: 1
  - Item:
    - input:
      - steps: 7
      - word: 0101
    - output: 6
  - Item:
    - input:
      - steps: 6.5
      - word: 1011
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 11
      - word: 1011
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 3
      - word: 101
    - status: invalid_parameters
- compute: Start with w at addresses 0 through 3, state S and head address 0. Apply the stated read-write-move transition table at most k times, stopping immediately at H. Read the current unsigned binary numeral from the written tape; call it the completed increment result only if H has been reached.
- numeric tolerance: 1e-10
- invariants:
  - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
  - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.
  - State S scans right without altering bits. On the first blank to the right, it enters carry state C and moves left. In C, a 1 becomes 0 and the head moves left; a 0 or blank becomes 1 and the machine enters H after moving right.
  - H is a halting state with no outgoing transition. Scrubbing beyond the actual halt leaves the configuration and actual transition count unchanged.
  - The displayed unsigned tape numeral vₖ can decrease while the carry is propagating. It equals the completed input-plus-one result only after the machine halts. Leading zeros remain visible; overflow can write one bit to the left of the original word.
- limits:
  - This is one explicitly stated Turing-machine variant and one small program. The display covers its selected inputs, not every tape configuration. It does not establish universality, the Church–Turing thesis or undecidability.
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
  - prompt: Can the current tape value decrease during a correct increment?
  - answer: Yes. Changing a trailing 1 to 0 lowers that intermediate reading while the carry continues left. The final increment is read only at halt.
- Item:
  - prompt: Does the head remain on the last bit written?
  - answer: Not in this convention. Each transition also moves left or right; the transition into H moves right after writing.

## Representations

- Item:
  - kind: geometry
  - description: A writable tape shows each actual cell, the head and its current state. The active rule identifies the symbol read, symbol written and head direction; changed digits explain the current tape numeral.
- Item:
  - kind: graph
  - description: Discrete samples on fixed axes show the current unsigned tape value from 0 through 16 at whole transition steps. Equal readings after halt reflect an unchanged configuration. The selection ring marks the requested step, not a fractional state or a separate halt marker.
- Item:
  - kind: substitution
  - description: Follow the selected whole step through its rule into the labelled configuration or checked proof line.

## Applications

- Item:
  - context: Constructed library example
  - mapping: Follow a binary library counter through a writable tape, a moving head and the exact carry that adds one.
  - limitations: This is one explicitly stated Turing-machine variant and one small program. The display covers its selected inputs, not every tape configuration. It does not establish universality, the Church–Turing thesis or undecidability.
  - evidence kind: constructed_example
  - example ref: math:example:turing-machine:scanned-word
- Item:
  - context: Watch a stored bit actually change
  - mapping: Writable memory changes independently of the finite control state; C continues while the tape changes.
  - limitations: The tape reading can fall during a correct increment program; it is not the final arithmetic result yet.
  - evidence kind: constructed_example
  - example ref: math:example:turing-machine:first-carry

## Source Refs

- source:ucdavis:turing-configurations
- source:princeton:turing-tape

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.32.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve fixtures in the computation-and-proof sequence.

## Referenced source registry

- Source ID: source:ucdavis:turing-configurations. [ECS 120: Turing Machines — David Doty, UC Davis](https://web.cs.ucdavis.edu/~doty/ecs120slides/08a_TuringMachines-deck.html). Locator: Turing-machine read/write transitions and configuration (q,p,x). Verification: Read/write/head-motion and configuration definitions inspected 2026-11-01. The source uses a right-unbounded tape variant; the original lesson explicitly chooses a two-sided tape and left/right-only moves. Not independent review.. Rights: Definition-level reference only; program, story, diagrams and worked traces are originally authored.

- Source ID: source:princeton:turing-tape. [COS 126: Turing Machines — Princeton University](https://www.cs.princeton.edu/courses/archive/fall02/cs126/lectures/T1-4up.pdf). Locator: PDF pages 1–2, lecture slides 5–8: arbitrarily long tape, read/write head, left/right movement and halting. Verification: Tape/head/read-write and halt descriptions inspected 2026-11-01; the lesson states its own deterministic two-sided variant and six original transition rules. Not independent review.. Rights: Definition-level reference only; no lecture prose or example program copied.
