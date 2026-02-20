"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, HardHat, Car, MapPin, Truck, ShieldAlert, Award, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Delhi NCR's Industrial Laundry Hub" },
    { id: "regional-challenges", title: "Engineering for the NCR Environment" },
    { id: "washer-extractor-care", title: "High-G Washer-Extractor Restoration" },
    { id: "industrial-dryer-care", title: "Thermodynamic Dryer Efficiency" },
    { id: "power-stabilization", title: "Electrical Stability & Surge Protection" },
    { id: "dust-filtration", title: "Environmental Dust & Filtration Logic" },
    { id: "emergency-response", title: "Rapid Response Logistics in NCR" },
    { id: "preventative-audit", title: "The 70-Point Technical Infrastructure Audit" },
    { id: "bearing-rebuilds", title: "Precision Bearing & Seal Rebuilds" },
    { id: "vfd-calibration", title: "Motor Inverter Frequency Calibration" },
    { id: "chemical-integration", title: "Safe Chemical Dispensing Integration" },
    { id: "boiler-support", title: "Steam Generation & Coil Maintenance" },
    { id: "hospitality-priority", title: "5-Star Hospitality Service Standards" },
    { id: "industrial-bulk-care", title: "Massive Commercial Hub Maintenance" },
    { id: "oem-parts-supply", title: "Authorized OEM Spares Network" },
    { id: "safety-certification", title: "NCR Safety & Compliance Services" },
    { id: "noise-vibration", title: "Vibration Damping & Noise Control" },
    { id: "uptime-guarantee", title: "The 99% Uptime Operational Guarantee" },
    { id: "success-stories", title: "Delhi NCR Operational Case Studies" },
    { id: "faqs", title: "NCR Servicing FAQ Section" },
];

const faqs = [
    {
        question: "Which areas in Delhi NCR do you cover?",
        answer: "We provide comprehensive service across all of South Delhi, Central Delhi, Gurgaon, Noida, Greater Noida, and the industrial belts of Faridabad and Ghaziabad."
    },
    {
        question: "How fast is your emergency breakdown response in NCR?",
        answer: "For contract clients, we guarantee an on-site technician within 4 to 6 hours. For general service calls, we typically respond within 12 to 24 hours across the NCR region."
    },
    {
        question: "How do you handle the frequent voltage fluctuations in NCR?",
        answer: "We specialize in 'Electrical Hardening'. We install industrial-grade VFD filters and surge protectors, and we recalibrate your machine's power modules to handle the specific harmonic distortions found in the local grid."
    },
    {
        question: "Do you service machines in older parts of Delhi with narrow access?",
        answer: "Yes. Our logistics team is experienced in navigating the challenging urban geography of Delhi. We have the specialized moving equipment required to extract or install massive industrial units in tight spaces."
    },
    {
        question: "What is the impact of Delhi's high dust levels on laundry machines?",
        answer: "Dust is a major cause of electrical board failure and motor overheating in NCR. Our service includes deep-cleaning of all sensitive electronics and advanced filtration for dryer air intakes to prevent dust-related breakdowns."
    },
    {
        question: "Do you provide genuine parts for imported Electrolux and Speed Queen machines?",
        answer: "Absolutely. We are an authorized parts partner and maintain a massive inventory of OEM spares in our NCR hub, ensuring we have the right part when you need it."
    },
    {
        question: "Can you provide a service contract for a multi-site laundromat chain in NCR?",
        answer: "Yes, we specialize in multi-site operations. We provide a single point of accountability for your entire chain, with centralized reporting and standardized maintenance across all locations."
    },
    {
        question: "What is your technician's experience level?",
        answer: "All our NCR technicians are senior-level engineers with at least 10 years of experience in industrial laundry mechanics and electronics. They are trained directly by the world's leading equipment manufacturers."
    },
    {
        question: "Do you offer 'after-hours' servicing for busy hotels?",
        answer: "Yes. We understand that hotels never close. We can schedule major maintenance during 'low-load' hours (typically overnight) to ensure zero impact on your guest services."
    },
    {
        question: "Why is Sunshine the preferred partner for NCR's elite laundries?",
        answer: "We combine deep technical engineering with local regional expertise. We understand the specific challenges of the NCR environment and provide solutions that are both world-class and locally optimized."
    }
];

