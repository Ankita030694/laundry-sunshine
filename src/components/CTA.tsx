"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const CTA = () => {
  const { openContactModal } = useModal();

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-bg.png"
          alt="Upgrade Your Commercial Laundry Operations"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay as seen in the image */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white py-20 md:py-24">
        <h2
          className="max-w-5xl mx-auto tracking-tight animate-fade-in"
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: 500,
            lineHeight: '1.1',
          }}
        >
          Upgrade Your Commercial <br className="hidden md:block" /> Laundry Operations Today
        </h2>

        <p
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-gray-200 animate-fade-in delay-200"
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: 'clamp(16px, 4.5vw, 24px)',
            fontWeight: 400,
            lineHeight: '1.4',
          }}
        >
          Get expert consultation, reliable equipment, and long-term <br className="hidden md:block" /> service support tailored to your business needs.
        </p>

        {/* CTA Button Implementation - Matching Hero Section Logic */}
        <div
          onClick={openContactModal}
          className="mt-10 md:mt-12 flex items-center justify-center gap-0 animate-fade-in delay-300 group cursor-pointer"
        >
          <button
            className="bg-[#E6763F] text-white font-bold transition-all hover:bg-[#d56530] flex justify-center items-center h-[54px] md:h-[60px] whitespace-nowrap px-8 md:px-12 text-base md:text-lg"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Request a Consultation
          </button>
          <div className="transition-all duration-300 ml-[10px] md:ml-[2px] group-hover:ml-0 h-[54px] w-[54px] md:h-[60px] md:w-[60px] bg-[#E6763F] flex items-center justify-center shrink-0">
            <svg
              width="54"
              height="54"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[60px] md:h-[60px] transition-transform duration-300 group-hover:rotate-45"
            >
              <path d="M25.5146 22.4853H42.4852M42.4852 22.4853V39.4558M42.4852 22.4853L22.6862 42.2843" stroke="#F9FAFB" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
