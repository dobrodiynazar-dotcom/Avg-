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
          className="group border border-[rgb(255_255_255_/_0.08)] bg-[var(--color-surface-2)] px-5 py-4"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.95rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)]">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="text-[var(--color-ink-subtle)] transition-transform group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="pt-4 text-[0.8125rem] leading-7 text-[var(--color-ink-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
