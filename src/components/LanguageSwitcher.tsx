"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const languages = [
  { code: "hu", label: "Magyar" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function changeLanguage(lang: string) {
    if (lang === currentLang) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) segments[0] = lang;
    else segments.push(lang);
    const newPath = "/" + segments.join("/");
    startTransition(() => {
      router.push(newPath);
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    changeLanguage(e.target.value);
  }

  return (
    <div className="relative inline-block w-full flexEnd mr-4">
      {currentLang === "hu" ? (
        <Image src="/hu.png" alt="hungarianflag" width={24} height={18} />
      ) : (
        <Image src="/gb.png" alt="britishflag" width={24} height={18} />
      )}
      <select
        value={currentLang}
        onChange={handleChange}
        className=" hover:bg-gray-200  ml-2 bg-slate-50 text-gray-700 py-1 pl-1 pr-2 rounded cursor-pointer text-sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
