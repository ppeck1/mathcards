/* An editorial neighborhood map built from the cards' own directed relationships.
   No model evaluation, private state, clocks, or page access at load time. */
(function(root,factory){
  'use strict';
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasConceptAtlas=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fieldDefinitions=[
    {id:'algebra',title:'Algebra & functions',symbol:'ƒ',question:'What rule relates the quantities?',description:'Inputs, rules, equations, powers, and transformations.'},
    {id:'geometry',title:'Geometry & measurement',symbol:'△',question:'What shape or spatial relationship stays true?',description:'Lengths, areas, angles, vectors, and self-similar shapes.'},
    {id:'calculus',title:'Calculus',symbol:'∫',question:'How do rate and accumulation relate?',description:'Instantaneous change and quantities collected over an interval.'},
    {id:'analysis',title:'Analysis',symbol:'→',question:'What happens arbitrarily close to a point?',description:'Limits and the conditions behind approaching values.'},
    {id:'probability',title:'Probability & inference',symbol:'◒',question:'What can we say about uncertain outcomes?',description:'Chances, expected values, and conditional information.'},
    {id:'discrete',title:'Discrete mathematics',symbol:'⋮',question:'How are separate objects connected?',description:'Networks, finite choices, and combinatorial structures.'},
    {id:'dynamics',title:'Dynamical systems',symbol:'↻',question:'What happens when a rule acts over time?',description:'Iteration, feedback, waves, and driven responses.'},
    {id:'modeling',title:'Mathematical modeling',symbol:'↔',question:'Which assumptions make a useful description?',description:'Mathematical relationships interpreted in a chosen real-world setting.'}
  ];
  const fieldMap={
    set:['discrete','algebra'], 'population-sample':['probability','modeling'], 'computational-complexity':['discrete','modeling'],
    'directional-derivative':['calculus','geometry','algebra'], 'tangent-plane':['calculus','geometry','analysis'], 'gradient-descent':['calculus','algebra','modeling'],
    'chain-rule':['calculus','algebra'], 'partial-derivative':['calculus','analysis','geometry'], gradient:['calculus','geometry','modeling'],
    'linear-combination':['algebra','geometry'], basis:['algebra','geometry'], 'matrix-product':['algebra','geometry'],
    vector:['algebra','geometry'], 'inner-product':['algebra','geometry'], 'matrix-linear-map':['algebra','geometry'], determinant:['algebra','geometry'],
    function:['algebra'], 'function-composition':['algebra'], exponentiation:['algebra'], 'real-logarithm':['algebra'],
    'ratio-scale':['algebra','modeling'], 'linear-model':['algebra','modeling'], 'exponential-change':['algebra','dynamics','modeling'],
    derivative:['calculus','analysis','geometry'], limit:['analysis','calculus'],
    'integral-accumulation':['calculus','geometry','modeling'], 'signed-accumulation':['calculus','analysis','geometry','modeling'],
    'quadratic-optimization':['algebra','geometry','modeling'], 'complex-multiplication':['algebra','geometry'],
    'pythagorean-theorem':['geometry','algebra'], 'vector-rotation':['geometry','algebra'],
    'fractal-geometry':['geometry','dynamics'], 'chaos-theory':['dynamics','algebra'],
    'wave-interference':['dynamics','geometry','modeling'], resonance:['dynamics','modeling'],
    probability:['probability','modeling'], 'bayes-theorem':['probability','modeling'], 'graph-theory':['discrete','modeling']
  };
  const branchFields={algebra:'algebra',functions:'algebra','algebra-functions':'algebra','number-arithmetic':'algebra',number:'algebra',geometry:'geometry',measurement:'geometry',trigonometry:'geometry','linear-algebra':'algebra',calculus:'calculus',analysis:'analysis',probability:'probability','discrete-computation':'discrete',dynamics:'dynamics',modeling:'modeling'};
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const titleFromId=id=>String(id).split(':').at(-1).split('-').map(word=>word?word[0].toUpperCase()+word.slice(1):'').join(' ');
  const relationLabel=type=>({required:'Required preparation',helpful:'Helpful preparation',depth:'Further depth',uses_definition:'Uses the definition of',inverse_under:'Inverse relationship',applied_in:'Applied in',supports:'Connects to',inverse_problem:'Inverse problem',compared_with:'Compare with',constant_rate_case:'Constant-rate case',special_case:'Special case',personal_analogy_candidate:'Analogy to inspect'})[type]||String(type).replace(/_/g,' ');
  const safeHref=url=>typeof url==='string'&&/^https:\/\//i.test(url)?url:null;
  let nextMount=0;
  function create({cards=[],sources=[],coverage=[]}={}){
    if(!Array.isArray(cards)||!Array.isArray(sources)||!Array.isArray(coverage))throw new TypeError('Atlas cards, sources and coverage must be arrays.');
    const byId=new Map(),bySlug=new Map(),known=new Map(coverage.filter(row=>row&&typeof row.id==='string').map(row=>[row.id,row]));
    const sourceMap=new Map(sources.filter(source=>source&&typeof source.id==='string').map(source=>[source.id,{id:source.id,title:String(source.title||source.id),url:safeHref(source.url)}]));
    const fields=fieldDefinitions.map(field=>({...field}));
    const nodes=cards.map(card=>{
      if(!card||typeof card.id!=='string'||typeof card.slug!=='string'||!(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).test(card.slug))throw new TypeError('Each atlas card needs a stable ID and safe slug.');
      if(byId.has(card.id)||bySlug.has(card.slug))throw new RangeError('Duplicate atlas concept: '+card.slug);
      const memberships=Object.hasOwn(fieldMap,card.slug)?fieldMap[card.slug]:[...new Set((card.branches||[]).map(branch=>Object.hasOwn(branchFields,branch)?branchFields[branch]:null).filter(Boolean))];
      const node=freeze({id:card.id,slug:card.slug,title:String(card.title||titleFromId(card.id)),purpose:String(card.purpose||card.meaning||''),meaning:String(card.meaning||card.purpose||''),fields:memberships.length?[...memberships]:['modeling'],branches:[...(card.branches||[])],available:true,status:String(card.publication_status||'draft'),mathematicsReview:String(card.review?.mathematics||'Review status not supplied.'),sourceRefs:[...(card.source_refs||[])],href:'#card/'+card.slug});
      byId.set(node.id,node);bySlug.set(node.slug,node);return node;
    });
    function endpoint(id){
      if(byId.has(id))return byId.get(id);
      const row=known.get(id),external=String(id).startsWith('external:');
      return freeze({id,slug:null,title:String(row?.title||titleFromId(id)),fields:[],available:false,status:external?'external':'planned',href:null});
    }
    const edges=[];
    for(const card of cards){
      for(const kind of ['required','helpful','depth'])for(const sourceId of card.prerequisites?.[kind]||[]){
        if(typeof sourceId!=='string'||sourceId===card.id)continue;
        edges.push(freeze({id:'prerequisite:'+card.slug+':'+kind+':'+sourceId,source:kind==='depth'?card.id:sourceId,target:kind==='depth'?sourceId:card.id,type:kind,kind:'prerequisite',label:relationLabel(kind),reason:kind==='required'?endpoint(card.id).title+' lists '+endpoint(sourceId).title+' as required preparation.':kind==='helpful'?endpoint(card.id).title+' lists '+endpoint(sourceId).title+' as helpful preparation.':endpoint(card.id).title+' points to '+endpoint(sourceId).title+' for further depth.',conditions:'This is the card’s study guidance. It is not a claim that all uses of the topic require the same learning path.',evidence:'Card-authored study guidance',sourceRefs:[]}));
      }
      for(const [index,connection] of (card.connections||[]).entries()){
        if(!connection||typeof connection.target!=='string'||connection.target===card.id)continue;
        edges.push(freeze({id:'connection:'+card.slug+':'+index,source:card.id,target:connection.target,type:String(connection.type||'connection'),kind:'connection',label:relationLabel(connection.type||'connection'),reason:String(connection.reason||'Read the relationship in the source card.'),conditions:String(connection.conditions||'Use the conditions stated in the source card.'),evidence:String(connection.evidence_status||'Evidence status not supplied'),sourceRefs:[...(connection.source_refs||[])]}));
      }
    }
    const fieldById=new Map(fields.map(field=>[field.id,field]));
    const node=slug=>bySlug.get(slug)||null;
    const neighbors=slug=>{const current=node(slug);return current?edges.filter(edge=>edge.source===current.id||edge.target===current.id):[];};
    const availableFields=fields.map(field=>freeze({...field,count:nodes.filter(current=>current.fields.includes(field.id)).length}));
    function normalize(state={}){
      const field=state.field==='all'||fieldById.has(state.field)?state.field:'all';
      const visible=nodes.filter(current=>field==='all'||current.fields.includes(field));
      const selected=visible.find(current=>current.slug===state.selectedSlug)||visible.find(current=>current.slug==='function')||visible[0]||null;
      return {field,selectedSlug:selected?.slug||null,visible,selected};
    }
    const fieldTitle=id=>fieldById.get(id)?.title||id;
    function fieldBadges(current){return current.fields.map(id=>'<span class="atlas-field-tag atlas-field-'+id+'">'+esc(fieldTitle(id))+'</span>').join('');}
    function svgName(title,x,y,extra=''){
      const words=String(title).split(/\s+/),lines=[''];
      for(const word of words){const last=lines.length-1;if((lines[last]+' '+word).trim().length>22&&lines.length<2)lines.push(word);else lines[last]=(lines[last]+' '+word).trim();}
      if(lines.at(-1).length>25)lines[lines.length-1]=lines.at(-1).slice(0,24)+'…';
      return '<text x="'+x+'" y="'+(y-(lines.length-1)*8)+'" text-anchor="middle" '+extra+'>'+lines.map((line,i)=>'<tspan x="'+x+'" dy="'+(i?'17':'0')+'">'+esc(line)+'</tspan>').join('')+'</text>';
    }
    function graph(current,relations,id){
      const neighborIds=[...new Set(relations.map(edge=>edge.source===current.id?edge.target:edge.source))];
      const near=neighborIds.map(endpoint).sort((a,b)=>Number(b.available)-Number(a.available)||a.title.localeCompare(b.title)).slice(0,8);
      const lanes=[[],[]];
      for(const neighbor of near){const incoming=relations.some(edge=>edge.source===neighbor.id&&edge.target===current.id);const outgoing=relations.some(edge=>edge.source===current.id&&edge.target===neighbor.id);let side=incoming&&!outgoing?0:outgoing&&!incoming?1:lanes[0].length<=lanes[1].length?0:1;if(lanes[side].length>=4)side=1-side;lanes[side].push(neighbor);}
      let paths='',marks='';
      for(const [side,list] of lanes.entries())for(const [index,neighbor] of list.entries()){
        const x=side?714:146,y=list.length===1?220:88+index*(264/(list.length-1)),start=side?[550,220]:[240,y],end=side?[620,y]:[350,220];
        const relevant=relations.filter(edge=>edge.source===neighbor.id||edge.target===neighbor.id),prerequisite=relevant.every(edge=>edge.kind==='prerequisite');
        paths+='<path d="M'+start[0]+' '+start[1]+' C430 '+start[1]+' 430 '+end[1]+' '+end[0]+' '+end[1]+'" fill="none" stroke="'+(prerequisite?'#77d8e8':'#c6f276')+'" stroke-width="2" '+(prerequisite?'stroke-dasharray="5 5" ':'')+'/>';
        const mark='<rect x="'+(x-94)+'" y="'+(y-33)+'" width="188" height="66" rx="12" fill="'+(neighbor.available?'#233b45':'#192b36')+'" stroke="'+(neighbor.available?'#557a7b':'#52646e')+'" '+(!neighbor.available?'stroke-dasharray="4 4" ':'')+'/>'+svgName(neighbor.title,x,y-2,'fill="#eef7f4" font-size="14"')+'<text x="'+x+'" y="'+(y+24)+'" fill="'+(neighbor.available?'#b5d4be':'#aab5b9')+'" font-size="10" text-anchor="middle">'+(neighbor.available?'AVAILABLE · DRAFT':esc(neighbor.status.toUpperCase()))+'</text>';
        marks+=neighbor.available?'<g role="button" tabindex="0" aria-label="Show '+esc(neighbor.title)+' in the atlas" data-atlas-select="'+esc(neighbor.slug)+'" class="atlas-map-node">'+mark+'</g>':'<g>'+mark+'</g>';
      }
      const hidden=neighborIds.length-near.length;
      return '<figure class="atlas-neighborhood"><svg viewBox="0 0 860 440" role="group" aria-labelledby="'+id+'-map-title '+id+'-map-desc" xmlns="http://www.w3.org/2000/svg"><title id="'+id+'-map-title">The neighborhood around '+esc(current.title)+'</title><desc id="'+id+'-map-desc">'+esc(near.length+' neighboring concepts are shown. Dashed cyan lines represent preparation guidance; solid green lines represent authored relationships. The full directed relationships, conditions and evidence follow in a readable list.')+'</desc><rect width="860" height="440" rx="20" fill="#10242f"/><g font-family="system-ui,sans-serif">'+paths+marks+'<g><rect x="325" y="164" width="210" height="112" rx="18" fill="#c6f276"/>'+svgName(current.title,430,208,'fill="#153734" font-size="18" font-weight="600"')+'<text x="430" y="251" text-anchor="middle" fill="#31564a" font-size="11">SELECTED CONCEPT</text></g><text x="28" y="415" fill="#98afb9" font-size="12">'+esc(hidden>0?hidden+' more neighbors in the full list below.':'Select an available neighbor to follow a connection.')+'</text></g></svg><figcaption><span><i class="atlas-key preparation"></i> Preparation</span><span><i class="atlas-key connection"></i> Card relationship</span><span>Read direction and conditions below.</span></figcaption></figure>';
    }
    function relationship(edge,current){
      const source=endpoint(edge.source),target=endpoint(edge.target),other=edge.source===current.id?target:source;
      const refs=edge.sourceRefs.map(ref=>sourceMap.get(ref)).filter(Boolean);
      return '<li class="atlas-relation" data-atlas-edge="'+esc(edge.id)+'"><p class="atlas-relation-direction">'+esc(source.title)+' <span aria-hidden="true">→</span><span class="sr-only"> leads to </span>'+esc(target.title)+'</p><div class="atlas-relation-heading"><span class="atlas-relation-type">'+esc(edge.label)+'</span><span class="atlas-availability '+(other.available?'available':'planned')+'">'+esc(other.available?'Available · draft':other.status==='external'?'External analogy':'Planned card')+'</span></div><p>'+esc(edge.reason)+'</p><details><summary>Conditions & evidence</summary><p><strong>Conditions.</strong> '+esc(edge.conditions)+'</p><p><strong>Evidence.</strong> '+esc(edge.evidence.replace(/_/g,' '))+'</p>'+(refs.length?'<ul class="atlas-sources">'+refs.map(ref=>'<li>'+(ref.url?'<a href="'+esc(ref.url)+'" target="_blank" rel="noopener noreferrer">'+esc(ref.title)+' ↗</a>':esc(ref.title))+'</li>').join('')+'</ul>':'<p class="fine">No claim-specific external source is attached to this relationship. Use the source card’s stated scope and review status.</p>')+'</details>'+(other.available?'<div class="atlas-relation-actions"><button type="button" class="text-link" data-atlas-select="'+esc(other.slug)+'">Locate '+esc(other.title)+' <span aria-hidden="true">↗</span></button><a href="'+esc(other.href)+'">Open card →</a></div>':'<p class="fine">'+(other.status==='external'?'This analogy is outside the supplied teaching cards.':'This concept is in the coverage plan; an interactive card is not available yet.')+'</p>')+'</li>';
    }
    function markup(state={}){
      const normalized=normalize(state),{selected,visible,field}=normalized,id='concept-atlas-'+String(state.id||'main').replace(/[^A-Za-z0-9_-]/g,'-');
      const relations=selected?neighbors(selected.slug):[];
      const preparation=relations.filter(edge=>edge.kind==='prerequisite'),connections=relations.filter(edge=>edge.kind==='connection');
      return '<section class="concept-atlas" aria-labelledby="'+id+'-title"><header class="atlas-intro"><div><p class="eyebrow">FOLLOW THE RELATIONSHIPS</p><h1 id="'+id+'-title">A map to think with.</h1><p>Find an idea’s mathematical neighborhood. Follow the rules it uses, the questions it answers, and the connections worth exploring next.</p></div><a class="text-link" href="#explore/section/cards">Browse the cards →</a></header><p class="atlas-scope">This introductory map covers the '+nodes.length+' cards in this edition. Field placements overlap and are editorial teaching groupings. All available cards remain draft; conditions and evidence belong to each relationship.</p><div class="atlas-field-filters" role="group" aria-label="Filter atlas by mathematical field"><button type="button" data-atlas-field="all" aria-pressed="'+(field==='all')+'"><span aria-hidden="true">✳</span> All fields <small>'+nodes.length+'</small></button>'+availableFields.filter(item=>item.count).map(item=>'<button type="button" data-atlas-field="'+item.id+'" aria-pressed="'+(field===item.id)+'" title="'+esc(item.question)+'"><span aria-hidden="true">'+esc(item.symbol)+'</span> '+esc(item.title)+' <small>'+item.count+'</small></button>').join('')+'</div><div class="atlas-toolbar"><label for="'+id+'-choose">Choose a concept<select id="'+id+'-choose" aria-label="Choose a concept" data-atlas-choice>'+visible.map(current=>'<option value="'+esc(current.slug)+'" '+(selected?.slug===current.slug?'selected':'')+'>'+esc(current.title)+'</option>').join('')+'</select></label><p role="status" aria-live="polite" data-atlas-status>'+visible.length+' of '+nodes.length+' concepts'+(field==='all'?' across all fields':'; '+esc(fieldTitle(field)))+'.'+(selected?' Showing '+esc(selected.title)+'.':'')+'</p></div><div class="atlas-layout"><aside class="atlas-index" aria-labelledby="'+id+'-index"><h2 id="'+id+'-index">Choose your next question.</h2>'+(field!=='all'?'<p>'+esc(fieldById.get(field)?.question)+'</p>':'<p>An idea can belong to several fields at once.</p>')+'<div class="atlas-concept-list">'+visible.map(current=>'<button type="button" data-atlas-select="'+esc(current.slug)+'" aria-pressed="'+(selected?.slug===current.slug)+'"><span class="atlas-index-symbol" aria-hidden="true">'+esc(fieldById.get(current.fields[0])?.symbol||'↔')+'</span><span><strong>'+esc(current.title)+'</strong><small>'+esc(current.fields.map(fieldTitle).join(' · '))+'</small></span><span aria-hidden="true">↗</span></button>').join('')+'</div></aside>'+(selected?'<section class="atlas-focus" aria-labelledby="'+id+'-focus"><header><div class="atlas-focus-tags">'+fieldBadges(selected)+'<span class="badge">DRAFT CARD</span></div><h2 id="'+id+'-focus">'+esc(selected.title)+'</h2><p>'+esc(selected.purpose)+'</p><a class="button" href="'+esc(selected.href)+'">Play this idea <span aria-hidden="true">↗</span></a></header>'+graph(selected,relations,id)+'<div class="atlas-place"><h3>Where this idea sits</h3><p>'+esc(selected.meaning)+'</p><div>'+selected.fields.map(key=>'<p><strong>'+esc(fieldTitle(key))+'.</strong> '+esc(fieldById.get(key)?.description||'')+'</p>').join('')+'</div><p class="fine">'+esc(selected.mathematicsReview)+'. Field placement is a guide for exploration.</p></div><div class="atlas-relations"><h3>The connections, in words</h3><p class="fine">Arrows name the source and destination. Preparation is study guidance; mathematical relationships keep their own conditions and evidence.</p>'+(connections.length?'<h4>Relationships to inspect <span>'+connections.length+'</span></h4><ul>'+connections.map(edge=>relationship(edge,selected)).join('')+'</ul>':'<p>This card has no explicit mathematical relationship records yet. Its preparation links and field placement still offer a route in.</p>')+(preparation.length?'<details class="atlas-preparation"><summary>Preparation & further study <span>'+preparation.length+'</span></summary><ul>'+preparation.map(edge=>relationship(edge,selected)).join('')+'</ul></details>':'')+'</div></section>':'<p>No concepts match this field.</p>')+'</div></section>';
    }
    function mount(host,options={}){
      if(!host||typeof host.addEventListener!=='function'||typeof host.querySelector!=='function')throw new TypeError('Atlas mount needs a host element.');
      let state=normalize(options),destroyed=false;
      const id='mount-'+(++nextMount);
      function paint(){if(!destroyed)host.innerHTML=markup({...state,id});}
      function select(slug,{focus=false,notify=true}={}){
        if(destroyed||!node(slug))return false;
        const chosen=node(slug),nextField=state.field==='all'||chosen.fields.includes(state.field)?state.field:'all';
        state=normalize({selectedSlug:slug,field:nextField});paint();
        if(focus)host.querySelector('[data-atlas-choice]')?.focus();
        if(notify&&typeof options.onSelect==='function')options.onSelect(slug);
        return true;
      }
      function filter(field,{focus=false,notify=true}={}){
        if(destroyed||!(field==='all'||fieldById.has(field)))return false;
        const previous=state.selectedSlug;
        state=normalize({selectedSlug:state.selectedSlug,field});paint();
        if(focus)host.querySelector('[data-atlas-field="'+field+'"]')?.focus();
        if(notify&&state.selectedSlug!==previous&&typeof options.onSelect==='function')options.onSelect(state.selectedSlug);
        return true;
      }
      function action(event){
        const target=event.target?.closest?.('[data-atlas-select],[data-atlas-field]');
        if(!target||!host.contains(target))return;
        if(event.type==='keydown'&&!['Enter',' '].includes(event.key))return;
        if(event.type==='keydown'&&String(target.tagName).toLowerCase()!=='g')return;
        event.preventDefault();
        if(target.hasAttribute('data-atlas-field'))filter(target.getAttribute('data-atlas-field'),{focus:true});
        else select(target.getAttribute('data-atlas-select'),{focus:event.type==='keydown'||event.detail===0});
      }
      function change(event){if(event.target?.matches?.('[data-atlas-choice]'))select(event.target.value,{focus:true});}
      host.addEventListener('click',action);host.addEventListener('keydown',action);host.addEventListener('change',change);paint();
      return Object.freeze({select,filter,getState:()=>({selectedSlug:state.selectedSlug,field:state.field}),destroy(){if(destroyed)return;destroyed=true;host.removeEventListener('click',action);host.removeEventListener('keydown',action);host.removeEventListener('change',change);}});
    }
    return Object.freeze({nodes:freeze(nodes),edges:freeze(edges),fields:freeze(availableFields),node,neighbors,markup,mount});
  }
  return Object.freeze({create});
});
