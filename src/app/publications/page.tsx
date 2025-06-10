"use client";

import { MEMBERS } from "@/constants";

interface Publication {
  title: string;
  year: string;
  author: string;
  image: string;
}

export default function HomePage() {

  const allPublications: Publication[] = MEMBERS.flatMap((m) =>
    m.publications.map((pub) => ({
      ...pub,
      image: m.profileImg,
      author: m.name,
    }))
  );

  const sorted = allPublications.sort(
    (a, b) => new Date(b.year).getTime() - new Date(a.year).getTime()
  );

  return (
    <section className="mx-container b-container py-6 px-10 mb-10">
      <h1 className="mb-5 font-bold text-2xl text-slate-700 border-b border-slate-200">
        Publikációk
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sorted.map((pub, i) => (
            <div key={i} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{pub.title}</h2>
              <p className="text-sm text-gray-500">{pub.year}</p>
              <p className="mt-2 text-gray-700">Szerző: {pub.author}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
