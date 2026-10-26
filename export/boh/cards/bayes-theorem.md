---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:bayes-theorem", "id": "math:concept:bayes-theorem", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:bayes-theorem", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "aa303ec97ac5f973b22923689e6a3d7b4c22178152d4132c548a8292f877163b"}, "purpose": "Find the fraction of flagged items that truly belong to a target group.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "aa303ec97ac5f973b22923689e6a3d7b4c22178152d4132c548a8292f877163b", "status": "draft", "title": "Bayes’ theorem", "topics": ["mathematics", "probability", "modeling", "conditional probability update", "base rate"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Bayes’ theorem

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:bayes-theorem; revision 0.1.0-draft. Setting: Find the fraction of flagged items that truly belong to a target group. Expression: $P(D\mid +)=\frac{ps}{ps+(1-p)f}$. Conditions required for a defined value (a case may test their violation): Every item is either defective or nondefective in the stated model. The conditional flag probabilities apply to the same population as the prior. The probability of receiving a flag is positive. Scope: The interactive controls restrict each parameter to its declared finite interval. The area diagram represents proportions rather than measured counts or a validated inspection system.

## Schema Version

0.1.0

## Id

math:concept:bayes-theorem

## Slug

bayes-theorem

## Type

concept

## Title

Bayes’ theorem

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- conditional probability update
- base rate

## Branches

- probability
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Find the fraction of flagged items that truly belong to a target group.

## Meaning

Follow two streams into the same flagged pool. Their relative sizes explain why a flag’s meaning depends on the starting mix.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
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
- Item:
  - id: math:example:bayes-theorem:rare
  - title: When defects are rare
  - role: applied_model
  - question: What happens when the defective fraction falls to 0.01?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.
  - inputs:
    - prior: 0.01
    - sensitivity: 0.9
    - falsePositive: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: True=0.01×0.9=0.009; false=0.99×0.1=0.099
      - reason: Keep both sources of flags.
    - Item:
      - index: 2
      - expression: Posterior=0.009/(0.009+0.099)=1/12
      - reason: Normalize inside the flagged pool.
  - result:
    - exact: 1/12 ≈ 0.0833333
  - interpretation: Even a useful inspection rule can produce mostly false flags when defects are rare.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: A stipulated 1,000-part table gives 9 true and 99 false flags; 9/108=1/12.
  - limits: This is a population proportion, not a guarantee about a particular item.
  - preset:
    - prior: 0.01
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
- Item:
  - id: math:example:bayes-theorem:common
  - title: A more defect-heavy batch
  - role: applied_model
  - question: What is the answer for a starting defective fraction of 0.5?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.
  - inputs:
    - prior: 0.5
    - sensitivity: 0.9
    - falsePositive: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: True=0.5×0.9=0.45; false=0.5×0.1=0.05
      - reason: Weight each equally sized starting group.
    - Item:
      - index: 2
      - expression: Posterior=0.45/0.5=0.9
      - reason: Compare true flags with all flags.
  - result:
    - exact: 0.9 = 90%
  - interpretation: Changing the prior can change a flag’s interpretation even when inspection rates stay fixed.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: Nine true flags per one false flag give a 9/10 share.
  - limits: Both conditional inspection rates remain unchanged.
  - preset:
    - prior: 0.5
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
- Item:
  - id: math:example:bayes-theorem:cleaner
  - title: A lower false-alarm rate
  - role: applied_model
  - question: What is the flagged defect fraction with prior 0.2, sensitivity 0.8 and false-positive rate 0.05?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.
  - inputs:
    - prior: 0.2
    - sensitivity: 0.8
    - falsePositive: 0.05
  - steps:
    - Item:
      - index: 1
      - expression: True=0.2×0.8=0.16; false=0.8×0.05=0.04
      - reason: Compute both joint fractions.
    - Item:
      - index: 2
      - expression: Posterior=0.16/0.20=0.8
      - reason: Normalize by the total flagged fraction.
  - result:
    - exact: 0.8 = 80%
  - interpretation: A smaller false-alarm stream makes true defects a larger share of the flagged pool.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The true-to-false flag ratio is 4:1, so the true share is 4/5.
  - limits: The conditional rates are stipulated.
  - preset:
    - prior: 0.2
    - sensitivity: 0.8
    - falsePositive: 0.05
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.
- Item:
  - id: math:example:bayes-theorem:uninformative
  - title: A flag that tells you nothing
  - role: structural
  - question: What if either group is flagged with the same probability 0.5?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.
  - inputs:
    - prior: 0.25
    - sensitivity: 0.5
    - falsePositive: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: True=0.25×0.5=0.125; false=0.75×0.5=0.375
      - reason: Both groups are filtered in the same proportion.
    - Item:
      - index: 2
      - expression: Posterior=0.125/0.5=0.25
      - reason: The starting defect share is preserved.
  - result:
    - exact: 0.25 = 25%
  - interpretation: A flag independent of defect status leaves the prior unchanged.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: ps/[ps+(1−p)s]=p for positive s.
  - limits: Equal flag rates are an assumption of this example.
  - preset:
    - prior: 0.25
    - sensitivity: 0.5
    - falsePositive: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Every item is either defective or nondefective in the stated model.
    - The conditional flag probabilities apply to the same population as the prior.
    - The probability of receiving a flag is positive.

