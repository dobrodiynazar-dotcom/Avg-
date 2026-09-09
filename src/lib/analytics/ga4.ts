export const GA_MEASUREMENT_ID = "G-0260GZ0ES8";

type SignupLeadEvent = {
  ctaLocation: string;
  ctaText: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackSignupLead({ ctaLocation, ctaText }: SignupLeadEvent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const pagePath = `${window.location.pathname}${window.location.search}`;

  window.gtag("event", "generate_lead", {
    cta_location: ctaLocation,
    cta_text: ctaText,
    page_path: pagePath,
    send_to: GA_MEASUREMENT_ID,
  });
}
