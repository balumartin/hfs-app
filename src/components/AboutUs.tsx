import { MEMBERS } from "@/constants";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="mx-container my-10 h-[600px] bg-white rounded shadow-xl">
      <div className="flexCenter h-full p-16 gap-8">
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="font-cormorant text-xl w-full font-bold">
            Magyar Szómaesztétikai Társaság
          </h3>
          <h2 className="text-7xl text-start font-cormorant">This is Us</h2>
          <article className="mt-4 text-md font-akzidenz text-start">
            A Magyar Szómaesztétikai Fórum azzal a céllal jött létre, hogy a
            szómaesztétika diskurzusa és gyakorlatai iránt elkötelezett magyar
            tudósokat összekapcsolja és képviselje. A szómaesztétika egy olyan
            széles kutatási terület, amely az esztétikai dinamikákba ágyazott
            tapasztalás és a kreatív önformálás elsődleges ágenseként értett
            eleven test megélésének és használatának kritikai tanulmányozásával
            és melioratív gondozásával foglalkozik. A Magyar Szómaesztétikai
            Fórum nonprofit szervezetként arra hivatott, hogy más országok
            hasonló tudományos szervezeteivel, egyesületeivel és fórumaival
            egyenrangúan működjön együtt, tagjainak kapcsolódó munkáit hűen
            közvetítse, a kutatási terület magyarországi megismertetését
            előmozdítsa.
          </article>
          <div className="flexStart gap-6">
            <Link
              href={"/history"}
              className="mt-4 block w-32 text-center bg-slate-600 hover:bg-slate-500 text-white text-md py-2 px-4"
            >
              Our History
            </Link>
            <Link
              href={"/members"}
              className="mt-4 block w-32 text-center bg-slate-600 hover:bg-slate-500 text-white text-md py-2 px-4"
            >
              Our Members
            </Link>
          </div>
        </div>
        <div className="w-[384px] h-[384px] flex flex-wrap flex-row-reverse">
          {MEMBERS.map((member) => (
            <div key={member.name} className="w-32 h-auto">
              <img
                src={member.profileImg}
                alt={member.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
