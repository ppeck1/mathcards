/* Editorial map regions project canonical identities into explorable areas.
   Search aliases are navigation hints, not claims of mathematical equivalence. */
(function(root,factory){
  'use strict';
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasRegions=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const definitions=[
    {id:'foundations',title:'Foundations',shortTitle:'Foundations',description:'The language used to state a rule, describe a collection, and justify a claim.',topics:[
      {id:'mathematical-language',title:'Mathematical language',shortTitle:'Language',description:'Read quantities, expressions, equalities, and the conditions attached to a rule.',aliases:['expressions','variables','symbols','equality'],refs:['function','variable','constant','expression','equality','equivalence']},
      {id:'sets-and-proof',title:'Sets and proof',shortTitle:'Sets & proof',description:'Select and combine finite sets through membership and cardinality. Relations, quantifiers and proof remain planned extensions.',aliases:['logic','set theory','sets','membership','union','intersection','cardinality','proofs','relations'],refs:['set','relation','quantifier','proof']},
      {id:'function-rules',title:'Function rules',shortTitle:'Functions',description:'Follow an input through a rule, then combine rules while preserving their domains.',aliases:['functions','composition','input output','domain'],refs:['function','function-composition','domain-codomain','inverse-function']}
    ]},
    {id:'numbers',title:'Numbers',shortTitle:'Numbers',description:'Number systems, comparisons of scale, powers, and the quantities they describe.',topics:[
      {id:'real-numbers',title:'Real numbers and ratios',shortTitle:'Real numbers',description:'Explore proportional quantities while the general number-system and ratio foundations remain planned.',aliases:['numbers','arithmetic','ratios','rational','integers'],refs:['ratio-scale','natural-number','integer','rational-number','real-number','ratio','proportion']},
      {id:'powers-and-logs',title:'Powers and logarithms',shortTitle:'Powers & logs',description:'Relate a repeated scale factor to the exponent needed to reach a value.',aliases:['powers','exponents','exponentiation','logarithms','logs'],refs:['exponentiation','real-logarithm','exponential-change']},
      {id:'complex-numbers',title:'Complex numbers',shortTitle:'Complex numbers',description:'Use the complex plane to connect number operations, scaling, and rotation.',aliases:['imaginary numbers','complex plane','complex arithmetic'],refs:['complex-multiplication','complex-number','complex-logarithm']}
    ]},
    {id:'structures',title:'Algebra and structure',shortTitle:'Structure',description:'Rules for transforming quantities and composing operations, with linear algebra as a distinct neighborhood.',topics:[
      {id:'algebraic-rules',title:'Algebraic rules',shortTitle:'Algebraic rules',description:'Compare affine rules, combine transformations, and track what each operation does.',aliases:['algebra','functions','affine','composition'],refs:['function','function-composition','linear-model','polynomial','linear-affine']},
      {id:'linear-algebra',title:'Linear algebra',shortTitle:'Linear algebra',description:'Explore weighted vectors, basis coordinates and the order of matrix transformations, alongside dot products, determinants, rotation and complex multiplication. General vector spaces and linear maps remain planned. Algorithm running time is a separate topic.',aliases:['vectors','matrices','matrix','basis','bases','basis coordinates','linear combinations','matrix products','shears','linear transformations','linear methods','linear algorithms'],refs:['vector-rotation','complex-multiplication','vector','inner-product','linear-combination','vector-space','basis','linear-map','matrix-linear-map','matrix-product','determinant']},
      {id:'equations-and-optimization',title:'Equations and optimization',shortTitle:'Equations',description:'Use equations and constraints to describe admissible choices and compare outcomes.',aliases:['equations','inequalities','quadratics','constraints'],refs:['quadratic-optimization','equation','inequality','constraint']}
    ]},
    {id:'spaces',title:'Shape and space',shortTitle:'Space',description:'Lengths, angles, geometric transformations, and patterns that repeat at different scales.',topics:[
      {id:'geometry-and-measurement',title:'Geometry and measurement',shortTitle:'Geometry',description:'Connect length, proportion, and area through a right triangle and scaled quantities.',aliases:['geometry','measurement','pythagoras','triangles','distance'],refs:['pythagorean-theorem','ratio-scale','point-line-plane','triangle','circle','euclidean-distance','similarity']},
      {id:'vectors-and-transformations',title:'Vectors and transformations',shortTitle:'Transformations',description:'Turn a vector or transform a complex arrow, keeping its components and geometry connected.',aliases:['rotation','vectors','transformations','angles'],refs:['vector-rotation','complex-multiplication','angle','coordinate-system','geometric-transformation']},
      {id:'fractals-and-spaces',title:'Fractals and spaces',shortTitle:'Fractals',description:'Zoom through a self-similar construction; broader theories of space remain planned.',aliases:['fractals','fractal geometry','self similarity','topology','spaces'],refs:['fractal-geometry','topological-space','topological-continuity','non-euclidean-geometry']}
    ]},
    {id:'change',title:'Change and motion',shortTitle:'Change',description:'Approaching values, local rates, accumulation, and systems that evolve under a rule.',topics:[
      {id:'limits-and-continuity',title:'Limits and continuity',shortTitle:'Limits',description:'Separate nearby behavior from a value at the point, then connect limits to local change.',aliases:['limits','continuity','analysis','approaching values'],refs:['limit','derivative','continuity']},
      {id:'calculus',title:'Calculus',shortTitle:'Calculus',description:'Follow composed rates, surface slices, gradients and accumulated change, with each condition kept explicit.',aliases:['derivatives','chain rule','partial derivatives','gradient','gradients','directional derivative','directional derivatives','tangent plane','tangent planes','contours','integrals','integration','accumulation','signed area'],refs:['derivative','integral-accumulation','signed-accumulation','chain-rule','partial-derivative','gradient','directional-derivative','tangent-plane','integral','fundamental-theorem-calculus']},
      {id:'dynamical-systems',title:'Dynamical systems',shortTitle:'Dynamics',description:'Iterate a recurrence, compare nearby starts, and inspect growth, waves, or a driven response.',aliases:['dynamics','chaos','feedback','recurrence','resonance','waves','iteration'],refs:['recurrence','chaos-theory','exponential-change','resonance','wave-interference','differential-equation','initial-condition','phase-space','stability','bifurcation']}
    ]},
    {id:'uncertainty',title:'Chance and inference',shortTitle:'Chance',description:'Probabilities, expected outcomes, and what changes when new information arrives.',topics:[
      {id:'probability',title:'Probability',shortTitle:'Probability',description:'Connect expected outcomes, conditional chance and complete-group spread while preserving their different meanings.',aliases:['chance','expectation','expected value','random outcomes','conditional probability','variance'],refs:['probability','conditional-probability','sample-space','event','probability-measure','random-variable','variance','probability-distribution']},
      {id:'bayesian-inference',title:'Bayesian inference',shortTitle:'Bayes',description:'Update a prior probability with conditional information under the stated model assumptions.',aliases:['bayes','bayesian','conditional probability','inference'],refs:['bayes-theorem','conditional-probability','bayes-rule','bayesian-inference']},
      {id:'statistics',title:'Statistics',shortTitle:'Statistics',description:'Describe complete-group mean and spread, then compare a chosen sample with its known population. Inferential statistics remains planned.',aliases:['statistics','samples','variance','standard deviation','spread','estimation','regression','confidence'],refs:['population-sample','variance','sampling-distribution','estimator','confidence-interval','regression','correlation','hypothesis-test']}
    ]},
    {id:'computation',title:'Computation',shortTitle:'Computation',description:'Networks, procedures, and the work needed to carry out a calculation.',topics:[
      {id:'graphs-and-networks',title:'Graphs and networks',shortTitle:'Networks',description:'Choose routes through a weighted network and compare the paths that tie or become shortest.',aliases:['graphs','networks','shortest paths','routes'],refs:['graph-theory','graph','path-cycle','tree']},
      {id:'algorithms',title:'Algorithms',shortTitle:'Algorithms',description:'Compare route finding and a full scan with an exact repeated-update recurrence. General computability remains planned.',aliases:['algorithm','procedures','computation','recurrence','recursion','computability'],refs:['graph-theory','computational-complexity','algorithm','recurrence','computability']},
      {id:'linear-time-algorithms',title:'Linear-time algorithms',shortTitle:'Linear-time methods',description:'Count one inspection per item in a full scan, then compare n and 2n under an explicit constant-cost model. Linear-time methods are separate from linear algebra; the route card makes no linear-time claim.',aliases:['linear algorithms','linear time','linear-time','running time','algorithm complexity','big o','O(n)'],refs:['computational-complexity']}
    ]},
    {id:'applications',title:'Applied mathematics',shortTitle:'Applications',description:'Interpret mathematical rules through chosen real-world stories and their assumptions.',topics:[
      {id:'growth-and-scale',title:'Growth and scale',shortTitle:'Growth & scale',description:'Scale recipes or images, fill a tank, and compare additive with multiplicative change.',aliases:['growth','scale','ratios','linear models','exponential models'],refs:['ratio-scale','linear-model','exponential-change','exponentiation']},
      {id:'optimization',title:'Optimization',shortTitle:'Optimization',description:'Compare a constrained garden optimum with discrete gradient steps on a convex error surface.',aliases:['optimization','optimisation','gradient descent','learning rate','step size','maximum','minimum','best choice'],refs:['quadratic-optimization','objective-function','constraint','feasible-set','local-global-optimum','convexity','linear-programming','gradient-descent']},
      {id:'physical-models',title:'Physical models',shortTitle:'Physical models',description:'Connect motion, area under velocity, waves, and a driven response in constructed teaching models.',aliases:['motion','physics','waves','resonance','distance','displacement'],refs:['derivative','integral-accumulation','signed-accumulation','wave-interference','resonance','differential-equation','initial-condition']}
    ]}
  ];
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const normalize=value=>String(value??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const unique=records=>[...new Map(records.map(record=>[record.id,record])).values()];
  function create({cards=[],coverage=[]}={}){
    if(!Array.isArray(cards)||!Array.isArray(coverage))throw new TypeError('Map cards and coverage must be arrays.');
    const cardById=new Map(),coverageById=new Map(),regionById=new Map(),topicById=new Map();
    for(const card of cards){
      if(!card||typeof card.id!=='string'||typeof card.slug!=='string'||!(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).test(card.slug))throw new TypeError('A map card needs a canonical ID and safe slug.');
      if(cardById.has(card.id))throw new RangeError('Duplicate map card: '+card.id);
      cardById.set(card.id,freeze({id:card.id,slug:card.slug,title:String(card.title||card.slug),description:String(card.purpose||card.meaning||''),href:'#card/'+card.slug,status:String(card.publication_status||'draft'),available:true,sourceRefs:[...(card.source_refs||[])]}));
    }
    for(const row of coverage){
      if(!row||typeof row.id!=='string')continue;
      if(coverageById.has(row.id))throw new RangeError('Duplicate coverage concept: '+row.id);
      coverageById.set(row.id,row);
    }
    function resolve(slug){
      const id='math:concept:'+slug;
      if(cardById.has(id))return cardById.get(id);
      const row=coverageById.get(id);
      if(!row)return null;
      return freeze({id,slug:null,title:String(row.title||slug),description:'',href:null,status:row.status==='planned'?'planned':'unavailable',coverageStatus:String(row.status||'planned'),available:false,domain:String(row.domain||'')});
    }
    const regions=definitions.map(definition=>{
      const topics=definition.topics.map(def=>{
        const concepts=unique(def.refs.map(resolve).filter(Boolean)),availableCards=concepts.filter(concept=>concept.available),plannedConcepts=concepts.filter(concept=>!concept.available);
        const topic=freeze({id:definition.id+':'+def.id,shortId:def.id,regionId:definition.id,kind:'topic',title:def.title,shortTitle:def.shortTitle,description:def.description,aliases:[...def.aliases],conceptIds:concepts.map(concept=>concept.id),availableCards,plannedConcepts,availableCount:availableCards.length,plannedCount:plannedConcepts.length});
        topicById.set(topic.id,topic);return topic;
      });
      const availableCards=unique(topics.flatMap(topic=>topic.availableCards)),plannedConcepts=unique(topics.flatMap(topic=>topic.plannedConcepts));
      const region=freeze({id:definition.id,kind:'region',title:definition.title,shortTitle:definition.shortTitle,description:definition.description,topics,availableCards,plannedConcepts,availableCount:availableCards.length,plannedCount:plannedConcepts.length});
      regionById.set(region.id,region);return region;
    });
    const topics=regions.flatMap(region=>region.topics);
    const searchRows=topics.map((topic,index)=>({topic,index,title:normalize(topic.title),shortTitle:normalize(topic.shortTitle),aliases:topic.aliases.map(normalize),text:normalize([topic.title,topic.shortTitle,...topic.aliases,regionById.get(topic.regionId).title,...topic.availableCards.map(card=>card.title),...topic.plannedConcepts.map(concept=>concept.title)].join(' '))}));
    function search(query){
      if(typeof query!=='string')return[];
      const q=normalize(query.slice(0,160));if(!q)return[];
      const words=q.split(' ');
      return searchRows.map(row=>({row,score:row.title===q||row.shortTitle===q?100:row.aliases.includes(q)?95:words.every(word=>row.text.includes(word))?65:row.title.includes(q)||row.aliases.some(alias=>alias.includes(q))?45:0})).filter(match=>match.score>0).sort((a,b)=>b.score-a.score||a.row.index-b.row.index).map(match=>match.row.topic);
    }
    return Object.freeze({regions:freeze(regions),topics:freeze(topics),availableCount:unique(topics.flatMap(topic=>topic.availableCards)).length,plannedCount:unique(topics.flatMap(topic=>topic.plannedConcepts)).length,getRegion:id=>typeof id==='string'?regionById.get(id)||null:null,getTopic:id=>typeof id==='string'?topicById.get(id)||null:null,search});
  }
  return Object.freeze({create});
});
