/**
 * Re-scan failed variants (nulls from main run)
 * Increases timeout to 120s per scan
 */
const { spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const SERVE_PORT = 8765;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DATA_JS_PATH = path.join(__dirname, 'dashboard', 'data', 'data.js');

const RETRY_VARIANTS = [
  { prog: 'pcaim', label: 'Proposed v1', url: 'prototypes/pcaim_v1.html' },
  { prog: 'pcaim', label: 'Proposed v2', url: 'prototypes/pcaim_v2.html' },
  { prog: 'pcaim', label: 'Proposed v3', url: 'prototypes/pcaim_v3.html' },
  { prog: 'pcaim', label: 'Old Website', url: 'https://iimbx.iimb.ac.in/ai-for-managers/' },
  { prog: 'contact', label: 'Proposed v2', url: 'prototypes/contact_v2.html' },
];

function scanUrl(url) {
  const isLocal = !url.startsWith('http');
  const fullUrl = isLocal ? `http://localhost:${SERVE_PORT}/${url}` : url;
  const tmpJson = path.join(os.tmpdir(), `lh_retry_${Date.now()}.json`);

  process.stdout.write(`  Scanning: ${fullUrl.replace('http://localhost:' + SERVE_PORT + '/', '')} → `);

  const result = spawnSync(
    'npx',
    [
      '--yes', 'lighthouse@13.3.0', fullUrl,
      '--output=json', `--output-path=${tmpJson}`,
      `--chrome-flags=--headless --no-sandbox --disable-gpu --disable-dev-shm-usage`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--quiet', '--no-enable-error-reporting',
    ],
    { timeout: 120000, stdio: 'pipe', shell: true, env: { ...process.env, CHROME_PATH }, cwd: __dirname }
  );

  if (!fs.existsSync(tmpJson)) {
    const err = result.stderr ? result.stderr.toString().slice(0, 150) : 'no json';
    console.log(`❌ ${err}`);
    return null;
  }

  try {
    const raw  = JSON.parse(fs.readFileSync(tmpJson, 'utf8'));
    try { fs.unlinkSync(tmpJson); } catch (_) {}
    const cats = raw.categories;
    const perf = Math.round((cats.performance?.score    ?? 0) * 100);
    const a11y = Math.round((cats.accessibility?.score  ?? 0) * 100);
    const bp   = Math.round((cats['best-practices']?.score ?? 0) * 100);
    const seo  = Math.round((cats.seo?.score            ?? 0) * 100);
    const overall = Math.round((perf + a11y + bp + seo) / 4);
    console.log(`Overall ${overall} | Perf ${perf} | A11y ${a11y} | BP ${bp} | SEO ${seo}`);
    return { performance: perf, accessibility: a11y, bestPractices: bp, seo, overall, url: fullUrl, scannedAt: new Date().toISOString(), error: null };
  } catch (e) {
    try { fs.unlinkSync(tmpJson); } catch (_) {}
    console.log(`❌ Parse error: ${e.message}`);
    return null;
  }
}

function patchDataJs(prog, label, scores) {
  let dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');
  // Find the graderScores block for this prog and update the label
  const progIdx = dataJs.indexOf(`"id": "${prog}"`);
  if (progIdx === -1) { console.warn(`⚠ prog ${prog} not found`); return; }
  
  const nextProgIdx = dataJs.indexOf('"id":', progIdx + 10);
  const segment = nextProgIdx > -1 ? dataJs.slice(progIdx, nextProgIdx) : dataJs.slice(progIdx);
  
  if (!segment.includes('"graderScores"')) {
    console.warn(`⚠ No graderScores block for ${prog} yet`);
    return;
  }

  // Find the label inside graderScores and replace its value
  const labelPattern = new RegExp(`("${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*)\\{[^}]*\\}`);
  const newValue = `$1${JSON.stringify(scores)}`;
  
  if (labelPattern.test(segment)) {
    const updatedSegment = segment.replace(labelPattern, newValue);
    dataJs = dataJs.slice(0, progIdx) + updatedSegment + (nextProgIdx > -1 ? dataJs.slice(nextProgIdx) : '');
    fs.writeFileSync(DATA_JS_PATH, dataJs, 'utf8');
    console.log(`  ✅ Patched ${prog} → "${label}"`);
  } else {
    // Label not in graderScores yet — append it
    const gsIdx = dataJs.indexOf('"graderScores"', progIdx);
    const gsBlockEnd = dataJs.indexOf('\n    }', gsIdx);
    if (gsBlockEnd > -1) {
      dataJs = dataJs.slice(0, gsBlockEnd) + `,\n      "${label}": ${JSON.stringify(scores)}` + dataJs.slice(gsBlockEnd);
      fs.writeFileSync(DATA_JS_PATH, dataJs, 'utf8');
      console.log(`  ✅ Added ${prog} → "${label}" to graderScores`);
    }
  }
}

(async () => {
  console.log(`🔄 Re-scanning ${RETRY_VARIANTS.length} failed variants with 120s timeout...\n`);
  for (const { prog, label, url } of RETRY_VARIANTS) {
    const scores = scanUrl(url);
    if (scores) patchDataJs(prog, label, scores);
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log('\n✅ Retry complete!');
})();
