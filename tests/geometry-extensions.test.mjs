import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/geometry-extensions.js');
const near = (actual, expected, tolerance = 3e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const python = (program, input) =>
  JSON.parse(
    execFileSync('python', ['-X', 'utf8', '-c', program], {
      input: JSON.stringify(input),
      encoding: 'utf8'
    })
  );
const references = cases =>
  python(
    'import json,sys;sys.path.insert(0,"tools");from geometry_extension_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))',
    cases
  );
const attributes = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const polygonArea = vertices =>
  Math.abs(
    vertices.reduce((sum, [x, y], i) => {
      const next = vertices[(i + 1) % vertices.length];
      return sum + x * next[1] - y * next[0];
    }, 0)
  ) / 2;

test('regular-polygon measures agree with independent vertex distances and shoelace area over the full side range', () => {
  const cases = [];
  for (let sides = 3; sides <= 12; sides++)
    for (const radius of [1, 1.05, 2, 3, 4])
      cases.push({ slug: 'regular-polygon', input: { sides, radius } });
  const oracle = references(cases);
  cases.forEach((c, index) => {
    const r = M.evaluate(c.slug, c.input),
      expected = oracle[index];
    assert.equal(r.valid, true);
    for (const key of Object.keys(expected))
      key === 'status' ? assert.equal(r[key], expected[key]) : near(r[key], expected[key]);
    assert.equal(r.vertices.length, c.input.sides);
    r.vertices.forEach(([x, y], i) => {
      const next = r.vertices[(i + 1) % r.vertices.length];
      near(Math.hypot(x, y), c.input.radius);
      near(Math.hypot(next[0] - x, next[1] - y), r.sideLength);
      near(Math.abs(x * next[1] - y * next[0]) / r.sideLength, r.apothem);
    });
    near(polygonArea(r.vertices), r.area);
    near((r.perimeter * r.apothem) / 2, r.area);
    near(r.triangleArea * c.input.sides, r.output);
    near(r.centralAngle * c.input.sides, 2 * Math.PI);
    near(r.centralAngleDeg * c.input.sides, 360);
    near(r.pi, Math.PI);
    assert.ok(r.area < Math.PI * c.input.radius ** 2);
    assert.ok(r.output <= 55);
  });
  near(M.evaluate('regular-polygon', { sides: 4, radius: 2 }).area, 8);
  near(M.evaluate('regular-polygon', { sides: 6, radius: 3 }).sideLength, 3);
  near(M.evaluate('regular-polygon', { sides: 3, radius: 2 }).area, 3 * Math.sqrt(3));
});

test('sphere volume agrees with independent cross-section integration and has the correct area derivative and units of scaling', () => {
  const cases = [0.25, 0.3, 0.5, 1, 2, 3.75, 5].map(radius => ({
      slug: 'sphere-measurement',
      input: { radius }
    })),
    oracle = references(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const key of Object.keys(oracle[i]))
      key === 'status' ? assert.equal(r[key], oracle[i][key]) : near(r[key], oracle[i][key]);
    near(r.surfaceArea, 4 * r.crossSectionArea);
    near(r.diameter, 2 * c.input.radius);
    near(r.output, r.volume);
    assert.ok(r.output <= 550);
  });
  for (const radius of [0.5, 1, 2]) {
    const a = M.evaluate('sphere-measurement', { radius }),
      b = M.evaluate('sphere-measurement', { radius: 2 * radius });
    near(b.volume, 8 * a.volume);
    near(b.surfaceArea, 4 * a.surfaceArea);
    near(b.crossSectionArea, 4 * a.crossSectionArea);
    const h = 1e-5,
      low = M.evaluate('sphere-measurement', { radius: radius - h }),
      high = M.evaluate('sphere-measurement', { radius: radius + h });
    near((high.volume - low.volume) / (2 * h), a.surfaceArea, 1e-9);
  }
  near(M.evaluate('sphere-measurement', { radius: 1 }).volume, (4 * Math.PI) / 3);
});

