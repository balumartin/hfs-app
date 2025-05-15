"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SearchBar from "./SearchBar";

export default function Header() {
  const pathname = usePathname();

  const breadcrumbItems = pathname.split("/").filter(Boolean);

  return (
    <nav className="mb-5">
      <div className="flexCenter flex-col shadow-xl">
        <div className="w-full mx-container flexCenter bg-white">
          <Image src="/MSZF.jpeg" alt="logo" width={150} height={71} priority />
        </div>
        <div className="mx-container w-full flexCenter md:flexStart h-[60px] bg-black text-white text-sm tracking-[0.1em] font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.key}
                href={link.href}
                className={clsx(
                  "group relative flexCenter flex-col h-full px-4 transition-all duration-300 ease-out origin-top",
                  isActive
                    ? "scale-110 z-40 bg-amber-400 text-black"
                    : "hover:bg-amber-400 hover:text-black"
                )}
              >
                <span
                  className={clsx(
                    "absolute bottom-3 w-0 h-[1px] bg-black transition-all duration-300 ease-out",
                    isActive ? "" : "group-hover:scale-x-75 group-hover:w-full"
                  )}
                />
                {link.label}
              </Link>
            );
          })}
          <SearchBar />
        </div>
      </div>
      <div className="mx-container flexBetween mt-2 p-2">
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
      </div>
    </nav>
  );
}
