import BackButton from "@/components/BackButton";
import membersHu from "@/locales/hu/common.json";
import membersEn from "@/locales/en/common.json";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

type Publication = {
  year: string;
  title: string;
  source: string;
  lang: string;
};

type Member = {
  name: string;
  post: string;
  profileImg: string;
  bio: string;
  publications: Publication[];
};

type MembersData = {
  members: Record<string, Member>;
};

export default async function MemberDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;

  const membersHuData = membersHu as MembersData;
  const membersEnData = membersEn as MembersData;

  const membersData = locale === "hu" ? membersHuData : membersEnData;
  const member = membersData.members[id];

  if (!member) return notFound();

  return (
    <main className="mx-container">
      <div className="b-container py-6 px-2 md:px-10 mb-10">
        <div className="mb-5 flex items-center gap-2 font-semibold text-2xl text-slate-700 border-b border-slate-200">
          <BackButton />
          <h1>{member.name}</h1>
        </div>

        <div className="lg:hidden w-1/2 h-auto mx-auto py-5 rounded overflow-hidden">
          <Image
            src={member.profileImg}
            alt={member.name}
            className="bg-center bg-cover w-full h-full"
            width={500}
            height={500}
          />
        </div>

        <div className="flex max-lg:flex-col justify-start items-start gap-6 w-full">
          <div className="lg:flex-1">
            <p className="text-gray-700">{member.bio}</p>
            <h2 className="text-xl font-semibold mt-8">
              {pageTitle.publications}
            </h2>
            <ul className="mt-4 px-4 list-disc list-inside">
              {member.publications.map((p: any, i: number) => (
                <li key={i} className="list-outside text-start pl-4 mt-2">
                  <span className="font-medium">
                    <Link href="#">{p.title}</Link>
                  </span>{" "}
                  <span className="font-medium">{p.source}</span>{" "}
                  <span className="text-sm text-gray-500">({p.year})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-lg:hidden w-[300px] h-auto rounded overflow-hidden">
            <img
              src={member.profileImg}
              alt={member.name}
              className="bg-center bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
