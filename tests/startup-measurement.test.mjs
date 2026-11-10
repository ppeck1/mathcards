import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const Measurement = require('../tools/measure_startup.cjs');
const bootstrap = (milliseconds, status = 0) => ({
  status,
  stdout: `bootstrap JavaScript: ${milliseconds} ms; budget 1500 ms\n`,
  stderr: status ? 'AssertionError: unchanged budget exceeded\n' : ''
});
const component = () => ({ counts: { cards: 111 }, indexHydrationMs: 20 });

test('measurement keeps the unchanged gate verdict, including its failed elapsed value', () => {
  const passing = Measurement.parseBootstrap(bootstrap(700));
  assert.equal(passing.bootstrapPassed, true);
  assert.equal(passing.bootstrapTestMs, 700);
  assert.equal(passing.bootstrapExitCode, 0);
  const failed = Measurement.parseBootstrap(bootstrap(1577.7, 1));
  assert.equal(failed.bootstrapPassed, false);
  assert.equal(failed.bootstrapTestMs, 1577.7);
  assert.equal(failed.bootstrapExitCode, 1);
  assert.match(failed.bootstrapFailure.stderr, /budget exceeded/);
  const missing = Measurement.parseBootstrap({
    status: 0,
    stdout: 'test finished without diagnostic'
  });
  assert.equal(missing.bootstrapPassed, false);
  assert.equal(missing.bootstrapTestMs, null);
  assert.match(missing.bootstrapFailure.error, /no budget diagnostic/);
});

test('all predeclared attempts run serially once and preserve a middle failure with its diagnostics', () => {
  const calls = [];
  const runs = Measurement.collectRuns({
    count: 3,
    expectedCards: 111,
    runBootstrap(run) {
      calls.push('bootstrap ' + run);
      return bootstrap([600, 1600, 800][run - 1], run === 2 ? 1 : 0);
    },
    runComponents(run) {
      calls.push('components ' + run);
      return component();
    },
    runProduction(run) {
      calls.push('production ' + run);
      return { bootstrapMs: 500 + run };
    }
  });
  assert.deepEqual(calls, [
    'bootstrap 1',
    'components 1',
    'production 1',
    'bootstrap 2',
    'components 2',
    'production 2',
    'bootstrap 3',
    'components 3',
    'production 3'
  ]);
  assert.equal(runs.length, 3);
  assert.deepEqual(
    runs.map(run => run.bootstrapPassed),
    [true, false, true]
  );
  const report = {
    ...Measurement.qualification(runs, true),
    summary: Measurement.summarize(runs, { productionRequested: true }),
    runs
  };
  const persisted = JSON.parse(JSON.stringify(report));
  assert.equal(
    persisted.complete,
    true,
    'a fully observed failure is still a complete measurement'
  );
  assert.equal(persisted.pass, false);
  assert.equal(Measurement.exitCodeFor(persisted), 1);
  assert.equal(persisted.summary.bootstrapMedianMs, 800);
  assert.equal(
    persisted.summary.bootstrapMaximumMs,
    1600,
    'failed runs cannot disappear from the maximum'
  );
  assert.equal(persisted.summary.bootstrapFailedRuns, 1);
  assert.equal(persisted.runs[1].components.counts.cards, 111);
  assert.match(persisted.runs[1].bootstrapFailure.stderr, /budget exceeded/);
  assert.equal(persisted.summary.productionBootstrapMedianMs, 502);
});

test('worker crashes, missing output and mismatched source counts remain evidence instead of aborting later attempts', () => {
  const runs = Measurement.collectRuns({
    expectedCards: 111,
    runBootstrap(run) {
      if (run === 1) throw new Error('spawn unavailable');
      return bootstrap(700);
    },
    runComponents(run) {
      if (run === 2) return { counts: { cards: 110 } };
      return component();
    },
    runProduction(run) {
      if (run === 3) throw new Error('production diagnostic unavailable');
      return { bootstrapMs: 500 };
    }
  });
  assert.equal(runs.length, 3);
  assert.match(runs[0].bootstrapFailure.error, /spawn unavailable/);
  assert.match(runs[1].componentFailure, /card counts differ/);
  assert.match(runs[1].componentFailure, /expected 111, observed 110/);
  assert.equal(runs[1].components.counts.cards, 110, 'mismatched observations remain diagnostic');
  assert.match(runs[2].productionFailure, /unavailable/);
  const state = Measurement.qualification(runs, true);
  assert.deepEqual(state, { complete: false, pass: false });
  assert.equal(Measurement.exitCodeFor(state), 1);
  assert.equal(Measurement.summarize(runs, { productionRequested: true }).productionFailedRuns, 1);
});

