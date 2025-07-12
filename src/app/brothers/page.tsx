import roster from "../../components/activeInfo/roster.json"
import BrotherCard from "@/components/BrotherCard";
import OfficerCard from "@/components/OfficerCard";

export default function BrothersPage() {
  return (
    <>
        <section className="min-h-[120px] bg-[#141416] text-white py-10">
            <div className="max-w-[1100px] mx-auto px-4 w-full">
                <h1 className="text-3xl md:text-5xl font-semibold flex justify-center items-center text-center mb-15">
                Executive Board
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {roster.executive.map((officer, index) => (
                        <OfficerCard
                            key={index}
                            name={officer.name}
                            image={officer.image}
                            major={officer.major}
                            class={officer.class} 
                            role={officer.role}                    />
                    ))}
                </div>
            </div>
        </section>
        <section className="min-h-[120px] bg-[#141416] text-white py-10">
            <div className="max-w-[1100px] mx-auto px-4 w-full">
                <h1 className="text-3xl md:text-5xl font-semibold flex justify-center items-center text-center mb-15">
                Chapter Officers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {roster.chairs.map((officer, index) => (
                        <OfficerCard
                            key={index}
                            name={officer.name}
                            image={officer.image}
                            major={officer.major}
                            class={officer.class} 
                            role={officer.role}                    />
                    ))}
                </div>
            </div>
        </section>
        <section className="min-h-[120px] bg-[#141416] text-white py-10">
            <div className="max-w-[1100px] mx-auto px-4 w-full">
                <h1 className="text-3xl md:text-5xl font-semibold flex justify-center items-center text-center mb-15">
                Chapter Brothers
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {roster.actives.map((officer, index) => (
                        <BrotherCard
                            key={index}
                            name={officer.name}
                            image={officer.image}
                            major={officer.major}
                            class={officer.class}                     />
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}