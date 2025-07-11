'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div className="relative h-64 sm:h-96 aspect-[3/2]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <div
        onClick={prev}
        className="absolute left-0 top-0 bottom-0 flex items-center px-4 cursor-pointer group"
        aria-label="Previous Slide"
      >
        <div className="text-white text-3xl transition-transform duration-200 group-hover:scale-125 group-hover:text-gray-200 select-none">
          ←
        </div>
      </div>

      <div
        onClick={next}
        className="absolute right-0 top-0 bottom-0 flex items-center px-4 cursor-pointer group"
        aria-label="Next Slide"
      >
        <div className="text-white text-3xl transition-transform duration-200 group-hover:scale-125 group-hover:text-gray-200 select-none">
          →
        </div>
      </div>
    </div>
  );
};

export default Carousel;
