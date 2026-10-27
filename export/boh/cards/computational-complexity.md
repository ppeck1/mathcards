---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:computational-complexity", "id": "math:concept:computational-complexity", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:computational-complexity", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "1586421533748ce86c77e5bdb00145adbc5f65d01ab7a14782e45013534f0512"}, "purpose": "Count a full scan and separate input size, cost per operation and modeled runtime.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "1586421533748ce86c77e5bdb00145adbc5f65d01ab7a14782e45013534f0512", "status": "draft", "title": "Computational complexity: a linear scan", "topics": ["mathematics", "computation", "discrete-mathematics", "modeling", "linear-time scan", "algorithm cost model", "operation count"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Computational complexity: a linear scan

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:computational-complexity; revision 0.1.0-draft. Setting: Algorithm analysis with one declared basic operation: inspect each item once in a full scan. The display contains a bounded number of items, while the stated scan rule defines the general positive-integer family. Expression: $w(n)=n,\quad T(n)=c n,\quad T(2n)=2c n,\quad w(n)\in O(n).$. Conditions required for a defined value (a case may test their violation): The specified full-scan procedure visits every one of n items exactly once, for each positive integer input size n. One item inspection is the chosen basic operation. The executable itemCount is an integer from 1 to 32. The conceptual operation-count family w(n)=n is defined for every positive integer n; the finite drawing is only a bounded demonstration. A fixed stipulated cost c in [0,10] milliseconds per item gives model time T(n)=c*n. Setup, loop-control, memory, parallelism and changing per-item costs are outside this cost model. For the doubled input the same fixed c gives 2n inspections and T(2n)=c*(2n)=2*T(n). A full scan does not stop early on a matching item. The operation count w(n)=n has tight linear growth Θ(n), hence also the upper-bound class O(n). These are asymptotic classes, not numeric runtimes. For each fixed c>0, the model time c*n also has tight linear growth. When c=0 the idealized model time is zero while the number of inspections is still n; zero time does not have a positive linear lower bound. A formula derived from the specified procedure supports the growth statement. Observing a finite graph or a measured doubling ratio alone does not prove an asymptotic claim. Milliseconds here are stipulated costs, not measured benchmarks or performance promises for a real device. Under the stated fixed positive cost per inspection, this full scan is a linear-time algorithm; a zero modeled cost does not change its inspection count. Scope: The broader field includes many time and space models, worst-case and average-case questions, and classes of computational problems. This card analyzes only a full scan under a constant per-item cost assumption. It does not run a benchmark, analyze arbitrary code, compare machines, estimate hidden overhead, or infer O(n) from a short plot. The synthetic c=0 boundary remains valid arithmetic but is not a physical timing claim.

## Schema Version

0.1.0

## Id

math:concept:computational-complexity

## Slug

computational-complexity

## Type

concept

## Title

Computational complexity: a linear scan

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. Stories and worked quantities are originally authored constructed examples, not measurements or historical events. Historical priority and notation claims require separate evidence before publication.

## Aliases

- linear-time scan
- algorithm cost model
- operation count

## Branches

- computation
- discrete-mathematics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Count a full scan and separate input size, cost per operation and modeled runtime.

## Meaning

Computational complexity studies the resources required by algorithms as input size grows. This introductory specimen derives a linear operation count from a specified full scan, then assigns a constant cost per inspection. It keeps asymptotic growth, exact counts and modeled elapsed time separate.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:linear-model
  - math:concept:set
- depth:
  - math:concept:algorithm

## Definition

- setting: Algorithm analysis with one declared basic operation: inspect each item once in a full scan. The display contains a bounded number of items, while the stated scan rule defines the general positive-integer family.
- formal latex: w(n)=n,\quad T(n)=c n,\quad T(2n)=2c n,\quad w(n)\in O(n).
- signature:
  - n,itemCount: Positive integer number of items in [1,32].
  - c,costPerItem: Fixed stipulated per-item cost in [0,10] milliseconds.
  - w(n),operationCount: Exactly n inspections for the specified full scan.
  - T(n),totalTime: Primary modeled time c*n in milliseconds.
  - 2n,doubledCount: Twice the item count, retained as a separate comparison.
  - T(2n),doubledTime: Modeled time for twice the input at the same per-item cost.
  - O(n): An asymptotic upper-bound class, not a measured number.
