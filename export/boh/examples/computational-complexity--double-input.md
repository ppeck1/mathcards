---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:computational-complexity:double-input", "id": "math:example:computational-complexity:double-input", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:computational-complexity", "example_id": "math:example:computational-complexity:double-input", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1586421533748ce86c77e5bdb00145adbc5f65d01ab7a14782e45013534f0512"}, "purpose": "Count a full scan and separate input size, cost per operation and modeled runtime.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1586421533748ce86c77e5bdb00145adbc5f65d01ab7a14782e45013534f0512", "status": "draft", "title": "Double the batch with the same per-item cost", "topics": ["mathematics", "computation", "discrete-mathematics", "modeling", "linear-time scan", "algorithm cost model", "operation count"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Double the batch with the same per-item cost

Parent card: math:concept:computational-complexity; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:computational-complexity; revision 0.1.0-draft. Setting: Algorithm analysis with one declared basic operation: inspect each item once in a full scan. The display contains a bounded number of items, while the stated scan rule defines the general positive-integer family. Expression: $w(n)=n,\quad T(n)=c n,\quad T(2n)=2c n,\quad w(n)\in O(n).$. Conditions required for a defined value (a case may test their violation): The specified full-scan procedure visits every one of n items exactly once, for each positive integer input size n. One item inspection is the chosen basic operation. The executable itemCount is an integer from 1 to 32. The conceptual operation-count family w(n)=n is defined for every positive integer n; the finite drawing is only a bounded demonstration. A fixed stipulated cost c in [0,10] milliseconds per item gives model time T(n)=c*n. Setup, loop-control, memory, parallelism and changing per-item costs are outside this cost model. For the doubled input the same fixed c gives 2n inspections and T(2n)=c*(2n)=2*T(n). A full scan does not stop early on a matching item. The operation count w(n)=n has tight linear growth Θ(n), hence also the upper-bound class O(n). These are asymptotic classes, not numeric runtimes. For each fixed c>0, the model time c*n also has tight linear growth. When c=0 the idealized model time is zero while the number of inspections is still n; zero time does not have a positive linear lower bound. A formula derived from the specified procedure supports the growth statement. Observing a finite graph or a measured doubling ratio alone does not prove an asymptotic claim. Milliseconds here are stipulated costs, not measured benchmarks or performance promises for a real device. Under the stated fixed positive cost per inspection, this full scan is a linear-time algorithm; a zero modeled cost does not change its inspection count. Scope: The broader field includes many time and space models, worst-case and average-case questions, and classes of computational problems. This card analyzes only a full scan under a constant per-item cost assumption. It does not run a benchmark, analyze arbitrary code, compare machines, estimate hidden overhead, or infer O(n) from a short plot. The synthetic c=0 boundary remains valid arithmetic but is not a physical timing claim.

Case unit math:example:computational-complexity:double-input. Setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured. Inputs: {"costPerItem": 2, "itemCount": 24}. Result: {"exact": "T(n)=2×24=48 ms; T(2n)=2×48=96 ms"}. Limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.

## Complete worked case

- id: math:example:computational-complexity:double-input
- title: Double the batch with the same per-item cost
- role: applied_model
- question: What model time results from twenty-four labels at 2 ms each?
- setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
- assumptions:
  - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
  - The algorithm performs one selected basic inspection on every item and does not stop early.
  - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
  - The item count is a positive integer, and modeled time is expressed in milliseconds.
- inputs:
  - itemCount: 24
  - costPerItem: 2
- steps:
  - Item:
    - index: 1
    - expression: w(n)=24; c=2 ms per inspection
    - reason: Count one declared inspection per input item.
  - Item:
    - index: 2
    - expression: T(n)=2×24=48 ms
    - reason: Multiply the count by the stipulated fixed cost, preserving units.
  - Item:
    - index: 3
    - expression: T(2n)=2×48=96 ms
    - reason: Recompute the doubled-input comparison with the same per-item cost.
- result:
  - exact: T(n)=2×24=48 ms; T(2n)=2×48=96 ms
