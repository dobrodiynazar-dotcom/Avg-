import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = LinkProps | NativeButtonProps;

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)]",
  secondary:
    "border border-[rgb(255_255_255_/_0.3)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[rgb(255_255_255_/_0.04)]",
  tertiary:
    "border border-transparent bg-transparent text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
  inverse:
    "border border-[var(--color-hairline-strong)] bg-[var(--color-inverse-canvas)] text-[var(--color-inverse-ink)] hover:bg-[var(--color-inverse-surface-1)]",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2.5 text-[12px]",
  md: "min-h-12 px-5 py-3 text-[14px]",
  lg: "min-h-12 px-8 py-3 text-[14px]",
};

const baseClassName =
  "inline-flex items-center justify-center whitespace-nowrap border text-center font-bold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary-focus)] disabled:pointer-events-none disabled:opacity-60";

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
    ...rest
  } = props;

  const composedClassName = cn(
    baseClassName,
    sizeClassMap[size],
    variantClassMap[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as Omit<LinkProps, keyof SharedProps>;

    return (
      <a className={composedClassName} href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={composedClassName}
      type="button"
      {...(rest as Omit<NativeButtonProps, keyof SharedProps>)}
    >
      {children}
    </button>
  );
}
