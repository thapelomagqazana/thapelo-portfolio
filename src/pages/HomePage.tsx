import { HeroSystem } from "../components/hero/HeroSystem";

/**
 * Home page entry.
 *
 * Purpose:
 * - Keep page composition thin.
 * - Delegate feature rendering to isolated, tested sections.
 */
export function HomePage() {
  return (
    <main>
      <HeroSystem />
      <section id="active-modules" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-text-primary">
            Active Modules
          </h2>
        </div>
      </section>
    </main>
  );
}