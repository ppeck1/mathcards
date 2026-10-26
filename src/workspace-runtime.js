/* Transaction boundary between saved data and live workspace hosts. The caller
   owns mounting; this service owns preflight, capture, and exact rollback data. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./workspace-store.js'):root.AtlasWorkspaceStore);
  if(node)module.exports=api;root.AtlasWorkspaceRuntime=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Store){
  'use strict';
  const own=(value,key)=>Object.hasOwn(value,key),unsafe=new Set(['__proto__','prototype','constructor']);
  const record=value=>{
    if(!value||typeof value!=='object'||Array.isArray(value))return false;
    const prototype=Object.getPrototypeOf(value);
    return prototype===null||Object.getPrototypeOf(prototype)===null;
  };
  function copy(value,active=new Set()){
    if(value===null||typeof value==='string'||typeof value==='boolean')return value;
    if(typeof value==='number'){if(!Number.isFinite(value))throw new Error('Workspace values must be finite.');return value;}
    if(typeof value!=='object'||(!Array.isArray(value)&&!record(value)))throw new Error('Workspace state must contain plain JSON data.');
    if(active.has(value))throw new Error('Workspace state cannot contain cycles.');
    const array=Array.isArray(value),result=array?[]:{};active.add(value);
    const keys=Reflect.ownKeys(value).filter(key=>!(array&&key==='length'));
    if(array&&keys.length!==value.length)throw new Error('Workspace arrays cannot have holes or extra fields.');
    for(const key of keys){
      if(typeof key!=='string'||unsafe.has(key)||(array&&!/^(0|[1-9]\d*)$/.test(key)))throw new Error('Unsafe workspace field.');
      const descriptor=Object.getOwnPropertyDescriptor(value,key);
      if(!own(descriptor,'value')||!descriptor.enumerable)throw new Error('Workspace state cannot contain accessors or hidden fields.');
      Object.defineProperty(result,key,{value:copy(descriptor.value,active),enumerable:true,writable:true,configurable:true});
    }
    active.delete(value);return result;
  }
  const message=(error,fallback)=>typeof error==='string'&&error?error:typeof error?.message==='string'&&error.message?error.message:fallback;
  function create(options){
    if(!record(options)||!options.modules||typeof options.modules.get!=='function'||!['getSlots','getConnection','replace'].every(key=>typeof options[key]==='function'))throw new TypeError('Workspace runtime needs modules, getSlots, getConnection, and a synchronous replace function.');
    if(!Store||typeof Store.createStore!=='function')throw new TypeError('Workspace runtime needs the saved workspace contract.');
    const {modules,getSlots,getConnection,replace}=options;
    function liveSlots(){
      const slots=getSlots();
      if(!Array.isArray(slots)||slots.length!==2)throw new Error('Two live playground slots are needed to capture a workspace.');
      for(let index=0;index<slots.length;index++){
        const slot=slots[index],module=slot?.module,controller=slot?.controller;
        if(slot?.id!=='work-'+index||!module||modules.get(module.id)!==module||!controller||!['pause','getParameters','getViewState'].every(key=>typeof controller[key]==='function'))throw new Error('A live playground slot is unavailable or no longer matches its registered module.');
      }
      return slots;
    }
    function capture(){
      const before=liveSlots();
      for(const slot of before)slot.controller.pause();
      const slots=liveSlots();
      if(slots.some((slot,index)=>slot.id!==before[index].id||slot.module!==before[index].module||slot.controller!==before[index].controller))throw new Error('The workspace changed while it was being captured. Try saving it again.');
      const saved=slots.map(slot=>{
        const parameters=copy(slot.controller.getParameters()),state=copy(slot.controller.getViewState());
        if(!record(state)||Object.keys(state).length!==4||!['view','camera','baseline','inspector'].every(key=>own(state,key)))throw new Error('A playground did not expose a complete saved view state.');
        return{id:slot.id,module_id:slot.module.id,module_version:String(slot.module.version),parameters,view:state.view,camera:state.camera,baseline:state.baseline,inspector:state.inspector};
      });
      const connection=getConnection();
      return copy({title:slots[0].module.title+' + '+slots[1].module.title,slots:saved,connection:connection==null?null:connection});
    }
    function preflight(input){
      try{
        const temporary=Store.createStore({storage:null,modules});
        const result=temporary.importBackup({schema_version:Store.schemaVersion,kind:'math-atlas-workspace-backup',workspaces:[input]});
        if(!result.ok)return{ok:false,error:result.error||'This saved workspace did not pass validation.'};
        const workspace=temporary.list()[0],compatibility=temporary.compatibility(workspace.id);
        if(!compatibility.replayable)return{ok:false,error:compatibility.reason,compatibility};
        return{ok:true,workspace};
      }catch(error){return{ok:false,error:message(error,'This saved workspace could not be validated.')};}
    }
    function replaceSnapshot(snapshot){
      const result=replace(copy(snapshot.slots),copy(snapshot.connection));
      if(result&&typeof result.then==='function')throw new Error('Workspace replacement must finish synchronously.');
      if(result===false||result?.ok===false)throw new Error(message(result?.error,'The workspace could not be rebuilt.'));
    }
    function restore(input){
      const checked=preflight(input);if(!checked.ok)return checked;
      let previous;
      try{previous=capture();}
      catch(error){return{ok:false,error:message(error,'The current workspace could not be captured for recovery.')};}
      try{
        replaceSnapshot(checked.workspace);
        return{ok:true,workspace:copy(checked.workspace)};
      }catch(error){
        const originalError=message(error,'The saved workspace could not be restored.');
        try{
          replaceSnapshot(previous);
          return{ok:false,error:originalError,rolledBack:true};
        }catch(rollbackError){
          return{ok:false,error:originalError+' The previous workspace also could not be rebuilt: '+message(rollbackError,'unknown replacement failure'),rolledBack:false,recovery:copy(previous)};
        }
      }
    }
    return Object.freeze({capture,restore});
  }
  return Object.freeze({create});
});
