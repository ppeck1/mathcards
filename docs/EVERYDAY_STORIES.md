# Practical stories, connected calculations and readable motion

Version 0.14.0 supplies eighteen draft cards, 94 worked examples, 122 model
fixtures and 112 deterministic written export documents. Each card has one
original practical story with four stages. The question and reasoning sit beside a scene driven by the same
validated parameters. Semantic marks connect the language to the geometry;
numerical labels use a reading pace separate from the scene's smooth motion.
Back/Next navigation and bounded step playback let the reader keep one part of
the reasoning in view before continuing. A separate calculation trace follows
the story variable through an operation to its effect on the shape.

## Learning through a scenario

| Card | Scenario | Chosen question and result |
| --- | --- | --- |
| Function composition | A 1 m square herb patch with a uniform border | A 2 m border gives a 5 m outside side and 25 m² total footprint; paving alone is 24 m². |
| Real logarithm | Compare a positive exposure ratio with a reference | A ratio of 8 is three base-2 doubling stops. The illustrated glow is qualitative. |
| Derivative | Animate a cart with position s(t)=t³ m | At 2 s, position is 8 m and instantaneous speed is 12 m/s; the next 0.1 s average is 12.61 m/s. |
| Ratio and scale | Expand a four-portion recipe using 300 g of flour | Six equal portions require 450 g; each portion still corresponds to 75 g. |
| Linear model | Start with 20 L and add water at 4 L/min | After 5 min, the tank holds 40 L. |
| Exponential change | Resize a 1200 px photo to 80% of its current width three times | Ideal width is 614.4 px; a final nearest-integer export is 614 px. |
| Chaos theory | Compare two logistic population projections starting at 0.35 and 0.3501, with rate 3.8 | After 12 generations the separation is about 0.0264416 of capacity, or 2.64 percentage points. |
| Fractal geometry | Plan a Koch-shaped laser-cut boundary from a triangle with 1 m sides | Three complete refinements give 64/9 m, about 7.11111 m of ideal perimeter. A separate Sierpiński inset shows another rule. |
| Wave interference | Combine two ideal equal-frequency, unit-amplitude tones at one observation point | At phase difference π rad, resultant amplitude is zero; a fixed probe height is a separate quantity. |
| Probability | Plan six independent seeds with the same illustrative germination chance | At p = 0.5, expected seedlings are 3. A particular tray is not guaranteed to contain three. |
| Vector rotation | Turn a fixed 2 m robot arm counterclockwise from the horizontal | At 60°, its endpoint is (1, √3) m, while its length stays 2 m. |
| Pythagorean theorem | Join opposite corners of a rectangular garden | A 3 m by 4 m garden has a 5 m straight diagonal. |
| Integration and accumulation | Collect the velocity–time area of a cart accelerating from rest at 2 m/s² | At 4 s, speed is 8 m/s and the triangular area gives 16 m traveled. |
| Quadratic optimization | Enclose a rectangular garden with 20 m of fence | A 5 m by 5 m square gives the largest rectangular area, 25 m². |
| Complex multiplication | Turn and grow a point with a complex multiplier | (2 + i)(1 + i) = 1 + 3i, a 45° rotation and √2 length factor. |
| Bayes’ theorem | Interpret a flag from an illustrative parts inspection | A 10% defect share, 90% sensitivity and 10% false-positive rate give a 50% defect share among flagged parts. |
| Graph shortest paths | Compare walking routes as one bridge time changes | At a 4 min bridge time, A–C–D is shortest at 8 min; two routes tie when the bridge takes 3 min. |
| Resonance | Compare settled responses of a normalized damped oscillator | At drive ratio 1 and damping 0.2, amplitude is 2.5 static-deflection units; the displacement peak lies slightly below ratio 1. |

These are constructed applications with stated assumptions, not reported
measurements or historical cases. Definition-level references support the
mathematics. The exposure convention also links to official Nikon teaching
material. Independent review of the cards and historical research remain open.

The motion example uses a coefficient of 1 m/s³ so position has meters and its
derivative has meters per second. A secant over a finite interval and the
instantaneous derivative are displayed as different quantities. The garden
story fixes composition order: border width becomes side length, then area.
Reversing these stages does not preserve their physical meaning.

## Modules and their boundaries

