import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Playground = require('../src/playground.js');
const Registry = require('../src/module-registry.js');
const Motion = require('../src/motion.js');
const Input = require('../src/scene-input.js');
const Readable = require('../src/readable-values.js');

// Mount the real host against a small DOM adapter. HTML parsing and pixel
// layout remain browser checks; this exercises capability and lifecycle paths.
function text(value) {
  return { nodeType: 3, nodeName: '#text', nodeValue: String(value), get textContent() { return this.nodeValue; }, cloneNode() { return text(this.nodeValue); } };
}
class Element {
  constructor(name = 'div') {
    this.nodeType = 1; this.nodeName = this.tagName = name.toUpperCase();
    this.childNodes = []; this.attrs = {}; this.dataset = {}; this.style = {};
    this.listeners = new Map(); this.selectors = new Map(); this.matches = new Map();
    this.classList = { add() {}, remove() {} }; this.isConnected = true;
  }
  get attributes() { return Object.entries(this.attrs).map(([name, value]) => ({ name, value })); }
  get firstChild() { return this.childNodes[0]; }
  get textContent() { return this.childNodes.map(child => child.textContent).join(''); }
  set textContent(value) { this.childNodes = [text(value)]; }
  get innerHTML() { return this.textContent; }
  set innerHTML(value) { this.textContent = value; }
  hasAttribute(key) { return Object.hasOwn(this.attrs, key); }
  getAttribute(key) { return this.attrs[key] ?? null; }
  setAttribute(key, value) { this.attrs[key] = String(value); }
  removeAttribute(key) { delete this.attrs[key]; }
  hasChildNodes() { return this.childNodes.length > 0; }
  append(child) { this.childNodes.push(child); }
  cloneNode() { const node = new Element(this.nodeName); node.attrs = { ...this.attrs }; node.childNodes = this.childNodes.map(child => child.cloneNode(true)); return node; }
  contains() { return false; }
  after() {}
  querySelector(selector) { return this.selectors.get(selector) || null; }
  querySelectorAll(selector) { return this.matches.get(selector) || []; }
  addEventListener(event, handler) { const listeners = this.listeners.get(event) || new Set(); listeners.add(handler); this.listeners.set(event, listeners); }
  removeEventListener(event, handler) { this.listeners.get(event)?.delete(handler); }
  focus() {}
  scrollIntoView() {}
}
function harness(withControl = false, moduleOptions = {}) {
  const registry = Registry.createRegistry();
  registry.register({
    id: 'static-test', version: '1', title: 'Unit square',
    defaults: () => withControl ? { q: 2 } : {},
    validateParams(parameters) {
      const valid = withControl ? Object.keys(parameters).length === 1 && Number.isFinite(parameters.q) : Object.keys(parameters).length === 0;
      return { valid, parameters: { ...parameters }, errors: valid ? [] : [{ field: 'parameters', message: 'Invalid parameters.' }], warnings: [] };
    },
    evaluate: parameters => ({ valid: true, output: withControl ? parameters.q ** 2 : 1 }),
    controls: withControl ? [{ key: 'q', label: 'Side', type: 'number', min: 0, max: 8 }] : [], sweeps: [],
    views: ['geometry', 'table'].map(id => ({ id, label: id, render: parameters => '<svg data-view="' + id + '"><title>Area ' + (withControl ? parameters.q ** 2 : 1) + '</title></svg>' })),
    defaultView: 'geometry',
    readout: (_parameters, result) => ({ expression: 'Area = ' + result.output, stats: [{ label: 'AREA', value: result.output, note: 'square units' }], insight: 'The area is inspectable without an automatic sweep.' }),
    ...moduleOptions
  });
  function createPanel(slot = 'static-slot') {
    const root = new Element(), surface = new Element(), numeric = new Element(), details = new Element('details');
    root.dataset.slot = slot; numeric.parentElement = details;
    root.selectors.set('.lab-surface', surface); root.selectors.set('.output', numeric);
    root.selectors.set('[data-reset]', new Element('button')); root.selectors.set('[data-capture]', new Element('button'));
    for (const selector of ['.visual-stage', '.visual-toolbar', '.view-switch', '.motion-toggle', '.pin-toggle', '.timeline', '.timeline input', '.timeline-label', '.timeline-value', '.story-content', '.journey-status', '.sweep-label', '.speed-label', '.sweep-select', '.speed-select', '.camera-control', '.camera-control input', '.focus-toggle', '.experiment-deck', '.scale-chip', '.interaction-hint', '.live-readout', '.lab-insight', '.lab-status', '.model-data', '.model-data-content', '.model-data-status']) surface.selectors.set(selector, new Element());
    surface.querySelector('.story-content').selectors.set('.story-run', new Element('button'));
    const views = registry.get('static-test').views.map(view => { const button = new Element('button'); button.dataset.view = view.id; return button; });
    surface.matches.set('[data-view]', views);
    if (withControl) { const control = new Element('input'); control.type = 'number'; control.dataset.param = 'q'; control.value = '2'; root.matches.set('[data-param]', [control]); }
    return { root, surface, numeric, views };
  }
  const panel = createPanel();
  const document = new Element(); document.activeElement = null; document.createElement = name => new Element(name);
  const media = [], frames = [], cancelledFrames = new Set();
  const globals = { AtlasModules: registry, AtlasMotion: Motion, AtlasSceneInput: Input, AtlasReadableValues: Readable, AtlasFractalLens: undefined, document,
    matchMedia() { const query = new Element(); query.matches = false; media.push(query); return query; },
    requestAnimationFrame(callback) { frames.push(callback); return frames.length; }, cancelAnimationFrame(id) { cancelledFrames.add(id); } };
  const before = Object.fromEntries(Object.keys(globals).map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const [key, value] of Object.entries(globals)) globalThis[key] = value;
  const parameters = registry.get('static-test').defaults();
  return { registry, ...panel, createPanel, parameters, document, media, frames, cancelledFrames,
    restore() { for (const [key, descriptor] of Object.entries(before)) if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key]; }
  };
}

