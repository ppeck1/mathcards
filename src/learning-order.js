/* Editorial browse sequence, independent of renderer registration and release order. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasLearningOrder=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const slugs=Object.freeze([
    'ratio-scale','linear-model','function','set','exponentiation','function-composition',
    'exponential-change','real-logarithm','quadratic-optimization','pythagorean-theorem',
    'vector','vector-rotation','inner-product','linear-combination','basis',
    'matrix-linear-map','determinant','matrix-product','complex-multiplication',
    'probability','conditional-probability','population-sample','variance','bayes-theorem','limit','derivative',
    'integral-accumulation','signed-accumulation','chain-rule','partial-derivative',
    'gradient','directional-derivative','tangent-plane','gradient-descent',
    'wave-interference','resonance','graph-theory','computational-complexity','recurrence',
    'chaos-theory','fractal-geometry'
  ]);
  const ranks=new Map(slugs.map((slug,i)=>[slug,i]));
  function order(cards=[]){return cards.slice().sort((a,b)=>(ranks.get(a.slug)??slugs.length)-(ranks.get(b.slug)??slugs.length)||String(a.title||a.slug).localeCompare(String(b.title||b.slug),'en'));}
  return Object.freeze({slugs,order});
});
