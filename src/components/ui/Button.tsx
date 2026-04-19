import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type JSX,
  type ReactNode,
  type Ref,
} from "react";

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
 * Shared visual props for button-like controls.
 *
 * Purpose:
 * - Keep the visual contract identical for both button and anchor rendering
 * - Avoid duplicating style-related props across the two render modes
 */
interface ButtonBaseProps {
  /**
   * Visual treatment of the control.
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

  /**
   * Optional additional class names.
   */
  className?: string;

  /**
   * Rendered child content.
   */
  children?: ReactNode;
}

/**
 * Native button rendering mode.
 *
 * Responsibilities:
 * - Support standard interactive button behavior
 * - Preserve native keyboard and disabled semantics
 */
type NativeButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

/**
 * Anchor rendering mode.
 *
 * Responsibilities:
 * - Support semantic navigation when the control is a link
 * - Prevent invalid nested interactive markup
 *
 * Notes:
 * - `disabled` is intentionally not supported for anchors because
 *   anchors do not have native disabled behavior.
 */
type AnchorButtonProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    disabled?: never;
    type?: never;
  };

/**
 * Union of supported button props.
 *
 * Behavior:
 * - if `href` exists, render an anchor
 * - otherwise, render a button
 */
export type ButtonProps = NativeButtonProps | AnchorButtonProps;

/**
 * Canonical Button primitive.
 *
 * Accessibility notes:
 * - Renders a real <button> by default
 * - Renders a real <a> when `href` is provided
 * - Preserves correct semantics for actions vs navigation
 * - Uses visible focus styles in both modes
 *
 * Design notes:
 * - This stays intentionally bounded
 * - It does not implement `asChild`
 * - It does not attempt to become a generic polymorphic component system
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
  },
  ref,
): JSX.Element {
  const classes = classNames(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-panel-md)]",
    "font-medium transition duration-200 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    className,
  );

  /**
   * Anchor mode.
   *
   * Use for navigation targets such as:
   * - in-page hash links
   * - internal routes
   * - external URLs
   */
  if ("href" in props && typeof props.href === "string") {
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  /**
   * Native button mode.
   *
   * Use for:
   * - click handlers
   * - form actions
   * - local UI actions
   */
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={props.type ?? "button"}
      className={classNames(
        classes,
        props.disabled ? "cursor-not-allowed opacity-50" : "",
      )}
      {...props}
    >
      {children}
    </button>
  );
});