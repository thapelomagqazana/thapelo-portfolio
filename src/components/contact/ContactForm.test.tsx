import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ContactForm } from "./ContactForm";

/**
 * Fills the contact form with valid data.
 *
 * Purpose:
 * - Reusable test helper.
 * - Keeps tests clean and intention-focused.
 * - Prevents duplication across test cases.
 */
async function fillValidContactForm() {
  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/name/i), "Thapelo Magqazana");
  await user.type(screen.getByLabelText(/email/i), "thapelo@example.com");
  await user.type(
    screen.getByLabelText(/message/i),
    "Hello, I would like to discuss a software opportunity.",
  );

  return user;
}


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

  it("rejects invalid email format before submission", async () => {
    const user = userEvent.setup();
    const onSubmitMessage = vi.fn();

    render(<ContactForm onSubmitMessage={onSubmitMessage} />);

    await user.type(screen.getByLabelText(/name/i), "Thapelo");
    await user.type(screen.getByLabelText(/email/i), "invalid-email");
    await user.type(
      screen.getByLabelText(/message/i),
      "This is a valid length message.",
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(onSubmitMessage).not.toHaveBeenCalled();
    expect(await screen.findByRole("alert")).toHaveTextContent(
      /valid email address/i,
    );
  });

  it("shows success feedback after successful submission", async () => {
    const onSubmitMessage = vi.fn().mockResolvedValue(undefined);

    render(<ContactForm onSubmitMessage={onSubmitMessage} />);

    const user = await fillValidContactForm();

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      /message sent successfully/i,
    );

    expect(onSubmitMessage).toHaveBeenCalledTimes(1);
  });

  it("shows error feedback and fallback path when submission fails", async () => {
    const onSubmitMessage = vi.fn().mockRejectedValue(new Error("Failed"));

    render(<ContactForm onSubmitMessage={onSubmitMessage} />);

    const user = await fillValidContactForm();

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /fallback email option/i,
    );

    expect(
      screen.getByRole("link", { name: /email me directly/i }),
    ).toBeInTheDocument();
  });

  it("prevents double-submit while submission is in progress", async () => {
    let resolveSubmission!: () => void;

    const onSubmitMessage = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveSubmission = resolve;
        }),
    );

    render(<ContactForm onSubmitMessage={onSubmitMessage} />);

    const user = await fillValidContactForm();
    const button = screen.getByRole("button", { name: /send message/i });

    await user.click(button);
    await user.click(button);

    expect(button).toBeDisabled();
    expect(onSubmitMessage).toHaveBeenCalledTimes(1);

    resolveSubmission();

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(
        /message sent successfully/i,
      );
    });
  });
});