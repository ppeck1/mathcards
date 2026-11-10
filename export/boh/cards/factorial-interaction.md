---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:factorial-interaction", "id": "math:concept:factorial-interaction", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:factorial-interaction", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9abf8c4ee65b31cc645c8a57839c929066549f6454d671bdc4c1f8a1125fbe3c"}, "purpose": "Compare two changes in packing time and see interaction as nonparallel responses.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9abf8c4ee65b31cc645c8a57839c929066549f6454d671bdc4c1f8a1125fbe3c", "status": "draft", "title": "Two-factor interaction", "topics": ["mathematics", "statistics", "modeling", "factorial design", "interaction", "difference of differences", "two factors"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Two-factor interaction

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:factorial-interaction; revision 0.1.0-draft. Setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. Expression: $\Delta=(y_{11}-y_{01})-(y_{10}-y_{00}),\quad(y_{00},y_{10},y_{01},y_{11})=(12,10,9,c).\quad\Delta=c-7.$. Conditions required for a defined value (a case may test their violation): A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.

## Schema Version

0.1.0

## Id

math:concept:factorial-interaction

## Slug

factorial-interaction

## Type

concept

## Title

Two-factor interaction

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- factorial design
- interaction
- difference of differences
- two factors

## Branches

- statistics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Compare two changes in packing time and see interaction as nonparallel responses.

## Meaning

Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.

## Prerequisites

- required:
  - math:concept:linear-model
- helpful:
  []
- depth:
  []

## Definition

- setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
- formal latex: \Delta=(y_{11}-y_{01})-(y_{10}-y_{00}),\quad(y_{00},y_{10},y_{01},y_{11})=(12,10,9,c).\quad\Delta=c-7.
- signature:
  - c: Mean time with both tool and guide.
  - Δ: Difference between the two tool effects, in minutes.
- conditions:
  - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:factorial
  - source:inference:interaction

## Grammar

- pronunciation: Two-factor interaction
- expression latex: \Delta=(y_{11}-y_{01})-(y_{10}-y_{00}),\quad(y_{00},y_{10},y_{01},y_{11})=(12,10,9,c).\quad\Delta=c-7.
- formation rule: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: c
    - role: Mean time with both tool and guide.
    - type: Declared mathematical quantity
  - Item:
    - token: Δ
    - role: Difference between the two tool effects, in minutes.
    - type: Declared mathematical quantity
- ast:
  - id: ast:factorial-interaction:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:combined
      - kind: variable
      - type: Declared model input
      - symbol: c
      - scope ref: scope:factorial-interaction:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. Δ = (y₁₁−y₀₁) − (y₁₀−y₀₀)
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:combined
  - scopes:
    - Item:
      - id: scope:factorial-interaction:expression
      - kind: modelExpression
      - free variables:
        - c
      - domain condition: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - c: combined
  - Δ: output

## Properties

