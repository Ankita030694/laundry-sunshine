"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, MapPin, Clock, Hammer, Shield, HardHat } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Premium On-Site Repair Experts" },
    { id: "gurgaon-logistics", title: "Local Gurgaon Response Logistics" },
    { id: "common-washer-fixes", title: "Critical Commercial Washer Repairs" },
    { id: "dryer-technical-fixes", title: "Specialized Dryer Service Logic" },
    { id: "oem-parts-gurgaon", title: "Genuine OEM Parts Inventory" },
    { id: "certified-technicians", title: "Certified Industrial Technicians" },
    { id: "emergency-protocols", title: "4-Hour Emergency Protocols" },
    { id: "preventative-audit", title: "Routine Performance Auditing" },
    { id: "vfd-motor-repair", title: "VFD & Industrial Motor Repair" },
    { id: "electrical-safety", title: "Electrical Safety & Compliance" },
    { id: "plumbing-drainage", title: "Industrial Plumbing & Drainage" },
    { id: "chemical-system-repair", title: "Automatic Dosing System Repair" },
    { id: "bearing-seal-replacement", title: "Bearing & Seal Replacement Science" },
    { id: "heater-element-fixes", title: "Heating Element & Thermostat Care" },
    { id: "control-board-fixes", title: "Digital Control Board Diagnostics" },
    { id: "belt-pulley-service", title: "Belt & Pulley Alignment Logic" },
    { id: "laundromat-contract-repairs", title: "Laundromat Maintenance Contracts" },
    { id: "hospitality-priority", title: "Priority Support for Hospitality" },
    { id: "onsite-repair-benefits", title: "The Logic of On-Site Servicing" },
    { id: "faqs", title: "Gurgaon Repair FAQ Section" },
];

const faqs = [
    {
        question: "How fast can you reach my laundry facility in Gurgaon?",
        answer: "We offer a 4-hour emergency response time for all commercial facilities within the Gurgaon municipal limits. Our mobile technicians are strategically stationed across Cyber City, Sohna Road, and Manesar to ensure rapid arrival."
    },
    {
        question: "Do you repair all major commercial brands like Electrolux and Speed Queen?",
        answer: "Yes, our technicians are certified to repair all leading industrial brands including Electrolux Professional, Huebsch, Speed Queen, IFB Industrial, Dexter, and Milnor. We maintain a large inventory of OEM parts for these specific models."
    },
    {
        question: "Is it better to repair on-site or send the machine to a workshop?",
        answer: "Industrial machines are heavy and integrated into your facility's infrastructure. Sending them to a workshop is logistically difficult and adds unnecessary downtime. 99 percent of industrial repairs can be completed more efficiently on-site by a mobile specialist."
    },
    {
        question: "Do you provide a warranty on your repair services?",
        answer: "Yes, we provide a 90-day warranty on all service labor and a standard manufacturer's warranty on all genuine OEM parts we install. We stand behind the quality and durability of our technical work."
    },
    {
        question: "What are the most common signs that my washer needs an urgent repair?",
        answer: "Look for unusual vibration during extraction, slow drainage, water leaking from the door or rear, and any electrical 'ghost' errors on the display. Catching these early can prevent a catastrophic bearing or motor failure."
    },
    {
        question: "Can you fix industrial dryers that are not heating?",
        answer: "Absolutely. Heating failure is usually caused by a faulty ignition module, a clogged burner, or a tripped high-limit thermostat. Our technicians can diagnose and fix most heating issues within a single visit."
    },
    {
        question: "Do you handle emergency repairs on weekends or holidays?",
        answer: "Yes, Sunshine Equipments provides 365-day support for our contract clients. We understand that laundry is a 24/7 business and that a weekend breakdown can be devastating to your revenue."
    },
    {
        question: "How do you charge for on-site repair services in Gurgaon?",
        answer: "We provide a transparent pricing model with a fixed visit fee that covers the initial diagnosis. For the actual repair, we provide a detailed quote before any work begins, ensuring there are no surprises."
    },
    {
        question: "Can you help with the installation of new equipment as well?",
        answer: "Yes, we providing end-to-end installation services, including the necessary electrical and plumbing modifications required for industrial-grade equipment. We ensure the machine is perfectly leveled and calibrated from day one."
    },
    {
        question: "Why should I choose Sunshine for my Gurgaon facility?",
        answer: "With over 20 years of experience in the Delhi NCR market, we bring a level of technical depth and logistical reliability that local general mechanics simply cannot match. We are the professionals for the professionals."
    }
];

