---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:conditional-probability", "id": "math:concept:conditional-probability", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:conditional-probability", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "72617e903633811a9b92d487876aa96c1d98ce1228e88e3054dcc4fbb7efcf9e"}, "purpose": "Follow restricted outcomes into a conditional probability with a new denominator.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "72617e903633811a9b92d487876aa96c1d98ce1228e88e3054dcc4fbb7efcf9e", "status": "draft", "title": "Conditional probability", "topics": ["mathematics", "probability", "sets", "modeling", "probability given an event", "conditioning", "restricted probability"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Conditional probability

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:conditional-probability; revision 0.1.0-draft. Setting: Conditional probability on a continuous uniform location model over one 100 cm strip. Expression: $P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{\min(a,b)}{b},\quad P(A)=\frac{a}{100},\quad P(B)=\frac{b}{100},\quad b>0.$. Conditions required for a defined value (a case may test their violation): A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm. The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm. The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events. Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded. Scope: Generally, P(A|B)=P(A∩B)/P(B) for P(B)>0. The first frame shares a physical length scale; the second explicitly normalizes B to unit probability. This does not alter P(A).

## Schema Version

0.1.0

## Id

math:concept:conditional-probability

## Slug

conditional-probability

## Type

concept

## Title

Conditional probability

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Bounded models, workshop stories and worked derivations are originally authored constructed examples. No production measurements or historical priority claims are presented.

## Aliases

- probability given an event
- conditioning
- restricted probability

## Branches

- probability
- sets
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow restricted outcomes into a conditional probability with a new denominator.

## Meaning

Conditioning asks about one event after attention is restricted to another event of positive probability. Their intersection supplies the numerator; the conditioning event supplies the denominator. A uniform-location strip makes the lengths and the renormalization visible.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:ratio-scale
  - math:concept:probability
- depth:
  - math:concept:bayes-theorem

## Definition

- setting: Conditional probability on a continuous uniform location model over one 100 cm strip.
- formal latex: P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{\min(a,b)}{b},\quad P(A)=\frac{a}{100},\quad P(B)=\frac{b}{100},\quad b>0.
- signature:
  - a: Length of the inked prefix in centimetres.
  - b: Positive inspection-window length in centimetres.
  - A: Inked-location event.
  - B: Known inspection-window event.
  - P(A): Original ink probability.
  - P(B): Positive window probability.
  - P(A∩B): Joint event probability.
  - P(A|B): Conditional ink probability given the window.
  - ℓ(A∩B): Overlap length in centimetres.
- conditions:
  - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
  - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
  - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
  - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- domain notes: Generally, P(A|B)=P(A∩B)/P(B) for P(B)>0. The first frame shares a physical length scale; the second explicitly normalizes B to unit probability. This does not alter P(A).
- proof status: Definition-level sources; restricted-family properties are author-derived. Independent review pending.
- source refs:
  - source:openstax:conditional-probability
  - source:openstax:uniform-distribution

## Grammar

- pronunciation: Conditional probability
- expression latex: P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{\min(a,b)}{b},\quad P(A)=\frac{a}{100},\quad P(B)=\frac{b}{100},\quad b>0.
- formation rule: A and B are prefixes of the same 100 cm strip. P(A)=a/100; P(B)=b/100; P(A∩B)=min(a,b)/100. For b>0, P(A|B)=min(a,b)/b.
- precedence: Find the overlap before dividing by the positive window length.
- symbols:
  - Item:
    - token: a
    - role: Inked-prefix length
    - type: Nonnegative real length in centimetres
  - Item:
    - token: b
    - role: Inspection-prefix length
    - type: Positive real length in centimetres
  - Item:
    - token: A
    - role: Inked-location event
    - type: Event
  - Item:
    - token: B
    - role: Known window event
    - type: Event
  - Item:
    - token: P(A)
    - role: Unconditional ink probability
    - type: Probability
  - Item:
    - token: P(B)
    - role: Conditioning-event probability
    - type: Positive probability
  - Item:
    - token: P(A∩B)
    - role: Joint event probability
    - type: Probability
  - Item:
    - token: P(A|B)
    - role: Conditional ink probability
    - type: Probability
  - Item:
    - token: ℓ(A∩B)
    - role: Overlap length
    - type: Length in centimetres
