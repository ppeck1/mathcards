# 0.34.0 signals and physics expansion matrix

Current review candidate, 2026-11-10, on `codex/eight-book-expansion` in
[draft PR #13](https://github.com/ppeck1/mathcards/pull/13). This follows the
[142-card checkpoint](INSIGHT_EXPANSION_MATRIX_0_34_0.md). The live site remains
0.33.0. No browser, headless browser, desktop app or phone was used.

## Six connected lessons

| Lesson | Story → calculation → measured visual | Scope |
|---|---|---|
| Neural summation | Two signal channels contribute with opposite signs; follow excitation and inhibition through 2e−i into aligned signed bars | Dimensionless linear drive, not membrane voltage, probability or firing rate; both inputs range from zero to one |
| Receptive field | Five brightness samples pass through center-surround weights into five signed contributions and their sum | Center and surround brightness 0–1, surround gain 0–2; every uniform level cancels at unit gain, while all-black input gives zero at any gain |
| Channel capacity | A binary message passes through a known flip channel; noise and the selected input mix lead to actual information and the capacity bound | One memoryless binary symmetric channel; bits per use differ from bits per second; an invertible all-flip channel retains information |
| Hamming code | Encode a four-bit word, flip one selected transmitted bit, follow the failed parity checks to its position and repair it | Complete even-parity (7,4) family, message values 0–15, no flip or one flipped position 1–7; no claim of general multiple-error correction |
| Photon energy | Change a vacuum wavelength, measure its spacing, find frequency and energy, then convert joules to electronvolts | Monochromatic photons at 400–800 nm, exact SI defining constants; wave height is not brightness or photon energy |
| Time dilation | Observe the same two events on one ideal clock; follow relative speed into the Lorentz factor and two measured time intervals | Inertial relative speeds from zero to 0.95c, proper duration 1–10 s; acceleration and general relativity require separate lessons |

Three local providers reuse the same controls, clock, paced readouts, pins,
independent slots and Geometry/Graph contract. Hamming choices stay discrete.
Other inputs can flow continuously within their domains. The channel graph
uses the same flip-probability axis as its primary control, comparing actual
information with capacity on a fixed one-bit scale.

The selected flip highlights the received bit, leaving the original encoded
row unmarked by that variable. Surround gain highlights its four changing
weights; the fixed center weight remains separate. The numerical model,
story, formula and source marks agree on these dependencies.

## Gaps filled

| Inventory area | Previous bounded introductions | Current bounded introductions | New bridge |
|---|---:|---:|---|
| Computational neuroscience | 0 | 2 | Signed input balance and a finite receptive-field filter |
| Information and communication | 1 | 3 | Capacity of one channel family and a complete finite error-correcting code |
| Mathematical physics | 0 | 3 | Planck constant, vacuum light speed and an inertial time comparison |

These are concept-to-lesson counts, not counts of cards or complete subject
treatments. Coding, visual perception and quantum theory gain preparation
only. Supplied evidence states and all 295 stable subject IDs are preserved.
The crosswalk now has **103 bounded introductions, 58 preparation-only
subjects and 134 planned subjects**. The [full generated roadmap](ROADMAP_PROGRESS.md)
and [subject matrix](EIGHT_BOOK_SUBJECT_MATRIX.csv) retain every remaining row.

## Current corpus and atlas

| Measure | Current candidate | This group |
|---|---:|---:|
| Draft lessons | 148 | 6 |
| Original examples | 744 | 30 |
| Independent numeric fixtures | 2,879 | 132 |
| Written exports | 892 | 36 |
| Declared views | 303 | 12 |
| Reference entries | 1,357 | 70 |
| Selectable symbol forms | 962 | 22 |
| Indexed meanings | 1,004 | 53 |

Twenty explicit metadata families supply 64 continuation lessons. The branch
adds 87 lessons above the published 61-card baseline. The eight territories
and 24 neighborhoods remain stable. Computation grows from 14 to 18 available
lessons, Applications from 20 to 22 and Structure from 26 to 28. Chance reaches
38 and remains the highest summit; the contour interval remains five lessons.
Region memberships overlap and are not added together.

## Verification and remaining work

| Area | Working/checkable result | Still needed |
|---|---|---|
| Connected representations | Scalar calculations and grammar bindings reach real marks; fixed scales preserve changed quantities | Learner observation and device-specific refinement |
| Numerical precision | Independent references, exhaustive Hamming states and strict relative checks for rare information and tiny physical quantities | Independent expert review of models and explanations |
| Reference | Scoped variable and unit readers have actual lesson links; build-time checks reject invalid editorial IDs and missing definition sources | Definitions for future lessons and independent editorial review |
| Atlas | First direct neural/physics introductions and additional information lessons, searchable under existing regions | 134 planned subjects and 58 preparation-only subjects |
| Presentation | Source-rendered previews/scenes and boundary glyph checks | Browser CSS/layout, touch, keyboard/focus, screen-reader MathML and reduced motion |
| Startup | Three fixed attempts at 490.2/460.8/462.4 ms pass the unchanged 1500 ms proxy budget | Real delivery and first useful render on browser/phone |
| Recovery and release | Existing private-state schemas retained; separate draft branch and unchanged live site | Real offline/file and two-tab review; publication remains separate |

See [current validation](VALIDATION_0_34_0_SIGNAL_PHYSICS.md) for exact final
checks and artifact identity. Static source images do not qualify a browser
or phone.
