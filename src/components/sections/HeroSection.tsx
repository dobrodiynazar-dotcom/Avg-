import type {
  AcademyInfo,
  ContactChannel,
  HeroBackgroundMedia,
  HeroPreview,
  HighlightItem,
  StatItem,
  VisualTile,
} from "@/types/content";

import { Container } from "@/components/ui";

import { HeroActions } from "@/components/sections/hero/HeroActions";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroCopy } from "@/components/sections/hero/HeroCopy";
import { HeroMediaFrame } from "@/components/sections/hero/HeroMediaFrame";
import { HeroMeta } from "@/components/sections/hero/HeroMeta";
import { HeroStats } from "@/components/sections/hero/HeroStats";

type HeroSectionProps = {
  academy: AcademyInfo;
  backgroundMedia: HeroBackgroundMedia;
  contactChannels: ContactChannel[];
  content: {
    title: string;
  };
  highlights: HighlightItem[];
  meta: {
    eyebrow: string;
    description: string;
  };
  stats: StatItem[];
  preview: HeroPreview;
  visuals: VisualTile[];
};

export function HeroSection({
  academy,
  backgroundMedia,
  contactChannels,
  content,
  highlights,
  meta,
  preview,
  stats,
  visuals,
}: HeroSectionProps) {
  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)]">
      <div className="cinema-hero-shell">
        <HeroBackground media={backgroundMedia} />
        <Container className="relative flex min-h-[inherit] flex-col justify-end py-10 sm:py-14 lg:py-18" size="wide">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="max-w-[42rem] space-y-6 sm:space-y-8">
              <HeroCopy
                heroLabel={academy.heroLabel}
                locationLabel={academy.locationLabel}
                title={content.title}
              />
              <HeroActions contactChannels={contactChannels} />
              <HeroStats stats={stats} />
            </div>

            <HeroMediaFrame preview={preview} visuals={visuals} />
          </div>
        </Container>
      </div>

      <HeroMeta
        description={meta.description}
        eyebrow={meta.eyebrow}
        highlights={highlights}
      />
    </section>
  );
}