test('continuous radius and whole side counts preserve strict domains, interpolation boundaries and independent caller state', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('provider timer'),
    requestAnimationFrame: () => assert.fail('provider clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/geometry-extensions.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasGeometryExtensions);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      original = structuredClone(p),
      control = M.controls(slug)[0];
    for (const bad of [
      null,
      [],
      { ...p, extra: 1 },
      { ...p, radius: true },
      { ...p, radius: '2' },
      { ...p, radius: 0 },
      { ...p, radius: NaN },
      { ...p, radius: Infinity },
      { ...p, radius: control.max + 0.01 }
    ]) {
      assert.equal(M.evaluate(slug, bad).status, 'invalid_parameters');
      assert.equal(M.evaluate(slug, bad).output, null);
    }
    assert.equal(M.evaluate(slug, {}).valid, true);
    assert.equal(M.canInterpolate(slug, p, { ...p, radius: p.radius + 0.125 }), true);
    assert.equal(M.specs(slug).canInterpolate(p, { ...p, radius: control.max + 1 }), false);
    near(
      M.curveValue(slug, p, control.min),
      M.evaluate(slug, { ...p, radius: control.min }).output
    );
    assert.equal(M.curveValue(slug, p, 0), null);
    M.controls(slug)[0].min = -100;
    assert.equal(M.controls(slug)[0].min, control.min);
    M.render(slug, p);
    assert.deepEqual(p, original);
  }
  assert.equal(M.evaluate('regular-polygon', { radius: 2, sides: 4.5 }).valid, false);
  assert.equal(
    M.canInterpolate('regular-polygon', { radius: 2, sides: 4 }, { radius: 3, sides: 5 }),
    false
  );
  const result = M.evaluate('regular-polygon', { radius: 2, sides: 4 });
  result.vertices[0][0] = 1000;
  assert.ok(
    M.evaluate('regular-polygon', { radius: 2, sides: 4 }).vertices.every(
      vertex => vertex[0] !== 1000
    )
  );
  assert.equal(M.has('constructor'), false);
  assert.equal(M.evaluate('unknown', {}).valid, false);
  assert.equal(M.render('unknown', {}), '');
});

test('equal-scale polygon triangles and sphere volume bars encode the evaluated physical quantities', () => {
  for (const compact of [false, true]) {
    for (const sides of [3, 6, 12])
      for (const radius of [1, 4]) {
        const r = M.evaluate('regular-polygon', { sides, radius }),
          html = M.render('regular-polygon', { sides, radius }, { compact }),
          triangles = [...html.matchAll(/<polygon\b[^>]*data-role="centre-triangle"[^>]*>/g)].map(
            match => attributes(match[0])
          );
        assert.equal(triangles.length, sides);
        for (const triangle of triangles) {
          near(Number(triangle['data-area']), r.area / sides);
          const points = triangle.points.split(' ').map(pair => pair.split(',').map(Number));
          near(polygonArea(points) / 22 ** 2, r.area / sides, 2e-6);
        }
        const boundary = attributes(
            html.match(/<polygon\b[^>]*data-role="polygon-boundary"[^>]*>/)[0]
          ),
          pixels = boundary.points.split(' ').map(pair => pair.split(',').map(Number));
        near(polygonArea(pixels) / 22 ** 2, r.area, 2e-6);
        const circle = attributes(html.match(/<circle\b[^>]*data-role="circumcircle"[^>]*>/)[0]);
        near(Number(circle.r), radius * 22);
      }
    for (const radius of [0.25, 2, 5]) {
      const r = M.evaluate('sphere-measurement', { radius }),
        html = M.render('sphere-measurement', { radius }, { compact }),
        span = compact ? 288 : 620;
      const disk = attributes(html.match(/<circle\b[^>]*data-role="sphere-projection"[^>]*>/)[0]),
        bar = attributes(html.match(/<rect\b[^>]*data-role="volume-bar"[^>]*>/)[0]);
      near(Number(disk.r), radius * 22);
      near(Number(bar.width), (r.volume / 550) * span, 1e-5);
      assert.equal(bar['data-scale-max'], '550');
    }
  }
});

