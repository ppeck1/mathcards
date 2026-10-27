---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:limit", "id": "math:concept:limit", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:limit", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802"}, "purpose": "Separate where nearby values are heading from the value assigned at the point itself.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9b83b7b709a42d89209c83955ad1b4a3d4721ad5edc807bab121143b29078802", "status": "draft", "title": "Limit", "topics": ["mathematics", "calculus", "analysis", "two-sided limit", "one-sided approach", "removable discontinuity"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Limit

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:limit; revision 0.1.0-draft. Setting: Finite real two-sided limits for a function defined on a punctured neighborhood of a; two explicitly known teaching families. Expression: $\lim_{x\to a}f(x)=L\iff\forall\varepsilon>0\;\exists\delta>0:\;0<|x-a|<\delta\Rightarrow|f(x)-L|<\varepsilon.$. Conditions required for a defined value (a case may test their violation): The function must be defined arbitrarily close to a on both sides for this two-sided setting. The implication excludes x=a; a limit does not assign or repair the center value. A finite two-sided limit requires equal finite one-sided limits. Probe distance is strictly positive; the specimen permits only h∈[0.001,1]. Finite probes illustrate the stated known rule; they cannot prove a limit for an arbitrary unknown function. Scope: The live removable family is undefined at x=a even after its formula simplifies away from a. The jump family is defined at x=a but has no two-sided limit. The UI’s smallest h is a display bound, not a mathematical smallest distance. Infinite limits and oscillatory cases are not implemented.

## Schema Version

0.1.0

## Id

math:concept:limit

## Slug

limit

## Type

concept

## Title

Limit

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. All stories and worked quantities are original constructed teaching scenarios, not measurements or historical events. Historical priority and notation claims require separate claim-level evidence before publication.

## Aliases

- two-sided limit
- one-sided approach
- removable discontinuity

## Branches

- calculus
- analysis

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Separate where nearby values are heading from the value assigned at the point itself.

## Meaning

A limit describes the output near a target input, with the target itself excluded. The two approaches must agree for a finite two-sided limit. The playground contrasts a missing point whose neighbors meet with a jump whose sides stay apart.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:domain-codomain
- depth:
  - math:concept:model-assumption

## Definition

- setting: Finite real two-sided limits for a function defined on a punctured neighborhood of a; two explicitly known teaching families.
- formal latex: \lim_{x\to a}f(x)=L\iff\forall\varepsilon>0\;\exists\delta>0:\;0<|x-a|<\delta\Rightarrow|f(x)-L|<\varepsilon.
- signature:
  - a: target input in [−2,2]
  - h: positive finite probe distance in [0.001,1]
  - mode: removable or jump
  - removable rule: q_a(x)=(x²−a²)/(x−a)=x+a for x≠a; q_a(a) undefined; limit 2a
  - jump rule: j_a(x)=a−1 for x<a, a for x=a, a+1 for x>a; unequal one-sided limits
  - output: 2a when the two-sided limit exists; otherwise explicit does_not_exist status
- conditions:
  - The function must be defined arbitrarily close to a on both sides for this two-sided setting.
  - The implication excludes x=a; a limit does not assign or repair the center value.
  - A finite two-sided limit requires equal finite one-sided limits.
  - Probe distance is strictly positive; the specimen permits only h∈[0.001,1].
  - Finite probes illustrate the stated known rule; they cannot prove a limit for an arbitrary unknown function.
- domain notes: The live removable family is undefined at x=a even after its formula simplifies away from a. The jump family is defined at x=a but has no two-sided limit. The UI’s smallest h is a display bound, not a mathematical smallest distance. Infinite limits and oscillatory cases are not implemented.
- proof status: The epsilon–delta definition is referenced; removable-family proof uses |q_a(x)−2a|=|x−a| with δ=ε. Jump failure follows from unequal side limits. Independent review pending.
- source refs:
  - source:openstax:function-limits
  - source:openstax:precise-limit

