import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProjectInspectionModal } from "./ProjectInspectionModal";
import type { ProjectInspectionDetail } from "./project.types";

const inspectionFixture: ProjectInspectionDetail = {
  overview: "System overview.",
  architecture: "CLI core → evidence → policy gate.",
  problemContext: "Signals were fragmented across tools.",
  impact: "Release decisions became easier to inspect.",
  decisions: [
    {
      title: "CLI-first",
      reason: "Fits developer workflows.",
      benefit: "Improves adoption speed.",
    },
  ],
  tradeOffs: [
    {
      title: "Small scope",
      gain: "Faster validation.",
      cost: "Less early coverage.",
    },
  ],
};

describe("ProjectInspectionModal", () => {
  it("does not render when closed", () => {
    render(
      <ProjectInspectionModal
        title="BrikByteOS"
        inspection={inspectionFixture}
        isOpen={false}
        onClose={vi.fn()}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders accessible dialog when open", () => {
    render(
      <ProjectInspectionModal
        title="BrikByteOS"
        inspection={inspectionFixture}
        isOpen
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("BrikByteOS Deep Inspection")).toBeInTheDocument();
  });

  it("closes when Escape is pressed", () => {
    const onClose = vi.fn();

    render(
      <ProjectInspectionModal
        title="BrikByteOS"
        inspection={inspectionFixture}
        isOpen
        onClose={onClose}
      />,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes when overlay is clicked", () => {
    const onClose = vi.fn();

    render(
      <ProjectInspectionModal
        title="BrikByteOS"
        inspection={inspectionFixture}
        isOpen
        onClose={onClose}
      />,
    );

    fireEvent.mouseDown(screen.getByRole("dialog").parentElement!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});