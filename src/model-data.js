/* A finite numeric slice of a registered model. No DOM, clocks, or formula parsing. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasModelData=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const finite=Number.isFinite;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const format=value=>value===null||value===undefined?'Undefined':finite(value)?(value!==1&&Math.abs(value-1)<1e-5?String(value):String(Number(value.toPrecision(8)))).replace('-', '−'):String(value);
  const unit=value=>value&&value!=='1'?' ('+value+')':'';
  const diagnostic=result=>(result.errors||[]).map(error=>typeof error==='string'?error:error.message).join(' ')||result.message||String(result.status||'unavailable').replace(/_/g,' ');
  function sample(module,parameters,options={}){
    if(!module||typeof module.validateParams!=='function'||typeof module.evaluate!=='function')throw new TypeError('Supply a registered model.');
    const checked=module.validateParams(parameters);
    if(!checked.valid)return{valid:false,title:module.title,message:diagnostic(checked),columns:[],rows:[]};
    const p={...checked.parameters},sweeps=module.sweeps||[];
    const sweep=sweeps.find(item=>item.key===(options.key||module.primarySweep))||(!options.key?sweeps[0]:null);
    const ports=(module.ports||[]).filter(port=>port.direction==='output');
    const primary=ports.find(port=>port.key==='output')||{key:'output',label:'Model output',unit:module.unit||''};
    const outputs=[primary,...ports.filter(port=>port.key!=='output')].slice(0,4);
    const currentResult=module.evaluate(p);
    const fixed=(module.controls||[]).filter(control=>control.key!==sweep?.key).map(control=>({key:control.key,label:control.label,value:p[control.key],displayValue:control.type==='select'?control.options.find(option=>option.value===p[control.key])?.label:undefined,unit:control.unit||''}));
    const requested=options.count===undefined?9:options.count;
    if(!Number.isInteger(requested)||requested<2||requested>25)throw new RangeError('Use between 2 and 25 finite samples.');
    const axis=sweep?{key:sweep.key,label:sweep.label,unit:(module.controls||[]).find(control=>control.key===sweep.key)?.unit||'',min:sweep.min,max:sweep.max}:null;
    const columns=[...(axis?[axis]:[]),...outputs.map(({key,label,unit,description})=>({key,label,unit,description}))];
    const control=(module.controls||[]).find(item=>item.key===sweep?.key),discrete=!!(sweep?.discrete||control?.discrete),step=sweep?.step??control?.step;
    let values;
    if(sweep&&discrete){
      if(!finite(step)||step<=0)throw new RangeError('A discrete sweep needs a positive finite step.');
      const last=Math.floor((sweep.max-sweep.min)/step),count=Math.min(requested,last+1);
      values=Array.from({length:count},(_,index)=>sweep.min+(count===1?0:Math.round(last*index/(count-1)))*step);
    }else values=sweep?Array.from({length:requested},(_,index)=>index===requested-1?sweep.max:sweep.min+(sweep.max-sweep.min)*index/(requested-1)): [null];
    if(sweep&&finite(p[sweep.key])&&!values.includes(p[sweep.key]))values.push(p[sweep.key]);
    values.sort((a,b)=>a-b);
    const rows=values.map(value=>{
      const input=sweep?{...p,[sweep.key]:value}:p,result=module.evaluate(input);
      return{input:value,current:!sweep||value===p[sweep.key],status:result.status||'valid',message:result.valid===false?diagnostic(result):'',values:Object.fromEntries(outputs.map(port=>[port.key,finite(result[port.key])?result[port.key]:null]))};
    });
    return{valid:true,title:module.title,axis,columns,rows,fixed,current:{parameters:p,status:currentResult.status||'valid',message:currentResult.valid===false?diagnostic(currentResult):''},setting:module.setting||'',limits:module.limits||'',note:'Each row evaluates the same model with the other settings held fixed. These finite samples illustrate the rule and its declared conditions.'};
  }
  function markup(data){
    if(!data.valid)return'<p class="model-data-error">'+esc(data.message||'Choose supported inputs to read the model data.')+'</p>';
    const description=data.axis?'Vary '+data.axis.label+' from '+format(data.axis.min)+' to '+format(data.axis.max)+unit(data.axis.unit)+'. The current input is included.':'The model has no declared numeric animation range.';
    return'<div class="model-data-summary"><p>'+esc(description)+' Other settings stay fixed.</p><dl>'+data.fixed.map(item=>'<div><dt>'+esc(item.label)+'</dt><dd>'+esc(format(item.displayValue??item.value)+unit(item.unit))+'</dd></div>').join('')+'</dl></div>'+
      (data.current.message?'<p class="model-data-error">Current state: '+esc(data.current.message)+'</p>':'')+
      '<div class="table-wrap" tabindex="0" role="region" aria-label="'+esc(data.title)+' sample values"><table><caption>'+esc(data.title)+' · evaluated samples</caption><thead><tr>'+data.columns.map(column=>'<th scope="col">'+esc(column.label+unit(column.unit))+'</th>').join('')+'<th scope="col">State</th></tr></thead><tbody>'+data.rows.map(row=>'<tr'+(row.current?' class="model-data-current"':'')+'>'+data.columns.map((column,index)=>'<'+(index===0?'th scope="row"':'td')+'>'+esc(format(data.axis&&index===0?row.input:row.values[column.key]))+'</'+(index===0?'th':'td')+'>').join('')+'<td>'+esc((row.current?'Current · ':'')+(row.status==='valid'?'Defined':row.status.replace(/_/g,' ')))+'</td></tr>').join('')+'</tbody></table></div><p class="fine">'+esc(data.note)+'</p><p class="fine">'+esc(data.limits)+'</p>';
  }
  return Object.freeze({sample,markup});
});
