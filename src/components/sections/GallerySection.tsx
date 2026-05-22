import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="section-frame border-b border-[rgb(255_255_255_/_0.08)]">
      <Container className="space-y-10" size="wide">
        <div className="grid gap-6 lg:grid-cols-[0.6fr,1.4fr] lg:items-end">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            eyebrowTone="muted"
            size="supporting"
            title={intro.title}
          />
          <p className="max-w-[36rem] text-[0.875rem] leading-7 text-[var(--color-ink-muted)] lg:justify-self-end">
            The gallery now reads as one directed visual feed: a lead frame first, then supporting cuts with lighter caption treatment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[1.15fr,0.85fr,0.85fr]">
          {assets.map((asset, index) => (
            <MediaCard
              key={asset.id}
              asset={asset}
              featured={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
