---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:turing-machine:first-carry", "id": "math:example:turing-machine:first-carry", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:turing-machine", "example_id": "math:example:turing-machine:first-carry", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c28e4c03aaa73a62520b9032f5ca11c721a619be96e06ab01ab25da1ac8db093", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f886c3d471c6a5f7846942cab59b41ccd587132d7e08b8dec819649c2d54f050"}, "purpose": "Follow a binary library counter through a writable tape, a moving head and the exact carry that adds one.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f886c3d471c6a5f7846942cab59b41ccd587132d7e08b8dec819649c2d54f050", "status": "draft", "title": "Watch a stored bit actually change", "topics": ["mathematics", "discrete-computation", "logic", "modeling", "Turing machine", "writable tape", "binary increment machine", "read-write head", "machine configuration"], "type": "reference", "updated": "2026-11-01T00:00:00Z", "version": "0.1.0-draft"}
---

# Watch a stored bit actually change

Parent card: math:concept:turing-machine; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:turing-machine; revision 0.1.0-draft. Setting: A deterministic binary-increment machine with a two-sided tape, four selectable four-bit words and a finite view of exact whole transitions. Expression: $\delta(S,0)=(S,0,R),\quad\delta(S,1)=(S,1,R),\quad\delta(S,\square)=(C,\square,L),\quad\delta(C,1)=(C,0,L),\quad\delta(C,0)=(H,1,R),\quad\delta(C,\square)=(H,1,R).$. Conditions required for a defined value (a case may test their violation): The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S. The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs. State S scans right without altering bits. On the first blank to the right, it enters carry state C and moves left. In C, a 1 becomes 0 and the head moves left; a 0 or blank becomes 1 and the machine enters H after moving right. H is a halting state with no outgoing transition. Scrubbing beyond the actual halt leaves the configuration and actual transition count unchanged. The displayed unsigned tape numeral vₖ can decrease while the carry is propagating. It equals the completed input-plus-one result only after the machine halts. Leading zeros remain visible; overflow can write one bit to the left of the original word. Scope: This is one explicitly stated Turing-machine variant and one small program. The display covers its selected inputs, not every tape configuration. It does not establish universality, the Church–Turing thesis or undecidability.

Case unit math:example:turing-machine:first-carry. Setting: An originally authored library scenario with stipulated inputs and rules. Inputs: {"steps": 6, "word": "1011"}. Result: {"exact": "v₆=10; state C; head address 2; not halted"}. Limits: The tape reading can fall during a correct increment program; it is not the final arithmetic result yet.

## Complete worked case

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
- conditions to check:
  - The input alphabet consists of the two digits 0 and 1. The selected input word w is one of 0101, 1011, 1111 or 0000. Its four bits occupy integer tape addresses 0 through 3; all other cells are blank □. The head begins at address 0 in state S.
  - The writable tape extends in both directions. The read/write head selects one tape cell; a tape read obtains its current symbol. Each machine step reads that cell, writes one symbol, follows the head direction left or right, and changes the finite control state according to the transition rule. The finite viewport contains every visited cell for the four available inputs.

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:ucdavis:turing-configurations. [ECS 120: Turing Machines — David Doty, UC Davis](https://web.cs.ucdavis.edu/~doty/ecs120slides/08a_TuringMachines-deck.html). Locator: Turing-machine read/write transitions and configuration (q,p,x). Verification: Read/write/head-motion and configuration definitions inspected 2026-11-01. The source uses a right-unbounded tape variant; the original lesson explicitly chooses a two-sided tape and left/right-only moves. Not independent review.. Rights: Definition-level reference only; program, story, diagrams and worked traces are originally authored.

- Source ID: source:princeton:turing-tape. [COS 126: Turing Machines — Princeton University](https://www.cs.princeton.edu/courses/archive/fall02/cs126/lectures/T1-4up.pdf). Locator: PDF pages 1–2, lecture slides 5–8: arbitrarily long tape, read/write head, left/right movement and halting. Verification: Tape/head/read-write and halt descriptions inspected 2026-11-01; the lesson states its own deterministic two-sided variant and six original transition rules. Not independent review.. Rights: Definition-level reference only; no lecture prose or example program copied.