test('geometry scenes have valid scoped SVG, precise input dependencies and no stale invalid geometry', () => {
  const documents = [];
  for (const slug of M.ids)
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const p = M.defaults(slug),
          html = M.render(slug, p, { compact, view, id: slug + '?slot-a', baseline: p });
        assert.doesNotMatch(html, /NaN|Infinity|="[^"]*undefined/);
        assert.match(html, /data-quantity="[^"]*output/);
        documents.push(html.match(/<svg\b[\s\S]*?<\/svg>/)[0]);
        if (view === 'graph') assert.match(html, /<path data-series="result"/);
        else
          for (const role of ['input', 'intermediate', 'output', 'reference'])
            assert.match(html, new RegExp('data-story-part="' + role + '"'));
      }
  const records = python(
    `import json,sys,xml.etree.ElementTree as E
def inspect(source):
    root=E.fromstring(source); ids=[n.get('id') for n in root.iter() if n.get('id')]
    assert len(ids)==len(set(ids))
    result=[]
    def walk(node, inherited):
        keys=inherited|set(node.get('data-quantity','').split())
        if node.get('data-role'): result.append(dict(role=node.get('data-role'),keys=sorted(keys)))
        for child in node: walk(child,keys)
    walk(root,set())
    return result
print(json.dumps([inspect(s) for s in json.load(sys.stdin)]))`,
    documents
  );
  const shapes = records.flat(),
    has = (row, key) => row.keys.includes(key);
  for (const row of shapes.filter(row => row.role === 'central-angle')) {
    assert.equal(has(row, 'sides'), true);
    assert.equal(has(row, 'radius'), false);
  }
  for (const row of shapes.filter(row => row.role === 'circumcircle')) {
    assert.equal(has(row, 'radius'), true);
    assert.equal(has(row, 'sides'), false);
  }
  for (const row of shapes.filter(row => row.role === 'sphere-projection')) {
    assert.equal(has(row, 'crossSectionArea'), true);
    assert.equal(has(row, 'surfaceArea'), false);
    assert.equal(has(row, 'volume'), false);
  }
  for (const slug of M.ids)
    assert.doesNotMatch(
      M.render(slug, { radius: -1 }),
      /data-role="centre-triangle"|data-role="sphere-projection"|data-role="volume-bar"/
    );
});

test('rounded scene measurements distinguish numerical approximations from exact input settings', () => {
  for (const compact of [false, true]) {
    for (const parameters of [M.defaults('regular-polygon'), { radius: 1.35, sides: 7 }]) {
      const result = M.evaluate('regular-polygon', parameters),
        html = M.render('regular-polygon', parameters, { compact }),
        readings = [...html.matchAll(/<text\b[^>]*>([^<]*)<\/text>/g)]
          .map(match => match[1])
          .join(' ');
      assert.notEqual(Number(result.area.toPrecision(4)), result.area);
      for (const symbol of ['θ', 'P', 's', 'a', 'A']) {
        assert.match(readings, new RegExp(symbol + ' ≈ '));
        assert.doesNotMatch(readings, new RegExp('(?:^|[ ·])' + symbol + ' = '));
      }
      assert.match(readings, /rad ≈ [\d.]+°/);
      assert.match(
        readings,
        new RegExp('R = ' + String(parameters.radius).replace('.', '\\.') + ' m')
      );
    }
    for (const parameters of [M.defaults('sphere-measurement'), { radius: 1.35 }]) {
      const result = M.evaluate('sphere-measurement', parameters),
        html = M.render('sphere-measurement', parameters, { compact }),
        readings = [...html.matchAll(/<text\b[^>]*>([^<]*)<\/text>/g)]
          .map(match => match[1])
          .join(' ');
      assert.notEqual(Number(result.volume.toPrecision(4)), result.volume);
      for (const label of ['d', 'Central disk', 'V', 'Surface A']) {
        assert.match(readings, new RegExp(label + ' ≈ '));
        assert.doesNotMatch(readings, new RegExp('(?:^|[ ·])' + label + ' = '));
      }
      assert.match(
        readings,
        new RegExp('r = ' + String(parameters.radius).replace('.', '\\.') + ' m')
      );
    }
  }
});

test('canonical geometry fixtures agree with independent references and installed models', () => {
  const cases = M.ids.flatMap(slug =>
      JSON.parse(
        fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
      ).interactive.expected_cases.map(c => ({ slug, ...c }))
    ),
    oracle = references(cases);
  cases.forEach((c, i) => {
    const result = M.evaluate(c.slug, c.input);
    assert.equal(result.status, c.status || 'valid');
    assert.equal(oracle[i].status, c.status || 'valid');
    if (result.valid) {
      near(result.output, c.output);
      near(result.output, oracle[i].output);
    }
  });
});
