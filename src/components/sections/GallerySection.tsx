import type { MediaAsset, SectionIntro } from "@/types/content";

import { MediaCard } from "@/components/domain";
import { Container, SectionHeader } from "@/components/ui";

type GallerySectionProps = {
  intro: SectionIntro;
  assets: MediaAsset[];
};

export function GallerySection({ intro, assets }: GallerySectionProps) {
  return (
    <section className="section-frame bg-[var(--color-surface-1)]">
      <Container className="py-2 sm:py-4">
        <div className="space-y-8">
          <SectionHeader
            description={intro.description}
            eyebrow={intro.eyebrow}
            eyebrowTone="muted"
            size="supporting"
            title={intro.title}
          />
          <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
            {assets.map((asset) => (
              <MediaCard key={asset.id} asset={asset} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
