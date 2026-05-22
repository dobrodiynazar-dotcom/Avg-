import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
  size?: "feature" | "supporting";
  eyebrowTone?: "accent" | "muted";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
  size = "supporting",
  eyebrowTone = "accent",
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isFeature = size === "feature";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.14em]",
            isCentered && "self-center",
            eyebrowTone === "accent"
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-ink-subtle)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <div className={cn("space-y-4", isFeature ? "max-w-[48rem]" : "max-w-[40rem]")}>
        <h2
          className={cn(
            "text-balance text-[var(--color-ink)]",
            isFeature
              ? "text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.07rem] font-medium"
              : "text-[clamp(1.625rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.03rem] font-medium",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[42rem] text-pretty",
              isFeature
                ? "text-[0.95rem] leading-7 text-[var(--color-ink-muted)]"
                : "text-[0.875rem] leading-7 text-[var(--color-ink-muted)]",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
