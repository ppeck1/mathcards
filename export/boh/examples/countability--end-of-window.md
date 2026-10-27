---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:countability:end-of-window", "id": "math:example:countability:end-of-window", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:countability", "example_id": "math:example:countability:end-of-window", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "0a6dcf9f6a5dd58f5e4f86cc9f15e4b77d096babf25d3af15573b5a0ec47af9d"}, "purpose": "Follow a natural-number index to an integer address, then use the inverse rule to recover the index.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "0a6dcf9f6a5dd58f5e4f86cc9f15e4b77d096babf25d3af15573b5a0ec47af9d", "status": "draft", "title": "Read the last displayed match", "topics": ["mathematics", "language-foundations", "sets", "number-arithmetic", "countable set", "denumerable", "integer enumeration", "bijection with natural numbers"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Read the last displayed match

Parent card: math:concept:countability; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:countability; revision 0.1.0-draft. Setting: A proved bijection from the nonnegative natural numbers ℕ₀ to the integers ℤ, illustrated in a finite index window. Expression: $f(0)=0,\quad f(n)=\begin{cases}(n+1)/2&n\text{ odd},\\-n/2&n>0\text{ even},\end{cases}\quad g(z)=\begin{cases}2z-1&z>0,\\-2z&z\le0.\end{cases}$. Conditions required for a defined value (a case may test their violation): The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0. The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality. For every n∈ℕ₀ and z∈ℤ, the stated piecewise rules satisfy g(f(n))=n and f(g(z))=z. These all-input identities establish that the full rule is a bijection. In this reference, countable means finite or denumerable. The integers are denumerable, with cardinality ℵ₀; a finite prefix alone does not establish that claim. Scope: The selected shelf-address analogy shows thirteen possible matches. The explicit all-input rule and inverse argument concern the complete infinite sets, rather than inferring infinity or exhaustiveness from a finite animation.

Case unit math:example:countability:end-of-window. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"index": 12}. Result: {"exact": "f(12)=−6; g(−6)=12"}. Limits: The full rule continues beyond the live window.

## Complete worked case

- id: math:example:countability:end-of-window
- title: Read the last displayed match
- role: applied_model
- question: Which integer pairs with n=12?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
  - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
- inputs:
  - index: 12
- steps:
  - Item:
    - index: 1
    - expression: f(12)=−12/2=−6.
    - reason: Use the positive even branch.
  - Item:
    - index: 2
    - expression: g(−6)=12.
    - reason: Recover the displayed endpoint index.
- result:
  - exact: f(12)=−6; g(−6)=12
- interpretation: The finite window reaches its last displayed negative address.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: The prefix consists of indices 0 through 12, so it has 13 matches.
- limits: The full rule continues beyond the live window.
- preset:
  - index: 12
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
  - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.

## Written exploration recipe

- component id: component:countability
- renderer id: countability-visual-model
- renderer version: 1
- model id: countability-visual-model
- model revision: 1
- expression id: ast:countability:expression
- interaction status: implemented
- description: A fixed index row and a signed integer-address line show selected pairings without rearranging the scale. The current prefix is emphasized while upcoming matches remain visible.
- controls:
  - Item:
    - id: index
    - type: number
    - default: 4
    - min: 0
    - max: 12
    - step: 1
- expected cases:
  - Item:
    - input:
      - index: 0
    - output: 0
  - Item:
    - input:
      - index: 1
    - output: 1
  - Item:
    - input:
      - index: 2
    - output: -1
  - Item:
    - input:
      - index: 3
    - output: 2
  - Item:
    - input:
      - index: 4
    - output: -2
  - Item:
    - input:
      - index: 5
    - output: 3
  - Item:
    - input:
      - index: 8
    - output: -4
  - Item:
    - input:
      - index: 11
    - output: 6
  - Item:
    - input:
      - index: 12
    - output: -6
  - Item:
    - input:
      - index: -1
    - status: invalid_parameters
  - Item:
    - input:
      - index: 13
    - status: invalid_parameters
  - Item:
    - input:
      - index: 1.5
    - status: invalid_parameters
- compute: Use f(0)=0. For odd n use f(n)=(n+1)/2; for positive even n use f(n)=−n/2. The inverse is g(z)=2z−1 for positive z and g(z)=−2z for nonpositive z. The identities g(f(n))=n and f(g(z))=z establish a bijection ℕ₀→ℤ.
- numeric tolerance: 1e-10
- invariants:
  - The mathematical index domain ℕ₀ contains 0,1,2,… . Including zero lets the central integer address 0 be paired directly with index 0.
  - The live window selects a whole index n from zero to twelve. Its primary result is the integer f(n), and its prefix contains n+1 matches. Neither result is an infinite cardinality.
  - For every n∈ℕ₀ and z∈ℤ, the stated piecewise rules satisfy g(f(n))=n and f(g(z))=z. These all-input identities establish that the full rule is a bijection.
  - In this reference, countable means finite or denumerable. The integers are denumerable, with cardinality ℵ₀; a finite prefix alone does not establish that claim.
- limits:
  - The live controls display only indices zero through twelve.
  - The selected integer and finite prefix size are different quantities from ℵ₀.
  - This lesson establishes the stated integer bijection, not uncountability, ordinal arithmetic or a theorem about countable models.
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

- Source ID: source:lebl:cardinality. [Jiří Lebl, Basic Analysis, 0.3 Basic Set Theory](https://jirilebl.github.io/ra/html/sec_basicset.html). Locator: Sections 0.3.3 and 0.3.5: injective/surjective/bijective functions, cardinality, countable versus countably infinite, and aleph-zero notation. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
