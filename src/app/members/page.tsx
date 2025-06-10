import MemberCard from "@/components/MemberCard";
import { MEMBERS } from "@/constants";

export default function Members() {
  return (
    <section className="mx-container">
      <div className="mb-5 px-6 py-10 flexCenter flex-col">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero et quasi deleniti porro adipisci illum, natus consequuntur dicta."
          </p>
          
        </blockquote>
      </div>
      <div className="b-container p-10 ">
        <h1 className="mb-5 font-bold text-2xl text-slate-700 border-b border-slate-200">
          Tagok
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEMBERS.map((m) => (
            <MemberCard key={m.key} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
