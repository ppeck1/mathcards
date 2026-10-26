import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Plot = require('../src/plot-view.js');
const SceneInput = require('../src/scene-input.js');
const specification = () => ({
  title:'Distance over time', description:'A constant pace makes a straight line.',
  x:{key:'time',label:'Time',min:0,max:10,step:.5,value:5,unit:'minutes'},
  y:{label:'Distance',min:0,max:20},
  series:[{id:'distance',label:'Distance',quantity:'distance output',color:'mint',points:[{x:0,y:0},{x:5,y:10},{x:10,y:20}]}],
  current:[{label:'Current time',x:5,y:10,color:'cyan',quantity:'distance output',draggable:true}],
  notes:['The point follows the same pace as the story.']
});
const tags = html => html.match(/<[^>]+>/g) || [];
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([,key,value]) => [key,value]));
}
function first(html, selector) {
  const tag = tags(html).find(selector);
  assert.ok(tag, 'Expected the requested SVG mark');
  return attributes(tag);
}
function finiteDrawing(html) {
  for (const tag of tags(html)) assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/);
}

test('offline graph works as a standalone classic script without model or DOM globals', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/plot-view.js', import.meta.url), 'utf8'), context);
  const html = context.AtlasPlotView.render(specification(), {id:'browser'});
  assert.match(html, /viewBox="0 0 760 420"/);
  assert.match(html, /Distance over time/);
  assert.match(html, /Time \(minutes\)/);
  assert.match(html, /The point follows the same pace as the story\./);
  finiteDrawing(html);
});

test('linear projection preserves endpoints, midpoint, and exact current quantities', () => {
  const html = Plot.render(specification(), {id:'projection'});
  const curve = first(html, tag => tag.startsWith('<path ') && tag.includes('data-series="distance"'));
  assert.equal(curve.d, 'M82 326 L400 205 L718 84');
  assert.equal(curve['data-quantity'], 'distance output');
  const marker = first(html, tag => tag.includes('data-role="current-point"'));
  assert.equal(marker.cx, '400');
  assert.equal(marker.cy, '205');
  assert.equal(marker['data-x'], '5');
  assert.equal(marker['data-y'], '10');
  assert.equal(marker['data-quantity'], 'distance output');
  assert.equal(first(html, tag => tag.includes('data-role="zero-x"')).x1, '82');
  assert.equal(first(html, tag => tag.includes('data-role="zero-y"')).y1, '326');
});

test('nonfinite and missing samples break curves instead of creating false connections', () => {
  const spec = specification();
  spec.series[0].points = [{x:0,y:0},{x:1,y:2},{x:2,y:NaN},{x:3,y:6},{x:Infinity,y:8},null,{x:5,y:10}];
  spec.current.push({x:NaN,y:1}, {x:2,y:Infinity});
  const html = Plot.render(spec);
  const curve = first(html, tag => tag.startsWith('<path ') && tag.includes('data-series='));
  assert.equal(curve.d, 'M82 326 L145.6 301.8 M272.8 253.4 M400 205');
  assert.equal((html.match(/data-role="current-point"/g) || []).length, 1);
  finiteDrawing(html);
});

test('first draggable marker exposes the shared pointer and keyboard input contract', () => {
  const spec = specification();
  spec.current.unshift({label:'Read-only reference',x:2,y:4,quantity:'reference'});
  spec.current.push({label:'Other point',x:8,y:16,quantity:'other',draggable:true});
  const html = Plot.render(spec);
  const handles = tags(html).filter(tag => tag.includes('class="scene-handle"'));
  assert.equal(handles.length, 1);
  const handle = attributes(handles[0]);
  assert.equal(handle.role, 'slider');
  assert.equal(handle.tabindex, '0');
  assert.equal(handle['data-drag-param'], 'time');
  assert.equal(handle['aria-valuenow'], '5');
  assert.equal(handle['data-quantity'], 'time distance output');
  assert.equal(handle.style, 'cursor:ew-resize;touch-action:none');
  const input = {min:Number(handle['data-drag-min']),max:Number(handle['data-drag-max']),x0:Number(handle['data-drag-x0']),x1:Number(handle['data-drag-x1']),step:Number(handle['data-drag-step'])};
  assert.equal(SceneInput.pointerValue(input, 5, 400, 718), 10);
  assert.equal(SceneInput.pointerValue(input, 5, 400, 82), 0);
  assert.equal(SceneInput.keyValue(input, 5, 'ArrowRight'), 5.5);
  assert.match(handle['aria-label'], /arrow keys/);
});

test('discrete dots stay discrete and pinned comparisons retain their dashed label', () => {
  const spec = specification();
  spec.series[0].dots = true;
  spec.series.push({id:'pinned',label:'Pinned comparison',quantity:'output',color:'#f2ca76',dashed:true,dots:'both',points:[{x:0,y:5},{x:10,y:15}]});
  const html = Plot.render(spec);
  assert.equal(tags(html).filter(tag => tag.startsWith('<path ') && tag.includes('data-series="distance"')).length, 0);
  assert.equal((html.match(/data-role="sample-point"/g) || []).length, 5);
  const pinned = first(html, tag => tag.startsWith('<path ') && tag.includes('data-series="pinned"'));
  assert.equal(pinned['stroke-dasharray'], '7 5');
  assert.match(html, /Pinned comparison · dashed/);
  finiteDrawing(html);
});

