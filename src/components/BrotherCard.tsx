import Image from "next/image";
import { useState } from "react";

type Brother = {
  name: string;
  image: string;
  major: string;
  class: string;
  hoverImage?: string;
};

export default function BrotherCard({
  name,
  image,
  major,
  class: className,
  hoverImage,
}: Brother) {
  const [baseError, setBaseError] = useState(false);
  const [hoverError, setHoverError] = useState(false);

  const fallbackImage = "/headshots/no_photo_available.jpg";
  const cleanImage = image.replace(/^\./, "");
  const cleanHoverImage = hoverImage ? hoverImage.replace(/^\./, "") : undefined;

  return (
    <div className="bg-[#18181a] shadow-lg flex flex-col items-center p-4 pt-8">
      <div className="w-60 h-60 relative mb-4 overflow-hidden group">
        <Image
          src={baseError ? fallbackImage : cleanImage}
          alt={name}
          fill
          className={`border-2 border-[#e4e4e4] object-cover object-center transition-opacity duration-300
            ${cleanHoverImage && !hoverError ? "group-hover:opacity-0" : ""}`}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, 600px"
          onError={() => setBaseError(true)}
        />

        {cleanHoverImage && !hoverError && (
          <Image
            src={cleanHoverImage}
            alt={`${name} (hover)`}
            fill
            className="border-2 border-[#e4e4e4] object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            onError={() => setHoverError(true)}
          />
        )}
      </div>

      <div className="w-full flex flex-col items-start">
        <h2 className="text-xl font-thin text-white">{name}</h2>
        <p className="text-[#e4e4e4] text-sm">Major: {major}</p>
        <p className="text-[#e4e4e4] text-sm">Class: {className}</p>
      </div>
    </div>
  );
}