## Grammar

- pronunciation: the limit of f of x as x approaches a
- expression latex: \lim_{x\to a}f(x)
- formation rule: leftX=a−h; rightX=a+h. Removable: leftValue=2*a−h; rightValue=2*a+h; leftLimit=rightLimit=output=2*a; gap=2*h; limitExists=true; functionAtPoint=null; status=valid. Jump: leftValue=leftLimit=a−1; rightValue=rightLimit=a+1; gap=2; functionAtPoint=a; limitExists=false; output=null; status=does_not_exist. Probe values are not the one-sided limits.
- precedence: The approach x→a excludes x=a. In (x²−a²)/(x−a), factor before canceling and retain the excluded input.
- symbols:
  - Item:
    - token: a
    - role: target input
    - type: Declared real quantity or finite mode
  - Item:
    - token: h
    - role: distance of each finite probe from a
    - type: Declared real quantity or finite mode
  - Item:
    - token: mode
    - role: the chosen removable or jump rule
    - type: Declared real quantity or finite mode
  - Item:
    - token: leftValue
    - role: f(a−h), a finite probe
    - type: Declared real quantity or finite mode
  - Item:
    - token: rightValue
    - role: f(a+h), a finite probe
    - type: Declared real quantity or finite mode
  - Item:
    - token: L
    - role: the two-sided limit if it exists
    - type: Declared real quantity or finite mode
- ast:
  - id: ast:limit:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:mode
      - kind: variable
      - symbol: mode
      - type: Declared control
      - scope ref: scope:limit:model
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Declared control
      - scope ref: scope:limit:model
    - Item:
      - id: n:h
      - kind: variable
      - symbol: h
      - type: Declared control
      - scope ref: scope:limit:model
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: leftX=a−h; rightX=a+h. Removable: leftValue=2*a−h; rightValue=2*a+h; leftLimit=rightLimit=output=2*a; gap=2*h; limitExists=true; functionAtPoint=null; status=valid. Jump: leftValue=leftLimit=a−1; rightValue=rightLimit=a+1; gap=2; functionAtPoint=a; limitExists=false; output=null; status=does_not_exist. Probe values are not the one-sided limits.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:mode
      - type: Remaining controls → primary output
    - Item:
      - id: n:partial1
      - kind: apply
      - function: n:partial0
      - argument: n:a
      - type: Remaining controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial1
      - argument: n:h
      - type: Real or explicit undefined status
  - scopes:
    - Item:
      - id: scope:limit:model
      - kind: modelExpression
      - free variables:
        - mode
        - a
        - h
      - domain condition: leftX=a−h; rightX=a+h. Removable: leftValue=2*a−h; rightValue=2*a+h; leftLimit=rightLimit=output=2*a; gap=2*h; limitExists=true; functionAtPoint=null; status=valid. Jump: leftValue=leftLimit=a−1; rightValue=rightLimit=a+1; gap=2; functionAtPoint=a; limitExists=false; output=null; status=does_not_exist. Probe values are not the one-sided limits.
- parse errors:
  - Item:
    - input: Replace the original quotient at x=a by the canceled rule
    - status: domain_error
    - reason: Cancellation is valid only when x−a≠0; the original center remains undefined.
  - Item:
    - input: Use the average of unequal one-sided limits as the limit
    - status: does_not_exist
    - reason: A two-sided limit must agree with both one-sided limits.
  - Item:
    - input: Use h=0 to evaluate a near-point probe
    - status: invalid_parameters
    - reason: The probe must remain away from the target; this bounded specimen requires h≥0.001.
- ast coverage: This tree applies the explicitly named bounded model to its controls. It is structural metadata; it does not parse arbitrary formulas or establish a theorem. The formal definition is broader than the illustrated family.
- output symbol bindings:
  - two-sided limit: output
  - left probe: leftValue
  - right probe: rightValue
  - left one-sided limit: leftLimit
  - right one-sided limit: rightLimit
  - probe gap: gap
  - actual center value: functionAtPoint

