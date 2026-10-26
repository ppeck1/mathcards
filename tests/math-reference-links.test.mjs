import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Terms=require('../src/math-terms.js'),Index=require('../src/math-index.js');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const index=Index.create({cards});

test('editorial reference links resolve to distinct authored definitions without altering card evidence',()=>{
  const ids=new Set(Terms.entries.map(entry=>entry.id));let total=0;
  for(const term of Terms.entries)for(const id of term.relatedIds||[]){
    assert.ok(ids.has(id),term.id+' → '+id);assert.notEqual(id,term.id);total++;
  }
  assert.ok(total>=20,'The reference offers a useful authored path between related meanings');
  const vector=index.get('vector');
  assert.ok(vector.relatedIds.length>0);assert.ok(Object.isFrozen(vector.relatedIds));
  assert.deepEqual(index.forCard('vector').map(entry=>entry.id).sort(),index.entries.filter(entry=>entry.usedBy.some(usage=>usage.slug==='vector')).map(entry=>entry.id).sort());
});

test('related definition navigation is separate from cards using a term and preserves stable IDs',()=>{
  const basis=index.get('basis'),html=index.markup({entryId:'basis'});
  assert.match(html,/aria-label="Related definitions"/);
  for(const id of basis.relatedIds)assert.ok(html.includes('href="#index/'+encodeURIComponent(id)+'"'));
  assert.ok(!html.includes('href="#card/linear-independence"'),'A background definition is not fabricated as a lesson');
  assert.ok(html.includes('href="#card/basis"'));
});

test('related entries stay available in exact-letter and no-current-card contexts',()=>{
  const variable=index.get('variable'),letter=index.search('r').find(entry=>entry.id==='variable');
  assert.ok(variable.relatedIds.length>0);assert.deepEqual(letter.relatedIds,variable.relatedIds);
  const background=Index.create().markup({entryId:'basis'});
  assert.match(background,/no identified use/);assert.match(background,/Related definitions/);
});

test('known multi-letter matrix notation takes precedence over English substrings',()=>{
  for(const token of ['AB','BA']){
    const hits=index.search(token);assert.deepEqual(hits.map(entry=>entry.id),['matrix-product']);
    assert.deepEqual(hits[0].usedBy.map(usage=>usage.slug),['matrix-product'],'A card merely naming matrix multiplication does not claim this exact local token');
    const markup=index.markup({query:token,entryId:'matrix-product'});assert.ok(!markup.includes('href="#card/basis"'));
  }
  assert.equal(index.search('absolute value')[0].id,'absolute-value');
  assert.ok(index.search('matrix composition').some(entry=>entry.id==='matrix-product'));
});
