import Link from "next/link";

import { BrandMark } from "@/components/brand/BrandMark";
import { Container } from "@/components/ui";
import { academyInfo, contactChannels } from "@/content/site";

const footerNavigation = [
  { key: "about", label: "Академія", href: "/about" },
  { key: "coaches", label: "Тренери", href: "/coaches" },
  { key: "schedule", label: "Розклад", href: "/schedule" },
  { key: "pricing", label: "Абонементи", href: "/pricing" },
  { key: "gallery", label: "Медіа", href: "/gallery" },
] as const;

const footerContactKeys = ["telegram", "instagram", "email", "phone"] as const;

function ContactIcon({ channelKey }: { channelKey: (typeof footerContactKeys)[number] }) {
  const className = "h-5 w-5 stroke-current";

  switch (channelKey) {
    case "telegram":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M21 4 3.8 10.75c-.78.3-.76 1.42.03 1.7l4.25 1.5 1.61 5.05c.24.75 1.19.89 1.62.24l2.38-3.58 4.67 3.43c.62.46 1.5.11 1.63-.65L22 5.34C22.13 4.61 21.52 3.99 21 4Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65"
          />
          <path d="m8.46 13.67 9.89-7.28" strokeLinecap="round" strokeWidth="1.65" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <rect
            height="14"
            rx="4"
            strokeWidth="1.65"
            width="14"
            x="5"
            y="5"
          />
          <circle cx="12" cy="12" r="3.4" strokeWidth="1.65" />
          <circle cx="16.7" cy="7.3" fill="currentColor" r="0.95" stroke="none" />
        </svg>
      );
    case "email":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <rect
            height="12"
            rx="2.6"
            strokeWidth="1.65"
            width="18"
            x="3"
            y="6"
          />
          <path
            d="m4.5 7.5 6.58 5.13a1.5 1.5 0 0 0 1.84 0L19.5 7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65"
          />
        </svg>
      );
    case "phone":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
          <path
            d="M8.22 4h2.1c.42 0 .8.27.93.67l1.1 3.28a1 1 0 0 1-.27 1.04l-1.45 1.18a13.78 13.78 0 0 0 3.2 3.2l1.18-1.45a1 1 0 0 1 1.04-.27l3.28 1.1c.4.13.67.5.67.93v2.1c0 .8-.6 1.47-1.4 1.55l-.95.1A14.8 14.8 0 0 1 6.57 5.4l.1-.95C6.75 4.6 7.42 4 8.22 4Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65"
          />
        </svg>
      );
  }
}

export function SiteFooter() {
  const footerContacts = footerContactKeys
    .map((key) => contactChannels.find((channel) => channel.key === key))
    .filter((channel): channel is NonNullable<typeof channel> => Boolean(channel));

  return (
    <footer className="border-t border-[rgb(255_255_255_/_0.08)] bg-[var(--color-canvas)]">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
          <div className="flex justify-center lg:justify-start">
            <Link
              className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[rgb(255_255_255_/_0.96)] transition-colors duration-200 hover:text-[var(--color-primary)]"
              href="/"
            >
              <BrandMark className="inline-flex h-7 w-7 shrink-0 items-center justify-center" />
              <span>{academyInfo.shortName.toUpperCase()}</span>
            </Link>
          </div>

          <nav
            aria-label="Навігація в footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]"
          >
            {footerNavigation.map((item) => (
              <Link
                key={item.key}
                className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--color-primary)]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-3 lg:justify-end">
            {footerContacts.map((channel) => (
              <a
                key={channel.key}
                aria-label={channel.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-button)] border border-[rgb(255_255_255_/_0.1)] bg-[rgb(255_255_255_/_0.02)] text-[var(--color-ink-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                href={channel.href}
                rel={channel.external ? "noreferrer" : undefined}
                target={channel.external ? "_blank" : undefined}
              >
                <ContactIcon channelKey={channel.key as (typeof footerContactKeys)[number]} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
