import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Atlas=require('../src/concept-atlas.js');
const read=path=>JSON.parse(fs.readFileSync(new URL(path,import.meta.url),'utf8'));
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>read('../content/cards/'+name));
const sources=read('../content/sources.json').sources;
const model=Atlas.create({cards,sources});
const copy=value=>structuredClone(value);
const ids=new Set(cards.map(card=>card.id));

test('atlas loads offline without a document, clocks, model evaluation or browser storage',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/concept-atlas.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasConceptAtlas.create,'function');
  assert.equal(context.AtlasConceptAtlas.create({cards,sources}).nodes.length,cards.length);
  assert.deepEqual(Object.keys(context).sort(),['AtlasConceptAtlas']);
});

test('all installed concepts have stable identities and overlapping field placements without pretending to cover all mathematics',()=>{
  assert.equal(model.nodes.length,cards.length);
  assert.equal(new Set(model.nodes.map(node=>node.id)).size,cards.length);
  assert.equal(new Set(model.nodes.map(node=>node.slug)).size,cards.length);
  const fields=new Set(model.fields.map(field=>field.id));
  for(const node of model.nodes){
    assert.ok(ids.has(node.id));assert.equal(node.available,true);assert.equal(node.status,'draft');
    assert.equal(node.href,'#card/'+node.slug);assert.ok(node.fields.length>0);
    for(const field of node.fields)assert.ok(fields.has(field),node.slug+' '+field);
    assert.ok(Object.isFrozen(node)&&Object.isFrozen(node.fields));
    assert.equal(model.node(node.slug),node);
  }
  assert.deepEqual(model.node('signed-accumulation').fields,['calculus','analysis','geometry','modeling']);
  assert.ok(model.node('derivative').fields.includes('analysis'));
  assert.ok(model.node('vector-rotation').fields.includes('geometry'));
  assert.ok(model.node('vector-rotation').fields.includes('algebra'));
  assert.ok(model.node('graph-theory').fields.includes('discrete'));
  assert.ok(model.node('bayes-theorem').fields.includes('probability'));
  assert.match(model.markup(),/editorial teaching groupings/);
  assert.match(model.markup(),/All available cards remain draft/);
  assert.equal(model.node('__proto__'),null);
  assert.equal(model.node(null),null);
});

test('field filtering lists exactly the matching concepts and preserves cross-field membership',()=>{
  for(const field of model.fields){
    const expected=model.nodes.filter(node=>node.fields.includes(field.id));
    assert.equal(field.count,expected.length);
    const html=model.markup({field:field.id,selectedSlug:expected[0].slug});
    const choose=html.match(/<select[^>]*data-atlas-choice[^>]*>(.*?)<\/select>/s)[1];
    const options=[...choose.matchAll(/<option value="([^"]+)"/g)].map(match=>match[1]);
    assert.deepEqual(options,expected.map(node=>node.slug));
    assert.match(html,new RegExp('data-atlas-field="'+field.id+'" aria-pressed="true"'));
    assert.doesNotMatch(html,/NaN|Infinity/);
  }
  assert.equal(model.markup({field:'invented'}),model.markup({field:'all'}));
});

