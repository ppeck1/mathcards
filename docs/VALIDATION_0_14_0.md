# Validation — 0.14.0

Checked locally on 2026-10-26.

- All 449 Node tests pass. New coverage exercises view/inspector snapshots, linked and blocked connection restoration, private workspace validation, version preservation, storage recovery, stale-writer protection, library lifecycle, quiet restoration, preflight, rollback, and portable recovery copies.
- Five Python pipeline tests pass, including the public workspace schema/fixture parity check. The full check also passes canonical schemas, 122 numeric cases, eight negative contract mutations, deterministic exports, and pinned BOH metadata lint. Content remains eighteen draft cards, 94 worked examples, and 112 static exports.
- A browser-created backup passed the workspace JSON Schema. Re-importing it kept three entries rather than duplicating them. A separately imported unavailable-version fixture remained readable, with Restore disabled and its compatibility reason visible. Store tests cover current and preserved records together, atomic identity conflicts, quota/read errors, and untouched corrupt bytes.
- An agent-owned loopback browser saved a triangle/garden workspace with a live quantity link, full-precision receiving width, selected Graph view, and comparison pin. After both modules were replaced, Restore rebuilt the original pair with the exact current point and pin. The saved entry survived page reload; playback stayed paused.
- A second workspace preserved a hidden fractal camera at 27× with repeated-edge comparison enabled, plus an expanded chaos trace at generation 5.5. Restoring Graph kept the fractal inspector hidden; returning to Geometry recovered 27× and the comparison. The chaos trace disclosure and generation were restored.
- A range-blocked triangle → fractal connection restored the saved last-valid receiving length without rewriting it. Returning the source into range resumed the connection. A separate 3D camera snapshot restored the selected spatial view and camera setting 1. Deletion undo restored the same saved record.
- A same-topic spatial comparison with a large saved pin reopened both slots on the same volume scale (largest cube 15125). Quiet slot restoration is followed by one shared-reference refresh after both pins are present.
- The host and library tests distinguish parameter structure from defined outputs, permit deliberate standalone failure cases, suppress outgoing callbacks during restore, and cancel stale imports/listeners on disposal. Runtime failure injection verifies rollback and recovery data; these failure paths were not induced in the production browser UI.
- Targeted layout checks at 390×844 confirmed usable saved-workspace controls without horizontal document overflow. This is not broad assistive-technology, physical-device, or fresh-profile qualification. Browser checks reported no application console errors.
- Existing individual notebook storage was not migrated or changed. Browser records used disposable loopback QA data and were backed up and removed after checks; the user's file-origin notebook/workspace storage was untouched. Private browser data never enters the content catalog or BOH export.
- A raw-data write guard detects storage changed since a tab last read or wrote it. It leaves the external copy untouched and retains the pending local change in memory for export. A two-tab browser check confirmed the pending stale-tab save showed its memory warning while reload retained the first tab's saved entry. Automated tests also cover changed/invalid external bytes, stale removals/replacements, read failures, and normal successive writes. This is optimistic detection rather than transactional multi-tab synchronization.
- The editable and embedded classic-script orders include the new store/runtime/library before the application. Package creation checks archive integrity and byte equality between START_HERE.html, dist/index.html, and the packaged standalone entry. QA fixtures, local tooling/credential directories, and environment files are excluded from the source archive.

Saved browser previews:

- [Named workspace library after restoration](preview-v0-14-saved-workspace.jpg)
- [Phone-sized workspace controls](preview-v0-14-phone-library.jpg)

Snapshots are explicit configurations, not recordings. Both modules reopen
paused. Current parameters, views, cameras, pins, supported inspectors, and one
connection are included; playback speed/direction, active animation, focus,
guided predictions, and story-reading progress are not. Unknown module versions
remain portable data and cannot run through whichever implementation is current.

Graph data alternatives, learner/accessibility qualification, foundational
coverage, independent mathematics/history review, stale availability metadata,
selected exports/revision comparison, and live BOH retrieval remain unfinished.
See the [updated matrices](BUILD_REVIEW_0_14_0.md).
