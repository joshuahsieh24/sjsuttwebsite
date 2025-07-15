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
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768); // md breakpoint is 768px
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Only set up animations if screen is md or larger
    if (!isMdOrLarger) {
      // For smaller screens, immediately show all content without animations
      setRevealedSections(new Set([0, 1, 2]));
      
      // Add visible classes to all elements immediately
      sectionRefs.current.forEach((section) => {
        if (section) {
          const header = section.querySelector('h1');
          if (header) {
            header.classList.add('visible');
          }
          const cards = section.querySelectorAll('.member-card');
          cards.forEach((card) => {
            card.classList.add('visible');
          });
        }
      });
      
      return;
    }

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
          setRevealedSections(prev => {
            const highestRevealedSection = Math.max(...prev);
            
            if (sectionIndex === highestRevealedSection) {
              // Check if section is below viewport (scrolled past it going up)
              const rect = entry.target.getBoundingClientRect();
              if (rect.top > window.innerHeight) {
                const newSet = new Set(prev);
                newSet.delete(sectionIndex);
                
                // Remove visible classes
                const header = entry.target.querySelector('h1');
                if (header) {
                  header.classList.remove('visible');
                }
                const cards = entry.target.querySelectorAll('.member-card');
                cards.forEach((card) => {
                  card.classList.remove('visible');
                });
                
                return newSet;
              }
            }
            return prev;
          });
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
  }, [scrollDirection, isMdOrLarger]);

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