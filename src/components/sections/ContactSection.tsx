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
      <Container className="py-2 sm:py-4">
        <div className="grid gap-5 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-canvas)] p-6 sm:p-8">
            <SectionHeader
              description={intro.description}
              eyebrow={intro.eyebrow}
              size="feature"
              title={intro.title}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {channels.map((channel) => (
                <ContactCard key={channel.key} channel={channel} />
              ))}
            </div>
          </div>

          <article className="pin-card-shell pin-card-large">
            <div className="pin-image-fill aspect-[4/5]">
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="w-fit rounded-full bg-[var(--color-canvas)] px-3 py-1 text-[12px] font-bold text-[var(--color-ink)]">
                  {preview.eyebrow}
                </div>

                <div className="rounded-[var(--radius-md)] bg-[rgb(255_255_255_/_0.76)] p-5 backdrop-blur-sm">
                  <h3 className="text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.04rem] text-[var(--color-ink)]">
                    {preview.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-subtle)]">
                    {preview.description}
                  </p>
                  <div className="mt-4 rounded-[var(--radius-md)] bg-[var(--color-surface-2)] px-4 py-5 text-center text-sm text-[var(--color-ink-subtle)]">
                    {preview.placeholderLabel}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-subtle)]">
                    {preview.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
