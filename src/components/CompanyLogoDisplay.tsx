'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion'; // 🌀 animation

const logos = [
  { src: '/companies/google.png', alt: 'Google' },
  { src: '/companies/stmicro.jpg', alt: 'STMicroelectronics' },
  { src: '/companies/paypal.png', alt: 'PayPal' },
  { src: '/companies/meta.png', alt: 'Meta' },
  { src: '/companies/amazon.svg', alt: 'Amazon' },
  { src: '/companies/usaa.png', alt: 'United Services Automotive Association' },
  { src: '/companies/nutanix.png', alt: 'Nutanix' },
  { src: '/companies/wizecamel.png', alt: 'WizeCamel' },
  { src: '/companies/llnl.png', alt: 'Lawrence Livermore National Laboratory' },
  { src: '/companies/renesas.png', alt: 'Renesas Electronics' },
  { src: '/companies/seagate.png', alt: 'Seagate Technology' },
  { src: '/companies/tesla.png', alt: 'Tesla' },
  { src: '/companies/blackhawk.jpg', alt: 'Blackhawk Networks' },
  { src: '/companies/oracle.png', alt: 'Oracle' },
  { src: '/companies/applied.png', alt: 'Applied Materials' },
  { src: '/companies/amex.webp', alt: 'American Express' },
  { src: '/companies/gofundme.jpg', alt: 'GoFundMe' },
  { src: '/companies/intel.png', alt: 'Intel Corporation' },
  { src: '/companies/epic.png', alt: 'Epic Systems' },
  { src: '/companies/commure.jpg', alt: 'Commure' },
  { src: '/companies/wellsfargo.png', alt: 'Wells Fargo' },
  { src: '/companies/hp.png', alt: 'Hewlett Packard' },
  { src: '/companies/dell.png', alt: 'Dell Technologies' },
  { src: '/companies/tetratech.png', alt: 'Tetra Tech' },
  { src: '/companies/synopsys.jpg', alt: 'Synopsys' },
  { src: '/companies/markthomas.jpg', alt: 'Mark Thomas' },
  { src: '/companies/atlassian.webp', alt: 'Atlassian' },
  { src: '/companies/tabapay.jpg', alt: 'Tabapay' },
  { src: '/companies/boeing.jpg', alt: 'Boeing' },
  { src: '/companies/nfl.webp', alt: 'National Football League' },
  { src: '/companies/github.png', alt: 'Github' },
];

const itemsPerPage = 18;

const CompanyLogos = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(logos.length / itemsPerPage);

  const start = page * itemsPerPage;
  const currentLogos = logos.slice(start, start + itemsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <section className="bg-[#141416] py-8 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-h-[348px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center"
          >
            {currentLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-[100px] h-[100px] mx-auto overflow-hidden rounded-lg bg-white hover:scale-110 transition duration-300"
              >
                <Image src={logo.src} alt={logo.alt} fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="px-4 py-2 bg-[#18181a] rounded-2xl hover:bg-[#2a2a2e] disabled:opacity-30 cursor-pointer"
          >
            ← Prev
          </button>
          <span className="text-sm text-[#e4e4e4]">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="px-4 py-2 bg-[#18181a] rounded hover:bg-[#2a2a2e] disabled:opacity-30 cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
