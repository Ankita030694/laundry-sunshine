"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const pathname = usePathname();
  const { openContactModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className="sticky top-0 left-0 w-full z-[200] bg-white shadow-sm transition-all duration-300 border-b border-gray-100"
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center">
            {/* Logo SVG scaled down by 20% */}
            <svg width="58" height="58" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[45px] h-[45px] md:w-[58px] md:h-[58px]">
              <path d="M49.5218 30.5567H43.1999L42.8487 29.8542L42.2633 28.6835L41.0926 27.5127L39.3365 26.1079H35.5902L32.5463 26.8103L30.7902 28.3323L30.4389 29.8542L31.1414 31.142L33.2487 32.4298L35.5902 33.2494L40.0389 34.5372L42.8487 35.2396L45.3072 35.825L47.7657 37.1128L49.873 38.986L50.1072 40.9762V45.0738L49.1706 46.4787L47.0633 48.586L44.0194 50.3421L41.0926 51.1616L36.4097 51.5129L32.078 50.9275L28.5658 49.5226L25.756 47.0641L23.6487 44.6055L22.9463 41.4445H29.3853L29.8536 42.7323L32.078 45.7762L35.5902 47.0641H39.6877L42.2633 45.7762L44.0194 44.6055V42.7323L43.1999 40.9762L40.8584 39.6884L36.4097 38.5177L30.7902 37.1128L27.3951 35.2396L25.1707 33.2494L24.2341 31.142V29.2689L25.1707 27.5127L28.5658 23.8835L33.0145 22.4786H41.5609L44.0194 23.0639L46.7121 24.8201L48.8194 27.5127L49.5218 30.5567Z" fill="#E6763F" />
              <path d="M16.3902 31.9631L0 36.9973L16.7414 41.0949L15.8048 37.9339C15.7268 37.3485 15.6175 36.0139 15.8048 35.3583C15.9921 34.7027 16.2731 32.8217 16.3902 31.9631Z" fill="#E6763F" />
              <path d="M16.8586 30.2056L4.56592 17.3275L22.1268 22.5958L19.4342 25.0543L17.9122 27.747L16.8586 30.2056Z" fill="#E6763F" />
              <path d="M17.795 3.97974L31.0242 17.3261L27.8632 18.1457L24.7023 20.0188L22.595 22.2432L17.795 3.97974Z" fill="#E6763F" />
              <path d="M35.5901 0L31.8438 16.8586L34.5364 16.6245H37.2291L40.8583 16.8586L35.5901 0Z" fill="#E6763F" />
              <path d="M55.2583 5.03417L41.912 17.6781L45.3071 18.8489L47.6486 20.2537L50.2242 22.5952L55.2583 5.03417Z" fill="#E6763F" />
              <path d="M67.9021 18.1464L50.6925 23.5318L52.6827 25.405L53.7363 27.1611L55.2583 30.7904L67.9021 18.1464Z" fill="#E6763F" />
              <path d="M56.546 37.468L55.8435 41.3314L72.9361 36.7655L55.3752 31.146L56.546 34.6582V37.468Z" fill="#E6763F" />
              <path d="M67.902 54.7949L55.3752 42.7363L54.5557 45.429L52.7996 48.0046L50.5753 50.5802L67.902 54.7949Z" fill="#E6763F" />
              <path d="M55.3754 68.4922L42.0291 56.1995L46.1267 54.4434L48.1169 53.1556L50.3413 51.0482L55.3754 68.4922Z" fill="#E6763F" />
              <path d="M36.0583 72L40.3899 56.5463L37.4631 57.1316H34.5363L31.7266 56.5463L36.0583 72Z" fill="#E6763F" />
              <path d="M18.0292 69.3138L30.556 56.4357L26.2243 54.7967L23.9999 53.2747L22.3609 51.2845L18.0292 69.3138Z" fill="#E6763F" />
              <path d="M4.21466 55.963L16.7414 42.3824L18.6146 46.0117L20.1366 48.5873L22.1268 50.8117L4.21466 55.963Z" fill="#E6763F" />
            </svg>
          </div>
        </Link>

        <div className="flex items-center gap-12">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center bg-white text-brand-blue shadow-sm transition-all active:scale-95"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.filter(l => l.name !== "Contact").map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium hover:text-brand-orange transition-colors ${isActive ? "text-brand-blue" : "text-brand-blue/80"}`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Combined Contact Link and Orange Square scaled down */}
            <button
              onClick={openContactModal}
              className="flex items-center gap-3 group outline-none"
            >
              <span className={`text-[15px] font-medium group-hover:text-brand-orange transition-colors ${pathname === "/contact" ? "text-brand-blue" : "text-brand-blue/80"}`}>
                Contact
              </span>
              <div className="flex h-10 w-10 items-center justify-center bg-brand-orange text-white shadow-orange transition-all duration-300 group-hover:bg-brand-orange-hover group-hover:scale-105 active:scale-95">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[500] transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="text-xl font-bold text-brand-blue">Menu</span>
            <button onClick={toggleMobileMenu} className="text-brand-blue">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-6 px-6 py-10 bg-white">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium ${isActive ? "text-brand-orange" : "text-brand-blue"}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                openContactModal();
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 flex items-center justify-between bg-brand-orange text-white px-6 py-4 rounded-sm font-bold"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
