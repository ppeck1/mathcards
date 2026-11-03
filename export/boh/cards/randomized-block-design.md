---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:randomized-block-design", "id": "math:concept:randomized-block-design", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:randomized-block-design", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "760ac69e6a85f5bfc84b1907a84b46e20a099e36f1b6810d7adc5bc6e35eacbf", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1d643aa2724f9dc08ea3fc87b9065c9662008fcd55128c4388c59a3bec51b3bd"}, "purpose": "Can we compare two packing methods without confusing them with a busy day?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1d643aa2724f9dc08ea3fc87b9065c9662008fcd55128c4388c59a3bec51b3bd", "status": "draft", "title": "Randomized blocks and within-pair comparisons", "topics": ["mathematics", "statistics", "experimental-design", "randomized blocks and within-pair comparisons"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Randomized blocks and within-pair comparisons

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:randomized-block-design; revision 0.1.0-draft. Setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together. Expression: $d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.$. Conditions required for a defined value (a case may test their violation): Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state. Scope: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.

## Schema Version

0.1.0

## Id

math:concept:randomized-block-design

## Slug

randomized-block-design

## Type

concept

## Title

Randomized blocks and within-pair comparisons

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-03T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- randomized blocks and within-pair comparisons

## Branches

- statistics
- experimental-design

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can we compare two packing methods without confusing them with a busy day?

## Meaning

Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Day is the blocking factor; the within-block contrast compares B with A on that same day.

## Prerequisites

- required:
  - math:concept:population-sample
- helpful:
  - math:concept:sign-test
  - math:concept:factorial-interaction
  - math:concept:linear-regression
- depth:
  []

## Definition

- setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
- formal latex: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
- signature:
  - A: Method A packing time within a day, in minutes
  - B: Method B packing time within that same day, in minutes
  - d: Common constructed B−A shift in minutes
  - b: Size of the additive day offset, in minutes
  - j: Day index taking 1, 2 or 3
  - d₁: B−A difference on day one, in minutes
  - d₂: B−A difference on day two, in minutes
  - d₃: B−A difference on day three, in minutes
  - d̄: Mean of the three within-day B−A differences, in minutes
- conditions:
  - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- domain notes: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- proof status: Definition-level primary reference and original bounded construction; independent mathematical review pending.
- source refs:
  - source:estimation-extensions:blocks

## Grammar

- pronunciation: Randomized blocks and within-pair comparisons
- expression latex: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
- formation rule: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Day is the blocking factor; the within-block contrast compares B with A on that same day.
- precedence: Compute within-day differences before averaging, or the standard error before the confidence margin and endpoints.
- symbols:
  - Item:
    - token: A
    - role: Method A packing time within a day, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: B
    - role: Method B packing time within that same day, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: d
    - role: Common constructed B−A shift in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: b
    - role: Size of the additive day offset, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: j
    - role: Day index taking 1, 2 or 3
    - type: Declared design or estimation quantity
  - Item:
    - token: d₁
    - role: B−A difference on day one, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: d₂
    - role: B−A difference on day two, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: d₃
    - role: B−A difference on day three, in minutes
    - type: Declared design or estimation quantity
  - Item:
    - token: d̄
    - role: Mean of the three within-day B−A differences, in minutes
    - type: Declared design or estimation quantity
- ast:
  - id: ast:randomized-block-design:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:change
      - kind: variable
      - type: Declared real input or whole sample count
      - symbol: d
      - scope ref: scope:randomized-block-design
    - Item:
      - id: n:blockSpread
      - kind: variable
      - type: Declared real input or whole sample count
      - symbol: b
      - scope ref: scope:randomized-block-design
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded comparison or interval rule
      - ref: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:change
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-0
      - argument: n:blockSpread
  - scopes:
    - Item:
      - id: scope:randomized-block-design
      - kind: modelExpression
      - free variables:
        - d
        - b
      - external parameters:
        - Displayed fixed assignment
      - domain condition: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- parse errors:
  - Item:
    - input: Compare unrelated days
    - status: model or role mismatch
    - reason: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- ast coverage: Typed application outline of the declared bounded family. The displayed assignment or unknown population mean is external; there is no arbitrary formula engine or sampler.
- output symbol bindings:
  - A: aReadings
  - B: bReadings
  - d: change
  - b: blockSpread
  - j: blockIndex
  - d₁: firstDifference
  - d₂: secondDifference
  - d₃: thirdDifference
  - d̄: output

## Properties

