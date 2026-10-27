/* Original book-scope learning stories compose with the existing host and clock. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasBookFoundationStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const freeze=v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v)){Object.values(v).forEach(freeze);Object.freeze(v);}return v;};
  const roles=['reference','input','intermediate','output'];
  const stages=rows=>rows.map((row,i)=>({id:['reference','input','calculate','solve'][i],from:i/4,to:(i+1)/4,focus:roles[i],...row}));
  const stories=freeze([
    {
      id:'story:panel-requirements',slug:'logical-connectives',scene:'panel-truth-tests',unit:'',title:'When do both requirements hold?',eyebrow:'One panel · two statements',
      presentation:{compact:true,controlHint:'Extend the panel. Follow its length into P, then follow P and the fixed width test into AND.'},
      summary:'Change a panel length and connect a measured requirement to a definite logical result.',
      context:'A workshop panel must be at least 6 cm long and at least 4 cm wide. Call the length statement P and the width statement Q. The width stays at 5 cm while the length x grows from 3 cm to 9 cm. The panel changes continuously; each requirement is either true or false.',
      question:'When the length reaches 9 cm, does this 5 cm wide panel satisfy P AND Q?',
      variables:[{key:'length',symbol:'x',label:'Panel length',unit:'cm',min:0,max:12,step:.01}],parameters:{length:9,width:5,operation:'and'},timeline:{key:'length',from:3,to:9,durationMs:14000},
      steps:stages([
        {title:'Keep the width statement in view',focusLabel:'The width test supplies one truth value',focusDescription:'The width remains 5 cm, above its 4 cm requirement. Q stays true throughout this story.',body:'The width is {{width}} cm. Its statement Q is {{qLabel}}. That result stays fixed while the panel extends.',formula:'Q: {{width}} cm ≥ 4 cm → {{qLabel}}'},
        {title:'Move the length through its requirement',focusLabel:'The length edge reaches the 6 cm threshold',focusDescription:'The same length x appears on the panel edge and on the left side of P. Equality at 6 cm passes the stated test.',body:'The length is now {{length}} cm. Compare it with 6 cm before combining either statement.',formula:'P: x ≥ 6 cm; x = {{length}} cm'},
        {title:'Read the length truth value',focusLabel:'The comparison becomes the input P',focusDescription:'The moving length is continuous, while P changes truth value exactly at the included threshold. The matching truth-table row identifies P and Q together.',body:'At length {{length}} cm, P is {{pLabel}}. The width statement Q is {{qLabel}}.',formula:'P = {{pLabel}}; Q = {{qLabel}}'},
        {title:'Combine the two statements',focusLabel:'AND requires both inputs to be true',focusDescription:'Follow the two predicate results into the active AND row and the compound result. The optional playground offers the other classical connectives.',body:'With P {{pLabel}} and Q {{qLabel}}, the statement P AND Q is {{truthLabel}}.',formula:'P∧Q = {{pLabel}} AND {{qLabel}} = {{truthLabel}}'}
      ]),
      calculation:[
        {role:'input',label:'Read the changed measurement',template:'x = {{length}} cm; y = {{width}} cm',description:'These dimensions supply the two fixed comparison tests.'},
        {role:'intermediate',label:'Evaluate the two statements',template:'P = {{pLabel}}; Q = {{qLabel}}',description:'Each test has a definite classical truth value.'},
        {role:'output',label:'Follow the active AND row',template:'P∧Q = {{truthLabel}}',description:'The compound statement is true exactly when both dimension statements are true.'}
      ],
      conclusion:'At x=9 cm and y=5 cm, both comparisons pass: 9≥6 and 5≥4. Therefore P∧Q is True. The threshold itself also passes at x=6 cm because the requirement says “at least”.',
      assumptions:['The dimensions and two requirements are stipulated for an original workshop example.','The story fixes width at 5 cm and uses classical AND. The optional playground also provides inclusive OR, material implication, biconditional and negation.','Truth-table implication is a specified truth function; ordinary-language conditionals can carry additional meaning.'],sourceRefs:['source:openstax:compound-statements','source:openstax:truth-tables','source:openstax:statements-quantifiers']
    },
    {
      id:'story:six-strip-quantifiers',slug:'quantifier',scene:'known-strips-and-requirement',unit:'',title:'Does some mean all?',eyebrow:'Six known strips · a changing requirement',
      presentation:{compact:true,controlHint:'Lower the requirement line. Follow each strip test into the witness count and the separate some/all claims.'},
      summary:'Use a complete six-strip domain to distinguish a witness from a universal claim.',
      context:'A workshop has six strips with lengths 2, 4, 6, 8, 10 and 12 cm. Those six lengths form the domain D. A strip qualifies when its length x is at least the required length h. Lower h from 8 cm to 2 cm and watch how “some qualify” differs from “all qualify”.',
      question:'At h=2 cm, do all six strips meet the requirement, and is there also an existential witness?',
      variables:[{key:'threshold',symbol:'h',label:'Required length',unit:'cm',min:0,max:14,step:.01}],parameters:{threshold:2,mode:'all'},timeline:{key:'threshold',from:8,to:2,durationMs:14000},
      steps:stages([
        {title:'State the complete domain',focusLabel:'Each of the six strips belongs to D',focusDescription:'The domain stays fixed. The quantifier speaks about these six known lengths, so every relevant case is available to inspect.',body:'D contains the six lengths 2, 4, 6, 8, 10 and 12 cm. The same requirement applies to each one.',formula:'D = {2,4,6,8,10,12} cm'},
        {title:'Change one free parameter',focusLabel:'The requirement line supplies h in every test',focusDescription:'The quantifier binds x as it ranges over D. It does not bind the slider parameter h, which changes the predicate applied to every strip.',body:'The required length is {{threshold}} cm. Each strip is tested by the same predicate x≥h.',formula:'h = {{threshold}} cm; P(x): x ≥ h'},
        {title:'Find the witnesses and counterexamples',focusLabel:'Passing strips are witnesses for some',focusDescription:'A passing strip supplies an existential witness. A failing strip supplies a counterexample to all. The count describes the outcomes without being a probability.',body:'At this requirement, {{qualifyingCount}} of the six strips pass. The existential statement is {{someLabel}}.',formula:'Passing count = {{qualifyingCount}}; ∃x∈D P(x) = {{someLabel}}'},
        {title:'Read the universal claim separately',focusLabel:'All requires six passing predicate outcomes',focusDescription:'The universal claim becomes true only when the last failing strip meets the requirement. Equality is included at the shortest length, 2 cm.',body:'Every-strip claim: {{allLabel}}. At-least-one claim: {{someLabel}}. These are separate statements about the same domain and predicate.',formula:'∀x∈D P(x) = {{allLabel}}; ∃x∈D P(x) = {{someLabel}}'}
      ]),
      calculation:[
        {role:'input',label:'Set the shared requirement',template:'h = {{threshold}} cm; P(x): x ≥ h',description:'One free parameter changes all six comparisons.'},
        {role:'intermediate',label:'Inspect the predicate outcomes',template:'{{qualifyingCount}} of 6 pass; ∃x∈D P(x) = {{someLabel}}',description:'At least one passing element is enough for the existential claim.'},
        {role:'output',label:'Ask whether every element passes',template:'∀x∈D P(x) = {{allLabel}}',description:'Every included element must pass for the universal statement to hold.'}
      ],
      conclusion:'At h=2 cm, all six lengths satisfy x≥2, including the shortest strip at equality. The universal statement is True. The existential statement is also True because a nonempty domain contains passing witnesses.',
      assumptions:['The six strip lengths are the complete, fixed, nonempty domain of this constructed example.','“Some” means at least one and allows all six; it does not mean exactly one or some-but-not-all.','Complete enumeration establishes these finite-domain claims. It does not prove a claim about every real number or an unstated larger collection.'],sourceRefs:['source:openstax:statements-quantifiers']
    },
    {
      id:'story:hinged-frame-area',slug:'cross-product',scene:'oriented-frame-and-normal',unit:'m²',title:'How much area does the frame span?',eyebrow:'Two directed edges · one oriented area',
      presentation:{compact:true,controlHint:'Turn the second edge. Follow the angle into its perpendicular height, then into the normal component and area.'},
      summary:'Open a hinged frame and separate spanned area from the direction of its normal.',
      context:'A drawing shows two directed frame edges, one 3 m long and one 2 m long, joined at the same origin. The first points to the right. Turn the second through angle θ from 30° to 90°. Their cross product records the area they span and which side of the page its normal points toward.',
      question:'When the two edges meet at 90°, what are the signed normal component and the frame’s area?',
      variables:[{key:'angle',symbol:'θ',label:'Edge angle',unit:'°',min:-180,max:180,step:.01}],parameters:{uLength:3,vLength:2,angle:90},timeline:{key:'angle',from:30,to:90,durationMs:14000},
      steps:stages([
        {title:'Keep both edge lengths fixed',focusLabel:'The first edge provides a fixed base',focusDescription:'The arrows use one metre scale. Turning the second arrow changes its components while preserving its length.',body:'The first edge has length {{uLength}} m and the second {{vLength}} m. They span a parallelogram in the input plane.',formula:'u = ({{uLength}},0,0) m; |v| = {{vLength}} m'},
        {title:'Turn the second directed edge',focusLabel:'The signed angle controls the sine factor',focusDescription:'The angle is measured from the positive first edge. Positive angles move above it; negative angles reverse the normal orientation.',body:'At angle {{angle}}°, the sine is {{sine}}. This factor determines how much of the second edge is perpendicular to the first.',formula:'θ = {{angle}}°; sinθ = {{sine}}'},
        {title:'Follow the perpendicular component',focusLabel:'The vertical component supplies the height',focusDescription:'The parallelogram’s height is the perpendicular component of the second edge. Multiplying by the base gives the signed normal component.',body:'The signed perpendicular component is {{vY}} m. Multiplying it by the {{uLength}} m base gives {{normalComponent}} m².',formula:'v_y = {{vLength}} sinθ = {{vY}} m; w_z = {{uLength}} × {{vY}} = {{normalComponent}} m²'},
        {title:'Keep orientation and area separate',focusLabel:'The normal sign and the area magnitude are different readings',focusDescription:'In the stated right-handed frame, a positive normal points out of the page and a negative normal into it. Unoriented area is always the magnitude; a zero product has no normal direction.',body:'The cross product has signed normal component {{normalComponent}} m². The frame’s nonnegative area is {{area}} m².',formula:'u×v = (0,0,{{normalComponent}}) m²; |u×v| = {{area}} m²'}
      ]),
      calculation:[
        {role:'input',label:'Choose the edge angle',template:'θ = {{angle}}°; sinθ = {{sine}}',description:'The two edge lengths stay fixed while the perpendicular share changes.'},
        {role:'intermediate',label:'Find the signed height',template:'v_y = {{vLength}} sinθ = {{vY}} m',description:'The signed vertical component is the height factor in the planar determinant.'},
        {role:'output',label:'Multiply base by height',template:'w_z = {{uLength}} × {{vY}} = {{normalComponent}} m²; A = {{area}} m²',description:'The signed normal encodes orientation; its absolute value is the area.'}
      ],
      conclusion:'At θ=90°, the second edge is perpendicular to the first. The signed component is 3×2×1=6 m², so u×v=(0,0,6) m² points out of the page. Its magnitude, the frame area, is 6 m².',
      assumptions:['The directed edges and dimensions are an original geometric construction.','The inputs lie in the coordinate plane of a fixed right-handed orthonormal frame, with positive z pointing out of the page.','The displayed normal symbol conveys an area-vector orientation; it is not an additional physical edge or a force.'],sourceRefs:['source:openstax:cross-product','source:openstax:vectors-plane']
    },
    {
      id:'story:alignment-corrections',slug:'stability',scene:'signed-error-corrections',unit:'cm',title:'Does each correction bring the error closer?',eyebrow:'One alignment error · a repeated rule',
      presentation:{compact:true,controlHint:'Change the multiplier. Follow the same initial error through eight exact corrections and compare its distance from zero.'},
      summary:'Inspect how a repeated correction rule shrinks, preserves or amplifies displacement from equilibrium.',
      context:'An alignment sketch starts 1 cm to the right of its target. In this constructed rule, each correction multiplies the signed error by r. The target stays at zero. Change r from 1.1 to 0.5 and watch the same eight completed corrections respond to that choice.',
      question:'If each correction keeps half the previous signed error, how far from equilibrium is the sketch after eight corrections?',
      variables:[{key:'multiplier',symbol:'r',label:'Correction multiplier',unit:'',min:-1.2,max:1.2,step:.001}],parameters:{initialError:1,multiplier:.5,steps:8},timeline:{key:'multiplier',from:1.1,to:.5,durationMs:16000},
      steps:stages([
        {title:'Locate the starting displacement',focusLabel:'The reference is the same equilibrium zero',focusDescription:'Every trace starts at the same stated error. The zero line is the target, not a moving mean or an automatically fitted axis.',body:'The initial signed error is {{initialError}} cm. Complete {{steps}} corrections using the same selected multiplier each time.',formula:'e₀ = {{initialError}} cm; n = {{steps}}'},
        {title:'Choose what one correction does',focusLabel:'The multiplier controls sign and size',focusDescription:'A negative multiplier crosses the equilibrium. Its magnitude decides whether successive error magnitudes shrink, stay equal or grow.',body:'The multiplier is {{multiplier}}, with magnitude {{factorMagnitude}}. The rule is classified as {{stabilityLabel}} for nearby starting states.',formula:'eₖ₊₁ = r eₖ; r = {{multiplier}}; |r| = {{factorMagnitude}}'},
        {title:'Follow the last exact transition',focusLabel:'The final state comes from multiplying the preceding error',focusDescription:'The earlier corrections determine the previous error. The last correction applies the same multiplier once more, with signed centimetres preserved.',body:'Before the last displayed correction, the signed error is {{previous}} cm. Multiplication gives {{output}} cm.',formula:'eₙ = {{multiplier}} × {{previous}} = {{output}} cm'},
        {title:'Read distance from the equilibrium',focusLabel:'The final magnitude measures closeness to zero',focusDescription:'The sign identifies the side of equilibrium; the absolute value gives distance. The all-future classification follows from the geometric power rule, separately from this finite trace.',body:'After {{steps}} corrections the signed error is {{output}} cm and its distance from equilibrium is {{magnitude}} cm.',formula:'eₙ = rⁿe₀ = {{output}} cm; |eₙ| = {{magnitude}} cm'}
      ]),
      calculation:[
        {role:'input',label:'Set the repeated multiplier',template:'r = {{multiplier}}; |r| = {{factorMagnitude}}',description:'The same rule applies to every completed correction.'},
        {role:'intermediate',label:'Inspect the final transition',template:'eₙ = {{multiplier}} × {{previous}} cm',description:'The previous signed error is the input to the last exact update.'},
        {role:'output',label:'Measure the distance from zero',template:'eₙ = {{output}} cm; |eₙ| = {{magnitude}} cm',description:'The common scale separates the direction of displacement from its magnitude.'}
      ],
      conclusion:'With r=1/2, eight corrections give e₈=(1/2)⁸×1 cm=1/256 cm=0.00390625 cm. For this linear family |r|<1 makes every starting error approach zero; the power formula supplies that conclusion beyond the eight displayed updates.',
      assumptions:['This is a stipulated scalar linear correction model, not measured controller performance or an equipment recommendation.','The guided story fixes e₀=1 cm and eight whole corrections. A negative r reverses the sign at each update.','At |r|=1 nearby errors remain bounded but do not approach zero. A zero start remains zero even for a rule with |r|>1.','This lesson concerns starting-state perturbations. Structural stability under changes to the system itself is a separate subject.'],sourceRefs:['source:ucdavis:scalar-dynamics','source:openstax:geometric-sequences','source:tamu:structural-stability']
    }
  ]);
  const effects={
    'logical-connectives':'The changed length crosses the predicate threshold, selecting a truth-table row and its compound result.',
    quantifier:'One requirement changes each predicate outcome, supplying witnesses or counterexamples for the same domain.',
    'cross-product':'The angle changes the perpendicular component, spanned area and directed normal while edge lengths stay fixed.',
    stability:'The repeated multiplier changes every exact correction, separating signed error, error magnitude and stability of the rule.'
  };
  const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
  const q=(label,unit,role,description)=>({label,unit,role,description});
  const quantities=freeze({
    'logical-connectives':{
      length:q('Panel length','cm','input','The continuously changed measurement in the statement P.'),width:q('Panel width','cm','reference','The fixed second dimension used in statement Q.'),
      pTruth:q('Length statement truth','','intermediate','The exact truth value of x≥6 cm.'),pLabel:q('Length statement truth','','intermediate','The exact True/False result of x≥6 cm.'),
      qTruth:q('Width statement truth','','reference','The exact truth value of y≥4 cm.'),qLabel:q('Width statement truth','','reference','The exact True/False result of the fixed width comparison.'),
      output:q('Compound truth value','','output','The chosen classical connective applied to its statement inputs.'),truthLabel:q('Compound truth value','','output','The True/False result, not a probability or measured amount.')
    },
    quantifier:{
      threshold:q('Required length','cm','input','The free parameter h used in every predicate comparison.'),qualifyingCount:q('Passing strip count','strips','intermediate','How many of the complete six-element domain satisfy x≥h.'),
      someTruth:q('Existential truth','','intermediate','Whether at least one included strip is a witness.'),someLabel:q('Existential truth','','intermediate','The True/False value of the at-least-one claim.'),
      allTruth:q('Universal truth','','output','Whether all six predicate comparisons are true.'),allLabel:q('Universal truth','','output','The True/False value of the every-strip claim.'),
      output:q('Selected quantifier truth','','output','The universal or existential truth selected in the playground.'),truthLabel:q('Selected quantifier truth','','output','The selected proposition’s True/False result.')
    },
    'cross-product':{
      uLength:q('First edge length','m','reference','The fixed base magnitude.'),vLength:q('Second edge length','m','reference','The fixed magnitude of the edge that turns.'),
      angle:q('Signed edge angle','°','input','The turn from the first vector toward the second in the coordinate plane.'),sine:q('Perpendicular sine factor','','intermediate','The signed share determining the vertical component.'),
      vX:q('Horizontal component of v','m','intermediate','The second vector’s horizontal projection.'),vY:q('Perpendicular component of v','m','intermediate','The signed height factor in the planar determinant.'),
      normalComponent:q('Signed normal component','m²','output','The signed z component of the ordered cross product.'),area:q('Unoriented spanned area','m²','output','The nonnegative magnitude of the cross product.'),output:q('Signed normal component','m²','output','The primary signed component, separate from the area magnitude.')
    },
    stability:{
      initialError:q('Initial signed displacement','cm','reference','The starting state relative to equilibrium zero.'),steps:q('Completed corrections','corrections','reference','The exact integer number of applications of the rule.'),
      multiplier:q('Correction multiplier','','input','The same signed factor applied at every update.'),factorMagnitude:q('Multiplier magnitude','','intermediate','The nonnegative factor deciding magnitude growth or decay.'),
      previous:q('Previous signed displacement','cm','intermediate','The state immediately before the last displayed correction.'),stabilityLabel:q('Rule classification','','intermediate','The classification for nearby starts in this scalar linear family, independent of the selected starting state.'),
      output:q('Final signed displacement','cm','output','The exact state after the completed corrections.'),magnitude:q('Distance from equilibrium','cm','output','The nonnegative absolute value of the final displacement.')
    }
  });
  return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
