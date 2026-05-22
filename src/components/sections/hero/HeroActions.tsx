import type { ContactChannel } from "@/types/content";

import { CTAGroup } from "@/components/ui";

type HeroActionsProps = {
  contactChannels: ContactChannel[];
};

export function HeroActions({ contactChannels }: HeroActionsProps) {
  return <CTAGroup items={contactChannels} />;
}
