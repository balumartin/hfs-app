import BackButton from "@/components/BackButton";
import { MEMBERS } from "@/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MemberDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const member = MEMBERS.find((m) => m.key === id);
  if (!member) return notFound();

  return (
    <main className="mx-container">
      <div className="b-container py-6 px-10 mb-10">
        <div className="mb-5 flex items-center gap-2 font-bold text-2xl text-slate-700 border-b border-slate-200">
          <BackButton />
          <h1>{member?.name}</h1>
        </div>
        <div className="lg:hidden w-[300px] mx-auto py-5 h-auto rounded overflow-hidden">
            <img
              src={member?.profileImg}
              alt={member?.name}
              className="bg-center bg-cover w-full h-full"
            />
          </div>
        <div className="flex max-lg:flex-col justify-start items-start gap-6 w-full">
          <div className="lg:flex-1">
            <p className="text-gray-700">{member.bioHU}</p>
            <h2 className="text-2xl font-semibold mt-8">Publikációk</h2>
            <ul className="mt-4 px-4 list-disc list-inside">
              {member?.publications.map((p, i) => (
                <li key={i} className="list-outside text-start pl-4 mt-2">
                  <span className="font-medium">
                    <Link href="#">{p.title}</Link>
                  </span>
                  <span className="font-medium">{p.source}</span>
                  <span className="text-sm text-gray-500">({p.year})</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-lg:hidden w-[300px] h-auto rounded overflow-hidden">
            <img
              src={member?.profileImg}
              alt={member?.name}
              className="bg-center bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
