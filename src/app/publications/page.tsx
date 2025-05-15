import { MEMBERS } from "@/constants";

interface Publication {
  title: string;
  date: string;
  author: string;
  image: string;
}

export default function HomePage() {

  const allPublications: Publication[] = MEMBERS.flatMap((m) =>
    m.publications.map((pub) => ({
      ...pub,
      image: m.profileImg,
      author: m.name,
    }))
  );

  const sorted = allPublications.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="relative mx-container py-5">
      <h1 className="text-3xl font-bold my-10">Legfrissebb publikációk</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sorted.map((pub, i) => (
            <div key={i} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{pub.title}</h2>
              <p className="text-sm text-gray-500">{pub.date}</p>
              <p className="mt-2 text-gray-700">Szerző: {pub.author}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
