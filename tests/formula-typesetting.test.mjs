import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Compiler=require('../tools/build_mathml.cjs');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const data=Compiler.compile(cards);
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const decode=value=>value.replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
const app=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
function code(name,next){const a=app.indexOf('function '+name+'('),b=app.indexOf('\nfunction '+next+'(',a);assert.ok(a>=0&&b>a);return app.slice(a,b);}

test('every canonical headline is deterministically compiled to annotated native MathML',()=>{
 assert.equal(data.formatVersion,1);assert.deepEqual(data.compiler,{name:'Temml',version:'0.13.5'});
 assert.deepEqual(Object.keys(data.bySlug).sort(),cards.map(card=>card.slug).sort());
 assert.deepEqual(Compiler.compile([...cards].reverse()),data);
 for(const card of cards){const markup=data.bySlug[card.slug];assert.match(markup,/^<math [^>]*xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML"/);assert.match(markup,/<mi[ >]/,card.slug+' has structured mathematical identifiers');const annotation=markup.match(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/)?.[1];assert.equal(decode(annotation),card.definition.formal_latex,card.slug);assert.doesNotMatch(markup,/tml-error|<script|<iframe|<img/i);}
});

test('fractions, indices, sums, matrices and quantifiers retain mathematical structure',()=>{
 assert.match(data.bySlug.derivative,/<mfrac>/);assert.match(data.bySlug.derivative,/<munder>/);
 assert.match(data.bySlug['real-logarithm'],/<msub>/);
 assert.match(data.bySlug['expected-value'],/<munderover>/);assert.match(data.bySlug['expected-value'],/<mo[^>]*>∑<\/mo>/);
 assert.match(data.bySlug['matrix-linear-map'],/<mtable>/);
 assert.match(data.bySlug['quantifier-scope'],/<m[io][^>]*>∀<\/m[io]>/);
 assert.match(data.bySlug['joint-distribution'],/<msub>/);assert.doesNotMatch(data.bySlug['joint-distribution'],/<mtext>p_X\(x\)<\/mtext>/);
});

test('bad definitions fail the build with the card identity instead of a red text fallback',()=>{
 const card=tex=>({slug:'broken-example',definition:{formal_latex:tex}});
 for(const tex of ['\\unknowncommand','\\frac{a}{','\\href{javascript:alert(1)}{x}','\\includegraphics{https://example.test/image}'])assert.throws(()=>Compiler.compile([card(tex)]),/Cannot typeset broken-example/);
 assert.throws(()=>Compiler.compile([card('')]),/Missing formal_latex/);assert.throws(()=>Compiler.compile([card('x'),card('y')]),/Duplicate formula slug/);assert.throws(()=>Compiler.compile([{slug:'bad id',definition:{formal_latex:'x'}}]),/canonical slug/);assert.throws(()=>Compiler.compile(null),TypeError);
});

test('generated formula data is inert inline and keeps escaped annotations intact',()=>{
 const malicious={slug:'escaped-example',definition:{formal_latex:'\\text{</script><img src=x onerror=alert(1)>}'}},compiled=Compiler.compile([malicious]),source=Compiler.script(compiled);
 assert.doesNotMatch(source,/<\/script|<img|onerror="/i);assert.doesNotMatch(source,/[<>&]/);
 const context=vm.createContext({});vm.runInContext(source,context);assert.deepEqual(JSON.parse(JSON.stringify(context.AtlasFormulaData)),JSON.parse(JSON.stringify(compiled)));
 const existing=fs.readFileSync(new URL('../src/formula-data.js',import.meta.url),'utf8');const built=vm.createContext({});vm.runInContext(existing,built);const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');assert.equal(hash(built.AtlasFormulaData),hash(data),'Run tools/build_mathml.cjs after canonical formula changes.');
});

test('runtime headline helper only selects prepared MathML and preserves inline semantics',()=>{
 const context=vm.createContext({AtlasFormulaData:data});vm.runInContext(code('math','mini'),context);
 for(const card of cards)assert.equal(context.math(card.slug),data.bySlug[card.slug]);
 const inline=context.math('derivative',true);assert.match(inline,/^<math [^>]*display="inline"/);assert.doesNotMatch(inline.slice(0,inline.indexOf('>')),/tml-display|display:block math/);assert.equal(inline.slice(inline.indexOf('>')),data.bySlug.derivative.slice(data.bySlug.derivative.indexOf('>')));assert.throws(()=>context.math('unknown'),/Prepared formula unavailable/);
 const template=fs.readFileSync(new URL('../src/index.html',import.meta.url),'utf8');assert.ok(template.indexOf('formula-data.js')<template.indexOf('app.js'));assert.ok(template.includes('formula.css'));assert.doesNotMatch(template,/<script[^>]+(?:temml|katex)/i);assert.doesNotMatch(code('math','mini'),/renderToString|formal_latex|eval\(/);
});

test('the native math stylesheet needs no font request and contains long formulas in their own scroll area',()=>{
 const css=fs.readFileSync(new URL('../src/formula.css',import.meta.url),'utf8');assert.doesNotMatch(css,/@font-face|Temml\.woff2|url\(["']?https?:/i);assert.match(css,/Cambria Math/);assert.match(css,/overflow-x: auto/);assert.match(css,/min-width: 0/);assert.match(css,/Copyright \(c\) 2020 Ron Kok/);
});

test('an exact rational logarithm is shown as that rational in the result statistic',()=>{
 const result={valid:true,output:2/3,exactDisplay:'2/3',inverse:4,warnings:[]},context=vm.createContext({M:{evaluate:()=>result},D:{isDiscovery:()=>false,has:()=>false},fmt:v=>String(Number(v.toPrecision(5))),esc:escape});
 vm.runInContext(code('renderOutput','wireLab'),context);const host={};context.renderOutput(host,{slug:'real-logarithm'},{base:8,argument:4});assert.match(host.innerHTML,/Exponent y<\/span><strong>2\/3<\/strong>/);assert.doesNotMatch(host.innerHTML,/Exponent y<\/span><strong>0\.66667/);
});
