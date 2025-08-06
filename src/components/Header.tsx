"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState("");

  return (
    <header className="shadow-2xl">
      <div className="flexCenter flex-col">
        <div className="w-full h-auto">
          <div className="mx-container lg:flexStart flexBetween mb-5 lg:mb-0">
            <Image
              src="/MSZF.jpeg"
              alt="logo"
              width={150}
              height={71}
              className="py-2"
              priority
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx("p-2  lg:hidden", isOpen ? "s" : "bg-red-400")}
            >
              <img
                src="/menu.svg"
                alt="menu"
                className="inline-block  w-12 h-12 cursor-pointer"
              />
            </button>
          </div>
        </div>
        <nav className="z-40 hidden w-full xl:mx-container xl:rounded overflow-hidden md:translate-y-1/2 lg:flexStart md:h-[50px] bg-black text-white text-sm tracking-[0.1em] font-semibold">
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
                    ? "z-40 bg-primary text-secondary"
                    : "hover:bg-secondary hover:text-black"
                )}
              >
                <span
                  className={clsx(
                    "absolute bottom-3 w-0 h-[1px] bg-black transition-all duration-300 ease-out",
                    isActive ? "" : "group-hover:w-[81%]"
                  )}
                />
                {link.label}
              </Link>
            );
          })}
          {/* <SearchBar /> */}
        </nav>
      </div>
    </header>
  );
}