| Module | Responsibility |
| --- | --- |
| `src/life-stories.js` | Deeply frozen narrative data, variables, assumptions, source references and four stages per card |
| `src/discovery-stories.js` | Six immutable discovery stories, authored calculation stages, semantic links and quantity descriptions |
| `src/frontier-stories.js` | Six immutable practical stories for frontier topics, calculation stages and quantity meanings |
| `src/story-library.js` | Combines original, discovery and frontier narrative providers; no model logic or rendering |
| `src/life-story.js` | Story UI, stable text tokens, playback, variable controls, reading-step selection and callbacks to explore or capture |
| `src/calculation-flow.js` | Bounded input → operation → shape trace, selectable stages, replay and stable values from the shared reading cadence |
| `src/story-journey.js` | Pure step selection, authored progress boundaries and playback itineraries; no UI or animation clock |
| `src/story-links.js` | Semantic variable/effect metadata, quantity meanings and selection of matching scene marks; no clock or numerical evaluation |
| `src/readable-values.js` | Label formatting, update pacing and in-place text writes; no model or geometry changes |
| `src/story-scenes.js` | Contextual garden, exposure and cart scenes; routes other supported topics through the model registry |
| `src/everyday.js` | Allowlisted recipe, tank and resize model definitions, controls and pure SVG scenes |
| `src/discovery.js` | Six bounded discovery models, controls and pure SVG scenes, including finite logistic orbits and fractal constructions |
| `src/frontier.js` | Six bounded models and pure SVG scenes for integration, optimization, complex numbers, Bayes, shortest paths and resonance |
| `src/model-registry.js` | Routes everyday, discovery and frontier providers through a shared API without coupling them to prose |
| `src/fractal-lens.js` | Pure bounded Koch camera, nested-third focus, minimap and three equal-width finite-detail comparisons |
| `src/chaos-trace.js` | Pure validated snapshot of one actual logistic update for both paths, endpoints and interpolated gap; no DOM or clock |
| `src/scene-inspector.js` | Reusable view controls, explicit refinement and generation actions, optional detail views and paced statistics; no notebook state |
| `src/motion.js` | Display-value follower and parameter-driven gradient painting |
| `src/models.js` | Original three model implementations and shared validation/evaluation routing |
| `src/scene-input.js` | Pointer and keyboard interaction with scene handles |
| `src/playground.js` | Existing playground, reusable SVG reconciliation and shared motion integration |
| `src/experiments.js` | Twelve optional prediction experiments for the original six cards |
| `content/cards/*.json` | Canonical mathematical content, worked derivations, model bindings and fixtures |

All modules load as ordinary classic scripts and are embedded into the offline
standalone build. They require no online service, rendering package or GPU API.
A future renderer can replace one scene while retaining the model and story
contracts.

## Narrative data contract

`AtlasStoryLibrary.forSlug(slug)` returns the story object for a card or `null`.
`find(id)` looks up a story by its own identifier. `all()` returns a new array
containing the eighteen immutable story records. `AtlasLifeStories`,
`AtlasDiscoveryStories` and `AtlasFrontierStories` each supply six stories.
The library only combines them.

Each record contains:

- Identity and prose: `id`, `slug`, `scene`, `title`, `eyebrow`, `summary`,
  `context`, `question` and `conclusion`.
- A complete model state in `parameters` and the labeled controls in
  `variables`, including parameter key, symbol, unit and supported range.
- A `timeline` with one numeric parameter key, start, finish and duration.
- An output `unit` on the discovery and frontier stories, keeping the displayed result's
  meaning separate from the input control's unit.
- Four `steps`, each with a unique ID, title, body, formula and progress interval.
  Each step also declares `focus`, `focusLabel` and `focusDescription` to identify
  its physical scene cue.
- Explicit `assumptions` and registered `sourceRefs`.
- Optional `calculation` stages with `role`, `label` and a value `template`.
  Discovery and frontier stories author these directly; the calculation module
  supplies equivalent small records for the original six stories.

Story prose and formula strings use placeholders such as `{{time}}`,
`{{output}}` and `{{analytic}}`. Every step's body mentions the current timeline
variable. The controller compiles these placeholders once into stable,
selectable text tokens and updates their text from shared model values. It
does not parse or execute a formula string. The expression tree and renderer
binding remain in the canonical card.

`focus` is one of `reference`, `input`, `intermediate` or `output`.
`focusLabel` names the visible cue, and `focusDescription` explains what that
mark encodes. For example, the patio's side-building step focuses the full
side bracket, while its area step focuses the whole footprint. These fields
describe the story's teaching sequence without introducing coordinates or
rendering logic into the narrative data.