test('a module with no controls or sweeps mounts, changes views, pins, resets, and cleans up without animation work', () => {
  const h = harness(); let host;
  try {
    const markup = Playground.markup('static-test', {});
    assert.doesNotMatch(markup, /data-param=/);
    assert.match(markup, /Inspect the model/);
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    for (const selector of ['.motion-toggle', '.sweep-label', '.speed-label', '.timeline']) {
      assert.equal(h.surface.querySelector(selector).hidden, true, selector);
      assert.equal(h.surface.querySelector(selector).style.display, 'none', selector + ' stays hidden with shared styles');
    }
    for (const selector of ['.motion-toggle', '.sweep-select', '.speed-select', '.timeline input']) assert.equal(h.surface.querySelector(selector).disabled, true, selector);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /Area 1/);
    assert.match(h.surface.querySelector('.live-readout').innerHTML, /Area = 1/);
    assert.equal(h.surface.querySelector('.pin-toggle').disabled, undefined, 'Pin stays available');
    h.surface.querySelector('.pin-toggle').onclick(); assert.deepEqual(host.getBaseline(), {});
    h.views[1].onclick(); assert.match(h.surface.querySelector('.visual-stage').innerHTML, /data-view="table"/);
    assert.equal(h.views[1].getAttribute('aria-pressed'), 'true');
    h.root.querySelector('[data-reset]').onclick(); assert.equal(host.getBaseline(), null);
    h.surface.querySelector('.motion-toggle').onclick();
    h.surface.querySelector('.timeline input').oninput();
    host.pause(); host.refresh();
    assert.deepEqual(host.getParameters(), {});
    assert.equal(h.frames.length, 0, 'Mount, hidden transport, view changes, and pin/reset must not schedule frames');
    host.destroy(); host = null;
    assert.ok([...h.document.listeners.values()].every(listeners => listeners.size === 0));
    assert.ok(h.media.every(query => [...query.listeners.values()].every(listeners => listeners.size === 0)));
  } finally { host?.destroy(); h.restore(); }
});

test('manual controls still work when a module intentionally declares no automatic sweeps', () => {
  const h = harness(true); let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    const control = h.root.querySelectorAll('[data-param]')[0];
    control.value = '4'; control.oninput();
    assert.deepEqual(host.getParameters(), { q: 4 });
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /Area 16/);
    assert.match(h.surface.querySelector('.live-readout').innerHTML, /Area = 16/);
    assert.equal(h.surface.querySelector('.motion-toggle').disabled, true);
    assert.equal(h.frames.length, 0, 'A direct numeric edit is immediate without starting an automatic sweep');
  } finally { host?.destroy(); h.restore(); }
});

