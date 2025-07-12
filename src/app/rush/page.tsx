"use client";

import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function RushPage() {
    return (
        <>
            <section className="min-h-[120px] flex items-center bg-[#18181a] text-white py-10">
                <div className="max-w-[1100px] mx-auto px-4 w-full">
                    <h1 className="text-3xl md:text-5xl font-semibold flex justify-center items-center text-center mb-5">
                        Recruitment
                    </h1>
                </div>
            </section>

            <section className="min-h-[300px] flex items-center bg-[#141416] text-white py-10">
                <div className="max-w-[1100px] mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">

                    <div className="flex-1 w-full md:max-w-[50%] text-left">
                        <div className="grid grid-rows-[40px_auto]">
                        <h2 className="text-[#fecb33] font-semibold mb-2 text-2xl">FALL 2025 RUSH!</h2>
                        <p className="text-[#787e91] text-base">
                            Rush is an opportunity for students to learn more about Theta Tau. 
                            It consists of multiple events that will give you a taste of what our fraternity stands for, whether you are a good fit for us, and whether we are a good fit for you. 
                            At the end of rush, we extend a limited number of interviews and bids. 
                            Those who receive bids can then decide whether or not they would like to pledge. 
                            Rushing is completely free of charge and there are no obligations.
                        </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full md:max-w-[50%]">
                        <Image
                        src="/images/group2.png"
                        alt="Group Photo version 2"
                        width={700}
                        height={500}
                        className="w-full h-auto rounded-lg object-cover"
                        priority
                        />
                    </div>

                    </div>
                </div>
            </section>


            <section className="py-16 bg-[#18181a]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-[#fecb33] font-semibold text-3xl mb-10 text-center">Rush Week Timeline</h2>
                        <VerticalTimeline lineColor="#fecb33">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: "#18181a", color: "#e4e4e4", borderTop: "4px solid #fecb33" }}
                                contentArrowStyle={{ borderRight: "7px solid #18181a" }}
                                iconStyle={{ background: "#fecb33", color: "#18181a" }}
                            >
                                <h3 className="vertical-timeline-element-title font-bold text-lg">Info Night</h3>
                                <p>
                                Meet the brothers and learn about Theta Tau! <br />
                                7:00 PM @ Student Union Room 1
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: "#18181a", color: "#e4e4e4", borderTop: "4px solid #fecb33" }}
                                contentArrowStyle={{ borderRight: "7px solid #18181a" }}
                                iconStyle={{ background: "#fecb33", color: "#18181a" }}
                            >
                                <h3 className="vertical-timeline-element-title font-bold text-lg">Professional Night</h3>
                                <p>
                                Resume workshop and networking with alumni.<br />
                                7:00 PM @ Engineering Building 285
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: "#18181a", color: "#e4e4e4", borderTop: "4px solid #fecb33" }}
                                contentArrowStyle={{ borderRight: "7px solid #18181a" }}
                                iconStyle={{ background: "#fecb33", color: "#18181a" }}
                            >
                                <h3 className="vertical-timeline-element-title font-bold text-lg">Social Night</h3>
                                <p>
                                Fun activities and games with the brothers.<br />
                                6:00 PM @ Tower Lawn
                                </p>
                            </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        </>
    )
}