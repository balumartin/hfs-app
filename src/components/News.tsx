import { NEWS } from "@/constants";
import Card from "./Card";

export default function News() {
  return (
    <section className="mx-container mb-10">
      <h2 className="pt-10 bold-30 sr-only">Legfrissebb hírek</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {NEWS.map((n) => (
          <Card
            key={n.key}
            autor={n.autor}
            title={n.title}
            subtitle={n.subtitle}
            backgroundImg={n.backgroundImg}
          />
        ))}
      </div>
    </section>
  );
}
