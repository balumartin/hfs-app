"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 flexCenter bg-black py-4 text-sm text-white">
      <p>
        © {currentYear}
        <a
          href="mailto:martinka.balazs@gmail.com"
          className="inline hover:text-blue-600"
        >
          {` baluMartin. `}
        </a>
        {t("title")}
      </p>
    </footer>
  );
}
