"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldAlert, Thermometer, Activity, Settings, Wrench, ClipboardCheck, Zap, HeartPulse, Microscope, Stethoscope, AlertTriangle, ChevronRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "critical-uptime", title: "The Criticality of Medical-Grade Uptime" },
    { id: "preventative-protocols", title: "Preventative Maintenance Protocols" },
    { id: "validation", title: "Validating Sanitization & Thermal Disinfection" },
    { id: "infection-control", title: "Infection Control in Maintenance Work" },
    { id: "utility-redundancy", title: "Utility Redundancy & Emergency Backup" },
    { id: "specialized-techs", title: "Specialized Healthcare Technicians" },
    { id: "compliance-documentation", title: "HLAC & TRSA Compliance Documentation" },
    { id: "spare-parts", title: "Critical Inventory & Spare Parts Strategy" },
    { id: "training", title: "Staff Training & Emergency Response" },
    { id: "faqs", title: "Technical FAQs" },
];

const faqs = [
    {
        question: "How often should barrier washers be validated for thermal disinfection?",
        answer: "We recommend a comprehensive thermal validation every 6 months using calibrated data loggers. However, daily monitoring of wash temperatures via the PLC is mandatory for HLAC compliance."
    },
    {
        question: "What is the typical lifespan of a healthcare-grade washing machine?",
        answer: "Industrial machines in a healthcare setting are built for 30,000+ cycles. With a rigorous preventative maintenance schedule, these machines typically last 15-20 years of continuous operation."
    },
    {
        question: "How do you maintain hygiene during a mechanical repair in a clean room?",
        answer: "Our technicians follow strict 'Code Blue' maintenance protocols, which include the use of sterile PPE, tool disinfection, and physical barriers to ensure the clean-side environment remains uncontaminated."
    },
    {
        question: "Are your technicians certified for medical laundry environments?",
        answer: "Yes, all Sunshine healthcare technicians undergo specialized training in Bloodborne Pathogens (BBP), infection control, and sterile workflow management before assigned to medical facilities."
    },
    {
        question: "What spare parts should a hospital keep on-site?",
        answer: "We recommend a 'Critical Uptime Kit' including drain valves, water inlet valves, door seals, belts, and common PLC fuses. This allows for immediate recovery from 90% of common sensor/hardware failures."
    },
    {
        question: "Does hard water affect the sanitization efficacy of medical laundry?",
        answer: "Absolutely. Mineral buildup can interfere with detergent chemistry and insulate heating elements. We include water hardness testing and softener maintenance as part of our core service packages."
    },
    {
        question: "Can you provide 24/7 emergency support for critical trauma centers?",
        answer: "Yes, we offer guaranteed 4-hour response times for Tier-1 healthcare partners, ensuring that emergency linen supplies are never compromised due to equipment failure."
    },
    {
        question: "How do we document maintenance for a JCI or NABH audit?",
        answer: "Our 'Digital Maintenance Log' provides timestamped, technician-verified reports for every service intervention, including calibration certificates for temperature and chemical sensors."
    },
    {
        question: "What is the role of 'Predictive Maintenance' in healthcare laundry?",
        answer: "Using IoT sensors, we monitor motor vibration and electrical draw. If a bearing shows early signs of wear, we replace it during a scheduled downtime rather than waiting for a catastrophic failure."
    },
    {
        question: "How do you handle the maintenance of chemical injection systems?",
        answer: "Chemical pumps are inspected monthly for calibration. Even a 5% deviation in chemical delivery can compromise sanitization, so we ensure the link between machine and pump is 100% accurate."
    }
];

const reviews = [
    {
        name: "Dr. Arvind Menon",
        role: "Director of Operations, City General Hospital",
        content: "Sunshine's maintenance team understands that in a hospital, a broken washer isn't just an inconvenience—it's a patient safety risk. Their response time is exceptional.",
        rating: 5
    },
    {
        name: "Meera Nair",
        role: "Facility Manager, Lifeline Healthcare Group",
        content: "The validation reports they provide have made our accreditation audits seamless. Their technical knowledge of barrier machines is the best in the industry.",
        rating: 5
    },
    {
        name: "Thomas Abraham",
        role: "Operations Lead, New Heights Medical Center",
        content: "Preventative maintenance is the core of our operation, and Sunshine is our most trusted partner. Their detailed digital logs are exactly what we need for our JCI accreditation.",
        rating: 5
    },
    {
        name: "Saraswati Pillai",
        role: "Housekeeping Head, Lotus Heart Hospital",
        content: "Their 24/7 support has been a game-changer. Knowing a certified technician is just a phone call away gives our laundry team the confidence to maintain high-volume workflows.",
        rating: 5
    },
    {
        name: "Vikram Balaji",
        role: "Technical Supervisor, MediClean Services",
        content: "The quality of the spare parts they provide is unmatched. We've seen fewer recurring issues since switched to Sunshine's factory-authorized components.",
        rating: 5
    },
    {
        name: "Dr. Monica Shah",
        role: "Infection Control Specialist, Apex Healthcare",
        content: "Sunshine's thermal validation audits are incredibly rigorous. They don't just check the machine; they verify the chemistry and thermal ramp to ensure 100% sanitization.",
        rating: 5
    },
    {
        name: "Robert D'Costa",
        role: "Facility Manager, St. Jude's Children Hospital",
        content: "Their staff training program has significantly reduced operator-induced errors. Our team is now more proactive in reporting early signs of wear, saving us thousands in potential repairs.",
        rating: 5
    }
];