- ast:
  - id: ast:conditional-probability:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:eventEnd
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: eventEnd
      - scope ref: scope:conditional-probability:expression
    - Item:
      - id: n:windowEnd
      - kind: variable
      - type: Finite model input within its declared domain
      - symbol: windowEnd
      - scope ref: scope:conditional-probability:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried scalar-input rule for the stated bounded family
      - ref: A and B are prefixes of the same 100 cm strip. P(A)=a/100; P(B)=b/100; P(A∩B)=min(a,b)/100. For b>0, P(A|B)=min(a,b)/b.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:eventEnd
    - Item:
      - id: n:output
      - kind: apply
      - type: Primary scalar result
      - function: n:bound-0
      - argument: n:windowEnd
  - scopes:
    - Item:
      - id: scope:conditional-probability:expression
      - kind: modelExpression
      - free variables:
        - eventEnd
        - windowEnd
      - domain condition: A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
- parse errors:
  - Item:
    - input: Condition on a zero-length window
    - status: domain error
    - reason: The elementary ratio requires P(B)>0.
  - Item:
    - input: Use joint probability as conditional probability
    - status: normalization error
    - reason: The joint probability uses the full strip; conditioning uses only B.
  - Item:
    - input: Swap A and B without changing the denominator
    - status: conditioning error
    - reason: The two conditioning directions generally have different denominators.
- ast coverage: A typed outline of the fixed executable rule. Named functions refer to the stated construction, not a general symbolic solver.
- output symbol bindings:
  - a: eventEnd
  - b: windowEnd
  - A: event:A
  - B: event:B
  - P(A): eventProbability
  - P(B): givenProbability
  - P(A∩B): intersectionProbability
  - P(A|B): conditionalProbability
  - ℓ(A∩B): overlapLength

## Properties

- Item:
  - claim: A full-strip window leaves P(A) unchanged.
  - conditions: Use b=100 cm.
  - derivation: B is the whole outcome space, so P(A∩B)=P(A) and P(B)=1.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:conditional-probability:whole-strip
