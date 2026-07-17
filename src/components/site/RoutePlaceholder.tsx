import { Card, Container, CTAGroup, SectionHeader } from "@/components/ui";
import { pagePlaceholders } from "@/content/placeholders";
import { contactChannels } from "@/content/site";

type PlaceholderRouteKey = keyof typeof pagePlaceholders;

type RoutePlaceholderProps = {
  route: PlaceholderRouteKey;
};

export function RoutePlaceholder({ route }: RoutePlaceholderProps) {
  const placeholder = pagePlaceholders[route];

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="space-y-8">
        <SectionHeader
          description={placeholder.summary}
          eyebrow={placeholder.eyebrow}
          title={placeholder.title}
        />
        <Card className="grid gap-6 sm:grid-cols-2" variant="lifted">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
              Статус
            </p>
            <p className="text-lg leading-8 text-[var(--color-ink-muted)]">
              Цей маршрут поки що лишається тимчасовою сторінкою. Актуальний стан теми вже
              частково відображений на homepage або в інших реалізованих маршрутах.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
              Основні дії
            </p>
            <CTAGroup items={contactChannels.slice(0, 3)} />
          </div>
        </Card>
      </div>
    </Container>
  );
}
