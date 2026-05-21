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
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] focus-visible:outline-[var(--color-primary-focus)]",
  secondary:
    "border border-transparent bg-[var(--color-surface-3)] text-[var(--color-on-secondary)] hover:bg-[var(--color-hairline-strong)] focus-visible:outline-[var(--color-primary-focus)]",
  tertiary:
    "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] focus-visible:outline-[var(--color-primary-focus)]",
  inverse:
    "bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] focus-visible:outline-[var(--color-primary-focus)]",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "min-h-10 px-3.5 py-2 text-[12px]",
  md: "min-h-10 px-3.5 py-2 text-[14px]",
  lg: "min-h-11 px-4 py-2.5 text-[14px]",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-[var(--radius-md)] font-bold tracking-[0] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

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
