import {
  getStatusPresentation,
  normalizeStatus,
} from "../lib/status";

/**
 * Status normalization tests.
 *
 * These tests validate:
 * - canonical normalization behavior
 * - presentation lookup correctness
 */
describe("status normalization", () => {
  it("normalizes PASS-like inputs", () => {
    expect(normalizeStatus("pass")).toBe("PASS");
    expect(normalizeStatus("PASSED")).toBe("PASS");
    expect(normalizeStatus("success")).toBe("PASS");
  });

  it("normalizes WARN-like inputs", () => {
    expect(normalizeStatus("warn")).toBe("WARN");
    expect(normalizeStatus("warning")).toBe("WARN");
  });

  it("normalizes FAIL-like inputs", () => {
    expect(normalizeStatus("fail")).toBe("FAIL");
    expect(normalizeStatus("failed")).toBe("FAIL");
    expect(normalizeStatus("error")).toBe("FAIL");
  });

  it("returns presentation metadata for canonical status", () => {
    expect(getStatusPresentation("PASS").tone).toBe("success");
    expect(getStatusPresentation("WARN").tone).toBe("warning");
    expect(getStatusPresentation("FAIL").tone).toBe("danger");
  });

  it("throws for unsupported values", () => {
    expect(() => normalizeStatus("unknown")).toThrow(
      /unsupported status value/i,
    );
  });
});