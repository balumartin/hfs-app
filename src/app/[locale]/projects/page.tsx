import navHU from "@/locales/hu/nav.json";
import navEN from "@/locales/en/nav.json";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import prijectHU from "@/locales/hu/projects.json";
import projectEN from "@/locales/en/projects.json";
import ProjectCard from "@/components/ProjectCard";


export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const pageTitle = locale === "hu" ? navHU : navEN;
  const projects = locale === "hu" ? prijectHU : projectEN;

  const descArray = projects.sort((a, b) => {
    const aString = a.date.split(" ");
    const bString = b.date.split(" ");
    const aYear = parseInt(aString[0])
    const bYear = parseInt(bString[0])

    return bYear - aYear
})

  return (
    <main className="mx-container b-container py-6 px-2 md:px-10 mb-10">
      <h1 className="mb-5 flexStart gap-2 text-2xl border-b border-slate-200 text-slate-700">
        <BookOpenIcon className="w-6 inline-block" />
        <span>{pageTitle.projects}</span>
      </h1>
      <section className="">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {descArray.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      </section>
    </main>
  );
}
