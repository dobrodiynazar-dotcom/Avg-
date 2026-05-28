import {
  AboutSection,
  CoachesSection,
  ContactSection,
  FAQSection,
  GallerySection,
  HeroSection,
  SchedulePreviewSection,
} from "@/components/sections";
import { CTAGroup } from "@/components/ui";
import { coaches, coachesIntro } from "@/content/coaches";
import { faqItems, faqIntro } from "@/content/faq";
import { mediaAssets, mediaIntro } from "@/content/media";
import { plannedSectionIntros } from "@/content/placeholders";
import { schedulePreviewContent, schedulePreviewGroups } from "@/content/schedule";
import {
  aboutFeatureMedia,
  aboutPillars,
  contactChannels,
  contactSectionContent,
  heroBackgroundMedia,
  heroContent,
  heroHighlights,
  heroMeta,
} from "@/content/site";

export default function HomePage() {
  const heroChannels = contactChannels.slice(0, 1);
  const utilityChannels = contactChannels.slice(0, 1);

  return (
    <div>
      <HeroSection
        backgroundMedia={heroBackgroundMedia}
        contactChannels={heroChannels}
        content={heroContent}
        highlights={heroHighlights}
        meta={heroMeta}
      />
      <AboutSection
        featureMedia={aboutFeatureMedia}
        intro={plannedSectionIntros.about}
        pillars={aboutPillars}
      />
      <CoachesSection intro={coachesIntro} coaches={coaches} />
      <SchedulePreviewSection
        content={schedulePreviewContent}
        groups={schedulePreviewGroups}
      />
      <GallerySection intro={mediaIntro} assets={mediaAssets} />
      <FAQSection
        actions={<CTAGroup items={utilityChannels} />}
        intro={faqIntro}
        items={faqItems}
      />
      <ContactSection
        channels={contactChannels}
        intro={contactSectionContent.intro}
        preview={contactSectionContent.preview}
      />
    </div>
  );
}