## Properties

- Item:
  - claim: Follow two streams into the same flagged pool. Their relative sizes explain why a flag’s meaning depends on the starting mix.
  - status: algebraic derivation
  - conditions: Every item is either defective or nondefective in the stated model.; The conditional flag probabilities apply to the same population as the prior.; The probability of receiving a flag is positive.
  - derivation: truePositive=prior*sensitivity; falseAlarm=(1-prior)*falsePositive; positiveRate=truePositive+falseAlarm; posterior=truePositive/positiveRate; output=posterior. All model values are fractions, not percentage numerals.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: Every item is either defective or nondefective in the stated model. The conditional flag probabilities apply to the same population as the prior. The probability of receiving a flag is positive.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan prior resizes the two starting groups; violet true flags and orange false alarms form the flagged pool; its gold proportion shows the defective share.

## Representations

- Item:
  - kind: symbolic
  - description: truePositive=prior*sensitivity; falseAlarm=(1-prior)*falsePositive; positiveRate=truePositive+falseAlarm; posterior=truePositive/positiveRate; output=posterior. All model values are fractions, not percentage numerals.
- Item:
  - kind: geometric
  - description: The cyan prior resizes the two starting groups; violet true flags and orange false alarms form the flagged pool; its gold proportion shows the defective share.

## Applications

- Item:
  - context: Half the flags are defects
  - mapping: A 90% sensitivity does not make every flag 90% likely to indicate a defect.
  - limitations: The rates are constructed and assumed applicable to one population.
  - evidence kind: constructed_example
  - example ref: math:example:bayes-theorem:balanced-flags
- Item:
  - context: When defects are rare
  - mapping: Even a useful inspection rule can produce mostly false flags when defects are rare.
  - limitations: This is a population proportion, not a guarantee about a particular item.
  - evidence kind: constructed_example
  - example ref: math:example:bayes-theorem:rare

## Source Refs

- source:psu:bayes

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Find the fraction of flagged items that truly belong to a target group.
- formal latex: P(D\mid +)=\frac{ps}{ps+(1-p)f}
- signature:
  - prior: starting defective fraction p
  - sensitivity: flag probability s given a defective item
  - falsePositive: flag probability f given a nondefective item
  - posterior: defective fraction among flagged items
- conditions:
  - Every item is either defective or nondefective in the stated model.
  - The conditional flag probabilities apply to the same population as the prior.
  - The probability of receiving a flag is positive.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. The area diagram represents proportions rather than measured counts or a validated inspection system.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:psu:bayes

## Grammar

- pronunciation: Find the fraction of flagged items that truly belong to a target group.
- expression latex: P(D\mid +)=\frac{ps}{ps+(1-p)f}
- formation rule: truePositive=prior*sensitivity; falseAlarm=(1-prior)*falsePositive; positiveRate=truePositive+falseAlarm; posterior=truePositive/positiveRate; output=posterior. All model values are fractions, not percentage numerals.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: prior
    - role: starting defective fraction p
    - type: Real quantity in declared setting
  - Item:
    - token: sensitivity
    - role: flag probability s given a defective item
    - type: Real quantity in declared setting
  - Item:
    - token: falsePositive
    - role: flag probability f given a nondefective item
    - type: Real quantity in declared setting
  - Item:
    - token: posterior
    - role: defective fraction among flagged items
    - type: Real quantity in declared setting
- ast:
  - id: ast:bayes-theorem:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:prior
      - kind: variable
      - symbol: prior
      - type: Real
      - scope ref: scope:bayes-theorem
    - Item:
      - id: n:sensitivity
      - kind: variable
      - symbol: sensitivity
      - type: Real
      - scope ref: scope:bayes-theorem
    - Item:
      - id: n:falsePositive
      - kind: variable
      - symbol: falsePositive
      - type: Real
      - scope ref: scope:bayes-theorem
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: truePositive=prior*sensitivity; falseAlarm=(1-prior)*falsePositive; positiveRate=truePositive+falseAlarm; posterior=truePositive/positiveRate; output=posterior. All model values are fractions, not percentage numerals.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:prior
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:partial1
      - kind: apply
      - function: n:partial0
      - argument: n:sensitivity
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial1
      - argument: n:falsePositive
      - type: Real
  - scopes:
    - Item:
      - id: scope:bayes-theorem
      - kind: modelExpression
      - free variables:
        - prior
        - sensitivity
        - falsePositive
      - domain condition: Every item is either defective or nondefective in the stated model.; The conditional flag probabilities apply to the same population as the prior.; The probability of receiving a flag is positive.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

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

## Referenced source registry

- Source ID: source:psu:bayes. [Penn State STAT 500, Lesson 2: Probability](https://online.stat.psu.edu/stat500/Lesson02). Locator: Bayes’ theorem; total probability denominator. Verification: Bayes formula and total-probability denominator inspected 2026-10-23 in the official university page’s indexed excerpt; direct page retrieval was unavailable. Original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
