// components/FlipCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FlipCardProps {
  frontImage: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<FlipCardProps> = ({ frontImage, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-80 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <Image
            src={frontImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-white text-center">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>

        <div className="absolute w-full h-full bg-[#141416] text-white rounded-lg p-6 transform rotate-y-180 backface-hidden shadow-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-semibold text-[#e4e4e4] mb-2">{title}</h3>
          <p className="text-base text-[#787e91]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
