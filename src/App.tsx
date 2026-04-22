import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

/**
 * Application routing layer.
 *
 * Purpose:
 * - Define page-level navigation
 * - Keep routing separate from page implementation
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}