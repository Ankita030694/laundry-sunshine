"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, TrendingUp, Settings, Wrench, Activity, BarChart3, ChevronRight, Star, MapPin, Search, ActivitySquare } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "gurgaon-challenge", title: "The Gurgaon Maintenance Challenge" },
    { id: "tds-management", title: "Managing 7000 PPM TDS Water" },
    { id: "descaling-protocols", title: "Descaling & Chemical Balancing" },
    { id: "pm-vs-pdm", title: "Preventative vs. Predictive Upkeep" },
    { id: "response-guarantee", title: "The 4-Hour Response Guarantee" },
    { id: "service-hubs", title: "Service Hubs: Sector 14 to 37" },
    { id: "spare-parts-ecosystem", title: "Spare Parts & Zero-Downtime" },
    { id: "iot-health-monitoring", title: "IoT Machine Health Monitoring" },
    { id: "healthcare-maintenance", title: "Hospital-Grade Sanitization" },
    { id: "hospitality-excellence", title: "5-Star Hospitality Standards" },
    { id: "energy-audits", title: "Energy Efficiency Audits" },
    { id: "amc-roi", title: "AMC Models & Financial ROI" },
    { id: "emergency-breakdown", title: "Emergency Lockdown Protocols" },
    { id: "staff-empowerment", title: "Internal Engineering Workshops" },
    { id: "hspcb-compliance", title: "HSPCB Environmental Compliance" },
    { id: "maintenance-roi", title: "The Million-Rupee Impact" },
    { id: "ai-diagnostics", title: "Future: AI-Driven Diagnostics" },
    { id: "faqs", title: "Maintenance FAQs" },
];

const faqs = [
    {
        question: "Why does laundry equipment fail faster in Gurgaon?",
        answer: "The primary culprit is Gurgaon's groundwater, which often exceeds 4000-7000 PPM TDS. This causes rapid mineral scaling on heating elements and solenoid valves, leading to overheating and mechanical failure if not managed with specialized descaling protocols."
    },
    {
        question: "What is included in a Sunshine industrial AMC in Gurgaon?",
        answer: "Our standard AMC covers 4 mandatory quarterly health checks, unlimited emergency breakdown calls, free lubrication of all bearings, calibration of water/chemical levels, and a 20% discount on all spare parts."
    },
    {
        question: "How fast can your technicians reach Sector 44 or Cyber City?",
        answer: "We maintain a dedicated service hub in Sector 34, allowing us to guarantee a 4-hour on-site response time for all Tier-1 contract customers in central Gurgaon and the Cyber City corporate hub."
    },
    {
        question: "Do you provide maintenance for non-Sunshine laundry brands?",
        answer: "Yes, we offer Multi-Brand Maintenance services for large-scale institutional laundries, provided the equipment passes our initial 'Safety and Integrity Audit'. We stock common spares for most international industrial brands."
    },
    {
        question: "How often should industrial dryer vents be cleaned in Gurgaon?",
        answer: "Due to the high dust levels in Gurgaon, we recommend a thorough vent and lint-screen inspection every week, with a professional deep-clean of the entire exhaust ducting every 3 months to prevent fire hazards."
    },
    {
        question: "Can I monitor my machine's health from my mobile phone?",
        answer: "Yes, if your machines are retrofitted with our 'Cloud-Connect' IoT modules, you can track motor vibrations, cycle counts, and energy consumption in real-time through our secure cloud dashboard."
    },
    {
        question: "What happens if a critical spare part is not in stock?",
        answer: "We maintain a ₹50 Lakh inventory of critical spares in Gurgaon. In the rare event a part is unavailable, we maintain a fleet of 'Standby Machines' that can be deployed to your site to ensure zero operational downtime."
    },
    {
        question: "Is hard-water softeners mandatory for industrial washers in Haryana?",
        answer: "While not legally mandatory, it is technically essential. Operating an industrial machine in Gurgaon without a softener will void most manufacturer warranties due to the extreme mineral scaling risk."
    },
    {
        question: "Does your maintenance include staff training for local crews?",
        answer: "Absolutely. Every AMC visit includes a 30-minute 'Toolbox Talk' with your operators to review correct loading procedures and periodic cleaning tasks that extend the life of the machine."
    },
    {
        question: "How do I book a one-time emergency repair in Gurgaon?",
        answer: "You can call our 24/7 Gurgaon Service Hotline at +91 97111 12950. For non-contract customers, we aim for a same-day visit depending on technician availability."
    }
];

