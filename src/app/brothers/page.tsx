'use client';

import { useEffect, useRef, useState } from 'react';
import roster from "../../components/activeInfo/roster.json";
import BrotherCard from "@/components/BrotherCard";
import OfficerCard from "@/components/OfficerCard";

export default function BrothersPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [revealedSections, setRevealedSections] = useState<Set<number>>(new Set());
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionIndex = sectionRefs.current.findIndex(ref => ref === entry.target);
        
        if (entry.isIntersecting) {
          // When scrolling down, reveal sections
          if (scrollDirection === 'down' || !revealedSections.has(sectionIndex)) {
            setRevealedSections(prev => new Set(prev).add(sectionIndex));
            
            // Add visible class to header
            const header = entry.target.querySelector('h1');
            if (header) {
              header.classList.add('visible');
              
              // After header animation, start card animations
              setTimeout(() => {
                const cards = entry.target.querySelectorAll('.member-card');
                cards.forEach((card, index) => {
                  setTimeout(() => {
                    card.classList.add('visible');
                  }, index * 100);
                });
              }, 400);
            }
          }
        } else if (!entry.isIntersecting && scrollDirection === 'up') {
          // When scrolling up, only hide if this is the highest revealed section
          const highestRevealedSection = Math.max(...revealedSections);
          
          if (sectionIndex === highestRevealedSection) {
            // Check if section is below viewport (scrolled past it going up)
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
              setRevealedSections(prev => {
                const newSet = new Set(prev);
                newSet.delete(sectionIndex);
                return newSet;
              });
              
              // Remove visible classes
              const header = entry.target.querySelector('h1');
              if (header) {
                header.classList.remove('visible');
              }
              const cards = entry.target.querySelectorAll('.member-card');
              cards.forEach((card) => {
                card.classList.remove('visible');
              });
            }
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [scrollDirection, revealedSections]);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <>
      <section ref={setSectionRef(0)} className="min-h-[120px] bg-[#141416] text-white py-10">
        <div className="max-w-[1100px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-5xl font-thin flex justify-center items-center text-center mb-15 fade-in-section">
            Executive Board
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {roster.executive.map((officer, index) => (
              <div key={index} className="member-card stagger-fade">
                <OfficerCard
                  name={officer.name}
                  image={officer.image}
                  major={officer.major}
                  class={officer.class} 
                  role={officer.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section ref={setSectionRef(1)} className="min-h-[120px] bg-[#141416] text-white py-10">
        <div className="max-w-[1100px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-5xl font-thin flex justify-center items-center text-center mb-15 fade-in-section">
            Chapter Officers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {roster.chairs.map((officer, index) => (
              <div key={index} className="member-card stagger-fade">
                <OfficerCard
                  name={officer.name}
                  image={officer.image}
                  major={officer.major}
                  class={officer.class} 
                  role={officer.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section ref={setSectionRef(2)} className="min-h-[120px] bg-[#141416] text-white py-10">
        <div className="max-w-[1100px] mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-5xl font-thin flex justify-center items-center text-center mb-15 fade-in-section">
            Chapter Brothers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {roster.actives.map((officer, index) => (
              <div key={index} className="member-card stagger-fade">
                <BrotherCard
                  name={officer.name}
                  image={officer.image}
                  major={officer.major}
                  class={officer.class}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}