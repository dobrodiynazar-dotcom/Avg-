import type { ContactChannel, SectionIntro } from "@/types/content";

import { ContactCard } from "@/components/domain";
import { Card, Container, SectionHeader } from "@/components/ui";

type ContactSectionProps = {
  intro: SectionIntro;
  channels: ContactChannel[];
};

export function ContactSection({ intro, channels }: ContactSectionProps) {
  return (
    <section id="contact" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <div className="grid gap-5 xl:grid-cols-[1.1fr,0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {channels.map((channel) => (
                <ContactCard key={channel.key} channel={channel} />
              ))}
            </div>
            <Card
              className="flex min-h-[22rem] flex-col justify-between"
              padding="lg"
              variant="lifted"
            >
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.4px] text-[var(--color-ink-subtle)]">
                  Карта та локація
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  Блок для Google Maps та фінальної адреси вже передбачений.
                </h3>
                <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                  На Milestone 4 сюди можна буде підставити реальну адресу, карту й логіку прямих
                  контактних переходів.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-[var(--radius-xl)] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] p-4">
                <div className="flex h-full items-center justify-center rounded-[calc(var(--radius-xl)-2px)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] text-sm text-[var(--color-ink-subtle)]">
                  Google Maps placeholder
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
