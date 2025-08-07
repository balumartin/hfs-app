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
  post: string;
  profileImg: string;
  bioHU: string;
  bioEN: string;
  publications: Publication[];
}

const Overlay = ({ member }: { member: MemberProps }) => (
  <div className="absolute w-full h-full flexCenter inset-0 bg-black bg-opacity-40 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
    <Link
      href={`/members/${member.key}`}
      className="w-24 h-24 overflow-y-auto text-sm px-2 flexCenter  rounded-full bg-gray-300/40 hover:bg-gray-400/70"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </Link>
  </div>
);

const MemberCard = ({ member }: { member: MemberProps }) => {
  return (
    <div className="relative w-full h-[150px] overflow-hidden flex">
      <div className="w-[150px] h-[150px] rounded overflow-hidden">
        <img
          src={member.profileImg}
          alt={member.name}
          className="object-cover bg-center w-full h-full"
        />
      </div>
      <div className="w-full h-full p-4 flex flex-col justify-start">
        <Link href={`/members/${member.key}`} className="hover:text-gray-400 w-min">
          <h3 className="text-lg font-semibold pb-2 truncate underline">{member.name}</h3>
        </Link>
        <p className="text-sm">{member.post}</p>
      </div>
      {/* <Overlay member={member} /> */}
    </div>
  );
};

export default MemberCard;
