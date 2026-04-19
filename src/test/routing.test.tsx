import { MemoryRouter, Route, Routes } from "react-router";
import { render, screen } from "./test-utils";
import { HomePage } from "../pages/HomePage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";

/**
 * Routing baseline tests.
 *
 * These tests validate:
 * - home route rendering
 * - project detail route rendering with a known id
 * - bounded fallback behavior for unknown ids
 */
describe("routing baseline", () => {
  it("renders the home route successfully", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /canonical routing baseline is operational/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders the project detail route for a known id", () => {
    render(
      <MemoryRouter initialEntries={["/projects/brikbyteos"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /brikbyteos/i, level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/release intelligence operating system/i)).toBeInTheDocument();
  });

  it("renders a bounded fallback for an unknown id", () => {
    render(
      <MemoryRouter initialEntries={["/projects/unknown-project"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /unknown project route/i, level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getByText(/project route not found/i)).toBeInTheDocument();
  });
});