"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, HardHat, Clock, Repeat, BarChart3, ShieldAlert, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The High-Usage Operational Reality" },
    { id: "maintenance-logic", title: "Preventative Maintenance Engineering" },
    { id: "duty-cycle-stress", title: "Duty Cycle & Mechanical Stress Analysis" },
    { id: "critical-wear-points", title: "Identifying Critical Wear Points" },
    { id: "lubrication-protocols", title: "Industrial Lubrication Protocols" },
    { id: "filter-hygiene", title: "Lint & Water Filter Hygiene Management" },
    { id: "vibration-monitoring", title: "Advanced Vibration & Balance Monitoring" },
    { id: "chemical-impact", title: "Chemical Abrasion & Sealing Integrity" },
    { id: "electrical-thermal-care", title: "Electrical Thermal Imaging & Care" },
    { id: "belt-tension-science", title: "Drive Belt Tensioning & Alignment" },
    { id: "drain-performance", title: "Drain Valve & Flow Performance Logic" },
    { id: "computer-diagnostics", title: "Digital Diagnostics & Error Log Analysis" },
    { id: "staff-training", title: "Staff Best Practices for Machine Longevity" },
    { id: "emergency-spares", title: "Emergency Spares Kit Strategy" },
    { id: "uptime-statistics", title: "ROI of Professional Maintenance" },
    { id: "seasonal-adjustments", title: "Seasonal Maintenance Adjustments" },
    { id: "noise-pollution", title: "Noise Pollution & Vibration Damping" },
    { id: "lifecycle-extension", title: "Machine Lifecycle Extension Blueprint" },
    { id: "success-studies", title: "High-Usage Success Case Studies" },
    { id: "faqs", title: "Laundromat Maintenance FAQ Section" },
];

const faqs = [
    {
        question: "What defines a 'high-usage' laundromat?",
        answer: "A high-usage laundromat typically runs its machines for 12 to 24 hours a day, performing 10 or more cycles per machine daily. This creates mechanical stresses that standard maintenance schedules are not designed to handle."
    },
    {
        question: "How often should I perform a deep preventative maintenance check?",
        answer: "For high-usage facilities, we recommend a secondary technical audit every 3 months, in addition to daily and weekly staff cleaning rituals. This prevents minor wear from escalating into a total mechanical failure."
    },
    {
        question: "What is the most common cause of machine failure in busy laundromats?",
        answer: "Bearing failure caused by worn water seals is the number one cause. In high-usage machines, seals work 10 times harder; once they fail, soapy water destroys the bearings, often within weeks."
    },
    {
        question: "Does regular maintenance really improve my utility bills?",
        answer: "Yes, significantly. Clogged lint filters in dryers and scaled heating elements in washers force machines to work harder and run longer. Maintenance keeps them operating at their original energy-efficiency specifications."
    },
    {
        question: "Can my own staff perform the maintenance, or do I need a professional?",
        answer: "Staff can handle daily cleaning and filter checks. However, technical maintenance—like vibration analysis, VFD calibration, and bearing inspections—requires a certified technician with specialized industrial tools."
    },
    {
        question: "What is 'Vibration Damping' and why does it matter?",
        answer: "Vibration is the enemy of industrial machinery. It loosens electrical connections, fatigues the metal frame, and destroys shock absorbers. Damping involves ensuring the machine is perfectly leveled and that its suspension is functioning correctly."
    },
    {
        question: "How do I know if my dryer airflow is restricted?",
        answer: "The clearest sign is increased drying times. You can also check for excessive lint buildup in the exhaust duct and monitor the back-pressure using a simple manometer. Professional maintenance includes a full airflow technical audit."
    },
    {
        question: "What are the benefits of a monthly maintenance contract?",
        answer: "A contract provides fixed-cost certainty, priority response for emergencies, and a structured historical record of your machine's health, which is invaluable for resale value and capital planning."
    },
    {
        question: "Can professional maintenance help prevent electrical fires?",
        answer: "Absolutely. We use thermal imaging to find 'hot spots' in your electrical panels and machine controllers caused by loose connections. Catching these early eliminates the risk of a catastrophic electrical event."
    },
    {
        question: "Why should I trust Sunshine with my high-usage maintenance?",
        answer: "We manage the maintenance for some of India's busiest industrial laundry facilities. We bring a data-driven, engineering-first approach that focuses on total asset uptime and long-term profitability."
    }
];

