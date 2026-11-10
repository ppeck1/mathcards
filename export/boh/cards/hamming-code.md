---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:hamming-code", "id": "math:concept:hamming-code", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hamming-code", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5980dd81a678c535f513e3425fb6b8c4cf6e747ab6fc71d733f073c579505693"}, "purpose": "How can three overlapping checks tell us which bit changed?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5980dd81a678c535f513e3425fb6b8c4cf6e747ab6fc71d733f073c579505693", "status": "draft", "title": "Hamming code: locating one flipped bit", "topics": ["mathematics", "information", "computation", "discrete-mathematics", "hamming code: locating one flipped bit", "hamming code"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# Hamming code: locating one flipped bit

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:hamming-code; revision 0.1.0-draft. Setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u. Expression: $s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.$. Conditions required for a defined value (a case may test their violation): Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4. Scope: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.

## Schema Version

0.1.0

## Id

math:concept:hamming-code

## Slug

hamming-code

## Type

concept

## Title

Hamming code: locating one flipped bit

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-10T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- hamming code: locating one flipped bit
- hamming code

## Branches

- information
- computation
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can three overlapping checks tell us which bit changed?

## Meaning

A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.

## Prerequisites

- required:
  - math:concept:finite-state-machine
- helpful:
  - math:concept:modular-arithmetic
  - math:concept:numeral-system
- depth:
  []

## Definition

- setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
- formal latex: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
- signature:
  - d: Whole value represented by the original four data bits
  - j: Selected flipped bit position, with zero selecting no flip
  - c: Encoded seven-bit word with data and even-parity bits
  - r: Received seven-bit word after the selected flip
  - s₁: Even-parity check result for positions 1,3,5,7
  - s₂: Even-parity check result for positions 2,3,6,7
  - s₄: Even-parity check result for positions 4,5,6,7
  - s: Syndrome address computed from the three check results
  - u: Whole value represented by the recovered four data bits
- conditions:
  - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- domain notes: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
- proof status: Definition-level source and originally authored derivation; independent review pending.
- source refs:
  - source:information-bridge:hamming-code

## Grammar

- pronunciation: Hamming code: locating one flipped bit
- expression latex: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
- formation rule: A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.
- precedence: Compute the channel probabilities before entropy differences; for the code, take each check sum modulo two before forming its weighted syndrome address.
- symbols:
  - Item:
    - token: d
    - role: Whole value represented by the original four data bits
    - type: Locally declared communication quantity
  - Item:
    - token: j
    - role: Selected flipped bit position, with zero selecting no flip
    - type: Locally declared communication quantity
  - Item:
    - token: c
    - role: Encoded seven-bit word with data and even-parity bits
    - type: Locally declared communication quantity
  - Item:
    - token: r
    - role: Received seven-bit word after the selected flip
    - type: Locally declared communication quantity
  - Item:
    - token: s₁
    - role: Even-parity check result for positions 1,3,5,7
    - type: Locally declared communication quantity
  - Item:
    - token: s₂
    - role: Even-parity check result for positions 2,3,6,7
    - type: Locally declared communication quantity
  - Item:
    - token: s₄
    - role: Even-parity check result for positions 4,5,6,7
    - type: Locally declared communication quantity
  - Item:
    - token: s
    - role: Syndrome address computed from the three check results
    - type: Locally declared communication quantity
  - Item:
    - token: u
    - role: Whole value represented by the recovered four data bits
    - type: Locally declared communication quantity
- ast:
  - id: ast:hamming-code:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:flippedBit
      - kind: variable
      - type: Declared numeric input
      - symbol: j
      - scope ref: scope:hamming-code
    - Item:
      - id: n:dataWord
      - kind: variable
      - type: Declared numeric input
      - symbol: d
      - scope ref: scope:hamming-code
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded communication rule
      - ref: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Declared communication model value
      - function: n:rule
      - argument: n:flippedBit
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared communication model value
      - function: n:partial-0
      - argument: n:dataWord
  - scopes:
    - Item:
      - id: scope:hamming-code
      - kind: modelExpression
      - free variables:
        - j
        - d
      - external parameters:
        - Base-two entropy and binary arithmetic
      - domain condition: Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- parse errors:
  - Item:
    - input: Use unsupported probabilities or fractional bit positions
    - status: model mismatch
    - reason: Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- ast coverage: Typed application outline; the formal expression and stated channel/code assumptions declare the complete bounded rule.
- output symbol bindings:
  - d: dataWord
  - j: flippedBit
  - c: encodedWord
  - r: receivedWord
  - s₁: checkOne
  - s₂: checkTwo
  - s₄: checkFour
  - s: output
  - u: recoveredWord

## Properties

