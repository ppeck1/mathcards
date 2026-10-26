/* A scoped view of one explicit workspace connection. Math stays in modules;
   compatibility and state transitions stay in workspace-links.js. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./workspace-links.js'):root.AtlasWorkspaceLinks,node?require('./readable-values.js'):root.AtlasReadableValues);
  if(node)module.exports=api;root.AtlasWorkspacePanel=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Links,Readable){
  'use strict';
  const unitName=unit=>({'1':'unitless',m2:'m²','m/s2':'m/s²',deg:'°'})[unit]||unit;
  function markup(){return '<section class="workspace-linker" aria-labelledby="workspace-link-title"><div class="workspace-link-heading"><div><p class="eyebrow">LET ONE IDEA FEED ANOTHER</p><h2 id="workspace-link-title">Connect a quantity.</h2></div><span class="workspace-link-mode">One direction · two independent modules</span></div><p class="workspace-link-intro">Choose a quantity to drive an input in the other panel. The kind of quantity and its unit must match.</p><div class="workspace-link-fields"><label>Direction<select data-link-direction aria-label="Connection direction"><option value="forward">A → B</option><option value="reverse">B → A</option></select></label><label><span data-source-label>From A</span><select data-link-source aria-label="Source quantity"></select></label><label><span data-target-label>Into B</span><select data-link-target aria-label="Receiving input"></select></label><div class="workspace-link-actions"><button class="button" type="button" data-connect>Connect</button><button class="button secondary" type="button" data-disconnect hidden>Disconnect</button></div></div><div class="workspace-link-reading" aria-live="off"><span data-source-reading></span><span aria-hidden="true">→</span><span data-target-reading></span></div><p class="workspace-link-status" role="status" aria-live="polite" data-link-status></p><details class="workspace-link-meaning"><summary>What these quantities mean</summary><p data-source-meaning></p><p data-target-meaning></p><p>Values are checked against the receiving model. No unit conversion or clamping is applied. Editing the receiving value disconnects the link. Links last for this visit to the workbench.</p></details></section>';}
  function mount(host,options){
    const element=host.matches?.('.workspace-linker')?host:host.querySelector('.workspace-linker');
    if(!element)throw new TypeError('The workspace connection panel is missing.');
    const find=selector=>element.querySelector(selector),direction=find('[data-link-direction]'),sourceSelect=find('[data-link-source]'),targetSelect=find('[data-link-target]'),connect=find('[data-connect]'),disconnect=find('[data-disconnect]');
    let disposed=false,identity='',flushTimer=null,lastState='';
    const pacer=Readable.createPacer();
    const session=Links.createSession({getSlots:options.getSlots,apply:(id,parameters)=>{
      const slot=options.getSlots().find(item=>item.id===id);
      return slot?.controller?.applyParameters(parameters)||{valid:false,errors:[{message:'The receiving playground is unavailable.'}]};
    }});
    function endpoints(){const slots=options.getSlots();return direction.value==='reverse'?[slots[1],slots[0]]:[slots[0],slots[1]];}
    function selected(){
      const [source,target]=endpoints();
      return{source,target,sourcePort:source?.module.ports?.find(port=>port.id===sourceSelect.value),targetPort:target?.module.ports?.find(port=>port.id===targetSelect.value)};
    }
    function descriptor(){const {source,target}=selected();return{sourceSlotId:source?.id,sourcePortId:sourceSelect.value,targetSlotId:target?.id,targetPortId:targetSelect.value};}
    function preview(){const {source,target}=selected();return Links.check({sourceModule:source?.module,sourceParameters:source?.parameters,sourcePortId:sourceSelect.value,targetModule:target?.module,targetParameters:target?.parameters,targetPortId:targetSelect.value});}
    function fill(select,ports,preferred){
      const doc=element.ownerDocument;select.replaceChildren();
      for(const port of ports){const option=doc.createElement('option');option.value=port.id;option.textContent=(select===sourceSelect?(port.direction==='output'?'Result · ':'Input · '):'')+port.label+' · '+unitName(port.unit);select.append(option);}
      if(!ports.length){const option=doc.createElement('option');option.value='';option.textContent='No declared quantities';select.append(option);}
      select.disabled=!ports.length;
      select.value=ports.some(port=>port.id===preferred)?preferred:(ports[0]?.id||'');
    }
    function populate(keepSource=false){
      const [source,target]=endpoints(),sourcePorts=source?.module.ports||[],targetPorts=(target?.module.ports||[]).filter(port=>port.direction==='input');
      const previousSource=keepSource?sourceSelect.value:null,previousTarget=keepSource?targetSelect.value:null;
      fill(sourceSelect,sourcePorts,previousSource);
      const port=sourcePorts.find(item=>item.id===sourceSelect.value);
      const preferred=targetPorts.find(item=>item.id===previousTarget&&Links.compatible(port,item).valid)||targetPorts.find(item=>Links.compatible(port,item).valid);
      fill(targetSelect,targetPorts,preferred?.id);
      Readable.writeText(find('[data-source-label]'),'From '+(source?.label||'A'));
      Readable.writeText(find('[data-target-label]'),'Into '+(target?.label||'B'));
    }
    function paint(force=false){
      if(disposed)return;
      const state=session.getState(),candidate=preview(),{source,target,sourcePort,targetPort}=selected();
      element.dataset.linkState=state.phase;
      connect.hidden=state.phase!=='idle';disconnect.hidden=state.phase==='idle';connect.disabled=!candidate.valid;
      let status;
      if(state.phase==='linked')status='Connected. '+(target?.label||'The receiving panel')+' follows '+(source?.label||'the source panel')+'. Edit the receiving value to disconnect.';
      else if(state.phase==='blocked')status='Link paused: '+state.reason+' Last receiving value kept. It will resume when the value is valid.';
      else if(!candidate.valid)status=candidate.reason;
      else if(state.code&&state.code!=='idle'&&state.reason)status=state.reason;
      else status=candidate.valid?'Ready to connect. Both panels stay independent until you choose Connect.':candidate.reason;
      Readable.writeText(find('[data-link-status]'),status);
      Readable.writeText(find('[data-source-meaning]'),sourcePort?'From '+source.label+': '+(sourcePort.description||sourcePort.label+' · '+unitName(sourcePort.unit)):'This module declares no source quantities.');
      Readable.writeText(find('[data-target-meaning]'),targetPort?'Into '+target.label+': '+(targetPort.description||targetPort.label+' · '+unitName(targetPort.unit)):'This module declares no receiving inputs.');
      for(const slot of options.getSlots())if(slot.indicator){
        slot.indicator.hidden=state.phase==='idle';slot.indicator.dataset.linkPhase=state.phase;
        const receiving=slot.id===state.connection?.targetSlotId;
        Readable.writeText(slot.indicator,state.phase==='blocked'?'Link paused · last receiving value kept':receiving?'Following '+(source?.label||'source')+' · '+(sourcePort?.label||'quantity')+' → '+(targetPort?.label||'input'):'Sending to '+(target?.label||'receiving panel')+' · '+(sourcePort?.label||'quantity'));
      }
      const stateKey=state.phase+'|'+state.code,settled=source?.motion==='paused'&&target?.motion==='paused';
      if(pacer.take({force:force||stateKey!==lastState,settled})){
        const moving=!settled,format=value=>Readable.format(value,{settled:!moving});
        let value=candidate.value;
        if(value===undefined&&sourcePort?.direction==='input')value=source?.parameters[sourcePort.key];
        if(value===undefined&&sourcePort?.direction==='output'){
          try{const result=source.module.evaluate(source.parameters);if(result.valid)value=result[sourcePort.key];}catch(_){value=undefined;}
        }
        Readable.writeText(find('[data-source-reading]'),sourcePort?source.label+' · '+sourcePort.label+': '+format(value)+' '+unitName(sourcePort.unit):'Choose a source quantity');
        Readable.writeText(find('[data-target-reading]'),targetPort?target.label+' · '+targetPort.label+': '+format(target?.parameters[targetPort.key])+' '+unitName(targetPort.unit):'Choose a receiving input');
        lastState=stateKey;
      }
      // Incoming geometry can finish following without another parameter event.
      // Keep one paced text refresh until both hosts settle, then restore precision.
      if(!settled&&flushTimer===null)flushTimer=setTimeout(()=>{flushTimer=null;paint(true);},250);
      else if(settled&&flushTimer!==null){clearTimeout(flushTimer);flushTimer=null;}
    }
    function refresh(changedSlotId){
      if(disposed)return;
      const key=options.getSlots().map(slot=>slot.id+':'+slot.module.id+':'+slot.module.version).join('|');
      session.refresh(changedSlotId);
      if(key!==identity){identity=key;populate();}
      paint();
    }
    function restoreConnection(descriptor){
      const fail=(code,reason)=>({...session.getState(),restored:false,error:{code,reason}});
      if(disposed)return fail('destroyed','The workspace connection panel is closed.');
      if(descriptor===null){const result=session.restore(null);if(result.restored)paint(true);return result;}
      let slots,sourceSlotId,targetSlotId;
      try{
        const entries=Object.getOwnPropertyDescriptors(descriptor);
        if(!entries.sourceSlotId||!Object.hasOwn(entries.sourceSlotId,'value')||!entries.targetSlotId||!Object.hasOwn(entries.targetSlotId,'value'))throw new TypeError('A saved connection contains accessors.');
        sourceSlotId=entries.sourceSlotId.value;targetSlotId=entries.targetSlotId.value;
        slots=options.getSlots();
      }catch(_){return fail('invalid_connection','The saved connection must contain plain data.');}
      const nextDirection=sourceSlotId===slots[0]?.id&&targetSlotId===slots[1]?.id?'forward':sourceSlotId===slots[1]?.id&&targetSlotId===slots[0]?.id?'reverse':null;
      if(!nextDirection)return fail('invalid_connection_direction','The saved connection does not match these two workspace slots.');
      const result=session.restore(descriptor);
      if(!result.restored)return result;
      direction.value=nextDirection;populate();
      sourceSelect.value=result.connection.sourcePortId;targetSelect.value=result.connection.targetPortId;
      identity=slots.map(slot=>slot.id+':'+slot.module.id+':'+slot.module.version).join('|');
      paint(true);return result;
    }
    const changeDirection=()=>{session.disconnect('Direction changed. Choose Connect to start the new link.');populate();paint(true);};
    const changeSource=()=>{session.disconnect('Source quantity changed. Choose Connect to start the new link.');populate(true);paint(true);};
    const changeTarget=()=>{session.disconnect('Receiving input changed. Choose Connect to start the new link.');paint(true);};
    const start=()=>{session.connect(descriptor());paint(true);options.onChange?.();};
    const stop=()=>{session.disconnect('Disconnected. Both panels are independent.');paint(true);options.onChange?.();};
    const events=[[direction,'change',changeDirection],[sourceSelect,'change',changeSource],[targetSelect,'change',changeTarget],[connect,'click',start],[disconnect,'click',stop]];
    for(const[node,event,handler]of events)node.addEventListener(event,handler);
    refresh();
    return Object.freeze({refresh,restoreConnection,getState:()=>session.getState(),destroy(){if(disposed)return;disposed=true;if(flushTimer!==null)clearTimeout(flushTimer);session.destroy();for(const[node,event,handler]of events)node.removeEventListener(event,handler);for(const slot of options.getSlots())if(slot.indicator)slot.indicator.hidden=true;}});
  }
  return Object.freeze({markup,mount});
});
