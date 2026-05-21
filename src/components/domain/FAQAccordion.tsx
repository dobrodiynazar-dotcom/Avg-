import type { FAQItem } from "@/types/content";

import { cn } from "@/lib/utils/cn";

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          className="group rounded-[var(--radius-md)] bg-[var(--color-canvas)] px-5 py-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium tracking-[-0.01em] text-[var(--color-ink)]">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 text-[var(--color-ink-subtle)] transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pt-4 text-sm leading-7 text-[var(--color-ink-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