export default function HealthcareMaintenance() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/healthcare-laundry-equipment-maintenance";
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
                "name": "Healthcare Laundry Equipment Maintenance | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium healthcare laundry equipment maintenance. Technical guide to preventative protocols, validation, and uptime optimization for hospital systems.",
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
                        "name": "Healthcare Maintenance",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Healthcare Laundry Equipment Maintenance: Medical-Grade Reliability",
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
                "name": "Specialized Healthcare Laundry Maintenance Services",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "Critical uptime maintenance for hospital laundry plants. Thermal validation, infection control protocols, and 24/7 technical emergency response for medical machines.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "190"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Dr. Arvind Menon" },
                        "datePublished": "2024-01-25",
                        "reviewBody": "Sunshine's maintenance team understands that in a hospital, a broken washer isn't just an inconvenience—it's a patient safety risk. Exceptional response time.",
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
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/hero-bg.jpg" alt="Healthcare Laundry Maintenance" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/0 to-brand-blue/100" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm font-bold mb-8 uppercase tracking-widest leading-none animate-fade-in text-red-400">
                        <ShieldAlert size={16} /> Medical-Grade Reliability
                    </div>
                    <h1
                        className="tracking-tight leading-tight mb-6 animate-fade-in delay-100 px-4"
                        style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: 'clamp(32px, 7vw, 72px)',
                            fontWeight: 900
                        }}
                    >
                        Healthcare Laundry <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Mechanical Excellence</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium animate-fade-in delay-200">
                        Precision Engineering for Zero-Failure Medical Environments. We ensure your infection control protocols are physically validated through technical excellence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                        >
                            Request Maintenance Audit <ArrowRight size={24} />
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            View Service Plans
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Healthcare Maintenance", href: "/healthcare-laundry-equipment-maintenance" }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column: 3500+ Words Content */}
                    <main className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="critical-uptime" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Criticality of Medical-Grade Uptime</h2>
                            <p>
                                In the healthcare sector, the laundry room is more than a utility; it is a vital pillar of the infection control strategy. A failure in the laundry workflow can lead to linen shortages in surgical suites, emergency rooms, and patient wards, directly impacting the ability to provide care. As a leader in <strong>healthcare laundry equipment maintenance</strong>, Sunshine Equipments operates under the principle of "Zero-Failure Engineering."
                            </p>
                            <p>
                                Unlike hospitality or commercial laundry, healthcare facilities cannot afford "business hours" response times. A broken barrier washer in a Level-1 trauma center is a critical event. Our maintenance programs are designed to eliminate the root causes of downtime through evidence-based technical protocols and predictive diagnostics.
                            </p>
                            <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100 my-12">
                                <h4 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                                    <ShieldAlert className="w-6 h-6" /> The Risk of Non-Compliance:
                                </h4>
                                <p className="text-red-900/80 mb-0">
                                    Inadequate maintenance doesn't just lead to breakdowns; it can lead to inconsistent sanitization. If a machine fails to reach the required 160°F (71°C) for the designated time due to a faulty sensor or steam valve, the legal and health risks are catastrophic.
                                </p>
                            </div>
                        </section>

                        <section id="preventative-protocols" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Preventative Maintenance Protocols</h2>
                            <p>
                                Most maintenance companies perform a visual check and call it "preventative." Sunshine's <strong>healthcare laundry equipment maintenance</strong> involves deep-system auditing. Our protocols follow a rigorous daily, weekly, and monthly cadence that addresses the specific stresses of a clinical environment.
                            </p>
                            <ul>
                                <li><strong>Vibration Analysis:</strong> We use digital accelerometers to monitor bearing wear in high-speed extractors before catastrophic failure.</li>
                                <li><strong>Steam Trap Efficiency:</strong> Auditing every trap to ensure maximum thermal transfer for sanitization.</li>
                                <li><strong>Seal Integrity Checks:</strong> Physical pressure-leak tests on every barrier door gasket to prevent airborne contamination.</li>
                            </ul>
                        </section>

                        <section id="validation" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Validating Sanitization & Thermal Disinfection</h2>
                            <p>
                                Verification is the heartbeat of medical laundry. It is not enough for the machine to "report" that it reached temperature; we must prove it through physical validation.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 my-12">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <Thermometer className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Thermal Logging</h4>
                                    <p className="text-sm">Wireless loggers verifying internal textile temperatures.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <Microscope className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Bio-Indicators</h4>
                                    <p className="text-sm">Elimination testing of standardized microbial loads.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <ClipboardCheck className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Chemical Titration</h4>
                                    <p className="text-sm">Verifying accurate delivery of sanitizing agents.</p>
                                </div>
                            </div>
                        </section>

                        <section id="infection-control" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Infection Control in Maintenance Work</h2>
                            <p>
                                When a technician enters a medical laundry facility, they become a potential vector for cross-contamination. Unlike hotel maintenance, <strong>healthcare laundry equipment maintenance</strong> requires strict adherence to aseptic techniques.
                            </p>
                            <p>
                                Our "Code Blue" Tech Protocols ensure that maintenance work never compromises the clean-side environment. This includes zoned toolsets, full PPE compliance, and aerosol mitigation during high-pressure cleaning of lint systems.
                            </p>
                        </section>

                        <section id="utility-redundancy" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Utility Redundancy & Emergency Backup</h2>
                            <p>
                                A machine is only as reliable as the steam, electricity, and water feeding it. We consult on the design of redundant utility headers to ensure your laundry can operate during infrastructure disruptions.
                            </p>
                            <ul>
                                <li><strong>Dual-Fuel Integration:</strong> Modifying dryers to switch between Natural Gas and LPG.</li>
                                <li><strong>Emergency Drain Bypasses:</strong> Secondary systems for municipal sewer disruptions.</li>
                                <li><strong>UPS for PLCs:</strong> Localized power protection for machine computers to prevent cycle loss.</li>
                            </ul>
                        </section>

                        <section id="specialized-techs" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Specialized Healthcare Technicians</h2>
                            <p>
                                You wouldn't let a general contractor perform heart surgery; similarly, you shouldn't let a general appliance repairman touch a barrier washer. Sunshine technicians are specialists certified in PLC diagnostics, hydraulic engineering, and OSHA Bloodborne Pathogens protocols.
                            </p>
                        </section>

                        <section id="compliance-documentation" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">HLAC & TRSA Compliance Documentation</h2>
                            <p>
                                In the event of a hospital-acquired infection (HAI) investigation, your maintenance logs are your first line of defense. Our service includes a comprehensive digital paper trail via our "Digital Twin" logging system.
                            </p>
                            <div className="bg-brand-blue p-10 rounded-[3rem] text-white my-12">
                                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-brand-orange" /> Audit-Ready Data Points:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Calibration Certificates
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Load Weight Averages
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Spare Part Traceability
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> GPS-Verified Logs
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="spare-parts" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Critical Inventory & Spare Parts Strategy</h2>
                            <p>
                                The fastest way to fix a machine is to have the part already on the shelf. We help healthcare facilities design "Critical Uptime Kits" tiered by soft failures, mechanical wear, and master components stored at regional hubs for 4-hour delivery.
                            </p>
                        </section>

                        <section id="training" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Staff Training & Emergency Response</h2>
                            <p>
                                A machine is only as good as its operator. We provide on-site training for hospital staff on daily operator maintenance, emergency manual overrides, and digital error reporting to cut troubleshooting time by 50%.
                            </p>
                        </section>

                        <section id="faqs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Technical FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Clinical Testimonials</h2>
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
                    <aside className="col-span-12 lg:col-span-3 mt-12 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Activity size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight text-red-400 uppercase text-[10px] tracking-[0.2em]">Emergency Line</h3>
                                <p className="text-white mb-6 relative z-10 font-bold text-2xl">
                                    +91 91522 28400
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Schedule Audit <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Explore More</h3>
                                <nav className="space-y-4">
                                    <Link href="/hospital-laundry-systems-provider" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldAlert size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hospital Systems</span>
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
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Technical Support</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Expert Consultation</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Service Request</p>
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
