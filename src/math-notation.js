/* A finite notation inventory. No formula execution, DOM, storage or clocks. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasMathNotation=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const unique=values=>Array.from(new Set(values));
  const sub={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','₊':'+','₋':'-','₌':'=','₍':'(','₎':')','ₐ':'a','ₑ':'e','ₕ':'h','ᵢ':'i','ⱼ':'j','ₖ':'k','ₗ':'l','ₘ':'m','ₙ':'n','ₒ':'o','ₚ':'p','ᵣ':'r','ₛ':'s','ₜ':'t','ᵤ':'u','ᵥ':'v','ₓ':'x','ᵧ':'y'};
  const sup={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-','⁼':'=','⁽':'(','⁾':')','ᵃ':'a','ᵇ':'b','ᶜ':'c','ᵈ':'d','ᵉ':'e','ᶠ':'f','ᵍ':'g','ʰ':'h','ⁱ':'i','ʲ':'j','ᵏ':'k','ˡ':'l','ᵐ':'m','ⁿ':'n','ᵒ':'o','ᵖ':'p','ʳ':'r','ˢ':'s','ᵗ':'t','ᵘ':'u','ᵛ':'v','ʷ':'w','ˣ':'x','ʸ':'y','ᶻ':'z','ᵀ':'T'};
  const subChars=new Set(Object.keys(sub)),supChars=new Set(Object.keys(sup));
  const greek={alpha:'α',beta:'β',gamma:'γ',delta:'δ',epsilon:'ε',varepsilon:'ε',zeta:'ζ',eta:'η',theta:'θ',vartheta:'θ',iota:'ι',kappa:'κ',varkappa:'κ',lambda:'λ',mu:'μ',nu:'ν',xi:'ξ',omicron:'ο',pi:'π',varpi:'π',rho:'ρ',varrho:'ρ',sigma:'σ',varsigma:'σ',tau:'τ',upsilon:'υ',phi:'φ',varphi:'φ',chi:'χ',psi:'ψ',omega:'ω',Gamma:'Γ',Delta:'Δ',Theta:'Θ',Lambda:'Λ',Xi:'Ξ',Pi:'Π',Sigma:'Σ',Upsilon:'Υ',Phi:'Φ',Psi:'Ψ',Omega:'Ω'};
  const greekIds={α:'alpha',β:'beta',γ:'gamma',δ:'delta-small',ε:'epsilon',ζ:'zeta',η:'eta',θ:'theta',ι:'iota',κ:'kappa',λ:'lambda',μ:'mu',ν:'nu',ξ:'xi',ο:'omicron',π:'pi',ρ:'rho',σ:'sigma-small',τ:'tau',υ:'upsilon',φ:'phi',χ:'chi',ψ:'psi',ω:'omega',Α:'alpha-capital',Β:'beta-capital',Γ:'gamma-capital',Δ:'delta-capital',Ε:'epsilon-capital',Ζ:'zeta-capital',Η:'eta-capital',Θ:'theta-capital',Ι:'iota-capital',Κ:'kappa-capital',Λ:'lambda-capital',Μ:'mu-capital',Ν:'nu-capital',Ξ:'xi-capital',Ο:'omicron-capital',Π:'pi-capital',Ρ:'rho-capital',Σ:'sigma-capital',Τ:'tau-capital',Υ:'upsilon-capital',Φ:'phi-capital',Χ:'chi-capital',Ψ:'psi-capital',Ω:'omega-capital'};
  const macros={...greek,times:'×',cdot:'·',ast:'*',div:'÷',ne:'≠',neq:'≠',le:'≤',leq:'≤',ge:'≥',geq:'≥',approx:'≈',pm:'±',infty:'∞',in:'∈',notin:'∉',forall:'∀',exists:'∃',implies:'⇒',Rightarrow:'⇒',iff:'⇔',Leftrightarrow:'⇔',to:'→',rightarrow:'→',mapsto:'↦',circ:'∘',sqrt:'√',sum:'∑',int:'∫',iint:'∬',iiint:'∭',oint:'∮',partial:'∂',nabla:'∇',perp:'⊥',equiv:'≡',sim:'∼',ldots:'…',cdots:'⋯',dots:'…',lvert:'|',rvert:'|',vert:'|',mid:'|',lVert:'‖',rVert:'‖',Vert:'‖',langle:'⟨',rangle:'⟩',lfloor:'⌊',rfloor:'⌋',lceil:'⌈',rceil:'⌉'};
  const formatting=new Set(['begin','end','left','right','middle','quad','qquad','enspace','thinspace','medspace','thickspace','hspace','vspace','operatorname','mathbb','mathcal','mathbf','mathrm','mathit','mathsf','mathtt','boldsymbol','text','textrm','displaystyle','textstyle','scriptstyle','scriptscriptstyle','limits','nolimits','underbrace','overbrace']);
  const named={sin:['sine'],cos:['cosine'],tan:['tangent-function'],sec:['secant-function'],csc:['cosecant-function'],cot:['cotangent-function'],arcsin:['arcsine'],arccos:['arccosine'],arctan:['arctangent'],ln:['logarithm'],log:['logarithm'],Log:['logarithm'],exp:['exponential-function'],sqrt:['square-root'],abs:['absolute-value'],norm:['magnitude'],hypot:['hypot'],atan2:['atan2'],floor:['floor'],ceil:['ceiling'],frac:['fractional-part'],det:['determinant'],rank:['rank'],dim:['vector-space-dimension'],min:['minimum'],max:['maximum'],argmin:['argmin'],argmax:['argmax'],arg:['complex-argument'],Re:['real-part'],Im:['imaginary-part'],Var:['variance'],Binomial:['binomial-distribution'],Apply:['function-notation'],AB:['matrix-product'],BA:['matrix-product'],T_A:['linear-map','function-notation'],dom:['domain'],codom:['codomain'],sign:['sign-function'],sgn:['sign-function'],proj:['projection','scalar-projection'],lim:['limit'],mod:['modulo'],bmod:['modulo'],pmod:['modulo']};
  const texFunctions=new Set(['sin','cos','tan','sec','csc','cot','arcsin','arccos','arctan','ln','log','exp','det','dim','min','max','lim','arg','Re','Im','bmod','pmod']);
  Object.assign(named,{Pr:['probability'],span:['span'],tr:['matrix-trace'],ker:['kernel'],im:['image-of-map'],comp:['scalar-projection'],comp_u:['scalar-projection'],SD:['standard-deviation'],sd:['standard-deviation'],Bin:['binomial-distribution']});
  Object.assign(named,{D_uF:['directional-derivative'],R_h:['binary-relation']});
  Object.assign(macros,{setminus:'∖',smallsetminus:'∖',land:'∧',wedge:'∧',lor:'∨',vee:'∨',neg:'¬',lnot:'¬',leftrightarrow:'↔',top:'⊤',bot:'⊥',odot:'⊙',otimes:'⊗',models:'⊨'});
  const glyphs={'+':['addition'],'-':['subtraction'],'−':['subtraction'],'×':['multiplication'],'·':['multiplication'],'⋅':['multiplication'],'*':['multiplication'],'÷':['division'],'/':['division'],'=':['equality'],'≠':['not-equal'],'<':['less-than'],'>':['greater-than'],'≤':['less-or-equal'],'≥':['greater-or-equal'],'≈':['approximately-equal'],'±':['plus-minus'],'%':['percent'],'√':['square-root'],'∞':['infinity'],'ℕ':['natural-number'],'ℤ':['integer'],'ℚ':['rational-number'],'ℝ':['real-number'],'ℂ':['complex-number'],'∈':['element'],'∉':['element'],'∀':['for-all'],'∃':['there-exists'],'⇒':['implication','logical-conditional'],'⇔':['if-and-only-if'],'∘':['composition'],'∑':['summation'],'∫':['integral','indefinite-integral'],'∬':['multiple-integral'],'∭':['multiple-integral'],'∮':['contour-integral'],'∂':['partial-derivative'],'∇':['gradient'],'⊥':['orthogonal'],'≡':['identity'],'∼':['distribution-notation'],'…':['ellipses'],'⋯':['ellipses'],'|':['vertical-bar'],'‖':['magnitude'],'′':['prime-mark'],'″':['higher-derivative','prime-mark'],'^':['superscript','exponent'],'_':['subscript'],'(':['grouping-parentheses'],')':['grouping-parentheses'],'[':['square-brackets'],']':['square-brackets'],'{':['curly-braces'],'}':['curly-braces'],'→':['right-arrow'],'↦':['maps-to'],'⌊':['floor'],'⌋':['floor'],'⌈':['ceiling'],'⌉':['ceiling'],'!':['factorial']};
  const vulgar={'½':'1/2','¼':'1/4','¾':'3/4','⅓':'1/3','⅔':'2/3','⅛':'1/8','⅜':'3/8','⅝':'5/8','⅞':'7/8'};
  Object.assign(glyphs,{'∖':['set-difference'],'~':['distribution-notation'],'∩':['set-intersection'],'∪':['set-union'],'∧':['logical-and'],'∨':['logical-or'],'¬':['logical-not'],'↔':['if-and-only-if'],'⊤':['truth-constants'],'⊥':['orthogonal','truth-constants'],'⊙':['normal-direction-glyphs'],'⊗':['normal-direction-glyphs'],'⊨':['semantic-entailment'],'ℵ':['aleph-null']});
  Object.assign(macros,{aleph:'ℵ',subseteq:'⊆',cap:'∩',cup:'∪',setminus:'∖',emptyset:'∅'});
  const mathLetter=c=>/[\u0370-\u03ff\u2100-\u214f]/u.test(c)||/\p{Script=Greek}/u.test(c)||(c.codePointAt(0)>=0x1d400&&c.codePointAt(0)<=0x1d7ff);
  function scriptRuns(value,characters,map,marker){let result='';for(let i=0;i<value.length;){const c=String.fromCodePoint(value.codePointAt(i));if(!characters.has(c)){result+=c;i+=c.length;continue;}let run='';while(i<value.length){const next=String.fromCodePoint(value.codePointAt(i));if(!characters.has(next))break;run+=map[next];i+=next.length;}result+=marker+(run.length===1?run:'{'+run+'}');}return result;}
  function normalize(query){
    if(typeof query!=='string')return'';let value=query.normalize('NFC').trim().replace(/[−–]/g,'-').replace(/ϵ/g,'ε').replace(/ϕ/g,'φ').replace(/ϑ/g,'θ').replace(/ϰ/g,'κ').replace(/ς/g,'σ');
    value=value.replace(/\\vec\s*\{([^{}]+)\}/g,(_,name)=>name+'⃗');
    value=value.replace(/\\(?:bar|overline)\s*\{([xz])\}/g,(_,letter)=>letter+'̅').replace(/([xz])[̄̅]/g,(_,letter)=>letter+'̅').replace(/\\mathcal\{O\}/g,'O');
    if(value==='xbar')value='x̅';value=value.replace(/^Theta\(/,'Θ(');
    if(/^['’]+$/.test(value))value=value.replace(/['’]/g,'′');
    value=value.replace(/\b([A-Za-z])(['’]+)(?=\s*(?:\(|$))/g,(_,letter,marks)=>letter+'′'.repeat(marks.length)).replace(/″/g,'′′').replace(/‴/g,'′′′');
    value=value.replace(/\\mathbb\s*(?:\{([NRZQCE])\}|([NRZQCE])\b)/g,(_,braced,bare)=>({N:'ℕ',R:'ℝ',Z:'ℤ',Q:'ℚ',C:'ℂ',E:'E'}[braced||bare]));
    value=value.replace(/\\(?:operatorname|mathrm|mathbf|mathit|mathsf|mathtt|text)\s*\{([^{}]*)\}/g,'$1').replace(/\\(?:left|right|displaystyle|textstyle|limits|nolimits)\b/g,'').replace(/\\(?:quad|qquad|enspace|thinspace|medspace|thickspace)\b/g,' ');
    // Never interpret the second slash of a TeX row break as a command.
    value=value.replace(/(?<!\\)\\([A-Za-z]+)/g,(whole,name)=>Object.hasOwn(macros,name)?macros[name]:texFunctions.has(name)?name:whole);
    value=value.replace(/\\\|/g,'‖').replace(/\\([!,;: ])/g,'').replace(/\|\|/g,'‖');
    for(const [symbol,fraction]of Object.entries(vulgar))value=value.split(symbol).join(fraction);
    value=scriptRuns(value,subChars,sub,'_');value=scriptRuns(value,supChars,sup,'^');
    value=value.replace(/\blog(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\(/g,'log_{$1}(').replace(/log_\(([^()]+)\)/g,'log_{$1}').replace(/\\(?:frac|dfrac|tfrac)\s*\{(\d+)\}\s*\{(\d+)\}/g,'$1/$2').replace(/\\(?:frac|dfrac|tfrac)\s*(\d)\s*(\d)/g,'$1/$2');
    value=value.replace(/([_^])\{([^{}])\}/g,'$1$2').replace(/!=|<>/g,'≠').replace(/<=/g,'≤').replace(/>=/g,'≥').replace(/\|->/g,'↦').replace(/->/g,'→').replace(/\.{3}/g,'…').replace(/\s+/g,'').replace(/(\d)E([+-]?\d+)/g,'$1e$2');
    value=value.replace(/([A-Z])\\([A-Z])\b/g,'$1∖$2').replace(/~/g,'∼').replace(/^m[·⋅*]s\^(?:\{-1\}|-1)$/,'m/s').replace(/^m[·⋅*]s\^(?:\{-2\}|-2)$/,'m/s^2');
    return value;
  }
  function classify(query,options={}){
    if(typeof query!=='string'||!query.trim())return[];if(options.kind==='unit')return unitIds(query,options);const raw=query.trim(),q=normalize(raw),result=[];const add=(...ids)=>result.push(...ids);
    if(Object.hasOwn(vulgar,raw)||/^[-+]?\d+\/\d+$/.test(q))add('fraction');
    if(q==='∃!')add('unique-exists');
    if(q==='ℵ_0'||q==='ℵ')add('aleph-null');
    if(options.slug==='countability'){
      if(/^f\([^()]+\)$/.test(q))add('enumeration');if(/^g\([^()]+\)$/.test(q))add('inverse-enumeration');
    }
    if(options.slug==='finite-state-machine'){
      if(/^δ\([^()]+,[01]\)$/.test(q)||q==='δ')add('transition-function');
      if(q==='Σ')add('input-alphabet');if(q==='ε')add('empty-word');
      if(/^q_(?:[0-9k]|\{[^{}]+\})$/.test(q))add('machine-state');
    }
    if(options.slug==='open-set'){
      if(/^(?:Bε|B_ε)\(p\)$/.test(q))add('open-ball');if(q==='‖p‖')add('metric-distance');if(q==='U_{<}'||q==='U_{≤}')add('disk-boundary-choice');if(q==='C(x)')add('signed-clearance');if(q==='ε')add('neighborhood-radius');
    }
    if(options.slug==='quantifier-scope'){
      if(/^R_h\(x,y\)$/.test(q))add('station-relation');
      if(q==='φ_h(x)')add('open-formula');if(q==='φ_h(x_p)')add('probe-coordinate');
      if(q==='A_h'||q==='B_h')add('quantifier-order');
    }
    if(/^(?:[uv]×[uv]|r×F|r⃗×F⃗)$/.test(q))add('cross-product');
    if(q==='r⃗')add('position-vector');if(q==='F⃗')add('force');if(q==='τ⃗')add('torque');
    if(q==='x̅')add('sample-mean');if(q==='z̅')add('complex-conjugate');
    if(q==='σ^2')add('population-variance');
    if(/^v_(?:[nk]|[0-9]+|\{[nk][+-]1\})$/.test(q))add('sequence');
    if(/^d_(?:i|[1-4])$/.test(q))add('deviation');
    if(/^O\([\s\S]+\)$/.test(q))add('big-o');if(/^Θ\([\s\S]+\)$/.test(q))add('big-theta');
    if(/^[A-Z]∖[A-Z]$/.test(q))add('set-difference');
    if(/^(?:[fgh]:)?(?:[ABCℕℤℚℝℂ](?:\^[0-9n])?)→(?:[ABCℕℤℚℝℂ](?:\^[0-9n])?)$/.test(q))add('function-arrow');
    if(/^lim_?\{?[\s\S]*→/.test(q))add('limit-arrow');
    if(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)[eE][-+]?\d+$/.test(q))add('scientific-notation');
    if(/^E(?:\[[\s\S]+\]|\([\s\S]+\))$/.test(q))add('expected-value');
    if(/^P\([\s\S]+\)$/.test(q)){if(['quantifier','relation'].includes(options.slug))add('predicate');else {add(q.includes('|')?'conditional-probability':'probability');if(q==='P(x)'||/^P\([-+]?\d+(?:\.\d+)?\)$/.test(q))add('predicate');}}
    if(/^R(?:_h)?\(x,y\)$/.test(q)&&options.slug!=='quantifier-scope')add('binary-relation');
    if(q==='D×D')add('cartesian-product');
    if(/^P_h\(x\)$/.test(q))add('predicate');
    const costCall=/^C\(x(?:_(?:0|k|\{k\+1\}))?,y(?:_(?:0|k|\{k\+1\}))?\)$/.test(q);
    if(costCall)add('cost-function','function-notation');
    if(!costCall&&/^(?:C\([^,()]+,[^,()]+\)|(?:[A-Za-z0-9]+)![\s\S]*)$/.test(q))add(q.includes('!')?'factorial':'binomial-coefficient');
    if(/^\\binom\b/.test(q))add('column-vector','binomial-coefficient');
    if(/^\\(?:d?frac|tfrac)\b/.test(q)){add('fraction','division');if(/\\(?:frac|dfrac|tfrac)\{d[^{}]*\}\{d[^{}]*\}/.test(q))add('derivative','differential');}
    if(/^(?:log(?:_[A-Za-z0-9]+|_\{[^{}]+\})?|\\log(?:_[A-Za-z0-9]+|_\{[^{}]+\})?)(?:\([\s\S]*\))?$/.test(q))add('logarithm');
    if(/^[A-Za-z][′]+(?:\([\s\S]*\))?$/.test(q)&&q.includes('('))add((q.match(/′/g)||[]).length>1?'higher-derivative':'derivative');
    else if(/^[A-Za-z][′]+$/.test(q))add('prime-mark');
    if(/^d[A-Za-z]\/d[A-Za-z]$/.test(q)||/^d\/d[A-Za-z]$/.test(q))add('derivative','differential');
    if(/^d[A-Za-zθφ]$/.test(q))add('differential');
    if(/^‖[^‖]+‖$/.test(q)||/^\\lVert[\s\S]+\\rVert$/.test(raw.replace(/\s+/g,'')))add('magnitude');
    if(/^\|[^|]+\|$/.test(q)){const body=q.slice(1,-1),setForm=/[∩∪∖∅]/.test(body),ambiguousSet=/^[ABUR]$/.test(body);if(setForm||ambiguousSet)add('cardinality');if(!setForm)add(/^[uv]×[uv]$/.test(body)?'magnitude':'absolute-value');if(/^\|[zw]+\|$/.test(q))add('complex-modulus');}
    if(/^\[\[[\s\S]+\]\]$/.test(q)||/^\\begin\{(?:bmatrix|pmatrix|matrix|vmatrix|Vmatrix)\}/.test(q))add('matrix','column-vector');
    if(/^[[(][^,()[\]]+,[^,()[\]]+[)\]]$/.test(q)){
      if(q[0]==='('&&q.at(-1)===')')add('ordered-pair','open-interval');else if(q[0]==='['&&q.at(-1)===']')add('closed-interval','square-brackets');else add('half-open-interval');
    }
    if(/^[A-Za-zα-ωΑ-Ω]+(?:_[A-Za-z0-9]|_\{[^{}]+\})/.test(q))add('subscript');
    if(/^[A-Za-zα-ωΑ-Ω0-9]+(?:\^[A-Za-z0-9+-]|\^\{[^{}]+\})/.test(q))add('superscript','exponent');
    if(/^[ℝℂℚℤℕ](?:\^[A-Za-z0-9]|\^\{[^{}]+\})$/.test(q))add('cartesian-power','superscript');
    if(!/^[ℝℂℚℤℕ]/.test(q)&&/\^(?:2|\{2\})$/.test(q))add('square');
    if(!/^[ℝℂℚℤℕ]/.test(q)&&/\^(?:3|\{3\})$/.test(q))add('cube');
    if(/^m(?:\^2|\^3)$/.test(q)||/^(?:cm|mm)(?:\^2|\^3)$/.test(q))add('powered-unit');
    if(/^(?:m\/(?:s|s\^2)|L\/min|km\/h)$/.test(q))add('compound-unit');
    if(q==='px')add('pixel-unit');
    if(/^(?:cm|mm|kg|ms)$/.test(q))add('measurement-unit-symbols');
    if(/^\\mathcal\{B\}$/.test(q))add('basis');
    const command=/^\\([A-Za-z]+)$/.exec(raw);if(command&&texFunctions.has(command[1]))add(...named[command[1]]);
    if(Object.hasOwn(named,q))add(...named[q]);
    const call=/^([A-Za-z][A-Za-z0-9_]*)\([\s\S]*\)$/.exec(q);if(call){if(Object.hasOwn(named,call[1]))add(...(call[1]==='R_h'&&options.slug==='quantifier-scope'?['station-relation']:named[call[1]]));else if(/^[fghWVARdSvLTw]$/.test(call[1])&&!(options.slug==='relation'&&call[1]==='R'))add('function-notation');}
    if(Object.hasOwn(glyphs,q))add(...glyphs[q]);if(Object.hasOwn(greekIds,q))add(greekIds[q]);
    if(subChars.has(raw))add('subscript');if(supChars.has(raw))add('superscript','exponent');
    return unique(result);
  }
  function unitIds(query,{slug}={}){
    const q=normalize(query),unit=String(query).trim().toLowerCase();
    if(q==='N')return['newton'];if(q==='J')return['joule'];
    if(['pair','pairs','ordered pairs'].includes(unit))return['declared-unit'];
    if(/^N[·.*]?m$/.test(q))return['compound-unit',...(!slug||slug==='torque'?['torque-unit']:[])];
    if(/^(?:m|cm|mm|g|kg|L|s|ms|min|h)$/.test(q))return['measurement-unit-symbols'];
    if(/^(?:m|cm|mm)\^[23]$/.test(q))return['powered-unit'];
    if(/^(?:m\/s(?:\^2)?|m\/m|ms\/item|L\/min|km\/h)$/.test(q))return['compound-unit'];
    if(unit==='m² per unit setting')return['compound-unit','declared-unit'];
    if(q==='px')return['pixel-unit'];if(q==='°'||unit==='degrees')return['degree'];if(unit==='rad'||unit==='radians')return['radian'];
    if(['unitless','dimensionless','× reference','ratio'].includes(unit))return unit==='ratio'?['ratio','dimensionless']:['dimensionless'];
    if(unit==='symbols')return['symbol-count'];
    if(['population fraction','fraction','of capacity','probability','fraction of flagged items'].includes(unit))return['ratio','probability'];
    if(['generations','passes','levels','refinements'].includes(unit))return['iteration'];
    if(unit==='truth value')return['truth-value'];
    if(['step','steps','updates','completed updates'].includes(unit))return['iteration-index','iteration'];
    if(unit==='deg')return['degree'];
    if(['round','rounds','completed rounds'].includes(unit))return['completed-rounds','iteration'];
    if(unit==='basis weights')return['weight','coordinate-vector'];
    if(unit==='normalized amplitude')return['declared-unit','dimensionless','amplitude'];if(unit==='expected seedlings')return['declared-unit','expected-value'];
    if(['reference areas','reference area units','reference square units','drawing units²','coordinate units²'].includes(unit))return['declared-unit','area'];
    if(/^(?:m|cm|mm) (?:horizontally|vertically|east|north)$/.test(unit))return['measurement-unit-symbols'];
    if(/^(?:m|cm|mm) per unit weight$/.test(unit))return['measurement-unit-symbols','weight'];
    if(['units','unit setting','model units','coordinate units','drawing units','reference units','reference coordinate products','amplitude units','real units','sensor units','signal units','display units','score units','items','comparisons','checks','successes','servings','portions','stops','×'].includes(unit))return['declared-unit','units'];
    return[];
  }
  function stripPlaceholders(value){return value.replace(/\{\{[A-Za-z][A-Za-z0-9_]*\}\}/g,'');}
  function fieldsFor(card,stories=[]){
    if(!card||typeof card!=='object')return[];const fields=[];
    function add(value,location,kind){if(typeof value!=='string'||!value.trim()||/^(?:ast|math:|source:)/.test(value.trim()))return;fields.push({text:stripPlaceholders(value),location,kind:kind||(/(?<!\\)\\[A-Za-z]/.test(value)?'tex':'formula')});}
    add(card.definition?.formal_latex,'Definition · formal expression','tex');add(card.grammar?.expression_latex,'Grammar · expression','tex');add(card.grammar?.formation_rule,'Grammar · formation rule');
    for(const symbol of card.grammar?.symbols||[])add(symbol?.token,'Grammar · symbol '+String(symbol?.token||''));
    const expressionKeys=new Set(['expression','expression_latex','formal_latex','formula']);
    function variants(value,path){if(typeof value==='string'){add(value,path);return;}if(!value||typeof value!=='object')return;for(const [key,item]of Object.entries(value)){if(expressionKeys.has(key))add(item,path+' · '+key);else if(key!=='nodes'&&key!=='scopes'&&typeof item==='object')variants(item,path+' · '+key);}}
    for(const key of expressionKeys)add(card.interactive?.[key],'Interactive · '+key);
    for(const control of card.interactive?.controls||[])add(control.unit,'Interactive · unit '+String(control.id||control.key||''),'unit');
    variants(card.interactive?.expression_variants,'Interactive · expression variants');
    for(const [i,example]of(card.examples||[]).entries()){
      for(const [j,step]of(example.steps||[]).entries())add(step.expression,'Example '+(i+1)+' · step '+(j+1));
      for(const key of ['expression','formula','expression_latex'])add(example[key],'Example '+(i+1)+' · '+key);
      const exact=example.result?.exact;if(typeof exact==='string'&&/[=+*/^_<>{}\[\]∑∫≈≠≤≥²³]/.test(exact))add(exact,'Example '+(i+1)+' · exact result');
      for(const [key,value]of Object.entries(example.inputs||{}))if(typeof value==='string'&&/[=+*/^_<>{}\[\]∑∫≈≠≤≥²³]/.test(value))add(value,'Example '+(i+1)+' · input '+key);
    }
    const related=Array.isArray(stories)?stories.filter(story=>story&&story.slug===card.slug):[];
    for(const story of related){const prefix='Story '+String(story.id||story.slug);for(const [i,step]of(story.steps||[]).entries())add(step.formula,prefix+' · step '+(i+1));for(const [i,phase]of(story.calculation||[]).entries())add(phase.template,prefix+' · calculation '+(i+1));for(const v of story.variables||[]){add(v.symbol,prefix+' · variable '+String(v.key||''));add(v.unit,prefix+' · variable unit '+String(v.key||''),'unit');}add(story.unit,prefix+' · unit','unit');}
    return freeze(fields);
  }
  function balanced(text,start,open,close){let depth=0;for(let i=start;i<text.length;i++){if(text[i]===open)depth++;else if(text[i]===close&&!--depth)return i+1;}return null;}
  function extract(text,{kind='formula',slug}={}){
    if(typeof text!=='string')return[];const records=[];
    const emit=(token,offset,type,extra={})=>records.push({token,kind:type,offset,end:offset+token.length,sourceKind:kind,entryIds:classify(token,{slug}),...extra});
    if(kind==='unit'){const token=text.trim();if(token)emit(token,text.indexOf(token),'unit',{entryIds:unitIds(token,{slug})});return freeze(records);}
    const children=(start,end)=>{if(end<=start)return;for(const child of extract(text.slice(start,end),{kind,slug}))records.push({...child,offset:child.offset+start,end:child.end+start});};
    const delimiters=(open,close)=>{emit(text[open],open,'grouping');emit(text[close],close,'grouping');};
    for(let i=0;i<text.length;){const rest=text.slice(i),c=String.fromCodePoint(text.codePointAt(i));
      if(/\s/u.test(c)){i+=c.length;continue;}
      const meanBar=/^[xz][̄̅]/u.exec(rest);if(meanBar){emit(meanBar[0],i,'structured');i+=meanBar[0].length;continue;}
      const texVectorProduct=/^(\\vec\s*\{r\})\s*\\times\s*(\\vec\s*\{F\})/.exec(rest);if(texVectorProduct){emit(texVectorProduct[0],i,'structured',{entryIds:['cross-product']});emit(texVectorProduct[1],i,'structured',{entryIds:['position-vector']});emit(texVectorProduct[2],i+texVectorProduct[0].lastIndexOf(texVectorProduct[2]),'structured',{entryIds:['force']});i+=texVectorProduct[0].length;continue;}
      const texVector=/^\\vec\s*\{(?:[A-Za-zα-ωΑ-Ω]|\\[A-Za-z]+)\}/.exec(rest);if(texVector){emit(texVector[0],i,'structured');i+=texVector[0].length;continue;}
      const nativeVector=/^[A-Za-zα-ωΑ-Ω]⃗/.exec(rest);
      const arrowProduct=/^r⃗\s*×\s*F⃗/.exec(rest);if(arrowProduct){emit(arrowProduct[0],i,'structured',{entryIds:['cross-product']});i+=arrowProduct[0].length;continue;}
      if(nativeVector){emit(nativeVector[0],i,'structured');i+=nativeVector[0].length;continue;}
      const texBar=/^\\(?:bar|overline)\s*\{([xz])\}/.exec(rest);if(texBar){emit(texBar[0],i,'structured');i+=texBar[0].length;continue;}
      const thetaCall=/^\\Theta\s*\(/.exec(rest);if(thetaCall){const start=i+thetaCall[0].length-1,end=balanced(text,start,'(',')');if(end){emit(text.slice(i,end),i,'structured');delimiters(start,end-1);children(start+1,end-1);i=end;continue;}}
      const nativeDifference=kind!=='tex'&&/^[A-Z]\\[A-Z]\b/.exec(rest);if(nativeDifference){emit(nativeDifference[0],i,'structured',{entryIds:['set-difference']});i+=nativeDifference[0].length;continue;}
      if(c==='~'&&kind==='tex'){emit(c,i,'formatting',{reason:'TeX nonbreaking space'});i++;continue;}
      if((c==='↔'&&(/^\s*(?:h\s*)?↔\s*$/.test(text)||/\b(?:drag|zoom|arrow keys)\b/i.test(text)))||(c==='◎'&&text.trim()==='◎')||(c==='↗'&&/\b(?:trace|open|see|explore|view)\b/i.test(text))){emit(c,i,'formatting',{reason:'Declared UI control or navigation icon'});i+=c.length;continue;}
      if(c==='\\'){
        const run=/^\\+/.exec(rest)[0];if(run.length>1){emit(run,i,run.length===2?'formatting':'invalid',{reason:run.length===2?'TeX row break':'Only a single command slash or a double row break is supported.'});i+=run.length;continue;}
        const command=/^\\([A-Za-z]+)/.exec(rest);
        if(!command){const escape=rest.slice(0,2);if(/^\\[!,;: ]$/.test(escape))emit(escape,i,'formatting');else if(/^\\[{}_%#$&|]$/.test(escape))emit(escape,i,'symbol',{entryIds:escape==='\\|'?['magnitude']:classify(escape[1],{slug})});else emit(escape,i,'invalid',{reason:'A TeX slash must start a known command or escape.'});i+=escape.length;continue;}
        const name=command[1],token=command[0];
        if(name==='exists'&&text[i+token.length]==='!'){emit(token+'!',i,'structured',{entryIds:['unique-exists']});i+=token.length+1;continue;}
        if(formatting.has(name)){
          emit(token,i,'formatting',{macro:name});let cursor=i+token.length;while(/\s/.test(text[cursor]||'')&&cursor<text.length)cursor++;
          if(text[cursor]==='{'){
            const end=balanced(text,cursor,'{','}');if(!end){emit(text.slice(cursor),cursor,'invalid',{reason:'Unclosed formatting argument.'});break;}
            if(['begin','end','hspace','vspace'].includes(name)){emit(text.slice(cursor,end),cursor,'formatting',{reason:'TeX layout argument'});i=end;continue;}
            if(['mathbb','mathcal','operatorname'].includes(name)){const whole=text.slice(i,end),ids=classify(whole,{slug});if(ids.length)emit(whole,i,'structured',{entryIds:ids});else emit(whole,i,name==='operatorname'?'identifier':'symbol');if(name==='operatorname'&&/[\\+*/=<>\p{Sm}]/u.test(text.slice(cursor+1,end-1)))children(cursor+1,end-1);i=end;continue;}
          }
          if(name==='mathbb'&&/[NRZQCE]/.test(text[cursor]||'')){const whole=text.slice(i,cursor+1);emit(whole,i,'structured');i=cursor+1;continue;}
          i+=token.length;continue;
        }
        if(name==='binom'){
          let end=i+token.length;const argumentsAt=[];for(let part=0;part<2;part++){while(/\s/.test(text[end]||'')&&end<text.length)end++;if(text[end]!=='{')break;const next=balanced(text,end,'{','}');if(!next)break;argumentsAt.push([end,next-1]);end=next;}
          emit(text.slice(i,end),i,argumentsAt.length===2?'structured':'invalid',{command:name,...(argumentsAt.length===2?{}:{reason:'The stacked form needs two balanced arguments.'})});for(const [start,finish]of argumentsAt){delimiters(start,finish);children(start+1,finish);}i=end;continue;
        }
        emit(token,i,'command',{command:name});i+=token.length;continue;
      }
      const scientific=/^[+−-]?(?:\d+(?:\.\d*)?|\.\d+)[eE][+−-]?\d+\b/.exec(rest);if(scientific){emit(scientific[0],i,'structured');i+=scientific[0].length;continue;}
      const fraction=/^[+−-]?\d+\/\d+(?!\d)/.exec(rest);if(fraction){emit(fraction[0],i,'structured');const slash=i+fraction[0].indexOf('/');emit('/',slash,'operator');i+=fraction[0].length;continue;}
      if(rest.startsWith('D×D')){emit('D×D',i,'structured',{entryIds:['cartesian-product']});i+=3;continue;}
      if(rest.startsWith('∃!')){emit('∃!',i,'structured');i+=2;continue;}
      const vectorProduct=/^(?:[uv]\s*×\s*[uv]|r\s*×\s*F)(?![A-Za-z0-9_])/.exec(rest);if(vectorProduct){emit(vectorProduct[0],i,'structured',{entryIds:['cross-product']});i+=vectorProduct[0].length;continue;}
      if(rest.startsWith('||')||c==='‖'){
        const delimiter=c==='‖'?'‖':'||',end=text.indexOf(delimiter,i+delimiter.length);if(end>=0){const token=text.slice(i,end+delimiter.length);emit(token,i,'structured');children(i+delimiter.length,end);i+=token.length;continue;}
      }
      if(c==='|'){
        const end=text.indexOf('|',i+1);if(end>i+1&&end-i<150&&!/[\n;]/.test(text.slice(i+1,end))){emit(text.slice(i,end+1),i,'structured');children(i+1,end);i=end+1;continue;}
      }
      const functionStart=/^(?:[A-Za-z]['’′″]+|(?:E|P|C|O|Θ|[fghWVARdSvLTw]|AB|BA|T_A|Apply|Log|sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|log(?:_(?:[A-Za-z0-9]+|\{[^{}]+\}|\([^()]+\))|[₀-₉]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)?|ln|exp|sqrt|abs|norm|hypot|atan2|floor|ceil|frac|det|rank|dim|min|max|argmin|argmax|arg|Re|Im|Var|Binomial|sign|sgn|proj)(?:['’′″]+)?)\s*[([]/.exec(rest);
      const predicateStart=/^(?:[PR](?:_h|_\{h\}|ₕ)|φ(?:_h|_\{h\}|ₕ)|B(?:ε|_ε|_\{ε\})|δ)\s*\(/.exec(rest);
      const nativeStart=/^([A-Za-z][A-Za-z0-9_]*)\s*[([]/.exec(rest),recognizedStart=predicateStart||functionStart||(nativeStart&&Object.hasOwn(named,nativeStart[1])?nativeStart:null);
      if(recognizedStart){const open=rest[recognizedStart[0].length-1],start=i+recognizedStart[0].length-1,end=balanced(text,start,open,open==='('?')':']');if(end){const token=text.slice(i,end),ids=classify(token,{slug});if(ids.length){emit(token,i,'structured',{entryIds:ids});delimiters(start,end-1);children(start+1,end-1);i=end;continue;}}}
      const decorated=/^[A-Za-zα-ωΑ-Ωℵℕ][A-Za-z0-9α-ωΑ-Ω]*(?:_[A-Za-z0-9]|_\{[^{}]+\}|\^[A-Za-z0-9+-]|\^\{[^{}]+\}|[₀-₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵧ⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻᵀ]+)(?:[₀-₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵧ⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻᵀ]*)/.exec(rest);
      if(decorated&&!/[A-Za-z_]/.test(rest[decorated[0].length]||'')){emit(decorated[0],i,'structured');for(const match of decorated[0].matchAll(/\{([^{}]*)\}/g)){const start=i+match.index;delimiters(start,start+match[0].length-1);children(start+1,start+match[0].length-1);}i+=decorated[0].length;continue;}
      const compound=/^(?:N(?:[·.]|\s+)m|m\/s(?:²|\^2)?|ms\/item|L\/min|km\/h|(?:cm|mm|m)[²³]|px)(?![\p{L}\p{N}_/])/u.exec(rest);if(compound){emit(compound[0],i,'unit',{entryIds:unitIds(compound[0],{slug})});if(/^N/.test(compound[0])){emit('N',i,'unit',{entryIds:['newton']});emit('m',i+compound[0].lastIndexOf('m'),'unit',{entryIds:['measurement-unit-symbols']});}i+=compound[0].length;continue;}
      const differential=/^d[xtyθφ]\b/.exec(rest);if(differential&&(text.trim()===differential[0]||/∫|\\(?:int|iint|iiint|oint)\b|\\frac\s*\{d/.test(text))){emit(differential[0],i,'structured');i+=differential[0].length;continue;}
      const comparison=/^(?:!=|<=|>=|<>|\|->|->)/.exec(rest);if(comparison){emit(comparison[0],i,'operator');i+=comparison[0].length;continue;}
      const word=/^[A-Za-z][A-Za-z0-9_]*/.exec(rest);if(word){const previous=text.slice(0,i).trimEnd().at(-1),unit=/^(?:m|cm|mm|g|kg|L|s|ms|min|h|N|J)$/.test(word[0])&&(/[0-9)\]²³]/.test(previous||'')||(word[0]==='min'&&text.trim()!=='min'))&&(!rest.slice(word[0].length).trimStart().startsWith('('));if(unit)emit(word[0],i,'unit',{entryIds:unitIds(word[0],{slug})});else if(Object.hasOwn(named,word[0]))emit(word[0],i,'identifier');else if(word[0].length===1&&text.trim()===word[0])emit(word[0],i,'identifier');i+=word[0].length;continue;}
      if(Object.hasOwn(vulgar,c)||Object.hasOwn(glyphs,c)||subChars.has(c)||supChars.has(c)||mathLetter(c)||/\p{Sm}/u.test(c)){emit(c,i,Object.hasOwn(glyphs,c)&&/[()[\]{}]/.test(c)?'grouping':Object.hasOwn(glyphs,c)&&/[+\-*/=<>×·÷±]/.test(c)?'operator':'symbol');i+=c.length;continue;}
      // Numerals, prose punctuation and presentation icons do not become invented math entries.
      i+=c.length;
    }
    const seen=new Set();return freeze(records.filter(record=>{const key=record.offset+':'+record.end+':'+record.kind+':'+record.token;if(seen.has(key))return false;seen.add(key);return true;}));
  }
  function audit({cards=[],stories=[],entries=[],fields=[]}={}){
    if(!Array.isArray(cards)||!Array.isArray(stories)||!Array.isArray(entries)||!Array.isArray(fields))throw new TypeError('Notation audit needs card, story, entry and optional field arrays.');
    const byId=new Map(entries.filter(entry=>entry&&typeof entry.id==='string').map(entry=>[entry.id,entry])),exact=new Map();
    for(const entry of byId.values())for(const token of [...(entry.symbols||[]),...(entry.lookupAliases||[]),...(entry.mathSymbols||[]),...(entry.tokens||[])])if(typeof token==='string'&&token.trim()){const key=normalize(token),ids=exact.get(key)||[];ids.push(entry.id);exact.set(key,ids);}
    const records=[],layout=[],review=[],allFields=[...cards.flatMap(card=>fieldsFor(card,stories).map(field=>({...field,slug:String(card.slug||'')}))),...fields.filter(field=>field&&typeof field.text==='string')];
    for(const field of allFields)if(field.kind!=='unit')for(const match of field.text.matchAll(/(?<![\\\w])([A-Za-z][A-Za-z0-9_]*)\(/g)){const name=match[1];if(name.length>1&&!Object.hasOwn(named,name)&&!/^log_(?:[A-Za-z0-9]*|\{[^{}]+\})$/.test(name)&&!/^log\d+$/.test(name)&&name!=='rx_n')review.push({slug:String(field.slug||''),location:field.location||'Declared runtime notation',token:name,offset:match.index,reason:'Adjacent plain callable needs an explicit mathematical reader or a reviewed prose exclusion.'});}
    for(const field of allFields)for(const occurrence of extract(field.text,{kind:field.kind,slug:field.slug})){
      const reference=field.reference===true||String(field.slug||'').startsWith('reference:');
      const record={slug:String(field.slug||''),location:field.location||'Declared runtime notation',text:field.text,...(reference?{reference:true}:{}),...(field.ownerEntryId?{ownerEntryId:field.ownerEntryId}:{}),...occurrence};
      if(record.kind==='formatting'){layout.push(record);continue;}
      const candidates=unique([...record.entryIds,...(record.kind==='unit'?[]:(exact.get(normalize(record.token))||[]))]);
      // Reference examples may introduce an ordinary placeholder letter without registering it as a card variable.
      if(reference&&record.kind==='identifier'&&/^[A-Za-z]$/.test(record.token)&&!candidates.some(id=>byId.has(id))&&byId.has('variable')){candidates.push('variable');record.referencePlaceholder=true;}
      const resolved=candidates.filter(id=>{
        const entry=byId.get(id);if(!entry)return false;
        if(!reference&&Array.isArray(entry.formulaCards)&&!entry.formulaCards.includes(record.slug))return false;
        if(!reference&&record.kind==='identifier'&&Array.isArray(entry.grammarCards)&&!entry.grammarCards.includes(record.slug))return false;
        return true;
      });
      records.push({...record,candidateIds:candidates,resolvedIds:resolved,resolved:record.kind!=='invalid'&&resolved.length>0});
    }
    const unresolved=records.filter(record=>!record.resolved),tokenCount=new Set(records.map(record=>normalize(record.token))).size;
    return freeze({records,formatting:layout,unresolved,review,counts:{cards:cards.length,fields:allFields.length,occurrences:records.length,uniqueTokens:tokenCount,resolved:records.length-unresolved.length,unresolved:unresolved.length,formatting:layout.length,review:review.length},complete:unresolved.length===0&&review.length===0});
  }
  return Object.freeze({fieldsFor,extract,classify,normalize,audit});
});
