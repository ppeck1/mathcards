import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),N=require('../src/math-notation.js'),Terms=require('../src/math-terms.js');
const entry=(id,extra={})=>({id,symbols:[],definition:'A test reader for '+id,readAs:id,...extra});
const frozen=value=>{if(value&&typeof value==='object'){assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}};

test('notation inventory loads offline with no DOM, timers, dependencies or formula evaluation',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/math-notation.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasMathNotation.audit,'function');assert.ok(Object.isFrozen(N));
  for(const value of [null,undefined,3,{},[]]){assert.deepEqual(N.classify(value),[]);assert.equal(N.normalize(value),'');assert.deepEqual(N.extract(value),[]);}
  assert.deepEqual(N.classify('(()=>{throw 7})()'),[]);
});

test('field inventory reads declared mathematics and units without crawling prose or AST ids',()=>{
  const card={slug:'sample',title:'A prose title with ∫ is excluded',definition:{formal_latex:'f(x)=x^2',setting:'No prose ∑ crawl'},grammar:{expression_latex:'g(x)=2x',formation_rule:'Apply(g,x).',symbols:[{token:'x',meaning:'The input'}]},interactive:{expression:'f(g(x))',expression_variants:{one:'ast:identifier',two:{expression:'g(f(x))'}},controls:[{id:'speed',unit:'m/s²'}],compute:'eval(code)'},examples:[{steps:[{expression:'f(2)=4',reason:'This prose ∞ stays out'}],result:{exact:'f(2)=4'},inputs:{rule:'g(x)=2x'}}]};
  const stories=[{slug:'sample',id:'s',unit:'m',steps:[{formula:'f({{x}})={{output}}',body:'Prose ∂ excluded'}],calculation:[{template:'{{x}} + {{other}} = {{output}}'}],variables:[{key:'x',symbol:'x',unit:'m'}]},{slug:'other',steps:[{formula:'∮'}]}];
  const fields=N.fieldsFor(card,stories);frozen(fields);assert.ok(fields.some(f=>f.kind==='unit'&&f.text==='m/s²'));assert.ok(fields.some(f=>f.location.includes('expression variants')&&f.text==='g(f(x))'));assert.ok(fields.some(f=>f.location.includes('variable unit')&&f.text==='m'));assert.ok(fields.every(f=>!f.text.includes('{{')&&!f.text.includes('ast:')));
  assert.ok(!fields.some(f=>/[∫∑∞∂∮]/.test(f.text)));assert.ok(!fields.some(f=>f.text.includes('eval')));assert.ok(fields.some(f=>f.text==='f()='),'Placeholder removal must not invent a sample numeric value');
});

test('structured copies resolve to intended readers before generic punctuation',()=>{
  const examples={'E[K]':'expected-value','P(D|F)':'conditional-probability','log₂(8)':'logarithm','log_b(x)':'logarithm','log2(x)':'logarithm','log8(x)':'logarithm','log0.5(x)':'logarithm','log_(1/2)(8)':'logarithm','|cos(φ/2)|':'absolute-value','‖v‖':'magnitude',"f'(a)":'derivative','xₙ₊₁':'subscript','Pₙ':'subscript','dt':'differential','1e-6':'scientific-notation','1e−6':'scientific-notation','½':'fraction','C(6,k)':'binomial-coefficient','hypot(x,y)':'hypot','atan2(y,x)':'atan2','floor(2.4)':'floor','frac(d)':'fractional-part','exp(x)':'exponential-function','AB(x,y)':'matrix-product'};
  for(const [copy,id]of Object.entries(examples)){assert.ok(N.classify(copy).includes(id),copy+' -> '+id);const records=N.extract(copy);assert.equal(records[0].token,copy,copy+' stays whole');assert.ok(records[0].entryIds.includes(id),copy);}
  assert.deepEqual(N.classify('→'),['right-arrow']);assert.ok(N.classify('f:A→B').includes('function-arrow'));assert.ok(N.classify('lim_{x→0} f(x)').includes('limit-arrow'));
  assert.deepEqual(N.classify('exp'),['exponential-function']);assert.deepEqual(N.classify('min'),['minimum']);assert.deepEqual(N.classify('dt'),['differential']);
});

