import { inter } from "@/app/ui/fonts";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";
import navHU from "@/locales/hu/nav.json";
import navEN from "@/locales/en/nav.json";
import contactHu from "@/locales/hu/contact.json";
import contactEn from "@/locales/en/contact.json";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const contactText = locale === "hu" ? contactHu : contactEn;
  const pageTitle = locale === "hu" ? navHU : navEN;

  return (
    <main className="mx-container overflow-hidden relative mb-10">
      <div className="b-container h-[700px] py-6 md:px-10 px-2 ">
        <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
          <BookOpenIcon className="w-6 inline-block" />
          <span className="z-50">{pageTitle.contact}</span>
        </h1>
        <div
          className={`${inter.className}  leading-relaxed flex flex-col items-center text-center p-4`}
        >
          <p className="mb-2">{contactText.text}</p>
          <p className="mt-4">
            Email:{" "}
            <span>
              {contactText.email}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
