---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:limit:switch-jump", "id": "math:example:limit:switch-jump", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:limit", "example_id": "math:example:limit:switch-jump", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802"}, "purpose": "Separate where nearby values are heading from the value assigned at the point itself.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802", "status": "draft", "title": "A switch changes the rule", "topics": ["mathematics", "calculus", "analysis", "two-sided limit", "one-sided approach", "removable discontinuity"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# A switch changes the rule

Parent card: math:concept:limit; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:limit; revision 0.1.0-draft. Setting: Finite real two-sided limits for a function defined on a punctured neighborhood of a; two explicitly known teaching families. Expression: $\lim_{x\to a}f(x)=L\iff\forall\varepsilon>0\;\exists\delta>0:\;0<|x-a|<\delta\Rightarrow|f(x)-L|<\varepsilon.$. Conditions required for a defined value (a case may test their violation): The function must be defined arbitrarily close to a on both sides for this two-sided setting. The implication excludes x=a; a limit does not assign or repair the center value. A finite two-sided limit requires equal finite one-sided limits. Probe distance is strictly positive; the specimen permits only h∈[0.001,1]. Finite probes illustrate the stated known rule; they cannot prove a limit for an arbitrary unknown function. Scope: The live removable family is undefined at x=a even after its formula simplifies away from a. The jump family is defined at x=a but has no two-sided limit. The UI’s smallest h is a display bound, not a mathematical smallest distance. Infinite limits and oscillatory cases are not implemented.

Case unit math:example:limit:switch-jump. Setting: Original constructed teaching scenario; quantities are stipulated, not measured. Inputs: {"a": 1, "h": 0.25, "mode": "jump"}. Result: {"exact": "no two-sided limit; center value 1", "function_at_point": 1, "limit_exists": false}. Limits: This switch is an idealized jump, not a measured transition. A real device may smooth or oscillate around its threshold.

## Complete worked case

- id: math:example:limit:switch-jump
- title: A switch changes the rule
- role: applied_model
- question: A normalized switch reports a−1 below its threshold, a+1 above it, and a exactly at it. For a=1, do the sides meet?
- setting: Original constructed teaching scenario; quantities are stipulated, not measured.
- assumptions:
  - Coordinates and readings are dimensionless normalized teaching quantities.
  - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
  - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
- inputs:
  - mode: jump
  - a: 1
  - h: 0.25
- steps:
  - Item:
    - index: 1
    - expression: left reading=1−1=0; right reading=1+1=2
    - reason: Use the separate branches on their correct sides.
  - Item:
    - index: 2
    - expression: left limit=0; right limit=2
    - reason: Shrinking h does not change either branch’s height.
  - Item:
    - index: 3
    - expression: two-sided limit does not exist, although f(1)=1
    - reason: A defined center value cannot make unequal one-sided limits equal.
- result:
  - exact: no two-sided limit; center value 1
  - limit exists: false
  - function at point: 1
- interpretation: The two hollow side markers stay two units apart; the filled center marker is a third, separate fact.
- independent check:
  - method: Disjoint neighborhoods
  - expected: The left and right limits differ by 2, so no common value can satisfy closeness to both for every tolerance.
- limits: This switch is an idealized jump, not a measured transition. A real device may smooth or oscillate around its threshold.
- preset:
  - mode: jump
  - a: 1
  - h: 0.25
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
