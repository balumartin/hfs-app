import { NEWS } from "@/constants";
import Card from "./Card";

export default function News() {
  return (
    <section className="mx-container b-container py-6 px-10 mb-10">
      <h1 className="mb-5 font-bold text-2xl text-slate-700 border-b border-slate-200">
        Legfrissebb hírek
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS?.map((n, idx) => idx < 3 && <Card key={n.key} item={n} />)}
      </div>
      <p className="flexEnd text-lg mt-5">További hírek</p>
    </section>
  );
}
