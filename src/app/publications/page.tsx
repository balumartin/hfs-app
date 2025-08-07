"use client";

import { MEMBERS } from "@/constants";

export default function PublicationsPage() {
  return (
    <main className="mx-container b-container py-6 px-10 mb-10">
      <div className="mb-5 w-full flexStart font-bold text-md lg:text-2xl text-slate-700 border-b border-slate-200">
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
          <h1>Publikációk</h1>
        </div>
      </div>
      <ol className="list-decimal ml-4 pl-4 space-y-6">
        {MEMBERS.flatMap((member) =>
          member.publications.map((pub, index) => (
            <li key={`${member.name}-${index}`} className="text-lg">
              <p>
                <span className="font-semibold">{pub.title}</span>, {pub.year} (
                {pub.source}) –{" "}
                <span className="text-gray-600">{member.name}</span>
              </p>
            </li>
          ))
        )}
      </ol>
    </main>
  );
}