test('a custom inspector can redraw its own view without fractal globals and is destroyed with its host', () => {
  let emphasis = 'Initial inspection', changeView, destroyed = 0, renders = 0;
  const h = harness(false, {
    views: [{ id: 'geometry', label: 'Inspection', render(_parameters, context) { renders++; return '<svg><title>' + context.inspectionLabel + '</title></svg>'; } }],
    inspector(_element, options) {
      changeView = options.onViewChange;
      return {
        viewOptions: () => ({ inspectionLabel: emphasis }),
        update() {}, settle() {}, destroy() { destroyed++; }
      };
    }
  });
  let host;
  try {
    assert.equal(globalThis.AtlasFractalLens, undefined);
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    const stage = h.surface.querySelector('.visual-stage'), initialRenders = renders;
    assert.match(stage.innerHTML, /Initial inspection/);
    emphasis = 'Selected dimension'; changeView();
    assert.ok(renders > initialRenders, 'The generic inspector callback uses the normal module renderer');
    assert.match(stage.innerHTML, /Selected dimension/);
    assert.deepEqual(host.getParameters(), {}, 'Inspector viewing state does not become a model parameter');
    assert.equal(h.frames.length, 0);
    host.destroy(); host = null;
    assert.equal(destroyed, 1, 'Host disposal delegates inspector cleanup');
    const finalRenders = renders;
    emphasis = 'Late callback'; changeView();
    assert.equal(renders, finalRenders, 'A callback after disposal cannot redraw the removed module');
    assert.doesNotMatch(stage.innerHTML, /Late callback/);
  } finally { host?.destroy(); h.restore(); }
});

test('a generic replay uses its declared subrange, stops once, and leaves a sibling mount unchanged', () => {
  const replays = [], visited = []; let destroyed = 0;
  const h = harness(true, {
    sweeps: [{ key: 'q', label: 'Side', min: 0, max: 8 }],
    replay: { key: 'q', from: 3, to: 5, mode: 'once' },
    inspector(_element, options) {
      replays.push(options.onReplay);
      return { viewOptions: () => ({}), update() {}, settle() {}, destroy() { destroyed++; } };
    }
  });
  const siblingPanel = h.createPanel('sibling-slot'), siblingParameters = { q: 7 };
  let host, sibling;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters, onChange: () => visited.push(h.parameters.q) });
    sibling = Playground.mount(siblingPanel.root, { slug: 'static-test', parameters: siblingParameters });
    visited.length = 0;
    replays[0]();
    assert.equal(host.getParameters().q, 3, 'Replay starts at its authored value rather than the sweep minimum');
    assert.equal(h.root.dataset.motion, 'playing');
    let frame = 0, time = performance.now() + 100;
    while (frame < h.frames.length && frame < 200) { h.frames[frame++](time); time += 100; }
    assert.equal(frame, h.frames.length, 'The one-way replay leaves no next frame queued');
    assert.ok(frame < 200);
    assert.equal(host.getParameters().q, 5, 'Replay finishes at its authored value rather than the sweep maximum');
    assert.equal(h.root.dataset.motion, 'paused');
    assert.ok(visited.length > 3 && visited.every(q => q >= 3 && q <= 5));
    assert.deepEqual(sibling.getParameters(), { q: 7 });
    assert.equal(siblingPanel.root.dataset.motion, 'paused');
    assert.match(siblingPanel.surface.querySelector('.visual-stage').innerHTML, /Area 49/);
    host.destroy(); host = null; sibling.destroy(); sibling = null;
    assert.equal(destroyed, 2);
  } finally { host?.destroy(); sibling?.destroy(); h.restore(); }
});

