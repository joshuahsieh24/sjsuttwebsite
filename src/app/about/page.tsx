import Head from "next/head";
import Carousel from "@/components/Carousel";
import ValueCard from "@/components/ValueCard";
import CompanyLogos from "@/components/CompanyLogoDisplay";

export default function About() {
    const carouselImages = [
        './images/retreat.jpg',
        './images/s25reveal.jpg',
    ]

    return (
    <>
        <Head>
            <title>About Us</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        </Head>

        <section className="min-h-[120px] flex items-center bg-[#18181a] text-white py-10">
            <div className="max-w-[1100px] mx-auto px-4 w-full">
                <h1 className="text-3xl md:text-5xl font-semibold flex justify-center items-center text-center mb-5">
                    The Premier Professional Engineering Fraternity
                </h1>
            </div>
        </section>

            <section className="min-h-[300px] flex items-center bg-[#141416] text-white py-10">
                <div className="max-w-[1100px] mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                        <div className="flex-1 max-w-[50%] text-left">
                            <div className="grid grid-rows-[40px_auto]">
                                <h2 className="text-[#fecb33] font-semibold mb-2 text-2xl">WHO ARE WE?</h2>
                                <p className="text-[#787e91] text-base">
                                Theta Tau is a co-ed professional engineering fraternity at
                                SJSU, built on fostering strong bonds among members. We strive
                                to support professional growth while making a positive impact
                                on our community.
                                </p>
                            </div>
                        </div>
                        <Carousel images={carouselImages} />
                    </div>
                </div>
            </section>
      
        <section className="py-16 bg-[#18181a]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[#fecb33] font-semibold text-2xl mb-4">OUR VALUES</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="flex flex-col items-center p-8 bg-[#18181a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">01.</p>
                            <h3 className="text-2xl font-semibold text-[#e4e4e4] mb-2">Brotherhood</h3>
                            <p className="text-base text-[#787e91] leading-relaxed text-center">
                            We forge lifelong friendships and a network of professional
                            relationships.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-[#18181a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">02.</p>
                            <h3 className="text-2xl font-semibold text-[#e4e4e4] mb-2">Community Service</h3>
                            <p className="text-base text-[#787e91] leading-relaxed text-center">
                            Our service projects create an environment for learning and
                            personal growth for our members.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-[#18181a] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">03.</p>
                            <h3 className="text-2xl font-semibold text-[#e4e4e4] mb-2">Professionalism</h3>
                            <p className="text-base text-[#787e91] leading-relaxed text-center">
                            We develop and nurture engineers with strong communication,
                            problem-solving, and leadership skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-[#141416]">
            <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col gap-8">
                <h1 className="text-[#fecb33] font-semibold text-2xl mb-4">I. Brotherhood</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <ValueCard
                    frontImage="/images/retreat.jpg"
                    title="PNM Classes"
                    description="We forge lifelong friendships and a network of professional relationships."
                />

                <ValueCard
                    frontImage="/images/retreat.jpg"
                    title="Big Brothers"
                    description="We forge lifelong friendships and a network of professional relationships."
                />

                <ValueCard
                    frontImage="/images/retreat.jpg"
                    title="Families"
                    description="We forge lifelong friendships and a network of professional relationships."
                />
                </div>
            </div>
            </div>
        </section>

        <section className="py-16 bg-[#18181a]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[#fecb33] font-semibold text-2xl mb-4">II. Professionalism</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-[#141416]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[#fecb33] font-semibold text-2xl mb-4">III. Community Service</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />

                        <ValueCard
                            frontImage="/images/retreat.jpg"
                            title="placeholder"
                            description="We forge lifelong friendships and a network of professional relationships."
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-[#18181a]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                    <div className="flex-1 max-w-[50%] text-left">
                        <div className="grid grid-rows-[40px_auto]">
                            <h2 className="text-[#fecb33] font-semibold mb-2 text-2xl">WHERE WE'VE WORKED</h2>
                            <p className="text-[#787e91] text-base">
                                We strive to provide our brothers with the resources they need to accomplish their professional goals,
                                and further their careers. Whether it's through recruiter mock interviews, resume workshops, or networking
                                opportunities, the Omega Epsilon Chapter of Theta Tau here at San Jose State is committed to providing the best
                                tools and support for our brothers to succeed in their professional endeavors.
                            </p>
                        </div>
                    </div>
                    <CompanyLogos />
                </div>
            </div>
        </section>
    </>
  );
}