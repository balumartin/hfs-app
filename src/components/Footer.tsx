"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 flexCenter bg-black text-center py-4 text-sm text-white">
      © {currentYear} {t("footer.title")}
    </footer>
  );
}
