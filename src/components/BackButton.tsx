"use client";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="h-8 py-1" type="button" onClick={() => router.back()}>
      <p className="text-sm flexCenter">
        <ArrowUturnLeftIcon className="w-6 h-6 text-slate-500 hover:text-slate-800" />
      </p>
    </button>
  );
}