- Item:
  - claim: A positive window contained in the ink gives conditional probability one.
  - conditions: Use 0<b≤a≤100 cm.
  - derivation: B⊆A implies A∩B=B, so the positive numerator and denominator are equal.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:conditional-probability:contained-window

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical development has not been researched for this draft. These workshop scenarios are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Conditioning begins with an intersection of two events.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: The conditional result is a probability on restricted outcomes.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:bayes-theorem
  - type: supports
  - conditions: Use each connected card under its own stated conditions.
  - reason: Bayes’ theorem relates opposite conditioning directions through their common joint probability.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:conditional-probability:inspection-window
  - title: Read an inspection-window report
  - role: applied_model
  - question: What is the chance of ink after a report restricts the location to the first 40 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
  - inputs:
    - eventEnd: 24
    - windowEnd: 40
  - steps:
    - Item:
      - index: 1
      - expression: P(A)=24/100=0.24; P(B)=40/100=0.4
      - reason: Both event probabilities use the full strip.
    - Item:
      - index: 2
      - expression: P(A∩B)=24/100=0.24
      - reason: All 24 cm of ink lie inside the window.
    - Item:
      - index: 3
      - expression: P(A|B)=0.24/0.4=24/40=3/5
      - reason: Normalize the overlap within the positive window.
  - result:
    - exact: P(A|B)=3/5=0.6
  - interpretation: The reference set changes while the original inked length stays fixed.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: Directly compare the 24 cm overlap with the 40 cm window, without dividing rounded probabilities.
  - limits: Uniform location and shared-left-endpoint intervals are stipulated.
  - preset:
    - eventEnd: 24
    - windowEnd: 40
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- Item:
  - id: math:example:conditional-probability:whole-strip
  - title: Keep the entire strip as the window
  - role: applied_model
  - question: Does a report naming the full strip change the original ink probability?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
  - inputs:
    - eventEnd: 24
    - windowEnd: 100
  - steps:
    - Item:
      - index: 1
      - expression: P(B)=100/100=1
      - reason: The window covers every possible location.
    - Item:
      - index: 2
      - expression: P(A∩B)=24/100=0.24
      - reason: Intersecting with the full strip leaves A unchanged.
    - Item:
      - index: 3
      - expression: P(A|B)=0.24/1=0.24
      - reason: Conditioning on the whole outcome space preserves this probability.
  - result:
    - exact: P(A|B)=6/25=0.24
  - interpretation: The whole-strip report imposes no additional restriction.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: The inked fraction of the full 100 cm window is 24/100.
  - limits: This concerns the full-window event, not every possible report.
  - preset:
    - eventEnd: 24
    - windowEnd: 100
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- Item:
  - id: math:example:conditional-probability:contained-window
  - title: Put the window entirely inside the ink
  - role: applied_model
  - question: Can a location in the first 12 cm miss an inked prefix of 24 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
  - inputs:
    - eventEnd: 24
    - windowEnd: 12
  - steps:
    - Item:
      - index: 1
      - expression: min(24,12)=12 cm
      - reason: The shorter prefix is entirely inked.
    - Item:
      - index: 2
      - expression: P(A∩B)=12/100=P(B)
      - reason: The overlap and conditioning window coincide.
    - Item:
      - index: 3
      - expression: P(A|B)=0.12/0.12=1
      - reason: Every location remaining after the report is inked.
  - result:
    - exact: P(A|B)=1
  - interpretation: The original ink probability remains 0.24 even though the conditioned probability is one.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: Check B⊆A; with positive P(B), the intersection is B.
  - limits: Containment does not establish independence.
  - preset:
    - eventEnd: 24
    - windowEnd: 12
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- Item:
  - id: math:example:conditional-probability:empty-ink
  - title: Inspect a strip with no ink
  - role: applied_model
  - question: What happens when no part of the strip is inked but the inspection window is positive?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
  - inputs:
    - eventEnd: 0
    - windowEnd: 40
  - steps:
    - Item:
      - index: 1
      - expression: min(0,40)=0 cm
      - reason: The inked event and overlap are empty.
    - Item:
      - index: 2
      - expression: P(A∩B)=0; P(B)=0.4
      - reason: The conditioning event remains possible.
    - Item:
      - index: 3
      - expression: P(A|B)=0/0.4=0
      - reason: A zero numerator is allowed with a positive denominator.
  - result:
    - exact: P(A|B)=0
  - interpretation: No allowed window location is inked.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: There are zero centimetres of overlap in a 40 cm window.
  - limits: Zero ink length differs from a zero conditioning-window length.
  - preset:
    - eventEnd: 0
    - windowEnd: 40
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- Item:
  - id: math:example:conditional-probability:longer-ink
  - title: Read a different proof layout
  - role: applied_model
  - question: With 60 cm inked and an 80 cm window, what fraction of the window is inked?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
  - inputs:
    - eventEnd: 60
    - windowEnd: 80
  - steps:
    - Item:
      - index: 1
      - expression: ℓ(A∩B)=min(60,80)=60 cm
      - reason: Find the common prefix length.
    - Item:
      - index: 2
      - expression: P(A∩B)=0.6; P(B)=0.8
      - reason: Express both as full-strip probabilities.
    - Item:
      - index: 3
      - expression: P(A|B)=0.6/0.8=3/4
      - reason: Use the inspection event as the new denominator.
  - result:
    - exact: P(A|B)=3/4=0.75
  - interpretation: Three quarters of the remaining possible locations are inked.
  - independent check:
    - method: Separate exact arithmetic check
    - expected: Cancel the shared length scale in (60/100)/(80/100), giving 60/80.
  - limits: This fraction is not an estimate of a printer defect rate.
  - preset:
    - eventEnd: 60
    - windowEnd: 80
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
    - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
    - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
    - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.

## Interactive