const reviews = [
    {
        name: "Kunal Kapoor",
        role: "Owner, 24/7 SuperWash",
        body: "Our machines run 18 hours a day. Before Sunshine's maintenance program, we had a breakdown every week. Now, we've gone 8 months with zero downtime. The ROI is undeniable.",
        rating: 5
    },
    {
        name: "Ritika Singh",
        role: "Maintenance Coordinator, CityLink Laundry",
        body: "The technical depth they bring is incredible. They found a bearing issue in our main extractor that our previous mechanic missed completely. Saved us a massive repair bill.",
        rating: 5
    },
    {
        name: "Mohit Agarwal",
        role: "Director, CleanChain India",
        body: "Sunshine understands the scale of our operations. Their maintenance reports are detailed and help me plan my capital investments with certainty. A true professional partner.",
        rating: 5
    },
    {
        name: "Pooja Sharma",
        role: "Property Manager, Luxury Suites",
        body: "Their thermal imaging audit was a revelation. They fixed three loose electrical connections that were a major fire risk. Their focus on safety is what I value most.",
        rating: 5
    },
    {
        name: "Sumit Varma",
        role: "Laundromat Consultant",
        body: "I recommend Sunshine for any high-volume site. Their preventive logic is the best in the industry. They keep machines running longer and more efficiently than anyone else.",
        rating: 5
    }
];

