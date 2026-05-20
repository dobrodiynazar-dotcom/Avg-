import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[0.8125rem] font-medium uppercase tracking-[0.4px] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      ) : null}
      <div className="max-w-[48rem] space-y-3">
        <h2 className="text-balance text-[length:var(--type-display-md)] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
          {title}
        </h2>
        {description ? (
          <p className="text-pretty text-[length:var(--type-body-lg)] leading-8 text-[var(--color-ink-muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
