import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)] py-10 sm:py-11 lg:py-12">
      <Container className="space-y-6 sm:space-y-7" size="wide">
        <SectionHeader
          eyebrow={intro.eyebrow}
          size="supporting"
          title={intro.title}
        />

        <div className="grid w-full gap-4 md:grid-cols-[1.04fr,0.96fr] lg:gap-5">
          {assets.map((asset) => (
            <MediaCard
              key={asset.id}
              asset={asset}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
