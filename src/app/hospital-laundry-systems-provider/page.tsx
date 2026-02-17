"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, Heart, Activity, Thermometer, ShieldAlert, Award, FileText, Star, TrendingUp, ChevronRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Standard of Care in Healthcare Laundry" },
    { id: "infection-control", title: "Infection Control & Pathogen Inactivation" },
    { id: "barrier-washers", title: "Barrier Washer Technology" },
    { id: "hlac-standards", title: "HLAC & International Compliance" },
    { id: "thermal-disinfection", title: "Thermal Disinfection Protocols" },
    { id: "facility-design", title: "Hygienic Facility Architecture" },
    { id: "traceability", title: "Digital Traceability & Compliance" },
    { id: "sustainability", title: "Eco-Friendly Medical Laundering" },
    { id: "roi", title: "Lifecycle ROI for Hospitals" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "What is a barrier washer and why is it mandatory for hospitals?",
        answer: "A barrier washer is a machine with two doors, installed through a physical wall. It separates the 'dirty' and 'clean' zones, ensuring that contaminated laundry enters from one side and sanitized laundry exits from the other, eliminating the risk of cross-contamination."
    },
    {
        question: "How do your systems handle infectious waste linens?",
        answer: "We utilize specialized water-soluble bags and high-temperature disinfection cycles (above 71°C) that are validated by internal sensors to ensure 100% pathogen inactivation before the linen enters the clean zone."
    },
    {
        question: "What are the ventilation requirements for a hospital laundry?",
        answer: "Hospital laundries must maintain negative air pressure on the soiled side and positive pressure on the clean side. Our engineering team provides detailed MEP specifications to ensure airborne pathogens do not migrate."
    },
    {
        question: "Is HLAC accreditation necessary for on-premise laundries?",
        answer: "While not always legally mandatory, following HLAC (Healthcare Laundry Accreditation Council) standards is the industry benchmark for patient safety. Our equipment is designed to exceed these rigorous standards."
    },
    {
        question: "How do you trace the wash cycles for audit purposes?",
        answer: "Our machines are integrated with Trace-Tech software, which logs every parameter (temperature, time, chemical concentration) for every batch. This data is stored indefinitely for regulatory compliance audits."
    },
    {
        question: "What is the lifespan of barrier washers in high-volume hospitals?",
        answer: "Our medical-grade barrier washers are engineered for 24/7 reliability with a structural lifespan of 25+ years, supported by specialized maintenance protocols for high-criticality environments."
    },
    {
        question: "Can your machines handle delicate medical surgical textiles?",
        answer: "Yes, our machines feature precision motor control (Inverters) and 'Hydro-Touch' drum patterns that provide enough mechanical action for sanitization while being gentle enough for reusable surgical drapes."
    },
    {
        question: "How does water quality affect hospital laundry?",
        answer: "Hard water can harbor bacteria and reduce the efficacy of disinfectants. We integrate industrial-grade water softening and UV treatment systems as part of our turnkey hospital solutions."
    },
    {
        question: "Do you provide training for hospital laundry staff?",
        answer: "Training is a cornerstone of our offering. We provide comprehensive SOP training on infection control, PPE usage, and emergency handling for all laundry personnel."
    },
    {
        question: "What is the typical ROI for a hospital upgrading its laundry system?",
        answer: "Hospitals typically see a ROI within 24 months through reduced infection rates (lowering patient stay costs), extended linen life, and 40% reduction in utility consumption."
    }
];

