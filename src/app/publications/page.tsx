"use client";

import { MEMBERS } from "@/constants";
import { useState } from "react";
import formattedDate from "../utils/formattedDate";
import clsx from "clsx";
import Image from "next/image";

interface Publication {
  title: string;
  date: string;
  author: string;
  image: string;
}

export default function HomePage() {
  const [view, setView] = useState<"timeline" | "grid">("grid");

  const allPublications: Publication[] = MEMBERS.flatMap((m) =>
    m.publications.map((pub) => ({
      ...pub,
      image: m.profileImg,
      author: m.name,
    }))
  );

  const sorted = allPublications.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="relative mx-container flex-col py-5">
      <h1 className="text-3xl font-bold my-10">Legfrissebb publikációk</h1>
      <div className="absolute top-0 right-0  flex items-center bg-gray-100 rounded">
        <button
          className={clsx(
            "flex items-center justify-center w-12 h-12 rounded-l transition-transform duration-300",
            view === "grid"
              ? "bg-amber-400 text-white shadow-inner transform translate-y-0 hover:translate-y-0"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300  hover:shadow-inner"
          )}
          onClick={() => setView("grid")}
        >
          <Image width={24} height={24} src="/grid.svg" alt="grid" />
        </button>
        <button
          className={clsx(
            "flex items-center justify-center w-12 h-12 rounded-r transition-transform duration-300",
            view === "timeline"
              ? "bg-amber-400 text-white shadow-inner transform translate-y-0"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300  hover:shadow-inner"
          )}
          onClick={() => setView("timeline")}
        >
          <Image width={24} height={24} src="/time.svg" alt="time" />
        </button>
      </div>
      {view === "timeline" && (
        <ol className="relative border-s w-[600px] border-gray-200 dark:border-gray-700 mt-10">
          {sorted.map((pub, index) => (
            <li key={index} className="mb-10 ms-6 w-3/5">
              <span className="absolute flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full -start-4 dark:bg-blue-900">
                <Image
                  width={60}
                  height={60}
                  alt={pub.author}
                  src={pub.image}
                />
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {pub.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                  <span className="font-medium">{pub.author}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  <time className="text-xs text-gray-400">
                    {formattedDate(pub.date)}
                  </time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
      {view === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sorted.map((pub, i) => (
            <div key={i} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{pub.title}</h2>
              <p className="text-sm text-gray-500">{pub.date}</p>
              <p className="mt-2 text-gray-700">Szerző: {pub.author}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
