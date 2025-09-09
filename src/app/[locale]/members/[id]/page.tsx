import BackButton from "@/components/BackButton";
import membersHu from "@/locales/hu/common.json";
import membersEn from "@/locales/en/common.json";
import navHU from "@/locales/hu/nav.json";
import navEN from "@/locales/en/nav.json";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { MembersData } from "@/app/types/members";

export default async function MemberDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  const pageTitle = locale === "hu" ? navHU : navEN;

  const membersHuData: MembersData = membersHu;
  const membersEnData: MembersData = membersEn;

  const membersData = locale === "hu" ? membersHuData : membersEnData;
  const member = membersData.members[id];

  if (!member) return notFound();
  
  const descPublications = member.publications.sort((a, b) => {
    const aYear = parseInt(a.year);
    const bYear = parseInt(b.year);

    if (aYear === 0 && bYear !== 0) return -1;
    if (bYear === 0 && aYear !== 0) return 1;

    return bYear - aYear;
  });

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
              {descPublications.map((p, i) => (
                <li key={i} className="list-outside text-start pl-4 mt-2">
                  {p.year === "0" ? (
                    <span className="text-sm text-gray-500">
                      (forthcoming) -{" "}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">({p.year}) - </span>
                  )}
                  <span className="font-medium">
                    {p.url && p.url.length > 1 ? (
                      <Link
                        target="_about"
                        href={p.url || "#"}
                        className="text-blue-600 cursor-pointer hover:underline"
                      >
                        {p.title}
                      </Link>
                    ) : (
                      <span>{p.title}</span>
                    )}
                  </span>{" "}
                  <span className="font-basic">{p.source}</span>{" "}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative max-lg:hidden w-[300px] h-[400px] rounded overflow-hidden">
            <Image
              src={member.profileImg}
              alt={member.name}
              className="object-cover"
              sizes="auto"
              fill
            />
          </div>
        </div>
      </div>
    </main>
  );
}
