# Playground modules

The playground is a shared host for independently registered learning modules.
A module supplies an idea's mathematics and representations. The host supplies
the space, interaction rules, animation clock, readable values, and cleanup.
Two slots may show the same module with different parameters, or two different
modules, without sharing mutable state.

The registry is [src/module-registry.js](../src/module-registry.js). Installed
topic adapters live in [src/playground-modules.js](../src/playground-modules.js);
the common host lives in [src/playground.js](../src/playground.js). This first
pass adapts the existing mathematical models, renderers, and stories rather than
requiring their replacement.

The installed application contains forty-five topic adapters. The separate
[module sandbox](../examples/module-sandbox.html), **One module. Two independent
places to play.**, loads an additional module from
[growth-frame-module.js](../examples/growth-frame-module.js). It renders
`A = q²` in two independent slots with the same host and fixed viewing scale.
This is a developer example rather than another canonical teaching card;
notebook capture is disabled on that page.

## Ownership

| Host owns | Module supplies |
|---|---|
| Slot layout, comparison panels, focus, and responsive behavior | Stable identity, title, version, and mathematical setting |
| An independent instance and validated parameter edits in each slot | Defaults, parameter validation, evaluation, and domain diagnostics |
| Controls, pointer/keyboard input, transport, and a shared time policy | Control and sweep descriptors, presets, and interpolation policy |
| Text pacing, formatting, announcements, and reduced motion | Readout values, explanations, views, and optional learning content |
| Mount/unmount lifecycle, event listeners, and frame cancellation | Pure rendering functions and an optional scoped inspector |
| Explicit coordination between selected instances | Declared quantities and any supported relationships |

A module must not start its own animation loop, change another slot's state, or
query the page for an unrelated module's elements. Rendering receives parameter
copies. Use the instance's slot identity to namespace SVG definitions and other
local identifiers. An inspector must attach only inside its supplied host and
return the lifecycle methods its host expects, including cleanup.
An inspector may provide `paintView(container)` for a cheap view-only update;
return true when handled, or false to let the host render normally. The host
does not depend on a particular camera or mathematical topic.

Sharing a space does not imply sharing a mathematical variable. A parameter named
`time` in two modules can have different units, domains, and interpretations.
The workbench supports one explicit, visible A → B or B → A connection through
declared quantity ports. Matching parameter names never creates a link
automatically. Each slot remains an independent instance.

## Registration contract

`AtlasModuleRegistry.createRegistry()` creates an empty registry.
`AtlasModules` is the installed application registry. Register trusted local
JavaScript definitions using `register(definition)`; duplicate IDs fail rather
than replacing a running module.

| Field | Contract |
|---|---|
| `id`, `version`, `title` | Unique lower-case slug, nonempty version, and readable title |
| `defaults()` | Return a fresh complete parameter object |
| `validateParams(parameters)` | Return `{ valid, parameters, errors, warnings }`; valid parameters preserve the declared parameter keys |
| `evaluate(parameters)` | Compute results and explicit invalid-domain diagnostics without DOM access |
| `controls` | Array of known parameter keys and labels; preserve `type: select` and its string-valued options; numeric controls may declare finite increasing bounds, a positive step, and `discrete: true` when interpolation would create invalid mathematical states |
| `sweeps` | Array of numeric parameter keys, labels, and finite increasing `min`/`max` bounds; provider-declared ranges may narrow the control range to a valid domain |
| `views` | Array of `{ id, label, render(parameters, context) }`; each view has a unique safe ID and may declare `camera: true` for the shared camera control |
| `defaultView` | The ID of one of the declared views |

Each declared view must be a distinct representation of the same module state.
The forty-five installed topics supply Geometry and Graph. Composition,
logarithm, derivative, partial derivatives, gradient, directional derivative and
tangent plane also supply genuine 3D space, for 97 views: 45 Geometry, 45 Graph
and seven Spatial. Do not offer another tab that
silently returns identical geometry. `src/plot-view.js` supplies the pure
coordinate-plot renderer; `src/module-graphs.js` describes the twelve newer
topics' axes, curves, current points, units, and approximation limits. The four
foundation modules supply their own distinct graphs through `src/foundations.js`;
`src/model-registry.js` routes those implementations through the same host.
The four linear algebra modules similarly provide their pure Geometry and Graph
views through `src/linear-algebra.js`, with practical narrative data in
`src/linear-algebra-stories.js`. The shared host owns all animation and input;
these providers start no independent clock.
The probability/spread/recurrence provider lives in `src/data-iteration.js`.
The next book-guided gateway lessons use `src/book-foundations.js` and
`src/book-foundation-stories.js`: classical connectives, finite-domain
quantifiers, planar cross products and scalar discrete equilibrium stability.
Truth-valued outputs remain separate from probabilities, and finite truth
steps and whole update counts never interpolate to invented mathematical states.
The first three calculus modules use `src/calculus-fields.js` and
`src/calculus-field-stories.js`; the field topics share one analytic evaluator.
`src/local-change.js` and `src/local-change-stories.js` extend that sequence
without changing the existing provider or adding another host.

