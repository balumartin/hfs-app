"use client";

import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Keresési kifejezés:", searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="relative max-md:hidden w-52 h-8 max-w-md mx-auto mr-4 text-black">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search..."
        className="w-full pl-5 pr-5 h-full rounded-full placeholder-slate-400 focus:outline-none focus:bg-slate-200"
      />

      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 bottom-0 p-3 text-white focus:outline-none flexCenter"
      >
        <Image width={20} height={20} src="/search.svg" alt="search" />
      </button>
    </div>
  );
}
