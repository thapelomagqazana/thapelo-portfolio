import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTE_PATHS } from "./routePaths";
import { HomePage } from "../pages/HomePage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import type { JSX } from "react";

/**
 * Canonical application router.
 *
 * Purpose:
 * - Provide one approved routing implementation for the app
 * - Prevent parallel route-definition strategies
 * - Keep baseline route ownership explicit and easy to extend
 *
 * Notes:
 * - This routing baseline intentionally uses a single declarative pattern
 * - Later tasks may introduce shared layout integration, but route ownership
 *   remains centralized here for now
 */
export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<HomePage />} />
        <Route path={ROUTE_PATHS.projectDetail} element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}