- Item:
  - claim: A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.
  - conditions: Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - derivation: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:hamming-code:case-1

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
  - conditions: Preserve the declared channel assumptions, units and finite domains.
  - reason: The communication model connects uncertainty, binary representation or exact parity arithmetic to the earlier lesson.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:modular-arithmetic
  - type: supports
  - conditions: Preserve the declared channel assumptions, units and finite domains.
  - reason: The communication model connects uncertainty, binary representation or exact parity arithmetic to the earlier lesson.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:numeral-system
  - type: supports
  - conditions: Preserve the declared channel assumptions, units and finite domains.
  - reason: The communication model connects uncertainty, binary representation or exact parity arithmetic to the earlier lesson.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:hamming-code:case-1
  - title: Repair a changed data bit
  - role: applied_model
  - question: How can three overlapping checks tell us which bit changed?
  - setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
  - assumptions:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - inputs:
    - dataWord: 5
    - flippedBit: 3
  - steps:
    - Item:
      - index: 1
      - expression: j = 3; d = 5
      - reason: Choose the four-bit data label and no flip or an ordinary flipped position.
    - Item:
      - index: 2
      - expression: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
      - reason: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
    - Item:
      - index: 3
      - expression: s = 3 position
      - reason: The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.
  - result:
    - exact: 3
  - interpretation: The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.
  - independent check:
    - method: Enumerate parity-matrix codewords and decode by the unique nearest codeword, independently of the syndrome-repair implementation.
    - expected: 3
  - limits: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - preset:
    - dataWord: 5
    - flippedBit: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- Item:
  - id: math:example:hamming-code:case-2
  - title: An unchanged zero label
  - role: applied_model
  - question: How can three overlapping checks tell us which bit changed?
  - setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
  - assumptions:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - inputs:
    - dataWord: 0
    - flippedBit: 0
  - steps:
    - Item:
      - index: 1
      - expression: j = 0; d = 0
      - reason: Choose the four-bit data label and no flip or an ordinary flipped position.
    - Item:
      - index: 2
      - expression: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
      - reason: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
    - Item:
      - index: 3
      - expression: s = 0 position
      - reason: No bit changes. All checks pass, the syndrome is zero, and the recovered label is 0000.
  - result:
    - exact: 0
  - interpretation: No bit changes. All checks pass, the syndrome is zero, and the recovered label is 0000.
  - independent check:
    - method: Enumerate parity-matrix codewords and decode by the unique nearest codeword, independently of the syndrome-repair implementation.
    - expected: 0
  - limits: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - preset:
    - dataWord: 0
    - flippedBit: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- Item:
  - id: math:example:hamming-code:case-3
  - title: A different label and data-bit position
  - role: applied_model
  - question: How can three overlapping checks tell us which bit changed?
  - setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
  - assumptions:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - inputs:
    - dataWord: 9
    - flippedBit: 5
  - steps:
    - Item:
      - index: 1
      - expression: j = 5; d = 9
      - reason: Choose the four-bit data label and no flip or an ordinary flipped position.
    - Item:
      - index: 2
      - expression: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
      - reason: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
    - Item:
      - index: 3
      - expression: s = 5 position
      - reason: The label 1001 is encoded as 0011001. Changing position five makes checks one and four fail; their address is five and the label is restored.
  - result:
    - exact: 5
  - interpretation: The label 1001 is encoded as 0011001. Changing position five makes checks one and four fail; their address is five and the label is restored.
  - independent check:
    - method: Enumerate parity-matrix codewords and decode by the unique nearest codeword, independently of the syndrome-repair implementation.
    - expected: 5
  - limits: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - preset:
    - dataWord: 9
    - flippedBit: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- Item:
  - id: math:example:hamming-code:case-4
  - title: Repair a changed parity bit
  - role: applied_model
  - question: How can three overlapping checks tell us which bit changed?
  - setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
  - assumptions:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - inputs:
    - dataWord: 15
    - flippedBit: 1
  - steps:
    - Item:
      - index: 1
      - expression: j = 1; d = 15
      - reason: Choose the four-bit data label and no flip or an ordinary flipped position.
    - Item:
      - index: 2
      - expression: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
      - reason: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
    - Item:
      - index: 3
      - expression: s = 1 position
      - reason: The all-one data label has an all-one encoded block. Changing parity position one does not change a data position, but the syndrome still locates that parity error and restores the full block.
  - result:
    - exact: 1
  - interpretation: The all-one data label has an all-one encoded block. Changing parity position one does not change a data position, but the syndrome still locates that parity error and restores the full block.
  - independent check:
    - method: Enumerate parity-matrix codewords and decode by the unique nearest codeword, independently of the syndrome-repair implementation.
    - expected: 1
  - limits: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - preset:
    - dataWord: 15
    - flippedBit: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