- Item:
  - claim: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - conditions: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - derivation: (7−9)−(10−12)=0 minutes.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:factorial-interaction:additive

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
  - target: math:concept:linear-model
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses linear model.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:factorial-interaction:additive
  - title: Equal tool effects
  - role: applied_model
  - question: Equal tool effects under the stated inputs?
  - setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - assumptions:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - inputs:
    - combined: 7
  - steps:
    - Item:
      - index: 1
      - expression: combined=7
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: (7−9)−(10−12)=0 minutes.
      - reason: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - result:
    - exact: (7−9)−(10−12)=0 minutes.
  - interpretation: (7−9)−(10−12)=0 minutes.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0}
  - limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - preset:
    - combined: 7
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- Item:
  - id: math:example:factorial-interaction:synergy
  - title: A larger saving together
  - role: applied_model
  - question: A larger saving together under the stated inputs?
  - setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - assumptions:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - inputs:
    - combined: 4
  - steps:
    - Item:
      - index: 1
      - expression: combined=4
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: (4−9)−(10−12)=−3 minutes.
      - reason: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - result:
    - exact: (4−9)−(10−12)=−3 minutes.
  - interpretation: (4−9)−(10−12)=−3 minutes.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": -3}
  - limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - preset:
    - combined: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- Item:
  - id: math:example:factorial-interaction:less-benefit
  - title: A smaller benefit with the guide
  - role: applied_model
  - question: A smaller benefit with the guide under the stated inputs?
  - setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - assumptions:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - inputs:
    - combined: 10
  - steps:
    - Item:
      - index: 1
      - expression: combined=10
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: (10−9)−(10−12)=3 minutes.
      - reason: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - result:
    - exact: (10−9)−(10−12)=3 minutes.
  - interpretation: (10−9)−(10−12)=3 minutes.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 3}
  - limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - preset:
    - combined: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- Item:
  - id: math:example:factorial-interaction:no-guide-tool-effect
  - title: No tool effect with the guide
  - role: applied_model
  - question: No tool effect with the guide under the stated inputs?
  - setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - assumptions:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - inputs:
    - combined: 9
  - steps:
    - Item:
      - index: 1
      - expression: combined=9
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Tool effects −2 and 0 give Δ=2 minutes.
      - reason: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - result:
    - exact: Tool effects −2 and 0 give Δ=2 minutes.
  - interpretation: Tool effects −2 and 0 give Δ=2 minutes.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 2}
  - limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - preset:
    - combined: 9
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- Item:
  - id: math:example:factorial-interaction:opposite-effects
  - title: Effects point in opposite directions
  - role: applied_model
  - question: Effects point in opposite directions under the stated inputs?
  - setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - assumptions:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - inputs:
    - combined: 14
  - steps:
    - Item:
      - index: 1
      - expression: combined=14
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Tool effects −2 and +5 give Δ=7 minutes.
      - reason: Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.
  - result:
    - exact: Tool effects −2 and +5 give Δ=7 minutes.
  - interpretation: Tool effects −2 and +5 give Δ=7 minutes.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 7}
  - limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - preset:
    - combined: 14
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
    - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.

## Interactive

- component id: component:factorial-interaction
- renderer id: factorial-interaction-visual-model
- renderer version: 1
- model id: factorial-interaction-visual-model
- model revision: 1
- expression id: ast:factorial-interaction:expression
- interaction status: implemented
- description: Compare two changes in packing time and see interaction as nonparallel responses.
- controls:
  - Item:
    - id: combined
    - type: number
    - default: 7
    - min: 2
    - max: 14
    - step: 0.1
- expected cases:
  - Item:
    - input:
      - combined: 7
    - status: valid
    - output: 0
  - Item:
    - input:
      - combined: 4
    - status: valid
    - output: -3
  - Item:
    - input:
      - combined: 10
    - status: valid
    - output: 3
  - Item:
    - input:
      - combined: 9
    - status: valid
    - output: 2
  - Item:
    - input:
      - combined: 14
    - status: valid
    - output: 7
  - Item:
    - input:
      - combined: 2
    - status: valid
    - output: -5
  - Item:
    - input:
      - combined: 1
    - status: invalid_parameters
  - Item:
    - input:
      - combined: 7
    - status: invalid_parameters
- compute: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. Δ = (y₁₁−y₀₁) − (y₁₀−y₀₀)
- numeric tolerance: 1e-10
- invariants:
  - A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.
  - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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
  - prompt: At c=7 minutes, is there an additive interaction?
  - answer: Without a guide the tool changes time by 10−12=−2 minutes. At c=7 it changes time by 7−9=−2 with the guide. Their difference is zero, and the response lines are parallel.
- Item:
  - prompt: What is outside this demonstration?
  - answer: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.

## Representations

- Item:
  - kind: geometry
  - description: Compare two changes in packing time and see interaction as nonparallel responses.
- Item:
  - kind: graph
  - description: Two segments show time against tool off/on, one for each guide level. Their slopes expose interaction.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: Does the tool save the same time with a guide?
  - mapping: Compare two changes in packing time and see interaction as nonparallel responses.
  - limitations: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - evidence kind: constructed_example
  - example ref: math:example:factorial-interaction:additive
- Item:
  - context: A larger saving together
  - mapping: (4−9)−(10−12)=−3 minutes.
  - limitations: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.
  - evidence kind: constructed_example
  - example ref: math:example:factorial-interaction:synergy

## Source Refs

- source:inference:factorial
- source:inference:interaction

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:factorial. [NIST · Full factorial designs](https://www.itl.nist.gov/div898/handbook/pri/section3/pri333.htm). Locator: Two levels per factor and all combinations. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:interaction. [NIST · Effects plot](https://www.itl.nist.gov/div898/handbook/pri/section5/pri597.htm). Locator: Conventional high-minus-low effects; contrast scaling. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
