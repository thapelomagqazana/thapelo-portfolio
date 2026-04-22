import { Button } from "../ui/Button";

/**
 * Props for hero action rendering.
 */
export interface HeroSystemActionsProps {
  readonly primaryLabel: string;
  readonly primaryHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
}

/**
 * Hero CTA group.
 *
 * Responsibilities:
 * - Present the two primary next-step actions required by the landing story.
 * - Preserve a clear primary/secondary hierarchy.
 * - Remain responsive and readable on mobile and desktop.
 */
export function HeroSystemActions({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: HeroSystemActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href={primaryHref} variant="primary" aria-label={primaryLabel}>
        {primaryLabel}
      </Button>

      <Button href={secondaryHref} variant="secondary" aria-label={secondaryLabel}>
        {secondaryLabel}
      </Button>
    </div>
  );
}