- conditions:
  - The specified full-scan procedure visits every one of n items exactly once, for each positive integer input size n. One item inspection is the chosen basic operation.
  - The executable itemCount is an integer from 1 to 32. The conceptual operation-count family w(n)=n is defined for every positive integer n; the finite drawing is only a bounded demonstration.
  - A fixed stipulated cost c in [0,10] milliseconds per item gives model time T(n)=c*n. Setup, loop-control, memory, parallelism and changing per-item costs are outside this cost model.
  - For the doubled input the same fixed c gives 2n inspections and T(2n)=c*(2n)=2*T(n). A full scan does not stop early on a matching item.
  - The operation count w(n)=n has tight linear growth Θ(n), hence also the upper-bound class O(n). These are asymptotic classes, not numeric runtimes.
  - For each fixed c>0, the model time c*n also has tight linear growth. When c=0 the idealized model time is zero while the number of inspections is still n; zero time does not have a positive linear lower bound.
  - A formula derived from the specified procedure supports the growth statement. Observing a finite graph or a measured doubling ratio alone does not prove an asymptotic claim.
  - Milliseconds here are stipulated costs, not measured benchmarks or performance promises for a real device.
  - Under the stated fixed positive cost per inspection, this full scan is a linear-time algorithm; a zero modeled cost does not change its inspection count.
- domain notes: The broader field includes many time and space models, worst-case and average-case questions, and classes of computational problems. This card analyzes only a full scan under a constant per-item cost assumption. It does not run a benchmark, analyze arbitrary code, compare machines, estimate hidden overhead, or infer O(n) from a short plot. The synthetic c=0 boundary remains valid arithmetic but is not a physical timing claim.
- proof status: Definition-level references; restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:uw:algorithm-analysis

## Grammar

- pronunciation: Computational complexity: a linear scan
- expression latex: w(n)=n,\quad T(n)=c n,\quad T(2n)=2c n,\quad w(n)\in O(n).
- formation rule: operationCount=itemCount; doubledCount=2*itemCount; output=totalTime=costPerItem*operationCount; doubledTime=costPerItem*doubledCount. For this full-scan family, w(n)∈Θ(n); T(n)∈Θ(n) when c>0.
- precedence: Count the explicitly chosen item inspections first, then multiply by their fixed per-item time. Doubling n is distinct from doubling c, although either doubles this particular product.
- symbols:
  - Item:
    - token: n
    - role: Number of items inspected in a full scan, stored as itemCount
    - type: Positive integer input size
  - Item:
    - token: c
    - role: Stipulated fixed cost per item, stored as costPerItem
    - type: Nonnegative milliseconds per inspection
  - Item:
    - token: w(n)
    - role: Number of chosen basic inspections
    - type: Positive integer operation count
  - Item:
    - token: T(n)
    - role: Primary modeled total scan time
    - type: Nonnegative time in milliseconds
  - Item:
    - token: 2n
    - role: Doubled input size
    - type: Positive integer count
  - Item:
    - token: T(2n)
    - role: Modeled time at the doubled input and same cost
    - type: Nonnegative time in milliseconds
  - Item:
    - token: O(n)
    - role: Linear asymptotic upper-bound class for the specified scan
    - type: Complexity class, not a scalar runtime
- ast:
  - id: ast:computational-complexity:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:itemCount
      - kind: variable
      - type: Positive integer input size
      - symbol: itemCount
      - scope ref: scope:computational-complexity:expression
    - Item:
      - id: n:costPerItem
      - kind: variable
      - type: Nonnegative time per basic operation in milliseconds
      - symbol: costPerItem
      - scope ref: scope:computational-complexity:expression
    - Item:
      - id: n:output
      - kind: multiply
      - type: Nonnegative modeled total time in milliseconds
      - arguments:
        - n:costPerItem
        - n:itemCount
  - scopes:
    - Item:
      - id: scope:computational-complexity:expression
      - kind: modelExpression
      - free variables:
        - itemCount
        - costPerItem
      - domain condition: The specified full-scan procedure visits every one of n items exactly once, for each positive integer input size n. One item inspection is the chosen basic operation.
- parse errors:
  - Item:
    - input: Use 2.5 items in the full-scan count
    - status: domain error
    - reason: The input size counts distinct items and is a positive integer.
  - Item:
    - input: Call O(n) the measured number of milliseconds
    - status: type error
    - reason: An asymptotic upper-bound class differs from a scalar time under a chosen cost model.
  - Item:
    - input: Prove O(n) from a few points on the display
    - status: evidence error
    - reason: The class concerns arbitrarily large inputs; here the justification comes from the specified scan rule w(n)=n for the full family.
