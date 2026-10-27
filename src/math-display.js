/* Learner-facing labels use declared notation; model parameter keys stay internal. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasMathDisplay=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const words=value=>String(value).replace(/([a-z])([A-Z])/g,'$1 $2').replace(/_/g,' ');
  function label(card,key){return Object.entries(card?.grammar?.output_symbol_bindings||{}).find(([,binding])=>binding===key)?.[0]||words(key);}
  function inputs(card,values){
    if(!values||typeof values!=='object'||Array.isArray(values))return'<pre>'+esc(JSON.stringify(values,null,2))+'</pre>';
    return'<div class="table-wrap"><table><caption class="sr-only">Given values</caption><thead><tr><th>Quantity</th><th>Value</th></tr></thead><tbody>'+Object.entries(values).map(([key,value])=>{
      return'<tr><th scope="row">'+esc(label(card,key))+'</th><td>'+esc(typeof value==='object'?JSON.stringify(value):value)+'</td></tr>';
    }).join('')+'</tbody></table></div>';
  }
  function nodeRows(card,ast){
    const nodes=new Map(ast.nodes.map(node=>[node.id,node]));
    const name=id=>{const node=nodes.get(id);return label(card,node?.symbol||String(id).replace(/^.*:/,''));};
    return ast.nodes.map(node=>'<tr><td>'+esc(name(node.id))+'</td><td>'+esc(words(node.kind))+(node.function?' · '+esc(name(node.function))+' ← '+esc(name(node.argument)):'')+'</td><td>'+esc(node.type)+'</td></tr>').join('');
  }
  return Object.freeze({inputs,label,nodeRows});
});