const reviews = [
    {
        name: "Abhinav Singh",
        role: "Maintenance Head, Global Hospital Gurgaon",
        content: "In a medical setting, equipment uptime is literally a matter of life and death. Sunshine's 4-hour response has saved us multiple times during peak pandemic periods. Their technical depth is unmatched.",
        rating: 5
    },
    {
        name: "Priya Malhotra",
        role: "General Manager, Golf Course Rd Hotel",
        content: "The impact of Gurgaon's water on our machines was terrifying until Sunshine took over our AMC. Their descaling protocol has increased our machine efficiency by 30% and improved linen brightness significantly.",
        rating: 5
    },
    {
        name: "Sanjay Dutta",
        role: "Owner, Luxury Cleaners Gurugram",
        content: "I've tried multiple local mechanics, but nobody understands electronics like Sunshine. They fixed a PLC issue that three other vendors told me would require a full machine replacement. Honest and expert.",
        rating: 5
    },
    {
        name: "Rishi Kapoor",
        role: "Facility Manager, Cyber City Corporate Hub",
        content: "Managing a centralized laundry for 5000 employees is tough. Sunshine's predictive maintenance alerts us to motor issues before they cause a shutdown. It's the smartest way to run a facility.",
        rating: 5
    },
    {
        name: "Anjali Verma",
        role: "Director, Sohna Industrial Laundry",
        content: "Their spare parts availability is the best in the NCR. While others wait for parts from China or Italy, Sunshine has them ready in their Sector 37 warehouse. Minimal downtime, maximum profit.",
        rating: 5
    }
];