- Item:
  - claim: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - conditions: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - derivation: Subtract paired observations before averaging.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:randomized-block-design:case-1

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
  - target: math:concept:population-sample
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Within-day comparison supports paired data analysis without replacing randomization or an error model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:sign-test
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Within-day comparison supports paired data analysis without replacing randomization or an error model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:factorial-interaction
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Within-day comparison supports paired data analysis without replacing randomization or an error model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-regression
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Within-day comparison supports paired data analysis without replacing randomization or an error model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:randomized-block-design:case-1
  - title: A quicker method on three different days
  - role: applied_model
  - question: Can we compare two packing methods without confusing them with a busy day?
  - setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - assumptions:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - inputs:
    - change: -2
    - blockSpread: 3
    - assignment: alternating
  - steps:
    - Item:
      - index: 1
      - expression: d = -2; b = 3
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
      - reason: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - index: 3
      - expression: -2.0 min
      - reason: Read the mean within-day difference.
  - result:
    - approximate: -2.0
  - interpretation: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - independent check:
    - method: Independent Python paired arithmetic using math.fsum.
    - expected: -2.0
  - limits: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - preset:
    - change: -2
    - blockSpread: 3
    - assignment: alternating
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- Item:
  - id: math:example:randomized-block-design:case-2
  - title: Reverse the shown assignment order
  - role: applied_model
  - question: Can we compare two packing methods without confusing them with a busy day?
  - setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - assumptions:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - inputs:
    - change: -2
    - blockSpread: 3
    - assignment: reversed
  - steps:
    - Item:
      - index: 1
      - expression: d = -2; b = 3
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
      - reason: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - index: 3
      - expression: -2.0 min
      - reason: Read the mean within-day difference.
  - result:
    - approximate: -2.0
  - interpretation: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - independent check:
    - method: Independent Python paired arithmetic using math.fsum.
    - expected: -2.0
  - limits: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - preset:
    - change: -2
    - blockSpread: 3
    - assignment: reversed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- Item:
  - id: math:example:randomized-block-design:case-3
  - title: Larger day differences, no mean method change
  - role: applied_model
  - question: Can we compare two packing methods without confusing them with a busy day?
  - setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - assumptions:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - inputs:
    - change: 0
    - blockSpread: 4
    - assignment: alternating
  - steps:
    - Item:
      - index: 1
      - expression: d = 0; b = 4
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
      - reason: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - index: 3
      - expression: 0.0 min
      - reason: Read the mean within-day difference.
  - result:
    - approximate: 0.0
  - interpretation: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - independent check:
    - method: Independent Python paired arithmetic using math.fsum.
    - expected: 0.0
  - limits: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - preset:
    - change: 0
    - blockSpread: 4
    - assignment: alternating
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- Item:
  - id: math:example:randomized-block-design:case-4
  - title: No additive day offsets
  - role: applied_model
  - question: Can we compare two packing methods without confusing them with a busy day?
  - setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - assumptions:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - inputs:
    - change: 2
    - blockSpread: 0
    - assignment: reversed
  - steps:
    - Item:
      - index: 1
      - expression: d = 2; b = 0
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
      - reason: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - index: 3
      - expression: 2.0 min
      - reason: Read the mean within-day difference.
  - result:
    - approximate: 2.0
  - interpretation: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - independent check:
    - method: Independent Python paired arithmetic using math.fsum.
    - expected: 2.0
  - limits: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - preset:
    - change: 2
    - blockSpread: 0
    - assignment: reversed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
- Item:
  - id: math:example:randomized-block-design:case-5
  - title: A fractional-minute contrast
  - role: applied_model
  - question: Can we compare two packing methods without confusing them with a busy day?
  - setting: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - assumptions:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - inputs:
    - change: -1.5
    - blockSpread: 2
    - assignment: alternating
  - steps:
    - Item:
      - index: 1
      - expression: d = -1.5; b = 2
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: d_j=B_j-A_j,\quad \bar{d}=\frac{d_1+d_2+d_3}{3}.
      - reason: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
    - Item:
      - index: 3
      - expression: -1.5 min
      - reason: Read the mean within-day difference.
  - result:
    - approximate: -1.5
  - interpretation: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - independent check:
    - method: Independent Python paired arithmetic using math.fsum.
    - expected: -1.5
  - limits: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - preset:
    - change: -1.5
    - blockSpread: 2
    - assignment: alternating
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.

## Interactive

