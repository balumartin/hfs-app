"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: { name: string; title: string; imageUrl: string; link: string }[];
};

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imgIdx, setImgIdx] = useState(0);

  function prevImage() {
    setImgIdx((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  function nextImage() {
    setImgIdx((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <section className="mx-container w-full mt-16 mb-10 overflow-hidden ">
      <div className="relative h-[500px] lg:rounded overflow-hidden cursor-pointer transition-all duration-100 delay-100 ease-out">
        <div
          className="relative flex transition-transform duration-1000 ease-in-out "
          style={{ transform: `translateX(-${imgIdx * 100}%)` }}
        >
          {imageUrls.map((img) => (
            <div
              key={img.imageUrl}
              className="relative w-full h-[500px] flex-shrink-0"
            >
              <Image
                src={img.imageUrl}
                alt={img.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevImage}
          className="absolute w-12 flexCenter h-full top-1/2 left-0 -translate-y-1/2 hover:text-white  hover:bg-black/20"
        >
          <ChevronLeftIcon width={36} className="" />
        </button>
        <button
          onClick={nextImage}
          className="absolute w-12 flexCenter h-full top-1/2 right-0 -translate-y-1/2 hover:text-white hover:bg-black/20"
        >
          <ChevronRightIcon width={36} />
        </button>
      </div>
      <a
        target="_blank"
        href={imageUrls[imgIdx]?.link}
        className="relative flexCenter h-4 text-xs w-max italic mx-auto text-slate-500 hover:text-blue-600 hover:underline"
      >
        {imageUrls[imgIdx]?.title}
      </a>
    </section>
  );
}