export default function LaundryMaintenanceGurgaon() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundry-equipment-maintenance-gurgaon";
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
                "name": "Laundry Equipment Maintenance Services in Gurgaon | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium laundry equipment maintenance services in Gurgaon. Preventive maintenance, AMC systems, spare parts support, and expert repair for NCR laundry machines.",
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
                        "name": "Maintenance Services Gurgaon",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Laundry Equipment Maintenance Gurgaon: The Preventive Care Roadmap",
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
                "name": "Commercial Laundry Maintenance Gurgaon",
                "description": "Comprehensive maintenance and repair services for industrial laundry equipment in Gurgaon. Specializing in AMC and emergency technical support.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "225"
                },
                "review": reviews.map(review => ({
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": review.name
                    },
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": review.rating.toString()
                    },
                    "reviewBody": review.content
                }))
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
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Laundry Equipment Maintenance Gurgaon" fill className="object-cover" priority />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <ActivitySquare size={16} className="text-brand-orange" /> Precision Upkeep for High-Value Assets
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Laundry Equipment <br /><span className="text-brand-orange italic">Maintenance Gurgaon</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Defeating the mineral-heavy water of the NCR through advanced descaling, predictive IoT monitoring, and a guaranteed 4-hour technical response. The definitive AMC standard for Gurgaon's hospitality and healthcare sectors.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                        >
                            Request Maintenance Audit <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="tel:+919711112950"
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            <Phone size={24} /> +91 97111 12950
                        </a>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[
                    { label: "Maintenance Gurgaon", href: "/laundry-equipment-maintenance-gurgaon" }
                ]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} title="Reliability Roadmap" orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">

                        <section id="gurgaon-challenge" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">The Gurgaon Maintenance Challenge</h2>
                            <p>
                                Gurgaon is a city of rapid growth and harsh environmental realities. For the hospitality and healthcare giants operating here, the challenge of maintaining 5-star linen standards is inextricably linked to the city's difficult infrastructure. In this landscape, <strong>laundry equipment maintenance Gurgaon</strong> is not a routine task—it is a specialized engineering battle against mineral scaling, heat stress, and high-volume demand.
                            </p>
                            <p>
                                Sunshine Equipments has spent two decades refining its maintenance protocols specifically for the Gurugram region. We understand that a machine operating in Sector 44 faces different stress factors than one in a dry-cleaning plant in Old Delhi. Our approach is built on "Localized Reliability," ensuring that your high-value industrial assets are protected against the unique ecological and operational stressors of the National Capital Region.
                            </p>
                        </section>

                        <section id="tds-management" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange italic">Managing 7000 PPM TDS Water</h2>
                            <p>
                                The single greatest threat to laundry equipment in Gurgaon is the groundwater. Recent geological surveys have shown TDS (Total Dissolved Solids) levels frequently exceeding 4030 mg/L, with some industrial pockets reporting levels as high as 7000 mg/L. To put this in perspective, anything above 500 mg/L is considered "Hard."
                            </p>
                            <p>
                                This mineral-heavy water acts as a "Silent Killer." As the water is heated in your washers, these minerals crystallize and settle on heating elements, solenoid valves, and drum seals. This creates a thick layer of "Calcite" that acts as an insulator, forcing your machine to work twice as hard to heat the water and causing electrical components to burn out prematurely. Our maintenance strategy begins with high-precision water testing and the implementation of heavy-duty magnetic and chemical descaling systems.
                            </p>
                        </section>

                        <section id="descaling-protocols" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Descaling & Chemical Balancing</h2>
                            <p>
                                Traditional maintenance often ignores the internal scaling until the machine stops working. Sunshine's <strong>laundry equipment maintenance Gurgaon</strong> protocol includes mandatory quarterly descaling cycles using industrial-grade, non-corrosive acids. We dissolve the mineral build-up inside the pipes and drum, restoring the machine's thermal efficiency to 98% of its factory rating.
                            </p>
                            <p>
                                We also work with your chemical suppliers to adjust your "Wash Formulas." In hard water, detergents lose their effectiveness, leading staff to over-use chemicals, which further damages the machine's seals. We re-calibrate your automated dispensers to handle Gurgaon's water chemistry, ensuring beautiful linen results while protecting the mechanical integrity of the washers.
                            </p>
                        </section>

                        <section id="pm-vs-pdm" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Preventative vs. Predictive Upkeep</h2>
                            <p>
                                Most vendors in the NCR follow "Preventative Maintenance" (changing parts on a schedule). While better than nothing, it's often wasteful or too late. Sunshine is moving Gurgaon's industry towards "Predictive Maintenance (PdM)."
                            </p>
                            <p>
                                Using acoustic sensors and vibration analysis during our quarterly visits, we can hear the "Signature" of a bearing that is starting to fail, often 3 months before it actually seizes. By identifying these issues early, we can schedule repairs during your facility's off-peak hours, avoiding the catastrophic "Mid-Shift Breakdown" that can halt a hotel's entire laundry flow.
                            </p>
                        </section>

                        <section id="response-guarantee" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">The 4-Hour Response Guarantee</h2>
                            <p>
                                In a city like Gurgaon, traffic is a major maintenance bottleneck. We have solved this by decentralizing our service team. We maintain a fleet of "Rapid Response Bikes" and service vans stationed across the city.
                            </p>
                            <p>
                                For our Tier-1 AMC customers, we provide a strictly enforced 4-hour on-site response guarantee. From the moment your call is logged in our central system, a technician is dispatched from the nearest service hub. We understand that every hour your machines are down, your linen replacement costs and guest dissatisfaction scores are going up. We are built for speed.
                            </p>
                        </section>

                        <section id="service-hubs" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Service Hubs: Sector 14 to 37</h2>
                            <p>
                                Our presence in Gurgaon is anchored by our strategic service hubs. Sector 34 and 37 house our heavy technical teams and large-scale workshop facilities. Sector 14 and 18 serve as rapid-dispatch points for the hospitality corridor along MG Road and the Golf Course Road.
                            </p>
                            <p>
                                This localized coverage means our technicians aren't "Coming from Delhi." They are already in your neighborhood. This proximity allows us to handle multiple calls in a single day and maintain a deep understanding of the specific utility challenges (power fluctuations/water quality) in each sector.
                            </p>
                        </section>

                        <section id="spare-parts-ecosystem" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Spare Parts & Zero-Downtime</h2>
                            <p>
                                A technician is only as good as the parts they carry. Sunshine maintains a permanent inventory of ₹50 Lakh worth of critical spares in our Gurgaon warehouse. This includes VFD controllers, heating elements, drain valves, and over 500 different types of belts and seals.
                            </p>
                            <p>
                                Our "Zero-Downtime" philosophy means we don't wait for parts to be shipped from another city. If your machine needs it, we have it. For critical healthcare facilities, we even maintain "Shadow Inventory" on-site—a locked cabinet of frequently used spares that your own engineering team can access under our guidance for immediate fixes.
                            </p>
                        </section>

                        <section id="iot-health-monitoring" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">IoT Machine Health Monitoring</h2>
                            <p>
                                The future of <strong>laundry equipment maintenance Gurgaon</strong> is digital. Our new range of industrial machines comes with integrated IoT modules that report health data directly to our service cloud. If a motor's operating temperature exceeds its safe threshold, our team is alerted automatically.
                            </p>
                            <p>
                                This "Constant Connectivity" allows us to perform remote diagnostics. In many cases, our technicians can "Login" to your machine's PLC and fix software glitches or re-calibrate sensors without even coming to the site. This is the ultimate peak of maintenance technology, and we are the first to bring it to the Gurgaon market.
                            </p>
                        </section>

                        <section id="healthcare-maintenance" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Hospital-Grade Sanitization</h2>
                            <p>
                                For hospitals, maintenance is a compliance issue. Failure to reach the required sanitization temperature (up to 90°C) is a risk to patient safety. Our healthcare maintenance packages include regular "Temperature Validation Audits."
                            </p>
                            <p>
                                We use calibrated thermal probes to certify that your machines are reaching and maintaining the temperatures required by the NABH and international hygiene standards. We provide these digital reports as part of your maintenance file, ensuring you are always "Audit-Ready."
                            </p>
                        </section>

                        <section id="hospitality-excellence" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-orange">5-Star Hospitality Standards</h2>
                            <p>
                                Luxury hotels in Gurgaon compete on the "Tactile Quality" of their linen. A rough towel or a graying bedsheet is a failure of the laundry system. Maintenance in hospitality is about more than just "Keeping it Running"—it is about maintaining the specific mechanical action that keeps linen soft and white.
                            </p>
                            <p>
                                We inspect and calibrate the "G-Force" of your washers every 3 months. If the high-speed extraction is even slightly off, it leaves too much moisture in the linen, forcing the dryers to run longer, which "Cooks" the fabric and makes it brittle. Proper maintenance extends your linen life by up to 25%, saving millions in annual replacement costs.
                            </p>
                        </section>

                        <section id="energy-audits" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Energy Efficiency Audits</h2>
                            <p>
                                In 2025, energy costs are a major factor in Gurgaon's commercial bottom line. Every AMC visit from Sunshine includes a "Thermal Efficiency Audit." We check for steam leaks, uninsulated pipes, and clogged lint screens in dryers.
                            </p>
                            <p>
                                A single steam leak the size of a pinhole can cost you ₹5,000 a month in wasted fuel. Our technicians are trained to spot these "Invisible Costs" and fix them immediately. We help our clients reduce their utility bills by optimizing the performance of their existing machines, often finding savings that more than pay for the AMC itself.
                            </p>
                        </section>

                        <section id="amc-roi" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">AMC Models & Financial ROI</h2>
                            <p>
                                We offer three tiers of Annual Maintenance Contracts (AMC) designed to fit the budget and risk-profile of every Gurgaon business. Our "Comprehensive AMC" is the gold standard, covering all parts and labor, providing a fixed, predictable maintenance budget for the entire year.
                            </p>
                            <p>
                                Financially, an AMC is a hedge against inflation and uncertainty. By locking in your maintenance costs and ensuring peak performance, you protect your capital investment and stabilize your operational margins. In the volatile business environment of the NCR, an AMC is an essential financial tool.
                            </p>
                        </section>

                        <section id="emergency-breakdown" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-blue">Emergency Breakdown Protocols</h2>
                            <p>
                                When the worst happens at 2:00 AM on a Friday, Sunshine is ready. We operate a 24/7 dedicated emergency hotline for our contract customers. Our night-shift technical team is trained to handle critical failure scenarios over the phone or deploy to the site if necessary.
                            </p>
                            <p>
                                We also maintain a fleet of "Standby Replacement Machines." If a critical washer or ironer suffered a major failure that requires factory-level repair, we can swap it out with a temporary unit to keep your business running while the repair is performed. This is our "Zero-Lockdown Guarantee."
                            </p>
                        </section>

                        <section id="staff-empowerment" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Internal Engineering Workshops</h2>
                            <p>
                                We don't want to just be your service providers; we want to be your educators. We provide quarterly "Engineering Empowerment Workshops" for your internal facility management team.
                            </p>
                            <p>
                                We teach them how to perform the "Daily 10"—ten minutes of morning checks that prevent 80% of common failures. By empowering your staff to handle basic maintenance, we free our senior technicians to focus on the deep systemic optimizations that truly drive value for your facility.
                            </p>
                        </section>

                        <section id="hspcb-compliance" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">HSPCB Environmental Compliance</h2>
                            <p>
                                The Haryana State Pollution Control Board (HSPCB) is increasingly strict about wastewater discharge from laundries. Our maintenance includes the upkeep of your "Internal Water Recovery" and "Grease Trap" systems.
                            </p>
                            <p>
                                We ensure that your machines are discharging water that meets local environmental norms. We also help you maintain the digital flow-meters required by the HSPCB for monitoring groundwater usage. In Gurgaon, being "Green" is no longer a choice—it's a legal and operational necessity.
                            </p>
                        </section>

                        <section id="maintenance-roi" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">The Million-Rupee Impact</h2>
                            <p>
                                Over a 10-year period, the difference between "Expert Maintenance" and "Local Repair" is measured in millions. A well-maintained Sunshine machine in Gurgaon will produce better linen, use less energy, and have a 15-year lifespan. A poorly maintained machine will be scrapped in 6 years.
                            </p>
                            <p>
                                Our clients see the "Million-Rupee Impact" in their Capex deferral (not having to buy new machines) and their utility savings. In the high-competition world of Gurgaon hospitality, this operational efficiency is a hidden profit margin.
                            </p>
                        </section>

                        <section id="ai-diagnostics" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Future: AI-Driven Diagnostics</h2>
                            <p>
                                As we look toward the future, Sunshine is pioneering "AI-Driven Diagnostics" in the Gurugram market. We are training machine learning models on thousands of hours of machine data to recognize the "Digital Fingerprint" of every potential failure.
                            </p>
                            <p>
                                Soon, our system will call you before you even know there is a problem. "Machine #4 in the basement will require a bearing change in the next 14 days based on its torque profile." This is the future of <strong>laundry equipment maintenance Gurgaon</strong>, and Sunshine is leading the charge.
                            </p>
                        </section>

                        <section id="faqs">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Maintenance FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Service Insights Gurgaon</h2>
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
                    </article>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Wrench size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight text-red-400 uppercase text-[10px] tracking-[0.2em]">Live Operation Audit</h3>
                                <p className="text-white mb-6 relative z-10 font-bold text-2xl">
                                    Is your laundry losing money?
                                </p>
                                <button
                                    onClick={openContactModal}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Free Energy Audit <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Expertise</h3>
                                <nav className="space-y-4">
                                    <Link href="/laundry-machine-suppliers-delhi-ncr" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Supplier Network</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/commercial-laundry-equipment-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Gurgaon Projects</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Medical Upkeep</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Direct Procurement</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">24/7 Priority Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Corporate Email</p>
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
