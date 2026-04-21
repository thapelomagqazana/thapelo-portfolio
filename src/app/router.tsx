import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTE_PATHS } from "./routePaths";
import { MainLayout } from "../components/layout-shell";
import { HomePage } from "../pages/HomePage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";

/**
 * Canonical application router.
 *
 * Purpose:
 * - Provide one approved routing implementation for the app
 * - Apply the MainLayout shell consistently across approved routes
 * - Prevent route-by-route duplication of navbar/footer composition
 *
 * Important:
 * - Router provider is mounted at the application root or in tests
 * - This component defines the route tree only
 */
export function AppRouter(): JSX.Element {
  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<HomePage />} />
        <Route path={ROUTE_PATHS.projectDetail} element={<ProjectDetailPage />} />
      </Routes>
    </MainLayout>
  );
}