import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  date,
  location,
  link,
}: ProjectProps) {
  return (
    <Link
      target="about"
      href={link}
      className="flex flex-col bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          sizes="auto"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
      </div>
      <div className="mt-auto p-4">
        <p className="text-sm text-gray-400">
          {date} | {location}
        </p>
      </div>
    </Link>
  );
}
