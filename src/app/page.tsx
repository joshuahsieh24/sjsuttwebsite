'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex flex-col justify-end min-h-[970px] font-sans">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/group1.png"
          alt=""
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          aria-hidden="true"
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-black/60" aria-hidden="true" />
      <div className="max-w-[1100px] mx-auto px-4 w-full pb-20">
        <div className="flex flex-col items-start">
          <h1 className="flex flex-col text-white leading-[0.9] text-[clamp(3rem,8vw,7rem)] font-bold tracking-tight animate-fade-in-up">
            <span>THETA TAU</span>
          </h1>
          <p className="flex flex-col text-white text-[2rem] font-thin leading-tight pt-5">
            <span className="animate-fade-in-up animation-delay-800">
              Premier Professional <span className="font-semibold">CO-ED</span> Engineering
            </span>
            <span className="animate-fade-in-up animation-delay-1200">Fraternity at San Jose State</span>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
}