"use client";

import { MEMBERS } from "@/constants";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="mx-container mb-10 lg:h-[600px] h-auto bg-white rounded shadow-xl">
      <div className="lg:flexCenter h-full md:p-16 p-4 gap-8">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <h3 className="font-cormorant text-xl w-full font-bold">
            Magyar Szómaesztétikai Társaság
          </h3>
          <h2 className="text-7xl text-black text-start font-cormorant">This is Us</h2>
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
          <div className="flexCenter max-sm:mb-8 md:flexStart gap-6">
            <Link
              href={"/history"}
              className="mt-4 rounded block w-32 text-center bg-slate-600 hover:bg-slate-500 active:shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-white text-md py-2 px-4"
            >
              Our History
            </Link>
            <Link
              href={"/members"}
              className="mt-4 rounded block w-32 text-center bg-slate-600 hover:bg-slate-500 active:shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-white text-md py-2 px-4"
            >
              Our Members
            </Link>
          </div>
        </div>
        <div className="lg:w-[384px] lg:h-[384px] max-md:gap-2 max-lg:flexCenter max-lg:pt-5 flex flex-wrap flex-row-reverse">
          {MEMBERS.map((member) => (
            <div key={member.name} className="group w-32 h-32 max-md:rounded max-md:overflow-hidden ">
              <img
                src={member.profileImg}
                alt={member.name}
                className="w-full h-full object-cover aspect-square group-hover:scale-x-[-1] duration-200 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