`AtlasLifeStory.parametersAt(story, progress, base = story.parameters)` returns
a complete model state. It clamps progress to [0,1], changes only the declared
timeline parameter and preserves its exact authored endpoints. The optional
base preserves other current parameter choices during replay and step changes.
Optional `goalKeys` restrict the comparison used for goal completion, while a
plain-text `conclusionTemplate` reports current evaluated quantities. The chaos
story uses these to keep changed starts and their result consistent.
The controller mounts into a host element
and returns lifecycle controls, including `destroy()` and the current target
parameters. Navigation removes the controller's listeners and animation work.

The story starts at its setup state. Whole-story playback advances toward the
question's chosen answer, and the final authored conclusion appears at that goal state.
Dragging farther explores other valid values without presenting the original
answer as the result of those new inputs. Final-step text also uses current
values and tells the reader how to return to the original question. Step
controls allow a reader to inspect the reasoning without waiting for playback.

Back and Next select a reading stage and place the scene at that stage's
starting marker. The opening stage is the unchanged reference and offers Show
the start. Later stages offer Play this step: the animation follows the path
from the previous stage's target to the selected stage's target, then stops.
It keeps the selected stage at the boundary instead of advancing to the next
one. A paused step can continue from its current playhead. Play whole story
remains available and follows the authored progress intervals automatically.
Manual dragging keeps the selected reading step.

Read this step mirrors the selected stage's body and formula next to the
scene, using the same compiled tokens and paced values as the full explanation.
It is a disclosure that starts open on phones, keeping the reasoning close to
the animation in a stacked layout. A small step counter and disabled endpoint
navigation clarify the current position. Explicit step selection, pause and
completion update one polite status region; changing numbers are not announced
on every frame.

`AtlasStoryJourney.resolveStep(story, index)` returns a bounded step and its
target progress; the opening reference targets zero. `stepAt(story, progress)`
resolves automatic playback against authored boundaries. `nextIndex` clamps
Back/Next selection, and `itinerary` returns the previous and current target
markers for step playback. These pure helpers contain no DOM or motion logic.

## Link language to geometry

`AtlasStoryLinks.forSlug(slug)` returns immutable semantic metadata for a
supported story. It identifies the input key, symbol, unit and visual effect.
`focusFor(slug, index)` supplies fallback step cues; authored step metadata
takes precedence. `quantityFor(slug, key)` supplies an immutable quantity
`label`, `role` and `description` for every authored token. It returns `null`
for unknown stories or keys, including prototype property names. The controller
uses these meanings for token accessibility labels and the selected quantity's
scene explanation, rather than exposing internal model keys.

`paint(container, slug, focus, options)` selects matching
scene marks by setting `data-story-active` on elements with `data-story-part`,
such as `data-story-part="output"`. Values use the four focus roles. A mark may
declare multiple space-separated roles when it serves more than one part. The
container's `data-story-focus` records the selected role.

Input tokens and marks use cyan; calculated outputs use gold. Selecting a
token focuses its corresponding scene part. The patio shows border and side
brackets, the exposure story links its ratio bar and stop count, the cart
separates position from its speed arrow, and the everyday scenes mark the
ingredient amount, water surface or current photo width. These marks encode
the quantities already calculated by the shared model. A shared role can
highlight related marks, so quantity descriptions state what each mark measures.
For example, the cart's short violet gap measures a distance; dividing it by
0.1 s gives the finite average speed. The gold arrow measures instantaneous
speed. The photo's rounded export number does not imply its animated ideal
frame has already been rounded.

Semantic selection has no animation clock and does not change parameters.
A new scene can retain these roles while choosing its own SVG structure.

## Follow the calculation

`AtlasCalculationFlow.stages(story)` supplies three records with the roles
`input`, `intermediate` and `output`. The compact UI presents these as input,
operation and shape. Each contains a plain-text expression template; it is
compiled into stable text spans rather than parsed as executable mathematics.
Templates refer to the same parameter and evaluated-value keys as the story
and scene. For example, the garden diagonal uses width a, then a² + b², then
the square-root distance c.

Chaos uses the same contract to expose concrete whole-step inputs for both
paths, the two substituted products r × input × (1 − input), and their actual
next iterates and gap. `src/story-scenes.js` supplies these named quantities
from `AtlasChaosTrace.snapshot`. They are distinct from the population values
at a fractional cursor, which are interpolated for display. The explanation
names both kinds of reading instead of applying a discrete recurrence to a
blended value.

