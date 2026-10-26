/* Finite public-content audit: no browser, storage, network or arbitrary formula execution. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Index=require('../src/math-index.js'),Stories=require('../src/story-library.js'),Modules=require('../src/playground-modules.js'),Previews=require('../src/card-previews.js');
const cards=fs.readdirSync(path.join(root,'content/cards')).filter(name=>name.endsWith('.json')).sort().map(name=>JSON.parse(fs.readFileSync(path.join(root,'content/cards',name),'utf8')));
const stories=Stories.all(),sources=JSON.parse(fs.readFileSync(path.join(root,'content/sources.json'),'utf8')).sources,index=Index.create({cards,sources,stories});
const authored=new Set(Terms.entries.map(entry=>entry.id)),entries=[...Terms.entries,...index.entries.filter(entry=>!authored.has(entry.id))];
const decode=text=>text.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const fields=[],uiExclusions=[];
function markupFields(slug,html,location){
  for(const match of html.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)){
    let text=decode(match[1]);
    if(['function','exponentiation','limit','signed-accumulation'].includes(slug)&&/^.+ = .+ ↔$/.test(text)){
      uiExclusions.push({slug,location,text,reason:'The foundations rail appends a horizontal-drag hint; this suffix is a gesture icon, not a logical relation.'});text=text.slice(0,-2);
    }
    fields.push({slug,text,location:location+' · scene label',kind:'formula'});
  }
}
for(const model of Modules.list()){
  const defaults=model.defaults(),cases=[{name:'default',parameters:defaults}];
  for(const control of model.controls){
    const values=control.type==='select'?control.options.map(option=>option.value):[control.min,control.max,...(control.min<=0&&control.max>=0?[0]:[]),...(control.min<=1e-6&&control.max>=1e-6?[1e-6]:[])];
    for(const value of new Set(values))cases.push({name:control.key+'='+value,parameters:{...defaults,[control.key]:value}});
  }
  const zeros={...defaults};for(const control of model.controls)if(control.type==='number'&&control.min<=0&&control.max>=0)zeros[control.key]=0;
  cases.push({name:'all permitted zeros',parameters:zeros});
  for(const sample of cases){
    const checked=model.validateParams(sample.parameters);if(!checked.valid)continue;
    const result=model.evaluate(checked.parameters);
    for(const view of model.views){
      markupFields(model.id,model.views.find(item=>item.id===view.id).render(checked.parameters,{id:'notation-audit',view:view.id,compact:false,baseline:defaults,camera:.65}),sample.name+' · '+view.id);
      const reading=model.readout?.(checked.parameters,result,{format:value=>value===null?'Undefined':String(value),view:view.id});
      if(reading?.expression)fields.push({slug:model.id,text:reading.expression,location:sample.name+' · '+view.id+' readout',kind:'formula'});
    }
  }
  markupFields(model.id,Previews.render(model.id), 'Explore illustration');
}
for(const entry of Terms.entries){
  fields.push({slug:'reference:'+entry.id,reference:true,text:entry.example,location:'Reference example · '+entry.title,kind:'formula'});
  for(const token of entry.symbols)fields.push({slug:'reference:'+entry.id,reference:true,text:token,location:'Reference symbol · '+entry.title,kind:entry.category==='units'?'unit':'formula'});
}
const audit=Notation.audit({cards,stories,entries,fields});
if(audit.counts.fields<fields.length)throw new Error('Notation audit omitted runtime fields.');
const grouped=new Map();for(const item of audit.unresolved){const key=item.token+'\0'+item.kind,row=grouped.get(key)||{token:item.token,kind:item.kind,count:0,candidateIds:item.candidateIds,example:{slug:item.slug,location:item.location,text:item.text}};row.count++;grouped.set(key,row);}
const review=new Map();for(const item of audit.review||[]){const row=review.get(item.token)||{...item,count:0};row.count++;review.set(item.token,row);}
const result={scope:'Canonical formulas, worked mathematics, story math/units, generated scene/readout labels across declared control boundaries, and the reference examples/symbols themselves. No private records or UI icon crawl.',counts:audit.counts,complete:audit.complete,indexEntries:index.entries.length,authoredEntries:Terms.entries.length,runtimeFields:fields.filter(field=>!field.reference).length,referenceFields:fields.filter(field=>field.reference).length,uiExclusions,review:[...review.values()],unresolved:[...grouped.values()].sort((a,b)=>b.count-a.count)};
const output=process.argv.indexOf('--report');if(output>=0){const target=path.resolve(root,process.argv[output+1]||'qa-notation-report.json');if(!target.startsWith(root+path.sep))throw new Error('Report must stay in the project.');fs.writeFileSync(target,JSON.stringify(result,null,2)+'\n');}
console.log(JSON.stringify({...result,uiExclusions:{count:uiExclusions.length,reasons:[...new Set(uiExclusions.map(row=>row.reason))]},unresolved:result.unresolved.slice(0,50)},null,2));
process.exitCode=audit.complete?0:1;
