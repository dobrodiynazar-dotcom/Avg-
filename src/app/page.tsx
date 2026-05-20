import { pagePlaceholders } from "@/content/placeholders";
import { contactChannels } from "@/content/site";
import { Card, Container, CTAGroup, SectionHeader } from "@/components/ui";

export default function HomePage() {
  const placeholder = pagePlaceholders.home;

  return (
    <div className="py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="site-grid">
          <section className="section-frame px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <SectionHeader
              eyebrow={placeholder.eyebrow}
              title={placeholder.title}
              description={placeholder.summary}
            />
            <div className="mt-8">
              <CTAGroup items={contactChannels} />
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
            <Card variant="default">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-primary)]">
                  Архітектура
                </p>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  Підготовлено каркас App Router, теми, примітивів та маршрутів.
                </h2>
                <p className="max-w-2xl text-[var(--color-ink-muted)]">
                  На цьому етапі сторінка не містить фінальних секцій. Вона фіксує базову
                  структуру, яку далі можна наповнювати реальним контентом без перебудови
                  основи.
                </p>
              </div>
            </Card>
            <Card variant="lifted">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
                  Далі
                </p>
                <ul className="space-y-3 text-sm leading-7 text-[var(--color-ink-muted)]">
                  <li>Наповнення секцій структурованими даними</li>
                  <li>Розробка повного homepage flow</li>
                  <li>Підключення реальних контактів, карти та медіа</li>
                </ul>
              </div>
            </Card>
          </section>
        </div>
      </Container>
    </div>
  );
}