const reviews = [
    {
        name: "Sandeep Yadav",
        role: "Owner, Gurgaon Express Laundry",
        body: "Sunshine has been our go-to for repairs for five years. Their response time in Gurgaon is incredible—they usually have a technician at our site within three hours. They really know their industrial machines.",
        rating: 5
    },
    {
        name: "Meenakshi Seth",
        role: "Facility Manager, Cyber Park Hotel",
        body: "Top-tier professionalism. Their technicians arrived with all the necessary tools and diagnosed our main washer's bearing issue in 30 minutes. The on-site repair saved us days of downtime.",
        rating: 5
    },
    {
        name: "Rajesh Mishra",
        role: "Director, Urban Wash Manesar",
        body: "Finding reliable industrial repair in Gurgaon used to be a challenge. Sunshine's team is certified, knowledgeable, and always uses OEM parts. The quality of their work is evident in our machines' uptime.",
        rating: 5
    },
    {
        name: "Anjali Bansal",
        role: "Property Manager, DLF Phase 5",
        body: "Very impressed with their electrical safety audit. They found a loose connection in our boiler panel that could have caused a fire. Their attention to detail is what sets them apart.",
        rating: 5
    },
    {
        name: "Vikram Malhotra",
        role: "Laundromat Consultant",
        body: "I always recommend Sunshine to my Gurgaon clients. Their mobile workshops are fully equipped, and their 'first-time fix' rate is the highest in the industry. A truly dependable partner.",
        rating: 5
    },
    {
        name: "Suresh Prabhu",
        role: "Technical Head, Global Hospital",
        body: "Hospital laundry cannot afford any downtime. Sunshine's 4-hour response protocol has been a lifesaver for our operations. Their technical expertise with large-scale barrier washers is excellent.",
        rating: 5
    },
    {
        name: "Rahul Gandhi",
        role: "Owner, SpinClean Sohna Road",
        body: "Great experience with their VFD repair service. They saved us from having to replace an expensive motor by identifying a simple controller fault. Honest, expert service.",
        rating: 5
    }
];

export default function OnSiteRepairGurgaonPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/on-site-laundry-equipment-repair-gurgaon";
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
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg"
                }
            },
            {
                "@type": "WebPage",
                "@id": websiteUrl,
                "url": websiteUrl,
                "name": "On-Site Laundry Equipment Repair Gurgaon | 4-Hour Response",
                "description": "Professional on-site repair for commercial laundry machines in Gurgaon. 4-hour emergency response, certified technicians, and genuine OEM parts for all major brands.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "primaryImageOfPage": { "@type": "ImageObject", "url": "https://sunshine-laundry.com/repair-hero.jpg" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Gurgaon On-Site Repair", "item": websiteUrl }
                ]
            },
            {
                "@type": "Service",
                "serviceType": "Commercial Laundry Equipment Repair",
                "provider": { "@id": "https://sunshine-laundry.com/#organization" },
                "areaServed": { "@type": "City", "name": "Gurgaon" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Repair Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Washer Repair" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Dryer Service" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventative Maintenance Audit" } }
                    ]
                }
            },
            {
                "@type": "Product",
                "@id": websiteUrl + "#product",
                "name": "Professional Industrial Repair Services",
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
        <main className="min-h-screen bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 grayscale">
                    <Image src="/hero-bg.jpg" alt="On-Site Repair Gurgaon" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Clock size={16} className="text-white animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">4-Hour Emergency Response</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        On-Site Industrial Repair <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Gurgaon's Elite Service Team</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-4xl mx-auto font-medium">
                        Zero logistics, zero delay. We bring the workshop to your facility in Gurgaon with certified technicians, OEM parts, and a fixed-price diagnosis model.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Book Your Rapid Response <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Gurgaon On-Site Repair", href: "/on-site-laundry-equipment-repair-gurgaon" }]} />
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
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">On-Site Industrial Repair: Eliminating Downtime in Gurgaon</h2>
                            <p>
                                In the fast-paced commercial environment of Gurgaon, equipment downtime is a luxury your business simply cannot afford. Whether you are running a high-turnover laundromat, a luxury hotel laundry, or a medical facility's sanitization department, a broken machine represents a rupture in your service logic. At Sunshine Equipments, we have designed our "On-Site Infrastructure" specifically to tackle this challenge. We don't just fix machines; we restore your operational rhythm.
                            </p>
                            <p>
                                Our on-site repair logic is built on speed, transparency, and technical depth. We understand that the logistical nightmare of moving a 200kg industrial washer to a workshop often costs more than the repair itself. By bringing our certified technicians and a complete inventory of OEM parts directly to your facility in Gurgaon, we eliminate the need for equipment transport and minimize your downtime to hours, not days. We are the tactical support unit for Gurgaon's laundry infrastructure.
                            </p>
                            <p>
                                The complexity of modern industrial laundry equipment requires a level of expertise that goes far beyond general mechanical skill. These machines integrate high-voltage electrical systems, sensitive digital controllers, and high-torque mechanical drives. Our technicians are specialized professionals who undergo continuous training on the latest global standards. We use advanced diagnostic software to communicate with your machine's controller, identifying the root cause of failures with scientific precision.
                            </p>
                            <p>
                                Moreover, our presence in Gurgaon is deep. We have been a part of the city's growth for two decades, serving facilities from Manesar to Cyber City. This local knowledge allowed us to navigate the unique challenges of the region—from power fluctuations and water quality issues to the logistical demands of Gurgaon's traffic. When you call Sunshine, you are calling a neighbor with the technical resources of a national leader.
                            </p>
                            <p>
                                This comprehensive guide details our on-site repair capabilities in Gurgaon. We explore the technical nuances of industrial washer and dryer fixes, the logic of our 4-hour response protocol, the importance of genuine OEM parts, and the safety standards that define our work. Whether you are facing a critical emergency or planning a preventative overhaul, these insights will show you why Sunshine is the premier choice for Gurgaon's laundry professionals.
                            </p>
                        </section>

                        <section id="gurgaon-logistics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Local Gurgaon Response Logistics</h2>
                            <p>
                                Logistics is the "invisible" half of a successful repair service. In a city as large and congested as Gurgaon, getting a technician to your site is as much about planning as it is about driving. We maintain a decentralized fleet of mobile workshops strategically positioned across the city. This allows us to assign the technician nearest to you, bypassing the worst of the traffic bottlenecks. Our centralized dispatch center uses real-time GPS tracking to manage our response times with military precision.
                            </p>
                            <p>
                                We know Gurgaon's industrial and commercial zones intimately. Whether you are located in a high-rise hotel on MG Road, a manufacturing unit in IMT Manesar, or a residential complex in Sector 56, we know the access protocols and the infrastructure. This local expertise translates directly into faster arrival times and more efficient service. We are not just a service provider; we are a part of the Gurgaon business ecosystem.
                            </p>
                        </section>

                        <section id="common-washer-fixes" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Critical Commercial Washer Repairs</h2>
                            <p>
                                A commercial washer failure usually falls into one of three categories: mechanical, electrical, or hydraulic. Mechanical failures, such as bearing wear or shock absorber fatigue, are the most common in high-usage machines. These often manifest as loud noises or excessive vibration during the high-speed extraction phase. Our on-site repair involves a complete mechanical audit. We use specialized pullers and alignment tools to replace bearings and seals right on your facility floor, ensuring the drum is perfectly balanced.
                            </p>
                            <p>
                                Hydraulic issues include failing drain valves, leaking water inlets, and clogged pressure sensors. A drain valve that doesn't close perfectly can waste thousands of liters of water and ruin your wash quality. We carry a full range of heavy-duty industrial valves as standard stock in our mobile workshops. We also perform "pressure calibration" to ensure your machine is filling and draining exactly as the manufacturer intended, preserving your utility budget.
                            </p>
                        </section>

                        <section id="dryer-technical-fixes" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Specialized Dryer Service Logic</h2>
                            <p>
                                Industrial dryers are high-energy machines that require precise airflow and temperature management. The most common technical failure is the "No Heat" condition, usually caused by a faulty burner assembly, a failing ignition module, or a tripped high-limit thermostat. Our technicians are experts in industrial combustion systems. We perform gas-pressure testing and burner calibration on-site, ensuring your dryer reaches its target temperature quickly and safely.
                            </p>
                            <p>
                                Airflow is the other critical pillar of dryer performance. A restricted exhaust or a failing blower motor will cause the dryer to run longer and hotter, significantly increasing your energy bill and the fire risk. Our servicing includes a deep-clean of the internal blower assemblies and a check of the external ductwork. We ensure that the moisture-laden air is being removed from the drum at the maximum design rate, cutting your drying times by up to 20 percent.
                            </p>
                        </section>

                        <section id="oem-parts-gurgaon" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Genuine OEM Parts Inventory</h2>
                            <p>
                                Using "generic" or "compatible" parts in an industrial machine is a recipe for disaster. Industrial equipment is designed with specific tolerances and material specifications. A cheap belt or a non-standard seal might save you 500 rupees today, but it will likely cause a 10,000 rupee failure tomorrow. At Sunshine, we use only genuine OEM (Original Equipment Manufacturer) parts. These are the exact components that the machine was designed to use, ensuring total compatibility and longevity.
                            </p>
                            <p>
                                We maintain a massive parts warehouse in the NCR region, which feeds our mobile workshops. This allows us to achieve a "first-time fix" rate that is unmatched in Gurgaon. We stock everything from specialized VFDs and motors to the smallest thermostats and door gaskets. When our technician says they can fix it today, they mean it. We don't believe in "waiting for parts" while your revenue is leaking.
                            </p>
                        </section>

                        <section id="certified-technicians" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Certified Industrial Technicians</h2>
                            <p>
                                An industrial laundry machine is not a large domestic washer. It is a piece of high-torque, high-voltage industrial machinery. Repairing it requires a different level of certification and skill. Our staff are not "general handymen"; they are certified industrial technicians. They undergo rigorous training directly from the manufacturers (Electrolux, Speed Queen, etc.) to understand the unique engineering of every brand.
                            </p>
                            <p>
                                This training includes advanced electronics, frequency inverter (VFD) programming, and industrial plumbing. They are equipped with industrial-grade diagnostic tools, including thermal cameras, insulation testers, and high-frequency vibrometers. This ensures that the repair is done with scientific precision, not guesswork. When you choose Sunshine, you are choosing the elite tier of technical support.
                            </p>
                        </section>

                        <section id="emergency-protocols" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">4-Hour Emergency Protocols</h2>
                            <p>
                                When your main washer extractor fails at 9 AM on a busy Tuesday, you don't need a service visit "next week." You need it now. Our 4-Hour Emergency Protocol is the gold standard for high-volume facilities in Gurgaon. From the moment you place the call, our dispatch system flags it as a priority. The technician closest to your location is alerted and provided with your machine's asset history and the reported symptoms.
                            </p>
                            <p>
                                During the 4-hour window, we ensure that a technician arrives with the likely required parts. Our goal is to have the machine back in production before your afternoon shift begins. This protocol is available 365 days a year for our contract clients, providing a level of business continuity that is unique in the Indian market. We are your insurance against catastrophe.
                            </p>
                        </section>

                        <section id="preventative-audit" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Routine Performance Auditing</h2>
                            <p>
                                The best repair is the one that never needs to happen. Our On-Site Repair service includes an optional Performance Audit. We don't just wait for things to break; we look for the "early warning signs" of trouble. This includes checking for minor leaks, monitoring motor heat patterns, and analyzing error logs. By catching a slightly frayed belt or a becoming-noisy bearing today, we save you from a major breakdown tomorrow.
                            </p>
                            <p>
                                We provide a detailed "Health Report" after every visit. This report categorizes issues into "Urgent," "Recommended," and "Monitor," giving you a clear roadmap for your maintenance budget. This data-driven approach allowed you to transition from "Crisis Management" to "Strategic Asset Management."
                            </p>
                        </section>

                        <section id="vfd-motor-repair" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">VFD & Industrial Motor Repair</h2>
                            <p>
                                The motor is the heart of your washer, and the Variable Frequency Drive (VFD) is the brain that controls its speed and torque. In industrial environments, VFDs are often subject to heat stress and electrical noise. We specialize in the diagnosis and repair of internal motor components and VFD controllers. We can often repair a failing VFD on-site by replacing specific capacitors or fans, saving you the 50,000 rupee cost of a brand new unit.
                            </p>
                            <p>
                                We also perform "soft-start" calibration. If your machine is starting too harshly, it puts unnecessary stress on the belts and bearings. By fine-tuning the VFD parameters, we provide a smoother operation that extends the life of the entire mechanical drive train. This level of technical "fine-tuning" is a core part of our service.
                            </p>
                        </section>

                        <section id="electrical-safety" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Electrical Safety & Compliance</h2>
                            <p>
                                Laundry machines are operated in wet, humid environments and use high-voltage power. This is a high-risk combination. Our repair service always includes an electrical safety check. we verify that the machine is properly grounded, that the circuit breakers are sized correctly, and that all door interlocks are functioning perfectly.
                            </p>
                            <p>
                                We use industrial insulation testers to ensure there is no "leakage" current that could pose a shock hazard. This compliance is essential for meeting your facility's internal safety standards and for insurance purposes. A machine that is fixed by Sunshine is a machine that is safe to operate.
                            </p>
                        </section>

                        <section id="plumbing-drainage" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Industrial Plumbing & Drainage</h2>
                            <p>
                                Industrial machines require high-flow water inlets and massive drain capacities. A common cause of poor wash quality or machine errors is actually an infrastructure issue, not a machine fault. Our technicians are trained in industrial plumbing. We check your facility's water pressure and drain flow rates to ensure they meet the machine's requirements.
                            </p>
                            <p>
                                If your drainage is slow, it causes the machine to sit in dirty water longer, extending the cycle time and increasing wear. We can diagnose and fix these plumbing bottlenecks on-site, ensuring your laundry operation runs as smoothly as the day it was installed.
                            </p>
                        </section>

                        <section id="chemical-system-repair" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Automatic Dosing System Repair</h2>
                            <p>
                                Most modern commercial washers use automated chemical dosing pumps. If these pumps fail or are incorrectly calibrated, your laundry quality will drop and you will waste money on chemicals. We provide technical support for all major dosing systems. We clean the tubes, replace the diaphragm seals, and recalibrate the dosing volumes to match your wash programs.
                            </p>
                            <p>
                                Precision chemistry is the key to both cleanliness and textile longevity. By ensuring your dosing system is perfectly integrated with your machine's controller, we provide the best possible wash results while minimizing your chemical spend.
                            </p>
                        </section>

                        <section id="bearing-seal-replacement" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Bearing & Seal Replacement Science</h2>
                            <p>
                                Replacing bearings in an industrial washer-extractor is a major operation. It requires specialized heavy-lift equipment to remove the drum and precision presses to install the new bearings. At Sunshine, we have mastered the art of "In-Facility Bearing Replacement." We bring the portable hydraulic presses and the technical skill to perform this rebuild right at your site in Gurgaon.
                            </p>
                            <p>
                                We don't just replace the bearings; we replace the water seals and the shaft sleeve as well. This "Full Restoration" ensures that no water can reach the new bearings, preventing a repeat failure. It is an engineering solution that adds 10 years to the life of your machine.
                            </p>
                        </section>

                        <section id="heater-element-fixes" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Heating Element & Thermostat Care</h2>
                            <p>
                                Electric-heated machines rely on heavy-duty immersion heaters. In hard-water areas like parts of Gurgaon, these heaters can become coated in scale, which reduces their efficiency and eventually causes them to burn out. We replace elements and perform "de-scaling" to restore your machine's heating performance.
                            </p>
                            <p>
                                We also verify the accuracy of the temperature sensors (RTDs). If a machine "thinks" the water is 60 degrees but it is actually only 40, your sanitization will fail. Our technicians use calibrated digital thermometers to verify every machine's heat profile.
                            </p>
                        </section>

                        <section id="control-board-fixes" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Digital Control Board Diagnostics</h2>
                            <p>
                                The digital control board is the brain of the machine. It manages the cycles, the payment interface, and the safety interlocks. When these boards fail, it often manifests as erratic behavior or a "dead" display. We provide expert board-level diagnostics. We can often repair a board by replacing a failed relay or a power-supply capacitor, saving you from the high cost of a total board replacement.
                            </p>
                            <p>
                                We also handle firmware updates. These updates from the manufacturer can often fix "software bugs" and improve the energy efficiency of the machine's operation. We ensure your digital infrastructure is as stable as your mechanical one.
                            </p>
                        </section>

                        <section id="belt-pulley-service" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Belt & Pulley Alignment Logic</h2>
                            <p>
                                The drive belt transmits all the motor's power to the drum. If it is too loose, it slips and melts; if it is too tight, it destroys the motor bearings. We use laser-alignment tools and sonic tension meters to ensure your belts and pulleys are perfectly positioned. This small technical detail can add years to the life of your motor and reduce the frequency of belt replacements.
                            </p>
                            <p>
                                We also check for pulley wear. High-torque industrial use can actually wear down the "V" of the pulley, leading to slippage even with a new belt. We diagnose and fix these subtle mechanical issues that general mechanics often miss.
                            </p>
                        </section>

                        <section id="laundromat-contract-repairs" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Laundromat Maintenance Contracts</h2>
                            <p>
                                For laundromat owners in Gurgaon, we offer comprehensive Maintenance Service Agreements (MSAs). These contracts provide you with fixed-cost servicing, priority emergency response, and a discount on all OEM parts. It takes the "guesswork" out of your maintenance budget and ensures your machines are always operating at their peak.
                            </p>
                            <p>
                                Our MSA clients receive monthly "Asset Health" reports, allowing them to plan for capital upgrades with total confidence. It is the peace of mind that comes with having an elite technical team on call 24/7.
                            </p>
                        </section>

                        <section id="hospitality-priority" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">Priority Support for Hospitality</h2>
                            <p>
                                Gurgaon's luxury hotels and service apartments require a different level of service. Breakdowns happen at the worst possible times—usually in the middle of a massive guest turnover. Our "Hospitality Priority" protocol ensures that hotel laundry managers have a direct line to our lead Gurgaon technician. We treat a hotel breakdown with the same urgency as a medical emergency.
                            </p>
                        </section>

                        <section id="onsite-repair-benefits" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">The Logic of On-Site Servicing</h2>
                            <p>
                                Why choose on-site repair? Beyond the cost savings of eliminating transport, it allow you to see exactly what is being done to your machines. You can talk to the technician, understand the failure, and see the genuine parts being installed. This transparency builds trust and ensures you are getting the quality of service you pay for. At Sunshine, every repair is an opportunity to strengthen our partnership with your business.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tighter">Gurgaon Repair FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Gurgaon Service Reviews</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{r.body}"</p>
                                        <p className="mt-6 font-bold text-gray-900 flex items-center gap-2">
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
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Hammer size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">On-Site Dispatch</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Need an expert at your site today? Request our rapid response team in Gurgaon.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Call Dispatch Center <TrendingUp size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Expert Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/industrial-washer-dryer-replacement-parts" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#FF6600] transition-colors">Replacement Parts</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-chemical-dosing-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#FF6600] transition-colors">Dosing Systems</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/washer-extractor-dryer-servicing-delhi-ncr" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Settings size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#FF6600] transition-colors">NCR Servicing</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-gray-900 mb-4 uppercase text-[10px] tracking-[0.2em]">Gurgaon Dispatch Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <MapPin size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Service Area</p>
                                            <p className="text-sm font-bold text-gray-800 tracking-tight">Gurgaon, Manesar, Sohna</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Repair Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-[#FF6600] tracking-tight">+91 97111 12950</a>
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
