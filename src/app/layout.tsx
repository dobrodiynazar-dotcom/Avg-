import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/lib/design/site";
import { buildMetadata } from "@/lib/seo/metadata";

import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Avangard Jiu-Jitsu Academy",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)] antialiased">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-[var(--color-on-primary)]"
          href="#main-content"
        >
          Перейти до основного вмісту
        </a>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <SiteFooter />
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
