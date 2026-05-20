import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-frame">
      <Container className="py-16 sm:py-20">
        <div className="space-y-8">
          <SectionHeader
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {assets.map((asset) => (
              <MediaCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
