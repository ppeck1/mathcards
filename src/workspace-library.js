/* Scoped private-workspace controls. Storage validation lives in workspace-store;
   capture and restoration belong to the shared host, not this view. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasWorkspaceLibrary=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const MAX_BYTES=8*1024*1024;
  function markup(){return '<section class="workspace-library" aria-labelledby="workspace-library-title"><div class="workspace-save-row"><div><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h2 id="workspace-library-title">Keep this workspace.</h2></div><label class="workspace-name-label">Name<input type="text" maxlength="200" placeholder="Name this experiment" aria-label="Saved workspace name" data-workspace-name></label><button class="button" type="button" data-workspace-save>Save workspace</button></div><p class="workspace-library-status" role="status" aria-live="polite" data-workspace-status hidden></p><p class="workspace-library-warning" role="alert" data-workspace-warning hidden></p><details class="workspace-library-details" data-workspace-details><summary data-workspace-summary>Saved workspaces (0)</summary><div class="workspace-restore-row"><label>Choose a saved workspace<select aria-label="Saved workspace" data-workspace-select></select></label><div class="workspace-library-actions"><button class="button secondary" type="button" data-workspace-restore>Restore workspace</button><button class="button secondary" type="button" data-workspace-delete>Delete saved workspace</button><button class="button secondary" type="button" data-workspace-undo hidden>Undo deletion</button></div></div><p class="workspace-compatibility" data-workspace-compatibility></p><details class="workspace-raw-details" data-workspace-raw-details hidden><summary>Saved configuration</summary><pre class="formal-tex" data-workspace-raw></pre></details><div class="workspace-backup-actions"><button class="button secondary small" type="button" data-workspace-export>Export workspace backup</button><button class="button secondary small" type="button" data-workspace-import>Import workspace backup</button><button class="button secondary small" type="button" data-workspace-recovery hidden>Download original stored data</button><input class="sr-only" type="file" accept=".json,application/json" aria-label="Choose workspace backup" data-workspace-file></div><p class="workspace-library-note">Saved privately in this browser. Export a backup to keep another copy. Restored workspaces start paused; importing a backup does not change the current experiment.</p></details></section>';}
  function mount(host,options){
    const element=host.matches?.('.workspace-library')?host:host.querySelector('.workspace-library');
    if(!element)throw new TypeError('The saved workspace controls are missing.');
    const {store}=options;if(!store||typeof store.list!=='function')throw new TypeError('Workspace controls need a private workspace store.');
    const node=selector=>element.querySelector(selector),name=node('[data-workspace-name]'),select=node('[data-workspace-select]'),details=node('[data-workspace-details]');
    const save=node('[data-workspace-save]'),restore=node('[data-workspace-restore]'),remove=node('[data-workspace-delete]'),undo=node('[data-workspace-undo]'),file=node('[data-workspace-file]');
    let disposed=false,selectedId=options.selectedId||'',undoBackup=null,undoExpected=null,deletedId='',importGeneration=0,restoring=false;
    const write=(target,value)=>{const text=String(value??'');if(target.textContent!==text)target.textContent=text;};
    function report(message,error=false){
      if(disposed)return;const status=node('[data-workspace-status]');write(status,message);status.hidden=!message;status.dataset.error=String(error);options.onMessage?.(message);
    }
    function clearUndo(){undoBackup=null;undoExpected=null;deletedId='';undo.hidden=true;}
    function selection(){return selectedId?store.get(selectedId):null;}
    function refresh(nextId=selectedId){
      if(disposed)return;
      const workspaces=store.list(),status=store.status();
      selectedId=workspaces.some(workspace=>workspace.id===nextId)?nextId:(workspaces[0]?.id||'');
      select.replaceChildren();
      for(const workspace of workspaces){const option=element.ownerDocument.createElement('option');option.value=workspace.id;option.textContent=workspace.title;select.append(option);}
      if(!workspaces.length){const option=element.ownerDocument.createElement('option');option.value='';option.textContent='No saved workspaces yet';select.append(option);}
      select.value=selectedId;select.disabled=!workspaces.length;
      write(node('[data-workspace-summary]'),'Saved workspaces ('+workspaces.length+')');
      const workspace=selection(),compatibility=store.compatibility(selectedId);
      restore.disabled=restoring||!workspace||!compatibility.replayable;remove.disabled=!workspace;undo.hidden=!undoBackup;
      write(node('[data-workspace-compatibility]'),workspace?compatibility.reason:'Save the current pair of modules, views, comparison pins, and connection to return to them later.');
      node('[data-workspace-raw-details]').hidden=!workspace;write(node('[data-workspace-raw]'),workspace?JSON.stringify(workspace,null,2):'');
      const warning=node('[data-workspace-warning]');warning.hidden=!status.warning;write(warning,status.warning||'');
      node('[data-workspace-recovery]').hidden=!status.recoveryAvailable;
      if(status.recoveryAvailable)details.open=true;
    }
    function saveCurrent(){
      if(disposed)return;
      try{
        const captured=options.capture();if(disposed)return;
        if(captured?.ok===false){report(captured.error||'The workspace could not be captured.',true);return;}
        const title=name.value.trim()||captured?.title||'Workspace '+(store.list().length+1);
        const result=store.add({title,slots:captured?.slots,connection:captured?.connection??null});
        if(disposed)return;
        if(!result.ok){report(result.error||'The workspace could not be saved.',true);return;}
        clearUndo();selectedId=result.workspace.id;name.value=result.workspace.title;details.open=true;refresh();report(result.warning||'Workspace saved. Its values, views, pins, and connection are kept together.');
      }catch(error){report(error.message||'The workspace could not be captured.',true);}
    }
    async function restoreSelected(){
      if(disposed||restoring)return;const workspace=selection();if(!workspace)return;
      const compatibility=store.compatibility(workspace);
      if(!compatibility.replayable){report(compatibility.reason,true);return;}
      restoring=true;restore.disabled=true;
      try{
        const result=await options.onRestore(workspace);if(disposed)return;
        if(result?.ok!==true)report(result?.error||'The workspace could not be restored.',true);
        else report('Workspace restored. Both panels are paused.');
      }catch(error){if(!disposed)report(error.message||'The workspace could not be restored.',true);}
      finally{if(!disposed){restoring=false;refresh();}}
    }
    function deleteSelected(){
      if(disposed||!selectedId)return;
      try{
        const backup=store.exportBackup(),id=selectedId,result=store.remove(id);
        if(!result.ok){report(result.error||'The saved workspace could not be deleted.',true);return;}
        undoBackup=backup;undoExpected=store.exportBackup();deletedId=id;selectedId='';refresh();report('Saved workspace deleted. Undo deletion is available until another save or import.');
      }catch(error){report(error.message||'The saved workspace could not be deleted.',true);}
    }
    function undoDeletion(){
      if(disposed||!undoBackup)return;
      try{
        if(store.exportBackup()!==undoExpected){clearUndo();refresh();report('The saved workspace list changed. Deletion undo cannot replace newer records.',true);return;}
        const result=store.importBackup(undoBackup,{mode:'replace'});
        if(!result.ok){report(result.error||'Deletion could not be undone.',true);return;}
        selectedId=deletedId;clearUndo();refresh();report('Deletion undone.');
      }catch(error){report(error.message||'Deletion could not be undone.',true);}
    }
    async function importSelected(){
      if(disposed)return;const entry=file.files?.[0];if(!entry)return;
      const generation=++importGeneration;
      if(entry.size>MAX_BYTES){report('Choose a workspace backup smaller than 8 MB.',true);file.value='';return;}
      try{
        const raw=await entry.text();if(disposed||generation!==importGeneration)return;
        const result=store.importBackup(raw);if(disposed)return;
        if(!result.ok){report(result.error||'The workspace backup did not pass validation. No records changed.',true);return;}
        clearUndo();details.open=true;refresh();report(result.warning||'Workspace backup imported. Choose Restore workspace to open a saved experiment.');
      }catch(error){if(!disposed&&generation===importGeneration)report('The workspace backup could not be read. Choose an accessible JSON file.',true);}
      finally{if(!disposed&&generation===importGeneration)file.value='';}
    }
    function exportBackup(){if(disposed)return;try{options.download('expression-atlas-workspaces.json',store.exportBackup(),'application/json');report('Workspace backup exported.');}catch(error){report(error.message||'The workspace backup could not be exported.',true);}}
    function recoverOriginal(){if(disposed)return;try{const raw=store.exportRecovery();if(raw===null)return;options.download('expression-atlas-workspace-recovery.json',raw,'application/json');report('Original stored workspace data downloaded.');}catch(error){report(error.message||'The original stored data could not be downloaded.',true);}}
    const choose=()=>{selectedId=select.value;refresh();};
    const openImport=()=>{if(!disposed)file.click();};
    const events=[[save,'click',saveCurrent],[restore,'click',restoreSelected],[remove,'click',deleteSelected],[undo,'click',undoDeletion],[select,'change',choose],[file,'change',importSelected],[node('[data-workspace-export]'),'click',exportBackup],[node('[data-workspace-import]'),'click',openImport],[node('[data-workspace-recovery]'),'click',recoverOriginal]];
    for(const[target,event,handler]of events)target.addEventListener(event,handler);
    refresh();
    return Object.freeze({refresh,destroy(){if(disposed)return;disposed=true;importGeneration++;for(const[target,event,handler]of events)target.removeEventListener(event,handler);}});
  }
  return Object.freeze({markup,mount});
});