- component id: component:conditional-probability
- renderer id: conditional-probability-visual-model
- renderer version: 1
- model id: conditional-probability-visual-model
- model revision: 1
- expression id: ast:conditional-probability:expression
- interaction status: implemented
- description: The full proof strip shows both prefix intervals on one centimetre scale. A separately labeled normalized window shows the conditional overlap fraction.
- controls:
  - Item:
    - id: eventEnd
    - type: number
    - default: 24
    - min: 0
    - max: 100
    - step: 0.01
  - Item:
    - id: windowEnd
    - type: number
    - default: 40
    - min: 0
    - max: 100
    - step: 0.01
    - excluded:
      - 0
- expected cases:
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 40
    - output: 0.6
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 100
    - output: 0.24
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 12
    - output: 1.0
  - Item:
    - input:
      - eventEnd: 0
      - windowEnd: 40
    - output: 0.0
  - Item:
    - input:
      - eventEnd: 100
      - windowEnd: 40
    - output: 1.0
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 24
    - output: 1.0
  - Item:
    - input:
      - eventEnd: 60
      - windowEnd: 80
    - output: 0.75
  - Item:
    - input:
      - eventEnd: 1
      - windowEnd: 100
    - output: 0.01
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 0
    - status: invalid_parameters
  - Item:
    - input:
      - eventEnd: -1
      - windowEnd: 40
    - status: invalid_parameters
  - Item:
    - input:
      - eventEnd: 24
      - windowEnd: 101
    - status: invalid_parameters
  - Item:
    - input:
      - eventEnd: 101
      - windowEnd: 40
    - status: invalid_parameters
- compute: A and B are prefixes of the same 100 cm strip. P(A)=a/100; P(B)=b/100; P(A∩B)=min(a,b)/100. For b>0, P(A|B)=min(a,b)/b.
- numeric tolerance: 1e-10
- invariants:
  - A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm.
  - The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm.
  - The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events.
  - Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded.
- limits:
  - Constructed uniform-location model with nested prefixes; no measured quality-control or defect-rate inference.
  - The normalized conditional frame has a different extent from the physical strip and is labeled accordingly.
  - A zero-probability conditioning event is rejected rather than silently assigned a probability.
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

## Prompts

- Item:
  - prompt: Did the ink itself change when the window narrowed?
  - answer: No. The inked length and its original probability remain fixed; the denominator changes.
- Item:
  - prompt: Can the inspection window have length zero?
  - answer: Not in the elementary ratio definition: that would make P(B)=0.

## Representations

- Item:
  - kind: geometry
  - description: The full proof strip shows both prefix intervals on one centimetre scale. A separately labeled normalized window shows the conditional overlap fraction.
- Item:
  - kind: graph
  - description: P(A|B) is plotted against positive window length b, using a fixed probability axis from zero to one. There is no defined point at b=0.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated formula into the displayed primary result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Follow restricted outcomes into a conditional probability with a new denominator.
  - limitations: Constructed uniform-location model with nested prefixes; no measured quality-control or defect-rate inference.
  - evidence kind: constructed_example
  - example ref: math:example:conditional-probability:inspection-window
- Item:
  - context: Full-strip report
  - mapping: A window covering the entire strip leaves the original ink probability unchanged.
  - limitations: Constructed uniform-location model with nested prefixes; no measured quality-control or defect-rate inference.
  - evidence kind: constructed_example
  - example ref: math:example:conditional-probability:whole-strip

## Source Refs

- source:openstax:conditional-probability
- source:openstax:uniform-distribution

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded teaching model does not replace the broader definition or a general theorem.

## Change Log

- 0.1.0-draft: five original worked examples, twelve independently calculated fixtures, a compact connected story and shared Geometry/Graph views.

## Referenced source registry

- Source ID: source:openstax:conditional-probability. [Introductory Statistics 2e, 3.1 Terminology](https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology). Locator: Events, intersections and conditional probability with positive conditioning-event probability. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:uniform-distribution. [Introductory Statistics 2e, 5.2 The Uniform Distribution](https://openstax.org/books/introductory-statistics-2e/pages/5-2-the-uniform-distribution). Locator: Continuous uniform distributions and interval probabilities proportional to length. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
