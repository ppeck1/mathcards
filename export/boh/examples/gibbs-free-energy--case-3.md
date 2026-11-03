---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:gibbs-free-energy:case-3", "id": "math:example:gibbs-free-energy:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gibbs-free-energy", "example_id": "math:example:gibbs-free-energy:case-3", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1e89142a3bccb127dc23643859be1fa0f35f5f721b53434a65ebf4ba24dc4e06"}, "purpose": "Can temperature change which transformation is favorable?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1e89142a3bccb127dc23643859be1fa0f35f5f721b53434a65ebf4ba24dc4e06", "status": "draft", "title": "Change Temperature T (K) to 600", "topics": ["mathematics", "physical-models", "gibbs free energy"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Temperature T (K) to 600

Parent card: math:concept:gibbs-free-energy; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:gibbs-free-energy; revision 0.1.0-draft. Setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical. Expression: $\Delta G=\Delta H-T\Delta S.$. Conditions required for a defined value (a case may test their violation): A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.

Case unit math:example:gibbs-free-energy:case-3. Setting: A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical. Inputs: {"enthalpy": 2000, "entropy": 5, "temperature": 600}. Result: {"approximate": "-1000.0 J"}. Limits: A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:systems:gibbs. [OpenStax · Free energy](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy). Locator: ΔG=ΔH−TΔS and constant-temperature, constant-pressure favorability; no rate inference.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
