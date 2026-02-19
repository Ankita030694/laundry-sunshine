import type { Metadata } from "next";
import ServicesCarousel from "@/components/ServicesCarousel";
import CTA from "@/components/CTA";

const servicesData = [
  { title: "Installation & Commissioning" },
  { title: "Maintenance & Repair Services" },
  { title: "Laundry Setup Consultation" },
  { title: "Annual Maintenance Contracts" },
  { title: "Genuine Spare Parts Supply" },
  { title: "Rapid Fault Diagnosis & Preventive Maintenance" }
];

export const metadata: Metadata = {
  title: "Commercial Laundry Services | Installation, AMC & Repair India",
  description: "Comprehensive laundry services for hotels & hospitals. Expert installation, AMC plans, and genuine spare parts across India.",
};

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Laundry Equipment Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sunshine Equipment Co Inc",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304, 3rd Floor, Gupta Palace, Rajouri Garden",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110027",
        "addressCountry": "IN"
      }
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laundry Services",
      "itemListElement": servicesData.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title
        }
      }))
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Blobs */}
      <div className="blob top-[-5%] left-[-10%] transform-gpu scale-75 opacity-20"></div>
      <div className="blob bottom-[20%] right-[-10%] rotate-90 transform-gpu opacity-30 scale-75"></div>

      <main className="bg-white pb-20">
        {/* Services Hero Section */}
        <section className="relative pt-12 pb-12 md:pt-32 md:pb-16 overflow-hidden border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="mb-12 flex flex-col items-center text-center md:items-start md:text-left gap-8 md:gap-[50px] w-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 items-start w-full">
                <div className="md:col-span-7">
                  <h1 className="text-[#1F2933] font-satoshi text-[40px] md:text-[55px] font-medium leading-[1]">
                    Our Laundry Services
                  </h1>
                </div>
                <div className="md:col-span-5 md:pt-4">
                  <p className="text-[#1F2933] font-satoshi text-[18px] md:text-[22px] font-normal leading-[1.4]">
                    Sunshine Laundry delivers end to end commercial laundry solutions designed for performance, durability, and operational efficiency. Our services ecosystem integrates equipment supply, professional installation, preventive maintenance, AMC support, and rapid technical assistance to ensure uninterrupted operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[21/9] rounded-none overflow-hidden mt-12">
              <img
                src="/A_minimal_and_202602171444 1.png"
                alt="Sunshine Laundry Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Dynamic Service Carousel Component */}
        <ServicesCarousel />

        {/* Standard CTA Component */}
        <CTA />
      </main>
    </div>
  );
}

