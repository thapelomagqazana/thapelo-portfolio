import {
  findProjectDetailById,
  getProjectDetailSections,
} from "../features/projects";

describe("project detail utils", () => {
  it("finds a project detail by valid id", () => {
    const project = findProjectDetailById("brikbyteos");

    expect(project).toBeDefined();
    expect(project?.name).toBe("BrikByteOS");
  });

  it("returns undefined for an unknown id", () => {
    expect(findProjectDetailById("unknown-project")).toBeUndefined();
  });

  it("returns the required sections in deterministic order", () => {
    const project = findProjectDetailById("brikbyteos");
    expect(project).toBeDefined();

    const sections = getProjectDetailSections(project!);

    expect(sections.map((section) => section.title)).toEqual([
      "Problem",
      "Approach",
      "Architecture",
      "Outcome",
    ]);
  });
});