import Link from "next/link";

export interface Publication {
  year: string;
  title: string;
  source: string;
  url?: string;
}

interface MemberProps {
  name: string;
  key: string;
  profileImg: string;
  bioHU: string;
  bioEN: string;
  publications: Publication[];
}

const Overlay = ({ member }: { member: MemberProps }) => (
  <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
    <div className="overflow-y-auto text-sm px-2">
      
    </div>
    <div className="flex justify-end">
      <Link
        href={`/members/${member.key}`}
        className="bg-slate-400 text-black hover:bg-slate-200 px-3 py-1 rounded transition"
      >
        <p className="text-sm">Tovább →</p>
      </Link>
    </div>
  </div>
);

const MemberCard = ({ member }: { member: MemberProps }) => {
  return (
    <div className="relative h-80 overflow-hidden shadow-lg rounded-xl group">
      <img
        src={member.profileImg}
        alt={member.name}
        className="object-cover w-full h-full"
      />
      <div
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white p-4 flex flex-col justify-end"
        style={{ height: "30%" }}
      >
        <h3 className="text-lg font-semibold truncate">{member.name}</h3>
        <p className="text-sm">Publikációk: {member.publications.length}</p>
      </div>
      <Overlay member={member} />
    </div>
  );
};

export default MemberCard;
