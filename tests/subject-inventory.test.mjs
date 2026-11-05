import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url),
  Inventory = require('../src/subject-inventory.js');
const raw = fs.readFileSync(
  new URL('../content/planning/eight-book-subject-inventory-v1.json', import.meta.url)
);
const supplied = JSON.parse(raw.toString('utf8').replace(/^\uFEFF/, ''));
const source = fs.readFileSync(
  new URL('../src/subject-inventory-data.js', import.meta.url),
  'utf8'
);
const context = vm.createContext({});
vm.runInContext(source, context);
const data = JSON.parse(JSON.stringify(context.AtlasSubjectInventoryData));
const cards = fs
  .readdirSync(new URL('../content/cards/', import.meta.url))
  .filter(name => name.endsWith('.json'))
  .map(name =>
    JSON.parse(fs.readFileSync(new URL('../content/cards/' + name, import.meta.url), 'utf8'))
  );
const browser = Inventory.create({ data, cards });

test('all 295 imported subjects remain individually searchable under all 18 domains and eight books', () => {
  assert.equal(browser.counts.total, 295);
  assert.equal(browser.counts.subjects, 18);
  assert.equal(browser.counts.books, 8);
  assert.deepEqual(
    browser.concepts.map(row => row.id),
    supplied.concepts.map(row => row.id)
  );
  for (const concept of supplied.concepts) {
    assert.ok(
      browser.search(concept.label).some(row => row.id === concept.id),
      concept.id
    );
    assert.ok(
      browser.search(concept.id).some(row => row.id === concept.id),
      concept.id
    );
  }
  for (const domain of supplied.domains) {
    const expected = supplied.concepts
      .filter(concept => concept.domain_ids.includes(domain.id))
      .map(concept => concept.id);
    assert.deepEqual(
      browser.search('', { subject: domain.id }).map(concept => concept.id),
      expected
    );
  }
  for (const book of supplied.books) {
    const expected = supplied.concepts
      .filter(concept => concept.book_evidence.some(row => row.book_id === book.id))
      .map(concept => concept.id);
    assert.deepEqual(
      browser.search('', { book: book.id }).map(concept => concept.id),
      expected
    );
  }
});

test('lesson availability is explicit and independent of attributed source evidence', () => {
  for (const row of browser.concepts) {
    const original = supplied.concepts.find(concept => concept.id === row.id);
    assert.deepEqual(row.evidence, original.book_evidence, row.id);
    assert.equal(row.status === 'planned', row.lessons.length === 0, row.id);
    for (const card of row.lessons)
      assert.ok(
        cards.some(candidate => candidate.slug === card.slug && candidate.title === card.title),
        row.id
      );
  }
  assert.ok(
    browser.concepts.some(concept => concept.status === 'planned' && concept.lessons.length === 0)
  );
  assert.equal(browser.get('nonparametric-statistics').status, 'draft-introduction');
  assert.deepEqual(
    browser.get('nonparametric-statistics').lessons.map(card => card.slug),
    ['sign-test', 'wilcoxon-signed-rank', 'mann-whitney']
  );
  assert.equal(browser.get('prime-conjectures').status, 'precursor');
  assert.deepEqual(
    browser.get('prime-conjectures').lessons.map(card => card.slug),
    ['prime-factorization'],
    'prime vocabulary prepares a future conjecture lesson without completing it'
  );
  assert.equal(browser.get('shannon-entropy').status, 'draft-introduction');
  assert.equal(browser.get('fractals').evidence[0].evidence_status, 'provisional_book_mapping');
  assert.equal(
    browser.get('fractals').status,
    'draft-introduction',
    'a provisional book mapping does not erase an independently authored lesson'
  );
  assert.equal(data.sourceHash, crypto.createHash('sha256').update(raw).digest('hex'));
  assert.equal(data.counts.book_topic_mappings, 312);
  assert.equal(data.counts.provisional_only_concepts, 80);
});

test('subject, book, query and status filters compose and preserve distinctions between entropies', () => {
  const information = browser.search('entropy', { subject: 'information' });
  assert.ok(information.some(row => row.id === 'shannon-entropy'));
  assert.ok(!information.some(row => row.id === 'thermodynamic-entropy'));
  const thermal = browser.search('entropy', { subject: 'thermodynamics' });
  assert.ok(thermal.some(row => row.id === 'thermodynamic-entropy'));
  assert.ok(!thermal.some(row => row.id === 'shannon-entropy'));
  for (const status of ['planned', 'precursor', 'draft-introduction']) {
    const results = browser.search('', { book: 'B05', status });
    assert.ok(
      results.every(
        row => row.evidence.some(record => record.book_id === 'B05') && row.status === status
      )
    );
  }
  assert.equal(browser.search('a term that does not exist').length, 0);
  assert.equal(browser.search(null).length, 0);
});

