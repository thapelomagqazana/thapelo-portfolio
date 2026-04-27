import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactActions } from "./ContactActions";

describe("ContactActions", () => {
  it("renders primary contact action", () => {
    render(
      <ContactActions
        actions={[
          {
            label: "Email Me",
            href: "mailto:thapelo@example.com",
            type: "EMAIL",
            priority: "PRIMARY",
            ariaLabel: "Email Thapelo Magqazana",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("link", { name: /email thapelo magqazana/i }),
    ).toHaveAttribute("href", "mailto:thapelo@example.com");
  });

  it("uses safe attributes for external links", () => {
    render(
      <ContactActions
        actions={[
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/example",
            type: "LINKEDIN",
            priority: "SECONDARY",
            ariaLabel: "Open LinkedIn profile",
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", { name: /linkedin.*new tab/i });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not force mailto links into a new tab", () => {
    render(
      <ContactActions
        actions={[
          {
            label: "Email Me",
            href: "mailto:thapelo@example.com",
            type: "EMAIL",
            priority: "PRIMARY",
            ariaLabel: "Email Thapelo Magqazana",
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", { name: /email thapelo/i });

    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("does not render empty contact actions", () => {
    const { container } = render(
      <ContactActions
        actions={[
          {
            label: "",
            href: "mailto:thapelo@example.com",
            type: "EMAIL",
            priority: "PRIMARY",
            ariaLabel: "Email",
          },
        ]}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});