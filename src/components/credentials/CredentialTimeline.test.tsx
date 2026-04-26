import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CredentialTimeline } from "./CredentialTimeline";
import type { CredentialEntry } from "./credential.types";

const credentials: readonly CredentialEntry[] = [
  {
    id: "mict-seta-systems-development",
    title: "NQF 5: Information Technology — Systems Development",
    institution: "MICT SETA",
    period: "Certified",
    status: "CERTIFIED",
    type: "CERTIFICATION",
    credentialId: "IS/LA/ETQA/427059",
    verificationHref: "https://example.com/verify",
    description:
      "Validates foundational software development, programming, testing processes, and systems development capability.",
  },
];

describe("CredentialTimeline", () => {
  it("renders certification as part of the credential stack", () => {
    render(<CredentialTimeline credentials={credentials} />);

    expect(screen.getAllByText(/Certified/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Certification/i)).toBeInTheDocument();
    expect(screen.getByText("MICT SETA")).toBeInTheDocument();
    expect(
      screen.getByText("NQF 5: Information Technology — Systems Development"),
    ).toBeInTheDocument();
  });

  it("renders credential ID when available", () => {
    render(<CredentialTimeline credentials={credentials} />);

    expect(screen.getByText(/Credential ID:/i)).toBeInTheDocument();
    expect(screen.getByText("IS/LA/ETQA/427059")).toBeInTheDocument();
  });

  it("uses safe attributes for verification links", () => {
    render(<CredentialTimeline credentials={credentials} />);

    const link = screen.getByRole("link", {
      name: /verify.*opens in a new tab/i,
    });

    expect(link).toHaveAttribute("href", "https://example.com/verify");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render verification controls when no verification data exists", () => {
    render(
      <CredentialTimeline
        credentials={[
          {
            id: "wethinkcode-systems-development",
            title: "Systems Development Program",
            institution: "WeThinkCode",
            period: "2022 — 2024",
            status: "COMPLETED",
            type: "PROGRAM",
          },
        ]}
      />,
    );

    expect(screen.queryByText(/Credential ID:/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /verify/i })).not.toBeInTheDocument();
  });
});