test('all passing attempts still fail qualification if source/build identity changes', () => {
  const runs = Measurement.collectRuns({
    expectedCards: 111,
    runBootstrap: () => bootstrap(600),
    runComponents: component
  });
  assert.deepEqual(Measurement.qualification(runs, true), { complete: true, pass: true });
  assert.equal(Measurement.exitCodeFor(Measurement.qualification(runs, true)), 0);
  assert.deepEqual(Measurement.qualification(runs, false), { complete: false, pass: false });
  assert.deepEqual(Measurement.qualification([], true), { complete: false, pass: false });
});

test('CPU time is recorded separately from elapsed wall time and includes both user and system work', () => {
  let time = 10,
    prior;
  const first = { user: 4000, system: 2000 };
  const result = Measurement.measured(
    () => {
      time += 25;
      return 'answer';
    },
    {
      now: () => time,
      cpu(previous) {
        if (!previous) return first;
        prior = previous;
        return { user: 8000, system: 3000 };
      }
    }
  );
  assert.equal(prior, first);
  assert.deepEqual(result, { value: 'answer', milliseconds: 25, cpuMs: 11 });
});

test('concatenated production diagnostic keeps all pre-app code and uses the same bootstrap boundary', () => {
  const prelude =
    'globalThis.AtlasMathIndex={hydrate(){return true;},create(){return true;},compile(){return true;}};globalThis.first=1;';
  const app =
    '(function(){\n globalThis.second=globalThis.first+1;\n let storage; throw new Error("main view was mounted");})();';
  const prefix = Measurement.productionPrefix(
    '<script>\n' + prelude + '\n' + app + '\n</script>',
    app.replace(/\n/g, '\r\n')
  );
  const context = vm.createContext({});
  vm.runInContext(prefix, context);
  assert.equal(context.first, 1);
  assert.equal(context.second, 2);
  assert.equal((prefix.match(/globalThis.first=1/g) || []).length, 1);
  assert.doesNotMatch(prefix, /main view was mounted/);
  assert.throws(() => context.AtlasMathIndex.create(), /Runtime reference compilation/);
  assert.throws(() => context.AtlasMathIndex.compile(), /Runtime reference compilation/);
  assert.equal(context.AtlasMathIndex.hydrate(), true);
  assert.throws(
    () => Measurement.productionPrefix('<script>' + app + '</script><script>x</script>', app),
    /single built inline script/
  );
  assert.throws(
    () => Measurement.productionPrefix('<script>' + prelude + '</script>', app),
    /stale or ambiguous/
  );
});

test('diagnostic options retain three default attempts and bound an explicit predeclared count', () => {
  assert.deepEqual(Measurement.options([]), { profile: false, runs: 3, worker: null });
  assert.deepEqual(Measurement.options(['--profile', '--runs=5']), {
    profile: true,
    runs: 5,
    worker: null
  });
  assert.equal(
    Measurement.options(['--component-worker', '--profile']).worker,
    '--component-worker'
  );
  assert.equal(Measurement.options(['--production-worker']).worker, '--production-worker');
  for (const args of [
    ['--runs=0'],
    ['--runs=21'],
    ['--runs=-1'],
    ['--runs=3.5'],
    ['--unknown'],
    ['--production-worker', '--component-worker']
  ]) {
    assert.throws(() => Measurement.options(args));
  }
});

test('CLI setup failures emit a JSON failure report and exit nonzero without starting measurement', () => {
  const tool = fileURLToPath(new URL('../tools/measure_startup.cjs', import.meta.url));
  const result = spawnSync(process.execPath, [tool, '--unknown'], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  const report = JSON.parse(result.stdout);
  assert.equal(report.pass, false);
  assert.equal(report.complete, false);
  assert.deepEqual(report.runs, []);
  assert.match(report.error, /Unknown measurement option/);
});
