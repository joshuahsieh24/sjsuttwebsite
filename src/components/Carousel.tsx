'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  // Auto-advance 5s after each index change:
  useEffect(() => {
    const timer = window.setTimeout(next, 5000);
    return () => window.clearTimeout(timer);
  }, [index, images.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden shadow-lg">
      {/* image and arrows in the same container */}
      <div className="relative aspect-[3/2] sm:h-96 w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            className="w-full h-full object-contain sm:object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full p-2 transition"
          aria-label="Previous Slide"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl rounded-full p-2 transition"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
