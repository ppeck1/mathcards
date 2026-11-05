---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:ideal-gas", "id": "math:concept:ideal-gas", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:ideal-gas", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "412a9344888c3de723194acd871017b37a5cf5f5bffa47a97355868d09366348"}, "purpose": "What happens to pressure when the same gas has more room?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "412a9344888c3de723194acd871017b37a5cf5f5bffa47a97355868d09366348", "status": "draft", "title": "The ideal gas law", "topics": ["mathematics", "physical-models", "the ideal gas law"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# The ideal gas law

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:ideal-gas; revision 0.1.0-draft. Setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment. Expression: $pV=nRT,\quad p=\frac{nRT}{V},\quad n=1\,\mathrm{mol}.$. Conditions required for a defined value (a case may test their violation): One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.

## Schema Version

0.1.0

## Id

math:concept:ideal-gas

## Slug

ideal-gas

## Type

concept

## Title

The ideal gas law

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

- the ideal gas law

## Branches

- physical-models

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What happens to pressure when the same gas has more room?

## Meaning

Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:ratio-scale
  - math:concept:gibbs-free-energy
- depth:
  []

## Definition

- setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
- formal latex: pV=nRT,\quad p=\frac{nRT}{V},\quad n=1\,\mathrm{mol}.
- signature:
  - V: Volume V (L); the declared input
  - T: Temperature T (K); the declared input
  - result: The primary reported quantity in kPa.
- conditions:
  - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:gas

## Grammar

- pronunciation: The ideal gas law
- expression latex: pV=nRT,\quad p=\frac{nRT}{V},\quad n=1\,\mathrm{mol}.
- formation rule: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: V
    - role: Volume V (L); the declared input
    - type: Declared input or result
  - Item:
    - token: T
    - role: Temperature T (K); the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in kPa.
    - type: Declared input or result
- ast:
  - id: ast:ideal-gas:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:volume
      - kind: variable
      - type: Declared model input
      - symbol: V
      - scope ref: scope:ideal-gas
    - Item:
      - id: n:temperature
      - kind: variable
      - type: Declared model input
      - symbol: T
      - scope ref: scope:ideal-gas
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - id: n:bound-volume
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:volume
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-volume
      - argument: n:temperature
  - scopes:
    - Item:
      - id: scope:ideal-gas
      - kind: modelExpression
      - free variables:
        - V
        - T
      - domain condition: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - V: volume
  - T: temperature
  - result: output

## Properties

