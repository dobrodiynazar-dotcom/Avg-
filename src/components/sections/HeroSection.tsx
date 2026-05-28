import type {
  AcademyInfo,
  ContactChannel,
  HeroBackgroundMedia,
  HighlightItem,
} from "@/types/content";

import { Container } from "@/components/ui";

import { HeroActions } from "@/components/sections/hero/HeroActions";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroCopy } from "@/components/sections/hero/HeroCopy";
import { HeroMeta } from "@/components/sections/hero/HeroMeta";

type HeroSectionProps = {
  academy: AcademyInfo;
  backgroundMedia: HeroBackgroundMedia;
  contactChannels: ContactChannel[];
  content: {
    titleLead: string;
    subtitle: string;
    supportingText: string;
    ctaLabel?: string;
  };
  highlights: HighlightItem[];
  meta: {
    eyebrow: string;
    description: string;
  };
};

export function HeroSection({
  academy,
  backgroundMedia,
  contactChannels,
  content,
  highlights,
  meta,
}: HeroSectionProps) {
  const primaryChannel = contactChannels[0]
    ? [
        {
          ...contactChannels[0],
          ctaLabel: content.ctaLabel ?? contactChannels[0].ctaLabel,
        },
      ]
    : [];

  return (
    <section className="border-b border-[rgb(255_255_255_/_0.08)]">
      <div className="cinema-hero-shell">
        <HeroBackground media={backgroundMedia} />
        <Container
          className="relative flex min-h-[max(42rem,100svh)] items-center justify-center py-24 sm:py-28"
          size="wide"
        >
          <div className="mx-auto flex w-full max-w-[52rem] flex-col items-center gap-8 text-center">
            <HeroCopy
              heroLabel={academy.heroLabel}
              locationLabel={academy.locationLabel}
              titleLead={content.titleLead}
              subtitle={content.subtitle}
              supportingText={content.supportingText}
            />
            <HeroActions
              className="justify-center"
              contactChannels={primaryChannel}
            />
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