The module mounts beside the animated scene. Playback or a manual variable
change begins a bounded sequence: highlight the input first, select the
intermediate operation after 650 ms, then select the output after 1400 ms and
stop requesting frames. Selecting a stage focuses it directly. Trace it
restarts the sequence without changing parameters or the reader's selected
story step. This gives the reader another way to follow the cyan story
variable into the violet operation and gold scene effect.

The trace owns emphasis only. Its `update(values, reading)` receives values
from the story controller on the existing 250 ms reading cadence and uses
`AtlasReadableValues` for formatting and in-place text writes. It does not
invent a counter, evaluate a second model or alter the geometry's motion
clock. Reduced-motion mode selects the output directly. Cancel and destroy
stop pending frame work, and navigation removes handlers.

## Magnify a finite fractal without changing its mathematics

`AtlasFractalLens.viewport({zoom}, geometry)` describes a camera bounded to
1–27×. At 1× its affine matrix is the identity, retaining the original Koch
coordinates. As magnification grows, it follows the first third of the top
edge. At 3×, 9× and 27×, the selected edge is respectively 1/3, 1/9 and 1/27
of the original edge and appears at the same on-screen width. These are exact
self-similar portions at completed refinement levels, subject to the finite
detail actually present in the drawing. Intermediate camera positions move
continuously; they do not create a new fractal iteration.

`wrap` clips the transformed geometry to the scene plot box. `minimap` retains
the complete outline and draws the inverse camera window in gold. Both views
share a retained SVG geometry definition through `use` references.
`paint(container, {zoom})` moves the mounted camera and locator directly,
without rebuilding the contour or replacing its text. This locator
replaces the separate Sierpiński reference while zoomed; Reset view restores
the overview and reference inset. The supplied contour remains at most level
5, so high zoom can reveal the end of the finite subdivision budget.

`AtlasSceneInspector.mount(host, options)` supplies a logarithmic slider,
Zoom in/out, Reset view and an explicit Refine to level 5 action. Its lifecycle
API returns `viewOptions()`, `update(parameters, {settled})`, `settle()` and
`destroy()`. Fractal `viewOptions` contains `{lens: {zoom}}`, with an optional
`lens.compare` flag while Compare repeating edges is selected. Camera movement
calls `onViewChange`; it does not call the mathematical parameter callback.
Refine alone sends `{depth: 5}` through `onParameters`. Refinement controls
change the perimeter drawing; camera controls change only where it is viewed.
Neither zoom nor minimap coordinates enter saved notebook model parameters.

Compare repeating edges opens three windows onto that same retained contour:
the original edge, its first third and its first ninth. All three normalize
their chosen edge to the same viewing width. `comparisonRegions(depth, geometry)`
returns each window's transform, clipped source region and
remaining finite detail; `comparison(markup, options)` renders them through
SVG `use` references. The labels report completed and forming refinements,
including when no refined detail exists at the selected scale. The comparison
does not generate another contour, increase depth or change perimeter. Its
toggle is view state, separate from camera magnification and mathematical
parameters.

The camera uses the existing display-motion module with a 90 ms response and
450 ms settling deadline. Mathematical shape changes keep the 45 ms / 240 ms
settings. Zoom labels and edge scale descriptions have their own 250 ms reading
pace, while geometry moves every frame. Mount does not request an initial scene redraw before its owner
is ready. Destroy removes handlers and pending camera work. Unsupported topics
hide the inspector and retain their existing scene controls.

## Compare two nearby chaos trajectories

The chaos story exposes the initial fraction and tiny starting difference in
addition to the generation playhead. Replay divergence retains those choices
and starts the shared playhead again. The population plot displays both
logistic orbits, while a second gap-history plot shows the absolute separation
at the same generations. The cursor and current values come from the same
orbit arrays rather than separately sampled simulations.

The inspector always formats Start A, Start B and Initial gap at seven
significant digits so 0.35 and 0.350001 remain visibly distinct. Current gap
and Gap / initial gap use the normal paced reading updates. The latter is
amplification of that chosen initial separation, not a Lyapunov exponent or
a guarantee of monotonic growth. Stable number nodes and explicit final
updates keep the small differences readable as the playhead moves.

One generation → advances the current playhead to the next whole marker,
preserving both chosen starts and the shared rate. It opens Follow one
generation, a disclosure containing one substituted recurrence for each path
and the gap before and after that whole update. The action is disabled at the
36-generation limit. The display uses seven significant digits for these
nearby inputs and results on the existing reading cadence; the recurrence
itself uses the original numbers from the model's orbit arrays.

