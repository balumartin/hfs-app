"use client";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import commonHU from "@/locales/hu/common.json";
import commonEN from "@/locales/en/common.json";
import { useLocale } from "next-intl";
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";

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
  const locale = useLocale();

  const common = locale === "hu" ? commonHU : commonEN;
  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;

  const members: Members = common.members;

  const allPublications = Object.values(members).flatMap((member) =>
    member.publications.map((pub) => ({
      ...pub,
      author: member.name,
    }))
  );

  const huPublications = allPublications.filter((pub) => pub.lang === "hu");
  const enPublications = allPublications.filter((pub) => pub.lang === "en");

  return (
    <main className="mx-container b-container py-6 px-2 md:px-10 mb-10">
      <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
        <BookOpenIcon className="w-6 inline-block" />
        <span>{pageTitle.publications}</span>
      </h1>
      {locale === "hu" ? (
        <div className="b-container py-6 md:px-10 px-2 mb-10">
          <h3 className="text-md mb-4 text-center font-semibold border-b-2 w-max">
            {locale === 'hu' ? "Magyar nyelven megjelent publikációk" : "Publications published in Hungarian"}
          </h3>
          <ol className="list-decimal max-md:mx-2 md:ml-4 pl-4 space-y-6">
            {huPublications.map((pub, index) => (
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
                  <Link href={`${pub.url}`} className="block text-blue-400">
                    {pub.url}
                  </Link>
                </p>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="b-container py-6 md:px-10 px-2 mb-10">
          <h3 className="text-md mb-4 text-center font-semibold border-b-2 w-max">
            {locale === 'hu' ? "Angol nyelven megjelent publikációk" : "Publications published in English"}
          </h3>
          <ol className="list-decimal max-md:mx-2 md:ml-4 pl-4 space-y-6">
            {enPublications.map((pub, index) => (
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
                  <Link href={`${pub.url}`} className="block text-blue-400">
                    {pub.url}
                  </Link>
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </main>
  );
}
