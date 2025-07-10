"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <nav className="bg-[#141416] py-8 px-4">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="logo one"
              width={30}
              height={30}
              className="mr-2"
            />
          </Link>
          <div className="inline-flex flex-col font-semibold">
            <Link
              href="/"
              className="bg-gradient-to-r from-[#6d0b0e] via-[#f5a623] to-[#6d0b0e] bg-[length:500%_500%] text-transparent bg-clip-text animate-[gradient-shift_20s_linear_infinite] font-semibold"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              THETA TAU
            </Link>
            <Link
              href="/"
              className="text-[#fecb33] block text-[10px]"
            >
              Omega Epsilon
            </Link>
          </div>
        </div>

        {/* Main Menu for Desktop */}
        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <Link href="/about" className="px-5 py-2 font-semibold transition duration-700 hover:text-[#fecb33]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/brothers" className="px-5 py-2 font-semibold transition duration-700 hover:text-[#fecb33]">
                Brothers
              </Link>
            </li>
            <li>
              <Link href="/rush" className="px-5 py-2 font-semibold transition duration-700 hover:text-[#fecb33]">
                Rush
              </Link>
            </li>
            <li>
              <Link href="/faq" className="px-5 py-2 font-semibold transition duration-700 hover:text-[#fecb33]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/careers" className="px-5 py-2 font-bold transition duration-700 hover:text-[#fecb33]">
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" px-5 py-3 border-2 border-[#fecb33] rounded-full bg-[#fecb33] font-semibold text-[#141416] transition duration-700 hover:opacity-80 text-white"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          id="hamburger-button"
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-50"
          aria-label="Toggle mobile menu"
        >
          <span className="block w-8 h-1 bg-white my-1"></span>
          <span className="block w-8 h-1 bg-white my-1"></span>
          <span className="block w-8 h-1 bg-white my-1"></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full z-40 bg-[#141416] shadow-lg transition-all duration-300 ${
            menuOpen ? "right-0" : "-right-[300px]"
          } md:hidden`}
        >
          <ul className="mt-24 pr-2">
            <li>
              <Link href="/about" className="block text-lg px-6 py-3 font-semibold text-white hover:text-[#fecb33]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg px-6 py-3 font-semibold text-white hover:text-[#fecb33]">
                Brothers
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg px-6 py-3 font-semibold text-white hover:text-[#fecb33]">
                Rush
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block text-lg px-6 py-3 font-semibold text-white hover:text-[#fecb33]">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block w-4/5 mx-auto my-2 py-2 text-center border-2 border-[#fecb33] rounded-full bg-[#fecb33] font-semibold text-[#141416] hover:opacity-80 transition"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;