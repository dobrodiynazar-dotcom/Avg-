"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const shouldRestoreFocusRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      if (shouldRestoreFocusRef.current) {
        triggerRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }
      return;
    }

    const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key === "Tab" && firstElement && lastElement) {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    shouldRestoreFocusRef.current = true;
    firstElement?.focus();
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
        className="flex min-h-11 min-w-11 items-center justify-center border border-[rgb(255_255_255_/_0.16)] bg-transparent px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
        onClick={() => setIsOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        {isOpen ? "Close" : "Menu"}
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
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(26rem,100vw)] flex-col bg-[var(--color-canvas)] px-5 py-6 transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "pointer-events-none invisible translate-x-full"
        }`}
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[rgb(255_255_255_/_0.08)] pb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            Navigation
          </p>
          <button
            aria-label="Закрити меню"
            className="flex min-h-11 min-w-11 items-center justify-center border border-[rgb(255_255_255_/_0.16)] text-[var(--color-ink-subtle)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            X
          </button>
        </div>

        <nav aria-label="Розділи сайту" className="mt-6 flex flex-col border-b border-[rgb(255_255_255_/_0.08)] pb-6">
          {primaryNavigation.map((item) => (
            <Link
              key={item.key}
              className="border-t border-[rgb(255_255_255_/_0.08)] py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] first:border-t-0"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-6">
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
