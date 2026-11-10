import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/spatial-insights.js');
const Stories = require('../src/spatial-insight-stories.js');
const Previews = require('../src/spatial-insight-previews.js');
const Terms = require('../src/spatial-insight-terms.js');
const near = (a, b, tolerance = 3e-11) =>
  assert.ok(
    Number.isFinite(a) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)),
    `${a} ≈ ${b}`
  );
const card = slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  );
const attrs = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const oracle = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from spatial_insight_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );

test('all canonical spatial fixtures agree with independent Python constructions', () => {
  const cases = M.ids.flatMap(slug =>
    card(slug).interactive.expected_cases.map(c => ({ slug, input: c.input, expected: c }))
  );
  const expected = oracle(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    assert.equal(r.status, expected[i].status, c.slug);
    assert.equal(r.status, c.expected.status);
    if (r.valid) {
      near(r.output, c.expected.output);
      for (const [k, v] of Object.entries(expected[i])) if (typeof v === 'number') near(r[k], v);
    }
  });
});

test('the five actual unit-edge skeletons have correct incidences and Euler count', () => {
  for (let solid = 1; solid <= 5; solid++) {
    const r = M.evaluate('platonic-solids', { solid });
    assert.equal(r.vertices.length, r.vertexCount);
    assert.equal(r.edges.length, r.edgeCount);
    assert.equal(new Set(r.vertices.map(v => v.join(','))).size, r.vertexCount);
    const degrees = Array(r.vertexCount).fill(0);
    for (const [i, j] of r.edges) {
      assert.ok(i < j);
      near(Math.hypot(...r.vertices[i].map((v, k) => v - r.vertices[j][k])), 1);
      degrees[i]++;
      degrees[j]++;
    }
    assert.ok(degrees.every(v => v === r.vertexDegree));
    assert.equal(r.faceCount * r.faceSides, 2 * r.edgeCount);
    assert.equal(r.vertexCount * r.vertexDegree, 2 * r.edgeCount);
    assert.equal(r.euler, 2);
    assert.equal(r.output, r.faceCount);
    const html = M.render('platonic-solids', { solid }, { compact: true });
    assert.equal((html.match(/data-role="solid-edge"/g) || []).length, r.edgeCount);
    assert.equal((html.match(/data-role="solid-vertex"/g) || []).length, r.vertexCount);
  }
});

test('all fifty vertex choices distinguish exact fit from signed gaps and overlap', () => {
  const cases = [];
  for (let sides = 3; sides <= 12; sides++)
    for (let copies = 2; copies <= 6; copies++)
      cases.push({ slug: 'tessellation', input: { sides, copies } });
  const expected = oracle(cases),
    fits = [];
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    near(r.angle, expected[i].angle);
    near(r.gap, expected[i].gap);
    assert.equal(r.compatible, expected[i].compatible);
    if (r.compatible) fits.push([c.input.sides, c.input.copies]);
    const html = M.render(c.slug, c.input, { compact: true });
    assert.equal((html.match(/data-role="angle-sector"/g) || []).length, c.input.copies);
    assert.equal(html.includes('data-role="tiling-tile"'), !!r.compatible);
    if (r.compatible)
      for (const match of html.matchAll(/<polygon\b[^>]*data-role="tiling-tile"[^>]*>/g)) {
        const points = attrs(match[0])
          .points.split(' ')
          .map(pair => pair.split(',').map(Number));
        assert.ok(
          points.every(([, y]) => y > 284 && y < 398),
          'Tile patch must clear the angle readout and its lower caption.'
        );
      }
  });
  assert.deepEqual(fits, [
    [3, 6],
    [4, 4],
    [6, 3]
  ]);
  assert.equal(M.evaluate('tessellation', { sides: 4, copies: 5 }).output, -90);
  assert.equal(M.evaluate('tessellation', { sides: 5, copies: 3 }).output, 36);
});