A view may declare `inspector: false` when the module's optional tools are
irrelevant there. The host hides those tools and omits their render options
while preserving their state for a return to a compatible view. A manually
chosen view remains selected through parameter edits and guided playback.

The current host renders view output as local HTML/SVG markup. Escape authored
text and attribute values; formula prose is display data, never executable code.
Evaluation and visual encoding must remain separate so that a text or table
alternative can use the same computed result.

Both `controls` and `sweeps` may be empty. A static module keeps its views,
readout, reset, and comparison pin; animation and scrubbing stay hidden when
there is no declared sweep. An editable module may omit sweeps too.

For exact quantity selection, annotate the corresponding scene marks with
space-separated `data-quantity` keys. `AtlasSemanticLinks.paint(container, keys)`
highlights those marks within the supplied instance. Grammar bindings come from
the authored symbol map; story quantities use their declared quantity keys.
Keep this exact selection distinct from the broader input/intermediate/output
stage emphasis. Do not invent a geometric counterpart for an operator or binder
that is explained only in text.

Optional host metadata includes `expression`, `unit`, `setting`, `limits`,
`presets`, `primarySweep`, `experiments`, `story`, and `ports`. Optional functions are
`readout`, `inspector`, `validateInspectorState`, `canInterpolate`, and `referenceWeight`; omit unsupported
hooks instead of supplying a nonfunction value. The existing readout adapter
returns `{ expression, stats: [{ label, value, note }], insight }` and receives
the host formatter in its context. The context also includes `baseline`, the
evaluated pinned result or `null` when no comparison is pinned. A readout may
return an optional `comparison: { baselineValue, change }` with two nonempty
strings to describe a semantic comparison, such as `False → True` or
`Unchanged`. The host uses it only while both results are valid; numeric and
undefined-state comparisons retain their default formatting otherwise. String
stat values are preserved by the shared formatter. An optional replay descriptor declares a
bounded parameter path; the host still owns its clock and pause behavior.

The registry copies and freezes definition metadata, rejects unsafe keys and
accessors, and does not execute expression strings. Local function references
remain trusted application code. This is an authoring boundary, not a sandbox
for downloaded or user-imported programs.

## Quantity ports and explicit connections

`ports` is optional declarative metadata. Omitting it, or declaring an empty
array, keeps the module usable as an independent playground. The installed
definitions come from [src/module-ports.js](../src/module-ports.js); modules
may declare their own ports using the same registry contract.

```js
ports: [
  {
    id: 'input:radius', label: 'Vector length', direction: 'input',
    key: 'radius', type: 'length', unit: 'm',
    description: 'The vector length in metres.'
  },
  {
    id: 'output:y', label: 'Vertical component', direction: 'output',
    key: 'y', type: 'length', unit: 'm',
    description: 'The signed vertical component in metres.'
  }
]
```

| Field | Contract |
|---|---|
| `id` | Unique safe local identifier, such as `input:radius`; letters, digits, colon, underscore and hyphen |
| `label` | Nonempty readable name without surrounding whitespace or control characters |
| `direction` | `input` reads a numeric parameter; `output` reads a named model result |
| `key` | Safe flat own-property name; input keys must name finite numeric default parameters |
| `type` | Lowercase quantity meaning, such as `length`, `angle`, or `population-fraction`; distinct meanings stay distinct even when both are unitless |
| `unit` | Stable ASCII unit identifier, such as `m`, `px`, `rad`, `deg`, or `1` for unitless; comparison is exact |
| `description` | Optional explanation of what the quantity measures and its interpretation |

Port records contain only these fields and no callbacks. Output keys must
name an own numeric or null result at registration. Current links require a
finite source value; a declared port does not guarantee every evaluated value
will be defined or fit a receiving range.

