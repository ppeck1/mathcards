---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:probability:all", "id": "math:example:probability:all", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:probability", "example_id": "math:example:probability:all", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e72fd40b0d1c76a4fb4fe45d452c4a63c7aa809043ffb0295ec49e119d35ea49"}, "purpose": "Connect a single success probability to the distribution of a six-trial count.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e72fd40b0d1c76a4fb4fe45d452c4a63c7aa809043ffb0295ec49e119d35ea49", "status": "draft", "title": "Certain success", "topics": ["mathematics", "probability", "modeling", "binomial distribution", "expected successes"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Certain success

Parent card: math:concept:probability; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:probability; revision 0.1.0-draft. Setting: Connect a single success probability to the distribution of a six-trial count. Expression: $X\sim\operatorname{Binomial}(6,p),\quad E[X]=6p$. Conditions required for a defined value (a case may test their violation): Use exactly six Bernoulli trials, each with two outcomes. Trials are independent and share the same fixed success probability 0≤p≤1. The output is expectation; the distribution describes possible integer outcomes. Scope: The only adjustable parameter is chance=p. The seven bars show P(X=k)=C(6,k)pᵏ(1−p)^(6−k), with endpoint distributions handled directly.

Case unit math:example:probability:all. Setting: Original constructed teaching scenario; stipulated quantities are not measurements. Inputs: {"chance": 1}. Result: {"exact": "6 expected successes"}. Limits: The certainty is stipulated, not a guarantee about real seeds.

## Complete worked case

- id: math:example:probability:all
- title: Certain success
- role: boundary
- question: What distribution appears when p=1?
- setting: Original constructed teaching scenario; stipulated quantities are not measurements.
- assumptions:
  - Use exactly six Bernoulli trials, each with two outcomes.
  - Trials are independent and share the same fixed success probability 0≤p≤1.
  - The output is expectation; the distribution describes possible integer outcomes.
- inputs:
  - chance: 1
- steps:
  - Item:
    - index: 1
    - expression: P(X=6)=1
    - reason: All trials succeed under this stipulated model.
  - Item:
    - index: 2
    - expression: E(X)=6(1)=6
    - reason: The mean equals the only possible count.
- result:
  - exact: 6 expected successes
- interpretation: The distribution collapses to its upper endpoint.
- independent check:
  - method: Sum six certain indicators.
  - expected: 1+1+1+1+1+1=6.
- limits: The certainty is stipulated, not a guarantee about real seeds.
- preset:
  - chance: 1
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - Use exactly six Bernoulli trials, each with two outcomes.
  - Trials are independent and share the same fixed success probability 0≤p≤1.
  - The output is expectation; the distribution describes possible integer outcomes.

## Written exploration recipe

- component id: probability-visual-model
- renderer id: probability-visual-model
- renderer version: 1.0.0
- model id: probability-visual-model
- model revision: 1.0.0
- expression id: ast:probability:expression
- interaction status: implemented
- description: Seven bars change continuously with p; a mean marker moves from count 0 tocount 6.
- controls:
  - Item:
    - id: chance
    - type: number
    - default: 0.5
    - min: 0
    - max: 1
    - slider min: 0
    - slider max: 1
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - chance: 0.5
    - output: 3.0
  - Item:
    - input:
      - chance: 0.25
    - output: 1.5
  - Item:
    - input:
      - chance: 0
    - output: 0
  - Item:
    - input:
      - chance: 1
    - output: 6
  - Item:
    - input:
      - chance: 0.8
    - output: 4.800000000000001
  - Item:
    - input:
      - chance: 0.3333333333333333
    - output: 2.0
  - Item:
    - input:
      - chance: 1.01
    - status: invalid_parameters
- compute: The only model parameter is chance=p; trial count is fixed at 6. Output=6*p. Distribution[k]=C(6,k)*p^k*(1-p)^(6-k) for k=0…6; handle p=0 and p=1 by point masses.
- numeric tolerance: 1e-10
- invariants:
  - The output is between 0 and 6.
  - At p=0 only count 0 has probability 1; at p=1 only count 6 does.
  - The probability-weighted mean of the seven bars equals 6p.
- limits:
  - No random trial is needed to draw this exact model distribution.
  - The expected count is not a guaranteed realized count.
  - The binomial distribution assumes independence and identical success probabilities.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

- Source ID: source:openstax:binomial-distribution. [Introductory Statistics2e,4.3 Binomial Distribution](https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution). Locator: Fixed independent identical Bernoulli trials; count probabilities and mean np. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
