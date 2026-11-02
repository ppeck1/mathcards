#!/usr/bin/env node
/* Background-only measurements. No browser, desktop control, network or writes. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const os = require('node:os');
const zlib = require('node:zlib');
const { performance } = require('node:perf_hooks');
const { spawnSync } = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const read = name => fs.readFileSync(path.join(SRC, name), 'utf8');
const bytes = value => Buffer.byteLength(value, 'utf8');
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const round = value => Math.round(value * 1000) / 1000;
const measured = work => {
  const start = performance.now();
  const value = work();
  return { value, milliseconds: performance.now() - start };
};
const names = () =>
  [...read('index.html').matchAll(/<script\s+src="([^"]+)"[^>]*data-development/g)].map(
    ([, name]) => name.split('?')[0]
  );
const json = file => JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));

function child(args) {
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 60000,
    maxBuffer: 8 * 1024 * 1024
  });
  if (result.error || result.status !== 0)
    throw new Error(
      result.error?.message || result.stderr || result.stdout || 'Measurement subprocess failed.'
    );
  return result.stdout;
}

function components() {
  // Same source order and VM substrate as tests/startup-index.test.mjs. The
  // unmodified test remains the authoritative 1500 ms bootstrap budget.
  const context = vm.createContext({});
  const phases = [],
    prepared = new Set([
      'catalog.js',
      'math-index-data.js',
      'formula-data.js',
      'subject-inventory-data.js'
    ]);
  let otherScriptsMs = 0;
  for (const name of names().filter(name => name !== 'app.js')) {
    const source = read(name);
    const phase = measured(() =>
      vm.runInContext(source, context, { filename: name, timeout: 4000 })
    );
    if (prepared.has(name))
      phases.push({
        name,
        parseAndEvaluateMs: round(phase.milliseconds),
        scriptBytes: bytes(source)
      });
    else otherScriptsMs += phase.milliseconds;
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
    return { query, milliseconds: round(lookup.milliseconds), results: lookup.value.length };
  });
  const repeated = [];
  for (let pass = 0; pass < 3; pass++)
    for (const query of queries)
      repeated.push(measured(() => searchPhase.value.search(query)).milliseconds);
  const symbols = measured(() => indexPhase.value.symbolCatalog());
  const usageRows = data.entries.flatMap(entry => entry.usedBy);
  return {
    preparedDataParsing: phases,
    otherScriptParseAndEvaluateMs: round(otherScriptsMs),
    indexHydrationMs: round(indexPhase.milliseconds),
    atlasInitializationMs: round(atlasPhase.milliseconds),
    subjectInitializationMs: round(subjectPhase.milliseconds),
    searchInitializationMs: round(searchPhase.milliseconds),
    firstUnifiedQueries: firstQueries,
    repeatedUnifiedQueryMedianMs: round(median(repeated)),
    repeatedUnifiedQueryMaximumMs: round(Math.max(...repeated)),
    firstSymbolCatalogMs: round(symbols.milliseconds),
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

function main() {
  const manifest = json('dist/build-manifest.json'),
    packageData = json('package.json');
  if (manifest.application_version !== packageData.version)
    throw new Error('Build is stale: run python tools/build.py before measuring.');
  const html = fs.readFileSync(path.join(ROOT, 'dist/index.html'));
  const crypto = require('node:crypto');
  if (crypto.createHash('sha256').update(html).digest('hex') !== manifest.index_sha256)
    throw new Error('Built HTML does not match its manifest.');
  const scripts = names().map(name => ({ name, bytes: fs.statSync(path.join(SRC, name)).size }));
  const embedded = html.toString('utf8');
  for (const { name } of scripts) {
    // Python's build reads normalize CRLF before embedding. Keep the artifact
    // hash byte-exact while checking current source membership the same way.
    if (!embedded.includes(read(name).replace(/\r\n/g, '\n')))
      throw new Error('Built HTML does not embed current ' + name + '. Rebuild before measuring.');
  }
  const sourceDigest = () => {
    const hash = crypto.createHash('sha256');
    for (const { name } of scripts) hash.update(name).update(fs.readFileSync(path.join(SRC, name)));
    return hash.digest('hex');
  };
  const sourceSHA256 = sourceDigest();
  const runs = [];
  // Sequential cold processes avoid oversubscribing the user's active PC.
  // Each run invokes the existing budget test unchanged, not a looser copy.
  for (let run = 1; run <= 3; run++) {
    const output = child([
      '--test',
      '--test-concurrency=1',
      '--test-name-pattern=browser bootstrap hydrates',
      'tests/startup-index.test.mjs'
    ]);
    const match = output.match(/bootstrap JavaScript: ([\d.]+) ms; budget 1500 ms/);
    if (!match) throw new Error('Existing bootstrap test did not return its budget diagnostic.');
    const component = JSON.parse(child([__filename, '--component-worker']));
    if (component.counts.cards !== manifest.cards)
      throw new Error('Source catalog and build card counts differ. Rebuild before measuring.');
    runs.push({ run, bootstrapTestMs: Number(match[1]), components: component });
  }
  if (
    sourceDigest() !== sourceSHA256 ||
    crypto
      .createHash('sha256')
      .update(fs.readFileSync(path.join(ROOT, 'dist/index.html')))
      .digest('hex') !== manifest.index_sha256
  )
    throw new Error(
      'Sources or build changed during measurement; rerun after editing has stopped.'
    );
  const diagnosticFields = [
    'indexHydrationMs',
    'atlasInitializationMs',
    'subjectInitializationMs',
    'searchInitializationMs',
    'firstSymbolCatalogMs',
    'repeatedUnifiedQueryMedianMs'
  ];
  const report = {
    formatVersion: 1,
    applicationVersion: manifest.application_version,
    artifactSHA256: manifest.index_sha256,
    canonicalContentSHA256: manifest.canonical_content_sha256,
    measuredSourceScriptsSHA256: sourceSHA256,
    environment: {
      node: process.version,
      platform: process.platform,
      architecture: process.arch,
      logicalCPUs: os.availableParallelism(),
      cpuModel: os.cpus()[0]?.model || 'unavailable'
    },
    method: {
      runs: 3,
      concurrentProcesses: 1,
      coldProcess: true,
      browserLaunched: false,
      networkUsed: false,
      bootstrapTest:
        'tests/startup-index.test.mjs · browser bootstrap hydrates without a source scan and stays within its CPU budget',
      limits:
        'Node/V8 proxy only. Source strings are read before the budget timer. Excludes disk/network delivery, HTML/CSS parsing, layout, paint, native MathML, physical phone/touch and assistive technology. Child processes are cold; OS file caches are not flushed.'
    },
    artifact: {
      offlineHTMLBytes: html.length,
      gzipLevel6EstimateBytes: zlib.gzipSync(html, { level: 6 }).length,
      sourceScriptCount: scripts.length,
      sourceScriptBytes: scripts.reduce((sum, file) => sum + file.bytes, 0),
      largestSourceScripts: scripts.sort((a, b) => b.bytes - a.bytes).slice(0, 12),
      compressionNote: 'Local gzip estimate, not evidence of production transfer headers or size.'
    },
    summary: {
      bootstrapMedianMs: median(runs.map(run => run.bootstrapTestMs)),
      bootstrapMaximumMs: Math.max(...runs.map(run => run.bootstrapTestMs)),
      budgetMs: 1500,
      ...Object.fromEntries(
        diagnosticFields.map(key => [key + 'Median', median(runs.map(run => run.components[key]))])
      )
    },
    runs
  };
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
}

try {
  if (process.argv.includes('--component-worker'))
    process.stdout.write(JSON.stringify(components()) + '\n');
  else main();
} catch (error) {
  process.stderr.write(error.stack + '\n');
  process.exitCode = 1;
}
