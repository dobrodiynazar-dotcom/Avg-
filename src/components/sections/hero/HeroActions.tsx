import type { ContactChannel } from "@/types/content";

import { CTAGroup } from "@/components/ui";

type HeroActionsProps = {
  contactChannels: ContactChannel[];
  className?: string;
  signupTrackingLocation?: string;
};

export function HeroActions({
  contactChannels,
  className,
  signupTrackingLocation,
}: HeroActionsProps) {
  return (
    <CTAGroup
      className={className}
      items={contactChannels}
      signupTrackingLocation={signupTrackingLocation}
    />
  );
}
