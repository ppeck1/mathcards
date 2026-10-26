import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Playground=require('../src/playground.js');
const Values=require('../src/readable-values.js');

// A minimal DOM adapter exercises renderInto's update contract without adding a
// browser/runtime dependency to the offline atlas.
function text(value){return {nodeType:3,nodeName:'#text',nodeValue:value,get textContent(){return this.nodeValue;},cloneNode(){return text(this.nodeValue);}};}
function element(name,attrs={},children=[]){
  const node={nodeType:1,nodeName:name,namespaceURI:name==='DIV'?'http://www.w3.org/1999/xhtml':'http://www.w3.org/2000/svg',childNodes:children,attrs:{...attrs},focusCount:0,
    get attributes(){return Object.entries(this.attrs).map(([name,value])=>({name,value}));},
    hasAttribute(key){return Object.hasOwn(this.attrs,key);},getAttribute(key){return this.attrs[key]??null;},
    setAttribute(key,value){this.attrs[key]=String(value);},removeAttribute(key){delete this.attrs[key];},
    get dataset(){return {dragParam:this.attrs['data-drag-param']};},
    closest(){return this.attrs['data-drag-param']?this:null;},
    contains(target){return this===target||this.childNodes.some(child=>child===target||child.contains?.(target));},
    querySelector(selector){const key=selector.match(/data-drag-param="([^"]+)"/)?.[1];for(const child of this.childNodes){if(key&&child.getAttribute?.('data-drag-param')===key)return child;const nested=child.querySelector?.(selector);if(nested)return nested;}return null;},
    focus(){this.focusCount++;},append(child){this.childNodes.push(child);},
    cloneNode(){return element(name,this.attrs,this.childNodes.map(child=>child.cloneNode(true)));}};
  return node;
}
function scene(width,value){return element('DIV',{},[element('svg',{},[element('g',{'data-drag-param':'x','data-story-part':'input','aria-valuenow':String(value)},[element('rect',{width:String(width)}),element('text',{},[text(String(value))])])])]);}

test('geometry and accessibility values stay continuous while visible SVG numbers wait',()=>{
  const current=scene(10,1.23456),next=scene(20,2.34567),handle=current.childNodes[0].childNodes[0],label=handle.childNodes[1].childNodes[0];
  current.setAttribute('class','visual-stage');
  const beforeDocument=globalThis.document;
  globalThis.document={activeElement:handle,createElement(){const node=element('DIV');Object.defineProperty(node,'innerHTML',{set(){node.childNodes=next.childNodes.map(child=>child.cloneNode(true));}});return node;}};
  try{
    Playground.renderInto(current,'next scene',{preserveText:true,formatText:label=>Values.formatText(label)});
    assert.equal(handle.childNodes[0].getAttribute('width'),'20');
    assert.equal(handle.getAttribute('aria-valuenow'),'2.34567');
    assert.equal(label.nodeValue,'1.23456');
    assert.equal(current.childNodes[0].childNodes[0],handle);
    assert.equal(handle.focusCount,0,'A focused handle must not be refocused every frame');
    assert.equal(current.getAttribute('class'),'visual-stage');
    Playground.renderInto(current,'next scene',{formatText:label=>Values.formatText(label)});
    assert.equal(label.nodeValue,'2.35');
    assert.equal(handle.childNodes[1].childNodes[0],label,'The text node survives a paced number update');
    Playground.renderInto(current,'next scene');
    assert.equal(label.nodeValue,'2.34567','Existing callers still receive an immediate full update');
  }finally{globalThis.document=beforeDocument;}
});

test('story highlight ownership survives geometry frames without retaining unrelated stale attributes',()=>{
  const current=scene(10,1),next=scene(20,2),handle=current.childNodes[0].childNodes[0];
  handle.setAttribute('data-story-active','true');handle.setAttribute('data-stale','remove me');
  const removals=[],remove=handle.removeAttribute;handle.removeAttribute=function(key){removals.push(key);remove.call(this,key);};
  const beforeDocument=globalThis.document;
  globalThis.document={activeElement:null,createElement(){const node=element('DIV');Object.defineProperty(node,'innerHTML',{set(){node.childNodes=next.childNodes.map(child=>child.cloneNode(true));}});return node;}};
  try{
    Playground.renderInto(current,'next scene');
    assert.equal(handle.getAttribute('data-story-active'),'true');
    assert.deepEqual(removals,['data-stale'],'Highlight state must not be removed and re-added for each geometry frame');
    assert.equal(handle.getAttribute('aria-valuenow'),'2');
    next.childNodes[0].childNodes[0].removeAttribute('data-story-part');
    Playground.renderInto(current,'next scene');
    assert.equal(handle.getAttribute('data-story-active'),null,'A node that is no longer a story mark must lose its highlight');
  }finally{globalThis.document=beforeDocument;}
});
