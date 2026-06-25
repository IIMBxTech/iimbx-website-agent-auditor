/**
 * IIMBx Website Grader v4
 * Run via: run_grader.ps1 (which starts Python server first)
 * Assumes http://localhost:8765 is already serving the Compare folder.
 *
 * Changes in v4:
 *  - Scans ONLY Old Website + our prototypes (no staging URLs)
 *  - Safe atomic data.js injection (parse → modify → serialize)
 *  - Score history: current + 1 previous scan
 *  - Captures Lighthouse diagnostics (top failing audits per category)
 *  - Saves timestamped backups to grader_history/
 */

const { spawnSync } = require('child_process');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const SERVE_PORT     = 8765;
const CHROME_PATH    = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DATA_JS_PATH   = path.join(__dirname, 'dashboard', 'data', 'data.js');
const RESULTS_PATH   = path.join(__dirname, 'grader_results.json');
const HISTORY_DIR    = path.join(__dirname, 'grader_history');

// ── VARIANT MAP — Only Old Website + Our Prototypes ───────────────────────
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
  },
  nam: {
    'Proposed v1': 'prototypes/nam_v1.html',
    'Proposed v2': 'prototypes/nam_v2.html',
    'Proposed v3': 'prototypes/nam_v3.html',
    'Stitch v4':   'prototypes/nam_stitch_v4.html',
  },
  pcaim: {
    'proposedV1': 'prototypes/ai_for_managers_v1.html',
    'proposedV2': 'prototypes/ai_for_managers_v2.html',
    'proposedV3': 'prototypes/ai_for_managers_v3.html',
    'oldSite': 'https://iimbx.iimb.ac.in/ai-for-managers/',
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
    return {
      performance: null, accessibility: null, bestPractices: null, seo: null,
      overall: null, url: fullUrl, error: stderr, diagnostics: []
    };
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

    // Extract top failing audits as diagnostics
    const diagnostics = extractDiagnostics(raw);

    return {
      performance: perf, accessibility: a11y, bestPractices: bp, seo, overall,
      url: fullUrl, scannedAt: new Date().toISOString(), error: null,
      diagnostics
    };
  } catch (e) {
    try { fs.unlinkSync(tmpJson); } catch (_) {}
    return {
      performance: null, accessibility: null, bestPractices: null, seo: null,
      overall: null, url: fullUrl, error: e.message, diagnostics: []
    };
  }
}

// ── EXTRACT DIAGNOSTICS ───────────────────────────────────────────────────
function extractDiagnostics(lhResult) {
  const diagnostics = [];
  const audits = lhResult.audits || {};
  const categories = lhResult.categories || {};

  // For each category, find the top failing audits
  const catMap = {
    performance:      'performance',
    accessibility:    'accessibility',
    'best-practices': 'bestPractices',
    seo:              'seo'
  };

  for (const [catId, catKey] of Object.entries(catMap)) {
    const cat = categories[catId];
    if (!cat || !cat.auditRefs) continue;

    const failingAudits = [];
    for (const ref of cat.auditRefs) {
      const audit = audits[ref.id];
      if (!audit) continue;
      // Only include audits that failed or have warnings
      if (audit.score !== null && audit.score < 1) {
        const item = {
          id: ref.id,
          category: catKey,
          title: audit.title || ref.id,
          score: Math.round((audit.score || 0) * 100),
          description: (audit.description || '').split('[Learn more]')[0].trim(),
        };
        // Add savings info if available (performance)
        if (audit.details && audit.details.overallSavingsMs) {
          item.savingsMs = Math.round(audit.details.overallSavingsMs);
        }
        if (audit.details && audit.details.overallSavingsBytes) {
          item.savingsKb = Math.round(audit.details.overallSavingsBytes / 1024);
        }
        // Count affected elements (accessibility)
        if (audit.details && audit.details.items) {
          item.affectedElements = audit.details.items.length;
        }
        failingAudits.push(item);
      }
    }

    // Sort by score ascending (worst first), take top 3 per category
    failingAudits.sort((a, b) => a.score - b.score);
    diagnostics.push(...failingAudits.slice(0, 3));
  }

  return diagnostics;
}

