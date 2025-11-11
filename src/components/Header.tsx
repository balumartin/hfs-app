"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const locale = useLocale();

  const t = useTranslations("nav");

  const links = [
    { id: "home", href: "/", label: t("home") },
    { id: "members", href: "/members", label: t("members") },
    { id: "projects", href: "/projects", label: t("projects") },
    { id: "publications", href: "/publications", label: t("publications") },
    { id: "history", href: "/history", label: t("history") },
    { id: "contact", href: "/contact", label: t("contact") },
  ];

  return (
    <header className="shadow-2xl">
      <div className="flexCenter flex-col">
        <div className="w-full h-auto">
          <div className="mx-container lg:flexStart flexBetween">
            <Image
              src="/MSZF.jpeg"
              alt="logo"
              width={150}
              height={71}
              className="py-2"
              priority
            />
            <LanguageSwitcher currentLang={locale} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden"
            >
              {isOpen ? (
                <XMarkIcon className="h-7 w-7 text-slate-600" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-slate-600" />
              )}
            </button>
          </div>
        </div>
        <nav className="z-40 hidden w-full xl:mx-container xl:rounded overflow-hidden md:-mt-[25px] md:translate-y-1/2 lg:flexStart md:h-[50px] bg-black text-white text-md tracking-wide font-medium">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  "group relative flexCenter flex-col h-full w-36 px-3 transition-all duration-300 ease-out origin-top",
                  isActive
                    ? "z-40 bg-primary text-secondary"
                    : "hover:bg-secondary hover:text-black"
                )}
              >
                <span
                  className={clsx(
                    "absolute bottom-3 w-0 h-[1px] bg-slate-600 transition-all duration-300 ease-out",
                    isActive ? "" : "group-hover:w-[80%]"
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
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.id}
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
