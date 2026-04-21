import { DEFAULT_PROJECT_MODULES } from "../features/projects";

/**
 * Project-module data contract tests.
 *
 * These tests validate that the default module fixtures remain aligned
 * with the canonical project-module structure.
 */
describe("project module data", () => {
  it("includes required fields for each project module", () => {
    DEFAULT_PROJECT_MODULES.forEach((module) => {
      expect(module.id).toBeTruthy();
      expect(module.name).toBeTruthy();
      expect(module.status).toBeTruthy();
      expect(module.description).toBeTruthy();
      expect(module.techStack.length).toBeGreaterThan(0);
    });
  });

  it("uses only approved bounded status values", () => {
    DEFAULT_PROJECT_MODULES.forEach((module) => {
      expect(["ACTIVE", "DEPLOYED"]).toContain(module.status);
    });
  });
});