import { cormorant, inter } from "@/app/ui/fonts";
import Button from "@/app/ui/button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { getRandomMembers } from "@/app/utils/randomMembers";

interface AboutUsProps {
  lang: string;
  members: { name: string; profileImg: string }[];
}

export default async function AboutUs({ lang, members }: AboutUsProps) {
  const t = await getTranslations({ locale: lang, namespace: "about" });

  const randomMembers = getRandomMembers(members, 8);
  return (
    <section className="mx-container mb-10 lg:h-[600px] h-auto bg-white rounded shadow-xl">
      <div className="lg:flexCenter h-full md:p-16 p-4 gap-8">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <h1 className={`${cormorant.className} text-lg md:text-xl font-bold`}>
            {t("title")}
          </h1>
          <h2
            className={`${cormorant.className} text-4xl md:text-6xl lg:text-7xl text-black`}
          >
            {t("heading")}
          </h2>
          <article
            className={`${inter.className} mt-4 text-sm lg:text-base text-start`}
          >
            {t("aboutus")}
          </article>
          <div className="flexCenter md:flexStart gap-4 mt-6">
            <Button href="/history" variant="outline">
              {t("buttons.history")}
            </Button>
            <Button href="/members" variant="solid">
              {t("buttons.members")}
            </Button>
          </div>
        </div>
        <div className="lg:w-[384px] lg:h-[384px] max-md:gap-2 max-lg:flexCenter max-lg:pt-5 flex flex-wrap flex-row-reverse">
          {randomMembers.map((member) => (
            <div
              key={member.name}
              className="relative group w-32 h-32 max-md:rounded max-md:overflow-hidden "
            >
              <Image
                src={member.profileImg}
                alt={member.name}
                className="object-cover aspect-square group-hover:scale-x-[-1] duration-200 transition-transform"
                sizes="auto"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
