# 0.24.0 clarity validation

Prepared 2026-10-27. This release changes presentation and release identity;
it retains 38 draft concepts, 194 worked examples and the existing models.

| Check | Result |
|---|---|
| Standalone build | Canonical records, prebuilt index, embedded app and 232 written exports generated |
| JavaScript | 727 tests pass, including the existing startup CPU budget and new presentation/notation checks |
| Python/content pipeline | 10 tests pass; schema, 346 numeric cases, deterministic exports and release consistency pass |
| Notation | 409 entries; 38,953 recognized occurrences; zero unresolved or review findings |
| Release identity | Package, catalog, manifest, footer and development asset tags agree on 0.24.0 |
| Offline ZIP | 634 entries; standalone entries match; private state, raw attachments, publication drafts and local QA files excluded; no terrain runtime bundled |
| Shared presentation | Desktop and phone use one crate comparison renderer; the guided view has one range input and no SVG input rail or duplicate result band |
| Map | Full-world overview camera on every viewport; eight territory labels and a complete native key; no decorative elevation in the runtime |
| Independent diff audit | 34 targeted checks, all 38 AST presentations, input-label uniqueness, version/hash consistency and changed-file credential scan pass |

## Browser checks

The served standalone app was inspected in Chrome. At the initial 1366 × 768
laptop view, the entire chart ends at approximately 634 CSS pixels and the
input/play row ends at 704 pixels. See [laptop evidence](presentation-0-24/crate-laptop-1366.png).

Changing the last mass to 26 kg shows 15.75 kg for the selected four and
11.75 kg for all twelve. The single play action switches to Pause during
animation. Opening the optional playground inherits 26 kg, and its Graph view
remains selectable. The formal dossier contains no `lastValue`, `sampleSum`,
`sampleMean`, `populationMean` or `startIndex` labels. The playground scrubber
also uses its declared control label rather than a parameter key.

A local, unpublished responsive harness rendered the actual app in two
390-pixel-wide frames (375 CSS pixels of content after desktop scrollbars).
The guided story had one mass slider and no horizontal overflow. The atlas
opened at `0 0 1200 800`, with all eight territory labels visible and no
horizontal overflow. Concept connections remained selectable. See
[phone-width evidence](presentation-0-24/phone-layouts-390.png).

The harness was used because the browser tool's viewport override did not
reliably change layout dimensions on subsequent tabs. The recorded width is
the measured document width, not an assumed emulator setting. The harness
is excluded from source staging, packaging and deployment.

The portfolio project uses a fresh 0.24 demo launch key and a screenshot of the
current laptop layout. Its Astro build generates 41 pages successfully. The
historical blog screenshot remains unchanged.

## Limits

These are browser and automated checks. Physical phones, rotation, touch and
screen readers have not been qualified in this release. The existing draft
status and need for independent mathematical/pedagogical review remain.
The earlier local-HTTP-only file navigation constraint still applies; direct
file launch is not claimed as a new browser check.

See the [working/remaining/principles matrices](BUILD_REVIEW_0_24_0.md) and
[flat-map contract](FLAT_ATLAS.md).
