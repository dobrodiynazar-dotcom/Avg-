import type { Metadata } from "next";

import { CmsLoginForm } from "@/components/sections/CmsLoginForm";

export const metadata: Metadata = {
  title: "Вхід редактора | Avangard",
  robots: { index: false, follow: false },
};

export default function CmsLoginPage() {
  return <section className="flex min-h-[70vh] items-center justify-center bg-[var(--color-canvas)] px-5 py-20 text-white"><CmsLoginForm /></section>;
}
