import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Award, Users, Star, Quote, Flag, Eye } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Sunshine Equipments Co Inc - 25 Years of Laundry Excellence",
  description: "Learn about Sunshine Equipment's 25-year journey in providing industrial laundry solutions across India. Founded by Rraj Kumar Nangia.",
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sunshine Equipment Co Inc",
    "url": "https://sunshine-laundry.com/",
    "logo": "https://sunshine-laundry.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/sunshineequipments",
      "https://www.instagram.com/sunshineequipments"
    ],
    "founder": {
      "@type": "Person",
      "name": "Raj Kumar Nangia"
    },
    "foundingDate": "2000",
    "description": "Authorized dealer of global laundry brands like Girbau, Electrolux, and Maxi. Expert installation, AMC, and spare parts across India since 2000."
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Blobs */}
      <div className="blob top-[-5%] right-[-5%] transform-gpu scale-75 opacity-30"></div>
      <div className="blob bottom-[10%] left-[-5%] rotate-12 transform-gpu opacity-20 scale-75"></div>

      <main>
        {/* About Hero Section */}
        <section className="relative pt-12 pb-12 md:pt-8 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-12 md:mb-20 flex flex-col items-center text-center md:items-start md:text-left gap-8 md:gap-[50px] w-full">
              <span className="text-[#E6763F] font-satoshi text-[32px] md:text-[40px] font-medium leading-[40px]">
                ABOUT US
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="md:col-span-7">
                  <h1 className="text-[#1F2933] font-satoshi text-[40px] md:text-[55px] font-medium leading-tight md:leading-[55px]">
                    Powering Commercial Laundry With Reliable Innovation
                  </h1>
                </div>
                <div className="md:col-span-5 md:pt-4">
                  <p className="text-[#1F2933] font-satoshi text-[18px] md:text-[25px] font-normal leading-relaxed md:leading-[29px]">
                    We modernize outdated laundry systems with smarter solutions. High-performance machines with expert installation. Reliable support for smooth, uninterrupted operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/A_wide_169_202602161056 1.jpg"
                alt="Sunshine Equipment Operations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>


        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-50">
          <div className="max-w-[1524px] mx-auto px-6 flex flex-col items-center gap-[80px]">
            <div className="flex flex-col md:flex-row items-start justify-between w-full">
              <div className="flex flex-col items-start gap-[50px]">
                <span className="text-[#E6763F] font-satoshi text-[32px] md:text-[40px] font-medium leading-[40px]">
                  LEADERSHIP
                </span>
                <h2 className="text-[#1F2933] font-satoshi text-[40px] md:text-[55px] font-medium leading-tight md:leading-[55px]">
                  Driven by Industry Expertise
                </h2>
              </div>
              <div className="md:pt-12">
                <p className="text-[#1F2933] font-satoshi text-[18px] md:text-[25px] font-normal leading-relaxed md:leading-[29px] max-w-xl">
                  At Sunshine Equipment, our leadership brings decades of experience in commercial laundry solutions. We focus on delivering reliable systems and long-term partnerships that help businesses operate with confidence.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[80px] w-full">
              {/* Leader 1 */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                <div className="w-full md:col-span-3">
                  <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/ChatGPT-Image-Sep-29-2025-03_07_21-PM-414x500 1.png" alt="Rraj Kumar Nangia" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-4 lg:pt-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-3">Raj Kumar Nangia</h3>
                  <p className="text-[#E6763F] text-lg md:text-xl font-bold uppercase tracking-wider">Founder & Managing Director</p>
                </div>
                <div className="md:col-span-5 lg:pt-2">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    I founded this company with a simple goal—to make commercial laundry solutions reliable, stress-free, and accessible for every business. Over the years, we've seen how the right equipment combined with consistent after-sales support can transform operations. That's why we go beyond simply supplying machines—we partner with our clients through installation, maintenance, and continuous support.
                  </p>
                </div>
              </div>

              {/* Leader 2 */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                <div className="w-full md:col-span-3">
                  <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/ChatGPT-Image-Oct-3-2025-08_27_45-PM 1.png" alt="Veena Sharma" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-4 lg:pt-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-3">Veena Sharma</h3>
                  <p className="text-[#E6763F] text-lg md:text-xl font-bold uppercase tracking-wider">Operations Manager</p>
                </div>
                <div className="md:col-span-5 lg:pt-2">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    My focus is on ensuring every project is executed with precision, efficiency, and consistency. From coordinating installations to managing spare parts logistics, I work closely with our technical teams to maintain the highest operational standards. My goal is to deliver seamless execution, minimize downtime, and ensure our clients receive dependable support at every stage.
                  </p>
                </div>
              </div>

              {/* Leader 3 */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                <div className="w-full md:col-span-3">
                  <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/ChatGPT-Image-Oct-28-2025-11_36_28-AM 1.png" alt="Gulshan Khattar" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-4 lg:pt-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-3">Gulshan Khattar</h3>
                  <p className="text-[#E6763F] text-lg md:text-xl font-bold uppercase tracking-wider">Senior Engineering Technician</p>
                </div>
                <div className="md:col-span-5 lg:pt-2">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    My role is to ensure every machine we install and service performs at its highest standard. With hands-on technical expertise, I focus on precise installations, thorough inspections, and proactive maintenance. My commitment is to deliver reliable performance, minimize downtime, and provide technical solutions that keep our clients' operations running smoothly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-32 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Mission Part */}
              <div className="py-10 md:py-0 md:pr-20 md:border-r border-gray-200 flex flex-col items-start">
                <div className="mb-10 text-[#E6763F]">
                  <Flag size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-[#1F2933] font-satoshi mb-8">Our Mission</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-satoshi font-normal">
                  At Sunshine Equipment, our mission is to deliver reliable, high-performance commercial laundry solutions that simplify operations for businesses. We are committed to providing quality machinery, expert installation, and dependable after-sales support that ensure efficiency, durability, and minimal downtime for our clients.
                </p>
              </div>

              {/* Vision Part */}
              <div className="py-10 md:py-0 md:pl-20 flex flex-col items-start border-t md:border-t-0 border-gray-200">
                <div className="mb-10 text-[#E6763F]">
                  <Eye size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-[#1F2933] font-satoshi mb-8">Our Vision</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-satoshi font-normal">
                  Our vision is to become a trusted leader in commercial laundry solutions across India and beyond. We aim to set new standards in service excellence, operational efficiency, and long-term partnerships by continuously improving technology, support systems, and customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
