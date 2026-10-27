---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:conditional-probability:whole-strip", "id": "math:example:conditional-probability:whole-strip", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:conditional-probability", "example_id": "math:example:conditional-probability:whole-strip", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "72617e903633811a9b92d487876aa96c1d98ce1228e88e3054dcc4fbb7efcf9e"}, "purpose": "Follow restricted outcomes into a conditional probability with a new denominator.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "72617e903633811a9b92d487876aa96c1d98ce1228e88e3054dcc4fbb7efcf9e", "status": "draft", "title": "Keep the entire strip as the window", "topics": ["mathematics", "probability", "sets", "modeling", "probability given an event", "conditioning", "restricted probability"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Keep the entire strip as the window

Parent card: math:concept:conditional-probability; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:conditional-probability; revision 0.1.0-draft. Setting: Conditional probability on a continuous uniform location model over one 100 cm strip. Expression: $P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{\min(a,b)}{b},\quad P(A)=\frac{a}{100},\quad P(B)=\frac{b}{100},\quad b>0.$. Conditions required for a defined value (a case may test their violation): A location is chosen uniformly along a 100 cm strip. Probabilities of intervals equal their lengths divided by 100 cm. The inked event A is the first a cm and inspection event B is the first b cm: 0≤a≤100 cm and 0<b≤100 cm. The two intervals share their left endpoint, so their overlap length is min(a,b). This specimen does not realize every relationship between two events. Conditioning divides the overlap probability by positive P(B); a zero-length conditioning window is excluded. Scope: Generally, P(A|B)=P(A∩B)/P(B) for P(B)>0. The first frame shares a physical length scale; the second explicitly normalizes B to unit probability. This does not alter P(A).

Case unit math:example:conditional-probability:whole-strip. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"eventEnd": 24, "windowEnd": 100}. Result: {"exact": "P(A|B)=6/25=0.24"}. Limits: This concerns the full-window event, not every possible report.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:conditional-probability. [Introductory Statistics 2e, 3.1 Terminology](https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology). Locator: Events, intersections and conditional probability with positive conditioning-event probability. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:uniform-distribution. [Introductory Statistics 2e, 5.2 The Uniform Distribution](https://openstax.org/books/introductory-statistics-2e/pages/5-2-the-uniform-distribution). Locator: Continuous uniform distributions and interval probabilities proportional to length. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