- ast coverage: A narrow typed expression outline for the declared executable specimen. Function references name fixed finite selection/counting procedures; no general set parser, statistical inference engine or program analyzer is claimed.
- output symbol bindings:
  - n: itemCount
  - c: costPerItem
  - w(n): operationCount
  - T(n): totalTime
  - 2n: doubledCount
  - T(2n): doubledTime

## Properties

- Item:
  - claim: The specified full scan performs exactly n selected basic inspections.
  - conditions: Apply one inspection to every input item, with no early stopping.
  - derivation: Associate each distinct item with one and only one inspection. This gives w(n)=n for every positive integer n in the family.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:computational-complexity:inspection-batch
- Item:
  - claim: Doubling input size doubles modeled time at fixed c.
  - conditions: Keep the per-item cost constant and use the same full scan.
  - derivation: T(2n)=c*(2n)=2*(c*n)=2*T(n), including the synthetic c=0 case.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:computational-complexity:double-input
- Item:
  - claim: Changing c does not change the operation-count growth.
  - conditions: Keep the inspection procedure fixed; use a finite nonnegative constant c for each run.
  - derivation: w(n)=n remains a tight linear count. For c>0, T(n)=cn is also Θ(n); at c=0 only the modeled time is zero.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:computational-complexity:faster-inspection

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Treat input size as a discrete count and c as a fixed time per chosen operation.
  - reason: A fixed cost per item produces a proportional total with zero initial overhead.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:set
  - type: supports
  - conditions: This is a declared basic-operation count, not a claim that every set implementation has the same runtime.
  - reason: A simple candidate filter can use one membership inspection per item.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:population-sample
  - type: supports
  - conditions: The count concerns a selected visit or addition; division and other implementation work are separate.
  - reason: Computing a full-population sum can visit each value once.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:computational-complexity:inspection-batch
  - title: Model a full batch of label inspections
  - role: applied_model
  - question: How long does a full scan of twelve labels take at 2 ms per inspection?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
  - inputs:
    - itemCount: 12
    - costPerItem: 2
  - steps:
    - Item:
      - index: 1
      - expression: w(n)=12; c=2 ms per inspection
      - reason: Count one declared inspection per input item.
    - Item:
      - index: 2
      - expression: T(n)=2×12=24 ms
      - reason: Multiply the count by the stipulated fixed cost, preserving units.
    - Item:
      - index: 3
      - expression: T(2n)=2×24=48 ms
      - reason: Recompute the doubled-input comparison with the same per-item cost.
  - result:
    - exact: T(n)=2×12=24 ms; T(2n)=2×24=48 ms
  - interpretation: Twelve selected basic inspections cost 24 ms under the stipulated model. The doubled batch costs twice as much at the same cost per item.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Add c milliseconds once for each of the n inspections and compare that repeated sum with c*n. Repeat for 2n inspections without changing c.
  - limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.
  - preset:
    - itemCount: 12
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
- Item:
  - id: math:example:computational-complexity:faster-inspection
  - title: Change the per-label cost without changing the scan
  - role: applied_model
  - question: What changes if the same twelve inspections cost 1 ms each?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
  - inputs:
    - itemCount: 12
    - costPerItem: 1
  - steps:
    - Item:
      - index: 1
      - expression: w(n)=12; c=1 ms per inspection
      - reason: Count one declared inspection per input item.
    - Item:
      - index: 2
      - expression: T(n)=1×12=12 ms
      - reason: Multiply the count by the stipulated fixed cost, preserving units.
    - Item:
      - index: 3
      - expression: T(2n)=1×24=24 ms
      - reason: Recompute the doubled-input comparison with the same per-item cost.
  - result:
    - exact: T(n)=1×12=12 ms; T(2n)=1×24=24 ms
  - interpretation: Changing the constant cost changes modeled time, while the algorithm still performs twelve inspections and retains its linear operation-count family.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Add c milliseconds once for each of the n inspections and compare that repeated sum with c*n. Repeat for 2n inspections without changing c.
  - limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.
  - preset:
    - itemCount: 12
    - costPerItem: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