test('an explicitly selected view survives manual changes, pinning, reset, refresh, and guided playback', () => {
  const h = harness(true, {
    sweeps: [{ key: 'q', label: 'Side', min: 0, max: 8 }],
    experiments: [{ id: 'grow', title: 'Grow the square', kicker: 'Area', question: 'What changes?', prediction: [], answerId: 'larger', explanation: 'The square grew.', insight: 'Side and area differ.', start: { q: 2 }, finish: { q: 4 }, view: 'geometry', sweep: { key: 'q', from: 2, to: 4, durationMs: 300 } }]
  });
  let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    const stage = h.surface.querySelector('.visual-stage'), assertTable = () => {
      assert.match(stage.innerHTML, /data-view="table"/);
      assert.equal(h.views[1].getAttribute('aria-pressed'), 'true');
      assert.equal(h.views[0].getAttribute('aria-pressed'), 'false');
      assert.equal(h.surface.querySelector('.view-switch').getAttribute('aria-label'), 'Visualization mode. table selected.');
    };
    h.views[1].onclick(); assertTable();
    assert.equal(h.surface.querySelector('.lab-status').textContent, 'table view selected.');
    const control = h.root.querySelectorAll('[data-param]')[0];
    control.value = '5'; control.oninput(); assertTable();
    h.surface.querySelector('.pin-toggle').onclick(); assertTable();
    assert.deepEqual(host.getBaseline(), { q: 5 });
    h.root.querySelector('[data-reset]').onclick(); assertTable();
    assert.deepEqual(host.getParameters(), { q: 2 });
    assert.equal(host.getBaseline(), null, 'Reset restores model values while retaining the chosen perspective');
    host.refresh(); assertTable();
    h.surface.querySelector('.story-content').querySelector('.story-run').onclick(); assertTable();
    assert.equal(h.root.dataset.motion, 'playing');
    let frame = 0, time = performance.now() + 100;
    while (frame < h.frames.length && frame < 20) { h.frames[frame++](time); time += 100; assertTable(); }
    assert.equal(frame, h.frames.length, 'Guided playback completes without changing the view');
    assert.deepEqual(host.getParameters(), { q: 4 });
    assert.equal(h.root.dataset.motion, 'paused');
  } finally { host?.destroy(); h.restore(); }
});

test('a story may suggest a supported view until the user chooses a perspective', () => {
  const h = harness(false, {
    experiments: [{ id: 'inspect', title: 'Compare the table', kicker: 'Area', question: 'What stays?', prediction: [], answerId: 'same', explanation: 'Same value.', insight: 'Another view.', start: {}, finish: {}, view: 'table' }]
  });
  let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    h.surface.querySelector('.story-content').querySelector('.story-run').onclick();
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /data-view="table"/);
    h.views[0].onclick();
    h.surface.querySelector('.story-content').querySelector('.story-run').onclick();
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /data-view="geometry"/);
  } finally { host?.destroy(); h.restore(); }
});

test('view metadata hides an irrelevant inspector without discarding its state or allowing it to repaint another view', () => {
  let inspectorElement, changeView, inspection = 'close-up', fastPaints = 0, destroyed = 0;
  const h = harness(false, {
    views: [
      { id: 'geometry', label: 'Shape', render: (_parameters, context) => '<svg data-view="geometry"><title>' + context.inspection + '</title></svg>' },
      { id: 'graph', label: 'Graph', inspector: false, render: (_parameters, context) => '<svg data-view="graph"><title>' + (context.inspection || 'No camera') + '</title></svg>' }
    ],
    inspector(element, options) {
      inspectorElement = element; changeView = options.onViewChange;
      return { viewOptions: () => ({ inspection }), update() {}, settle() {}, paintView() { fastPaints++; return false; }, destroy() { destroyed++; } };
    }
  });
  let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    assert.equal(inspectorElement.hidden, false);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /close-up/);
    h.views[1].onclick();
    assert.equal(inspectorElement.hidden, true);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /No camera/);
    inspection = 'saved zoom'; changeView();
    assert.equal(fastPaints, 0, 'An inactive inspector cannot repaint the graph with its shape renderer');
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /data-view="graph"/);
    h.views[0].onclick();
    assert.equal(inspectorElement.hidden, false);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /saved zoom/);
    changeView();
    assert.equal(fastPaints, 1, 'The restored inspector retains its normal repaint path');
    host.destroy(); host = null;
    assert.equal(destroyed, 1);
  } finally { host?.destroy(); h.restore(); }
});