test('relationships retain canonical direction, reason, conditions, evidence, and source references exactly',()=>{
  for(const card of cards){
    for(const [index,relation] of (card.connections||[]).entries()){
      const edge=model.edges.find(edge=>edge.id==='connection:'+card.slug+':'+index);
      assert.ok(edge,card.slug+' relation '+index);
      assert.equal(edge.source,card.id);assert.equal(edge.target,relation.target);
      assert.equal(edge.reason,relation.reason);assert.equal(edge.conditions,relation.conditions);
      assert.equal(edge.evidence,relation.evidence_status);assert.deepEqual(edge.sourceRefs,relation.source_refs);
      assert.equal(edge.kind,'connection');assert.equal(edge.type,relation.type);
    }
    for(const kind of ['required','helpful','depth'])for(const prerequisite of card.prerequisites[kind]){
      const edge=model.edges.find(edge=>edge.id==='prerequisite:'+card.slug+':'+kind+':'+prerequisite);
      assert.ok(edge);assert.equal(edge.source,kind==='depth'?card.id:prerequisite);assert.equal(edge.target,kind==='depth'?prerequisite:card.id);assert.equal(edge.type,kind);
      assert.match(edge.evidence,/study guidance/);assert.match(edge.conditions,/learning path/);
    }
  }
  const depth=model.edges.find(edge=>edge.id==='prerequisite:function-composition:depth:math:concept:category');
  assert.equal(depth.source,'math:concept:function-composition');
  assert.equal(depth.target,'math:concept:category');
  assert.match(depth.reason,/Function composition points to Category/);
  const required=model.edges.find(edge=>edge.id==='prerequisite:function-composition:required:math:concept:function');
  assert.equal(required.label,'Required preparation');
  const derivative=model.node('derivative');
  assert.ok(model.neighbors('derivative').every(edge=>edge.source===derivative.id||edge.target===derivative.id));
  assert.ok(model.neighbors('limit').some(edge=>edge.source==='math:concept:derivative'&&edge.target==='math:concept:limit'));
  assert.ok(model.neighbors('limit').some(edge=>edge.source==='math:concept:limit'&&edge.target==='math:concept:derivative'));
  assert.deepEqual(model.neighbors('unknown'),[]);
});

test('available status uses installed cards even when an older relationship still calls its target planned',()=>{
  const html=model.markup({selectedSlug:'real-logarithm'});
  const relation=html.match(/<li class="atlas-relation" data-atlas-edge="connection:real-logarithm:0">(.*?)<\/li>/s)[1];
  assert.match(relation,/Available · draft/);
  assert.match(relation,/#card\/exponentiation/);
  const planned=html.match(/<li class="atlas-relation" data-atlas-edge="connection:real-logarithm:1">(.*?)<\/li>/s)[1];
  assert.match(planned,/Planned card/);assert.doesNotMatch(planned,/href="#card\/ratio"/);
  const external=model.markup({selectedSlug:'function-composition'});
  assert.match(external,/External analogy/);assert.match(external,/analogy candidate/);
  assert.doesNotMatch(external,/href="#card\/workflow"/);
});

test('the focused graph has equivalent directed readable relationships, selectable neighbors and keyboard affordances',()=>{
  for(const current of model.nodes){
    const html=model.markup({selectedSlug:current.slug});
    assert.match(html,/<svg viewBox="0 0 860 440"/);
    assert.match(html,/The connections, in words/);
    assert.match(html,/Conditions &amp; evidence|Conditions & evidence/);
    assert.match(html,/aria-label="Choose a concept" data-atlas-choice/);
    for(const edge of model.neighbors(current.slug))assert.ok(html.includes('data-atlas-edge="'+edge.id+'"'));
    assert.ok(html.includes('href="'+current.href+'"'));
    assert.match(html,/aria-label="Filter atlas by mathematical field"/);
    assert.match(html,/role="status" aria-live="polite"/);
    assert.doesNotMatch(html,/<script\b|on(?:click|load|error)=/i);
  }
  const html=model.markup({selectedSlug:'function'});
  assert.match(html,/class="atlas-map-node"/);
  assert.match(html,/role="button" tabindex="0"/);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(ids).size,ids.length);
});

