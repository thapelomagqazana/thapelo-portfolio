import type { ElementType, HTMLAttributes, ReactNode, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { isHeadingTag, type TypographyVariant } from "../../lib/typography";
import { textVariants } from "../../lib/uiVariants";

/**
 * Props for the canonical Text primitive.
 *
 * Responsibilities:
 * - Apply typography variants consistently
 * - Preserve semantic HTML through the `as` prop
 * - Keep text rendering reusable across all features
 *
 * Accessibility notes:
 * - Callers are responsible for correct heading order in page composition
 * - This primitive does not auto-correct semantic misuse
 * - It supports semantic rendering and bounded visual variants only
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * Underlying element to render.
   *
   * Examples:
   * - "h1"
   * - "h2"
   * - "p"
   * - "span"
   *
   * Defaults to "p".
   */
  as?: ElementType;

  /**
   * Canonical typography variant.
   *
   * Defaults to "body".
   */
  variant?: TypographyVariant;

  /**
   * Rendered content.
   */
  children: ReactNode;
}

/**
 * Canonical Text primitive.
 *
 * Design goals:
 * - One reusable typography entry point for the app
 * - Bounded, explicit variant system
 * - Semantic flexibility without feature coupling
 */
export function Text({
  as: Component = "p",
  variant = "body",
  className,
  children,
  ...props
}: TextProps): JSX.Element {
  /**
   * Helpful development warning for obvious semantic mismatches.
   *
   * This avoids silently encouraging patterns like:
   * - as="p" with variant="h1"
   * - as="h1" with variant="caption"
   *
   * The warning is non-blocking because some rare compositions can still be valid.
   */
  if (import.meta.env.DEV) {
    const componentName =
      typeof Component === "string" ? Component : "custom-component";

    const headingVariant = variant === "h1" || variant === "h2" || variant === "h3";
    const headingElement = typeof Component === "string" && isHeadingTag(Component);

    if (headingVariant && typeof Component === "string" && !headingElement) {
      console.warn(
        `[Text] Heading variant "${variant}" is being rendered as "${componentName}". ` +
          `Prefer semantic heading tags for heading variants.`,
      );
    }

    if (!headingVariant && typeof Component === "string" && headingElement) {
      console.warn(
        `[Text] Semantic heading "${componentName}" is using non-heading variant "${variant}". ` +
          `Confirm this is intentional.`,
      );
    }
  }

  return (
    <Component
      className={classNames(textVariants.variant[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}