---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:chi-square-association", "id": "math:concept:chi-square-association", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:chi-square-association", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "327921a2412113ebc869a9d6a06ae60355a7260d2604dc16a95fc9d977aac222"}, "purpose": "Move counts while preserving table margins and follow their discrepancies into one statistic.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "327921a2412113ebc869a9d6a06ae60355a7260d2604dc16a95fc9d977aac222", "status": "draft", "title": "Observed versus expected counts", "topics": ["mathematics", "statistics", "probability", "chi square", "chi-square", "contingency table", "expected count", "Pearson chi square"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Observed versus expected counts

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:chi-square-association; revision 0.1.0-draft. Setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. Expression: $O=\begin{pmatrix}d&20-d\\20-d&d\end{pmatrix},\quad E_{ij}=\frac{R_iC_j}{N}=10,\quad\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}=\frac{4(d-10)^2}{10}.$. Conditions required for a defined value (a case may test their violation): Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

## Schema Version

0.1.0

## Id

math:concept:chi-square-association

## Slug

chi-square-association

## Type

concept

## Title

Observed versus expected counts

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

- chi square
- chi-square
- contingency table
- expected count
- Pearson chi square

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Move counts while preserving table margins and follow their discrepancies into one statistic.

## Meaning

The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.

## Prerequisites

- required:
  - math:concept:joint-distribution
  - math:concept:hypothesis-test
- helpful:
  []
- depth:
  []

## Definition

- setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
- formal latex: O=\begin{pmatrix}d&20-d\\20-d&d\end{pmatrix},\quad E_{ij}=\frac{R_iC_j}{N}=10,\quad\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}=\frac{4(d-10)^2}{10}.
- signature:
  - d: Two matching diagonal counts in a fixed-margin table.
  - χ²: Pearson chi-square discrepancy statistic.
- conditions:
  - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:association

## Grammar

- pronunciation: Observed versus expected counts
- expression latex: O=\begin{pmatrix}d&20-d\\20-d&d\end{pmatrix},\quad E_{ij}=\frac{R_iC_j}{N}=10,\quad\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}=\frac{4(d-10)^2}{10}.
- formation rule: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: d
    - role: Two matching diagonal counts in a fixed-margin table.
    - type: Declared mathematical quantity
  - Item:
    - token: χ²
    - role: Pearson chi-square discrepancy statistic.
    - type: Declared mathematical quantity
- ast:
  - id: ast:chi-square-association:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:diagonal
      - kind: variable
      - type: Declared model input
      - symbol: d
      - scope ref: scope:chi-square-association:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10. χ² = ∑ (Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:diagonal
  - scopes:
    - Item:
      - id: scope:chi-square-association:expression
      - kind: modelExpression
      - free variables:
        - d
      - domain condition: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - d: diagonal
  - χ²: output

## Properties

- Item:
  - claim: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
  - conditions: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - derivation: All observed counts equal 10, giving χ²=0.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:chi-square-association:matching-expectation

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
  - target: math:concept:joint-distribution
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses joint distribution.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hypothesis-test
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses hypothesis test.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:chi-square-association:matching-expectation
  - title: Match independence counts
  - role: applied_model
  - question: Match independence counts under the stated inputs?
  - setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - assumptions:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - inputs:
    - diagonal: 10
  - steps:
    - Item:
      - index: 1
      - expression: diagonal=10
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: All observed counts equal 10, giving χ²=0.
      - reason: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
  - result:
    - exact: All observed counts equal 10, giving χ²=0.
  - interpretation: All observed counts equal 10, giving χ²=0.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - preset:
    - diagonal: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- Item:
  - id: math:example:chi-square-association:moderate-association
  - title: Four departures of four readers
  - role: applied_model
  - question: Four departures of four readers under the stated inputs?
  - setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - assumptions:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - inputs:
    - diagonal: 14
  - steps:
    - Item:
      - index: 1
      - expression: diagonal=14
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Four contributions 16/10 give χ²=6.4.
      - reason: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
  - result:
    - exact: Four contributions 16/10 give χ²=6.4.
  - interpretation: Four contributions 16/10 give χ²=6.4.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 6.4}
  - limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - preset:
    - diagonal: 14
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- Item:
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
- Item:
  - id: math:example:chi-square-association:complete-diagonal
  - title: Concentrate on the diagonal
  - role: applied_model
  - question: Concentrate on the diagonal under the stated inputs?
  - setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - assumptions:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - inputs:
    - diagonal: 20
  - steps:
    - Item:
      - index: 1
      - expression: diagonal=20
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Four contributions 100/10 give χ²=40.
      - reason: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
  - result:
    - exact: Four contributions 100/10 give χ²=40.
  - interpretation: Four contributions 100/10 give χ²=40.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 40.0}
  - limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - preset:
    - diagonal: 20
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
- Item:
  - id: math:example:chi-square-association:complete-off-diagonal
  - title: Concentrate off the diagonal
  - role: applied_model
  - question: Concentrate off the diagonal under the stated inputs?
  - setting: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
  - assumptions:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - inputs:
    - diagonal: 0
  - steps:
    - Item:
      - index: 1
      - expression: diagonal=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: The reversed extreme also has χ²=40.
      - reason: The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.
  - result:
    - exact: The reversed extreme also has χ²=40.
  - interpretation: The reversed extreme also has χ²=40.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 40.0}
  - limits: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - preset:
    - diagonal: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.
    - The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

## Interactive

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

## Prompts

- Item:
  - prompt: At d=14, how much observed-versus-expected discrepancy is there?
  - answer: Observed counts are 14,6,6,14; every expected count is 10. Each contribution is 16/10, so χ²=6.4. The statistic detects departure in either direction, without establishing causality.
- Item:
  - prompt: What is outside this demonstration?
  - answer: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.

## Representations

- Item:
  - kind: geometry
  - description: Move counts while preserving table margins and follow their discrepancies into one statistic.
- Item:
  - kind: graph
  - description: The statistic is evaluated at whole counts d=0,…,20. Symmetry around ten follows squared departures.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: Are desk and reading preference associated?
  - mapping: Move counts while preserving table margins and follow their discrepancies into one statistic.
  - limitations: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - evidence kind: constructed_example
  - example ref: math:example:chi-square-association:matching-expectation
- Item:
  - context: Four departures of four readers
  - mapping: Four contributions 16/10 give χ²=6.4.
  - limitations: The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.
  - evidence kind: constructed_example
  - example ref: math:example:chi-square-association:moderate-association

## Source Refs

- source:inference:association

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:association. [NIST · Contingency tables](https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm). Locator: Independence and expected cell counts from row and column proportions. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
