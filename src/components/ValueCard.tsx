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
      className="w-full h-80 perspective cursor-pointer group"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden overflow-hidden shadow-lg hover:scale-105 duration-300">
          <Image
            src={frontImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white text-center group-hover:text-[#fecb33] duration-300">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>

        <div className="absolute w-full h-full bg-[#18181a] text-white rounded-lg p-6 transform rotate-y-180 backface-hidden shadow-lg flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-[#e4e4e4] mb-2 text-center">{title}</h3>
          <p className="text-base text-[#787e91] text-left ml-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
