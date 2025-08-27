"use client";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname();
  const breadcrumbItems = pathname
    .split("/")
    .filter(Boolean)
    .filter((item) => item !== "hu" && item !== "en");

  return (
    <section className="mx-container my-2  flexStart xl:pt-10 p-2">
      <div className="flexStart col-start-1 col-end-6 row-start-2 row-end-3 text-sm text-gray-700">
        {breadcrumbItems.length > 0 && (
          <Link href="/" className="hover:text-slate-400">
            <HomeIcon className="w-5 h-5 text-gray-700" />
          </Link>
        )}
        {breadcrumbItems.map((item, idx) => {
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
                  {item}
                </Link>
              ) : (
                <span className="text-gray-700">{item}</span>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
