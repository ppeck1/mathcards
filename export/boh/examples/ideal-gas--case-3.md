---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:ideal-gas:case-3", "id": "math:example:ideal-gas:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:ideal-gas", "example_id": "math:example:ideal-gas:case-3", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "412a9344888c3de723194acd871017b37a5cf5f5bffa47a97355868d09366348"}, "purpose": "What happens to pressure when the same gas has more room?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "412a9344888c3de723194acd871017b37a5cf5f5bffa47a97355868d09366348", "status": "draft", "title": "Change Volume V (L) to 40", "topics": ["mathematics", "physical-models", "the ideal gas law"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Volume V (L) to 40

Parent card: math:concept:ideal-gas; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:ideal-gas; revision 0.1.0-draft. Setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment. Expression: $pV=nRT,\quad p=\frac{nRT}{V},\quad n=1\,\mathrm{mol}.$. Conditions required for a defined value (a case may test their violation): One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.

Case unit math:example:ideal-gas:case-3. Setting: A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment. Inputs: {"temperature": 300, "volume": 40}. Result: {"approximate": "62.3584696361 kPa"}. Limits: One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:systems:gas. [OpenStax · Molecular model of an ideal gas](https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas). Locator: pV=nRT and the ideal-gas assumptions.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