- interpretation: The larger input doubles the count and modeled time relative to the twelve-label case. The equality follows from the specified full scan, not a measured trend.
- independent check:
  - method: Independent enumeration or arithmetic check
  - expected: Add c milliseconds once for each of the n inspections and compare that repeated sum with c*n. Repeat for 2n inspections without changing c.
- limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.
- preset:
  - itemCount: 24
  - costPerItem: 2
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
  - The algorithm performs one selected basic inspection on every item and does not stop early.
  - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
  - The item count is a positive integer, and modeled time is expressed in milliseconds.

## Written exploration recipe

- component id: component:computational-complexity
- renderer id: computational-complexity-visual-model
- renderer version: 1
- model id: computational-complexity-visual-model
- model revision: 1
- expression id: ast:computational-complexity:expression
- interaction status: implemented
- description: Numbered work tiles show one inspection for each item. Separate fixed-input and doubled-input counts and time bars connect n and c to T(n)=cn; the asymptotic class remains explanatory text rather than a numeric value.
- controls:
  - Item:
    - id: itemCount
    - type: number
    - default: 12
    - min: 1
    - max: 32
    - step: 1
  - Item:
    - id: costPerItem
    - type: number
    - default: 2
    - min: 0
    - max: 10
    - step: 0.01
- expected cases:
  - Item:
    - input:
      - itemCount: 12
      - costPerItem: 2
    - output: 24
  - Item:
    - input:
      - itemCount: 12
      - costPerItem: 0
    - output: 0
  - Item:
    - input:
      - itemCount: 1
      - costPerItem: 2
    - output: 2
  - Item:
    - input:
      - itemCount: 32
      - costPerItem: 10
    - output: 320
  - Item:
    - input:
      - itemCount: 12
      - costPerItem: 1.25
    - output: 15.0
  - Item:
    - input:
      - itemCount: 24
      - costPerItem: 2
    - output: 48
  - Item:
    - input:
      - itemCount: 32
      - costPerItem: 0.1
    - output: 3.2
  - Item:
    - input:
      - itemCount: 8
      - costPerItem: 3
    - output: 24
  - Item:
    - input:
      - itemCount: 1
      - costPerItem: 0
    - output: 0
  - Item:
    - input:
      - itemCount: 16
      - costPerItem: 0.5
    - output: 8.0
  - Item:
    - input:
      - itemCount: 1.5
      - costPerItem: 2
    - status: invalid_parameters
  - Item:
    - input:
      - itemCount: 12
      - costPerItem: -1
    - status: invalid_parameters
- compute: operationCount=itemCount; doubledCount=2*itemCount; output=totalTime=costPerItem*operationCount; doubledTime=costPerItem*doubledCount.
- numeric tolerance: 1e-10
- invariants:
  - The specified full-scan procedure visits every one of n items exactly once, for each positive integer input size n. One item inspection is the chosen basic operation.
  - The executable itemCount is an integer from 1 to 32. The conceptual operation-count family w(n)=n is defined for every positive integer n; the finite drawing is only a bounded demonstration.
  - A fixed stipulated cost c in [0,10] milliseconds per item gives model time T(n)=c*n. Setup, loop-control, memory, parallelism and changing per-item costs are outside this cost model.
  - For the doubled input the same fixed c gives 2n inspections and T(2n)=c*(2n)=2*T(n). A full scan does not stop early on a matching item.
  - The operation count w(n)=n has tight linear growth Θ(n), hence also the upper-bound class O(n). These are asymptotic classes, not numeric runtimes.
- limits:
  - Only a one-inspection-per-item full scan and a stipulated constant per-inspection cost.
  - No measured machine timing, early-stop search, nested scan or arbitrary program analysis.
  - Item count is discrete. Continuous motion varies c while recomputing exact n and 2n comparisons.
- fallback: Pause to read the labeled quantities. The model-data table, exact worked steps and searchable definitions provide numeric and textual alternatives to the scene.
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

- Source ID: source:uw:algorithm-analysis. [University of Washington CSE 373, Algorithm Analysis I Study Guide](https://courses.cs.washington.edu/courses/cse373/20wi/lectures/04-algo_analysis_1/guide/). Locator: Runtime and input size, choosing a cost model, exact operation counts, linear order of growth and Big Theta; paragraphs 7–24. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
