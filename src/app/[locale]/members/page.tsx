import MemberCard from "@/components/MemberCard";
import { getTranslations } from "next-intl/server";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import { UsersIcon } from "@heroicons/react/24/outline";

export default async function MembersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "common",
  });

  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;

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

  type Members = Record<string, Member>;

  const members = t.raw("members") as Members;
  const membersArray = Object.entries(members);

  return (
    <main className="mx-container">
      <div className="b-container py-6 md:px-10 px-2 mb-10">
        <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
          <UsersIcon className="w-6 inline-block" />
          <span>{pageTitle.members}</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {membersArray.map(([id, members]) => (
            <MemberCard key={id} memberDetail={{ id, ...members }} />
          ))}
        </div>
      </div>
    </main>
  );
}
