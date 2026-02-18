import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandPartners from "@/components/BrandPartners";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-0 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1F2933]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Sunshine Equipments Hero"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          {/* Requested Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(31, 41, 51, 0.00) 0%, #1F2933 100%)' }}
          />
        </div>

        {/* Hero Content - Middle */}
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1
            className="max-w-8xl text-white tracking-tight animate-fade-in px-4"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: 'clamp(32px, 8vw, 80px)',
              fontWeight: 700,
              lineHeight: '1.1',
              letterSpacing: '1px'
            }}
          >
            Commercial Laundry Solutions <br className="hidden md:block" /> Built for Performance
          </h1>

          <p className="mt-6 text-white/80 text-lg md:text-2xl max-w-2xl px-4 animate-fade-in delay-100">
            We supply, install, and maintain high-quality laundry machines for hotels, hospitals, and industrial facilities across India.
          </p>

          {/* CTA Buttons - Refined with user specs */}
          <div className="mt-8 md:mt-10 flex items-center gap-0 animate-fade-in delay-200 group cursor-pointer">
            <button
              className="bg-[#E6763F] text-white font-bold transition-all hover:bg-[#d56530] flex justify-center items-center h-[54px] whitespace-nowrap px-8 md:px-10 text-base md:text-lg"
              style={{
                fontFamily: 'Satoshi, sans-serif'
              }}
            >
              Get Free Quote
            </button>
            <div className="transition-all duration-300 ml-[10px] group-hover:ml-0 h-[54px] w-[54px] bg-[#E6763F] flex items-center justify-center shrink-0">
              <svg
                width="54"
                height="54"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:rotate-45"
              >
                <path d="M25.5146 22.4853H42.4852M42.4852 22.4853V39.4558M42.4852 22.4853L22.6862 42.2843" stroke="#F9FAFB" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Left Content - Moved from Right and Scaled down */}
        <div className="absolute bottom-12 left-12 z-10 max-w-xl text-left hidden lg:block animate-fade-in delay-500">
          <p
            className="text-white"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '31px',
            }}
          >
            We supply, install, and maintain high-quality laundry machines for hotels, hospitals, laundromats, and industrial facilities across India.
          </p>
        </div>
      </section>

      <Features />

      <AboutUs />

      <BrandPartners />

      <WhyChooseUs />


      <CTA />
    </main>
  );
}

