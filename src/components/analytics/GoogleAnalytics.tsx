"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

import { GA_MEASUREMENT_ID } from "@/lib/analytics/ga4";

function GoogleAnalyticsPageView({ isReady }: { isReady: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isReady || !pathname || typeof window.gtag !== "function") {
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag("event", "page_view", {
      page_location: `${window.location.origin}${pagePath}`,
      page_path: pagePath,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [isReady, pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        onReady={() => setIsReady(true)}
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);}
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView isReady={isReady} />
      </Suspense>
    </>
  );
}