test('slot IDs are scoped without collapsing punctuation and all authored text is escaped', () => {
  const spec = specification();
  spec.title = '<script>bad()</script>';
  spec.description = 'A "quoted" relationship & its result';
  spec.x.key = 'x" onfocus="bad';
  spec.x.label = '<input>';
  spec.series[0].id = 'curve" onload="bad';
  spec.series[0].label = '<img src=x>';
  spec.series[0].quantity = 'output" onload="bad';
  spec.series[0].color = 'red" onload="bad';
  const a = Plot.render(spec, {id:'slot!'}), b = Plot.render(spec, {id:'slot?'});
  const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(([,id]) => id);
  assert.ok(ids(a).every(id => !ids(b).includes(id)));
  assert.match(a, /&lt;script&gt;bad\(\)&lt;\/script&gt;/);
  assert.match(a, /A &quot;quoted&quot; relationship &amp; its result/);
  assert.match(a, /data-series="curve&quot; onload=&quot;bad"/);
  assert.doesNotMatch(a, /<script|<img|<input|\sonload="|\sonfocus="/);
  assert.match(a, /stroke="#c6f276"/);
});

test('invalid bounds return a readable finite fallback; huge finite axes remain drawable', () => {
  for (const bounds of [{min:0,max:0},{min:5,max:2},{min:0,max:Infinity},{min:NaN,max:10}]) {
    const spec = specification(); spec.x = {...spec.x,...bounds};
    const html = Plot.render(spec);
    assert.match(html, /Graph unavailable for this range/);
    assert.doesNotMatch(html, /data-drag-param|data-role="current-point"/);
    finiteDrawing(html);
  }
  const spec = specification();
  spec.x.min = spec.y.min = -1e308; spec.x.max = spec.y.max = 1e308;
  spec.series[0].points = [{x:-1e308,y:-1e308},{x:0,y:0},{x:1e308,y:1e308}];
  spec.current[0].x = spec.current[0].y = 0;
  const html = Plot.render(spec);
  assert.equal(first(html, tag => tag.startsWith('<path ') && tag.includes('data-series=')).d, 'M82 326 L400 205 L718 84');
  finiteDrawing(html);
});

test('rendering does not mutate authored graph data', () => {
  const spec = specification(), before = structuredClone(spec);
  const html = Plot.render(spec, {compact:true,id:'compact'});
  assert.deepEqual(spec, before);
  assert.match(html, /relationship-graph-compact/);
  assert.match(html, /aria-labelledby="atlas-plot-compact-title atlas-plot-compact-description"/);
});

test('compact graphs reduce tick density and enlarge labels without changing mathematical projection', () => {
  const spec = specification();
  spec.title = 'A long relationship graph title explaining how changing the input affects the result';
  const regular = Plot.render(spec, {id:'regular'}), compact = Plot.render(spec, {id:'compact',compact:true});
  const textTags = html => [...html.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)].map(([,properties,content]) => ({...attributes('<text ' + properties + '>'),content}));
  const regularLabels = textTags(regular), compactLabels = textTags(compact);
  const xTicks = values => values.filter(label => label.y === '348');
  const yTicks = values => values.filter(label => label.x === '70');
  assert.equal(xTicks(regularLabels).length, 5);
  [...xTicks(regularLabels), ...yTicks(regularLabels)].forEach(label => assert.ok(Number(label['font-size']) >= 16));
  assert.ok(Number(regularLabels.find(label => label.content === 'Time (minutes)')['font-size']) >= 18);
  assert.ok(Number(regularLabels.find(label => label.y === '34')['font-size']) >= 22);
  assert.equal(xTicks(compactLabels).length, 3);
  assert.equal(yTicks(compactLabels).length, 3);
  [...xTicks(compactLabels), ...yTicks(compactLabels)].forEach(label => assert.ok(Number(label['font-size']) >= 26));
  assert.ok(Number(compactLabels.find(label => label.content === 'Time (minutes)')['font-size']) >= 28);
  assert.ok(Number(compactLabels.find(label => label.content === 'Distance')['font-size']) >= 28);
  assert.ok(Number(compactLabels.find(label => label.y === '34')['font-size']) >= 30);
  assert.match(compact, /<title[^>]*>A long relationship graph title explaining how changing the input affects the result<\/title>/);
  assert.ok(compactLabels.find(label => label.y === '34').content.endsWith('…'));
  const path = html => first(html, tag => tag.startsWith('<path ') && tag.includes('data-series="distance"')).d;
  assert.equal(path(compact), path(regular));
  const marker = html => first(html, tag => tag.includes('data-role="current-point"'));
  assert.deepEqual([marker(compact).cx,marker(compact).cy], [marker(regular).cx,marker(regular).cy]);
});

test('compact axes shorten tiny tick labels while retaining exact samples and full accessible axis names', () => {
  const spec = specification();
  spec.x.label = 'Elapsed time since the first sample in the experiment';
  spec.y.label = 'Separation between the two nearby starting populations';
  spec.y.min = 0; spec.y.max = .000004;
  spec.current[0].y = .000001234567;
  const html = Plot.render(spec, {compact:true});
  assert.match(html, /font-size="26"[^>]*>2e-6<\/text>/);
  assert.match(html, /font-size="26"[^>]*>4e-6<\/text>/);
  assert.doesNotMatch(html, />0\.00000/);
  assert.match(html, /aria-label="Elapsed time since the first sample in the experiment \(minutes\)"/);
  assert.match(html, /aria-label="Separation between the two nearby starting populations"/);
  assert.equal(first(html, tag => tag.includes('data-role="current-point"'))['data-y'], '.000001234567'.replace(/^\./, '0.'));
  finiteDrawing(html);
});