## Properties

- Item:
  - claim: A limit can exist when the function is undefined at the target.
  - status: author-derived for stated conditions; independent review pending
  - conditions: For q_a and x≠a.
  - derivation: q_a(x)=x+a implies |q_a(x)−2a|=|x−a|; δ=ε works.
  - example ref: math:example:limit:signal-seam
- Item:
  - claim: A function can be defined at a point but have no two-sided limit there.
  - status: author-derived for stated conditions; independent review pending
  - conditions: The jump family has side limits a−1 and a+1.
  - derivation: These limits differ by 2, independently of the actual center value a.
  - example ref: math:example:limit:switch-jump

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:derivative
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: A derivative is a particular limit of difference quotients, when it exists.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:signed-accumulation
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: A definite integral can be defined as a limit of increasingly fine signed sums.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: A limit describes nearby outputs of a declared function.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:limit:signal-seam
  - title: Approaching a missing signal value
  - role: applied_model
  - question: A normalized signal uses q(x)=(x²−a²)/(x−a), but its record at x=a is missing. With a=1 and h=0.25, what do nearby readings suggest and what is the limit?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Coordinates and readings are dimensionless normalized teaching quantities.
    - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
    - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
  - inputs:
    - mode: removable
    - a: 1
    - h: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: q(x)=(x−a)(x+a)/(x−a)=x+a, only when x≠a
      - reason: Cancel a factor while retaining the original hole.
    - Item:
      - index: 2
      - expression: q(0.75)=1.75; q(1.25)=2.25
      - reason: Probe on both sides at the same distance h.
    - Item:
      - index: 3
      - expression: lim[x→1]q(x)=2; q(1) remains undefined
      - reason: Use q(x)−2=x−1 to establish the approach, separately from the missing center.
  - result:
    - exact: limit 2; center undefined
    - limit exists: true
    - function at point: undefined
  - interpretation: As the two probes close in, their readings approach the hollow marker at height 2. A missing point does not prevent a limit.
  - independent check:
    - method: Error identity
    - expected: For x≠1, |q(x)−2|=|x−1|; choosing δ=ε works for every ε>0.
  - limits: The signal law is constructed to teach a removable discontinuity; finite samples alone would not prove this for an unknown signal.
  - preset:
    - mode: removable
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
- Item:
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
- Item:
  - id: math:example:limit:tighter-probes
  - title: Resolve a small reading tolerance
  - role: applied_model
  - question: At a=0.5, use h=0.001. How close are the two displayed readings to the limiting reading?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Coordinates and readings are dimensionless normalized teaching quantities.
    - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
    - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
  - inputs:
    - mode: removable
    - a: 0.5
    - h: 0.001
  - steps:
    - Item:
      - index: 1
      - expression: q(a−h)=2a−h=0.999; q(a+h)=2a+h=1.001
      - reason: Substitute the same tiny h into both sides.
    - Item:
      - index: 2
      - expression: L=2a=1; |q(a±h)−L|=0.001
      - reason: Track each output’s error, not just the number of displayed digits.
    - Item:
      - index: 3
      - expression: right−left=2h=0.002
      - reason: The finite probe gap shrinks with h.
  - result:
    - exact: limit 1; each probe is 0.001 from it
  - interpretation: The UI stops at a finite probe distance; the exact limit is justified by the rule beyond the slider’s resolution.
  - independent check:
    - method: General tolerance argument
    - expected: Because |q(x)−1|=|x−0.5|, δ=ε ensures the output error is below ε whenever 0<|x−0.5|<δ.
  - limits: At h=0.001 the error equals 0.001, not less than it. A strict ε=0.001 band requires h<0.001, beyond this UI’s smallest probe.
  - preset:
    - mode: removable
    - a: 0.5
    - h: 0.001
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Coordinates and readings are dimensionless normalized teaching quantities.
    - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
    - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
