import Link from "next/link";

import { Container } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { academyInfo, footerContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(255_255_255_/_0.08)] bg-[var(--color-canvas)]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <div className="h-px w-16 bg-[var(--color-primary)]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)]">
              {academyInfo.name}
            </p>
            <p className="max-w-xl text-[0.875rem] leading-7 text-[var(--color-ink-muted)]">
              {footerContent.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[rgb(255_255_255_/_0.08)] pt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-muted)] sm:grid-cols-4 lg:border-t-0 lg:pt-0">
            {primaryNavigation.map((item) => (
              <Link
                key={item.key}
                className="transition-colors hover:text-[var(--color-ink)]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
