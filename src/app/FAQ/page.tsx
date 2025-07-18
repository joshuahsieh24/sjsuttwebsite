'use client';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is a professional fraternity?',
    answer:
      'A professional fraternity is a brotherhood consisting chiefly of individuals in a specific field of education, promoting professional development in addition to strengthening brotherly ties.',
  },
  {
    question: 'What is rush?',
    answer:
      'Rush is an opportunity for you to learn more about Theta Tau by meeting both our active and graduated brothers. Rush consists of multiple events that give you a taste of what our fraternity stands for, whether you are a good fit for us, and whether we are a good fit for you.',
  },
  {
    question: 'Who can rush?',
    answer:
      'Students must be full-time and in good academic standing with the university (above 2.0 GPA). Masters students are also encouraged to rush.',
  },
  {
    question: 'What is a bid?',
    answer:
      'A bid is a formal invitation to begin pledging — the process of becoming a brother.',
  },
  {
    question: 'How do you choose who receives a bid?',
    answer:
      'Theta Tau looks for engineers who exemplify Brotherhood, Professionalism, and Service. We review each applicant holistically: grades, personality, professionalism, resume, and more.',
  },
  {
    question: 'Do you only accept engineering majors?',
    answer:
      'No, we\'ve accepted students in Computer Science, Applied Math, Packaging, and Cognitive Science as well.',
  },
  {
    question: 'What is pledging?',
    answer:
      'Pledging is the process by which individuals integrate themselves into the brotherhood. It includes professional development, service projects, and bonding activities.',
  },
];

export default function QuestionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first one open by default
  const headerRef = useRef<HTMLHeadingElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            // Fade in header
            entry.target.classList.add('visible');
            
            // After header animation, start FAQ items cascade
            setTimeout(() => {
              if (faqContainerRef.current) {
                const faqItems = faqContainerRef.current.querySelectorAll('.faq-item');
                faqItems.forEach((item, index) => {
                  setTimeout(() => {
                    item.classList.add('visible');
                  }, index * 100); // 100ms delay between each FAQ item
                });
              }
            }, 400); // Start FAQs 400ms after header begins
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      observer.disconnect();
    };
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

          <div ref={faqContainerRef} className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-item border-b border-[#e4e4e4] pb-4 transition-all stagger-fade"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                  >
                    <h4 className="font-semibold text-lg text-[#e4e4e4]">
                      {faq.question}
                    </h4>
                    <span className="text-[#e4e4e4] w-6 h-6 flex items-center justify-center transition-transform duration-300">
                      {isOpen ? (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <line
                            x1="5"
                            y1="12"
                            x2="19"
                            y2="12"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <line
                            x1="12"
                            y1="5"
                            x2="12"
                            y2="19"
                            strokeLinecap="round"
                          />
                          <line
                            x1="5"
                            y1="12"
                            x2="19"
                            y2="12"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 px-2 text-[#e4e4e4] ${
                      isOpen ? 'max-h-[500px] opacity-100 pt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base font-light">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}