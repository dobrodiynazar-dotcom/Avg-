import Link from "next/link";

import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";
import { Button } from "@/components/ui";

export function MobileNav() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-1)] px-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-hairline-strong)]">
        Меню
      </summary>
      <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2rem))] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-1)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <nav className="flex flex-col gap-1">
          {primaryNavigation.map((item) => (
            <Link
              key={item.key}
              className="rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-hairline)] pt-4">
          <Button href={contactChannels[0]?.href ?? "#telegram"}>Telegram</Button>
          <Button href={contactChannels[1]?.href ?? "#instagram"} variant="secondary">
            Instagram
          </Button>
        </div>
      </div>
    </details>
  );
}