export default function HighUsageMaintenancePage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/high-usage-laundromat-maintenance";
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
                "name": "High-Usage Laundromat Maintenance | Professional Uptime Solutions",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Expert preventative maintenance for high-volume 24/7 laundromats. Specialized in bearing care, vibration damping, and electrical safety to ensure 100% equipment uptime.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "High Usage Maintenance", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Elite Uptime Engineering | For High-Volume Laundromats",
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
                "name": "Total Uptime Maintenance Program",
                "description": "Comprehensive engineering support for high-volume laundry facilities. Includes vibration analysis, thermal imaging, and mechanical restoration protocols.",
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
        <main className="min-h-screen bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 grayscale">
                    <Image src="/hero-bg.jpg" alt="High Usage Maintenance" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Repeat size={16} className="text-white animate-spin-slow" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Maximum Uptime Architecture</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        Elite Uptime Engineering <br className="hidden md:block" />
                        <span className="text-brand-orange italic">For High-Volume Laundromats</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-4xl mx-auto font-medium">
                        Stop reacting to breakdowns. We implement pro-active engineering protocols designed for machines that never sleep. Maintain 100% capacity, 100% of the time.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Get an Uptime Audit <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "High Usage Maintenance", href: "/high-usage-laundromat-maintenance" }]} />
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
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The High-Usage Operational Reality: Engineering for 24/7 Demands</h2>
                            <p>
                                In a high-traffic urban laundromat, equipment is not just a tool; it is a revenue-generating engine that operates under relentless demand. Standard commercial washers and dryers are robust, but they are not indestructible. When a machine is running 15 duty cycles a day, seven days a week, it experiences "accelerated aging." A single month of operation in such an environment is equivalent to a year of use in a domestic setting. This is the reality of high-usage laundry.
                            </p>
                            <p>
                                At Sunshine Equipments, we define "High-Usage Maintenance" as a specialized engineering discipline. It is not about simply cleaning filters or wiping down stainless steel. It is about understanding the mechanical stresses, the thermal profiles, and the chemical abrasion that occur only in high-volume facilities. We have developed a "Total Uptime Logic" that transitions your facility from a cycle of reactive repairs to a state of predictive operational excellence.
                            </p>
                            <p>
                                The economics of downtime in a busy laundromat are brutal. A machine that is "Out of Order" for two days during a peak weekend can cost you thousands in direct revenue and even more in customer trust. A customer who finds their favorite machine broken twice is unlikely to return. Maintenance, therefore, is not a cost center; it is a revenue protection strategy. We help you protect that revenue through a combination of industrial technical skill and data-driven scheduling.
                            </p>
                        </section>

                        <section id="maintenance-logic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Preventative Maintenance Engineering</h2>
                            <p>
                                Preventative Maintenance (PM) is the heartbeat of a profitable facility. It is based on the scientific fact that mechanical failure is preceded by measurable changes. A bearing doesn't just "snap"; it vibrates slightly more, generates a few more degrees of heat, and begins to weep a tiny amount of grease. Our PM protocols are designed to detect these "pre-failure" signals using industrial diagnostic tools.
                            </p>
                            <p>
                                We approach PM as a structural process. Every visit includes a 50-point checklist that covers everything from the tension of the drive motor to the accuracy of the water level sensors. By identifying and fixing a slightly frayed belt or a becoming-sluggish drain valve during a scheduled visit, we prevent a catastrophic failure during your busiest shift. It is the logical choice for any operator who values their time and their equipment.
                            </p>
                        </section>

                        <section id="duty-cycle-stress" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Duty Cycle & Mechanical Stress Analysis</h2>
                            <p>
                                Duty cycle is the most important metric in industrial longevity. A machine designed for an 8-hour shift will literally fatigue if run for 24 hours without rest. We perform a "Stress Audit" on your facility, analyzing the usage patterns of every machine. We look for "load balancing"—ensuring that certain machines aren't being over-used while others sit idle.
                            </p>
                            <p>
                                We also analyze the "mechanical fatigue" of the suspensions and frames. High-G-force extraction creates massive centrifugal energy. Over thousands of cycles, this energy can cause microscopic stress fractures in the machine's structural members. Our maintenance includes a visual and ultrasonic check of these critical points, ensuring the structural integrity of your investment remains intact.
                            </p>
                        </section>

                        <section id="critical-wear-points" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Identifying Critical Wear Points</h2>
                            <p>
                                In every industrial machine, there are "Predictable Failure Points." These are the components that take the most abuse. The basket seals, the drain valves, the door interlocks, and the motor contactors. In a high-usage environment, these parts should be viewed as "consumables" with a fixed lifespan. We help you identify these points and replace them on a scheduled basis, rather than waiting for them to break.
                            </p>
                            <p>
                                This targeted approach is much more efficient than a "wait and see" strategy. By knowing the typical "Mean Time Between Failures" (MTBF) for these parts in your specific environment, we can perform "surgical maintenance" that keeps your machines in a constant state of operational readiness.
                            </p>
                        </section>

                        <section id="lubrication-protocols" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Industrial Lubrication Protocols</h2>
                            <p>
                                Lubrication is the lifeblood of moving parts, but in a laundry, it is often done incorrectly. Using too much grease, the wrong type of grease, or greasing at the wrong frequency can be as damaging as not greasing at all. We implement "Scientific Lubrication" protocols. We use high-temperature, water-resistant industrial grease Specifically designed for high-RPM extractor bearings.
                            </p>
                            <p>
                                We also use ultrasonic grease sensors to ensure we are adding exactly the right amount. Under-lubrication leads to heat and friction; over-lubrication can destroy the bearing seals from the inside out. Our technical team manages this delicate balance, ensuring your motors and shafts rotate with zero resistance, reducing energy use and mechanical heat.
                            </p>
                        </section>

                        <section id="filter-hygiene" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lint & Water Filter Hygiene Management</h2>
                            <p>
                                Hygiene is not just about clean clothes; it's about clean machines. Lint is the enemy of the industrial dryer—it is a fire hazard and a massive air-flow restriction. In high-usage sites, lint filters must be deep-cleaned, not just swept. We also focus on the water intake filters of your washers. Clogged filters lead to long "fill times," which extend your cycle and reduce your facility's daily throughput.
                            </p>
                            <p>
                                Our maintenance includes a full "Flow-Path Audit." We ensure that air and water can move through your machines at their maximum design rates. This simple technical focus can improve your dryer productivity by 20 percent and your washer productivity by 10 percent, essentially giving you "free" capacity.
                            </p>
                        </section>

                        <section id="vibration-monitoring" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Advanced Vibration & Balance Monitoring</h2>
                            <p>
                                Vibration is the primary "Asset Killer" in laundries. Excessive vibration doesn't just shake the machine; it creates "work hardening" in the metal parts, making them brittle. We use high-frequency accelerometers to measure the vibration profile of your machine during the high-speed extraction phase. This allows us to detect imbalanced drums or failing shock absorbers long before they're audible to the human ear.
                            </p>
                            <p>
                                We also perform on-site leveling and anchoring audits. A machine that is even 2 degrees out of level will experience uneven bearing wear. By ensuring the machine is perfectly planar and securely anchored to the facility floor, we dissipate the energy of the spin cycle into the ground, not back into the machine's components.
                            </p>
                        </section>

                        <section id="chemical-impact" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Chemical Abrasion & Sealing Integrity</h2>
                            <p>
                                Industrial laundry chemicals are designed to be powerful, which means they can be abrasive to the machine's internal parts. Over time, high concentrations of bleach or alkali can degrade the rubber seals and the stainless steel surface of the drum (the "pitting" effect). Our maintenance includes a chemical residue audit.
                            </p>
                            <p>
                                We check for any corrosion inside the outer drum and verify the integrity of the main shaft seal. If the seal shows even the slightest sign of chemical hardening, we replace it on-site. This prevents the chemicals from reaching the bearings, which is the most common and most expensive failure point in any high-volume washer.
                            </p>
                        </section>

                        <section id="electrical-thermal-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electrical Thermal Imaging & Care</h2>
                            <p>
                                Electrical failures in high-usage laundromats are often thermal in nature. A loose wire in a contactor or a failing relay in the main controller will generate heat before it fails. We use industrial-grade thermal imaging cameras to "see" the heat profile of your machines' electrical panels while they're running.
                            </p>
                            <p>
                                This allows us to find "hot spots" that indicate high resistance. By simply tightening a terminal or replacing a worn contactor, we eliminate the primary cause of electrical fires and motherboard failures. It is a non-invasive check that provides massive safety and reliability benefits.
                            </p>
                        </section>

                        <section id="belt-tension-science" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Drive Belt Tensioning & Alignment</h2>
                            <p>
                                The belt is the transmission of your machine. In a high-usage extractor, it is subject to constant acceleration and deceleration. If the belt is not perfectly tensioned, it will slip, creating heat that "glazes" the belt and the pulley. Once glazed, it will slip more, eventually snapping.
                            </p>
                            <p>
                                We use sonic tension meters to ensure your belts are exactly at the manufacturer's specification. We also check the "Pulley Co-planarity"—ensuring the motor and drum pulleys are perfectly aligned. This reduces the "lateral stress" on the belt, extending its life by up to 50 percent and preventing unexpected drive-train failures.
                            </p>
                        </section>

                        <section id="drain-performance" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Drain Valve & Flow Performance Logic</h2>
                            <p>
                                A drain valve that takes 60 seconds to open instead of 10 seconds is a drain valve that is costing you money. In a high-volume site, those seconds add up across hundreds of cycles a week. We test the "Response Logic" of your drain system. We look for blockages caused by coins, bra-wires, or lint that slow down the drainage.
                            </p>
                            <p>
                                We also check the "Seal Integrity" of the valve. If a machine "ghost drains"—leaking water during the wash cycle—you are wasting heated water and chemicals. We restore your drain valves to factory-new performance, ensuring every milliliter of water you pay for stays in the drum for the full duration of the cycle.
                            </p>
                        </section>

                        <section id="computer-diagnostics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Digital Diagnostics & Error Log Analysis</h2>
                            <p>
                                Modern industrial machines are smart. They record every error, every "unbalance" event, and every cycle anomaly in their internal memory. Most operators ignore these until the machine stops. We perform a "Data Download" on every maintenance visit. We analyze the error logs to find patterns.
                            </p>
                            <p>
                                Is Machine #4 showing a frequent "fill time out" error on Tuesday nights? That's a water pressure issue. Is Machine #7 showing recurrent "unbalance" warnings? That's a load-training issue for your staff. By interpreting the machine's "digital diary," we can solve infrastructure and operational problems that no amount of mechanical fixing can resolve.
                            </p>
                        </section>

                        <section id="staff-training" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Staff Best Practices for Machine Longevity</h2>
                            <p>
                                The best maintenance program in the world cannot overcome poor day-to-day operation. We provide on-site training for your laundry staff, focusing on "Machine-Friendly" habits. This includes teaching them how to balance a load properly, how to avoid "over-stuffing" the drum, and how to identify the early warning signs of mechanical trouble.
                            </p>
                            <p>
                                When your staff understands *why* certain habits damage the machines, they become your first line of defense in equipment maintenance. We turn your operators into "Machine Stewards," significantly reducing the frequency of user-generated damage and downtime.
                            </p>
                        </section>

                        <section id="emergency-spares" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Emergency Spares Kit Strategy</h2>
                            <p>
                                For high-usage sites, we help you build a customized "Emergency Infrastructure." This is a kit of critical components—valves, belts, gaskets, and interlocks—that we store at your site. If a belt snaps at 10 PM on a Friday, your staff or a local on-call mechanic can replace it immediately using the genuine parts already in your inventory.
                            </p>
                            <p>
                                We manage this inventory for you, replacing parts as you use them. This strategy reduces your downtime from days (waiting for parts) to minutes (performing the replacement). It is the ultimate insurance for a high-volume business.
                            </p>
                        </section>

                        <section id="uptime-statistics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">ROI of Professional Maintenance</h2>
                            <p>
                                We track the results of our maintenance programs across hundreds of facilities in India. The data is clear: machines on our professional program last 40% longer and consume 15% less energy than those on a "reactive" maintenance schedule. Furthermore, the total cost of maintenance (including the parts and our labor) is typically 50% lower than the cost of emergency repairs and lost revenue.
                            </p>
                            <p>
                                We provide you with regular "Uptime Reports" that show the direct financial impact of our work. We believe in transparency and data-driven results. Professional maintenance is not an expense; it is your most profitable operational investment.
                            </p>
                        </section>

                        <section id="seasonal-adjustments" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Seasonal Maintenance Adjustments</h2>
                            <p>
                                Environmental conditions in India change significantly with the seasons, and so should your maintenance. In the hot, humid monsoon months, electrical panels need more ventilation, and dryer exhaust systems need more frequent cleaning. In the winter, boiler performance and water intake temperatures need to be audited.
                            </p>
                            <p>
                                We adapt our technical focus to match the season, ensuring your equipment is uniquely prepared for the specific environmental stresses of the NCR region. This "Dynamic Maintenance" logic provides a level of reliability that generic schedules simply cannot match.
                            </p>
                        </section>

                        <section id="noise-pollution" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Noise Pollution & Vibration Damping</h2>
                            <p>
                                A loud laundry is a stressed laundry. Excessive noise is almost always the result of metal-on-metal friction or vibration. Beyond being unpleasant for staff and customers, it is an early warning sign of mechanical fatigue. We specialize in "Acoustic Maintenance"—using sound-damping materials and mechanical fine-tuning to reduce the noise profile of your facility.
                            </p>
                            <p>
                                By quieting your machines, we are actually making them more efficient and durable. A quiet machine is a balanced machine, and a balanced machine is a long-lived machine.
                            </p>
                        </section>

                        <section id="lifecycle-extension" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Machine Lifecycle Extension Blueprint</h2>
                            <p>
                                Our goal is to double the useful life of your equipment. A high-quality industrial washer should last for 20 years, even in a high-usage environment. Most fail within 10 years due to neglected maintenance. We provide a customized "Extension Blueprint" for your facility, identifying when each major component should be overhauled to prevent the machine from reaching its "terminal" failure.
                            </p>
                            <p>
                                We help you manage your assets for the long term, ensuring you maximize every rupee of your capital investment. With Sunshine, you are buying into a 20-year vision of success, not just a repair service.
                            </p>
                        </section>

                        <section id="success-studies" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">High-Usage Success Case Studies</h2>
                            <p>
                                We recently transformed a 24-hour laundromat in South Delhi that was facing a 15% equipment downtime rate. By implementing our Total Uptime program—focused on vibration damping, weekly filter audits, and an on-site spares kit—we reduced their downtime to less than 1%. Their monthly revenue increased by over 2 lakhs, and their staff turnover dropped as the working environment became quieter and more predictable.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Laundromat Maintenance FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Service Reviews</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{r.body}"</p>
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
                                    <BarChart3 size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Uptime Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Analyze your total operational risk and get a 12-month maintenance roadmap.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Uptime Audit <ShieldCheck size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Expert Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/on-site-laundry-equipment-repair-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Emergency Repair</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-chemical-dosing-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Chemical Systems</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/washer-extractor-dryer-servicing-delhi-ncr" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldAlert size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">NCR Servicing</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Maintenance Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Clock size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Technical Line</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Settings size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Support Email</p>
                                            <a href="mailto:service@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all">service@sunshine-laundry.com</a>
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
