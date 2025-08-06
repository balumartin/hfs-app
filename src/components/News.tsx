import { NEWS } from "@/constants";
import Card from "./Card";
import Link from "next/link";

export default function News() {
  return (
    <section className="mx-container bg-white/95 b-container py-6 px-10 mb-10">
      <div className="mb-5 flex items-center gap-2 font-bold text-2xl text-slate-700 border-b border-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
          />
        </svg>
        <h3>Legfrissebb hírek</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS?.map((n, idx) => idx < 3 && <Card key={n.key} item={n} />)}
      </div>
      <Link href={"/#"} className="flexEnd text-lg mt-5">
        További hírek -
      </Link>
    </section>
  );
}
