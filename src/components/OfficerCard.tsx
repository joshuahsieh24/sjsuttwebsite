import Image from "next/image";

type Officer = {
  name: string;
  role: string;
  image: string;
  major: string;
  class: string;
};

export default function OfficerCard({
  name,
  role,
  image,
  major,
  class: className,
}: Officer) {
  return (
    <div className="bg-[#18181a] rounded-lg shadow-lg flex flex-col items-center p-4">
        <div className="w-60 h-60 relative mb-4 overflow-hidden">
        <Image
            src={image.replace(/^\./, "")}
            alt={name}
            fill
            className="rounded-lg border-2 border-[#e4e4e4] object-cover object-center"
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 600px"
        />
        </div>
        <div className="w-full flex flex-col items-start">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-[#fecb33] font-semibold mb-2">{role}</p>
            <p className="text-[#e4e4e4] text-sm">Major: {major}</p>
            <p className="text-[#e4e4e4] text-sm">Class: {className}</p>
        </div>
    </div>
  );
}

