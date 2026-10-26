# Validation — 0.5.0

Checked locally on 2026-10-23.

- 144 Node tests pass. These cover the shared models, proportional geometry, motion response and exact settling, pointer coalescing, reduced motion behavior, six story timelines, player helpers, prediction experiments, and notebook backups.
- `python tools/check.py` passes: four pipeline tests, six canonical cards, 34 worked examples, 38 numeric fixtures, eight negative contract mutations, 40 deterministic exports, and pinned BOH metadata checks.
- Browser checks exercised all six story answers: 25 m² total garden footprint, 3 exposure stops, 12 m/s instantaneous cart speed, 450 g of flour, 40 L of water, and 614.4 px ideal image width.
- The recipe animation advanced continuously through fractional inputs and outputs. Pause settled the scene and readout together. Step buttons selected the corresponding stage, and transferring a story state of 4.75 portions into the playground produced 356.25 g with 75 g per portion.
- The camera handle supported ratios below one: ratio 0.125 produced −3 stops. The garden scene preserves a 1 m² patch and distinguishes total footprint from paved border area.
- All six story pages had no horizontal overflow at 1440 px and 390 px test viewport widths. Desktop uses adjacent narrative and visualization columns; phone layout stacks the scene before the explanation.
- The standalone build opened successfully over loopback HTTP with no external script or stylesheet elements. Catalog filters included the new cards, the new card graph and numeric views rendered, and story capture opened the notebook dialog. Capture was canceled; no test notes were retained.
- Source preview and standalone build were checked separately. The file-protocol page was rebuilt byte-for-byte from the standalone build; automated browser access to file URLs was unavailable. The open file tab needs a refresh to display this release.

These checks validate software behavior and authored numerical examples. Independent mathematical/editorial review, historical research, and live BOH ingestion/retrieval remain outside this release's verification. The scenarios are illustrative models with chosen values, and all six cards retain draft status.
