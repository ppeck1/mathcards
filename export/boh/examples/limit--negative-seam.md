---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:limit:negative-seam", "id": "math:example:limit:negative-seam", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:limit", "example_id": "math:example:limit:negative-seam", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802"}, "purpose": "Separate where nearby values are heading from the value assigned at the point itself.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802", "status": "draft", "title": "The same seam left of the origin", "topics": ["mathematics", "calculus", "analysis", "two-sided limit", "one-sided approach", "removable discontinuity"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# The same seam left of the origin

Parent card: math:concept:limit; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:limit; revision 0.1.0-draft. Setting: Finite real two-sided limits for a function defined on a punctured neighborhood of a; two explicitly known teaching families. Expression: $\lim_{x\to a}f(x)=L\iff\forall\varepsilon>0\;\exists\delta>0:\;0<|x-a|<\delta\Rightarrow|f(x)-L|<\varepsilon.$. Conditions required for a defined value (a case may test their violation): The function must be defined arbitrarily close to a on both sides for this two-sided setting. The implication excludes x=a; a limit does not assign or repair the center value. A finite two-sided limit requires equal finite one-sided limits. Probe distance is strictly positive; the specimen permits only h∈[0.001,1]. Finite probes illustrate the stated known rule; they cannot prove a limit for an arbitrary unknown function. Scope: The live removable family is undefined at x=a even after its formula simplifies away from a. The jump family is defined at x=a but has no two-sided limit. The UI’s smallest h is a display bound, not a mathematical smallest distance. Infinite limits and oscillatory cases are not implemented.

Case unit math:example:limit:negative-seam. Setting: Original constructed teaching scenario; quantities are stipulated, not measured. Inputs: {"a": -1, "h": 0.1, "mode": "removable"}. Result: {"exact": "limit −2; center undefined"}. Limits: An average of two arbitrary sample values is not a general limit method; the exact identity q(x)=x+a supplies the justification.

## Complete worked case

- id: math:example:limit:negative-seam
- title: The same seam left of the origin
- role: applied_model
- question: Move the missing record to a=−1 and probe at distance h=0.1. What limit remains?
- setting: Original constructed teaching scenario; quantities are stipulated, not measured.
- assumptions:
  - Coordinates and readings are dimensionless normalized teaching quantities.
  - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
  - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
- inputs:
  - mode: removable
  - a: -1
  - h: 0.1
- steps:
  - Item:
    - index: 1
    - expression: q(x)=x−1 for x≠−1
    - reason: The same cancellation works for a negative a.
  - Item:
    - index: 2
    - expression: q(−1.1)=−2.1; q(−0.9)=−1.9
    - reason: Evaluate the left and right probes with their signs.
  - Item:
    - index: 3
    - expression: lim[x→−1]q(x)=−2
    - reason: The nearby rule tends to 2a, regardless of the missing record.
- result:
  - exact: limit −2; center undefined
- interpretation: A limit can be negative. The two sides converge toward one height below the origin.
- independent check:
  - method: Symmetry and error
  - expected: The probe average is (−2.1−1.9)/2=−2, and each error is h=0.1.
- limits: An average of two arbitrary sample values is not a general limit method; the exact identity q(x)=x+a supplies the justification.
- preset:
  - mode: removable
  - a: -1
  - h: 0.1
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - Coordinates and readings are dimensionless normalized teaching quantities.
  - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
  - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.

## Written exploration recipe

- component id: limit-visual-model
- renderer id: limit-visual-model
- renderer version: 1.0.0
- model id: limit-visual-model
- model revision: 1.0.0
- expression id: ast:limit:expression
- interaction status: implemented
- description: Two finite probes travel toward the target while hollow side endpoints and a separate center marker distinguish a limit from an assigned function value.
- controls:
  - Item:
    - id: mode
    - type: enum
    - default: removable
    - values:
      - removable
      - jump
  - Item:
    - id: a
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: h
    - type: number
    - default: 0.25
    - min: 0.001
    - max: 1
    - slider min: 0.001
    - slider max: 1
    - slider step: 0.001
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
- expected cases:
  - Item:
    - input:
      - mode: removable
      - a: 1
      - h: 0.25
    - output: 2
  - Item:
    - input:
      - mode: removable
      - a: -2
      - h: 1
    - output: -4
  - Item:
    - input:
      - mode: removable
      - a: 2
      - h: 0.001
    - output: 4
  - Item:
    - input:
      - mode: removable
      - a: 0
      - h: 0.1
    - output: 0
  - Item:
    - input:
      - mode: removable
      - a: 0.5
      - h: 0.001
    - output: 1
  - Item:
    - input:
      - mode: jump
      - a: 1
      - h: 0.25
    - status: does_not_exist
  - Item:
    - input:
      - mode: jump
      - a: -2
      - h: 0.001
    - status: does_not_exist
  - Item:
    - input:
      - mode: removable
      - a: 1
      - h: 0
    - status: invalid_parameters
  - Item:
    - input:
      - mode: removable
      - a: 3
      - h: 0.25
    - status: invalid_parameters
- compute: leftX=a−h; rightX=a+h. Removable: leftValue=2*a−h; rightValue=2*a+h; leftLimit=rightLimit=output=2*a; gap=2*h; limitExists=true; functionAtPoint=null; status=valid. Jump: leftValue=leftLimit=a−1; rightValue=rightLimit=a+1; gap=2; functionAtPoint=a; limitExists=false; output=null; status=does_not_exist. Probe values are not the one-sided limits.
- numeric tolerance: 1e-10
- invariants:
  - The function must be defined arbitrarily close to a on both sides for this two-sided setting.
  - The implication excludes x=a; a limit does not assign or repair the center value.
  - A finite two-sided limit requires equal finite one-sided limits.
  - Probe distance is strictly positive; the specimen permits only h∈[0.001,1].
  - Finite probes illustrate the stated known rule; they cannot prove a limit for an arbitrary unknown function.
- limits:
  - Finite probes are illustrative; the exact declared branch rules establish these conclusions.
  - This module implements only two real one-sided patterns, not a general limit solver.
  - The removable center is undefined; the jump center is defined as a and is not substituted for either side limit.
- fallback: Pause motion and read the same labeled diagram, substitutions and original worked steps. The graph and exact numeric result remain available.
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

- Source ID: source:openstax:function-limits. [Calculus Volume 1, 2.2 The Limit of a Function](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function). Locator: Intuitive Definition of a Limit; one-sided and two-sided limits; function value versus nearby behavior. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:precise-limit. [Calculus Volume 1, 2.5 The Precise Definition of a Limit](https://openstax.org/books/calculus-volume-1/pages/2-5-the-precise-definition-of-a-limit). Locator: Quantifying Closeness; epsilon–delta definition; punctured input neighborhood. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