`AtlasChaosTrace.snapshot(parameters, result)` is a pure bounded adapter over
those arrays. It validates the parameter/result agreement and actual logistic
steps before returning frozen rows with `input`, `remaining`, `growthFactor`,
`output` and current interpolated `position`. It also returns `n`,
`nextGeneration`, `progress`, `nextTarget`, and endpoint/current gaps. At
cursor zero it shows the first predicted 0→1 update at progress zero. At a
positive whole cursor g it shows the just-completed g−1→g update at progress
one; a fractional cursor uses its neighboring integer endpoints. Thus 36
shows 35→36 without inventing a 37th step. Invalid, stale or inconsistent
values return an unavailable snapshot instead of a plausible calculation.

The current gap is the absolute difference between the two interpolated
positions. If their segments cross, that gap reaches zero at the crossing;
it is not a linear blend of two positive endpoint gap magnitudes. The helper
supplies values only and has no formatting, DOM or animation clock.

While Follow one generation is open, inspector `viewOptions()` returns
`{chaosTrace: true}`. The scene highlights the matching two whole-step orbit
segments, uses hollow markers for their results and marks the endpoint gap
on the lower plot. Solid current markers continue to follow the shared
cursor. Closing the disclosure removes the extra emphasis. These inspection
flags are not model parameters or notebook snapshot fields.

## Read numbers at a calmer pace

`AtlasReadableValues.createPacer({intervalMs, now})` controls text update
frequency. Its default is 250 ms. `take({force, settled})` allows the first
write, the next elapsed interval, or an immediate forced/settled write. This
gate applies to labels and story tokens; it does not throttle geometry,
pointer input or the numerical model.

`format(value, options)` normally gives moving values at most two decimal
places. Values smaller than that decimal scale retain two significant digits
so a small nonzero value does not disappear into zero. Settled values use up
to six significant figures. Scientific notation keeps very small or large
values readable. This is display precision: model parameters and saved
snapshots retain their validated numeric values.

`formatText(text, options)` applies the same formatting to decimal quantities
inside renderer-authored labels. `writeText(element, value)` skips identical
writes and preserves an existing text node when possible. Story token buttons
remain mounted instead of rebuilding paragraphs during motion. Labels have
stable numeric spacing and no change-triggered brightness pulse.

Formula literals retain exact definitions and identities during movement.
An equals sign immediately before a displayed calculated quantity can become
an approximation sign while that reading is rounded. This does not replace
every equals sign in the formula: the rule itself remains exact. When motion
settles, numerical evaluation returns to its ordinary equals sign at the
settled display precision.

## Smooth display, exact model state

`AtlasMotion.createFollower(options)` separates the validated target state from
the displayed state. Numeric changes use an exponential response with a 45 ms
time constant. The response depends on elapsed frame time, keeping the motion
consistent across different refresh rates. A 240 ms settling deadline after
the latest target update ends the interpolation at the exact target on the
corresponding animation frame; the follower also settles early when close.

The model is evaluated from each displayed state when drawing. Geometry uses
every animation frame; readable labels sample that same state on their 250 ms
cadence and refresh immediately when settled. Captures use the current
validated target parameters. Categorical changes, invalid interpolation paths and
explicit immediate updates settle directly instead of blending incompatible
states.

`paintGradients(container, parameters, phase, reduced)` moves SVG light using
the same displayed values while preserving authored opacity. It has no
brightness pulse or independent ambient animation clock.
Existing SVG nodes are reconciled in place so a drag does not restart the
scene's visual identity on every input event.

Once the follower reaches its target, it stops requesting frames. Playback is
explicit, pauses when the document is hidden, and is cleaned up on navigation.
Reduced-motion mode skips the follower transition and gradient flow; story
playback goes directly to its final state, and step playback goes directly to
that step's target. Static labels, values, formulas and step controls remain available.

## Interpolation and real quantities

Recipe portion-equivalents, ideal ingredient mass, elapsed time and tank
volume are continuous quantities in the chosen models. A fractional portion
describes a quantity of food, not part of a person. A fixed mass per portion
does not imply that cooking time or equipment scale by the same factor.

The resizing model is different: completed passes are integers. Its internal
parameter `time` is the displayed pass coordinate n. At integer n, the result
is the ideal width after n completed operations. At fractional n, W₀qⁿ is an
explicit geometric interpolation used to connect those states smoothly.
The UI must preserve that distinction.

