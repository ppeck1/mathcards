---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:chi-square-association:opposite-pattern", "id": "math:example:chi-square-association:opposite-pattern", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:chi-square-association", "example_id": "math:example:chi-square-association:opposite-pattern", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "327921a2412113ebc869a9d6a06ae60355a7260d2604dc16a95fc9d977aac222"}, "purpose": "Move counts while preserving table margins and follow their discrepancies into one statistic.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "327921a2412113ebc869a9d6a06ae60355a7260d2604dc16a95fc9d977aac222", "status": "draft", "title": "Reverse the same association", "topics": ["mathematics", "statistics", "probability", "chi square", "chi-square", "contingency table", "expected count", "Pearson chi square"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Reverse the same association

Parent card: math:concept:chi-square-association; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:chi-square-association; revision 0.1.0-draft. Setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. Expression: $O=\begin{pmatrix}d&20-d\\20-d&d\end{pmatrix},\quad E_{ij}=\frac{R_iC_j}{N}=10,\quad\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}=\frac{4(d-10)^2}{10}.$. Conditions required for a defined value (a case may test their violation): Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

Case unit math:example:chi-square-association:opposite-pattern. Setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. Inputs: {"diagonal": 6}. Result: {"exact": "Squared departures are unchanged: χ²=6.4."}. Limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

## Complete worked case

- id: math:example:chi-square-association:opposite-pattern
- title: Reverse the same association
- role: applied_model
- question: Reverse the same association under the stated inputs?
- setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
- assumptions:
  - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- inputs:
  - diagonal: 6
- steps:
  - Item:
    - index: 1
    - expression: diagonal=6
    - reason: Set declared inputs without changing the family.
  - Item:
    - index: 2
    - expression: Squared departures are unchanged: χ²=6.4.
    - reason: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
- result:
  - exact: Squared departures are unchanged: χ²=6.4.
- interpretation: Squared departures are unchanged: χ²=6.4.
- independent check:
  - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
  - expected: {"status": "valid", "output": 6.4}
- limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- preset:
  - diagonal: 6
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

## Written exploration recipe

- component id: component:chi-square-association
- renderer id: chi-square-association-visual-model
- renderer version: 1
- model id: chi-square-association-visual-model
- model revision: 1
- expression id: ast:chi-square-association:expression
- interaction status: implemented
- description: Move counts while preserving table margins and follow their discrepancies into one statistic.
- controls:
  - Item:
    - id: diagonal
    - type: number
    - default: 14
    - min: 0
    - max: 20
    - step: 1
- expected cases:
  - Item:
    - input:
      - diagonal: 10
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - diagonal: 14
    - status: valid
    - output: 6.4
  - Item:
    - input:
      - diagonal: 6
    - status: valid
    - output: 6.4
  - Item:
    - input:
      - diagonal: 20
    - status: valid
    - output: 40.0
  - Item:
    - input:
      - diagonal: 0
    - status: valid
    - output: 40.0
  - Item:
    - input:
      - diagonal: -1
    - status: invalid_parameters
  - Item:
    - input:
      - diagonal: 14
    - status: invalid_parameters
- compute: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. χ² = ∑ (Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ
- numeric tolerance: 1e-10
- invariants:
  - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
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

- Source ID: source:inference:association. [NIST · Contingency tables](https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm). Locator: Independence and expected cell counts from row and column proportions. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