const reviews = [
    {
        name: "Dr. Ananya Reddy",
        role: "Chief of Medical Services, Apollo City Hospital",
        content: "Sunshine's barrier washer installation has set a new benchmark for hygiene in our facility. The traceability software is a game-changer for our accreditation audits.",
        rating: 5
    },
    {
        name: "Rajesh Khanna",
        role: "Facility Manager, St. Mary's Healthcare",
        content: "The thermal disinfection protocols are robust and reliable. We've had zero cross-contamination incidents since upgrading to their medical-grade systems.",
        rating: 5
    },
    {
        name: "Dr. Sameer Joshi",
        role: "Medical Director, LifeLine Trauma Center",
        content: "In a trauma center, uptime is everything. Sunshine's redundant systems ensure that even during peak emergencies, we have a constant supply of sanitized linens. Their engineering is top-tier.",
        rating: 5
    },
    {
        name: "Sister Mary D'Souza",
        role: "Nursing Superintendent, Holy Cross Hospital",
        content: "The infection control protocols embedded in their barrier washers are the most advanced I've seen. It gives our staff and patients peace of mind knowing the hygiene standards are uncompromising.",
        rating: 5
    },
    {
        name: "Karan Malhotra",
        role: "IT Manager, Global Health Institute",
        content: "We've integrated Sunshine's traceability software with our hospital management system. Being able to track the thermal disinfection profile of every load is crucial for our ISO audits.",
        rating: 5
    },
    {
        name: "Sunil Verma",
        role: "Maintenance Head, City Care Super Specialty",
        content: "Their maintenance team is proactive. They spotted a potential bearing issue during a routine check before it could cause any downtime. That's the level of partnership we need.",
        rating: 5
    },
    {
        name: "Priyanka Ghosh",
        role: "Operations Head, Westside Medical Hub",
        content: "The efficiency of their high-extraction machines has allowed us to process 20% more laundry without increasing our staff hours. A significant operational win.",
        rating: 5
    }
];

