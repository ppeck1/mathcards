# Validation — 0.7.0

Checked locally on 2026-10-23.

- All 176 Node tests pass. New coverage checks authored step boundaries, gap-free step itineraries, exact endpoints, immutable quantity meanings, offline dependency order, and preservation of exact formula identities while moving evaluations are approximate.
- The full Python check passes four pipeline tests, JSON schemas, 38 canonical numeric cases, eight negative contract mutations, deterministic exports and pinned BOH metadata lint. The corpus remains six draft cards, 34 worked examples and 40 written exports.
- The standalone browser preview was checked at 1440 px and 390 px widths. The current-step reader starts collapsed on desktop and open on a newly mounted phone view. The tested views had no horizontal overflow.
- Back/Next select the beginning of a stage. Garden step playback stops at 9 m², 16 m² and 25 m² respectively, keeping the selected step in place. Pause offers Continue this step and resumes from the paused input. The next stage begins at the previous stage's endpoint. The final Next button is disabled.
- Whole-story playback was exercised to the recipe's 450 g endpoint. All six story endpoints were exercised: 25 m², 3 stops, 12 m/s, 450 g, 40 L and 614.4 px. Their final stage and solved state were correct.
- During step playback, 40 observations recorded 40 distinct handle positions and four distinct numeric readings. The result text node remained mounted. Moving final evaluations used an approximation sign while exact expression structure retained equals signs; stopping restored the precise endpoint reading.
- Manual input preserved the reading step and highlighted input and resulting shape together. Selecting a quantity in the mirrored reader preserved the input and showed its descriptive quantity name and scene meaning. Explicit step changes and playback completion update a separate polite status region.
- Browser preview checks reported no console errors or warnings. No test notebook entries were saved. The preview uses loopback HTTP; the user's file-protocol tab is not automated. Refresh START_HERE.html to load the rebuilt offline document.

These are software checks, not independent mathematical, editorial or broad accessibility review. The stories remain illustrative draft material. Historical research and live BOH ingestion/retrieval remain unfinished.
