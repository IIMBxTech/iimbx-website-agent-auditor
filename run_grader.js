/**
 * IIMBx Website Grader v3
 * Run via: run_grader.ps1 (which starts Python server first)
 * Assumes http://localhost:8765 is already serving the Compare folder.
 */

const { spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const SERVE_PORT   = 8765;
const SERVE_ROOT   = __dirname;
const CHROME_PATH  = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DATA_JS_PATH = path.join(__dirname, 'dashboard', 'data', 'data.js');
const RESULTS_PATH = path.join(__dirname, 'grader_results.json');

// ── VARIANT MAP ────────────────────────────────────────────────────────────
const VARIANT_MAP = {
  adm: {
    'Design 1 (Pro Stitch)':   'prototypes/adm_v1_variant_1.html',
    'Design 2 (Pro HTML)':     'prototypes/adm_gemini31pro.html',
    'Design 3 (Flash Stitch)': 'prototypes/adm_v1_variant_3.html',
    'Design 4 (Flash HTML)':   'prototypes/adm_gemini35flash.html',
    'Design 5 (Pro Refined)':  'prototypes/adm_v1_variant_5.html',
    'Stitch v4':               'prototypes/adm_stitch_v4.html',
    'Old Website':             'https://iimbx.iimb.ac.in/catalog/accounting-for-decision-making/',
  },
  pchm: {
    'Proposed v1': 'prototypes/pchm_v1.html',
    'Proposed v2': 'prototypes/pchm_v2.html',
    'Proposed v3': 'prototypes/pchm_v3.html',
    'Stitch v4':   'prototypes/pchm_stitch_v4.html',
    'Old Website': 'https://iimbx.iimb.ac.in/hospital-management-program/',
    'V1 Staging':  'https://iimbx.iimb.ac.in/hospital-management-new-v1/',
  },
  nam: {
    'Proposed v1': 'prototypes/nam_v1.html',
    'Proposed v2': 'prototypes/nam_v2.html',
    'Proposed v3': 'prototypes/nam_v3.html',
    'Stitch v4':   'prototypes/nam_stitch_v4.html',
    'V1 Staging':  'https://iimbx.iimb.ac.in/nam-v1/',
  },
  elp: {
    'V1 Proposed v1': 'prototypes/elp_v1.html',
    'V1 Proposed v2': 'prototypes/elp_v2.html',
    'V1 Proposed v3': 'prototypes/elp_v3.html',
    'V1 Stitch v4':   'prototypes/elp_v1_stitch_v4.html',
    'V1 Variant 1':   'prototypes/elp_v1_variant_1.html',
    'V1 Variant 2':   'prototypes/elp_v1_variant_2.html',
    'V1 Variant 3':   'prototypes/elp_v1_variant_3.html',
    'V2 Variant 1':   'prototypes/elp_v2_variant_1.html',
    'V2 Variant 2':   'prototypes/elp_v2_variant_2.html',
    'V2 Variant 3':   'prototypes/elp_v2_variant_3.html',
    'V2 Stitch v4':   'prototypes/elp_v2_stitch_v4.html',
    'V2 Staging':     'https://iimbx.iimb.ac.in/elp-new-v2/',
  },
  pcaim: {
    'Proposed v1': 'prototypes/pcaim_v1.html',
    'Proposed v2': 'prototypes/pcaim_v2.html',
    'Proposed v3': 'prototypes/pcaim_v3.html',
    'Stitch v4':   'prototypes/pcaim_stitch_v4.html',
    'Old Website': 'https://iimbx.iimb.ac.in/ai-for-managers/',
  },
  contact: {
    'Proposed v1': 'prototypes/contact_v1.html',
    'Proposed v2': 'prototypes/contact_v2.html',
    'Proposed v3': 'prototypes/contact_v3.html',
    'Stitch v2':   'prototypes/contact_v2_stitch.html',
  },
};

// ── SCAN ONE URL ──────────────────────────────────────────────────────────
function scanUrl(url) {
  const isLocal = !url.startsWith('http');
  const fullUrl = isLocal ? `http://localhost:${SERVE_PORT}/${url}` : url;
  const tmpJson = path.join(os.tmpdir(), `lh_${Date.now()}.json`);

  const result = spawnSync(
    'npx',
    [
      '--yes', 'lighthouse@13.3.0',
      fullUrl,
      '--output=json',
      `--output-path=${tmpJson}`,
      `--chrome-flags=--headless --no-sandbox --disable-gpu --disable-dev-shm-usage`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--quiet',
      '--no-enable-error-reporting',
    ],
    {
      timeout: 90000,
      stdio: 'pipe',
      shell: true,
      env: { ...process.env, CHROME_PATH },
      cwd: __dirname,
    }
  );

  if (!fs.existsSync(tmpJson)) {
    const stderr = result.stderr ? result.stderr.toString().slice(0, 300) : 'no output file';
    return { performance: null, accessibility: null, bestPractices: null, seo: null, overall: null, url: fullUrl, error: stderr };
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
    return { performance: perf, accessibility: a11y, bestPractices: bp, seo, overall, url: fullUrl, scannedAt: new Date().toISOString(), error: null };
  } catch (e) {
    try { fs.unlinkSync(tmpJson); } catch (_) {}
    return { performance: null, accessibility: null, bestPractices: null, seo: null, overall: null, url: fullUrl, error: e.message };
  }
}

// ── INJECT INTO data.js ───────────────────────────────────────────────────
function injectIntoDataJs(results) {
  let dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  for (const [progId, variants] of Object.entries(results)) {
    const marker = `"id": "${progId}"`;
    const startIdx = dataJs.indexOf(marker);
    if (startIdx === -1) { console.warn(`⚠  id "${progId}" not found in data.js — skipping`); continue; }

    // Find the end of this programme's object (next top-level id or end of array)
    const nextIdIdx = dataJs.indexOf('"id":', startIdx + marker.length);
    const segmentEnd = nextIdIdx > -1 ? nextIdIdx : dataJs.length;
    const segment = dataJs.slice(startIdx, segmentEnd);

    const graderJson = `"graderScores": ${JSON.stringify(variants, null, 6)}`;

    if (segment.includes('"graderScores"')) {
      // Replace existing block
      const fullSegment = dataJs.slice(startIdx, segmentEnd);
      const updated = fullSegment.replace(
        /"graderScores":\s*\{[\s\S]*?\}(?=\s*[\n\r]*\s*[,\}])/,
        graderJson
      );
      dataJs = dataJs.slice(0, startIdx) + updated + dataJs.slice(segmentEnd);
      console.log(`  ↩  Updated existing graderScores for ${progId}`);
    } else {
      // Find end of actionItems array and insert before the closing } of programme
      const aiRegex = /"actionItems":\s*\[[\s\S]*?\]\s*\n(\s*\})/;
      const aiMatch = aiRegex.exec(segment);
      if (!aiMatch) { console.warn(`⚠  Cannot find actionItems block for ${progId}`); continue; }
      const insertPos = startIdx + aiMatch.index + aiMatch[0].lastIndexOf(aiMatch[1]);
      dataJs = dataJs.slice(0, insertPos) +
               `    ,\n    ${graderJson}\n` +
               dataJs.slice(insertPos);
      console.log(`  ✅ Injected graderScores for ${progId}`);
    }
  }

  fs.writeFileSync(DATA_JS_PATH, dataJs, 'utf8');
}

