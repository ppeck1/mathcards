/* A searchable reference with explicit links to the cards that use each term. */
(function(root,factory){const node=typeof module==='object'&&module.exports;const api=factory(node?require('./math-terms.js'):root.AtlasMathTerms,node?require('./math-notation.js'):root.AtlasMathNotation);if(node)module.exports=api;root.AtlasMathIndex=api;})(typeof globalThis!=='undefined'?globalThis:this,function(Terms,Notation){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const fold=value=>String(value??'').normalize('NFC').replace(/[A-Z]/g,c=>c.toLowerCase()).replace(/[’']/g,'').replace(/[−–—]/g,'-').replace(/\s+/g,' ').trim();
  const reEscape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const safeURL=url=>typeof url==='string'&&/^https:\/\//i.test(url)?url:null;
  const categories=[['operations','Numbers & operations'],['language','Mathematical language'],['functions','Functions & rules'],['geometry','Geometry & measurement'],['calculus','Calculus & change'],['chance','Probability & inference'],['dynamics','Patterns & dynamics'],['linear','Vectors & matrices'],['greek','Greek letters'],['notation','Reading notation'],['sets','Sets & logic'],['discrete','Counting & sequences'],['units','Units & measurement'],['card-notation','Card-specific notation']];
  const noWordAliases=new Set(['given','result','every','output','input','real','initial','width','height','dimension','unit','finite','average']);
  const localUse=context=>['grammar','parameter','story','notation'].includes(context.via);
  function readLocalToken(token){
    const normalized=Notation?Notation.normalize(token):token;
    return normalized.replace(/_\{([^}]+)\}/g,' subscript $1').replace(/\^\{([^}]+)\}/g,' to the power $1').replace(/′/g,' prime').replace(/([a-z])([A-Z])/g,'$1 $2').replace(/_/g,' subscript ').replace(/\b0\b/g,'zero').replace(/\b1\b/g,'one').trim();
  }
  let nextMount=0;
  function readableFields(card){
    const sections=[['Title',card.title],['Purpose',card.purpose],['Meaning',card.meaning],['Definition',card.definition?.setting],['Definition',card.definition?.domain_notes],...(card.definition?.conditions||[]).map(text=>['Conditions',text]),...(card.properties||[]).flatMap(property=>[['Property',property.claim],['Property',property.derivation],['Property conditions',property.conditions]]),...(card.examples||[]).flatMap(example=>[['Worked example',example.title],['Worked example',example.setting],['Worked example',example.interpretation],['Worked example limits',example.limits],['Independent check',example.independent_check?.method],['Independent check',example.independent_check?.expected],...(example.assumptions||[]).map(text=>['Worked example assumptions',text]),...(example.conditions_to_check||[]).map(text=>['Worked example conditions',text]),...(example.steps||[]).flatMap(step=>[['Worked example',step.expression],['Worked example',step.reason]])]),...(card.prompts||[]).flatMap(prompt=>[['Question',prompt.prompt||prompt.question],['Answer',prompt.answer]]),...(card.applications||[]).flatMap(application=>[['Application',application.context],['Application',application.mapping],['Application limits',application.limitations]])];
    sections.push(['Playground description',card.interactive?.description],...(Array.isArray(card.representations)?card.representations:[]).map(view=>['Representation description',view?.description]));
    return sections.filter(([,text])=>typeof text==='string'&&text.length).map(([section,text])=>({section,text,folded:fold(text)}));
  }
  function mathFields(card){return[card.definition?.formal_latex,card.grammar?.formation_rule,...(card.examples||[]).flatMap(example=>(example.steps||[]).map(step=>step.expression))].filter(text=>typeof text==='string').join('\n');}
  function phraseMatcher(phrase){
    const value=fold(phrase);
    const boundary=new RegExp('(^|[^\\p{L}\\p{N}_])'+reEscape(value)+'(?=$|[^\\p{L}\\p{N}_])','u');
    // Most fields do not contain the phrase. Avoid a Unicode boundary scan in
    // that common case, and compile each phrase only once per compilation.
    return text=>Boolean(value)&&text.includes(value)&&boundary.test(text);
  }
  function mathIn(math,token){
    if(/^\\[A-Za-z]+$/.test(token))return new RegExp(reEscape(token)+'(?![A-Za-z])').test(math);
    return math.includes(token);
  }
  function compile({cards=[],sources=[],stories=[]}={}){
    if(!Array.isArray(cards)||!Array.isArray(sources))throw new TypeError('Index cards and sources must be arrays.');
    const validCards=cards.filter(card=>card&&typeof card.slug==='string'&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(card.slug));
    const sourceMap=new Map(sources.filter(source=>source&&typeof source.id==='string').map(source=>[source.id,{title:String(source.title||source.id),url:safeURL(source.url)}]));
    const work=Terms.entries.map(entry=>({...entry,symbols:[...entry.symbols],aliases:[...entry.aliases],lookupAliases:[...(entry.lookupAliases||[])],usedBy:[],contextual:false,sources:entry.sourceKeys.map(key=>Terms.sources[key]).filter(Boolean).map(source=>({...source}))}));
    const cardInfo=validCards.map(card=>{
      const mathSources=Notation?Notation.fieldsFor(card,stories):[{text:mathFields(card),kind:'tex',location:'Formula'}];
      const localBindings=new Map();
      for(const entry of work)if(entry.grammarCards?.includes(card.slug))for(const token of entry.tokens||entry.symbols){if(!/^(?:[A-Za-z]|\|[^|]+\||≡|⊨)$/.test(token))continue;const form=Notation?Notation.normalize(token):token,bound=localBindings.get(form)||new Set();bound.add(entry.id);localBindings.set(form,bound);}
      return{card,localBindings,fields:readableFields(card),math:mathSources.filter(field=>field.kind!=='unit').map(field=>field.text).join('\n'),notation:Notation?mathSources.flatMap(field=>Notation.extract(field.text,{kind:field.kind,slug:card.slug}).filter(record=>!['formatting','invalid'].includes(record.kind)).map(record=>({...record,normalizedToken:Notation.normalize(record.token),location:field.location,sourceKind:field.kind}))):[],grammar:(card.grammar?.symbols||[]).filter(symbol=>symbol&&typeof symbol.token==='string')};
    });
    function use(entry,card,context){
      let usage=entry.usedBy.find(item=>item.slug===card.slug);
      if(!usage){usage={slug:card.slug,title:String(card.title||card.slug),href:'#card/'+card.slug,contexts:[]};entry.usedBy.push(usage);}
      if(context.via==='notation'&&usage.contexts.some(item=>item.token===context.token&&['grammar','parameter'].includes(item.via)))return;
      if(['grammar','parameter'].includes(context.via))usage.contexts=usage.contexts.filter(item=>item.token!==context.token||item.via!=='notation');
      if(!usage.contexts.some(item=>item.token===context.token&&item.via===context.via&&item.meaning===context.meaning))usage.contexts.push(context);
    }
    const grammarCovered=new Map(validCards.map(card=>[card.slug,new Set()]));
    const matchers=new Map();
    for(const entry of work){
      const exactTokens=entry.tokens||entry.symbols.filter(token=>token.length>1||!/^[A-Za-z]$/.test(token));
      const notationForms=new Set([...entry.symbols,...(entry.lookupAliases||[]),...(entry.mathSymbols||[])]);
      const words=(entry.wordMatches||[entry.title,...entry.aliases.filter(alias=>(alias.length>=5||alias.includes(' '))&&!noWordAliases.has(alias))]).map(word=>{if(!matchers.has(word))matchers.set(word,phraseMatcher(word));return matchers.get(word);});
      for(const info of cardInfo){
        const {card}=info;
        for(const symbol of info.grammar){
          const preferred=info.localBindings.get(Notation?Notation.normalize(symbol.token):symbol.token);
          if(preferred?.size&&!preferred.has(entry.id))continue;
          if(exactTokens.includes(symbol.token)&&(!entry.grammarCards||entry.grammarCards.includes(card.slug))){
            use(entry,card,{token:symbol.token,meaning:String(symbol.meaning||symbol.role||'Meaning is defined in this card.'),role:String(symbol.role||''),type:String(symbol.type||''),via:'grammar',location:'Grammar'});grammarCovered.get(card.slug).add(symbol.token);
          }
        }
        const mathToken=!Notation&&(!entry.formulaCards||entry.formulaCards.includes(card.slug))&&(entry.mathSymbols||[]).find(token=>mathIn(info.math,token));
        if(mathToken&&!Notation)use(entry,card,{token:mathToken,meaning:'This notation appears in the card’s formula or worked calculations.',role:'',via:'formula',location:'Formula or worked calculation'});
        for(const record of info.notation){
          const unit=record.kind==='unit'||record.sourceKind==='unit';
          if(unit!==(entry.category==='units'))continue;
          const preferred=!unit?info.localBindings.get(record.normalizedToken||record.token):null;
          if(preferred?.size&&!preferred.has(entry.id))continue;
          if(entry.notationKinds?.length&&!entry.notationKinds.includes(record.kind)&&!entry.notationKinds.includes(record.sourceKind))continue;
          if(entry.formulaCards&&!entry.formulaCards.includes(card.slug))continue;
          if(entry.grammarCards&&!entry.grammarCards.includes(card.slug)&&record.kind==='identifier')continue;
          if((record.entryIds||[]).includes(entry.id)||notationForms.has(record.token))use(entry,card,{token:record.token,meaning:'Used here as '+entry.title.toLowerCase()+'.',role:unit?'unit':'notation',via:record.kind==='command'?'formula':'notation',location:record.location});
        }
        const match=info.fields.find(field=>words.some(matches=>matches(field.folded)));
        if(match)use(entry,card,{token:entry.title,meaning:'This term appears in the card’s mathematical explanation.',role:'',via:'term',location:match.section});
      }
    }
    const variable=work.find(entry=>entry.id==='variable');
    for(const {card,grammar} of cardInfo)for(const control of card.interactive?.controls||[]){
      if(control?.type!=='number'||typeof control.id!=='string'||!/^[A-Za-z]$/.test(control.id)||grammar.some(symbol=>symbol.token===control.id))continue;
      if(!variable.symbols.includes(control.id))variable.symbols.push(control.id);
      use(variable,card,{token:control.id,meaning:'Adjustable numeric model quantity '+control.id+'. See this card’s playground expression and conditions for its role.',role:'numeric model control',type:'number',via:'parameter',location:'Playground controls'});
    }
    const unknown=new Map();
    for(const {card,grammar} of cardInfo)for(const symbol of grammar){
      if(grammarCovered.get(card.slug).has(symbol.token))continue;
      let entry=unknown.get(symbol.token);
      if(!entry){
        const id='notation-'+Array.from(symbol.token).map(character=>character.codePointAt(0).toString(16)).join('-');
        entry={id,title:symbol.token,category:'card-notation',symbols:[symbol.token],aliases:[],definition:'In '+String(card.title||card.slug)+', this locally named symbol denotes '+String(symbol.meaning||symbol.role||'a quantity defined by the card')+'. Meanings in other cards retain their own stated context.',example:symbol.token+' — '+String(symbol.meaning||symbol.role||'a locally defined quantity'),readAs:readLocalToken(symbol.token),sourceKeys:[],sources:[],usedBy:[],contextual:true};unknown.set(symbol.token,entry);work.push(entry);
      }
      use(entry,card,{token:symbol.token,meaning:String(symbol.meaning||symbol.role||'Meaning is defined in this card.'),role:String(symbol.role||''),type:String(symbol.type||''),via:'grammar',location:'Grammar'});
      for(const ref of [...(card.source_refs||[]),...(card.definition?.source_refs||[])]){const source=sourceMap.get(ref);if(source?.url&&!entry.sources.some(item=>item.url===source.url))entry.sources.push({...source});}
    }
    const availableIds=new Set(work.map(entry=>entry.id));
    const entries=work.map(entry=>{
      entry.usedBy.sort((a,b)=>a.title.localeCompare(b.title,'en'));
      return freeze({id:entry.id,title:entry.title,category:entry.category,symbols:entry.symbols,aliases:entry.aliases,lookupAliases:entry.lookupAliases||[],readAs:entry.readAs,definition:entry.definition,example:entry.example,sources:entry.sources.filter(source=>safeURL(source.url)).map(source=>({...source,url:safeURL(source.url)})),usedBy:entry.usedBy,relatedIds:[...new Set((entry.relatedIds||[]).filter(id=>typeof id==='string'&&id!==entry.id&&availableIds.has(id)))],contextual:entry.contextual});
    });
    return freeze({formatVersion:1,cardSlugs:validCards.map(card=>card.slug),entries});
  }
  // Compilation owns all source scanning. Hydration consumes only its inert
  // projection; card and story text is deliberately unavailable on this path.
  function hydrate(data){
    if(!data||data.formatVersion!==1||!Array.isArray(data.entries)||!Array.isArray(data.cardSlugs))throw new TypeError('Unsupported prebuilt math index. Rebuild the application.');
    const entries=data.entries;
    const bySlug=new Set(data.cardSlugs);
    const byId=new Map(entries.map(entry=>[entry.id,entry]));
    const categoryList=categories.map(([id,title])=>freeze({id,title,count:entries.filter(entry=>entry.category===id).length})).filter(category=>category.count);
    const categoryIds=new Set(categoryList.map(item=>item.id));
    const rows=entries.map((entry,index)=>({entry,index,title:fold(entry.title),aliases:entry.aliases.map(fold),text:fold([entry.title,entry.definition,entry.readAs,...entry.aliases,...entry.symbols,...entry.usedBy.flatMap(usage=>usage.contexts.map(context=>context.meaning))].join(' '))}));
    let cachedSymbols=null;
    // This projection is prepared only when the reference is opened. It reads
    // the inert index, never scans cards, and preserves literal case/variants.
    function symbolCatalog(){
      if(cachedSymbols)return cachedSymbols;
      const forms=new Map();
      const namedForms=new Set(entries.flatMap(entry=>entry.symbols).flatMap(symbol=>/^[A-Za-z]{2,}$/.test(symbol)?[symbol]:/^([A-Za-z]{2,})\(/.exec(symbol)?.slice(1)||[]));
      function visibleLocal(token){
        if(typeof token!=='string'||!token.length||/\s|\\/.test(token))return false;
        if(/^[A-Za-z]+$/.test(token)&&token.length>1&&!/^[A-Z]{2,3}$/.test(token))return false;
        // Extra forms use letter variables or already named mathematical
        // functions. Prose, control keys and raw TeX commands stay out.
        return(token.match(/[A-Za-z]+/g)||[]).every(word=>word.length===1||/^[A-Z]{2,3}$/.test(word)||namedForms.has(word));
      }
      for(const entry of entries){
        const localForms=entry.usedBy.flatMap(usage=>usage.contexts.filter(context=>['grammar','parameter','story'].includes(context.via)).map(context=>context.token)).filter(visibleLocal);
        for(const symbol of [...entry.symbols,...localForms]){
          if(typeof symbol!=='string'||!symbol.length)continue;
          if(!forms.has(symbol))forms.set(symbol,{symbol,category:entry.category,entryIds:[]});
          const form=forms.get(symbol);if(!form.entryIds.includes(entry.id))form.entryIds.push(entry.id);
        }
      }
      const all=[...forms.values()].map(form=>({...form,titles:form.entryIds.map(id=>byId.get(id).title)}));
      const groups=categoryList.map(category=>({id:category.id,title:category.title,forms:all.filter(form=>form.category===category.id)})).filter(group=>group.forms.length);
      const other=all.filter(form=>!categoryIds.has(form.category));if(other.length)groups.push({id:'other',title:'Other indexed notation',forms:other});
      cachedSymbols=freeze({forms:all,groups,meanings:new Set(all.flatMap(form=>form.entryIds)).size});
      return cachedSymbols;
    }
    function get(id){return typeof id==='string'?byId.get(id)||null:null;}
    function search(query='',options={}){
      const raw=typeof query==='string'?query.trim().slice(0,240):'',q=fold(raw),category=categoryIds.has(options.category)?options.category:'all',mode=options.mode==='symbols'?'symbols':'all',letter=/^[A-Z]$/.test(options.letter||'')?options.letter:null;
      const exactNotation=raw.startsWith('\\')||raw.length>0&&!/\s/.test(raw)&&rows.some(row=>row.entry.lookupAliases.includes(raw)||row.entry.symbols.includes(raw)||row.entry.usedBy.some(usage=>usage.contexts.some(context=>localUse(context)&&context.token===raw)));
      const patternIds=Notation?.classify(raw)||[];
      const symbolsOnly=patternIds.length>0||exactNotation||(raw.length>0&&(!/[A-Za-z]{2}/.test(raw))&&(!/\s/.test(raw)));
      return rows.filter(row=>(category==='all'||row.entry.category===category)&&(mode!=='symbols'||row.entry.symbols.length)&&(letter===null||row.entry.title[0]?.toUpperCase()===letter)).map(row=>{
        const exactSymbol=row.entry.symbols.includes(raw)||row.entry.lookupAliases.includes(raw),exactContext=row.entry.usedBy.some(usage=>usage.contexts.some(context=>localUse(context)&&context.token===raw));
        const score=!raw?1:exactSymbol?120:patternIds.includes(row.entry.id)?118:exactContext?115:symbolsOnly?0:row.title===q?110:row.aliases.includes(q)?100:row.title.startsWith(q)?85:row.title.includes(q)?75:row.aliases.some(alias=>alias.includes(q))?65:q.split(/\s+/).every(word=>row.text.includes(word))?40:0;
        return{...row,score};
      }).filter(row=>row.score>0).sort((a,b)=>b.score-a.score||a.entry.title.localeCompare(b.entry.title,'en')||a.index-b.index).map(row=>notationQuery(raw)?freeze({...row.entry,usedBy:usesFor(row.entry,raw)}):row.entry);
    }
    const forCard=slug=>bySlug.has(slug)?entries.filter(entry=>entry.usedBy.some(usage=>usage.slug===slug)):[];
    const labelCategory=id=>categoryList.find(category=>category.id===id)?.title||'Notation';
    function normalize(options={}){
      const query=String(options.query||'').slice(0,240),category=categoryIds.has(options.category)?options.category:'all',mode=['symbols','az'].includes(options.mode)?options.mode:'all',letter=/^[A-Z]$/.test(options.letter||'')?options.letter:'';
      const matches=search(query,{category,mode,letter});
      return{query,category,mode,letter,entryId:get(options.entryId)?.id||matches[0]?.id||null};
    }
    function scopedToken(query=''){const token=query.trim();return /^[A-Za-z]$/.test(token)||(/^[A-Z]{2,}$/.test(token)&&entries.some(entry=>entry.symbols.includes(token)));}
    function notationQuery(query=''){
      const token=query.trim();
      return !!token&&(scopedToken(token)||token.startsWith('\\')||(Notation?.classify(token)||[]).length>0||entries.some(entry=>
        entry.symbols.includes(token)||entry.lookupAliases.includes(token)||entry.usedBy.some(usage=>usage.contexts.some(context=>localUse(context)&&context.token===token))
      ));
    }
    function usesFor(entry,query=''){
      const token=query.trim();if(!notationQuery(token))return entry.usedBy;
      const structured=(Notation?.classify(token)||[]).includes(entry.id),same=value=>Notation?Notation.normalize(value)===Notation.normalize(token):value===token;
      const exactForm=!scopedToken(token)&&token.length>1;
      const matches=entry.usedBy.map(usage=>({...usage,contexts:usage.contexts.filter(context=>{
        if(context.via==='term')return false;
        if(scopedToken(token))return context.token===token&&(localUse(context)||context.via==='formula');
        if(exactForm)return same(context.token);
        return true;
      })})).filter(usage=>usage.contexts.length);
      if(matches.length||scopedToken(token))return matches;
      // A named compound form can also have a syntax reader (for example the
      // subscript in DᵤF). Keep that reader on cards actually declaring the form.
      const owners=exactForm?entries.filter(candidate=>[...candidate.symbols,...candidate.lookupAliases].some(same)||candidate.usedBy.some(usage=>usage.contexts.some(context=>context.via!=='term'&&same(context.token)))):[];
      const ownerSlugs=new Set(owners.flatMap(candidate=>candidate.usedBy.filter(usage=>usage.contexts.some(context=>context.via!=='term'&&same(context.token))).map(usage=>usage.slug)));
      if(ownerSlugs.size)return entry.usedBy.filter(usage=>ownerSlugs.has(usage.slug)).map(usage=>({...usage,contexts:usage.contexts.filter(context=>context.via!=='term')})).filter(usage=>usage.contexts.length);
      // A concrete component such as d₄ may be declared by its indexed family
      // dᵢ. When that family has a named meaning, keep its syntax readers on
      // the family's actual cards instead of borrowing every subscript use.
      if(structured&&exactForm&&['subscript','superscript'].includes(entry.id)){
        const readers=new Set(Notation?.classify(token)||[]);
        const families=owners.filter(candidate=>candidate.id!==entry.id&&readers.has(candidate.id));
        const familySlugs=new Set(families.flatMap(candidate=>candidate.usedBy.filter(usage=>usage.contexts.some(context=>context.via!=='term'&&(Notation?.classify(context.token)||[]).includes(candidate.id))).map(usage=>usage.slug)));
        if(familySlugs.size)return entry.usedBy.filter(usage=>familySlugs.has(usage.slug)).map(usage=>({...usage,contexts:usage.contexts.filter(context=>context.via!=='term'&&(Notation?.classify(context.token)||[]).includes(entry.id))})).filter(usage=>usage.contexts.length);
      }
      if(!structured)return matches;
      // A familiar form with different argument names still has a useful reader.
      // Keep evidence from that same notation family; never borrow prose substrings.
      return entry.usedBy.map(usage=>({...usage,contexts:usage.contexts.filter(context=>context.via!=='term'&&(Notation?.classify(context.token)||[]).includes(entry.id))})).filter(usage=>usage.contexts.length);
    }
    function relatedMarkup(entry){
      const related=(entry.relatedIds||[]).map(get).filter(Boolean);
      return related.length?'<nav class="index-related" aria-label="Related definitions"><h3>Related definitions</h3><ul>'+related.map(item=>'<li><a href="#index/'+encodeURIComponent(item.id)+'">'+esc(item.title)+' <span aria-hidden="true">↗</span></a></li>').join('')+'</ul></nav>':'';
    }
    function detail(entry,query=''){
      const exactLetter=notationQuery(query)?query.trim():null,uses=entry?usesFor(entry,query):[];
      if(!entry)return'<div class="index-empty"><h2>No matching entry yet.</h2><p>Try a symbol, its spoken name, or a shorter term. Clear the search to browse the growing index.</p><button type="button" class="button secondary" data-index-clear>Clear search</button></div>';
      const category=labelCategory(entry.category);
      return'<article class="index-definition" aria-label="Definition"><p class="eyebrow">'+esc(category)+'</p><h2>'+esc(entry.title)+'</h2>'+(entry.symbols.length?'<div class="index-definition-symbols">'+entry.symbols.map(symbol=>'<span>'+esc(symbol)+'</span>').join('')+'</div>':'')+'<p class="index-read-as"><strong>Read as</strong> '+esc(entry.readAs)+'</p><p class="index-definition-text">'+esc(entry.definition)+'</p><div class="index-example"><span>Try reading this</span><p>'+esc(entry.example)+'</p></div><h3>Cards that use this <span>'+uses.length+'</span></h3>'+(uses.length?'<ul class="index-used-by">'+uses.map(usage=>'<li><a href="'+esc(usage.href)+'">'+esc(usage.title)+' <span aria-hidden="true">↗</span></a>'+usage.contexts.filter(localUse).map(context=>'<p><code>'+esc(context.token)+'</code> '+esc(context.meaning)+'</p>').join('')+(!usage.contexts.some(localUse)?'<p>'+esc(usage.contexts[0].location)+' · '+esc(usage.contexts[0].via==='formula'?'Used in the displayed mathematics.':'Named in this card’s explanation.')+'</p>':'')+'</li>').join('')+'</ul>':'<p class="index-no-use">'+(exactLetter?'No identified uses of '+esc(exactLetter)+' in the current cards yet.':'This entry is background reference; it has no identified use in the current cards yet.')+'</p>')+relatedMarkup(entry)+'<details class="index-sources"><summary>Definition sources</summary><ul>'+entry.sources.map(source=>'<li><a href="'+esc(source.url)+'" target="_blank" rel="noopener noreferrer">'+esc(source.title)+' ↗</a></li>').join('')+'</ul><p>Definitions are editorial learning aids. Card-specific meanings retain each draft card’s stated setting.</p></details><p class="fine">A symbol gets its precise meaning from its context. Check the card’s conditions, units and definitions.</p></article>';
    }
    function listMarkup(matches,selected,query=''){return matches.length?matches.map(entry=>'<button type="button" class="index-entry'+(entry.id===selected?' is-selected':'')+'" data-index-entry="'+esc(entry.id)+'" aria-pressed="'+(entry.id===selected)+'"><span class="index-entry-symbol" aria-hidden="true">'+esc(entry.symbols[0]||'Aa')+'</span><span><strong>'+esc(entry.title)+'</strong><small>'+esc(labelCategory(entry.category))+'</small></span><span class="index-entry-count">'+usesFor(entry,query).length+'</span></button>').join(''):'<p class="index-list-empty">No entries match this search.</p>';}
    function symbolMarkup(query,id){
      const catalog=symbolCatalog();
      return'<details class="index-symbol-catalog" data-index-symbols><summary><span class="index-symbol-title">All symbols &amp; notation</span><span class="index-symbol-total">'+catalog.forms.length+' forms · '+catalog.meanings+' meanings</span><span class="index-symbol-preview" aria-hidden="true">'+catalog.forms.slice(0,6).map(form=>esc(form.symbol)).join(' ')+'</span></summary><p class="index-symbol-help">Every symbol and notation form in this index, including alternate forms and units. Choose one to open its definition. A small number marks symbols with several meanings.</p><div class="index-symbol-groups">'+catalog.groups.map(group=>'<section class="index-symbol-group" aria-labelledby="'+id+'-symbols-'+group.id+'"><h2 id="'+id+'-symbols-'+group.id+'">'+esc(group.title)+' <span>'+group.forms.length+'</span></h2><div class="index-symbol-grid">'+group.forms.map(form=>'<button type="button" data-index-symbol="'+esc(form.symbol)+'" aria-pressed="'+(query===form.symbol)+'" aria-label="Look up '+esc(form.symbol)+': '+esc(form.titles.join('; '))+'" title="'+esc(form.titles.join(' · '))+'"><span>'+esc(form.symbol)+'</span>'+(form.entryIds.length>1?'<small aria-hidden="true">'+form.entryIds.length+'</small>':'')+'</button>').join('')+'</div></section>').join('')+'</div></details>';
    }
    function markup(options={}){
      const state=normalize(options),matches=search(state.query,state),id='math-index-'+String(options.id||'page').replace(/[^A-Za-z0-9_-]/g,'-');
      return'<section class="math-index"><header class="index-heading"><div><p class="eyebrow">A reference you can follow</p><h1>Look up the language.</h1><p>From <strong>+</strong> to <strong>δ</strong>: read a symbol, learn a term, and open the cards that use it.</p></div><a href="#atlas">Explore the map ↗</a></header><div class="index-search-controls"><label for="'+id+'-query">Search definitions<input id="'+id+'-query" data-index-search type="search" value="'+esc(state.query)+'" maxlength="240" placeholder="Try +, delta, δ, coefficient, projection…" autocomplete="off"></label><label for="'+id+'-category">Field<select id="'+id+'-category" data-index-category aria-label="Filter definitions by field"><option value="all">All fields</option>'+categoryList.map(category=>'<option value="'+category.id+'"'+(category.id===state.category?' selected':'')+'>'+esc(category.title)+' ('+category.count+')</option>').join('')+'</select></label></div><div class="index-browse" role="group" aria-label="Browse definitions">'+[['all','All entries'],['symbols','Symbols & notation'],['az','A–Z']].map(([mode,title])=>'<button type="button" data-index-mode="'+mode+'" aria-pressed="'+(mode===state.mode)+'">'+title+'</button>').join('')+'<span>'+entries.length+' entries · a growing reference for this collection</span></div>'+symbolMarkup(state.query,id)+'<div class="index-letters" data-index-letters'+(state.mode!=='az'?' hidden':'')+'>'+['',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(letter=>'<button type="button" data-index-letter="'+letter+'" aria-pressed="'+(state.letter===letter)+'">'+(letter||'All')+'</button>').join('')+'</div><p class="index-result-status" data-index-status role="status" aria-live="polite">'+matches.length+' matching entries</p><div class="index-layout"><nav class="index-entry-list" data-index-list aria-label="Definition entries">'+listMarkup(matches,state.entryId,state.query)+'</nav><div class="index-detail" data-index-detail tabindex="-1">'+detail(get(state.entryId),state.query)+'</div></div></section>';
    }
    function mount(host,options={}){
      if(!host||typeof host.addEventListener!=='function')throw new TypeError('Index mount needs a host element.');
      let state=normalize(options),destroyed=false;host.innerHTML=markup({...state,id:'mount-'+(++nextMount)});
      const query=host.querySelector('[data-index-search]'),category=host.querySelector('[data-index-category]'),list=host.querySelector('[data-index-list]'),content=host.querySelector('[data-index-detail]'),status=host.querySelector('[data-index-status]'),letters=host.querySelector('[data-index-letters]'),symbols=host.querySelector('[data-index-symbols]');
      function paint(reason='entry'){
        if(destroyed)return;
        const matches=search(state.query,state);if(!matches.some(entry=>entry.id===state.entryId))state.entryId=matches[0]?.id||null;
        list.innerHTML=listMarkup(matches,state.entryId,state.query);content.innerHTML=detail(get(state.entryId),state.query);status.textContent=matches.length+' matching entries'+(state.query?' for “'+state.query+'”':'');
        query.value=state.query;category.value=state.category;letters.hidden=state.mode!=='az';
        host.querySelectorAll('[data-index-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('data-index-mode')===state.mode)));
        host.querySelectorAll('[data-index-letter]').forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('data-index-letter')===state.letter)));
        host.querySelectorAll('[data-index-symbol]').forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('data-index-symbol')===state.query)));
        options.onNavigate?.({...state,entryId:reason==='search'?null:state.entryId,reason});
      }
      function select(id){if(destroyed||!get(id))return false;state.entryId=id;content.innerHTML=detail(get(id),state.query);list.innerHTML=listMarkup(search(state.query,state),id,state.query);options.onNavigate?.({...state,reason:'entry'});return true;}
      function input(event){if(event.target!==query)return;state.query=query.value.slice(0,240);state.letter='';state.entryId=null;paint('search');}
      function change(event){if(event.target!==category)return;state.category=category.value;state.entryId=null;paint('filter');}
      function action(event){
        const target=event.target?.closest?.('[data-index-entry],[data-index-mode],[data-index-query],[data-index-symbol],[data-index-letter],[data-index-clear]');if(!target||!host.contains(target))return;
        event.preventDefault();
        if(target.hasAttribute('data-index-entry')){const id=target.getAttribute('data-index-entry');select(id);if(event.detail===0)list.querySelector('[data-index-entry="'+id+'"]')?.focus();}
        else if(target.hasAttribute('data-index-mode')){state.mode=target.getAttribute('data-index-mode');state.letter='';state.entryId=null;paint('filter');}
        else if(target.hasAttribute('data-index-letter')){state.letter=target.getAttribute('data-index-letter');state.entryId=null;paint('filter');}
        else if(target.hasAttribute('data-index-symbol')){
          state.query=target.getAttribute('data-index-symbol');state.category='all';state.mode='all';state.letter='';
          const matches=search(state.query,state),form=symbolCatalog().forms.find(form=>form.symbol===state.query);state.entryId=form?.entryIds.find(id=>matches.some(entry=>entry.id===id))||null;paint('symbol');
          // A selected definition must be reachable without scrolling past the
          // entire palette, particularly on a phone. Reopening keeps its mark.
          if(symbols)symbols.open=false;content.focus?.({preventScroll:true});content.scrollIntoView?.({block:'start',behavior:'auto'});
        }
        else{state.query=target.hasAttribute('data-index-clear')?'':target.getAttribute('data-index-query');state.category='all';state.letter='';state.entryId=null;paint('search');query.focus();}
      }
      const keydown=event=>{if(event.target===query&&event.key==='Escape'){state.query='';state.letter='';state.entryId=null;paint('search');}};
      host.addEventListener('input',input);host.addEventListener('change',change);host.addEventListener('click',action);host.addEventListener('keydown',keydown);
      return Object.freeze({select,getState:()=>({...state}),destroy(){if(destroyed)return;destroyed=true;host.removeEventListener('input',input);host.removeEventListener('change',change);host.removeEventListener('click',action);host.removeEventListener('keydown',keydown);}});
    }
    return Object.freeze({entries:freeze(entries),categories:freeze(categoryList),get,search,isNotation:notationQuery,forCard,symbolCatalog,markup,mount});
  }
  const create=input=>hydrate(compile(input));
  return Object.freeze({create,compile,hydrate});
});
