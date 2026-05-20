import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Button, Container } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];
const secondaryChannel = contactChannels[1];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)]/80 bg-[color:color-mix(in_srgb,var(--color-canvas)_88%,transparent)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-15 items-center justify-between gap-3 sm:min-h-16 sm:gap-6">
          <Link
            className="min-w-0 text-sm font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-[15px]"
            href="/"
          >
            <span className="block truncate">Avangard Jiu-Jitsu</span>
          </Link>

          <nav
            aria-label="Основна навігація"
            className="hidden items-center gap-5 md:flex"
          >
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

          <div className="flex items-center gap-2 sm:gap-3">
            {primaryChannel ? (
              <Button
                className="sm:hidden"
                href={primaryChannel.href}
                rel={primaryChannel.external ? "noreferrer" : undefined}
                size="sm"
                target={primaryChannel.external ? "_blank" : undefined}
              >
                Написати
              </Button>
            ) : null}

            <div className="hidden items-center gap-3 md:flex">
              {secondaryChannel ? (
                <Button
                  href={secondaryChannel.href}
                  rel={secondaryChannel.external ? "noreferrer" : undefined}
                  target={secondaryChannel.external ? "_blank" : undefined}
                  variant="secondary"
                >
                  {secondaryChannel.label}
                </Button>
              ) : null}
              {primaryChannel ? (
                <Button
                  href={primaryChannel.href}
                  rel={primaryChannel.external ? "noreferrer" : undefined}
                  target={primaryChannel.external ? "_blank" : undefined}
                >
                  {primaryChannel.label}
                </Button>
              ) : null}
            </div>

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
