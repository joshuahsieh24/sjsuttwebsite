"use client";

import Carousel from "@/components/Carousel";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useRef } from 'react';

const carouselImages = [
        './images/rush.jpg',
        './images/rush_kyle.JPG',
        './images/rush_grp.JPG',
        './images/rush_logan.JPG',
        './images/rush_kylie.JPG',
        
    ];

export default function RushPage() {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const contentSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Handle timeline animations
        const items = document.querySelectorAll<
        HTMLElement
        >('.vertical-timeline-element--work');

        const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
            });
        },
        { threshold: 0.2 }
        );

        items.forEach((el) => io.observe(el));

        // Handle header and content section fade-in
        const fadeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === headerRef.current) {
                            // Fade in header
                            entry.target.classList.add('visible');
                            
                            // After header animation, fade in content section
                            setTimeout(() => {
                                if (contentSectionRef.current) {
                                    contentSectionRef.current.classList.add('visible');
                                }
                            }, 400); // Start content fade-in 400ms after header
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            fadeObserver.observe(headerRef.current);
        }

        return () => {
            io.disconnect();
            fadeObserver.disconnect();
        };
    }, []);

    return (
        <>
            <section className="min-h-[120px] flex items-center bg-[#18181a] text-white py-10">
                <div className="max-w-[1100px] mx-auto px-4 w-full">
                    <h1 
                        ref={headerRef}
                        className="text-3xl md:text-5xl font-thin flex justify-center items-center text-center mb-5 fade-in-section"
                    >
                        Recruitment
                    </h1>
                </div>
            </section>

            <section className="min-h-[300px] flex items-center bg-[#141416] text-white py-10">
                <div 
                    ref={contentSectionRef}
                    className="max-w-[1100px] mx-auto px-4 w-full fade-in-section"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">

                    <div className="flex-1 w-full md:max-w-[50%] text-left">
                        <div className="grid grid-rows-[40px_auto]">
                        <h2 className="text-[#fecb33] font-thin mb-2 text-2xl">FALL 2025 RUSH</h2>
                        <p className="text-[#787e91] text-base">
                            Rush is an opportunity for students to learn more about Theta Tau. 
                            It consists of multiple events that will give you a taste of what our fraternity stands for, whether you are a good fit for us, and whether we are a good fit for you. 
                            At the end of rush, we extend a limited number of interviews and bids. 
                            Those who receive bids can then decide whether or not they would like to pledge. 
                            Rushing is completely free of charge and there are no obligations.
                        </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full md:max-w-[50%] slide-in-right">
                        <Carousel images={carouselImages} />
                    </div>

                    </div>
                </div>
            </section>


            <section className="py-16 bg-[#18181a]">
                <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-[#fecb33] font-thin text-3xl mb-10 text-center">
                    Rush Week Timeline
                </h2>
                <VerticalTimeline lineColor="#fecb33">
                    {[
                    {
                        title: 'Info Night',
                        body: 'Meet the brothers and learn about Theta Tau! 7:00 PM @ Student Union Room 1',
                    },
                    {
                        title: 'Professional Night',
                        body: 'Resume workshop and networking with alumni. 7:00 PM @ Engineering Building 285',
                    },
                    {
                        title: 'Social Night',
                        body: 'Fun activities and games with the brothers. 6:00 PM @ Tower Lawn',
                    },
                    ].map((evt, i) => (
                    <VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                        background: '#18181a',
                        color: '#e4e4e4',
                        borderTop: '4px solid #fecb33',
                        }}
                        contentArrowStyle={{
                        borderRight: '7px solid #18181a',
                        }}
                        iconStyle={{ background: '#fecb33', color: '#18181a' }}
                    >
                        <h3 className="vertical-timeline-element-title font-bold text-lg">
                        {evt.title}
                        </h3>
                        <p>{evt.body}</p>
                    </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                </div>
            </section>
        </>
    )
}