[src/workspace-links.js](../src/workspace-links.js) supplies pure `compatible`,
`listPairs`, and `check` helpers plus `createSession`. Types and unit identifiers
must match exactly. For example, radians do not flow into degrees without a
future explicit conversion module; a population fraction is not an event
probability simply because both use unit `1`. A source may be an input or an
output, while the receiving port must be an input. The check validates the
receiving parameter set and evaluates the receiving model before proposing
an update. It never changes, rounds, or clamps the transferred value.

A session coordinates one directional connection between two different slots.
It exposes `connect`, `restore`, `refresh`, `disconnect`, `getState`, and `destroy`; it
owns no timer or DOM. The workbench calls `refresh` after its existing changes
and applies accepted snapshots through the host controller. No cycles or
simultaneous multiple connections are supported.

Invalid range or domain values move the connection to `blocked`, preserve the
last valid receiving value, and resume when the source fits again. Editing the
receiving key disconnects. Other receiving controls and representation changes
keep the link; module identity replacement, slot removal, and navigation away
from Workbench disconnect it. The scoped
[connection panel](../src/workspace-panel.js) owns local listeners, state
messages, quantity meanings, and paced readings, and removes its resources
when destroyed.

Live links last for the current workbench visit. Explicit saved-workspace records
can preserve their descriptors alongside both module versions and parameter
sets. `restore` validates a saved descriptor against those states without
writing a new receiving value; a blocked connection remains blocked. Individual
notebook snapshots and exports keep their separate contract. Matching quantity
metadata enables an explicit experiment; the learner must still assess the
application mapping and assumptions. Registration remains trusted local code
and cannot establish that a quantity declaration is pedagogically or empirically
appropriate.

## Instance API

```js
const left = AtlasModules.createInstance('linear-model', { slot: 'left' });
const right = AtlasModules.createInstance('linear-model', {
  slot: 'right',
  parameters: { rate: 6 }
});

const edited = left.setParameters({ time: 4 });
if (edited.valid) {
  const result = left.evaluate();
  const markup = left.render(undefined, { compact: false });
  // The host presents the result and reconciles markup inside the left slot.
}

left.destroy();
// right retains its own defaults and edits.
```

| Method or property | Behavior |
|---|---|
| `id`, `slot`, `definition` | Stable instance identity and frozen module definition |
| `getParameters()` | Return a copy of the current validated state |
| `setParameters(patch)` | Validate the merged patch atomically; failure reports errors and retains the previous state |
| `evaluate()` | Evaluate a copy of this instance's state |
| `render(viewId, context)` | Render the selected view, or default view; the instance supplies its own `slot` in the context |
| `destroy()` | Invalidate the instance; repeated destruction is safe |

After destruction, state, edit, evaluation, and render calls fail. The host must
also stop its own animation and detach its input and inspector resources.
`unregister(id)` removes a module from future selection; it does not silently
change or destroy already mounted instances.

## Mounted host controller

`AtlasPlayground.mount(element, options)` returns the DOM host controller.
It is separate from the registry instance API above. Besides existing
`pause`, `refresh`, `redraw`, `selectQuantities`, `getParameters`, `getBaseline`,
and `destroy` methods, the controller supports:

```js
const edited = controller.applyParameters({ radius: 2.5 }, { immediate: false });
// edited: { valid, parameters, errors }
```

`applyParameters` validates a complete merged copy and preserves the declared
parameter keys. It rejects unknown keys, accessors, nonfinite numbers, or
failed module validation atomically, returning a copied retained state without
pausing playback. Successful writes pause receiving playback, preserve the
chosen view and comparison pin, and update the existing display follower.
They do not call the outgoing `onChange` callback, preventing connection loops.
`immediate: true` aligns the display directly; otherwise normal motion and
250 ms readable-value pacing apply. A disposed host rejects late writes.

This method enforces parameter structure. It still allows structurally valid
parameters whose mathematical outputs are unavailable, as needed for direct
failure-case exploration. The workspace link check separately requires a valid
receiving model output before calling it. Do not bypass that check when wiring
declared quantities.

### Portable view state

```js
const viewState = controller.getViewState();
// { view, camera, baseline, inspector }
const restored = controller.restoreViewState(viewState);
// { valid, errors }; mathematical parameters are applied separately
```

