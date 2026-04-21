import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "./test-utils";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";

describe("ProjectDetailPage", () => {
  it("renders the detail page for a valid project id", () => {
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

    expect(
      screen.getByRole("heading", { name: /problem/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /approach/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /architecture/i, level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /outcome/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders a bounded fallback state for an unknown project id", () => {
    render(
      <MemoryRouter initialEntries={["/projects/unknown-project"]}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /project module not found/i, level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getByText(/requested_id=unknown-project/i)).toBeInTheDocument();
  });
});