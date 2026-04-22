import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { classNames } from "../../lib/classNames";

/**
 * Supported visual variants for the canonical button primitive.
 */
type ButtonVariant = "primary" | "secondary";

/**
 * Shared props for both button and link rendering modes.
 */
interface ButtonBaseProps {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string;
}

/**
 * Native button props.
 */
type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never;
  };

/**
 * Anchor button props.
 */
type AnchorButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
  };

/**
 * Canonical discriminated union for the button primitive.
 *
 * The presence of `href` determines whether the component renders:
 * - an anchor element
 * - a native button element
 */
export type ButtonProps = NativeButtonProps | AnchorButtonProps;

/**
 * Type guard for anchor-style button props.
 *
 * Purpose:
 * - Help TypeScript narrow the union safely before prop spreading
 * - Prevent button-only props from leaking into anchor rendering
 */
function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof props.href === "string";
}

/**
 * Canonical action button for the portfolio system UI.
 *
 * Responsibilities:
 * - Render a single consistent CTA primitive for hero and future sections
 * - Support both anchor and native button modes without duplicating styles
 * - Preserve accessible focus states and predictable interaction behavior
 */
export function Button(props: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[var(--radius-panel-md)] px-5 py-3 text-sm font-semibold transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900";

  const variantClasses =
    props.variant === "primary"
      ? "bg-linear-to-r from-accent-cyan via-accent-blue to-accent-violet text-bg-900 shadow-[0_0_0_1px_rgba(61,220,255,0.18),0_0_24px_rgba(61,220,255,0.12)] hover:-translate-y-0.5"
      : "border border-border-strong bg-bg-850/70 text-text-primary shadow-[var(--shadow-panel-quiet)] hover:-translate-y-0.5 hover:border-border-active hover:bg-bg-800/80";

  const classes = classNames(baseClasses, variantClasses, props.className);

  if (isAnchorButtonProps(props)) {
    const {
      children,
      variant: _variant,
      className: _className,
      href,
      ...anchorProps
    } = props;

    return (
      <a {...anchorProps} href={href} className={classes}>
        {children}
      </a>
    );
  }

  const {
    children,
    variant: _variant,
    className: _className,
    type,
    ...buttonProps
  } = props;

  return (
    <button {...buttonProps} className={classes} type={type ?? "button"}>
      {children}
    </button>
  );
}