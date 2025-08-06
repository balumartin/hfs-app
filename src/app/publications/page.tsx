"use client";

import { MEMBERS } from "@/constants";
import { useState } from "react";
import { useMemo } from "react";

interface Publication {
  title: string;
  year: string;
  author: string;
  image: string;
  source: string;
}
const sortFunctions = {
  "year-desc": (a: Publication, b: Publication) => b.year - a.year,
  "year-asc": (a: Publication, b: Publication) => a.year - b.year,
  "title-asc": (a: Publication, b: Publication) =>
    a.title.localeCompare(b.title),
  "title-desc": (a: Publication, b: Publication) =>
    b.title.localeCompare(a.title),
  "author-asc": (a: Publication, b: Publication) =>
    a.author.localeCompare(b.author),
  "author-desc": (a: Publication, b: Publication) =>
    b.author.localeCompare(a.author),
};

export default function HomePage() {
  const [sortType, setSortType] = useState("year-desc");

  const allPublications: Publication[] = MEMBERS.flatMap((m) =>
    m.publications.map((pub) => ({
      ...pub,
      image: m.profileImg,
      author: m.name,
    }))
  );

    // const sorted = [...allPublications].sort(sortFunctions[sortType]);

  const sortedPublications = useMemo(() => {
    return [...allPublications].sort(sortFunctions[sortType]);
  }, [allPublications, sortType]);

  return (
    <section className="mx-container bg-opacity-95 b-container py-6 px-10 mb-10">
      <div className="mb-5 w-full flexStart font-bold text-2xl text-slate-700 border-b border-slate-200">
        <div className="flex-1 flex items-center gap-2">
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
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h3>Publikációk</h3>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-500">
            Rendezés:
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="year-desc">Dátum (új &rarr; régi)</option>
            <option value="year-asc">Dátum (régi &rarr; új)</option>
            <option value="title-asc">Cím (A–Z)</option>
            <option value="title-desc">Cím (Z–A)</option>
            <option value="author-asc">Szerző (A–Z)</option>
            <option value="author-desc">Szerző (Z–A)</option>
          </select>
        </div>
      </div>

      <ol className="relative w-[90%] text-lg list-decimal ml-4 pl-4 my-8">
        {sortedPublications.map((data, idx) => (
          <li key={idx} className="mt-8">
            <p>
              <a href="#" target="_blank" className="inline text-blue-600 underline">
                {data.title}, {data.year}.
              </a>{" "}
              ({data.source}) - {data.author}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
