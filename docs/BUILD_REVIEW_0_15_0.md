# Build review and updated matrices — 0.15.0

Reviewed on 2026-10-26. The modular foundation is ready for a focused expansion,
and this build adds four concepts: Function, Exponentiation, Limit, and Signed
accumulation. They share the existing controls, motion, readable-value pacing,
story trace, comparison pins, quantity connections, and saved workspace format.
Existing module identities and revisions are preserved.

## What works and what needs work

| Area | Working now | Remaining or limited |
|---|---|---|
| Plug-in architecture | Twenty-two teaching modules plus a separate twenty-third-module sandbox use one host | Trusted local code and explicit registration remain required; no arbitrary expression execution |
| Function — new | Signed lengths follow input → multiply → add; Graph shows the same affine rule | General definition is explained, but the interactive family is affine only |
| Exponentiation — new | Continuous positive-base powers, zero/fractional/negative exponents, a reciprocal cue, and area-scaled geometry | Nonpositive bases deliberately show domain failure; complex and general negative-base powers are outside this family |
| Limit — new | Two-sided probes, excluded hollow points, defined center points, and a jump with no two-sided limit | Two explicit analytic families; finite probes do not prove a limit for an unknown function |
| Signed accumulation — new | Forward/backward areas, net displacement versus distance, exact integral and integer left/right/midpoint sums | Linear velocity only; midpoint sums are exact for this family and do not demonstrate general numerical-integration error |
| Visual scale | Signed-area bands use a readable scale held fixed throughout time dragging; pins share the envelope | Coefficient or pin changes can rescale it, as stated in the caption |
| Story connection | Twenty-two practical stories link the changing text quantity, substituted calculation, and scene mark | Constructed examples; learner effectiveness still needs observation |
| Discrete choices — improved | Provider-declared dropdowns survive registration; family and partition choices stay discrete | Future modules must declare valid numeric animation sweeps independently of domain-demonstration controls |
| Representations | Twenty-two Geometry, twenty-two Graph, and the original three distinct 3D views: 47 views total | Accessible sampled-data alternatives and focused nonvisual descriptions remain a priority |
| Private context | New modules round-trip through the existing exact workspace format, including a missing-limit state and string selections | No active-playback recording; broader fresh-profile and device qualification remains |
| Shared quantities | Explicit typed/unit-compatible links remain available; signed displacement is distinct from total path length | One directed link; no cycles or implicit unit conversion |
| Content | Twenty-two draft cards, 114 examples, 161 numeric fixtures, 29 source records, 136 static exports | Independent mathematics review remains pending; history has 21 source gaps and one partial account |
| Status accuracy | New cards declare implementation separately from review status | Original three interaction fields and coverage rows still contain stale unimplemented wording |
| Offline build | Embedded HTML and deterministic static exports remain supported | Live BOH intake/index/retrieval remains unverified |

## What remains in the current plan

| Plan item | Status after this build | Remaining acceptance work |
|---|---|---|
| T00–T02: contracts/compiler | Implemented; four new allowlisted providers fit the same boundaries | Keep structural checks distinct from mathematical proof and independent review |
| T03–T05: discovery/dossier | New concepts appear in Explore, filters, grammar, examples, and source sections | Learner and accessible-math walkthroughs |
| T06: compare/record | New modules can share both slots and use existing saved workspaces | Qualify the complete compare → explain → save → restore loop with learners |
| T07–T08: logarithm/derivative | Existing behavior and original representations retained | Independent review and learner qualification |
| T09: first eight/foundations | Function, Exponentiation, Limit, signed area, and finite partitions now implemented | Inventory identities `ratio`/`integral` still remain planned alongside narrower implemented application cards; reconcile intentionally without rewriting saved IDs |
| T10–T11: BOH | 136 deterministic static documents pass metadata checks | Disposable live indexing, revision imports, and context-preserving retrieval |
| T12: accessibility/offline/recovery | Automated contracts and targeted local-browser checks | Graph data alternatives, assistive technology, physical touch devices, 200% zoom and fresh-profile recovery |
| T13: reviewed expansion | A coherent foundation batch is built and checked | Independent derivation/unit review, history evidence, and learner acceptance before publication |
| T14: relations | Typed comparison links and curated connections remain | Sourced neighborhood map and relation filters |
| T15: personal workspace | New concepts use the existing portable two-slot format | Selected exports, revision comparison, and improved notes/workspace browsing |

## Principles to add or enforce

| Priority | Principle | Concrete next step |
|---|---|---|
| 1 | Every important picture has a usable alternative | Expose sampled values and a concise description from the same model data |
| 1 | A visual mark has a precise meaning | Keep area versus side length, displacement versus distance, finite probe versus limit, and point value versus approached value explicit |
| 1 | Stories declare their own setting | Restrict story edits and scene handles to declared variables/ranges; preserve fixed assumptions when moving into the general playground |
| 1 | Learning needs explanation, not just motion | Observe a learner changing a variable, naming an invariant, checking a condition, and explaining a failure case |
| 2 | Discrete mathematics stays discrete | Use string selections for finite partitions and function families; animate only declared numeric sweeps |
| 2 | Scale changes are visible and deliberate | Hold scale fixed during the primary gesture; include pinned states and label coefficient-driven rescaling |
| 2 | Expansion preserves old context | Add new stable module identities; keep old workspace parameter and version contracts intact |
| 2 | Availability and review are separate | Reconcile stale metadata without promoting draft claims; obtain independent mathematics and source-based history review |
| Ongoing | Modules own meaning; the host owns interaction | Keep arithmetic, scenes and story data modular; share clocks, pacing, input, lifecycle and storage |

Detailed verification is recorded in [the release validation](VALIDATION_0_15_0.md).
The plug-in boundary is described in [Playground modules](PLAYGROUND_MODULES.md).
