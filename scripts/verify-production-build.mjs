import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST_DIR = "dist";
const MAX_TOTAL_DIST_KB = 1500;

/**
 * Production build verifier.
 *
 * Responsibilities:
 * - Confirm the production artifact exists.
 * - Confirm generated files are present.
 * - Prevent accidentally shipping empty or broken builds.
 * - Enforce a lightweight bundle budget.
 */
function verifyProductionBuild() {
  assertDistExists();
  assertDistHasIndexHtml();
  assertDistHasAssets();
  assertDistSizeWithinBudget();

  console.log("✅ Production build verification passed.");
}

function assertDistExists() {
  if (!existsSync(DIST_DIR)) {
    throw new Error(`Missing production output directory: ${DIST_DIR}`);
  }
}

function assertDistHasIndexHtml() {
  const indexPath = join(DIST_DIR, "index.html");

  if (!existsSync(indexPath)) {
    throw new Error("Missing dist/index.html");
  }
}

function assertDistHasAssets() {
  const assetsPath = join(DIST_DIR, "assets");

  if (!existsSync(assetsPath)) {
    throw new Error("Missing dist/assets directory");
  }

  const assets = readdirSync(assetsPath);

  if (assets.length === 0) {
    throw new Error("dist/assets exists but contains no generated assets");
  }
}

function assertDistSizeWithinBudget() {
  const sizeKb = getDirectorySizeKb(DIST_DIR);

  if (sizeKb > MAX_TOTAL_DIST_KB) {
    throw new Error(
      `Production build is too large: ${sizeKb.toFixed(
        2,
      )}KB. Budget: ${MAX_TOTAL_DIST_KB}KB.`,
    );
  }

  console.log(`Production artifact size: ${sizeKb.toFixed(2)}KB`);
}

function getDirectorySizeKb(directory) {
  let totalBytes = 0;

  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      totalBytes += getDirectorySizeKb(path) * 1024;
    } else {
      totalBytes += stats.size;
    }
  }

  return totalBytes / 1024;
}

try {
  verifyProductionBuild();
} catch (error) {
  console.error("❌ Production build verification failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}