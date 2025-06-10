"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SearchBar from "./SearchBar";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="shadow-2xl">
      <div className="flexCenter flex-col ">
        <div className="w-full h-[100px] translate-y-4 scale-125 mx-container flexCenter">
          <Image src="/MSZF.jpeg" alt="logo" width={150} height={71} priority />
        </div>
        <div className="z-40 mx-container rounded-xl overflow-hidden w-full translate-y-1/2 flexCenter md:flexStart h-[60px] bg-black text-white text-sm tracking-[0.1em] font-semibold">
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
                    ? "scale-110 z-40 bg-primary text-secondary shadow-md"
                    : "hover:bg-secondary hover:text-black"
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
    </nav>
  );
}
