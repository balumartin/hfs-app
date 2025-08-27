"use client";

import Link from "next/link";
import Image from "next/image";

export interface MemberDetail {
  id: string;
  name: string;
  post: string;
  bio: string;
  profileImg: string;
  publications: {
    year: string;
    title: string;
    source: string;
  }[];
}

interface MemberProps {
  memberDetail: MemberDetail;
}

export default function MemberCard({ memberDetail }: MemberProps) {
  return (
    <div className="relative w-full h-[150px] overflow-hidden flex">
      <div className="w-[150px] h-[150px] rounded overflow-hidden">
        <Image
          src={memberDetail.profileImg}
          alt={memberDetail.name}
          width={150}
          height={500}
          className="object-cover bg-center w-full h-full"
        />
      </div>
      <div className="w-full h-full p-4 flex flex-col justify-start">
        <Link
          href={`/members/${memberDetail.id}`}
          className="hover:text-gray-400 w-min"
        >
          <h3 className="text-lg font-semibold pb-2 truncate underline">
            {memberDetail.name}
          </h3>
        </Link>
        <p className="text-sm">{memberDetail.post}</p>
      </div>
    </div>
  );
}
