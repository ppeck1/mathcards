---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:relation:higher-requirement", "id": "math:example:relation:higher-requirement", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:relation", "example_id": "math:example:relation:higher-requirement", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c4e49ce3e290cefa1e4480d418f71f98184928ca4d29ab3a98714a5c1f151137"}, "purpose": "Change a combined-length requirement and follow one ordered pair into a binary relation and its complete membership count.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c4e49ce3e290cefa1e4480d418f71f98184928ca4d29ab3a98714a5c1f151137", "status": "draft", "title": "Raise the combined requirement", "topics": ["mathematics", "language-foundations", "sets", "logic", "binary relation", "ordered pair", "predicate arity", "relation membership"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Raise the combined requirement

Parent card: math:concept:relation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:relation; revision 0.1.0-draft. Setting: A binary length relation on two independent copies of one six-element domain. Expression: $D=\{2,4,6,8,10,12\}\,\mathrm{cm},\quad R_h=\{(x,y)\in D\times D:x+y\ge h\}.$. Conditions required for a defined value (a case may test their violation): There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed. The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal. The free requirement h ranges from zero to 26 cm. Membership means x+y≥h, with equality included. The relation Rₕ contains pairs, Rₕ(x,y) states one pair’s membership truth, and |Rₕ| is an integer count. A unary predicate such as x≥h has one argument and is a different test. Scope: Both argument positions range over the stated finite domain. Changing h changes the relation on that fixed domain product. A count of satisfying choices is not a probability unless an additional sampling model is supplied.

Case unit math:example:relation:higher-requirement. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"threshold": 18}. Result: {"exact": "|Rₕ|=10; Rₕ(6,8)=False"}. Limits: Failure of the highlighted pair does not imply that the relation is empty.

## Complete worked case

- id: math:example:relation:higher-requirement
- title: Raise the combined requirement
- role: applied_model
- question: At h=18 cm, how many choices remain?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
  - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
- inputs:
  - threshold: 18
- steps:
  - Item:
    - index: 1
    - expression: The six row counts are 0,0,1,2,3,4.
    - reason: Short left choices cannot reach 18 cm with the longest right strip.
  - Item:
    - index: 2
    - expression: |Rₕ|=0+0+1+2+3+4=10.
    - reason: Sum the complete membership rows.
  - Item:
    - index: 3
    - expression: Rₕ(6,8)=False because 14<18.
    - reason: Read one pair separately from the total count.
- result:
  - exact: |Rₕ|=10; Rₕ(6,8)=False
- interpretation: The requirement leaves ten qualifying ordered pairs.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: The sum counts at 18,20,22,24 cm are 4,3,2,1, totalling 10.
- limits: Failure of the highlighted pair does not imply that the relation is empty.
- preset:
  - threshold: 18
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
  - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.

## Written exploration recipe

- component id: component:relation
- renderer id: relation-visual-model
- renderer version: 1
- model id: relation-visual-model
- model revision: 1
- expression id: ast:relation:expression
- interaction status: implemented
- description: A labelled 6×6 membership grid keeps left and right choices separate. The distinguished 6 cm and 8 cm strips share a length scale with their 14 cm sum and the moving requirement.
- controls:
  - Item:
    - id: threshold
    - type: number
    - default: 18
    - min: 0
    - max: 26
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - threshold: 18
    - output: 10
  - Item:
    - input:
      - threshold: 14
    - output: 21
  - Item:
    - input:
      - threshold: 14.0001
    - output: 15
  - Item:
    - input:
      - threshold: 24
    - output: 1
  - Item:
    - input:
      - threshold: 24.0001
    - output: 0
  - Item:
    - input:
      - threshold: 0
    - output: 36
  - Item:
    - input:
      - threshold: 4
    - output: 36
  - Item:
    - input:
      - threshold: 4.0001
    - output: 35
  - Item:
    - input:
      - threshold: 26
    - output: 0
  - Item:
    - input:
      - threshold: -1
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 27
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 14
    - status: invalid_parameters
- compute: Choose a left length x and a right length y independently from D={2,4,6,8,10,12} cm. The predicate Rₕ(x,y) is true exactly when x+y≥h. The relation Rₕ is the set of satisfying ordered pairs; |Rₕ| counts those pairs. The highlighted pair is (6,8), with total 14 cm.
- numeric tolerance: 1e-10
- invariants:
  - There are two independent strip supplies, each offering lengths 2,4,6,8,10 and 12 cm. A left choice and a right choice form an ordered pair (x,y). Equal lengths are allowed.
  - The domain product D×D contains 36 ordered choices. The choices (6,8) and (8,6) are distinct even though their sums are equal.
  - The free requirement h ranges from zero to 26 cm. Membership means x+y≥h, with equality included.
  - The relation Rₕ contains pairs, Rₕ(x,y) states one pair’s membership truth, and |Rₕ| is an integer count. A unary predicate such as x≥h has one argument and is a different test.
- limits:
  - This executable relation uses one fixed finite domain and one sum-threshold predicate.
  - The two supplies are independent; the model does not choose two distinct objects without replacement from one tray.
  - A pair count alone does not assert a probability or model actual stock availability.
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

- Source ID: source:western:relations. [Alexander Brandt, Discrete Structures for Computing, 2.2 Relations](https://www.csd.uwo.ca/~abrandt5/teaching/DiscreteStructures/Chapter2/relations.html). Locator: Binary Relations and Relations as Predicates: Cartesian products, subsets of ordered pairs, and one-place versus two-place predicates. Verification: Definition-level material inspected 2026-10-27 on the official publisher or university teaching page. Supports definitions and stated conditions, not independent review, photographed-book coverage or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
