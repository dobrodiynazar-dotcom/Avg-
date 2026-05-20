import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)]/80 bg-[color:color-mix(in_srgb,var(--color-canvas)_90%,transparent)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-14 items-center justify-between gap-6">
          <Link
            className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            href="/"
          >
            Avangard Jiu-Jitsu
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
            {primaryNavigation.map((item) => (
              <Link
                key={item.key}
                className="text-sm text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <Button href={contactChannels[1]?.href ?? "#instagram"} variant="secondary">
              Instagram
            </Button>
            <Button href={contactChannels[0]?.href ?? "#telegram"}>Telegram</Button>
          </div>
          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
