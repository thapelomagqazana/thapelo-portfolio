import { DEFAULT_SYSTEM_DASHBOARD_DATA } from "../features/dashboard";

/**
 * Dashboard data contract tests.
 *
 * These tests validate that the canonical dashboard preview data
 * remains bounded, structured, and usable by the preview component.
 */
describe("dashboard preview data", () => {
  it("includes a release-confidence metric", () => {
    expect(DEFAULT_SYSTEM_DASHBOARD_DATA.releaseConfidence.label).toBe(
      "Release Confidence",
    );
    expect(DEFAULT_SYSTEM_DASHBOARD_DATA.releaseConfidence.value).toBeTruthy();
  });

  it("includes at least one status item", () => {
    expect(DEFAULT_SYSTEM_DASHBOARD_DATA.statuses.length).toBeGreaterThan(0);
  });

  it("includes at least one KPI item", () => {
    expect(DEFAULT_SYSTEM_DASHBOARD_DATA.kpis.length).toBeGreaterThan(0);
  });
});