import MemberCard from "@/components/MemberCard";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import { UsersIcon } from "@heroicons/react/24/outline";
import membersHu from "@/locales/hu/common.json";
import membersEn from "@/locales/en/common.json";
import { MembersData } from "@/app/types/members";

export default async function MembersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const membersHuData: MembersData = membersHu;
  const membersEnData: MembersData = membersEn;

  const common = locale === "hu" ? membersHuData : membersEnData;
  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;

  const members = common.members;
  const membersArray = Object.entries(members);

  return (
    <main className="mx-container">
      <div className="b-container py-6 md:px-10 px-2 mb-10">
        <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
          <UsersIcon className="w-6 inline-block" />
          <span>{pageTitle.members}</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {membersArray.map(([id, member]) => (
            <MemberCard key={id} memberDetail={{ id, ...member }} />
          ))}
        </div>
      </div>
    </main>
  );
}
