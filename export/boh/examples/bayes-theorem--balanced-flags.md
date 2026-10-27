---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:bayes-theorem:balanced-flags", "id": "math:example:bayes-theorem:balanced-flags", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:bayes-theorem", "example_id": "math:example:bayes-theorem:balanced-flags", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "aa303ec97ac5f973b22923689e6a3d7b4c22178152d4132c548a8292f877163b"}, "purpose": "Find the fraction of flagged items that truly belong to a target group.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "aa303ec97ac5f973b22923689e6a3d7b4c22178152d4132c548a8292f877163b", "status": "draft", "title": "Half the flags are defects", "topics": ["mathematics", "probability", "modeling", "conditional probability update", "base rate"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Half the flags are defects

Parent card: math:concept:bayes-theorem; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:bayes-theorem; revision 0.1.0-draft. Setting: Find the fraction of flagged items that truly belong to a target group. Expression: $P(D\mid +)=\frac{ps}{ps+(1-p)f}$. Conditions required for a defined value (a case may test their violation): Every item is either defective or nondefective in the stated model. The conditional flag probabilities apply to the same population as the prior. The probability of receiving a flag is positive. Scope: The interactive controls restrict each parameter to its declared finite interval. The area diagram represents proportions rather than measured counts or a validated inspection system.

Case unit math:example:bayes-theorem:balanced-flags. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"falsePositive": 0.1, "prior": 0.1, "sensitivity": 0.9}. Result: {"exact": "0.5 = 50%"}. Limits: The rates are constructed and assumed applicable to one population.

## Complete worked case

- id: math:example:bayes-theorem:balanced-flags
- title: Half the flags are defects
- role: applied_model
- question: With prior 0.1, sensitivity 0.9 and false-positive rate 0.1, what fraction of flags are defects?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Every item is either defective or nondefective in the stated model.
  - The conditional flag probabilities apply to the same population as the prior.
  - The probability of receiving a flag is positive.
- inputs:
  - prior: 0.1
  - sensitivity: 0.9
  - falsePositive: 0.1
- steps:
  - Item:
    - index: 1
    - expression: P(D and +)=0.1×0.9=0.09
    - reason: Weight the defect group by its flag rate.
  - Item:
    - index: 2
    - expression: P(not D and +)=0.9×0.1=0.09
    - reason: Include nondefective parts that also produce flags.
  - Item:
    - index: 3
    - expression: P(D | +)=0.09/0.18=0.5
    - reason: Use the flagged pool as the denominator.
- result:
  - exact: 0.5 = 50%
- interpretation: A 90% sensitivity does not make every flag 90% likely to indicate a defect.
- independent check:
  - method: A separate algebraic rearrangement or frequency-table check.
  - expected: In a stipulated 1,000-part frequency table, 90 true flags and 90 false flags give 90/180.
- limits: The rates are constructed and assumed applicable to one population.
- preset:
  - prior: 0.1
  - sensitivity: 0.9
  - falsePositive: 0.1
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Every item is either defective or nondefective in the stated model.
  - The conditional flag probabilities apply to the same population as the prior.
  - The probability of receiving a flag is positive.

## Written exploration recipe

- component id: bayes-theorem-visual-model
- renderer id: bayes-theorem-visual-model
- renderer version: 1.0.0
- model id: bayes-theorem-visual-model
- model revision: 1.0.0
- expression id: ast:bayes-theorem:expression
- interaction status: implemented
- description: The cyan prior resizes the two starting groups; violet true flags and orange false alarms form the flagged pool; its gold proportion shows the defective share.
- controls:
  - Item:
    - id: prior
    - type: number
    - default: 0.1
    - min: 0.01
    - max: 0.99
    - slider min: 0.01
    - slider max: 0.99
    - slider step: 0.001
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: sensitivity
    - type: number
    - default: 0.9
    - min: 0.05
    - max: 1
    - slider min: 0.05
    - slider max: 1
    - slider step: 0.001
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: falsePositive
    - type: number
    - default: 0.1
    - min: 0.01
    - max: 1
    - slider min: 0.01
    - slider max: 1
    - slider step: 0.001
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - prior: 0.1
      - sensitivity: 0.9
      - falsePositive: 0.1
    - output: 0.5
  - Item:
    - input:
      - prior: 0.01
      - sensitivity: 0.9
      - falsePositive: 0.1
    - output: 0.08333333333333333
  - Item:
    - input:
      - prior: 0.5
      - sensitivity: 0.9
      - falsePositive: 0.1
    - output: 0.9
  - Item:
    - input:
      - prior: 0.2
      - sensitivity: 0.8
      - falsePositive: 0.05
    - output: 0.8
  - Item:
    - input:
      - prior: 0.99
      - sensitivity: 1
      - falsePositive: 0.01
    - output: 0.9998990001009999
  - Item:
    - input:
      - prior: 0.25
      - sensitivity: 0.5
      - falsePositive: 0.5
    - output: 0.25
  - Item:
    - input:
      - prior: 0
      - sensitivity: 0.9
      - falsePositive: 0.1
    - status: invalid_parameters
- compute: truePositive=prior*sensitivity; falseAlarm=(1-prior)*falsePositive; positiveRate=truePositive+falseAlarm; posterior=truePositive/positiveRate; output=posterior. All model values are fractions, not percentage numerals.
- numeric tolerance: 1e-10
- invariants:
  - Every item is either defective or nondefective in the stated model.
  - The conditional flag probabilities apply to the same population as the prior.
  - The probability of receiving a flag is positive.
- limits:
  - The stipulated inspection rates apply to both groups in this same constructed population.
  - All parts are classified into exactly one of two groups: defective or nondefective.
  - Numbers are normalized fractions between zero and one; multiply by 100 for percentages.
  - The area diagram represents proportions rather than measured counts or a validated inspection system.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

- Source ID: source:psu:bayes. [Penn State STAT 500, Lesson 2: Probability](https://online.stat.psu.edu/stat500/Lesson02). Locator: Bayes’ theorem; total probability denominator. Verification: Bayes formula and total-probability denominator inspected 2026-10-23 in the official university page’s indexed excerpt; direct page retrieval was unavailable. Original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