test('invalid external patches are atomic and do not interrupt target playback or invoke accessors', () => {
  const h = harness(true, {
    sweeps: [{ key: 'q', label: 'Side', min: 0, max: 8 }],
    validateParams(parameters) {
      const valid = Object.keys(parameters).length === 1 && Number.isFinite(parameters.q) && parameters.q >= 0 && parameters.q <= 8;
      return { valid, parameters: { ...parameters }, errors: valid ? [] : [{ field: 'q', message: 'Side must be between zero and eight.' }] };
    }
  });
  let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    h.surface.querySelector('.motion-toggle').onclick();
    assert.equal(h.root.dataset.motion, 'playing');
    let accessorReads = 0;
    const accessor = Object.defineProperty({}, 'q', { enumerable: true, get() { accessorReads++; return 4; } });
    for (const patch of [{ q: NaN }, { q: Infinity }, { q: 9 }, { other: 3 }, { q: 3, other: 1 }, { q: null }, [], null, accessor]) {
      const result = host.applyParameters(patch);
      assert.equal(result.valid, false);
      assert.ok(result.errors.length);
      assert.deepEqual(result.parameters, { q: 2 });
      result.parameters.q = 7;
      assert.deepEqual(host.getParameters(), { q: 2 });
      assert.equal(h.root.dataset.motion, 'playing', 'A rejected link cannot stop a running experiment');
      assert.equal(h.frames.length, 1, 'Rejected writes do not create animation work');
    }
    assert.equal(accessorReads, 0);
    assert.equal(h.cancelledFrames.has(1), false, 'The existing playback frame remains scheduled');
  } finally { host?.destroy(); h.restore(); }
});

test('external parameter edits pause playback, preserve view and comparison, and never notify or affect a sibling', () => {
  const h = harness(true, { sweeps: [{ key: 'q', label: 'Side', min: 0, max: 8 }] });
  const siblingPanel = h.createPanel('sibling-slot'), siblingParameters = { q: 7 };
  let host, sibling, changes = 0;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters, onChange() { changes++; } });
    sibling = Playground.mount(siblingPanel.root, { slug: 'static-test', parameters: siblingParameters });
    h.views[1].onclick();
    h.surface.querySelector('.pin-toggle').onclick();
    h.surface.querySelector('.motion-toggle').onclick();
    changes = 0;
    const result = host.applyParameters({ q: 4 }, { immediate: true });
    assert.deepEqual(result, { valid: true, parameters: { q: 4 }, errors: [] });
    assert.equal(h.cancelledFrames.has(1), true, 'A valid incoming edit cancels the old playback frame');
    assert.equal(h.root.dataset.motion, 'paused');
    assert.equal(h.surface.querySelector('.motion-toggle').getAttribute('aria-pressed'), 'false');
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /data-view="table"/);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML, /Area 16/);
    assert.deepEqual(host.getBaseline(), { q: 2 });
    assert.equal(changes, 0, 'Programmatic target writes cannot recurse through the outgoing change callback');
    result.parameters.q = 6;
    assert.deepEqual(host.getParameters(), { q: 4 }, 'The returned state is a copy');
    assert.deepEqual(sibling.getParameters(), { q: 7 });
    assert.match(siblingPanel.surface.querySelector('.visual-stage').innerHTML, /Area 49/);
  } finally { host?.destroy(); sibling?.destroy(); h.restore(); }
});

