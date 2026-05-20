import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type CardVariant = "default" | "lifted" | "subtle";
type CardPadding = "sm" | "md" | "lg";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
};

const variantClassMap: Record<CardVariant, string> = {
  default:
    "border border-[var(--color-hairline)] bg-[var(--color-surface-1)]",
  lifted:
    "border border-[var(--color-hairline-strong)] bg-[var(--color-surface-2)]",
  subtle:
    "border border-[var(--color-hairline)]/80 bg-[color:color-mix(in_srgb,var(--color-surface-1)_76%,transparent)]",
};

const paddingClassMap: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  padding = "md",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-[inherit] before:bg-white/8 before:content-['']",
        "relative overflow-hidden",
        variantClassMap[variant],
        paddingClassMap[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