test('atlas owns frozen projections without freezing or mutating supplied content, and escapes untrusted text and unsafe URLs',()=>{
  const input=copy(cards),before=copy(input),refs=copy(sources);
  const first=input.find(card=>card.slug==='derivative');
  first.title='Derivative <img src=x onerror=alert(1)>';
  first.connections[0].reason='<script>alert(1)</script>';
  refs.find(source=>source.id===first.connections[0].source_refs[0]).url='javascript:alert(1)';
  const isolated=Atlas.create({cards:input,sources:refs});
  assert.equal(Object.isFrozen(input[0]),false);
  const html=isolated.markup({selectedSlug:'derivative',id:'unsafe"<'});
  assert.match(html,/&lt;img/);assert.match(html,/&lt;script&gt;/);
  assert.doesNotMatch(html,/<img|<script|href="javascript:/i);
  assert.ok(Object.isFrozen(isolated.nodes)&&Object.isFrozen(isolated.edges)&&Object.isFrozen(isolated.fields));
  assert.throws(()=>isolated.nodes.push({}),TypeError);
  isolated.neighbors('function').pop();
  assert.ok(isolated.neighbors('function').length>0);
  input[0].title='Later edit';assert.notEqual(isolated.nodes[0].title,'Later edit');
  assert.deepEqual(cards,before);
  assert.throws(()=>Atlas.create({cards:[cards[0],cards[0]]}),/Duplicate/);
  const ownFallback=Atlas.create({cards:[{id:'math:concept:constructor',slug:'constructor',title:'Custom topic',branches:['constructor'],prerequisites:{},connections:[]}]});
  assert.deepEqual(ownFallback.node('constructor').fields,['modeling'],'Field fallback never reads Object.prototype members');
});

function fakeHost(){
  const listeners=new Map(),focused=[];
  return {innerHTML:'',listeners,focused,addEventListener(name,fn){listeners.set(name,fn);},removeEventListener(name,fn){if(listeners.get(name)===fn)listeners.delete(name);},querySelector(selector){return{focus(){focused.push(selector);}};},contains(){return true;}};
}
const actionTarget=(attributes,tagName='BUTTON')=>({tagName,closest(){return this;},hasAttribute:key=>Object.hasOwn(attributes,key),getAttribute:key=>attributes[key]??null});

test('mount filters, selects a neighbor across fields, handles keyboard map actions and removes every listener on destroy',()=>{
  const host=fakeHost(),selected=[];
  const view=model.mount(host,{selectedSlug:'derivative',field:'calculus',onSelect:slug=>selected.push(slug)});
  assert.deepEqual(view.getState(),{selectedSlug:'derivative',field:'calculus'});
  assert.equal(host.listeners.size,3);assert.match(host.innerHTML,/Derivative at a point/);
  view.filter('geometry');assert.deepEqual(view.getState(),{selectedSlug:'derivative',field:'geometry'});
  assert.equal(view.select('bayes-theorem'),true);
  assert.deepEqual(view.getState(),{selectedSlug:'bayes-theorem',field:'all'});
  assert.deepEqual(selected,['bayes-theorem']);
  const target=actionTarget({'data-atlas-select':'exponentiation'},'g');let prevented=0;
  host.listeners.get('keydown')({type:'keydown',key:'Enter',target,preventDefault(){prevented++;}});
  assert.equal(prevented,1);assert.equal(view.getState().selectedSlug,'exponentiation');
  assert.ok(host.focused.includes('[data-atlas-choice]'));
  const filter=actionTarget({'data-atlas-field':'discrete'});
  host.listeners.get('click')({type:'click',target:filter,detail:1,preventDefault(){}});
  assert.deepEqual(view.getState(),{selectedSlug:'computational-complexity',field:'discrete'});
  assert.equal(selected.at(-1),'computational-complexity','A field-driven selection updates the shared selection/URL callback');
  const event={target:{value:'graph-theory',matches:selector=>selector==='[data-atlas-choice]'}};
  host.listeners.get('change')(event);
  assert.equal(view.select('unknown'),false);assert.equal(view.filter('unknown'),false);
  view.destroy();assert.equal(host.listeners.size,0);
  const before=host.innerHTML;assert.equal(view.select('function'),false);assert.equal(host.innerHTML,before);
  view.destroy();
});
