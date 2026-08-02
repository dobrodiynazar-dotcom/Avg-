"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui";
import { primaryNavigation } from "@/content/navigation";
import { contactChannels } from "@/content/site";

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const shouldRestoreFocusRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) {
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
        setIsMenuOpen(false);
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
  }, [isMenuOpen]);

  return (
    <>
      <button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] border border-[rgb(255_255_255_/_0.16)] bg-[rgb(255_255_255_/_0.02)] px-3 text-[var(--color-ink)] transition-colors hover:border-[rgb(255_255_255_/_0.32)] hover:bg-[rgb(255_255_255_/_0.05)]"
        onClick={() => setIsMenuOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-between">
          <span
            className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-black/70"
          />

          <nav
            aria-label="Розділи сайту"
            aria-modal="true"
            className="absolute inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-neutral-950 px-5 py-6 text-white shadow-2xl"
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/56">
                Навігація
              </p>
              <button
                aria-label="Закрити меню"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] border border-white/14 bg-white/[0.02] text-white/72 transition-colors hover:border-white/28 hover:bg-white/[0.05] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
                type="button"
              >
                X
              </button>
            </div>

            <div className="mt-6 flex flex-col border-b border-white/10 pb-6">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.key}
                  className="border-t border-white/10 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white first:border-t-0"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-6">
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
          </nav>
        </div>
      )}
    </>
  );
}