- component id: component:randomized-block-design
- renderer id: randomized-block-design-visual-model
- renderer version: 1
- model id: randomized-block-design-visual-model
- model revision: 1
- expression id: ast:randomized-block-design:expression
- interaction status: implemented
- description: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
- controls:
  - Item:
    - id: change
    - type: number
    - default: -2
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: blockSpread
    - type: number
    - default: 3
    - min: 0
    - max: 4
    - step: 0.05
  - Item:
    - id: assignment
    - type: enum
    - default: alternating
    - values:
      - alternating
      - reversed
    - value labels:
      - alternating: A first, B first, A first
      - reversed: B first, A first, B first
- expected cases:
  - Item:
    - input:
      - change: -4
      - blockSpread: 0
      - assignment: alternating
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -4
      - blockSpread: 0
      - assignment: reversed
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -4
      - blockSpread: 2
      - assignment: alternating
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -4
      - blockSpread: 2
      - assignment: reversed
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -4
      - blockSpread: 4
      - assignment: alternating
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -4
      - blockSpread: 4
      - assignment: reversed
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 0
      - assignment: alternating
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 0
      - assignment: reversed
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 2
      - assignment: alternating
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 2
      - assignment: reversed
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 4
      - assignment: alternating
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: -2
      - blockSpread: 4
      - assignment: reversed
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 0
      - assignment: alternating
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 0
      - assignment: reversed
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 2
      - assignment: alternating
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 2
      - assignment: reversed
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 4
      - assignment: alternating
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 0
      - blockSpread: 4
      - assignment: reversed
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 0
      - assignment: alternating
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 0
      - assignment: reversed
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 2
      - assignment: alternating
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 2
      - assignment: reversed
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 4
      - assignment: alternating
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 1.5
      - blockSpread: 4
      - assignment: reversed
    - status: valid
    - output: 1.5
  - Item:
    - input:
      - change: 4
      - blockSpread: 0
      - assignment: alternating
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: 4
      - blockSpread: 0
      - assignment: reversed
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: 4
      - blockSpread: 2
      - assignment: alternating
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: 4
      - blockSpread: 2
      - assignment: reversed
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: 4
      - blockSpread: 4
      - assignment: alternating
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: 4
      - blockSpread: 4
      - assignment: reversed
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - change: true
      - blockSpread: 3
      - assignment: alternating
    - status: invalid_parameters
  - Item:
    - input:
      - change: 1
      - blockSpread: 3
      - assignment: alternating
    - status: invalid_parameters
  - Item:
    - input:
      - change: 5
      - blockSpread: 3
      - assignment: alternating
    - status: invalid_parameters
  - Item:
    - input:
      - change: -2
      - blockSpread: -1
      - assignment: alternating
    - status: invalid_parameters
  - Item:
    - input:
      - change: -2
      - blockSpread: 3
      - assignment: random
    - status: invalid_parameters
  - Item:
    - input:
      - change: 5e-324
      - blockSpread: 3
      - assignment: alternating
    - status: numeric_precision
- compute: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
- numeric tolerance: 2e-12
- invariants:
  - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - Story, calculation, geometry and graph share the same current parameters.
  - Discrete sample counts and assignment patterns do not interpolate into invented states.
- limits:
  - Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
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
  - prompt: Can we compare two packing methods without confusing them with a busy day?
  - answer: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
- Item:
  - prompt: What does this model leave untested?
  - answer: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.

## Representations

- Item:
  - kind: geometry
  - description: Paired time positions on a fixed horizontal minute scale.
- Item:
  - kind: graph
  - description: Mean within-day difference as the common shift changes.
- Item:
  - kind: substitution
  - description: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.
  - limitations: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - evidence kind: constructed_example
  - example ref: math:example:randomized-block-design:case-1
- Item:
  - context: Reverse the shown assignment order
  - mapping: Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.
  - limitations: Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.
  - evidence kind: constructed_example
  - example ref: math:example:randomized-block-design:case-2

## Source Refs

- source:estimation-extensions:blocks

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded design/estimation lesson through the shared modular host.

## Referenced source registry

- Source ID: source:estimation-extensions:blocks. [NIST/SEMATECH · Randomized Block Designs](https://www.itl.nist.gov/div898/handbook/pri/section3/pri332.htm). Locator: §5.3.3.2: one primary factor, nuisance blocking factors, within-block randomization and additive block effects. The original three-day packing construction is not the source example.. Verification: Definition-level primary source inspected 2026-11-03; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original prose, constructed packing times, examples and SVG; no source exercise, data or illustration reproduced.
