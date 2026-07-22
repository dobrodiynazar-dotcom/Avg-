import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)] py-12 sm:py-14 lg:py-16">
      <Container className="space-y-7 sm:space-y-8" size="wide">
        <h2 className="mx-auto max-w-[54rem] text-center text-balance text-[clamp(1.625rem,3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.03rem] text-[var(--color-ink)]">
          {intro.title}
        </h2>

        <div className="mx-auto grid max-w-[60rem] gap-4 md:grid-cols-2 xl:grid-cols-[1.1fr,0.9fr,0.9fr]">
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
