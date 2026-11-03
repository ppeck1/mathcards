---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:heat-balance:case-2", "id": "math:example:heat-balance:case-2", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:heat-balance", "example_id": "math:example:heat-balance:case-2", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9a29852fe313dba39dd479746b7071ab8a01d54c9f7794d3c87b8b41971af7c0"}, "purpose": "Why can total entropy rise while energy stays balanced?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9a29852fe313dba39dd479746b7071ab8a01d54c9f7794d3c87b8b41971af7c0", "status": "draft", "title": "Change Energy transferred Q (J) to 0", "topics": ["mathematics", "physical-models", "heat exchange and physical entropy"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Change Energy transferred Q (J) to 0

Parent card: math:concept:heat-balance; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:heat-balance; revision 0.1.0-draft. Setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes. Expression: $T_h=400-Q/C,\quad T_c=300+Q/C,\quad\Delta S=C\ln(T_h/400)+C\ln(T_c/300),\ C=1\,\mathrm{J/K}.$. Conditions required for a defined value (a case may test their violation): Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits. Inputs stay inside the declared control ranges. Each result uses the same parameter state in the story, formula and both views. This is an originally authored constructed example; no empirical dataset or exact-edition book page has been verified. Scope: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.

Case unit math:example:heat-balance:case-2. Setting: Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes. Inputs: {"heat": 0}. Result: {"approximate": "0.0 J/K"}. Limits: Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:systems:heat. [OpenStax · Entropy](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy). Locator: Entropy change from a reversible path between states; finite bodies with constant heat capacity use the integral of C/T.. Verification: Definition-level web reference inspected 2026-11-02; bounded family author-derived, independent review pending.. Rights: Original story, explanations, diagrams and examples. Reference facts and equations only; no source exercises reproduced.
