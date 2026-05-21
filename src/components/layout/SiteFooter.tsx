import Link from "next/link";

import { Container } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { academyInfo, footerContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-[var(--color-hairline)] bg-[var(--color-canvas)]">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-[-0.03rem] text-[var(--color-ink)]">
              {academyInfo.name}
            </p>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-ink-subtle)]">
              {footerContent.summary}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[var(--color-hairline)] pt-6 text-sm text-[var(--color-ink-subtle)] sm:grid-cols-4 lg:border-t-0 lg:pt-0">
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
