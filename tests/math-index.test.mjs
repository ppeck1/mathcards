import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const Terms=require('../src/math-terms.js');
const MathIndex=require('../src/math-index.js');
const Notation=require('../src/math-notation.js');
const cardDirectory=new URL('../content/cards/',import.meta.url);
const cards=fs.readdirSync(cardDirectory).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL(name,cardDirectory),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=MathIndex.create({cards,sources});
const ids=results=>results.map(entry=>entry.id);
const fixture=(overrides={})=>({slug:'fixture',title:'Fixture',definition:{formal_latex:'',conditions:[]},grammar:{symbols:[],formation_rule:''},examples:[],...overrides});
const linearTermIds=['linear-combination','weight','vector-addition','scalar-multiplication','span','subspace','coordinate-vector','change-of-basis','rank','matrix-product','associative','reconstruction','shear','noncommutative','linear-system-solution','vector-space-dimension','affine-combination','convex-combination','orthonormal','matrix-dimensions'];
const gapTermIds=['universal-set','cardinality','arithmetic-mean','population','sample','population-mean','sample-mean','mean-difference','data-value','sample-size','population-size','census','statistic','population-parameter','zero-based-index','algorithm','computational-complexity','input-size','operation-count','cost-model','linear-time','big-o','big-theta'];

test('gap lessons supply sourced definitions with actual learner-facing card evidence',()=>{
  const gapSlugs=new Set(['set','population-sample','computational-complexity']);
  for(const id of gapTermIds){const authored=Terms.entries.find(e=>e.id===id),projected=index.get(id);assert.ok(authored,id);assert.ok(authored.definition.length>50&&authored.example&&authored.readAs,id+' has reader text');assert.ok(authored.sourceKeys.length&&authored.sourceKeys.every(key=>Terms.sources[key]),id+' has known definition sources');assert.ok(projected.usedBy.some(use=>gapSlugs.has(use.slug)),id+' links to an actual lesson');assert.ok(projected.relatedIds.length,id+' has related meanings');}
});

test('finite set cardinality bars retain their declared meaning without relabeling scalar absolute value',()=>{
  for(const query of ['|R|','|A|','|A∩B|','|A\\cap B|']){
    const counted=index.search(query).find(e=>e.id==='cardinality');assert.ok(counted,query);assert.deepEqual(counted.usedBy.map(u=>u.slug),['set']);
    const absolute=index.search(query).find(e=>e.id==='absolute-value');assert.ok(!absolute?.usedBy.some(u=>u.slug==='set'),query+' does not invent an absolute-value use');
  }
  assert.ok(index.search('|x|').some(e=>e.id==='absolute-value'&&e.usedBy.length));assert.ok(!index.search('|x|').some(e=>e.id==='cardinality'));
  const local=MathIndex.create({cards:[fixture({slug:'set',grammar:{symbols:[{token:'|R|',meaning:'Count the selected members.'}],formation_rule:'|R|=4'}}),fixture({slug:'scalar-example',grammar:{symbols:[],formation_rule:'|R|=2'}})]});
  assert.ok(!local.get('absolute-value').usedBy.some(u=>u.slug==='set'));assert.ok(local.get('absolute-value').usedBy.some(u=>u.slug==='scalar-example'),'R is not globally declared a set');
});

test('sample means, indexed observations and population counts keep their exact statistical roles',()=>{
  for(const query of ['x̄','xbar','\\bar{x}','\\overline{x}']){const mean=index.search(query).find(e=>e.id==='sample-mean');assert.ok(mean,query);assert.deepEqual(mean.usedBy.map(u=>u.slug),['population-sample']);assert.ok(!index.search(query).some(e=>e.id==='complex-conjugate'));}
  assert.deepEqual(index.search('μ').find(e=>e.id==='population-mean').usedBy.map(u=>u.slug),['population-sample','variance']);
  assert.deepEqual(index.search('N').find(e=>e.id==='population-size').usedBy.map(u=>u.slug),['population-sample','variance']);
  assert.deepEqual(index.search('n').find(e=>e.id==='sample-size').usedBy.map(u=>u.slug),['population-sample']);
  assert.deepEqual(index.search('n').find(e=>e.id==='input-size').usedBy.map(u=>u.slug),['computational-complexity']);
  for(const token of ['∑xᵢ','∑Xᵢ'])assert.ok(index.search(token).find(e=>e.id==='summation').usedBy.some(u=>u.slug==='population-sample'));
});

test('growth bounds and exact time or work functions link to the scan lesson under their own meanings',()=>{
  for(const [query,id]of [['O(n)','big-o'],['\\mathcal{O}(n)','big-o'],['Θ(n)','big-theta'],['Theta(n)','big-theta'],['\\Theta(n)','big-theta'],['w(n)','operation-count'],['T(n)','cost-model'],['T(2n)','cost-model']]){
    const entry=index.search(query).find(e=>e.id===id);assert.ok(entry,query);assert.deepEqual(entry.usedBy.map(u=>u.slug),['computational-complexity'],query);
  }
  assert.equal(index.search('linear-time algorithm')[0].id,'linear-time');
  const library=require('../src/story-library.js'),card=cards.find(c=>c.slug==='computational-complexity'),withStory=MathIndex.create({cards:[card],sources,stories:[library.forSlug(card.slug)]});
  assert.ok(withStory.search('ms/item').find(e=>e.id==='compound-unit').usedBy.some(u=>u.slug===card.slug));
  assert.ok(withStory.search('ms').find(e=>e.id==='measurement-unit-symbols').usedBy.some(u=>u.slug===card.slug));
});

