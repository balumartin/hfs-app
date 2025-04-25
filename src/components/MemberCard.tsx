import Link from "next/link";

export interface Publication {
  title: string;
  date: string;
}

interface MemberProps {
  name: string;
  key: string;
  profileImg: string;
  bioHU: string;
  bioEN: string;
  publications: Publication[];
}

const MemberCard = ({ member }: { member: MemberProps }) => {
  return (
    <div className="relative h-80 overflow-hidden shadow-lg group">
      <img
        src={member.profileImg}
        alt={member.name}
        className="object-cover w-full h-full"
      />

      <div
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white p-4 flex flex-col justify-end"
        style={{ height: "30%" }}
      >
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm">Publikációk: {member.publications.length}</p>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
        <div className="overflow-y-auto text-sm px-2">
          <p className="mb-2 font-semibold">Magyarul:</p>
          <p className="text-xs italic mb-4">{member.bioHU}</p>
          {/* <p className="mb-2 font-semibold">In English:</p>
          <p className="text-xs italic">{member.bioEN}</p> */}
        </div>
        <div className="mt-4 w-full  flex-row flexEnd">
          <Link
            href={`/members/${member.key}`}
            className="bg-slate-400 text-black hover:bg-slate-200 px-3 py-1 rounded transition"
          >
            <p className="text-sm">Tovább →</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
