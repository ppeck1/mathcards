/* Private, versioned workspace records. This store never mounts a module or
   applies a connection. Unavailable implementations remain portable data. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./workspace-links.js'):root.AtlasWorkspaceLinks);
  if(node)module.exports=api;root.AtlasWorkspaceStore=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Links){
  'use strict';
  const VERSION='1.0.0',KEY='math-expression-atlas:workspaces:1.0',MAX_BYTES=8*1024*1024,MAX_ENTRIES=200;
  const unsafe=new Set(['__proto__','prototype','constructor']);
  const own=(value,key)=>Object.hasOwn(value,key);
  const record=value=>{
    if(!value||typeof value!=='object'||Array.isArray(value))return false;
    const prototype=Object.getPrototypeOf(value);
    return prototype===null||Object.getPrototypeOf(prototype)===null;
  };
  const text=(value,max=500)=>typeof value==='string'&&value.trim().length>0&&value.length<=max&&!/[\u0000-\u001f\u007f]/.test(value);
  const identifier=value=>text(value,200)&&!unsafe.has(value)&&/^[A-Za-z0-9][A-Za-z0-9:_-]*$/.test(value);
  const slug=value=>text(value,200)&&!unsafe.has(value)&&/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(value);
  const exactKeys=(value,required,optional=[])=>record(value)&&required.every(key=>own(value,key))&&Object.keys(value).every(key=>required.includes(key)||optional.includes(key));
  function bytes(value){
    if(typeof TextEncoder==='function')return new TextEncoder().encode(value).length;
    let count=0;
    for(let i=0;i<value.length;i++){
      const code=value.charCodeAt(i),next=value.charCodeAt(i+1);
      if(code<0x80)count++;
      else if(code<0x800)count+=2;
      else if(code>=0xd800&&code<=0xdbff&&next>=0xdc00&&next<=0xdfff){count+=4;i++;}
      else count+=3;
    }
    return count;
  }
  function copy(value,active=new Set(),depth=0){
    if(value===null||typeof value==='boolean')return value;
    if(typeof value==='number'){if(!Number.isFinite(value))throw new Error('Saved workspace values must be finite.');return value;}
    if(typeof value==='string'){if(value.length>20000)throw new Error('A saved workspace text value is too long.');return value;}
    if(typeof value!=='object')throw new Error('Workspaces contain JSON data only.');
    if(depth>12||active.has(value))throw new Error('Workspace data is too deeply nested or contains a cycle.');
    const array=Array.isArray(value);
    if(!array&&!record(value))throw new Error('Workspace data must use plain objects.');
    if(array&&value.length>1000)throw new Error('A workspace data array is too long.');
    const keys=Reflect.ownKeys(value).filter(key=>!(array&&key==='length'));
    if(!array&&keys.length>100)throw new Error('A workspace data object has too many fields.');
    if(array&&keys.length!==value.length)throw new Error('Workspace arrays cannot have holes or extra fields.');
    const result=array?[]:{};active.add(value);
    for(const key of keys){
      if(typeof key!=='string'||unsafe.has(key)||(array&&!/^(0|[1-9]\d*)$/.test(key)))throw new Error('Unsafe workspace field.');
      const descriptor=Object.getOwnPropertyDescriptor(value,key);
      if(!own(descriptor,'value')||!descriptor.enumerable)throw new Error('Workspace data cannot contain accessors or hidden fields.');
      Object.defineProperty(result,key,{value:copy(descriptor.value,active,depth+1),enumerable:true,writable:true,configurable:true});
    }
    active.delete(value);return result;
  }
  function stable(value){
    if(Array.isArray(value))return '['+value.map(stable).join(',')+']';
    if(record(value))return '{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+stable(value[key])).join(',')+'}';
    return JSON.stringify(value);
  }
  function validDate(value){
    if(typeof value!=='string')return false;
    const match=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?Z$/.exec(value);
    if(!match||!Number.isFinite(Date.parse(value)))return false;
    const [,year,month,day,hour,minute,second]=match.map(Number);
    return month>=1&&month<=12&&day>=1&&day<=new Date(Date.UTC(year,month,0)).getUTCDate()&&hour<24&&minute<60&&second<60;
  }
  const empty=()=>({schema_version:VERSION,kind:'math-atlas-workspace-backup',workspaces:[]});
  const generatedId=()=> 'workspace:'+(typeof crypto!=='undefined'&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));
  function createStore(options={}){
    const modules=options.modules||(typeof globalThis!=='undefined'&&globalThis.AtlasModules);
    if(!modules||typeof modules.get!=='function')throw new TypeError('Workspace storage needs the installed module registry.');
    if(!Links||typeof Links.compatible!=='function'||typeof Links.check!=='function')throw new TypeError('Workspace storage needs the connection contract.');
    let storage=options.storage,state=empty(),persistence='local',warning='',recovery=null,lastStoredRaw=null;
    function fallback(message,action='Workspaces shown in this tab are held in memory. Export a backup before closing it.'){storage=null;persistence='memory';warning=message+' '+action;}
    if(!own(options,'storage')){try{storage=globalThis.localStorage;}catch(_){fallback('Browser storage is unavailable.');}}
    if(!storage&&!warning)fallback('Browser storage is unavailable.');
    function available(slot){const module=modules.get(slot.module_id);return module&&String(module.version)===slot.module_version?module:null;}
    function compatibilityFor(workspace){
      const issues=[];
      for(const slot of workspace.slots){
        const module=modules.get(slot.module_id);
        if(!module)issues.push(slot.id+':module-unavailable');
        else if(String(module.version)!==slot.module_version)issues.push(slot.id+':module-version');
      }
      return issues.length?{replayable:false,status:'preserved',reason:'A matching saved module version is unavailable. The workspace remains readable and exportable; restore requires its matching Atlas release.',issues}:{replayable:true,status:'current',reason:'Both saved module versions are available.',issues:[]};
    }
    function checkedParameters(module,parameters,label){
      if(!record(parameters))throw new Error(label+' must be a complete parameter object.');
      const defaults=copy(module.defaults());
      if(!record(defaults)||Object.keys(defaults).length!==Object.keys(parameters).length||Object.keys(defaults).some(key=>!own(parameters,key)))throw new Error(label+' must contain exactly the declared module parameter keys.');
      const checked=copy(module.validateParams(copy(parameters)));
      if(checked.valid!==true||!record(checked.parameters))throw new Error(label+' are unsupported by the saved module.');
      if(stable(checked.parameters)!==stable(parameters))throw new Error(label+' would be changed by validation.');
    }
    function validateSlot(slot,index){
      if(!exactKeys(slot,['id','module_id','module_version','parameters','view','camera','baseline','inspector']))throw new Error('A saved slot is incomplete or contains unknown fields.');
      if(slot.id!=='work-'+index||!slug(slot.module_id)||!text(slot.module_version,200)||!slug(slot.view))throw new Error('Invalid saved slot identity, version, or view.');
      if(!record(slot.parameters)||!(slot.baseline===null||record(slot.baseline))||!(slot.inspector===null||record(slot.inspector)))throw new Error('Invalid saved parameters, comparison pin, or inspector state.');
      if(!Number.isFinite(slot.camera)||slot.camera<.15||slot.camera>1)throw new Error('A saved camera must be between 0.15 and 1.');
      const module=available(slot);if(!module)return;
      checkedParameters(module,slot.parameters,'Saved parameters');
      if(slot.baseline!==null)checkedParameters(module,slot.baseline,'Saved comparison parameters');
      if(!module.views.some(view=>view.id===slot.view))throw new Error('The saved view is not declared by this module version.');
      if(typeof module.validateInspectorState==='function'){
        const checked=module.validateInspectorState(copy(slot.inspector));
        if(checked!==true&&checked?.valid!==true)throw new Error('The saved inspector state is unsupported by this module version.');
        if(checked!==true&&own(checked,'state')&&stable(copy(checked.state))!==stable(slot.inspector))throw new Error('Saved inspector state would be changed by validation.');
      }else if(slot.inspector!==null)throw new Error('This module version does not declare saved inspector state.');
    }
    function validateConnection(workspace){
      const connection=workspace.connection;if(connection===null)return;
      const fields=['sourceSlotId','sourcePortId','targetSlotId','targetPortId'];
      if(!exactKeys(connection,fields)||fields.some(key=>!identifier(connection[key])))throw new Error('Invalid saved workspace connection.');
      const source=workspace.slots.find(slot=>slot.id===connection.sourceSlotId),target=workspace.slots.find(slot=>slot.id===connection.targetSlotId);
      if(!source||!target||source===target)throw new Error('A saved connection needs two different workspace slots.');
      const sourceModule=available(source),targetModule=available(target);
      const sourcePort=sourceModule?.ports?.find(port=>port.id===connection.sourcePortId),targetPort=targetModule?.ports?.find(port=>port.id===connection.targetPortId);
      if(sourceModule&&!sourcePort)throw new Error('The source quantity is not declared by this module version.');
      if(targetModule&&(!targetPort||targetPort.direction!=='input'))throw new Error('The receiving input is not declared by this module version.');
      if(!sourceModule||!targetModule)return;
      const agreement=Links.compatible(sourcePort,targetPort);
      if(!agreement.valid)throw new Error('Saved connection quantities are incompatible: '+agreement.reason);
      const checked=Links.check({sourceModule,sourceParameters:source.parameters,sourcePortId:sourcePort.id,targetModule,targetParameters:target.parameters,targetPortId:targetPort.id});
      // A blocked live link legitimately retains its last valid receiving value.
      // A currently valid link must already agree; restore never corrects it silently.
      if(checked.valid&&target.parameters[checked.targetKey]!==checked.value)throw new Error('The receiving value does not match the saved active connection.');
    }
    function validateWorkspace(workspace){
      if(!exactKeys(workspace,['schema_version','kind','id','title','created_at','slots','connection'])||workspace.schema_version!==VERSION||workspace.kind!=='math-atlas-workspace')throw new Error('Unsupported saved workspace format or version.');
      if(!identifier(workspace.id)||!text(workspace.title,200)||!workspace.title.trim()||!validDate(workspace.created_at))throw new Error('Invalid saved workspace identity, title, or date.');
      if(!Array.isArray(workspace.slots)||workspace.slots.length!==2)throw new Error('A saved workspace needs exactly two ordered slots.');
      workspace.slots.forEach(validateSlot);validateConnection(workspace);return workspace;
    }
    function validateBackup(input){
      const data=copy(input);
      if(!exactKeys(data,['schema_version','kind','workspaces'])||data.schema_version!==VERSION||data.kind!=='math-atlas-workspace-backup'||!Array.isArray(data.workspaces))throw new Error('Unsupported workspace backup format or version.');
      if(data.workspaces.length>MAX_ENTRIES)throw new Error('A workspace backup can contain at most 200 saved workspaces.');
      if(bytes(JSON.stringify(data))>MAX_BYTES)throw new Error('Choose a workspace backup smaller than 8 MB.');
      const ids=new Set();for(const workspace of data.workspaces){validateWorkspace(workspace);if(ids.has(workspace.id))throw new Error('A workspace backup contains duplicate identities.');ids.add(workspace.id);}
      return data;
    }
    function read(raw){if(typeof raw!=='string'||bytes(raw)>MAX_BYTES)throw new Error('Choose a workspace backup smaller than 8 MB.');return validateBackup(JSON.parse(raw));}
    function persist(next){
      const raw=JSON.stringify(next);if(bytes(raw)>MAX_BYTES)throw new Error('Workspace storage exceeds 8 MB. Export a backup and remove older records first.');
      if(storage){
        let currentRaw,canWrite=true;
        try{currentRaw=storage.getItem(KEY);}
        catch(_){canWrite=false;fallback('Saved workspaces could not be checked before writing. The stored data was left untouched.','This tab’s changes are held in memory. Export a backup, then reload when storage is available.');}
        if(canWrite&&currentRaw!==lastStoredRaw)fallback('Saved workspaces changed in another tab.','This tab’s changes are held in memory. Export a backup before reloading to see the other tab’s saved records.');
        else if(canWrite){try{storage.setItem(KEY,raw);lastStoredRaw=raw;}catch(_){fallback('Browser storage is full or blocked.');}}
      }
      state=copy(next);return{ok:true,persistence,warning:warning||null};
    }
    if(storage){let saved;try{saved=storage.getItem(KEY);lastStoredRaw=saved;if(saved)state=read(saved);}catch(_){if(typeof saved==='string')recovery=saved;fallback('Stored workspaces could not be opened safely. Their stored bytes were left untouched.'+(recovery!==null?' Download the original stored data for recovery.':''));}}
    const guarded=fn=>{try{return fn();}catch(error){return{ok:false,error:error.message};}};
    return Object.freeze({
      list(){return copy(state.workspaces);},
      get(id){const workspace=state.workspaces.find(item=>item.id===id);return workspace?copy(workspace):null;},
      status(){return{persistence,warning:warning||null,count:state.workspaces.length,preservedCount:state.workspaces.filter(item=>!compatibilityFor(item).replayable).length,recoveryAvailable:recovery!==null};},
      compatibility(workspaceOrId){
        const candidate=typeof workspaceOrId==='string'?state.workspaces.find(item=>item.id===workspaceOrId):workspaceOrId;
        if(!candidate)return{replayable:false,status:'unavailable',reason:'This saved workspace is unavailable.',issues:['workspace-unavailable']};
        try{const workspace=validateWorkspace(copy(candidate));return copy(compatibilityFor(workspace));}
        catch(_){return{replayable:false,status:'unavailable',reason:'This workspace does not pass saved-state validation.',issues:['invalid-workspace']};}
      },
      exportRecovery(){return recovery;},
      add(input){return guarded(()=>{
        const safe=copy(input);
        if(!exactKeys(safe,['title','slots'],['connection']))throw new Error('Provide a workspace title, both slots, and an optional connection.');
        const workspace={schema_version:VERSION,kind:'math-atlas-workspace',id:generatedId(),title:typeof safe.title==='string'?safe.title.trim():safe.title,created_at:new Date().toISOString(),slots:safe.slots,connection:safe.connection===undefined?null:safe.connection};
        validateWorkspace(workspace);
        if(!compatibilityFor(workspace).replayable)throw new Error('New workspaces must use installed matching module versions.');
        const next=validateBackup({...empty(),workspaces:state.workspaces.concat(workspace)});
        return{...persist(next),workspace:copy(workspace)};
      });},
      remove(id){return guarded(()=>{if(!state.workspaces.some(item=>item.id===id))throw new Error('This saved workspace is unavailable.');return persist({...empty(),workspaces:state.workspaces.filter(item=>item.id!==id)});});},
      exportBackup(){return JSON.stringify(state,null,2);},
      importBackup(raw,options={}){return guarded(()=>{
        const incoming=typeof raw==='string'?read(raw):validateBackup(raw),mode=options.mode||'merge';
        if(!['merge','replace'].includes(mode))throw new Error('Choose merge or replace for this backup.');
        let workspaces=incoming.workspaces;
        if(mode==='merge'){
          const byId=new Map(state.workspaces.map(item=>[item.id,item]));
          for(const workspace of incoming.workspaces){if(byId.has(workspace.id)&&stable(byId.get(workspace.id))!==stable(workspace))throw new Error('A saved workspace identity conflicts with an existing record. No records changed.');byId.set(workspace.id,workspace);}
          workspaces=[...byId.values()];
        }
        const next=validateBackup({...empty(),workspaces});return{...persist(next),count:incoming.workspaces.length,imported:incoming.workspaces.length};
      });}
    });
  }
  return Object.freeze({createStore,schemaVersion:VERSION,storageKey:KEY});
});