- Item:
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
- Item:
  - id: math:example:computational-complexity:slower-inspection
  - title: Double cost instead of input size
  - role: applied_model
  - question: What happens to twelve labels if each inspection takes 4 ms in the model?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
  - inputs:
    - itemCount: 12
    - costPerItem: 4
  - steps:
    - Item:
      - index: 1
      - expression: w(n)=12; c=4 ms per inspection
      - reason: Count one declared inspection per input item.
    - Item:
      - index: 2
      - expression: T(n)=4×12=48 ms
      - reason: Multiply the count by the stipulated fixed cost, preserving units.
    - Item:
      - index: 3
      - expression: T(2n)=4×24=96 ms
      - reason: Recompute the doubled-input comparison with the same per-item cost.
  - result:
    - exact: T(n)=4×12=48 ms; T(2n)=4×24=96 ms
  - interpretation: The 48 ms product matches the larger-input example for a different reason: the count stays twelve while the assigned per-item cost doubles.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Add c milliseconds once for each of the n inspections and compare that repeated sum with c*n. Repeat for 2n inspections without changing c.
  - limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.
  - preset:
    - itemCount: 12
    - costPerItem: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
- Item:
  - id: math:example:computational-complexity:larger-model
  - title: Inspect a larger batch at the display limit
  - role: applied_model
  - question: What time does the model assign to thirty-two inspections at 10 ms each?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.
  - inputs:
    - itemCount: 32
    - costPerItem: 10
  - steps:
    - Item:
      - index: 1
      - expression: w(n)=32; c=10 ms per inspection
      - reason: Count one declared inspection per input item.
    - Item:
      - index: 2
      - expression: T(n)=10×32=320 ms
      - reason: Multiply the count by the stipulated fixed cost, preserving units.
    - Item:
      - index: 3
      - expression: T(2n)=10×64=640 ms
      - reason: Recompute the doubled-input comparison with the same per-item cost.
  - result:
    - exact: T(n)=10×32=320 ms; T(2n)=10×64=640 ms
  - interpretation: The derived doubled-input comparison can contain 64 conceptual inspections even though the editable base-count control stops at 32. Neither product is a real benchmark.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: Add c milliseconds once for each of the n inspections and compare that repeated sum with c*n. Repeat for 2n inspections without changing c.
  - limits: The exact product belongs to the declared constant-cost model. Actual program timing can include setup, loop control, memory effects, variable work and other operations; a finite display alone cannot establish asymptotic complexity.
  - preset:
    - itemCount: 32
    - costPerItem: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The inspected labels are original stipulated device-inspection tasks, not a timing benchmark.
    - The algorithm performs one selected basic inspection on every item and does not stop early.
    - Every chosen inspection is assigned the same fixed cost c; all other overhead is excluded.
    - The item count is a positive integer, and modeled time is expressed in milliseconds.

## Interactive

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

## Prompts

- Item:
  - prompt: Why not call a matching-item search the same full scan?
  - answer: A search may stop before visiting all items. Its best, worst and average cases can differ; this declared procedure deliberately inspects every item.
- Item:
  - prompt: Does zero assigned inspection time mean zero operations?
  - answer: No. The synthetic boundary c=0 makes T(n)=0 in the arithmetic model, while w(n)=n still counts all inspections.

## Representations

- Item:
  - kind: geometry
  - description: Numbered work tiles, distinct n and 2n inspection counts and modeled time bars connect the cost model to actual chosen basic operations.
- Item:
  - kind: graph
  - description: T(n) and T(2n) are plotted against continuous cost per item c at fixed integer n. The comparison changes the stipulated constant, not the algorithm or input count.
- Item:
  - kind: substitution
  - description: The input size, chosen operation count, per-operation time and total modeled time retain distinct quantities and units.

## Applications

- Item:
  - context: Workshop label inspection
  - mapping: A full batch visits every label once under an assigned per-inspection time.
  - limitations: Stipulated arithmetic cost model, not measured performance or a hardware recommendation.
  - evidence kind: constructed_example
  - example ref: math:example:computational-complexity:inspection-batch
- Item:
  - context: Input-size comparison
  - mapping: Doubling the batch demonstrates the exact proportional family derived from the procedure.
  - limitations: The finite plotted range illustrates the formula; it does not supply a proof from timings.
  - evidence kind: constructed_example
  - example ref: math:example:computational-complexity:double-input

## Source Refs

- source:uw:algorithm-analysis

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- This bounded teaching model does not replace the broader mathematical definition or independent proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, a connected modular story and distinct Geometry/Graph views.

## Referenced source registry

- Source ID: source:uw:algorithm-analysis. [University of Washington CSE 373, Algorithm Analysis I Study Guide](https://courses.cs.washington.edu/courses/cse373/20wi/lectures/04-algo_analysis_1/guide/). Locator: Runtime and input size, choosing a cost model, exact operation counts, linear order of growth and Big Theta; paragraphs 7–24. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