- Item:
  - id: math:example:hamming-code:case-5
  - title: Locate the last position
  - role: applied_model
  - question: How can three overlapping checks tell us which bit changed?
  - setting: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.
  - assumptions:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - inputs:
    - dataWord: 2
    - flippedBit: 7
  - steps:
    - Item:
      - index: 1
      - expression: j = 7; d = 2
      - reason: Choose the four-bit data label and no flip or an ordinary flipped position.
    - Item:
      - index: 2
      - expression: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
      - reason: Choose parity bits so the three selected-position sums are zero modulo two. If position j changes, each check changes exactly when the corresponding binary digit of j is one. The three check results therefore spell the binary representation of j, and s₁+2s₂+4s₄=j. A second change at that same position restores all seven bits. With no flip all checks remain zero and no repair is performed.
    - Item:
      - index: 3
      - expression: s = 7 position
      - reason: Position seven belongs to all three checks. All three fail, giving one plus two plus four, or seven. Repair recovers data 0010.
  - result:
    - exact: 7
  - interpretation: Position seven belongs to all three checks. All three fail, giving one plus two plus four, or seven. Repair recovers data 0010.
  - independent check:
    - method: Enumerate parity-matrix codewords and decode by the unique nearest codeword, independently of the syndrome-repair implementation.
    - expected: 7
  - limits: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - preset:
    - dataWord: 2
    - flippedBit: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.

## Interactive

- component id: component:hamming-code
- renderer id: hamming-code-visual-model
- renderer version: 1
- model id: hamming-code-visual-model
- model revision: 1
- expression id: ast:hamming-code:expression
- interaction status: implemented
- description: A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.
- controls:
  - Item:
    - id: flippedBit
    - type: number
    - default: 3
    - min: 0
    - max: 7
    - step: 1
  - Item:
    - id: dataWord
    - type: number
    - default: 5
    - min: 0
    - max: 15
    - step: 1
- expected cases:
  - Item:
    - input:
      - dataWord: 0
      - flippedBit: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - dataWord: 0
      - flippedBit: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - dataWord: 1
      - flippedBit: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - dataWord: 1
      - flippedBit: 3
    - status: valid
    - output: 3
  - Item:
    - input:
      - dataWord: 2
      - flippedBit: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - dataWord: 4
      - flippedBit: 4
    - status: valid
    - output: 4
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: 3
    - status: valid
    - output: 3
  - Item:
    - input:
      - dataWord: 8
      - flippedBit: 2
    - status: valid
    - output: 2
  - Item:
    - input:
      - dataWord: 9
      - flippedBit: 5
    - status: valid
    - output: 5
  - Item:
    - input:
      - dataWord: 10
      - flippedBit: 6
    - status: valid
    - output: 6
  - Item:
    - input:
      - dataWord: 15
      - flippedBit: 0
    - status: valid
    - output: 0
  - Item:
    - input:
      - dataWord: 15
      - flippedBit: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - dataWord: 15
      - flippedBit: 7
    - status: valid
    - output: 7
  - Item:
    - input:
      - dataWord: -1
      - flippedBit: 0
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 16
      - flippedBit: 0
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 0.5
      - flippedBit: 0
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: 8
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: -0.1
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: 2.5
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: true
      - flippedBit: 3
    - status: invalid_parameters
  - Item:
    - input:
      - dataWord: 5
      - flippedBit: null
    - status: invalid_parameters
- compute: s_1=(r_1+r_3+r_5+r_7)\bmod2,\quad s_2=(r_2+r_3+r_6+r_7)\bmod2,\quad s_4=(r_4+r_5+r_6+r_7)\bmod2,\quad s=s_1+2s_2+4s_4.
- numeric tolerance: 5e-11
- invariants:
  - Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4.
  - Story, calculation and both views evaluate the same declared inputs.
  - Information bars use one fixed zero-to-one bit-per-use scale; parity words retain ordinary position order.
- limits:
  - This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
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
  - prompt: How can three overlapping checks tell us which bit changed?
  - answer: A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.
- Item:
  - prompt: What does the visual measure?
  - answer: A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.

## Representations

- Item:
  - kind: geometry
  - description: Aligned information bars or binary blocks with actual measured values and check addresses.
- Item:
  - kind: graph
  - description: Fixed-scale capacity and chosen-input information curves against flip probability, or separate exact syndrome samples at the eight supported flip selections.
- Item:
  - kind: substitution
  - description: A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.

## Applications

- Item:
  - context: Repair a changed data bit
  - mapping: The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.
  - limitations: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - evidence kind: constructed_example
  - example ref: math:example:hamming-code:case-1
- Item:
  - context: An unchanged zero label
  - mapping: No bit changes. All checks pass, the syndrome is zero, and the recovered label is 0000.
  - limitations: This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.
  - evidence kind: constructed_example
  - example ref: math:example:hamming-code:case-2

## Source Refs

- source:information-bridge:hamming-code

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded communication bridge, connected story and quantitative views.

## Referenced source registry

- Source ID: source:information-bridge:hamming-code. [Cornell University · CS414, Calculating the Hamming Code](https://www.cs.cornell.edu/courses/cs414/2007su/slides/hamming.html). Locator: Construction steps 1–4: parity positions at powers of two, data at remaining positions and even-parity coverage. Finding and fixing a bad bit: the sum of failed parity positions names a single erroneous bit. The seven-position status-label family and its examples are original constructions.. Verification: Definition-level source inspected 2026-11-10. Independent mathematics and teaching review and exact-edition book-page verification remain pending.. Rights: Original workshop scenarios, calculations, code-native diagrams and finite data. No source exercise, diagram or wording reproduced.
