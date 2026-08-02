"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
        <div className="fixed inset-0 z-[999] bg-neutral-950 text-white md:hidden">
          <nav
            aria-label="Розділи сайту"
            aria-modal="true"
            className="flex h-dvh flex-col items-center justify-center overflow-y-auto px-5 py-10"
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
          >
            <button
              aria-label="Закрити меню"
              className="absolute right-5 top-5 flex min-h-11 min-w-11 items-center justify-center text-white transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] active:text-[var(--color-primary)]"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <span aria-hidden="true" className="relative h-7 w-7">
                <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-1/2 top-1/2 h-[2px] w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>

            <div className="flex flex-col items-center gap-7 text-center">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.key}
                  className="text-[clamp(1.1rem,5vw,1.55rem)] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:text-[var(--color-primary)]"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {contactChannels[0] ? (
              <Link
                className="mt-10 inline-flex min-h-14 w-full max-w-sm items-center justify-center border border-red-600 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                href={contactChannels[0].href}
                onClick={() => setIsMenuOpen(false)}
                rel={contactChannels[0].external ? "noreferrer" : undefined}
                target={contactChannels[0].external ? "_blank" : undefined}
              >
                Записатись на пробне тренування
              </Link>
            ) : null}
          </nav>
        </div>
      )}
    </>
  );
}
