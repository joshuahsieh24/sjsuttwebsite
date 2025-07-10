"use client";
import Head from "next/head";
import { useEffect } from "react";

export default function QuestionsPage() {
  useEffect(() => {
    const faqContainer = document.querySelector(".faq-content");

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const groupHeader = target.closest(".faq-group-header") as HTMLElement | null;
      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group?.querySelector(".faq-group-body");
      const icon = groupHeader.querySelector("svg");

      // Toggle the FAQ answer visibility
      if (groupBody) {
        groupBody.classList.toggle("open");
      }

      const otherGroups = faqContainer?.querySelectorAll(".faq-group");
      otherGroups?.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector(".faq-group-body");
          const otherIcon = otherGroup.querySelector(".faq-group-header svg");
          otherGroupBody?.classList.remove("open");
          otherIcon?.classList.remove("faq-minus");
          otherIcon?.classList.add("faq-plus");
        }
      });

      if (icon) {
        if (icon.classList.contains("faq-plus")) {
          icon.classList.remove("faq-plus");
          icon.classList.add("faq-minus");
        } else {
          icon.classList.remove("faq-minus");
          icon.classList.add("faq-plus");
        }
      }
    };

    if (faqContainer) {
      faqContainer.addEventListener("click", handleClick as EventListener);
    }

    return () => {
      if (faqContainer) {
        faqContainer.removeEventListener("click", handleClick as EventListener);
      }
    };
  }, []);

  // SVGs for plus and minus
  const MinusIcon = (
    <svg className="faq-minus text-[#e4e4e4] text-xl w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
  const PlusIcon = (
    <svg className="faq-plus text-[#e4e4e4] text-xl w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );

  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      <section className="py-10 bg-[#141416] min-h-screen">
        <div className="max-w-[800px] mx-auto px-4">
          <h3 className="text-3xl font-semibold text-[#e4e4e4] text-center pb-8">
            Frequently Asked Questions
          </h3>

          <div className="faq-content">
            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">What is a professional fraternity?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body open overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  A professional fraternity is a brotherhood consisting chiefly
                  of individuals in a specific field of education, promoting
                  professional development in addition to strengthening
                  brotherly ties.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">What is rush?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  Rush is an opportunity for you to learn more about Theta Tau
                  by meeting both our active and graduated brothers. Rush
                  consists of multiple events that will give you a taste of what
                  our fraternity stands for, whether you are a good fit for us,
                  and whether we are a good fit for you. At the end of rush, we
                  extend a limited number of interviews and bids. Those who
                  receive bids can then decide whether or not they would like to
                  pledge. Rushing is completely free of charge and there are no
                  obligations.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">Who can rush?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  Students must be full-time students and be in good academic
                  standing with the university (above 2.0 GPA). Students
                  studying that are studying Masters are also encouraged to
                  rush.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">What is a bid?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  A bid is a formal invitation to begin pledging, the process of
                  becoming a brother.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">How do you choose who receives a bid?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  Theta Tau searches for engineers who have a strong foundation
                  in its three pillars: Brotherhood, Professionalism, and
                  Service. We review each applicant as a whole (grades,
                  personality, professionalism, resume, etc.) to determine
                  whether we are the right fit for you.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">Do you only accept engineering majors?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  No, we have accepted students of related majors in the past
                  such as Computer Science, Applied Math, Packaging, and
                  Cognitive Science.
                </p>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="faq-group border-b border-[#e4e4e4] pb-5 mb-2">
              <div className="faq-group-header flex items-center justify-between cursor-pointer py-4 relative">
                <h4 className="font-semibold text-lg text-[#e4e4e4]">What is pledging?</h4>
                {MinusIcon}
              </div>
              <div className="faq-group-body overflow-hidden transition-all duration-500 text-[#e4e4e4] px-4">
                <p className="text-base font-light">
                  Pledging is the process by which individuals integrate
                  themselves into the brotherhood. It is led by pledge
                  instructors, who assist the pledges in developing their
                  professional skills, aiding the community, and most important
                  of all, getting to know their future brothers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}