test('successive linked targets reuse one smooth follower and keep numerical text paced until settling', () => {
  const rendered = [];
  const h = harness(true, { views: [{ id: 'geometry', label: 'Shape', render(parameters) { rendered.push(parameters.q); return '<svg><title>Area ' + parameters.q ** 2 + '</title></svg>'; } }] });
  let host, changes = 0;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters, onChange() { changes++; } });
    changes = 0;
    const stage = h.surface.querySelector('.visual-stage'), readout = h.surface.querySelector('.live-readout');
    for (const q of [3, 4, 5]) assert.equal(host.applyParameters({ q }).valid, true);
    assert.equal(h.frames.length, 1, 'New targets replace the existing follower target instead of starting more clocks');
    assert.match(stage.innerHTML, /Area 4/);
    assert.match(readout.innerHTML, /Area = 4/);
    h.frames[0](performance.now() + 16);
    assert.equal(h.frames.length, 2);
    assert.ok(rendered.at(-1) > 2 && rendered.at(-1) < 5, 'The renderer receives a continuous intermediate value');
    assert.match(readout.innerHTML, /Area = 4/, 'The short display frame does not force another numeric text update');
    assert.equal(host.applyParameters({ q: 6 }).valid, true);
    assert.equal(h.frames.length, 2, 'An in-flight update reuses its already queued next frame');
    assert.equal(h.cancelledFrames.has(2), false, 'Incoming updates never settle and restart the follower');
    h.frames[1](performance.now() + 500);
    assert.equal(h.frames.length, 2, 'The follower stops once it reaches the latest exact target');
    assert.deepEqual(host.getParameters(), { q: 6 });
    assert.match(stage.innerHTML, /Area 36/);
    assert.match(readout.innerHTML, /Area = 36/);
    assert.equal(changes, 0);
  } finally { host?.destroy(); h.restore(); }
});

test('external edits validate parameter structure separately from mathematical output availability', () => {
  const h = harness(true, { evaluate: parameters => ({ valid: parameters.q !== 0, output: parameters.q === 0 ? null : 1 / parameters.q }) });
  let host;
  try {
    host = Playground.mount(h.root, { slug: 'static-test', parameters: h.parameters });
    const result = host.applyParameters({ q: 0 }, { immediate: true });
    assert.equal(result.valid, true, 'The host retains an allowed parameter with an undefined mathematical output');
    assert.deepEqual(host.getParameters(), { q: 0 });
    assert.match(h.surface.querySelector('.live-readout').innerHTML, /Undefined/);
    const removed = host; host.destroy(); host = null;
    assert.equal(removed.applyParameters({ q: 1 }).valid, false, 'A disposed host cannot accept a late link write');
    assert.deepEqual(removed.getParameters(), { q: 0 });
  } finally { host?.destroy(); h.restore(); }
});

test('view state round-trips representation, camera and comparison without changing parameters, notifying, or resuming playback', () => {
  const h=harness(true,{sweeps:[{key:'q',label:'Side',min:0,max:8}]});let host,changes=0;
  try{
    host=Playground.mount(h.root,{slug:'static-test',parameters:h.parameters,onChange(){changes++;}});
    h.views[1].onclick();
    const camera=h.surface.querySelector('.camera-control input');camera.value='.82';camera.oninput({target:camera});
    h.surface.querySelector('.pin-toggle').onclick();
    host.applyParameters({q:4},{immediate:true});
    const saved=host.getViewState();
    assert.deepEqual(saved,{view:'table',camera:.82,baseline:{q:2},inspector:null});
    h.views[0].onclick();camera.value='.4';camera.oninput({target:camera});h.surface.querySelector('.pin-toggle').onclick();
    h.surface.querySelector('.motion-toggle').onclick();changes=0;
    assert.deepEqual(host.restoreViewState(saved),{valid:true,errors:[]});
    assert.deepEqual(host.getViewState(),saved);assert.deepEqual(host.getParameters(),{q:4});
    assert.equal(h.root.dataset.motion,'paused');assert.equal(camera.value,'0.82');
    assert.equal(h.surface.querySelector('.motion-toggle').getAttribute('aria-pressed'),'false');
    assert.equal(h.views[1].getAttribute('aria-pressed'),'true');assert.equal(changes,0);
    saved.baseline.q=7;assert.deepEqual(host.getBaseline(),{q:2},'Returned pins are independent copies');
    host.applyParameters({q:5},{immediate:true});assert.equal(h.views[1].getAttribute('aria-pressed'),'true');
  }finally{host?.destroy();h.restore();}
});

