import type { ContactChannel } from "@/types/content";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

type CTAGroupProps = {
  items: ContactChannel[];
  className?: string;
};

export function CTAGroup({ items, className }: CTAGroupProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      {items.map((item) => {
        const opensNewTab = item.external && !item.href.startsWith("#");

        return (
          <Button
            key={item.key}
            href={item.href}
            rel={opensNewTab ? "noreferrer" : undefined}
            target={opensNewTab ? "_blank" : undefined}
            variant={item.variant}
          >
            {item.ctaLabel ?? item.label}
          </Button>
        );
      })}
    </div>
  );
}