test('normalization equates typed and displayed forms while preserving structural and Greek distinctions',()=>{
  const pairs=[['|cos(φ/2)|','|\\cos(\\phi/2)|'],['log₂(x)','\\log_{2}(x)'],['E[K]','\\mathbb{E}[K]'],['P(D|F)','P(D\\mid F)'],['xₙ₊₁','x_{n+1}'],['Pₙ','P_n'],['x²','x^2'],['½','\\frac{1}{2}'],['½','\\frac12'],['1E-6','1e−6'],['‖v‖','\\lVert v\\rVert'],['...','\\ldots']];
  for(const [a,b]of pairs)assert.equal(N.normalize(a),N.normalize(b),a+' ≡ '+b);
  for(const [a,b]of [['δ','Δ'],['ω','Ω'],['x_{n+1}','x_n+1'],['x²','x₂'],['\\sum','\\Sigma']])assert.notEqual(N.normalize(a),N.normalize(b),a+' differs from '+b);
  assert.deepEqual(N.classify('Σ'),['sigma-capital']);assert.deepEqual(N.classify('Ω'),['omega-capital']);assert.deepEqual(N.classify('∑'),['summation']);assert.deepEqual(N.classify('\\Sigma'),['sigma-capital']);assert.deepEqual(N.classify('\\sum'),['summation']);
});

test('nested structured copies expose inner mathematics, grouping and unknown commands with exact offsets',()=>{
  const source='v + |cos(φ/2)| + f(g(\\mystery(x)))',records=N.extract(source);frozen(records);
  for(const token of ['|cos(φ/2)|','cos(φ/2)','φ','/','f(g(\\mystery(x)))','g(\\mystery(x))','\\mystery','(',')'])assert.ok(records.some(r=>r.token===token),token);
  for(const r of records){assert.equal(source.slice(r.offset,r.end),r.token);assert.equal(r.end-r.offset,r.token.length);}
  const ids=Terms.entries.map(e=>e.id),entries=ids.map(id=>entry(id));const report=N.audit({entries,fields:[{slug:'sample',text:source,location:'Nested formula',kind:'formula'}]});assert.equal(report.complete,false);assert.ok(report.unresolved.some(r=>r.token==='\\mystery'));
  const scripted=N.extract('x_{\\mystery}');assert.ok(scripted.some(r=>r.token==='\\mystery'));
});

test('TeX slash runs are atomic and matrix row breaks never become bogus commands',()=>{
  const source=String.raw`\begin{pmatrix}a&b\\c&d\end{pmatrix}`,records=N.extract(source,{kind:'tex'});
  assert.ok(records.some(r=>r.token==='\\\\'&&r.kind==='formatting'));assert.ok(!records.some(r=>r.token==='\\c'));assert.ok(records.some(r=>r.token==='\\begin'&&r.kind==='formatting'));assert.ok(records.some(r=>r.token==='\\end'&&r.kind==='formatting'));
  for(const slashes of ['\\\\\\','\\\\\\\\']){const result=N.extract(slashes+'frac{x}{y}',{kind:'tex'});assert.equal(result[0].token,slashes);assert.equal(result[0].kind,'invalid');assert.ok(!result.some(r=>r.token==='\\frac'));}
  assert.ok(N.extract('\\').some(r=>r.kind==='invalid'));assert.ok(N.extract('\\mathbb{R').some(r=>r.kind==='invalid'));assert.ok(N.extract('\\binom{a}').some(r=>r.kind==='invalid'));
});

test('unique existence and TeX fraction commands retain their semantics',()=>{
  for(const source of ['∃!','\\exists!']){const records=N.extract(source,{kind:'tex'});assert.deepEqual(records[0].entryIds,['unique-exists']);assert.ok(!records.some(r=>r.entryIds.includes('factorial')));}
  assert.ok(N.classify('\\frac').includes('fraction'));assert.ok(!N.classify('\\frac').includes('fractional-part'));assert.deepEqual(N.classify('frac(d)'),['fractional-part']);assert.ok(N.extract('n!').some(r=>r.entryIds.includes('factorial')));
  assert.ok(!N.extract('cx+dy').some(r=>r.entryIds.includes('differential')));assert.ok(N.extract('∫ v(t) dt').some(r=>r.token==='dt'&&r.entryIds.includes('differential')));
});

