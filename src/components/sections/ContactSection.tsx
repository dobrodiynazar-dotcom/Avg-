import type { ContactChannel, ContactPreview, SectionIntro } from "@/types/content";

import { ContactCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type ContactSectionProps = {
  intro: SectionIntro;
  channels: ContactChannel[];
  preview: ContactPreview;
};

export function ContactSection({ intro, channels, preview }: ContactSectionProps) {
  return (
    <section className="section-frame">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start" size="wide">
        <div className="space-y-8">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <ContactCard key={channel.key} channel={channel} />
            ))}
          </div>
        </div>

        <article className="cinema-image-dark min-h-[28rem] border border-[rgb(255_255_255_/_0.08)]">
          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="w-fit border border-[rgb(255_255_255_/_0.16)] bg-[rgb(24_24_24_/_0.42)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] backdrop-blur-sm">
              {preview.eyebrow}
            </div>

            <div className="max-w-[24rem] space-y-4">
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.05rem] text-[var(--color-ink)]">
                {preview.title}
              </h3>
              <p className="text-[0.875rem] leading-7 text-[rgb(255_255_255_/_0.74)]">
                {preview.description}
              </p>
              <div className="border border-[rgb(255_255_255_/_0.12)] bg-[rgb(24_24_24_/_0.5)] px-4 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
                {preview.placeholderLabel}
              </div>
              <ul className="space-y-3">
                {preview.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-[0.8125rem] leading-6 text-[var(--color-ink-muted)]">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 bg-[var(--color-primary)]"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
