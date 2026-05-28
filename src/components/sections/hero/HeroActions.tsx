import type { ContactChannel } from "@/types/content";

import { CTAGroup } from "@/components/ui";

type HeroActionsProps = {
  contactChannels: ContactChannel[];
  className?: string;
};

export function HeroActions({ contactChannels, className }: HeroActionsProps) {
  return <CTAGroup className={className} items={contactChannels} />;
}
