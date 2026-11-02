#!/usr/bin/env node
/* Background-only diagnostics. No browser, desktop control, network or file writes. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const os = require('node:os');
const zlib = require('node:zlib');
const crypto = require('node:crypto');
const { performance } = require('node:perf_hooks');
const { spawnSync } = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const BUDGET_MS = 1500;
const read = name => fs.readFileSync(path.join(SRC, name), 'utf8');
const bytes = value => Buffer.byteLength(value, 'utf8');
const median = values => {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b),
    middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const maximum = values => (values.length ? Math.max(...values) : null);
const round = value => Math.round(value * 1000) / 1000;
const errorText = error => (error instanceof Error ? error.message : String(error));
const names = () =>
  [...read('index.html').matchAll(/<script\s+src="([^"]+)"[^>]*data-development/g)].map(
    ([, name]) => name.split('?')[0]
  );
const json = file => JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));

function measured(
  work,
  { now = () => performance.now(), cpu = previous => process.cpuUsage(previous) } = {}
) {
  const startCPU = cpu(),
    start = now();
  const value = work();
  const milliseconds = now() - start,
    usage = cpu(startCPU);
  return { value, milliseconds, cpuMs: (usage.user + usage.system) / 1000 };
}

function child(args) {
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 60000,
    maxBuffer: 8 * 1024 * 1024
  });
  return {
    status: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    error: result.error ? errorText(result.error) : null
  };
}

function parsedWorker(result) {
  if (result.error || result.status !== 0)
    throw new Error(result.error || result.stderr || result.stdout || 'Measurement worker failed.');
  return JSON.parse(result.stdout);
}

function parseBootstrap(result) {
  const output = result.stdout || '',
    match = output.match(/bootstrap JavaScript: ([\d.]+) ms; budget 1500 ms/);
  const elapsed = match ? Number(match[1]) : null;
  const passed = result.status === 0 && !result.error && Number.isFinite(elapsed);
  return {
    bootstrapTestMs: Number.isFinite(elapsed) ? elapsed : null,
    bootstrapPassed: passed,
    bootstrapExitCode: result.status ?? null,
    ...(passed
      ? {}
      : {
          bootstrapFailure: {
            error:
              result.error ||
              (!match
                ? 'Existing bootstrap test returned no budget diagnostic.'
                : 'Existing bootstrap budget test failed.'),
            stdout: output.slice(-12000),
            stderr: (result.stderr || '').slice(-12000)
          }
        })
  };
}

function collectRuns({ count = 3, expectedCards, runBootstrap, runComponents, runProduction }) {
  const runs = [];
  // A failure is an observation, not a reason to retry until a pass appears.
  for (let run = 1; run <= count; run++) {
    let bootstrap;
    try {
      bootstrap = parseBootstrap(runBootstrap(run));
    } catch (error) {
      bootstrap = parseBootstrap({ status: null, error: errorText(error) });
    }
    const item = { run, ...bootstrap };
    try {
      const component = runComponents(run);
      item.components = component;
      if (component.counts?.cards !== expectedCards)
        throw new Error(
          `Source catalog and build card counts differ: expected ${expectedCards}, observed ${component.counts?.cards ?? 'unavailable'}. Rebuild before measuring.`
        );
    } catch (error) {
      item.componentFailure = errorText(error);
    }
    if (runProduction) {
      try {
        item.production = runProduction(run);
      } catch (error) {
        item.productionFailure = errorText(error);
      }
    }
    runs.push(item);
  }
  return runs;
}

function summarize(runs, { productionRequested = false } = {}) {
  const elapsed = runs.map(run => run.bootstrapTestMs).filter(Number.isFinite);
  const diagnosticFields = [
    'indexHydrationMs',
    'atlasInitializationMs',
    'subjectInitializationMs',
    'searchInitializationMs',
    'firstSymbolCatalogMs',
    'repeatedUnifiedQueryMedianMs'
  ];
  return {
    bootstrapMedianMs: median(elapsed),
    bootstrapMaximumMs: maximum(elapsed),
    budgetMs: BUDGET_MS,
    bootstrapPassedRuns: runs.filter(run => run.bootstrapPassed).length,
    bootstrapFailedRuns: runs.filter(run => !run.bootstrapPassed).length,
    componentFailedRuns: runs.filter(run => run.componentFailure).length,
    ...(productionRequested
      ? {
          productionFailedRuns: runs.filter(run => run.productionFailure).length,
          productionBootstrapMedianMs: median(
            runs.map(run => run.production?.bootstrapMs).filter(Number.isFinite)
          ),
          productionBootstrapMaximumMs: maximum(
            runs.map(run => run.production?.bootstrapMs).filter(Number.isFinite)
          )
        }
      : {}),
    ...Object.fromEntries(
      diagnosticFields.map(key => [
        key + 'Median',
        median(runs.map(run => run.components?.[key]).filter(Number.isFinite))
      ])
    )
  };
}

function qualification(runs, sourceStable) {
  const complete =
    sourceStable &&
    runs.length > 0 &&
    runs.every(
      run => Number.isFinite(run.bootstrapTestMs) && !run.componentFailure && !run.productionFailure
    );
  return { complete, pass: complete && runs.every(run => run.bootstrapPassed) };
}
const exitCodeFor = report => (report.pass ? 0 : 1);

function components({ profile = false } = {}) {
  const context = vm.createContext({}),
    phases = [],
    scriptTimings = [];
  const prepared = new Set([
    'catalog.js',
    'math-index-data.js',
    'formula-data.js',
    'subject-inventory-data.js'
  ]);
  let otherScriptsMs = 0,
    otherScriptsCPU = 0;
  for (const name of names().filter(name => name !== 'app.js')) {
    const source = read(name);
    const phase = measured(() =>
      vm.runInContext(source, context, { filename: name, timeout: 4000 })
    );
    const record = {
      name,
      parseAndEvaluateMs: round(phase.milliseconds),
      parseAndEvaluateCpuMs: round(phase.cpuMs),
      scriptBytes: bytes(source)
    };
    if (prepared.has(name)) phases.push(record);
    else {
      otherScriptsMs += phase.milliseconds;
      otherScriptsCPU += phase.cpuMs;
    }
    if (profile) scriptTimings.push(record);
  }
  const catalog = context.AtlasCatalog,
    data = context.AtlasMathIndexData;
  const indexPhase = measured(() => context.AtlasMathIndex.hydrate(data));
  const atlasPhase = measured(() =>
    context.AtlasExplorer.create({
      cards: catalog.cards,
      sources: catalog.sources,
      coverage: catalog.coverage
    })
  );
  const subjectPhase = measured(() =>
    context.AtlasSubjectInventory.create({
      data: context.AtlasSubjectInventoryData,
      cards: catalog.cards
    })
  );
  const searchPhase = measured(() =>
    context.AtlasSearch.create({
      cards: catalog.cards,
      index: indexPhase.value,
      atlas: atlasPhase.value,
      subjects: subjectPhase.value
    })
  );
  const queries = [
    '+',
    'δ',
    'μ',
    'R',
    'n',
    'x̄',
    '⊆',
    '∑',
    'entropy',
    'confidence interval',
    'sampling',
    'meet',
    'temperature',
    'sigmoid',
    'p-value',
    'not a known term'
  ];
  const firstQueries = queries.map(query => {
    const lookup = measured(() => searchPhase.value.search(query));
    return {
      query,
      milliseconds: round(lookup.milliseconds),
      cpuMs: round(lookup.cpuMs),
      results: lookup.value.length
    };
  });
  const repeated = [];
  for (let pass = 0; pass < 3; pass++)
    for (const query of queries)
      repeated.push(measured(() => searchPhase.value.search(query)).milliseconds);
  const symbols = measured(() => indexPhase.value.symbolCatalog());
  const usageRows = data.entries.flatMap(entry => entry.usedBy);
  return {
    preparedDataParsing: phases,
    ...(profile ? { scriptTimings } : {}),
    otherScriptParseAndEvaluateMs: round(otherScriptsMs),
    otherScriptParseAndEvaluateCpuMs: round(otherScriptsCPU),
    indexHydrationMs: round(indexPhase.milliseconds),
    indexHydrationCpuMs: round(indexPhase.cpuMs),
    atlasInitializationMs: round(atlasPhase.milliseconds),
    atlasInitializationCpuMs: round(atlasPhase.cpuMs),
    subjectInitializationMs: round(subjectPhase.milliseconds),
    subjectInitializationCpuMs: round(subjectPhase.cpuMs),
    searchInitializationMs: round(searchPhase.milliseconds),
    searchInitializationCpuMs: round(searchPhase.cpuMs),
    firstUnifiedQueries: firstQueries,
    repeatedUnifiedQueryMedianMs: round(median(repeated)),
    repeatedUnifiedQueryMaximumMs: round(maximum(repeated)),
    firstSymbolCatalogMs: round(symbols.milliseconds),
    firstSymbolCatalogCpuMs: round(symbols.cpuMs),
    counts: {
      cards: catalog.cards.length,
      sources: catalog.sources.length,
      coverageRows: catalog.coverage.length,
      referenceEntries: data.entries.length,
      referenceCardUses: usageRows.length,
      referenceUsageContexts: usageRows.reduce((sum, usage) => sum + usage.contexts.length, 0),
      symbolForms: symbols.value.forms.length,
      symbolMeanings: symbols.value.meanings,
      formulaRecords: Object.keys(context.AtlasFormulaData.bySlug).length,
      subjectConcepts: context.AtlasSubjectInventoryData.concepts.length
    },
    indexJSONDecomposition: {
      compactPayloadBytes: bytes(JSON.stringify(data)),
      entryContentWithoutUsesBytes: bytes(
        JSON.stringify(data.entries.map(({ usedBy, ...entry }) => entry))
      ),
      serializedUseArraysBytes: data.entries.reduce(
        (sum, entry) => sum + bytes(JSON.stringify(entry.usedBy)),
        0
      ),
      note: 'Serialized component sizes are diagnostic estimates, not independently loadable files.'
    }
  };
}

function productionPrefix(html, app) {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  if (scripts.length !== 1)
    throw new Error('Production diagnostic requires the single built inline script.');
  const code = scripts[0][1],
    normalizedApp = app.replace(/\r\n/g, '\n'),
    offset = code.lastIndexOf(normalizedApp),
    boundary = normalizedApp.indexOf('let storage;');
  if (offset < 0 || boundary < 0 || code.slice(offset + normalizedApp.length).trim())
    throw new Error('Built app or bootstrap boundary is stale or ambiguous.');
  const guard =
    '\n{const api=globalThis.AtlasMathIndex;globalThis.AtlasMathIndex=Object.freeze({...api,create(){throw new Error("Runtime reference compilation");},compile(){throw new Error("Runtime reference compilation");}});}\n';
  return code.slice(0, offset) + guard + normalizedApp.slice(0, boundary) + '})();';
}

function production() {
  const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'), 'utf8'),
    source = productionPrefix(html, read('app.js'));
  const node = {
    innerHTML: '',
    value: '',
    querySelector() {
      return this;
    },
    addEventListener() {},
    removeEventListener() {}
  };
  const context = vm.createContext({
    document: { getElementById: () => node, querySelector: () => node, addEventListener() {} }
  });
  const timing = measured(() =>
    vm.runInContext(source, context, { filename: 'production-bootstrap.js', timeout: 4000 })
  );
  if (!/Search all mathematics/.test(node.innerHTML))
    throw new Error('Production prefix did not mount header search.');
  return {
    bootstrapMs: round(timing.milliseconds),
    bootstrapCpuMs: round(timing.cpuMs),
    timedVmCalls: 1,
    sourceBytes: bytes(source),
    runtimeCompilationGuard: true,
    scope:
      'Built concatenated inline script prefix through header search, before storage and main-view mounting; Node/V8 diagnostic, not the acceptance gate or browser qualification.'
  };
}

function options(args) {
  const result = { profile: false, runs: 3, worker: null };
  for (const arg of args) {
    if (arg === '--profile') result.profile = true;
    else if (/^--runs=\d+$/.test(arg)) {
      result.runs = Number(arg.slice(7));
      if (result.runs < 1 || result.runs > 20)
        throw new Error('Use --runs=1 through --runs=20; default is three predeclared attempts.');
    } else if (arg === '--component-worker' || arg === '--production-worker') {
      if (result.worker) throw new Error('Choose only one diagnostic worker.');
      result.worker = arg;
    } else throw new Error('Unknown measurement option: ' + arg);
  }
  return result;
}

function main(config) {
  const manifest = json('dist/build-manifest.json'),
    packageData = json('package.json');
  if (manifest.application_version !== packageData.version)
    throw new Error('Build is stale: run python tools/build.py before measuring.');
  const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'));
  const artifactDigest = () =>
    crypto
      .createHash('sha256')
      .update(fs.readFileSync(path.join(ROOT, 'dist/index.html')))
      .digest('hex');
  if (crypto.createHash('sha256').update(html).digest('hex') !== manifest.index_sha256)
    throw new Error('Built HTML does not match its manifest.');
  const scripts = names().map(name => ({ name, bytes: fs.statSync(path.join(SRC, name)).size })),
    embedded = html.toString('utf8');
  for (const { name } of scripts)
    if (!embedded.includes(read(name).replace(/\r\n/g, '\n')))
      throw new Error('Built HTML does not embed current ' + name + '. Rebuild before measuring.');
  const sourceDigest = () => {
    const hash = crypto.createHash('sha256');
    for (const { name } of scripts) hash.update(name).update(fs.readFileSync(path.join(SRC, name)));
    return hash.digest('hex');
  };
  const sourceSHA256 = sourceDigest();
  const qualificationDigest = () => {
    const hash = crypto.createHash('sha256');
    for (const name of [
      'package.json',
      'dist/build-manifest.json',
      'src/index.html',
      'tests/startup-index.test.mjs',
      'tools/measure_startup.cjs'
    ])
      hash.update(name).update(fs.readFileSync(path.join(ROOT, name)));
    return hash.digest('hex');
  };
  const qualificationSHA256 = qualificationDigest();
  const runs = collectRuns({
    count: config.runs,
    expectedCards: manifest.cards,
    runBootstrap: () =>
      child([
        '--test',
        '--test-concurrency=1',
        '--test-name-pattern=browser bootstrap hydrates',
        'tests/startup-index.test.mjs'
      ]),
    runComponents: () =>
      parsedWorker(
        child([__filename, '--component-worker', ...(config.profile ? ['--profile'] : [])])
      ),
    ...(config.profile
      ? { runProduction: () => parsedWorker(child([__filename, '--production-worker'])) }
      : {})
  });
  let sourceStable = false,
    identityError;
  try {
    sourceStable =
      sourceDigest() === sourceSHA256 &&
      artifactDigest() === manifest.index_sha256 &&
      qualificationDigest() === qualificationSHA256;
  } catch (error) {
    identityError = errorText(error);
  }
  const { complete, pass } = qualification(runs, sourceStable);
  return {
    formatVersion: 1,
    pass,
    complete,
    applicationVersion: manifest.application_version,
    artifactSHA256: manifest.index_sha256,
    canonicalContentSHA256: manifest.canonical_content_sha256,
    measuredSourceScriptsSHA256: sourceSHA256,
    measuredQualificationInputsSHA256: qualificationSHA256,
    sourceStable,
    ...(!sourceStable
      ? {
          error:
            identityError ||
            'Sources or build changed during measurement; observations are retained but not valid for artifact qualification.'
        }
      : {}),
    environment: {
      node: process.version,
      platform: process.platform,
      architecture: process.arch,
      logicalCPUs: os.availableParallelism(),
      cpuModel: os.cpus()[0]?.model || 'unavailable'
    },
    method: {
      runs: config.runs,
      concurrentProcesses: 1,
      coldProcess: true,
      profile: config.profile,
      browserLaunched: false,
      networkUsed: false,
      bootstrapTest:
        'tests/startup-index.test.mjs · browser bootstrap hydrates without a source scan and stays within its CPU budget',
      acceptance:
        'Unchanged existing test and 1500 ms limit. Every predeclared attempt is retained; any failed attempt exits nonzero. No retries until pass.',
      warmSetup:
        'The existing test imports index/story modules and evaluates catalog/reference scripts before its timer. A fresh process is not a claim of fully cold source compilation.',
      timing:
        'Elapsed values are wall time. CPU diagnostics use process-wide user+system microseconds and may exceed wall time with multiple process threads.',
      vmOverhead:
        'The unchanged gate runs each source separately with timeout watchdogs. --profile also measures a separate single-call built-inline-script prefix; it does not replace the gate.',
      limits:
        'Node/V8 proxy only. Source strings are read before the budget timer. Excludes disk/network delivery, HTML/CSS parsing, layout, paint, storage restoration, main-view rendering, native MathML, physical phone/touch and assistive technology. OS caches are not flushed.'
    },
    artifact: {
      offlineHTMLBytes: html.length,
      gzipLevel6EstimateBytes: zlib.gzipSync(html, { level: 6 }).length,
      sourceScriptCount: scripts.length,
      sourceScriptBytes: scripts.reduce((sum, file) => sum + file.bytes, 0),
      largestSourceScripts: scripts
        .slice()
        .sort((a, b) => b.bytes - a.bytes)
        .slice(0, 12),
      compressionNote: 'Local gzip estimate, not evidence of production transfer headers or size.'
    },
    summary: summarize(runs, { productionRequested: config.profile }),
    runs
  };
}

function cli(args) {
  try {
    const config = options(args);
    if (config.worker) {
      const report = config.worker === '--component-worker' ? components(config) : production();
      process.stdout.write(JSON.stringify(report) + '\n');
      return 0;
    }
    const report = main(config);
    process.stdout.write(JSON.stringify(report, null, 2) + '\n');
    return exitCodeFor(report);
  } catch (error) {
    process.stdout.write(
      JSON.stringify(
        { formatVersion: 1, pass: false, complete: false, error: errorText(error), runs: [] },
        null,
        2
      ) + '\n'
    );
    process.stderr.write(errorText(error) + '\n');
    return 1;
  }
}

if (require.main === module) process.exitCode = cli(process.argv.slice(2));
else
  module.exports = {
    measured,
    parseBootstrap,
    collectRuns,
    summarize,
    qualification,
    exitCodeFor,
    productionPrefix,
    options
  };
