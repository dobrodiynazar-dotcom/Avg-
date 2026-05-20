import type { AcademyInfo, ContactChannel } from "@/types/content";

import { Card, Container, CTAGroup } from "@/components/ui";

type HeroSectionProps = {
  academy: AcademyInfo;
  contactChannels: ContactChannel[];
  highlights: string[];
};

export function HeroSection({ academy, contactChannels, highlights }: HeroSectionProps) {
  return (
    <section className="section-frame px-0 py-0">
      <Container className="py-10 sm:py-14 lg:py-18">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-stretch">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-primary)]">
                {academy.locationLabel}
              </p>
              <h1 className="max-w-4xl text-balance">{academy.name}</h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-muted)]">
                Секція героя вже має правильну композицію для реального позиціонування академії,
                ключових CTA та швидкого розуміння напрямку.
              </p>
            </div>
            <CTAGroup items={contactChannels.slice(0, 3)} />
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-1)] px-4 py-4 text-sm text-[var(--color-ink-muted)]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <Card
            className="flex h-full min-h-[22rem] flex-col justify-between"
            padding="lg"
            variant="lifted"
          >
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
                Візуальний блок
              </p>
              <h2 className="text-[length:var(--type-display-md)] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                Місце для головного фото або стриманого відеокадру.
              </h2>
            </div>
            <div className="aspect-[4/3] rounded-[var(--radius-xl)] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] p-5">
              <div className="flex h-full items-end rounded-[calc(var(--radius-xl)-2px)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] p-5">
                <div className="space-y-2">
                  <p className="text-sm text-[var(--color-ink)]">{academy.heroLabel}</p>
                  <p className="text-sm text-[var(--color-ink-subtle)]">
                    Рамка вже підготовлена під реальний медіаактив без декоративних ефектів.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
