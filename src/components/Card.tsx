import Image from "next/image";

interface CardProps {
  autor: string;
  title: string;
  subtitle: string;
  backgroundImg: string;
}

export default function Card({ item }: { item: CardProps }) {
  return (
    <article className="flex flex-col p-1">
      <div className="group relative w-full h-[450px]  rounded overflow-hidden shadow-md hover:shadow-lg hover:bg-slate-200 transition-all hover:cursor-pointer duration-300">
        <div>
          <Image
            src={item.backgroundImg}
            alt={item.title}
            className="object-cover"
            sizes="auto"
            fill
          />
        </div>
        <div className="flex flex-col justify-end p-4">
          <h4 className="text-xl font-semibold text-black">{item.title}</h4>
          <h5 className="text-sm">{item.autor}</h5>
          <p className="text-sm mt-1">{item.subtitle}</p>
        </div>
      </div>
    </article>
  );
}
