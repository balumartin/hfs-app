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
    <nav>
      <div className="flexCenter flex-col shadow-xl">
        <div className="w-full mx-container">
          <Image
            src="/MSZF.jpeg"
            alt="logo"
            width={150}
            height={100}
            priority
          />
        </div>
        <ul className="mx-container w-full flexStart h-[60px] bg-black text-white font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.key}
                href={link.href}
                className={clsx(
                  "group relative flexCenter flex-col h-full px-4 transition-transform duration-300 ease-out transform-gpu origin-top",
                  isActive
                    ? "scale-110 z-40 bg-amber-400 text-black"
                    : "hover:bg-amber-400 hover:text-black"
                )}
              >
                <span
                  className={clsx(
                    "absolute bottom-0 left-1/2 h-0.5 bg-black transition-all duration-300 ease-out",
                    isActive ? "" : "w-0 group-hover:w-full group-hover:left-0"
                  )}
                />
                {link.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mx-container flexBetween  p-2 my-5">
        <div className="flexStart col-start-1 col-end-6 row-start-2 row-end-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">
            <Image src="/home.svg" width={18} height={18} alt="home" className="mx-1"/>
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
                    className="hover:text-black"
                  >
                    {item}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
