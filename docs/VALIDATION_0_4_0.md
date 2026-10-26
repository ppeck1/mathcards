# Spatial playground verification

Verified on Windows with Node, Python, and the in-app Chromium browser.

## Automated evidence

- 71 Node checks pass, including the existing model/notebook tests, 17 SVG
  geometry/graph checks, 12 spatial checks, seven scene-input checks, and seven
  guided-experiment checks.
- Spatial checks exercise cube-root volume ratios, current/pinned/reference
  scale agreement, true exponential heights, signed and tiny steps, finite
  extreme logarithms, independent SVG definitions, immutability, and camera
  projection without changes to mathematical values.
- Scene-input checks exercise absolute and relative mapping, clamping,
  quantization, keyboard endpoints and Shift steps, invalid specifications and
  nonfinite input rejection.
- Every continuous experiment is sampled at 101 states to verify its supported
  domain and single changing parameter. Categorical paths are endpoint switches.
- Full content/build checks pass with the canonical three cards, 19 worked
  examples, deterministic offline embedding and the unchanged draft BOH corpus.

## Browser evidence

- Pointer dragging on the spatial input rail updates the model, SVG, native
  controls and numerical readouts. Arrow keys and Home/End update the same state.
- The derivative h grip remains reachable at h = 0; nudging it away from zero
  preserves keyboard focus after scene branches change.
- Rotating the spatial view changes the projection while the readout stays equal.
- Guided playback reaches its authored endpoint and pauses. The square-amplifier
  path ends at output 49 with a pinned start of 9. Its scene uses the experiment's
  viewing range so the final area fills the 144-unit reference frame.
- Prediction choices retain keyboard focus. Continuous playback brings the scene
  into view and exposes a result link on completion.
- Discrete order scrubbing returns to output 49 at the start and 19 at the end,
  with the timeline reporting Before/After.
- Changing one workbench topic replaces just that controller and retains the
  other panel's pin. Matching composition panels retain common volume scale.
- Expanded mode makes background content inert, exits with Escape, and restores
  normal page scrolling. A 390-pixel viewport has no horizontal document overflow.
- Geometry, Space, and graph modes, base 0.5, h = 0, corners, camera controls and
  the compact expanded layout were visually inspected.

The Space view uses an isometric SVG projection. It does not require a WebGL
context, and its derivative depth is explicitly decorative. These checks do not
replace independent teaching-content or assistive-technology review.
