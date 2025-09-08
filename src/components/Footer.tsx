"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 flexCenter bg-black py-4">
      <p className="text-sm text-white">
        © {currentYear}{` balumartin. `}{t("title")}
      </p>
    </footer>
  );
}
