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
        className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] border border-[rgb(255_255_255_/_0.16)] bg-[rgb(255_255_255_/_0.02)] px-3 text-[var(--color-ink)] transition-colors hover:border-[rgb(255_255_255_/_0.32)] hover:bg-[rgb(255_255_255_/_0.05)]"
        onClick={() => setIsOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-between">
          <span
            className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[90] transition-opacity duration-200 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[rgb(6_8_10_/_0.58)] backdrop-blur-3xl supports-[backdrop-filter]:bg-[rgb(6_8_10_/_0.28)]"
          onClick={() => setIsOpen(false)}
        />

        <div
          aria-label="Мобільне меню"
          aria-modal="true"
          className={`absolute inset-y-0 right-0 flex w-[min(26rem,100vw)] flex-col border-l border-[rgb(255_255_255_/_0.14)] bg-[rgb(8_10_14_/_0.985)] px-5 py-6 text-[var(--color-ink)] shadow-[-28px_0_96px_rgb(0_0_0_/_0.54)] transition-transform duration-200 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
        >
          <div className="flex items-center justify-between gap-4 border-b border-[rgb(255_255_255_/_0.08)] pb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgb(255_255_255_/_0.56)]">
              Навігація
            </p>
            <button
              aria-label="Закрити меню"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-button)] border border-[rgb(255_255_255_/_0.14)] bg-[rgb(255_255_255_/_0.02)] text-[rgb(255_255_255_/_0.72)] transition-colors hover:border-[rgb(255_255_255_/_0.28)] hover:bg-[rgb(255_255_255_/_0.05)] hover:text-[var(--color-ink)]"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
          </div>

          <nav
            aria-label="Розділи сайту"
            className="mt-6 flex flex-col border-b border-[rgb(255_255_255_/_0.08)] pb-6"
          >
            {primaryNavigation.map((item) => (
              <Link
                key={item.key}
                className="border-t border-[rgb(255_255_255_/_0.08)] py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[rgb(255_255_255_/_0.94)] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white first:border-t-0"
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
      </div>
    </>
  );
}
