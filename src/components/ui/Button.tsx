import { forwardRef } from "react";

import { classNames } from "../../lib/classNames";
import { buttonVariants } from "../../lib/uiVariants";

/**
 * Supported visual variants for the Button primitive.
 */
export type ButtonVariant = keyof typeof buttonVariants.variant;

/**
 * Supported size variants for the Button primitive.
 */
export type ButtonSize = keyof typeof buttonVariants.size;

/**
 * Props for the Button primitive.
 *
 * Responsibilities:
 * - Render an accessible button control by default
 * - Provide bounded visual emphasis variants
 * - Provide bounded size options
 * - Allow safe className extension without breaking the base contract
 *
 * Out of scope:
 * - link rendering
 * - loading states
 * - async business logic
 * - icon-only rules beyond ordinary composition
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual treatment of the button.
   *
   * Defaults to "primary".
   */
  variant?: ButtonVariant;

  /**
   * Size preset for spacing and text sizing.
   *
   * Defaults to "md".
   */
  size?: ButtonSize;
}

/**
 * Canonical Button primitive.
 *
 * Accessibility notes:
 * - Renders a real <button> element
 * - Preserves native keyboard and disabled behavior
 * - Uses visible focus styles for keyboard navigation
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classNames(
          "inline-flex items-center justify-center gap-2 rounded-[var(--radius-panel-md)]",
          "font-medium transition duration-200 ease-out",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
          "disabled:cursor-not-allowed disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className,
        )}
        {...props}
      />
    );
  },
);