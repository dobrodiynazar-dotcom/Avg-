"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface-1)] px-3 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-hairline-strong)]"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? "X" : "Меню"}
      </button>

      {isOpen ? (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-[var(--color-semantic-overlay)]"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div
        aria-label="Мобільне меню"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(24rem,100vw)] flex-col border-l border-[var(--color-hairline-strong)] bg-[var(--color-surface-1)] p-5 transition-transform duration-200 ${
          isOpen
            ? "translate-x-0"
            : "pointer-events-none invisible translate-x-full"
        }`}
        id="mobile-navigation-drawer"
        role="dialog"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
            Навігація
          </p>
          <button
            aria-label="Закрити меню"
            className="flex min-h-10 min-w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-hairline)] text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            X
          </button>
        </div>

        <nav aria-label="Розділи сайту" className="mt-8 flex flex-col gap-2">
          {primaryNavigation.map((item) => (
            <Link
              key={item.key}
              className="rounded-[var(--radius-md)] px-3 py-3 text-base text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-3 border-t border-[var(--color-hairline)] pt-6">
          {contactChannels.slice(0, 3).map((channel) => (
            <Button
              key={channel.key}
              className="w-full"
              href={channel.href}
              rel={channel.external ? "noreferrer" : undefined}
              size="md"
              target={channel.external ? "_blank" : undefined}
              variant={channel.variant}
            >
              {channel.ctaLabel ?? channel.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
