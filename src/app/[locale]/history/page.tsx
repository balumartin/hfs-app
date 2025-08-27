import { inter } from "@/app/ui/fonts";
import { getTranslations } from "next-intl/server";
import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "history" });
  const historyParts = t.raw("history") as string[];
  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;
  return (
    <main className="mx-container overflow-hidden relative mb-10">
      <div className="b-container py-6 md:px-10 px-2 ">
        <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
          <BookOpenIcon className="w-6 inline-block" />
          <span>{pageTitle.history}</span>
        </h1>
        <div
          className={`${inter.className} relative z-40 leading-relaxed flexStart flex-col gap-3 p-4 `}
        >
          {historyParts.map((part, i) => (
            <p key={i} className="mb-2">
              {part}
            </p>
          ))}
        </div>
        <div className="absolute top-2 blur-sm -right-16 w-[500px] h-auto z-10 scale-y-[-1] opacity-55">
          <img
            src="/hand_transparent.png"
            alt="hand image"
            className="inline"
          />
        </div>
        <div className="absolute top-[33%] blur-sm -left-12 w-[500px] h-auto z-10 opacity-55">
          <img
            src="/hand_transparent.png"
            alt="hand image"
            className="inline scale-x-[-1]"
          />
        </div>
        <div className="absolute top-[66%]  blur-sm -right-12 w-[500px] h-auto z-10 scale-y-[-1] opacity-55">
          <img
            src="/hand_transparent.png"
            alt="hand image"
            className="inline"
          />
        </div>
        <div className="absolute top-[90%] blur-sm -left-12 w-[500px] h-auto z-10 opacity-55">
          <img
            src="/hand_transparent.png"
            alt="hand image"
            className="inline scale-x-[-1]"
          />
        </div>
      </div>
    </main>
  );
}
