import {
  DEFAULT_PROJECT_MODULES,
  PROJECT_MODULE_STATUSES,
  assertProjectModule,
  isProjectModule,
  isProjectModuleStatus,
} from "../features/projects";

/**
 * Canonical project-module data model tests.
 *
 * These tests validate:
 * - bounded status vocabulary
 * - fixture conformance
 * - runtime validation helpers
 */
describe("project module data model", () => {
  it("defines the approved bounded status vocabulary", () => {
    expect(PROJECT_MODULE_STATUSES).toEqual(["ACTIVE", "DEPLOYED"]);
  });

  it("accepts only valid status values", () => {
    expect(isProjectModuleStatus("ACTIVE")).toBe(true);
    expect(isProjectModuleStatus("DEPLOYED")).toBe(true);
    expect(isProjectModuleStatus("UNKNOWN")).toBe(false);
  });

  it("ensures all canonical fixtures conform to the project-module model", () => {
    DEFAULT_PROJECT_MODULES.forEach((fixture) => {
      expect(isProjectModule(fixture)).toBe(true);
    });
  });

  it("requires the minimum canonical fields", () => {
    DEFAULT_PROJECT_MODULES.forEach((fixture) => {
      expect(fixture.id).toBeTruthy();
      expect(fixture.name).toBeTruthy();
      expect(fixture.status).toBeTruthy();
      expect(fixture.description).toBeTruthy();
      expect(fixture.techStack.length).toBeGreaterThan(0);
    });
  });

  it("throws when an invalid fixture is asserted", () => {
    expect(() =>
      assertProjectModule({
        id: "",
        name: "Broken Module",
        status: "ACTIVE",
        description: "Invalid because id is empty",
        techStack: ["React"],
      }),
    ).toThrow(/invalid project module fixture/i);
  });
});