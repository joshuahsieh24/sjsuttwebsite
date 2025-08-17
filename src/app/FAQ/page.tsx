'use client';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQDoc {
  faqs: FAQItem[];
}

export default function QuestionsPage() {
  const [faqDoc, setFaqDoc] = useState<FAQDoc | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open
  const [error, setError] = useState<string | null>(null);

  const headerRef = useRef<HTMLHeadingElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/faq.json', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as FAQDoc;
        if (mounted) setFaqDoc(data);
      } catch (e) {
        if (mounted) setError('Failed to load FAQ. Please try again later.');
        console.error(e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === headerRef.current) {
            entry.target.classList.add('visible');
            setTimeout(() => {
              if (faqContainerRef.current) {
                const faqItems = faqContainerRef.current.querySelectorAll('.faq-item');
                faqItems.forEach((item, index) => {
                  setTimeout(() => item.classList.add('visible'), index * 100);
                });
              }
            }, 400);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      <section className="py-10 bg-[#141416] min-h-screen text-white">
        <div className="max-w-[800px] mx-auto px-4">
          <h1
            ref={headerRef}
            className="text-3xl font-thin text-[#e4e4e4] text-center pb-8 fade-in-section"
          >
            Frequently Asked Questions
          </h1>

          {error && <p className="text-red-400 text-center mb-6">{error}</p>}
          {!faqDoc && !error && <p className="text-center text-[#e4e4e4]">Loading…</p>}

          {faqDoc && (
            <div ref={faqContainerRef} className="space-y-4">
              {faqDoc.faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="faq-item border-b border-[#e4e4e4] pb-4 transition-all stagger-fade"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <h4 className="font-semibold text-lg text-[#e4e4e4]">
                        {faq.question}
                      </h4>
                      <span className="text-[#e4e4e4] w-6 h-6 flex items-center justify-center transition-transform duration-300">
                        {isOpen ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                          </svg>
                        )}
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      className={`overflow-hidden transition-all duration-500 px-2 text-[#e4e4e4] ${
                        isOpen ? 'max-h-[500px] opacity-100 pt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-base font-light whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
