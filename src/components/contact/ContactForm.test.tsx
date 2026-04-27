import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("renders required contact fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("shows submitting and success feedback", async () => {
    render(
        <ContactForm
            onSubmitMessage={() => Promise.resolve()}
        />,
    );

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Thapelo" },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello there." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button")).toHaveTextContent("Sending...");

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(
        "Message sent successfully",
      );
    });
  });

  it("prevents double submission while submitting", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Thapelo" },
    });

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello there." },
    });

    const button = screen.getByRole("button", { name: /send message/i });

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});