test('unit contexts cannot resolve by borrowing an unrelated local letter meaning',()=>{
  const card={slug:'sample',grammar:{symbols:[{token:'m',meaning:'A slope'}]}},variables=[entry('variable',{symbols:['m']})];
  let r=N.audit({cards:[card],entries:variables,fields:[{slug:'sample',text:'m',kind:'unit'}]});assert.equal(r.unresolved.filter(x=>x.kind==='unit').length,1);assert.ok(r.records.find(x=>x.kind==='unit').resolvedIds.length===0);
  r=N.audit({cards:[card],entries:[...variables,entry('measurement-unit-symbols')],fields:[{slug:'sample',text:'m',kind:'unit'}]});assert.deepEqual(r.records.find(x=>x.kind==='unit').resolvedIds,['measurement-unit-symbols']);
  assert.deepEqual(N.classify('m'),[]);assert.deepEqual(N.classify('m',{kind:'unit'}),['measurement-unit-symbols']);assert.deepEqual(N.extract('m/s²',{kind:'unit'})[0].entryIds,['compound-unit']);assert.deepEqual(N.extract('m horizontally',{kind:'unit'})[0].entryIds,['measurement-unit-symbols']);
  for(const descriptor of ['score units','signal units','reference areas','expected seedlings','normalized amplitude','fraction of flagged items'])assert.ok(N.extract(descriptor,{kind:'unit'})[0].entryIds.length,descriptor);
  assert.deepEqual(N.extract('imaginary hardware units',{kind:'unit'})[0].entryIds,[],'An undeclared unit label must remain unresolved');
});

test('scoped exact letter and stacked-form readers do not leak into unrelated cards',()=>{
  const cards=[{slug:'graph-theory',grammar:{symbols:[{token:'A',meaning:'A graph node'}]}},{slug:'matrix-product',grammar:{symbols:[{token:'A',meaning:'A matrix'}]}}],entries=[entry('matrix',{symbols:['A'],grammarCards:['matrix-product']})];
  const report=N.audit({cards,entries});assert.ok(report.unresolved.some(r=>r.slug==='graph-theory'&&r.token==='A'));assert.deepEqual(report.records.find(r=>r.slug==='matrix-product'&&r.token==='A').resolvedIds,['matrix']);
  const readers=[entry('column-vector',{formulaCards:['basis']}),entry('binomial-coefficient',{formulaCards:['probability']}),entry('curly-braces')];
  const r=N.audit({entries:readers,fields:[{slug:'basis',text:'\\binom{1}{2}',kind:'tex'},{slug:'probability',text:'\\binom{1}{2}',kind:'tex'},{slug:'other',text:'\\binom{1}{2}',kind:'tex'}]});assert.deepEqual(r.records.find(x=>x.slug==='basis'&&x.kind==='structured').resolvedIds,['column-vector']);assert.deepEqual(r.records.find(x=>x.slug==='probability'&&x.kind==='structured').resolvedIds,['binomial-coefficient']);assert.ok(r.unresolved.some(x=>x.slug==='other'&&x.kind==='structured'));
});

test('explicit reference fields permit background readers without creating card usages',()=>{
  const entries=[entry('background',{symbols:['⊤'],formulaCards:[]})],field={text:'⊤',location:'Reference example',kind:'formula'};
  const report=N.audit({entries,fields:[{...field,slug:'installed-card'},{...field,slug:'reference:background',ownerEntryId:'background'}]});assert.ok(report.unresolved.some(r=>r.slug==='installed-card'));assert.deepEqual(report.records.find(r=>r.reference).resolvedIds,['background']);assert.equal(report.records.find(r=>r.reference).ownerEntryId,'background');assert.ok(!Object.hasOwn(entries[0],'usedBy'));
});

