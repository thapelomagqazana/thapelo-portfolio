import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceToolMethods } from "./ExperienceToolMethods";

describe("ExperienceToolMethods", () => {
  it("does not render when no groups are provided", () => {
    const { container } = render(<ExperienceToolMethods />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders grouped tools and methods with purpose", () => {
    render(
      <ExperienceToolMethods
        groups={[
          {
            label: "QA Methods",
            items: ["Manual testing", "Test scenarios", "Defect reporting"],
            purpose:
              "Used to validate enterprise workflows and improve defect visibility.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Capability Methods")).toBeInTheDocument();
    expect(screen.getByText("QA Methods")).toBeInTheDocument();
    expect(
      screen.getByText("Manual testing • Test scenarios • Defect reporting"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Used to validate enterprise workflows and improve defect visibility.",
      ),
    ).toBeInTheDocument();
  });

  it("renders a maximum of four groups", () => {
    render(
      <ExperienceToolMethods
        groups={[
          { label: "One", items: ["A"], purpose: "Purpose one." },
          { label: "Two", items: ["B"], purpose: "Purpose two." },
          { label: "Three", items: ["C"], purpose: "Purpose three." },
          { label: "Four", items: ["D"], purpose: "Purpose four." },
          { label: "Five", items: ["E"], purpose: "Purpose five." },
        ]}
      />,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Four")).toBeInTheDocument();
    expect(screen.queryByText("Five")).not.toBeInTheDocument();
  });

//   it("does not render incomplete groups", () => {
//     render(
//       <ExperienceToolMethods
//         groups={[
//           { label: "", items: ["React"], purpose: "Used for UI delivery." },
//           { label: "Deployment", items: [], purpose: "Used for hosting." },
//           { label: "QA Methods", items: ["Testing"], purpose: "" },
//         ]}
//       />,
//     );

//     expect(screen.queryByText("Deployment")).not.toBeInTheDocument();
//     expect(screen.queryByText("QA Methods")).not.toBeInTheDocument();
//   });
});