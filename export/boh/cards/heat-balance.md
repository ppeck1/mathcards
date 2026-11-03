---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:heat-balance", "id": "math:concept:heat-balance", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:heat-balance", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9a29852fe313dba39dd479746b7071ab8a01d54c9f7794d3c87b8b41971af7c0"}, "purpose": "Why can total entropy rise while energy stays balanced?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9a29852fe313dba39dd479746b7071ab8a01d54c9f7794d3c87b8b41971af7c0", "status": "draft", "title": "Heat exchange and physical entropy", "topics": ["mathematics", "physical-models", "heat exchange and physical entropy"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Heat exchange and physical entropy

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:heat-balance; revision 0.1.0-draft. Setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes. Expression: $T_h=400-Q/C,\quad T_c=300+Q/C,\quad\Delta S=C\ln(T_h/400)+C\ln(T_c/300),\ C=1\,\mathrm{J/K}.$. Conditions required for a defined value (a case may test their violation): Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.

## Schema Version

0.1.0

## Id

math:concept:heat-balance

## Slug

heat-balance

## Type

concept

## Title

Heat exchange and physical entropy

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

- heat exchange and physical entropy

## Branches

- physical-models

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can total entropy rise while energy stays balanced?

## Meaning

Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:real-logarithm
  - math:concept:gibbs-free-energy
- depth:
  []

## Definition

- setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
- formal latex: T_h=400-Q/C,\quad T_c=300+Q/C,\quad\Delta S=C\ln(T_h/400)+C\ln(T_c/300),\ C=1\,\mathrm{J/K}.
- signature:
  - Q: Energy transferred Q (J); the declared input
  - result: The primary reported quantity in J/K.
- conditions:
  - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:heat

## Grammar

- pronunciation: Heat exchange and physical entropy
- expression latex: T_h=400-Q/C,\quad T_c=300+Q/C,\quad\Delta S=C\ln(T_h/400)+C\ln(T_c/300),\ C=1\,\mathrm{J/K}.
- formation rule: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: Q
    - role: Energy transferred Q (J); the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in J/K.
    - type: Declared input or result
- ast:
  - id: ast:heat-balance:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:heat
      - kind: variable
      - type: Declared model input
      - symbol: Q
      - scope ref: scope:heat-balance
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:heat
  - scopes:
    - Item:
      - id: scope:heat-balance
      - kind: modelExpression
      - free variables:
        - Q
      - domain condition: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - Q: heat
  - result: output

## Properties

- Item:
  - claim: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
  - conditions: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - derivation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:heat-balance:case-1

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
  - target: math:concept:real-logarithm
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Heat exchange and physical entropy supplies a bounded connection to real logarithm.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:gibbs-free-energy
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Heat exchange and physical entropy supplies a bounded connection to gibbs free energy.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:heat-balance:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Why can total entropy rise while energy stays balanced?
  - setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
  - assumptions:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - inputs:
    - heat: 25
  - steps:
    - Item:
      - index: 1
      - expression: Q = 25
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔS = C ln(Tₕ/400) + C ln(T_c/300)
      - reason: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0155041865 J/K
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0155041865 J/K
  - interpretation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.015504186535965254
  - limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - preset:
    - heat: 25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- Item:
  - id: math:example:heat-balance:case-2
  - title: Change Energy transferred Q (J) to 0
  - role: applied_model
  - question: Why can total entropy rise while energy stays balanced?
  - setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
  - assumptions:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - inputs:
    - heat: 0
  - steps:
    - Item:
      - index: 1
      - expression: Q = 0
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔS = C ln(Tₕ/400) + C ln(T_c/300)
      - reason: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0 J/K
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0 J/K
  - interpretation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.0
  - limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - preset:
    - heat: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- Item:
  - id: math:example:heat-balance:case-3
  - title: Change Energy transferred Q (J) to 50
  - role: applied_model
  - question: Why can total entropy rise while energy stays balanced?
  - setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
  - assumptions:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - inputs:
    - heat: 50
  - steps:
    - Item:
      - index: 1
      - expression: Q = 50
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔS = C ln(Tₕ/400) + C ln(T_c/300)
      - reason: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0206192872 J/K
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0206192872 J/K
  - interpretation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.02061928720273561
  - limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - preset:
    - heat: 50
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- Item:
  - id: math:example:heat-balance:case-4
  - title: Change Energy transferred Q (J) to 12.5
  - role: applied_model
  - question: Why can total entropy rise while energy stays balanced?
  - setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
  - assumptions:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - inputs:
    - heat: 12.5
  - steps:
    - Item:
      - index: 1
      - expression: Q = 12.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔS = C ln(Tₕ/400) + C ln(T_c/300)
      - reason: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0090732962 J/K
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0090732962 J/K
  - interpretation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.009073296205674755
  - limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - preset:
    - heat: 12.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
- Item:
  - id: math:example:heat-balance:case-5
  - title: Change Energy transferred Q (J) to 37.5
  - role: applied_model
  - question: Why can total entropy rise while energy stays balanced?
  - setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.
  - assumptions:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - inputs:
    - heat: 37.5
  - steps:
    - Item:
      - index: 1
      - expression: Q = 37.5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔS = C ln(Tₕ/400) + C ln(T_c/300)
      - reason: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
    - Item:
      - index: 3
      - expression: Result ≈ 0.0193429628 J/K
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 0.0193429628 J/K
  - interpretation: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 0.019342962843130935
  - limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - preset:
    - heat: 37.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.

## Interactive

- component id: component:heat-balance
- renderer id: heat-balance-visual-model
- renderer version: 1
- model id: heat-balance-visual-model
- model revision: 1
- expression id: ast:heat-balance:expression
- interaction status: implemented
- description: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
- controls:
  - Item:
    - id: heat
    - type: number
    - default: 25
    - min: 0
    - max: 50
    - step: 0.5
- expected cases:
  - Item:
    - input:
      - heat: 25
    - status: valid
    - output: 0.015504186535965254
  - Item:
    - input:
      - heat: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - heat: 50
    - status: valid
    - output: 0.02061928720273561
  - Item:
    - input:
      - heat: 12.5
    - status: valid
    - output: 0.009073296205674755
  - Item:
    - input:
      - heat: 37.5
    - status: valid
    - output: 0.019342962843130935
  - Item:
    - input:
      - heat: 51
    - status: invalid_parameters
- compute: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
- numeric tolerance: 1e-10
- invariants:
  - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
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
  - prompt: Why can total entropy rise while energy stays balanced?
  - answer: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
- Item:
  - prompt: What does this construction leave out?
  - answer: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.

## Representations

- Item:
  - kind: geometry
  - description: The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Energy transferred Q (J). Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Why can total entropy rise while energy stays balanced?
  - limitations: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - evidence kind: constructed_example
  - example ref: math:example:heat-balance:case-1
- Item:
  - context: Boundary comparison
  - mapping: Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.
  - limitations: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.
  - evidence kind: constructed_example
  - example ref: math:example:heat-balance:case-2

## Source Refs

- source:systems:heat

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:heat. [OpenStax · Entropy](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy). Locator: Entropy change from a reversible path between states; finite bodies with constant heat capacity use the integral of C/T.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