Raster dimensions need integer rounding. The worked story postpones rounding
until the final nearest-integer export; rounding after every real pass is a
different workflow. Width does not determine image detail, file size or
resampling quality. Likewise, a tank's capacity, an actual flow rate and a
camera's displayed brightness require their own physical or measurement
models.

The logistic example applies xₙ₊₁ = 3.8xₙ(1 − xₙ) to two nearby starts for a
finite number of generations. Only integer generations apply the recurrence;
fractional coordinates linearly interpolate neighboring iterates. The current
absolute separation can increase or decrease. This finite sensitivity example
does not prove chaos and is not a fitted ecological forecast.

The Koch scene starts from an equilateral triangle and replaces each segment
with four segments one third as long at each complete refinement. Its integer
perimeter is Pₙ = 3L(4/3)ⁿ. Between integer levels, triangular bumps rise from
the subdivided edge: the reported perimeter is the actual length of that
intermediate drawing, not the fractional-power shortcut. The last completed
level and its segment count are distinct from the subdivisions in the current
morph. Both the Koch outline and the separate Sierpiński inset stop at finite
levels; neither renders an infinite object or predicts a real tool's kerf.

The six-seed example computes the binomial probabilities of every possible
total. The gold expectation marker is 6p, a mean across comparable independent
trays; it can fall between integers and does not promise a particular outcome.
The chosen probability is illustrative rather than estimated from seed data.

The wave example adds signed heights point by point. The fixed probe at
θ = π/2 samples one location, while 2A|cos(φ/2)| is the resultant sinusoid's
amplitude. These are separately named and highlighted. Exact cancellation
uses equal amplitudes, equal frequency and the stipulated phase offset, rather
than a simulation of room acoustics.

The rotating arm preserves its fixed length while x = r cos θ and y = r sin θ
change together. One coordinate is not the full endpoint position. In the
garden diagonal, the side squares measure square metres; taking the square
root of their summed areas returns the path length in metres. Geometry and
units remain explicit in both stories.

The integration story stipulates positive velocity v(t) = kt from rest, so
its triangular velocity–time area equals both displacement and distance. Graph
area has units seconds × metres per second = metres; it is not ground area.
The fence story compares rectangular enclosures only, with no gates or site
constraints. Its optimum follows completing the square rather than visual
appearance alone.

Complex multiplication fixes the input at 2 + i. Its output needs both real
and imaginary components; the primary numeric result is just the horizontal
coordinate. Multiplication scales length and adds angles when the multiplier
is nonzero. At zero the point collapses and no rotation angle is defined.

The inspection example divides the defective-and-flagged fraction by the total
flagged fraction. Its sensitivity and false-positive rates are stipulated for
one constructed population, not measured inspection performance. Graph route
weights are additive positive walking minutes; drawn edge lengths have no
geographic scale. Complete routes determine the minimum, and ties retain
multiple valid minimizing paths.

The resonance example compares normalized steady displacement amplitudes for
separately settled sinusoidal drives with positive damping. It does not animate
the startup transient or the physical history of a rapid frequency sweep. At
damping 0.2, the response at drive ratio 1 is 2.5, while the displacement peak
is near √0.92 ≈ 0.9592. Damping, normalization and this distinction remain
explicit; the illustration does not establish real material limits.

## Extending without coupling the layers

1. Author a canonical draft card with conditions, units, a typed expression
   tree, worked cases, model fixtures and verified source references.
2. Register the bounded model and a pure scene renderer. Keep visual scale
   choices and invalid-state behavior explicit.
3. Add an immutable story with complete parameters, four worked stages,
   labeled variables, a question whose answer matches its endpoint, and
   assumptions about the application. Every step should name the current input
   and declare a focus, cue label and physical explanation. Add semantic roles
   to the corresponding scene marks and a meaningful quantity record for each
   template key. Check the authored stage boundaries and reference state.
   Supply three calculation stages that trace the current driver through the
   operation into the result, reusing those same model quantities.
4. Add model-fixture and notebook round-trip coverage, then check the story's
   full variable range, tokens, units, source links and lifecycle behavior.
5. Rebuild the offline HTML and written projections from the canonical source.
   Record actual checks and browser observations in the release validation
   report.

The current checks exercise the authored fixture values, continuous timeline
states, source links, immutable narrative data, notebook backups and exact
motion settling. They support the implementation; they do not constitute
independent mathematical review or broad browser qualification.

Narrow-viewport spot checks assess selected layouts, not physical-device,
cross-browser or assistive-technology qualification. Release-specific checks
and remaining limitations belong in the validation report.
