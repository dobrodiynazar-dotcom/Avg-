import Image from "next/image";

import type { FeatureMediaPanel, HighlightItem, SectionIntro } from "@/types/content";

import { Container, SectionHeader } from "@/components/ui";

type AboutSectionProps = {
  featureMedia: FeatureMediaPanel;
  intro: SectionIntro;
  pillars: HighlightItem[];
};

export function AboutSection({ featureMedia, intro, pillars }: AboutSectionProps) {
  return (
    <section className="section-frame border-b border-[rgb(255_255_255_/_0.08)]">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-stretch" size="wide">
        <article className="space-y-8">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            size="feature"
            title={intro.title}
          />

          <div className="space-y-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-[rgb(255_255_255_/_0.12)] pt-4">
                <p className="text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)]">
                  {pillar.title}
                </p>
                <p className="mt-3 max-w-[32rem] text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="cinema-image-soft relative min-h-[24rem] overflow-hidden rounded-[var(--radius-card-lg)] border border-[rgb(255_255_255_/_0.08)]">
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={featureMedia.imageSrc}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="w-fit rounded-[var(--radius-badge)] border border-[rgb(255_255_255_/_0.16)] bg-[rgb(24_24_24_/_0.4)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] backdrop-blur-sm">
              {featureMedia.eyebrow}
            </div>

            <div className="max-w-[18rem] space-y-3">
              <p className="text-[1.5rem] font-medium leading-[1.1] tracking-[-0.04rem] text-[var(--color-ink)]">
                {featureMedia.title}
              </p>
              <p className="text-[0.8125rem] leading-6 text-[rgb(255_255_255_/_0.74)]">
                {featureMedia.description}
              </p>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
