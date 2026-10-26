# Build review and updated matrices — 0.14.0

Reviewed on 2026-10-26. This release adds named, private workspace snapshots.
Both module identities/versions, full-precision parameters, representations,
cameras, comparison pins, inspector settings, and the single connection travel
together. Restoration starts paused and validates before changing live hosts.

## What works and what still needs work

| Area | Working now | Remaining or limited |
|---|---|---|
| Modular playground | Eighteen registered teaching modules and a separate nineteenth-module extension example share the host | Runtime definitions remain trusted local JavaScript; new modules declare their own state/version contracts |
| Workspace saving — new | Named two-slot snapshots survive reload and round-trip through private JSON backups | Saving is explicit; transport speed, active playback, focus, guided predictions, and unsaved edits are not session recordings |
| Exact context — new | Geometry/Graph/3D choice, spatial camera, pin, hidden fractal zoom/comparison, and chaos trace are captured | No story-reading progress or arbitrary user-authored expression editor is included |
| Shared quantities | One typed/unit-compatible directed link; invalid values pause safely; manual override and identity changes disconnect | Multiple links, cycles, and implicit unit conversion remain outside this release |
| Restoring links — new | Linked and blocked connections reopen without rewriting saved receiving values; blocked links resume when valid | New incompatible module contracts must use a new module version |
| Saved-version recovery — new | Unavailable implementations stay readable/exportable with Restore disabled; invalid imports are atomic; corrupt stored bytes remain downloadable | Physical-device and fresh-profile recovery qualification remain incomplete |
| Stale-tab writes — new | A changed or unreadable stored copy is not overwritten; pending changes remain exportable in memory | This optimistic guard is not transactional multi-tab synchronization |
| Transactions — new | Preflight rejects bad data before pausing/replacing live hosts; rebuild failures roll back and expose recovery data if rollback fails | Failure injection is automated; it does not make arbitrary downloaded programs safe |
| Stories and readable motion | Eighteen practical stories, exact quantity highlights, shared followers, paced readings, and reduced-motion paths | Learning effectiveness, assistive technology, touch, and 200% zoom need focused walkthroughs |
| Representations | Eighteen Geometry, eighteen Graph, and three distinct 3D space views remain available | Useful sampled-data alternatives and consistent nonvisual graph descriptions are the next build priority |
| Notebook | Existing individual observations, snapshots, recovery, backup/import, and deletion undo remain separate | Selected exports, revision comparison, and coherent browsing across notes/workspaces remain under T15 |
| Content and coverage | Eighteen draft cards, 94 examples, 122 numeric fixtures, and 22 source records | Foundation gaps and independent mathematics/history review remain; history has seventeen source gaps and one partial account |
| Status accuracy | Current runtime and release docs identify implemented features separately from review status | Original three canonical interaction-review fields and coverage rows still carry stale unimplemented status |
| Offline and privacy | Embedded local HTML; private records excluded from canonical exports; 449 Node tests and five pipeline tests pass | Live BOH ingestion/retrieval and broader physical-browser qualification remain unverified |

## Remaining original plan

| Plan item | Current status | Remaining acceptance work |
|---|---|---|
| T00–T02: contracts and compilation | Implemented foundation; private workspace v1 now has a schema and repeatable fixture parity check | Preserve structural/semantic boundaries; this is not a general mathematical type checker |
| T03–T05: discovery and dossier | Implemented with targeted checks | Complete learner explanations, assumption checks, and accessible math/grammar walkthroughs |
| T06: compare and record | Implemented; whole-workspace capture now supplements individual notes | Qualify the complete discovery → compare → observe → save → restore loop with learners |
| T07–T08: logarithm/derivative | Implemented with explicit undefined cases | Independent mathematics review and learner qualification |
| T09: original first eight | Incomplete | General Function, Exponentiation, Limit, signed accumulation, and finite partitions; reconcile inventory identities |
| T10–T11: BOH | Static compatibility only | Disposable live indexing, unchanged/revised imports, and context-preserving retrieval |
| T12: accessibility/offline/recovery | Targeted automation and browser checks | Graph data alternatives, physical devices, assistive technology, zoom/touch, and fresh-profile restore |
| T13: reviewed expansion | Breadth exceeds initial specimens; review gates remain | Fill foundational gaps and review coherent batches before another count increase |
| T14: relation browsing | Comparisons and explicit numeric connections exist | Sourced typed neighborhood map and relation-level filters |
| T15: personal workspace | Two-slot contexts, views, pins, inspectors, and connections can now be saved/exported/restored | Selected exports, revision comparison, and improved library/observation browsing |

## Principles for the next build

| Priority | Principle | Concrete next step |
|---|---|---|
| 1 | Important pictures have usable alternatives | Provide sampled values and concise descriptions from the same evaluated model data |
| 1 | Learning is measured by explanation | Observe a learner changing a variable, describing an invariant, checking an assumption, and testing a failure case |
| 1 | Availability and review remain separate | Reconcile stale interaction metadata without promoting draft claims or silently changing saved identities |
| 2 | Versioned context remains portable | Exercise the new format in fresh profiles; bump module versions for incompatible state/port changes |
| 2 | Visual correctness and mathematical review are different gates | Check encodings and limits, then obtain independent derivation/history review |
| 3 | Expansion follows foundations | Complete Function, Exponentiation, Limit, and accumulation gaps before broad card expansion |
| Ongoing | Private work stays private and recoverable | Keep explicit exports, atomic imports, preserved unavailable revisions, and canonical/private storage separation |

The next recommended build is useful graph data alternatives paired with the
first focused learning/accessibility walkthrough. Detailed evidence is in
[the release validation](VALIDATION_0_14_0.md); the portable contract is in
[the workspace format](WORKSPACE_FORMAT.md).
