"use client";

import BackButton from "@/components/BackButton";
import { MEMBERS } from "@/constants";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function Page() {
  const params = useParams<{ id: string }>();

  const member = MEMBERS.find((m) => m.key === params.id);
  if (!member) return notFound();

  return (
    <section className="mx-container">
      <div className="b-container py-6 px-10 mb-10">
        <div className="mb-5 flex items-center gap-2 font-bold text-2xl text-slate-700 border-b border-slate-200">
          <BackButton />
          <h1>{member?.name}</h1>
        </div>
        <div className="flex justify-start items-start gap-6 w-full">
          <div className="flex-1">
            <p className="text-gray-700">{member.bioHU}</p>
            <h2 className="text-2xl font-semibold mt-8">Publikációk</h2>
            <ul className="mt-4 px-4 list-disc list-inside">
              {member?.publications.map((p, i) => (
                <li key={i} className="list-outside text-start pl-4 mt-2">
                  <span className="font-medium">
                    <a href="">{p.title}</a>
                  </span>
                  <span className="font-medium">{p.source}</span>
                  <span className="text-sm text-gray-500">({p.year})</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[300px] h-auto rounded overflow-hidden">
            <img
              src={member?.profileImg}
              alt={member?.name}
              className="bg-center bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
