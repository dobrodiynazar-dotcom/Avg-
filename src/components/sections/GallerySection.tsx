import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="section-frame">
      <Container className="py-6 sm:py-8">
        <div className="space-y-8">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            eyebrowTone="muted"
            size="supporting"
            title={intro.title}
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
