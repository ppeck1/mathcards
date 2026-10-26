# Visual playground

The first build's models, canonical content, notebook and offline packaging were
already useful foundations. Its fixed-size diagrams did not communicate the
magnitude of a change, and the logarithm's exponent ladder was hidden in a table.
This iteration adds perceptual representations and direct exploration without
changing those mathematical or storage contracts.

## Independent layers

| File | Responsibility |
| --- | --- |
| `src/models.js` | Parameter validation, mathematical evaluation and curve sampling |
| `src/visuals.js` | Pure model-to-SVG rendering; no timers, DOM or storage |
| `src/spatial.js` | Isometric volume, exponent landscape and derivative ribbon renderers |
| `src/plot-view.js` | Reusable pure SVG coordinate graph, axes, current handles, and pinned series |
| `src/module-graphs.js` | Per-topic quantities, sampling, units, and limits for the twelve newer graph views |
| `src/scene-input.js` | Renderer-independent drag mapping and keyboard controls |
| `src/experiments.js` | Twelve immutable prediction prompts, endpoints and playback paths |
| `src/playground.js` | Playback, shared viewing references, comparison pin, mode switches and live readouts |
| `src/experience.css` | Visual skin, responsive layout and motion preferences |
| `src/studio.css` | Scene interaction, focus mode, timeline and discovery panels |
| `src/app.js` | Navigation, card content, workbench and notebook integration |

All files are classic scripts. No framework, network service, GPU, build-time
package installation or rendering dependency is required. The build embeds them
in a single portable HTML file. A future Canvas or WebGL renderer can replace an
individual scene while preserving the mathematical model and interaction layer.

## Scene contract

```js
AtlasVisuals.render(slug, parameters, {
  id: 'unique-panel-id',
  view: 'geometry', // or 'graph'
  baseline: null,   // an independently evaluated pinned parameter snapshot
  reference: null,  // parameters that bound the current sweep's viewing scale
  compact: false   // promote primary labels on narrow displays
});
```

The return value is inert SVG and explanatory HTML. Evaluation stays in
`AtlasModels`; renderers do not execute formulas from content. Rendering does not
mutate current or pinned parameters. Unique panel IDs isolate gradient and clip
definitions when two scenes share a workbench.

## Visual meaning

- Composition uses square **area** for absolute magnitude. Side length scales
  with the square root of magnitude. All three steps and their pinned outlines
  use one shared scale. Negative signs remain explicit; zero has zero area.
- Logarithms pair equal exponent intervals with unequal intervals on an argument
  ruler. The ruler is linear in argument, so multiplicative growth remains
  visible. Bases below one reverse the direction. Negative and fractional
  exponents remain valid.
- Derivatives expose the signed horizontal run and vertical rise, a secant,
  the analytic tangent where it exists, and a local magnifier. The main curve
  has stable preset-specific bounds. The finite quotient at zero step remains
  undefined, and the absolute-value corner has no two-sided derivative.

The viewing reference includes a sweep's sampled largest magnitude so changing
the input does not continuously resize the largest square to the same size.
Matching workbench topics also contribute their current values and pinned
states to the common reference, so their area frames can be compared directly.
Scene captions state scale choices. Changing other parameters or a view can
change the viewing scale; pixel size across independent scenes is not a unit of
mathematical comparison. A pin compares values within a scene's shared scale.

## Interaction lifecycle

`AtlasPlayground.mount(root, options)` wires an existing lab's parameter inputs.
It returns `destroy()` and `refresh()`. Navigation destroys active controllers;
hidden pages pause playback. Manual parameter edits and reset also pause it.
Animation uses `requestAnimationFrame`, caps its update frequency, and bounces
within the selected sweep's supported range. It never animates through an
invalid logarithm base or silently claims a zero-step quotient exists.

SVG nodes are reconciled in place during lab updates so continuous accents do
not restart on every frame. CSS respects `prefers-reduced-motion`. Playback
starts only after an explicit button press. Numerical evidence stays available
under “Inspect the numbers & tables”; valid and undefined experiments can still
be saved through the existing notebook.

## Extending the playground

1. Add or extend an allowlisted mathematical model and its meaningful tests.
2. Add a scene in `visuals.js` with an explicit mapping from quantity to geometry,
   scale policy, invalid-state behavior, and an accessible description.
3. Declare the module's controls, sweeps, views, and exploratory questions in
   its registration or adapter. The shared host builds their UI without
   topic-specific branches. See `docs/PLAYGROUND_MODULES.md`.
4. Run the model, visual, notebook and pipeline checks, then inspect both views,
   side-by-side scenes, signed/zero values, and narrow layouts in a browser.

These scenes are geometric encodings and numerical illustrations. The existing
draft content and independent mathematical-review status are unchanged.
