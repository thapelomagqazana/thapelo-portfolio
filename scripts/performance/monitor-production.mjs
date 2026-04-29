import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "node:fs/promises";
import path from "node:path";

/**
 * Production URL to test.
 *
 * Usage:
 * PORTFOLIO_URL=https://your-domain.vercel.app npm run perf:prod
 */
const productionUrl = process.env.PORTFOLIO_URL;

if (!productionUrl) {
  throw new Error("Missing PORTFOLIO_URL environment variable.");
}

/**
 * Performance budgets.
 *
 * Purpose:
 * - Keep live portfolio performance measurable
 * - Convert slowdowns into clear backlog items
 */
const BUDGETS = {
  lcpMs: 2000,
  cls: 0.05,
  inpMs: 200,
  performanceScore: 0.9,
};

/**
 * Run Lighthouse against the deployed production portfolio.
 *
 * Responsibilities:
 * - Capture Core Web Vitals
 * - Capture bundle/resource weight signals
 * - Persist a timestamped report
 */
async function runPerformanceMonitor() {
  const chrome = await chromeLauncher.launch({
    chromePath: process.env.CHROME_PATH,
    chromeFlags: [
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--remote-debugging-address=127.0.0.1",
    ],
  });

  try {
    const result = await lighthouse(productionUrl, {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance"],
    });

    if (!result?.lhr) {
      throw new Error("Lighthouse did not return a valid report.");
    }

    const audits = result.lhr.audits;

    const summary = {
      url: productionUrl,
      checkedAt: new Date().toISOString(),
      performanceScore: result.lhr.categories.performance.score,
      lcpMs: audits["largest-contentful-paint"]?.numericValue ?? null,
      cls: audits["cumulative-layout-shift"]?.numericValue ?? null,
      inpMs: audits["interaction-to-next-paint"]?.numericValue ?? null,
      totalByteWeight: audits["total-byte-weight"]?.numericValue ?? null,
      jsExecutionTimeMs: audits["bootup-time"]?.numericValue ?? null,
      consoleErrors:
        audits["errors-in-console"]?.details?.items?.length ?? 0,
    };

    const verdict = {
      lcpPass: summary.lcpMs !== null && summary.lcpMs <= BUDGETS.lcpMs,
      clsPass: summary.cls !== null && summary.cls <= BUDGETS.cls,
      inpPass: summary.inpMs === null ? true : summary.inpMs <= BUDGETS.inpMs,
      scorePass:
        summary.performanceScore !== null &&
        summary.performanceScore >= BUDGETS.performanceScore,
      consolePass: summary.consoleErrors === 0,
    };

    const output = {
      summary,
      verdict,
      budgets: BUDGETS,
    };

    const outputDir = path.resolve("reports/performance");
    await fs.mkdir(outputDir, { recursive: true });

    const filename = `portfolio-performance-${new Date()
      .toISOString()
      .replaceAll(":", "-")}.json`;

    await fs.writeFile(
      path.join(outputDir, filename),
      JSON.stringify(output, null, 2),
      "utf8",
    );

    console.log(JSON.stringify(output, null, 2));

    const failed = Object.values(verdict).some((value) => value === false);

    if (failed) {
      process.exitCode = 1;
    }
  } finally {
    await chrome.kill();
  }
}

runPerformanceMonitor().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});