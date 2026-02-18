"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, AlertCircle, Building2, Workflow, Recycle, HardHat, Gauge, Settings, Hammer, Wrench, ShieldAlert, Cpu, Box, Truck, BarChart3 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Laundry Equipment Spare Parts Supplier: The Foundation of Industrial Integrity" },
    { id: "genuine-vs-aftermarket", title: "The Criticality of Genuine Parts: Performance vs. Aftermarket Risks" },
    { id: "parts-ecosystem", title: "Comprehensive Parts Ecosystem: From Motors to Micro-Sensors" },
    { id: "washer-spares", title: "Washing Machine Components: Bearings, Seals, and High-Flow Valves" },
    { id: "dryer-ironer-spares", title: "Drying and Ironing Spares: Belts, Burners, and Thermal Elements" },
    { id: "electronic-controls", title: "Electronic Integrity: PLCs, Inverters, and Interface Modules" },
    { id: "supply-chain", title: "Supply Chain Excellence: Nationwide Inventory and Rapid Shipping" },
    { id: "cross-brand", title: "Technical Synergy: Cross-Brand Compatibility and Specifications" },
    { id: "parts-kits", title: "Strategic Inventory: Customized Breakdown and Maintenance Kits" },
    { id: "tech-identification", title: "Identification Mastery: Using Schematics for Precision Ordering" },
    { id: "quality-assurance", title: "Quality Assurance: Testing and Warranty on Industrial Spares" },
    { id: "inventory-mgmt", title: "Inventory Management: Reducing Lead Times and Capital Lock-in" },
    { id: "logistics-network", title: "Distribution Network: Leveraging Regional Hubs Across India" },
    { id: "ordering-process", title: "Strategic Procurement: Professional Ordering for Institutions" },
    { id: "faqs", title: "Laundry Spare Parts Frequently Asked Questions" },
];

const faqs = [
    {
        question: "Why should I only use genuine spare parts for my laundry machines?",
        answer: "Genuine parts are engineered to the exact tolerances of the original machine. Aftermarket parts often use inferior materials and can cause secondary damage—for example, a semi-compatible belt can put excessive stress on a motor shaft, leading to a much more expensive repair. Genuine parts maintain your machine's efficiency, safety, and warranty status."
    },
    {
        question: "How do I identify the correct part number for a specific machine?",
        answer: "The best way is to refer to the 'Exploded View' schematics in your machine's technical manual. Every part has a unique code. If you don't have the manual, you can share the machine's model and serial number with our technical team, and they will identify the correct part for you instantly."
    },
    {
        question: "What is your typical delivery time for spare parts across India?",
        answer: "We offer next-day delivery to major metro cities and 2 to 4-day delivery for other regional locations. For urgent 'Machine-Down' situations, we can also arrange for expedited air shipping or same-day pickup from our regional hubs."
    },
    {
        question: "Do you supply parts for international brands like Dexter, Speed Queen, or Primus?",
        answer: "Yes, we maintain a comprehensive inventory of parts that are compatible with major national and international brands. Our technical cross-reference database ensures that the parts we supply meet or exceed the specifications of the original manufacturers."
    },
    {
        question: "Can I return a part if it doesn't fit my machine?",
        answer: "Yes, we provide a 15-day return policy for unused, uninstalled parts in their original packaging. We always recommend confirming the part number with our technicians before ordering to ensure 100% compatibility."
    },
    {
        question: "What are 'Critical Spare Kits'?",
        answer: "These are curated sets of common wear parts (belts, seals, fuses, sensors) specifically selected for your machine model. Having a kit on-site allows your maintenance team to fix 80% of common issues instantly without waiting for a shipment."
    },
    {
        question: "Do you offer warranties on spare parts?",
        answer: "Yes, all our genuine industrial spare parts come with a standard manufacturer's warranty, typically ranging from 3 to 12 months, provided they are installed by a qualified technician according to the standard procedures."
    },
    {
        question: "How do I know if a bearing or seal needs replacement?",
        answer: "Signs of bearing failure include a grinding noise, excessive drum vibration, or visible grease leakage from the back of the machine. A failing tub seal will usually manifest as water dripping from the bearing housing or a 'Grey Sludge' appearing on the back of the drum."
    },
    {
        question: "Is there a minimum order value for spare parts?",
        answer: "No, we support our customers regardless of the order size. Whether you need a single fuse or a complete motor assembly, we provide the same level of professional service and rapid shipping."
    },
    {
        question: "Can Sunshine help with the installation of the spare parts?",
        answer: "Yes, if you're not comfortable performing the repair yourself, we can dispatch a senior engineer from our nearest service center to install the parts and perform a full system health audit for you."
    }
];

