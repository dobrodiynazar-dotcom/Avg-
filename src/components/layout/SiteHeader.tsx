import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { Button, Container } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { academyInfo, contactChannels } from "@/content/site";

const primaryChannel = contactChannels[0];
const secondaryChannel = contactChannels[1];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)] bg-[rgb(255_255_255_/_0.92)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            className="min-w-0 text-[15px] font-bold tracking-[-0.02rem] text-[var(--color-ink)]"
            href="/"
          >
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-5 w-5 rounded-full bg-[var(--color-primary)]"
              />
              <span className="truncate">{academyInfo.shortName}</span>
            </span>
          </Link>

          <nav
            aria-label="РћСЃРЅРѕРІРЅР° РЅР°РІС–РіР°С†С–СЏ"
            className="hidden items-center gap-5 md:flex"
          >
            {primaryNavigation.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
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
                РќР°РїРёСЃР°С‚Рё
              </Button>
            ) : null}

            <div className="hidden items-center gap-2 md:flex">
              {secondaryChannel ? (
                <Button
                  href={secondaryChannel.href}
                  rel={secondaryChannel.external ? "noreferrer" : undefined}
                  size="md"
                  target={secondaryChannel.external ? "_blank" : undefined}
                  variant="tertiary"
                >
                  {secondaryChannel.label}
                </Button>
              ) : null}
              {primaryChannel ? (
                <Button
                  href={primaryChannel.href}
                  rel={primaryChannel.external ? "noreferrer" : undefined}
                  size="md"
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
