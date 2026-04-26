import { describe, expect, it } from "vitest";

import { CREDENTIALS } from "./credential.data";

describe("CREDENTIALS", () => {
  it("includes certifications inside the credential stack", () => {
    expect(
      CREDENTIALS.some((credential) => credential.type === "CERTIFICATION"),
    ).toBe(true);
  });

  it("does not use fake verification placeholders", () => {
    for (const credential of CREDENTIALS) {
      expect(credential.verificationHref).not.toBe("#");
      expect(credential.title.toLowerCase()).not.toContain("coming soon");
    }
  });

  it("keeps provider names visible", () => {
    for (const credential of CREDENTIALS) {
      expect(credential.institution.trim().length).toBeGreaterThan(0);
    }
  });
});