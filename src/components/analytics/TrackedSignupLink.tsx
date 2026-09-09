"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { trackSignupLead } from "@/lib/analytics/ga4";

type TrackedSignupLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  ctaLocation: string;
  ctaText: string;
  href: string;
};

export function TrackedSignupLink({
  children,
  ctaLocation,
  ctaText,
  onClick,
  ...props
}: TrackedSignupLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      trackSignupLead({ ctaLocation, ctaText });
    }
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
