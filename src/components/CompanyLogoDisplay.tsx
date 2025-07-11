import Image from 'next/image';

const logos = [
  { src: '/companies/google.png', alt: 'Google' },
  { src: '/companies/stmicro.jpg', alt: 'STMicroelectronics' },
  { src: '/companies/paypal.png', alt: 'PayPal' },
  { src: '/companies/meta.png', alt: 'Meta' },
  { src: '/companies/amazon.png', alt: 'Amazon' },
  { src: '/companies/usaa.png', alt: 'United Services Automotive Association' },
  { src: '/companies/nutanix.png', alt: 'Nutanix' },
  { src: '/companies/j&j.png', alt: 'Johnson & Johnson' },
];

const CompanyLogos = () => {
  return (
    <section className="bg-[#141416] py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        {logos.map((logo, index) => (
            <div
            key={index}
            className="relative w-[100px] h-[100px] overflow-hidden rounded-lg bg-white"
            >
            <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-cover"
            />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
