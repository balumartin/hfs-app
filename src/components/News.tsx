import { NEWS } from "@/constants";
import Card from "./Card";

export default function News() {
  return (
    <section className="mx-container mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS?.map((n) => (
          <Card key={n.key} item={n} />
        ))}
      </div>
    </section>
  );
}
