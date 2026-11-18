// Render poster.html to entry.png at exactly 1024x1024 with headless Chromium.
// Playwright is installed in ~/workspace/tools/pw on this machine, so it is
// loaded through a require anchored there (this repo carries no node_modules).
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire('/home/hatch/workspace/tools/pw/package.json');
const { chromium } = require('playwright');

const here = dirname(fileURLToPath(import.meta.url));
const posterUrl = pathToFileURL(join(here, 'poster.html')).href;
const outPath = join(here, 'entry.png');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1024, height: 1024 },
    deviceScaleFactor: 1,
  });
  await page.goto(posterUrl, { waitUntil: 'load' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: outPath, type: 'png' });
  console.log(`wrote ${outPath}`);
} finally {
  await browser.close();
}
