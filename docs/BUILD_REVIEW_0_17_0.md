# Build review and updated matrices — 0.17.0

Reviewed on 2026-10-26. Atlas now opens as a selectable colored landscape,
inspired by the user's map reference. Region data, SVG artwork and navigation
are separate modules. The existing individual connections view remains available.

## What works and what needs work

| Area | Working now | Remaining or limited |
|---|---|---|
| Broad map — new | Eight irregular colored territories and 24 selectable areas, with mathematical motifs | Editorial geography of this collection; broader mathematics still needs deliberate content and map expansion |
| Selecting a portion — new | Click a territory or topic, zoom into its context, read its explanation and open available lessons | New territories/areas need authored layout as well as membership data |
| Map camera — new | Smooth finite zoom, drag to pan, fit/reset, native zoom controls and keyboard camera input | Physical-device touch/pinch qualification remains; pinch zoom is not implemented |
| Search — new | Field/topic aliases and current/planned concept names; input focus remains stable | Search hints are not claims that mathematical terms are equivalent |
| Linear areas | Linear algebra opens the vector and complex-transform lessons; linear-time algorithms has separate planned complexity context | No dedicated O(n) lesson is supplied, and the route lesson makes no linear-time claim |
| Availability | All 22 current cards represented; 80 unique planned coverage concepts projected into areas | The rest of the 188-entry inventory is not shown as though fully mapped |
| Connections | Earlier field filters, directed links, conditions/evidence and concept URLs retained | Relation-level filtering and a multi-concept relation matrix remain |
| Card placement | Every card has a Place on map link to an area containing that lesson | An initial placement is a navigation choice; areas and fields can overlap |
| Accessibility | Native region/area selectors, search, SVG keyboard controls, status text and instant reduced-motion selection | Assistive technology, actual 200% browser zoom, physical devices and learner checks remain |
| Context and privacy | Camera/selection are independent from model parameters, notebook and workspace storage | Map camera position is not a saved mathematical workspace or a persisted session |
| Existing cards | All 22 concepts, 114 examples, 161 fixtures, 47 views and saved model versions retained | Independent mathematics/history review still pending |
| Verification | 527 Node tests and five pipeline tests pass; targeted browser navigation, drag/zoom, search and rendering checks completed | Implementation checks do not qualify learning effectiveness or independent mathematical review |

## What remains in the current plan

| Plan item | Status after this build | Remaining acceptance work |
|---|---|---|
| T00–T02: contracts/compiler | New map providers remain offline, pure where appropriate, and embedded by the standard build | Preserve explicit identities and deterministic projections |
| T03–T05: discovery/dossier | Cards now have both visual field navigation and detailed concept neighborhoods | Learner explanation and assumption checks |
| T06: compare/record | Existing workbench and private context retained | Qualify cross-concept learning/save/restore scenarios |
| T07–T09: foundations | Previous interactions and implementation-status reconciliation retained | General Ratio/Integral inventory scope and independent review/history gates |
| T10–T11: BOH | 136 deterministic static documents remain valid | Disposable live indexing and retrieval validation |
| T12: accessibility/recovery | Map controls, reduced motion and narrow-frame rendering checked | Screen readers, genuine 200% zoom, touch devices and fresh-profile recovery |
| T13: reviewed expansion | Map shows available and planned lessons honestly | Independent mathematics/history review before publication or broad further expansion |
| T14: relations | Selectable landscape plus retained typed neighborhood implemented | Relation-level filters, multi-concept relation matrix and evidence refinement |
| T15: personal workspace | Existing saved model identities and formats unchanged | Selected exports, revision comparison and library browsing |

## Principles to enforce next

| Priority | Principle | Concrete next step |
|---|---|---|
| 1 | Overview first, detail on demand | Keep landscape selection separate from individual relationship explanations |
| 1 | Map placement permits overlap | Avoid implying a unique field or mandatory learning route |
| 1 | A label leads somewhere honest | Available areas open lessons; planned areas explain their scope without fabricated card links |
| 1 | Small labels have an alternative | Preserve native selectors, search and keyboard navigation alongside geographic selection |
| 2 | Navigation hints differ from mathematical equivalence | Keep ambiguous searches such as linear algorithms visibly disambiguated |
| 2 | A camera is viewing state | Keep zoom/pan isolated from mathematical parameters and private records |
| Ongoing | Expansion stays modular | Change membership data, artwork and controller behavior independently; clean up frames and listeners |

See [release verification](VALIDATION_0_17_0.md) and
[the Atlas component contract](CONCEPT_ATLAS.md).
