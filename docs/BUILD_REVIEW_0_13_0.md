# Build review and updated matrices — 0.13.0

Reviewed on 2026-10-25. This release adds explicit quantity links to the shared
playground. It keeps eighteen draft teaching cards, 94 worked examples, 122
numeric fixtures, and thirty-nine installed representations. The nineteenth
module remains a separate developer example.

## What works and what still needs work

| Area | Working now | Remaining or limited |
|---|---|---|
| Modular playground | Eighteen modules supply controls, evaluation, views, inspectors, and typed quantity ports; two independent slots use the same host | The separate authoring sandbox proves extension; runtime registration is trusted local code, not an arbitrary program importer |
| Shared workspace — new | One explicit A → B or B → A connection; input or result can feed a receiving input; quantity kind, units, value, and receiving domain are checked | One connection at a time; no implicit unit conversion, cycles, or full workspace persistence |
| Invalid links and ownership | Invalid values pause propagation and retain the last receiving value; valid values resume; editing the receiving quantity disconnects it; replacing modules and leaving the workbench also disconnect | Additional user qualification of link discovery and invalid-state explanations remains useful |
| Representations | All eighteen topics have distinct Geometry and Graph views; composition, logarithms, and derivatives also have 3D space; incoming values preserve view and pin | Useful sampled-value tables and consistent nonvisual graph descriptions across every topic remain incomplete |
| Story → formula → scene | Eighteen four-stage practical stories, exact authored quantity bindings, and bounded calculation tracing | Learning effectiveness needs observation: can a learner explain the change, assumptions, and failure cases? |
| Motion and readable numbers | Shared host follower, paced text, retained nodes, keyboard handles, reduced motion; linked readings regain precision after the shapes settle | Physical-device, assistive-technology, touch, 200% zoom, and broader readability qualification remain unfinished |
| Notebook | Validated individual snapshots, preserved unavailable revisions, backup/import, raw recovery, deletion undo, and Markdown export | Selected view, pins, two-slot state, and active connection are not saved as a complete workspace |
| Mathematical content | Eighteen drafts, 94 examples, 122 fixtures, and 22 source records | All cards still need independent mathematics review; history has seventeen source gaps and one partial account |
| Offline and privacy | One embedded local HTML app; no accounts or runtime network requirement; private notebook excluded from 112 static BOH exports | Fresh-profile/physical-browser recovery qualification and live BOH ingestion/retrieval remain unverified |
| Status accuracy | Current release docs report views, ports, and links separately from review status | The original three coverage rows and canonical interaction review fields still carry stale unimplemented status; reconcile them with explicit revision handling |

## What remains in the original plan

| Plan item | Status | Next acceptance work |
|---|---|---|
| T00–T02: contracts, validation, compilation | Implemented foundation | Preserve deterministic exports and privacy boundaries; structural AST probes are not a general mathematical type checker |
| T03–T05: discovery, shared state, dossier | Implemented with targeted checks | Complete learner walkthroughs and accessible math/grammar qualification |
| T06: workbench and notebook | Implemented; explicit sharing added | Qualify the complete discovery → compare → observe → save → restore loop |
| T07–T08: logarithms and derivatives | Implemented with failure cases | Independent mathematical review and learner qualification |
| T09: first eight foundations | Incomplete | General Function, Exponentiation, and Limit remain planned; reconcile inventory identities and add signed/partitioned accumulation |
| T10–T11: BOH harness and retrieval | Static compatibility only | Disposable live ingestion, idempotent and revised imports, condition-preserving retrieval |
| T12: accessibility, offline, recovery | Partial | Real assistive technology and physical devices, fresh-profile restore, zoom/touch/readability, and the specified learning scenarios |
| T13: reviewed expansion | Breadth ahead of review | Complete the foundational/review gates before another broad batch; eighteen drafts do not satisfy twenty-four reviewed deep cards |
| T14: typed relation browsing | Partial | Existing comparisons and explicit numerical links do not replace a sourced relation map and level filters |
| T15: personal workspace | Partial | Versioned complete workspace snapshots, selected exports, and revision comparison |

## Principles to add or enforce next

| Priority | Principle | Concrete next step |
|---|---|---|
| 1 | Saved work includes its context | Add a separate versioned workspace format for slots, views, pins, and connection identities; preserve incompatible saved revisions |
| 1 | Compatibility precedes synchronization | Keep the new explicit kind/unit/domain contract; introduce conversions only through declared, visible mappings |
| 1 | Manual control and valid state remain visible | Keep one direction, ownership badges, range pauses, and explicit override/disconnect behaviour when expanding coordination |
| 1 | Availability, coverage, and review are distinct | Reconcile stale interaction metadata without silently promoting draft mathematics or changing snapshot identity |
| 2 | Every important picture has a useful alternative | Feed graph descriptions and accessible tables from the same evaluated data |
| 2 | Learning is measured by explanation | Observe whether learners can describe an invariant, a changed variable, an assumption, and a failure case |
| 2 | Visual accuracy and mathematical review are separate gates | Test encodings and domains, then obtain independent derivation/history review |
| 3 | Expansion follows coherent foundations | Fill Function, Exponentiation, Limit, and accumulation gaps before increasing draft count alone |
| Ongoing | Local privacy and reproducibility remain defaults | Workspace export stays explicit; builds never read private browser notes |

The next recommended build is complete workspace saving, paired with useful
graph data alternatives and the first focused learning/accessibility walkthrough.
Validation details and limits belong in [the release check record](VALIDATION_0_13_0.md).