test('invalid complete view states preserve a running view atomically and never read accessors',()=>{
  const h=harness(true,{sweeps:[{key:'q',label:'Side',min:0,max:8}],validateParams(parameters){const valid=Object.keys(parameters).length===1&&Number.isFinite(parameters.q)&&parameters.q>=0&&parameters.q<=8;return{valid,parameters:{...parameters},errors:valid?[]:[{message:'Use side zero to eight.'}]};}});let host,reads=0;
  try{
    host=Playground.mount(h.root,{slug:'static-test',parameters:h.parameters});h.views[1].onclick();h.surface.querySelector('.pin-toggle').onclick();h.surface.querySelector('.motion-toggle').onclick();
    const before=host.getViewState(),accessor=Object.defineProperty({...before},'camera',{enumerable:true,get(){reads++;return .9;}});
    const bad=[null,[],{...before,extra:true},{...before,view:'missing'},{...before,camera:1.01},{...before,camera:NaN},{...before,camera:.14},{...before,baseline:{q:9}},{...before,baseline:{}},{...before,baseline:{q:3,extra:1}},{...before,inspector:{kind:'unknown'}},accessor];
    for(const input of bad){assert.equal(host.restoreViewState(input).valid,false);assert.deepEqual(host.getViewState(),before);assert.equal(h.root.dataset.motion,'playing');}
    assert.equal(reads,0);assert.equal(h.cancelledFrames.has(1),false,'Rejected state cannot stop the current animation');
    assert.equal(h.frames.length,1);
  }finally{host?.destroy();h.restore();}
});

test('view restoration uses a module-owned inspector state contract and suppresses adapter callbacks',()=>{
  let inspection={zoom:1},callbacks;
  const h=harness(true,{
    validateInspectorState(state){return state===null?{valid:true,state:null,errors:[]}:state&&Object.keys(state).length===1&&Number.isFinite(state.zoom)&&state.zoom>=1&&state.zoom<=27?{valid:true,state:{...state},errors:[]}:{valid:false,state:null,errors:[{message:'Bad zoom.'}]};},
    inspector(_element,options){callbacks=options;return{getState:()=>({...inspection}),restoreState(state){inspection=state?{...state}:{zoom:1};options.onViewChange();options.onParameters({q:99});return{valid:true,state,errors:[]};},viewOptions:()=>({inspection:inspection.zoom}),update(){},settle(){},destroy(){}};},
    views:[{id:'geometry',label:'Shape',render:(_p,context)=>'<svg><title>Zoom '+context.inspection+'</title></svg>'},{id:'table',label:'Graph',inspector:false,render:()=>'<svg><title>Graph</title></svg>'}]
  });let host,changes=0;
  try{
    host=Playground.mount(h.root,{slug:'static-test',parameters:h.parameters,onChange(){changes++;}});changes=0;
    const state={view:'geometry',camera:.9,baseline:{q:0},inspector:{zoom:9}};
    assert.equal(host.restoreViewState(state).valid,true);assert.deepEqual(host.getParameters(),{q:2});assert.equal(changes,0);
    assert.match(h.surface.querySelector('.visual-stage').innerHTML,/Zoom 9/);
    const returned=host.getViewState();returned.inspector.zoom=27;assert.equal(host.getViewState().inspector.zoom,9);
    assert.equal(host.restoreViewState({...state,inspector:{zoom:99}}).valid,false);assert.equal(host.getViewState().inspector.zoom,9);
    assert.equal(host.restoreViewState({...state,view:'table'}).valid,true);assert.equal(host.getViewState().inspector.zoom,9,'Hidden inspector state remains available');
    callbacks.onViewChange();assert.match(h.surface.querySelector('.visual-stage').innerHTML,/Graph/);
    assert.equal(host.restoreViewState({...state,inspector:null}).valid,true);assert.equal(host.getViewState().inspector.zoom,1);
  }finally{host?.destroy();h.restore();}
});

test('comparison pins may preserve an undefined demonstration and disposed hosts reject restoration',()=>{
  const h=harness(true,{evaluate:parameters=>({valid:parameters.q!==0,output:parameters.q===0?null:1/parameters.q})});let host;
  try{
    host=Playground.mount(h.root,{slug:'static-test',parameters:h.parameters});
    const state={view:'table',camera:.65,baseline:{q:0},inspector:null};
    assert.equal(host.restoreViewState(state).valid,true);assert.deepEqual(host.getViewState().baseline,{q:0});
    host.destroy();assert.equal(host.restoreViewState({...state,camera:.8}).valid,false);assert.deepEqual(host.getViewState(),state);host=null;
  }finally{host?.destroy();h.restore();}
});
