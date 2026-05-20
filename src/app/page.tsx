import { CoachesSection, ContactSection, FAQSection, GallerySection, HeroSection, PricingSection, ScheduleSection, AboutSection } from "@/components/sections";
import { coaches, coachesIntro } from "@/content/coaches";
import { faqItems, faqIntro } from "@/content/faq";
import { mediaAssets, mediaIntro } from "@/content/media";
import { plannedSectionIntros } from "@/content/placeholders";
import { pricingIntro, pricingPlans } from "@/content/pricing";
import { scheduleIntro, scheduleSessions } from "@/content/schedule";
import { academyInfo, aboutPillars, contactChannels, contactSectionContent, heroHighlights } from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <HeroSection
        academy={academyInfo}
        contactChannels={contactChannels}
        highlights={heroHighlights}
      />
      <AboutSection intro={plannedSectionIntros.about} pillars={aboutPillars} />
      <CoachesSection intro={coachesIntro} coaches={coaches} />
      <ScheduleSection intro={scheduleIntro} sessions={scheduleSessions} />
      <PricingSection intro={pricingIntro} plans={pricingPlans} />
      <GallerySection intro={mediaIntro} assets={mediaAssets} />
      <ContactSection intro={contactSectionContent.intro} channels={contactChannels} />
      <FAQSection intro={faqIntro} items={faqItems} />
    </div>
  );
}