export default function SparePartsSupplier() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundry-equipment-spare-parts-supplier";
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
                "name": "Industrial Laundry Spare Parts Supplier | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium industrial laundry spare parts supplier in India. Genuine motors, pumps, belts, and electronics with nationwide rapid delivery and technical support.",
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
                        "name": "Laundry Equipment Spare Parts Supplier",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Industrial Laundry Equipment Spare Parts Supplier: A Technical Guide",
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
                "name": "Genuine Industrial Laundry Equipment Spare Parts",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "Strategic inventory of genuine washer, dryer, and ironer spare parts. Nationwide distribution of motors, VFDs, pumps, and high-performance seals.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "230"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit J" },
                        "datePublished": "2024-01-28",
                        "reviewBody": "Excellent availability of critical parts. Their technical schematics make identification error-free. Highly reliable supply chain.",
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
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <Image src="/hero-bg.jpg" alt="Laundry Equipment Spare Parts Supplier" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        Authentic Industrial <br />
                        <span className="text-brand-orange italic">Laundry Equipment Spare Parts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Your strategic partner for genuine components. Nationwide inventory of motors, valves, electronics, and mechanical spares with rapid Pan-India delivery.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={openContactModal} className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Browse Parts Catalog <Box size={24} />
                        </button>
                        <button onClick={openContactModal} className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3">
                            Check Stock Availability
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Spare Parts Supplier", href: "/laundry-equipment-spare-parts-supplier" }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Laundry Equipment Spare Parts Supplier: The Foundation of Industrial Integrity</h2>
                            <p>
                                In the demanding environment of commercial and industrial laundry, the difference between a high-performing facility and one plagued by constant downtime is often the quality of its spare parts. Industrial laundry machines are incredible feats of engineering, designed to handle massive thermal, mechanical, and chemical stresses 24 hours a day. To maintain this level of performance, every component—from the smallest micro-sensor to the heaviest motor—must meet the exact specifications of the original design.
                            </p>
                            <p>
                                Sunshine Equipment is India's premier supplier of authentic laundry equipment spare parts. We understand that in your business, a missing 5-rupee belt can shut down a 50-lakh rupee machine and disrupt an entire hospital's linen flow. Our mission is to provide you with a frictionless supply chain of genuine, industrial-grade components that guarantee your machinery's integrity, safety, and long-term efficiency.
                            </p>
                            <p>
                                Our comprehensive parts ecosystem covers the full spectrum of modern laundry technology—washer extractors, tumble dryers, flatwork ironers, and finishing equipment. With a nationwide distribution network and regional hubs across India, we ensure that the part you need is never more than a few days away. This guide provides a deep technical overview of our parts inventory, our quality standards, and our strategic approach to inventory management for the industrial sector.
                            </p>
                            <p>
                                Choosing the right parts supplier is a strategic decision. It's about more than just a price list; it's about technical expertise, rapid logistics, and an unwavering commitment to quality. Whether you are maintaining a single machine or managing a fleet of hundreds across multiple cities, Sunshine is your trusted partner for operational continuity and mechanical excellence.
                            </p>
                        </section>

                        <section id="genuine-vs-aftermarket" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Criticality of Genuine Parts: Performance vs. Aftermarket Risks</h2>
                            <p>
                                The temptation to use "Aftermarket" or "Generic" spare parts is a common pitfall in industrial maintenance. While these parts often promise lower upfront costs, they hide significant long-term risks that can devastate your machinery and your bottom line. Industrial machines are built with specific material sciences and tolerances. A genuine part is made from the exact alloy, the exact polymer, and tested to the exact safety standards required for the machine's full-rated capacity.
                            </p>
                            <p>
                                Aftermarket parts frequently fail to meet these standards. For example, a generic drive belt may have a slightly different stretch profile. This causes it to slip during the high-torque acceleration phase of a washer, leading to poor extraction and overheating the motor. Similarly, a non-genuine tub seal might be made from a rubber compound that degrades rapidly when exposed to industrial-strength cleaning chemicals, leading to catastrophic bearing failure. Saving a few hundred rupees on a seal can cost you lakhs in bearing and shaft repairs.
                            </p>
                            <p>
                                Safety is another paramount concern. Genuine electrical components—contactors, fuses, and circuit boards—are designed to trip or fail "Safely" during a power surge. Generic electronics often lack these built-in protection circuits, which can lead to localized fires or the destruction of the machine's entire control system. Furthermore, using non-genuine parts almost always voids the manufacturer's warranty and can compromise your facility's fire and safety insurance coverage.
                            </p>
                            <p>
                                At Sunshine, we only supply <strong>Industrial-Grade Genuine Spares</strong>. Every part in our catalog is validated for its material integrity, its mechanical precision, and its long-term durability. When you install a part from Sunshine, you aren't just fixing a machine; you are restoring its "As-New" performance level. This is the only way to ensure the safety of your staff and the sustained success of your laundry operation in India.
                            </p>
                        </section>

                        <section id="parts-ecosystem" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Comprehensive Parts Ecosystem: From Motors to Micro-Sensors</h2>
                            <p>
                                To serve the diverse needs of the Indian industrial market, a spare parts supplier must maintain a truly comprehensive inventory. At Sunshine, our parts ecosystem covers every functional system of a laundry machine. We don't just stock the "Easy" parts; we provide full support for the complex mechanical and electronic systems that defined modern laundry technology. Our catalog includes over 5,000 unique SKUs, ensuring that we have the right component for almost any situation.
                            </p>
                            <p>
                                Our inventory is organized by machine system: <strong>Drive Systems</strong> (motors, VFDs, pulleys, belts), <strong>Fluid Management</strong> (pumps, drain valves, inlet solenoids, flow sensors), <strong>Thermal Systems</strong> (heating elements, steam traps, burners, thermostats), and <strong>Physical Structure</strong> (bearings, seals, door hinges, shocks). This logical structure allows our technical team to find and dispatch the exact part you need with surgical precision.
                            </p>
                            <p>
                                For facilities running older equipment, our "Legacy Support" program is invaluable. We maintain stocks of parts for machines that have been out of production for years, allowing you to extend the life of your mechanically-sound assets. Where original parts are truly no longer available, we provide engineered "Modernization Kits"—such as new digital controllers that can be retrofitted to older machines—providing a path to continued operation without the cost of a full replacement.
                            </p>
                            <p>
                                We also supply the "Hidden" parts that are often overlooked. This includes specialized lubricants, food-grade greases for ironers, and technical cleaners for electronic boards. We believe that a professional parts supplier should be a "One-Stop Shop" for every technical requirement of a laundry facility. This holistic approach simplifies your procurement process and ensures that every part of your machine is receiving the industrial-standard components it deserves.
                            </p>
                        </section>

                        <section id="washer-spares" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Washing Machine Components: Bearings, Seals, and High-Flow Valves</h2>
                            <p>
                                Industrial washer extractors are the most mechanical-intensive machines in a laundry. They consume the most water, handle the most chemical stress, and experience the highest physical loads during high-speed extraction. Consequently, the maintenance of their internal components is critical. Our inventory of washer spares is designed for <strong>Maximum Durability</strong>, focusing on the high-wear areas that are most likely to fail under heavy usage in India.
                            </p>
                            <p>
                                Bearings and seals are the technical heart of a washer. We supply precision-ground, high-G-rated bearings and specialized "Triple-Lip" seals that create an impenetrable barrier between the wash water and the machine's mechanical drive. These components are designed to handle the intense heat of steam-heating and the high-speed centrifugal forces of a 300G extraction cycle. We also provide full "Bearing Kits" which include the bearings, seals, O-rings, and spacers needed for a professional, total rebuild of the drum support system.
                            </p>
                            <p>
                                Fluid management is another major focus. We supply high-flow drain valves (available in 2-inch and 3-inch sizes) that are engineered to resist the "Lint Clogging" that is so common in hospitality laundry. Our water inlet solenoids are designed for the high-pressure environments of industrial plants and feature durable stainless steel seats. We also stock a wide range of chemical dosing pumps and manifold valves, ensuring your automatic detergent systems are always working at 100 percent capacity.
                            </p>
                            <p>
                                Finally, we provide structural spares like door latches, spring-and-shock-absorber sets for soft-mount machines, and heavy-duty stainless steel paddles ("Lifters") for the internal drum. By maintaining these structural components, you ensure that the machine remains safe and efficient, preventing the "Secondary Damage" that occurs when a machine is allowed to run with worn-out suspension or a faulty door lock.
                            </p>
                        </section>

                        <section id="dryer-ironer-spares" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Drying and Ironing Spares: Belts, Burners, and Thermal Elements</h2>
                            <p>
                                Drying and ironing equipment are thermal-intensive systems. Their primary mission is the efficient transfer of heat to the linen to remove moisture. The spare parts for these machines must be able to withstand constant high temperatures and humidity without degrading. Our catalog for dryers and ironers focuses on <strong>Thermal Efficiency</strong> and <strong>Fire Safety</strong>, providing your facility with the components it needs to process thousands of kilos of linen every day.
                            </p>
                            <p>
                                For tumble dryers, the drive system is critical. We supply high-torque, heat-resistant belts and precision motor pulleys. We also provide the "Drum Rollers"—the heavy-duty wheels that support the weight of the rotating drum. In an industrial dryer, these rollers are a common wear point; if they flat-spot, the machine will vibrate excessively and consume more energy. Our burners and gas ignition modules are tuned for the specific gas qualities found in the Indian market, ensuring clean, efficient combustion and rapid drying times.
                            </p>
                            <p>
                                Flatwork ironers require highly specialized spares. We supply "Ironer Padding" and "Top-Cloths" made from high-temperature Nomex or Polyester, available for all major roll sizes. We also stock the "Guide Ribbons" and "Pressure Belts" that ensure perfectly smooth linen finish. For steam-heated ironers, we provide a complete range of steam traps, rotary joints, and high-pressure gaskets. These parts are vital for preventing steam leaks, which are both dangerous and a major source of energy waste in a laundry plant.
                            </p>
                            <p>
                                Airflow components are the third pillar of dryer maintenance. We supply high-capacity blower fans and lint screen assemblies. If a blower fan is damaged or out of balance, it will not move enough air, causing the dryer to run longer and hotter, which damages your linen and increases the risk of fire. By providing genuine airflow and thermal spares, Sunshine helps you maintain the "Perfect Dry" that your customers expect while keeping your utility bills under control.
                            </p>
                        </section>

                        <section id="electronic-controls" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electronic Integrity: PLCs, Inverters, and Interface Modules</h2>
                            <p>
                                Modern industrial laundry equipment is semi-robotic, controlled by sensitive PLCs (Programmable Logic Controllers) and Variable Frequency Drives (VFDs). These electronic brains are responsible for your machine's efficiency, its safety interlocks, and its precision wash/dry quality. In India, factors like power surges, humidity, and fine dust can put immense stress on these components. Sunshine provides a full range of <strong>Validated Electronic Spares</strong> to keep your machine's brain functioning at full capacity.
                            </p>
                            <p>
                                VFDs (Inverters) are the most critical electronic part of a washer or ironer. They control the speed and direction of the motor, providing the soft-start and high-speed extraction phases. A failing VFD can manifest as a machine that won't spin, trips the circuit breaker, or displays cryptic "Inverter Fault" codes. We supply genuine VFDs that are pre-programmed for your specific machine model, meaning you can "Plug and Play" without needing a specialized software engineer on site.
                            </p>
                            <p>
                                Control boards and Touch-Panels are the interface between your operators and the machine. We supply the latest generation of ruggedized controllers that are resistant to water and chemical exposure. If your machine's screen has become unresponsive or your PLC is losing its program memory, a genuine replacement board is the only reliable fix. We also stock a wide range of electrical contactors, relays, and transformers—the "Heavy Lifting" electrical parts that actually switch the power to your motors and heaters.
                            </p>
                            <p>
                                For facilities looking to join the modern age, we offer <strong>Digital Upgrade Modules</strong>. These allow you to add IoT monitoring and remote diagnostics to your existing machines using the latest electronic interfaces. This turns an older machine into a smart asset that can report its own health data back to our support center. Protecting your machine's electronic integrity is the key to preventing the "Ghost Malfunctions" that can so often disrupt an industrial laundry.
                            </p>
                        </section>

                        <section id="supply-chain" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Supply Chain Excellence: Nationwide Inventory and Rapid Shipping</h2>
                            <p>
                                A spare part is useless if it's sitting in a warehouse 2,000 kilometers away when your machine is down. In India, with its vast geography and diverse logistical challenges, a spare parts supplier must have <strong>Supply Chain Excellence</strong> to be a viable partner for the industrial sector. At Sunshine, we have built a logistical network that is optimized for speed and reliability, ensuring that "Help is Always Close" no matter where your facility is located.
                            </p>
                            <p>
                                Our network is anchored by our Central Distribution Hub in Delhi, which houses our full multi-crore inventory of over 5,000 SKUs. This is supported by regional hubs in Mumbai, Bangalore, Chennai, and Kolkata. By positioning high-demand parts (belts, seals, sensors) closer to our clients, we can offer next-day or even same-day delivery in most major metropolitan areas. For our institutional clients, this "Regional Stocking Model" is a critical part of their disaster recovery and business continuity plans.
                            </p>
                            <p>
                                We utilize a multi-modal shipping strategy. For standard orders, we use professional courier services with real-time tracking. For "Machine-Down" emergencies, we utilize expedited air freight or dedicated surface transport to get the part to your site in the shortest possible time. We also offer <strong>Counter Pickup</strong> at all our regional hubs, allowing your maintenance staff to get a critical part and be back at the machine within hours.
                            </p>
                            <p>
                                Digital transparency is integrated into our supply chain. When you order a part through the Sunshine Customer Portal, you can see its exact location in our network, its estimated delivery time, and the name of the logistical partner handling the shipment. We believe that during a breakdown crisis, clear information is just as valuable as the part itself. Supply chain excellence at Sunshine is about removing the uncertainty from your maintenance process.
                            </p>
                        </section>

                        <section id="cross-brand" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Technical Synergy: Cross-Brand Compatibility and Specifications</h2>
                            <p>
                                Many industrial laundry facilities in India operate a diverse fleet of machines from multiple national and international manufacturers. Managing the spare parts for such a fleet can be a bureaucratic nightmare. Sunshine simplifies this by offering <strong>Technical Synergy</strong>—a cross-brand parts program that provides high-quality components for a wide range of industry standards. Our technical databases allow us to cross-reference parts for major brands including Dexter, Speed Queen, Primus, UniMac, and many others.
                            </p>
                            <p>
                                When we supply a part for a non-Sunshine machine, we don't just find something that "Fits"; we find something that matches the exact technical specification of the original equipment. We analyze the motor wattage, the bearing load rating, the chemical resistance of the seal, and the voltage tolerances of the electronics. This ensures that a Sunshine-supplied part will perform flawlessly in your existing equipment, often providing better durability than the original "Factory Stock."
                            </p>
                            <p>
                                Our "Universal Spares" program focuses on the standard industrial components that are shared across different brands. This includes high-quality drain valves, inlet solenoids, belt profiles (V-belts, Poly-V belts), and standard bearing sizes. By consolidating your parts procurement with Sunshine, you reduce the number of vendors you have to manage, simplify your accounting, and gain one single source of professional technical support for your entire floor.
                            </p>
                            <p>
                                We also assist in <strong>Fleet Harmonization</strong>. If your facility is running three different brands of machines, we can often suggest parts that are compatible across all three, allowing you to reduce your on-site spare parts inventory. This technical synergy is what makes a Sunshine partnership so valuable for complex, multi-brand institutional laundries. We provide the expertise to manage your entire machine lifecycle, regardless of the logo on the front of the machine.
                            </p>
                        </section>

                        <section id="parts-kits" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Strategic Inventory: Customized Breakdown and Maintenance Kits</h2>
                            <p>
                                The most efficient way to handle machinery breakdowns is to have the necessary parts already on your site. Our <strong>Strategic Inventory Program</strong> assists laundry managers in building customized "Breakdown and Maintenance Kits" tailored specifically to their equipment fleet. Instead of a "One-Size-Fits-All" approach, we use data from thousands of service calls across India to identify the most likely components to fail in your specific operational environment.
                            </p>
                            <p>
                                A "First Responder Kit" typically includes the high-wear items that cause 80 percent of common laundry issues—belts, door seals, chemical pumps, fuses, and thermal sensors. These kits are compact, clearly labeled, and come with a "Technical Flashcard" that explains how to identify and replace each component. Having this kit on your shelf turns a three-day breakdown into a 30-minute repair, providing an immediate and massive boost to your facility's uptime.
                            </p>
                            <p>
                                For larger operations, we provide "Deep Maintenance Kits." These include the more complex items needed for scheduled annual overhauls—bearing sets, drum shafts, heater elements, and complete drain valve assemblies. By purchasing these components as a kit, you benefit from a significant cost saving compared to individual part prices and ensure that your maintenance team has everything they need for a successful "Shut-Down" period.
                            </p>
                            <p>
                                Sunshine also manages the <strong>Inventory Replenishment</strong> for you. When your team uses a part from the kit, they simply scan the QR code on the kit box, and a replacement part is automatically ordered and shipped. This ensures that your site is always 100 percent prepared for the next event without needing complex manual inventory management. Strategic inventory is about moving from a "Reactive" to a "Resilient" operational model.
                            </p>
                        </section>

                        <section id="tech-identification" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Identification Mastery: Using Schematics for Precision Ordering</h2>
                            <p>
                                Ordering industrial spare parts can be a technical minefield. A single digit difference in a part number can mean the difference between a successful repair and a major setback. At Sunshine, we prioritize <strong>Identification Mastery</strong>. We empower our clients with the tools and the technical support they need to identify the exact part they require with zero ambiguity. This precision is the foundation of our "First-Time Right" service philosophy.
                            </p>
                            <p>
                                We provide authorized clients with access to our <strong>Digital Schematics Library</strong>. This includes high-resolution "Exploded View" diagrams of every machine in our catalog. These interactive diagrams allow you to click on a mechanical assembly—like a washing drum or a dryer burner—and see exactly how every screw, gasket, and motor component fits together. Each part is clearly numbered and linked to its current price and stock status in our network.
                            </p>
                            <p>
                                If you don't have a part number or a schematic, our "Visual Support" team is here to help. You can simply upload a photo of the failed component or the machine's nameplate through our portal. Our senior engineers, who have intimate knowledge of these machines, will analyze the photo and identify the part for you. This service is invaluable for identifying older or heavily worn parts where labels and markings have faded.
                            </p>
                            <p>
                                We also cross-check every order for "Logical Consistency." If you order a bearing but not the corresponding seal, our system will prompt you to reconsider, as these parts should almost always be replaced as a pair. This technical oversight prevents the frustration of receiving a part only to realize you are missing a minor gasket or bolt required for the installation. Precision ordering at Sunshine is a collaborative effort between our technology and our expert engineers.
                            </p>
                        </section>

                        <section id="quality-assurance" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Quality Assurance: Testing and Warranty on Industrial Spares</h2>
                            <p>
                                Quality is not an accident; it is the result of rigorous testing and industrial standards. Every spare part that leaves a Sunshine warehouse has undergone a <strong>Quality Assurance (QA) Audit</strong>. We don't just trust the factory box; we verify the part's integrity ourselves. This commitment to quality is what allows us to offer some of the strongest warranties on spare parts in the Indian market, providing the ultimate protection for your investment.
                            </p>
                            <p>
                                Mechanical parts are audited for dimensional accuracy using digital calipers and precision gauges. We ensure that every bearing and shaft perfectly matches the original tolerances. For electronic components—like PLCs and VFDs—we utilize "Bench-Testing" stations that simulate real-world machine loads. We verify that every control board responds correctly to inputs and that every inverter provides a clean, stable frequency output. This pre-shipping test resolves issues before they ever reach your site.
                            </p>
                            <p>
                                Every Sunshine genuine spare part comes with a <strong>Performance Warranty</strong>. If a part fails during its warranty period due to a manufacturing defect, we replace it instantly. This warranty is a technical guarantee that the part you are receiving is fit for its purpose in a high-intensity industrial environment. We also track the failure rates of every part in our system; if we see a pattern of issues with a specific component, we work with the manufacturer to resolve the root cause and update our stock.
                            </p>
                            <p>
                                We also maintain full "Batch Traceability." Every part is matched to its production lot and manufacturing date. This is critical for safety and compliance, especially in healthcare environments. If there is ever a manufacturer's recall or a technical update for a specific part, we can identify every client who received a component from that batch and provide a proactive replacement. Quality assurance at Sunshine is a continuous, data-driven process that protects your business at every level.
                            </p>
                        </section>

                        <section id="inventory-mgmt" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Inventory Management: Reducing Lead Times and Capital Lock-in</h2>
                            <p>
                                Managing a spare parts inventory is a balancing act. If you have too little stock, you risk downtime; if you have too much, you lock up valuable capital in parts that may sit on the shelf for years. Sunshine's <strong>Inventory Management Service</strong> helps you find the "Perfect Balance." We use actuarial data and your specific machine usage patterns to build a Lean Inventory strategy that maximizes your uptime while minimizing your financial overhead.
                            </p>
                            <p>
                                We help you categorize your parts into A, B, and C tiers. <strong>Tier A</strong> parts are high-wear, mission-critical items (belts, seals) that should always be on your shelf. <strong>Tier B</strong> parts are major components with moderate fail rates (motors, pumps) that should be available at a regional hub. <strong>Tier C</strong> are high-value, rare-fail items (structural frames, large castings) that are managed centrally. This tiered approach ensures you are prepared for 95 percent of eventualities with a very small on-site footprint.
                            </p>
                            <p>
                                For our largest institutional partners, we offer <strong>Managed Consignment Stock</strong>. We place a multi-lakh inventory of parts at your facility, but the parts remain the property of Sunshine. You only pay for a part when it is actually removed from the cabinet and installed on a machine. This provides you with the ultimate level of part availability—zero lead time—without any upfront capital expenditure. It's the ultimate partnership model for high-volume laundries.
                            </p>
                            <p>
                                We also conduct annual "Inventory Audits." We visit your site, check the condition of your stored parts (ensuring rubber doesn't perish and electronics aren't exposed to moisture), and update your kits for any new equipment you've added. We also help you dispose of legacy parts for machines you no longer own, keeping your maintenance room organized and efficient. Strategic inventory management is a core technical skill that Sunshine brings to your business.
                            </p>
                        </section>

                        <section id="order-procurement" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Strategic Procurement: Professional Ordering for Institutions</h2>
                            <p>
                                Procuring spare parts for a large institution—a hotel chain or a hospital group—requires a professional, transparent process. At Sunshine, we have built a procurement platform that is designed for the modern industrial buyer. We move beyond simple phone orders and provide a <strong>Digital Procurement Ecosystem</strong> that offers full visibility, budget control, and accounting transparency for your engineering and finance departments.
                            </p>
                            <p>
                                Our online portal allows for multi-level user permissions. A site engineer can "Request" a part, which then goes to the facility manager or the finance head for "Approval." Once approved, the order is instantly pushed to our warehouse for picking and shipping. This eliminates the "Paper Trail Lag" that so often delays critical repairs in large organizations. We also provide full "Order History" and "Spend Analytics," helping you track which machines are costing you the most in maintenance and helping you plan your future capital budgets.
                            </p>
                            <p>
                                For our regular clients, we offer <strong>Annual Rate Contracts (ARCs)</strong>. This fixes the price of your spare parts for a full year, protecting you against inflation and price fluctuations. It also simplifies your accounting, as your procurement team knows the price of every belt and seal in advance. We integrate seamlessly with major ERP systems like SAP and Oracle, allowing for automated PO generation and invoice reconciliation.
                            </p>
                            <p>
                                Finally, we provide <strong>Volume Consolidation</strong>. If you are ordering parts for 10 different hotels, we consolidate those into a single shipment at our hub, significantly reducing your logistics costs and simplifying the receiving process at your sites. Strategic procurement is about making the administrative side of maintenance as efficient as the mechanical side. At Sunshine, we provide the industrial-strength business tools to match our industrial-strength spare parts.
                            </p>
                        </section>

                        <section id="faqs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Laundry Spare Parts Frequently Asked Questions</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Customer Reviews Section */}
                        <section className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Institutional Feedback</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Sunshine is our go-to partner for all our laundry spares. Their cross-reference database is incredible; they've identified and supplied parts for our older European machines that we couldn't find anywhere else. Truly expert service."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">AK</span>
                                        General Manager, Mumbai Central Laundry
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"The 'Critical Spares Kit' they built for us has been a lifesaver. Our on-site team can now handle most minor breakdowns in under an hour. The increase in our daily throughput has been significant."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">SL</span>
                                        Chief Engineer, Taj Resorts & Palaces
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Professional shipping and excellent part quality. We appreciate the technical schematics they provide; it makes ordering for our diverse machine fleet very simple and error-free."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">VJ</span>
                                        Procurement Head, Max Healthcare
                                    </p>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Right Column: CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Box size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Spare Parts Inquiry</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Looking for a specific part? Send us your machine model and serial number for an instant quote.
                                </p>
                                <button onClick={openContactModal} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Request Part Quote <ArrowUpRight size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Related Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Hammer size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-equipment-maintenance-services" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/after-sales-support-for-laundry-machines" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldAlert size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Support</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/commercial-laundry-equipment-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Building2 size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Equipment Sales</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Service Excellence</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Truck size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Shipping</p>
                                            <span className="text-sm font-bold text-gray-800 tracking-tight">Pan-India Delivery</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <BarChart3 size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Stock</p>
                                            <span className="text-sm font-bold text-gray-800 tracking-tight">5000+ Genuine SKUs</span>
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
        </main>
    );
}

const ArrowUpRight = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);
