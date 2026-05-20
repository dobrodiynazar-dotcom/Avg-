import type { ContactChannel, ContactPreview, SectionIntro } from "@/types/content";

import { ContactCard } from "@/components/domain";
import { Card, Container, SectionHeader } from "@/components/ui";

type ContactSectionProps = {
  intro: SectionIntro;
  channels: ContactChannel[];
  preview: ContactPreview;
};

export function ContactSection({ intro, channels, preview }: ContactSectionProps) {
  return (
    <section className="section-frame border-t border-[var(--color-hairline)]/70">
      <Container className="py-6 sm:py-8">
        <div className="surface-panel space-y-8 p-6 sm:p-8 lg:p-10">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />
          <div className="grid gap-5 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {channels.map((channel) => (
                <ContactCard key={channel.key} channel={channel} />
              ))}
            </div>

            <Card
              className="flex min-h-[20rem] flex-col justify-between gap-6"
              padding="lg"
              variant="lifted"
            >
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
                  {preview.eyebrow}
                </p>
                <h3 className="text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[var(--color-ink)]">
                  {preview.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-ink-muted)]">
                  {preview.description}
                </p>
              </div>

              <div className="aspect-[4/3] rounded-[var(--radius-xl)] border border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-surface-3)] p-4">
                <div className="flex h-full items-center justify-center rounded-[calc(var(--radius-xl)-2px)] border border-[var(--color-hairline)] bg-[var(--color-surface-2)] px-4 text-center text-sm text-[var(--color-ink-subtle)]">
                  {preview.placeholderLabel}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-[var(--color-ink-subtle)]">
                {preview.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
