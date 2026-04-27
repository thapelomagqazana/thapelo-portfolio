import { Route, Routes } from "react-router-dom";

import { AppShell } from "./components/app/AppShell";
import { HomePage } from "./pages/HomePage";

/**
 * Application routing layer.
 *
 * Purpose:
 * - Define page-level navigation.
 * - Keep routing separate from page implementation.
 * - Apply global portfolio shell for theme and UI/Terminal mode.
 */
export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppShell>
  );
}