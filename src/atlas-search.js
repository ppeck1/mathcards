/* One search adapter for definitions, real cards, and mapped areas. No storage or clocks. */
(function(root,factory){
  const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasSearch=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const words=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/[\s_-]+/g,' ').trim();
  const textValues=value=>typeof value==='string'?[value]:Array.isArray(value)?value.flatMap(textValues):value&&typeof value==='object'?Object.values(value).flatMap(textValues):[];
  let nextId=0;
  function create({cards=[],index,atlas}={}){
    if(!Array.isArray(cards)||!index||typeof index.search!=='function')throw new TypeError('Search needs cards and a definition index.');
    const cardRows=cards.map(card=>({card,title:words(card.title),aliases:(card.aliases||[]).map(words),text:words([card.title,card.purpose,card.meaning,...(card.aliases||[]),...(card.branches||[]),...textValues(card.definition),...textValues(card.grammar?.symbols),...(card.examples||[]).flatMap(example=>[example.title,example.setting,example.interpretation])].join(' '))}));
    function search(query,{kind='all',limit=100}={}){
      if(typeof query!=='string')return[];
      const raw=query.trim().slice(0,160),q=words(raw)||raw;if(!raw)return[];
      const terms=index.search(raw),exactSymbol=terms.filter(entry=>(entry.symbols||[]).includes(raw)||(entry.lookupAliases||[]).includes(raw)||(entry.aliases||[]).includes(raw));
      const directTerms=terms.filter(entry=>(entry.symbols||[]).includes(raw)||(entry.lookupAliases||[]).includes(raw)||words(entry.title)===q||words(entry.readAs)===q||(entry.aliases||[]).some(alias=>words(alias)===q));
      const exactNotation=raw.startsWith('\\')||(!/\s/.test(raw)&&terms.some(entry=>(entry.symbols||[]).includes(raw)||(entry.lookupAliases||[]).includes(raw)||(entry.usedBy||[]).some(card=>(card.contexts||[]).some(context=>['grammar','parameter'].includes(context.via)&&context.token===raw))));
      const notation=Boolean(index.isNotation?.(raw))||exactNotation||terms.some(entry=>(entry.usedBy||[]).some(card=>(card.contexts||[]).some(context=>context.token===raw&&context.via==='notation')))||(!/[A-Za-z]{2}/.test(raw)&&raw.length<=5);
      const symbolsInCards=new Set((exactSymbol.length?exactSymbol:notation?terms:[]).flatMap(entry=>(entry.usedBy||[]).map(card=>card.slug)));
      const directTermCards=new Set(directTerms.flatMap(entry=>(entry.usedBy||[]).map(card=>card.slug)));
      const tokens=q.split(' ');
      const results=[];
      if(kind==='all'||kind==='term')for(const entry of terms)results.push({kind:'term',id:entry.id,title:entry.title,symbols:entry.symbols||[],description:entry.definition,href:'#index/'+encodeURIComponent(entry.id)+(notation?'/search/'+encodeURIComponent(raw):''),entry});
      if(kind==='all'||kind==='card'){
        const matched=cardRows.map(row=>({row,score:notation?(symbolsInCards.has(row.card.slug)?50:0):row.title===q?100:row.aliases.includes(q)?95:row.title.includes(q)?80:tokens.every(token=>row.text.includes(token))?50:directTermCards.has(row.card.slug)?35:0})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score||a.row.card.title.localeCompare(b.row.card.title));
        for(const {row} of matched)results.push({kind:'card',id:row.card.slug,title:row.card.title,description:row.card.purpose||row.card.meaning||'',href:'#card/'+row.card.slug});
      }
      if((kind==='all'||kind==='area')&&atlas?.areas?.search){
        const areas=notation?(atlas.areas.topics||[]).filter(topic=>(topic.availableCards||[]).some(card=>symbolsInCards.has(card.slug))):atlas.areas.search(raw);
        for(const topic of areas)results.push({kind:'area',id:topic.id,title:topic.title,description:topic.description,href:'#atlas/map/'+topic.regionId+'/'+topic.shortId,availableCount:topic.availableCount});
      }
      const count=Number.isInteger(limit)?Math.max(0,Math.min(limit,300)):100;return results.slice(0,count);
    }
    function resultsMarkup(query,{kind='all',compact=false}={}){
      const hits=search(query,{kind,limit:300});
      if(!query.trim())return compact?'':'<div class="search-start"><h2>Start with a symbol or a word.</h2><p>Try a notation you saw in a card, a mathematical term, or an area of the atlas.</p><div>'+['+','δ','fraction','derivative','matrix'].map(value=>'<a href="#search/'+encodeURIComponent(value)+'">'+esc(value)+'</a>').join('')+'</div></div>';
      if(!hits.length)return'<p class="search-empty">No matches yet. Try a symbol, its name, or a shorter phrase.</p>';
      const labels={term:'Definitions & notation',card:'Interactive cards',area:'Atlas areas'};
      return '<p class="search-result-count">'+hits.length+' results</p>'+['term','card','area'].map(group=>{
        const rows=hits.filter(hit=>hit.kind===group).slice(0,compact?3:100);if(!rows.length)return'';
        return'<section class="search-result-group"><h2>'+labels[group]+'</h2><ul>'+rows.map(hit=>'<li><a href="'+esc(hit.href)+'"><span class="search-hit-title">'+(hit.kind==='term'&&hit.symbols.length?'<span class="search-hit-symbol">'+esc(hit.symbols.slice(0,3).join(' '))+'</span>':'')+'<strong>'+esc(hit.title)+'</strong><span aria-hidden="true">↗</span></span><span class="search-hit-description">'+esc(String(hit.description||'').slice(0,compact?135:280))+'</span>'+(hit.kind==='area'?'<small>'+hit.availableCount+' available cards</small>':'')+'</a></li>').join('')+'</ul></section>';
      }).join('')+(compact?'<a class="search-all" href="#search/'+encodeURIComponent(query)+'">See all results →</a>':'');
    }
    function markup({query='',compact=false,id='search'}={}){
      const scope='atlas-search-'+String(id).replace(/[^A-Za-z0-9_-]/g,'-');
      return compact?'<div class="site-search"><label class="sr-only" for="'+scope+'">Search all mathematics</label><input id="'+scope+'" data-search-input type="search" maxlength="160" autocomplete="off" placeholder="Search symbols, terms, cards…" value="'+esc(query)+'" aria-controls="'+scope+'-results"><div id="'+scope+'-results" class="site-search-results" data-search-results hidden></div></div>':'<section class="search-page"><p class="eyebrow">Find the meaning. Follow the idea.</p><h1>Search the atlas.</h1><p>Look up notation, definitions, lessons, and places on the map.</p><label class="sr-only" for="'+scope+'">Search cards, definitions and atlas areas</label><input id="'+scope+'" data-search-input type="search" maxlength="160" autocomplete="off" placeholder="A symbol, a word, or an idea…" value="'+esc(query)+'"><div class="search-kind-filter" role="group" aria-label="Search result type">'+[['all','Everything'],['term','Definitions'],['card','Cards'],['area','Map areas']].map(([key,label])=>'<button type="button" data-search-kind="'+key+'" aria-pressed="'+(key==='all')+'">'+label+'</button>').join('')+'</div><div data-search-results>'+resultsMarkup(query)+'</div></section>';
    }
    function mount(host,{query='',compact=false,onOpen,onNavigate}={}){
      if(!host||typeof host.querySelector!=='function')throw new TypeError('Search needs a host element.');
      let kind='all',destroyed=false;host.innerHTML=markup({query,compact,id:'mount-'+(++nextId)});
      const input=host.querySelector('[data-search-input]'),results=host.querySelector('[data-search-results]');
      function close(){if(compact)results.hidden=true;}
      function paint(){if(destroyed)return;results.innerHTML=resultsMarkup(input.value,{kind,compact});if(compact)results.hidden=!input.value.trim();}
      function changed(event){if(event.target!==input)return;paint();if(!compact)onNavigate?.(input.value);}
      function click(event){const button=event.target?.closest?.('[data-search-kind]');if(button&&host.contains(button)){kind=button.getAttribute('data-search-kind');host.querySelectorAll('[data-search-kind]').forEach(node=>node.setAttribute('aria-pressed',String(node===button)));paint();}else if(event.target?.closest?.('a'))close();}
      function key(event){if(event.key==='Escape'){event.preventDefault();input.focus?.();close();return;}if(event.target!==input)return;if(event.key==='Enter'&&compact&&input.value.trim()){event.preventDefault();close();onOpen?.(input.value);}}
      function focusOut(event){if(compact&&!host.contains(event.relatedTarget))close();}
      const outside=event=>{if(!host.contains(event.target))close();};
      host.addEventListener('input',changed);host.addEventListener('focusin',changed);host.addEventListener('focusout',focusOut);host.addEventListener('click',click);host.addEventListener('keydown',key);
      if(compact&&typeof document!=='undefined')document.addEventListener('pointerdown',outside);
      return Object.freeze({close,getState:()=>({query:input.value,kind}),destroy(){if(destroyed)return;destroyed=true;host.removeEventListener('input',changed);host.removeEventListener('focusin',changed);host.removeEventListener('focusout',focusOut);host.removeEventListener('click',click);host.removeEventListener('keydown',key);if(compact&&typeof document!=='undefined')document.removeEventListener('pointerdown',outside);}});
    }
    return Object.freeze({search,resultsMarkup,markup,mount});
  }
  return Object.freeze({create});
});