- Item:
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
- Item:
  - id: math:example:limit:persistent-jump
  - title: Zooming cannot erase a jump
  - role: applied_model
  - question: Set the switch threshold to a=−1 and reduce h to 0.001. Does the smaller distance restore a two-sided limit?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Coordinates and readings are dimensionless normalized teaching quantities.
    - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
    - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.
  - inputs:
    - mode: jump
    - a: -1
    - h: 0.001
  - steps:
    - Item:
      - index: 1
      - expression: left=−1−1=−2; right=−1+1=0
      - reason: Compute the side heights, including signs.
    - Item:
      - index: 2
      - expression: gap=0−(−2)=2 for every h>0
      - reason: A closer input does not make these output heights closer.
    - Item:
      - index: 3
      - expression: f(−1)=−1, but lim[x→−1]f(x) does not exist
      - reason: Keep the actual center reading separate from both side limits.
  - result:
    - exact: no two-sided limit; gap 2
  - interpretation: Zooming reveals persistent separation. More digits or a slower animation cannot turn this discontinuity into convergence.
  - independent check:
    - method: Second probe distance
    - expected: At h=0.5 the same sides are −2 and 0; the analytic branch rules keep the gap at 2.
  - limits: Two finite tests are illustrative; the branch definition, not the test count, establishes the unequal one-sided limits.
  - preset:
    - mode: jump
    - a: -1
    - h: 0.001
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Coordinates and readings are dimensionless normalized teaching quantities.
    - The rule is stipulated on both sides of a, so algebra establishes the side behavior; samples merely illustrate it.
    - h is a positive probe distance, not the point a itself and not a proof of all nearby behavior.

## Interactive

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

## Prompts

- Item:
  - prompt: Does the removable rule’s hollow dot mean there is no limit?
  - answer: No. The neighbors approach 2a while the original function remains undefined exactly at a.
- Item:
  - prompt: If the jump’s center value sits halfway between its sides, is it the limit?
  - answer: No. The sides approach different heights; the center value cannot resolve their disagreement.

## Representations

- Item:
  - kind: two-sided approach
  - description: Separate colored probes show x=a−h and x=a+h and follow their corresponding readings.
- Item:
  - kind: graph
  - description: Hollow markers encode excluded side endpoints; a filled marker encodes an actual center value only in jump mode.
- Item:
  - kind: tolerance
  - description: For the removable rule the output error equals the input distance; shrinking h narrows both errors together.

## Applications

- Item:
  - context: Missing signal record
  - mapping: The signal law is available near a missing record; its limit describes the nearby trend without filling in the record.
  - limitations: The law is constructed and known; unknown measured data would require separate analysis.
  - evidence kind: constructed_example
  - example ref: math:example:limit:signal-seam
- Item:
  - context: Threshold switch
  - mapping: Two stipulated branches give different readings as the input approaches a threshold.
  - limitations: An idealized jump omits device hysteresis, noise and finite transition width.
  - evidence kind: constructed_example
  - example ref: math:example:limit:switch-jump

## Source Refs

- source:openstax:function-limits
- source:openstax:precise-limit

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original worked scenarios, explicit domains and failures, bounded model fixtures and shared modular playground bindings.

## Referenced source registry

- Source ID: source:openstax:function-limits. [Calculus Volume 1, 2.2 The Limit of a Function](https://openstax.org/books/calculus-volume-1/pages/2-2-the-limit-of-a-function). Locator: Intuitive Definition of a Limit; one-sided and two-sided limits; function value versus nearby behavior. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:precise-limit. [Calculus Volume 1, 2.5 The Precise Definition of a Limit](https://openstax.org/books/calculus-volume-1/pages/2-5-the-precise-definition-of-a-limit). Locator: Quantifying Closeness; epsilon–delta definition; punctured input neighborhood. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
