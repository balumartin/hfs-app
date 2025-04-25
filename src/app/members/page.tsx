import MemberCard from "@/components/MemberCard";
import { MEMBERS } from "@/constants";

export default function Members() {
  return (
    <section className="mx-container">
    <h2 className="text-3xl font-bold mb-6 sr-only">Csapattagok</h2>
    <div className="b-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {MEMBERS.map((m) => (
        <MemberCard key={m.key} member={m} />
      ))}
    </div>
  </section>
  );
}
