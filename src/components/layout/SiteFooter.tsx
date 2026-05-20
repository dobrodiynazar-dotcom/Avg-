import Link from "next/link";

import { primaryNavigation } from "@/content/navigation";
import { academyInfo } from "@/content/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-hairline)]">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
              {academyInfo.name}
            </p>
            <p className="max-w-xl text-sm text-[var(--color-ink-subtle)]">
              Архітектурна та візуальна основа підготовлена. Фінальний контент буде додано на
              наступних етапах.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-[var(--color-ink-subtle)] sm:grid-cols-4">
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
