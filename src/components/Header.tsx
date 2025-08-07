"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

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
              className="p-2 lg:hidden"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
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
        </nav>
      </div>
      {isOpen && (
        <nav className="lg:hidden z-40 w-full flex flex-col">
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
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
