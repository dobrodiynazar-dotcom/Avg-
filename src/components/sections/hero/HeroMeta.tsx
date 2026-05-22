import type { HighlightItem } from "@/types/content";

import { Container } from "@/components/ui";

type HeroMetaProps = {
  description: string;
  eyebrow: string;
  highlights: HighlightItem[];
};

export function HeroMeta({ description, eyebrow, highlights }: HeroMetaProps) {
  return (
    <Container
      className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[0.7fr,1.3fr] lg:py-12"
      size="wide"
    >
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
        <p className="max-w-[20rem] text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">
          {description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <article key={highlight.title} className="border-t border-[rgb(255_255_255_/_0.12)] pt-4">
            <p className="text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">
              {highlight.title}
            </p>
            <p className="mt-3 text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
              {highlight.description}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
