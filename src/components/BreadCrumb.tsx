"use client";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Link, usePathname } from "@/i18n/navigation";
import navHU from "@/locales/hu/nav.json";
import navEN from "@/locales/en/nav.json";
import { useLocale } from "next-intl";
import { MEMBER_NAME_MAP } from "@/constants";

export default function BreadCrumb() {
  const pathname = usePathname();
  const locale = useLocale() as "en" | "hu";
  const breadcrumbItems = pathname
    .split("/")
    .filter(Boolean)
    .filter((item) => item !== "hu" && item !== "en");

  const items: Record<string, string> = locale === "hu" ? navHU : navEN;

  return (
    <section className="mx-container my-2 flexStart lg:pt-10 p-2">
      <div className="flexStart col-start-1 col-end-6 row-start-2 row-end-3 text-sm text-gray-700">
        {breadcrumbItems.length > 0 && (
          <Link href="/" className="hover:text-slate-400">
            <HomeIcon className="w-5 h-5 text-gray-700" />
          </Link>
        )}
        {breadcrumbItems.map((item, idx) => {
          const labelFromNav = items[item];
          const labelFromMembers = MEMBER_NAME_MAP[locale]?.[item];
          const label = labelFromNav || labelFromMembers || item;

          return (
            <span key={idx} className="flex items-center">
              <span className="flexCenter mx-2">
                <ChevronRightIcon className="w-4 h-4 text-gray-700" />
              </span>
              {idx < breadcrumbItems.length - 1 ? (
                <Link
                  href={`/${breadcrumbItems.slice(0, idx + 1).join("/")}`}
                  className="hover:text-slate-400"
                >
                  {label}
                </Link>
              ) : (
                <span className="text-gray-700">{label}</span>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