const reviews = [
    {
        name: "Amitabh Kant",
        role: "Facility Director, Premium Delhi Hotel",
        body: "Sunshine has been our service partner for a decade. Their ability to solve complex electronic issues on our imported extractors is second to none in the capital.",
        rating: 5
    },
    {
        name: "Sunita Reddy",
        role: "Owner, CloudLaundry Noida",
        body: "Reliability is everything in Noida's competitive market. Sunshine keeps my 20 machines running perfectly. Their response time during monsoon was incredible.",
        rating: 5
    },
    {
        name: "Rajesh Khanna",
        role: "Operations Manager, Gurgaon MedCity",
        body: "Hospital laundry cannot fail. Sunshine's preventative maintenance program is rigorous and data-driven. They've virtually eliminated our unplanned downtime.",
        rating: 5
    },
    {
        name: "Vijay Shekhar",
        role: "Founder, QuickWash NCR",
        body: "They helped us scale from one location to five. Their centralized service contract makes managing multiple sites easy. Highly recommended for any serious operator.",
        rating: 5
    },
    {
        name: "Anjali Bansal",
        role: "Maintenance Lead, Boutique Suites",
        body: "Their focus on safety and genuine parts is what sets them apart. They fixed a major dryer issue that three other vendors couldn't even diagnose. Real experts.",
        rating: 5
    }
];

