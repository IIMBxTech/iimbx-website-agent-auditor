const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const files = process.argv.slice(2);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  for (const file of files) {
    const absPath = path.resolve(file);
    const url = 'file:///' + absPath.replace(/\\/g, '/');
    const outName = path.basename(file, '.html') + '_screenshot.png';
    const outPath = path.join(path.dirname(absPath), outName);

    console.log(`Screenshotting: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    // Wait a bit for fonts and animations
    await page.waitForTimeout(2000);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved: ${outPath}`);
  }

  await browser.close();
})();