- Item:
  - claim: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
  - conditions: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - derivation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:ideal-gas:case-1

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
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: The ideal gas law supplies a bounded connection to ratio scale.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:gibbs-free-energy
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: The ideal gas law supplies a bounded connection to gibbs free energy.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:ideal-gas:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: What happens to pressure when the same gas has more room?
  - setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
  - assumptions:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - inputs:
    - volume: 20
    - temperature: 300
  - steps:
    - Item:
      - index: 1
      - expression: V = 20, T = 300
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: p = n R T / V
      - reason: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - index: 3
      - expression: Result ≈ 124.7169392723 kPa
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 124.7169392723 kPa
  - interpretation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 124.71693927229859
  - limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - preset:
    - volume: 20
    - temperature: 300
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- Item:
  - id: math:example:ideal-gas:case-2
  - title: Change Volume V (L) to 5
  - role: applied_model
  - question: What happens to pressure when the same gas has more room?
  - setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
  - assumptions:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - inputs:
    - volume: 5
    - temperature: 300
  - steps:
    - Item:
      - index: 1
      - expression: V = 5, T = 300
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: p = n R T / V
      - reason: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - index: 3
      - expression: Result ≈ 498.8677570892 kPa
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 498.8677570892 kPa
  - interpretation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 498.86775708919436
  - limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - preset:
    - volume: 5
    - temperature: 300
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- Item:
  - id: math:example:ideal-gas:case-3
  - title: Change Volume V (L) to 40
  - role: applied_model
  - question: What happens to pressure when the same gas has more room?
  - setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
  - assumptions:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - inputs:
    - volume: 40
    - temperature: 300
  - steps:
    - Item:
      - index: 1
      - expression: V = 40, T = 300
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: p = n R T / V
      - reason: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - index: 3
      - expression: Result ≈ 62.3584696361 kPa
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 62.3584696361 kPa
  - interpretation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 62.358469636149295
  - limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - preset:
    - volume: 40
    - temperature: 300
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- Item:
  - id: math:example:ideal-gas:case-4
  - title: Change Temperature T (K) to 150
  - role: applied_model
  - question: What happens to pressure when the same gas has more room?
  - setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
  - assumptions:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - inputs:
    - volume: 20
    - temperature: 150
  - steps:
    - Item:
      - index: 1
      - expression: V = 20, T = 150
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: p = n R T / V
      - reason: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - index: 3
      - expression: Result ≈ 62.3584696361 kPa
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 62.3584696361 kPa
  - interpretation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 62.358469636149295
  - limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - preset:
    - volume: 20
    - temperature: 150
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
- Item:
  - id: math:example:ideal-gas:case-5
  - title: Change Temperature T (K) to 600
  - role: applied_model
  - question: What happens to pressure when the same gas has more room?
  - setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.
  - assumptions:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - inputs:
    - volume: 20
    - temperature: 600
  - steps:
    - Item:
      - index: 1
      - expression: V = 20, T = 600
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: p = n R T / V
      - reason: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
    - Item:
      - index: 3
      - expression: Result ≈ 249.4338785446 kPa
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 249.4338785446 kPa
  - interpretation: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 249.43387854459718
  - limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - preset:
    - volume: 20
    - temperature: 600
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.

## Interactive

- component id: component:ideal-gas
- renderer id: ideal-gas-visual-model
- renderer version: 1
- model id: ideal-gas-visual-model
- model revision: 1
- expression id: ast:ideal-gas:expression
- interaction status: implemented
- description: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
- controls:
  - Item:
    - id: volume
    - type: number
    - default: 20
    - min: 5
    - max: 40
    - step: 0.1
  - Item:
    - id: temperature
    - type: number
    - default: 300
    - min: 150
    - max: 600
    - step: 1
- expected cases:
  - Item:
    - input:
      - volume: 20
      - temperature: 300
    - status: valid
    - output: 124.71693927229859
  - Item:
    - input:
      - volume: 5
      - temperature: 300
    - status: valid
    - output: 498.86775708919436
  - Item:
    - input:
      - volume: 40
      - temperature: 300
    - status: valid
    - output: 62.358469636149295
  - Item:
    - input:
      - volume: 20
      - temperature: 150
    - status: valid
    - output: 62.358469636149295
  - Item:
    - input:
      - volume: 20
      - temperature: 600
    - status: valid
    - output: 249.43387854459718
  - Item:
    - input:
      - volume: 13.75
      - temperature: 300
    - status: valid
    - output: 181.4064571233434
  - Item:
    - input:
      - volume: 31.25
      - temperature: 300
    - status: valid
    - output: 79.8188411342711
  - Item:
    - input:
      - volume: 41
      - temperature: 300
    - status: invalid_parameters
- compute: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
- numeric tolerance: 1e-10
- invariants:
  - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
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
  - prompt: What happens to pressure when the same gas has more room?
  - answer: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
- Item:
  - prompt: What does this construction leave out?
  - answer: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.

## Representations

- Item:
  - kind: geometry
  - description: The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Volume V (L). Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: What happens to pressure when the same gas has more room?
  - limitations: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - evidence kind: constructed_example
  - example ref: math:example:ideal-gas:case-1
- Item:
  - context: Boundary comparison
  - mapping: Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.
  - limitations: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.
  - evidence kind: constructed_example
  - example ref: math:example:ideal-gas:case-2

## Source Refs

- source:systems:gas

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:gas. [OpenStax · Molecular model of an ideal gas](https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas). Locator: pV=nRT and the ideal-gas assumptions.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