// ── SAFE ATOMIC data.js INJECTION ─────────────────────────────────────────
function safeInjectIntoDataJs(results) {
  // Step 1: Parse existing data.js
  const raw = fs.readFileSync(DATA_JS_PATH, 'utf8');
  let auditData;
  try {
    // Execute data.js in a sandboxed context to extract window.AUDIT_DATA
    const sandbox = { window: {} };
    const fn = new Function('window', raw.replace('window.AUDIT_DATA', 'window.AUDIT_DATA'));
    fn(sandbox.window);
    // Alternative: direct extraction
    const match = raw.match(/window\.AUDIT_DATA\s*=\s*(\[[\s\S]*\]);?\s*$/);
    if (!match) throw new Error('Cannot find window.AUDIT_DATA array in data.js');
    auditData = JSON.parse(match[1]);
  } catch (parseErr) {
    // Fallback: try eval-style extraction
    try {
      const trimmed = raw.replace(/^window\.AUDIT_DATA\s*=\s*/, '').replace(/;\s*$/, '');
      auditData = JSON.parse(trimmed);
    } catch (e2) {
      console.error('❌ FATAL: Cannot parse existing data.js. Aborting injection.');
      console.error('   Fix data.js manually or restore from git.');
      return false;
    }
  }

  console.log(`  📋 Parsed data.js: ${auditData.length} programmes`);

  // Step 2: For each programme, move current graderScores → previousScores, inject new scores
  for (const [progId, newScores] of Object.entries(results)) {
    const prog = auditData.find(p => p.id === progId);
    if (!prog) {
      console.warn(`  ⚠  Programme "${progId}" not found in data.js — skipping`);
      continue;
    }

    // Move current scores to previousScores (only if they exist and have data)
    if (prog.graderScores && Object.keys(prog.graderScores).length > 0) {
      prog.previousScores = {};
      for (const [label, score] of Object.entries(prog.graderScores)) {
        // Strip diagnostics from previous scores to save space
        const { diagnostics, ...rest } = score;
        prog.previousScores[label] = rest;
      }
      console.log(`  ↩  Archived ${Object.keys(prog.previousScores).length} previous scores for ${progId}`);
    }

    // Set new graderScores
    prog.graderScores = newScores;
    console.log(`  ✅ Injected ${Object.keys(newScores).length} new scores for ${progId}`);
  }

  // Step 3: Serialize back to data.js
  const newContent = `window.AUDIT_DATA = ${JSON.stringify(auditData, null, 2)};\n`;

  // Step 4: Validate before writing
  try {
    new Function(newContent);
  } catch (validationErr) {
    console.error('❌ FATAL: Generated data.js has syntax error! Aborting write.');
    console.error('   Error:', validationErr.message);
    // Save debug copy
    const debugPath = path.join(__dirname, 'data_js_debug_output.js');
    fs.writeFileSync(debugPath, newContent, 'utf8');
    console.error(`   Debug output saved to: ${debugPath}`);
    return false;
  }

  // Step 5: Atomic write — write to temp file, then rename
  const tmpPath = DATA_JS_PATH + '.tmp';
  fs.writeFileSync(tmpPath, newContent, 'utf8');
  fs.renameSync(tmpPath, DATA_JS_PATH);
  console.log(`  💾 data.js written successfully (${(newContent.length / 1024).toFixed(1)} KB)`);
  return true;
}

// ── SAVE HISTORY BACKUP ───────────────────────────────────────────────────
function saveHistoryBackup(results) {
  if (!fs.existsSync(HISTORY_DIR)) {
    fs.mkdirSync(HISTORY_DIR, { recursive: true });
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 16);
  const backupPath = path.join(HISTORY_DIR, `${timestamp}.json`);
  fs.writeFileSync(backupPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`  📦 History backup → grader_history/${timestamp}.json`);
}

// ── MAIN ───────────────────────────────────────────────────────────────────
(async () => {
  const totalVariants = Object.values(VARIANT_MAP).reduce((s, v) => s + Object.keys(v).length, 0);
  console.log(`\n🌐 IIMBx Grader v4`);
  console.log(`   Server: http://localhost:${SERVE_PORT}`);
  console.log(`   Scope: Old Website + Our Prototypes only (no staging URLs)`);
  console.log(`   Variants: ${totalVariants} total across ${Object.keys(VARIANT_MAP).length} programmes\n`);

  const results = {};
  let n = 0;

  for (const [progId, variants] of Object.entries(VARIANT_MAP)) {
    console.log(`\n📋 ${progId.toUpperCase()} (${Object.keys(variants).length} variants)`);
    results[progId] = {};

    for (const [label, url] of Object.entries(variants)) {
      n++;
      process.stdout.write(`  [${n}/${totalVariants}] ${label}: `);
      const scores = scanUrl(url);
      results[progId][label] = scores;

      if (scores.error && !scores.performance) {
        console.log(`❌ Error — ${scores.error.slice(0, 80)}`);
      } else {
        const diagCount = scores.diagnostics ? scores.diagnostics.length : 0;
        console.log(`Overall ${scores.overall} | Perf ${scores.performance} | A11y ${scores.accessibility} | BP ${scores.bestPractices} | SEO ${scores.seo} | ${diagCount} diagnostics`);
      }

      // Brief pause between scans
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  // Save raw results
  console.log('\n📄 Saving raw results...');
  fs.writeFileSync(RESULTS_PATH, JSON.stringify(results, null, 2), 'utf8');
  console.log(`  ✅ Raw results → grader_results.json`);

  // Save history backup
  saveHistoryBackup(results);

  // Inject into data.js (safe atomic write)
  console.log('\n📝 Injecting scores into data.js (safe atomic write)...');
  const success = safeInjectIntoDataJs(results);

  if (success) {
    console.log('\n🎯 Done! Refresh the dashboard to see updated Lighthouse scores.');
    console.log('   Score history (previous scan) is preserved in the dashboard.');
  } else {
    console.log('\n⚠  Grader completed but data.js injection failed. Check errors above.');
    console.log('   Raw results are saved in grader_results.json — you can retry injection manually.');
  }
})();
