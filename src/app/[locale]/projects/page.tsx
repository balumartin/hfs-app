import pageTitleHU from "@/locales/hu/pageTitle.json";
import pageTitleEN from "@/locales/en/pageTitle.json";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const pageTitle = locale === "hu" ? pageTitleHU : pageTitleEN;

  return (
    <main className="mx-container b-container py-6 px-2 md:px-10 mb-10">
      <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
        <BookOpenIcon className="w-6 inline-block" />
        <span>{pageTitle.projects}</span>
      </h1>
      <div className="flexCenter flex-col  min-h-screen">
        <h2 className="text-5xl font-bold mb-4">
          🚧 Oldal fejlesztés alatt 🚧
        </h2>
        <p className="text-lg text-gray-700">
          Ez az oldal hamarosan elérhető lesz.
        </p>
      </div>
    </main>
  );
}
