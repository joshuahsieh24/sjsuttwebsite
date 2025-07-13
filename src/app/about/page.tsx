import Head from "next/head";
import Carousel from "@/components/Carousel";
import ValueCard from "@/components/ValueCard";
import CompanyLogos from "@/components/CompanyLogoDisplay";
import Image from "next/image";

export default function About() {
    const carouselImages = [
        './images/retreat.jpg',
        './images/s25reveal.JPG',
    ]

    return (
    <>
        <Head>
            <title>About Us</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        </Head>
            <section className="relative flex items-center justify-center min-h-[60vh] md:min-h-[80vh] text-white font-sans overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/mu-class.jpg"
                        alt=""
                        priority
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        aria-hidden="true"
                    />
                </div>
                <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
                <div className="text-center px-6">
                    <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight">
                        The Premier Professional
                        <br className="hidden md:block" />
                        <span className="text-[#fecb33]"> Engineering Fraternity </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-[#e4e4e4] font-light max-w-2xl mx-auto">
                        A community of driven engineers at San Jose State, united through brotherhood, service, and professionalism.
                    </p>
                </div>
            </section>

            <section className="min-h-[300px] flex items-center bg-[#141416] text-white py-10">
                <div className="max-w-[1100px] mx-auto px-4 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                    
                    <div className="flex-1 w-full md:max-w-[50%] text-left">
                        <div className="grid grid-rows-[40px_auto]">
                        <h2 className="text-[#fecb33] font-bold mb-2 text-2xl">WHO ARE WE?</h2>
                        <p className="text-[#787e91] text-base">
                            Theta Tau is a co-ed professional engineering fraternity at
                            SJSU, built on fostering strong bonds among members. We strive
                            to support professional growth while making a positive impact
                            on our community.
                        </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full md:max-w-[50%]">
                        <Carousel images={carouselImages} />
                    </div>

                    </div>
                </div>
            </section>
      
        <section className="py-16 bg-[#18181a]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[#fecb33] font-bold text-2xl mb-4">OUR VALUES</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="flex flex-col items-center p-8 bg-[#141416] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">01.</p>
                            <h3 className="text-2xl font-bold text-[#e4e4e4] mb-2">Brotherhood</h3>
                            <p className="text-base text-[#787e91] leading-relaxed text-center">
                            We forge lifelong friendships and a network of professional
                            relationships.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-[#141416] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">02.</p>
                            <h3 className="text-2xl font-bold text-[#e4e4e4] mb-2">Community Service</h3>
                            <p className="text-base text-[#787e91] leading-relaxed text-center">
                            Our service projects create an environment for learning and
                            personal growth for our members.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-[#141416] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-5xl font-bold text-[#e4e4e4] mb-4">03.</p>
                            <h3 className="text-2xl font-bold text-[#e4e4e4] mb-2">Professionalism</h3>
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
                <h1 className="text-[#fecb33] font-bold text-2xl mb-4">I. Brotherhood</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <ValueCard
                    frontImage="/images/mu-class.jpg"
                    title="PNM Classes"
                    description="Potential New Members are put into classes to learn, grow, and bond with each other!"
                />

                <ValueCard
                    frontImage="/images/helena&jaden.jpg"
                    title="Big Brothers"
                    description="Each Potential New Member is matched to a Big Brother that shares their same interests and hobbies!"
                />

                <ValueCard
                    frontImage="/images/fam2.jpg"
                    title="Families"
                    description="Our chapter is broken up into four families, each descending from a founding brother of Omega Epsilon Chapter.
                    Each family provides a closer-knit community for brothers to connect and bond with."
                />
                </div>
            </div>
            </div>
        </section>

        <section className="py-16 bg-[#18181a]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[#fecb33] font-bold text-2xl mb-4">II. Professionalism</h1>
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
                    <h1 className="text-[#fecb33] font-bold text-2xl mb-4">III. Community Service</h1>
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
                    <div className="flex-1 w-full md:max-w-[50%] text-left">
                        <div className="grid grid-rows-[40px_auto]">
                            <h2 className="text-[#fecb33] font-bold mb-2 text-2xl">
                            WHERE WE&rsquo;VE WORKED
                            </h2>
                            <p className="text-[#787e91] text-base">
                            We strive to provide our brothers with the resources they need to accomplish their professional goals,
                            and further their careers. Whether it&rsquo;s through recruiter mock interviews, resume workshops, or networking
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