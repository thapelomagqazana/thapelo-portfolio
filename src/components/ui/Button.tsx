import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { classNames } from "../../lib/classNames";

/**
 * Supported visual variants for the canonical button primitive.
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonBaseProps {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string;
}

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never;
  };

type AnchorButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
    readonly type?: never;
  };

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

/**
 * Type guard for anchor-style button props.
 */
function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof props.href === "string";
}

/**
 * Canonical action button for the portfolio system UI.
 *
 * Responsibilities:
 * - Render a consistent CTA primitive
 * - Support both anchor and native button modes
 * - Preserve accessibility and predictable interaction behavior
 */
export function Button(props: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] px-5 py-3 text-sm font-semibold transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900";

  const variantClasses =
    props.variant === "primary"
      ? "bg-linear-to-r from-accent-cyan via-accent-blue to-accent-violet text-bg-900 shadow-[0_0_0_1px_rgba(61,220,255,0.18),0_0_24px_rgba(61,220,255,0.12)] hover:-translate-y-0.5 active:translate-y-0"
      : props.variant === "secondary"
      ? "border border-border-strong bg-bg-850/70 text-text-primary shadow-[var(--shadow-panel-quiet)] hover:-translate-y-0.5 hover:border-border-active hover:bg-bg-800/80 active:translate-y-0"
      : "border border-transparent bg-transparent text-text-secondary hover:-translate-y-0.5 hover:text-text-primary active:translate-y-0";

  const classes = classNames(baseClasses, variantClasses, props.className);

  /**
   * Anchor variant
   */
  if (isAnchorButtonProps(props)) {
    const { children, variant, className, href, ...anchorProps } = props;

    // mark intentionally unused (prevents eslint noise)
    void variant;
    void className;

    return (
      <a {...anchorProps} href={href} className={classes}>
        {children}
      </a>
    );
  }

  /**
   * Native button variant
   */
  const { children, variant, className, type, ...buttonProps } = props;

  // mark intentionally unused
  void variant;
  void className;

  return (
    <button {...buttonProps} className={classes} type={type ?? "button"}>
      {children}
    </button>
  );
}