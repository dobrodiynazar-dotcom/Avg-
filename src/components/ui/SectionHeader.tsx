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
        "flex flex-col gap-4",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.75rem] font-medium uppercase tracking-[0.18em]",
            eyebrowTone === "accent"
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-ink-subtle)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <div className={cn("space-y-3", isFeature ? "max-w-[48rem]" : "max-w-[40rem]")}>
        <h2
          className={cn(
            "text-balance font-semibold text-[var(--color-ink)]",
            isFeature
              ? "text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.05em]"
              : "text-[clamp(1.625rem,3vw,2.35rem)] leading-[1.12] tracking-[-0.04em]",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "text-pretty text-[var(--color-ink-muted)]",
              isFeature
                ? "text-base leading-7 sm:text-lg sm:leading-8"
                : "text-[0.97rem] leading-7 sm:text-base sm:leading-7",
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
