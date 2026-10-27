# 0.23.0 terrain/startup preview validation

Prepared 2026-10-27. This is an isolated preview of presentation and startup
changes, not an independent review of the mathematics or a production launch.

## Automated qualification

| Check | Result |
|---|---|
| `python tools/build.py` | Standalone app, development catalog, reference index, terrain and static exports generated |
| `node --test tests/*.test.mjs` | 720 tests pass; the preview PR runs the same suite in CI |
| `python tools/check.py` | Schema, references, 346 numeric cases, 232 export documents and notation checks pass; 10 Python tests pass |
| Notation | 409 entries; 38,996 recognized occurrences; zero unresolved or review findings in the current scan |
| Terrain | One connected landmass, enclosed lake, deterministic field/PNG/contours, valid cache invalidation |
| Navigation | Stable IDs/counts/routes, local bounds, label collision clearings, touch opt-in and mounted-instance cleanup |
| History | Actual app/controller regression tests cover distinct selections, Back/Forward, deep links, connection mode and duplicate-route avoidance |
| Reference startup | Prebuilt/runtime parity; inert data; runtime compilation forbidden at bootstrap; 1,500 ms JavaScript CPU budget |
| Offline package | START_HERE matches dist; embedded terrain/reference assets; raw attachments, private state and local QA fixtures excluded |

The [0.22 notation report](NOTATION_COVERAGE_0_22_0.json) remains the historical
checkpoint. The [0.23 report](NOTATION_COVERAGE_0_23_0.json) records this preview.

## Browser walkthrough performed

- Saved baseline and rebuilt overview/Calculus screenshots from served standalone files.
- Inspected the terrain without labels in the generated relief image.
- Inspected 360 × 800, 390 × 844, 430 × 932 and 768 × 1024 browser viewports and the default desktop viewport. No horizontal page overflow was observed.
- Opened a territory, then an area; inspected the smaller camera bounds and the available/planned lists.
- Used the expandable native controls to reach Computation and Linear-time algorithms from a cropped portrait overview.
- Verified Back returns from Calculus to Change, and Forward restores Calculus.
- Dragged the map; camera position changed and release did not activate a destination. Keyboard zoom was exercised; camera movement logic is also covered by controller tests.
- Moved the crate mass to 26 kg. The scene and story showed 15.75 kg for the chosen four and 11.75 kg for all twelve. One primary scene was mounted initially; the secondary playground mounted only when requested, inherited the story values, and its Graph view remained available.
- Opened Small delta in the prebuilt index and checked the Chaos theory and Limit usage links. Concept connections remained available.
- Inspected the complete authored before/after evidence in [terrain-preview/](terrain-preview/).
- Direct file-URL browser navigation was blocked by the browser tool’s HTTP/HTTPS-only policy. The self-contained artifact was inspected and tested through the local HTTP preview instead; direct file launch is not claimed as a browser check.

The new browser comparison reached DOMContentLoaded with populated main content
in 655.5 ms, versus 76,317 ms for the saved baseline. This is one local run per
page with test-only instrumentation, not a paint measurement or a phone/VM
performance guarantee. See [method and results](terrain-preview/startup-measurements.json).

## Limits and remaining qualification

Real-device touch, physical rotation, screen-reader use and slow-device paint
timings were not tested. Reduced-motion, resize and touch-policy behavior have
controller coverage; this does not substitute for those device walkthroughs.
Portrait overview intentionally crops geography horizontally, with a locator,
search and native lists retaining access to every destination. Lower-priority
map labels can be hidden when the selected label or controls need the space.
The terrain conveys no difficulty, prerequisite depth, measured similarity or
learning progress. No rivers or new concept relationships were introduced.