The selected view must be declared by the module; camera values range from
0.15 to 1. A comparison baseline is either null or a complete validated parameter
set, including structurally valid undefined-output demonstrations. Inspector
state is null unless the module supplies a pure
`validateInspectorState(state) -> { valid, state, errors }` hook and its mounted
inspector supports `getState`/`restoreState`. Unsupported fields, accessors,
unsafe keys, and nonfinite values reject before the host view changes.

Restoration pauses playback, preserves the restored representation as an
explicit choice, and emits no outgoing parameter callback. It restores camera,
pin, and inspector data without changing model parameters. Fractal inspector
state is `{ kind: 'fractal', version: 1, zoom, compare }`, where zoom is 1–27.
Chaos inspector state is `{ kind: 'chaos', version: 1, traceExpanded }`.
`AtlasSceneInspector.validateState(slug, state)` supplies the installed modules'
pure validator. Null resets a supported inspector to its default settings.
Its snapshots record the requested camera target rather than an intermediate
animation frame. A hidden inspector retains state for a return to its view.

These APIs save viewing context rather than a live playback process. Animation
speed/play state, guided predictions, and transient focus are not captured.

## Adding a module

1. Author its pure model, validation, and visual encodings with explicit units,
   domains, approximation limits, and accessible explanations.
2. Add one registration or adapter. Bundle its local script before the host
   consumes the registry; keep classic-script offline loading functional.
3. Verify that two independent instances can mount, edit, change views, pause,
   and unmount in the existing host. Adding the module must not require a new
   topic-specific branch in that host.
4. Verify invalid edits, boundary cases, reduced motion, keyboard operation,
   readable output pacing, and identity-safe local markup.
5. Add canonical card content, examples, sources, review records, and build
   integration before presenting the module as an installed teaching card.
6. Inventory the module's mathematical story, formula, scene/readout, accessible
   text and unit forms under the [notation contract](SYMBOL_NOTATION_COVERAGE.md).
   Extend definitions/readers and regression cases before closing the new batch.

Runtime registration does not bypass canonical card JSON validation, content
review, renderer/build allowlists, offline bundling, or mathematical verification.
The registry makes host integration extensible; publishing a reviewed learning
unit still has its own contract.

## Saved-state availability

Notebook snapshots record their content, model, and renderer identities and
versions. An unavailable revision remains readable and exportable as preserved
data; it must not run against whichever module happens to be installed now.
`notebook.compatibility(noteOrId)` reports `replayable`, `status`, `reason`, and
`issues`. The host must check this before replay. Current snapshots retain
parameter and computed-output validation. Corrupt stores expose their untouched
bytes through `exportRecovery()`; `status().recoveryAvailable` identifies that
separate recovery action.

Complete workspaces use [a separate portable format](WORKSPACE_FORMAT.md) and
private storage key. `src/workspace-store.js` validates and preserves named
records and atomic backups. `src/workspace-runtime.js` captures the mounted
hosts, preflights restore availability before touching them, and retains a
rollback configuration. `src/workspace-library.js` owns only the scoped save,
restore, backup, deletion-undo, and recovery controls. None reads private browser
records while generating the canonical content projection.

Exact saved module versions must be installed before restoration. Unavailable
records remain readable/exportable; import never mounts them automatically.
Restoring a valid record starts both hosts paused and does not recalculate a
new receiving value for its connection. If replacement fails, runtime rollback
attempts to rebuild the previous captured configuration and returns recovery
data if that attempt also fails. Full-workspace persistence does not complete
T15 selected exports or revision comparison, nor does it establish the T12
learning/accessibility or independent mathematical-review gates.

## Adding a concept family

Keep pure arithmetic and inert views in a provider, canonical teaching content
in `content/cards/`, and practical story data in a narrative provider. Register
providers at the model/story routing boundaries and list stable module IDs in
the installed adapter. Declare explicit numeric ports and exact grammar bindings.
Preserve dropdowns as string-valued selections; never interpolate a partition
count or function-family choice. Supply valid numeric animation sweeps separately
from controls that intentionally demonstrate an invalid domain.

Load view helpers before their providers in both the source page and embedded
build. New modules use their own stable identity/revision; existing saved module
contracts are not rewritten to add a different mathematical family. Expansion
does not promote a draft card to independently reviewed mathematics or history.

## Discovery and readable data

