import huContent from '@/locales/hu/about.json';
import enContent from '@/locales/en/about.json';
import Link from "next/link";
import { MEMBERS } from '@/constants';
import { cormorant, inter } from '@/app/ui/fonts';

interface AboutUsProps {
    lang: string;
}

export default function AboutUs({ lang }: AboutUsProps) {

const content = lang === 'hu' ? huContent : enContent;



  return (
    <section className="mx-container mb-10 lg:h-[600px] h-auto bg-white rounded shadow-xl">
      <div className="lg:flexCenter h-full md:p-16 p-4 gap-8">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <h3 className={`${cormorant.className} text-xl w-full font-bold`}>
            {content.title}
          </h3>
          <h2 className={`${cormorant.className} text-7xl text-black text-start`}>{content.heading}</h2>
          <article className={`${inter.className} mt-4 text-md text-start`}>
            {content.aboutus}
          </article>
          <div className="flexCenter max-sm:mb-8 md:flexStart gap-6">
            <Link
              href={"/history"}
              className="mt-4 rounded block w-32 text-center bg-slate-600 hover:bg-slate-500 active:shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-white text-md py-2 px-4"
            >
              {content.buttons.history}
            </Link>
            <Link
              href={"/members"}
              className="mt-4 rounded block w-32 text-center bg-slate-600 hover:bg-slate-500 active:shadow-[0_10px_20px_rgba(0,0,0,0.2)] text-white text-md py-2 px-4"
            >
              {content.buttons.members}
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
