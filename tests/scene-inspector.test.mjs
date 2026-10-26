import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Inspector = require('../src/scene-inspector.js');
const Readable = require('../src/readable-values.js');
const Discovery = require('../src/discovery.js');
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} ≈ ${expected}`);

test('the fractal inspector owns its optional camera paint hook and stops it on destruction', () => {
  const paints = [], stage = {};
  const context = vm.createContext({ AtlasFractalLens: { paint(container, settings) { paints.push({ container, settings }); return true; } } });
  vm.runInContext(fs.readFileSync(new URL('../src/scene-inspector.js', import.meta.url), 'utf8'), context);
  const host = doc.createElement('section'), motion = controlledMotion();
  const inspector = context.AtlasSceneInspector.mount(host, { slug: 'fractal-geometry', readable: clockReadable(), motion });
  assert.equal(inspector.paintView(stage), true);
  assert.equal(paints[0].container, stage);
  assert.equal(paints[0].settings.zoom, 1);
  motion.emit(9, true);
  assert.equal(inspector.paintView(stage), true);
  assert.equal(paints[1].settings.zoom, 9);
  inspector.destroy();
  assert.equal(inspector.paintView(stage), false);
  assert.equal(paints.length, 2);
});

class Text {
  constructor(value) { this.nodeType = 3; this.nodeValue = String(value); }
  get textContent() { return this.nodeValue; }
}
class Element {
  constructor(tag, doc) { this.tagName = tag; this.ownerDocument = doc; this.nodeType = 1; this.childNodes = []; this.attrs = {}; this.listeners = new Map(); this.className = ''; this.classList = { add: name => { this.className += ' ' + name; } }; }
  get firstChild() { return this.childNodes[0]; }
  get textContent() { return this.childNodes.map(child => child.textContent).join(''); }
  set textContent(value) { this.childNodes = [new Text(value)]; }
  append(...children) { this.childNodes.push(...children); }
  replaceChildren(...children) { this.childNodes = [...children]; }
  setAttribute(name, value) { this.attrs[name] = String(value); }
  getAttribute(name) { return this.attrs[name] ?? null; }
  addEventListener(event, callback) { const entries = this.listeners.get(event) || []; entries.push(callback); this.listeners.set(event, entries); }
  removeEventListener(event, callback) { this.listeners.set(event, (this.listeners.get(event) || []).filter(entry => entry !== callback)); }
  dispatch(event) { for (const callback of this.listeners.get(event) || []) callback({ target: this }); }
}
const doc = { createElement(tag) { return new Element(tag, this); } };
const find = (host, attribute, value = '') => {
  if (host.attrs?.[attribute] === value) return host;
  for (const child of host.childNodes || []) { const match = find(child, attribute, value); if (match) return match; }
  return null;
};
function clockReadable() {
  let time = 0;
  return { ...Readable, advance(value) { time += value; }, createPacer() { return Readable.createPacer({ now: () => time }); } };
}
function controlledMotion() {
  let frame, pending = null, current = { zoom: 1 }, destroyed = false;
  return {
    createFollower(options) { frame = options.onFrame; return { setTarget(next) { pending = next; }, settle() { if (pending) { current = pending; pending = null; frame(current, { settled: true }); } }, destroy() { destroyed = true; pending = null; } }; },
    emit(zoom, settled = false) { if (!destroyed) { current = { zoom }; frame(current, { settled }); } },
    target() { return pending; }, destroyed() { return destroyed; }
  };
}

test('inspector loads offline without creating a document or running a clock', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/scene-inspector.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasSceneInspector.supported('chaos-theory'), true);
  assert.equal(context.AtlasSceneInspector.supported('fractal-geometry'), true);
  assert.equal(context.AtlasSceneInspector.supported('probability'), false);
  const host = { hidden: false };
  const inspector = context.AtlasSceneInspector.mount(host, { slug: 'probability' });
  assert.equal(host.hidden, true);
  assert.equal(JSON.stringify(inspector.viewOptions()), '{}');
  inspector.update({ chance: .5 }); inspector.settle(); inspector.destroy();
});

test('logarithmic controls reach exact powers of three and clamp invalid view state', () => {
  for (const [level, zoom] of [[0, 1], [1, 3], [2, 9], [3, 27]]) {
    near(Inspector.zoomFromLevel(level), zoom); near(Inspector.levelFromZoom(zoom), level);
  }
  for (const level of [0, .01, .5, 1.25, 2.7, 3]) near(Inspector.levelFromZoom(Inspector.zoomFromLevel(level)), level);
  assert.equal(Inspector.zoomFromLevel(-1), 1); assert.equal(Inspector.zoomFromLevel(99), 27);
  for (const invalid of [NaN, Infinity, undefined, '2']) { assert.equal(Inspector.zoomFromLevel(invalid), 1); assert.equal(Inspector.levelFromZoom(invalid), 0); }
});

test('the precision snapshot separates tiny initial differences from current divergence', () => {
  for (const delta of [.000001, .0001, .01]) {
    const parameters = { seed: .35, delta, generation: 28, rate: 3.8 };
    const result = Discovery.evaluate('chaos-theory', parameters), values = Inspector.chaosSnapshot(parameters, result);
    near(values.startA, .35); near(values.startB, .35 + delta); near(values.initialGap, delta);
    near(values.currentGap, result.output); near(values.amplification, result.output / delta);
    assert.notEqual(Readable.format(values.startA, { settled: true, precision: 7 }), Readable.format(values.startB, { settled: true, precision: 7 }));
  }
  assert.equal(Inspector.chaosSnapshot({}, {}).amplification, null);
  assert.ok(Object.isFrozen(Inspector.chaosSnapshot({}, {})));
});

test('zoom updates are smooth view-only callbacks, numbers are paced, and refinement is explicit', () => {
  const host = doc.createElement('section'), readable = clockReadable(), motion = controlledMotion(), changes = [];
  let viewChanges = 0;
  const inspector = Inspector.mount(host, { slug: 'fractal-geometry', readable, motion, onViewChange() { viewChanges++; }, onParameters(change) { changes.push(change); } });
  assert.equal(viewChanges, 0, 'Mount must not draw a scene before its owner is ready.');
  inspector.update({ depth: 3, length: 2 }, { settled: true });
  const output = find(host, 'data-lens-value'), slider = find(host, 'data-lens-zoom'), refine = find(host, 'data-inspector-action', 'refine');
  const outputTextNode = output.firstChild;
  slider.value = '2'; slider.dispatch('input');
  assert.deepEqual(motion.target(), { zoom: 9 });
  assert.deepEqual(inspector.viewOptions(), { lens: { zoom: 1 } });
  motion.emit(3);
  assert.deepEqual(inspector.viewOptions(), { lens: { zoom: 3 } });
  assert.equal(viewChanges, 1);
  assert.equal(output.textContent, '1×', 'Geometry moves between reading updates.');
  readable.advance(250); motion.emit(6);
  assert.equal(output.textContent, '6×');
  inspector.settle();
  assert.equal(output.textContent, '9×');
  assert.equal(output.firstChild, outputTextNode, 'Stable numeric text nodes avoid replacement flashes.');
  assert.deepEqual(changes, [], 'Camera controls never write mathematical parameters.');
  refine.dispatch('click'); assert.deepEqual(changes, [{ depth: 5 }]);
  inspector.update({ depth: 5, length: 2 }, { settled: true });
  assert.equal(refine.hidden, true); assert.equal(refine.disabled, true);
  const beforeDestroy = viewChanges;
  inspector.destroy(); slider.dispatch('input'); motion.emit(20);
  assert.equal(viewChanges, beforeDestroy); assert.equal(motion.destroyed(), true); assert.equal(host.hidden, true);
});

test('chaos statistics keep starts precise, pace live values, and replay through the owning player', () => {
  const host = doc.createElement('section'), readable = clockReadable(); let replayed = 0;
  const inspector = Inspector.mount(host, { slug: 'chaos-theory', readable, models: Discovery, onReplay() { replayed++; } });
  const start = { seed: .35, delta: .000001, rate: 3.8, generation: 0 };
  inspector.update(start, { settled: true });
  const startA = find(host, 'data-chaos-value', 'startA'), startB = find(host, 'data-chaos-value', 'startB');
  const gap = find(host, 'data-chaos-value', 'currentGap');
  assert.equal(startA.textContent, '0.35'); assert.equal(startB.textContent, '0.350001');
  const initial = gap.textContent, gapText = gap.firstChild;
  inspector.update({ ...start, generation: 25 }, { settled: false });
  assert.equal(gap.textContent, initial);
  readable.advance(250); inspector.update({ ...start, generation: 25 }, { settled: false });
  assert.notEqual(gap.textContent, initial); assert.equal(gap.firstChild, gapText);
  find(host, 'data-inspector-action', 'replay-divergence').dispatch('click'); assert.equal(replayed, 1);
  assert.deepEqual(inspector.viewOptions(), {});
  inspector.destroy();
});

test('comparing fractal repeats changes only viewing state and keeps the camera zoom', () => {
  const host=doc.createElement('section'),readable=clockReadable(),motion=controlledMotion(),changes=[];
  let viewChanges=0;
  const inspector=Inspector.mount(host,{slug:'fractal-geometry',readable,motion,onViewChange(){viewChanges++;},onParameters:change=>changes.push(change)});
  inspector.update({depth:4,length:2},{settled:true});
  const compare=find(host,'data-inspector-action','compare-repeats');
  compare.dispatch('click');
  assert.equal(compare.getAttribute('aria-pressed'),'true');
  assert.deepEqual(inspector.viewOptions(),{lens:{zoom:1,compare:true}});
  const slider=find(host,'data-lens-zoom');slider.value='2';slider.dispatch('input');inspector.settle();
  assert.deepEqual(inspector.viewOptions(),{lens:{zoom:9,compare:true}});
  compare.dispatch('click');
  assert.deepEqual(inspector.viewOptions(),{lens:{zoom:9}});
  assert.equal(viewChanges,3);assert.deepEqual(changes,[]);
  inspector.destroy();
});

test('one-generation stepping exposes the completed recurrence without changing either chosen start', () => {
  const host=doc.createElement('section'),readable=clockReadable(),changes=[];
  const inspector=Inspector.mount(host,{slug:'chaos-theory',readable,models:Discovery,onParameters:change=>changes.push(change)});
  const parameters={seed:.35,delta:.000001,rate:3.8,generation:0};
  inspector.update(parameters,{settled:true});
  const next=find(host,'data-inspector-action','next-generation'),output=find(host,'data-chaos-trace','A-output'),textNode=output.firstChild;
  next.dispatch('click');
  assert.deepEqual(changes,[{generation:1}]);
  assert.equal(find(host,'data-chaos-trace-details').open,true);
  assert.deepEqual(inspector.viewOptions(),{chaosTrace:true});
  inspector.update({...parameters,generation:1},{settled:true});
  assert.match(find(host,'data-chaos-interval').textContent,/Generation 0 → 1/);
  assert.match(output.textContent,/0\.8645/);assert.equal(output.firstChild,textNode);
  assert.match(find(host,'data-chaos-trace','B-input').textContent,/0\.350001/);
  assert.match(find(host,'data-chaos-interval-note').textContent,/reached these calculated results/);
  inspector.update({...parameters,generation:1.5},{settled:true});
  assert.match(find(host,'data-chaos-interval').textContent,/Generation 1 → 2/);
  assert.match(find(host,'data-chaos-interval-note').textContent,/50%/);
  assert.equal(output.firstChild,textNode);assert.doesNotMatch(output.textContent,/0\.8645$/);
  next.dispatch('click');assert.deepEqual(changes.at(-1),{generation:2});
  inspector.update({...parameters,generation:36},{settled:true});
  assert.equal(next.disabled,true);assert.match(find(host,'data-chaos-interval').textContent,/35 → 36/);
  assert.match(find(host,'data-chaos-interval-note').textContent,/end of this finite experiment/);
  assert.deepEqual(parameters,{seed:.35,delta:.000001,rate:3.8,generation:0});
  inspector.destroy();
});

test('portable inspector settings are exact declarative records with bounded kind and version',()=>{
  for(const slug of ['fractal-geometry','chaos-theory','probability'])assert.deepEqual(Inspector.validateState(slug,null),{valid:true,state:null,errors:[]});
  const fractal={kind:'fractal',version:1,zoom:9,compare:true},chaos={kind:'chaos',version:1,traceExpanded:true};
  assert.deepEqual(Inspector.validateState('fractal-geometry',fractal).state,fractal);assert.deepEqual(Inspector.validateState('chaos-theory',chaos).state,chaos);
  for(const value of [{...fractal,zoom:0},{...fractal,zoom:27.01},{...fractal,zoom:NaN},{...fractal,compare:1},{...fractal,version:2},{...fractal,kind:'chaos'},{...fractal,extra:'ignored'},chaos,[],undefined])assert.equal(Inspector.validateState('fractal-geometry',value).valid,false);
  assert.equal(Inspector.validateState('chaos-theory',{...chaos,traceExpanded:'true'}).valid,false);
  assert.equal(Inspector.validateState('probability',fractal).valid,false);
  let reads=0;const accessor=Object.defineProperty({...fractal},'zoom',{enumerable:true,get(){reads++;return 9;}});
  assert.equal(Inspector.validateState('fractal-geometry',accessor).valid,false);assert.equal(reads,0);
  const hidden=Object.defineProperty({...fractal},'extra',{value:'hidden'});assert.equal(Inspector.validateState('fractal-geometry',hidden).valid,false);
});

test('a fractal camera snapshot captures its intended zoom and restores quietly without changing refinement',()=>{
  const host=doc.createElement('section'),readable=clockReadable(),motion=controlledMotion(),parameters={depth:3,length:2},changes=[];let callbacks=0;
  const inspector=Inspector.mount(host,{slug:'fractal-geometry',readable,motion,onViewChange(){callbacks++;},onParameters:value=>changes.push(value)});
  inspector.update(parameters,{settled:true});const slider=find(host,'data-lens-zoom'),compare=find(host,'data-inspector-action','compare-repeats');
  slider.value='2';slider.dispatch('input');compare.dispatch('click');
  const saved=inspector.getState();assert.deepEqual(saved,{kind:'fractal',version:1,zoom:9,compare:true});
  assert.equal(inspector.viewOptions().lens.zoom,1,'A capture records the requested zoom, not an intermediate display value');
  const before=callbacks;assert.equal(inspector.restoreState(saved).valid,true);
  assert.equal(callbacks,before);assert.deepEqual(changes,[]);assert.deepEqual(parameters,{depth:3,length:2});
  assert.deepEqual(inspector.viewOptions(),{lens:{zoom:9,compare:true}});near(Number(slider.value),2);assert.equal(find(host,'data-lens-value').textContent,'9×');
  saved.zoom=27;assert.equal(inspector.getState().zoom,9,'Returned state is copied');
  assert.equal(inspector.restoreState({...inspector.getState(),zoom:28}).valid,false);assert.equal(inspector.getState().zoom,9);
  assert.equal(inspector.restoreState(null).valid,true);assert.deepEqual(inspector.getState(),{kind:'fractal',version:1,zoom:1,compare:false});assert.equal(compare.getAttribute('aria-pressed'),'false');
  assert.equal(callbacks,before);inspector.destroy();assert.equal(inspector.restoreState(saved).valid,false);
});

test('chaos trace disclosure restores without parameter, replay or view callbacks',()=>{
  const host=doc.createElement('section'),readable=clockReadable();let changed=0,replayed=0,viewed=0;
  const inspector=Inspector.mount(host,{slug:'chaos-theory',readable,models:Discovery,onViewChange(){viewed++;},onParameters(){changed++;},onReplay(){replayed++;}});
  const parameters={seed:.35,delta:.000001,rate:3.8,generation:2};inspector.update(parameters,{settled:true});
  assert.equal(inspector.restoreState({kind:'chaos',version:1,traceExpanded:true}).valid,true);
  const details=find(host,'data-chaos-trace-details');assert.equal(details.open,true);details.dispatch('toggle');
  assert.deepEqual(inspector.getState(),{kind:'chaos',version:1,traceExpanded:true});assert.deepEqual(inspector.viewOptions(),{chaosTrace:true});
  assert.deepEqual([changed,replayed,viewed],[0,0,0]);assert.equal(inspector.restoreState(null).valid,true);assert.equal(details.open,false);details.dispatch('toggle');
  assert.deepEqual(inspector.viewOptions(),{});assert.deepEqual([changed,replayed,viewed],[0,0,0]);inspector.destroy();
});
