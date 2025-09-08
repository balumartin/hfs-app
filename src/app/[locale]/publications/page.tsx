"use client";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import commonHU from "@/locales/hu/common.json";
import commonEN from "@/locales/en/common.json";
import sortHu from "@/locales/hu/sort.json";
import sortEn from "@/locales/en/sort.json";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";

type Publication = {
  year: string;
  title: string;
  source?: string;
  url?: string;
  lang: string;
};

type Member = {
  name: string;
  post: string;
  profileImg: string;
  bio: string;
  publications: Publication[];
};

type Members = Record<string, Member>;

export default function PublicationsPage() {
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const common = locale === "hu" ? commonHU : commonEN;
  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;
  const sortTitle = locale === "hu" ? sortHu : sortEn;

  const members: Members = common.members;

  const allPublications = Object.values(members).flatMap((member) =>
    member.publications.map((pub) => ({
      ...pub,
      author: member.name,
    }))
  );

  const huPublications = allPublications
    .filter((pub) => pub.lang === "hu")
    .sort((a, b) => {
      const yearA = parseInt(a.year, 10);
      const yearB = parseInt(b.year, 10);

      return order === "asc" ? yearA - yearB : yearB - yearA;
    });

  const enPublications = allPublications
    .filter((pub) => pub.lang === "en")
    .sort((a, b) => {
      const yearA = parseInt(a.year, 10);
      const yearB = parseInt(b.year, 10);

      return order === "asc" ? yearA - yearB : yearB - yearA;
    });
  const actuallyLang =
    locale === "hu"
      ? [huPublications, enPublications]
      : [enPublications, huPublications];

  return (
    <main className="mx-container b-container py-6 px-2 md:px-10 mb-10">
      <div className="flexBetween border-b mb-5 border-slate-200">
        <h1 className=" flexStart gap-2 text-2xl text-slate-700">
          <BookOpenIcon className="w-6 inline-block" />
          <span>{pageTitle.publications}</span>
        </h1>
        <div>
          <label htmlFor="sortOrder" className="mr-2 font-medium">
            {sortTitle.label}
          </label>
          <select
            id="sortOrder"
            value={order}
            onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
            className="hover:bg-gray-100 border text-gray-700 py-1 pl-1 pr-2 rounded cursor-pointer text-sm"
          >
            <option value="asc">{sortTitle.asc}</option>
            <option value="desc">{sortTitle.desc}</option>
          </select>
        </div>
      </div>
      <div>
        <div className="b-container py-6 md:px-10 px-2 mb-10">
          <h3 className="text-md mb-4 text-center font-semibold border-b-2 w-max">
            {locale === "hu"
              ? "Magyar nyelven megjelent publikációk"
              : "Publications published in English"}
          </h3>
          <ol className="list-decimal max-md:mx-2 md:ml-4 pl-4 space-y-6">
            {actuallyLang[0].map((pub, index) => (
              <li
                key={`${pub.author}-${index}`}
                className="text-md max-md:text-sm"
              >
                <p>
                  <span>
                    {pub.author}
                    {", "}
                    <span className="text-sm">
                      {pub.year === "0" ? "(forthcoming)" : `(${pub.year})`}
                    </span>{" "}
                    -{" "}
                  </span>
                  <span className="font-semibold">{pub.title}</span> (
                  {pub.source})
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${pub.url}`}
                    className="block text-blue-400"
                  >
                    {pub.url}
                  </Link>
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div
          className={clsx(
            "",
            isOpen
              ? `b-container py-6 md:px-10 px-2 mb-10`
              : `b-container py-6 md:px-10 px-2`
          )}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "w-full flex justify-between items-center",
              isOpen ? `border-b-2 pb-2 mb-4` : `hover:underline`
            )}
          >
            <h3 className="text-md text-center font-semibold">
              {locale === "hu"
                ? "Angol nyelven megjelent publikációk"
                : "Publications published in Hungarian"}
            </h3>
            {isOpen ? (
              <ChevronUpIcon
                className="  hover:text-black"
                width={18}
                height={18}
              />
            ) : (
              <ChevronDownIcon width={16} />
            )}
          </button>
          {isOpen && (
            <ol className="list-decimal max-md:mx-2 md:ml-4 pl-4 space-y-6">
              {actuallyLang[1].map((pub, index) => (
                <li
                  key={`${pub.author}-${index}`}
                  className="text-md max-md:text-sm"
                >
                  <p>
                    <span>
                      {pub.author}
                      {", "}
                      <span className="text-sm">
                        {pub.year === "0" ? "(forthcoming)" : `(${pub.year})`}
                      </span>{" "}
                      -{" "}
                    </span>
                    <span className="font-semibold">{pub.title}</span> (
                    {pub.source})
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${pub.url}`}
                      className="block text-blue-400"
                    >
                      {pub.url}
                    </Link>
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </main>
  );
}
