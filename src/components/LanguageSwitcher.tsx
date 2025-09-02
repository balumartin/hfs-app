"use client";

import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
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

    startTransition(() => {
      router.push(pathname, { locale: lang });
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    changeLanguage(e.target.value);
  }

  return (
    <div className="relative inline-block w-full flexEnd mr-4">
      {currentLang === "hu" ? (
        <Image src="/hu.png" alt="hungarianflag" width={20} height={15} />
      ) : (
        <Image src="/gb.png" alt="britishflag" width={20} height={15} />
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