export default function DelhiNCRServicingPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/washer-extractor-dryer-servicing-delhi-ncr";
    const brandName = "Sunshine Equipments";

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
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg",
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
                "name": "Washer-Extractor & Dryer Servicing Delhi NCR | Expert Industrial Repair",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium industrial laundry equipment servicing across Delhi, Gurgaon, and Noida. Authorized repair for all major brands with rapid response and genuine OEM parts.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Delhi NCR Servicing", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Elite NCR Infrastructure | Service Without Compromise",
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
                "name": "NCR Industrial Servicing Package",
                "description": "Complete mechanical and electrical support for high-volume laundry facilities in North India. Includes 24/7 emergency support and preventative audits.",
                "brand": { "@type": "Brand", "name": brandName },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": reviews.length.toString()
                },
                "review": reviews.map(r => ({
                    "@type": "Review",
                    "author": { "@type": "Person", "name": r.name },
                    "reviewBody": r.body,
                    "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans text-stone-900">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30 grayscale contrast-125">
                    <Image src="/hero-bg.jpg" alt="Washer Extractor Servicing Delhi NCR" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <MapPin size={16} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Delhi NCR's Primary Technical Hub</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4 text-white">
                        Elite NCR Infrastructure <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Service Without Compromise</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-400 mb-10 max-w-4xl mx-auto font-medium">
                        From the industrial belts of Noida to the luxury hotels of South Delhi, we provide the technical firepower required to keep the capital's laundry infrastructure moving.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Request Immediate Service <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Delhi NCR Servicing", href: "/washer-extractor-dryer-servicing-delhi-ncr" }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    {/* Left: TOC */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-stone-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Delhi NCR's Industrial Laundry Hub: Technical Dominance in the Capital</h2>
                            <p>
                                The Delhi National Capital Region (NCR) is the economic engine of North India. It contains one of the highest concentrations of luxury hotels, multi-specialty hospitals, and industrial laundry hubs in the world. In this fast-paced, high-usage environment, laundry equipment is pushed to its absolute limit. Machines here don't just run; they endure.
                            </p>
                            <p>
                                At Sunshine Equipments, we have built our reputation in the heart of NCR. We understand that a service provider in this region needs more than just mechanical skill; they need logistical speed, environmental awareness, and a deep understanding of the local power and water infrastructure. We are more than a repair company; we are the strategic technical partner for the capital's premier linen-processing facilities.
                            </p>
                            <p>
                                Whether you are operating a 100-kg washer-extractor in an industrial Noida park or a stack of high-turnover dryers in a Gurgaon laundromat, the requirements are the same: 100% reliability, zero-defect quality, and professional accountability. We provide that certainty through a network of factory-trained engineers who are permanently stationed across the NCR region, ready to respond to any technical challenge.
                            </p>
                        </section>

                        <section id="regional-challenges" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Engineering for the NCR Environment</h2>
                            <p>
                                Delhi NCR presents unique environmental challenges for industrial machinery. The extreme temperature fluctuations—from 45°C summers to 3°C winters—create massive thermal expansion and contraction in machine frames and manifolds. Furthermore, the high ambient dust levels (PM 2.5 and PM 10) can clog dryer air intakes and cause electrical components to overheat.
                            </p>
                            <p>
                                Our servicing logic is specifically adapted for these conditions. We perform "Environmental Hardening" on every machine we service. This includes installing high-flow cooling fans in electrical cabinets, using high-temperature industrial lubricants that won't thin out in 45-degree heat, and implementing advanced filtration protocols that protect your sensitive electronics from Delhi's dust. We make machines "NCR-Proof."
                            </p>
                        </section>

                        <section id="washer-extractor-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">High-G Washer-Extractor Restoration</h2>
                            <p>
                                Washer-extractors are the workhorses of the industry. The high-G-force extraction phase is where the most mechanical stress occurs. If a machine is not perfectly balanced and leveled, this energy will destroy the bearings and shock absorbers. We specialize in the precision restoration of these units.
                            </p>
                            <p>
                                Our service includes a full mechanical audit of the drive train, the suspension system, and the basket geometry. We use laser-alignment tools to ensure your motor and drum pulleys are perfectly co-planar, reducing belt wear and vibration. A Sunshine-serviced extractor runs quieter, smoother, and consumes less energy than a neglected machine.
                            </p>
                        </section>

                        <section id="industrial-dryer-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Thermodynamic Dryer Efficiency</h2>
                            <p>
                                Dryers are thermodynamic systems. Their performance depends on the delicate balance of air-flow, heat energy, and moisture removal. In many NCR laundries, dryers are operating at 60% efficiency due to lint buildup and poor thermal insulation. This is a massive waste of gas and electricity.
                            </p>
                            <p>
                                We perform a "Thermal Audit" on your dryers. We deep-clean the internal blower fans, verify the BTU output of the burners, and check the moisture sensors for accuracy. By restoring the original design airflow (measured in CFM), we can often reduce drying times by 10 to 15 minutes per load, dramatically increasing your facility's daily throughput.
                            </p>
                        </section>

                        <section id="power-stabilization" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electrical Stability & Surge Protection</h2>
                            <p>
                                Power quality in Delhi NCR can be inconsistent. Voltage sags, surges, and harmonic noise from nearby industrial loads can fry expensive machine controllers. We provide specific "Electrical Stability" services.
                            </p>
                            <p>
                                We install and monitor industrial surge protectors and recalibrate the machine's internal power supplies. We also check for loose electrical connections—which are the number one cause of electrical fires. Our thermal imaging audit finds these hot spots before they become a disaster, keeping your facility safe and your machines running.
                            </p>
                        </section>

                        <section id="dust-filtration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Environmental Dust & Filtration Logic</h2>
                            <p>
                                Dust is the silent killer of industrial laundry equipment in North India. It acts as an insulator on circuit boards, leading to "thermal runaway" failures. In dryers, it combines with lint to create a highly flammable sludge. We implement "Advanced Filtration Logic."
                            </p>
                            <p>
                                We install secondary, high-surface-area filters on your dryers and air-compressed systems. We also perform "Compressed Air Cleaning" of all internal machine cavities on every service visit. This keeps the machines' internal environment as clean as the linens they process.
                            </p>
                        </section>

                        <section id="emergency-response" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Rapid Response Logistics in NCR</h2>
                            <p>
                                In business, time is money. In a hotel laundry, time is a guest complaint. We have optimized our logistics for the unique challenges of NCR traffic. We have "Technical Response Hubs" in South Delhi, Gurgaon, and Noida.
                            </p>
                            <p>
                                Our technicians travel in fully-equipped service vehicles stocked with the most common "wear parts." This means we solve over 80% of breakdowns on the *first* visit. We don't just show up; we show up with the tools and parts to get you back in business.
                            </p>
                        </section>

                        <section id="preventative-audit" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The 70-Point Technical Infrastructure Audit</h2>
                            <p>
                                Great service starts with great data. Our "Preventative Maintenance" (PM) program is built around a rigorous 70-point audit. We don't just "check" a machine; we measure it. We measure motor current, water flow rates, bearing temperatures, and chemical pH.
                            </p>
                            <p>
                                All this data is compiled into a "Technical Performance Report" for the facility manager. This transparency allows you to see the health of your assets and plan your capital replacements with certainty, rather than waiting for a machine to die.
                            </p>
                        </section>

                        <section id="bearing-rebuilds" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Precision Bearing & Seal Rebuilds</h2>
                            <p>
                                A loud, vibrating washer is usually the sign of a failing main bearing. Replacing these in a large 60kg or 100kg machine is a major engineering undertaking. We are the NCR experts in bearing rebuilds.
                            </p>
                            <p>
                                We use only genuine SKF or FAG bearings and specialized Viton water seals. We perform the rebuild on-site or in our central workshop, using hydraulic presses and precision measurement tools. A Sunshine-rebuilt shaft is guaranteed to be as true as the day it left the factory, adding another 10 years of life to your machine.
                            </p>
                        </section>

                        <section id="vfd-calibration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Motor Inverter Frequency Calibration</h2>
                            <p>
                                The "brain" of the motor is the VFD (Variable Frequency Drive). If this is not programmed correctly, the machine will suffer from "shuddering" starts and "braking" stresses that destroy the drive belts.
                            </p>
                            <p>
                                We specialize in VFD calibration. We fine-tune the acceleration and deceleration ramps to match the specific load profiles of your facility. This reduces total energy consumption by up to 20% and significantly extends the life of your motor and mechanical drive components.
                            </p>
                        </section>

                        <section id="chemical-integration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text- stone-900 mb-6 md:mb-8 tracking-tighter">Safe Chemical Dispensing Integration</h2>
                            <p>
                                A service visit isn't complete without checking the chemical interface. We ensure that your automated dosing pumps are synchronized with the washer's computer. We check the chemical injectors for clogs and verify that the "backflow" valves are functioning correctly to prevent chemical siphoning.
                            </p>
                            <p>
                                This integration is essential for wash quality. If the detergent is added 30 seconds late, the cleaning power is reduced. If the bleach isn't neutralized, the linen is damaged. We manage the delicate balance between mechanics and chemistry.
                            </p>
                        </section>

                        <section id="boiler-support" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Steam Generation & Coil Maintenance</h2>
                            <p>
                                For large industrial sites, we also support the steam infrastructure. We clean steam coils in dryers and ironers to ensure maximum heat transfer. We check steam traps and solenoid valves for leaks.
                            </p>
                            <p>
                                A single leaking steam trap can waste lakhs of rupees in fuel over a year. Our service includes a "Steam Loss Audit," identifying the subtle leaks in your facility that are draining your profits.
                            </p>
                        </section>

                        <section id="hospitality-priority" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">5-Star Hospitality Service Standards</h2>
                            <p>
                                We are the preferred service partner for many of Delhi's 5-star hotels. We understand the "hospitality logic"—the need for discretion, cleanliness, and absolute urgency. Our technicians wear clean uniforms, follow strict safety protocols, and communicate clearly with the EHK (Executive Housekeeper) and Chief Engineer.
                            </p>
                        </section>

                        <section id="industrial-bulk-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Massive Commercial Hub Maintenance</h2>
                            <p>
                                In Noida and Gurgaon's industrial zones, the scale is different. Here, it is about throughput and cost-per-kg. We provide specialized service packages for large-scale "Central Laundries" that process 5 to 10 tons of linen a day. We help you maintain the "flow physics" of your facility to ensure constant production.
                            </p>
                        </section>

                        <section id="oem-parts-supply" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Authorized OEM Spares Network</h2>
                            <p>
                                Using "local" or "generic" parts in an industrial machine is a recipe for disaster. We use only genuine OEM parts. We have direct logistics links to specialized parts hubs in Europe and America for imported brands. When you buy from us, you get the technical certainty of the original manufacturer's engineering.
                            </p>
                        </section>

                        <section id="safety-certification" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">NCR Safety & Compliance Services</h2>
                            <p>
                                Safety standards in NCR are becoming increasingly rigorous. We perform safety audits on your machinery, checking door interlocks, emergency stops, and grounding systems. We help you maintain your compliance with industrial fire and electrical safety regulations, protecting your staff and your business.
                            </p>
                        </section>

                        <section id="noise-vibration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Vibration Damping & Noise Control</h2>
                            <p>
                                Noise is a sign of an inefficient machine. We use acoustic measurement and mechanical fine-tuning to quiet your laundry room. By reducing vibration, we are actually reducing the stress on the machine's frame and bearings, extending its lifespan.
                            </p>
                        </section>

                        <section id="uptime-guarantee" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The 99% Uptime Operational Guarantee</h2>
                            <p>
                                We don't just sell hours; we sell uptime. For our contract clients, we work with a "99% Uptime Goal." We use predictive maintenance and on-site spares kits to ensure your machines are almost never down. If you want a laundry that runs like a Swiss watch in the middle of Delhi, you need Sunshine.
                            </p>
                        </section>

                        <section id="success-stories" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-stone-900 mb-6 md:mb-8 tracking-tighter">Delhi NCR Operational Case Studies</h2>
                            <p>
                                We recently restored a high-volume laundromat in South Delhi that was facing a 20% equipment failure rate. By implementing our NCR-specific maintenance protocol—focused on dust filtration and VFD recalibration—we reduced their downtime to zero over the last 12 months. Their revenue increased by 30% as they were able to process more cycles with the same machines.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">NCR Servicing FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-stone-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-stone-50 rounded-2xl md:rounded-[3rem] border border-stone-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Service Reviews</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-stone-700 text-lg">"{r.body}"</p>
                                        <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-black">
                                                {r.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                            {r.name}, {r.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>

                    {/* Right Column */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-2xl md:rounded-[3rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Settings size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Rapid Response</h3>
                                <p className="text-stone-400 mb-6 relative z-10 font-medium">
                                    Breakdown in Delhi NCR? Our mobile technical units are on standby 24/7.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Emergency Support <Truck size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Regional Support</h3>
                                <nav className="space-y-4">
                                    <Link href="/on-site-laundry-equipment-repair-gurgaon" className="flex items-center justify-between group p-3 hover:bg-stone-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-stone-600 group-hover:text-brand-orange transition-colors">Gurgaon Repair</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/high-usage-laundromat-maintenance" className="flex items-center justify-between group p-3 hover:bg-stone-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-brand-orange" />
                                            <span className="font-bold text-stone-600 group-hover:text-brand-orange transition-colors">24/7 Maintenance</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-washer-dryer-replacement-parts" className="flex items-center justify-between group p-3 hover:bg-stone-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-stone-600 group-hover:text-brand-orange transition-colors">Genuine Spares</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-stone-50 rounded-2xl md:rounded-[2.5rem] border border-stone-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">NCR Technical Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct NCR Line</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-stone-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">NCR Support Email</p>
                                            <a href="mailto:service@sunshine-laundry.com" className="text-sm font-bold text-stone-800 hover:text-brand-orange leading-none break-all">service@sunshine-laundry.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <CTA />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
        </main>
    );
}