test('index loads without DOM, timers, network or storage and projects immutable owned data',()=>{
  const context={};vm.createContext(context);
  for(const name of ['math-terms.js','math-index.js'])vm.runInContext(fs.readFileSync(new URL('../src/'+name,import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasMathIndex.create,'function');
  const before=JSON.stringify(cards),entry=index.get('delta-small');
  assert.ok(Terms.entries.length>=160);
  assert.ok(Object.isFrozen(index.entries)&&Object.isFrozen(entry)&&Object.isFrozen(entry.symbols)&&Object.isFrozen(entry.usedBy));
  assert.throws(()=>{entry.title='Changed';},TypeError);
  assert.equal(index.get('__proto__'),null);
  assert.equal(index.get(null),null);
  assert.equal(JSON.stringify(cards),before);
  assert.equal(Object.isFrozen(cards[0]),false,'canonical input is not frozen by the index');
  assert.throws(()=>MathIndex.create({cards:{}}),TypeError);
});

test('pasted Greek symbols preserve case and remain distinct from partial derivatives',()=>{
  assert.deepEqual(ids(index.search('δ')),['delta-small']);
  assert.deepEqual(ids(index.search('Δ')),['delta-capital']);
  assert.deepEqual(ids(index.search('∂')),['partial-derivative']);
  assert.ok(ids(index.search('delta')).includes('delta-small'));
  assert.ok(ids(index.search('DELTA')).includes('delta-capital'));
  for(const symbol of Array.from('αβγδεζηθικλμνξοπρστυφχψω')){
    const results=index.search(symbol);
    const letters=results.filter(entry=>entry.category==='greek');
    assert.equal(letters.length,1,'one Greek identity reader for '+symbol);
    assert.ok(letters[0].symbols.includes(symbol));
  }
});

test('all modern Greek capitals and common variants have literal identity readers without Latin conflation',()=>{
  const capitals=[['Α','alpha'],['Β','beta'],['Γ','gamma'],['Δ','delta'],['Ε','epsilon'],['Ζ','zeta'],['Η','eta'],['Θ','theta'],['Ι','iota'],['Κ','kappa'],['Λ','lambda'],['Μ','mu'],['Ν','nu'],['Ξ','xi'],['Ο','omicron'],['Π','pi'],['Ρ','rho'],['Σ','sigma'],['Τ','tau'],['Υ','upsilon'],['Φ','phi'],['Χ','chi'],['Ψ','psi'],['Ω','omega']];
  for(const [glyph,name] of capitals)assert.ok(ids(index.search(glyph)).includes(name+'-capital'),glyph+' is named correctly');
  for(const [glyph,id] of [['ϐ','beta'],['ϵ','epsilon'],['ϑ','theta'],['ϰ','kappa'],['ϖ','pi-variant'],['ϱ','rho'],['ς','sigma-small'],['ϲ','sigma-small'],['ϕ','phi'],['ϴ','theta-capital'],['ϒ','upsilon-capital'],['ϝ','digamma']])assert.ok(ids(index.search(glyph)).includes(id),glyph);
  assert.ok(!ids(index.search('A')).includes('alpha-capital'));
  assert.ok(!ids(index.search('B')).includes('beta-capital'));
  assert.ok(!ids(index.search('O')).includes('omicron-capital'));
  assert.ok(!ids(index.search('Σ')).includes('summation'));
  assert.deepEqual(ids(index.search('∑')),['summation']);
  assert.ok(ids(index.search('Ω')).includes('omega-capital'));
  assert.ok(index.get('sample-space').symbols.includes('Ω'),'the context-specific sample-space reader remains available');
});

test('TeX command lookup preserves Greek case and separates operators from letters',()=>{
  for(const [query,id] of [['\\delta','delta-small'],['\\Delta','delta-capital'],['\\pi','pi'],['\\Pi','pi-capital'],['\\sigma','sigma-small'],['\\Sigma','sigma-capital'],['\\sum','summation'],['\\omega','omega'],['\\Omega','omega-capital'],['\\varpi','pi-variant'],['\\varrho','rho']])assert.ok(ids(index.search(query)).includes(id),query);
  assert.ok(!ids(index.search('\\Delta')).includes('delta-small'));
  assert.ok(!ids(index.search('\\delta')).includes('delta-capital'));
  assert.ok(!ids(index.search('\\Sigma')).includes('summation'));
  assert.ok(!Terms.entries.some(entry=>(entry.lookupAliases||[]).includes('\\Alpha')),'a Latin lookalike is not assigned an invented ordinary TeX command');
});

test('literal reading notation and actual helper forms lead to useful definitions',()=>{
  const cases=[['(','grouping-parentheses'],['[','square-brackets'],['{','curly-braces'],['|','vertical-bar'],['‖','magnitude'],['′','prime-mark'],["'",'prime-mark'],['’','prime-mark'],['^','superscript'],['₀','subscript'],['½','fraction'],['[a,b)','half-open-interval'],['ℝ²','cartesian-power'],['[0,1]²','cartesian-power'],['→','right-arrow'],['∋','contains-as-member'],['∃!','unique-exists'],['1e−6','scientific-notation'],['arg(0)','complex-argument'],['frac(d)','fractional-part'],['\\frac','fraction'],['\\min','minimum'],['\\exp','exponential-function'],['hypot','hypot'],['atan2','atan2'],['abs(x)','absolute-value'],['sign(x)','sign-function'],['C(6,k)','binomial-coefficient'],['E[K]','expected-value'],['log₂x','logarithm']];
  for(const [query,id] of cases)assert.ok(ids(index.search(query)).includes(id),query+' → '+id);
  assert.ok(index.search("'").length<index.entries.length,'punctuation-only input is not treated as an empty query');
  assert.ok(!ids(index.search('\\frac')).includes('fractional-part'));
  assert.ok(!ids(index.search('frac(d)')).includes('binomial-coefficient'));
});

test('ambiguous binom layout and complex or scalar meanings retain their actual mathematical settings',()=>{
  const local=MathIndex.create({cards:[fixture({slug:'basis',definition:{formal_latex:'\\binom{x}{y}',conditions:[]}}),fixture({slug:'probability',definition:{formal_latex:'\\binom{6}{k}',conditions:[]}})]});
  assert.deepEqual(local.get('column-vector').usedBy.map(usage=>usage.slug),['basis']);
  assert.deepEqual(local.get('binomial-coefficient').usedBy.map(usage=>usage.slug),['probability']);
  assert.notEqual(index.get('complex-modulus').id,index.get('absolute-value').id);
  assert.notEqual(index.get('complex-argument').id,index.get('input').id);
  assert.notEqual(index.get('scalar-projection').id,index.get('projection').id);
  const partial=MathIndex.create({cards:[fixture({meaning:'A partial function blends partial moves.'})]});
  assert.equal(partial.get('partial-derivative').usedBy.length,0);
});

test('units and local story letters are scoped without reassigning every occurrence of a letter',()=>{
  for(const id of ['measurement-unit-symbols','powered-unit','compound-unit','pixel-unit','declared-unit']){
    const authored=Terms.entries.find(entry=>entry.id===id);
    assert.equal(authored.category,'units');
    assert.deepEqual(authored.notationKinds,['unit']);
    assert.ok(!(authored.mathSymbols||[]).some(symbol=>/^[A-Za-z]$/.test(symbol)),id+' does not scan bare mathematical letters as units');
  }
  for(const [id,slugs] of [['local-garden-width',['quadratic-optimization']],['local-complex-operand',['complex-multiplication']],['local-combination-result',['linear-combination']],['local-terminal-time',['integral-accumulation','signed-accumulation']],['graph-node-label',['graph-theory']]]){
    const authored=Terms.entries.find(entry=>entry.id===id);
    assert.deepEqual(authored.formulaCards,slugs,id);
  }
  const withStory=MathIndex.create({cards,sources,stories:[{slug:'bayes-theorem',variables:[{key:'prior',symbol:'p',unit:'fraction'}]}]});
  const prior=withStory.search('p').find(entry=>entry.id==='prior');
  assert.ok(prior&&prior.usedBy.length);
  assert.ok(prior.usedBy.every(usage=>usage.slug==='bayes-theorem'));
});

test('every authored reference entry has complete reader text, sources and valid editorial links',()=>{
  const known=new Set(Terms.entries.map(entry=>entry.id));
  for(const entry of Terms.entries){
    assert.ok(entry.definition&&entry.example&&entry.readAs,entry.id);
    assert.ok(entry.sourceKeys.length&&entry.sourceKeys.every(key=>Terms.sources[key]),entry.id+' has known sources');
    assert.ok(entry.sourceKeys.every(key=>Terms.sources[key].url.startsWith('https://')),entry.id);
    assert.ok((entry.relatedIds||[]).every(id=>known.has(id)&&id!==entry.id),entry.id);
    assert.ok(Object.isFrozen(entry),entry.id);
  }
  const prompt=MathIndex.create({cards:[fixture({prompts:[{prompt:'Could this be a convex combination?'}]})]});
  assert.equal(prompt.get('convex-combination').usedBy.length,1,'canonical prompt text is part of authored learner content');
});

test('basic typed operators, spoken names and field browsing have predictable results',()=>{
  for(const [symbol,id] of [['+','addition'],['-','subtraction'],['−','subtraction'],['*','multiplication'],['×','multiplication'],['/','division'],['÷','division']])assert.ok(ids(index.search(symbol)).includes(id),symbol);
  assert.equal(index.search('sample space')[0].id,'sample-space');
  assert.equal(index.search('outcome')[0].id,'outcome');
  assert.equal(index.search('imaginary unit')[0].id,'imaginary-unit');
  assert.equal(index.search('dependent vectors')[0].id,'linear-dependence');
  assert.ok(!index.get('linear-independence').aliases.includes('dependent vectors'));
  assert.ok(index.search('projection',{category:'linear'}).length);
  assert.deepEqual(index.search('projection',{category:'greek'}),[]);
  assert.ok(index.search('',{mode:'symbols'}).every(entry=>entry.symbols.length));
  assert.ok(index.search('',{letter:'P'}).every(entry=>entry.title[0].toUpperCase()==='P'));
  assert.deepEqual(index.search('unlisted-phrase-with-no-entry-4907'),[]);
  assert.equal(index.search('').length,index.entries.length);
});

test('linear expansion supplies distinct searchable definitions and verified source references',()=>{
  for(const id of linearTermIds){
    const authored=Terms.entries.find(entry=>entry.id===id);
    assert.ok(authored,id);
    assert.ok(authored.definition&&authored.example&&authored.readAs,id+' has complete reader text');
    assert.ok(authored.sourceKeys.length&&authored.sourceKeys.every(key=>Terms.sources[key]),id+' has known primary sources');
    assert.ok(index.get(id).sources.every(source=>source.url.startsWith('https://')));
  }
  assert.equal(index.search('affine combination')[0].id,'affine-combination');
  assert.equal(index.search('convex combination')[0].id,'convex-combination');
  assert.equal(index.search('orthonormal basis')[0].id,'orthonormal');
  assert.equal(index.search('matrix dimensions')[0].id,'matrix-dimensions');
  assert.equal(index.search('noncommutative')[0].id,'noncommutative');
  assert.ok(!index.get('commutative').aliases.includes('noncommutative'));
  assert.notEqual(index.get('affine-combination').id,index.get('linear-affine').id,'affine combinations and affine functions have separate meanings');
});

test('curated related definitions are immutable valid editorial links without self-links or duplicates',()=>{
  const known=new Set(Terms.entries.map(entry=>entry.id));
  assert.equal(known.size,Terms.entries.length,'stable term IDs are unique');
  for(const entry of Terms.entries){
    if(!entry.relatedIds)continue;
    assert.ok(Object.isFrozen(entry.relatedIds),entry.id);
    assert.equal(new Set(entry.relatedIds).size,entry.relatedIds.length,entry.id);
    assert.ok(entry.relatedIds.every(id=>known.has(id)&&id!==entry.id),entry.id);
  }
  for(const id of linearTermIds)assert.ok(Terms.entries.find(entry=>entry.id===id).relatedIds.length,id+' has a next learning link');
  assert.ok(Terms.entries.find(entry=>entry.id==='basis').relatedIds.includes('coordinate-vector'));
  assert.ok(Terms.entries.find(entry=>entry.id==='matrix-product').relatedIds.includes('composition'));
});

test('new lessons connect local notation and unfamiliar words to the relevant definitions',()=>{
  const expected={
    'linear-combination':['linear-combination','weight','span','linear-independence','linear-dependence','affine-combination','convex-combination'],
    basis:['basis','matrix','determinant','coordinate-vector','change-of-basis','reconstruction','linear-system-solution','linear-independence','linear-dependence','orthonormal'],
    'matrix-product':['matrix','matrix-product','shear','noncommutative']
  };
  for(const [slug,required] of Object.entries(expected)){
    const actual=new Set(index.forCard(slug).map(entry=>entry.id));
    for(const id of required)assert.ok(actual.has(id),slug+' defines '+id);
  }
  const contexts=(id,slug)=>index.get(id).usedBy.find(usage=>usage.slug===slug)?.contexts||[];
  for(const token of ['r','s']){
    assert.ok(contexts('weight','linear-combination').some(context=>context.via==='grammar'&&context.token===token));
    assert.ok(contexts('coordinate-vector','basis').some(context=>context.via==='grammar'&&context.token===token));
  }
  assert.ok(!contexts('weight','basis').some(context=>context.via==='grammar'),'basis coordinates do not become linear-combination weights merely by sharing r and s');
  for(const token of ['AB','BA'])assert.ok(contexts('matrix-product','matrix-product').some(context=>context.via==='grammar'&&context.token===token));
  assert.ok(contexts('orthonormal','basis').some(context=>['Worked example limits','Independent check'].includes(context.location)));
});

test('calculus readers preserve function, scalar value, vector and norm roles',()=>{
  const contexts=(id,slug)=>index.get(id).usedBy.find(usage=>usage.slug===slug)?.contexts||[];
  for(const token of ['g(x)','f(u)','h(x)'])assert.ok(contexts('function-notation','chain-rule').some(context=>context.via==='grammar'&&context.token===token&&/scalar/.test(context.type)),token);
  for(const token of ['f','g'])assert.ok(contexts('function','chain-rule').some(context=>context.via==='grammar'&&context.token===token&&/function/.test(context.type)),token);
  assert.ok(contexts('local-chain-inner-value','chain-rule').some(context=>context.token==='u'&&/scalar/.test(context.type)));
  assert.ok(!index.search('u').find(entry=>entry.id==='vector').usedBy.some(usage=>usage.slug==='chain-rule'),'the scoped scalar u binding overrides a generic vector glyph');
  assert.ok(contexts('gradient','gradient').some(context=>context.token==='∇F'&&/vector/.test(context.type)));
  assert.ok(contexts('magnitude','gradient').some(context=>context.token==='‖∇F‖'&&/scalar/.test(context.type)));
  assert.ok(contexts('function-notation','gradient').some(context=>context.token==='F(x,y)'&&/scalar/.test(context.type)));
  assert.ok(!index.get('sensitivity').usedBy.some(usage=>usage.slug==='chain-rule'),'diagnostic sensitivity is distinct from a signed composite derivative');
  assert.ok(index.forCard('bayes-theorem').some(entry=>entry.id==='sensitivity'));
});

test('typed calculus expressions and reader-facing descriptions lead to the relevant definitions',()=>{
  for(const [query,id] of [['∂f/∂x','partial-derivative'],['∂F/∂x','partial-derivative'],['∂F/∂y','partial-derivative'],['\\frac{\\partial F}{\\partial x}','partial-derivative'],['∇F','gradient'],['\\nabla F','gradient'],['‖∇F‖','magnitude'],['g′(x)','derivative'],['f′(u)','derivative'],["h'(x)",'derivative'],["f'(g(x))g'(x)",'chain-rule'],['composite sensitivity','chain-rule']])assert.ok(ids(index.search(query)).includes(id),query);
  for(const slug of ['partial-derivative','gradient'])for(const id of ['level-set','tangent-plane'])assert.ok(index.forCard(slug).some(entry=>entry.id===id),slug+' names '+id+' in its authored view description');
  const described=MathIndex.create({cards:[fixture({interactive:{description:'A contour shows a level set.',component_id:'critical point'},representations:[{description:'Inspect the tangent plane.',internal_model:'saddle point'}]})]});
  assert.equal(described.get('level-set').usedBy.length,1);
  assert.equal(described.get('tangent-plane').usedBy.length,1);
  assert.equal(described.get('critical-point').usedBy.length,0,'internal component IDs do not become usage');
  assert.equal(described.get('saddle-point').usedBy.length,0,'internal view metadata does not become usage');
});

test('local-change vocabulary follows the actual lesson explanations and preserves distinct quantities',()=>{
  const required={
    'directional-derivative':['directional-derivative','unit-vector','gradient','scalar-field'],
    'tangent-plane':['tangent-plane','linear-approximation','approximation-error','increment'],
    'gradient-descent':['gradient-descent','cost-function','step-size','iterate','iteration-index','convergence','contraction-factor','iteration-stability','strict-convexity','overshoot','oscillation','descent-direction']
  };
  for(const [slug,ids] of Object.entries(required))for(const id of ids){
    const hit=index.forCard(slug).find(entry=>entry.id===id);
    assert.ok(hit,slug+' actually explains '+id);
    assert.equal(hit.usedBy.find(usage=>usage.slug===slug).href,'#card/'+slug);
  }
  assert.match(index.get('step-size').definition,/displacement also depends on the gradient/);
  assert.match(index.get('strict-convexity').definition,/does not ensure attainment/);
  assert.match(index.get('oscillation').definition,/does not decide convergence/);
  assert.match(index.get('approximation-error').definition,/R=actual−predicted/);
  assert.notEqual(index.get('iterate').id,index.get('iteration').id);
  assert.notEqual(index.get('strict-convexity').id,index.get('convex-combination').id);
});

test('new local symbols and typed compound forms keep their actual card scopes',()=>{
  const use=(query,id)=>index.search(query).find(entry=>entry.id===id)?.usedBy.map(usage=>usage.slug);
  for(const [query,id,slugs] of [
    ['η','step-size',['gradient-descent']],['k','iteration-index',['gradient-descent','recurrence']],
    ['R','approximation-error',['tangent-plane']],['L(x+Δx,y+Δy)','linear-approximation',['tangent-plane']],
    ['L(x+\\Delta x,y+\\Delta y)','linear-approximation',['tangent-plane']],
    ['C(xₖ,yₖ)','cost-function',['gradient-descent']],['C(x_k,y_k)','cost-function',['gradient-descent']],
    ['∇C','gradient',['gradient-descent']],['DᵤF','directional-derivative',['directional-derivative']],
    ['x_k','iterate',['gradient-descent']],['x_{k+1}','iterate',['gradient-descent']]
  ])assert.deepEqual(use(query,id),slugs,query+' keeps its mathematical role');
  assert.ok(!ids(index.search('C(xₖ,yₖ)')).includes('binomial-coefficient'),'the cost value is not a combinations count');
  assert.ok(ids(index.search('C(6,2)')).includes('binomial-coefficient'),'the genuine choose notation is retained');
  assert.deepEqual(use('u','unit-vector'),['directional-derivative']);
  assert.deepEqual(use('u','local-chain-inner-value'),['chain-rule']);
  assert.ok(use('θ','theta').includes('directional-derivative'));
  assert.ok(!ids(index.search('Θ')).includes('theta'));
  assert.ok(!Terms.entries.find(entry=>entry.id==='iterate').lookupAliases.includes('x_k+1'),'x sub k plus 1 is not silently x sub k+1');
});

test('compound notation scopes its general syntax readers without unrelated family links',()=>{
  for(const [query,slug] of [['C(xₖ,yₖ)','gradient-descent'],['L(x+Δx,y+Δy)','tangent-plane'],['∇C','gradient-descent'],['DᵤF','directional-derivative']]){
    const results=index.search(query);
    assert.ok(results.length);
    for(const entry of results)assert.ok(entry.usedBy.every(usage=>usage.slug===slug),query+' / '+entry.id+' uses the actual form');
  }
  const initial=index.search('x_0').find(entry=>entry.id==='initial-value');
  assert.ok(initial.usedBy.some(usage=>usage.slug==='gradient-descent'));
  assert.ok(!initial.usedBy.some(usage=>usage.slug==='ratio-scale'),'a differently named initial quantity does not claim x₀');
});

test('a logarithmic cost display explains the shifted natural log without changing the cost meaning',()=>{
  const entry=index.get('logarithmic-display');
  assert.ok(entry);
  assert.match(entry.definition,/nonnegative dimensionless cost C/);
  assert.match(entry.definition,/ln\(1\+C\), using base e/);
  assert.match(entry.definition,/preserves zero and ordering/);
  assert.match(entry.definition,/original cost remains available/);
  assert.deepEqual(entry.relatedIds,['logarithm','cost-function','eulers-number','gradient-descent']);
  for(const query of ['ln(1+C)','\\ln(1+C)']){
    const actual=index.search(query).find(entry=>entry.id==='logarithmic-display');
    assert.ok(actual,query+' names the exact displayed transformation');
    assert.deepEqual(actual.usedBy.map(usage=>usage.slug),['gradient-descent']);
  }
  const local=MathIndex.create({cards:[fixture({slug:'gradient-descent',representations:[{description:'The Graph uses a logarithmic display of cost; it draws ln(1+C) and retains the actual cost.'}]})]});
  assert.deepEqual(local.search('logarithmic display').find(entry=>entry.id==='logarithmic-display').usedBy.map(usage=>usage.slug),['gradient-descent']);
});

test('word coverage includes authored learner explanations while ignoring incidental metadata and control keys',()=>{
  const local=MathIndex.create({cards:[fixture({
    prompts:[{question:'Could this be an affine combination?',answer:'A convex combination adds nonnegative weights.'}],
    examples:[{limits:'Only this basis is orthonormal.',independent_check:{method:'Check reconstruction.',expected:'The rank is one.'}}],
    review:{note:'matrix product'},metadata:{description:'shear'},interactive:{controls:[{id:'subspace',type:'number'}]}
  })]});
  for(const id of ['affine-combination','convex-combination','orthonormal','reconstruction','rank'])assert.equal(local.get(id).usedBy.length,1,id);
  for(const id of ['matrix-product','shear','subspace'])assert.equal(local.get(id).usedBy.length,0,id+' is not inferred from incidental metadata');
  const chance=MathIndex.create({cards:[fixture({meaning:'These independent events have a probability.'})]});
  assert.equal(chance.get('linear-independence').usedBy.length,0,'probability independence is distinct from linear independence');
  const physical=MathIndex.create({cards:[fixture({meaning:'Check the physical dimensions and matrix dimensions.'})]});
  assert.equal(physical.get('vector-space-dimension').usedBy.length,0,'physical or matrix dimensions are not vector-space dimension');
  assert.equal(physical.get('matrix-dimensions').usedBy.length,1);
});

test('every actual card grammar token has a matching local definition and an honest card link',()=>{
  for(const card of cards){
    const entries=index.forCard(card.slug);
    for(const symbol of card.grammar.symbols){
      const contexts=entries.flatMap(entry=>entry.usedBy.filter(usage=>usage.slug===card.slug).flatMap(usage=>usage.contexts));
      assert.ok(contexts.some(context=>context.via==='grammar'&&context.token===symbol.token&&context.meaning===(symbol.meaning||symbol.role||'Meaning is defined in this card.')),card.slug+': '+symbol.token);
    }
  }
  for(const entry of index.entries)for(const usage of entry.usedBy){
    assert.ok(cards.some(card=>card.slug===usage.slug));
    assert.equal(usage.href,'#card/'+usage.slug);
    assert.ok(usage.contexts.length);
  }
  assert.deepEqual(index.forCard('missing-card'),[]);
});

test('single-letter symbols and English hyphens do not produce prose substring links',()=>{
  const local=MathIndex.create({cards:[fixture({meaning:'An example describes a well-known story.',metadata:{x:'not a mathematical use'}})]});
  for(const id of ['variable','subtraction','imaginary-unit','matrix','vector','alpha'])assert.equal(local.get(id).usedBy.length,0,id);
  const named=MathIndex.create({cards:[fixture({meaning:'The denominator is not permitted to vanish.'})]});
  assert.equal(named.get('denominator').usedBy.length,1);
  assert.equal(named.get('domain').usedBy.length,0,'denominator is not domain');
});

test('TeX token boundaries distinguish commands and lowercase delta from capital delta',()=>{
  const local=MathIndex.create({cards:[fixture({definition:{formal_latex:'\\left(x\\right)\\to\\infty+\\delta',conditions:[]}})]});
  assert.equal(local.get('less-or-equal').usedBy.length,0,'\\le does not match \\left');
  assert.equal(local.get('element').usedBy.length,0,'\\in does not match \\infty');
  assert.equal(local.get('infinity').usedBy.length,1);
  assert.equal(local.get('delta-small').usedBy.length,1);
  assert.equal(local.get('delta-small').usedBy[0].contexts.find(context=>context.via==='formula').token,'\\delta','retain the notation actually matched rather than inventing a local spelling');
  assert.equal(local.get('delta-capital').usedBy.length,0);
  const inequalities=MathIndex.create({cards:[fixture({definition:{formal_latex:'x\\leq3, y\\geq0, z\\neq1',conditions:[]}})]});
  for(const id of ['less-or-equal','greater-or-equal','not-equal'])assert.equal(inequalities.get(id).usedBy.length,1,id);
});

test('a shared variable definition lists only uses of the queried letter',()=>{
  const local=MathIndex.create({cards:[fixture({slug:'uses-m',grammar:{symbols:[{token:'m',meaning:'A declared slope.'}]}}),fixture({slug:'uses-x',grammar:{symbols:[{token:'x',meaning:'A declared input.'}]}})]});
  assert.equal(local.get('variable').usedBy.length,2);
  const scoped=local.markup({query:'m',entryId:'variable'});
  assert.ok(scoped.includes('href="#card/uses-m"'));
  assert.ok(!scoped.includes('href="#card/uses-x"'));
  assert.ok(local.markup({entryId:'variable'}).includes('href="#card/uses-x"'));
  assert.deepEqual(local.search('m').find(entry=>entry.id==='variable').usedBy.map(usage=>usage.slug),['uses-m']);
});

test('single-letter numeric playground controls supply exact usage without prose scanning or duplicate grammar contexts',()=>{
  const matching=index.search('m').filter(entry=>entry.id==='variable').flatMap(entry=>entry.usedBy);
  assert.deepEqual([...new Set(matching.map(usage=>usage.slug))],['function-composition']);
  const context=matching.find(usage=>usage.slug==='function-composition').contexts.find(context=>context.token==='m');
  assert.equal(context.via,'parameter');
  assert.equal(context.location,'Playground controls');
  assert.match(index.markup({query:'m',entryId:'variable'}),/Adjustable numeric model quantity m/);
  const found=index.search('m').find(entry=>entry.id==='variable');
  assert.ok(Object.isFrozen(found)&&Object.isFrozen(found.usedBy)&&Object.isFrozen(found.usedBy[0].contexts));
  const local=MathIndex.create({cards:[fixture({grammar:{symbols:[{token:'x',meaning:'A declared input.'}]},interactive:{controls:[{id:'x',type:'number'},{id:'m',type:'number'},{id:'Z',type:'number'},{id:'word',type:'number'},{id:'n',type:'enum'}]}})]});
  const uses=local.get('variable').usedBy[0].contexts;
  assert.equal(uses.filter(context=>context.token==='x').length,1);
  assert.equal(uses.find(context=>context.token==='x').via,'grammar');
  assert.equal(uses.find(context=>context.token==='m').via,'parameter');
  assert.ok(!uses.some(context=>context.token==='word'||context.token==='n'));
  assert.ok(local.search('Z').find(entry=>entry.id==='variable').symbols.includes('Z'),'a new module’s numeric letter is searchable without editing the term catalog');
});

test('ambiguous symbols preserve per-card meanings and contextual notation retains sources',()=>{
  const amplitude=index.get('amplitude');
  assert.ok(!amplitude.usedBy.some(usage=>['matrix-linear-map','determinant'].includes(usage.slug)));
  for(const entry of index.entries.filter(entry=>entry.contextual)){
    assert.ok(entry.usedBy.length);
    assert.ok(entry.sources.length,entry.id+' retains the card definition source');
  }
  const local=MathIndex.create({cards:[fixture({grammar:{symbols:[{token:'localName',role:'output',meaning:'Exact local meaning.'}]},definition:{source_refs:['local']}})],sources:[{id:'local',title:'Official source',url:'https://example.org/math'}]});
  const contextual=local.forCard('fixture').find(entry=>entry.contextual);
  assert.equal(contextual.usedBy[0].contexts[0].meaning,'Exact local meaning.');
  assert.equal(contextual.sources[0].url,'https://example.org/math');
});

test('markup escapes authored card notation and excludes unsafe source protocols',()=>{
  const local=MathIndex.create({cards:[fixture({title:'<script>card</script>',grammar:{symbols:[{token:'<tag>',meaning:'<img src=x onerror=alert(1)>'}]},definition:{source_refs:['unsafe']}})],sources:[{id:'unsafe',title:'Unsafe',url:'javascript:alert(1)'}]});
  const entry=local.forCard('fixture').find(item=>item.contextual),html=local.markup({entryId:entry.id,query:'<script>'});
  assert.ok(html.includes('&lt;tag&gt;'));
  assert.ok(html.includes('&lt;img'));
  assert.ok(!html.includes('<script>')&&!html.includes('javascript:'));
  assert.match(html,/growing reference/);
  assert.match(local.markup({query:'unlisted-phrase-with-no-entry-4907'}),/Clear search/);
});

class Control{
  constructor(host,attributes={}){this.host=host;this.attributes=attributes;this.value='';this.innerHTML='';this.textContent='';this.hidden=false;this.focused=false;}
  getAttribute(name){return this.attributes[name]??null;}
  hasAttribute(name){return name in this.attributes;}
  setAttribute(name,value){this.attributes[name]=value;}
  closest(){return this;}
  focus(){this.focused=true;}
  scrollIntoView(){this.scrolls=(this.scrolls||0)+1;}
  querySelector(selector){this.lastFocusedEntry=new Control(this.host,{'data-index-entry':/data-index-entry="([^"]+)"/.exec(selector)?.[1]});return this.lastFocusedEntry;}
}
class Host{
  constructor(){this.listeners=new Map();this.writes=0;this.nodes={};for(const name of ['search','category','list','detail','status','letters','symbols'])this.nodes[name]=new Control(this);this.modes=['all','symbols','az'].map(mode=>new Control(this,{'data-index-mode':mode}));this.letters=['','A','P'].map(letter=>new Control(this,{'data-index-letter':letter}));this.symbolButtons=index.symbolCatalog().forms.map(form=>new Control(this,{'data-index-symbol':form.symbol}));}
  set innerHTML(value){this.html=value;this.writes++;}
  get innerHTML(){return this.html;}
  querySelector(selector){return this.nodes[/\[data-index-(\w+)\]/.exec(selector)?.[1]]||null;}
  querySelectorAll(selector){return selector==='[data-index-mode]'?this.modes:selector==='[data-index-symbol]'?this.symbolButtons:this.letters;}
  contains(target){return target?.host===this;}
  addEventListener(type,fn){this.listeners.set(type,fn);}
  removeEventListener(type,fn){if(this.listeners.get(type)===fn)this.listeners.delete(type);}
  emit(type,target,extra={}){this.listeners.get(type)?.({target,preventDefault(){},...extra});}
}

test('mounted search keeps its input stable, recovers from no results and cleans every listener',()=>{
  const host=new Host(),navigation=[],view=index.mount(host,{onNavigate:state=>navigation.push(state)}),query=host.nodes.search;
  query.focus();query.value='unlisted-phrase-with-no-entry-4907';host.emit('input',query);
  assert.equal(view.getState().entryId,null);
  assert.match(host.nodes.detail.innerHTML,/No matching entry yet/);
  assert.equal(navigation.at(-1).entryId,null,'search navigation keeps a query route');
  query.value='δ';host.emit('input',query);
  assert.equal(view.getState().entryId,'delta-small');
  assert.match(host.nodes.detail.innerHTML,/Small delta/);
  assert.equal(host.writes,1,'search never replaces its containing controls');
  assert.equal(host.nodes.search,query);
  assert.equal(query.focused,true);
  host.emit('keydown',query,{key:'Escape'});
  assert.equal(query.value,'');
  const quick=new Control(host,{'data-index-query':'Δ'});host.emit('click',quick);
  assert.equal(view.getState().entryId,'delta-capital');
  assert.equal(view.select('projection'),true);
  assert.equal(navigation.at(-1).entryId,'projection');
  assert.equal(view.select('missing-entry'),false);
  const entryButton=new Control(host,{'data-index-entry':'delta-capital'});host.emit('click',entryButton,{detail:0});
  assert.equal(host.nodes.list.lastFocusedEntry.focused,true,'keyboard activation restores focus after replacing a result button');
  assert.equal(host.listeners.size,4);
  view.destroy();view.destroy();
  assert.equal(host.listeners.size,0);
  assert.equal(view.select('addition'),false);
});

test('the visual catalog contains every declared form and every variant without duplicate buttons or lost owners',()=>{
  const catalog=index.symbolCatalog(),forms=new Map(catalog.forms.map(form=>[form.symbol,form]));
  assert.equal(catalog,index.symbolCatalog(),'the inert catalog projection is reused');
  assert.ok(Object.isFrozen(catalog)&&Object.isFrozen(catalog.forms)&&Object.isFrozen(catalog.groups));
  assert.equal(forms.size,catalog.forms.length);
  for(const entry of index.entries)for(const symbol of entry.symbols){
    assert.ok(forms.has(symbol),entry.id+' / '+symbol+' is visible');
    assert.ok(forms.get(symbol).entryIds.includes(entry.id),symbol+' retains '+entry.id);
  }
  assert.deepEqual(new Set(catalog.groups.flatMap(group=>group.forms.map(form=>form.symbol))),new Set(forms.keys()),'grouping omits no form');
  assert.equal(catalog.groups.reduce((sum,group)=>sum+group.forms.length,0),forms.size,'each form is grouped once');
  for(const token of ['Σ','∑','δ','Δ','ϵ','ϑ','∂F/∂y','C(xₖ,yₖ)','ms/item','m² per unit setting','∑xᵢ','∑Xᵢ','W₀','V(t)'])assert.ok(forms.has(token),token);
  assert.deepEqual(forms.get('μ').entryIds,['mu','population-mean']);
  assert.deepEqual(forms.get('Σ').entryIds,['sigma-capital']);
  assert.deepEqual(forms.get('∑').entryIds,['summation']);
  const initial=index.markup({query:'no-matching-word-8907',category:'calculus',mode:'az',letter:'P'});
  assert.equal((initial.match(/data-index-symbol="/g)||[]).length,forms.size,'filters never truncate the catalog');
  assert.match(initial,/<details class="index-symbol-catalog" data-index-symbols>/,'the full catalog uses a closed native disclosure');
  assert.ok(initial.includes('data-index-symbol="&lt;"'),'literal comparison signs are escaped in attributes');
  assert.ok(!initial.includes('data-index-symbol="\\frac"'),'lookup commands are not presented as visible glyphs');
});

test('additional local forms include actual math while excluding prose, raw keys and TeX spellings',()=>{
  const tokens=['W(n)','x₀','sin(t)','AB','leftValue','sampleSum/n','foo_bar','a prose note','\\frac{a}{b}'];
  const local=MathIndex.hydrate({formatVersion:1,cardSlugs:['fixture'],entries:[{
    ...index.get('function-notation'),symbols:['f(x)','sin'],category:'future-category',
    usedBy:[{slug:'fixture',title:'Fixture',href:'#card/fixture',contexts:tokens.map(token=>({token,via:'grammar',meaning:'A locally declared quantity.',location:'Grammar'}))}]
  }]});
  const catalog=local.symbolCatalog(),forms=catalog.forms.map(form=>form.symbol);
  assert.deepEqual(forms,['f(x)','sin','W(n)','x₀','sin(t)','AB']);
  assert.equal(catalog.groups[0].id,'other','a future category cannot hide indexed forms');
  for(const token of forms)assert.ok(local.search(token).some(entry=>entry.id==='function-notation'),token+' opens its owner');
});

test('every catalog button opens a search containing all of its actual definition owners',()=>{
  for(const form of index.symbolCatalog().forms){
    const hits=new Set(index.search(form.symbol).map(entry=>entry.id));
    for(const id of form.entryIds)assert.ok(hits.has(id),form.symbol+' retains '+id);
  }
});

test('new local catalog forms scope usage to their exact mathematics instead of every card using the general reader',()=>{
  for(const [symbol,id,slugs] of [['∑xᵢ','summation',['population-sample','variance']],['∑Xᵢ','summation',['population-sample']],['b^(−x)','reciprocal',['exponentiation']]]){
    assert.equal(index.isNotation(symbol),true,symbol+' is recognized as an exact local notation query');
    assert.deepEqual(index.search(symbol).find(entry=>entry.id===id).usedBy.map(usage=>usage.slug),slugs);
  }
  const declared=new Set(index.entries.flatMap(entry=>entry.symbols));
  for(const form of index.symbolCatalog().forms.filter(form=>!declared.has(form.symbol))){
    const normalized=Notation.normalize(form.symbol);
    const actualCards=new Set(index.entries.flatMap(entry=>entry.usedBy.filter(usage=>usage.contexts.some(context=>['grammar','parameter','story'].includes(context.via)&&Notation.normalize(context.token)===normalized)).map(usage=>usage.slug)));
    assert.ok(actualCards.size,form.symbol+' has an exact local declaration');
    for(const entry of index.search(form.symbol))for(const usage of entry.usedBy){
      assert.ok(actualCards.has(usage.slug),form.symbol+' does not borrow '+usage.slug+' through '+entry.id);
      assert.ok(usage.contexts.length);
      assert.ok(usage.contexts.every(context=>context.via!=='term'&&Notation.normalize(context.token)===normalized),form.symbol+' retains exact, non-prose evidence');
    }
  }
});

test('catalog selection clears stale filters, retains other meanings, marks the glyph and brings its definition into view',()=>{
  const host=new Host(),navigation=[],view=index.mount(host,{query:'unlisted-search-591',category:'calculus',mode:'az',letter:'P',onNavigate:state=>navigation.push(state)});
  host.nodes.symbols.open=true;
  const omega=host.symbolButtons.find(button=>button.getAttribute('data-index-symbol')==='Ω');host.emit('click',omega);
  assert.deepEqual(view.getState(),{query:'Ω',category:'all',mode:'all',letter:'',entryId:'sample-space'});
  assert.match(host.nodes.list.innerHTML,/data-index-entry="sample-space"/);
  assert.match(host.nodes.list.innerHTML,/data-index-entry="omega-capital"/);
  assert.equal(host.nodes.symbols.open,false);
  assert.equal(host.nodes.detail.focused,true);
  assert.equal(host.nodes.detail.scrolls,1);
  assert.equal(omega.getAttribute('aria-pressed'),'true');
  assert.equal(navigation.at(-1).entryId,'sample-space','a selected form has a shareable definition route');
  const sigma=host.symbolButtons.find(button=>button.getAttribute('data-index-symbol')==='Σ');host.emit('click',sigma);
  assert.equal(view.getState().entryId,'sigma-capital');
  assert.ok(!host.nodes.list.innerHTML.includes('data-index-entry="summation"'));
  assert.equal(omega.getAttribute('aria-pressed'),'false');
  const sum=host.symbolButtons.find(button=>button.getAttribute('data-index-symbol')==='∑');host.emit('click',sum);
  assert.equal(view.getState().entryId,'summation');
  assert.ok(!host.nodes.list.innerHTML.includes('data-index-entry="sigma-capital"'));
  const scrolls=host.nodes.detail.scrolls;host.nodes.search.value='δ';host.emit('input',host.nodes.search);
  assert.equal(view.getState().entryId,'delta-small');
  assert.equal(host.nodes.detail.scrolls,scrolls,'typing never forces a new scroll');
  view.destroy();
});