test('known helper readers and unknown plain callables receive explicit review rather than substring guesses',()=>{
  const entries=Terms.entries;const r=N.audit({entries,fields:[{slug:'sample',text:'hypot(3,4)+atan2(4,3)+floor(2.5)+frac(2.5)',kind:'formula'},{slug:'sample',text:'mysteryHelper(x)',kind:'formula'},{slug:'sample',text:'coordinates (x,y) and (a,b)',kind:'formula'}]});
  for(const id of ['hypot','atan2','floor','fractional-part'])assert.ok(r.records.some(record=>record.entryIds.includes(id)),id);
  assert.deepEqual(r.review.map(item=>item.token),['mysteryHelper']);assert.equal(r.complete,false);assert.ok(!N.classify('dt').includes('length'));assert.ok(!N.classify('min').includes('denominator'));
});

test('unknown symbols and semantic macros stay unresolved even inside known structures',()=>{
  const entries=Terms.entries;for(const text of ['|cos(\\newOperator(x))|','E[\\newOperator(x)]','x_{\\newOperator}','\\operatorname{newOperator}(x)','f(⫷)']){const r=N.audit({entries,fields:[{slug:'sample',text,kind:'tex'}]});assert.equal(r.complete,false,text);assert.ok(r.unresolved.length||r.review.length,text);}
  const report=N.audit({entries:[entry('addition')],fields:[{slug:'sample',text:'+',kind:'formula'}]});assert.equal(report.complete,true);frozen(report);assert.deepEqual(report.records[0].resolvedIds,['addition']);assert.equal(report.counts.unresolved,0);
});

test('native reference forms preserve set operations, units, named operators and placeholder scope',()=>{
  const readers={'Pr(A)':'probability','span(u,v)':'span','tr(A)':'matrix-trace','ker(A)':'kernel','im(A)':'image-of-map','comp_u(v)':'scalar-projection','SD(X)':'standard-deviation','sd(X)':'standard-deviation','Bin(n,p)':'binomial-distribution','A\\B':'set-difference','~':'distribution-notation'};
  for(const [copy,id]of Object.entries(readers)){assert.ok(N.classify(copy).includes(id),copy);assert.ok(N.extract(copy).some(r=>r.entryIds.includes(id)),copy);}
  assert.ok(N.extract('A\\B',{kind:'tex'}).some(r=>r.token==='\\B'&&r.kind==='command'),'A plain set-difference spelling must not legitimize an unknown TeX command');
  for(const unit of ['m·s⁻¹','m·s⁻²'])assert.deepEqual(N.classify(unit,{kind:'unit'}),['compound-unit']);assert.equal(N.normalize('m·s⁻²'),N.normalize('m/s²'));
  const r=N.audit({entries:[entry('variable')],fields:[{slug:'installed-card',text:'z',kind:'formula'},{slug:'reference:example',text:'z',kind:'formula'}]});assert.ok(r.unresolved.some(row=>row.slug==='installed-card'));assert.deepEqual(r.records.find(row=>row.reference).resolvedIds,['variable']);assert.equal(r.records.find(row=>row.reference).referencePlaceholder,true);
});

test('installed canonical mathematics, stories and the reference dictionary have no unexplained syntax',()=>{
  const directory=new URL('../content/cards/',import.meta.url),cards=fs.readdirSync(directory).filter(file=>file.endsWith('.json')).map(file=>JSON.parse(fs.readFileSync(new URL(file,directory),'utf8'))),Stories=require('../src/story-library.js');
  const fields=Terms.entries.flatMap(e=>[{slug:'reference:'+e.id,ownerEntryId:e.id,text:e.example,location:'Reference example',kind:'formula'},...(e.symbols||[]).map(symbol=>({slug:'reference:'+e.id,ownerEntryId:e.id,text:symbol,location:'Reference symbol',kind:e.notationKinds?.includes('unit')?'unit':'formula'}))]);
  const report=N.audit({cards,stories:Stories.all(),entries:Terms.entries,fields});assert.deepEqual(report.unresolved.map(r=>({slug:r.slug,token:r.token,location:r.location})),[]);assert.deepEqual(report.review,[]);assert.equal(report.complete,true);assert.ok(report.counts.uniqueTokens>500);assert.ok(report.counts.occurrences>5000);
});
