# Spatial and direct exploration

Version 0.4.0 adds three projected SVG scenes without adding a runtime library,
network connection, GPU requirement or new mathematical-model contract.

`AtlasSpatial.render(slug, parameters, options)` follows the visual renderer's
existing ID/baseline/reference/compact contract and adds `camera` in [0,1].
Camera changes projection only. It never changes parameters or encoded values.

- Composition cubes encode magnitude by volume. Their side lengths use cube
  roots, all stages share a scale, negative values have a sign and striped face,
  and a pinned state uses a wireframe on the same scale.
- The logarithm landscape samples true powers at equal exponent intervals.
  Column height encodes actual argument magnitude. The scene includes negative
  and fractional exponents and bases below one, with explicit viewing scales.
- The derivative ribbon repeats f(x) along a decorative depth axis. It remains
  a function of one variable. A rise/run triangle and a local magnifier retain
  signed-step and zero-step distinctions; a corner has no unique tangent.

## Input protocol

Scene elements expose `data-drag-param`, `data-drag-min`, `data-drag-max`,
`data-drag-x0`, `data-drag-x1`, optional `data-drag-step` and a mode of `absolute`
or `relative`. They also provide slider roles, range/value information, names and
keyboard focus. The two-dimensional composition frame uses a relative scrub so
grabbing it does not jump the input; coordinate points and rails use absolute
mapping. Native number fields and ranges remain available alongside the scene.

`AtlasSceneInput.bind(stage, {getValue, onStart, onChange, onEnd})` owns pointer
capture on the persistent stage, translates screen positions through the SVG
matrix, and routes keyboard arrows, Shift+arrows, Home and End through the same
validated bounds. `destroy()` removes its event listeners. Pure `dragValue` and
`keyValue` helpers can be checked without a browser.

The controller preserves focused handle identity when scene branches appear or
disappear. Navigation tears down capture, motion, media listeners and expanded
mode. The home sketch also uses this shared input adapter.

## Guided paths and motion

`AtlasExperiments` contains three immutable stories per card, each with complete
start/finish states, optional predictions, one correct interpretation, an
observation and an optional continuous sweep. Stories can be found through
`forSlug` and `find`; `outcome` resolves a chosen interpretation. There is no
score or prerequisite, and predictions can be skipped.

Continuous stories interpolate just one supported parameter and finish at the
authored state exactly. Categorical order changes and opposing one-sided slopes
switch between endpoints without pretending the transition is continuous.
Starting a story pins its start, selects the authored view, and brings the live
scene into view. A completed path pauses and offers its observation. Editing a
parameter returns control to free exploration. The timeline can scrub either
the free variable or the active story's path; speed can be half, normal or double.

An experiment's viewing reference includes its start, finish and intervening
values. That scale remains while manually inspecting its result, avoiding an
unexpected zoom when grabbing a handle. Starting free animation or resetting
restores the free sweep's viewing range. Matching workbench panels retain their
common reference instead. Replacing one workbench topic destroys only that
panel's controller, so the neighboring pin and presentation state survive.

Expanded mode keeps the same component and model state, makes background content
inert, traps keyboard focus, supports Escape and restores the prior focus and
body scroll state. Capturing a notebook experiment exits expanded mode before
opening the existing note dialog. Only mathematical parameters enter snapshots;
camera and presentation choices remain view state.

The nine scene stories are separate local exploration recipes. They do not
change the canonical three-card, 19-example BOH export or its draft status.