test('camera rays preserve physical width and inverse-depth scaling on both drawing widths', () => {
  for (const compact of [false, true])
    for (const depth of [2, 4, 10])
      for (const width of [1, 4])
        for (const focal of [0.5, 1.5]) {
          const p = { depth, width, focal },
            r = M.evaluate('perspective-projection', p),
            html = M.render('perspective-projection', p, { compact });
          const real = attrs(html.match(/<line\b[^>]*data-role="real-marker"[^>]*>/)[0]),
            image = attrs(html.match(/<line\b[^>]*data-role="image-marker"[^>]*>/)[0]),
            scale = compact ? 26 : 40;
          near(Math.abs(+real.y2 - +real.y1), scale * width);
          near(Math.abs(+image.y2 - +image.y1), scale * r.imageWidth, 1e-5);
          near(r.imageWidth / width, focal / depth);
          near(r.output, r.imageWidth);
        }
  const p = { depth: 4, width: 2, focal: 1 },
    a = M.evaluate('perspective-projection', p),
    b = M.evaluate('perspective-projection', { ...p, depth: 8 });
  near(b.output, a.output / 2);
  near(M.evaluate('perspective-projection', { ...p, width: 4 }).output, 2 * a.output);
});

test('cell contacts and fraction bars agree with actual radii, boundary sharing and volume scaling', () => {
  for (const packing of [1, 2])
    for (const radius of [0.5, 1, 1.5])
      for (const compact of [false, true]) {
        const p = { packing, radius },
          r = M.evaluate('sphere-packing', p),
          html = M.render('sphere-packing', p, { compact });
        assert.equal(r.occupancy, 1 + r.faceCenters / 2);
        near(r.occupiedVolume + r.emptyFraction * r.cellVolume, r.cellVolume);
        near(r.fraction, packing === 1 ? Math.PI / 6 : Math.PI / (3 * Math.sqrt(2)));
        near(r.output, r.fraction);
        const circles = [...html.matchAll(/<circle\b[^>]*data-role="sphere-section"[^>]*>/g)].map(
          m => attrs(m[0])
        );
        assert.equal(circles.length, packing === 1 ? 4 : 5);
        assert.ok(circles.every(c => +c.r === radius * 27));
        assert.ok(
          circles.every(c => +c.cy + +c.r < 295),
          'Maximum-radius sections must clear the measurement readout.'
        );
        for (const m of html.matchAll(/<line\b[^>]*data-role="contact-centers"[^>]*>/g)) {
          const a = attrs(m[0]);
          near(Math.hypot(+a.x2 - +a.x1, +a.y2 - +a.y1), 2 * radius * 27, 2e-6);
        }
        const bar = attrs(html.match(/<rect\b[^>]*data-role="packing-fraction"[^>]*>/)[0]);
        near(+bar.width, (compact ? 288 : 620) * r.output, 1e-5);
      }
  for (const packing of [1, 2]) {
    const a = M.evaluate('sphere-packing', { packing, radius: 0.5 }),
      b = M.evaluate('sphere-packing', { packing, radius: 1 });
    near(b.cellEdge, 2 * a.cellEdge);
    near(b.cellVolume, 8 * a.cellVolume);
    near(b.occupiedVolume, 8 * a.occupiedVolume);
    near(b.output, a.output);
  }
});

test('providers reject malformed counts, retain independent caller state and install without clocks', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('family timer'),
    requestAnimationFrame: () => assert.fail('family clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/spatial-insights.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasSpatialInsights);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      original = structuredClone(p);
    for (const bad of [null, [], { ...p, extra: 1 }])
      assert.equal(M.evaluate(slug, bad).status, 'invalid_parameters');
    for (const c of M.controls(slug)) {
      for (const value of [
        NaN,
        Infinity,
        true,
        '1',
        null,
        c.min - 0.01,
        c.max + 0.01,
        ...(c.discrete ? [c.min + 0.5] : [])
      ]) {
        const r = M.evaluate(slug, { ...p, [c.key]: value });
        assert.equal(r.status, 'invalid_parameters');
        assert.equal(r.output, null);
      }
      const next = { ...p, [c.key]: c.max };
      assert.equal(M.canInterpolate(slug, p, next), !c.discrete || next[c.key] === p[c.key]);
    }
    assert.ok(M.evaluate(slug, {}).valid);
    M.render(slug, p);
    assert.deepEqual(p, original);
    M.controls(slug)[0].min = -100;
    assert.ok(M.controls(slug)[0].min >= 0.5);
  }
  const first = M.evaluate('platonic-solids', { solid: 1 });
  first.vertices[0][0] = 900;
  assert.notEqual(M.evaluate('platonic-solids', { solid: 1 }).vertices[0][0], 900);
  assert.equal(M.has('constructor'), false);
  assert.equal(M.evaluate('unknown', {}).valid, false);
  assert.equal(M.render('unknown', {}), '');
});

