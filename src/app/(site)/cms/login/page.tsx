import type { Metadata } from "next";

import { CmsLoginForm } from "@/components/sections/CmsLoginForm";

export const metadata: Metadata = {
  title: "Вхід редактора | Avangard",
  robots: { index: false, follow: false },
};

export default function CmsLoginPage() {
  return <CmsLoginForm />;
}