`card-previews.js` renders compact current-model illustrations for Explore;
`concept-atlas.js` places canonical cards in overlapping fields and projects their
explicit relationships. Neither component changes a playground instance.

`model-data.js` receives a module definition and its current parameters. The host
opens its table, pauses playback, and holds readings during motion. On settling,
it regenerates a bounded slice of the declared primary sweep with other settings
fixed. Numeric output ports supply column meanings and units; new models use the
same alternative without a topic-specific host branch. Undefined results retain
an explicit state alongside independently available quantities.

See [Concepts, fields and visual alternatives](CONCEPT_ATLAS.md) for the public
provider APIs and their limits.

## Definitions and common search (0.18.0)

`math-terms.js` supplies authored reference data, `math-index.js` projects
identified card usage, and `atlas-search.js` searches the resulting reference,
actual catalog cards and mapped areas. They read canonical content without
changing module instances, saved notebooks or workspace state. A card's scoped
vocabulary list links to the same reference, with a notation query retained
when the card supplies an exact local token. See [the index contract](MATH_INDEX.md).

New concepts keep their own stable identities and revision 1. The installed
vector, dot-product, matrix-map and determinant modules all use the existing
host, story flow, symbol bindings, readable values, data table and port rules.
Coefficient ports are scalars; vector components, lengths, scalar projections,
angles and signed/unsigned area factors retain distinct declared meanings.
Zero vectors and singular matrices are valid states. Undefined direction-dependent
auxiliary values remain null rather than invalidating the primary calculation.
No previous module revision changes in this release.

## Linear workflows (0.19.0)

`src/linear-workflows.js` supplies Linear combinations, Basis coordinates and
Matrix products, with narrative data in `src/linear-workflow-stories.js`. The
three modules follow the same routing and host contracts as the earlier topics.
The host supplies controls, motion, pacing, pins, data alternatives and cleanup;
no workflow starts a clock or changes a sibling instance.

A basis configuration can be valid while its unique-coordinate output is null.
The provider distinguishes an independent basis, dependent columns with many
solutions, a target outside the span, and numerical range limits. The graph
leaves unavailable coordinates empty and labels an input-only handle; it does
not draw a fabricated result dot. A fixed ±4 geometry frame clips long weighted
arrows explicitly while the readout keeps their actual values.

Matrix products use two declared shear families. The order selector is discrete,
and each order retains its own intermediate point and product. Exact quantity
keys `product:AB` and `product:BA` follow their mathematical order even when the
other order becomes selected. The comparison curve represents the opposite
order, not a pinned unrelated input. All three modules have revision 1; earlier
module identities and revisions remain unchanged.

## Differential calculus and shared field views (0.20.0)

`src/calculus-fields.js` supplies Chain rule, Partial derivatives and Gradient.
`src/calculus-field-stories.js` supplies their inert narrative data. Each module
has revision 1 and enters the existing registry, model/story routing, readouts,
data alternatives, semantic bindings, ports and saved-state mechanisms. The
provider starts no animation loop and owns no page-wide input listeners.

The chain family is `g(x)=ax+b`, `f(u)=u²`, with `u=g(x)` and `h=f∘g`. Its
primary output is `chainDerivative=2a(ax+b)`. The inner value, composite value,
inner derivative and outer derivative remain separately named quantities.
Bare `f`/`g` bindings identify functions; `f(u)` and `h(x)` bind the current
scalar value. The story uses positive finished panel sides and a dimensionless
setting, with coefficients/units declared in that scenario. The complete
polynomial model also permits signed inner values.

The field family is `F(x,y)=c+ax²+by²`. One pure `fieldAt` calculation supplies
height, both analytic partials, gradient norm and normalized-direction status
to contours, coordinate slices, tangents and a genuine 3D surface. Partial
derivatives plots `partialX=2ax` against x at fixed other settings. Gradient
plots `gradientNorm`, while its vector remains `(partialX,partialY)` and binds
both component keys. The scalar norm is not substituted for that vector.

Both field modules declare Geometry, Graph and Spatial views; Spatial declares
the shared camera capability. Camera projection changes the view, while x/y
remain the two independent field inputs and height is their scalar output.
These views reuse existing pin and saved-workspace handling. A saved zero
gradient retains a valid zero vector/norm and unavailable unit direction,
alongside its selected camera/view and comparison state.