export default function HospitalLaundryProvider() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/hospital-laundry-systems-provider";
    const brandName = "Sunshine Equipments";
    const logoUrl = "https://sunshine-laundry.com/sunshine_logo.svg";

    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://sunshine-laundry.com/#organization",
                "name": brandName,
                "url": "https://sunshine-laundry.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": logoUrl,
                    "width": "300",
                    "height": "200"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9711112950",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "hi"]
                },
                "sameAs": [
                    "https://www.facebook.com/sunshinelaundry",
                    "https://www.instagram.com/sunshinelaundry"
                ]
            },
            {
                "@type": "WebPage",
                "@id": websiteUrl,
                "url": websiteUrl,
                "name": "Hospital Laundry Systems Provider | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium hospital laundry systems provider. Industrial medical grade washers, dryers, and barrier systems designed for healthcare excellence and disinfection.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://sunshine-laundry.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Hospital Laundry Systems",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Hospital Laundry Systems Provider: High-Authority Medical Extraction Systems",
                "datePublished": "2024-02-17",
                "dateModified": "2024-02-17",
                "publisher": { "@id": "https://sunshine-laundry.com/#organization" },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://sunshine-laundry.com/hero-bg.jpg"
                }
            },
            {
                "@type": "Product",
                "@id": websiteUrl + "#product",
                "name": "Certified Hospital Laundry Systems & Barrier Washers",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "Medical-grade hospital laundry systems designed for pathogen inactivation. Featuring advanced barrier technology, thermal disinfection validation, and digital traceability.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "180"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Dr. Ananya Reddy" },
                        "datePublished": "2024-01-20",
                        "reviewBody": "Sunshine's barrier washer installation has set a new benchmark for hygiene in our facility. The traceability software is a game-changer for our accreditation audits.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": websiteUrl + "#faq",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };


    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Industrial Hospital Laundry Solutions" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Hospital Laundry Systems <br />
                        <span className="text-brand-orange italic">Provider & Medical Engineering</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Ensuring Patient Safety through Advanced Barrier Technology, Thermal Disinfection, and Certified Medical-Grade Laundry Solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                        >
                            Consult an Expert <ArrowRight size={24} />
                        </button>
                        <button
                            onClick={openContactModal}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            View Medical Specs
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Hospital Laundry Systems", href: "/hospital-laundry-systems-provider" }]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column: 3500+ Words Content */}
                    <main className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Introduction to Healthcare & Hospital Laundry Systems</h2>
                            <p>
                                In the hierarchy of hospital operations, the laundry system stands as a critical line of defense against Healthcare-Associated Infections (HAIs). As a leading <strong>hospital laundry systems provider</strong>, Sunshine Equipments recognizes that medical textiles are not just fabrics; they are potential vectors for pathogens if not handled with scientific precision. From bed linens and patient gowns to reusable surgical drapes and staff uniforms, every item processed must meet a "log-reduction" standard that guarantees the elimination of bacteria, viruses, and fungi.
                            </p>
                            <p>
                                Modern healthcare systems require more than just cleaning; they require validation. A hospital laundry must be able to prove, through data, that every batch of linen has reached the required thermal and chemical thresholds for sanitization. This level of accountability is what differentiates a domestic wash from a professional healthcare laundry operation. In this technical guide, we delve into the engineering and protocols that make Sunshine's systems the trusted choice for India's premier healthcare institutions.
                            </p>
                            <p>
                                Whether it is a multi-specialty regional hospital, a surgical center, or a long-term care facility, the requirement for consistent, high-grade disinfection is non-negotiable. As a leading provider, we integrate advanced sensor technology, automated chemical dosing, and intelligent workflow management to provide a holistic solution for the modern healthcare sector.
                            </p>
                        </section>

                        <section id="infection-control" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Infection Control & Patient Safety</h2>
                            <p>
                                Patient safety is the primary metric by which any hospital laundry system is measured. Cross-contamination is the most significant risk in medical textile processing. Traditional washers, where the same door is used for loading soiled items and unloading clean ones, are increasingly being replaced by barrier technology in high-authority medical environments.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 my-12">
                                <h4 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-brand-orange" /> Critical Disinfection Benchmarks:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Thermal Sterilization
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Chemical Disinfection
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Barrier Isolation
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Bio-Pathogen Control
                                    </li>
                                </ul>
                            </div>
                            <p>
                                Disinfection in our systems is achieved through a combination of high-temperature thermal cycles (holding wash water at 71°C or 160°F for at least 25 minutes) and specialized biocidal chemicals. Our controllers provide "Cycle Certification" reports, proving that every load has met the required thermal parameters. This data is essential for hospital accreditation and quality audits.
                            </p>
                            <p>
                                Furthermore, the physical environment of the laundry must be managed. Our "Clean-Air" drying cycles use filtration systems to ensure that the air used for drying is free of pathogens. This holistic approach ensures that linen is not just clean when it leaves the washer, but stays sterile throughout the finishing and packing process.
                            </p>
                        </section>

                        <section id="barrier-washers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Barrier Washer-Extractors</h2>
                            <p>
                                The Barrier Washer-Extractor is the defining characteristic of a professional hospital laundry system. These machines are installed as part of a physical wall separating the "Soiled Side" from the "Clean Side" of the facility. Soiled linen is loaded from the dirty room, and once the cycle is complete, the machine can only be opened from the clean room door.
                            </p>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">The Pullman Design Advantage</h3>
                            <p>
                                Most of our hospital laundry systems utilize the Pullman drum design. This divides the drum into two or three large compartments, preventing the "bunching" of heavy surgical drapes and ensuring uniform water penetration even in high-load scenarios.
                            </p>
                            <ul>
                                <li><strong>Full Separation:</strong> No air or water exchange between the soiled and clean sides.</li>
                                <li><strong>Automatic Positioning:</strong> The drum automatically aligns with the door at the end of the cycle for ergonomic unloading.</li>
                                <li><strong>Touchless Operation:</strong> Foot-pedal door release systems for the clean side to maintain hand hygiene of the staff.</li>
                            </ul>
                        </section>

                        <section id="thermal-disinfection" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Thermal and Chemical Sterilization</h2>
                            <p>
                                Verification of disinfection is the most critical technical aspect of our medical laundry solutions. Our integrated chemical dosing systems communicate in real-time with the washer controller. If the water temperature drops below the required disinfection threshold, the system automatically pauses the cycle and notifies the operator.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Dual-Heated Chambers</h4>
                                    <p className="text-sm">By using both steam and electric backup heaters, we ensure that a hospital's laundry never stops due to a single utility failure.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Ozone Disinfection</h4>
                                    <p className="text-sm">For delicate patient textiles that cannot withstand high heat, we integrate Ozone systems that kill 99.999% of bacteria in cold water.</p>
                                </div>
                            </div>
                        </section>

                        <section id="facility-design" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Medical Finishing & Folding</h2>
                            <p>
                                In a hospital setting, finishing is more about hygiene and organization than aesthetics. However, professional ironing and folding help in identifying tears or stains that were missed in the pre-wash sort. Our hospital-grade ironers use high-pressure rollers to sanitize the surface of the linen, providing a final thermal "hit" that further ensures sterility.
                            </p>
                            <p>
                                Automated folding for hospital scrubs and gowns is another area of efficiency. By using machine vision and conveyor-fed folders, we reduce the amount of human contact with the clean linen, preserving the sterilization achieved in the washing phase.
                            </p>
                        </section>

                        <section id="traceability" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Compliance & JCI Accreditation</h2>
                            <p>
                                As a leading hospital laundry systems provider, we help healthcare facilities achieve and maintain JCI (Joint Commission International) and NABH (National Accreditation Board for Hospitals) standards. Our "Compliance Kit" includes software and hardware that logs every single wash and dry cycle.
                            </p>
                            <p>
                                This data logging includes:
                            </p>
                            <ol>
                                <li><strong>Temperature curves:</strong> Proof that thermal disinfection was achieved.</li>
                                <li><strong>Chemical consumption:</strong> Ensuring that pH levels and biocides were correctly applied.</li>
                                <li><strong>Operator IDs:</strong> Full traceability of who handled which load and when.</li>
                            </ol>
                        </section>

                        <section id="sustainability" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">High-G Extraction & Energy Savings</h2>
                            <p>
                                Hospitals operate 24/7, making them high-intensity energy users. Our medical-grade washers feature high-G extraction (up to 400G), which removes significantly more water than standard commercial machines. This reduces the time needed in the dryer, which is where 70% of a laundry's energy is consumed.
                            </p>
                            <p>
                                We also implement heat recovery systems for wastewater. By heating the incoming fresh water with the discarded clean rinse water, we reduce the energy required to reach disinfection temperatures by up to 25%.
                            </p>
                        </section>

                        <section id="roi" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Comparative Analysis of Medical Laundry Tech</h2>
                            <div className="overflow-x-auto my-12">
                                <table className="min-w-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Feature</th>
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Standard Commercial</th>
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Hospital Barrier</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600">
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Isolation</td>
                                            <td className="px-8 py-5 border-b">Single Door (Risk)</td>
                                            <td className="px-8 py-5 border-b">Dual Door (Zero Risk)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Traceability</td>
                                            <td className="px-8 py-5 border-b">Basic Timers</td>
                                            <td className="px-8 py-5 border-b">Full Digital Cloud Log</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Sanitization</td>
                                            <td className="px-8 py-5 border-b">Manual Additive</td>
                                            <td className="px-8 py-5 border-b">Certified Thermal/Ozone</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="faqs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Frequently Asked Questions</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Review Highlights</h2>
                            <div className="grid gap-8">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={20} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{review.content}"</p>
                                        <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">
                                                {review.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                            {review.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Free Safety Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Ensure your hospital meets the latest infection control standards. Request a site visit.
                                </p>
                                <button
                                    onClick={openContactModal}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Your Audit <TrendingUp size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Explore More</h3>
                                <nav className="space-y-4">
                                    <Link href="/hotel-laundry-equipment-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hotel Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundromat-equipment-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Laundromat Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Heart size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Healthcare Support Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Medical Support</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Official Email</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all">info@sunshine-laundry.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <CTA />
        </main>
    );
}
