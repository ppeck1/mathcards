---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:gibbs-free-energy", "id": "math:concept:gibbs-free-energy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gibbs-free-energy", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1e89142a3bccb127dc23643859be1fa0f35f5f721b53434a65ebf4ba24dc4e06"}, "purpose": "Can temperature change which transformation is favorable?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1e89142a3bccb127dc23643859be1fa0f35f5f721b53434a65ebf4ba24dc4e06", "status": "draft", "title": "Gibbs free energy", "topics": ["mathematics", "physical-models", "gibbs free energy"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Gibbs free energy

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:gibbs-free-energy; revision 0.1.0-draft. Setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical. Expression: $\Delta G=\Delta H-T\Delta S.$. Conditions required for a defined value (a case may test their violation): A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.

## Schema Version

0.1.0

## Id

math:concept:gibbs-free-energy

## Slug

gibbs-free-energy

## Type

concept

## Title

Gibbs free energy

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

- gibbs free energy

## Branches

- physical-models

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Can temperature change which transformation is favorable?

## Meaning

Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:heat-balance
  - math:concept:linear-model
- depth:
  []

## Definition

- setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
- formal latex: \Delta G=\Delta H-T\Delta S.
- signature:
  - T: Temperature T (K); the declared input
  - ΔH: Enthalpy change ΔH (J); the declared input
  - ΔS: Entropy change ΔS (J/K); the declared input
  - result: The primary reported quantity in J.
- conditions:
  - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- domain notes: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- proof status: Author-derived for the bounded family; independent mathematical review pending.
- source refs:
  - source:systems:gibbs

## Grammar

- pronunciation: Gibbs free energy
- expression latex: \Delta G=\Delta H-T\Delta S.
- formation rule: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
- precedence: Apply the stated grouping and units before rounding the displayed result.
- symbols:
  - Item:
    - token: T
    - role: Temperature T (K); the declared input
    - type: Declared input or result
  - Item:
    - token: ΔH
    - role: Enthalpy change ΔH (J); the declared input
    - type: Declared input or result
  - Item:
    - token: ΔS
    - role: Entropy change ΔS (J/K); the declared input
    - type: Declared input or result
  - Item:
    - token: result
    - role: The primary reported quantity in J.
    - type: Declared input or result
- ast:
  - id: ast:gibbs-free-energy:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:temperature
      - kind: variable
      - type: Declared model input
      - symbol: T
      - scope ref: scope:gibbs-free-energy
    - Item:
      - id: n:enthalpy
      - kind: variable
      - type: Declared model input
      - symbol: ΔH
      - scope ref: scope:gibbs-free-energy
    - Item:
      - id: n:entropy
      - kind: variable
      - type: Declared model input
      - symbol: ΔS
      - scope ref: scope:gibbs-free-energy
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluator for the stated family
      - ref: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - id: n:bound-temperature
      - kind: apply
      - type: Declared result
      - function: n:rule
      - argument: n:temperature
    - Item:
      - id: n:bound-enthalpy
      - kind: apply
      - type: Declared result
      - function: n:bound-temperature
      - argument: n:enthalpy
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared result
      - function: n:bound-enthalpy
      - argument: n:entropy
  - scopes:
    - Item:
      - id: scope:gibbs-free-energy
      - kind: modelExpression
      - free variables:
        - T
        - ΔH
        - ΔS
      - domain condition: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- parse errors:
  - Item:
    - input: Use a value outside the declared range
    - status: unsupported parameter
    - reason: The executable family is deliberately bounded; its limits are part of its meaning.
- ast coverage: A typed application outline of the bounded family; no arbitrary expression parser is claimed.
- output symbol bindings:
  - T: temperature
  - ΔH: enthalpy
  - ΔS: entropy
  - result: output

## Properties

- Item:
  - claim: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
  - conditions: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - derivation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:gibbs-free-energy:case-1

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
  - target: math:concept:heat-balance
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Gibbs free energy supplies a bounded connection to heat balance.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use each lesson under its own declared assumptions.
  - reason: Gibbs free energy supplies a bounded connection to linear model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:gibbs-free-energy:case-1
  - title: Begin with the stated scenario
  - role: applied_model
  - question: Can temperature change which transformation is favorable?
  - setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
  - assumptions:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - inputs:
    - temperature: 300
    - enthalpy: 2000
    - entropy: 5
  - steps:
    - Item:
      - index: 1
      - expression: T = 300, ΔH = 2000, ΔS = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔG = ΔH − T ΔS
      - reason: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - index: 3
      - expression: Result ≈ 500.0 J
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 500.0 J
  - interpretation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 500.0
  - limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - preset:
    - temperature: 300
    - enthalpy: 2000
    - entropy: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- Item:
  - id: math:example:gibbs-free-energy:case-2
  - title: Change Temperature T (K) to 100
  - role: applied_model
  - question: Can temperature change which transformation is favorable?
  - setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
  - assumptions:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - inputs:
    - temperature: 100
    - enthalpy: 2000
    - entropy: 5
  - steps:
    - Item:
      - index: 1
      - expression: T = 100, ΔH = 2000, ΔS = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔG = ΔH − T ΔS
      - reason: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - index: 3
      - expression: Result ≈ 1500.0 J
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 1500.0 J
  - interpretation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 1500.0
  - limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - preset:
    - temperature: 100
    - enthalpy: 2000
    - entropy: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- Item:
  - id: math:example:gibbs-free-energy:case-3
  - title: Change Temperature T (K) to 600
  - role: applied_model
  - question: Can temperature change which transformation is favorable?
  - setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
  - assumptions:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - inputs:
    - temperature: 600
    - enthalpy: 2000
    - entropy: 5
  - steps:
    - Item:
      - index: 1
      - expression: T = 600, ΔH = 2000, ΔS = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔG = ΔH − T ΔS
      - reason: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - index: 3
      - expression: Result ≈ -1000.0 J
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: -1000.0 J
  - interpretation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: -1000.0
  - limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - preset:
    - temperature: 600
    - enthalpy: 2000
    - entropy: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- Item:
  - id: math:example:gibbs-free-energy:case-4
  - title: Change Enthalpy change ΔH (J) to -4000
  - role: applied_model
  - question: Can temperature change which transformation is favorable?
  - setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
  - assumptions:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - inputs:
    - temperature: 300
    - enthalpy: -4000
    - entropy: 5
  - steps:
    - Item:
      - index: 1
      - expression: T = 300, ΔH = -4000, ΔS = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔG = ΔH − T ΔS
      - reason: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - index: 3
      - expression: Result ≈ -5500.0 J
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: -5500.0 J
  - interpretation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: -5500.0
  - limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - preset:
    - temperature: 300
    - enthalpy: -4000
    - entropy: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
- Item:
  - id: math:example:gibbs-free-energy:case-5
  - title: Change Enthalpy change ΔH (J) to 4000
  - role: applied_model
  - question: Can temperature change which transformation is favorable?
  - setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.
  - assumptions:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - inputs:
    - temperature: 300
    - enthalpy: 4000
    - entropy: 5
  - steps:
    - Item:
      - index: 1
      - expression: T = 300, ΔH = 4000, ΔS = 5
      - reason: These are the stipulated inputs for this case.
    - Item:
      - index: 2
      - expression: ΔG = ΔH − T ΔS
      - reason: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
    - Item:
      - index: 3
      - expression: Result ≈ 2500.0 J
      - reason: Evaluate the stated rule before rounding the display.
  - result:
    - approximate: 2500.0 J
  - interpretation: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
  - independent check:
    - method: Independent Python reference using sets, algebra or alternate analytic identities.
    - expected: 2500.0
  - limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - preset:
    - temperature: 300
    - enthalpy: 4000
    - entropy: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.

## Interactive

- component id: component:gibbs-free-energy
- renderer id: gibbs-free-energy-visual-model
- renderer version: 1
- model id: gibbs-free-energy-visual-model
- model revision: 1
- expression id: ast:gibbs-free-energy:expression
- interaction status: implemented
- description: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
- controls:
  - Item:
    - id: temperature
    - type: number
    - default: 300
    - min: 100
    - max: 600
    - step: 1
  - Item:
    - id: enthalpy
    - type: number
    - default: 2000
    - min: -4000
    - max: 4000
    - step: 50
  - Item:
    - id: entropy
    - type: number
    - default: 5
    - min: -10
    - max: 10
    - step: 0.1
- expected cases:
  - Item:
    - input:
      - temperature: 300
      - enthalpy: 2000
      - entropy: 5
    - status: valid
    - output: 500.0
  - Item:
    - input:
      - temperature: 100
      - enthalpy: 2000
      - entropy: 5
    - status: valid
    - output: 1500.0
  - Item:
    - input:
      - temperature: 600
      - enthalpy: 2000
      - entropy: 5
    - status: valid
    - output: -1000.0
  - Item:
    - input:
      - temperature: 300
      - enthalpy: -4000
      - entropy: 5
    - status: valid
    - output: -5500.0
  - Item:
    - input:
      - temperature: 300
      - enthalpy: 4000
      - entropy: 5
    - status: valid
    - output: 2500.0
  - Item:
    - input:
      - temperature: 300
      - enthalpy: 2000
      - entropy: -10
    - status: valid
    - output: 5000.0
  - Item:
    - input:
      - temperature: 300
      - enthalpy: 2000
      - entropy: 10
    - status: valid
    - output: -1000.0
  - Item:
    - input:
      - temperature: 225.0
      - enthalpy: 2000
      - entropy: 5
    - status: valid
    - output: 875.0
  - Item:
    - input:
      - temperature: 475.0
      - enthalpy: 2000
      - entropy: 5
    - status: valid
    - output: -375.0
  - Item:
    - input:
      - temperature: 601
      - enthalpy: 2000
      - entropy: 5
    - status: invalid_parameters
- compute: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
- numeric tolerance: 1e-10
- invariants:
  - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views.
  - This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified.
- limits:
  - A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
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
  - prompt: Can temperature change which transformation is favorable?
  - answer: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
- Item:
  - prompt: What does this construction leave out?
  - answer: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.

## Representations

- Item:
  - kind: geometry
  - description: The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot the declared primary result against Temperature T (K). Discrete results use separate dots.
- Item:
  - kind: substitution
  - description: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.

## Applications

- Item:
  - context: Originally authored teaching scenario
  - mapping: Can temperature change which transformation is favorable?
  - limitations: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - evidence kind: constructed_example
  - example ref: math:example:gibbs-free-energy:case-1
- Item:
  - context: Boundary comparison
  - mapping: Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.
  - limitations: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.
  - evidence kind: constructed_example
  - example ref: math:example:gibbs-free-energy:case-2

## Source Refs

- source:systems:gibbs

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0: Added bounded model, connected story, Geometry/Graph, original examples and reference coverage.

## Referenced source registry

- Source ID: source:systems:gibbs. [OpenStax · Free energy](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy). Locator: ΔG=ΔH−TΔS and constant-temperature, constant-pressure favorability; no rate inference.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