test('integer/category graphs use separate dots while the camera depth curve stays continuous', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      c = M.controls(slug).find(c => c.key === M.specs(slug).axis);
    near(M.curveValue(slug, p, c.min), M.evaluate(slug, { ...p, [c.key]: c.min }).output);
    assert.equal(M.curveValue(slug, p, c.min - 0.5), null);
    const html = M.render(slug, p, { view: 'graph', compact: true });
    assert.match(html, /<svg/);
    if (c.discrete) {
      assert.match(html, /<g data-series="result"/);
      assert.ok(!html.includes('<path data-series="result"'));
      assert.equal(M.curveValue(slug, p, c.min + 0.5), null);
    } else assert.ok(M.canInterpolate(slug, p, { ...p, depth: 4.125 }));
  }
});

test('stories, actual scene marks, scalar bindings and original examples stay connected', () => {
  for (const slug of M.ids) {
    const story = Stories.forSlug(slug),
      p = M.defaults(slug),
      r = M.evaluate(slug, p),
      html = M.render(slug, p, { compact: true }),
      available = { ...p, ...r };
    assert.ok(story);
    assert.equal(story.slug, slug);
    assert.deepEqual(story.parameters, p);
    assert.ok(story.calculation.length === 3);
    assert.equal(card(slug).examples.length, 5);
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(['string', 'number'].includes(typeof available[key]), slug + ' scalar ' + key);
        assert.ok(Stories.quantityFor(slug, key), slug + ' reader ' + key);
        assert.ok(
          [...html.matchAll(/data-quantity="([^"]*)"/g)].some(m => m[1].split(/\s+/).includes(key)),
          slug + ' scene ' + key
        );
      }
    for (const variable of story.variables)
      assert.equal(
        variable.discrete === true,
        M.controls(slug).find(c => c.key === variable.key).discrete === true
      );
    assert.ok(Stories.linksFor(slug));
  }
});

test('previews use actual model values, readable glyphs and separate art/caption bands', () => {
  for (const slug of M.ids)
    for (const fixture of card(slug).interactive.expected_cases.filter(c => c.status === 'valid')) {
      const p = fixture.input,
        r = M.evaluate(slug, p),
        body = Previews.draw(slug, p, r);
      assert.match(body, /data-preview-quantity="output"/);
      for (const m of body.matchAll(/<text\b[^>]*>/g)) {
        const a = attrs(m[0]);
        assert.ok(+a['font-size'] >= 13);
        if (+a.y !== 216) {
          assert.ok(+a.y <= 184, slug + ' art baseline');
          assert.ok(+a.y + +a['font-size'] / 4 <= 188, slug + ' art descent');
        }
      }
      assert.ok(body.includes('data-preview-layer="caption"'));
      for (const m of body.matchAll(/data-preview-quantity="([^"]+)" data-value="([^"]+)"/g)) {
        const key = m[1],
          value = key in p ? p[key] : r[key];
        near(+m[2], value);
      }
      assert.ok(Previews.describe(slug, p, r).length > 50);
    }
});

test('all local symbol readers are scoped and source-backed without widening existing meanings', () => {
  assert.equal(new Set(Terms.entries.map(e => e.id)).size, Terms.entries.length);
  for (const entry of Terms.entries) {
    assert.ok(entry.definition.length > 20);
    assert.ok(entry.grammarCards.length);
    assert.deepEqual(entry.grammarCards, entry.formulaCards);
    assert.ok(entry.sourceKeys.every(key => Terms.sources[key]));
    for (const slug of entry.grammarCards) assert.ok(M.has(slug));
  }
  for (const slug of M.ids)
    for (const token of Object.keys(card(slug).definition.signature))
      if (token !== 'π')
        assert.ok(
          Terms.entries.some(e => e.symbols.includes(token) && e.grammarCards.includes(slug)),
          slug + ' scoped ' + token
        );
});