test('rendered subject navigation labels planned scope honestly and links only actual lessons', () => {
  const html = browser.markup();
  assert.match(html, /Follow a subject/);
  assert.match(html, /295 planning subjects/);
  assert.match(html, /imported subject is not a completed lesson/);
  assert.match(html, /showing 12/);
  for (const key of ['query', 'area', 'book', 'status'])
    assert.match(html, new RegExp('for="subject-browser-page-' + key + '"'));
  const planned = browser.concepts.find(concept => concept.status === 'planned');
  assert.ok(planned, 'the remaining roadmap retains explicitly planned concepts');
  const selected = browser.markup({ selected: planned.id });
  assert.match(selected, /Planned lesson/);
  assert.match(selected, /no executable lesson/);
  assert.doesNotMatch(selected, /#card\//);
  const preparation = browser.markup({ selected: 'prime-conjectures' });
  assert.match(preparation, /Preparation only/);
  assert.match(preparation, /#card\/prime-factorization/);
  assert.match(preparation, /No conjecture statement, current conjecture status or proof/);
  const available = browser.markup({ selected: 'shannon-entropy' });
  assert.match(available, /#card\/entropy/);
  assert.match(available, /Draft introduction/);
  assert.match(available, /Book scope and verification/);
  assert.match(available, /does not certify this lesson/);
  const absent = browser.markup({ selected: 'not-a-subject' });
  assert.match(absent, /matching subjects/);
});

test('generated planning data is inert, immutable at runtime and rejects unresolved card references', () => {
  assert.doesNotMatch(source, /<\/script/i);
  assert.doesNotMatch(source, /\r/);
  assert.ok(Object.isFrozen(browser.concepts[0]));
  assert.ok(Object.isFrozen(browser.concepts[0].evidence));
  const bad = structuredClone(data);
  bad.concepts[0].cards = ['not-a-card'];
  assert.throws(() => Inventory.create({ data: bad, cards }), /Unresolved/);
  const duplicate = structuredClone(data);
  duplicate.concepts.push(duplicate.concepts[0]);
  assert.throws(() => Inventory.create({ data: duplicate, cards }), /duplicate/);
  const unsafe = structuredClone(data);
  unsafe.concepts[0].label = '<script>alert("x")</script>';
  const safe = Inventory.create({ data: unsafe, cards }).markup({
    selected: unsafe.concepts[0].id
  });
  assert.doesNotMatch(safe, /<script>/);
  assert.match(safe, /&lt;script&gt;/);
});

test('actual mount filters, paging and cleanup keep a single set of scoped listeners', () => {
  const handlers = new Map(),
    results = { innerHTML: '' },
    host = {
      innerHTML: '',
      querySelector: () => results,
      addEventListener: (name, handler) => handlers.set(name, handler),
      removeEventListener: (name, handler) => {
        assert.equal(handlers.get(name), handler);
        handlers.delete(name);
      }
    };
  const mounted = browser.mount(host);
  assert.equal(handlers.size, 3);
  assert.match(host.innerHTML, /showing 12/);
  handlers.get('click')({
    target: { closest: selector => (selector === '[data-subject-more]' ? {} : null) }
  });
  assert.equal(mounted.getState().limit, 24);
  assert.match(results.innerHTML, /showing 24/);
  const target = { value: 'lattice', matches: selector => selector === '[data-subject-query]' };
  handlers.get('input')({ target });
  assert.equal(mounted.getState().query, 'lattice');
  assert.equal(mounted.getState().limit, 12);
  assert.match(results.innerHTML, /lattice/i);
  assert.doesNotMatch(results.innerHTML, /Subject functions/);
  mounted.destroy();
  mounted.destroy();
  assert.equal(handlers.size, 0);
});

test('subject compiler rejects invented lesson links and count drift without mutating the source inventory', () => {
  const code = String.raw`import pathlib,sys,tempfile,json,shutil
sys.path.insert(0,str(pathlib.Path('tools').resolve()))
import build_subject_inventory as b
with tempfile.TemporaryDirectory() as directory:
 root=pathlib.Path(directory)
 (root/'content/planning').mkdir(parents=True)
 shutil.copyfile(b.ROOT/b.INVENTORY,root/b.INVENTORY)
 shutil.copyfile(b.ROOT/b.CROSSWALK,root/b.CROSSWALK)
 shutil.copytree(b.ROOT/'content/cards',root/'content/cards')
 assert b.compile_inventory(root)==b.compile_inventory(root)
 crosswalk=json.loads((root/b.CROSSWALK).read_text())
 crosswalk['links'][0].update(status='draft-introduction',cards=['imaginary-unpublished-lesson'])
 (root/b.CROSSWALK).write_text(json.dumps(crosswalk))
 try:b.compile_inventory(root)
 except ValueError as error:assert 'Unknown or duplicate linked lesson' in str(error)
 else:raise AssertionError('Invented lesson accepted')
 shutil.copyfile(b.ROOT/b.CROSSWALK,root/b.CROSSWALK)
 inventory=json.loads((root/b.INVENTORY).read_text(encoding='utf-8-sig'))
 inventory['counts']['distinct_concept_labels']+=1
 (root/b.INVENTORY).write_text(json.dumps(inventory),encoding='utf-8')
 try:b.compile_inventory(root)
 except ValueError as error:assert 'declared counts' in str(error)
 else:raise AssertionError('Incorrect count accepted')
print('subject compilation guards pass')`;
  assert.match(
    execFileSync('python', ['-c', code], {
      cwd: new URL('../', import.meta.url),
      encoding: 'utf8'
    }),
    /guards pass/
  );
});
