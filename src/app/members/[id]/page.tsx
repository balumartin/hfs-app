import BackButton from "@/components/BackButton";
import { MEMBERS } from "@/constants";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ id: m.key }));
}

export default async function MemberDetailPage({ params }: Props) {
  const { id } = params;
  const member = MEMBERS.find((m) => m.key === id);
  if (!member) return notFound();

  return (
    <main className="mx-container b-container p-10 my-10">
      <BackButton />
      <h1 className="text-3xl text-center font-bold mb-4">{member.name}</h1>
      <div className="flex justify-start items-start gap-6 w-full">
        <div className="w-[400px] h-auto rounded-xl overflow-hidden">
          <img
            src={member.profileImg}
            alt={member.name}
            className="w-full h-full"
          />
        </div>
        <div className=" w-full">
          <p className="text-gray-700">{member.bioHU}</p>
          <h2 className="text-2xl font-semibold mt-8">Publikációk</h2>
          <ul className="mt-4 px-4 list-disc list-inside">
            {member.publications.map((p, i) => (
              <li key={i} className="list-outside text-start pl-4 mt-2">
                <span className="font-medium"><a href="">{p.title}</a></span>
                <span className="font-medium">{p.source}</span>
                <span className="text-sm text-gray-500">({p.year})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
