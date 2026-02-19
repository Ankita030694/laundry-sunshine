"use client";

import { useState } from "react";

const servicesData = [
    {
        title: "Installation & Commissioning",
        icon: "/Group 167.svg",
        description: "Our certified technicians handle complete installation, testing, and calibration to ensure safe operation, maximum efficiency, and long-term reliability from day one.",
        image: "/service_installation_1770032188025.png"
    },
    {
        title: "Maintenance & Repair Services",
        icon: "/tools.svg",
        description: "We provide fast diagnostics, on-site repairs, and preventive servicing to reduce breakdowns and keep your laundry operations running smoothly.",
        image: "/An_indian_technician_202602171507 1.png"
    },
    {
        title: "Laundry Setup Consultation",
        icon: "/bulb.svg",
        description: "End-to-end consultation for planning new laundry facilities, optimizing layouts, selecting the right equipment, and improving operational efficiency.",
        image: "/A_professional_consultation_202602171512 1.png"
    },
    {
        title: "Annual Maintenance Contracts",
        icon: "/handshake.svg",
        description: "Customized AMC plans with regular inspections, priority support, and scheduled servicing to prevent unexpected downtime and costly repairs.",
        image: "/An_indian_technician_202602171519 1.png"
    },
    {
        title: "Genuine Spare Parts Supply",
        icon: "/box.svg",
        description: "We supply original manufacturer-approved spare parts to maintain optimal performance, safety standards, and extended machine lifespan.",
        image: "/A_wellorganized_spare_202602171511 1.png"
    },
    {
        title: "Rapid Fault Diagnosis & Preventive Maintenance",
        icon: "/badge.svg",
        description: "Proactive inspection and early fault detection to resolve issues quickly and prevent operational disruptions before they occur.",
        image: "/A_closeup_scene_202602171522 1.png"
    }
];

export default function ServicesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    };

    const activeService = servicesData[currentSlide];

    return (
        <section className="py-20 md:py-32 border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start md:items-center">
                    {/* Mobile-only Title: Replaced split logic with a simpler view for mobile */}
                    <div className="md:hidden transition-all duration-500 animate-fade-in" key={`mobile-title-${currentSlide}`}>
                        <h2 className="text-[#1F2933] font-satoshi text-[32px] font-medium leading-tight">
                            {activeService.title}
                        </h2>
                    </div>

                    {/* Image Div: Order 2 on mobile, Column 2 on desktop */}
                    <div
                        className="order-2 md:order-2 md:col-start-2 relative aspect-square md:aspect-[4/3] w-full overflow-hidden transition-all duration-500"
                        key={`img-${currentSlide}`}
                    >
                        <img
                            src={activeService.image}
                            alt={activeService.title}
                            className="w-full h-full object-cover animate-fade-in"
                        />
                    </div>

                    {/* Content Div: Order 3 on mobile, Column 1 on desktop */}
                    <div
                        className="order-3 md:order-1 md:col-start-1 flex flex-col items-start max-w-xl transition-all duration-500 animate-fade-in"
                        key={`content-${currentSlide}`}
                    >
                        {/* Desktop-only Icon */}
                        <div className="hidden md:block mb-10">
                            <img src={activeService.icon} alt={`${activeService.title} Icon`} className="w-[80px] h-[80px]" />
                        </div>

                        {/* Desktop-only Title with specific alignment/split logic */}
                        <h2 className="hidden md:flex text-[#1F2933] font-satoshi text-[45px] font-medium mb-6 leading-tight min-h-[2.2em] items-start">
                            {activeService.title.includes('&') ? (
                                <span>
                                    {activeService.title.split('&')[0].trim()} & <br />
                                    {activeService.title.split('&')[1].trim()}
                                </span>
                            ) : (
                                <span>{activeService.title}</span>
                            )}
                        </h2>

                        {/* Description: Always visible, but with mobile margin adjustments */}
                        <p className="text-[#1F2933] font-satoshi text-[18px] md:text-[25px] font-normal leading-relaxed mb-8 md:mb-12 min-h-0 md:min-h-[150px]">
                            {activeService.description}
                        </p>

                        {/* Carousel Controls: Nav lines and arrows */}
                        <div className="flex items-center gap-2 mb-8">
                            {servicesData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-[2px] transition-all duration-300 ${index === currentSlide ? 'w-[40px] bg-[#E6763F]' : 'w-[20px] bg-gray-200'}`}
                                ></div>
                            ))}
                        </div>

                        <div className="flex gap-6">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 flex items-center justify-center border border-gray-200 text-[#E6763F] hover:bg-[#E6763F] hover:text-white transition-all rounded-none group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 flex items-center justify-center border border-gray-200 text-[#E6763F] hover:bg-[#E6763F] hover:text-white transition-all rounded-none group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
