# PR #13 release checks — background review

The [130-card number/geometry matrix](NUMBER_GEOMETRY_EXPANSION_MATRIX_0_34_0.md)
and [current validation](VALIDATION_0_34_0_NUMBER_GEOMETRY.md) identify the latest
candidate. The device-review plan remains open for this candidate.

The [126-card comparison matrix](COMPARISON_EXPANSION_MATRIX_0_34_0.md) and
[its validation](VALIDATION_0_34_0_COMPARISON.md) retain the previous
continuation's evidence.

This records the 111-card release checkpoint. The subsequent
[six-lesson continuation](ROADMAP_EXPANSION_MATRIX_0_34_0.md) and its
[validation](VALIDATION_0_34_0_ROADMAP.md) identify the expanded artifact. The
device-review plan below remains pending and applies to that continuation.

Reviewed on 2026-11-02 on `codex/eight-book-expansion`, starting from
`805141891e30b731b9d05f07bdb6b9ffcb9aaec7`. This continues
[draft PR #13](https://github.com/ppeck1/mathcards/pull/13). The 111 lessons,
model revisions, notebook schema 0.1.0 and workspace schema 1.0.0 are unchanged.
Live 0.33.0 remains unchanged. No browser, headless browser, desktop app, tab,
panel, assistive technology or physical phone was opened or controlled.

## Release finding and correction

Notebook storage lacked the stale-writer check already used by workspaces.
Two tabs loaded from the same baseline could save different notes and the
later write could erase the earlier tab's saved notes. The notebook now checks
stored bytes against its last successful load/write before saving. A detected
external change leaves those bytes untouched and keeps the pending local
change in memory with an export-before-reload warning. A failed pre-write read
also preserves storage and gives a distinct warning.

This is conservative stale-write detection, not an atomic transaction between
processes. Actual two-tab behavior remains a browser review item. The portable
backup schema and replay contracts have not changed. No imported or private
notes were accessed; tests use synthetic disposable stores.

## Background checks

| Gate | Evidence | Remaining limit |
|---|---|---|
| Notebook recovery | Stale empty/loaded baselines, add/remove/import-replace, unreadable pre-write storage, pending backup and continued current-writer regressions | Real browser storage, two tabs and actionable warnings |
| Full-catalog backups | All 111 notebook defaults and all 229 workspace views save, reload and export/import with exact parameters, outputs, pins and compatibility state | Actual file-picker/download flow and device storage restrictions |
| Static scene structure | Strict SVG, ID/reference integrity and separate slot namespaces at desktop/compact defaults; reproducible checker added to CI | Browser layout, accessible trees, rendering and non-default states |
| Artifact integrity | Manifest/version/corpus agreement, standalone parity and inline runtime resources | First delivery and first useful render in a real browser |
| Source/package integrity | Current documentation local file targets, ZIP CRC/current bytes/private-path exclusions and bundled vendor notices/provenance | External links and live BOH ingestion/retrieval are outside this check |
| Release isolation | PR validation runs with repository read permission; Pages upload/deploy require eligible `main` events | Publication remains a separate release decision |

The complete application/content suite and startup measurements are recorded
with the final artifact below. Numerical and learning qualification remain
distinct: independent oracles and bounded examples do not replace expert or
learner review.

## Candidate evidence

- **39 focused JavaScript tests pass**, covering notebook/workspace recovery,
  the six new regressions and complete-catalog backup round trips. The last
  complete suite at the starting commit passed 1,159 tests; PR CI now runs
  **1,165 JavaScript tests** including these additions.
- **34 Python pipeline tests pass** in 54.4 seconds, including five scene-audit
  failure-detection fixtures. All **1,256 numeric fixtures**, nine negative
  contract mutations and 111 strict MathML formulas still pass. Canonical
  content and the zero-unresolved notation audit are unchanged.
- The default-state scene preflight passes **1,027 fragments / 1,031 SVG
  roots**, including 916 view fragments and 111 previews, **3,205 IDs**, **2,902
  references** and **458 pairs of distinct slots**. No duplicate IDs,
  unresolved local references or cross-slot collisions were found.
- Incremental formatting and authored-source syntax/whitespace pass across
  153 files. Static offline/resource and current-document local target checks
  pass; bundled vendor notices and pinned provenance remain intact.
- The rebuilt artifact passes **three predeclared sequential startup attempts**
  at **376.9, 360.2 and 392.9 ms**, median 376.9 ms. The unchanged limit is
  1500 ms. Separate built-prefix diagnostics have a 322.529 ms median and
  363.923 ms maximum. Source/measurement identities stayed stable and no
  attempt failed. No repository test suite ran concurrently with measurement.

The timing command was
`node tools/measure_startup.cjs --profile --runs=3`. It uses the unchanged
acceptance test and pre-storage/header-search boundary explained in the
[paired optimization checkpoint](STARTUP_OPTIMIZATION_0_34_0.md). The notebook
correction is not claimed to cause the lower timings: PC conditions vary, and
these are fresh-process Node checks rather than actual first browser render.
The earlier slower runs and budget miss remain in that record.

Final standalone HTML SHA-256:
`8592cf9cf320c5102718601a927e36844dcdb4f45f6ebe9b168b6341f36b862c`

Unchanged canonical SHA-256:
`375c43cd01a28bba6f98c37257640b5755d4e06e2ecb7175916331de81f97166`

The final source/offline ZIP is checked for CRC, exact current bytes,
private-path exclusions, bundled notices and standalone/manifest parity.
ZIPs and raw QA captures stay ignored. Latest full validation is linked from
[PR #13 checks](https://github.com/ppeck1/mathcards/pull/13/checks); no Pages
artifact upload or deployment is eligible for a pull-request run.

## Reproduce the additional checks

```sh
node --test --test-concurrency=1 tests/notebook.test.mjs tests/release-recovery.test.mjs tests/workspace-store.test.mjs
npm run check:scenes
python tools/check.py
python tools/check_generated.py --integrity-only
```

`check:scenes` renders trusted providers in Node, then parses markup with Python
standard-library XML/HTML tools. It starts no browser or animation clock.
Fixture tests make malformed XML, missing references, duplicate IDs and slot
collisions fail. These tests also run through `tools/check.py`. The
[deployment guide](DEPLOYMENT.md) lists the complete CI sequence.

## Review that still needs a browser or phone

Every row below is **pending**, rather than inferred from static SVGs or a DOM
harness. Record the exact candidate artifact/commit, device, OS/browser,
viewport, input method, reviewer/date and actual observation. Use disposable
profiles and synthetic notes for recovery checks.

| Priority | Review | Desktop/browser observation | Phone observation |
|---|---|---|---|
| First | Startup and delivery | Measure first useful content/controls from a fresh load, then repeat warm; include storage restoration and main rendering | Repeat on a representative phone and ordinary connection; verify responsive input during startup |
| First | Connected lesson | In `#card/normal-distribution`, follow a variable through story, calculation and both views; compare density with area | Drag and type values; read stable numbers while the geometry changes; verify page scrolling remains usable |
| First | Notebook and workspace recovery | Two tabs, save conflicts, export warning, file downloads/imports, reload and corrupt/unavailable storage in a disposable profile | Actual file picker/download/share behavior, reload and storage limits; recover a backup on a fresh profile |
| First | Keyboard and focus | Skip link, Tab/Shift+Tab, search, full symbol catalog, map, paging, dialogs, controls and Back/Forward without traps or lost focus | Confirm touch alternatives for controls and hover-only information; add external keyboard review when available |
| First | Native mathematics and assistive technology | Screen-reader names/order for MathML, formulas, sliders, SVGs, dialogs and status messages; fresh accessibility audit plus manual inspection | VoiceOver/Safari or TalkBack/Chrome reading order and control operation |
| Next | Layout and readability | Browser zoom/enlarged text, long formulas, clipping, contrast, exact signs and preview labels | Narrow portrait/landscape, enlarged text, full symbol list, no page-wide overflow or tiny chart labels |
| Next | Atlas and discovery | `#explore`, `#subjects`, `#atlas`, `#index`, `#search/δ`; filter, select, clear and navigate back | All eight territory names visible initially; distinguish map/scene gestures from page scrolling |
| Next | Motion and views | Pause/reset and reduced-motion preference changes; Geometry/Graph agreement and applicable Spatial cameras | Continuous drag response, readable values, no flashing; inspect fractal zoom and close chaos starting values |
| Next | Disconnected standalone | Open the built file in a fresh profile with networking disabled; discover a new card, search notation and restore backups | Test the platform's actual local-file/offline behavior; do not assume desktop file handling applies |

For broader boundary cases and independent mathematical/history/learning
review, use the [qualification checklist](QUALIFICATION_0_34_0.md). Its pending
status has not been changed by these automated checks. The
[current matrix](GAP_EXPANSION_MATRIX_0_34_0.md) summarizes these release gates.
