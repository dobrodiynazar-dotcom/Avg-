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
    "border border-[var(--color-hairline)] bg-[var(--color-surface-2)]",
  lifted:
    "border border-[var(--color-hairline)] bg-[var(--color-canvas)]",
  subtle:
    "border border-[var(--color-hairline)] bg-[var(--color-surface-1)]",
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
        "relative overflow-hidden",
        "rounded-[var(--radius-md)]",
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
