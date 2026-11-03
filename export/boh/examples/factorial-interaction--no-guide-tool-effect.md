---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:factorial-interaction:no-guide-tool-effect", "id": "math:example:factorial-interaction:no-guide-tool-effect", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:factorial-interaction", "example_id": "math:example:factorial-interaction:no-guide-tool-effect", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9abf8c4ee65b31cc645c8a57839c929066549f6454d671bdc4c1f8a1125fbe3c"}, "purpose": "Compare two changes in packing time and see interaction as nonparallel responses.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9abf8c4ee65b31cc645c8a57839c929066549f6454d671bdc4c1f8a1125fbe3c", "status": "draft", "title": "No tool effect with the guide", "topics": ["mathematics", "statistics", "modeling", "factorial design", "interaction", "difference of differences", "two factors"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# No tool effect with the guide

Parent card: math:concept:factorial-interaction; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:factorial-interaction; revision 0.1.0-draft. Setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. Expression: $\Delta=(y_{11}-y_{01})-(y_{10}-y_{00}),\quad(y_{00},y_{10},y_{01},y_{11})=(12,10,9,c).\quad\Delta=c-7.$. Conditions required for a defined value (a case may test their violation): A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.

Case unit math:example:factorial-interaction:no-guide-tool-effect. Setting: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide. Inputs: {"combined": 9}. Result: {"exact": "Tool effects −2 and 0 give Δ=2 minutes."}. Limits: This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:inference:factorial. [NIST · Full factorial designs](https://www.itl.nist.gov/div898/handbook/pri/section3/pri333.htm). Locator: Two levels per factor and all combinations. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.

- Source ID: source:inference:interaction. [NIST · Effects plot](https://www.itl.nist.gov/div898/handbook/pri/section5/pri597.htm). Locator: Conventional high-minus-low effects; contrast scaling. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
