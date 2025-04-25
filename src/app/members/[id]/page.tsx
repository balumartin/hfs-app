import { MEMBERS } from "@/constants";
import Image from "next/image";
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
  const { id } = await params;
  const member = MEMBERS.find((m) => m.key === id);
  if (!member) return notFound();

  return (
    <main className="mx-container b-container">
      <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
      <div className="flex gap-6 items-start">
        <Image src={member.profileImg} alt={member.name} width={150} height={150} className="rounded" />
        <p className="text-gray-700">{member.bioHU}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Publikációk</h2>
      <ul className="mt-4 list-disc list-inside">
        {member.publications.map((p, i) => (
          <li key={i}>
            <span className="font-medium">{p.title}</span> –{" "}
            <span className="text-sm text-gray-500">{p.date}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