Story view selection is declarative. LifeStory forwards the selected
`story.view` through StoryScenes to the provider instead of forcing Geometry.
The field stories therefore open on their real Spatial surface with a fixed
story camera. Camera and view controls remain part of the playground host.
No topic-specific story-host
branch is needed to expose the new representation.

The expanded notation gate includes the new views and story units. Zero
gradient, negative coefficients, saddles and flat fields are valid model
configurations. Unit direction is null when the gradient norm is zero; local
first-order ascent does not establish a global path or classify an arbitrary
stationary point. The general definitions retain their differentiability and
coordinate assumptions beyond these bounded quadratic examples.


## Local predictions and discrete algorithms (0.21.0)

Directional derivative, Tangent plane and Gradient descent are revision 1
modules. Their provider and narrative files are separate from the registry,
shared host, canonical cards, quantity bindings, ports and definition index.
The first two reuse `AtlasCalculusFields.fieldAt`, `surfaceMesh` and
`projectPoint`; the provider owns no independent animation loop or page-wide
input handler. Geometry, Graph and Spatial consume one evaluated state.

Directional slope multiplies the two current field partials by a unit direction
formed from the converted angle. Height, gradient components, direction
components and directional slope remain separate quantities. The tangent plane
anchors the same field at a base point and keeps predicted height, actual target
height and signed residual separate. Its Graph compares the two heights as one
finite offset changes; its Spatial view exposes the plane/surface gap.

Gradient descent uses a fixed strictly positive quadratic cost and exact whole
updates. Its iteration control declares `discrete: true`, so the common adapter
refuses to interpolate a transition when a discrete control changes. This is a
control capability, not a branch on the module ID. Provider sweeps exclude the
integer iteration; learning rate is the primary continuous sweep and the story
timeline. Changing it recomputes an exact fixed-length run from the same start.
The numbered path's connecting lines are visual aids, not fractional iterates.

Its Graph declares the vertical quantity logCost=ln(1+C), using the normalized
dimensionless cost. This shifted display retains zero and compresses large
values so that the stable part remains readable. Cost itself stays unchanged in
output, curveValue, readout, data tables, fixtures and ports. A physical cost
would require explicit reference-cost normalization before taking a logarithm;
the host performs no automatic unit conversion.

The descent module offers Geometry and Graph. It does not add a decorative 3D
tab. Both new field modules declare real Spatial views and use the existing
playground camera, pins and saved-view contracts. Their stories declare Spatial
with a fixed story camera. Large descent iterates keep their true values even
when the drawing uses clipping; cost remains distinct from gradient norm.

All existing module identities and revisions remain unchanged. The separate
sandbox adds a thirty-sixth registered example module without adding a canonical
card. New mathematical labels and story units enter the continuing notation
gate; a module's registered status alone does not qualify its mathematics,
accessibility or learning value.


## Atlas-gap modules (0.22.0)

`src/atlas-gaps.js` supplies three independent pure families: `set`,
`population-sample` and `computational-complexity`.
`src/atlas-gap-stories.js` supplies their workshop narratives and quantity links.
Canonical records, preview drawings, reference definitions and atlas membership
remain separate. The providers start no clocks and read no private storage.
The shared host owns input, motion, paced text, comparison and saved records.

All three declare Geometry and Graph. No additional Spatial tab is offered
without a distinct mathematical role. Their graphics expose actual evaluated
quantities: finite candidate labels and membership bands; selected population
bars and separate mean lines; numbered inspections, operation counts and modeled
time. The Graph keeps finite membership jumps discrete, sample/population mean
curves separate, and fixed-n time comparisons distinct from an asymptotic class.

Sample size, cyclic starting index and scan item count declare `discrete: true`;
continuous sweeps exclude those controls. Set-operation changes are discrete
selector changes. Cutoff positions, the highlighted crate value and cost per
inspection can vary smoothly without inventing partial members, fractional
observations or fractional work items.

The primary outputs are a cardinality, a sample mean and a modeled total time.
Set objects use `set:*` semantic marks, with separate numeric cardinality keys.
Sample sums, denominators, means and signed difference retain separate keys.
Chosen operation count, time per inspection and total time retain their units;
`O(n)` is explanatory notation rather than a numeric output port. Unit names or
similar field labels do not permit implicit conversion or automatic wiring.

The application has 38 canonical topic adapters. The separate square-area
sandbox registers a 39th example module without adding a canonical card. All
existing identities/revisions remain unchanged. One new pure provider does not
change the page lifecycle or create a new animation engine.