// ── MAIN ───────────────────────────────────────────────────────────────────
(async () => {
  console.log(`🌐 Assuming server is running at http://localhost:${SERVE_PORT}`);
  console.log(`🔍 Starting Lighthouse scans across all ${Object.values(VARIANT_MAP).reduce((s,v)=>s+Object.keys(v).length,0)} variants...\n`);

  const results = {};
  let n = 0;
  const total = Object.values(VARIANT_MAP).reduce((s, v) => s + Object.keys(v).length, 0);

  for (const [progId, variants] of Object.entries(VARIANT_MAP)) {
    console.log(`\n📋 Programme: ${progId.toUpperCase()} (${Object.keys(variants).length} variants)`);
    results[progId] = {};

    for (const [label, url] of Object.entries(variants)) {
      n++;
      process.stdout.write(`  [${n}/${total}] ${label}: `);
      const scores = scanUrl(url);
      results[progId][label] = scores;

      if (scores.error && !scores.performance) {
        console.log(`❌ Error — ${scores.error.slice(0, 80)}`);
      } else {
        console.log(`Overall ${scores.overall} | Perf ${scores.performance} | A11y ${scores.accessibility} | BP ${scores.bestPractices} | SEO ${scores.seo}`);
      }

      // Brief pause between scans
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  console.log('\n📄 Saving raw results...');
  fs.writeFileSync(RESULTS_PATH, JSON.stringify(results, null, 2), 'utf8');
  console.log(`✅ Raw results → grader_results.json`);

  console.log('\n📝 Injecting scores into data.js...');
  injectIntoDataJs(results);

  console.log('\n🎯 Done! Refresh the dashboard to see real Lighthouse scores.');
})();
