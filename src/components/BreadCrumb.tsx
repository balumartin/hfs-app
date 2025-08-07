"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname = usePathname();
  const breadcrumbItems = pathname.split("/").filter(Boolean);

  return (
    <section className="w-full mb-5 xl:mb-10 flexCenter xl:pt-10 p-2">
      <div className="flexStart col-start-1 col-end-6 row-start-2 row-end-3 text-sm text-gray-700">
        <Link href="/" className="hover:text-slate-400">
          <Image
            src="/home.svg"
            width={18}
            height={18}
            alt="home"
            className="mx-1"
          />
        </Link>
        {breadcrumbItems.map((item, idx) => {
          const isLast = idx === breadcrumbItems.length - 1;
          return (
            <span key={idx} className="flex items-center">
              <span className="mx-2">
                <Image
                  src="/arrow-r.svg"
                  width={15}
                  height={15}
                  alt="arrow-r"
                />
              </span>
              {isLast ? (
                <span className="text-gray-700">{item}</span>
              ) : (
                <Link
                  href={`/${breadcrumbItems.slice(0, idx + 1).join("/")}`}
                  className="hover:text-slate-400"
                >
                  {item}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
